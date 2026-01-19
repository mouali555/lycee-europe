// assets/js/debug/overlay.js
// Debug overlay (logs + Firebase réseau + erreurs + simulate offline)

import { auth, db } from "../services/firebase.js";
import {
  enableNetwork,
  disableNetwork,
  doc,
  getDoc,
  onSnapshotsInSync,
} from "https://www.gstatic.com/firebasejs/10.13.1/firebase-firestore.js";
import { onAuthStateChanged } from "https://www.gstatic.com/firebasejs/10.13.1/firebase-auth.js";

const LS_ENABLED = "xp_debug_overlay";
const LS_SIM_OFFLINE = "xp_debug_sim_offline";

function isEnabled() {
  try {
    const url = new URL(window.location.href);
    if (url.searchParams.get("debug") === "1") return true;
    return localStorage.getItem(LS_ENABLED) === "1";
  } catch {
    return false;
  }
}

function fmtTime(ts = Date.now()) {
  const d = new Date(ts);
  const pad = (n) => String(n).padStart(2, "0");
  return `${pad(d.getHours())}:${pad(d.getMinutes())}:${pad(d.getSeconds())}`;
}

function safeJson(x) {
  try {
    if (x === undefined) return "";
    if (typeof x === "string") return x;
    return JSON.stringify(x);
  } catch {
    return String(x);
  }
}

export function initDebugOverlay() {
  if (!isEnabled()) return null;

  // ===== UI =====
  const root = document.createElement("div");
  root.id = "debugOverlay";
  root.className = "debugOverlay";
  root.setAttribute("aria-hidden", "false");
  root.innerHTML = `
    <div class="dbgTop">
      <div class="dbgTitle">DEBUG • XPCHAT</div>
      <div class="dbgBtns">
        <button class="dbgBtn" data-dbg="copy" type="button">Copier</button>
        <button class="dbgBtn" data-dbg="clear" type="button">Clear</button>
        <button class="dbgBtn" data-dbg="hide" type="button">Hide</button>
      </div>
    </div>

    <div class="dbgGrid">
      <div class="dbgCard">
        <div class="dbgCardTitle">Réseau</div>
        <div class="dbgKVs">
          <div class="dbgKV"><span>navigator.onLine</span><b id="dbgNavOnline">--</b></div>
          <div class="dbgKV"><span>Firestore</span><b id="dbgFsOnline">--</b></div>
          <div class="dbgKV"><span>fromCache</span><b id="dbgFromCache">--</b></div>
          <div class="dbgKV"><span>pendingWrites</span><b id="dbgPending">--</b></div>
          <div class="dbgKV"><span>snapshotsInSync</span><b id="dbgSync">--</b></div>
        </div>

        <div class="dbgActions">
          <button class="dbgBtn dbgBtn--danger" data-dbg="sim" type="button">Simulate offline: OFF</button>
          <button class="dbgBtn" data-dbg="toggle" type="button">Debug toujours ON</button>
        </div>
      </div>

      <div class="dbgCard">
        <div class="dbgCardTitle">Auth</div>
        <div class="dbgKVs">
          <div class="dbgKV"><span>state</span><b id="dbgAuthState">--</b></div>
          <div class="dbgKV"><span>uid</span><b id="dbgAuthUid">--</b></div>
          <div class="dbgKV"><span>name</span><b id="dbgAuthName">--</b></div>
        </div>
      </div>
    </div>

    <div class="dbgCard dbgCard--logs">
      <div class="dbgCardTitle">Logs</div>
      <div id="dbgLogs" class="dbgLogs" aria-label="Logs debug"></div>
    </div>
  `;

  document.body.appendChild(root);

  const $ = (id) => root.querySelector(id);
  const navOnlineEl = $("#dbgNavOnline");
  const fsOnlineEl = $("#dbgFsOnline");
  const fromCacheEl = $("#dbgFromCache");
  const pendingEl = $("#dbgPending");
  const syncEl = $("#dbgSync");
  const authStateEl = $("#dbgAuthState");
  const authUidEl = $("#dbgAuthUid");
  const authNameEl = $("#dbgAuthName");
  const logsEl = $("#dbgLogs");

  const btnCopy = root.querySelector('[data-dbg="copy"]');
  const btnClear = root.querySelector('[data-dbg="clear"]');
  const btnHide = root.querySelector('[data-dbg="hide"]');
  const btnSim = root.querySelector('[data-dbg="sim"]');
  const btnToggle = root.querySelector('[data-dbg="toggle"]');

  // ===== State =====
  const buffer = [];
  const MAX = 220;
  const state = {
    fsMeta: {
      fromCache: null,
      pending: null,
      inSync: null,
      lastPingOnline: null,
    },
    auth: { uid: null, name: null, signedIn: false },
    simOffline: false,
  };

  function push(level, msg, extra) {
    const line = {
      t: Date.now(),
      level,
      msg: String(msg || ""),
      extra: extra === undefined ? "" : safeJson(extra),
    };
    buffer.push(line);
    while (buffer.length > MAX) buffer.shift();
    renderLine(line);
  }

  function renderLine(line) {
    if (!logsEl) return;
    const div = document.createElement("div");
    div.className = `dbgLine dbgLine--${line.level}`;
    div.textContent = `[${fmtTime(line.t)}] ${line.level.toUpperCase()} • ${line.msg}${
      line.extra ? "  " + line.extra : ""
    }`;
    logsEl.appendChild(div);
    logsEl.scrollTop = logsEl.scrollHeight;
  }

  function rerenderAll() {
    if (!logsEl) return;
    logsEl.innerHTML = "";
    buffer.forEach(renderLine);
  }

  function setFsMeta(meta = {}) {
    if (typeof meta.fromCache === "boolean") state.fsMeta.fromCache = meta.fromCache;
    if (typeof meta.hasPendingWrites === "boolean") state.fsMeta.pending = meta.hasPendingWrites;
    updateNetworkUI();
  }

  function setInSync(v) {
    state.fsMeta.inSync = !!v;
    updateNetworkUI();
  }

  function updateNetworkUI() {
    if (navOnlineEl) navOnlineEl.textContent = String(navigator.onLine !== false);

    const fromCache = state.fsMeta.fromCache;
    const pending = state.fsMeta.pending;
    if (fromCacheEl) fromCacheEl.textContent = fromCache === null ? "--" : String(fromCache);
    if (pendingEl) pendingEl.textContent = pending === null ? "--" : String(pending);
    if (syncEl) syncEl.textContent = state.fsMeta.inSync === null ? "--" : String(state.fsMeta.inSync);

    // Online estimation:
    // - If snapshot is fromCache => very likely offline or server not reachable.
    // - Else online.
    const fsOnline = fromCache === null ? "--" : String(!fromCache);
    if (fsOnlineEl) fsOnlineEl.textContent = fsOnline;

    if (btnSim) {
      btnSim.textContent = `Simulate offline: ${state.simOffline ? "ON" : "OFF"}`;
    }
  }

  function updateAuthUI() {
    if (authStateEl) authStateEl.textContent = state.auth.signedIn ? "SIGNED_IN" : "SIGNED_OUT";
    if (authUidEl) authUidEl.textContent = state.auth.uid || "--";
    if (authNameEl) authNameEl.textContent = state.auth.name || "--";
  }

  async function pingFirestore() {
    // Ping léger: lecture d'un doc potentiellement inexistant.
    // Si la lecture vient du cache => offline / no network.
    try {
      const r = await getDoc(doc(db, "_health", "ping"));
      state.fsMeta.lastPingOnline = !r.metadata.fromCache;
      setFsMeta(r.metadata);
    } catch (e) {
      push("error", "FIRESTORE_PING_FAILED", { code: e?.code, message: e?.message });
    }
  }

  async function setSimulateOffline(v) {
    state.simOffline = !!v;
    try {
      if (state.simOffline) {
        await disableNetwork(db);
        push("warn", "SIMULATE_OFFLINE_ON");
      } else {
        await enableNetwork(db);
        push("info", "SIMULATE_OFFLINE_OFF");
      }
      try {
        localStorage.setItem(LS_SIM_OFFLINE, state.simOffline ? "1" : "0");
      } catch {}
    } catch (e) {
      push("error", "SIMULATE_OFFLINE_FAILED", { code: e?.code, message: e?.message });
    }
    updateNetworkUI();
    // Re-ping pour refresh
    await pingFirestore();
  }

  // ===== Buttons =====
  btnHide?.addEventListener("click", () => {
    root.classList.toggle("debugOverlay--hidden");
  });

  btnClear?.addEventListener("click", () => {
    buffer.length = 0;
    rerenderAll();
    push("info", "LOGS_CLEARED");
  });

  btnCopy?.addEventListener("click", async () => {
    try {
      const txt = buffer
        .map((l) => `[${fmtTime(l.t)}] ${l.level.toUpperCase()} • ${l.msg}${l.extra ? " " + l.extra : ""}`)
        .join("\n");
      await navigator.clipboard.writeText(txt);
      push("info", "COPIED_TO_CLIPBOARD");
    } catch {
      push("warn", "COPY_FAILED");
    }
  });

  btnToggle?.addEventListener("click", () => {
    try {
      const v = localStorage.getItem(LS_ENABLED) === "1" ? "0" : "1";
      localStorage.setItem(LS_ENABLED, v);
      push("info", "PERSIST_DEBUG", { enabled: v === "1" });
    } catch {
      push("warn", "PERSIST_DEBUG_FAILED");
    }
  });

  btnSim?.addEventListener("click", () => {
    setSimulateOffline(!state.simOffline);
  });

  // ===== Global hooks =====
  window.addEventListener("error", (ev) => {
    push("error", "WINDOW_ERROR", {
      message: ev?.message,
      file: ev?.filename,
      line: ev?.lineno,
      col: ev?.colno,
    });
  });

  window.addEventListener("unhandledrejection", (ev) => {
    const r = ev?.reason;
    push("error", "UNHANDLED_REJECTION", {
      code: r?.code,
      message: r?.message || String(r),
    });
  });

  // ===== Auth monitor =====
  onAuthStateChanged(auth, (u) => {
    state.auth.signedIn = !!u;
    state.auth.uid = u?.uid || null;
    state.auth.name = u?.displayName || null;
    updateAuthUI();
  });

  // ===== Firestore monitor =====
  try {
    onSnapshotsInSync(db, () => {
      setInSync(true);
      // retombe à false après un moment sans sync
      setTimeout(() => setInSync(false), 1400);
    });
  } catch {
    // ignore
  }

  // Browser network
  const onNet = () => {
    push("info", "BROWSER_NETWORK", { online: navigator.onLine !== false });
    updateNetworkUI();
    pingFirestore();
  };
  window.addEventListener("online", onNet);
  window.addEventListener("offline", onNet);

  // initial
  push("info", "DEBUG_OVERLAY_ENABLED");
  updateNetworkUI();
  updateAuthUI();

  // restore simulate offline
  try {
    state.simOffline = localStorage.getItem(LS_SIM_OFFLINE) === "1";
  } catch {
    state.simOffline = false;
  }
  if (state.simOffline) {
    // fire and forget
    setSimulateOffline(true);
  } else {
    pingFirestore();
  }

  // periodic ping
  setInterval(() => pingFirestore(), 12000);

  // ===== Public API (used by services / main) =====
  window.__XPDBG__ = {
    log: (msg, extra) => push("info", msg, extra),
    warn: (msg, extra) => push("warn", msg, extra),
    error: (msg, extra) => push("error", msg, extra),
    err: (e, ctx = "ERR") =>
      push("error", ctx, { code: e?.code, message: e?.message || String(e) }),
    setFirestoreMeta: (m) => setFsMeta(m),
  };

  return window.__XPDBG__;
}

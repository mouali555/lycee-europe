// js/ui/hud.js

import { lsGet, lsSet } from "../core/storage.js";
import { pad } from "../core/utils.js";

const XP_PER_LEVEL = 25;

function todayStr() {
  const d = new Date();
  return `${d.getFullYear()}-${pad(d.getMonth() + 1)}-${pad(d.getDate())}`;
}

function getLevel(xp) {
  return Math.floor(xp / XP_PER_LEVEL) + 1;
}

export class HUD {
  constructor({
    status,
    level,
    streak,
    xpFill,
    xpText,
    missionText,
    missionClaim,
    missionMeta,
    vaultState,
  }) {
    this.statusEl = status;
    this.levelEl = level;
    this.streakEl = streak;
    this.xpFillEl = xpFill;
    this.xpTextEl = xpText;
    this.missionTextEl = missionText;
    this.missionClaimEl = missionClaim;
    this.missionMetaEl = missionMeta;
    this.vaultStateEl = vaultState;

    this.xp = lsGet("xp", 0);
    this.streak = lsGet("streak", 0);
    this.lastCheckin = lsGet("lastCheckin", "");
    this.missionClaimed = lsGet("missionClaimed", "");
    this.msgToday = lsGet("msgToday", { date: "", count: 0 });
    this.aiUsed = lsGet("aiUsed", "");
  }

  dailyCheckin() {
    const t = todayStr();
    if (this.lastCheckin === t) return;

    const prev = this.lastCheckin;
    this.lastCheckin = t;
    lsSet("lastCheckin", this.lastCheckin);

    if (!prev) {
      this.streak = 1;
    } else {
      const prevDate = new Date(prev + "T00:00:00");
      const curDate = new Date(t + "T00:00:00");
      const diffDays = Math.round((curDate - prevDate) / (1000 * 60 * 60 * 24));
      this.streak = diffDays === 1 ? this.streak + 1 : 1;
    }
    lsSet("streak", this.streak);

    // mini drop quotidien
    this.addXP(3);
  }

  resetMsgTodayIfNeeded() {
    const t = todayStr();
    if (this.msgToday.date !== t) {
      this.msgToday = { date: t, count: 0 };
      lsSet("msgToday", this.msgToday);
    }
  }

  onSentMessage() {
    this.resetMsgTodayIfNeeded();
    this.msgToday.count += 1;
    lsSet("msgToday", this.msgToday);
    this.render();
  }

  onUsedAI() {
    this.aiUsed = todayStr();
    lsSet("aiUsed", this.aiUsed);
    this.render();
  }

  getMissionOfDay() {
    const missions = [
      { id: "m1", text: "Écris 2 messages aujourd’hui", goal: 2, rewardXp: 10 },
      { id: "m2", text: "Utilise @ia une fois", goal: 1, rewardXp: 10 },
      { id: "m3", text: "Aide quelqu’un (réponds à un message)", goal: 1, rewardXp: 10 },
    ];
    const daySeed = Math.floor(Date.now() / (1000 * 60 * 60 * 24));
    return missions[daySeed % missions.length];
  }

  getMissionProgress(m) {
    this.resetMsgTodayIfNeeded();
    const t = todayStr();
    if (m.id === "m1") return this.msgToday.count;
    if (m.id === "m2") return this.aiUsed === t ? 1 : 0;
    if (m.id === "m3") return this.msgToday.count > 0 ? 1 : 0;
    return 0;
  }

  canClaimMission() {
    const m = this.getMissionOfDay();
    return this.getMissionProgress(m) >= m.goal;
  }

  canUnlockVault() {
    return getLevel(this.xp) >= 3;
  }

  addXP(amount) {
    this.xp = Math.max(0, this.xp + (amount || 0));
    lsSet("xp", this.xp);
    this.render();
  }

  claimMission() {
    const t = todayStr();
    if (this.missionClaimed === t) return false;
    if (!this.canClaimMission()) return false;

    const m = this.getMissionOfDay();
    this.missionClaimed = t;
    lsSet("missionClaimed", this.missionClaimed);
    this.addXP(m.rewardXp);
    return true;
  }

  setOnlineState(isOnline) {
    if (this.statusEl) this.statusEl.textContent = isOnline ? "ONLINE" : "OFFLINE";
  }

  render() {
    const lvl = getLevel(this.xp);
    const within = this.xp % XP_PER_LEVEL;

    if (this.levelEl) this.levelEl.textContent = String(lvl);
    if (this.streakEl) this.streakEl.textContent = String(this.streak);
    if (this.xpTextEl) this.xpTextEl.textContent = `${within}/${XP_PER_LEVEL} XP`;
    if (this.xpFillEl)
      this.xpFillEl.style.width = `${Math.round((within / XP_PER_LEVEL) * 100)}%`;

    const m = this.getMissionOfDay();
    const prog = this.getMissionProgress(m);
    if (this.missionTextEl) this.missionTextEl.textContent = `${m.text}  (${prog}/${m.goal})`;

    const claimed = this.missionClaimed === todayStr();
    if (this.missionMetaEl)
      this.missionMetaEl.textContent = claimed
        ? "Récompense : déjà récupérée ✅"
        : `Récompense : +${m.rewardXp} XP`;

    if (this.missionClaimEl) {
      this.missionClaimEl.disabled = claimed || !this.canClaimMission();
      this.missionClaimEl.textContent = claimed ? "DONE" : this.canClaimMission() ? "CLAIM" : "LOCKED";
    }

    if (this.vaultStateEl)
      this.vaultStateEl.textContent = this.canUnlockVault() ? "État : déverrouillé ✅" : "État : verrouillé";
  }
}

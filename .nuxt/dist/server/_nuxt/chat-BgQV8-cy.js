import { ref, watch, nextTick, mergeProps, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderAttr, ssrIncludeBooleanAttr, ssrInterpolate, ssrRenderList, ssrRenderClass } from "vue/server-renderer";
import { publicAssetsURL } from "#internal/nuxt/paths";
import "firebase/app";
import "firebase/firestore";
import "firebase/auth";
import "firebase/storage";
import { _ as _export_sfc } from "../server.mjs";
import "F:/SITE/lycee-europe/lycee-europe/node_modules/ofetch/dist/node.mjs";
import "F:/SITE/lycee-europe/lycee-europe/node_modules/hookable/dist/index.mjs";
import "F:/SITE/lycee-europe/lycee-europe/node_modules/unctx/dist/index.mjs";
import "F:/SITE/lycee-europe/lycee-europe/node_modules/h3/dist/index.mjs";
import "vue-router";
import "F:/SITE/lycee-europe/lycee-europe/node_modules/defu/dist/defu.mjs";
import "F:/SITE/lycee-europe/lycee-europe/node_modules/ufo/dist/index.mjs";
const _imports_0 = publicAssetsURL("/video-galaxie.mp4");
const _sfc_main = {
  __name: "chat",
  __ssrInlineRender: true,
  setup(__props) {
    const isAuthenticated = ref(false);
    const passwordInput = ref("");
    const error = ref("");
    const isAuthenticating = ref(false);
    ref(false);
    ref(null);
    const messages = ref([]);
    const newMessage = ref("");
    const messagesContainer = ref(null);
    ref(Math.random().toString(36).substring(2, 10));
    ref("NEO");
    ref(0);
    watch(messages, async () => {
      await nextTick();
      if (messagesContainer.value) {
        messagesContainer.value.scrollTop = messagesContainer.value.scrollHeight;
      }
      setTimeout(() => {
        if (messagesContainer.value) messagesContainer.value.scrollTop = messagesContainer.value.scrollHeight;
      }, 150);
    }, { deep: true });
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "h-screen overflow-hidden bg-[#03000a] text-gray-200 flex flex-col font-sans selection:bg-violet-500/30 relative" }, _attrs))} data-v-b5c828cf><div class="fixed top-0 left-0 w-full h-screen overflow-hidden bg-[#03000a] z-0 pointer-events-none" data-v-b5c828cf><div class="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-violet-900/30 via-black to-[#020005]" data-v-b5c828cf></div><video class="absolute top-1/2 left-1/2 min-w-full min-h-full w-auto h-auto -translate-x-1/2 -translate-y-1/2 object-cover opacity-60 mix-blend-screen blur-[1px]" muted playsinline autoplay loop${ssrRenderAttr("src", _imports_0)} data-v-b5c828cf></video><div class="absolute inset-0 bg-gradient-to-b from-transparent via-[#03000a]/60 to-[#03000a]" data-v-b5c828cf></div><div class="absolute top-[10%] left-[15%] w-96 h-96 bg-violet-600/20 rounded-full blur-[120px] mix-blend-screen" data-v-b5c828cf></div><div class="absolute bottom-[20%] right-[10%] w-[40rem] h-[40rem] bg-fuchsia-800/10 rounded-full blur-[150px] mix-blend-screen" data-v-b5c828cf></div></div>`);
      if (!isAuthenticated.value) {
        _push(`<div class="flex-1 flex flex-col items-center justify-center p-4 z-10 relative" data-v-b5c828cf><div class="max-w-md w-full bg-white/[0.03] backdrop-blur-2xl border border-white/10 p-10 rounded-[2rem] shadow-[0_8px_32px_0_rgba(0,0,0,0.4)]" data-v-b5c828cf><div class="text-violet-400 text-sm mb-8 text-center font-mono uppercase tracking-[0.2em] flex items-center justify-center gap-3" data-v-b5c828cf><span class="w-2 h-2 rounded-full bg-violet-500 animate-pulse shadow-[0_0_10px_rgba(139,92,246,0.8)]" data-v-b5c828cf></span> Astra.Link_ </div><form class="flex flex-col gap-5 relative" data-v-b5c828cf><input${ssrRenderAttr("value", passwordInput.value)} type="password" autofocus${ssrIncludeBooleanAttr(isAuthenticating.value) ? " disabled" : ""} placeholder="Clé d&#39;accès..." class="w-full bg-black/20 border border-violet-500/20 rounded-xl py-4 px-5 text-xl text-white focus:border-violet-400 focus:bg-white/5 outline-none transition-all disabled:opacity-50 text-center tracking-[0.2em]" data-v-b5c828cf>`);
        if (isAuthenticating.value) {
          _push(`<p class="text-violet-400 text-xs text-center mt-2 absolute -bottom-8 w-full animate-pulse" data-v-b5c828cf>Synchronisation quantique...</p>`);
        } else {
          _push(`<!---->`);
        }
        if (error.value) {
          _push(`<p class="text-red-400 text-xs text-center mt-2 absolute -bottom-8 w-full" data-v-b5c828cf>${ssrInterpolate(error.value)}</p>`);
        } else {
          _push(`<!---->`);
        }
        _push(`</form></div></div>`);
      } else {
        _push(`<div class="flex-1 flex flex-col max-w-5xl w-full mx-auto p-4 md:p-6 z-10 relative h-screen" data-v-b5c828cf><div class="flex-1 flex flex-col bg-white/[0.02] backdrop-blur-xl border border-white/10 rounded-3xl shadow-[0_8px_32px_0_rgba(0,0,0,0.3)] overflow-hidden" data-v-b5c828cf><header class="px-6 py-5 border-b border-white/5 bg-black/20 flex justify-between items-center shrink-0" data-v-b5c828cf><div class="flex items-center gap-4" data-v-b5c828cf><div class="w-3 h-3 rounded-full bg-violet-500 shadow-[0_0_10px_rgba(139,92,246,0.8)] animate-pulse" data-v-b5c828cf></div><div data-v-b5c828cf><h1 class="text-xl font-bold text-white tracking-wide" data-v-b5c828cf>NEXUS<span class="text-violet-500" data-v-b5c828cf>_COMMS</span></h1><p class="text-xs text-violet-300/60 mt-0.5 font-mono" data-v-b5c828cf>Réseau chiffré. <span class="text-violet-400" data-v-b5c828cf>/help</span> pour l&#39;aide.</p></div></div><button class="text-xs font-mono text-violet-300/50 hover:text-red-400 transition-colors uppercase tracking-widest px-3 py-2 rounded-lg hover:bg-white/5" data-v-b5c828cf> Déconnexion </button></header><div class="flex-1 overflow-y-auto overflow-x-hidden flex flex-col gap-6 p-6 custom-scrollbar" data-v-b5c828cf><!--[-->`);
        ssrRenderList(messages.value, (msg) => {
          _push(`<div class="${ssrRenderClass([msg.isMine ? "self-end items-end" : "self-start items-start", "max-w-[80%] flex flex-col group"])}" data-v-b5c828cf><div class="${ssrRenderClass([msg.isAdmin ? "text-fuchsia-400 font-bold" : "text-violet-300/60", "text-[11px] mb-1.5 uppercase tracking-wider px-1 font-mono"])}" data-v-b5c828cf>`);
          if (msg.isAdmin) {
            _push(`<span class="bg-fuchsia-500/20 px-1.5 py-0.5 rounded mr-1 text-[9px] border border-fuchsia-500/30" data-v-b5c828cf>ADMIN</span>`);
          } else {
            _push(`<!---->`);
          }
          _push(` ${ssrInterpolate(msg.author)} <span class="opacity-40 lowercase ml-1" data-v-b5c828cf>${ssrInterpolate(msg.time)}</span></div><div class="${ssrRenderClass([msg.isAdmin ? "bg-gradient-to-br from-fuchsia-900/60 to-violet-900/60 text-fuchsia-50 border border-fuchsia-500/40 shadow-[0_0_15px_rgba(217,70,239,0.2)] rounded-tl-sm" : msg.isMine ? "bg-gradient-to-br from-violet-600 to-indigo-600 text-white shadow-violet-900/20 rounded-tr-sm" : "bg-white/10 text-gray-100 backdrop-blur-md border border-white/5 rounded-tl-sm", "text-sm md:text-base break-words p-4 rounded-2xl shadow-lg leading-relaxed"])}" data-v-b5c828cf>`);
          if (msg.imageUrl && msg.imageUrl.startsWith("https://")) {
            _push(`<img${ssrRenderAttr("src", msg.imageUrl)} class="max-w-sm w-full rounded-xl mb-3 border border-white/10 shadow-md" alt="Média" data-v-b5c828cf>`);
          } else {
            _push(`<!---->`);
          }
          if (msg.text) {
            _push(`<span data-v-b5c828cf>${ssrInterpolate(msg.text)}</span>`);
          } else {
            _push(`<!---->`);
          }
          _push(`</div></div>`);
        });
        _push(`<!--]--></div><form class="p-4 bg-black/20 border-t border-white/5 flex gap-3 shrink-0 items-center" data-v-b5c828cf><button type="button" class="w-11 h-11 flex items-center justify-center rounded-xl bg-white/5 text-violet-300 hover:bg-violet-500/30 hover:text-white transition-all border border-white/5" title="Joindre une image" data-v-b5c828cf><svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" data-v-b5c828cf><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12" data-v-b5c828cf></path></svg></button><input${ssrRenderAttr("value", newMessage.value)} type="text" maxlength="500" placeholder="Écrire un message..." class="flex-1 bg-white/5 border border-white/10 rounded-xl py-3 px-4 text-white focus:border-violet-500 focus:bg-white/10 focus:ring-1 focus:ring-violet-500 outline-none transition-all placeholder-violet-300/30" data-v-b5c828cf><input type="file" accept="image/*" class="hidden" data-v-b5c828cf><button type="submit" class="h-11 px-6 rounded-xl bg-violet-600 hover:bg-violet-500 text-white font-medium transition-all shadow-[0_0_15px_rgba(124,58,237,0.4)] flex items-center gap-2" data-v-b5c828cf><span class="hidden md:inline" data-v-b5c828cf>Envoyer</span><svg class="w-4 h-4 md:hidden" fill="none" stroke="currentColor" viewBox="0 0 24 24" data-v-b5c828cf><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" data-v-b5c828cf></path></svg></button></form></div></div>`);
      }
      _push(`</div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/chat.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const chat = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-b5c828cf"]]);
export {
  chat as default
};
//# sourceMappingURL=chat-BgQV8-cy.js.map

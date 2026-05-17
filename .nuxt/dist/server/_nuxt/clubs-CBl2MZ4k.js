import { _ as __nuxt_component_0 } from "./nuxt-link-1Im-A91f.js";
import { mergeProps, withCtx, createVNode, createTextVNode, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderAttr, ssrRenderComponent } from "vue/server-renderer";
import { _ as _imports_0 } from "./virtual_public-BMn_yp1v.js";
import { _ as _export_sfc } from "../server.mjs";
import "F:/SITE/lycee-europe/lycee-europe/node_modules/ufo/dist/index.mjs";
import "F:/SITE/lycee-europe/lycee-europe/node_modules/defu/dist/defu.mjs";
import "#internal/nuxt/paths";
import "F:/SITE/lycee-europe/lycee-europe/node_modules/ofetch/dist/node.mjs";
import "F:/SITE/lycee-europe/lycee-europe/node_modules/hookable/dist/index.mjs";
import "F:/SITE/lycee-europe/lycee-europe/node_modules/unctx/dist/index.mjs";
import "F:/SITE/lycee-europe/lycee-europe/node_modules/h3/dist/index.mjs";
import "vue-router";
const _sfc_main = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  const _component_NuxtLink = __nuxt_component_0;
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "min-h-screen bg-slate-950 text-white p-8 md:p-16 relative overflow-hidden selection:bg-blue-500" }, _attrs))}><div class="fixed top-0 left-0 w-full h-screen overflow-hidden bg-slate-950 z-0 pointer-events-none"><div class="absolute inset-0 bg-gradient-to-tr from-blue-900/30 via-black to-black"></div><video class="absolute top-1/2 left-1/2 min-w-full min-h-full w-auto h-auto -translate-x-1/2 -translate-y-1/2 object-cover opacity-40 mix-blend-screen blur-[2px]" muted playsinline autoplay loop${ssrRenderAttr("src", _imports_0)}></video><div class="absolute inset-0 bg-gradient-to-b from-transparent via-blue-950/40 to-black"></div></div><div class="relative z-10 max-w-6xl mx-auto">`);
  _push(ssrRenderComponent(_component_NuxtLink, {
    to: "/",
    class: "inline-flex items-center text-blue-400 hover:text-blue-300 mb-8 group transition-colors"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<span class="mr-2 group-hover:-translate-x-1 transition-transform"${_scopeId}>←</span> Retour au portail `);
      } else {
        return [
          createVNode("span", { class: "mr-2 group-hover:-translate-x-1 transition-transform" }, "←"),
          createTextVNode(" Retour au portail ")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`<h1 class="text-5xl md:text-7xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-white to-blue-400">Vie Lycéenne</h1><p class="text-xl text-gray-400 mb-16 max-w-2xl">L&#39;engagement et l&#39;épanouissement personnel au cœur de l&#39;établissement.</p><div class="space-y-8"><div class="bg-blue-950/30 border border-blue-900/50 p-8 rounded-2xl hover:border-blue-500/50 transition-all duration-500 relative overflow-hidden group"><div class="absolute inset-0 bg-gradient-to-r from-blue-500/0 via-blue-500/10 to-blue-500/0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div><h2 class="text-3xl font-bold text-white mb-4 flex items-center gap-3"><span class="text-4xl">🏛️</span> Maison Des Lycéens (MDL) </h2><p class="text-gray-300 leading-relaxed"> La MDL est une association gérée directement par les élèves. Elle anime la vie culturelle, artistique et sportive de l&#39;établissement. Elle permet de financer les clubs, le foyer, les sorties et les événements festifs du lycée de l&#39;Europe. </p></div><div class="bg-blue-950/30 border border-blue-900/50 p-8 rounded-2xl hover:border-blue-500/50 transition-all duration-500 relative overflow-hidden group"><div class="absolute inset-0 bg-gradient-to-r from-blue-500/0 via-blue-500/10 to-blue-500/0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div><h2 class="text-3xl font-bold text-white mb-4 flex items-center gap-3"><span class="text-4xl">🗣️</span> Conseil des Délégués (CVL) </h2><p class="text-gray-300 leading-relaxed"> Le CVL est l&#39;instance où les lycéens sont associés aux décisions de l&#39;établissement. Aménagement des espaces de détente, actions solidaires, santé, environnement... C&#39;est ici que votre voix porte pour améliorer le quotidien de tous. </p></div><div class="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8"><div class="bg-black/40 border border-gray-800 p-6 rounded-xl hover:border-blue-500/50 hover:bg-blue-900/20 transition-all duration-300 hover:-translate-y-1"><div class="text-3xl mb-3">🏃‍♂️</div><h3 class="text-xl font-bold mb-2 text-gray-200">Association Sportive (UNSS)</h3><p class="text-sm text-gray-400">Tournois inter-lycées, entraînements le midi et le mercredi après-midi avec les professeurs d&#39;EPS.</p></div><div class="bg-black/40 border border-gray-800 p-6 rounded-xl hover:border-blue-500/50 hover:bg-blue-900/20 transition-all duration-300 hover:-translate-y-1"><div class="text-3xl mb-3">🎸</div><h3 class="text-xl font-bold mb-2 text-gray-200">Clubs Art &amp; Musique</h3><p class="text-sm text-gray-400">Accès à des salles équipées, organisation de concerts et de représentations théâtrales au sein du lycée.</p></div><div class="bg-black/40 border border-gray-800 p-6 rounded-xl hover:border-blue-500/50 hover:bg-blue-900/20 transition-all duration-300 hover:-translate-y-1"><div class="text-3xl mb-3">♟️</div><h3 class="text-xl font-bold mb-2 text-gray-200">Foyer des Lycéens</h3><p class="text-sm text-gray-400">Le lieu de détente par excellence : baby-foot, jeux de société, échecs et espaces pour discuter entre les cours.</p></div></div></div></div></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/clubs.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const clubs = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  clubs as default
};
//# sourceMappingURL=clubs-CBl2MZ4k.js.map

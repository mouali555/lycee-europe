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
  _push(`<h1 class="text-5xl md:text-7xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-white to-blue-400">Nos Filières</h1><p class="text-xl text-gray-400 mb-16 max-w-2xl">Découvrez les parcours d&#39;excellence proposés au Lycée de l&#39;Europe, de la seconde à l&#39;enseignement supérieur.</p><div class="grid grid-cols-1 md:grid-cols-2 gap-8"><div class="bg-blue-950/30 border border-blue-900/50 p-8 rounded-2xl hover:border-blue-500/50 hover:bg-blue-900/40 transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_0_30px_rgba(59,130,246,0.2)]"><div class="text-4xl mb-4">📚</div><h2 class="text-2xl font-bold text-white mb-3">Voie Générale</h2><p class="text-gray-400 mb-4">Un parcours exigeant préparant aux études supérieures longues.</p><ul class="text-sm text-gray-300 space-y-2"><li class="flex items-center gap-2"><span class="w-1.5 h-1.5 bg-blue-500 rounded-full"></span> Spécialité Mathématiques &amp; Physique-Chimie</li><li class="flex items-center gap-2"><span class="w-1.5 h-1.5 bg-blue-500 rounded-full"></span> Spécialité SVT</li><li class="flex items-center gap-2"><span class="w-1.5 h-1.5 bg-blue-500 rounded-full"></span> Spécialité Sciences de l&#39;Ingénieur (SI)</li><li class="flex items-center gap-2"><span class="w-1.5 h-1.5 bg-blue-500 rounded-full"></span> Spécialité NSI (Numérique)</li></ul></div><div class="bg-blue-950/30 border border-blue-900/50 p-8 rounded-2xl hover:border-blue-500/50 hover:bg-blue-900/40 transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_0_30px_rgba(59,130,246,0.2)]"><div class="text-4xl mb-4">🔬</div><h2 class="text-2xl font-bold text-white mb-3">Voie Technologique</h2><p class="text-gray-400 mb-4">L&#39;alliance parfaite entre la théorie et la pratique en laboratoire et atelier.</p><ul class="text-sm text-gray-300 space-y-2"><li class="flex items-center gap-2"><span class="w-1.5 h-1.5 bg-blue-500 rounded-full"></span> Bac STI2D (Industrie et Développement Durable)</li><li class="flex items-center gap-2"><span class="w-1.5 h-1.5 bg-blue-500 rounded-full"></span> Bac STL (Sciences et Technologies de Laboratoire)</li></ul></div><div class="bg-blue-950/30 border border-blue-900/50 p-8 rounded-2xl hover:border-blue-500/50 hover:bg-blue-900/40 transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_0_30px_rgba(59,130,246,0.2)]"><div class="text-4xl mb-4">⚙️</div><h2 class="text-2xl font-bold text-white mb-3">Voie Professionnelle</h2><p class="text-gray-400 mb-4">Pour une insertion rapide dans la vie active ou une poursuite d&#39;études ciblée.</p><ul class="text-sm text-gray-300 space-y-2"><li class="flex items-center gap-2"><span class="w-1.5 h-1.5 bg-blue-500 rounded-full"></span> Métiers du numérique et de la transition énergétique</li><li class="flex items-center gap-2"><span class="w-1.5 h-1.5 bg-blue-500 rounded-full"></span> Bac Pro MELEC (Électricité et environnements connectés)</li><li class="flex items-center gap-2"><span class="w-1.5 h-1.5 bg-blue-500 rounded-full"></span> Bac Pro CIEL (Cyber/Électronique)</li></ul></div><div class="bg-blue-950/30 border border-blue-900/50 p-8 rounded-2xl hover:border-blue-500/50 hover:bg-blue-900/40 transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_0_30px_rgba(59,130,246,0.2)]"><div class="text-4xl mb-4">🚀</div><h2 class="text-2xl font-bold text-white mb-3">Post-Bac &amp; Supérieur</h2><p class="text-gray-400 mb-4">Nos formations d&#39;études supérieures (Statut étudiant ou apprentissage).</p><ul class="text-sm text-gray-300 space-y-2"><li class="flex items-center gap-2"><span class="w-1.5 h-1.5 bg-blue-500 rounded-full"></span> BTS Électrotechnique &amp; BTS CIRA</li><li class="flex items-center gap-2"><span class="w-1.5 h-1.5 bg-blue-500 rounded-full"></span> BTS Cybersécurité, Informatique et réseaux (CIEL)</li><li class="flex items-center gap-2"><span class="w-1.5 h-1.5 bg-blue-500 rounded-full"></span> CPGE (Classes Préparatoires TSI)</li></ul></div></div></div></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/filieres.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const filieres = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  filieres as default
};
//# sourceMappingURL=filieres-CwV9Vo6K.js.map

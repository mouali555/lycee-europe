import { _ as __nuxt_component_0 } from "./nuxt-link-1Im-A91f.js";
import { mergeProps, withCtx, createVNode, createTextVNode, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderAttr, ssrRenderComponent } from "vue/server-renderer";
import { _ as _imports_0 } from "./virtual_public-BMn_yp1v.js";
import "F:/SITE/lycee-europe/lycee-europe/node_modules/ufo/dist/index.mjs";
import "../server.mjs";
import "F:/SITE/lycee-europe/lycee-europe/node_modules/ofetch/dist/node.mjs";
import "#internal/nuxt/paths";
import "F:/SITE/lycee-europe/lycee-europe/node_modules/hookable/dist/index.mjs";
import "F:/SITE/lycee-europe/lycee-europe/node_modules/unctx/dist/index.mjs";
import "F:/SITE/lycee-europe/lycee-europe/node_modules/h3/dist/index.mjs";
import "vue-router";
import "F:/SITE/lycee-europe/lycee-europe/node_modules/defu/dist/defu.mjs";
const _sfc_main = {
  __name: "index",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "relative w-full bg-black" }, _attrs))}><div class="fixed top-0 left-0 w-full h-screen overflow-hidden bg-slate-950 z-0 pointer-events-none"><div class="absolute inset-0 bg-gradient-to-tr from-blue-900/30 via-black to-black"></div><video class="absolute top-1/2 left-1/2 min-w-full min-h-full w-auto h-auto -translate-x-1/2 -translate-y-1/2 object-cover opacity-40 mix-blend-screen blur-[2px]" muted playsinline autoplay loop${ssrRenderAttr("src", _imports_0)}></video><div class="absolute inset-0 bg-gradient-to-b from-transparent via-blue-950/40 to-black"></div></div><div class="relative z-10 flex flex-col w-full text-white"><section class="min-h-screen flex flex-col items-center justify-center px-4 text-center"><div class="observe-me opacity-0 translate-y-12 transition-all duration-1000 ease-out"><h1 class="text-6xl md:text-8xl font-black tracking-tighter mb-6 bg-clip-text text-transparent bg-gradient-to-b from-white to-blue-400"> LYCÉE DE<br>L&#39;EUROPE </h1><p class="text-xl md:text-2xl text-gray-400 max-w-2xl font-light mx-auto"> L&#39;excellence à Dunkerque. Voies générales, technologiques et professionnelles. </p><div class="mt-16 animate-bounce text-blue-500 text-2xl"> ↓ </div></div></section><section class="min-h-screen flex flex-col justify-center px-8 md:px-32 max-w-7xl mx-auto w-full"><div class="max-w-2xl observe-me opacity-0 translate-y-12 transition-all duration-1000 delay-100 ease-out"><h2 class="text-4xl md:text-6xl font-bold mb-6 text-gray-200">Bâtir votre avenir.</h2><p class="text-lg md:text-xl text-gray-400 leading-relaxed font-light"> Du Baccalauréat au BTS, le Lycée Polyvalent de l&#39;Europe vous accompagne vers la réussite. Nous offrons un cadre d&#39;apprentissage stimulant, tourné vers l&#39;innovation, les sciences et les technologies de demain. </p></div></section><section class="min-h-screen flex flex-col justify-center items-end px-8 md:px-32 max-w-7xl mx-auto w-full text-right"><div class="max-w-2xl observe-me opacity-0 translate-y-12 transition-all duration-1000 delay-100 ease-out"><h2 class="text-4xl md:text-6xl font-bold mb-6 text-gray-200">Des filières de pointe.</h2><p class="text-lg md:text-xl text-gray-400 leading-relaxed font-light"> Profitez de nos plateaux techniques de haut niveau. Que ce soit en filière STI2D, STL, ou dans nos sections professionnelles et supérieures, la théorie s&#39;allie toujours à la pratique. </p></div></section><section class="min-h-[60vh] flex flex-col items-center justify-center px-8 w-full bg-gradient-to-t from-black to-transparent mt-20 py-16"><div class="observe-me opacity-0 translate-y-12 transition-all duration-1000 ease-out w-full max-w-6xl"><h3 class="text-3xl md:text-4xl font-bold mb-12 text-center text-blue-400">Portail Lycéen</h3><div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 w-full text-center"><a href="https://maps.app.goo.gl/4QZAs38gWQ5H28Yu9" target="_blank" class="relative overflow-hidden p-8 rounded-2xl bg-blue-950/20 border border-blue-900/40 hover:bg-blue-900/40 hover:border-blue-400 hover:-translate-y-2 hover:shadow-[0_0_30px_rgba(59,130,246,0.3)] transition-all duration-300 group backdrop-blur-sm before:absolute before:inset-0 before:-translate-x-full hover:before:translate-x-full before:transition-transform before:duration-700 before:bg-gradient-to-r before:from-transparent before:via-white/10 before:to-transparent"><div class="text-4xl mb-4 group-hover:scale-110 transition-transform">📍</div><div class="font-semibold text-lg text-gray-200">Localisation</div><div class="text-sm text-gray-500 mt-2">Venir au lycée</div></a>`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/filieres",
        class: "relative overflow-hidden p-8 rounded-2xl bg-blue-950/20 border border-blue-900/40 hover:bg-blue-900/40 hover:border-blue-400 hover:-translate-y-2 hover:shadow-[0_0_30px_rgba(59,130,246,0.3)] transition-all duration-300 group backdrop-blur-sm before:absolute before:inset-0 before:-translate-x-full hover:before:translate-x-full before:transition-transform before:duration-700 before:bg-gradient-to-r before:from-transparent before:via-white/10 before:to-transparent"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="text-4xl mb-4 group-hover:scale-110 transition-transform"${_scopeId}>🎓</div><div class="font-semibold text-lg text-gray-200"${_scopeId}>Filières</div><div class="text-sm text-gray-500 mt-2"${_scopeId}>Découvrir nos voies</div>`);
          } else {
            return [
              createVNode("div", { class: "text-4xl mb-4 group-hover:scale-110 transition-transform" }, "🎓"),
              createVNode("div", { class: "font-semibold text-lg text-gray-200" }, "Filières"),
              createVNode("div", { class: "text-sm text-gray-500 mt-2" }, "Découvrir nos voies")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<a href="https://0590072h.index-education.net/pronote/eleve.html?login=true" target="_blank" class="relative overflow-hidden p-8 rounded-2xl bg-blue-950/20 border border-blue-900/40 hover:bg-blue-900/40 hover:border-blue-400 hover:-translate-y-2 hover:shadow-[0_0_30px_rgba(59,130,246,0.3)] transition-all duration-300 group backdrop-blur-sm before:absolute before:inset-0 before:-translate-x-full hover:before:translate-x-full before:transition-transform before:duration-700 before:bg-gradient-to-r before:from-transparent before:via-white/10 before:to-transparent"><div class="text-4xl mb-4 group-hover:scale-110 transition-transform">📝</div><div class="font-semibold text-lg text-gray-200">Pronote</div><div class="text-sm text-gray-500 mt-2">Espace scolarité</div></a>`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/clubs",
        class: "relative overflow-hidden p-8 rounded-2xl bg-blue-950/20 border border-blue-900/40 hover:bg-blue-900/40 hover:border-blue-400 hover:-translate-y-2 hover:shadow-[0_0_30px_rgba(59,130,246,0.3)] transition-all duration-300 group backdrop-blur-sm before:absolute before:inset-0 before:-translate-x-full hover:before:translate-x-full before:transition-transform before:duration-700 before:bg-gradient-to-r before:from-transparent before:via-white/10 before:to-transparent"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="text-4xl mb-4 group-hover:scale-110 transition-transform"${_scopeId}>🎭</div><div class="font-semibold text-lg text-gray-200"${_scopeId}>Clubs CVL</div><div class="text-sm text-gray-500 mt-2"${_scopeId}>Vie lycéenne</div>`);
          } else {
            return [
              createVNode("div", { class: "text-4xl mb-4 group-hover:scale-110 transition-transform" }, "🎭"),
              createVNode("div", { class: "font-semibold text-lg text-gray-200" }, "Clubs CVL"),
              createVNode("div", { class: "text-sm text-gray-500 mt-2" }, "Vie lycéenne")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></div></section><section class="min-h-[20vh] flex flex-col items-center justify-end pb-12 bg-black"><div class="w-16 h-[1px] bg-blue-900 mb-8"></div><p class="text-sm text-gray-700 font-mono tracking-widest uppercase"> © 2024 LYCÉE DE L&#39;EUROPE - DUNKERQUE`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/chat",
        class: "cursor-default text-gray-700 hover:text-white transition-colors duration-1000"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`.`);
          } else {
            return [
              createTextVNode(".")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</p></section></div></div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
//# sourceMappingURL=index-CVCf0r1C.js.map

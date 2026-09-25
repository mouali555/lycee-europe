import{g as Lt,f as Ja,h as Za,i as tu,F as eu,j as nu,L as dc,k as we,S as ru,l as su,C as iu,r as es,m as fc,n as pc,_ as mc,u as _c,p as gc,q as yc,s as vc,c as nt,v as Ut,a as P,b as Gn,w as cn,x as Zo,y as Fe,z as zr,d as ft,t as H,A as Tc,B as Kn,D as ta,E as ea,G as Ec,H as wc,I as ot,e as Ic,J as Qn,K as Gs,M as Ac,o as tt,N as Rc}from"./reYhd6ZM.js";import{o as Pc,g as Ks,s as bc}from"./BsyFUuUh.js";var na=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var je,ou;(function(){var n;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function t(E,m){function g(){}g.prototype=m.prototype,E.D=m.prototype,E.prototype=new g,E.prototype.constructor=E,E.C=function(v,w,R){for(var _=Array(arguments.length-2),Ht=2;Ht<arguments.length;Ht++)_[Ht-2]=arguments[Ht];return m.prototype[w].apply(v,_)}}function e(){this.blockSize=-1}function r(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.B=Array(this.blockSize),this.o=this.h=0,this.s()}t(r,e),r.prototype.s=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function s(E,m,g){g||(g=0);var v=Array(16);if(typeof m=="string")for(var w=0;16>w;++w)v[w]=m.charCodeAt(g++)|m.charCodeAt(g++)<<8|m.charCodeAt(g++)<<16|m.charCodeAt(g++)<<24;else for(w=0;16>w;++w)v[w]=m[g++]|m[g++]<<8|m[g++]<<16|m[g++]<<24;m=E.g[0],g=E.g[1],w=E.g[2];var R=E.g[3],_=m+(R^g&(w^R))+v[0]+3614090360&4294967295;m=g+(_<<7&4294967295|_>>>25),_=R+(w^m&(g^w))+v[1]+3905402710&4294967295,R=m+(_<<12&4294967295|_>>>20),_=w+(g^R&(m^g))+v[2]+606105819&4294967295,w=R+(_<<17&4294967295|_>>>15),_=g+(m^w&(R^m))+v[3]+3250441966&4294967295,g=w+(_<<22&4294967295|_>>>10),_=m+(R^g&(w^R))+v[4]+4118548399&4294967295,m=g+(_<<7&4294967295|_>>>25),_=R+(w^m&(g^w))+v[5]+1200080426&4294967295,R=m+(_<<12&4294967295|_>>>20),_=w+(g^R&(m^g))+v[6]+2821735955&4294967295,w=R+(_<<17&4294967295|_>>>15),_=g+(m^w&(R^m))+v[7]+4249261313&4294967295,g=w+(_<<22&4294967295|_>>>10),_=m+(R^g&(w^R))+v[8]+1770035416&4294967295,m=g+(_<<7&4294967295|_>>>25),_=R+(w^m&(g^w))+v[9]+2336552879&4294967295,R=m+(_<<12&4294967295|_>>>20),_=w+(g^R&(m^g))+v[10]+4294925233&4294967295,w=R+(_<<17&4294967295|_>>>15),_=g+(m^w&(R^m))+v[11]+2304563134&4294967295,g=w+(_<<22&4294967295|_>>>10),_=m+(R^g&(w^R))+v[12]+1804603682&4294967295,m=g+(_<<7&4294967295|_>>>25),_=R+(w^m&(g^w))+v[13]+4254626195&4294967295,R=m+(_<<12&4294967295|_>>>20),_=w+(g^R&(m^g))+v[14]+2792965006&4294967295,w=R+(_<<17&4294967295|_>>>15),_=g+(m^w&(R^m))+v[15]+1236535329&4294967295,g=w+(_<<22&4294967295|_>>>10),_=m+(w^R&(g^w))+v[1]+4129170786&4294967295,m=g+(_<<5&4294967295|_>>>27),_=R+(g^w&(m^g))+v[6]+3225465664&4294967295,R=m+(_<<9&4294967295|_>>>23),_=w+(m^g&(R^m))+v[11]+643717713&4294967295,w=R+(_<<14&4294967295|_>>>18),_=g+(R^m&(w^R))+v[0]+3921069994&4294967295,g=w+(_<<20&4294967295|_>>>12),_=m+(w^R&(g^w))+v[5]+3593408605&4294967295,m=g+(_<<5&4294967295|_>>>27),_=R+(g^w&(m^g))+v[10]+38016083&4294967295,R=m+(_<<9&4294967295|_>>>23),_=w+(m^g&(R^m))+v[15]+3634488961&4294967295,w=R+(_<<14&4294967295|_>>>18),_=g+(R^m&(w^R))+v[4]+3889429448&4294967295,g=w+(_<<20&4294967295|_>>>12),_=m+(w^R&(g^w))+v[9]+568446438&4294967295,m=g+(_<<5&4294967295|_>>>27),_=R+(g^w&(m^g))+v[14]+3275163606&4294967295,R=m+(_<<9&4294967295|_>>>23),_=w+(m^g&(R^m))+v[3]+4107603335&4294967295,w=R+(_<<14&4294967295|_>>>18),_=g+(R^m&(w^R))+v[8]+1163531501&4294967295,g=w+(_<<20&4294967295|_>>>12),_=m+(w^R&(g^w))+v[13]+2850285829&4294967295,m=g+(_<<5&4294967295|_>>>27),_=R+(g^w&(m^g))+v[2]+4243563512&4294967295,R=m+(_<<9&4294967295|_>>>23),_=w+(m^g&(R^m))+v[7]+1735328473&4294967295,w=R+(_<<14&4294967295|_>>>18),_=g+(R^m&(w^R))+v[12]+2368359562&4294967295,g=w+(_<<20&4294967295|_>>>12),_=m+(g^w^R)+v[5]+4294588738&4294967295,m=g+(_<<4&4294967295|_>>>28),_=R+(m^g^w)+v[8]+2272392833&4294967295,R=m+(_<<11&4294967295|_>>>21),_=w+(R^m^g)+v[11]+1839030562&4294967295,w=R+(_<<16&4294967295|_>>>16),_=g+(w^R^m)+v[14]+4259657740&4294967295,g=w+(_<<23&4294967295|_>>>9),_=m+(g^w^R)+v[1]+2763975236&4294967295,m=g+(_<<4&4294967295|_>>>28),_=R+(m^g^w)+v[4]+1272893353&4294967295,R=m+(_<<11&4294967295|_>>>21),_=w+(R^m^g)+v[7]+4139469664&4294967295,w=R+(_<<16&4294967295|_>>>16),_=g+(w^R^m)+v[10]+3200236656&4294967295,g=w+(_<<23&4294967295|_>>>9),_=m+(g^w^R)+v[13]+681279174&4294967295,m=g+(_<<4&4294967295|_>>>28),_=R+(m^g^w)+v[0]+3936430074&4294967295,R=m+(_<<11&4294967295|_>>>21),_=w+(R^m^g)+v[3]+3572445317&4294967295,w=R+(_<<16&4294967295|_>>>16),_=g+(w^R^m)+v[6]+76029189&4294967295,g=w+(_<<23&4294967295|_>>>9),_=m+(g^w^R)+v[9]+3654602809&4294967295,m=g+(_<<4&4294967295|_>>>28),_=R+(m^g^w)+v[12]+3873151461&4294967295,R=m+(_<<11&4294967295|_>>>21),_=w+(R^m^g)+v[15]+530742520&4294967295,w=R+(_<<16&4294967295|_>>>16),_=g+(w^R^m)+v[2]+3299628645&4294967295,g=w+(_<<23&4294967295|_>>>9),_=m+(w^(g|~R))+v[0]+4096336452&4294967295,m=g+(_<<6&4294967295|_>>>26),_=R+(g^(m|~w))+v[7]+1126891415&4294967295,R=m+(_<<10&4294967295|_>>>22),_=w+(m^(R|~g))+v[14]+2878612391&4294967295,w=R+(_<<15&4294967295|_>>>17),_=g+(R^(w|~m))+v[5]+4237533241&4294967295,g=w+(_<<21&4294967295|_>>>11),_=m+(w^(g|~R))+v[12]+1700485571&4294967295,m=g+(_<<6&4294967295|_>>>26),_=R+(g^(m|~w))+v[3]+2399980690&4294967295,R=m+(_<<10&4294967295|_>>>22),_=w+(m^(R|~g))+v[10]+4293915773&4294967295,w=R+(_<<15&4294967295|_>>>17),_=g+(R^(w|~m))+v[1]+2240044497&4294967295,g=w+(_<<21&4294967295|_>>>11),_=m+(w^(g|~R))+v[8]+1873313359&4294967295,m=g+(_<<6&4294967295|_>>>26),_=R+(g^(m|~w))+v[15]+4264355552&4294967295,R=m+(_<<10&4294967295|_>>>22),_=w+(m^(R|~g))+v[6]+2734768916&4294967295,w=R+(_<<15&4294967295|_>>>17),_=g+(R^(w|~m))+v[13]+1309151649&4294967295,g=w+(_<<21&4294967295|_>>>11),_=m+(w^(g|~R))+v[4]+4149444226&4294967295,m=g+(_<<6&4294967295|_>>>26),_=R+(g^(m|~w))+v[11]+3174756917&4294967295,R=m+(_<<10&4294967295|_>>>22),_=w+(m^(R|~g))+v[2]+718787259&4294967295,w=R+(_<<15&4294967295|_>>>17),_=g+(R^(w|~m))+v[9]+3951481745&4294967295,E.g[0]=E.g[0]+m&4294967295,E.g[1]=E.g[1]+(w+(_<<21&4294967295|_>>>11))&4294967295,E.g[2]=E.g[2]+w&4294967295,E.g[3]=E.g[3]+R&4294967295}r.prototype.u=function(E,m){m===void 0&&(m=E.length);for(var g=m-this.blockSize,v=this.B,w=this.h,R=0;R<m;){if(w==0)for(;R<=g;)s(this,E,R),R+=this.blockSize;if(typeof E=="string"){for(;R<m;)if(v[w++]=E.charCodeAt(R++),w==this.blockSize){s(this,v),w=0;break}}else for(;R<m;)if(v[w++]=E[R++],w==this.blockSize){s(this,v),w=0;break}}this.h=w,this.o+=m},r.prototype.v=function(){var E=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);E[0]=128;for(var m=1;m<E.length-8;++m)E[m]=0;var g=8*this.o;for(m=E.length-8;m<E.length;++m)E[m]=g&255,g/=256;for(this.u(E),E=Array(16),m=g=0;4>m;++m)for(var v=0;32>v;v+=8)E[g++]=this.g[m]>>>v&255;return E};function o(E,m){var g=l;return Object.prototype.hasOwnProperty.call(g,E)?g[E]:g[E]=m(E)}function a(E,m){this.h=m;for(var g=[],v=!0,w=E.length-1;0<=w;w--){var R=E[w]|0;v&&R==m||(g[w]=R,v=!1)}this.g=g}var l={};function h(E){return-128<=E&&128>E?o(E,function(m){return new a([m|0],0>m?-1:0)}):new a([E|0],0>E?-1:0)}function d(E){if(isNaN(E)||!isFinite(E))return y;if(0>E)return S(d(-E));for(var m=[],g=1,v=0;E>=g;v++)m[v]=E/g|0,g*=4294967296;return new a(m,0)}function p(E,m){if(E.length==0)throw Error("number format error: empty string");if(m=m||10,2>m||36<m)throw Error("radix out of range: "+m);if(E.charAt(0)=="-")return S(p(E.substring(1),m));if(0<=E.indexOf("-"))throw Error('number format error: interior "-" character');for(var g=d(Math.pow(m,8)),v=y,w=0;w<E.length;w+=8){var R=Math.min(8,E.length-w),_=parseInt(E.substring(w,w+R),m);8>R?(R=d(Math.pow(m,R)),v=v.j(R).add(d(_))):(v=v.j(g),v=v.add(d(_)))}return v}var y=h(0),A=h(1),C=h(16777216);n=a.prototype,n.m=function(){if(L(this))return-S(this).m();for(var E=0,m=1,g=0;g<this.g.length;g++){var v=this.i(g);E+=(0<=v?v:4294967296+v)*m,m*=4294967296}return E},n.toString=function(E){if(E=E||10,2>E||36<E)throw Error("radix out of range: "+E);if(N(this))return"0";if(L(this))return"-"+S(this).toString(E);for(var m=d(Math.pow(E,6)),g=this,v="";;){var w=K(g,m).g;g=$(g,w.j(m));var R=((0<g.g.length?g.g[0]:g.h)>>>0).toString(E);if(g=w,N(g))return R+v;for(;6>R.length;)R="0"+R;v=R+v}},n.i=function(E){return 0>E?0:E<this.g.length?this.g[E]:this.h};function N(E){if(E.h!=0)return!1;for(var m=0;m<E.g.length;m++)if(E.g[m]!=0)return!1;return!0}function L(E){return E.h==-1}n.l=function(E){return E=$(this,E),L(E)?-1:N(E)?0:1};function S(E){for(var m=E.g.length,g=[],v=0;v<m;v++)g[v]=~E.g[v];return new a(g,~E.h).add(A)}n.abs=function(){return L(this)?S(this):this},n.add=function(E){for(var m=Math.max(this.g.length,E.g.length),g=[],v=0,w=0;w<=m;w++){var R=v+(this.i(w)&65535)+(E.i(w)&65535),_=(R>>>16)+(this.i(w)>>>16)+(E.i(w)>>>16);v=_>>>16,R&=65535,_&=65535,g[w]=_<<16|R}return new a(g,g[g.length-1]&-2147483648?-1:0)};function $(E,m){return E.add(S(m))}n.j=function(E){if(N(this)||N(E))return y;if(L(this))return L(E)?S(this).j(S(E)):S(S(this).j(E));if(L(E))return S(this.j(S(E)));if(0>this.l(C)&&0>E.l(C))return d(this.m()*E.m());for(var m=this.g.length+E.g.length,g=[],v=0;v<2*m;v++)g[v]=0;for(v=0;v<this.g.length;v++)for(var w=0;w<E.g.length;w++){var R=this.i(v)>>>16,_=this.i(v)&65535,Ht=E.i(w)>>>16,de=E.i(w)&65535;g[2*v+2*w]+=_*de,j(g,2*v+2*w),g[2*v+2*w+1]+=R*de,j(g,2*v+2*w+1),g[2*v+2*w+1]+=_*Ht,j(g,2*v+2*w+1),g[2*v+2*w+2]+=R*Ht,j(g,2*v+2*w+2)}for(v=0;v<m;v++)g[v]=g[2*v+1]<<16|g[2*v];for(v=m;v<2*m;v++)g[v]=0;return new a(g,0)};function j(E,m){for(;(E[m]&65535)!=E[m];)E[m+1]+=E[m]>>>16,E[m]&=65535,m++}function F(E,m){this.g=E,this.h=m}function K(E,m){if(N(m))throw Error("division by zero");if(N(E))return new F(y,y);if(L(E))return m=K(S(E),m),new F(S(m.g),S(m.h));if(L(m))return m=K(E,S(m)),new F(S(m.g),m.h);if(30<E.g.length){if(L(E)||L(m))throw Error("slowDivide_ only works with positive integers.");for(var g=A,v=m;0>=v.l(E);)g=pt(g),v=pt(v);var w=J(g,1),R=J(v,1);for(v=J(v,2),g=J(g,2);!N(v);){var _=R.add(v);0>=_.l(E)&&(w=w.add(g),R=_),v=J(v,1),g=J(g,1)}return m=$(E,w.j(m)),new F(w,m)}for(w=y;0<=E.l(m);){for(g=Math.max(1,Math.floor(E.m()/m.m())),v=Math.ceil(Math.log(g)/Math.LN2),v=48>=v?1:Math.pow(2,v-48),R=d(g),_=R.j(m);L(_)||0<_.l(E);)g-=v,R=d(g),_=R.j(m);N(R)&&(R=A),w=w.add(R),E=$(E,_)}return new F(w,E)}n.A=function(E){return K(this,E).h},n.and=function(E){for(var m=Math.max(this.g.length,E.g.length),g=[],v=0;v<m;v++)g[v]=this.i(v)&E.i(v);return new a(g,this.h&E.h)},n.or=function(E){for(var m=Math.max(this.g.length,E.g.length),g=[],v=0;v<m;v++)g[v]=this.i(v)|E.i(v);return new a(g,this.h|E.h)},n.xor=function(E){for(var m=Math.max(this.g.length,E.g.length),g=[],v=0;v<m;v++)g[v]=this.i(v)^E.i(v);return new a(g,this.h^E.h)};function pt(E){for(var m=E.g.length+1,g=[],v=0;v<m;v++)g[v]=E.i(v)<<1|E.i(v-1)>>>31;return new a(g,E.h)}function J(E,m){var g=m>>5;m%=32;for(var v=E.g.length-g,w=[],R=0;R<v;R++)w[R]=0<m?E.i(R+g)>>>m|E.i(R+g+1)<<32-m:E.i(R+g);return new a(w,E.h)}r.prototype.digest=r.prototype.v,r.prototype.reset=r.prototype.s,r.prototype.update=r.prototype.u,ou=r,a.prototype.add=a.prototype.add,a.prototype.multiply=a.prototype.j,a.prototype.modulo=a.prototype.A,a.prototype.compare=a.prototype.l,a.prototype.toNumber=a.prototype.m,a.prototype.toString=a.prototype.toString,a.prototype.getBits=a.prototype.i,a.fromNumber=d,a.fromString=p,je=a}).apply(typeof na<"u"?na:typeof self<"u"?self:typeof window<"u"?window:{});var $r=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var au,Jn,uu,Xr,Zs,lu,cu,hu;(function(){var n,t=typeof Object.defineProperties=="function"?Object.defineProperty:function(i,u,c){return i==Array.prototype||i==Object.prototype||(i[u]=c.value),i};function e(i){i=[typeof globalThis=="object"&&globalThis,i,typeof window=="object"&&window,typeof self=="object"&&self,typeof $r=="object"&&$r];for(var u=0;u<i.length;++u){var c=i[u];if(c&&c.Math==Math)return c}throw Error("Cannot find global object")}var r=e(this);function s(i,u){if(u)t:{var c=r;i=i.split(".");for(var f=0;f<i.length-1;f++){var I=i[f];if(!(I in c))break t;c=c[I]}i=i[i.length-1],f=c[i],u=u(f),u!=f&&u!=null&&t(c,i,{configurable:!0,writable:!0,value:u})}}function o(i,u){i instanceof String&&(i+="");var c=0,f=!1,I={next:function(){if(!f&&c<i.length){var b=c++;return{value:u(b,i[b]),done:!1}}return f=!0,{done:!0,value:void 0}}};return I[Symbol.iterator]=function(){return I},I}s("Array.prototype.values",function(i){return i||function(){return o(this,function(u,c){return c})}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var a=a||{},l=this||self;function h(i){var u=typeof i;return u=u!="object"?u:i?Array.isArray(i)?"array":u:"null",u=="array"||u=="object"&&typeof i.length=="number"}function d(i){var u=typeof i;return u=="object"&&i!=null||u=="function"}function p(i,u,c){return i.call.apply(i.bind,arguments)}function y(i,u,c){if(!i)throw Error();if(2<arguments.length){var f=Array.prototype.slice.call(arguments,2);return function(){var I=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(I,f),i.apply(u,I)}}return function(){return i.apply(u,arguments)}}function A(i,u,c){return A=Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?p:y,A.apply(null,arguments)}function C(i,u){var c=Array.prototype.slice.call(arguments,1);return function(){var f=c.slice();return f.push.apply(f,arguments),i.apply(this,f)}}function N(i,u){function c(){}c.prototype=u.prototype,i.aa=u.prototype,i.prototype=new c,i.prototype.constructor=i,i.Qb=function(f,I,b){for(var x=Array(arguments.length-2),st=2;st<arguments.length;st++)x[st-2]=arguments[st];return u.prototype[I].apply(f,x)}}function L(i){const u=i.length;if(0<u){const c=Array(u);for(let f=0;f<u;f++)c[f]=i[f];return c}return[]}function S(i,u){for(let c=1;c<arguments.length;c++){const f=arguments[c];if(h(f)){const I=i.length||0,b=f.length||0;i.length=I+b;for(let x=0;x<b;x++)i[I+x]=f[x]}else i.push(f)}}class ${constructor(u,c){this.i=u,this.j=c,this.h=0,this.g=null}get(){let u;return 0<this.h?(this.h--,u=this.g,this.g=u.next,u.next=null):u=this.i(),u}}function j(i){return/^[\s\xa0]*$/.test(i)}function F(){var i=l.navigator;return i&&(i=i.userAgent)?i:""}function K(i){return K[" "](i),i}K[" "]=function(){};var pt=F().indexOf("Gecko")!=-1&&!(F().toLowerCase().indexOf("webkit")!=-1&&F().indexOf("Edge")==-1)&&!(F().indexOf("Trident")!=-1||F().indexOf("MSIE")!=-1)&&F().indexOf("Edge")==-1;function J(i,u,c){for(const f in i)u.call(c,i[f],f,i)}function E(i,u){for(const c in i)u.call(void 0,i[c],c,i)}function m(i){const u={};for(const c in i)u[c]=i[c];return u}const g="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function v(i,u){let c,f;for(let I=1;I<arguments.length;I++){f=arguments[I];for(c in f)i[c]=f[c];for(let b=0;b<g.length;b++)c=g[b],Object.prototype.hasOwnProperty.call(f,c)&&(i[c]=f[c])}}function w(i){var u=1;i=i.split(":");const c=[];for(;0<u&&i.length;)c.push(i.shift()),u--;return i.length&&c.push(i.join(":")),c}function R(i){l.setTimeout(()=>{throw i},0)}function _(){var i=ee;let u=null;return i.g&&(u=i.g,i.g=i.g.next,i.g||(i.h=null),u.next=null),u}class Ht{constructor(){this.h=this.g=null}add(u,c){const f=de.get();f.set(u,c),this.h?this.h.next=f:this.g=f,this.h=f}}var de=new $(()=>new Ze,i=>i.reset());class Ze{constructor(){this.next=this.g=this.h=null}set(u,c){this.h=u,this.g=c,this.next=null}reset(){this.next=this.g=this.h=null}}let te,yt=!1,ee=new Ht,oe=()=>{const i=l.Promise.resolve(void 0);te=()=>{i.then(fe)}};var fe=()=>{for(var i;i=_();){try{i.h.call(i.g)}catch(c){R(c)}var u=de;u.j(i),100>u.h&&(u.h++,i.next=u.g,u.g=i)}yt=!1};function jt(){this.s=this.s,this.C=this.C}jt.prototype.s=!1,jt.prototype.ma=function(){this.s||(this.s=!0,this.N())},jt.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function vt(i,u){this.type=i,this.g=this.target=u,this.defaultPrevented=!1}vt.prototype.h=function(){this.defaultPrevented=!0};var Ar=function(){if(!l.addEventListener||!Object.defineProperty)return!1;var i=!1,u=Object.defineProperty({},"passive",{get:function(){i=!0}});try{const c=()=>{};l.addEventListener("test",c,u),l.removeEventListener("test",c,u)}catch{}return i}();function Ne(i,u){if(vt.call(this,i?i.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,i){var c=this.type=i.type,f=i.changedTouches&&i.changedTouches.length?i.changedTouches[0]:null;if(this.target=i.target||i.srcElement,this.g=u,u=i.relatedTarget){if(pt){t:{try{K(u.nodeName);var I=!0;break t}catch{}I=!1}I||(u=null)}}else c=="mouseover"?u=i.fromElement:c=="mouseout"&&(u=i.toElement);this.relatedTarget=u,f?(this.clientX=f.clientX!==void 0?f.clientX:f.pageX,this.clientY=f.clientY!==void 0?f.clientY:f.pageY,this.screenX=f.screenX||0,this.screenY=f.screenY||0):(this.clientX=i.clientX!==void 0?i.clientX:i.pageX,this.clientY=i.clientY!==void 0?i.clientY:i.pageY,this.screenX=i.screenX||0,this.screenY=i.screenY||0),this.button=i.button,this.key=i.key||"",this.ctrlKey=i.ctrlKey,this.altKey=i.altKey,this.shiftKey=i.shiftKey,this.metaKey=i.metaKey,this.pointerId=i.pointerId||0,this.pointerType=typeof i.pointerType=="string"?i.pointerType:Rr[i.pointerType]||"",this.state=i.state,this.i=i,i.defaultPrevented&&Ne.aa.h.call(this)}}N(Ne,vt);var Rr={2:"touch",3:"pen",4:"mouse"};Ne.prototype.h=function(){Ne.aa.h.call(this);var i=this.i;i.preventDefault?i.preventDefault():i.returnValue=!1};var pe="closure_listenable_"+(1e6*Math.random()|0),Pr=0;function Cs(i,u,c,f,I){this.listener=i,this.proxy=null,this.src=u,this.type=c,this.capture=!!f,this.ha=I,this.key=++Pr,this.da=this.fa=!1}function De(i){i.da=!0,i.listener=null,i.proxy=null,i.src=null,i.ha=null}function me(i){this.src=i,this.g={},this.h=0}me.prototype.add=function(i,u,c,f,I){var b=i.toString();i=this.g[b],i||(i=this.g[b]=[],this.h++);var x=Sn(i,u,f,I);return-1<x?(u=i[x],c||(u.fa=!1)):(u=new Cs(u,this.src,b,!!f,I),u.fa=c,i.push(u)),u};function Vn(i,u){var c=u.type;if(c in i.g){var f=i.g[c],I=Array.prototype.indexOf.call(f,u,void 0),b;(b=0<=I)&&Array.prototype.splice.call(f,I,1),b&&(De(u),i.g[c].length==0&&(delete i.g[c],i.h--))}}function Sn(i,u,c,f){for(var I=0;I<i.length;++I){var b=i[I];if(!b.da&&b.listener==u&&b.capture==!!c&&b.ha==f)return I}return-1}var tn="closure_lm_"+(1e6*Math.random()|0),ne={};function br(i,u,c,f,I){if(Array.isArray(u)){for(var b=0;b<u.length;b++)br(i,u[b],c,f,I);return null}return c=Dn(c),i&&i[pe]?i.K(u,c,d(f)?!!f.capture:!1,I):Vs(i,u,c,!1,f,I)}function Vs(i,u,c,f,I,b){if(!u)throw Error("Invalid event type");var x=d(I)?!!I.capture:!!I,st=Nn(i);if(st||(i[tn]=st=new me(i)),c=st.add(u,c,f,x,b),c.proxy)return c;if(f=Ss(),c.proxy=f,f.src=i,f.listener=c,i.addEventListener)Ar||(I=x),I===void 0&&(I=!1),i.addEventListener(u.toString(),f,I);else if(i.attachEvent)i.attachEvent(en(u.toString()),f);else if(i.addListener&&i.removeListener)i.addListener(f);else throw Error("addEventListener and attachEvent are unavailable.");return c}function Ss(){function i(c){return u.call(i.src,i.listener,c)}const u=ks;return i}function _e(i,u,c,f,I){if(Array.isArray(u))for(var b=0;b<u.length;b++)_e(i,u[b],c,f,I);else f=d(f)?!!f.capture:!!f,c=Dn(c),i&&i[pe]?(i=i.i,u=String(u).toString(),u in i.g&&(b=i.g[u],c=Sn(b,c,f,I),-1<c&&(De(b[c]),Array.prototype.splice.call(b,c,1),b.length==0&&(delete i.g[u],i.h--)))):i&&(i=Nn(i))&&(u=i.g[u.toString()],i=-1,u&&(i=Sn(u,c,f,I)),(c=-1<i?u[i]:null)&&kn(c))}function kn(i){if(typeof i!="number"&&i&&!i.da){var u=i.src;if(u&&u[pe])Vn(u.i,i);else{var c=i.type,f=i.proxy;u.removeEventListener?u.removeEventListener(c,f,i.capture):u.detachEvent?u.detachEvent(en(c),f):u.addListener&&u.removeListener&&u.removeListener(f),(c=Nn(u))?(Vn(c,i),c.h==0&&(c.src=null,u[tn]=null)):De(i)}}}function en(i){return i in ne?ne[i]:ne[i]="on"+i}function ks(i,u){if(i.da)i=!0;else{u=new Ne(u,this);var c=i.listener,f=i.ha||i.src;i.fa&&kn(i),i=c.call(f,u)}return i}function Nn(i){return i=i[tn],i instanceof me?i:null}var ge="__closure_events_fn_"+(1e9*Math.random()>>>0);function Dn(i){return typeof i=="function"?i:(i[ge]||(i[ge]=function(u){return i.handleEvent(u)}),i[ge])}function Et(){jt.call(this),this.i=new me(this),this.M=this,this.F=null}N(Et,jt),Et.prototype[pe]=!0,Et.prototype.removeEventListener=function(i,u,c,f){_e(this,i,u,c,f)};function wt(i,u){var c,f=i.F;if(f)for(c=[];f;f=f.F)c.push(f);if(i=i.M,f=u.type||u,typeof u=="string")u=new vt(u,i);else if(u instanceof vt)u.target=u.target||i;else{var I=u;u=new vt(f,i),v(u,I)}if(I=!0,c)for(var b=c.length-1;0<=b;b--){var x=u.g=c[b];I=nn(x,f,!0,u)&&I}if(x=u.g=i,I=nn(x,f,!0,u)&&I,I=nn(x,f,!1,u)&&I,c)for(b=0;b<c.length;b++)x=u.g=c[b],I=nn(x,f,!1,u)&&I}Et.prototype.N=function(){if(Et.aa.N.call(this),this.i){var i=this.i,u;for(u in i.g){for(var c=i.g[u],f=0;f<c.length;f++)De(c[f]);delete i.g[u],i.h--}}this.F=null},Et.prototype.K=function(i,u,c,f){return this.i.add(String(i),u,!1,c,f)},Et.prototype.L=function(i,u,c,f){return this.i.add(String(i),u,!0,c,f)};function nn(i,u,c,f){if(u=i.i.g[String(u)],!u)return!0;u=u.concat();for(var I=!0,b=0;b<u.length;++b){var x=u[b];if(x&&!x.da&&x.capture==c){var st=x.listener,Pt=x.ha||x.src;x.fa&&Vn(i.i,x),I=st.call(Pt,f)!==!1&&I}}return I&&!f.defaultPrevented}function D(i,u,c){if(typeof i=="function")c&&(i=A(i,c));else if(i&&typeof i.handleEvent=="function")i=A(i.handleEvent,i);else throw Error("Invalid listener argument");return 2147483647<Number(u)?-1:l.setTimeout(i,u||0)}function T(i){i.g=D(()=>{i.g=null,i.i&&(i.i=!1,T(i))},i.l);const u=i.h;i.h=null,i.m.apply(null,u)}class Q extends jt{constructor(u,c){super(),this.m=u,this.l=c,this.h=null,this.i=!1,this.g=null}j(u){this.h=arguments,this.g?this.i=!0:T(this)}N(){super.N(),this.g&&(l.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function O(i){jt.call(this),this.h=i,this.g={}}N(O,jt);var rt=[];function Rt(i){J(i.g,function(u,c){this.g.hasOwnProperty(c)&&kn(u)},i),i.g={}}O.prototype.N=function(){O.aa.N.call(this),Rt(this)},O.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var Xt=l.JSON.stringify,Yt=l.JSON.parse,kt=class{stringify(i){return l.JSON.stringify(i,void 0)}parse(i){return l.JSON.parse(i,void 0)}};function lt(){}lt.prototype.h=null;function ye(i){return i.h||(i.h=i.i())}function rn(){}var xe={OPEN:"a",kb:"b",Ja:"c",wb:"d"};function sn(){vt.call(this,"d")}N(sn,vt);function Ns(){vt.call(this,"c")}N(Ns,vt);var Oe={},lo=null;function Cr(){return lo=lo||new Et}Oe.La="serverreachability";function co(i){vt.call(this,Oe.La,i)}N(co,vt);function xn(i){const u=Cr();wt(u,new co(u))}Oe.STAT_EVENT="statevent";function ho(i,u){vt.call(this,Oe.STAT_EVENT,i),this.stat=u}N(ho,vt);function Mt(i){const u=Cr();wt(u,new ho(u,i))}Oe.Ma="timingevent";function fo(i,u){vt.call(this,Oe.Ma,i),this.size=u}N(fo,vt);function On(i,u){if(typeof i!="function")throw Error("Fn must not be null and must be a function");return l.setTimeout(function(){i()},u)}function Ln(){this.g=!0}Ln.prototype.xa=function(){this.g=!1};function zl(i,u,c,f,I,b){i.info(function(){if(i.g)if(b)for(var x="",st=b.split("&"),Pt=0;Pt<st.length;Pt++){var Z=st[Pt].split("=");if(1<Z.length){var Nt=Z[0];Z=Z[1];var Dt=Nt.split("_");x=2<=Dt.length&&Dt[1]=="type"?x+(Nt+"="+Z+"&"):x+(Nt+"=redacted&")}}else x=null;else x=b;return"XMLHTTP REQ ("+f+") [attempt "+I+"]: "+u+`
`+c+`
`+x})}function $l(i,u,c,f,I,b,x){i.info(function(){return"XMLHTTP RESP ("+f+") [ attempt "+I+"]: "+u+`
`+c+`
`+b+" "+x})}function on(i,u,c,f){i.info(function(){return"XMLHTTP TEXT ("+u+"): "+Kl(i,c)+(f?" "+f:"")})}function Gl(i,u){i.info(function(){return"TIMEOUT: "+u})}Ln.prototype.info=function(){};function Kl(i,u){if(!i.g)return u;if(!u)return null;try{var c=JSON.parse(u);if(c){for(i=0;i<c.length;i++)if(Array.isArray(c[i])){var f=c[i];if(!(2>f.length)){var I=f[1];if(Array.isArray(I)&&!(1>I.length)){var b=I[0];if(b!="noop"&&b!="stop"&&b!="close")for(var x=1;x<I.length;x++)I[x]=""}}}}return Xt(c)}catch{return u}}var Vr={NO_ERROR:0,gb:1,tb:2,sb:3,nb:4,rb:5,ub:6,Ia:7,TIMEOUT:8,xb:9},po={lb:"complete",Hb:"success",Ja:"error",Ia:"abort",zb:"ready",Ab:"readystatechange",TIMEOUT:"timeout",vb:"incrementaldata",yb:"progress",ob:"downloadprogress",Pb:"uploadprogress"},Ds;function Sr(){}N(Sr,lt),Sr.prototype.g=function(){return new XMLHttpRequest},Sr.prototype.i=function(){return{}},Ds=new Sr;function ve(i,u,c,f){this.j=i,this.i=u,this.l=c,this.R=f||1,this.U=new O(this),this.I=45e3,this.H=null,this.o=!1,this.m=this.A=this.v=this.L=this.F=this.S=this.B=null,this.D=[],this.g=null,this.C=0,this.s=this.u=null,this.X=-1,this.J=!1,this.O=0,this.M=null,this.W=this.K=this.T=this.P=!1,this.h=new mo}function mo(){this.i=null,this.g="",this.h=!1}var _o={},xs={};function Os(i,u,c){i.L=1,i.v=xr(ae(u)),i.m=c,i.P=!0,go(i,null)}function go(i,u){i.F=Date.now(),kr(i),i.A=ae(i.v);var c=i.A,f=i.R;Array.isArray(f)||(f=[String(f)]),ko(c.i,"t",f),i.C=0,c=i.j.J,i.h=new mo,i.g=Ho(i.j,c?u:null,!i.m),0<i.O&&(i.M=new Q(A(i.Y,i,i.g),i.O)),u=i.U,c=i.g,f=i.ca;var I="readystatechange";Array.isArray(I)||(I&&(rt[0]=I.toString()),I=rt);for(var b=0;b<I.length;b++){var x=br(c,I[b],f||u.handleEvent,!1,u.h||u);if(!x)break;u.g[x.key]=x}u=i.H?m(i.H):{},i.m?(i.u||(i.u="POST"),u["Content-Type"]="application/x-www-form-urlencoded",i.g.ea(i.A,i.u,i.m,u)):(i.u="GET",i.g.ea(i.A,i.u,null,u)),xn(),zl(i.i,i.u,i.A,i.l,i.R,i.m)}ve.prototype.ca=function(i){i=i.target;const u=this.M;u&&ue(i)==3?u.j():this.Y(i)},ve.prototype.Y=function(i){try{if(i==this.g)t:{const Dt=ue(this.g);var u=this.g.Ba();const ln=this.g.Z();if(!(3>Dt)&&(Dt!=3||this.g&&(this.h.h||this.g.oa()||Uo(this.g)))){this.J||Dt!=4||u==7||(u==8||0>=ln?xn(3):xn(2)),Ls(this);var c=this.g.Z();this.X=c;e:if(yo(this)){var f=Uo(this.g);i="";var I=f.length,b=ue(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){Le(this),Mn(this);var x="";break e}this.h.i=new l.TextDecoder}for(u=0;u<I;u++)this.h.h=!0,i+=this.h.i.decode(f[u],{stream:!(b&&u==I-1)});f.length=0,this.h.g+=i,this.C=0,x=this.h.g}else x=this.g.oa();if(this.o=c==200,$l(this.i,this.u,this.A,this.l,this.R,Dt,c),this.o){if(this.T&&!this.K){e:{if(this.g){var st,Pt=this.g;if((st=Pt.g?Pt.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!j(st)){var Z=st;break e}}Z=null}if(c=Z)on(this.i,this.l,c,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,Ms(this,c);else{this.o=!1,this.s=3,Mt(12),Le(this),Mn(this);break t}}if(this.P){c=!0;let Jt;for(;!this.J&&this.C<x.length;)if(Jt=Ql(this,x),Jt==xs){Dt==4&&(this.s=4,Mt(14),c=!1),on(this.i,this.l,null,"[Incomplete Response]");break}else if(Jt==_o){this.s=4,Mt(15),on(this.i,this.l,x,"[Invalid Chunk]"),c=!1;break}else on(this.i,this.l,Jt,null),Ms(this,Jt);if(yo(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),Dt!=4||x.length!=0||this.h.h||(this.s=1,Mt(16),c=!1),this.o=this.o&&c,!c)on(this.i,this.l,x,"[Invalid Chunked Response]"),Le(this),Mn(this);else if(0<x.length&&!this.W){this.W=!0;var Nt=this.j;Nt.g==this&&Nt.ba&&!Nt.M&&(Nt.j.info("Great, no buffering proxy detected. Bytes received: "+x.length),zs(Nt),Nt.M=!0,Mt(11))}}else on(this.i,this.l,x,null),Ms(this,x);Dt==4&&Le(this),this.o&&!this.J&&(Dt==4?Go(this.j,this):(this.o=!1,kr(this)))}else cc(this.g),c==400&&0<x.indexOf("Unknown SID")?(this.s=3,Mt(12)):(this.s=0,Mt(13)),Le(this),Mn(this)}}}catch{}finally{}};function yo(i){return i.g?i.u=="GET"&&i.L!=2&&i.j.Ca:!1}function Ql(i,u){var c=i.C,f=u.indexOf(`
`,c);return f==-1?xs:(c=Number(u.substring(c,f)),isNaN(c)?_o:(f+=1,f+c>u.length?xs:(u=u.slice(f,f+c),i.C=f+c,u)))}ve.prototype.cancel=function(){this.J=!0,Le(this)};function kr(i){i.S=Date.now()+i.I,vo(i,i.I)}function vo(i,u){if(i.B!=null)throw Error("WatchDog timer not null");i.B=On(A(i.ba,i),u)}function Ls(i){i.B&&(l.clearTimeout(i.B),i.B=null)}ve.prototype.ba=function(){this.B=null;const i=Date.now();0<=i-this.S?(Gl(this.i,this.A),this.L!=2&&(xn(),Mt(17)),Le(this),this.s=2,Mn(this)):vo(this,this.S-i)};function Mn(i){i.j.G==0||i.J||Go(i.j,i)}function Le(i){Ls(i);var u=i.M;u&&typeof u.ma=="function"&&u.ma(),i.M=null,Rt(i.U),i.g&&(u=i.g,i.g=null,u.abort(),u.ma())}function Ms(i,u){try{var c=i.j;if(c.G!=0&&(c.g==i||Us(c.h,i))){if(!i.K&&Us(c.h,i)&&c.G==3){try{var f=c.Da.g.parse(u)}catch{f=null}if(Array.isArray(f)&&f.length==3){var I=f;if(I[0]==0){t:if(!c.u){if(c.g)if(c.g.F+3e3<i.F)qr(c),Ur(c);else break t;js(c),Mt(18)}}else c.za=I[1],0<c.za-c.T&&37500>I[2]&&c.F&&c.v==0&&!c.C&&(c.C=On(A(c.Za,c),6e3));if(1>=wo(c.h)&&c.ca){try{c.ca()}catch{}c.ca=void 0}}else Ue(c,11)}else if((i.K||c.g==i)&&qr(c),!j(u))for(I=c.Da.g.parse(u),u=0;u<I.length;u++){let Z=I[u];if(c.T=Z[0],Z=Z[1],c.G==2)if(Z[0]=="c"){c.K=Z[1],c.ia=Z[2];const Nt=Z[3];Nt!=null&&(c.la=Nt,c.j.info("VER="+c.la));const Dt=Z[4];Dt!=null&&(c.Aa=Dt,c.j.info("SVER="+c.Aa));const ln=Z[5];ln!=null&&typeof ln=="number"&&0<ln&&(f=1.5*ln,c.L=f,c.j.info("backChannelRequestTimeoutMs_="+f)),f=c;const Jt=i.g;if(Jt){const jr=Jt.g?Jt.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(jr){var b=f.h;b.g||jr.indexOf("spdy")==-1&&jr.indexOf("quic")==-1&&jr.indexOf("h2")==-1||(b.j=b.l,b.g=new Set,b.h&&(Fs(b,b.h),b.h=null))}if(f.D){const $s=Jt.g?Jt.g.getResponseHeader("X-HTTP-Session-Id"):null;$s&&(f.ya=$s,at(f.I,f.D,$s))}}c.G=3,c.l&&c.l.ua(),c.ba&&(c.R=Date.now()-i.F,c.j.info("Handshake RTT: "+c.R+"ms")),f=c;var x=i;if(f.qa=Wo(f,f.J?f.ia:null,f.W),x.K){Io(f.h,x);var st=x,Pt=f.L;Pt&&(st.I=Pt),st.B&&(Ls(st),kr(st)),f.g=x}else zo(f);0<c.i.length&&Fr(c)}else Z[0]!="stop"&&Z[0]!="close"||Ue(c,7);else c.G==3&&(Z[0]=="stop"||Z[0]=="close"?Z[0]=="stop"?Ue(c,7):Bs(c):Z[0]!="noop"&&c.l&&c.l.ta(Z),c.v=0)}}xn(4)}catch{}}var Wl=class{constructor(i,u){this.g=i,this.map=u}};function To(i){this.l=i||10,l.PerformanceNavigationTiming?(i=l.performance.getEntriesByType("navigation"),i=0<i.length&&(i[0].nextHopProtocol=="hq"||i[0].nextHopProtocol=="h2")):i=!!(l.chrome&&l.chrome.loadTimes&&l.chrome.loadTimes()&&l.chrome.loadTimes().wasFetchedViaSpdy),this.j=i?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}function Eo(i){return i.h?!0:i.g?i.g.size>=i.j:!1}function wo(i){return i.h?1:i.g?i.g.size:0}function Us(i,u){return i.h?i.h==u:i.g?i.g.has(u):!1}function Fs(i,u){i.g?i.g.add(u):i.h=u}function Io(i,u){i.h&&i.h==u?i.h=null:i.g&&i.g.has(u)&&i.g.delete(u)}To.prototype.cancel=function(){if(this.i=Ao(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const i of this.g.values())i.cancel();this.g.clear()}};function Ao(i){if(i.h!=null)return i.i.concat(i.h.D);if(i.g!=null&&i.g.size!==0){let u=i.i;for(const c of i.g.values())u=u.concat(c.D);return u}return L(i.i)}function Hl(i){if(i.V&&typeof i.V=="function")return i.V();if(typeof Map<"u"&&i instanceof Map||typeof Set<"u"&&i instanceof Set)return Array.from(i.values());if(typeof i=="string")return i.split("");if(h(i)){for(var u=[],c=i.length,f=0;f<c;f++)u.push(i[f]);return u}u=[],c=0;for(f in i)u[c++]=i[f];return u}function Xl(i){if(i.na&&typeof i.na=="function")return i.na();if(!i.V||typeof i.V!="function"){if(typeof Map<"u"&&i instanceof Map)return Array.from(i.keys());if(!(typeof Set<"u"&&i instanceof Set)){if(h(i)||typeof i=="string"){var u=[];i=i.length;for(var c=0;c<i;c++)u.push(c);return u}u=[],c=0;for(const f in i)u[c++]=f;return u}}}function Ro(i,u){if(i.forEach&&typeof i.forEach=="function")i.forEach(u,void 0);else if(h(i)||typeof i=="string")Array.prototype.forEach.call(i,u,void 0);else for(var c=Xl(i),f=Hl(i),I=f.length,b=0;b<I;b++)u.call(void 0,f[b],c&&c[b],i)}var Po=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function Yl(i,u){if(i){i=i.split("&");for(var c=0;c<i.length;c++){var f=i[c].indexOf("="),I=null;if(0<=f){var b=i[c].substring(0,f);I=i[c].substring(f+1)}else b=i[c];u(b,I?decodeURIComponent(I.replace(/\+/g," ")):"")}}}function Me(i){if(this.g=this.o=this.j="",this.s=null,this.m=this.l="",this.h=!1,i instanceof Me){this.h=i.h,Nr(this,i.j),this.o=i.o,this.g=i.g,Dr(this,i.s),this.l=i.l;var u=i.i,c=new qn;c.i=u.i,u.g&&(c.g=new Map(u.g),c.h=u.h),bo(this,c),this.m=i.m}else i&&(u=String(i).match(Po))?(this.h=!1,Nr(this,u[1]||"",!0),this.o=Un(u[2]||""),this.g=Un(u[3]||"",!0),Dr(this,u[4]),this.l=Un(u[5]||"",!0),bo(this,u[6]||"",!0),this.m=Un(u[7]||"")):(this.h=!1,this.i=new qn(null,this.h))}Me.prototype.toString=function(){var i=[],u=this.j;u&&i.push(Fn(u,Co,!0),":");var c=this.g;return(c||u=="file")&&(i.push("//"),(u=this.o)&&i.push(Fn(u,Co,!0),"@"),i.push(encodeURIComponent(String(c)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),c=this.s,c!=null&&i.push(":",String(c))),(c=this.l)&&(this.g&&c.charAt(0)!="/"&&i.push("/"),i.push(Fn(c,c.charAt(0)=="/"?tc:Zl,!0))),(c=this.i.toString())&&i.push("?",c),(c=this.m)&&i.push("#",Fn(c,nc)),i.join("")};function ae(i){return new Me(i)}function Nr(i,u,c){i.j=c?Un(u,!0):u,i.j&&(i.j=i.j.replace(/:$/,""))}function Dr(i,u){if(u){if(u=Number(u),isNaN(u)||0>u)throw Error("Bad port number "+u);i.s=u}else i.s=null}function bo(i,u,c){u instanceof qn?(i.i=u,rc(i.i,i.h)):(c||(u=Fn(u,ec)),i.i=new qn(u,i.h))}function at(i,u,c){i.i.set(u,c)}function xr(i){return at(i,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),i}function Un(i,u){return i?u?decodeURI(i.replace(/%25/g,"%2525")):decodeURIComponent(i):""}function Fn(i,u,c){return typeof i=="string"?(i=encodeURI(i).replace(u,Jl),c&&(i=i.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),i):null}function Jl(i){return i=i.charCodeAt(0),"%"+(i>>4&15).toString(16)+(i&15).toString(16)}var Co=/[#\/\?@]/g,Zl=/[#\?:]/g,tc=/[#\?]/g,ec=/[#\?@]/g,nc=/#/g;function qn(i,u){this.h=this.g=null,this.i=i||null,this.j=!!u}function Te(i){i.g||(i.g=new Map,i.h=0,i.i&&Yl(i.i,function(u,c){i.add(decodeURIComponent(u.replace(/\+/g," ")),c)}))}n=qn.prototype,n.add=function(i,u){Te(this),this.i=null,i=an(this,i);var c=this.g.get(i);return c||this.g.set(i,c=[]),c.push(u),this.h+=1,this};function Vo(i,u){Te(i),u=an(i,u),i.g.has(u)&&(i.i=null,i.h-=i.g.get(u).length,i.g.delete(u))}function So(i,u){return Te(i),u=an(i,u),i.g.has(u)}n.forEach=function(i,u){Te(this),this.g.forEach(function(c,f){c.forEach(function(I){i.call(u,I,f,this)},this)},this)},n.na=function(){Te(this);const i=Array.from(this.g.values()),u=Array.from(this.g.keys()),c=[];for(let f=0;f<u.length;f++){const I=i[f];for(let b=0;b<I.length;b++)c.push(u[f])}return c},n.V=function(i){Te(this);let u=[];if(typeof i=="string")So(this,i)&&(u=u.concat(this.g.get(an(this,i))));else{i=Array.from(this.g.values());for(let c=0;c<i.length;c++)u=u.concat(i[c])}return u},n.set=function(i,u){return Te(this),this.i=null,i=an(this,i),So(this,i)&&(this.h-=this.g.get(i).length),this.g.set(i,[u]),this.h+=1,this},n.get=function(i,u){return i?(i=this.V(i),0<i.length?String(i[0]):u):u};function ko(i,u,c){Vo(i,u),0<c.length&&(i.i=null,i.g.set(an(i,u),L(c)),i.h+=c.length)}n.toString=function(){if(this.i)return this.i;if(!this.g)return"";const i=[],u=Array.from(this.g.keys());for(var c=0;c<u.length;c++){var f=u[c];const b=encodeURIComponent(String(f)),x=this.V(f);for(f=0;f<x.length;f++){var I=b;x[f]!==""&&(I+="="+encodeURIComponent(String(x[f]))),i.push(I)}}return this.i=i.join("&")};function an(i,u){return u=String(u),i.j&&(u=u.toLowerCase()),u}function rc(i,u){u&&!i.j&&(Te(i),i.i=null,i.g.forEach(function(c,f){var I=f.toLowerCase();f!=I&&(Vo(this,f),ko(this,I,c))},i)),i.j=u}function sc(i,u){const c=new Ln;if(l.Image){const f=new Image;f.onload=C(Ee,c,"TestLoadImage: loaded",!0,u,f),f.onerror=C(Ee,c,"TestLoadImage: error",!1,u,f),f.onabort=C(Ee,c,"TestLoadImage: abort",!1,u,f),f.ontimeout=C(Ee,c,"TestLoadImage: timeout",!1,u,f),l.setTimeout(function(){f.ontimeout&&f.ontimeout()},1e4),f.src=i}else u(!1)}function ic(i,u){const c=new Ln,f=new AbortController,I=setTimeout(()=>{f.abort(),Ee(c,"TestPingServer: timeout",!1,u)},1e4);fetch(i,{signal:f.signal}).then(b=>{clearTimeout(I),b.ok?Ee(c,"TestPingServer: ok",!0,u):Ee(c,"TestPingServer: server error",!1,u)}).catch(()=>{clearTimeout(I),Ee(c,"TestPingServer: error",!1,u)})}function Ee(i,u,c,f,I){try{I&&(I.onload=null,I.onerror=null,I.onabort=null,I.ontimeout=null),f(c)}catch{}}function oc(){this.g=new kt}function ac(i,u,c){const f=c||"";try{Ro(i,function(I,b){let x=I;d(I)&&(x=Xt(I)),u.push(f+b+"="+encodeURIComponent(x))})}catch(I){throw u.push(f+"type="+encodeURIComponent("_badmap")),I}}function Or(i){this.l=i.Ub||null,this.j=i.eb||!1}N(Or,lt),Or.prototype.g=function(){return new Lr(this.l,this.j)},Or.prototype.i=function(i){return function(){return i}}({});function Lr(i,u){Et.call(this),this.D=i,this.o=u,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.u=new Headers,this.h=null,this.B="GET",this.A="",this.g=!1,this.v=this.j=this.l=null}N(Lr,Et),n=Lr.prototype,n.open=function(i,u){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.B=i,this.A=u,this.readyState=1,jn(this)},n.send=function(i){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const u={headers:this.u,method:this.B,credentials:this.m,cache:void 0};i&&(u.body=i),(this.D||l).fetch(new Request(this.A,u)).then(this.Sa.bind(this),this.ga.bind(this))},n.abort=function(){this.response=this.responseText="",this.u=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,Bn(this)),this.readyState=0},n.Sa=function(i){if(this.g&&(this.l=i,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=i.headers,this.readyState=2,jn(this)),this.g&&(this.readyState=3,jn(this),this.g)))if(this.responseType==="arraybuffer")i.arrayBuffer().then(this.Qa.bind(this),this.ga.bind(this));else if(typeof l.ReadableStream<"u"&&"body"in i){if(this.j=i.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.v=new TextDecoder;No(this)}else i.text().then(this.Ra.bind(this),this.ga.bind(this))};function No(i){i.j.read().then(i.Pa.bind(i)).catch(i.ga.bind(i))}n.Pa=function(i){if(this.g){if(this.o&&i.value)this.response.push(i.value);else if(!this.o){var u=i.value?i.value:new Uint8Array(0);(u=this.v.decode(u,{stream:!i.done}))&&(this.response=this.responseText+=u)}i.done?Bn(this):jn(this),this.readyState==3&&No(this)}},n.Ra=function(i){this.g&&(this.response=this.responseText=i,Bn(this))},n.Qa=function(i){this.g&&(this.response=i,Bn(this))},n.ga=function(){this.g&&Bn(this)};function Bn(i){i.readyState=4,i.l=null,i.j=null,i.v=null,jn(i)}n.setRequestHeader=function(i,u){this.u.append(i,u)},n.getResponseHeader=function(i){return this.h&&this.h.get(i.toLowerCase())||""},n.getAllResponseHeaders=function(){if(!this.h)return"";const i=[],u=this.h.entries();for(var c=u.next();!c.done;)c=c.value,i.push(c[0]+": "+c[1]),c=u.next();return i.join(`\r
`)};function jn(i){i.onreadystatechange&&i.onreadystatechange.call(i)}Object.defineProperty(Lr.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(i){this.m=i?"include":"same-origin"}});function Do(i){let u="";return J(i,function(c,f){u+=f,u+=":",u+=c,u+=`\r
`}),u}function qs(i,u,c){t:{for(f in c){var f=!1;break t}f=!0}f||(c=Do(c),typeof i=="string"?c!=null&&encodeURIComponent(String(c)):at(i,u,c))}function dt(i){Et.call(this),this.headers=new Map,this.o=i||null,this.h=!1,this.v=this.g=null,this.D="",this.m=0,this.l="",this.j=this.B=this.u=this.A=!1,this.I=null,this.H="",this.J=!1}N(dt,Et);var uc=/^https?$/i,lc=["POST","PUT"];n=dt.prototype,n.Ha=function(i){this.J=i},n.ea=function(i,u,c,f){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+i);u=u?u.toUpperCase():"GET",this.D=i,this.l="",this.m=0,this.A=!1,this.h=!0,this.g=this.o?this.o.g():Ds.g(),this.v=this.o?ye(this.o):ye(Ds),this.g.onreadystatechange=A(this.Ea,this);try{this.B=!0,this.g.open(u,String(i),!0),this.B=!1}catch(b){xo(this,b);return}if(i=c||"",c=new Map(this.headers),f)if(Object.getPrototypeOf(f)===Object.prototype)for(var I in f)c.set(I,f[I]);else if(typeof f.keys=="function"&&typeof f.get=="function")for(const b of f.keys())c.set(b,f.get(b));else throw Error("Unknown input type for opt_headers: "+String(f));f=Array.from(c.keys()).find(b=>b.toLowerCase()=="content-type"),I=l.FormData&&i instanceof l.FormData,!(0<=Array.prototype.indexOf.call(lc,u,void 0))||f||I||c.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[b,x]of c)this.g.setRequestHeader(b,x);this.H&&(this.g.responseType=this.H),"withCredentials"in this.g&&this.g.withCredentials!==this.J&&(this.g.withCredentials=this.J);try{Mo(this),this.u=!0,this.g.send(i),this.u=!1}catch(b){xo(this,b)}};function xo(i,u){i.h=!1,i.g&&(i.j=!0,i.g.abort(),i.j=!1),i.l=u,i.m=5,Oo(i),Mr(i)}function Oo(i){i.A||(i.A=!0,wt(i,"complete"),wt(i,"error"))}n.abort=function(i){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.m=i||7,wt(this,"complete"),wt(this,"abort"),Mr(this))},n.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),Mr(this,!0)),dt.aa.N.call(this)},n.Ea=function(){this.s||(this.B||this.u||this.j?Lo(this):this.bb())},n.bb=function(){Lo(this)};function Lo(i){if(i.h&&typeof a<"u"&&(!i.v[1]||ue(i)!=4||i.Z()!=2)){if(i.u&&ue(i)==4)D(i.Ea,0,i);else if(wt(i,"readystatechange"),ue(i)==4){i.h=!1;try{const x=i.Z();t:switch(x){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var u=!0;break t;default:u=!1}var c;if(!(c=u)){var f;if(f=x===0){var I=String(i.D).match(Po)[1]||null;!I&&l.self&&l.self.location&&(I=l.self.location.protocol.slice(0,-1)),f=!uc.test(I?I.toLowerCase():"")}c=f}if(c)wt(i,"complete"),wt(i,"success");else{i.m=6;try{var b=2<ue(i)?i.g.statusText:""}catch{b=""}i.l=b+" ["+i.Z()+"]",Oo(i)}}finally{Mr(i)}}}}function Mr(i,u){if(i.g){Mo(i);const c=i.g,f=i.v[0]?()=>{}:null;i.g=null,i.v=null,u||wt(i,"ready");try{c.onreadystatechange=f}catch{}}}function Mo(i){i.I&&(l.clearTimeout(i.I),i.I=null)}n.isActive=function(){return!!this.g};function ue(i){return i.g?i.g.readyState:0}n.Z=function(){try{return 2<ue(this)?this.g.status:-1}catch{return-1}},n.oa=function(){try{return this.g?this.g.responseText:""}catch{return""}},n.Oa=function(i){if(this.g){var u=this.g.responseText;return i&&u.indexOf(i)==0&&(u=u.substring(i.length)),Yt(u)}};function Uo(i){try{if(!i.g)return null;if("response"in i.g)return i.g.response;switch(i.H){case"":case"text":return i.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in i.g)return i.g.mozResponseArrayBuffer}return null}catch{return null}}function cc(i){const u={};i=(i.g&&2<=ue(i)&&i.g.getAllResponseHeaders()||"").split(`\r
`);for(let f=0;f<i.length;f++){if(j(i[f]))continue;var c=w(i[f]);const I=c[0];if(c=c[1],typeof c!="string")continue;c=c.trim();const b=u[I]||[];u[I]=b,b.push(c)}E(u,function(f){return f.join(", ")})}n.Ba=function(){return this.m},n.Ka=function(){return typeof this.l=="string"?this.l:String(this.l)};function zn(i,u,c){return c&&c.internalChannelParams&&c.internalChannelParams[i]||u}function Fo(i){this.Aa=0,this.i=[],this.j=new Ln,this.ia=this.qa=this.I=this.W=this.g=this.ya=this.D=this.H=this.m=this.S=this.o=null,this.Ya=this.U=0,this.Va=zn("failFast",!1,i),this.F=this.C=this.u=this.s=this.l=null,this.X=!0,this.za=this.T=-1,this.Y=this.v=this.B=0,this.Ta=zn("baseRetryDelayMs",5e3,i),this.cb=zn("retryDelaySeedMs",1e4,i),this.Wa=zn("forwardChannelMaxRetries",2,i),this.wa=zn("forwardChannelRequestTimeoutMs",2e4,i),this.pa=i&&i.xmlHttpFactory||void 0,this.Xa=i&&i.Tb||void 0,this.Ca=i&&i.useFetchStreams||!1,this.L=void 0,this.J=i&&i.supportsCrossDomainXhr||!1,this.K="",this.h=new To(i&&i.concurrentRequestLimit),this.Da=new oc,this.P=i&&i.fastHandshake||!1,this.O=i&&i.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.Ua=i&&i.Rb||!1,i&&i.xa&&this.j.xa(),i&&i.forceLongPolling&&(this.X=!1),this.ba=!this.P&&this.X&&i&&i.detectBufferingProxy||!1,this.ja=void 0,i&&i.longPollingTimeout&&0<i.longPollingTimeout&&(this.ja=i.longPollingTimeout),this.ca=void 0,this.R=0,this.M=!1,this.ka=this.A=null}n=Fo.prototype,n.la=8,n.G=1,n.connect=function(i,u,c,f){Mt(0),this.W=i,this.H=u||{},c&&f!==void 0&&(this.H.OSID=c,this.H.OAID=f),this.F=this.X,this.I=Wo(this,null,this.W),Fr(this)};function Bs(i){if(qo(i),i.G==3){var u=i.U++,c=ae(i.I);if(at(c,"SID",i.K),at(c,"RID",u),at(c,"TYPE","terminate"),$n(i,c),u=new ve(i,i.j,u),u.L=2,u.v=xr(ae(c)),c=!1,l.navigator&&l.navigator.sendBeacon)try{c=l.navigator.sendBeacon(u.v.toString(),"")}catch{}!c&&l.Image&&(new Image().src=u.v,c=!0),c||(u.g=Ho(u.j,null),u.g.ea(u.v)),u.F=Date.now(),kr(u)}Qo(i)}function Ur(i){i.g&&(zs(i),i.g.cancel(),i.g=null)}function qo(i){Ur(i),i.u&&(l.clearTimeout(i.u),i.u=null),qr(i),i.h.cancel(),i.s&&(typeof i.s=="number"&&l.clearTimeout(i.s),i.s=null)}function Fr(i){if(!Eo(i.h)&&!i.s){i.s=!0;var u=i.Ga;te||oe(),yt||(te(),yt=!0),ee.add(u,i),i.B=0}}function hc(i,u){return wo(i.h)>=i.h.j-(i.s?1:0)?!1:i.s?(i.i=u.D.concat(i.i),!0):i.G==1||i.G==2||i.B>=(i.Va?0:i.Wa)?!1:(i.s=On(A(i.Ga,i,u),Ko(i,i.B)),i.B++,!0)}n.Ga=function(i){if(this.s)if(this.s=null,this.G==1){if(!i){this.U=Math.floor(1e5*Math.random()),i=this.U++;const I=new ve(this,this.j,i);let b=this.o;if(this.S&&(b?(b=m(b),v(b,this.S)):b=this.S),this.m!==null||this.O||(I.H=b,b=null),this.P)t:{for(var u=0,c=0;c<this.i.length;c++){e:{var f=this.i[c];if("__data__"in f.map&&(f=f.map.__data__,typeof f=="string")){f=f.length;break e}f=void 0}if(f===void 0)break;if(u+=f,4096<u){u=c;break t}if(u===4096||c===this.i.length-1){u=c+1;break t}}u=1e3}else u=1e3;u=jo(this,I,u),c=ae(this.I),at(c,"RID",i),at(c,"CVER",22),this.D&&at(c,"X-HTTP-Session-Id",this.D),$n(this,c),b&&(this.O?u="headers="+encodeURIComponent(String(Do(b)))+"&"+u:this.m&&qs(c,this.m,b)),Fs(this.h,I),this.Ua&&at(c,"TYPE","init"),this.P?(at(c,"$req",u),at(c,"SID","null"),I.T=!0,Os(I,c,null)):Os(I,c,u),this.G=2}}else this.G==3&&(i?Bo(this,i):this.i.length==0||Eo(this.h)||Bo(this))};function Bo(i,u){var c;u?c=u.l:c=i.U++;const f=ae(i.I);at(f,"SID",i.K),at(f,"RID",c),at(f,"AID",i.T),$n(i,f),i.m&&i.o&&qs(f,i.m,i.o),c=new ve(i,i.j,c,i.B+1),i.m===null&&(c.H=i.o),u&&(i.i=u.D.concat(i.i)),u=jo(i,c,1e3),c.I=Math.round(.5*i.wa)+Math.round(.5*i.wa*Math.random()),Fs(i.h,c),Os(c,f,u)}function $n(i,u){i.H&&J(i.H,function(c,f){at(u,f,c)}),i.l&&Ro({},function(c,f){at(u,f,c)})}function jo(i,u,c){c=Math.min(i.i.length,c);var f=i.l?A(i.l.Na,i.l,i):null;t:{var I=i.i;let b=-1;for(;;){const x=["count="+c];b==-1?0<c?(b=I[0].g,x.push("ofs="+b)):b=0:x.push("ofs="+b);let st=!0;for(let Pt=0;Pt<c;Pt++){let Z=I[Pt].g;const Nt=I[Pt].map;if(Z-=b,0>Z)b=Math.max(0,I[Pt].g-100),st=!1;else try{ac(Nt,x,"req"+Z+"_")}catch{f&&f(Nt)}}if(st){f=x.join("&");break t}}}return i=i.i.splice(0,c),u.D=i,f}function zo(i){if(!i.g&&!i.u){i.Y=1;var u=i.Fa;te||oe(),yt||(te(),yt=!0),ee.add(u,i),i.v=0}}function js(i){return i.g||i.u||3<=i.v?!1:(i.Y++,i.u=On(A(i.Fa,i),Ko(i,i.v)),i.v++,!0)}n.Fa=function(){if(this.u=null,$o(this),this.ba&&!(this.M||this.g==null||0>=this.R)){var i=2*this.R;this.j.info("BP detection timer enabled: "+i),this.A=On(A(this.ab,this),i)}},n.ab=function(){this.A&&(this.A=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.M=!0,Mt(10),Ur(this),$o(this))};function zs(i){i.A!=null&&(l.clearTimeout(i.A),i.A=null)}function $o(i){i.g=new ve(i,i.j,"rpc",i.Y),i.m===null&&(i.g.H=i.o),i.g.O=0;var u=ae(i.qa);at(u,"RID","rpc"),at(u,"SID",i.K),at(u,"AID",i.T),at(u,"CI",i.F?"0":"1"),!i.F&&i.ja&&at(u,"TO",i.ja),at(u,"TYPE","xmlhttp"),$n(i,u),i.m&&i.o&&qs(u,i.m,i.o),i.L&&(i.g.I=i.L);var c=i.g;i=i.ia,c.L=1,c.v=xr(ae(u)),c.m=null,c.P=!0,go(c,i)}n.Za=function(){this.C!=null&&(this.C=null,Ur(this),js(this),Mt(19))};function qr(i){i.C!=null&&(l.clearTimeout(i.C),i.C=null)}function Go(i,u){var c=null;if(i.g==u){qr(i),zs(i),i.g=null;var f=2}else if(Us(i.h,u))c=u.D,Io(i.h,u),f=1;else return;if(i.G!=0){if(u.o)if(f==1){c=u.m?u.m.length:0,u=Date.now()-u.F;var I=i.B;f=Cr(),wt(f,new fo(f,c)),Fr(i)}else zo(i);else if(I=u.s,I==3||I==0&&0<u.X||!(f==1&&hc(i,u)||f==2&&js(i)))switch(c&&0<c.length&&(u=i.h,u.i=u.i.concat(c)),I){case 1:Ue(i,5);break;case 4:Ue(i,10);break;case 3:Ue(i,6);break;default:Ue(i,2)}}}function Ko(i,u){let c=i.Ta+Math.floor(Math.random()*i.cb);return i.isActive()||(c*=2),c*u}function Ue(i,u){if(i.j.info("Error code "+u),u==2){var c=A(i.fb,i),f=i.Xa;const I=!f;f=new Me(f||"//www.google.com/images/cleardot.gif"),l.location&&l.location.protocol=="http"||Nr(f,"https"),xr(f),I?sc(f.toString(),c):ic(f.toString(),c)}else Mt(2);i.G=0,i.l&&i.l.sa(u),Qo(i),qo(i)}n.fb=function(i){i?(this.j.info("Successfully pinged google.com"),Mt(2)):(this.j.info("Failed to ping google.com"),Mt(1))};function Qo(i){if(i.G=0,i.ka=[],i.l){const u=Ao(i.h);(u.length!=0||i.i.length!=0)&&(S(i.ka,u),S(i.ka,i.i),i.h.i.length=0,L(i.i),i.i.length=0),i.l.ra()}}function Wo(i,u,c){var f=c instanceof Me?ae(c):new Me(c);if(f.g!="")u&&(f.g=u+"."+f.g),Dr(f,f.s);else{var I=l.location;f=I.protocol,u=u?u+"."+I.hostname:I.hostname,I=+I.port;var b=new Me(null);f&&Nr(b,f),u&&(b.g=u),I&&Dr(b,I),c&&(b.l=c),f=b}return c=i.D,u=i.ya,c&&u&&at(f,c,u),at(f,"VER",i.la),$n(i,f),f}function Ho(i,u,c){if(u&&!i.J)throw Error("Can't create secondary domain capable XhrIo object.");return u=i.Ca&&!i.pa?new dt(new Or({eb:c})):new dt(i.pa),u.Ha(i.J),u}n.isActive=function(){return!!this.l&&this.l.isActive(this)};function Xo(){}n=Xo.prototype,n.ua=function(){},n.ta=function(){},n.sa=function(){},n.ra=function(){},n.isActive=function(){return!0},n.Na=function(){};function Br(){}Br.prototype.g=function(i,u){return new Gt(i,u)};function Gt(i,u){Et.call(this),this.g=new Fo(u),this.l=i,this.h=u&&u.messageUrlParams||null,i=u&&u.messageHeaders||null,u&&u.clientProtocolHeaderRequired&&(i?i["X-Client-Protocol"]="webchannel":i={"X-Client-Protocol":"webchannel"}),this.g.o=i,i=u&&u.initMessageHeaders||null,u&&u.messageContentType&&(i?i["X-WebChannel-Content-Type"]=u.messageContentType:i={"X-WebChannel-Content-Type":u.messageContentType}),u&&u.va&&(i?i["X-WebChannel-Client-Profile"]=u.va:i={"X-WebChannel-Client-Profile":u.va}),this.g.S=i,(i=u&&u.Sb)&&!j(i)&&(this.g.m=i),this.v=u&&u.supportsCrossDomainXhr||!1,this.u=u&&u.sendRawJson||!1,(u=u&&u.httpSessionIdParam)&&!j(u)&&(this.g.D=u,i=this.h,i!==null&&u in i&&(i=this.h,u in i&&delete i[u])),this.j=new un(this)}N(Gt,Et),Gt.prototype.m=function(){this.g.l=this.j,this.v&&(this.g.J=!0),this.g.connect(this.l,this.h||void 0)},Gt.prototype.close=function(){Bs(this.g)},Gt.prototype.o=function(i){var u=this.g;if(typeof i=="string"){var c={};c.__data__=i,i=c}else this.u&&(c={},c.__data__=Xt(i),i=c);u.i.push(new Wl(u.Ya++,i)),u.G==3&&Fr(u)},Gt.prototype.N=function(){this.g.l=null,delete this.j,Bs(this.g),delete this.g,Gt.aa.N.call(this)};function Yo(i){sn.call(this),i.__headers__&&(this.headers=i.__headers__,this.statusCode=i.__status__,delete i.__headers__,delete i.__status__);var u=i.__sm__;if(u){t:{for(const c in u){i=c;break t}i=void 0}(this.i=i)&&(i=this.i,u=u!==null&&i in u?u[i]:void 0),this.data=u}else this.data=i}N(Yo,sn);function Jo(){Ns.call(this),this.status=1}N(Jo,Ns);function un(i){this.g=i}N(un,Xo),un.prototype.ua=function(){wt(this.g,"a")},un.prototype.ta=function(i){wt(this.g,new Yo(i))},un.prototype.sa=function(i){wt(this.g,new Jo)},un.prototype.ra=function(){wt(this.g,"b")},Br.prototype.createWebChannel=Br.prototype.g,Gt.prototype.send=Gt.prototype.o,Gt.prototype.open=Gt.prototype.m,Gt.prototype.close=Gt.prototype.close,hu=function(){return new Br},cu=function(){return Cr()},lu=Oe,Zs={mb:0,pb:1,qb:2,Jb:3,Ob:4,Lb:5,Mb:6,Kb:7,Ib:8,Nb:9,PROXY:10,NOPROXY:11,Gb:12,Cb:13,Db:14,Bb:15,Eb:16,Fb:17,ib:18,hb:19,jb:20},Vr.NO_ERROR=0,Vr.TIMEOUT=8,Vr.HTTP_ERROR=6,Xr=Vr,po.COMPLETE="complete",uu=po,rn.EventType=xe,xe.OPEN="a",xe.CLOSE="b",xe.ERROR="c",xe.MESSAGE="d",Et.prototype.listen=Et.prototype.K,Jn=rn,dt.prototype.listenOnce=dt.prototype.L,dt.prototype.getLastError=dt.prototype.Ka,dt.prototype.getLastErrorCode=dt.prototype.Ba,dt.prototype.getStatus=dt.prototype.Z,dt.prototype.getResponseJson=dt.prototype.Oa,dt.prototype.getResponseText=dt.prototype.oa,dt.prototype.send=dt.prototype.ea,dt.prototype.setWithCredentials=dt.prototype.Ha,au=dt}).apply(typeof $r<"u"?$r:typeof self<"u"?self:typeof window<"u"?window:{});const ra="@firebase/firestore";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ot{constructor(t){this.uid=t}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(t){return t.uid===this.uid}}Ot.UNAUTHENTICATED=new Ot(null),Ot.GOOGLE_CREDENTIALS=new Ot("google-credentials-uid"),Ot.FIRST_PARTY=new Ot("first-party-uid"),Ot.MOCK_USER=new Ot("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let An="10.14.0";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ge=new dc("@firebase/firestore");function Wn(){return Ge.logLevel}function U(n,...t){if(Ge.logLevel<=we.DEBUG){const e=t.map(mi);Ge.debug(`Firestore (${An}): ${n}`,...e)}}function ce(n,...t){if(Ge.logLevel<=we.ERROR){const e=t.map(mi);Ge.error(`Firestore (${An}): ${n}`,...e)}}function gn(n,...t){if(Ge.logLevel<=we.WARN){const e=t.map(mi);Ge.warn(`Firestore (${An}): ${n}`,...e)}}function mi(n){if(typeof n=="string")return n;try{/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/return function(e){return JSON.stringify(e)}(n)}catch{return n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function B(n="Unexpected state"){const t=`FIRESTORE (${An}) INTERNAL ASSERTION FAILED: `+n;throw ce(t),new Error(t)}function Y(n,t){n||B()}function G(n,t){return n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const V={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class M extends eu{constructor(t,e){super(t,e),this.code=t,this.message=e,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Re{constructor(){this.promise=new Promise((t,e)=>{this.resolve=t,this.reject=e})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class du{constructor(t,e){this.user=e,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${t}`)}}class Cc{getToken(){return Promise.resolve(null)}invalidateToken(){}start(t,e){t.enqueueRetryable(()=>e(Ot.UNAUTHENTICATED))}shutdown(){}}class Vc{constructor(t){this.token=t,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(t,e){this.changeListener=e,t.enqueueRetryable(()=>e(this.token.user))}shutdown(){this.changeListener=null}}class Sc{constructor(t){this.t=t,this.currentUser=Ot.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(t,e){Y(this.o===void 0);let r=this.i;const s=h=>this.i!==r?(r=this.i,e(h)):Promise.resolve();let o=new Re;this.o=()=>{this.i++,this.currentUser=this.u(),o.resolve(),o=new Re,t.enqueueRetryable(()=>s(this.currentUser))};const a=()=>{const h=o;t.enqueueRetryable(async()=>{await h.promise,await s(this.currentUser)})},l=h=>{U("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=h,this.o&&(this.auth.addAuthTokenListener(this.o),a())};this.t.onInit(h=>l(h)),setTimeout(()=>{if(!this.auth){const h=this.t.getImmediate({optional:!0});h?l(h):(U("FirebaseAuthCredentialsProvider","Auth not yet detected"),o.resolve(),o=new Re)}},0),a()}getToken(){const t=this.i,e=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(e).then(r=>this.i!==t?(U("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(Y(typeof r.accessToken=="string"),new du(r.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const t=this.auth&&this.auth.getUid();return Y(t===null||typeof t=="string"),new Ot(t)}}class kc{constructor(t,e,r){this.l=t,this.h=e,this.P=r,this.type="FirstParty",this.user=Ot.FIRST_PARTY,this.I=new Map}T(){return this.P?this.P():null}get headers(){this.I.set("X-Goog-AuthUser",this.l);const t=this.T();return t&&this.I.set("Authorization",t),this.h&&this.I.set("X-Goog-Iam-Authorization-Token",this.h),this.I}}class Nc{constructor(t,e,r){this.l=t,this.h=e,this.P=r}getToken(){return Promise.resolve(new kc(this.l,this.h,this.P))}start(t,e){t.enqueueRetryable(()=>e(Ot.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class Dc{constructor(t){this.value=t,this.type="AppCheck",this.headers=new Map,t&&t.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class xc{constructor(t){this.A=t,this.forceRefresh=!1,this.appCheck=null,this.R=null}start(t,e){Y(this.o===void 0);const r=o=>{o.error!=null&&U("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${o.error.message}`);const a=o.token!==this.R;return this.R=o.token,U("FirebaseAppCheckTokenProvider",`Received ${a?"new":"existing"} token.`),a?e(o.token):Promise.resolve()};this.o=o=>{t.enqueueRetryable(()=>r(o))};const s=o=>{U("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=o,this.o&&this.appCheck.addTokenListener(this.o)};this.A.onInit(o=>s(o)),setTimeout(()=>{if(!this.appCheck){const o=this.A.getImmediate({optional:!0});o?s(o):U("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const t=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(t).then(e=>e?(Y(typeof e.token=="string"),this.R=e.token,new Dc(e.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Oc(n){const t=typeof self<"u"&&(self.crypto||self.msCrypto),e=new Uint8Array(n);if(t&&typeof t.getRandomValues=="function")t.getRandomValues(e);else for(let r=0;r<n;r++)e[r]=Math.floor(256*Math.random());return e}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fu{static newId(){const t="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",e=Math.floor(256/t.length)*t.length;let r="";for(;r.length<20;){const s=Oc(40);for(let o=0;o<s.length;++o)r.length<20&&s[o]<e&&(r+=t.charAt(s[o]%t.length))}return r}}function et(n,t){return n<t?-1:n>t?1:0}function yn(n,t,e){return n.length===t.length&&n.every((r,s)=>e(r,t[s]))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tt{constructor(t,e){if(this.seconds=t,this.nanoseconds=e,e<0)throw new M(V.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+e);if(e>=1e9)throw new M(V.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+e);if(t<-62135596800)throw new M(V.INVALID_ARGUMENT,"Timestamp seconds out of range: "+t);if(t>=253402300800)throw new M(V.INVALID_ARGUMENT,"Timestamp seconds out of range: "+t)}static now(){return Tt.fromMillis(Date.now())}static fromDate(t){return Tt.fromMillis(t.getTime())}static fromMillis(t){const e=Math.floor(t/1e3),r=Math.floor(1e6*(t-1e3*e));return new Tt(e,r)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(t){return this.seconds===t.seconds?et(this.nanoseconds,t.nanoseconds):et(this.seconds,t.seconds)}isEqual(t){return t.seconds===this.seconds&&t.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const t=this.seconds- -62135596800;return String(t).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class z{constructor(t){this.timestamp=t}static fromTimestamp(t){return new z(t)}static min(){return new z(new Tt(0,0))}static max(){return new z(new Tt(253402300799,999999999))}compareTo(t){return this.timestamp._compareTo(t.timestamp)}isEqual(t){return this.timestamp.isEqual(t.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ar{constructor(t,e,r){e===void 0?e=0:e>t.length&&B(),r===void 0?r=t.length-e:r>t.length-e&&B(),this.segments=t,this.offset=e,this.len=r}get length(){return this.len}isEqual(t){return ar.comparator(this,t)===0}child(t){const e=this.segments.slice(this.offset,this.limit());return t instanceof ar?t.forEach(r=>{e.push(r)}):e.push(t),this.construct(e)}limit(){return this.offset+this.length}popFirst(t){return t=t===void 0?1:t,this.construct(this.segments,this.offset+t,this.length-t)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(t){return this.segments[this.offset+t]}isEmpty(){return this.length===0}isPrefixOf(t){if(t.length<this.length)return!1;for(let e=0;e<this.length;e++)if(this.get(e)!==t.get(e))return!1;return!0}isImmediateParentOf(t){if(this.length+1!==t.length)return!1;for(let e=0;e<this.length;e++)if(this.get(e)!==t.get(e))return!1;return!0}forEach(t){for(let e=this.offset,r=this.limit();e<r;e++)t(this.segments[e])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(t,e){const r=Math.min(t.length,e.length);for(let s=0;s<r;s++){const o=t.get(s),a=e.get(s);if(o<a)return-1;if(o>a)return 1}return t.length<e.length?-1:t.length>e.length?1:0}}class it extends ar{construct(t,e,r){return new it(t,e,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...t){const e=[];for(const r of t){if(r.indexOf("//")>=0)throw new M(V.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);e.push(...r.split("/").filter(s=>s.length>0))}return new it(e)}static emptyPath(){return new it([])}}const Lc=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class Ct extends ar{construct(t,e,r){return new Ct(t,e,r)}static isValidIdentifier(t){return Lc.test(t)}canonicalString(){return this.toArray().map(t=>(t=t.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),Ct.isValidIdentifier(t)||(t="`"+t+"`"),t)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new Ct(["__name__"])}static fromServerFormat(t){const e=[];let r="",s=0;const o=()=>{if(r.length===0)throw new M(V.INVALID_ARGUMENT,`Invalid field path (${t}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);e.push(r),r=""};let a=!1;for(;s<t.length;){const l=t[s];if(l==="\\"){if(s+1===t.length)throw new M(V.INVALID_ARGUMENT,"Path has trailing escape character: "+t);const h=t[s+1];if(h!=="\\"&&h!=="."&&h!=="`")throw new M(V.INVALID_ARGUMENT,"Path has invalid escape sequence: "+t);r+=h,s+=2}else l==="`"?(a=!a,s++):l!=="."||a?(r+=l,s++):(o(),s++)}if(o(),a)throw new M(V.INVALID_ARGUMENT,"Unterminated ` in path: "+t);return new Ct(e)}static emptyPath(){return new Ct([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class q{constructor(t){this.path=t}static fromPath(t){return new q(it.fromString(t))}static fromName(t){return new q(it.fromString(t).popFirst(5))}static empty(){return new q(it.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(t){return this.path.length>=2&&this.path.get(this.path.length-2)===t}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(t){return t!==null&&it.comparator(this.path,t.path)===0}toString(){return this.path.toString()}static comparator(t,e){return it.comparator(t.path,e.path)}static isDocumentKey(t){return t.length%2==0}static fromSegments(t){return new q(new it(t.slice()))}}function Mc(n,t){const e=n.toTimestamp().seconds,r=n.toTimestamp().nanoseconds+1,s=z.fromTimestamp(r===1e9?new Tt(e+1,0):new Tt(e,r));return new be(s,q.empty(),t)}function Uc(n){return new be(n.readTime,n.key,-1)}class be{constructor(t,e,r){this.readTime=t,this.documentKey=e,this.largestBatchId=r}static min(){return new be(z.min(),q.empty(),-1)}static max(){return new be(z.max(),q.empty(),-1)}}function Fc(n,t){let e=n.readTime.compareTo(t.readTime);return e!==0?e:(e=q.comparator(n.documentKey,t.documentKey),e!==0?e:et(n.largestBatchId,t.largestBatchId))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qc="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class Bc{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(t){this.onCommittedListeners.push(t)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(t=>t())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function mr(n){if(n.code!==V.FAILED_PRECONDITION||n.message!==qc)throw n;U("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class k{constructor(t){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,t(e=>{this.isDone=!0,this.result=e,this.nextCallback&&this.nextCallback(e)},e=>{this.isDone=!0,this.error=e,this.catchCallback&&this.catchCallback(e)})}catch(t){return this.next(void 0,t)}next(t,e){return this.callbackAttached&&B(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(e,this.error):this.wrapSuccess(t,this.result):new k((r,s)=>{this.nextCallback=o=>{this.wrapSuccess(t,o).next(r,s)},this.catchCallback=o=>{this.wrapFailure(e,o).next(r,s)}})}toPromise(){return new Promise((t,e)=>{this.next(t,e)})}wrapUserFunction(t){try{const e=t();return e instanceof k?e:k.resolve(e)}catch(e){return k.reject(e)}}wrapSuccess(t,e){return t?this.wrapUserFunction(()=>t(e)):k.resolve(e)}wrapFailure(t,e){return t?this.wrapUserFunction(()=>t(e)):k.reject(e)}static resolve(t){return new k((e,r)=>{e(t)})}static reject(t){return new k((e,r)=>{r(t)})}static waitFor(t){return new k((e,r)=>{let s=0,o=0,a=!1;t.forEach(l=>{++s,l.next(()=>{++o,a&&o===s&&e()},h=>r(h))}),a=!0,o===s&&e()})}static or(t){let e=k.resolve(!1);for(const r of t)e=e.next(s=>s?k.resolve(s):r());return e}static forEach(t,e){const r=[];return t.forEach((s,o)=>{r.push(e.call(this,s,o))}),this.waitFor(r)}static mapArray(t,e){return new k((r,s)=>{const o=t.length,a=new Array(o);let l=0;for(let h=0;h<o;h++){const d=h;e(t[d]).next(p=>{a[d]=p,++l,l===o&&r(a)},p=>s(p))}})}static doWhile(t,e){return new k((r,s)=>{const o=()=>{t()===!0?e().next(()=>{o()},s):r()};o()})}}function jc(n){const t=n.match(/Android ([\d.]+)/i),e=t?t[1].split(".").slice(0,2).join("."):"-1";return Number(e)}function _r(n){return n.name==="IndexedDbTransactionError"}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _i{constructor(t,e){this.previousValue=t,e&&(e.sequenceNumberHandler=r=>this.ie(r),this.se=r=>e.writeSequenceNumber(r))}ie(t){return this.previousValue=Math.max(t,this.previousValue),this.previousValue}next(){const t=++this.previousValue;return this.se&&this.se(t),t}}_i.oe=-1;function gr(n){return n==null}function ns(n){return n===0&&1/n==-1/0}function zc(n){return typeof n=="number"&&Number.isInteger(n)&&!ns(n)&&n<=Number.MAX_SAFE_INTEGER&&n>=Number.MIN_SAFE_INTEGER}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function sa(n){let t=0;for(const e in n)Object.prototype.hasOwnProperty.call(n,e)&&t++;return t}function Xe(n,t){for(const e in n)Object.prototype.hasOwnProperty.call(n,e)&&t(e,n[e])}function pu(n){for(const t in n)if(Object.prototype.hasOwnProperty.call(n,t))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ct{constructor(t,e){this.comparator=t,this.root=e||bt.EMPTY}insert(t,e){return new ct(this.comparator,this.root.insert(t,e,this.comparator).copy(null,null,bt.BLACK,null,null))}remove(t){return new ct(this.comparator,this.root.remove(t,this.comparator).copy(null,null,bt.BLACK,null,null))}get(t){let e=this.root;for(;!e.isEmpty();){const r=this.comparator(t,e.key);if(r===0)return e.value;r<0?e=e.left:r>0&&(e=e.right)}return null}indexOf(t){let e=0,r=this.root;for(;!r.isEmpty();){const s=this.comparator(t,r.key);if(s===0)return e+r.left.size;s<0?r=r.left:(e+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(t){return this.root.inorderTraversal(t)}forEach(t){this.inorderTraversal((e,r)=>(t(e,r),!1))}toString(){const t=[];return this.inorderTraversal((e,r)=>(t.push(`${e}:${r}`),!1)),`{${t.join(", ")}}`}reverseTraversal(t){return this.root.reverseTraversal(t)}getIterator(){return new Gr(this.root,null,this.comparator,!1)}getIteratorFrom(t){return new Gr(this.root,t,this.comparator,!1)}getReverseIterator(){return new Gr(this.root,null,this.comparator,!0)}getReverseIteratorFrom(t){return new Gr(this.root,t,this.comparator,!0)}}class Gr{constructor(t,e,r,s){this.isReverse=s,this.nodeStack=[];let o=1;for(;!t.isEmpty();)if(o=e?r(t.key,e):1,e&&s&&(o*=-1),o<0)t=this.isReverse?t.left:t.right;else{if(o===0){this.nodeStack.push(t);break}this.nodeStack.push(t),t=this.isReverse?t.right:t.left}}getNext(){let t=this.nodeStack.pop();const e={key:t.key,value:t.value};if(this.isReverse)for(t=t.left;!t.isEmpty();)this.nodeStack.push(t),t=t.right;else for(t=t.right;!t.isEmpty();)this.nodeStack.push(t),t=t.left;return e}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const t=this.nodeStack[this.nodeStack.length-1];return{key:t.key,value:t.value}}}class bt{constructor(t,e,r,s,o){this.key=t,this.value=e,this.color=r??bt.RED,this.left=s??bt.EMPTY,this.right=o??bt.EMPTY,this.size=this.left.size+1+this.right.size}copy(t,e,r,s,o){return new bt(t??this.key,e??this.value,r??this.color,s??this.left,o??this.right)}isEmpty(){return!1}inorderTraversal(t){return this.left.inorderTraversal(t)||t(this.key,this.value)||this.right.inorderTraversal(t)}reverseTraversal(t){return this.right.reverseTraversal(t)||t(this.key,this.value)||this.left.reverseTraversal(t)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(t,e,r){let s=this;const o=r(t,s.key);return s=o<0?s.copy(null,null,null,s.left.insert(t,e,r),null):o===0?s.copy(null,e,null,null,null):s.copy(null,null,null,null,s.right.insert(t,e,r)),s.fixUp()}removeMin(){if(this.left.isEmpty())return bt.EMPTY;let t=this;return t.left.isRed()||t.left.left.isRed()||(t=t.moveRedLeft()),t=t.copy(null,null,null,t.left.removeMin(),null),t.fixUp()}remove(t,e){let r,s=this;if(e(t,s.key)<0)s.left.isEmpty()||s.left.isRed()||s.left.left.isRed()||(s=s.moveRedLeft()),s=s.copy(null,null,null,s.left.remove(t,e),null);else{if(s.left.isRed()&&(s=s.rotateRight()),s.right.isEmpty()||s.right.isRed()||s.right.left.isRed()||(s=s.moveRedRight()),e(t,s.key)===0){if(s.right.isEmpty())return bt.EMPTY;r=s.right.min(),s=s.copy(r.key,r.value,null,null,s.right.removeMin())}s=s.copy(null,null,null,null,s.right.remove(t,e))}return s.fixUp()}isRed(){return this.color}fixUp(){let t=this;return t.right.isRed()&&!t.left.isRed()&&(t=t.rotateLeft()),t.left.isRed()&&t.left.left.isRed()&&(t=t.rotateRight()),t.left.isRed()&&t.right.isRed()&&(t=t.colorFlip()),t}moveRedLeft(){let t=this.colorFlip();return t.right.left.isRed()&&(t=t.copy(null,null,null,null,t.right.rotateRight()),t=t.rotateLeft(),t=t.colorFlip()),t}moveRedRight(){let t=this.colorFlip();return t.left.left.isRed()&&(t=t.rotateRight(),t=t.colorFlip()),t}rotateLeft(){const t=this.copy(null,null,bt.RED,null,this.right.left);return this.right.copy(null,null,this.color,t,null)}rotateRight(){const t=this.copy(null,null,bt.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,t)}colorFlip(){const t=this.left.copy(null,null,!this.left.color,null,null),e=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,t,e)}checkMaxDepth(){const t=this.check();return Math.pow(2,t)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw B();const t=this.left.check();if(t!==this.right.check())throw B();return t+(this.isRed()?0:1)}}bt.EMPTY=null,bt.RED=!0,bt.BLACK=!1;bt.EMPTY=new class{constructor(){this.size=0}get key(){throw B()}get value(){throw B()}get color(){throw B()}get left(){throw B()}get right(){throw B()}copy(t,e,r,s,o){return this}insert(t,e,r){return new bt(t,e)}remove(t,e){return this}isEmpty(){return!0}inorderTraversal(t){return!1}reverseTraversal(t){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vt{constructor(t){this.comparator=t,this.data=new ct(this.comparator)}has(t){return this.data.get(t)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(t){return this.data.indexOf(t)}forEach(t){this.data.inorderTraversal((e,r)=>(t(e),!1))}forEachInRange(t,e){const r=this.data.getIteratorFrom(t[0]);for(;r.hasNext();){const s=r.getNext();if(this.comparator(s.key,t[1])>=0)return;e(s.key)}}forEachWhile(t,e){let r;for(r=e!==void 0?this.data.getIteratorFrom(e):this.data.getIterator();r.hasNext();)if(!t(r.getNext().key))return}firstAfterOrEqual(t){const e=this.data.getIteratorFrom(t);return e.hasNext()?e.getNext().key:null}getIterator(){return new ia(this.data.getIterator())}getIteratorFrom(t){return new ia(this.data.getIteratorFrom(t))}add(t){return this.copy(this.data.remove(t).insert(t,!0))}delete(t){return this.has(t)?this.copy(this.data.remove(t)):this}isEmpty(){return this.data.isEmpty()}unionWith(t){let e=this;return e.size<t.size&&(e=t,t=this),t.forEach(r=>{e=e.add(r)}),e}isEqual(t){if(!(t instanceof Vt)||this.size!==t.size)return!1;const e=this.data.getIterator(),r=t.data.getIterator();for(;e.hasNext();){const s=e.getNext().key,o=r.getNext().key;if(this.comparator(s,o)!==0)return!1}return!0}toArray(){const t=[];return this.forEach(e=>{t.push(e)}),t}toString(){const t=[];return this.forEach(e=>t.push(e)),"SortedSet("+t.toString()+")"}copy(t){const e=new Vt(this.comparator);return e.data=t,e}}class ia{constructor(t){this.iter=t}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kt{constructor(t){this.fields=t,t.sort(Ct.comparator)}static empty(){return new Kt([])}unionWith(t){let e=new Vt(Ct.comparator);for(const r of this.fields)e=e.add(r);for(const r of t)e=e.add(r);return new Kt(e.toArray())}covers(t){for(const e of this.fields)if(e.isPrefixOf(t))return!0;return!1}isEqual(t){return yn(this.fields,t.fields,(e,r)=>e.isEqual(r))}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mu extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class St{constructor(t){this.binaryString=t}static fromBase64String(t){const e=function(s){try{return atob(s)}catch(o){throw typeof DOMException<"u"&&o instanceof DOMException?new mu("Invalid base64 string: "+o):o}}(t);return new St(e)}static fromUint8Array(t){const e=function(s){let o="";for(let a=0;a<s.length;++a)o+=String.fromCharCode(s[a]);return o}(t);return new St(e)}[Symbol.iterator](){let t=0;return{next:()=>t<this.binaryString.length?{value:this.binaryString.charCodeAt(t++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(e){return btoa(e)}(this.binaryString)}toUint8Array(){return function(e){const r=new Uint8Array(e.length);for(let s=0;s<e.length;s++)r[s]=e.charCodeAt(s);return r}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(t){return et(this.binaryString,t.binaryString)}isEqual(t){return this.binaryString===t.binaryString}}St.EMPTY_BYTE_STRING=new St("");const $c=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function Ce(n){if(Y(!!n),typeof n=="string"){let t=0;const e=$c.exec(n);if(Y(!!e),e[1]){let s=e[1];s=(s+"000000000").substr(0,9),t=Number(s)}const r=new Date(n);return{seconds:Math.floor(r.getTime()/1e3),nanos:t}}return{seconds:mt(n.seconds),nanos:mt(n.nanos)}}function mt(n){return typeof n=="number"?n:typeof n=="string"?Number(n):0}function Ke(n){return typeof n=="string"?St.fromBase64String(n):St.fromUint8Array(n)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function gi(n){var t,e;return((e=(((t=n==null?void 0:n.mapValue)===null||t===void 0?void 0:t.fields)||{}).__type__)===null||e===void 0?void 0:e.stringValue)==="server_timestamp"}function yi(n){const t=n.mapValue.fields.__previous_value__;return gi(t)?yi(t):t}function ur(n){const t=Ce(n.mapValue.fields.__local_write_time__.timestampValue);return new Tt(t.seconds,t.nanos)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gc{constructor(t,e,r,s,o,a,l,h,d){this.databaseId=t,this.appId=e,this.persistenceKey=r,this.host=s,this.ssl=o,this.forceLongPolling=a,this.autoDetectLongPolling=l,this.longPollingOptions=h,this.useFetchStreams=d}}class lr{constructor(t,e){this.projectId=t,this.database=e||"(default)"}static empty(){return new lr("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(t){return t instanceof lr&&t.projectId===this.projectId&&t.database===this.database}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Kr={mapValue:{}};function Qe(n){return"nullValue"in n?0:"booleanValue"in n?1:"integerValue"in n||"doubleValue"in n?2:"timestampValue"in n?3:"stringValue"in n?5:"bytesValue"in n?6:"referenceValue"in n?7:"geoPointValue"in n?8:"arrayValue"in n?9:"mapValue"in n?gi(n)?4:Qc(n)?9007199254740991:Kc(n)?10:11:B()}function ie(n,t){if(n===t)return!0;const e=Qe(n);if(e!==Qe(t))return!1;switch(e){case 0:case 9007199254740991:return!0;case 1:return n.booleanValue===t.booleanValue;case 4:return ur(n).isEqual(ur(t));case 3:return function(s,o){if(typeof s.timestampValue=="string"&&typeof o.timestampValue=="string"&&s.timestampValue.length===o.timestampValue.length)return s.timestampValue===o.timestampValue;const a=Ce(s.timestampValue),l=Ce(o.timestampValue);return a.seconds===l.seconds&&a.nanos===l.nanos}(n,t);case 5:return n.stringValue===t.stringValue;case 6:return function(s,o){return Ke(s.bytesValue).isEqual(Ke(o.bytesValue))}(n,t);case 7:return n.referenceValue===t.referenceValue;case 8:return function(s,o){return mt(s.geoPointValue.latitude)===mt(o.geoPointValue.latitude)&&mt(s.geoPointValue.longitude)===mt(o.geoPointValue.longitude)}(n,t);case 2:return function(s,o){if("integerValue"in s&&"integerValue"in o)return mt(s.integerValue)===mt(o.integerValue);if("doubleValue"in s&&"doubleValue"in o){const a=mt(s.doubleValue),l=mt(o.doubleValue);return a===l?ns(a)===ns(l):isNaN(a)&&isNaN(l)}return!1}(n,t);case 9:return yn(n.arrayValue.values||[],t.arrayValue.values||[],ie);case 10:case 11:return function(s,o){const a=s.mapValue.fields||{},l=o.mapValue.fields||{};if(sa(a)!==sa(l))return!1;for(const h in a)if(a.hasOwnProperty(h)&&(l[h]===void 0||!ie(a[h],l[h])))return!1;return!0}(n,t);default:return B()}}function cr(n,t){return(n.values||[]).find(e=>ie(e,t))!==void 0}function vn(n,t){if(n===t)return 0;const e=Qe(n),r=Qe(t);if(e!==r)return et(e,r);switch(e){case 0:case 9007199254740991:return 0;case 1:return et(n.booleanValue,t.booleanValue);case 2:return function(o,a){const l=mt(o.integerValue||o.doubleValue),h=mt(a.integerValue||a.doubleValue);return l<h?-1:l>h?1:l===h?0:isNaN(l)?isNaN(h)?0:-1:1}(n,t);case 3:return oa(n.timestampValue,t.timestampValue);case 4:return oa(ur(n),ur(t));case 5:return et(n.stringValue,t.stringValue);case 6:return function(o,a){const l=Ke(o),h=Ke(a);return l.compareTo(h)}(n.bytesValue,t.bytesValue);case 7:return function(o,a){const l=o.split("/"),h=a.split("/");for(let d=0;d<l.length&&d<h.length;d++){const p=et(l[d],h[d]);if(p!==0)return p}return et(l.length,h.length)}(n.referenceValue,t.referenceValue);case 8:return function(o,a){const l=et(mt(o.latitude),mt(a.latitude));return l!==0?l:et(mt(o.longitude),mt(a.longitude))}(n.geoPointValue,t.geoPointValue);case 9:return aa(n.arrayValue,t.arrayValue);case 10:return function(o,a){var l,h,d,p;const y=o.fields||{},A=a.fields||{},C=(l=y.value)===null||l===void 0?void 0:l.arrayValue,N=(h=A.value)===null||h===void 0?void 0:h.arrayValue,L=et(((d=C==null?void 0:C.values)===null||d===void 0?void 0:d.length)||0,((p=N==null?void 0:N.values)===null||p===void 0?void 0:p.length)||0);return L!==0?L:aa(C,N)}(n.mapValue,t.mapValue);case 11:return function(o,a){if(o===Kr.mapValue&&a===Kr.mapValue)return 0;if(o===Kr.mapValue)return 1;if(a===Kr.mapValue)return-1;const l=o.fields||{},h=Object.keys(l),d=a.fields||{},p=Object.keys(d);h.sort(),p.sort();for(let y=0;y<h.length&&y<p.length;++y){const A=et(h[y],p[y]);if(A!==0)return A;const C=vn(l[h[y]],d[p[y]]);if(C!==0)return C}return et(h.length,p.length)}(n.mapValue,t.mapValue);default:throw B()}}function oa(n,t){if(typeof n=="string"&&typeof t=="string"&&n.length===t.length)return et(n,t);const e=Ce(n),r=Ce(t),s=et(e.seconds,r.seconds);return s!==0?s:et(e.nanos,r.nanos)}function aa(n,t){const e=n.values||[],r=t.values||[];for(let s=0;s<e.length&&s<r.length;++s){const o=vn(e[s],r[s]);if(o)return o}return et(e.length,r.length)}function Tn(n){return ti(n)}function ti(n){return"nullValue"in n?"null":"booleanValue"in n?""+n.booleanValue:"integerValue"in n?""+n.integerValue:"doubleValue"in n?""+n.doubleValue:"timestampValue"in n?function(e){const r=Ce(e);return`time(${r.seconds},${r.nanos})`}(n.timestampValue):"stringValue"in n?n.stringValue:"bytesValue"in n?function(e){return Ke(e).toBase64()}(n.bytesValue):"referenceValue"in n?function(e){return q.fromName(e).toString()}(n.referenceValue):"geoPointValue"in n?function(e){return`geo(${e.latitude},${e.longitude})`}(n.geoPointValue):"arrayValue"in n?function(e){let r="[",s=!0;for(const o of e.values||[])s?s=!1:r+=",",r+=ti(o);return r+"]"}(n.arrayValue):"mapValue"in n?function(e){const r=Object.keys(e.fields||{}).sort();let s="{",o=!0;for(const a of r)o?o=!1:s+=",",s+=`${a}:${ti(e.fields[a])}`;return s+"}"}(n.mapValue):B()}function ua(n,t){return{referenceValue:`projects/${n.projectId}/databases/${n.database}/documents/${t.path.canonicalString()}`}}function ei(n){return!!n&&"integerValue"in n}function vi(n){return!!n&&"arrayValue"in n}function la(n){return!!n&&"nullValue"in n}function ca(n){return!!n&&"doubleValue"in n&&isNaN(Number(n.doubleValue))}function Yr(n){return!!n&&"mapValue"in n}function Kc(n){var t,e;return((e=(((t=n==null?void 0:n.mapValue)===null||t===void 0?void 0:t.fields)||{}).__type__)===null||e===void 0?void 0:e.stringValue)==="__vector__"}function er(n){if(n.geoPointValue)return{geoPointValue:Object.assign({},n.geoPointValue)};if(n.timestampValue&&typeof n.timestampValue=="object")return{timestampValue:Object.assign({},n.timestampValue)};if(n.mapValue){const t={mapValue:{fields:{}}};return Xe(n.mapValue.fields,(e,r)=>t.mapValue.fields[e]=er(r)),t}if(n.arrayValue){const t={arrayValue:{values:[]}};for(let e=0;e<(n.arrayValue.values||[]).length;++e)t.arrayValue.values[e]=er(n.arrayValue.values[e]);return t}return Object.assign({},n)}function Qc(n){return(((n.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qt{constructor(t){this.value=t}static empty(){return new qt({mapValue:{}})}field(t){if(t.isEmpty())return this.value;{let e=this.value;for(let r=0;r<t.length-1;++r)if(e=(e.mapValue.fields||{})[t.get(r)],!Yr(e))return null;return e=(e.mapValue.fields||{})[t.lastSegment()],e||null}}set(t,e){this.getFieldsMap(t.popLast())[t.lastSegment()]=er(e)}setAll(t){let e=Ct.emptyPath(),r={},s=[];t.forEach((a,l)=>{if(!e.isImmediateParentOf(l)){const h=this.getFieldsMap(e);this.applyChanges(h,r,s),r={},s=[],e=l.popLast()}a?r[l.lastSegment()]=er(a):s.push(l.lastSegment())});const o=this.getFieldsMap(e);this.applyChanges(o,r,s)}delete(t){const e=this.field(t.popLast());Yr(e)&&e.mapValue.fields&&delete e.mapValue.fields[t.lastSegment()]}isEqual(t){return ie(this.value,t.value)}getFieldsMap(t){let e=this.value;e.mapValue.fields||(e.mapValue={fields:{}});for(let r=0;r<t.length;++r){let s=e.mapValue.fields[t.get(r)];Yr(s)&&s.mapValue.fields||(s={mapValue:{fields:{}}},e.mapValue.fields[t.get(r)]=s),e=s}return e.mapValue.fields}applyChanges(t,e,r){Xe(e,(s,o)=>t[s]=o);for(const s of r)delete t[s]}clone(){return new qt(er(this.value))}}function _u(n){const t=[];return Xe(n.fields,(e,r)=>{const s=new Ct([e]);if(Yr(r)){const o=_u(r.mapValue).fields;if(o.length===0)t.push(s);else for(const a of o)t.push(s.child(a))}else t.push(s)}),new Kt(t)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class At{constructor(t,e,r,s,o,a,l){this.key=t,this.documentType=e,this.version=r,this.readTime=s,this.createTime=o,this.data=a,this.documentState=l}static newInvalidDocument(t){return new At(t,0,z.min(),z.min(),z.min(),qt.empty(),0)}static newFoundDocument(t,e,r,s){return new At(t,1,e,z.min(),r,s,0)}static newNoDocument(t,e){return new At(t,2,e,z.min(),z.min(),qt.empty(),0)}static newUnknownDocument(t,e){return new At(t,3,e,z.min(),z.min(),qt.empty(),2)}convertToFoundDocument(t,e){return!this.createTime.isEqual(z.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=t),this.version=t,this.documentType=1,this.data=e,this.documentState=0,this}convertToNoDocument(t){return this.version=t,this.documentType=2,this.data=qt.empty(),this.documentState=0,this}convertToUnknownDocument(t){return this.version=t,this.documentType=3,this.data=qt.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=z.min(),this}setReadTime(t){return this.readTime=t,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(t){return t instanceof At&&this.key.isEqual(t.key)&&this.version.isEqual(t.version)&&this.documentType===t.documentType&&this.documentState===t.documentState&&this.data.isEqual(t.data)}mutableCopy(){return new At(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rs{constructor(t,e){this.position=t,this.inclusive=e}}function ha(n,t,e){let r=0;for(let s=0;s<n.position.length;s++){const o=t[s],a=n.position[s];if(o.field.isKeyField()?r=q.comparator(q.fromName(a.referenceValue),e.key):r=vn(a,e.data.field(o.field)),o.dir==="desc"&&(r*=-1),r!==0)break}return r}function da(n,t){if(n===null)return t===null;if(t===null||n.inclusive!==t.inclusive||n.position.length!==t.position.length)return!1;for(let e=0;e<n.position.length;e++)if(!ie(n.position[e],t.position[e]))return!1;return!0}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hr{constructor(t,e="asc"){this.field=t,this.dir=e}}function Wc(n,t){return n.dir===t.dir&&n.field.isEqual(t.field)}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gu{}class gt extends gu{constructor(t,e,r){super(),this.field=t,this.op=e,this.value=r}static create(t,e,r){return t.isKeyField()?e==="in"||e==="not-in"?this.createKeyFieldInFilter(t,e,r):new Xc(t,e,r):e==="array-contains"?new Zc(t,r):e==="in"?new th(t,r):e==="not-in"?new eh(t,r):e==="array-contains-any"?new nh(t,r):new gt(t,e,r)}static createKeyFieldInFilter(t,e,r){return e==="in"?new Yc(t,r):new Jc(t,r)}matches(t){const e=t.data.field(this.field);return this.op==="!="?e!==null&&this.matchesComparison(vn(e,this.value)):e!==null&&Qe(this.value)===Qe(e)&&this.matchesComparison(vn(e,this.value))}matchesComparison(t){switch(this.op){case"<":return t<0;case"<=":return t<=0;case"==":return t===0;case"!=":return t!==0;case">":return t>0;case">=":return t>=0;default:return B()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class Zt extends gu{constructor(t,e){super(),this.filters=t,this.op=e,this.ae=null}static create(t,e){return new Zt(t,e)}matches(t){return yu(this)?this.filters.find(e=>!e.matches(t))===void 0:this.filters.find(e=>e.matches(t))!==void 0}getFlattenedFilters(){return this.ae!==null||(this.ae=this.filters.reduce((t,e)=>t.concat(e.getFlattenedFilters()),[])),this.ae}getFilters(){return Object.assign([],this.filters)}}function yu(n){return n.op==="and"}function vu(n){return Hc(n)&&yu(n)}function Hc(n){for(const t of n.filters)if(t instanceof Zt)return!1;return!0}function ni(n){if(n instanceof gt)return n.field.canonicalString()+n.op.toString()+Tn(n.value);if(vu(n))return n.filters.map(t=>ni(t)).join(",");{const t=n.filters.map(e=>ni(e)).join(",");return`${n.op}(${t})`}}function Tu(n,t){return n instanceof gt?function(r,s){return s instanceof gt&&r.op===s.op&&r.field.isEqual(s.field)&&ie(r.value,s.value)}(n,t):n instanceof Zt?function(r,s){return s instanceof Zt&&r.op===s.op&&r.filters.length===s.filters.length?r.filters.reduce((o,a,l)=>o&&Tu(a,s.filters[l]),!0):!1}(n,t):void B()}function Eu(n){return n instanceof gt?function(e){return`${e.field.canonicalString()} ${e.op} ${Tn(e.value)}`}(n):n instanceof Zt?function(e){return e.op.toString()+" {"+e.getFilters().map(Eu).join(" ,")+"}"}(n):"Filter"}class Xc extends gt{constructor(t,e,r){super(t,e,r),this.key=q.fromName(r.referenceValue)}matches(t){const e=q.comparator(t.key,this.key);return this.matchesComparison(e)}}class Yc extends gt{constructor(t,e){super(t,"in",e),this.keys=wu("in",e)}matches(t){return this.keys.some(e=>e.isEqual(t.key))}}class Jc extends gt{constructor(t,e){super(t,"not-in",e),this.keys=wu("not-in",e)}matches(t){return!this.keys.some(e=>e.isEqual(t.key))}}function wu(n,t){var e;return(((e=t.arrayValue)===null||e===void 0?void 0:e.values)||[]).map(r=>q.fromName(r.referenceValue))}class Zc extends gt{constructor(t,e){super(t,"array-contains",e)}matches(t){const e=t.data.field(this.field);return vi(e)&&cr(e.arrayValue,this.value)}}class th extends gt{constructor(t,e){super(t,"in",e)}matches(t){const e=t.data.field(this.field);return e!==null&&cr(this.value.arrayValue,e)}}class eh extends gt{constructor(t,e){super(t,"not-in",e)}matches(t){if(cr(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const e=t.data.field(this.field);return e!==null&&!cr(this.value.arrayValue,e)}}class nh extends gt{constructor(t,e){super(t,"array-contains-any",e)}matches(t){const e=t.data.field(this.field);return!(!vi(e)||!e.arrayValue.values)&&e.arrayValue.values.some(r=>cr(this.value.arrayValue,r))}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rh{constructor(t,e=null,r=[],s=[],o=null,a=null,l=null){this.path=t,this.collectionGroup=e,this.orderBy=r,this.filters=s,this.limit=o,this.startAt=a,this.endAt=l,this.ue=null}}function fa(n,t=null,e=[],r=[],s=null,o=null,a=null){return new rh(n,t,e,r,s,o,a)}function Ti(n){const t=G(n);if(t.ue===null){let e=t.path.canonicalString();t.collectionGroup!==null&&(e+="|cg:"+t.collectionGroup),e+="|f:",e+=t.filters.map(r=>ni(r)).join(","),e+="|ob:",e+=t.orderBy.map(r=>function(o){return o.field.canonicalString()+o.dir}(r)).join(","),gr(t.limit)||(e+="|l:",e+=t.limit),t.startAt&&(e+="|lb:",e+=t.startAt.inclusive?"b:":"a:",e+=t.startAt.position.map(r=>Tn(r)).join(",")),t.endAt&&(e+="|ub:",e+=t.endAt.inclusive?"a:":"b:",e+=t.endAt.position.map(r=>Tn(r)).join(",")),t.ue=e}return t.ue}function Ei(n,t){if(n.limit!==t.limit||n.orderBy.length!==t.orderBy.length)return!1;for(let e=0;e<n.orderBy.length;e++)if(!Wc(n.orderBy[e],t.orderBy[e]))return!1;if(n.filters.length!==t.filters.length)return!1;for(let e=0;e<n.filters.length;e++)if(!Tu(n.filters[e],t.filters[e]))return!1;return n.collectionGroup===t.collectionGroup&&!!n.path.isEqual(t.path)&&!!da(n.startAt,t.startAt)&&da(n.endAt,t.endAt)}function ri(n){return q.isDocumentKey(n.path)&&n.collectionGroup===null&&n.filters.length===0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rn{constructor(t,e=null,r=[],s=[],o=null,a="F",l=null,h=null){this.path=t,this.collectionGroup=e,this.explicitOrderBy=r,this.filters=s,this.limit=o,this.limitType=a,this.startAt=l,this.endAt=h,this.ce=null,this.le=null,this.he=null,this.startAt,this.endAt}}function sh(n,t,e,r,s,o,a,l){return new Rn(n,t,e,r,s,o,a,l)}function wi(n){return new Rn(n)}function pa(n){return n.filters.length===0&&n.limit===null&&n.startAt==null&&n.endAt==null&&(n.explicitOrderBy.length===0||n.explicitOrderBy.length===1&&n.explicitOrderBy[0].field.isKeyField())}function Iu(n){return n.collectionGroup!==null}function nr(n){const t=G(n);if(t.ce===null){t.ce=[];const e=new Set;for(const o of t.explicitOrderBy)t.ce.push(o),e.add(o.field.canonicalString());const r=t.explicitOrderBy.length>0?t.explicitOrderBy[t.explicitOrderBy.length-1].dir:"asc";(function(a){let l=new Vt(Ct.comparator);return a.filters.forEach(h=>{h.getFlattenedFilters().forEach(d=>{d.isInequality()&&(l=l.add(d.field))})}),l})(t).forEach(o=>{e.has(o.canonicalString())||o.isKeyField()||t.ce.push(new hr(o,r))}),e.has(Ct.keyField().canonicalString())||t.ce.push(new hr(Ct.keyField(),r))}return t.ce}function se(n){const t=G(n);return t.le||(t.le=ih(t,nr(n))),t.le}function ih(n,t){if(n.limitType==="F")return fa(n.path,n.collectionGroup,t,n.filters,n.limit,n.startAt,n.endAt);{t=t.map(s=>{const o=s.dir==="desc"?"asc":"desc";return new hr(s.field,o)});const e=n.endAt?new rs(n.endAt.position,n.endAt.inclusive):null,r=n.startAt?new rs(n.startAt.position,n.startAt.inclusive):null;return fa(n.path,n.collectionGroup,t,n.filters,n.limit,e,r)}}function si(n,t){const e=n.filters.concat([t]);return new Rn(n.path,n.collectionGroup,n.explicitOrderBy.slice(),e,n.limit,n.limitType,n.startAt,n.endAt)}function ss(n,t,e){return new Rn(n.path,n.collectionGroup,n.explicitOrderBy.slice(),n.filters.slice(),t,e,n.startAt,n.endAt)}function fs(n,t){return Ei(se(n),se(t))&&n.limitType===t.limitType}function Au(n){return`${Ti(se(n))}|lt:${n.limitType}`}function dn(n){return`Query(target=${function(e){let r=e.path.canonicalString();return e.collectionGroup!==null&&(r+=" collectionGroup="+e.collectionGroup),e.filters.length>0&&(r+=`, filters: [${e.filters.map(s=>Eu(s)).join(", ")}]`),gr(e.limit)||(r+=", limit: "+e.limit),e.orderBy.length>0&&(r+=`, orderBy: [${e.orderBy.map(s=>function(a){return`${a.field.canonicalString()} (${a.dir})`}(s)).join(", ")}]`),e.startAt&&(r+=", startAt: ",r+=e.startAt.inclusive?"b:":"a:",r+=e.startAt.position.map(s=>Tn(s)).join(",")),e.endAt&&(r+=", endAt: ",r+=e.endAt.inclusive?"a:":"b:",r+=e.endAt.position.map(s=>Tn(s)).join(",")),`Target(${r})`}(se(n))}; limitType=${n.limitType})`}function ps(n,t){return t.isFoundDocument()&&function(r,s){const o=s.key.path;return r.collectionGroup!==null?s.key.hasCollectionId(r.collectionGroup)&&r.path.isPrefixOf(o):q.isDocumentKey(r.path)?r.path.isEqual(o):r.path.isImmediateParentOf(o)}(n,t)&&function(r,s){for(const o of nr(r))if(!o.field.isKeyField()&&s.data.field(o.field)===null)return!1;return!0}(n,t)&&function(r,s){for(const o of r.filters)if(!o.matches(s))return!1;return!0}(n,t)&&function(r,s){return!(r.startAt&&!function(a,l,h){const d=ha(a,l,h);return a.inclusive?d<=0:d<0}(r.startAt,nr(r),s)||r.endAt&&!function(a,l,h){const d=ha(a,l,h);return a.inclusive?d>=0:d>0}(r.endAt,nr(r),s))}(n,t)}function oh(n){return n.collectionGroup||(n.path.length%2==1?n.path.lastSegment():n.path.get(n.path.length-2))}function Ru(n){return(t,e)=>{let r=!1;for(const s of nr(n)){const o=ah(s,t,e);if(o!==0)return o;r=r||s.field.isKeyField()}return 0}}function ah(n,t,e){const r=n.field.isKeyField()?q.comparator(t.key,e.key):function(o,a,l){const h=a.data.field(o),d=l.data.field(o);return h!==null&&d!==null?vn(h,d):B()}(n.field,t,e);switch(n.dir){case"asc":return r;case"desc":return-1*r;default:return B()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pn{constructor(t,e){this.mapKeyFn=t,this.equalsFn=e,this.inner={},this.innerSize=0}get(t){const e=this.mapKeyFn(t),r=this.inner[e];if(r!==void 0){for(const[s,o]of r)if(this.equalsFn(s,t))return o}}has(t){return this.get(t)!==void 0}set(t,e){const r=this.mapKeyFn(t),s=this.inner[r];if(s===void 0)return this.inner[r]=[[t,e]],void this.innerSize++;for(let o=0;o<s.length;o++)if(this.equalsFn(s[o][0],t))return void(s[o]=[t,e]);s.push([t,e]),this.innerSize++}delete(t){const e=this.mapKeyFn(t),r=this.inner[e];if(r===void 0)return!1;for(let s=0;s<r.length;s++)if(this.equalsFn(r[s][0],t))return r.length===1?delete this.inner[e]:r.splice(s,1),this.innerSize--,!0;return!1}forEach(t){Xe(this.inner,(e,r)=>{for(const[s,o]of r)t(s,o)})}isEmpty(){return pu(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const uh=new ct(q.comparator);function he(){return uh}const Pu=new ct(q.comparator);function Zn(...n){let t=Pu;for(const e of n)t=t.insert(e.key,e);return t}function bu(n){let t=Pu;return n.forEach((e,r)=>t=t.insert(e,r.overlayedDocument)),t}function Be(){return rr()}function Cu(){return rr()}function rr(){return new Pn(n=>n.toString(),(n,t)=>n.isEqual(t))}const lh=new ct(q.comparator),ch=new Vt(q.comparator);function W(...n){let t=ch;for(const e of n)t=t.add(e);return t}const hh=new Vt(et);function dh(){return hh}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ii(n,t){if(n.useProto3Json){if(isNaN(t))return{doubleValue:"NaN"};if(t===1/0)return{doubleValue:"Infinity"};if(t===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:ns(t)?"-0":t}}function Vu(n){return{integerValue:""+n}}function fh(n,t){return zc(t)?Vu(t):Ii(n,t)}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ms{constructor(){this._=void 0}}function ph(n,t,e){return n instanceof dr?function(s,o){const a={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:s.seconds,nanos:s.nanoseconds}}}};return o&&gi(o)&&(o=yi(o)),o&&(a.fields.__previous_value__=o),{mapValue:a}}(e,t):n instanceof fr?ku(n,t):n instanceof pr?Nu(n,t):function(s,o){const a=Su(s,o),l=ma(a)+ma(s.Pe);return ei(a)&&ei(s.Pe)?Vu(l):Ii(s.serializer,l)}(n,t)}function mh(n,t,e){return n instanceof fr?ku(n,t):n instanceof pr?Nu(n,t):e}function Su(n,t){return n instanceof is?function(r){return ei(r)||function(o){return!!o&&"doubleValue"in o}(r)}(t)?t:{integerValue:0}:null}class dr extends ms{}class fr extends ms{constructor(t){super(),this.elements=t}}function ku(n,t){const e=Du(t);for(const r of n.elements)e.some(s=>ie(s,r))||e.push(r);return{arrayValue:{values:e}}}class pr extends ms{constructor(t){super(),this.elements=t}}function Nu(n,t){let e=Du(t);for(const r of n.elements)e=e.filter(s=>!ie(s,r));return{arrayValue:{values:e}}}class is extends ms{constructor(t,e){super(),this.serializer=t,this.Pe=e}}function ma(n){return mt(n.integerValue||n.doubleValue)}function Du(n){return vi(n)&&n.arrayValue.values?n.arrayValue.values.slice():[]}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _h{constructor(t,e){this.field=t,this.transform=e}}function gh(n,t){return n.field.isEqual(t.field)&&function(r,s){return r instanceof fr&&s instanceof fr||r instanceof pr&&s instanceof pr?yn(r.elements,s.elements,ie):r instanceof is&&s instanceof is?ie(r.Pe,s.Pe):r instanceof dr&&s instanceof dr}(n.transform,t.transform)}class yh{constructor(t,e){this.version=t,this.transformResults=e}}class Bt{constructor(t,e){this.updateTime=t,this.exists=e}static none(){return new Bt}static exists(t){return new Bt(void 0,t)}static updateTime(t){return new Bt(t)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(t){return this.exists===t.exists&&(this.updateTime?!!t.updateTime&&this.updateTime.isEqual(t.updateTime):!t.updateTime)}}function Jr(n,t){return n.updateTime!==void 0?t.isFoundDocument()&&t.version.isEqual(n.updateTime):n.exists===void 0||n.exists===t.isFoundDocument()}class _s{}function xu(n,t){if(!n.hasLocalMutations||t&&t.fields.length===0)return null;if(t===null)return n.isNoDocument()?new gs(n.key,Bt.none()):new yr(n.key,n.data,Bt.none());{const e=n.data,r=qt.empty();let s=new Vt(Ct.comparator);for(let o of t.fields)if(!s.has(o)){let a=e.field(o);a===null&&o.length>1&&(o=o.popLast(),a=e.field(o)),a===null?r.delete(o):r.set(o,a),s=s.add(o)}return new Se(n.key,r,new Kt(s.toArray()),Bt.none())}}function vh(n,t,e){n instanceof yr?function(s,o,a){const l=s.value.clone(),h=ga(s.fieldTransforms,o,a.transformResults);l.setAll(h),o.convertToFoundDocument(a.version,l).setHasCommittedMutations()}(n,t,e):n instanceof Se?function(s,o,a){if(!Jr(s.precondition,o))return void o.convertToUnknownDocument(a.version);const l=ga(s.fieldTransforms,o,a.transformResults),h=o.data;h.setAll(Ou(s)),h.setAll(l),o.convertToFoundDocument(a.version,h).setHasCommittedMutations()}(n,t,e):function(s,o,a){o.convertToNoDocument(a.version).setHasCommittedMutations()}(0,t,e)}function sr(n,t,e,r){return n instanceof yr?function(o,a,l,h){if(!Jr(o.precondition,a))return l;const d=o.value.clone(),p=ya(o.fieldTransforms,h,a);return d.setAll(p),a.convertToFoundDocument(a.version,d).setHasLocalMutations(),null}(n,t,e,r):n instanceof Se?function(o,a,l,h){if(!Jr(o.precondition,a))return l;const d=ya(o.fieldTransforms,h,a),p=a.data;return p.setAll(Ou(o)),p.setAll(d),a.convertToFoundDocument(a.version,p).setHasLocalMutations(),l===null?null:l.unionWith(o.fieldMask.fields).unionWith(o.fieldTransforms.map(y=>y.field))}(n,t,e,r):function(o,a,l){return Jr(o.precondition,a)?(a.convertToNoDocument(a.version).setHasLocalMutations(),null):l}(n,t,e)}function Th(n,t){let e=null;for(const r of n.fieldTransforms){const s=t.data.field(r.field),o=Su(r.transform,s||null);o!=null&&(e===null&&(e=qt.empty()),e.set(r.field,o))}return e||null}function _a(n,t){return n.type===t.type&&!!n.key.isEqual(t.key)&&!!n.precondition.isEqual(t.precondition)&&!!function(r,s){return r===void 0&&s===void 0||!(!r||!s)&&yn(r,s,(o,a)=>gh(o,a))}(n.fieldTransforms,t.fieldTransforms)&&(n.type===0?n.value.isEqual(t.value):n.type!==1||n.data.isEqual(t.data)&&n.fieldMask.isEqual(t.fieldMask))}class yr extends _s{constructor(t,e,r,s=[]){super(),this.key=t,this.value=e,this.precondition=r,this.fieldTransforms=s,this.type=0}getFieldMask(){return null}}class Se extends _s{constructor(t,e,r,s,o=[]){super(),this.key=t,this.data=e,this.fieldMask=r,this.precondition=s,this.fieldTransforms=o,this.type=1}getFieldMask(){return this.fieldMask}}function Ou(n){const t=new Map;return n.fieldMask.fields.forEach(e=>{if(!e.isEmpty()){const r=n.data.field(e);t.set(e,r)}}),t}function ga(n,t,e){const r=new Map;Y(n.length===e.length);for(let s=0;s<e.length;s++){const o=n[s],a=o.transform,l=t.data.field(o.field);r.set(o.field,mh(a,l,e[s]))}return r}function ya(n,t,e){const r=new Map;for(const s of n){const o=s.transform,a=e.data.field(s.field);r.set(s.field,ph(o,a,t))}return r}class gs extends _s{constructor(t,e){super(),this.key=t,this.precondition=e,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class Lu extends _s{constructor(t,e){super(),this.key=t,this.precondition=e,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Eh{constructor(t,e,r,s){this.batchId=t,this.localWriteTime=e,this.baseMutations=r,this.mutations=s}applyToRemoteDocument(t,e){const r=e.mutationResults;for(let s=0;s<this.mutations.length;s++){const o=this.mutations[s];o.key.isEqual(t.key)&&vh(o,t,r[s])}}applyToLocalView(t,e){for(const r of this.baseMutations)r.key.isEqual(t.key)&&(e=sr(r,t,e,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(t.key)&&(e=sr(r,t,e,this.localWriteTime));return e}applyToLocalDocumentSet(t,e){const r=Cu();return this.mutations.forEach(s=>{const o=t.get(s.key),a=o.overlayedDocument;let l=this.applyToLocalView(a,o.mutatedFields);l=e.has(s.key)?null:l;const h=xu(a,l);h!==null&&r.set(s.key,h),a.isValidDocument()||a.convertToNoDocument(z.min())}),r}keys(){return this.mutations.reduce((t,e)=>t.add(e.key),W())}isEqual(t){return this.batchId===t.batchId&&yn(this.mutations,t.mutations,(e,r)=>_a(e,r))&&yn(this.baseMutations,t.baseMutations,(e,r)=>_a(e,r))}}class Ai{constructor(t,e,r,s){this.batch=t,this.commitVersion=e,this.mutationResults=r,this.docVersions=s}static from(t,e,r){Y(t.mutations.length===r.length);let s=function(){return lh}();const o=t.mutations;for(let a=0;a<o.length;a++)s=s.insert(o[a].key,r[a].version);return new Ai(t,e,r,s)}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wh{constructor(t,e){this.largestBatchId=t,this.mutation=e}getKey(){return this.mutation.key}isEqual(t){return t!==null&&this.mutation===t.mutation}toString(){return`Overlay{
      largestBatchId: ${this.largestBatchId},
      mutation: ${this.mutation.toString()}
    }`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ih{constructor(t,e){this.count=t,this.unchangedNames=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var _t,X;function Mu(n){switch(n){default:return B();case V.CANCELLED:case V.UNKNOWN:case V.DEADLINE_EXCEEDED:case V.RESOURCE_EXHAUSTED:case V.INTERNAL:case V.UNAVAILABLE:case V.UNAUTHENTICATED:return!1;case V.INVALID_ARGUMENT:case V.NOT_FOUND:case V.ALREADY_EXISTS:case V.PERMISSION_DENIED:case V.FAILED_PRECONDITION:case V.ABORTED:case V.OUT_OF_RANGE:case V.UNIMPLEMENTED:case V.DATA_LOSS:return!0}}function Uu(n){if(n===void 0)return ce("GRPC error has no .code"),V.UNKNOWN;switch(n){case _t.OK:return V.OK;case _t.CANCELLED:return V.CANCELLED;case _t.UNKNOWN:return V.UNKNOWN;case _t.DEADLINE_EXCEEDED:return V.DEADLINE_EXCEEDED;case _t.RESOURCE_EXHAUSTED:return V.RESOURCE_EXHAUSTED;case _t.INTERNAL:return V.INTERNAL;case _t.UNAVAILABLE:return V.UNAVAILABLE;case _t.UNAUTHENTICATED:return V.UNAUTHENTICATED;case _t.INVALID_ARGUMENT:return V.INVALID_ARGUMENT;case _t.NOT_FOUND:return V.NOT_FOUND;case _t.ALREADY_EXISTS:return V.ALREADY_EXISTS;case _t.PERMISSION_DENIED:return V.PERMISSION_DENIED;case _t.FAILED_PRECONDITION:return V.FAILED_PRECONDITION;case _t.ABORTED:return V.ABORTED;case _t.OUT_OF_RANGE:return V.OUT_OF_RANGE;case _t.UNIMPLEMENTED:return V.UNIMPLEMENTED;case _t.DATA_LOSS:return V.DATA_LOSS;default:return B()}}(X=_t||(_t={}))[X.OK=0]="OK",X[X.CANCELLED=1]="CANCELLED",X[X.UNKNOWN=2]="UNKNOWN",X[X.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",X[X.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",X[X.NOT_FOUND=5]="NOT_FOUND",X[X.ALREADY_EXISTS=6]="ALREADY_EXISTS",X[X.PERMISSION_DENIED=7]="PERMISSION_DENIED",X[X.UNAUTHENTICATED=16]="UNAUTHENTICATED",X[X.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",X[X.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",X[X.ABORTED=10]="ABORTED",X[X.OUT_OF_RANGE=11]="OUT_OF_RANGE",X[X.UNIMPLEMENTED=12]="UNIMPLEMENTED",X[X.INTERNAL=13]="INTERNAL",X[X.UNAVAILABLE=14]="UNAVAILABLE",X[X.DATA_LOSS=15]="DATA_LOSS";/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ah(){return new TextEncoder}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Rh=new je([4294967295,4294967295],0);function va(n){const t=Ah().encode(n),e=new ou;return e.update(t),new Uint8Array(e.digest())}function Ta(n){const t=new DataView(n.buffer),e=t.getUint32(0,!0),r=t.getUint32(4,!0),s=t.getUint32(8,!0),o=t.getUint32(12,!0);return[new je([e,r],0),new je([s,o],0)]}class Ri{constructor(t,e,r){if(this.bitmap=t,this.padding=e,this.hashCount=r,e<0||e>=8)throw new tr(`Invalid padding: ${e}`);if(r<0)throw new tr(`Invalid hash count: ${r}`);if(t.length>0&&this.hashCount===0)throw new tr(`Invalid hash count: ${r}`);if(t.length===0&&e!==0)throw new tr(`Invalid padding when bitmap length is 0: ${e}`);this.Ie=8*t.length-e,this.Te=je.fromNumber(this.Ie)}Ee(t,e,r){let s=t.add(e.multiply(je.fromNumber(r)));return s.compare(Rh)===1&&(s=new je([s.getBits(0),s.getBits(1)],0)),s.modulo(this.Te).toNumber()}de(t){return(this.bitmap[Math.floor(t/8)]&1<<t%8)!=0}mightContain(t){if(this.Ie===0)return!1;const e=va(t),[r,s]=Ta(e);for(let o=0;o<this.hashCount;o++){const a=this.Ee(r,s,o);if(!this.de(a))return!1}return!0}static create(t,e,r){const s=t%8==0?0:8-t%8,o=new Uint8Array(Math.ceil(t/8)),a=new Ri(o,s,e);return r.forEach(l=>a.insert(l)),a}insert(t){if(this.Ie===0)return;const e=va(t),[r,s]=Ta(e);for(let o=0;o<this.hashCount;o++){const a=this.Ee(r,s,o);this.Ae(a)}}Ae(t){const e=Math.floor(t/8),r=t%8;this.bitmap[e]|=1<<r}}class tr extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ys{constructor(t,e,r,s,o){this.snapshotVersion=t,this.targetChanges=e,this.targetMismatches=r,this.documentUpdates=s,this.resolvedLimboDocuments=o}static createSynthesizedRemoteEventForCurrentChange(t,e,r){const s=new Map;return s.set(t,vr.createSynthesizedTargetChangeForCurrentChange(t,e,r)),new ys(z.min(),s,new ct(et),he(),W())}}class vr{constructor(t,e,r,s,o){this.resumeToken=t,this.current=e,this.addedDocuments=r,this.modifiedDocuments=s,this.removedDocuments=o}static createSynthesizedTargetChangeForCurrentChange(t,e,r){return new vr(r,e,W(),W(),W())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zr{constructor(t,e,r,s){this.Re=t,this.removedTargetIds=e,this.key=r,this.Ve=s}}class Fu{constructor(t,e){this.targetId=t,this.me=e}}class qu{constructor(t,e,r=St.EMPTY_BYTE_STRING,s=null){this.state=t,this.targetIds=e,this.resumeToken=r,this.cause=s}}class Ea{constructor(){this.fe=0,this.ge=Ia(),this.pe=St.EMPTY_BYTE_STRING,this.ye=!1,this.we=!0}get current(){return this.ye}get resumeToken(){return this.pe}get Se(){return this.fe!==0}get be(){return this.we}De(t){t.approximateByteSize()>0&&(this.we=!0,this.pe=t)}ve(){let t=W(),e=W(),r=W();return this.ge.forEach((s,o)=>{switch(o){case 0:t=t.add(s);break;case 2:e=e.add(s);break;case 1:r=r.add(s);break;default:B()}}),new vr(this.pe,this.ye,t,e,r)}Ce(){this.we=!1,this.ge=Ia()}Fe(t,e){this.we=!0,this.ge=this.ge.insert(t,e)}Me(t){this.we=!0,this.ge=this.ge.remove(t)}xe(){this.fe+=1}Oe(){this.fe-=1,Y(this.fe>=0)}Ne(){this.we=!0,this.ye=!0}}class Ph{constructor(t){this.Le=t,this.Be=new Map,this.ke=he(),this.qe=wa(),this.Qe=new ct(et)}Ke(t){for(const e of t.Re)t.Ve&&t.Ve.isFoundDocument()?this.$e(e,t.Ve):this.Ue(e,t.key,t.Ve);for(const e of t.removedTargetIds)this.Ue(e,t.key,t.Ve)}We(t){this.forEachTarget(t,e=>{const r=this.Ge(e);switch(t.state){case 0:this.ze(e)&&r.De(t.resumeToken);break;case 1:r.Oe(),r.Se||r.Ce(),r.De(t.resumeToken);break;case 2:r.Oe(),r.Se||this.removeTarget(e);break;case 3:this.ze(e)&&(r.Ne(),r.De(t.resumeToken));break;case 4:this.ze(e)&&(this.je(e),r.De(t.resumeToken));break;default:B()}})}forEachTarget(t,e){t.targetIds.length>0?t.targetIds.forEach(e):this.Be.forEach((r,s)=>{this.ze(s)&&e(s)})}He(t){const e=t.targetId,r=t.me.count,s=this.Je(e);if(s){const o=s.target;if(ri(o))if(r===0){const a=new q(o.path);this.Ue(e,a,At.newNoDocument(a,z.min()))}else Y(r===1);else{const a=this.Ye(e);if(a!==r){const l=this.Ze(t),h=l?this.Xe(l,t,a):1;if(h!==0){this.je(e);const d=h===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Qe=this.Qe.insert(e,d)}}}}}Ze(t){const e=t.me.unchangedNames;if(!e||!e.bits)return null;const{bits:{bitmap:r="",padding:s=0},hashCount:o=0}=e;let a,l;try{a=Ke(r).toUint8Array()}catch(h){if(h instanceof mu)return gn("Decoding the base64 bloom filter in existence filter failed ("+h.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw h}try{l=new Ri(a,s,o)}catch(h){return gn(h instanceof tr?"BloomFilter error: ":"Applying bloom filter failed: ",h),null}return l.Ie===0?null:l}Xe(t,e,r){return e.me.count===r-this.nt(t,e.targetId)?0:2}nt(t,e){const r=this.Le.getRemoteKeysForTarget(e);let s=0;return r.forEach(o=>{const a=this.Le.tt(),l=`projects/${a.projectId}/databases/${a.database}/documents/${o.path.canonicalString()}`;t.mightContain(l)||(this.Ue(e,o,null),s++)}),s}rt(t){const e=new Map;this.Be.forEach((o,a)=>{const l=this.Je(a);if(l){if(o.current&&ri(l.target)){const h=new q(l.target.path);this.ke.get(h)!==null||this.it(a,h)||this.Ue(a,h,At.newNoDocument(h,t))}o.be&&(e.set(a,o.ve()),o.Ce())}});let r=W();this.qe.forEach((o,a)=>{let l=!0;a.forEachWhile(h=>{const d=this.Je(h);return!d||d.purpose==="TargetPurposeLimboResolution"||(l=!1,!1)}),l&&(r=r.add(o))}),this.ke.forEach((o,a)=>a.setReadTime(t));const s=new ys(t,e,this.Qe,this.ke,r);return this.ke=he(),this.qe=wa(),this.Qe=new ct(et),s}$e(t,e){if(!this.ze(t))return;const r=this.it(t,e.key)?2:0;this.Ge(t).Fe(e.key,r),this.ke=this.ke.insert(e.key,e),this.qe=this.qe.insert(e.key,this.st(e.key).add(t))}Ue(t,e,r){if(!this.ze(t))return;const s=this.Ge(t);this.it(t,e)?s.Fe(e,1):s.Me(e),this.qe=this.qe.insert(e,this.st(e).delete(t)),r&&(this.ke=this.ke.insert(e,r))}removeTarget(t){this.Be.delete(t)}Ye(t){const e=this.Ge(t).ve();return this.Le.getRemoteKeysForTarget(t).size+e.addedDocuments.size-e.removedDocuments.size}xe(t){this.Ge(t).xe()}Ge(t){let e=this.Be.get(t);return e||(e=new Ea,this.Be.set(t,e)),e}st(t){let e=this.qe.get(t);return e||(e=new Vt(et),this.qe=this.qe.insert(t,e)),e}ze(t){const e=this.Je(t)!==null;return e||U("WatchChangeAggregator","Detected inactive target",t),e}Je(t){const e=this.Be.get(t);return e&&e.Se?null:this.Le.ot(t)}je(t){this.Be.set(t,new Ea),this.Le.getRemoteKeysForTarget(t).forEach(e=>{this.Ue(t,e,null)})}it(t,e){return this.Le.getRemoteKeysForTarget(t).has(e)}}function wa(){return new ct(q.comparator)}function Ia(){return new ct(q.comparator)}const bh={asc:"ASCENDING",desc:"DESCENDING"},Ch={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},Vh={and:"AND",or:"OR"};class Sh{constructor(t,e){this.databaseId=t,this.useProto3Json=e}}function ii(n,t){return n.useProto3Json||gr(t)?t:{value:t}}function os(n,t){return n.useProto3Json?`${new Date(1e3*t.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+t.nanoseconds).slice(-9)}Z`:{seconds:""+t.seconds,nanos:t.nanoseconds}}function Bu(n,t){return n.useProto3Json?t.toBase64():t.toUint8Array()}function kh(n,t){return os(n,t.toTimestamp())}function Wt(n){return Y(!!n),z.fromTimestamp(function(e){const r=Ce(e);return new Tt(r.seconds,r.nanos)}(n))}function Pi(n,t){return oi(n,t).canonicalString()}function oi(n,t){const e=function(s){return new it(["projects",s.projectId,"databases",s.database])}(n).child("documents");return t===void 0?e:e.child(t)}function ju(n){const t=it.fromString(n);return Y(Wu(t)),t}function as(n,t){return Pi(n.databaseId,t.path)}function ir(n,t){const e=ju(t);if(e.get(1)!==n.databaseId.projectId)throw new M(V.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+e.get(1)+" vs "+n.databaseId.projectId);if(e.get(3)!==n.databaseId.database)throw new M(V.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+e.get(3)+" vs "+n.databaseId.database);return new q($u(e))}function zu(n,t){return Pi(n.databaseId,t)}function Nh(n){const t=ju(n);return t.length===4?it.emptyPath():$u(t)}function ai(n){return new it(["projects",n.databaseId.projectId,"databases",n.databaseId.database]).canonicalString()}function $u(n){return Y(n.length>4&&n.get(4)==="documents"),n.popFirst(5)}function Aa(n,t,e){return{name:as(n,t),fields:e.value.mapValue.fields}}function Dh(n,t){return"found"in t?function(r,s){Y(!!s.found),s.found.name,s.found.updateTime;const o=ir(r,s.found.name),a=Wt(s.found.updateTime),l=s.found.createTime?Wt(s.found.createTime):z.min(),h=new qt({mapValue:{fields:s.found.fields}});return At.newFoundDocument(o,a,l,h)}(n,t):"missing"in t?function(r,s){Y(!!s.missing),Y(!!s.readTime);const o=ir(r,s.missing),a=Wt(s.readTime);return At.newNoDocument(o,a)}(n,t):B()}function xh(n,t){let e;if("targetChange"in t){t.targetChange;const r=function(d){return d==="NO_CHANGE"?0:d==="ADD"?1:d==="REMOVE"?2:d==="CURRENT"?3:d==="RESET"?4:B()}(t.targetChange.targetChangeType||"NO_CHANGE"),s=t.targetChange.targetIds||[],o=function(d,p){return d.useProto3Json?(Y(p===void 0||typeof p=="string"),St.fromBase64String(p||"")):(Y(p===void 0||p instanceof Buffer||p instanceof Uint8Array),St.fromUint8Array(p||new Uint8Array))}(n,t.targetChange.resumeToken),a=t.targetChange.cause,l=a&&function(d){const p=d.code===void 0?V.UNKNOWN:Uu(d.code);return new M(p,d.message||"")}(a);e=new qu(r,s,o,l||null)}else if("documentChange"in t){t.documentChange;const r=t.documentChange;r.document,r.document.name,r.document.updateTime;const s=ir(n,r.document.name),o=Wt(r.document.updateTime),a=r.document.createTime?Wt(r.document.createTime):z.min(),l=new qt({mapValue:{fields:r.document.fields}}),h=At.newFoundDocument(s,o,a,l),d=r.targetIds||[],p=r.removedTargetIds||[];e=new Zr(d,p,h.key,h)}else if("documentDelete"in t){t.documentDelete;const r=t.documentDelete;r.document;const s=ir(n,r.document),o=r.readTime?Wt(r.readTime):z.min(),a=At.newNoDocument(s,o),l=r.removedTargetIds||[];e=new Zr([],l,a.key,a)}else if("documentRemove"in t){t.documentRemove;const r=t.documentRemove;r.document;const s=ir(n,r.document),o=r.removedTargetIds||[];e=new Zr([],o,s,null)}else{if(!("filter"in t))return B();{t.filter;const r=t.filter;r.targetId;const{count:s=0,unchangedNames:o}=r,a=new Ih(s,o),l=r.targetId;e=new Fu(l,a)}}return e}function Gu(n,t){let e;if(t instanceof yr)e={update:Aa(n,t.key,t.value)};else if(t instanceof gs)e={delete:as(n,t.key)};else if(t instanceof Se)e={update:Aa(n,t.key,t.data),updateMask:zh(t.fieldMask)};else{if(!(t instanceof Lu))return B();e={verify:as(n,t.key)}}return t.fieldTransforms.length>0&&(e.updateTransforms=t.fieldTransforms.map(r=>function(o,a){const l=a.transform;if(l instanceof dr)return{fieldPath:a.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(l instanceof fr)return{fieldPath:a.field.canonicalString(),appendMissingElements:{values:l.elements}};if(l instanceof pr)return{fieldPath:a.field.canonicalString(),removeAllFromArray:{values:l.elements}};if(l instanceof is)return{fieldPath:a.field.canonicalString(),increment:l.Pe};throw B()}(0,r))),t.precondition.isNone||(e.currentDocument=function(s,o){return o.updateTime!==void 0?{updateTime:kh(s,o.updateTime)}:o.exists!==void 0?{exists:o.exists}:B()}(n,t.precondition)),e}function Oh(n,t){return n&&n.length>0?(Y(t!==void 0),n.map(e=>function(s,o){let a=s.updateTime?Wt(s.updateTime):Wt(o);return a.isEqual(z.min())&&(a=Wt(o)),new yh(a,s.transformResults||[])}(e,t))):[]}function Lh(n,t){return{documents:[zu(n,t.path)]}}function Mh(n,t){const e={structuredQuery:{}},r=t.path;let s;t.collectionGroup!==null?(s=r,e.structuredQuery.from=[{collectionId:t.collectionGroup,allDescendants:!0}]):(s=r.popLast(),e.structuredQuery.from=[{collectionId:r.lastSegment()}]),e.parent=zu(n,s);const o=function(d){if(d.length!==0)return Qu(Zt.create(d,"and"))}(t.filters);o&&(e.structuredQuery.where=o);const a=function(d){if(d.length!==0)return d.map(p=>function(A){return{field:fn(A.field),direction:qh(A.dir)}}(p))}(t.orderBy);a&&(e.structuredQuery.orderBy=a);const l=ii(n,t.limit);return l!==null&&(e.structuredQuery.limit=l),t.startAt&&(e.structuredQuery.startAt=function(d){return{before:d.inclusive,values:d.position}}(t.startAt)),t.endAt&&(e.structuredQuery.endAt=function(d){return{before:!d.inclusive,values:d.position}}(t.endAt)),{_t:e,parent:s}}function Uh(n){let t=Nh(n.parent);const e=n.structuredQuery,r=e.from?e.from.length:0;let s=null;if(r>0){Y(r===1);const p=e.from[0];p.allDescendants?s=p.collectionId:t=t.child(p.collectionId)}let o=[];e.where&&(o=function(y){const A=Ku(y);return A instanceof Zt&&vu(A)?A.getFilters():[A]}(e.where));let a=[];e.orderBy&&(a=function(y){return y.map(A=>function(N){return new hr(pn(N.field),function(S){switch(S){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(N.direction))}(A))}(e.orderBy));let l=null;e.limit&&(l=function(y){let A;return A=typeof y=="object"?y.value:y,gr(A)?null:A}(e.limit));let h=null;e.startAt&&(h=function(y){const A=!!y.before,C=y.values||[];return new rs(C,A)}(e.startAt));let d=null;return e.endAt&&(d=function(y){const A=!y.before,C=y.values||[];return new rs(C,A)}(e.endAt)),sh(t,s,a,o,l,"F",h,d)}function Fh(n,t){const e=function(s){switch(s){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return B()}}(t.purpose);return e==null?null:{"goog-listen-tags":e}}function Ku(n){return n.unaryFilter!==void 0?function(e){switch(e.unaryFilter.op){case"IS_NAN":const r=pn(e.unaryFilter.field);return gt.create(r,"==",{doubleValue:NaN});case"IS_NULL":const s=pn(e.unaryFilter.field);return gt.create(s,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const o=pn(e.unaryFilter.field);return gt.create(o,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const a=pn(e.unaryFilter.field);return gt.create(a,"!=",{nullValue:"NULL_VALUE"});default:return B()}}(n):n.fieldFilter!==void 0?function(e){return gt.create(pn(e.fieldFilter.field),function(s){switch(s){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return B()}}(e.fieldFilter.op),e.fieldFilter.value)}(n):n.compositeFilter!==void 0?function(e){return Zt.create(e.compositeFilter.filters.map(r=>Ku(r)),function(s){switch(s){case"AND":return"and";case"OR":return"or";default:return B()}}(e.compositeFilter.op))}(n):B()}function qh(n){return bh[n]}function Bh(n){return Ch[n]}function jh(n){return Vh[n]}function fn(n){return{fieldPath:n.canonicalString()}}function pn(n){return Ct.fromServerFormat(n.fieldPath)}function Qu(n){return n instanceof gt?function(e){if(e.op==="=="){if(ca(e.value))return{unaryFilter:{field:fn(e.field),op:"IS_NAN"}};if(la(e.value))return{unaryFilter:{field:fn(e.field),op:"IS_NULL"}}}else if(e.op==="!="){if(ca(e.value))return{unaryFilter:{field:fn(e.field),op:"IS_NOT_NAN"}};if(la(e.value))return{unaryFilter:{field:fn(e.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:fn(e.field),op:Bh(e.op),value:e.value}}}(n):n instanceof Zt?function(e){const r=e.getFilters().map(s=>Qu(s));return r.length===1?r[0]:{compositeFilter:{op:jh(e.op),filters:r}}}(n):B()}function zh(n){const t=[];return n.fields.forEach(e=>t.push(e.canonicalString())),{fieldPaths:t}}function Wu(n){return n.length>=4&&n.get(0)==="projects"&&n.get(2)==="databases"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ae{constructor(t,e,r,s,o=z.min(),a=z.min(),l=St.EMPTY_BYTE_STRING,h=null){this.target=t,this.targetId=e,this.purpose=r,this.sequenceNumber=s,this.snapshotVersion=o,this.lastLimboFreeSnapshotVersion=a,this.resumeToken=l,this.expectedCount=h}withSequenceNumber(t){return new Ae(this.target,this.targetId,this.purpose,t,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(t,e){return new Ae(this.target,this.targetId,this.purpose,this.sequenceNumber,e,this.lastLimboFreeSnapshotVersion,t,null)}withExpectedCount(t){return new Ae(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,t)}withLastLimboFreeSnapshotVersion(t){return new Ae(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,t,this.resumeToken,this.expectedCount)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $h{constructor(t){this.ct=t}}function Gh(n){const t=Uh({parent:n.parent,structuredQuery:n.structuredQuery});return n.limitType==="LAST"?ss(t,t.limit,"L"):t}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kh{constructor(){this.un=new Qh}addToCollectionParentIndex(t,e){return this.un.add(e),k.resolve()}getCollectionParents(t,e){return k.resolve(this.un.getEntries(e))}addFieldIndex(t,e){return k.resolve()}deleteFieldIndex(t,e){return k.resolve()}deleteAllFieldIndexes(t){return k.resolve()}createTargetIndexes(t,e){return k.resolve()}getDocumentsMatchingTarget(t,e){return k.resolve(null)}getIndexType(t,e){return k.resolve(0)}getFieldIndexes(t,e){return k.resolve([])}getNextCollectionGroupToUpdate(t){return k.resolve(null)}getMinOffset(t,e){return k.resolve(be.min())}getMinOffsetFromCollectionGroup(t,e){return k.resolve(be.min())}updateCollectionGroup(t,e,r){return k.resolve()}updateIndexEntries(t,e){return k.resolve()}}class Qh{constructor(){this.index={}}add(t){const e=t.lastSegment(),r=t.popLast(),s=this.index[e]||new Vt(it.comparator),o=!s.has(r);return this.index[e]=s.add(r),o}has(t){const e=t.lastSegment(),r=t.popLast(),s=this.index[e];return s&&s.has(r)}getEntries(t){return(this.index[t]||new Vt(it.comparator)).toArray()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class En{constructor(t){this.Ln=t}next(){return this.Ln+=2,this.Ln}static Bn(){return new En(0)}static kn(){return new En(-1)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wh{constructor(){this.changes=new Pn(t=>t.toString(),(t,e)=>t.isEqual(e)),this.changesApplied=!1}addEntry(t){this.assertNotApplied(),this.changes.set(t.key,t)}removeEntry(t,e){this.assertNotApplied(),this.changes.set(t,At.newInvalidDocument(t).setReadTime(e))}getEntry(t,e){this.assertNotApplied();const r=this.changes.get(e);return r!==void 0?k.resolve(r):this.getFromCache(t,e)}getEntries(t,e){return this.getAllFromCache(t,e)}apply(t){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(t)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hh{constructor(t,e){this.overlayedDocument=t,this.mutatedFields=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xh{constructor(t,e,r,s){this.remoteDocumentCache=t,this.mutationQueue=e,this.documentOverlayCache=r,this.indexManager=s}getDocument(t,e){let r=null;return this.documentOverlayCache.getOverlay(t,e).next(s=>(r=s,this.remoteDocumentCache.getEntry(t,e))).next(s=>(r!==null&&sr(r.mutation,s,Kt.empty(),Tt.now()),s))}getDocuments(t,e){return this.remoteDocumentCache.getEntries(t,e).next(r=>this.getLocalViewOfDocuments(t,r,W()).next(()=>r))}getLocalViewOfDocuments(t,e,r=W()){const s=Be();return this.populateOverlays(t,s,e).next(()=>this.computeViews(t,e,s,r).next(o=>{let a=Zn();return o.forEach((l,h)=>{a=a.insert(l,h.overlayedDocument)}),a}))}getOverlayedDocuments(t,e){const r=Be();return this.populateOverlays(t,r,e).next(()=>this.computeViews(t,e,r,W()))}populateOverlays(t,e,r){const s=[];return r.forEach(o=>{e.has(o)||s.push(o)}),this.documentOverlayCache.getOverlays(t,s).next(o=>{o.forEach((a,l)=>{e.set(a,l)})})}computeViews(t,e,r,s){let o=he();const a=rr(),l=function(){return rr()}();return e.forEach((h,d)=>{const p=r.get(d.key);s.has(d.key)&&(p===void 0||p.mutation instanceof Se)?o=o.insert(d.key,d):p!==void 0?(a.set(d.key,p.mutation.getFieldMask()),sr(p.mutation,d,p.mutation.getFieldMask(),Tt.now())):a.set(d.key,Kt.empty())}),this.recalculateAndSaveOverlays(t,o).next(h=>(h.forEach((d,p)=>a.set(d,p)),e.forEach((d,p)=>{var y;return l.set(d,new Hh(p,(y=a.get(d))!==null&&y!==void 0?y:null))}),l))}recalculateAndSaveOverlays(t,e){const r=rr();let s=new ct((a,l)=>a-l),o=W();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(t,e).next(a=>{for(const l of a)l.keys().forEach(h=>{const d=e.get(h);if(d===null)return;let p=r.get(h)||Kt.empty();p=l.applyToLocalView(d,p),r.set(h,p);const y=(s.get(l.batchId)||W()).add(h);s=s.insert(l.batchId,y)})}).next(()=>{const a=[],l=s.getReverseIterator();for(;l.hasNext();){const h=l.getNext(),d=h.key,p=h.value,y=Cu();p.forEach(A=>{if(!o.has(A)){const C=xu(e.get(A),r.get(A));C!==null&&y.set(A,C),o=o.add(A)}}),a.push(this.documentOverlayCache.saveOverlays(t,d,y))}return k.waitFor(a)}).next(()=>r)}recalculateAndSaveOverlaysForDocumentKeys(t,e){return this.remoteDocumentCache.getEntries(t,e).next(r=>this.recalculateAndSaveOverlays(t,r))}getDocumentsMatchingQuery(t,e,r,s){return function(a){return q.isDocumentKey(a.path)&&a.collectionGroup===null&&a.filters.length===0}(e)?this.getDocumentsMatchingDocumentQuery(t,e.path):Iu(e)?this.getDocumentsMatchingCollectionGroupQuery(t,e,r,s):this.getDocumentsMatchingCollectionQuery(t,e,r,s)}getNextDocuments(t,e,r,s){return this.remoteDocumentCache.getAllFromCollectionGroup(t,e,r,s).next(o=>{const a=s-o.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(t,e,r.largestBatchId,s-o.size):k.resolve(Be());let l=-1,h=o;return a.next(d=>k.forEach(d,(p,y)=>(l<y.largestBatchId&&(l=y.largestBatchId),o.get(p)?k.resolve():this.remoteDocumentCache.getEntry(t,p).next(A=>{h=h.insert(p,A)}))).next(()=>this.populateOverlays(t,d,o)).next(()=>this.computeViews(t,h,d,W())).next(p=>({batchId:l,changes:bu(p)})))})}getDocumentsMatchingDocumentQuery(t,e){return this.getDocument(t,new q(e)).next(r=>{let s=Zn();return r.isFoundDocument()&&(s=s.insert(r.key,r)),s})}getDocumentsMatchingCollectionGroupQuery(t,e,r,s){const o=e.collectionGroup;let a=Zn();return this.indexManager.getCollectionParents(t,o).next(l=>k.forEach(l,h=>{const d=function(y,A){return new Rn(A,null,y.explicitOrderBy.slice(),y.filters.slice(),y.limit,y.limitType,y.startAt,y.endAt)}(e,h.child(o));return this.getDocumentsMatchingCollectionQuery(t,d,r,s).next(p=>{p.forEach((y,A)=>{a=a.insert(y,A)})})}).next(()=>a))}getDocumentsMatchingCollectionQuery(t,e,r,s){let o;return this.documentOverlayCache.getOverlaysForCollection(t,e.path,r.largestBatchId).next(a=>(o=a,this.remoteDocumentCache.getDocumentsMatchingQuery(t,e,r,o,s))).next(a=>{o.forEach((h,d)=>{const p=d.getKey();a.get(p)===null&&(a=a.insert(p,At.newInvalidDocument(p)))});let l=Zn();return a.forEach((h,d)=>{const p=o.get(h);p!==void 0&&sr(p.mutation,d,Kt.empty(),Tt.now()),ps(e,d)&&(l=l.insert(h,d))}),l})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yh{constructor(t){this.serializer=t,this.hr=new Map,this.Pr=new Map}getBundleMetadata(t,e){return k.resolve(this.hr.get(e))}saveBundleMetadata(t,e){return this.hr.set(e.id,function(s){return{id:s.id,version:s.version,createTime:Wt(s.createTime)}}(e)),k.resolve()}getNamedQuery(t,e){return k.resolve(this.Pr.get(e))}saveNamedQuery(t,e){return this.Pr.set(e.name,function(s){return{name:s.name,query:Gh(s.bundledQuery),readTime:Wt(s.readTime)}}(e)),k.resolve()}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jh{constructor(){this.overlays=new ct(q.comparator),this.Ir=new Map}getOverlay(t,e){return k.resolve(this.overlays.get(e))}getOverlays(t,e){const r=Be();return k.forEach(e,s=>this.getOverlay(t,s).next(o=>{o!==null&&r.set(s,o)})).next(()=>r)}saveOverlays(t,e,r){return r.forEach((s,o)=>{this.ht(t,e,o)}),k.resolve()}removeOverlaysForBatchId(t,e,r){const s=this.Ir.get(r);return s!==void 0&&(s.forEach(o=>this.overlays=this.overlays.remove(o)),this.Ir.delete(r)),k.resolve()}getOverlaysForCollection(t,e,r){const s=Be(),o=e.length+1,a=new q(e.child("")),l=this.overlays.getIteratorFrom(a);for(;l.hasNext();){const h=l.getNext().value,d=h.getKey();if(!e.isPrefixOf(d.path))break;d.path.length===o&&h.largestBatchId>r&&s.set(h.getKey(),h)}return k.resolve(s)}getOverlaysForCollectionGroup(t,e,r,s){let o=new ct((d,p)=>d-p);const a=this.overlays.getIterator();for(;a.hasNext();){const d=a.getNext().value;if(d.getKey().getCollectionGroup()===e&&d.largestBatchId>r){let p=o.get(d.largestBatchId);p===null&&(p=Be(),o=o.insert(d.largestBatchId,p)),p.set(d.getKey(),d)}}const l=Be(),h=o.getIterator();for(;h.hasNext()&&(h.getNext().value.forEach((d,p)=>l.set(d,p)),!(l.size()>=s)););return k.resolve(l)}ht(t,e,r){const s=this.overlays.get(r.key);if(s!==null){const a=this.Ir.get(s.largestBatchId).delete(r.key);this.Ir.set(s.largestBatchId,a)}this.overlays=this.overlays.insert(r.key,new wh(e,r));let o=this.Ir.get(e);o===void 0&&(o=W(),this.Ir.set(e,o)),this.Ir.set(e,o.add(r.key))}}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zh{constructor(){this.sessionToken=St.EMPTY_BYTE_STRING}getSessionToken(t){return k.resolve(this.sessionToken)}setSessionToken(t,e){return this.sessionToken=e,k.resolve()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bi{constructor(){this.Tr=new Vt(It.Er),this.dr=new Vt(It.Ar)}isEmpty(){return this.Tr.isEmpty()}addReference(t,e){const r=new It(t,e);this.Tr=this.Tr.add(r),this.dr=this.dr.add(r)}Rr(t,e){t.forEach(r=>this.addReference(r,e))}removeReference(t,e){this.Vr(new It(t,e))}mr(t,e){t.forEach(r=>this.removeReference(r,e))}gr(t){const e=new q(new it([])),r=new It(e,t),s=new It(e,t+1),o=[];return this.dr.forEachInRange([r,s],a=>{this.Vr(a),o.push(a.key)}),o}pr(){this.Tr.forEach(t=>this.Vr(t))}Vr(t){this.Tr=this.Tr.delete(t),this.dr=this.dr.delete(t)}yr(t){const e=new q(new it([])),r=new It(e,t),s=new It(e,t+1);let o=W();return this.dr.forEachInRange([r,s],a=>{o=o.add(a.key)}),o}containsKey(t){const e=new It(t,0),r=this.Tr.firstAfterOrEqual(e);return r!==null&&t.isEqual(r.key)}}class It{constructor(t,e){this.key=t,this.wr=e}static Er(t,e){return q.comparator(t.key,e.key)||et(t.wr,e.wr)}static Ar(t,e){return et(t.wr,e.wr)||q.comparator(t.key,e.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class td{constructor(t,e){this.indexManager=t,this.referenceDelegate=e,this.mutationQueue=[],this.Sr=1,this.br=new Vt(It.Er)}checkEmpty(t){return k.resolve(this.mutationQueue.length===0)}addMutationBatch(t,e,r,s){const o=this.Sr;this.Sr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const a=new Eh(o,e,r,s);this.mutationQueue.push(a);for(const l of s)this.br=this.br.add(new It(l.key,o)),this.indexManager.addToCollectionParentIndex(t,l.key.path.popLast());return k.resolve(a)}lookupMutationBatch(t,e){return k.resolve(this.Dr(e))}getNextMutationBatchAfterBatchId(t,e){const r=e+1,s=this.vr(r),o=s<0?0:s;return k.resolve(this.mutationQueue.length>o?this.mutationQueue[o]:null)}getHighestUnacknowledgedBatchId(){return k.resolve(this.mutationQueue.length===0?-1:this.Sr-1)}getAllMutationBatches(t){return k.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(t,e){const r=new It(e,0),s=new It(e,Number.POSITIVE_INFINITY),o=[];return this.br.forEachInRange([r,s],a=>{const l=this.Dr(a.wr);o.push(l)}),k.resolve(o)}getAllMutationBatchesAffectingDocumentKeys(t,e){let r=new Vt(et);return e.forEach(s=>{const o=new It(s,0),a=new It(s,Number.POSITIVE_INFINITY);this.br.forEachInRange([o,a],l=>{r=r.add(l.wr)})}),k.resolve(this.Cr(r))}getAllMutationBatchesAffectingQuery(t,e){const r=e.path,s=r.length+1;let o=r;q.isDocumentKey(o)||(o=o.child(""));const a=new It(new q(o),0);let l=new Vt(et);return this.br.forEachWhile(h=>{const d=h.key.path;return!!r.isPrefixOf(d)&&(d.length===s&&(l=l.add(h.wr)),!0)},a),k.resolve(this.Cr(l))}Cr(t){const e=[];return t.forEach(r=>{const s=this.Dr(r);s!==null&&e.push(s)}),e}removeMutationBatch(t,e){Y(this.Fr(e.batchId,"removed")===0),this.mutationQueue.shift();let r=this.br;return k.forEach(e.mutations,s=>{const o=new It(s.key,e.batchId);return r=r.delete(o),this.referenceDelegate.markPotentiallyOrphaned(t,s.key)}).next(()=>{this.br=r})}On(t){}containsKey(t,e){const r=new It(e,0),s=this.br.firstAfterOrEqual(r);return k.resolve(e.isEqual(s&&s.key))}performConsistencyCheck(t){return this.mutationQueue.length,k.resolve()}Fr(t,e){return this.vr(t)}vr(t){return this.mutationQueue.length===0?0:t-this.mutationQueue[0].batchId}Dr(t){const e=this.vr(t);return e<0||e>=this.mutationQueue.length?null:this.mutationQueue[e]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ed{constructor(t){this.Mr=t,this.docs=function(){return new ct(q.comparator)}(),this.size=0}setIndexManager(t){this.indexManager=t}addEntry(t,e){const r=e.key,s=this.docs.get(r),o=s?s.size:0,a=this.Mr(e);return this.docs=this.docs.insert(r,{document:e.mutableCopy(),size:a}),this.size+=a-o,this.indexManager.addToCollectionParentIndex(t,r.path.popLast())}removeEntry(t){const e=this.docs.get(t);e&&(this.docs=this.docs.remove(t),this.size-=e.size)}getEntry(t,e){const r=this.docs.get(e);return k.resolve(r?r.document.mutableCopy():At.newInvalidDocument(e))}getEntries(t,e){let r=he();return e.forEach(s=>{const o=this.docs.get(s);r=r.insert(s,o?o.document.mutableCopy():At.newInvalidDocument(s))}),k.resolve(r)}getDocumentsMatchingQuery(t,e,r,s){let o=he();const a=e.path,l=new q(a.child("")),h=this.docs.getIteratorFrom(l);for(;h.hasNext();){const{key:d,value:{document:p}}=h.getNext();if(!a.isPrefixOf(d.path))break;d.path.length>a.length+1||Fc(Uc(p),r)<=0||(s.has(p.key)||ps(e,p))&&(o=o.insert(p.key,p.mutableCopy()))}return k.resolve(o)}getAllFromCollectionGroup(t,e,r,s){B()}Or(t,e){return k.forEach(this.docs,r=>e(r))}newChangeBuffer(t){return new nd(this)}getSize(t){return k.resolve(this.size)}}class nd extends Wh{constructor(t){super(),this.cr=t}applyChanges(t){const e=[];return this.changes.forEach((r,s)=>{s.isValidDocument()?e.push(this.cr.addEntry(t,s)):this.cr.removeEntry(r)}),k.waitFor(e)}getFromCache(t,e){return this.cr.getEntry(t,e)}getAllFromCache(t,e){return this.cr.getEntries(t,e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rd{constructor(t){this.persistence=t,this.Nr=new Pn(e=>Ti(e),Ei),this.lastRemoteSnapshotVersion=z.min(),this.highestTargetId=0,this.Lr=0,this.Br=new bi,this.targetCount=0,this.kr=En.Bn()}forEachTarget(t,e){return this.Nr.forEach((r,s)=>e(s)),k.resolve()}getLastRemoteSnapshotVersion(t){return k.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(t){return k.resolve(this.Lr)}allocateTargetId(t){return this.highestTargetId=this.kr.next(),k.resolve(this.highestTargetId)}setTargetsMetadata(t,e,r){return r&&(this.lastRemoteSnapshotVersion=r),e>this.Lr&&(this.Lr=e),k.resolve()}Kn(t){this.Nr.set(t.target,t);const e=t.targetId;e>this.highestTargetId&&(this.kr=new En(e),this.highestTargetId=e),t.sequenceNumber>this.Lr&&(this.Lr=t.sequenceNumber)}addTargetData(t,e){return this.Kn(e),this.targetCount+=1,k.resolve()}updateTargetData(t,e){return this.Kn(e),k.resolve()}removeTargetData(t,e){return this.Nr.delete(e.target),this.Br.gr(e.targetId),this.targetCount-=1,k.resolve()}removeTargets(t,e,r){let s=0;const o=[];return this.Nr.forEach((a,l)=>{l.sequenceNumber<=e&&r.get(l.targetId)===null&&(this.Nr.delete(a),o.push(this.removeMatchingKeysForTargetId(t,l.targetId)),s++)}),k.waitFor(o).next(()=>s)}getTargetCount(t){return k.resolve(this.targetCount)}getTargetData(t,e){const r=this.Nr.get(e)||null;return k.resolve(r)}addMatchingKeys(t,e,r){return this.Br.Rr(e,r),k.resolve()}removeMatchingKeys(t,e,r){this.Br.mr(e,r);const s=this.persistence.referenceDelegate,o=[];return s&&e.forEach(a=>{o.push(s.markPotentiallyOrphaned(t,a))}),k.waitFor(o)}removeMatchingKeysForTargetId(t,e){return this.Br.gr(e),k.resolve()}getMatchingKeysForTargetId(t,e){const r=this.Br.yr(e);return k.resolve(r)}containsKey(t,e){return k.resolve(this.Br.containsKey(e))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sd{constructor(t,e){this.qr={},this.overlays={},this.Qr=new _i(0),this.Kr=!1,this.Kr=!0,this.$r=new Zh,this.referenceDelegate=t(this),this.Ur=new rd(this),this.indexManager=new Kh,this.remoteDocumentCache=function(s){return new ed(s)}(r=>this.referenceDelegate.Wr(r)),this.serializer=new $h(e),this.Gr=new Yh(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.Kr=!1,Promise.resolve()}get started(){return this.Kr}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(t){return this.indexManager}getDocumentOverlayCache(t){let e=this.overlays[t.toKey()];return e||(e=new Jh,this.overlays[t.toKey()]=e),e}getMutationQueue(t,e){let r=this.qr[t.toKey()];return r||(r=new td(e,this.referenceDelegate),this.qr[t.toKey()]=r),r}getGlobalsCache(){return this.$r}getTargetCache(){return this.Ur}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Gr}runTransaction(t,e,r){U("MemoryPersistence","Starting transaction:",t);const s=new id(this.Qr.next());return this.referenceDelegate.zr(),r(s).next(o=>this.referenceDelegate.jr(s).next(()=>o)).toPromise().then(o=>(s.raiseOnCommittedEvent(),o))}Hr(t,e){return k.or(Object.values(this.qr).map(r=>()=>r.containsKey(t,e)))}}class id extends Bc{constructor(t){super(),this.currentSequenceNumber=t}}class Ci{constructor(t){this.persistence=t,this.Jr=new bi,this.Yr=null}static Zr(t){return new Ci(t)}get Xr(){if(this.Yr)return this.Yr;throw B()}addReference(t,e,r){return this.Jr.addReference(r,e),this.Xr.delete(r.toString()),k.resolve()}removeReference(t,e,r){return this.Jr.removeReference(r,e),this.Xr.add(r.toString()),k.resolve()}markPotentiallyOrphaned(t,e){return this.Xr.add(e.toString()),k.resolve()}removeTarget(t,e){this.Jr.gr(e.targetId).forEach(s=>this.Xr.add(s.toString()));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(t,e.targetId).next(s=>{s.forEach(o=>this.Xr.add(o.toString()))}).next(()=>r.removeTargetData(t,e))}zr(){this.Yr=new Set}jr(t){const e=this.persistence.getRemoteDocumentCache().newChangeBuffer();return k.forEach(this.Xr,r=>{const s=q.fromPath(r);return this.ei(t,s).next(o=>{o||e.removeEntry(s,z.min())})}).next(()=>(this.Yr=null,e.apply(t)))}updateLimboDocument(t,e){return this.ei(t,e).next(r=>{r?this.Xr.delete(e.toString()):this.Xr.add(e.toString())})}Wr(t){return 0}ei(t,e){return k.or([()=>k.resolve(this.Jr.containsKey(e)),()=>this.persistence.getTargetCache().containsKey(t,e),()=>this.persistence.Hr(t,e)])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vi{constructor(t,e,r,s){this.targetId=t,this.fromCache=e,this.$i=r,this.Ui=s}static Wi(t,e){let r=W(),s=W();for(const o of e.docChanges)switch(o.type){case 0:r=r.add(o.doc.key);break;case 1:s=s.add(o.doc.key)}return new Vi(t,e.fromCache,r,s)}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class od{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(t){this._documentReadCount+=t}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ad{constructor(){this.Gi=!1,this.zi=!1,this.ji=100,this.Hi=function(){return fc()?8:jc(pc())>0?6:4}()}initialize(t,e){this.Ji=t,this.indexManager=e,this.Gi=!0}getDocumentsMatchingQuery(t,e,r,s){const o={result:null};return this.Yi(t,e).next(a=>{o.result=a}).next(()=>{if(!o.result)return this.Zi(t,e,s,r).next(a=>{o.result=a})}).next(()=>{if(o.result)return;const a=new od;return this.Xi(t,e,a).next(l=>{if(o.result=l,this.zi)return this.es(t,e,a,l.size)})}).next(()=>o.result)}es(t,e,r,s){return r.documentReadCount<this.ji?(Wn()<=we.DEBUG&&U("QueryEngine","SDK will not create cache indexes for query:",dn(e),"since it only creates cache indexes for collection contains","more than or equal to",this.ji,"documents"),k.resolve()):(Wn()<=we.DEBUG&&U("QueryEngine","Query:",dn(e),"scans",r.documentReadCount,"local documents and returns",s,"documents as results."),r.documentReadCount>this.Hi*s?(Wn()<=we.DEBUG&&U("QueryEngine","The SDK decides to create cache indexes for query:",dn(e),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(t,se(e))):k.resolve())}Yi(t,e){if(pa(e))return k.resolve(null);let r=se(e);return this.indexManager.getIndexType(t,r).next(s=>s===0?null:(e.limit!==null&&s===1&&(e=ss(e,null,"F"),r=se(e)),this.indexManager.getDocumentsMatchingTarget(t,r).next(o=>{const a=W(...o);return this.Ji.getDocuments(t,a).next(l=>this.indexManager.getMinOffset(t,r).next(h=>{const d=this.ts(e,l);return this.ns(e,d,a,h.readTime)?this.Yi(t,ss(e,null,"F")):this.rs(t,d,e,h)}))})))}Zi(t,e,r,s){return pa(e)||s.isEqual(z.min())?k.resolve(null):this.Ji.getDocuments(t,r).next(o=>{const a=this.ts(e,o);return this.ns(e,a,r,s)?k.resolve(null):(Wn()<=we.DEBUG&&U("QueryEngine","Re-using previous result from %s to execute query: %s",s.toString(),dn(e)),this.rs(t,a,e,Mc(s,-1)).next(l=>l))})}ts(t,e){let r=new Vt(Ru(t));return e.forEach((s,o)=>{ps(t,o)&&(r=r.add(o))}),r}ns(t,e,r,s){if(t.limit===null)return!1;if(r.size!==e.size)return!0;const o=t.limitType==="F"?e.last():e.first();return!!o&&(o.hasPendingWrites||o.version.compareTo(s)>0)}Xi(t,e,r){return Wn()<=we.DEBUG&&U("QueryEngine","Using full collection scan to execute query:",dn(e)),this.Ji.getDocumentsMatchingQuery(t,e,be.min(),r)}rs(t,e,r,s){return this.Ji.getDocumentsMatchingQuery(t,r,s).next(o=>(e.forEach(a=>{o=o.insert(a.key,a)}),o))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ud{constructor(t,e,r,s){this.persistence=t,this.ss=e,this.serializer=s,this.os=new ct(et),this._s=new Pn(o=>Ti(o),Ei),this.us=new Map,this.cs=t.getRemoteDocumentCache(),this.Ur=t.getTargetCache(),this.Gr=t.getBundleCache(),this.ls(r)}ls(t){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(t),this.indexManager=this.persistence.getIndexManager(t),this.mutationQueue=this.persistence.getMutationQueue(t,this.indexManager),this.localDocuments=new Xh(this.cs,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.cs.setIndexManager(this.indexManager),this.ss.initialize(this.localDocuments,this.indexManager)}collectGarbage(t){return this.persistence.runTransaction("Collect garbage","readwrite-primary",e=>t.collect(e,this.os))}}function ld(n,t,e,r){return new ud(n,t,e,r)}async function Hu(n,t){const e=G(n);return await e.persistence.runTransaction("Handle user change","readonly",r=>{let s;return e.mutationQueue.getAllMutationBatches(r).next(o=>(s=o,e.ls(t),e.mutationQueue.getAllMutationBatches(r))).next(o=>{const a=[],l=[];let h=W();for(const d of s){a.push(d.batchId);for(const p of d.mutations)h=h.add(p.key)}for(const d of o){l.push(d.batchId);for(const p of d.mutations)h=h.add(p.key)}return e.localDocuments.getDocuments(r,h).next(d=>({hs:d,removedBatchIds:a,addedBatchIds:l}))})})}function cd(n,t){const e=G(n);return e.persistence.runTransaction("Acknowledge batch","readwrite-primary",r=>{const s=t.batch.keys(),o=e.cs.newChangeBuffer({trackRemovals:!0});return function(l,h,d,p){const y=d.batch,A=y.keys();let C=k.resolve();return A.forEach(N=>{C=C.next(()=>p.getEntry(h,N)).next(L=>{const S=d.docVersions.get(N);Y(S!==null),L.version.compareTo(S)<0&&(y.applyToRemoteDocument(L,d),L.isValidDocument()&&(L.setReadTime(d.commitVersion),p.addEntry(L)))})}),C.next(()=>l.mutationQueue.removeMutationBatch(h,y))}(e,r,t,o).next(()=>o.apply(r)).next(()=>e.mutationQueue.performConsistencyCheck(r)).next(()=>e.documentOverlayCache.removeOverlaysForBatchId(r,s,t.batch.batchId)).next(()=>e.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(r,function(l){let h=W();for(let d=0;d<l.mutationResults.length;++d)l.mutationResults[d].transformResults.length>0&&(h=h.add(l.batch.mutations[d].key));return h}(t))).next(()=>e.localDocuments.getDocuments(r,s))})}function Xu(n){const t=G(n);return t.persistence.runTransaction("Get last remote snapshot version","readonly",e=>t.Ur.getLastRemoteSnapshotVersion(e))}function hd(n,t){const e=G(n),r=t.snapshotVersion;let s=e.os;return e.persistence.runTransaction("Apply remote event","readwrite-primary",o=>{const a=e.cs.newChangeBuffer({trackRemovals:!0});s=e.os;const l=[];t.targetChanges.forEach((p,y)=>{const A=s.get(y);if(!A)return;l.push(e.Ur.removeMatchingKeys(o,p.removedDocuments,y).next(()=>e.Ur.addMatchingKeys(o,p.addedDocuments,y)));let C=A.withSequenceNumber(o.currentSequenceNumber);t.targetMismatches.get(y)!==null?C=C.withResumeToken(St.EMPTY_BYTE_STRING,z.min()).withLastLimboFreeSnapshotVersion(z.min()):p.resumeToken.approximateByteSize()>0&&(C=C.withResumeToken(p.resumeToken,r)),s=s.insert(y,C),function(L,S,$){return L.resumeToken.approximateByteSize()===0||S.snapshotVersion.toMicroseconds()-L.snapshotVersion.toMicroseconds()>=3e8?!0:$.addedDocuments.size+$.modifiedDocuments.size+$.removedDocuments.size>0}(A,C,p)&&l.push(e.Ur.updateTargetData(o,C))});let h=he(),d=W();if(t.documentUpdates.forEach(p=>{t.resolvedLimboDocuments.has(p)&&l.push(e.persistence.referenceDelegate.updateLimboDocument(o,p))}),l.push(dd(o,a,t.documentUpdates).next(p=>{h=p.Ps,d=p.Is})),!r.isEqual(z.min())){const p=e.Ur.getLastRemoteSnapshotVersion(o).next(y=>e.Ur.setTargetsMetadata(o,o.currentSequenceNumber,r));l.push(p)}return k.waitFor(l).next(()=>a.apply(o)).next(()=>e.localDocuments.getLocalViewOfDocuments(o,h,d)).next(()=>h)}).then(o=>(e.os=s,o))}function dd(n,t,e){let r=W(),s=W();return e.forEach(o=>r=r.add(o)),t.getEntries(n,r).next(o=>{let a=he();return e.forEach((l,h)=>{const d=o.get(l);h.isFoundDocument()!==d.isFoundDocument()&&(s=s.add(l)),h.isNoDocument()&&h.version.isEqual(z.min())?(t.removeEntry(l,h.readTime),a=a.insert(l,h)):!d.isValidDocument()||h.version.compareTo(d.version)>0||h.version.compareTo(d.version)===0&&d.hasPendingWrites?(t.addEntry(h),a=a.insert(l,h)):U("LocalStore","Ignoring outdated watch update for ",l,". Current version:",d.version," Watch version:",h.version)}),{Ps:a,Is:s}})}function fd(n,t){const e=G(n);return e.persistence.runTransaction("Get next mutation batch","readonly",r=>(t===void 0&&(t=-1),e.mutationQueue.getNextMutationBatchAfterBatchId(r,t)))}function pd(n,t){const e=G(n);return e.persistence.runTransaction("Allocate target","readwrite",r=>{let s;return e.Ur.getTargetData(r,t).next(o=>o?(s=o,k.resolve(s)):e.Ur.allocateTargetId(r).next(a=>(s=new Ae(t,a,"TargetPurposeListen",r.currentSequenceNumber),e.Ur.addTargetData(r,s).next(()=>s))))}).then(r=>{const s=e.os.get(r.targetId);return(s===null||r.snapshotVersion.compareTo(s.snapshotVersion)>0)&&(e.os=e.os.insert(r.targetId,r),e._s.set(t,r.targetId)),r})}async function ui(n,t,e){const r=G(n),s=r.os.get(t),o=e?"readwrite":"readwrite-primary";try{e||await r.persistence.runTransaction("Release target",o,a=>r.persistence.referenceDelegate.removeTarget(a,s))}catch(a){if(!_r(a))throw a;U("LocalStore",`Failed to update sequence numbers for target ${t}: ${a}`)}r.os=r.os.remove(t),r._s.delete(s.target)}function Ra(n,t,e){const r=G(n);let s=z.min(),o=W();return r.persistence.runTransaction("Execute query","readwrite",a=>function(h,d,p){const y=G(h),A=y._s.get(p);return A!==void 0?k.resolve(y.os.get(A)):y.Ur.getTargetData(d,p)}(r,a,se(t)).next(l=>{if(l)return s=l.lastLimboFreeSnapshotVersion,r.Ur.getMatchingKeysForTargetId(a,l.targetId).next(h=>{o=h})}).next(()=>r.ss.getDocumentsMatchingQuery(a,t,e?s:z.min(),e?o:W())).next(l=>(md(r,oh(t),l),{documents:l,Ts:o})))}function md(n,t,e){let r=n.us.get(t)||z.min();e.forEach((s,o)=>{o.readTime.compareTo(r)>0&&(r=o.readTime)}),n.us.set(t,r)}class Pa{constructor(){this.activeTargetIds=dh()}fs(t){this.activeTargetIds=this.activeTargetIds.add(t)}gs(t){this.activeTargetIds=this.activeTargetIds.delete(t)}Vs(){const t={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(t)}}class _d{constructor(){this.so=new Pa,this.oo={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(t){}updateMutationState(t,e,r){}addLocalQueryTarget(t,e=!0){return e&&this.so.fs(t),this.oo[t]||"not-current"}updateQueryState(t,e,r){this.oo[t]=e}removeLocalQueryTarget(t){this.so.gs(t)}isLocalQueryTarget(t){return this.so.activeTargetIds.has(t)}clearQueryState(t){delete this.oo[t]}getAllActiveQueryTargets(){return this.so.activeTargetIds}isActiveQueryTarget(t){return this.so.activeTargetIds.has(t)}start(){return this.so=new Pa,Promise.resolve()}handleUserChange(t,e,r){}setOnlineState(t){}shutdown(){}writeSequenceNumber(t){}notifyBundleLoaded(t){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gd{_o(t){}shutdown(){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ba{constructor(){this.ao=()=>this.uo(),this.co=()=>this.lo(),this.ho=[],this.Po()}_o(t){this.ho.push(t)}shutdown(){window.removeEventListener("online",this.ao),window.removeEventListener("offline",this.co)}Po(){window.addEventListener("online",this.ao),window.addEventListener("offline",this.co)}uo(){U("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const t of this.ho)t(0)}lo(){U("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const t of this.ho)t(1)}static D(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Qr=null;function Qs(){return Qr===null?Qr=function(){return 268435456+Math.round(2147483648*Math.random())}():Qr++,"0x"+Qr.toString(16)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const yd={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vd{constructor(t){this.Io=t.Io,this.To=t.To}Eo(t){this.Ao=t}Ro(t){this.Vo=t}mo(t){this.fo=t}onMessage(t){this.po=t}close(){this.To()}send(t){this.Io(t)}yo(){this.Ao()}wo(){this.Vo()}So(t){this.fo(t)}bo(t){this.po(t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xt="WebChannelConnection";class Td extends class{constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const r=e.ssl?"https":"http",s=encodeURIComponent(this.databaseId.projectId),o=encodeURIComponent(this.databaseId.database);this.Do=r+"://"+e.host,this.vo=`projects/${s}/databases/${o}`,this.Co=this.databaseId.database==="(default)"?`project_id=${s}`:`project_id=${s}&database_id=${o}`}get Fo(){return!1}Mo(e,r,s,o,a){const l=Qs(),h=this.xo(e,r.toUriEncodedString());U("RestConnection",`Sending RPC '${e}' ${l}:`,h,s);const d={"google-cloud-resource-prefix":this.vo,"x-goog-request-params":this.Co};return this.Oo(d,o,a),this.No(e,h,d,s).then(p=>(U("RestConnection",`Received RPC '${e}' ${l}: `,p),p),p=>{throw gn("RestConnection",`RPC '${e}' ${l} failed with error: `,p,"url: ",h,"request:",s),p})}Lo(e,r,s,o,a,l){return this.Mo(e,r,s,o,a)}Oo(e,r,s){e["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+An}(),e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),r&&r.headers.forEach((o,a)=>e[a]=o),s&&s.headers.forEach((o,a)=>e[a]=o)}xo(e,r){const s=yd[e];return`${this.Do}/v1/${r}:${s}`}terminate(){}}{constructor(t){super(t),this.forceLongPolling=t.forceLongPolling,this.autoDetectLongPolling=t.autoDetectLongPolling,this.useFetchStreams=t.useFetchStreams,this.longPollingOptions=t.longPollingOptions}No(t,e,r,s){const o=Qs();return new Promise((a,l)=>{const h=new au;h.setWithCredentials(!0),h.listenOnce(uu.COMPLETE,()=>{try{switch(h.getLastErrorCode()){case Xr.NO_ERROR:const p=h.getResponseJson();U(xt,`XHR for RPC '${t}' ${o} received:`,JSON.stringify(p)),a(p);break;case Xr.TIMEOUT:U(xt,`RPC '${t}' ${o} timed out`),l(new M(V.DEADLINE_EXCEEDED,"Request time out"));break;case Xr.HTTP_ERROR:const y=h.getStatus();if(U(xt,`RPC '${t}' ${o} failed with status:`,y,"response text:",h.getResponseText()),y>0){let A=h.getResponseJson();Array.isArray(A)&&(A=A[0]);const C=A==null?void 0:A.error;if(C&&C.status&&C.message){const N=function(S){const $=S.toLowerCase().replace(/_/g,"-");return Object.values(V).indexOf($)>=0?$:V.UNKNOWN}(C.status);l(new M(N,C.message))}else l(new M(V.UNKNOWN,"Server responded with status "+h.getStatus()))}else l(new M(V.UNAVAILABLE,"Connection failed."));break;default:B()}}finally{U(xt,`RPC '${t}' ${o} completed.`)}});const d=JSON.stringify(s);U(xt,`RPC '${t}' ${o} sending request:`,s),h.send(e,"POST",d,r,15)})}Bo(t,e,r){const s=Qs(),o=[this.Do,"/","google.firestore.v1.Firestore","/",t,"/channel"],a=hu(),l=cu(),h={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},d=this.longPollingOptions.timeoutSeconds;d!==void 0&&(h.longPollingTimeout=Math.round(1e3*d)),this.useFetchStreams&&(h.useFetchStreams=!0),this.Oo(h.initMessageHeaders,e,r),h.encodeInitMessageHeaders=!0;const p=o.join("");U(xt,`Creating RPC '${t}' stream ${s}: ${p}`,h);const y=a.createWebChannel(p,h);let A=!1,C=!1;const N=new vd({Io:S=>{C?U(xt,`Not sending because RPC '${t}' stream ${s} is closed:`,S):(A||(U(xt,`Opening RPC '${t}' stream ${s} transport.`),y.open(),A=!0),U(xt,`RPC '${t}' stream ${s} sending:`,S),y.send(S))},To:()=>y.close()}),L=(S,$,j)=>{S.listen($,F=>{try{j(F)}catch(K){setTimeout(()=>{throw K},0)}})};return L(y,Jn.EventType.OPEN,()=>{C||(U(xt,`RPC '${t}' stream ${s} transport opened.`),N.yo())}),L(y,Jn.EventType.CLOSE,()=>{C||(C=!0,U(xt,`RPC '${t}' stream ${s} transport closed`),N.So())}),L(y,Jn.EventType.ERROR,S=>{C||(C=!0,gn(xt,`RPC '${t}' stream ${s} transport errored:`,S),N.So(new M(V.UNAVAILABLE,"The operation could not be completed")))}),L(y,Jn.EventType.MESSAGE,S=>{var $;if(!C){const j=S.data[0];Y(!!j);const F=j,K=F.error||(($=F[0])===null||$===void 0?void 0:$.error);if(K){U(xt,`RPC '${t}' stream ${s} received error:`,K);const pt=K.status;let J=function(g){const v=_t[g];if(v!==void 0)return Uu(v)}(pt),E=K.message;J===void 0&&(J=V.INTERNAL,E="Unknown error status: "+pt+" with message "+K.message),C=!0,N.So(new M(J,E)),y.close()}else U(xt,`RPC '${t}' stream ${s} received:`,j),N.bo(j)}}),L(l,lu.STAT_EVENT,S=>{S.stat===Zs.PROXY?U(xt,`RPC '${t}' stream ${s} detected buffering proxy`):S.stat===Zs.NOPROXY&&U(xt,`RPC '${t}' stream ${s} detected no buffering proxy`)}),setTimeout(()=>{N.wo()},0),N}}function Ws(){return typeof document<"u"?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function vs(n){return new Sh(n,!0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Si{constructor(t,e,r=1e3,s=1.5,o=6e4){this.ui=t,this.timerId=e,this.ko=r,this.qo=s,this.Qo=o,this.Ko=0,this.$o=null,this.Uo=Date.now(),this.reset()}reset(){this.Ko=0}Wo(){this.Ko=this.Qo}Go(t){this.cancel();const e=Math.floor(this.Ko+this.zo()),r=Math.max(0,Date.now()-this.Uo),s=Math.max(0,e-r);s>0&&U("ExponentialBackoff",`Backing off for ${s} ms (base delay: ${this.Ko} ms, delay with jitter: ${e} ms, last attempt: ${r} ms ago)`),this.$o=this.ui.enqueueAfterDelay(this.timerId,s,()=>(this.Uo=Date.now(),t())),this.Ko*=this.qo,this.Ko<this.ko&&(this.Ko=this.ko),this.Ko>this.Qo&&(this.Ko=this.Qo)}jo(){this.$o!==null&&(this.$o.skipDelay(),this.$o=null)}cancel(){this.$o!==null&&(this.$o.cancel(),this.$o=null)}zo(){return(Math.random()-.5)*this.Ko}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yu{constructor(t,e,r,s,o,a,l,h){this.ui=t,this.Ho=r,this.Jo=s,this.connection=o,this.authCredentialsProvider=a,this.appCheckCredentialsProvider=l,this.listener=h,this.state=0,this.Yo=0,this.Zo=null,this.Xo=null,this.stream=null,this.e_=0,this.t_=new Si(t,e)}n_(){return this.state===1||this.state===5||this.r_()}r_(){return this.state===2||this.state===3}start(){this.e_=0,this.state!==4?this.auth():this.i_()}async stop(){this.n_()&&await this.close(0)}s_(){this.state=0,this.t_.reset()}o_(){this.r_()&&this.Zo===null&&(this.Zo=this.ui.enqueueAfterDelay(this.Ho,6e4,()=>this.__()))}a_(t){this.u_(),this.stream.send(t)}async __(){if(this.r_())return this.close(0)}u_(){this.Zo&&(this.Zo.cancel(),this.Zo=null)}c_(){this.Xo&&(this.Xo.cancel(),this.Xo=null)}async close(t,e){this.u_(),this.c_(),this.t_.cancel(),this.Yo++,t!==4?this.t_.reset():e&&e.code===V.RESOURCE_EXHAUSTED?(ce(e.toString()),ce("Using maximum backoff delay to prevent overloading the backend."),this.t_.Wo()):e&&e.code===V.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.l_(),this.stream.close(),this.stream=null),this.state=t,await this.listener.mo(e)}l_(){}auth(){this.state=1;const t=this.h_(this.Yo),e=this.Yo;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([r,s])=>{this.Yo===e&&this.P_(r,s)},r=>{t(()=>{const s=new M(V.UNKNOWN,"Fetching auth token failed: "+r.message);return this.I_(s)})})}P_(t,e){const r=this.h_(this.Yo);this.stream=this.T_(t,e),this.stream.Eo(()=>{r(()=>this.listener.Eo())}),this.stream.Ro(()=>{r(()=>(this.state=2,this.Xo=this.ui.enqueueAfterDelay(this.Jo,1e4,()=>(this.r_()&&(this.state=3),Promise.resolve())),this.listener.Ro()))}),this.stream.mo(s=>{r(()=>this.I_(s))}),this.stream.onMessage(s=>{r(()=>++this.e_==1?this.E_(s):this.onNext(s))})}i_(){this.state=5,this.t_.Go(async()=>{this.state=0,this.start()})}I_(t){return U("PersistentStream",`close with error: ${t}`),this.stream=null,this.close(4,t)}h_(t){return e=>{this.ui.enqueueAndForget(()=>this.Yo===t?e():(U("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class Ed extends Yu{constructor(t,e,r,s,o,a){super(t,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",e,r,s,a),this.serializer=o}T_(t,e){return this.connection.Bo("Listen",t,e)}E_(t){return this.onNext(t)}onNext(t){this.t_.reset();const e=xh(this.serializer,t),r=function(o){if(!("targetChange"in o))return z.min();const a=o.targetChange;return a.targetIds&&a.targetIds.length?z.min():a.readTime?Wt(a.readTime):z.min()}(t);return this.listener.d_(e,r)}A_(t){const e={};e.database=ai(this.serializer),e.addTarget=function(o,a){let l;const h=a.target;if(l=ri(h)?{documents:Lh(o,h)}:{query:Mh(o,h)._t},l.targetId=a.targetId,a.resumeToken.approximateByteSize()>0){l.resumeToken=Bu(o,a.resumeToken);const d=ii(o,a.expectedCount);d!==null&&(l.expectedCount=d)}else if(a.snapshotVersion.compareTo(z.min())>0){l.readTime=os(o,a.snapshotVersion.toTimestamp());const d=ii(o,a.expectedCount);d!==null&&(l.expectedCount=d)}return l}(this.serializer,t);const r=Fh(this.serializer,t);r&&(e.labels=r),this.a_(e)}R_(t){const e={};e.database=ai(this.serializer),e.removeTarget=t,this.a_(e)}}class wd extends Yu{constructor(t,e,r,s,o,a){super(t,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",e,r,s,a),this.serializer=o}get V_(){return this.e_>0}start(){this.lastStreamToken=void 0,super.start()}l_(){this.V_&&this.m_([])}T_(t,e){return this.connection.Bo("Write",t,e)}E_(t){return Y(!!t.streamToken),this.lastStreamToken=t.streamToken,Y(!t.writeResults||t.writeResults.length===0),this.listener.f_()}onNext(t){Y(!!t.streamToken),this.lastStreamToken=t.streamToken,this.t_.reset();const e=Oh(t.writeResults,t.commitTime),r=Wt(t.commitTime);return this.listener.g_(r,e)}p_(){const t={};t.database=ai(this.serializer),this.a_(t)}m_(t){const e={streamToken:this.lastStreamToken,writes:t.map(r=>Gu(this.serializer,r))};this.a_(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Id extends class{}{constructor(t,e,r,s){super(),this.authCredentials=t,this.appCheckCredentials=e,this.connection=r,this.serializer=s,this.y_=!1}w_(){if(this.y_)throw new M(V.FAILED_PRECONDITION,"The client has already been terminated.")}Mo(t,e,r,s){return this.w_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([o,a])=>this.connection.Mo(t,oi(e,r),s,o,a)).catch(o=>{throw o.name==="FirebaseError"?(o.code===V.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),o):new M(V.UNKNOWN,o.toString())})}Lo(t,e,r,s,o){return this.w_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([a,l])=>this.connection.Lo(t,oi(e,r),s,a,l,o)).catch(a=>{throw a.name==="FirebaseError"?(a.code===V.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),a):new M(V.UNKNOWN,a.toString())})}terminate(){this.y_=!0,this.connection.terminate()}}class Ad{constructor(t,e){this.asyncQueue=t,this.onlineStateHandler=e,this.state="Unknown",this.S_=0,this.b_=null,this.D_=!0}v_(){this.S_===0&&(this.C_("Unknown"),this.b_=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.b_=null,this.F_("Backend didn't respond within 10 seconds."),this.C_("Offline"),Promise.resolve())))}M_(t){this.state==="Online"?this.C_("Unknown"):(this.S_++,this.S_>=1&&(this.x_(),this.F_(`Connection failed 1 times. Most recent error: ${t.toString()}`),this.C_("Offline")))}set(t){this.x_(),this.S_=0,t==="Online"&&(this.D_=!1),this.C_(t)}C_(t){t!==this.state&&(this.state=t,this.onlineStateHandler(t))}F_(t){const e=`Could not reach Cloud Firestore backend. ${t}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.D_?(ce(e),this.D_=!1):U("OnlineStateTracker",e)}x_(){this.b_!==null&&(this.b_.cancel(),this.b_=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rd{constructor(t,e,r,s,o){this.localStore=t,this.datastore=e,this.asyncQueue=r,this.remoteSyncer={},this.O_=[],this.N_=new Map,this.L_=new Set,this.B_=[],this.k_=o,this.k_._o(a=>{r.enqueueAndForget(async()=>{Ye(this)&&(U("RemoteStore","Restarting streams for network reachability change."),await async function(h){const d=G(h);d.L_.add(4),await Tr(d),d.q_.set("Unknown"),d.L_.delete(4),await Ts(d)}(this))})}),this.q_=new Ad(r,s)}}async function Ts(n){if(Ye(n))for(const t of n.B_)await t(!0)}async function Tr(n){for(const t of n.B_)await t(!1)}function Ju(n,t){const e=G(n);e.N_.has(t.targetId)||(e.N_.set(t.targetId,t),xi(e)?Di(e):bn(e).r_()&&Ni(e,t))}function ki(n,t){const e=G(n),r=bn(e);e.N_.delete(t),r.r_()&&Zu(e,t),e.N_.size===0&&(r.r_()?r.o_():Ye(e)&&e.q_.set("Unknown"))}function Ni(n,t){if(n.Q_.xe(t.targetId),t.resumeToken.approximateByteSize()>0||t.snapshotVersion.compareTo(z.min())>0){const e=n.remoteSyncer.getRemoteKeysForTarget(t.targetId).size;t=t.withExpectedCount(e)}bn(n).A_(t)}function Zu(n,t){n.Q_.xe(t),bn(n).R_(t)}function Di(n){n.Q_=new Ph({getRemoteKeysForTarget:t=>n.remoteSyncer.getRemoteKeysForTarget(t),ot:t=>n.N_.get(t)||null,tt:()=>n.datastore.serializer.databaseId}),bn(n).start(),n.q_.v_()}function xi(n){return Ye(n)&&!bn(n).n_()&&n.N_.size>0}function Ye(n){return G(n).L_.size===0}function tl(n){n.Q_=void 0}async function Pd(n){n.q_.set("Online")}async function bd(n){n.N_.forEach((t,e)=>{Ni(n,t)})}async function Cd(n,t){tl(n),xi(n)?(n.q_.M_(t),Di(n)):n.q_.set("Unknown")}async function Vd(n,t,e){if(n.q_.set("Online"),t instanceof qu&&t.state===2&&t.cause)try{await async function(s,o){const a=o.cause;for(const l of o.targetIds)s.N_.has(l)&&(await s.remoteSyncer.rejectListen(l,a),s.N_.delete(l),s.Q_.removeTarget(l))}(n,t)}catch(r){U("RemoteStore","Failed to remove targets %s: %s ",t.targetIds.join(","),r),await us(n,r)}else if(t instanceof Zr?n.Q_.Ke(t):t instanceof Fu?n.Q_.He(t):n.Q_.We(t),!e.isEqual(z.min()))try{const r=await Xu(n.localStore);e.compareTo(r)>=0&&await function(o,a){const l=o.Q_.rt(a);return l.targetChanges.forEach((h,d)=>{if(h.resumeToken.approximateByteSize()>0){const p=o.N_.get(d);p&&o.N_.set(d,p.withResumeToken(h.resumeToken,a))}}),l.targetMismatches.forEach((h,d)=>{const p=o.N_.get(h);if(!p)return;o.N_.set(h,p.withResumeToken(St.EMPTY_BYTE_STRING,p.snapshotVersion)),Zu(o,h);const y=new Ae(p.target,h,d,p.sequenceNumber);Ni(o,y)}),o.remoteSyncer.applyRemoteEvent(l)}(n,e)}catch(r){U("RemoteStore","Failed to raise snapshot:",r),await us(n,r)}}async function us(n,t,e){if(!_r(t))throw t;n.L_.add(1),await Tr(n),n.q_.set("Offline"),e||(e=()=>Xu(n.localStore)),n.asyncQueue.enqueueRetryable(async()=>{U("RemoteStore","Retrying IndexedDB access"),await e(),n.L_.delete(1),await Ts(n)})}function el(n,t){return t().catch(e=>us(n,e,t))}async function Es(n){const t=G(n),e=Ve(t);let r=t.O_.length>0?t.O_[t.O_.length-1].batchId:-1;for(;Sd(t);)try{const s=await fd(t.localStore,r);if(s===null){t.O_.length===0&&e.o_();break}r=s.batchId,kd(t,s)}catch(s){await us(t,s)}nl(t)&&rl(t)}function Sd(n){return Ye(n)&&n.O_.length<10}function kd(n,t){n.O_.push(t);const e=Ve(n);e.r_()&&e.V_&&e.m_(t.mutations)}function nl(n){return Ye(n)&&!Ve(n).n_()&&n.O_.length>0}function rl(n){Ve(n).start()}async function Nd(n){Ve(n).p_()}async function Dd(n){const t=Ve(n);for(const e of n.O_)t.m_(e.mutations)}async function xd(n,t,e){const r=n.O_.shift(),s=Ai.from(r,t,e);await el(n,()=>n.remoteSyncer.applySuccessfulWrite(s)),await Es(n)}async function Od(n,t){t&&Ve(n).V_&&await async function(r,s){if(function(a){return Mu(a)&&a!==V.ABORTED}(s.code)){const o=r.O_.shift();Ve(r).s_(),await el(r,()=>r.remoteSyncer.rejectFailedWrite(o.batchId,s)),await Es(r)}}(n,t),nl(n)&&rl(n)}async function Ca(n,t){const e=G(n);e.asyncQueue.verifyOperationInProgress(),U("RemoteStore","RemoteStore received new credentials");const r=Ye(e);e.L_.add(3),await Tr(e),r&&e.q_.set("Unknown"),await e.remoteSyncer.handleCredentialChange(t),e.L_.delete(3),await Ts(e)}async function Ld(n,t){const e=G(n);t?(e.L_.delete(2),await Ts(e)):t||(e.L_.add(2),await Tr(e),e.q_.set("Unknown"))}function bn(n){return n.K_||(n.K_=function(e,r,s){const o=G(e);return o.w_(),new Ed(r,o.connection,o.authCredentials,o.appCheckCredentials,o.serializer,s)}(n.datastore,n.asyncQueue,{Eo:Pd.bind(null,n),Ro:bd.bind(null,n),mo:Cd.bind(null,n),d_:Vd.bind(null,n)}),n.B_.push(async t=>{t?(n.K_.s_(),xi(n)?Di(n):n.q_.set("Unknown")):(await n.K_.stop(),tl(n))})),n.K_}function Ve(n){return n.U_||(n.U_=function(e,r,s){const o=G(e);return o.w_(),new wd(r,o.connection,o.authCredentials,o.appCheckCredentials,o.serializer,s)}(n.datastore,n.asyncQueue,{Eo:()=>Promise.resolve(),Ro:Nd.bind(null,n),mo:Od.bind(null,n),f_:Dd.bind(null,n),g_:xd.bind(null,n)}),n.B_.push(async t=>{t?(n.U_.s_(),await Es(n)):(await n.U_.stop(),n.O_.length>0&&(U("RemoteStore",`Stopping write stream with ${n.O_.length} pending writes`),n.O_=[]))})),n.U_}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Oi{constructor(t,e,r,s,o){this.asyncQueue=t,this.timerId=e,this.targetTimeMs=r,this.op=s,this.removalCallback=o,this.deferred=new Re,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(a=>{})}get promise(){return this.deferred.promise}static createAndSchedule(t,e,r,s,o){const a=Date.now()+r,l=new Oi(t,e,a,s,o);return l.start(r),l}start(t){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),t)}skipDelay(){return this.handleDelayElapsed()}cancel(t){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new M(V.CANCELLED,"Operation cancelled"+(t?": "+t:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(t=>this.deferred.resolve(t))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function Li(n,t){if(ce("AsyncQueue",`${t}: ${n}`),_r(n))return new M(V.UNAVAILABLE,`${t}: ${n}`);throw n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _n{constructor(t){this.comparator=t?(e,r)=>t(e,r)||q.comparator(e.key,r.key):(e,r)=>q.comparator(e.key,r.key),this.keyedMap=Zn(),this.sortedSet=new ct(this.comparator)}static emptySet(t){return new _n(t.comparator)}has(t){return this.keyedMap.get(t)!=null}get(t){return this.keyedMap.get(t)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(t){const e=this.keyedMap.get(t);return e?this.sortedSet.indexOf(e):-1}get size(){return this.sortedSet.size}forEach(t){this.sortedSet.inorderTraversal((e,r)=>(t(e),!1))}add(t){const e=this.delete(t.key);return e.copy(e.keyedMap.insert(t.key,t),e.sortedSet.insert(t,null))}delete(t){const e=this.get(t);return e?this.copy(this.keyedMap.remove(t),this.sortedSet.remove(e)):this}isEqual(t){if(!(t instanceof _n)||this.size!==t.size)return!1;const e=this.sortedSet.getIterator(),r=t.sortedSet.getIterator();for(;e.hasNext();){const s=e.getNext().key,o=r.getNext().key;if(!s.isEqual(o))return!1}return!0}toString(){const t=[];return this.forEach(e=>{t.push(e.toString())}),t.length===0?"DocumentSet ()":`DocumentSet (
  `+t.join(`  
`)+`
)`}copy(t,e){const r=new _n;return r.comparator=this.comparator,r.keyedMap=t,r.sortedSet=e,r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Va{constructor(){this.W_=new ct(q.comparator)}track(t){const e=t.doc.key,r=this.W_.get(e);r?t.type!==0&&r.type===3?this.W_=this.W_.insert(e,t):t.type===3&&r.type!==1?this.W_=this.W_.insert(e,{type:r.type,doc:t.doc}):t.type===2&&r.type===2?this.W_=this.W_.insert(e,{type:2,doc:t.doc}):t.type===2&&r.type===0?this.W_=this.W_.insert(e,{type:0,doc:t.doc}):t.type===1&&r.type===0?this.W_=this.W_.remove(e):t.type===1&&r.type===2?this.W_=this.W_.insert(e,{type:1,doc:r.doc}):t.type===0&&r.type===1?this.W_=this.W_.insert(e,{type:2,doc:t.doc}):B():this.W_=this.W_.insert(e,t)}G_(){const t=[];return this.W_.inorderTraversal((e,r)=>{t.push(r)}),t}}class wn{constructor(t,e,r,s,o,a,l,h,d){this.query=t,this.docs=e,this.oldDocs=r,this.docChanges=s,this.mutatedKeys=o,this.fromCache=a,this.syncStateChanged=l,this.excludesMetadataChanges=h,this.hasCachedResults=d}static fromInitialDocuments(t,e,r,s,o){const a=[];return e.forEach(l=>{a.push({type:0,doc:l})}),new wn(t,e,_n.emptySet(e),a,r,s,!0,!1,o)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(t){if(!(this.fromCache===t.fromCache&&this.hasCachedResults===t.hasCachedResults&&this.syncStateChanged===t.syncStateChanged&&this.mutatedKeys.isEqual(t.mutatedKeys)&&fs(this.query,t.query)&&this.docs.isEqual(t.docs)&&this.oldDocs.isEqual(t.oldDocs)))return!1;const e=this.docChanges,r=t.docChanges;if(e.length!==r.length)return!1;for(let s=0;s<e.length;s++)if(e[s].type!==r[s].type||!e[s].doc.isEqual(r[s].doc))return!1;return!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Md{constructor(){this.z_=void 0,this.j_=[]}H_(){return this.j_.some(t=>t.J_())}}class Ud{constructor(){this.queries=Sa(),this.onlineState="Unknown",this.Y_=new Set}terminate(){(function(e,r){const s=G(e),o=s.queries;s.queries=Sa(),o.forEach((a,l)=>{for(const h of l.j_)h.onError(r)})})(this,new M(V.ABORTED,"Firestore shutting down"))}}function Sa(){return new Pn(n=>Au(n),fs)}async function Fd(n,t){const e=G(n);let r=3;const s=t.query;let o=e.queries.get(s);o?!o.H_()&&t.J_()&&(r=2):(o=new Md,r=t.J_()?0:1);try{switch(r){case 0:o.z_=await e.onListen(s,!0);break;case 1:o.z_=await e.onListen(s,!1);break;case 2:await e.onFirstRemoteStoreListen(s)}}catch(a){const l=Li(a,`Initialization of query '${dn(t.query)}' failed`);return void t.onError(l)}e.queries.set(s,o),o.j_.push(t),t.Z_(e.onlineState),o.z_&&t.X_(o.z_)&&Mi(e)}async function qd(n,t){const e=G(n),r=t.query;let s=3;const o=e.queries.get(r);if(o){const a=o.j_.indexOf(t);a>=0&&(o.j_.splice(a,1),o.j_.length===0?s=t.J_()?0:1:!o.H_()&&t.J_()&&(s=2))}switch(s){case 0:return e.queries.delete(r),e.onUnlisten(r,!0);case 1:return e.queries.delete(r),e.onUnlisten(r,!1);case 2:return e.onLastRemoteStoreUnlisten(r);default:return}}function Bd(n,t){const e=G(n);let r=!1;for(const s of t){const o=s.query,a=e.queries.get(o);if(a){for(const l of a.j_)l.X_(s)&&(r=!0);a.z_=s}}r&&Mi(e)}function jd(n,t,e){const r=G(n),s=r.queries.get(t);if(s)for(const o of s.j_)o.onError(e);r.queries.delete(t)}function Mi(n){n.Y_.forEach(t=>{t.next()})}var li,ka;(ka=li||(li={})).ea="default",ka.Cache="cache";class zd{constructor(t,e,r){this.query=t,this.ta=e,this.na=!1,this.ra=null,this.onlineState="Unknown",this.options=r||{}}X_(t){if(!this.options.includeMetadataChanges){const r=[];for(const s of t.docChanges)s.type!==3&&r.push(s);t=new wn(t.query,t.docs,t.oldDocs,r,t.mutatedKeys,t.fromCache,t.syncStateChanged,!0,t.hasCachedResults)}let e=!1;return this.na?this.ia(t)&&(this.ta.next(t),e=!0):this.sa(t,this.onlineState)&&(this.oa(t),e=!0),this.ra=t,e}onError(t){this.ta.error(t)}Z_(t){this.onlineState=t;let e=!1;return this.ra&&!this.na&&this.sa(this.ra,t)&&(this.oa(this.ra),e=!0),e}sa(t,e){if(!t.fromCache||!this.J_())return!0;const r=e!=="Offline";return(!this.options._a||!r)&&(!t.docs.isEmpty()||t.hasCachedResults||e==="Offline")}ia(t){if(t.docChanges.length>0)return!0;const e=this.ra&&this.ra.hasPendingWrites!==t.hasPendingWrites;return!(!t.syncStateChanged&&!e)&&this.options.includeMetadataChanges===!0}oa(t){t=wn.fromInitialDocuments(t.query,t.docs,t.mutatedKeys,t.fromCache,t.hasCachedResults),this.na=!0,this.ta.next(t)}J_(){return this.options.source!==li.Cache}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sl{constructor(t){this.key=t}}class il{constructor(t){this.key=t}}class $d{constructor(t,e){this.query=t,this.Ta=e,this.Ea=null,this.hasCachedResults=!1,this.current=!1,this.da=W(),this.mutatedKeys=W(),this.Aa=Ru(t),this.Ra=new _n(this.Aa)}get Va(){return this.Ta}ma(t,e){const r=e?e.fa:new Va,s=e?e.Ra:this.Ra;let o=e?e.mutatedKeys:this.mutatedKeys,a=s,l=!1;const h=this.query.limitType==="F"&&s.size===this.query.limit?s.last():null,d=this.query.limitType==="L"&&s.size===this.query.limit?s.first():null;if(t.inorderTraversal((p,y)=>{const A=s.get(p),C=ps(this.query,y)?y:null,N=!!A&&this.mutatedKeys.has(A.key),L=!!C&&(C.hasLocalMutations||this.mutatedKeys.has(C.key)&&C.hasCommittedMutations);let S=!1;A&&C?A.data.isEqual(C.data)?N!==L&&(r.track({type:3,doc:C}),S=!0):this.ga(A,C)||(r.track({type:2,doc:C}),S=!0,(h&&this.Aa(C,h)>0||d&&this.Aa(C,d)<0)&&(l=!0)):!A&&C?(r.track({type:0,doc:C}),S=!0):A&&!C&&(r.track({type:1,doc:A}),S=!0,(h||d)&&(l=!0)),S&&(C?(a=a.add(C),o=L?o.add(p):o.delete(p)):(a=a.delete(p),o=o.delete(p)))}),this.query.limit!==null)for(;a.size>this.query.limit;){const p=this.query.limitType==="F"?a.last():a.first();a=a.delete(p.key),o=o.delete(p.key),r.track({type:1,doc:p})}return{Ra:a,fa:r,ns:l,mutatedKeys:o}}ga(t,e){return t.hasLocalMutations&&e.hasCommittedMutations&&!e.hasLocalMutations}applyChanges(t,e,r,s){const o=this.Ra;this.Ra=t.Ra,this.mutatedKeys=t.mutatedKeys;const a=t.fa.G_();a.sort((p,y)=>function(C,N){const L=S=>{switch(S){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return B()}};return L(C)-L(N)}(p.type,y.type)||this.Aa(p.doc,y.doc)),this.pa(r),s=s!=null&&s;const l=e&&!s?this.ya():[],h=this.da.size===0&&this.current&&!s?1:0,d=h!==this.Ea;return this.Ea=h,a.length!==0||d?{snapshot:new wn(this.query,t.Ra,o,a,t.mutatedKeys,h===0,d,!1,!!r&&r.resumeToken.approximateByteSize()>0),wa:l}:{wa:l}}Z_(t){return this.current&&t==="Offline"?(this.current=!1,this.applyChanges({Ra:this.Ra,fa:new Va,mutatedKeys:this.mutatedKeys,ns:!1},!1)):{wa:[]}}Sa(t){return!this.Ta.has(t)&&!!this.Ra.has(t)&&!this.Ra.get(t).hasLocalMutations}pa(t){t&&(t.addedDocuments.forEach(e=>this.Ta=this.Ta.add(e)),t.modifiedDocuments.forEach(e=>{}),t.removedDocuments.forEach(e=>this.Ta=this.Ta.delete(e)),this.current=t.current)}ya(){if(!this.current)return[];const t=this.da;this.da=W(),this.Ra.forEach(r=>{this.Sa(r.key)&&(this.da=this.da.add(r.key))});const e=[];return t.forEach(r=>{this.da.has(r)||e.push(new il(r))}),this.da.forEach(r=>{t.has(r)||e.push(new sl(r))}),e}ba(t){this.Ta=t.Ts,this.da=W();const e=this.ma(t.documents);return this.applyChanges(e,!0)}Da(){return wn.fromInitialDocuments(this.query,this.Ra,this.mutatedKeys,this.Ea===0,this.hasCachedResults)}}class Gd{constructor(t,e,r){this.query=t,this.targetId=e,this.view=r}}class Kd{constructor(t){this.key=t,this.va=!1}}class Qd{constructor(t,e,r,s,o,a){this.localStore=t,this.remoteStore=e,this.eventManager=r,this.sharedClientState=s,this.currentUser=o,this.maxConcurrentLimboResolutions=a,this.Ca={},this.Fa=new Pn(l=>Au(l),fs),this.Ma=new Map,this.xa=new Set,this.Oa=new ct(q.comparator),this.Na=new Map,this.La=new bi,this.Ba={},this.ka=new Map,this.qa=En.kn(),this.onlineState="Unknown",this.Qa=void 0}get isPrimaryClient(){return this.Qa===!0}}async function Wd(n,t,e=!0){const r=hl(n);let s;const o=r.Fa.get(t);return o?(r.sharedClientState.addLocalQueryTarget(o.targetId),s=o.view.Da()):s=await ol(r,t,e,!0),s}async function Hd(n,t){const e=hl(n);await ol(e,t,!0,!1)}async function ol(n,t,e,r){const s=await pd(n.localStore,se(t)),o=s.targetId,a=n.sharedClientState.addLocalQueryTarget(o,e);let l;return r&&(l=await Xd(n,t,o,a==="current",s.resumeToken)),n.isPrimaryClient&&e&&Ju(n.remoteStore,s),l}async function Xd(n,t,e,r,s){n.Ka=(y,A,C)=>async function(L,S,$,j){let F=S.view.ma($);F.ns&&(F=await Ra(L.localStore,S.query,!1).then(({documents:E})=>S.view.ma(E,F)));const K=j&&j.targetChanges.get(S.targetId),pt=j&&j.targetMismatches.get(S.targetId)!=null,J=S.view.applyChanges(F,L.isPrimaryClient,K,pt);return Da(L,S.targetId,J.wa),J.snapshot}(n,y,A,C);const o=await Ra(n.localStore,t,!0),a=new $d(t,o.Ts),l=a.ma(o.documents),h=vr.createSynthesizedTargetChangeForCurrentChange(e,r&&n.onlineState!=="Offline",s),d=a.applyChanges(l,n.isPrimaryClient,h);Da(n,e,d.wa);const p=new Gd(t,e,a);return n.Fa.set(t,p),n.Ma.has(e)?n.Ma.get(e).push(t):n.Ma.set(e,[t]),d.snapshot}async function Yd(n,t,e){const r=G(n),s=r.Fa.get(t),o=r.Ma.get(s.targetId);if(o.length>1)return r.Ma.set(s.targetId,o.filter(a=>!fs(a,t))),void r.Fa.delete(t);r.isPrimaryClient?(r.sharedClientState.removeLocalQueryTarget(s.targetId),r.sharedClientState.isActiveQueryTarget(s.targetId)||await ui(r.localStore,s.targetId,!1).then(()=>{r.sharedClientState.clearQueryState(s.targetId),e&&ki(r.remoteStore,s.targetId),ci(r,s.targetId)}).catch(mr)):(ci(r,s.targetId),await ui(r.localStore,s.targetId,!0))}async function Jd(n,t){const e=G(n),r=e.Fa.get(t),s=e.Ma.get(r.targetId);e.isPrimaryClient&&s.length===1&&(e.sharedClientState.removeLocalQueryTarget(r.targetId),ki(e.remoteStore,r.targetId))}async function Zd(n,t,e){const r=af(n);try{const s=await function(a,l){const h=G(a),d=Tt.now(),p=l.reduce((C,N)=>C.add(N.key),W());let y,A;return h.persistence.runTransaction("Locally write mutations","readwrite",C=>{let N=he(),L=W();return h.cs.getEntries(C,p).next(S=>{N=S,N.forEach(($,j)=>{j.isValidDocument()||(L=L.add($))})}).next(()=>h.localDocuments.getOverlayedDocuments(C,N)).next(S=>{y=S;const $=[];for(const j of l){const F=Th(j,y.get(j.key).overlayedDocument);F!=null&&$.push(new Se(j.key,F,_u(F.value.mapValue),Bt.exists(!0)))}return h.mutationQueue.addMutationBatch(C,d,$,l)}).next(S=>{A=S;const $=S.applyToLocalDocumentSet(y,L);return h.documentOverlayCache.saveOverlays(C,S.batchId,$)})}).then(()=>({batchId:A.batchId,changes:bu(y)}))}(r.localStore,t);r.sharedClientState.addPendingMutation(s.batchId),function(a,l,h){let d=a.Ba[a.currentUser.toKey()];d||(d=new ct(et)),d=d.insert(l,h),a.Ba[a.currentUser.toKey()]=d}(r,s.batchId,e),await Er(r,s.changes),await Es(r.remoteStore)}catch(s){const o=Li(s,"Failed to persist write");e.reject(o)}}async function al(n,t){const e=G(n);try{const r=await hd(e.localStore,t);t.targetChanges.forEach((s,o)=>{const a=e.Na.get(o);a&&(Y(s.addedDocuments.size+s.modifiedDocuments.size+s.removedDocuments.size<=1),s.addedDocuments.size>0?a.va=!0:s.modifiedDocuments.size>0?Y(a.va):s.removedDocuments.size>0&&(Y(a.va),a.va=!1))}),await Er(e,r,t)}catch(r){await mr(r)}}function Na(n,t,e){const r=G(n);if(r.isPrimaryClient&&e===0||!r.isPrimaryClient&&e===1){const s=[];r.Fa.forEach((o,a)=>{const l=a.view.Z_(t);l.snapshot&&s.push(l.snapshot)}),function(a,l){const h=G(a);h.onlineState=l;let d=!1;h.queries.forEach((p,y)=>{for(const A of y.j_)A.Z_(l)&&(d=!0)}),d&&Mi(h)}(r.eventManager,t),s.length&&r.Ca.d_(s),r.onlineState=t,r.isPrimaryClient&&r.sharedClientState.setOnlineState(t)}}async function tf(n,t,e){const r=G(n);r.sharedClientState.updateQueryState(t,"rejected",e);const s=r.Na.get(t),o=s&&s.key;if(o){let a=new ct(q.comparator);a=a.insert(o,At.newNoDocument(o,z.min()));const l=W().add(o),h=new ys(z.min(),new Map,new ct(et),a,l);await al(r,h),r.Oa=r.Oa.remove(o),r.Na.delete(t),Ui(r)}else await ui(r.localStore,t,!1).then(()=>ci(r,t,e)).catch(mr)}async function ef(n,t){const e=G(n),r=t.batch.batchId;try{const s=await cd(e.localStore,t);ll(e,r,null),ul(e,r),e.sharedClientState.updateMutationState(r,"acknowledged"),await Er(e,s)}catch(s){await mr(s)}}async function nf(n,t,e){const r=G(n);try{const s=await function(a,l){const h=G(a);return h.persistence.runTransaction("Reject batch","readwrite-primary",d=>{let p;return h.mutationQueue.lookupMutationBatch(d,l).next(y=>(Y(y!==null),p=y.keys(),h.mutationQueue.removeMutationBatch(d,y))).next(()=>h.mutationQueue.performConsistencyCheck(d)).next(()=>h.documentOverlayCache.removeOverlaysForBatchId(d,p,l)).next(()=>h.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(d,p)).next(()=>h.localDocuments.getDocuments(d,p))})}(r.localStore,t);ll(r,t,e),ul(r,t),r.sharedClientState.updateMutationState(t,"rejected",e),await Er(r,s)}catch(s){await mr(s)}}function ul(n,t){(n.ka.get(t)||[]).forEach(e=>{e.resolve()}),n.ka.delete(t)}function ll(n,t,e){const r=G(n);let s=r.Ba[r.currentUser.toKey()];if(s){const o=s.get(t);o&&(e?o.reject(e):o.resolve(),s=s.remove(t)),r.Ba[r.currentUser.toKey()]=s}}function ci(n,t,e=null){n.sharedClientState.removeLocalQueryTarget(t);for(const r of n.Ma.get(t))n.Fa.delete(r),e&&n.Ca.$a(r,e);n.Ma.delete(t),n.isPrimaryClient&&n.La.gr(t).forEach(r=>{n.La.containsKey(r)||cl(n,r)})}function cl(n,t){n.xa.delete(t.path.canonicalString());const e=n.Oa.get(t);e!==null&&(ki(n.remoteStore,e),n.Oa=n.Oa.remove(t),n.Na.delete(e),Ui(n))}function Da(n,t,e){for(const r of e)r instanceof sl?(n.La.addReference(r.key,t),rf(n,r)):r instanceof il?(U("SyncEngine","Document no longer in limbo: "+r.key),n.La.removeReference(r.key,t),n.La.containsKey(r.key)||cl(n,r.key)):B()}function rf(n,t){const e=t.key,r=e.path.canonicalString();n.Oa.get(e)||n.xa.has(r)||(U("SyncEngine","New document in limbo: "+e),n.xa.add(r),Ui(n))}function Ui(n){for(;n.xa.size>0&&n.Oa.size<n.maxConcurrentLimboResolutions;){const t=n.xa.values().next().value;n.xa.delete(t);const e=new q(it.fromString(t)),r=n.qa.next();n.Na.set(r,new Kd(e)),n.Oa=n.Oa.insert(e,r),Ju(n.remoteStore,new Ae(se(wi(e.path)),r,"TargetPurposeLimboResolution",_i.oe))}}async function Er(n,t,e){const r=G(n),s=[],o=[],a=[];r.Fa.isEmpty()||(r.Fa.forEach((l,h)=>{a.push(r.Ka(h,t,e).then(d=>{var p;if((d||e)&&r.isPrimaryClient){const y=d?!d.fromCache:(p=e==null?void 0:e.targetChanges.get(h.targetId))===null||p===void 0?void 0:p.current;r.sharedClientState.updateQueryState(h.targetId,y?"current":"not-current")}if(d){s.push(d);const y=Vi.Wi(h.targetId,d);o.push(y)}}))}),await Promise.all(a),r.Ca.d_(s),await async function(h,d){const p=G(h);try{await p.persistence.runTransaction("notifyLocalViewChanges","readwrite",y=>k.forEach(d,A=>k.forEach(A.$i,C=>p.persistence.referenceDelegate.addReference(y,A.targetId,C)).next(()=>k.forEach(A.Ui,C=>p.persistence.referenceDelegate.removeReference(y,A.targetId,C)))))}catch(y){if(!_r(y))throw y;U("LocalStore","Failed to update sequence numbers: "+y)}for(const y of d){const A=y.targetId;if(!y.fromCache){const C=p.os.get(A),N=C.snapshotVersion,L=C.withLastLimboFreeSnapshotVersion(N);p.os=p.os.insert(A,L)}}}(r.localStore,o))}async function sf(n,t){const e=G(n);if(!e.currentUser.isEqual(t)){U("SyncEngine","User change. New user:",t.toKey());const r=await Hu(e.localStore,t);e.currentUser=t,function(o,a){o.ka.forEach(l=>{l.forEach(h=>{h.reject(new M(V.CANCELLED,a))})}),o.ka.clear()}(e,"'waitForPendingWrites' promise is rejected due to a user change."),e.sharedClientState.handleUserChange(t,r.removedBatchIds,r.addedBatchIds),await Er(e,r.hs)}}function of(n,t){const e=G(n),r=e.Na.get(t);if(r&&r.va)return W().add(r.key);{let s=W();const o=e.Ma.get(t);if(!o)return s;for(const a of o){const l=e.Fa.get(a);s=s.unionWith(l.view.Va)}return s}}function hl(n){const t=G(n);return t.remoteStore.remoteSyncer.applyRemoteEvent=al.bind(null,t),t.remoteStore.remoteSyncer.getRemoteKeysForTarget=of.bind(null,t),t.remoteStore.remoteSyncer.rejectListen=tf.bind(null,t),t.Ca.d_=Bd.bind(null,t.eventManager),t.Ca.$a=jd.bind(null,t.eventManager),t}function af(n){const t=G(n);return t.remoteStore.remoteSyncer.applySuccessfulWrite=ef.bind(null,t),t.remoteStore.remoteSyncer.rejectFailedWrite=nf.bind(null,t),t}class ls{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(t){this.serializer=vs(t.databaseInfo.databaseId),this.sharedClientState=this.Wa(t),this.persistence=this.Ga(t),await this.persistence.start(),this.localStore=this.za(t),this.gcScheduler=this.ja(t,this.localStore),this.indexBackfillerScheduler=this.Ha(t,this.localStore)}ja(t,e){return null}Ha(t,e){return null}za(t){return ld(this.persistence,new ad,t.initialUser,this.serializer)}Ga(t){return new sd(Ci.Zr,this.serializer)}Wa(t){return new _d}async terminate(){var t,e;(t=this.gcScheduler)===null||t===void 0||t.stop(),(e=this.indexBackfillerScheduler)===null||e===void 0||e.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}ls.provider={build:()=>new ls};class hi{async initialize(t,e){this.localStore||(this.localStore=t.localStore,this.sharedClientState=t.sharedClientState,this.datastore=this.createDatastore(e),this.remoteStore=this.createRemoteStore(e),this.eventManager=this.createEventManager(e),this.syncEngine=this.createSyncEngine(e,!t.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>Na(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=sf.bind(null,this.syncEngine),await Ld(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(t){return function(){return new Ud}()}createDatastore(t){const e=vs(t.databaseInfo.databaseId),r=function(o){return new Td(o)}(t.databaseInfo);return function(o,a,l,h){return new Id(o,a,l,h)}(t.authCredentials,t.appCheckCredentials,r,e)}createRemoteStore(t){return function(r,s,o,a,l){return new Rd(r,s,o,a,l)}(this.localStore,this.datastore,t.asyncQueue,e=>Na(this.syncEngine,e,0),function(){return ba.D()?new ba:new gd}())}createSyncEngine(t,e){return function(s,o,a,l,h,d,p){const y=new Qd(s,o,a,l,h,d);return p&&(y.Qa=!0),y}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,t.initialUser,t.maxConcurrentLimboResolutions,e)}async terminate(){var t,e;await async function(s){const o=G(s);U("RemoteStore","RemoteStore shutting down."),o.L_.add(5),await Tr(o),o.k_.shutdown(),o.q_.set("Unknown")}(this.remoteStore),(t=this.datastore)===null||t===void 0||t.terminate(),(e=this.eventManager)===null||e===void 0||e.terminate()}}hi.provider={build:()=>new hi};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uf{constructor(t){this.observer=t,this.muted=!1}next(t){this.muted||this.observer.next&&this.Ya(this.observer.next,t)}error(t){this.muted||(this.observer.error?this.Ya(this.observer.error,t):ce("Uncaught Error in snapshot listener:",t.toString()))}Za(){this.muted=!0}Ya(t,e){setTimeout(()=>{this.muted||t(e)},0)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lf{constructor(t){this.datastore=t,this.readVersions=new Map,this.mutations=[],this.committed=!1,this.lastTransactionError=null,this.writtenDocs=new Set}async lookup(t){if(this.ensureCommitNotCalled(),this.mutations.length>0)throw this.lastTransactionError=new M(V.INVALID_ARGUMENT,"Firestore transactions require all reads to be executed before all writes."),this.lastTransactionError;const e=await async function(s,o){const a=G(s),l={documents:o.map(y=>as(a.serializer,y))},h=await a.Lo("BatchGetDocuments",a.serializer.databaseId,it.emptyPath(),l,o.length),d=new Map;h.forEach(y=>{const A=Dh(a.serializer,y);d.set(A.key.toString(),A)});const p=[];return o.forEach(y=>{const A=d.get(y.toString());Y(!!A),p.push(A)}),p}(this.datastore,t);return e.forEach(r=>this.recordVersion(r)),e}set(t,e){this.write(e.toMutation(t,this.precondition(t))),this.writtenDocs.add(t.toString())}update(t,e){try{this.write(e.toMutation(t,this.preconditionForUpdate(t)))}catch(r){this.lastTransactionError=r}this.writtenDocs.add(t.toString())}delete(t){this.write(new gs(t,this.precondition(t))),this.writtenDocs.add(t.toString())}async commit(){if(this.ensureCommitNotCalled(),this.lastTransactionError)throw this.lastTransactionError;const t=this.readVersions;this.mutations.forEach(e=>{t.delete(e.key.toString())}),t.forEach((e,r)=>{const s=q.fromPath(r);this.mutations.push(new Lu(s,this.precondition(s)))}),await async function(r,s){const o=G(r),a={writes:s.map(l=>Gu(o.serializer,l))};await o.Mo("Commit",o.serializer.databaseId,it.emptyPath(),a)}(this.datastore,this.mutations),this.committed=!0}recordVersion(t){let e;if(t.isFoundDocument())e=t.version;else{if(!t.isNoDocument())throw B();e=z.min()}const r=this.readVersions.get(t.key.toString());if(r){if(!e.isEqual(r))throw new M(V.ABORTED,"Document version changed between two reads.")}else this.readVersions.set(t.key.toString(),e)}precondition(t){const e=this.readVersions.get(t.toString());return!this.writtenDocs.has(t.toString())&&e?e.isEqual(z.min())?Bt.exists(!1):Bt.updateTime(e):Bt.none()}preconditionForUpdate(t){const e=this.readVersions.get(t.toString());if(!this.writtenDocs.has(t.toString())&&e){if(e.isEqual(z.min()))throw new M(V.INVALID_ARGUMENT,"Can't update a document that doesn't exist.");return Bt.updateTime(e)}return Bt.exists(!0)}write(t){this.ensureCommitNotCalled(),this.mutations.push(t)}ensureCommitNotCalled(){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cf{constructor(t,e,r,s,o){this.asyncQueue=t,this.datastore=e,this.options=r,this.updateFunction=s,this.deferred=o,this._u=r.maxAttempts,this.t_=new Si(this.asyncQueue,"transaction_retry")}au(){this._u-=1,this.uu()}uu(){this.t_.Go(async()=>{const t=new lf(this.datastore),e=this.cu(t);e&&e.then(r=>{this.asyncQueue.enqueueAndForget(()=>t.commit().then(()=>{this.deferred.resolve(r)}).catch(s=>{this.lu(s)}))}).catch(r=>{this.lu(r)})})}cu(t){try{const e=this.updateFunction(t);return!gr(e)&&e.catch&&e.then?e:(this.deferred.reject(Error("Transaction callback must return a Promise")),null)}catch(e){return this.deferred.reject(e),null}}lu(t){this._u>0&&this.hu(t)?(this._u-=1,this.asyncQueue.enqueueAndForget(()=>(this.uu(),Promise.resolve()))):this.deferred.reject(t)}hu(t){if(t.name==="FirebaseError"){const e=t.code;return e==="aborted"||e==="failed-precondition"||e==="already-exists"||!Mu(e)}return!1}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hf{constructor(t,e,r,s,o){this.authCredentials=t,this.appCheckCredentials=e,this.asyncQueue=r,this.databaseInfo=s,this.user=Ot.UNAUTHENTICATED,this.clientId=fu.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=o,this.authCredentials.start(r,async a=>{U("FirestoreClient","Received user=",a.uid),await this.authCredentialListener(a),this.user=a}),this.appCheckCredentials.start(r,a=>(U("FirestoreClient","Received new app check token=",a),this.appCheckCredentialListener(a,this.user)))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(t){this.authCredentialListener=t}setAppCheckTokenChangeListener(t){this.appCheckCredentialListener=t}terminate(){this.asyncQueue.enterRestrictedMode();const t=new Re;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),t.resolve()}catch(e){const r=Li(e,"Failed to shutdown persistence");t.reject(r)}}),t.promise}}async function Hs(n,t){n.asyncQueue.verifyOperationInProgress(),U("FirestoreClient","Initializing OfflineComponentProvider");const e=n.configuration;await t.initialize(e);let r=e.initialUser;n.setCredentialChangeListener(async s=>{r.isEqual(s)||(await Hu(t.localStore,s),r=s)}),t.persistence.setDatabaseDeletedListener(()=>n.terminate()),n._offlineComponents=t}async function xa(n,t){n.asyncQueue.verifyOperationInProgress();const e=await df(n);U("FirestoreClient","Initializing OnlineComponentProvider"),await t.initialize(e,n.configuration),n.setCredentialChangeListener(r=>Ca(t.remoteStore,r)),n.setAppCheckTokenChangeListener((r,s)=>Ca(t.remoteStore,s)),n._onlineComponents=t}async function df(n){if(!n._offlineComponents)if(n._uninitializedComponentsProvider){U("FirestoreClient","Using user provided OfflineComponentProvider");try{await Hs(n,n._uninitializedComponentsProvider._offline)}catch(t){const e=t;if(!function(s){return s.name==="FirebaseError"?s.code===V.FAILED_PRECONDITION||s.code===V.UNIMPLEMENTED:!(typeof DOMException<"u"&&s instanceof DOMException)||s.code===22||s.code===20||s.code===11}(e))throw e;gn("Error using user provided cache. Falling back to memory cache: "+e),await Hs(n,new ls)}}else U("FirestoreClient","Using default OfflineComponentProvider"),await Hs(n,new ls);return n._offlineComponents}async function Fi(n){return n._onlineComponents||(n._uninitializedComponentsProvider?(U("FirestoreClient","Using user provided OnlineComponentProvider"),await xa(n,n._uninitializedComponentsProvider._online)):(U("FirestoreClient","Using default OnlineComponentProvider"),await xa(n,new hi))),n._onlineComponents}function ff(n){return Fi(n).then(t=>t.syncEngine)}function pf(n){return Fi(n).then(t=>t.datastore)}async function Oa(n){const t=await Fi(n),e=t.eventManager;return e.onListen=Wd.bind(null,t.syncEngine),e.onUnlisten=Yd.bind(null,t.syncEngine),e.onFirstRemoteStoreListen=Hd.bind(null,t.syncEngine),e.onLastRemoteStoreUnlisten=Jd.bind(null,t.syncEngine),e}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function dl(n){const t={};return n.timeoutSeconds!==void 0&&(t.timeoutSeconds=n.timeoutSeconds),t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const La=new Map;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function fl(n,t,e){if(!e)throw new M(V.INVALID_ARGUMENT,`Function ${n}() cannot be called with an empty ${t}.`)}function mf(n,t,e,r){if(t===!0&&r===!0)throw new M(V.INVALID_ARGUMENT,`${n} and ${e} cannot be used together.`)}function Ma(n){if(!q.isDocumentKey(n))throw new M(V.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${n} has ${n.length}.`)}function Ua(n){if(q.isDocumentKey(n))throw new M(V.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${n} has ${n.length}.`)}function ws(n){if(n===void 0)return"undefined";if(n===null)return"null";if(typeof n=="string")return n.length>20&&(n=`${n.substring(0,20)}...`),JSON.stringify(n);if(typeof n=="number"||typeof n=="boolean")return""+n;if(typeof n=="object"){if(n instanceof Array)return"an array";{const t=function(r){return r.constructor?r.constructor.name:null}(n);return t?`a custom ${t} object`:"an object"}}return typeof n=="function"?"a function":B()}function ze(n,t){if("_delegate"in n&&(n=n._delegate),!(n instanceof t)){if(t.name===n.constructor.name)throw new M(V.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const e=ws(n);throw new M(V.INVALID_ARGUMENT,`Expected type '${t.name}', but it was: ${e}`)}}return n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fa{constructor(t){var e,r;if(t.host===void 0){if(t.ssl!==void 0)throw new M(V.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=t.host,this.ssl=(e=t.ssl)===null||e===void 0||e;if(this.credentials=t.credentials,this.ignoreUndefinedProperties=!!t.ignoreUndefinedProperties,this.localCache=t.localCache,t.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(t.cacheSizeBytes!==-1&&t.cacheSizeBytes<1048576)throw new M(V.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=t.cacheSizeBytes}mf("experimentalForceLongPolling",t.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",t.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!t.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:t.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!t.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=dl((r=t.experimentalLongPollingOptions)!==null&&r!==void 0?r:{}),function(o){if(o.timeoutSeconds!==void 0){if(isNaN(o.timeoutSeconds))throw new M(V.INVALID_ARGUMENT,`invalid long polling timeout: ${o.timeoutSeconds} (must not be NaN)`);if(o.timeoutSeconds<5)throw new M(V.INVALID_ARGUMENT,`invalid long polling timeout: ${o.timeoutSeconds} (minimum allowed value is 5)`);if(o.timeoutSeconds>30)throw new M(V.INVALID_ARGUMENT,`invalid long polling timeout: ${o.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!t.useFetchStreams}isEqual(t){return this.host===t.host&&this.ssl===t.ssl&&this.credentials===t.credentials&&this.cacheSizeBytes===t.cacheSizeBytes&&this.experimentalForceLongPolling===t.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===t.experimentalAutoDetectLongPolling&&function(r,s){return r.timeoutSeconds===s.timeoutSeconds}(this.experimentalLongPollingOptions,t.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===t.ignoreUndefinedProperties&&this.useFetchStreams===t.useFetchStreams}}class Is{constructor(t,e,r,s){this._authCredentials=t,this._appCheckCredentials=e,this._databaseId=r,this._app=s,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new Fa({}),this._settingsFrozen=!1,this._terminateTask="notTerminated"}get app(){if(!this._app)throw new M(V.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(t){if(this._settingsFrozen)throw new M(V.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new Fa(t),t.credentials!==void 0&&(this._authCredentials=function(r){if(!r)return new Cc;switch(r.type){case"firstParty":return new Nc(r.sessionIndex||"0",r.iamToken||null,r.authTokenFactory||null);case"provider":return r.client;default:throw new M(V.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(t.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(e){const r=La.get(e);r&&(U("ComponentProvider","Removing Datastore"),La.delete(e),r.terminate())}(this),Promise.resolve()}}function _f(n,t,e,r={}){var s;const o=(n=ze(n,Is))._getSettings(),a=`${t}:${e}`;if(o.host!=="firestore.googleapis.com"&&o.host!==a&&gn("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used."),n._setSettings(Object.assign(Object.assign({},o),{host:a,ssl:!1})),r.mockUserToken){let l,h;if(typeof r.mockUserToken=="string")l=r.mockUserToken,h=Ot.MOCK_USER;else{l=nu(r.mockUserToken,(s=n._app)===null||s===void 0?void 0:s.options.projectId);const d=r.mockUserToken.sub||r.mockUserToken.user_id;if(!d)throw new M(V.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");h=new Ot(d)}n._authCredentials=new Vc(new du(l,h))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ke{constructor(t,e,r){this.converter=e,this._query=r,this.type="query",this.firestore=t}withConverter(t){return new ke(this.firestore,t,this._query)}}class $t{constructor(t,e,r){this.converter=e,this._key=r,this.type="document",this.firestore=t}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new Pe(this.firestore,this.converter,this._key.path.popLast())}withConverter(t){return new $t(this.firestore,t,this._key)}}class Pe extends ke{constructor(t,e,r){super(t,e,wi(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const t=this._path.popLast();return t.isEmpty()?null:new $t(this.firestore,null,new q(t))}withConverter(t){return new Pe(this.firestore,t,this._path)}}function qa(n,t,...e){if(n=Lt(n),fl("collection","path",t),n instanceof Is){const r=it.fromString(t,...e);return Ua(r),new Pe(n,null,r)}{if(!(n instanceof $t||n instanceof Pe))throw new M(V.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=n._path.child(it.fromString(t,...e));return Ua(r),new Pe(n.firestore,null,r)}}function di(n,t,...e){if(n=Lt(n),arguments.length===1&&(t=fu.newId()),fl("doc","path",t),n instanceof Is){const r=it.fromString(t,...e);return Ma(r),new $t(n,null,new q(r))}{if(!(n instanceof $t||n instanceof Pe))throw new M(V.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=n._path.child(it.fromString(t,...e));return Ma(r),new $t(n.firestore,n instanceof Pe?n.converter:null,new q(r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ba{constructor(t=Promise.resolve()){this.Pu=[],this.Iu=!1,this.Tu=[],this.Eu=null,this.du=!1,this.Au=!1,this.Ru=[],this.t_=new Si(this,"async_queue_retry"),this.Vu=()=>{const r=Ws();r&&U("AsyncQueue","Visibility state changed to "+r.visibilityState),this.t_.jo()},this.mu=t;const e=Ws();e&&typeof e.addEventListener=="function"&&e.addEventListener("visibilitychange",this.Vu)}get isShuttingDown(){return this.Iu}enqueueAndForget(t){this.enqueue(t)}enqueueAndForgetEvenWhileRestricted(t){this.fu(),this.gu(t)}enterRestrictedMode(t){if(!this.Iu){this.Iu=!0,this.Au=t||!1;const e=Ws();e&&typeof e.removeEventListener=="function"&&e.removeEventListener("visibilitychange",this.Vu)}}enqueue(t){if(this.fu(),this.Iu)return new Promise(()=>{});const e=new Re;return this.gu(()=>this.Iu&&this.Au?Promise.resolve():(t().then(e.resolve,e.reject),e.promise)).then(()=>e.promise)}enqueueRetryable(t){this.enqueueAndForget(()=>(this.Pu.push(t),this.pu()))}async pu(){if(this.Pu.length!==0){try{await this.Pu[0](),this.Pu.shift(),this.t_.reset()}catch(t){if(!_r(t))throw t;U("AsyncQueue","Operation failed with retryable error: "+t)}this.Pu.length>0&&this.t_.Go(()=>this.pu())}}gu(t){const e=this.mu.then(()=>(this.du=!0,t().catch(r=>{this.Eu=r,this.du=!1;const s=function(a){let l=a.message||"";return a.stack&&(l=a.stack.includes(a.message)?a.stack:a.message+`
`+a.stack),l}(r);throw ce("INTERNAL UNHANDLED ERROR: ",s),r}).then(r=>(this.du=!1,r))));return this.mu=e,e}enqueueAfterDelay(t,e,r){this.fu(),this.Ru.indexOf(t)>-1&&(e=0);const s=Oi.createAndSchedule(this,t,e,r,o=>this.yu(o));return this.Tu.push(s),s}fu(){this.Eu&&B()}verifyOperationInProgress(){}async wu(){let t;do t=this.mu,await t;while(t!==this.mu)}Su(t){for(const e of this.Tu)if(e.timerId===t)return!0;return!1}bu(t){return this.wu().then(()=>{this.Tu.sort((e,r)=>e.targetTimeMs-r.targetTimeMs);for(const e of this.Tu)if(e.skipDelay(),t!=="all"&&e.timerId===t)break;return this.wu()})}Du(t){this.Ru.push(t)}yu(t){const e=this.Tu.indexOf(t);this.Tu.splice(e,1)}}function ja(n){return function(e,r){if(typeof e!="object"||e===null)return!1;const s=e;for(const o of r)if(o in s&&typeof s[o]=="function")return!0;return!1}(n,["next","error","complete"])}class In extends Is{constructor(t,e,r,s){super(t,e,r,s),this.type="firestore",this._queue=new Ba,this._persistenceKey=(s==null?void 0:s.name)||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const t=this._firestoreClient.terminate();this._queue=new Ba(t),this._firestoreClient=void 0,await t}}}function Hn(n,t){const e=typeof n=="object"?n:Ja(),r=typeof n=="string"?n:"(default)",s=Za(e,"firestore").getImmediate({identifier:r});if(!s._initialized){const o=tu("firestore");o&&_f(s,...o)}return s}function qi(n){if(n._terminated)throw new M(V.FAILED_PRECONDITION,"The client has already been terminated.");return n._firestoreClient||gf(n),n._firestoreClient}function gf(n){var t,e,r;const s=n._freezeSettings(),o=function(l,h,d,p){return new Gc(l,h,d,p.host,p.ssl,p.experimentalForceLongPolling,p.experimentalAutoDetectLongPolling,dl(p.experimentalLongPollingOptions),p.useFetchStreams)}(n._databaseId,((t=n._app)===null||t===void 0?void 0:t.options.appId)||"",n._persistenceKey,s);n._componentsProvider||!((e=s.localCache)===null||e===void 0)&&e._offlineComponentProvider&&(!((r=s.localCache)===null||r===void 0)&&r._onlineComponentProvider)&&(n._componentsProvider={_offline:s.localCache._offlineComponentProvider,_online:s.localCache._onlineComponentProvider}),n._firestoreClient=new hf(n._authCredentials,n._appCheckCredentials,n._queue,o,n._componentsProvider&&function(l){const h=l==null?void 0:l._online.build();return{_offline:l==null?void 0:l._offline.build(h),_online:h}}(n._componentsProvider))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class We{constructor(t){this._byteString=t}static fromBase64String(t){try{return new We(St.fromBase64String(t))}catch(e){throw new M(V.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+e)}}static fromUint8Array(t){return new We(St.fromUint8Array(t))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(t){return this._byteString.isEqual(t._byteString)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class As{constructor(...t){for(let e=0;e<t.length;++e)if(t[e].length===0)throw new M(V.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new Ct(t)}isEqual(t){return this._internalPath.isEqual(t._internalPath)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rs{constructor(t){this._methodName=t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bi{constructor(t,e){if(!isFinite(t)||t<-90||t>90)throw new M(V.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+t);if(!isFinite(e)||e<-180||e>180)throw new M(V.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+e);this._lat=t,this._long=e}get latitude(){return this._lat}get longitude(){return this._long}isEqual(t){return this._lat===t._lat&&this._long===t._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(t){return et(this._lat,t._lat)||et(this._long,t._long)}}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ji{constructor(t){this._values=(t||[]).map(e=>e)}toArray(){return this._values.map(t=>t)}isEqual(t){return function(r,s){if(r.length!==s.length)return!1;for(let o=0;o<r.length;++o)if(r[o]!==s[o])return!1;return!0}(this._values,t._values)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const yf=/^__.*__$/;class vf{constructor(t,e,r){this.data=t,this.fieldMask=e,this.fieldTransforms=r}toMutation(t,e){return this.fieldMask!==null?new Se(t,this.data,this.fieldMask,e,this.fieldTransforms):new yr(t,this.data,e,this.fieldTransforms)}}class pl{constructor(t,e,r){this.data=t,this.fieldMask=e,this.fieldTransforms=r}toMutation(t,e){return new Se(t,this.data,this.fieldMask,e,this.fieldTransforms)}}function ml(n){switch(n){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw B()}}class zi{constructor(t,e,r,s,o,a){this.settings=t,this.databaseId=e,this.serializer=r,this.ignoreUndefinedProperties=s,o===void 0&&this.vu(),this.fieldTransforms=o||[],this.fieldMask=a||[]}get path(){return this.settings.path}get Cu(){return this.settings.Cu}Fu(t){return new zi(Object.assign(Object.assign({},this.settings),t),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}Mu(t){var e;const r=(e=this.path)===null||e===void 0?void 0:e.child(t),s=this.Fu({path:r,xu:!1});return s.Ou(t),s}Nu(t){var e;const r=(e=this.path)===null||e===void 0?void 0:e.child(t),s=this.Fu({path:r,xu:!1});return s.vu(),s}Lu(t){return this.Fu({path:void 0,xu:!0})}Bu(t){return cs(t,this.settings.methodName,this.settings.ku||!1,this.path,this.settings.qu)}contains(t){return this.fieldMask.find(e=>t.isPrefixOf(e))!==void 0||this.fieldTransforms.find(e=>t.isPrefixOf(e.field))!==void 0}vu(){if(this.path)for(let t=0;t<this.path.length;t++)this.Ou(this.path.get(t))}Ou(t){if(t.length===0)throw this.Bu("Document fields must not be empty");if(ml(this.Cu)&&yf.test(t))throw this.Bu('Document fields cannot begin and end with "__"')}}class Tf{constructor(t,e,r){this.databaseId=t,this.ignoreUndefinedProperties=e,this.serializer=r||vs(t)}Qu(t,e,r,s=!1){return new zi({Cu:t,methodName:e,qu:r,path:Ct.emptyPath(),xu:!1,ku:s},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function $i(n){const t=n._freezeSettings(),e=vs(n._databaseId);return new Tf(n._databaseId,!!t.ignoreUndefinedProperties,e)}function _l(n,t,e,r,s,o={}){const a=n.Qu(o.merge||o.mergeFields?2:0,t,e,s);Ki("Data must be an object, but it was:",a,r);const l=gl(r,a);let h,d;if(o.merge)h=new Kt(a.fieldMask),d=a.fieldTransforms;else if(o.mergeFields){const p=[];for(const y of o.mergeFields){const A=fi(t,y,e);if(!a.contains(A))throw new M(V.INVALID_ARGUMENT,`Field '${A}' is specified in your field mask but missing from your input data.`);vl(p,A)||p.push(A)}h=new Kt(p),d=a.fieldTransforms.filter(y=>h.covers(y.field))}else h=null,d=a.fieldTransforms;return new vf(new qt(l),h,d)}class Ps extends Rs{_toFieldTransform(t){if(t.Cu!==2)throw t.Cu===1?t.Bu(`${this._methodName}() can only appear at the top level of your update data`):t.Bu(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return t.fieldMask.push(t.path),null}isEqual(t){return t instanceof Ps}}class Gi extends Rs{_toFieldTransform(t){return new _h(t.path,new dr)}isEqual(t){return t instanceof Gi}}function Ef(n,t,e,r){const s=n.Qu(1,t,e);Ki("Data must be an object, but it was:",s,r);const o=[],a=qt.empty();Xe(r,(h,d)=>{const p=Qi(t,h,e);d=Lt(d);const y=s.Nu(p);if(d instanceof Ps)o.push(p);else{const A=wr(d,y);A!=null&&(o.push(p),a.set(p,A))}});const l=new Kt(o);return new pl(a,l,s.fieldTransforms)}function wf(n,t,e,r,s,o){const a=n.Qu(1,t,e),l=[fi(t,r,e)],h=[s];if(o.length%2!=0)throw new M(V.INVALID_ARGUMENT,`Function ${t}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let A=0;A<o.length;A+=2)l.push(fi(t,o[A])),h.push(o[A+1]);const d=[],p=qt.empty();for(let A=l.length-1;A>=0;--A)if(!vl(d,l[A])){const C=l[A];let N=h[A];N=Lt(N);const L=a.Nu(C);if(N instanceof Ps)d.push(C);else{const S=wr(N,L);S!=null&&(d.push(C),p.set(C,S))}}const y=new Kt(d);return new pl(p,y,a.fieldTransforms)}function If(n,t,e,r=!1){return wr(e,n.Qu(r?4:3,t))}function wr(n,t){if(yl(n=Lt(n)))return Ki("Unsupported field value:",t,n),gl(n,t);if(n instanceof Rs)return function(r,s){if(!ml(s.Cu))throw s.Bu(`${r._methodName}() can only be used with update() and set()`);if(!s.path)throw s.Bu(`${r._methodName}() is not currently supported inside arrays`);const o=r._toFieldTransform(s);o&&s.fieldTransforms.push(o)}(n,t),null;if(n===void 0&&t.ignoreUndefinedProperties)return null;if(t.path&&t.fieldMask.push(t.path),n instanceof Array){if(t.settings.xu&&t.Cu!==4)throw t.Bu("Nested arrays are not supported");return function(r,s){const o=[];let a=0;for(const l of r){let h=wr(l,s.Lu(a));h==null&&(h={nullValue:"NULL_VALUE"}),o.push(h),a++}return{arrayValue:{values:o}}}(n,t)}return function(r,s){if((r=Lt(r))===null)return{nullValue:"NULL_VALUE"};if(typeof r=="number")return fh(s.serializer,r);if(typeof r=="boolean")return{booleanValue:r};if(typeof r=="string")return{stringValue:r};if(r instanceof Date){const o=Tt.fromDate(r);return{timestampValue:os(s.serializer,o)}}if(r instanceof Tt){const o=new Tt(r.seconds,1e3*Math.floor(r.nanoseconds/1e3));return{timestampValue:os(s.serializer,o)}}if(r instanceof Bi)return{geoPointValue:{latitude:r.latitude,longitude:r.longitude}};if(r instanceof We)return{bytesValue:Bu(s.serializer,r._byteString)};if(r instanceof $t){const o=s.databaseId,a=r.firestore._databaseId;if(!a.isEqual(o))throw s.Bu(`Document reference is for database ${a.projectId}/${a.database} but should be for database ${o.projectId}/${o.database}`);return{referenceValue:Pi(r.firestore._databaseId||s.databaseId,r._key.path)}}if(r instanceof ji)return function(a,l){return{mapValue:{fields:{__type__:{stringValue:"__vector__"},value:{arrayValue:{values:a.toArray().map(h=>{if(typeof h!="number")throw l.Bu("VectorValues must only contain numeric values.");return Ii(l.serializer,h)})}}}}}}(r,s);throw s.Bu(`Unsupported field value: ${ws(r)}`)}(n,t)}function gl(n,t){const e={};return pu(n)?t.path&&t.path.length>0&&t.fieldMask.push(t.path):Xe(n,(r,s)=>{const o=wr(s,t.Mu(r));o!=null&&(e[r]=o)}),{mapValue:{fields:e}}}function yl(n){return!(typeof n!="object"||n===null||n instanceof Array||n instanceof Date||n instanceof Tt||n instanceof Bi||n instanceof We||n instanceof $t||n instanceof Rs||n instanceof ji)}function Ki(n,t,e){if(!yl(e)||!function(s){return typeof s=="object"&&s!==null&&(Object.getPrototypeOf(s)===Object.prototype||Object.getPrototypeOf(s)===null)}(e)){const r=ws(e);throw r==="an object"?t.Bu(n+" a custom object"):t.Bu(n+" "+r)}}function fi(n,t,e){if((t=Lt(t))instanceof As)return t._internalPath;if(typeof t=="string")return Qi(n,t);throw cs("Field path arguments must be of type string or ",n,!1,void 0,e)}const Af=new RegExp("[~\\*/\\[\\]]");function Qi(n,t,e){if(t.search(Af)>=0)throw cs(`Invalid field path (${t}). Paths must not contain '~', '*', '/', '[', or ']'`,n,!1,void 0,e);try{return new As(...t.split("."))._internalPath}catch{throw cs(`Invalid field path (${t}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,n,!1,void 0,e)}}function cs(n,t,e,r,s){const o=r&&!r.isEmpty(),a=s!==void 0;let l=`Function ${t}() called with invalid data`;e&&(l+=" (via `toFirestore()`)"),l+=". ";let h="";return(o||a)&&(h+=" (found",o&&(h+=` in field ${r}`),a&&(h+=` in document ${s}`),h+=")"),new M(V.INVALID_ARGUMENT,l+n+h)}function vl(n,t){return n.some(e=>e.isEqual(t))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hs{constructor(t,e,r,s,o){this._firestore=t,this._userDataWriter=e,this._key=r,this._document=s,this._converter=o}get id(){return this._key.path.lastSegment()}get ref(){return new $t(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const t=new Rf(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(t)}return this._userDataWriter.convertValue(this._document.data.value)}}get(t){if(this._document){const e=this._document.data.field(Wi("DocumentSnapshot.get",t));if(e!==null)return this._userDataWriter.convertValue(e)}}}class Rf extends hs{data(){return super.data()}}function Wi(n,t){return typeof t=="string"?Qi(n,t):t instanceof As?t._internalPath:t._delegate._internalPath}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Pf(n){if(n.limitType==="L"&&n.explicitOrderBy.length===0)throw new M(V.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class Hi{}class Xi extends Hi{}function bf(n,t,...e){let r=[];t instanceof Hi&&r.push(t),r=r.concat(e),function(o){const a=o.filter(h=>h instanceof Ji).length,l=o.filter(h=>h instanceof Yi).length;if(a>1||a>0&&l>0)throw new M(V.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")}(r);for(const s of r)n=s._apply(n);return n}class Yi extends Xi{constructor(t,e,r){super(),this._field=t,this._op=e,this._value=r,this.type="where"}static _create(t,e,r){return new Yi(t,e,r)}_apply(t){const e=this._parse(t);return Tl(t._query,e),new ke(t.firestore,t.converter,si(t._query,e))}_parse(t){const e=$i(t.firestore);return function(o,a,l,h,d,p,y){let A;if(d.isKeyField()){if(p==="array-contains"||p==="array-contains-any")throw new M(V.INVALID_ARGUMENT,`Invalid Query. You can't perform '${p}' queries on documentId().`);if(p==="in"||p==="not-in"){$a(y,p);const C=[];for(const N of y)C.push(za(h,o,N));A={arrayValue:{values:C}}}else A=za(h,o,y)}else p!=="in"&&p!=="not-in"&&p!=="array-contains-any"||$a(y,p),A=If(l,a,y,p==="in"||p==="not-in");return gt.create(d,p,A)}(t._query,"where",e,t.firestore._databaseId,this._field,this._op,this._value)}}class Ji extends Hi{constructor(t,e){super(),this.type=t,this._queryConstraints=e}static _create(t,e){return new Ji(t,e)}_parse(t){const e=this._queryConstraints.map(r=>r._parse(t)).filter(r=>r.getFilters().length>0);return e.length===1?e[0]:Zt.create(e,this._getOperator())}_apply(t){const e=this._parse(t);return e.getFilters().length===0?t:(function(s,o){let a=s;const l=o.getFlattenedFilters();for(const h of l)Tl(a,h),a=si(a,h)}(t._query,e),new ke(t.firestore,t.converter,si(t._query,e)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return this.type==="and"?"and":"or"}}class Zi extends Xi{constructor(t,e){super(),this._field=t,this._direction=e,this.type="orderBy"}static _create(t,e){return new Zi(t,e)}_apply(t){const e=function(s,o,a){if(s.startAt!==null)throw new M(V.INVALID_ARGUMENT,"Invalid query. You must not call startAt() or startAfter() before calling orderBy().");if(s.endAt!==null)throw new M(V.INVALID_ARGUMENT,"Invalid query. You must not call endAt() or endBefore() before calling orderBy().");return new hr(o,a)}(t._query,this._field,this._direction);return new ke(t.firestore,t.converter,function(s,o){const a=s.explicitOrderBy.concat([o]);return new Rn(s.path,s.collectionGroup,a,s.filters.slice(),s.limit,s.limitType,s.startAt,s.endAt)}(t._query,e))}}function Cf(n,t="asc"){const e=t,r=Wi("orderBy",n);return Zi._create(r,e)}class to extends Xi{constructor(t,e,r){super(),this.type=t,this._limit=e,this._limitType=r}static _create(t,e,r){return new to(t,e,r)}_apply(t){return new ke(t.firestore,t.converter,ss(t._query,this._limit,this._limitType))}}function Vf(n){return to._create("limit",n,"F")}function za(n,t,e){if(typeof(e=Lt(e))=="string"){if(e==="")throw new M(V.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!Iu(t)&&e.indexOf("/")!==-1)throw new M(V.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${e}' contains a '/' character.`);const r=t.path.child(it.fromString(e));if(!q.isDocumentKey(r))throw new M(V.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${r}' is not because it has an odd number of segments (${r.length}).`);return ua(n,new q(r))}if(e instanceof $t)return ua(n,e._key);throw new M(V.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${ws(e)}.`)}function $a(n,t){if(!Array.isArray(n)||n.length===0)throw new M(V.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${t.toString()}' filters.`)}function Tl(n,t){const e=function(s,o){for(const a of s)for(const l of a.getFlattenedFilters())if(o.indexOf(l.op)>=0)return l.op;return null}(n.filters,function(s){switch(s){case"!=":return["!=","not-in"];case"array-contains-any":case"in":return["not-in"];case"not-in":return["array-contains-any","in","not-in","!="];default:return[]}}(t.op));if(e!==null)throw e===t.op?new M(V.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${t.op.toString()}' filter.`):new M(V.INVALID_ARGUMENT,`Invalid query. You cannot use '${t.op.toString()}' filters with '${e.toString()}' filters.`)}class El{convertValue(t,e="none"){switch(Qe(t)){case 0:return null;case 1:return t.booleanValue;case 2:return mt(t.integerValue||t.doubleValue);case 3:return this.convertTimestamp(t.timestampValue);case 4:return this.convertServerTimestamp(t,e);case 5:return t.stringValue;case 6:return this.convertBytes(Ke(t.bytesValue));case 7:return this.convertReference(t.referenceValue);case 8:return this.convertGeoPoint(t.geoPointValue);case 9:return this.convertArray(t.arrayValue,e);case 11:return this.convertObject(t.mapValue,e);case 10:return this.convertVectorValue(t.mapValue);default:throw B()}}convertObject(t,e){return this.convertObjectMap(t.fields,e)}convertObjectMap(t,e="none"){const r={};return Xe(t,(s,o)=>{r[s]=this.convertValue(o,e)}),r}convertVectorValue(t){var e,r,s;const o=(s=(r=(e=t.fields)===null||e===void 0?void 0:e.value.arrayValue)===null||r===void 0?void 0:r.values)===null||s===void 0?void 0:s.map(a=>mt(a.doubleValue));return new ji(o)}convertGeoPoint(t){return new Bi(mt(t.latitude),mt(t.longitude))}convertArray(t,e){return(t.values||[]).map(r=>this.convertValue(r,e))}convertServerTimestamp(t,e){switch(e){case"previous":const r=yi(t);return r==null?null:this.convertValue(r,e);case"estimate":return this.convertTimestamp(ur(t));default:return null}}convertTimestamp(t){const e=Ce(t);return new Tt(e.seconds,e.nanos)}convertDocumentKey(t,e){const r=it.fromString(t);Y(Wu(r));const s=new lr(r.get(1),r.get(3)),o=new q(r.popFirst(5));return s.isEqual(e)||ce(`Document ${o} contains a document reference within a different database (${s.projectId}/${s.database}) which is not supported. It will be treated as a reference in the current database (${e.projectId}/${e.database}) instead.`),o}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function wl(n,t,e){let r;return r=n?e&&(e.merge||e.mergeFields)?n.toFirestore(t,e):n.toFirestore(t):t,r}class Sf extends El{constructor(t){super(),this.firestore=t}convertBytes(t){return new We(t)}convertReference(t){const e=this.convertDocumentKey(t,this.firestore._databaseId);return new $t(this.firestore,null,e)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mn{constructor(t,e){this.hasPendingWrites=t,this.fromCache=e}isEqual(t){return this.hasPendingWrites===t.hasPendingWrites&&this.fromCache===t.fromCache}}class eo extends hs{constructor(t,e,r,s,o,a){super(t,e,r,s,a),this._firestore=t,this._firestoreImpl=t,this.metadata=o}exists(){return super.exists()}data(t={}){if(this._document){if(this._converter){const e=new ts(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(e,t)}return this._userDataWriter.convertValue(this._document.data.value,t.serverTimestamps)}}get(t,e={}){if(this._document){const r=this._document.data.field(Wi("DocumentSnapshot.get",t));if(r!==null)return this._userDataWriter.convertValue(r,e.serverTimestamps)}}}class ts extends eo{data(t={}){return super.data(t)}}class kf{constructor(t,e,r,s){this._firestore=t,this._userDataWriter=e,this._snapshot=s,this.metadata=new mn(s.hasPendingWrites,s.fromCache),this.query=r}get docs(){const t=[];return this.forEach(e=>t.push(e)),t}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(t,e){this._snapshot.docs.forEach(r=>{t.call(e,new ts(this._firestore,this._userDataWriter,r.key,r,new mn(this._snapshot.mutatedKeys.has(r.key),this._snapshot.fromCache),this.query.converter))})}docChanges(t={}){const e=!!t.includeMetadataChanges;if(e&&this._snapshot.excludesMetadataChanges)throw new M(V.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===e||(this._cachedChanges=function(s,o){if(s._snapshot.oldDocs.isEmpty()){let a=0;return s._snapshot.docChanges.map(l=>{const h=new ts(s._firestore,s._userDataWriter,l.doc.key,l.doc,new mn(s._snapshot.mutatedKeys.has(l.doc.key),s._snapshot.fromCache),s.query.converter);return l.doc,{type:"added",doc:h,oldIndex:-1,newIndex:a++}})}{let a=s._snapshot.oldDocs;return s._snapshot.docChanges.filter(l=>o||l.type!==3).map(l=>{const h=new ts(s._firestore,s._userDataWriter,l.doc.key,l.doc,new mn(s._snapshot.mutatedKeys.has(l.doc.key),s._snapshot.fromCache),s.query.converter);let d=-1,p=-1;return l.type!==0&&(d=a.indexOf(l.doc.key),a=a.delete(l.doc.key)),l.type!==1&&(a=a.add(l.doc),p=a.indexOf(l.doc.key)),{type:Nf(l.type),doc:h,oldIndex:d,newIndex:p}})}}(this,e),this._cachedChangesIncludeMetadataChanges=e),this._cachedChanges}}function Nf(n){switch(n){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return B()}}class no extends El{constructor(t){super(),this.firestore=t}convertBytes(t){return new We(t)}convertReference(t){const e=this.convertDocumentKey(t,this.firestore._databaseId);return new $t(this.firestore,null,e)}}function Df(n){return Il(ze(n.firestore,In),[new gs(n._key,Bt.none())])}function xf(n,t){const e=ze(n.firestore,In),r=di(n),s=wl(n.converter,t);return Il(e,[_l($i(n.firestore),"addDoc",r._key,s,n.converter!==null,{}).toMutation(r._key,Bt.exists(!1))]).then(()=>r)}function Of(n,...t){var e,r,s;n=Lt(n);let o={includeMetadataChanges:!1,source:"default"},a=0;typeof t[a]!="object"||ja(t[a])||(o=t[a],a++);const l={includeMetadataChanges:o.includeMetadataChanges,source:o.source};if(ja(t[a])){const y=t[a];t[a]=(e=y.next)===null||e===void 0?void 0:e.bind(y),t[a+1]=(r=y.error)===null||r===void 0?void 0:r.bind(y),t[a+2]=(s=y.complete)===null||s===void 0?void 0:s.bind(y)}let h,d,p;if(n instanceof $t)d=ze(n.firestore,In),p=wi(n._key.path),h={next:y=>{t[a]&&t[a](Lf(d,n,y))},error:t[a+1],complete:t[a+2]};else{const y=ze(n,ke);d=ze(y.firestore,In),p=y._query;const A=new no(d);h={next:C=>{t[a]&&t[a](new kf(d,A,y,C))},error:t[a+1],complete:t[a+2]},Pf(n._query)}return function(A,C,N,L){const S=new uf(L),$=new zd(C,S,N);return A.asyncQueue.enqueueAndForget(async()=>Fd(await Oa(A),$)),()=>{S.Za(),A.asyncQueue.enqueueAndForget(async()=>qd(await Oa(A),$))}}(qi(d),p,l,h)}function Il(n,t){return function(r,s){const o=new Re;return r.asyncQueue.enqueueAndForget(async()=>Zd(await ff(r),s,o)),o.promise}(qi(n),t)}function Lf(n,t,e){const r=e.docs.get(t._key),s=new no(n);return new eo(n,s,t._key,r,new mn(e.hasPendingWrites,e.fromCache),t.converter)}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Mf={maxAttempts:5};function Xn(n,t){if((n=Lt(n)).firestore!==t)throw new M(V.INVALID_ARGUMENT,"Provided document reference is from a different Firestore instance.");return n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Uf extends class{constructor(e,r){this._firestore=e,this._transaction=r,this._dataReader=$i(e)}get(e){const r=Xn(e,this._firestore),s=new Sf(this._firestore);return this._transaction.lookup([r._key]).then(o=>{if(!o||o.length!==1)return B();const a=o[0];if(a.isFoundDocument())return new hs(this._firestore,s,a.key,a,r.converter);if(a.isNoDocument())return new hs(this._firestore,s,r._key,null,r.converter);throw B()})}set(e,r,s){const o=Xn(e,this._firestore),a=wl(o.converter,r,s),l=_l(this._dataReader,"Transaction.set",o._key,a,o.converter!==null,s);return this._transaction.set(o._key,l),this}update(e,r,s,...o){const a=Xn(e,this._firestore);let l;return l=typeof(r=Lt(r))=="string"||r instanceof As?wf(this._dataReader,"Transaction.update",a._key,r,s,o):Ef(this._dataReader,"Transaction.update",a._key,r),this._transaction.update(a._key,l),this}delete(e){const r=Xn(e,this._firestore);return this._transaction.delete(r._key),this}}{constructor(t,e){super(t,e),this._firestore=t}get(t){const e=Xn(t,this._firestore),r=new no(this._firestore);return super.get(t).then(s=>new eo(this._firestore,r,e._key,s._document,new mn(!1,!1),e.converter))}}function Ff(n,t,e){n=ze(n,In);const r=Object.assign(Object.assign({},Mf),e);return function(o){if(o.maxAttempts<1)throw new M(V.INVALID_ARGUMENT,"Max attempts must be at least 1")}(r),function(o,a,l){const h=new Re;return o.asyncQueue.enqueueAndForget(async()=>{const d=await pf(o);new cf(o.asyncQueue,d,l,a,h).au()}),h.promise}(qi(n),s=>t(new Uf(n,s)),r)}function qf(){return new Gi("serverTimestamp")}(function(t,e=!0){(function(s){An=s})(ru),su(new iu("firestore",(r,{instanceIdentifier:s,options:o})=>{const a=r.getProvider("app").getImmediate(),l=new In(new Sc(r.getProvider("auth-internal")),new xc(r.getProvider("app-check-internal")),function(d,p){if(!Object.prototype.hasOwnProperty.apply(d.options,["projectId"]))throw new M(V.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new lr(d.options.projectId,p)}(a,s),a);return o=Object.assign({useFetchStreams:e},o),l._setSettings(o),l},"PUBLIC").setMultipleInstances(!0)),es(ra,"4.7.3",t),es(ra,"4.7.3","esm2017")})();/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Al="firebasestorage.googleapis.com",Rl="storageBucket",Bf=2*60*1e3,jf=10*60*1e3,zf=1e3;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ht extends eu{constructor(t,e,r=0){super(Xs(t),`Firebase Storage: ${e} (${Xs(t)})`),this.status_=r,this.customData={serverResponse:null},this._baseMessage=this.message,Object.setPrototypeOf(this,ht.prototype)}get status(){return this.status_}set status(t){this.status_=t}_codeEquals(t){return Xs(t)===this.code}get serverResponse(){return this.customData.serverResponse}set serverResponse(t){this.customData.serverResponse=t,this.customData.serverResponse?this.message=`${this._baseMessage}
${this.customData.serverResponse}`:this.message=this._baseMessage}}var ut;(function(n){n.UNKNOWN="unknown",n.OBJECT_NOT_FOUND="object-not-found",n.BUCKET_NOT_FOUND="bucket-not-found",n.PROJECT_NOT_FOUND="project-not-found",n.QUOTA_EXCEEDED="quota-exceeded",n.UNAUTHENTICATED="unauthenticated",n.UNAUTHORIZED="unauthorized",n.UNAUTHORIZED_APP="unauthorized-app",n.RETRY_LIMIT_EXCEEDED="retry-limit-exceeded",n.INVALID_CHECKSUM="invalid-checksum",n.CANCELED="canceled",n.INVALID_EVENT_NAME="invalid-event-name",n.INVALID_URL="invalid-url",n.INVALID_DEFAULT_BUCKET="invalid-default-bucket",n.NO_DEFAULT_BUCKET="no-default-bucket",n.CANNOT_SLICE_BLOB="cannot-slice-blob",n.SERVER_FILE_WRONG_SIZE="server-file-wrong-size",n.NO_DOWNLOAD_URL="no-download-url",n.INVALID_ARGUMENT="invalid-argument",n.INVALID_ARGUMENT_COUNT="invalid-argument-count",n.APP_DELETED="app-deleted",n.INVALID_ROOT_OPERATION="invalid-root-operation",n.INVALID_FORMAT="invalid-format",n.INTERNAL_ERROR="internal-error",n.UNSUPPORTED_ENVIRONMENT="unsupported-environment"})(ut||(ut={}));function Xs(n){return"storage/"+n}function ro(){const n="An unknown error occurred, please check the error payload for server response.";return new ht(ut.UNKNOWN,n)}function $f(n){return new ht(ut.OBJECT_NOT_FOUND,"Object '"+n+"' does not exist.")}function Gf(n){return new ht(ut.QUOTA_EXCEEDED,"Quota for bucket '"+n+"' exceeded, please view quota on https://firebase.google.com/pricing/.")}function Kf(){const n="User is not authenticated, please authenticate using Firebase Authentication and try again.";return new ht(ut.UNAUTHENTICATED,n)}function Qf(){return new ht(ut.UNAUTHORIZED_APP,"This app does not have permission to access Firebase Storage on this project.")}function Wf(n){return new ht(ut.UNAUTHORIZED,"User does not have permission to access '"+n+"'.")}function Pl(){return new ht(ut.RETRY_LIMIT_EXCEEDED,"Max retry time for operation exceeded, please try again.")}function bl(){return new ht(ut.CANCELED,"User canceled the upload/download.")}function Hf(n){return new ht(ut.INVALID_URL,"Invalid URL '"+n+"'.")}function Xf(n){return new ht(ut.INVALID_DEFAULT_BUCKET,"Invalid default bucket '"+n+"'.")}function Yf(){return new ht(ut.NO_DEFAULT_BUCKET,"No default bucket found. Did you set the '"+Rl+"' property when initializing the app?")}function Cl(){return new ht(ut.CANNOT_SLICE_BLOB,"Cannot slice blob for upload. Please retry the upload.")}function Jf(){return new ht(ut.SERVER_FILE_WRONG_SIZE,"Server recorded incorrect upload file size, please retry the upload.")}function Zf(){return new ht(ut.NO_DOWNLOAD_URL,"The given file does not have any download URLs.")}function tp(n){return new ht(ut.UNSUPPORTED_ENVIRONMENT,`${n} is missing. Make sure to install the required polyfills. See https://firebase.google.com/docs/web/environments-js-sdk#polyfills for more information.`)}function pi(n){return new ht(ut.INVALID_ARGUMENT,n)}function Vl(){return new ht(ut.APP_DELETED,"The Firebase app was deleted.")}function ep(n){return new ht(ut.INVALID_ROOT_OPERATION,"The operation '"+n+"' cannot be performed on a root reference, create a non-root reference using child, such as .child('file.png').")}function or(n,t){return new ht(ut.INVALID_FORMAT,"String does not match format '"+n+"': "+t)}function Yn(n){throw new ht(ut.INTERNAL_ERROR,"Internal error: "+n)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qt{constructor(t,e){this.bucket=t,this.path_=e}get path(){return this.path_}get isRoot(){return this.path.length===0}fullServerUrl(){const t=encodeURIComponent;return"/b/"+t(this.bucket)+"/o/"+t(this.path)}bucketOnlyServerUrl(){return"/b/"+encodeURIComponent(this.bucket)+"/o"}static makeFromBucketSpec(t,e){let r;try{r=Qt.makeFromUrl(t,e)}catch{return new Qt(t,"")}if(r.path==="")return r;throw Xf(t)}static makeFromUrl(t,e){let r=null;const s="([A-Za-z0-9.\\-_]+)";function o(K){K.path.charAt(K.path.length-1)==="/"&&(K.path_=K.path_.slice(0,-1))}const a="(/(.*))?$",l=new RegExp("^gs://"+s+a,"i"),h={bucket:1,path:3};function d(K){K.path_=decodeURIComponent(K.path)}const p="v[A-Za-z0-9_]+",y=e.replace(/[.]/g,"\\."),A="(/([^?#]*).*)?$",C=new RegExp(`^https?://${y}/${p}/b/${s}/o${A}`,"i"),N={bucket:1,path:3},L=e===Al?"(?:storage.googleapis.com|storage.cloud.google.com)":e,S="([^?#]*)",$=new RegExp(`^https?://${L}/${s}/${S}`,"i"),F=[{regex:l,indices:h,postModify:o},{regex:C,indices:N,postModify:d},{regex:$,indices:{bucket:1,path:2},postModify:d}];for(let K=0;K<F.length;K++){const pt=F[K],J=pt.regex.exec(t);if(J){const E=J[pt.indices.bucket];let m=J[pt.indices.path];m||(m=""),r=new Qt(E,m),pt.postModify(r);break}}if(r==null)throw Hf(t);return r}}class np{constructor(t){this.promise_=Promise.reject(t)}getPromise(){return this.promise_}cancel(t=!1){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function rp(n,t,e){let r=1,s=null,o=null,a=!1,l=0;function h(){return l===2}let d=!1;function p(...S){d||(d=!0,t.apply(null,S))}function y(S){s=setTimeout(()=>{s=null,n(C,h())},S)}function A(){o&&clearTimeout(o)}function C(S,...$){if(d){A();return}if(S){A(),p.call(null,S,...$);return}if(h()||a){A(),p.call(null,S,...$);return}r<64&&(r*=2);let F;l===1?(l=2,F=0):F=(r+Math.random())*1e3,y(F)}let N=!1;function L(S){N||(N=!0,A(),!d&&(s!==null?(S||(l=2),clearTimeout(s),y(0)):S||(l=1)))}return y(0),o=setTimeout(()=>{a=!0,L(!0)},e),L}function sp(n){n(!1)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ip(n){return n!==void 0}function op(n){return typeof n=="function"}function ap(n){return typeof n=="object"&&!Array.isArray(n)}function bs(n){return typeof n=="string"||n instanceof String}function Ga(n){return so()&&n instanceof Blob}function so(){return typeof Blob<"u"}function Ka(n,t,e,r){if(r<t)throw pi(`Invalid value for '${n}'. Expected ${t} or greater.`);if(r>e)throw pi(`Invalid value for '${n}'. Expected ${e} or less.`)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Cn(n,t,e){let r=t;return e==null&&(r=`https://${t}`),`${e}://${r}/v0${n}`}function Sl(n){const t=encodeURIComponent;let e="?";for(const r in n)if(n.hasOwnProperty(r)){const s=t(r)+"="+t(n[r]);e=e+s+"&"}return e=e.slice(0,-1),e}var $e;(function(n){n[n.NO_ERROR=0]="NO_ERROR",n[n.NETWORK_ERROR=1]="NETWORK_ERROR",n[n.ABORT=2]="ABORT"})($e||($e={}));/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function kl(n,t){const e=n>=500&&n<600,s=[408,429].indexOf(n)!==-1,o=t.indexOf(n)!==-1;return e||s||o}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class up{constructor(t,e,r,s,o,a,l,h,d,p,y,A=!0){this.url_=t,this.method_=e,this.headers_=r,this.body_=s,this.successCodes_=o,this.additionalRetryCodes_=a,this.callback_=l,this.errorCallback_=h,this.timeout_=d,this.progressCallback_=p,this.connectionFactory_=y,this.retry=A,this.pendingConnection_=null,this.backoffId_=null,this.canceled_=!1,this.appDelete_=!1,this.promise_=new Promise((C,N)=>{this.resolve_=C,this.reject_=N,this.start_()})}start_(){const t=(r,s)=>{if(s){r(!1,new Wr(!1,null,!0));return}const o=this.connectionFactory_();this.pendingConnection_=o;const a=l=>{const h=l.loaded,d=l.lengthComputable?l.total:-1;this.progressCallback_!==null&&this.progressCallback_(h,d)};this.progressCallback_!==null&&o.addUploadProgressListener(a),o.send(this.url_,this.method_,this.body_,this.headers_).then(()=>{this.progressCallback_!==null&&o.removeUploadProgressListener(a),this.pendingConnection_=null;const l=o.getErrorCode()===$e.NO_ERROR,h=o.getStatus();if(!l||kl(h,this.additionalRetryCodes_)&&this.retry){const p=o.getErrorCode()===$e.ABORT;r(!1,new Wr(!1,null,p));return}const d=this.successCodes_.indexOf(h)!==-1;r(!0,new Wr(d,o))})},e=(r,s)=>{const o=this.resolve_,a=this.reject_,l=s.connection;if(s.wasSuccessCode)try{const h=this.callback_(l,l.getResponse());ip(h)?o(h):o()}catch(h){a(h)}else if(l!==null){const h=ro();h.serverResponse=l.getErrorText(),this.errorCallback_?a(this.errorCallback_(l,h)):a(h)}else if(s.canceled){const h=this.appDelete_?Vl():bl();a(h)}else{const h=Pl();a(h)}};this.canceled_?e(!1,new Wr(!1,null,!0)):this.backoffId_=rp(t,e,this.timeout_)}getPromise(){return this.promise_}cancel(t){this.canceled_=!0,this.appDelete_=t||!1,this.backoffId_!==null&&sp(this.backoffId_),this.pendingConnection_!==null&&this.pendingConnection_.abort()}}class Wr{constructor(t,e,r){this.wasSuccessCode=t,this.connection=e,this.canceled=!!r}}function lp(n,t){t!==null&&t.length>0&&(n.Authorization="Firebase "+t)}function cp(n,t){n["X-Firebase-Storage-Version"]="webjs/"+(t??"AppManager")}function hp(n,t){t&&(n["X-Firebase-GMPID"]=t)}function dp(n,t){t!==null&&(n["X-Firebase-AppCheck"]=t)}function fp(n,t,e,r,s,o,a=!0){const l=Sl(n.urlParams),h=n.url+l,d=Object.assign({},n.headers);return hp(d,t),lp(d,e),cp(d,o),dp(d,r),new up(h,n.method,d,n.body,n.successCodes,n.additionalRetryCodes,n.handler,n.errorHandler,n.timeout,n.progressCallback,s,a)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function pp(){return typeof BlobBuilder<"u"?BlobBuilder:typeof WebKitBlobBuilder<"u"?WebKitBlobBuilder:void 0}function mp(...n){const t=pp();if(t!==void 0){const e=new t;for(let r=0;r<n.length;r++)e.append(n[r]);return e.getBlob()}else{if(so())return new Blob(n);throw new ht(ut.UNSUPPORTED_ENVIRONMENT,"This browser doesn't seem to support creating Blobs")}}function _p(n,t,e){return n.webkitSlice?n.webkitSlice(t,e):n.mozSlice?n.mozSlice(t,e):n.slice?n.slice(t,e):null}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function gp(n){if(typeof atob>"u")throw tp("base-64");return atob(n)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const re={RAW:"raw",BASE64:"base64",BASE64URL:"base64url",DATA_URL:"data_url"};class Ys{constructor(t,e){this.data=t,this.contentType=e||null}}function yp(n,t){switch(n){case re.RAW:return new Ys(Nl(t));case re.BASE64:case re.BASE64URL:return new Ys(Dl(n,t));case re.DATA_URL:return new Ys(Tp(t),Ep(t))}throw ro()}function Nl(n){const t=[];for(let e=0;e<n.length;e++){let r=n.charCodeAt(e);if(r<=127)t.push(r);else if(r<=2047)t.push(192|r>>6,128|r&63);else if((r&64512)===55296)if(!(e<n.length-1&&(n.charCodeAt(e+1)&64512)===56320))t.push(239,191,189);else{const o=r,a=n.charCodeAt(++e);r=65536|(o&1023)<<10|a&1023,t.push(240|r>>18,128|r>>12&63,128|r>>6&63,128|r&63)}else(r&64512)===56320?t.push(239,191,189):t.push(224|r>>12,128|r>>6&63,128|r&63)}return new Uint8Array(t)}function vp(n){let t;try{t=decodeURIComponent(n)}catch{throw or(re.DATA_URL,"Malformed data URL.")}return Nl(t)}function Dl(n,t){switch(n){case re.BASE64:{const s=t.indexOf("-")!==-1,o=t.indexOf("_")!==-1;if(s||o)throw or(n,"Invalid character '"+(s?"-":"_")+"' found: is it base64url encoded?");break}case re.BASE64URL:{const s=t.indexOf("+")!==-1,o=t.indexOf("/")!==-1;if(s||o)throw or(n,"Invalid character '"+(s?"+":"/")+"' found: is it base64 encoded?");t=t.replace(/-/g,"+").replace(/_/g,"/");break}}let e;try{e=gp(t)}catch(s){throw s.message.includes("polyfill")?s:or(n,"Invalid character found")}const r=new Uint8Array(e.length);for(let s=0;s<e.length;s++)r[s]=e.charCodeAt(s);return r}class xl{constructor(t){this.base64=!1,this.contentType=null;const e=t.match(/^data:([^,]+)?,/);if(e===null)throw or(re.DATA_URL,"Must be formatted 'data:[<mediatype>][;base64],<data>");const r=e[1]||null;r!=null&&(this.base64=wp(r,";base64"),this.contentType=this.base64?r.substring(0,r.length-7):r),this.rest=t.substring(t.indexOf(",")+1)}}function Tp(n){const t=new xl(n);return t.base64?Dl(re.BASE64,t.rest):vp(t.rest)}function Ep(n){return new xl(n).contentType}function wp(n,t){return n.length>=t.length?n.substring(n.length-t.length)===t:!1}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ie{constructor(t,e){let r=0,s="";Ga(t)?(this.data_=t,r=t.size,s=t.type):t instanceof ArrayBuffer?(e?this.data_=new Uint8Array(t):(this.data_=new Uint8Array(t.byteLength),this.data_.set(new Uint8Array(t))),r=this.data_.length):t instanceof Uint8Array&&(e?this.data_=t:(this.data_=new Uint8Array(t.length),this.data_.set(t)),r=t.length),this.size_=r,this.type_=s}size(){return this.size_}type(){return this.type_}slice(t,e){if(Ga(this.data_)){const r=this.data_,s=_p(r,t,e);return s===null?null:new Ie(s)}else{const r=new Uint8Array(this.data_.buffer,t,e-t);return new Ie(r,!0)}}static getBlob(...t){if(so()){const e=t.map(r=>r instanceof Ie?r.data_:r);return new Ie(mp.apply(null,e))}else{const e=t.map(a=>bs(a)?yp(re.RAW,a).data:a.data_);let r=0;e.forEach(a=>{r+=a.byteLength});const s=new Uint8Array(r);let o=0;return e.forEach(a=>{for(let l=0;l<a.length;l++)s[o++]=a[l]}),new Ie(s,!0)}}uploadData(){return this.data_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ol(n){let t;try{t=JSON.parse(n)}catch{return null}return ap(t)?t:null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ip(n){if(n.length===0)return null;const t=n.lastIndexOf("/");return t===-1?"":n.slice(0,t)}function Ap(n,t){const e=t.split("/").filter(r=>r.length>0).join("/");return n.length===0?e:n+"/"+e}function Ll(n){const t=n.lastIndexOf("/",n.length-2);return t===-1?n:n.slice(t+1)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Rp(n,t){return t}class Ft{constructor(t,e,r,s){this.server=t,this.local=e||t,this.writable=!!r,this.xform=s||Rp}}let Hr=null;function Pp(n){return!bs(n)||n.length<2?n:Ll(n)}function Ml(){if(Hr)return Hr;const n=[];n.push(new Ft("bucket")),n.push(new Ft("generation")),n.push(new Ft("metageneration")),n.push(new Ft("name","fullPath",!0));function t(o,a){return Pp(a)}const e=new Ft("name");e.xform=t,n.push(e);function r(o,a){return a!==void 0?Number(a):a}const s=new Ft("size");return s.xform=r,n.push(s),n.push(new Ft("timeCreated")),n.push(new Ft("updated")),n.push(new Ft("md5Hash",null,!0)),n.push(new Ft("cacheControl",null,!0)),n.push(new Ft("contentDisposition",null,!0)),n.push(new Ft("contentEncoding",null,!0)),n.push(new Ft("contentLanguage",null,!0)),n.push(new Ft("contentType",null,!0)),n.push(new Ft("metadata","customMetadata",!0)),Hr=n,Hr}function bp(n,t){function e(){const r=n.bucket,s=n.fullPath,o=new Qt(r,s);return t._makeStorageReference(o)}Object.defineProperty(n,"ref",{get:e})}function Cp(n,t,e){const r={};r.type="file";const s=e.length;for(let o=0;o<s;o++){const a=e[o];r[a.local]=a.xform(r,t[a.server])}return bp(r,n),r}function Ul(n,t,e){const r=Ol(t);return r===null?null:Cp(n,r,e)}function Vp(n,t,e,r){const s=Ol(t);if(s===null||!bs(s.downloadTokens))return null;const o=s.downloadTokens;if(o.length===0)return null;const a=encodeURIComponent;return o.split(",").map(d=>{const p=n.bucket,y=n.fullPath,A="/b/"+a(p)+"/o/"+a(y),C=Cn(A,e,r),N=Sl({alt:"media",token:d});return C+N})[0]}function Fl(n,t){const e={},r=t.length;for(let s=0;s<r;s++){const o=t[s];o.writable&&(e[o.server]=n[o.local])}return JSON.stringify(e)}class Je{constructor(t,e,r,s){this.url=t,this.method=e,this.handler=r,this.timeout=s,this.urlParams={},this.headers={},this.body=null,this.errorHandler=null,this.progressCallback=null,this.successCodes=[200],this.additionalRetryCodes=[]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function le(n){if(!n)throw ro()}function io(n,t){function e(r,s){const o=Ul(n,s,t);return le(o!==null),o}return e}function Sp(n,t){function e(r,s){const o=Ul(n,s,t);return le(o!==null),Vp(o,s,n.host,n._protocol)}return e}function Ir(n){function t(e,r){let s;return e.getStatus()===401?e.getErrorText().includes("Firebase App Check token is invalid")?s=Qf():s=Kf():e.getStatus()===402?s=Gf(n.bucket):e.getStatus()===403?s=Wf(n.path):s=r,s.status=e.getStatus(),s.serverResponse=r.serverResponse,s}return t}function oo(n){const t=Ir(n);function e(r,s){let o=t(r,s);return r.getStatus()===404&&(o=$f(n.path)),o.serverResponse=s.serverResponse,o}return e}function kp(n,t,e){const r=t.fullServerUrl(),s=Cn(r,n.host,n._protocol),o="GET",a=n.maxOperationRetryTime,l=new Je(s,o,io(n,e),a);return l.errorHandler=oo(t),l}function Np(n,t,e){const r=t.fullServerUrl(),s=Cn(r,n.host,n._protocol),o="GET",a=n.maxOperationRetryTime,l=new Je(s,o,Sp(n,e),a);return l.errorHandler=oo(t),l}function Dp(n,t){const e=t.fullServerUrl(),r=Cn(e,n.host,n._protocol),s="DELETE",o=n.maxOperationRetryTime;function a(h,d){}const l=new Je(r,s,a,o);return l.successCodes=[200,204],l.errorHandler=oo(t),l}function xp(n,t){return n&&n.contentType||t&&t.type()||"application/octet-stream"}function ql(n,t,e){const r=Object.assign({},e);return r.fullPath=n.path,r.size=t.size(),r.contentType||(r.contentType=xp(null,t)),r}function Op(n,t,e,r,s){const o=t.bucketOnlyServerUrl(),a={"X-Goog-Upload-Protocol":"multipart"};function l(){let F="";for(let K=0;K<2;K++)F=F+Math.random().toString().slice(2);return F}const h=l();a["Content-Type"]="multipart/related; boundary="+h;const d=ql(t,r,s),p=Fl(d,e),y="--"+h+`\r
Content-Type: application/json; charset=utf-8\r
\r
`+p+`\r
--`+h+`\r
Content-Type: `+d.contentType+`\r
\r
`,A=`\r
--`+h+"--",C=Ie.getBlob(y,r,A);if(C===null)throw Cl();const N={name:d.fullPath},L=Cn(o,n.host,n._protocol),S="POST",$=n.maxUploadRetryTime,j=new Je(L,S,io(n,e),$);return j.urlParams=N,j.headers=a,j.body=C.uploadData(),j.errorHandler=Ir(t),j}class ds{constructor(t,e,r,s){this.current=t,this.total=e,this.finalized=!!r,this.metadata=s||null}}function ao(n,t){let e=null;try{e=n.getResponseHeader("X-Goog-Upload-Status")}catch{le(!1)}return le(!!e&&(t||["active"]).indexOf(e)!==-1),e}function Lp(n,t,e,r,s){const o=t.bucketOnlyServerUrl(),a=ql(t,r,s),l={name:a.fullPath},h=Cn(o,n.host,n._protocol),d="POST",p={"X-Goog-Upload-Protocol":"resumable","X-Goog-Upload-Command":"start","X-Goog-Upload-Header-Content-Length":`${r.size()}`,"X-Goog-Upload-Header-Content-Type":a.contentType,"Content-Type":"application/json; charset=utf-8"},y=Fl(a,e),A=n.maxUploadRetryTime;function C(L){ao(L);let S;try{S=L.getResponseHeader("X-Goog-Upload-URL")}catch{le(!1)}return le(bs(S)),S}const N=new Je(h,d,C,A);return N.urlParams=l,N.headers=p,N.body=y,N.errorHandler=Ir(t),N}function Mp(n,t,e,r){const s={"X-Goog-Upload-Command":"query"};function o(d){const p=ao(d,["active","final"]);let y=null;try{y=d.getResponseHeader("X-Goog-Upload-Size-Received")}catch{le(!1)}y||le(!1);const A=Number(y);return le(!isNaN(A)),new ds(A,r.size(),p==="final")}const a="POST",l=n.maxUploadRetryTime,h=new Je(e,a,o,l);return h.headers=s,h.errorHandler=Ir(t),h}const Qa=256*1024;function Up(n,t,e,r,s,o,a,l){const h=new ds(0,0);if(a?(h.current=a.current,h.total=a.total):(h.current=0,h.total=r.size()),r.size()!==h.total)throw Jf();const d=h.total-h.current;let p=d;s>0&&(p=Math.min(p,s));const y=h.current,A=y+p;let C="";p===0?C="finalize":d===p?C="upload, finalize":C="upload";const N={"X-Goog-Upload-Command":C,"X-Goog-Upload-Offset":`${h.current}`},L=r.slice(y,A);if(L===null)throw Cl();function S(K,pt){const J=ao(K,["active","final"]),E=h.current+p,m=r.size();let g;return J==="final"?g=io(t,o)(K,pt):g=null,new ds(E,m,J==="final",g)}const $="POST",j=t.maxUploadRetryTime,F=new Je(e,$,S,j);return F.headers=N,F.body=L.uploadData(),F.progressCallback=l||null,F.errorHandler=Ir(n),F}const zt={RUNNING:"running",PAUSED:"paused",SUCCESS:"success",CANCELED:"canceled",ERROR:"error"};function Js(n){switch(n){case"running":case"pausing":case"canceling":return zt.RUNNING;case"paused":return zt.PAUSED;case"success":return zt.SUCCESS;case"canceled":return zt.CANCELED;case"error":return zt.ERROR;default:return zt.ERROR}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fp{constructor(t,e,r){if(op(t)||e!=null||r!=null)this.next=t,this.error=e??void 0,this.complete=r??void 0;else{const o=t;this.next=o.next,this.error=o.error,this.complete=o.complete}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function hn(n){return(...t)=>{Promise.resolve().then(()=>n(...t))}}class qp{constructor(){this.sent_=!1,this.xhr_=new XMLHttpRequest,this.initXhr(),this.errorCode_=$e.NO_ERROR,this.sendPromise_=new Promise(t=>{this.xhr_.addEventListener("abort",()=>{this.errorCode_=$e.ABORT,t()}),this.xhr_.addEventListener("error",()=>{this.errorCode_=$e.NETWORK_ERROR,t()}),this.xhr_.addEventListener("load",()=>{t()})})}send(t,e,r,s){if(this.sent_)throw Yn("cannot .send() more than once");if(this.sent_=!0,this.xhr_.open(e,t,!0),s!==void 0)for(const o in s)s.hasOwnProperty(o)&&this.xhr_.setRequestHeader(o,s[o].toString());return r!==void 0?this.xhr_.send(r):this.xhr_.send(),this.sendPromise_}getErrorCode(){if(!this.sent_)throw Yn("cannot .getErrorCode() before sending");return this.errorCode_}getStatus(){if(!this.sent_)throw Yn("cannot .getStatus() before sending");try{return this.xhr_.status}catch{return-1}}getResponse(){if(!this.sent_)throw Yn("cannot .getResponse() before sending");return this.xhr_.response}getErrorText(){if(!this.sent_)throw Yn("cannot .getErrorText() before sending");return this.xhr_.statusText}abort(){this.xhr_.abort()}getResponseHeader(t){return this.xhr_.getResponseHeader(t)}addUploadProgressListener(t){this.xhr_.upload!=null&&this.xhr_.upload.addEventListener("progress",t)}removeUploadProgressListener(t){this.xhr_.upload!=null&&this.xhr_.upload.removeEventListener("progress",t)}}class Bp extends qp{initXhr(){this.xhr_.responseType="text"}}function qe(){return new Bp}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jp{constructor(t,e,r=null){this._transferred=0,this._needToFetchStatus=!1,this._needToFetchMetadata=!1,this._observers=[],this._error=void 0,this._uploadUrl=void 0,this._request=void 0,this._chunkMultiplier=1,this._resolve=void 0,this._reject=void 0,this._ref=t,this._blob=e,this._metadata=r,this._mappings=Ml(),this._resumable=this._shouldDoResumable(this._blob),this._state="running",this._errorHandler=s=>{if(this._request=void 0,this._chunkMultiplier=1,s._codeEquals(ut.CANCELED))this._needToFetchStatus=!0,this.completeTransitions_();else{const o=this.isExponentialBackoffExpired();if(kl(s.status,[]))if(o)s=Pl();else{this.sleepTime=Math.max(this.sleepTime*2,zf),this._needToFetchStatus=!0,this.completeTransitions_();return}this._error=s,this._transition("error")}},this._metadataErrorHandler=s=>{this._request=void 0,s._codeEquals(ut.CANCELED)?this.completeTransitions_():(this._error=s,this._transition("error"))},this.sleepTime=0,this.maxSleepTime=this._ref.storage.maxUploadRetryTime,this._promise=new Promise((s,o)=>{this._resolve=s,this._reject=o,this._start()}),this._promise.then(null,()=>{})}isExponentialBackoffExpired(){return this.sleepTime>this.maxSleepTime}_makeProgressCallback(){const t=this._transferred;return e=>this._updateProgress(t+e)}_shouldDoResumable(t){return t.size()>256*1024}_start(){this._state==="running"&&this._request===void 0&&(this._resumable?this._uploadUrl===void 0?this._createResumable():this._needToFetchStatus?this._fetchStatus():this._needToFetchMetadata?this._fetchMetadata():this.pendingTimeout=setTimeout(()=>{this.pendingTimeout=void 0,this._continueUpload()},this.sleepTime):this._oneShotUpload())}_resolveToken(t){Promise.all([this._ref.storage._getAuthToken(),this._ref.storage._getAppCheckToken()]).then(([e,r])=>{switch(this._state){case"running":t(e,r);break;case"canceling":this._transition("canceled");break;case"pausing":this._transition("paused");break}})}_createResumable(){this._resolveToken((t,e)=>{const r=Lp(this._ref.storage,this._ref._location,this._mappings,this._blob,this._metadata),s=this._ref.storage._makeRequest(r,qe,t,e);this._request=s,s.getPromise().then(o=>{this._request=void 0,this._uploadUrl=o,this._needToFetchStatus=!1,this.completeTransitions_()},this._errorHandler)})}_fetchStatus(){const t=this._uploadUrl;this._resolveToken((e,r)=>{const s=Mp(this._ref.storage,this._ref._location,t,this._blob),o=this._ref.storage._makeRequest(s,qe,e,r);this._request=o,o.getPromise().then(a=>{a=a,this._request=void 0,this._updateProgress(a.current),this._needToFetchStatus=!1,a.finalized&&(this._needToFetchMetadata=!0),this.completeTransitions_()},this._errorHandler)})}_continueUpload(){const t=Qa*this._chunkMultiplier,e=new ds(this._transferred,this._blob.size()),r=this._uploadUrl;this._resolveToken((s,o)=>{let a;try{a=Up(this._ref._location,this._ref.storage,r,this._blob,t,this._mappings,e,this._makeProgressCallback())}catch(h){this._error=h,this._transition("error");return}const l=this._ref.storage._makeRequest(a,qe,s,o,!1);this._request=l,l.getPromise().then(h=>{this._increaseMultiplier(),this._request=void 0,this._updateProgress(h.current),h.finalized?(this._metadata=h.metadata,this._transition("success")):this.completeTransitions_()},this._errorHandler)})}_increaseMultiplier(){Qa*this._chunkMultiplier*2<32*1024*1024&&(this._chunkMultiplier*=2)}_fetchMetadata(){this._resolveToken((t,e)=>{const r=kp(this._ref.storage,this._ref._location,this._mappings),s=this._ref.storage._makeRequest(r,qe,t,e);this._request=s,s.getPromise().then(o=>{this._request=void 0,this._metadata=o,this._transition("success")},this._metadataErrorHandler)})}_oneShotUpload(){this._resolveToken((t,e)=>{const r=Op(this._ref.storage,this._ref._location,this._mappings,this._blob,this._metadata),s=this._ref.storage._makeRequest(r,qe,t,e);this._request=s,s.getPromise().then(o=>{this._request=void 0,this._metadata=o,this._updateProgress(this._blob.size()),this._transition("success")},this._errorHandler)})}_updateProgress(t){const e=this._transferred;this._transferred=t,this._transferred!==e&&this._notifyObservers()}_transition(t){if(this._state!==t)switch(t){case"canceling":case"pausing":this._state=t,this._request!==void 0?this._request.cancel():this.pendingTimeout&&(clearTimeout(this.pendingTimeout),this.pendingTimeout=void 0,this.completeTransitions_());break;case"running":const e=this._state==="paused";this._state=t,e&&(this._notifyObservers(),this._start());break;case"paused":this._state=t,this._notifyObservers();break;case"canceled":this._error=bl(),this._state=t,this._notifyObservers();break;case"error":this._state=t,this._notifyObservers();break;case"success":this._state=t,this._notifyObservers();break}}completeTransitions_(){switch(this._state){case"pausing":this._transition("paused");break;case"canceling":this._transition("canceled");break;case"running":this._start();break}}get snapshot(){const t=Js(this._state);return{bytesTransferred:this._transferred,totalBytes:this._blob.size(),state:t,metadata:this._metadata,task:this,ref:this._ref}}on(t,e,r,s){const o=new Fp(e||void 0,r||void 0,s||void 0);return this._addObserver(o),()=>{this._removeObserver(o)}}then(t,e){return this._promise.then(t,e)}catch(t){return this.then(null,t)}_addObserver(t){this._observers.push(t),this._notifyObserver(t)}_removeObserver(t){const e=this._observers.indexOf(t);e!==-1&&this._observers.splice(e,1)}_notifyObservers(){this._finishPromise(),this._observers.slice().forEach(e=>{this._notifyObserver(e)})}_finishPromise(){if(this._resolve!==void 0){let t=!0;switch(Js(this._state)){case zt.SUCCESS:hn(this._resolve.bind(null,this.snapshot))();break;case zt.CANCELED:case zt.ERROR:const e=this._reject;hn(e.bind(null,this._error))();break;default:t=!1;break}t&&(this._resolve=void 0,this._reject=void 0)}}_notifyObserver(t){switch(Js(this._state)){case zt.RUNNING:case zt.PAUSED:t.next&&hn(t.next.bind(t,this.snapshot))();break;case zt.SUCCESS:t.complete&&hn(t.complete.bind(t))();break;case zt.CANCELED:case zt.ERROR:t.error&&hn(t.error.bind(t,this._error))();break;default:t.error&&hn(t.error.bind(t,this._error))()}}resume(){const t=this._state==="paused"||this._state==="pausing";return t&&this._transition("running"),t}pause(){const t=this._state==="running";return t&&this._transition("pausing"),t}cancel(){const t=this._state==="running"||this._state==="pausing";return t&&this._transition("canceling"),t}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class He{constructor(t,e){this._service=t,e instanceof Qt?this._location=e:this._location=Qt.makeFromUrl(e,t.host)}toString(){return"gs://"+this._location.bucket+"/"+this._location.path}_newRef(t,e){return new He(t,e)}get root(){const t=new Qt(this._location.bucket,"");return this._newRef(this._service,t)}get bucket(){return this._location.bucket}get fullPath(){return this._location.path}get name(){return Ll(this._location.path)}get storage(){return this._service}get parent(){const t=Ip(this._location.path);if(t===null)return null;const e=new Qt(this._location.bucket,t);return new He(this._service,e)}_throwIfRoot(t){if(this._location.path==="")throw ep(t)}}function zp(n,t,e){return n._throwIfRoot("uploadBytesResumable"),new jp(n,new Ie(t),e)}function $p(n){n._throwIfRoot("getDownloadURL");const t=Np(n.storage,n._location,Ml());return n.storage.makeRequestWithTokens(t,qe).then(e=>{if(e===null)throw Zf();return e})}function Gp(n){n._throwIfRoot("deleteObject");const t=Dp(n.storage,n._location);return n.storage.makeRequestWithTokens(t,qe)}function Kp(n,t){const e=Ap(n._location.path,t),r=new Qt(n._location.bucket,e);return new He(n.storage,r)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Qp(n){return/^[A-Za-z]+:\/\//.test(n)}function Wp(n,t){return new He(n,t)}function Bl(n,t){if(n instanceof uo){const e=n;if(e._bucket==null)throw Yf();const r=new He(e,e._bucket);return t!=null?Bl(r,t):r}else return t!==void 0?Kp(n,t):n}function Hp(n,t){if(t&&Qp(t)){if(n instanceof uo)return Wp(n,t);throw pi("To use ref(service, url), the first argument must be a Storage instance.")}else return Bl(n,t)}function Wa(n,t){const e=t==null?void 0:t[Rl];return e==null?null:Qt.makeFromBucketSpec(e,n)}function Xp(n,t,e,r={}){n.host=`${t}:${e}`,n._protocol="http";const{mockUserToken:s}=r;s&&(n._overrideAuthToken=typeof s=="string"?s:nu(s,n.app.options.projectId))}class uo{constructor(t,e,r,s,o){this.app=t,this._authProvider=e,this._appCheckProvider=r,this._url=s,this._firebaseVersion=o,this._bucket=null,this._host=Al,this._protocol="https",this._appId=null,this._deleted=!1,this._maxOperationRetryTime=Bf,this._maxUploadRetryTime=jf,this._requests=new Set,s!=null?this._bucket=Qt.makeFromBucketSpec(s,this._host):this._bucket=Wa(this._host,this.app.options)}get host(){return this._host}set host(t){this._host=t,this._url!=null?this._bucket=Qt.makeFromBucketSpec(this._url,t):this._bucket=Wa(t,this.app.options)}get maxUploadRetryTime(){return this._maxUploadRetryTime}set maxUploadRetryTime(t){Ka("time",0,Number.POSITIVE_INFINITY,t),this._maxUploadRetryTime=t}get maxOperationRetryTime(){return this._maxOperationRetryTime}set maxOperationRetryTime(t){Ka("time",0,Number.POSITIVE_INFINITY,t),this._maxOperationRetryTime=t}async _getAuthToken(){if(this._overrideAuthToken)return this._overrideAuthToken;const t=this._authProvider.getImmediate({optional:!0});if(t){const e=await t.getToken();if(e!==null)return e.accessToken}return null}async _getAppCheckToken(){const t=this._appCheckProvider.getImmediate({optional:!0});return t?(await t.getToken()).token:null}_delete(){return this._deleted||(this._deleted=!0,this._requests.forEach(t=>t.cancel()),this._requests.clear()),Promise.resolve()}_makeStorageReference(t){return new He(this,t)}_makeRequest(t,e,r,s,o=!0){if(this._deleted)return new np(Vl());{const a=fp(t,this._appId,r,s,e,this._firebaseVersion,o);return this._requests.add(a),a.getPromise().then(()=>this._requests.delete(a),()=>this._requests.delete(a)),a}}async makeRequestWithTokens(t,e){const[r,s]=await Promise.all([this._getAuthToken(),this._getAppCheckToken()]);return this._makeRequest(t,e,r,s).getPromise()}}const Ha="@firebase/storage",Xa="0.13.2";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const jl="storage";function Yp(n,t,e){return n=Lt(n),zp(n,t,e)}function Jp(n){return n=Lt(n),$p(n)}function Ya(n){return n=Lt(n),Gp(n)}function Zp(n,t){return n=Lt(n),Hp(n,t)}function tm(n=Ja(),t){n=Lt(n);const r=Za(n,jl).getImmediate({identifier:t}),s=tu("storage");return s&&em(r,...s),r}function em(n,t,e,r={}){Xp(n,t,e,r)}function nm(n,{instanceIdentifier:t}){const e=n.getProvider("app").getImmediate(),r=n.getProvider("auth-internal"),s=n.getProvider("app-check-internal");return new uo(e,r,s,t,ru)}function rm(){su(new iu(jl,nm,"PUBLIC").setMultipleInstances(!0)),es(Ha,Xa,""),es(Ha,Xa,"esm2017")}rm();const sm={class:"community-page"},im={class:"brand-row"},om={class:"room-list","aria-label":"Salons de discussion"},am=["aria-current","onClick"],um={class:"sidebar-note"},lm={class:"sidebar-bottom"},cm={key:0,class:"account-row"},hm={class:"avatar own-avatar"},dm={class:"account-copy"},fm=["disabled"],pm={class:"conversation","aria-labelledby":"room-title"},mm={class:"conversation-header"},_m=["aria-expanded"],gm={class:"room-heading"},ym={id:"room-title"},vm={class:"header-actions"},Tm={class:"connection-status"},Em=["aria-expanded"],wm={key:0,class:"message-search"},Im={key:0},Am={key:0,class:"state-panel",role:"status"},Rm={key:1,class:"welcome-state"},Pm={class:"welcome-kicker"},bm={key:2,class:"state-panel error-state",role:"alert"},Cm={class:"room-introduction"},Vm={key:0,class:"empty-state"},Sm={"aria-hidden":"true"},km={key:0,class:"date-divider"},Nm={class:"message-content"},Dm={class:"message-meta"},xm={class:"message-bubble"},Om={key:0,class:"message-text"},Lm=["href","aria-label"],Mm=["src","alt"],Um=["href","download"],Fm={class:"message-footer"},qm={class:"message-reactions"},Bm=["disabled","aria-label","onClick"],jm=["disabled","onClick"],zm=["onClick","aria-expanded"],$m={key:0,class:"delete-confirm"},Gm=["disabled"],Km=["onClick","disabled"],Qm={class:"composer-area"},Wm={key:0,class:"action-error",role:"alert"},Hm={key:0,class:"selected-file"},Xm=["src"],Ym={key:1,class:"selected-file-icon","aria-hidden":"true"},Jm=["disabled"],Zm={key:1,class:"emoji-picker","aria-label":"Insérer un emoji"},t_=["aria-label","onClick"],e_={class:"visually-hidden",for:"message-input"},n_=["placeholder","disabled"],r_={class:"composer-toolbar"},s_=["disabled"],i_=["aria-expanded","disabled"],o_=["disabled"],a_={class:"composer-hint"},u_={key:2,class:"guest-composer"},l_={__name:"chat",setup(n){_c({title:"Le collectif"});const{$firebase:t,$firebaseConfigured:e}=gc(),r=[{id:"general",name:"général",short:"La vie du lycée",description:"Les idées se rencontrent ici.",welcome:"Faisons connaissance,",intro:"Le rendez-vous de tous les élèves : les nouvelles du lycée, les bonnes idées et les questions du quotidien."},{id:"entraide",name:"entraide",short:"Apprendre ensemble",description:"Une question. Plusieurs façons d’avancer.",welcome:"Allons plus loin,",intro:"Un exercice qui résiste, une méthode à partager ou une révision à organiser ? Ici, on s’aide à avancer."},{id:"detente",name:"détente",short:"La pause du collectif",description:"On se retrouve, on échange, on souffle.",welcome:"Prenons une pause,",intro:"Musique, sport, découvertes et discussions spontanées : une place pour tout ce qui vous anime en dehors des cours."}],s=["👋","😊","👍","💡","📚","✨","🎉","❤️"],o=ot("general"),a=Gs(()=>r.find(D=>D.id===o.value)||r[0]),l=ot(null),h=ot(!1),d=Gs(()=>{var D,T,Q;return((D=l.value)==null?void 0:D.displayName)||((Q=(T=l.value)==null?void 0:T.email)==null?void 0:Q.split("@")[0])||"Élève"}),p=ot([]),y=ot(""),A=ot(!1),C=ot(!1),N=ot(!1),L=ot(""),S=ot(""),$=ot(!1),j=ot(""),F=ot(!1),K=ot(!1),pt=ot(0),J=ot(null),E=ot(null),m=ot(null),g=ot(!1),v=ot(null),w=ot(null),R=ot(null),_=ot(null),Ht=ot(null),de=ot(null),Ze=ot(!1);let te,yt,ee,oe=!1,fe=0;const jt=Gs(()=>{const D=y.value.trim().toLocaleLowerCase("fr");return p.value.filter(T=>(T.room||"general")===o.value&&(!D||[T.text,T.fileName,pe(T)].some(Q=>String(Q||"").toLocaleLowerCase("fr").includes(D))))});yc(()=>{if(!t||!e){h.value=!0;return}try{te=Pc(Ks(t),D=>{oe||(fe++,yt==null||yt(),l.value=D,h.value=!0,p.value=[],D?vt():(N.value=!1,L.value="",j.value="",_e()))},()=>{fe++,yt==null||yt(),l.value=null,p.value=[],N.value=!1,h.value=!0,S.value="Impossible de vérifier votre connexion. Actualisez la page pour réessayer."})}catch{h.value=!0,S.value="L’espace connecté est momentanément indisponible."}}),vc(()=>{oe=!0,fe++,te==null||te(),yt==null||yt(),ee==null||ee.cancel(),_e()});function vt(){if(yt==null||yt(),!l.value||!t)return;const D=++fe;N.value=!0,L.value="";let T=!0;const Q=bf(qa(Hn(t),"messages"),Cf("createdAt","desc"),Vf(150));yt=Of(Q,O=>{if(oe||D!==fe)return;const rt=T||!Ze.value;p.value=O.docs.map(Rt=>({...Rt.data(),id:Rt.id})).filter(Rt=>!Rt.isPresence&&Rt.room!=="__presence__").reverse(),N.value=!1,T=!1,rt&&!y.value&&Qn(ge)},O=>{oe||D!==fe||(N.value=!1,L.value=O.code==="permission-denied"?"Votre compte ne peut pas encore accéder aux échanges. Contactez l’équipe du lycée pour vérifier votre accès.":"Impossible de charger les messages pour le moment. Vérifiez votre connexion, puis réessayez.")})}function Ar(D){r.some(T=>T.id===D)&&(o.value=D,C.value=!1,m.value=null,y.value="",Qn(ge))}async function Ne(){var D;A.value=!A.value,A.value?(await Qn(),(D=de.value)==null||D.focus()):y.value=""}function Rr(){A.value=!1,y.value=""}function pe(D){var T;return D.displayName||D.author||((T=D.email)==null?void 0:T.split("@")[0])||"Élève"}function Pr(D){return String(D||"E").trim().split(/\s+/).map(T=>T[0]).slice(0,2).join("").toUpperCase()}function Cs(D){const T=["#dce5ff","#e6ecc5","#f3decf","#d6e9e3","#e8dff4"],Q=Array.from(D||"").reduce((O,rt)=>O+rt.charCodeAt(0),0);return T[Q%T.length]}function De(D){const T=typeof(D==null?void 0:D.toDate)=="function"?D.toDate():typeof(D==null?void 0:D.seconds)=="number"?new Date(D.seconds*1e3):null;return T instanceof Date&&Number.isFinite(T.getTime())?T:null}function me(D){const T=De(D);return T?T.toLocaleDateString("fr-FR",{day:"numeric",month:"long",year:"numeric"}):"Aujourd’hui"}function Vn(D){const T=De(D);return T?T.toLocaleTimeString("fr-FR",{hour:"2-digit",minute:"2-digit"}):"Envoi…"}function Sn(D,T){return!T||me(D.createdAt)!==me(jt.value[T-1].createdAt)}function tn(D){const T=Number(D);return D==null||!Number.isFinite(T)||T<0?"":T<1024?`${T} o`:T<1048576?`${(T/1024).toFixed(1)} Ko`:`${(T/1048576).toFixed(1)} Mo`}function ne(D,T=!1){if(typeof D!="string")return"";if(/^data:image\/(?:png|jpeg|gif|webp);base64,[A-Za-z0-9+/=\s]+$/.test(D)||!T&&/^data:(?:application\/pdf|text\/plain);base64,[A-Za-z0-9+/=\s]+$/.test(D))return D;try{const Q=new URL(D);return["https:","http:"].includes(Q.protocol)?Q.href:""}catch{return""}}function br(D){return Object.fromEntries(Object.entries(D.reactions||{}).filter(([T,Q])=>s.includes(T)||["😂","🔥","😮","👏"].includes(T)).filter(([,T])=>Number.isFinite(T)&&T>0))}function Vs(D,T){var O,rt;const Q=(O=D.reactionUsers)==null?void 0:O[T];return Array.isArray(Q)&&Q.includes((rt=l.value)==null?void 0:rt.uid)}function Ss(D){var Q;const T=(Q=D.target.files)==null?void 0:Q[0];if(D.target.value="",!!T){if(S.value="",T.size>20*1024*1024){S.value="Ce fichier dépasse 20 Mo. Choisissez un fichier plus léger.";return}_e(),J.value=T,/^image\/(png|jpeg|gif|webp)$/.test(T.type)&&(E.value=URL.createObjectURL(T))}}function _e(){E.value&&URL.revokeObjectURL(E.value),J.value=null,E.value=null,pt.value=0}function kn(D){j.value.length+D.length<=4e3&&(j.value+=D),K.value=!1,Qn(()=>{var T;en(),(T=_.value)==null||T.focus()})}function en(){_.value&&(_.value.style.height="auto",_.value.style.height=`${Math.min(_.value.scrollHeight,150)}px`)}function ks(D){D.key==="Enter"&&!D.shiftKey&&!D.isComposing&&(D.preventDefault(),Dn()),D.key==="Escape"&&(K.value=!1)}function Nn(){const D=w.value;D&&(Ze.value=D.scrollHeight-D.scrollTop-D.clientHeight>110)}function ge(){const D=w.value;D&&(D.scrollTop=D.scrollHeight),Ze.value=!1}async function Dn(){var Xt,Yt,kt;const D=j.value.trim(),T=J.value,Q=l.value,O=o.value;if(!Q||!t||F.value||!D&&!T)return;if(D.length>4e3){S.value="Votre message doit contenir 4 000 caractères maximum.";return}F.value=!0,S.value="";let rt,Rt=!1;try{const lt={text:D,author:d.value,displayName:d.value,email:Q.email||"",uid:Q.uid,room:O,createdAt:qf(),reactions:{}};if(T){const ye=T.name.replace(/[^a-zA-Z0-9._-]/g,"_").slice(-150);rt=Zp(tm(t),`chat_files/${Date.now()}_${Q.uid}_${ye}`),ee=Yp(rt,T,{contentType:T.type||"application/octet-stream"}),await new Promise((rn,xe)=>ee.on("state_changed",sn=>{pt.value=Math.round(sn.bytesTransferred/sn.totalBytes*100)},xe,rn)),lt.fileUrl=await Jp(rt),lt.fileName=T.name,lt.fileSize=T.size,lt.fileType=T.type,/^image\/(png|jpeg|gif|webp)$/.test(T.type)&&(lt.imageUrl=lt.fileUrl)}if(oe){rt&&await Ya(rt).catch(()=>{});return}if(((Xt=Ks(t).currentUser)==null?void 0:Xt.uid)!==Q.uid)throw new Error("Session changed before sending");await xf(qa(Hn(t),"messages"),lt),Rt=!0,j.value="",_e(),K.value=!1,await Qn(),en(),ge(),(Yt=_.value)==null||Yt.focus()}catch(lt){rt&&!Rt&&Ya(rt).catch(()=>{}),oe||(S.value=(kt=lt.code)!=null&&kt.startsWith("storage/")?"Le fichier n’a pas pu être transféré. Votre brouillon est conservé ; réessayez ou retirez la pièce jointe.":"Votre message n’a pas été envoyé. Votre brouillon est conservé ; vérifiez votre connexion et réessayez.")}finally{F.value=!1,ee=null}}async function Et(D){if(!(g.value||!l.value||D.uid!==l.value.uid)){g.value=!0,S.value="";try{await Df(di(Hn(t),"messages",D.id)),m.value=null}catch{S.value="Impossible de supprimer ce message pour le moment. Réessayez."}finally{g.value=!1}}}async function wt(D,T){if(!l.value||v.value)return;const Q=l.value.uid;v.value=D.id,S.value="";try{await Ff(Hn(t),async O=>{const rt=di(Hn(t),"messages",D.id),Rt=await O.get(rt);if(!Rt.exists())return;const Xt=Rt.data(),Yt={...Xt.reactions||{}},kt={...Xt.reactionUsers||{}},lt=Array.isArray(kt[T])?kt[T]:[],ye=lt.includes(Q);kt[T]=ye?lt.filter(rn=>rn!==Q):[...lt,Q],Yt[T]=Math.max(0,(Number(Yt[T])||0)+(ye?-1:1)),O.update(rt,{reactions:Yt,reactionUsers:kt})})}catch{S.value="Votre réaction n’a pas pu être enregistrée. Réessayez."}finally{v.value=null}}async function nn(){if(!($.value||F.value)){$.value=!0;try{await bc(Ks(t)),await Ac("/login")}catch{S.value="La déconnexion n’a pas abouti. Réessayez."}finally{$.value=!1}}}return(D,T)=>{const Q=Ic;return tt(),nt("main",sm,[C.value?(tt(),nt("button",{key:0,class:"sidebar-overlay","aria-label":"Fermer les salons",onClick:T[0]||(T[0]=O=>C.value=!1)})):Ut("",!0),P("aside",{id:"community-sidebar",class:Kn(["community-sidebar",{"is-open":C.value}])},[P("div",im,[Gn(Q,{to:"/",class:"community-brand","aria-label":"Lycée Europe — Accueil"},{default:cn(()=>[...T[12]||(T[12]=[P("span",{class:"brand-mark","aria-hidden":"true"},[ft("e"),P("span",null,"↗")],-1),P("span",null,[ft("lycée"),P("br"),P("strong",null,"europe.")],-1)])]),_:1}),P("button",{class:"icon-button mobile-only","aria-label":"Fermer les salons",onClick:T[1]||(T[1]=O=>C.value=!1)},"×")]),Gn(Q,{to:"/",class:"back-to-site"},{default:cn(()=>[...T[13]||(T[13]=[P("span",{"aria-hidden":"true"},"←",-1),ft(" Retour au site",-1)])]),_:1}),T[25]||(T[25]=Zo('<div class="sidebar-divider" data-v-219ede37></div><div class="workspace-label" data-v-219ede37><span class="workspace-symbol" aria-hidden="true" data-v-219ede37>✳</span><div data-v-219ede37><strong data-v-219ede37>Le collectif</strong><span data-v-219ede37>L’espace des élèves</span></div><span class="workspace-dot" aria-hidden="true" data-v-219ede37></span></div><p class="section-label" data-v-219ede37>VOS SALONS <span data-v-219ede37>03</span></p>',3)),P("nav",om,[(tt(),nt(Fe,null,zr(r,O=>P("button",{key:O.id,class:Kn({active:o.value===O.id}),"aria-current":o.value===O.id?"page":void 0,onClick:rt=>Ar(O.id)},[T[14]||(T[14]=P("span",{class:"room-hash","aria-hidden":"true"},"#",-1)),P("span",null,[ft(H(O.name),1),P("small",null,H(O.short),1)]),T[15]||(T[15]=P("span",{class:"room-arrow","aria-hidden":"true"},"↗",-1))],10,am)),64))]),P("div",um,[T[17]||(T[17]=P("span",{class:"note-symbol","aria-hidden":"true"},"↗",-1)),T[18]||(T[18]=P("span",{class:"note-eyebrow"},"ON AVANCE ENSEMBLE",-1)),T[19]||(T[19]=P("h2",null,[ft("Une question ?"),P("br"),ft("Il y a un salon"),P("br"),ft("pour ça.")],-1)),T[20]||(T[20]=P("p",null,"Les petites questions font aussi les grandes conversations.",-1)),P("button",{onClick:T[2]||(T[2]=O=>Ar("entraide"))},[...T[16]||(T[16]=[ft("Trouver de l’entraide ",-1),P("span",{"aria-hidden":"true"},"↗",-1)])])]),P("div",lm,[Gn(Q,{to:"/clubs",class:"clubs-link"},{default:cn(()=>[...T[21]||(T[21]=[ft("Découvrir les clubs ",-1),P("span",{"aria-hidden":"true"},"↗",-1)])]),_:1}),l.value?(tt(),nt("div",cm,[P("span",hm,H(Pr(d.value)),1),P("div",dm,[P("strong",null,H(d.value),1),T[22]||(T[22]=P("span",null,"Votre espace personnel",-1))]),P("button",{class:"icon-button",disabled:$.value||F.value,"aria-label":"Se déconnecter",title:"Se déconnecter",onClick:nn},[...T[23]||(T[23]=[P("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"1.6","aria-hidden":"true"},[P("path",{d:"M10 4H4v16h6m4-13 5 5-5 5m-6-5h11"})],-1)])],8,fm)])):(tt(),Tc(Q,{key:1,to:"/login",class:"account-login"},{default:cn(()=>[...T[24]||(T[24]=[ft("Rejoindre la communauté ",-1),P("span",{"aria-hidden":"true"},"↗",-1)])]),_:1}))])],2),P("section",pm,[P("header",mm,[P("button",{class:"icon-button mobile-only","aria-label":"Ouvrir les salons","aria-controls":"community-sidebar","aria-expanded":C.value,onClick:T[3]||(T[3]=O=>C.value=!0)},[...T[26]||(T[26]=[P("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"1.7","aria-hidden":"true"},[P("path",{d:"M4 6h16M4 12h16M4 18h16"})],-1)])],8,_m),T[28]||(T[28]=P("span",{class:"header-hash","aria-hidden":"true"},"#",-1)),P("div",gm,[P("h1",ym,H(a.value.name),1),P("p",null,H(a.value.description),1)]),P("div",vm,[P("span",Tm,[P("span",{class:Kn({connected:l.value&&!L.value})},null,2),ft(H(h.value?l.value?L.value?"Connexion interrompue":"Espace connecté":"Aperçu de l’espace":"Chargement"),1)]),P("button",{class:"icon-button","aria-label":"Rechercher dans les messages","aria-expanded":A.value,onClick:Ne},[...T[27]||(T[27]=[P("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"1.6","aria-hidden":"true"},[P("circle",{cx:"10.5",cy:"10.5",r:"6.5"}),P("path",{d:"m16 16 4.5 4.5"})],-1)])],8,Em)])]),A.value?(tt(),nt("div",wm,[T[29]||(T[29]=P("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"1.6","aria-hidden":"true"},[P("circle",{cx:"10.5",cy:"10.5",r:"6.5"}),P("path",{d:"m16 16 4.5 4.5"})],-1)),ta(P("input",{ref_key:"searchInput",ref:de,"onUpdate:modelValue":T[4]||(T[4]=O=>y.value=O),"aria-label":"Rechercher un message ou un fichier",placeholder:"Rechercher un message ou un fichier…",onKeydown:Ec(Rr,["esc"])},null,544),[[ea,y.value]]),y.value&&l.value?(tt(),nt("span",Im,H(jt.value.length)+" résultat"+H(jt.value.length>1?"s":""),1)):Ut("",!0),P("button",{class:"icon-button","aria-label":"Fermer la recherche",onClick:Rr},"×")])):Ut("",!0),T[52]||(T[52]=P("div",{class:"conversation-notice"},[P("span",{class:"notice-icon","aria-hidden":"true"},"↗"),P("p",null,[P("strong",null,"Un espace qui nous ressemble."),ft(" Partageons nos idées avec respect, curiosité et bienveillance.")]),P("span",{class:"notice-tag"},"LE COLLECTIF EUROPE")],-1)),P("div",{ref_key:"messagesArea",ref:w,class:"messages-area",onScroll:Nn},[!h.value||N.value?(tt(),nt("div",Am,[...T[30]||(T[30]=[P("span",{class:"loading-ring","aria-hidden":"true"},null,-1),P("h2",null,"On vous ouvre la porte…",-1),P("p",null,"Chargement de votre espace.",-1)])])):l.value?L.value?(tt(),nt("div",bm,[T[37]||(T[37]=P("span",{class:"state-symbol","aria-hidden":"true"},"↻",-1)),T[38]||(T[38]=P("h2",null,"La conversation fait une pause.",-1)),P("p",null,H(L.value),1),P("button",{class:"primary-link",onClick:vt},[...T[36]||(T[36]=[ft("Réessayer ",-1),P("span",{"aria-hidden":"true"},"↻",-1)])])])):(tt(),nt(Fe,{key:3},[P("div",Cm,[T[39]||(T[39]=P("span",{class:"room-intro-symbol","aria-hidden":"true"},"#",-1)),P("div",null,[P("h2",null,"Bienvenue dans "+H(a.value.name)+".",1),P("p",null,H(a.value.intro),1)])]),T[43]||(T[43]=P("p",{class:"history-notice"},"Historique récent · Les 150 dernières publications du collectif",-1)),jt.value.length?Ut("",!0):(tt(),nt("div",Vm,[P("span",Sm,H(y.value?"⌕":"↗"),1),P("h3",null,H(y.value?"Aucun message trouvé.":"La conversation commence avec vous."),1),P("p",null,H(y.value?"Essayez un autre mot ou recherchez dans un autre salon.":"Une question, une idée ou simplement un bonjour ?"),1),y.value?(tt(),nt("button",{key:0,class:"text-button",onClick:T[5]||(T[5]=O=>y.value="")},"Effacer la recherche")):Ut("",!0)])),(tt(!0),nt(Fe,null,zr(jt.value,(O,rt)=>{var Rt,Xt,Yt;return tt(),nt(Fe,{key:O.id},[Sn(O,rt)?(tt(),nt("div",km,[P("span",null,H(me(O.createdAt)),1)])):Ut("",!0),P("article",{class:Kn(["message",{mine:O.uid===((Rt=l.value)==null?void 0:Rt.uid)}])},[P("span",{class:"avatar message-avatar",style:Rc({background:Cs(O.uid)})},H(Pr(pe(O))),5),P("div",Nm,[P("div",Dm,[P("strong",null,H(O.uid===((Xt=l.value)==null?void 0:Xt.uid)?"Vous":pe(O)),1),P("time",null,H(Vn(O.createdAt)),1)]),P("div",xm,[O.text?(tt(),nt("p",Om,H(O.text),1)):Ut("",!0),ne(O.imageUrl,!0)?(tt(),nt("a",{key:1,href:ne(O.imageUrl,!0),target:"_blank",rel:"noopener noreferrer",class:"message-image-link","aria-label":"Ouvrir l’image "+(O.fileName||"partagée")},[P("img",{src:ne(O.imageUrl,!0),alt:O.fileName||"Image partagée",loading:"lazy",class:"message-image"},null,8,Mm)],8,Lm)):Ut("",!0),ne(O.fileUrl)&&!ne(O.imageUrl,!0)?(tt(),nt("a",{key:2,href:ne(O.fileUrl),target:"_blank",rel:"noopener noreferrer",download:O.fileName,class:"file-attachment"},[T[40]||(T[40]=P("span",{"aria-hidden":"true"},"↧",-1)),P("span",null,[P("strong",null,H(O.fileName||"Pièce jointe"),1),P("small",null,H(tn(O.fileSize))+" · Ouvrir le fichier",1)]),T[41]||(T[41]=P("span",{"aria-hidden":"true"},"↗",-1))],8,Um)):Ut("",!0)]),P("div",Fm,[P("div",qm,[(tt(!0),nt(Fe,null,zr(br(O),(kt,lt)=>(tt(),nt("button",{key:lt,class:Kn(["reaction",{reacted:Vs(O,lt)}]),disabled:v.value===O.id,"aria-label":`Réagir ${lt} (${kt})`,onClick:ye=>wt(O,lt)},[ft(H(lt)+" ",1),P("span",null,H(kt),1)],10,Bm))),128)),P("button",{class:"reaction add-reaction",disabled:v.value===O.id,"aria-label":"Réagir avec un pouce levé",title:"J’aime",onClick:kt=>wt(O,"👍")},"＋ 👍",8,jm)]),O.uid===((Yt=l.value)==null?void 0:Yt.uid)?(tt(),nt("button",{key:0,class:"delete-message",onClick:kt=>m.value=m.value===O.id?null:O.id,"aria-expanded":m.value===O.id,"aria-label":"Supprimer votre message"},"Supprimer",8,zm)):Ut("",!0)]),m.value===O.id?(tt(),nt("div",$m,[T[42]||(T[42]=P("span",null,"Supprimer ce message ?",-1)),P("button",{onClick:T[6]||(T[6]=kt=>m.value=null),disabled:g.value},"Conserver",8,Gm),P("button",{class:"confirm-danger",onClick:kt=>Et(O),disabled:g.value},H(g.value?"Suppression…":"Supprimer"),9,Km)])):Ut("",!0)])],2)],64)}),128)),P("div",{ref_key:"messagesBottom",ref:R,class:"messages-bottom"},null,512)],64)):(tt(),nt("div",Rm,[T[34]||(T[34]=Zo('<div class="welcome-illustration" aria-hidden="true" data-v-219ede37><span class="welcome-star" data-v-219ede37>✳</span><span class="bubble bubble-one" data-v-219ede37>Bonjour, le collectif.<i data-v-219ede37>↗</i></span><span class="bubble bubble-two" data-v-219ede37>Une idée à partager ?<i data-v-219ede37>✧</i></span><span class="bubble bubble-three" data-v-219ede37>On en parle ensemble.<i data-v-219ede37>↗</i></span></div>',1)),P("span",Pm,"BIENVENUE DANS #"+H(a.value.name.toUpperCase()),1),P("h2",null,[ft(H(a.value.welcome),1),T[31]||(T[31]=P("br",null,null,-1)),T[32]||(T[32]=P("em",null,"ensemble.",-1))]),P("p",null,H(a.value.intro)+" Connectez-vous pour retrouver les messages et rejoindre la conversation.",1),Gn(Q,{to:"/login",class:"primary-link"},{default:cn(()=>[...T[33]||(T[33]=[ft("Rejoindre les échanges ",-1),P("span",{"aria-hidden":"true"},"↗",-1)])]),_:1}),T[35]||(T[35]=P("span",{class:"preview-label"},"Aperçu de l’espace · Aucun message affiché hors connexion",-1))]))],544),Ze.value&&l.value&&!y.value?(tt(),nt("button",{key:1,class:"scroll-bottom-button",onClick:ge},[...T[44]||(T[44]=[ft("Derniers messages ",-1),P("span",{"aria-hidden":"true"},"↓",-1)])])):Ut("",!0),P("footer",Qm,[S.value?(tt(),nt("p",Wm,[ft(H(S.value),1),P("button",{onClick:T[7]||(T[7]=O=>S.value=""),"aria-label":"Fermer le message d’erreur"},"×")])):Ut("",!0),l.value?(tt(),nt(Fe,{key:1},[J.value?(tt(),nt("div",Hm,[E.value?(tt(),nt("img",{key:0,src:E.value,alt:"Aperçu de la pièce jointe"},null,8,Xm)):(tt(),nt("span",Ym,"↧")),P("span",null,[P("strong",null,H(J.value.name),1),P("small",null,H(F.value&&pt.value?`Transfert : ${pt.value} %`:tn(J.value.size)),1)]),P("button",{class:"icon-button",disabled:F.value,"aria-label":"Retirer la pièce jointe",onClick:_e},"×",8,Jm)])):Ut("",!0),K.value?(tt(),nt("div",Zm,[(tt(),nt(Fe,null,zr(s,O=>P("button",{key:O,"aria-label":"Insérer "+O,onClick:rt=>kn(O)},H(O),9,t_)),64)),P("button",{class:"emoji-close","aria-label":"Fermer les emojis",onClick:T[8]||(T[8]=O=>K.value=!1)},"×")])):Ut("",!0),P("form",{class:"composer",onSubmit:wc(Dn,["prevent"])},[P("label",e_,"Votre message dans "+H(a.value.name),1),ta(P("textarea",{id:"message-input",ref_key:"messageInput",ref:_,"onUpdate:modelValue":T[9]||(T[9]=O=>j.value=O),placeholder:`Un message pour #${a.value.name}…`,rows:"1",maxlength:"4000",disabled:F.value,onInput:en,onKeydown:ks},null,40,n_),[[ea,j.value]]),P("div",r_,[P("div",null,[P("input",{ref_key:"fileInput",ref:Ht,type:"file",class:"visually-hidden",tabindex:"-1","aria-label":"Choisir une pièce jointe",onChange:Ss},null,544),P("button",{type:"button",class:"icon-button","aria-label":"Joindre un fichier (20 Mo maximum)",disabled:F.value,onClick:T[10]||(T[10]=O=>{var rt;return(rt=Ht.value)==null?void 0:rt.click()})},[...T[45]||(T[45]=[P("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"1.6","aria-hidden":"true"},[P("path",{d:"m9 12 6-6a3 3 0 0 1 4.2 4.2l-8.4 8.4a5 5 0 0 1-7.1-7.1l8.4-8.4M7 14l7-7"})],-1)])],8,s_),P("button",{type:"button",class:"icon-button","aria-label":"Insérer un emoji","aria-expanded":K.value,disabled:F.value,onClick:T[11]||(T[11]=O=>K.value=!K.value)},[...T[46]||(T[46]=[P("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"1.6","aria-hidden":"true"},[P("circle",{cx:"12",cy:"12",r:"9"}),P("path",{d:"M8 14.5a4.5 4.5 0 0 0 8 0M8 9h1m6 0h1"})],-1)])],8,i_),T[47]||(T[47]=P("span",{class:"attachment-limit"},"20 Mo max.",-1))]),P("button",{type:"submit",class:"send-button",disabled:F.value||!j.value.trim()&&!J.value},[ft(H(F.value?"Envoi…":"Envoyer")+" ",1),T[48]||(T[48]=P("span",{"aria-hidden":"true"},"↗",-1))],8,o_)])],32),P("div",a_,[T[49]||(T[49]=P("span",null,[P("strong",null,"Entrée"),ft(" pour envoyer · "),P("strong",null,"Maj + Entrée"),ft(" pour une nouvelle ligne")],-1)),P("span",null,H(j.value.length)+"/4000",1)])],64)):(tt(),nt("div",u_,[T[51]||(T[51]=P("span",null,"Votre prochaine conversation commence ici.",-1)),Gn(Q,{to:"/login"},{default:cn(()=>[...T[50]||(T[50]=[ft("Se connecter ",-1),P("span",{"aria-hidden":"true"},"↗",-1)])]),_:1})]))])])])}}},__=mc(l_,[["__scopeId","data-v-219ede37"]]);export{__ as default};

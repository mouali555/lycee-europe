import{_ as rc}from"./Cj1fid2c.js";import{g as Ka,_ as Ga,e as Qa,f as $t,h as Wa,F as Ha,L as ic,i as Se,S as Xa,j as Ya,C as Ja,r as ir,k as oc,l as ac,u as lc,m as uc,n as cc,p as hc,q as dc,c as z,b as ge,w as _e,T as Ce,a as C,s as Kn,t as J,d as Gn,v as mt,x as Ks,y as Wr,z as ae,A as ye,B as Ve,D as Qo,E as Gs,G as lt,H as We,I as Wo,J as Ho,o as K,K as fc}from"./DWeFrYgu.js";import{s as pc}from"./DQb9pNJ7.js";import{g as Xo,o as mc,s as gc}from"./cLUMJMP8.js";import{_ as _c}from"./DlAUqK2U.js";var Yo=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var Ye,Za;(function(){var n;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function t(v,m){function g(){}g.prototype=m.prototype,v.D=m.prototype,v.prototype=new g,v.prototype.constructor=v,v.C=function(y,T,A){for(var _=Array(arguments.length-2),Jt=2;Jt<arguments.length;Jt++)_[Jt-2]=arguments[Jt];return m.prototype[T].apply(y,_)}}function e(){this.blockSize=-1}function s(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.B=Array(this.blockSize),this.o=this.h=0,this.s()}t(s,e),s.prototype.s=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function i(v,m,g){g||(g=0);var y=Array(16);if(typeof m=="string")for(var T=0;16>T;++T)y[T]=m.charCodeAt(g++)|m.charCodeAt(g++)<<8|m.charCodeAt(g++)<<16|m.charCodeAt(g++)<<24;else for(T=0;16>T;++T)y[T]=m[g++]|m[g++]<<8|m[g++]<<16|m[g++]<<24;m=v.g[0],g=v.g[1],T=v.g[2];var A=v.g[3],_=m+(A^g&(T^A))+y[0]+3614090360&4294967295;m=g+(_<<7&4294967295|_>>>25),_=A+(T^m&(g^T))+y[1]+3905402710&4294967295,A=m+(_<<12&4294967295|_>>>20),_=T+(g^A&(m^g))+y[2]+606105819&4294967295,T=A+(_<<17&4294967295|_>>>15),_=g+(m^T&(A^m))+y[3]+3250441966&4294967295,g=T+(_<<22&4294967295|_>>>10),_=m+(A^g&(T^A))+y[4]+4118548399&4294967295,m=g+(_<<7&4294967295|_>>>25),_=A+(T^m&(g^T))+y[5]+1200080426&4294967295,A=m+(_<<12&4294967295|_>>>20),_=T+(g^A&(m^g))+y[6]+2821735955&4294967295,T=A+(_<<17&4294967295|_>>>15),_=g+(m^T&(A^m))+y[7]+4249261313&4294967295,g=T+(_<<22&4294967295|_>>>10),_=m+(A^g&(T^A))+y[8]+1770035416&4294967295,m=g+(_<<7&4294967295|_>>>25),_=A+(T^m&(g^T))+y[9]+2336552879&4294967295,A=m+(_<<12&4294967295|_>>>20),_=T+(g^A&(m^g))+y[10]+4294925233&4294967295,T=A+(_<<17&4294967295|_>>>15),_=g+(m^T&(A^m))+y[11]+2304563134&4294967295,g=T+(_<<22&4294967295|_>>>10),_=m+(A^g&(T^A))+y[12]+1804603682&4294967295,m=g+(_<<7&4294967295|_>>>25),_=A+(T^m&(g^T))+y[13]+4254626195&4294967295,A=m+(_<<12&4294967295|_>>>20),_=T+(g^A&(m^g))+y[14]+2792965006&4294967295,T=A+(_<<17&4294967295|_>>>15),_=g+(m^T&(A^m))+y[15]+1236535329&4294967295,g=T+(_<<22&4294967295|_>>>10),_=m+(T^A&(g^T))+y[1]+4129170786&4294967295,m=g+(_<<5&4294967295|_>>>27),_=A+(g^T&(m^g))+y[6]+3225465664&4294967295,A=m+(_<<9&4294967295|_>>>23),_=T+(m^g&(A^m))+y[11]+643717713&4294967295,T=A+(_<<14&4294967295|_>>>18),_=g+(A^m&(T^A))+y[0]+3921069994&4294967295,g=T+(_<<20&4294967295|_>>>12),_=m+(T^A&(g^T))+y[5]+3593408605&4294967295,m=g+(_<<5&4294967295|_>>>27),_=A+(g^T&(m^g))+y[10]+38016083&4294967295,A=m+(_<<9&4294967295|_>>>23),_=T+(m^g&(A^m))+y[15]+3634488961&4294967295,T=A+(_<<14&4294967295|_>>>18),_=g+(A^m&(T^A))+y[4]+3889429448&4294967295,g=T+(_<<20&4294967295|_>>>12),_=m+(T^A&(g^T))+y[9]+568446438&4294967295,m=g+(_<<5&4294967295|_>>>27),_=A+(g^T&(m^g))+y[14]+3275163606&4294967295,A=m+(_<<9&4294967295|_>>>23),_=T+(m^g&(A^m))+y[3]+4107603335&4294967295,T=A+(_<<14&4294967295|_>>>18),_=g+(A^m&(T^A))+y[8]+1163531501&4294967295,g=T+(_<<20&4294967295|_>>>12),_=m+(T^A&(g^T))+y[13]+2850285829&4294967295,m=g+(_<<5&4294967295|_>>>27),_=A+(g^T&(m^g))+y[2]+4243563512&4294967295,A=m+(_<<9&4294967295|_>>>23),_=T+(m^g&(A^m))+y[7]+1735328473&4294967295,T=A+(_<<14&4294967295|_>>>18),_=g+(A^m&(T^A))+y[12]+2368359562&4294967295,g=T+(_<<20&4294967295|_>>>12),_=m+(g^T^A)+y[5]+4294588738&4294967295,m=g+(_<<4&4294967295|_>>>28),_=A+(m^g^T)+y[8]+2272392833&4294967295,A=m+(_<<11&4294967295|_>>>21),_=T+(A^m^g)+y[11]+1839030562&4294967295,T=A+(_<<16&4294967295|_>>>16),_=g+(T^A^m)+y[14]+4259657740&4294967295,g=T+(_<<23&4294967295|_>>>9),_=m+(g^T^A)+y[1]+2763975236&4294967295,m=g+(_<<4&4294967295|_>>>28),_=A+(m^g^T)+y[4]+1272893353&4294967295,A=m+(_<<11&4294967295|_>>>21),_=T+(A^m^g)+y[7]+4139469664&4294967295,T=A+(_<<16&4294967295|_>>>16),_=g+(T^A^m)+y[10]+3200236656&4294967295,g=T+(_<<23&4294967295|_>>>9),_=m+(g^T^A)+y[13]+681279174&4294967295,m=g+(_<<4&4294967295|_>>>28),_=A+(m^g^T)+y[0]+3936430074&4294967295,A=m+(_<<11&4294967295|_>>>21),_=T+(A^m^g)+y[3]+3572445317&4294967295,T=A+(_<<16&4294967295|_>>>16),_=g+(T^A^m)+y[6]+76029189&4294967295,g=T+(_<<23&4294967295|_>>>9),_=m+(g^T^A)+y[9]+3654602809&4294967295,m=g+(_<<4&4294967295|_>>>28),_=A+(m^g^T)+y[12]+3873151461&4294967295,A=m+(_<<11&4294967295|_>>>21),_=T+(A^m^g)+y[15]+530742520&4294967295,T=A+(_<<16&4294967295|_>>>16),_=g+(T^A^m)+y[2]+3299628645&4294967295,g=T+(_<<23&4294967295|_>>>9),_=m+(T^(g|~A))+y[0]+4096336452&4294967295,m=g+(_<<6&4294967295|_>>>26),_=A+(g^(m|~T))+y[7]+1126891415&4294967295,A=m+(_<<10&4294967295|_>>>22),_=T+(m^(A|~g))+y[14]+2878612391&4294967295,T=A+(_<<15&4294967295|_>>>17),_=g+(A^(T|~m))+y[5]+4237533241&4294967295,g=T+(_<<21&4294967295|_>>>11),_=m+(T^(g|~A))+y[12]+1700485571&4294967295,m=g+(_<<6&4294967295|_>>>26),_=A+(g^(m|~T))+y[3]+2399980690&4294967295,A=m+(_<<10&4294967295|_>>>22),_=T+(m^(A|~g))+y[10]+4293915773&4294967295,T=A+(_<<15&4294967295|_>>>17),_=g+(A^(T|~m))+y[1]+2240044497&4294967295,g=T+(_<<21&4294967295|_>>>11),_=m+(T^(g|~A))+y[8]+1873313359&4294967295,m=g+(_<<6&4294967295|_>>>26),_=A+(g^(m|~T))+y[15]+4264355552&4294967295,A=m+(_<<10&4294967295|_>>>22),_=T+(m^(A|~g))+y[6]+2734768916&4294967295,T=A+(_<<15&4294967295|_>>>17),_=g+(A^(T|~m))+y[13]+1309151649&4294967295,g=T+(_<<21&4294967295|_>>>11),_=m+(T^(g|~A))+y[4]+4149444226&4294967295,m=g+(_<<6&4294967295|_>>>26),_=A+(g^(m|~T))+y[11]+3174756917&4294967295,A=m+(_<<10&4294967295|_>>>22),_=T+(m^(A|~g))+y[2]+718787259&4294967295,T=A+(_<<15&4294967295|_>>>17),_=g+(A^(T|~m))+y[9]+3951481745&4294967295,v.g[0]=v.g[0]+m&4294967295,v.g[1]=v.g[1]+(T+(_<<21&4294967295|_>>>11))&4294967295,v.g[2]=v.g[2]+T&4294967295,v.g[3]=v.g[3]+A&4294967295}s.prototype.u=function(v,m){m===void 0&&(m=v.length);for(var g=m-this.blockSize,y=this.B,T=this.h,A=0;A<m;){if(T==0)for(;A<=g;)i(this,v,A),A+=this.blockSize;if(typeof v=="string"){for(;A<m;)if(y[T++]=v.charCodeAt(A++),T==this.blockSize){i(this,y),T=0;break}}else for(;A<m;)if(y[T++]=v[A++],T==this.blockSize){i(this,y),T=0;break}}this.h=T,this.o+=m},s.prototype.v=function(){var v=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);v[0]=128;for(var m=1;m<v.length-8;++m)v[m]=0;var g=8*this.o;for(m=v.length-8;m<v.length;++m)v[m]=g&255,g/=256;for(this.u(v),v=Array(16),m=g=0;4>m;++m)for(var y=0;32>y;y+=8)v[g++]=this.g[m]>>>y&255;return v};function o(v,m){var g=c;return Object.prototype.hasOwnProperty.call(g,v)?g[v]:g[v]=m(v)}function a(v,m){this.h=m;for(var g=[],y=!0,T=v.length-1;0<=T;T--){var A=v[T]|0;y&&A==m||(g[T]=A,y=!1)}this.g=g}var c={};function h(v){return-128<=v&&128>v?o(v,function(m){return new a([m|0],0>m?-1:0)}):new a([v|0],0>v?-1:0)}function f(v){if(isNaN(v)||!isFinite(v))return E;if(0>v)return D(f(-v));for(var m=[],g=1,y=0;v>=g;y++)m[y]=v/g|0,g*=4294967296;return new a(m,0)}function p(v,m){if(v.length==0)throw Error("number format error: empty string");if(m=m||10,2>m||36<m)throw Error("radix out of range: "+m);if(v.charAt(0)=="-")return D(p(v.substring(1),m));if(0<=v.indexOf("-"))throw Error('number format error: interior "-" character');for(var g=f(Math.pow(m,8)),y=E,T=0;T<v.length;T+=8){var A=Math.min(8,v.length-T),_=parseInt(v.substring(T,T+A),m);8>A?(A=f(Math.pow(m,A)),y=y.j(A).add(f(_))):(y=y.j(g),y=y.add(f(_)))}return y}var E=h(0),R=h(1),V=h(16777216);n=a.prototype,n.m=function(){if(M(this))return-D(this).m();for(var v=0,m=1,g=0;g<this.g.length;g++){var y=this.i(g);v+=(0<=y?y:4294967296+y)*m,m*=4294967296}return v},n.toString=function(v){if(v=v||10,2>v||36<v)throw Error("radix out of range: "+v);if(N(this))return"0";if(M(this))return"-"+D(this).toString(v);for(var m=f(Math.pow(v,6)),g=this,y="";;){var T=Y(g,m).g;g=G(g,T.j(m));var A=((0<g.g.length?g.g[0]:g.h)>>>0).toString(v);if(g=T,N(g))return A+y;for(;6>A.length;)A="0"+A;y=A+y}},n.i=function(v){return 0>v?0:v<this.g.length?this.g[v]:this.h};function N(v){if(v.h!=0)return!1;for(var m=0;m<v.g.length;m++)if(v.g[m]!=0)return!1;return!0}function M(v){return v.h==-1}n.l=function(v){return v=G(this,v),M(v)?-1:N(v)?0:1};function D(v){for(var m=v.g.length,g=[],y=0;y<m;y++)g[y]=~v.g[y];return new a(g,~v.h).add(R)}n.abs=function(){return M(this)?D(this):this},n.add=function(v){for(var m=Math.max(this.g.length,v.g.length),g=[],y=0,T=0;T<=m;T++){var A=y+(this.i(T)&65535)+(v.i(T)&65535),_=(A>>>16)+(this.i(T)>>>16)+(v.i(T)>>>16);y=_>>>16,A&=65535,_&=65535,g[T]=_<<16|A}return new a(g,g[g.length-1]&-2147483648?-1:0)};function G(v,m){return v.add(D(m))}n.j=function(v){if(N(this)||N(v))return E;if(M(this))return M(v)?D(this).j(D(v)):D(D(this).j(v));if(M(v))return D(this.j(D(v)));if(0>this.l(V)&&0>v.l(V))return f(this.m()*v.m());for(var m=this.g.length+v.g.length,g=[],y=0;y<2*m;y++)g[y]=0;for(y=0;y<this.g.length;y++)for(var T=0;T<v.g.length;T++){var A=this.i(y)>>>16,_=this.i(y)&65535,Jt=v.i(T)>>>16,se=v.i(T)&65535;g[2*y+2*T]+=_*se,X(g,2*y+2*T),g[2*y+2*T+1]+=A*se,X(g,2*y+2*T+1),g[2*y+2*T+1]+=_*Jt,X(g,2*y+2*T+1),g[2*y+2*T+2]+=A*Jt,X(g,2*y+2*T+2)}for(y=0;y<m;y++)g[y]=g[2*y+1]<<16|g[2*y];for(y=m;y<2*m;y++)g[y]=0;return new a(g,0)};function X(v,m){for(;(v[m]&65535)!=v[m];)v[m+1]+=v[m]>>>16,v[m]&=65535,m++}function H(v,m){this.g=v,this.h=m}function Y(v,m){if(N(m))throw Error("division by zero");if(N(v))return new H(E,E);if(M(v))return m=Y(D(v),m),new H(D(m.g),D(m.h));if(M(m))return m=Y(v,D(m)),new H(D(m.g),m.h);if(30<v.g.length){if(M(v)||M(m))throw Error("slowDivide_ only works with positive integers.");for(var g=R,y=m;0>=y.l(v);)g=Vt(g),y=Vt(y);var T=ht(g,1),A=ht(y,1);for(y=ht(y,2),g=ht(g,2);!N(y);){var _=A.add(y);0>=_.l(v)&&(T=T.add(g),A=_),y=ht(y,1),g=ht(g,1)}return m=G(v,T.j(m)),new H(T,m)}for(T=E;0<=v.l(m);){for(g=Math.max(1,Math.floor(v.m()/m.m())),y=Math.ceil(Math.log(g)/Math.LN2),y=48>=y?1:Math.pow(2,y-48),A=f(g),_=A.j(m);M(_)||0<_.l(v);)g-=y,A=f(g),_=A.j(m);N(A)&&(A=R),T=T.add(A),v=G(v,_)}return new H(T,v)}n.A=function(v){return Y(this,v).h},n.and=function(v){for(var m=Math.max(this.g.length,v.g.length),g=[],y=0;y<m;y++)g[y]=this.i(y)&v.i(y);return new a(g,this.h&v.h)},n.or=function(v){for(var m=Math.max(this.g.length,v.g.length),g=[],y=0;y<m;y++)g[y]=this.i(y)|v.i(y);return new a(g,this.h|v.h)},n.xor=function(v){for(var m=Math.max(this.g.length,v.g.length),g=[],y=0;y<m;y++)g[y]=this.i(y)^v.i(y);return new a(g,this.h^v.h)};function Vt(v){for(var m=v.g.length+1,g=[],y=0;y<m;y++)g[y]=v.i(y)<<1|v.i(y-1)>>>31;return new a(g,v.h)}function ht(v,m){var g=m>>5;m%=32;for(var y=v.g.length-g,T=[],A=0;A<y;A++)T[A]=0<m?v.i(A+g)>>>m|v.i(A+g+1)<<32-m:v.i(A+g);return new a(T,v.h)}s.prototype.digest=s.prototype.v,s.prototype.reset=s.prototype.s,s.prototype.update=s.prototype.u,Za=s,a.prototype.add=a.prototype.add,a.prototype.multiply=a.prototype.j,a.prototype.modulo=a.prototype.A,a.prototype.compare=a.prototype.l,a.prototype.toNumber=a.prototype.m,a.prototype.toString=a.prototype.toString,a.prototype.getBits=a.prototype.i,a.fromNumber=f,a.fromString=p,Ye=a}).apply(typeof Yo<"u"?Yo:typeof self<"u"?self:typeof window<"u"?window:{});var Qs=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var tl,Hn,el,tr,ni,nl,sl,rl;(function(){var n,t=typeof Object.defineProperties=="function"?Object.defineProperty:function(r,l,u){return r==Array.prototype||r==Object.prototype||(r[l]=u.value),r};function e(r){r=[typeof globalThis=="object"&&globalThis,r,typeof window=="object"&&window,typeof self=="object"&&self,typeof Qs=="object"&&Qs];for(var l=0;l<r.length;++l){var u=r[l];if(u&&u.Math==Math)return u}throw Error("Cannot find global object")}var s=e(this);function i(r,l){if(l)t:{var u=s;r=r.split(".");for(var d=0;d<r.length-1;d++){var w=r[d];if(!(w in u))break t;u=u[w]}r=r[r.length-1],d=u[r],l=l(d),l!=d&&l!=null&&t(u,r,{configurable:!0,writable:!0,value:l})}}function o(r,l){r instanceof String&&(r+="");var u=0,d=!1,w={next:function(){if(!d&&u<r.length){var P=u++;return{value:l(P,r[P]),done:!1}}return d=!0,{done:!0,value:void 0}}};return w[Symbol.iterator]=function(){return w},w}i("Array.prototype.values",function(r){return r||function(){return o(this,function(l,u){return u})}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var a=a||{},c=this||self;function h(r){var l=typeof r;return l=l!="object"?l:r?Array.isArray(r)?"array":l:"null",l=="array"||l=="object"&&typeof r.length=="number"}function f(r){var l=typeof r;return l=="object"&&r!=null||l=="function"}function p(r,l,u){return r.call.apply(r.bind,arguments)}function E(r,l,u){if(!r)throw Error();if(2<arguments.length){var d=Array.prototype.slice.call(arguments,2);return function(){var w=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(w,d),r.apply(l,w)}}return function(){return r.apply(l,arguments)}}function R(r,l,u){return R=Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?p:E,R.apply(null,arguments)}function V(r,l){var u=Array.prototype.slice.call(arguments,1);return function(){var d=u.slice();return d.push.apply(d,arguments),r.apply(this,d)}}function N(r,l){function u(){}u.prototype=l.prototype,r.aa=l.prototype,r.prototype=new u,r.prototype.constructor=r,r.Qb=function(d,w,P){for(var O=Array(arguments.length-2),ct=2;ct<arguments.length;ct++)O[ct-2]=arguments[ct];return l.prototype[w].apply(d,O)}}function M(r){const l=r.length;if(0<l){const u=Array(l);for(let d=0;d<l;d++)u[d]=r[d];return u}return[]}function D(r,l){for(let u=1;u<arguments.length;u++){const d=arguments[u];if(h(d)){const w=r.length||0,P=d.length||0;r.length=w+P;for(let O=0;O<P;O++)r[w+O]=d[O]}else r.push(d)}}class G{constructor(l,u){this.i=l,this.j=u,this.h=0,this.g=null}get(){let l;return 0<this.h?(this.h--,l=this.g,this.g=l.next,l.next=null):l=this.i(),l}}function X(r){return/^[\s\xa0]*$/.test(r)}function H(){var r=c.navigator;return r&&(r=r.userAgent)?r:""}function Y(r){return Y[" "](r),r}Y[" "]=function(){};var Vt=H().indexOf("Gecko")!=-1&&!(H().toLowerCase().indexOf("webkit")!=-1&&H().indexOf("Edge")==-1)&&!(H().indexOf("Trident")!=-1||H().indexOf("MSIE")!=-1)&&H().indexOf("Edge")==-1;function ht(r,l,u){for(const d in r)l.call(u,r[d],d,r)}function v(r,l){for(const u in r)l.call(void 0,r[u],u,r)}function m(r){const l={};for(const u in r)l[u]=r[u];return l}const g="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function y(r,l){let u,d;for(let w=1;w<arguments.length;w++){d=arguments[w];for(u in d)r[u]=d[u];for(let P=0;P<g.length;P++)u=g[P],Object.prototype.hasOwnProperty.call(d,u)&&(r[u]=d[u])}}function T(r){var l=1;r=r.split(":");const u=[];for(;0<l&&r.length;)u.push(r.shift()),l--;return r.length&&u.push(r.join(":")),u}function A(r){c.setTimeout(()=>{throw r},0)}function _(){var r=bn;let l=null;return r.g&&(l=r.g,r.g=r.g.next,r.g||(r.h=null),l.next=null),l}class Jt{constructor(){this.h=this.g=null}add(l,u){const d=se.get();d.set(l,u),this.h?this.h.next=d:this.g=d,this.h=d}}var se=new G(()=>new kr,r=>r.reset());class kr{constructor(){this.next=this.g=this.h=null}set(l,u){this.h=l,this.g=u,this.next=null}reset(){this.next=this.g=this.h=null}}let zt,Ee=!1,bn=new Jt,vs=()=>{const r=c.Promise.resolve(void 0);zt=()=>{r.then(re)}};var re=()=>{for(var r;r=_();){try{r.h.call(r.g)}catch(u){A(u)}var l=se;l.j(r),100>l.h&&(l.h++,r.next=l.g,l.g=r)}Ee=!1};function xt(){this.s=this.s,this.C=this.C}xt.prototype.s=!1,xt.prototype.ma=function(){this.s||(this.s=!0,this.N())},xt.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function It(r,l){this.type=r,this.g=this.target=l,this.defaultPrevented=!1}It.prototype.h=function(){this.defaultPrevented=!0};var Dr=function(){if(!c.addEventListener||!Object.defineProperty)return!1;var r=!1,l=Object.defineProperty({},"passive",{get:function(){r=!0}});try{const u=()=>{};c.addEventListener("test",u,l),c.removeEventListener("test",u,l)}catch{}return r}();function we(r,l){if(It.call(this,r?r.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,r){var u=this.type=r.type,d=r.changedTouches&&r.changedTouches.length?r.changedTouches[0]:null;if(this.target=r.target||r.srcElement,this.g=l,l=r.relatedTarget){if(Vt){t:{try{Y(l.nodeName);var w=!0;break t}catch{}w=!1}w||(l=null)}}else u=="mouseover"?l=r.fromElement:u=="mouseout"&&(l=r.toElement);this.relatedTarget=l,d?(this.clientX=d.clientX!==void 0?d.clientX:d.pageX,this.clientY=d.clientY!==void 0?d.clientY:d.pageY,this.screenX=d.screenX||0,this.screenY=d.screenY||0):(this.clientX=r.clientX!==void 0?r.clientX:r.pageX,this.clientY=r.clientY!==void 0?r.clientY:r.pageY,this.screenX=r.screenX||0,this.screenY=r.screenY||0),this.button=r.button,this.key=r.key||"",this.ctrlKey=r.ctrlKey,this.altKey=r.altKey,this.shiftKey=r.shiftKey,this.metaKey=r.metaKey,this.pointerId=r.pointerId||0,this.pointerType=typeof r.pointerType=="string"?r.pointerType:Ts[r.pointerType]||"",this.state=r.state,this.i=r,r.defaultPrevented&&we.aa.h.call(this)}}N(we,It);var Ts={2:"touch",3:"pen",4:"mouse"};we.prototype.h=function(){we.aa.h.call(this);var r=this.i;r.preventDefault?r.preventDefault():r.returnValue=!1};var ie="closure_listenable_"+(1e6*Math.random()|0),kn=0;function Nr(r,l,u,d,w){this.listener=r,this.proxy=null,this.src=l,this.type=u,this.capture=!!d,this.ha=w,this.key=++kn,this.da=this.fa=!1}function Be(r){r.da=!0,r.listener=null,r.proxy=null,r.src=null,r.ha=null}function oe(r){this.src=r,this.g={},this.h=0}oe.prototype.add=function(r,l,u,d,w){var P=r.toString();r=this.g[P],r||(r=this.g[P]=[],this.h++);var O=je(r,l,d,w);return-1<O?(l=r[O],u||(l.fa=!1)):(l=new Nr(l,this.src,P,!!d,w),l.fa=u,r.push(l)),l};function qe(r,l){var u=l.type;if(u in r.g){var d=r.g[u],w=Array.prototype.indexOf.call(d,l,void 0),P;(P=0<=w)&&Array.prototype.splice.call(d,w,1),P&&(Be(l),r.g[u].length==0&&(delete r.g[u],r.h--))}}function je(r,l,u,d){for(var w=0;w<r.length;++w){var P=r[w];if(!P.da&&P.listener==l&&P.capture==!!u&&P.ha==d)return w}return-1}var Dn="closure_lm_"+(1e6*Math.random()|0),Nn={};function Es(r,l,u,d,w){if(Array.isArray(l)){for(var P=0;P<l.length;P++)Es(r,l[P],u,d,w);return null}return u=Ps(u),r&&r[ie]?r.K(l,u,f(d)?!!d.capture:!1,w):ws(r,l,u,!1,d,w)}function ws(r,l,u,d,w,P){if(!l)throw Error("Invalid event type");var O=f(w)?!!w.capture:!!w,ct=xn(r);if(ct||(r[Dn]=ct=new oe(r)),u=ct.add(l,u,d,O,P),u.proxy)return u;if(d=As(),u.proxy=d,d.src=r,d.listener=u,r.addEventListener)Dr||(w=O),w===void 0&&(w=!1),r.addEventListener(l.toString(),d,w);else if(r.attachEvent)r.attachEvent(Rs(l.toString()),d);else if(r.addListener&&r.removeListener)r.addListener(d);else throw Error("addEventListener and attachEvent are unavailable.");return u}function As(){function r(u){return l.call(r.src,r.listener,u)}const l=xr;return r}function Is(r,l,u,d,w){if(Array.isArray(l))for(var P=0;P<l.length;P++)Is(r,l[P],u,d,w);else d=f(d)?!!d.capture:!!d,u=Ps(u),r&&r[ie]?(r=r.i,l=String(l).toString(),l in r.g&&(P=r.g[l],u=je(P,u,d,w),-1<u&&(Be(P[u]),Array.prototype.splice.call(P,u,1),P.length==0&&(delete r.g[l],r.h--)))):r&&(r=xn(r))&&(l=r.g[l.toString()],r=-1,l&&(r=je(l,u,d,w)),(u=-1<r?l[r]:null)&&on(u))}function on(r){if(typeof r!="number"&&r&&!r.da){var l=r.src;if(l&&l[ie])qe(l.i,r);else{var u=r.type,d=r.proxy;l.removeEventListener?l.removeEventListener(u,d,r.capture):l.detachEvent?l.detachEvent(Rs(u),d):l.addListener&&l.removeListener&&l.removeListener(d),(u=xn(l))?(qe(u,r),u.h==0&&(u.src=null,l[Dn]=null)):Be(r)}}}function Rs(r){return r in Nn?Nn[r]:Nn[r]="on"+r}function xr(r,l){if(r.da)r=!0;else{l=new we(l,this);var u=r.listener,d=r.ha||r.src;r.fa&&on(r),r=u.call(d,l)}return r}function xn(r){return r=r[Dn],r instanceof oe?r:null}var $e="__closure_events_fn_"+(1e9*Math.random()>>>0);function Ps(r){return typeof r=="function"?r:(r[$e]||(r[$e]=function(l){return r.handleEvent(l)}),r[$e])}function Rt(){xt.call(this),this.i=new oe(this),this.M=this,this.F=null}N(Rt,xt),Rt.prototype[ie]=!0,Rt.prototype.removeEventListener=function(r,l,u,d){Is(this,r,l,u,d)};function Pt(r,l){var u,d=r.F;if(d)for(u=[];d;d=d.F)u.push(d);if(r=r.M,d=l.type||l,typeof l=="string")l=new It(l,r);else if(l instanceof It)l.target=l.target||r;else{var w=l;l=new It(d,r),y(l,w)}if(w=!0,u)for(var P=u.length-1;0<=P;P--){var O=l.g=u[P];w=an(O,d,!0,l)&&w}if(O=l.g=r,w=an(O,d,!0,l)&&w,w=an(O,d,!1,l)&&w,u)for(P=0;P<u.length;P++)O=l.g=u[P],w=an(O,d,!1,l)&&w}Rt.prototype.N=function(){if(Rt.aa.N.call(this),this.i){var r=this.i,l;for(l in r.g){for(var u=r.g[l],d=0;d<u.length;d++)Be(u[d]);delete r.g[l],r.h--}}this.F=null},Rt.prototype.K=function(r,l,u,d){return this.i.add(String(r),l,!1,u,d)},Rt.prototype.L=function(r,l,u,d){return this.i.add(String(r),l,!0,u,d)};function an(r,l,u,d){if(l=r.i.g[String(l)],!l)return!0;l=l.concat();for(var w=!0,P=0;P<l.length;++P){var O=l[P];if(O&&!O.da&&O.capture==u){var ct=O.listener,St=O.ha||O.src;O.fa&&qe(r.i,O),w=ct.call(St,d)!==!1&&w}}return w&&!d.defaultPrevented}function ln(r,l,u){if(typeof r=="function")u&&(r=R(r,u));else if(r&&typeof r.handleEvent=="function")r=R(r.handleEvent,r);else throw Error("Invalid listener argument");return 2147483647<Number(l)?-1:c.setTimeout(r,l||0)}function Cs(r){r.g=ln(()=>{r.g=null,r.i&&(r.i=!1,Cs(r))},r.l);const l=r.h;r.h=null,r.m.apply(null,l)}class Or extends xt{constructor(l,u){super(),this.m=l,this.l=u,this.h=null,this.i=!1,this.g=null}j(l){this.h=arguments,this.g?this.i=!0:Cs(this)}N(){super.N(),this.g&&(c.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function ze(r){xt.call(this),this.h=r,this.g={}}N(ze,xt);var Vs=[];function On(r){ht(r.g,function(l,u){this.g.hasOwnProperty(u)&&on(l)},r),r.g={}}ze.prototype.N=function(){ze.aa.N.call(this),On(this)},ze.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var Mn=c.JSON.stringify,S=c.JSON.parse,I=class{stringify(r){return c.JSON.stringify(r,void 0)}parse(r){return c.JSON.parse(r,void 0)}};function U(){}U.prototype.h=null;function q(r){return r.h||(r.h=r.i())}function it(){}var j={OPEN:"a",kb:"b",Ja:"c",wb:"d"};function et(){It.call(this,"d")}N(et,It);function ot(){It.call(this,"c")}N(ot,It);var dt={},Zt=null;function x(){return Zt=Zt||new Rt}dt.La="serverreachability";function Kt(r){It.call(this,dt.La,r)}N(Kt,It);function nt(r){const l=x();Pt(l,new Kt(l))}dt.STAT_EVENT="statevent";function te(r,l){It.call(this,dt.STAT_EVENT,r),this.stat=l}N(te,It);function ut(r){const l=x();Pt(l,new te(l,r))}dt.Ma="timingevent";function Ht(r,l){It.call(this,dt.Ma,r),this.size=l}N(Ht,It);function de(r,l){if(typeof r!="function")throw Error("Fn must not be null and must be a function");return c.setTimeout(function(){r()},l)}function Ae(){this.g=!0}Ae.prototype.xa=function(){this.g=!1};function Ss(r,l,u,d,w,P){r.info(function(){if(r.g)if(P)for(var O="",ct=P.split("&"),St=0;St<ct.length;St++){var st=ct[St].split("=");if(1<st.length){var Ot=st[0];st=st[1];var Mt=Ot.split("_");O=2<=Mt.length&&Mt[1]=="type"?O+(Ot+"="+st+"&"):O+(Ot+"=redacted&")}}else O=null;else O=P;return"XMLHTTP REQ ("+d+") [attempt "+w+"]: "+l+`
`+u+`
`+O})}function bs(r,l,u,d,w,P,O){r.info(function(){return"XMLHTTP RESP ("+d+") [ attempt "+w+"]: "+l+`
`+u+`
`+P+" "+O})}function fe(r,l,u,d){r.info(function(){return"XMLHTTP TEXT ("+l+"): "+ks(r,u)+(d?" "+d:"")})}function un(r,l){r.info(function(){return"TIMEOUT: "+l})}Ae.prototype.info=function(){};function ks(r,l){if(!r.g)return l;if(!l)return null;try{var u=JSON.parse(l);if(u){for(r=0;r<u.length;r++)if(Array.isArray(u[r])){var d=u[r];if(!(2>d.length)){var w=d[1];if(Array.isArray(w)&&!(1>w.length)){var P=w[0];if(P!="noop"&&P!="stop"&&P!="close")for(var O=1;O<w.length;O++)w[O]=""}}}}return Mn(u)}catch{return l}}var cn={NO_ERROR:0,gb:1,tb:2,sb:3,nb:4,rb:5,ub:6,Ia:7,TIMEOUT:8,xb:9},ao={lb:"complete",Hb:"success",Ja:"error",Ia:"abort",zb:"ready",Ab:"readystatechange",TIMEOUT:"timeout",vb:"incrementaldata",yb:"progress",ob:"downloadprogress",Pb:"uploadprogress"},Mr;function Ds(){}N(Ds,U),Ds.prototype.g=function(){return new XMLHttpRequest},Ds.prototype.i=function(){return{}},Mr=new Ds;function Ie(r,l,u,d){this.j=r,this.i=l,this.l=u,this.R=d||1,this.U=new ze(this),this.I=45e3,this.H=null,this.o=!1,this.m=this.A=this.v=this.L=this.F=this.S=this.B=null,this.D=[],this.g=null,this.C=0,this.s=this.u=null,this.X=-1,this.J=!1,this.O=0,this.M=null,this.W=this.K=this.T=this.P=!1,this.h=new lo}function lo(){this.i=null,this.g="",this.h=!1}var uo={},Lr={};function Fr(r,l,u){r.L=1,r.v=Ms(pe(l)),r.m=u,r.P=!0,co(r,null)}function co(r,l){r.F=Date.now(),Ns(r),r.A=pe(r.v);var u=r.A,d=r.R;Array.isArray(d)||(d=[String(d)]),Ro(u.i,"t",d),r.C=0,u=r.j.J,r.h=new lo,r.g=$o(r.j,u?l:null,!r.m),0<r.O&&(r.M=new Or(R(r.Y,r,r.g),r.O)),l=r.U,u=r.g,d=r.ca;var w="readystatechange";Array.isArray(w)||(w&&(Vs[0]=w.toString()),w=Vs);for(var P=0;P<w.length;P++){var O=Es(u,w[P],d||l.handleEvent,!1,l.h||l);if(!O)break;l.g[O.key]=O}l=r.H?m(r.H):{},r.m?(r.u||(r.u="POST"),l["Content-Type"]="application/x-www-form-urlencoded",r.g.ea(r.A,r.u,r.m,l)):(r.u="GET",r.g.ea(r.A,r.u,null,l)),nt(),Ss(r.i,r.u,r.A,r.l,r.R,r.m)}Ie.prototype.ca=function(r){r=r.target;const l=this.M;l&&me(r)==3?l.j():this.Y(r)},Ie.prototype.Y=function(r){try{if(r==this.g)t:{const Mt=me(this.g);var l=this.g.Ba();const fn=this.g.Z();if(!(3>Mt)&&(Mt!=3||this.g&&(this.h.h||this.g.oa()||Do(this.g)))){this.J||Mt!=4||l==7||(l==8||0>=fn?nt(3):nt(2)),Ur(this);var u=this.g.Z();this.X=u;e:if(ho(this)){var d=Do(this.g);r="";var w=d.length,P=me(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){Ke(this),Ln(this);var O="";break e}this.h.i=new c.TextDecoder}for(l=0;l<w;l++)this.h.h=!0,r+=this.h.i.decode(d[l],{stream:!(P&&l==w-1)});d.length=0,this.h.g+=r,this.C=0,O=this.h.g}else O=this.g.oa();if(this.o=u==200,bs(this.i,this.u,this.A,this.l,this.R,Mt,u),this.o){if(this.T&&!this.K){e:{if(this.g){var ct,St=this.g;if((ct=St.g?St.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!X(ct)){var st=ct;break e}}st=null}if(u=st)fe(this.i,this.l,u,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,Br(this,u);else{this.o=!1,this.s=3,ut(12),Ke(this),Ln(this);break t}}if(this.P){u=!0;let ee;for(;!this.J&&this.C<O.length;)if(ee=Uu(this,O),ee==Lr){Mt==4&&(this.s=4,ut(14),u=!1),fe(this.i,this.l,null,"[Incomplete Response]");break}else if(ee==uo){this.s=4,ut(15),fe(this.i,this.l,O,"[Invalid Chunk]"),u=!1;break}else fe(this.i,this.l,ee,null),Br(this,ee);if(ho(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),Mt!=4||O.length!=0||this.h.h||(this.s=1,ut(16),u=!1),this.o=this.o&&u,!u)fe(this.i,this.l,O,"[Invalid Chunked Response]"),Ke(this),Ln(this);else if(0<O.length&&!this.W){this.W=!0;var Ot=this.j;Ot.g==this&&Ot.ba&&!Ot.M&&(Ot.j.info("Great, no buffering proxy detected. Bytes received: "+O.length),Gr(Ot),Ot.M=!0,ut(11))}}else fe(this.i,this.l,O,null),Br(this,O);Mt==4&&Ke(this),this.o&&!this.J&&(Mt==4?Uo(this.j,this):(this.o=!1,Ns(this)))}else nc(this.g),u==400&&0<O.indexOf("Unknown SID")?(this.s=3,ut(12)):(this.s=0,ut(13)),Ke(this),Ln(this)}}}catch{}finally{}};function ho(r){return r.g?r.u=="GET"&&r.L!=2&&r.j.Ca:!1}function Uu(r,l){var u=r.C,d=l.indexOf(`
`,u);return d==-1?Lr:(u=Number(l.substring(u,d)),isNaN(u)?uo:(d+=1,d+u>l.length?Lr:(l=l.slice(d,d+u),r.C=d+u,l)))}Ie.prototype.cancel=function(){this.J=!0,Ke(this)};function Ns(r){r.S=Date.now()+r.I,fo(r,r.I)}function fo(r,l){if(r.B!=null)throw Error("WatchDog timer not null");r.B=de(R(r.ba,r),l)}function Ur(r){r.B&&(c.clearTimeout(r.B),r.B=null)}Ie.prototype.ba=function(){this.B=null;const r=Date.now();0<=r-this.S?(un(this.i,this.A),this.L!=2&&(nt(),ut(17)),Ke(this),this.s=2,Ln(this)):fo(this,this.S-r)};function Ln(r){r.j.G==0||r.J||Uo(r.j,r)}function Ke(r){Ur(r);var l=r.M;l&&typeof l.ma=="function"&&l.ma(),r.M=null,On(r.U),r.g&&(l=r.g,r.g=null,l.abort(),l.ma())}function Br(r,l){try{var u=r.j;if(u.G!=0&&(u.g==r||qr(u.h,r))){if(!r.K&&qr(u.h,r)&&u.G==3){try{var d=u.Da.g.parse(l)}catch{d=null}if(Array.isArray(d)&&d.length==3){var w=d;if(w[0]==0){t:if(!u.u){if(u.g)if(u.g.F+3e3<r.F)js(u),Bs(u);else break t;Kr(u),ut(18)}}else u.za=w[1],0<u.za-u.T&&37500>w[2]&&u.F&&u.v==0&&!u.C&&(u.C=de(R(u.Za,u),6e3));if(1>=go(u.h)&&u.ca){try{u.ca()}catch{}u.ca=void 0}}else Qe(u,11)}else if((r.K||u.g==r)&&js(u),!X(l))for(w=u.Da.g.parse(l),l=0;l<w.length;l++){let st=w[l];if(u.T=st[0],st=st[1],u.G==2)if(st[0]=="c"){u.K=st[1],u.ia=st[2];const Ot=st[3];Ot!=null&&(u.la=Ot,u.j.info("VER="+u.la));const Mt=st[4];Mt!=null&&(u.Aa=Mt,u.j.info("SVER="+u.Aa));const fn=st[5];fn!=null&&typeof fn=="number"&&0<fn&&(d=1.5*fn,u.L=d,u.j.info("backChannelRequestTimeoutMs_="+d)),d=u;const ee=r.g;if(ee){const zs=ee.g?ee.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(zs){var P=d.h;P.g||zs.indexOf("spdy")==-1&&zs.indexOf("quic")==-1&&zs.indexOf("h2")==-1||(P.j=P.l,P.g=new Set,P.h&&(jr(P,P.h),P.h=null))}if(d.D){const Qr=ee.g?ee.g.getResponseHeader("X-HTTP-Session-Id"):null;Qr&&(d.ya=Qr,ft(d.I,d.D,Qr))}}u.G=3,u.l&&u.l.ua(),u.ba&&(u.R=Date.now()-r.F,u.j.info("Handshake RTT: "+u.R+"ms")),d=u;var O=r;if(d.qa=jo(d,d.J?d.ia:null,d.W),O.K){_o(d.h,O);var ct=O,St=d.L;St&&(ct.I=St),ct.B&&(Ur(ct),Ns(ct)),d.g=O}else Lo(d);0<u.i.length&&qs(u)}else st[0]!="stop"&&st[0]!="close"||Qe(u,7);else u.G==3&&(st[0]=="stop"||st[0]=="close"?st[0]=="stop"?Qe(u,7):zr(u):st[0]!="noop"&&u.l&&u.l.ta(st),u.v=0)}}nt(4)}catch{}}var Bu=class{constructor(r,l){this.g=r,this.map=l}};function po(r){this.l=r||10,c.PerformanceNavigationTiming?(r=c.performance.getEntriesByType("navigation"),r=0<r.length&&(r[0].nextHopProtocol=="hq"||r[0].nextHopProtocol=="h2")):r=!!(c.chrome&&c.chrome.loadTimes&&c.chrome.loadTimes()&&c.chrome.loadTimes().wasFetchedViaSpdy),this.j=r?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}function mo(r){return r.h?!0:r.g?r.g.size>=r.j:!1}function go(r){return r.h?1:r.g?r.g.size:0}function qr(r,l){return r.h?r.h==l:r.g?r.g.has(l):!1}function jr(r,l){r.g?r.g.add(l):r.h=l}function _o(r,l){r.h&&r.h==l?r.h=null:r.g&&r.g.has(l)&&r.g.delete(l)}po.prototype.cancel=function(){if(this.i=yo(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const r of this.g.values())r.cancel();this.g.clear()}};function yo(r){if(r.h!=null)return r.i.concat(r.h.D);if(r.g!=null&&r.g.size!==0){let l=r.i;for(const u of r.g.values())l=l.concat(u.D);return l}return M(r.i)}function qu(r){if(r.V&&typeof r.V=="function")return r.V();if(typeof Map<"u"&&r instanceof Map||typeof Set<"u"&&r instanceof Set)return Array.from(r.values());if(typeof r=="string")return r.split("");if(h(r)){for(var l=[],u=r.length,d=0;d<u;d++)l.push(r[d]);return l}l=[],u=0;for(d in r)l[u++]=r[d];return l}function ju(r){if(r.na&&typeof r.na=="function")return r.na();if(!r.V||typeof r.V!="function"){if(typeof Map<"u"&&r instanceof Map)return Array.from(r.keys());if(!(typeof Set<"u"&&r instanceof Set)){if(h(r)||typeof r=="string"){var l=[];r=r.length;for(var u=0;u<r;u++)l.push(u);return l}l=[],u=0;for(const d in r)l[u++]=d;return l}}}function vo(r,l){if(r.forEach&&typeof r.forEach=="function")r.forEach(l,void 0);else if(h(r)||typeof r=="string")Array.prototype.forEach.call(r,l,void 0);else for(var u=ju(r),d=qu(r),w=d.length,P=0;P<w;P++)l.call(void 0,d[P],u&&u[P],r)}var To=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function $u(r,l){if(r){r=r.split("&");for(var u=0;u<r.length;u++){var d=r[u].indexOf("="),w=null;if(0<=d){var P=r[u].substring(0,d);w=r[u].substring(d+1)}else P=r[u];l(P,w?decodeURIComponent(w.replace(/\+/g," ")):"")}}}function Ge(r){if(this.g=this.o=this.j="",this.s=null,this.m=this.l="",this.h=!1,r instanceof Ge){this.h=r.h,xs(this,r.j),this.o=r.o,this.g=r.g,Os(this,r.s),this.l=r.l;var l=r.i,u=new Bn;u.i=l.i,l.g&&(u.g=new Map(l.g),u.h=l.h),Eo(this,u),this.m=r.m}else r&&(l=String(r).match(To))?(this.h=!1,xs(this,l[1]||"",!0),this.o=Fn(l[2]||""),this.g=Fn(l[3]||"",!0),Os(this,l[4]),this.l=Fn(l[5]||"",!0),Eo(this,l[6]||"",!0),this.m=Fn(l[7]||"")):(this.h=!1,this.i=new Bn(null,this.h))}Ge.prototype.toString=function(){var r=[],l=this.j;l&&r.push(Un(l,wo,!0),":");var u=this.g;return(u||l=="file")&&(r.push("//"),(l=this.o)&&r.push(Un(l,wo,!0),"@"),r.push(encodeURIComponent(String(u)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),u=this.s,u!=null&&r.push(":",String(u))),(u=this.l)&&(this.g&&u.charAt(0)!="/"&&r.push("/"),r.push(Un(u,u.charAt(0)=="/"?Gu:Ku,!0))),(u=this.i.toString())&&r.push("?",u),(u=this.m)&&r.push("#",Un(u,Wu)),r.join("")};function pe(r){return new Ge(r)}function xs(r,l,u){r.j=u?Fn(l,!0):l,r.j&&(r.j=r.j.replace(/:$/,""))}function Os(r,l){if(l){if(l=Number(l),isNaN(l)||0>l)throw Error("Bad port number "+l);r.s=l}else r.s=null}function Eo(r,l,u){l instanceof Bn?(r.i=l,Hu(r.i,r.h)):(u||(l=Un(l,Qu)),r.i=new Bn(l,r.h))}function ft(r,l,u){r.i.set(l,u)}function Ms(r){return ft(r,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),r}function Fn(r,l){return r?l?decodeURI(r.replace(/%25/g,"%2525")):decodeURIComponent(r):""}function Un(r,l,u){return typeof r=="string"?(r=encodeURI(r).replace(l,zu),u&&(r=r.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),r):null}function zu(r){return r=r.charCodeAt(0),"%"+(r>>4&15).toString(16)+(r&15).toString(16)}var wo=/[#\/\?@]/g,Ku=/[#\?:]/g,Gu=/[#\?]/g,Qu=/[#\?@]/g,Wu=/#/g;function Bn(r,l){this.h=this.g=null,this.i=r||null,this.j=!!l}function Re(r){r.g||(r.g=new Map,r.h=0,r.i&&$u(r.i,function(l,u){r.add(decodeURIComponent(l.replace(/\+/g," ")),u)}))}n=Bn.prototype,n.add=function(r,l){Re(this),this.i=null,r=hn(this,r);var u=this.g.get(r);return u||this.g.set(r,u=[]),u.push(l),this.h+=1,this};function Ao(r,l){Re(r),l=hn(r,l),r.g.has(l)&&(r.i=null,r.h-=r.g.get(l).length,r.g.delete(l))}function Io(r,l){return Re(r),l=hn(r,l),r.g.has(l)}n.forEach=function(r,l){Re(this),this.g.forEach(function(u,d){u.forEach(function(w){r.call(l,w,d,this)},this)},this)},n.na=function(){Re(this);const r=Array.from(this.g.values()),l=Array.from(this.g.keys()),u=[];for(let d=0;d<l.length;d++){const w=r[d];for(let P=0;P<w.length;P++)u.push(l[d])}return u},n.V=function(r){Re(this);let l=[];if(typeof r=="string")Io(this,r)&&(l=l.concat(this.g.get(hn(this,r))));else{r=Array.from(this.g.values());for(let u=0;u<r.length;u++)l=l.concat(r[u])}return l},n.set=function(r,l){return Re(this),this.i=null,r=hn(this,r),Io(this,r)&&(this.h-=this.g.get(r).length),this.g.set(r,[l]),this.h+=1,this},n.get=function(r,l){return r?(r=this.V(r),0<r.length?String(r[0]):l):l};function Ro(r,l,u){Ao(r,l),0<u.length&&(r.i=null,r.g.set(hn(r,l),M(u)),r.h+=u.length)}n.toString=function(){if(this.i)return this.i;if(!this.g)return"";const r=[],l=Array.from(this.g.keys());for(var u=0;u<l.length;u++){var d=l[u];const P=encodeURIComponent(String(d)),O=this.V(d);for(d=0;d<O.length;d++){var w=P;O[d]!==""&&(w+="="+encodeURIComponent(String(O[d]))),r.push(w)}}return this.i=r.join("&")};function hn(r,l){return l=String(l),r.j&&(l=l.toLowerCase()),l}function Hu(r,l){l&&!r.j&&(Re(r),r.i=null,r.g.forEach(function(u,d){var w=d.toLowerCase();d!=w&&(Ao(this,d),Ro(this,w,u))},r)),r.j=l}function Xu(r,l){const u=new Ae;if(c.Image){const d=new Image;d.onload=V(Pe,u,"TestLoadImage: loaded",!0,l,d),d.onerror=V(Pe,u,"TestLoadImage: error",!1,l,d),d.onabort=V(Pe,u,"TestLoadImage: abort",!1,l,d),d.ontimeout=V(Pe,u,"TestLoadImage: timeout",!1,l,d),c.setTimeout(function(){d.ontimeout&&d.ontimeout()},1e4),d.src=r}else l(!1)}function Yu(r,l){const u=new Ae,d=new AbortController,w=setTimeout(()=>{d.abort(),Pe(u,"TestPingServer: timeout",!1,l)},1e4);fetch(r,{signal:d.signal}).then(P=>{clearTimeout(w),P.ok?Pe(u,"TestPingServer: ok",!0,l):Pe(u,"TestPingServer: server error",!1,l)}).catch(()=>{clearTimeout(w),Pe(u,"TestPingServer: error",!1,l)})}function Pe(r,l,u,d,w){try{w&&(w.onload=null,w.onerror=null,w.onabort=null,w.ontimeout=null),d(u)}catch{}}function Ju(){this.g=new I}function Zu(r,l,u){const d=u||"";try{vo(r,function(w,P){let O=w;f(w)&&(O=Mn(w)),l.push(d+P+"="+encodeURIComponent(O))})}catch(w){throw l.push(d+"type="+encodeURIComponent("_badmap")),w}}function Ls(r){this.l=r.Ub||null,this.j=r.eb||!1}N(Ls,U),Ls.prototype.g=function(){return new Fs(this.l,this.j)},Ls.prototype.i=function(r){return function(){return r}}({});function Fs(r,l){Rt.call(this),this.D=r,this.o=l,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.u=new Headers,this.h=null,this.B="GET",this.A="",this.g=!1,this.v=this.j=this.l=null}N(Fs,Rt),n=Fs.prototype,n.open=function(r,l){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.B=r,this.A=l,this.readyState=1,jn(this)},n.send=function(r){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const l={headers:this.u,method:this.B,credentials:this.m,cache:void 0};r&&(l.body=r),(this.D||c).fetch(new Request(this.A,l)).then(this.Sa.bind(this),this.ga.bind(this))},n.abort=function(){this.response=this.responseText="",this.u=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,qn(this)),this.readyState=0},n.Sa=function(r){if(this.g&&(this.l=r,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=r.headers,this.readyState=2,jn(this)),this.g&&(this.readyState=3,jn(this),this.g)))if(this.responseType==="arraybuffer")r.arrayBuffer().then(this.Qa.bind(this),this.ga.bind(this));else if(typeof c.ReadableStream<"u"&&"body"in r){if(this.j=r.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.v=new TextDecoder;Po(this)}else r.text().then(this.Ra.bind(this),this.ga.bind(this))};function Po(r){r.j.read().then(r.Pa.bind(r)).catch(r.ga.bind(r))}n.Pa=function(r){if(this.g){if(this.o&&r.value)this.response.push(r.value);else if(!this.o){var l=r.value?r.value:new Uint8Array(0);(l=this.v.decode(l,{stream:!r.done}))&&(this.response=this.responseText+=l)}r.done?qn(this):jn(this),this.readyState==3&&Po(this)}},n.Ra=function(r){this.g&&(this.response=this.responseText=r,qn(this))},n.Qa=function(r){this.g&&(this.response=r,qn(this))},n.ga=function(){this.g&&qn(this)};function qn(r){r.readyState=4,r.l=null,r.j=null,r.v=null,jn(r)}n.setRequestHeader=function(r,l){this.u.append(r,l)},n.getResponseHeader=function(r){return this.h&&this.h.get(r.toLowerCase())||""},n.getAllResponseHeaders=function(){if(!this.h)return"";const r=[],l=this.h.entries();for(var u=l.next();!u.done;)u=u.value,r.push(u[0]+": "+u[1]),u=l.next();return r.join(`\r
`)};function jn(r){r.onreadystatechange&&r.onreadystatechange.call(r)}Object.defineProperty(Fs.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(r){this.m=r?"include":"same-origin"}});function Co(r){let l="";return ht(r,function(u,d){l+=d,l+=":",l+=u,l+=`\r
`}),l}function $r(r,l,u){t:{for(d in u){var d=!1;break t}d=!0}d||(u=Co(u),typeof r=="string"?u!=null&&encodeURIComponent(String(u)):ft(r,l,u))}function _t(r){Rt.call(this),this.headers=new Map,this.o=r||null,this.h=!1,this.v=this.g=null,this.D="",this.m=0,this.l="",this.j=this.B=this.u=this.A=!1,this.I=null,this.H="",this.J=!1}N(_t,Rt);var tc=/^https?$/i,ec=["POST","PUT"];n=_t.prototype,n.Ha=function(r){this.J=r},n.ea=function(r,l,u,d){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+r);l=l?l.toUpperCase():"GET",this.D=r,this.l="",this.m=0,this.A=!1,this.h=!0,this.g=this.o?this.o.g():Mr.g(),this.v=this.o?q(this.o):q(Mr),this.g.onreadystatechange=R(this.Ea,this);try{this.B=!0,this.g.open(l,String(r),!0),this.B=!1}catch(P){Vo(this,P);return}if(r=u||"",u=new Map(this.headers),d)if(Object.getPrototypeOf(d)===Object.prototype)for(var w in d)u.set(w,d[w]);else if(typeof d.keys=="function"&&typeof d.get=="function")for(const P of d.keys())u.set(P,d.get(P));else throw Error("Unknown input type for opt_headers: "+String(d));d=Array.from(u.keys()).find(P=>P.toLowerCase()=="content-type"),w=c.FormData&&r instanceof c.FormData,!(0<=Array.prototype.indexOf.call(ec,l,void 0))||d||w||u.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[P,O]of u)this.g.setRequestHeader(P,O);this.H&&(this.g.responseType=this.H),"withCredentials"in this.g&&this.g.withCredentials!==this.J&&(this.g.withCredentials=this.J);try{ko(this),this.u=!0,this.g.send(r),this.u=!1}catch(P){Vo(this,P)}};function Vo(r,l){r.h=!1,r.g&&(r.j=!0,r.g.abort(),r.j=!1),r.l=l,r.m=5,So(r),Us(r)}function So(r){r.A||(r.A=!0,Pt(r,"complete"),Pt(r,"error"))}n.abort=function(r){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.m=r||7,Pt(this,"complete"),Pt(this,"abort"),Us(this))},n.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),Us(this,!0)),_t.aa.N.call(this)},n.Ea=function(){this.s||(this.B||this.u||this.j?bo(this):this.bb())},n.bb=function(){bo(this)};function bo(r){if(r.h&&typeof a<"u"&&(!r.v[1]||me(r)!=4||r.Z()!=2)){if(r.u&&me(r)==4)ln(r.Ea,0,r);else if(Pt(r,"readystatechange"),me(r)==4){r.h=!1;try{const O=r.Z();t:switch(O){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var l=!0;break t;default:l=!1}var u;if(!(u=l)){var d;if(d=O===0){var w=String(r.D).match(To)[1]||null;!w&&c.self&&c.self.location&&(w=c.self.location.protocol.slice(0,-1)),d=!tc.test(w?w.toLowerCase():"")}u=d}if(u)Pt(r,"complete"),Pt(r,"success");else{r.m=6;try{var P=2<me(r)?r.g.statusText:""}catch{P=""}r.l=P+" ["+r.Z()+"]",So(r)}}finally{Us(r)}}}}function Us(r,l){if(r.g){ko(r);const u=r.g,d=r.v[0]?()=>{}:null;r.g=null,r.v=null,l||Pt(r,"ready");try{u.onreadystatechange=d}catch{}}}function ko(r){r.I&&(c.clearTimeout(r.I),r.I=null)}n.isActive=function(){return!!this.g};function me(r){return r.g?r.g.readyState:0}n.Z=function(){try{return 2<me(this)?this.g.status:-1}catch{return-1}},n.oa=function(){try{return this.g?this.g.responseText:""}catch{return""}},n.Oa=function(r){if(this.g){var l=this.g.responseText;return r&&l.indexOf(r)==0&&(l=l.substring(r.length)),S(l)}};function Do(r){try{if(!r.g)return null;if("response"in r.g)return r.g.response;switch(r.H){case"":case"text":return r.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in r.g)return r.g.mozResponseArrayBuffer}return null}catch{return null}}function nc(r){const l={};r=(r.g&&2<=me(r)&&r.g.getAllResponseHeaders()||"").split(`\r
`);for(let d=0;d<r.length;d++){if(X(r[d]))continue;var u=T(r[d]);const w=u[0];if(u=u[1],typeof u!="string")continue;u=u.trim();const P=l[w]||[];l[w]=P,P.push(u)}v(l,function(d){return d.join(", ")})}n.Ba=function(){return this.m},n.Ka=function(){return typeof this.l=="string"?this.l:String(this.l)};function $n(r,l,u){return u&&u.internalChannelParams&&u.internalChannelParams[r]||l}function No(r){this.Aa=0,this.i=[],this.j=new Ae,this.ia=this.qa=this.I=this.W=this.g=this.ya=this.D=this.H=this.m=this.S=this.o=null,this.Ya=this.U=0,this.Va=$n("failFast",!1,r),this.F=this.C=this.u=this.s=this.l=null,this.X=!0,this.za=this.T=-1,this.Y=this.v=this.B=0,this.Ta=$n("baseRetryDelayMs",5e3,r),this.cb=$n("retryDelaySeedMs",1e4,r),this.Wa=$n("forwardChannelMaxRetries",2,r),this.wa=$n("forwardChannelRequestTimeoutMs",2e4,r),this.pa=r&&r.xmlHttpFactory||void 0,this.Xa=r&&r.Tb||void 0,this.Ca=r&&r.useFetchStreams||!1,this.L=void 0,this.J=r&&r.supportsCrossDomainXhr||!1,this.K="",this.h=new po(r&&r.concurrentRequestLimit),this.Da=new Ju,this.P=r&&r.fastHandshake||!1,this.O=r&&r.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.Ua=r&&r.Rb||!1,r&&r.xa&&this.j.xa(),r&&r.forceLongPolling&&(this.X=!1),this.ba=!this.P&&this.X&&r&&r.detectBufferingProxy||!1,this.ja=void 0,r&&r.longPollingTimeout&&0<r.longPollingTimeout&&(this.ja=r.longPollingTimeout),this.ca=void 0,this.R=0,this.M=!1,this.ka=this.A=null}n=No.prototype,n.la=8,n.G=1,n.connect=function(r,l,u,d){ut(0),this.W=r,this.H=l||{},u&&d!==void 0&&(this.H.OSID=u,this.H.OAID=d),this.F=this.X,this.I=jo(this,null,this.W),qs(this)};function zr(r){if(xo(r),r.G==3){var l=r.U++,u=pe(r.I);if(ft(u,"SID",r.K),ft(u,"RID",l),ft(u,"TYPE","terminate"),zn(r,u),l=new Ie(r,r.j,l),l.L=2,l.v=Ms(pe(u)),u=!1,c.navigator&&c.navigator.sendBeacon)try{u=c.navigator.sendBeacon(l.v.toString(),"")}catch{}!u&&c.Image&&(new Image().src=l.v,u=!0),u||(l.g=$o(l.j,null),l.g.ea(l.v)),l.F=Date.now(),Ns(l)}qo(r)}function Bs(r){r.g&&(Gr(r),r.g.cancel(),r.g=null)}function xo(r){Bs(r),r.u&&(c.clearTimeout(r.u),r.u=null),js(r),r.h.cancel(),r.s&&(typeof r.s=="number"&&c.clearTimeout(r.s),r.s=null)}function qs(r){if(!mo(r.h)&&!r.s){r.s=!0;var l=r.Ga;zt||vs(),Ee||(zt(),Ee=!0),bn.add(l,r),r.B=0}}function sc(r,l){return go(r.h)>=r.h.j-(r.s?1:0)?!1:r.s?(r.i=l.D.concat(r.i),!0):r.G==1||r.G==2||r.B>=(r.Va?0:r.Wa)?!1:(r.s=de(R(r.Ga,r,l),Bo(r,r.B)),r.B++,!0)}n.Ga=function(r){if(this.s)if(this.s=null,this.G==1){if(!r){this.U=Math.floor(1e5*Math.random()),r=this.U++;const w=new Ie(this,this.j,r);let P=this.o;if(this.S&&(P?(P=m(P),y(P,this.S)):P=this.S),this.m!==null||this.O||(w.H=P,P=null),this.P)t:{for(var l=0,u=0;u<this.i.length;u++){e:{var d=this.i[u];if("__data__"in d.map&&(d=d.map.__data__,typeof d=="string")){d=d.length;break e}d=void 0}if(d===void 0)break;if(l+=d,4096<l){l=u;break t}if(l===4096||u===this.i.length-1){l=u+1;break t}}l=1e3}else l=1e3;l=Mo(this,w,l),u=pe(this.I),ft(u,"RID",r),ft(u,"CVER",22),this.D&&ft(u,"X-HTTP-Session-Id",this.D),zn(this,u),P&&(this.O?l="headers="+encodeURIComponent(String(Co(P)))+"&"+l:this.m&&$r(u,this.m,P)),jr(this.h,w),this.Ua&&ft(u,"TYPE","init"),this.P?(ft(u,"$req",l),ft(u,"SID","null"),w.T=!0,Fr(w,u,null)):Fr(w,u,l),this.G=2}}else this.G==3&&(r?Oo(this,r):this.i.length==0||mo(this.h)||Oo(this))};function Oo(r,l){var u;l?u=l.l:u=r.U++;const d=pe(r.I);ft(d,"SID",r.K),ft(d,"RID",u),ft(d,"AID",r.T),zn(r,d),r.m&&r.o&&$r(d,r.m,r.o),u=new Ie(r,r.j,u,r.B+1),r.m===null&&(u.H=r.o),l&&(r.i=l.D.concat(r.i)),l=Mo(r,u,1e3),u.I=Math.round(.5*r.wa)+Math.round(.5*r.wa*Math.random()),jr(r.h,u),Fr(u,d,l)}function zn(r,l){r.H&&ht(r.H,function(u,d){ft(l,d,u)}),r.l&&vo({},function(u,d){ft(l,d,u)})}function Mo(r,l,u){u=Math.min(r.i.length,u);var d=r.l?R(r.l.Na,r.l,r):null;t:{var w=r.i;let P=-1;for(;;){const O=["count="+u];P==-1?0<u?(P=w[0].g,O.push("ofs="+P)):P=0:O.push("ofs="+P);let ct=!0;for(let St=0;St<u;St++){let st=w[St].g;const Ot=w[St].map;if(st-=P,0>st)P=Math.max(0,w[St].g-100),ct=!1;else try{Zu(Ot,O,"req"+st+"_")}catch{d&&d(Ot)}}if(ct){d=O.join("&");break t}}}return r=r.i.splice(0,u),l.D=r,d}function Lo(r){if(!r.g&&!r.u){r.Y=1;var l=r.Fa;zt||vs(),Ee||(zt(),Ee=!0),bn.add(l,r),r.v=0}}function Kr(r){return r.g||r.u||3<=r.v?!1:(r.Y++,r.u=de(R(r.Fa,r),Bo(r,r.v)),r.v++,!0)}n.Fa=function(){if(this.u=null,Fo(this),this.ba&&!(this.M||this.g==null||0>=this.R)){var r=2*this.R;this.j.info("BP detection timer enabled: "+r),this.A=de(R(this.ab,this),r)}},n.ab=function(){this.A&&(this.A=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.M=!0,ut(10),Bs(this),Fo(this))};function Gr(r){r.A!=null&&(c.clearTimeout(r.A),r.A=null)}function Fo(r){r.g=new Ie(r,r.j,"rpc",r.Y),r.m===null&&(r.g.H=r.o),r.g.O=0;var l=pe(r.qa);ft(l,"RID","rpc"),ft(l,"SID",r.K),ft(l,"AID",r.T),ft(l,"CI",r.F?"0":"1"),!r.F&&r.ja&&ft(l,"TO",r.ja),ft(l,"TYPE","xmlhttp"),zn(r,l),r.m&&r.o&&$r(l,r.m,r.o),r.L&&(r.g.I=r.L);var u=r.g;r=r.ia,u.L=1,u.v=Ms(pe(l)),u.m=null,u.P=!0,co(u,r)}n.Za=function(){this.C!=null&&(this.C=null,Bs(this),Kr(this),ut(19))};function js(r){r.C!=null&&(c.clearTimeout(r.C),r.C=null)}function Uo(r,l){var u=null;if(r.g==l){js(r),Gr(r),r.g=null;var d=2}else if(qr(r.h,l))u=l.D,_o(r.h,l),d=1;else return;if(r.G!=0){if(l.o)if(d==1){u=l.m?l.m.length:0,l=Date.now()-l.F;var w=r.B;d=x(),Pt(d,new Ht(d,u)),qs(r)}else Lo(r);else if(w=l.s,w==3||w==0&&0<l.X||!(d==1&&sc(r,l)||d==2&&Kr(r)))switch(u&&0<u.length&&(l=r.h,l.i=l.i.concat(u)),w){case 1:Qe(r,5);break;case 4:Qe(r,10);break;case 3:Qe(r,6);break;default:Qe(r,2)}}}function Bo(r,l){let u=r.Ta+Math.floor(Math.random()*r.cb);return r.isActive()||(u*=2),u*l}function Qe(r,l){if(r.j.info("Error code "+l),l==2){var u=R(r.fb,r),d=r.Xa;const w=!d;d=new Ge(d||"//www.google.com/images/cleardot.gif"),c.location&&c.location.protocol=="http"||xs(d,"https"),Ms(d),w?Xu(d.toString(),u):Yu(d.toString(),u)}else ut(2);r.G=0,r.l&&r.l.sa(l),qo(r),xo(r)}n.fb=function(r){r?(this.j.info("Successfully pinged google.com"),ut(2)):(this.j.info("Failed to ping google.com"),ut(1))};function qo(r){if(r.G=0,r.ka=[],r.l){const l=yo(r.h);(l.length!=0||r.i.length!=0)&&(D(r.ka,l),D(r.ka,r.i),r.h.i.length=0,M(r.i),r.i.length=0),r.l.ra()}}function jo(r,l,u){var d=u instanceof Ge?pe(u):new Ge(u);if(d.g!="")l&&(d.g=l+"."+d.g),Os(d,d.s);else{var w=c.location;d=w.protocol,l=l?l+"."+w.hostname:w.hostname,w=+w.port;var P=new Ge(null);d&&xs(P,d),l&&(P.g=l),w&&Os(P,w),u&&(P.l=u),d=P}return u=r.D,l=r.ya,u&&l&&ft(d,u,l),ft(d,"VER",r.la),zn(r,d),d}function $o(r,l,u){if(l&&!r.J)throw Error("Can't create secondary domain capable XhrIo object.");return l=r.Ca&&!r.pa?new _t(new Ls({eb:u})):new _t(r.pa),l.Ha(r.J),l}n.isActive=function(){return!!this.l&&this.l.isActive(this)};function zo(){}n=zo.prototype,n.ua=function(){},n.ta=function(){},n.sa=function(){},n.ra=function(){},n.isActive=function(){return!0},n.Na=function(){};function $s(){}$s.prototype.g=function(r,l){return new Gt(r,l)};function Gt(r,l){Rt.call(this),this.g=new No(l),this.l=r,this.h=l&&l.messageUrlParams||null,r=l&&l.messageHeaders||null,l&&l.clientProtocolHeaderRequired&&(r?r["X-Client-Protocol"]="webchannel":r={"X-Client-Protocol":"webchannel"}),this.g.o=r,r=l&&l.initMessageHeaders||null,l&&l.messageContentType&&(r?r["X-WebChannel-Content-Type"]=l.messageContentType:r={"X-WebChannel-Content-Type":l.messageContentType}),l&&l.va&&(r?r["X-WebChannel-Client-Profile"]=l.va:r={"X-WebChannel-Client-Profile":l.va}),this.g.S=r,(r=l&&l.Sb)&&!X(r)&&(this.g.m=r),this.v=l&&l.supportsCrossDomainXhr||!1,this.u=l&&l.sendRawJson||!1,(l=l&&l.httpSessionIdParam)&&!X(l)&&(this.g.D=l,r=this.h,r!==null&&l in r&&(r=this.h,l in r&&delete r[l])),this.j=new dn(this)}N(Gt,Rt),Gt.prototype.m=function(){this.g.l=this.j,this.v&&(this.g.J=!0),this.g.connect(this.l,this.h||void 0)},Gt.prototype.close=function(){zr(this.g)},Gt.prototype.o=function(r){var l=this.g;if(typeof r=="string"){var u={};u.__data__=r,r=u}else this.u&&(u={},u.__data__=Mn(r),r=u);l.i.push(new Bu(l.Ya++,r)),l.G==3&&qs(l)},Gt.prototype.N=function(){this.g.l=null,delete this.j,zr(this.g),delete this.g,Gt.aa.N.call(this)};function Ko(r){et.call(this),r.__headers__&&(this.headers=r.__headers__,this.statusCode=r.__status__,delete r.__headers__,delete r.__status__);var l=r.__sm__;if(l){t:{for(const u in l){r=u;break t}r=void 0}(this.i=r)&&(r=this.i,l=l!==null&&r in l?l[r]:void 0),this.data=l}else this.data=r}N(Ko,et);function Go(){ot.call(this),this.status=1}N(Go,ot);function dn(r){this.g=r}N(dn,zo),dn.prototype.ua=function(){Pt(this.g,"a")},dn.prototype.ta=function(r){Pt(this.g,new Ko(r))},dn.prototype.sa=function(r){Pt(this.g,new Go)},dn.prototype.ra=function(){Pt(this.g,"b")},$s.prototype.createWebChannel=$s.prototype.g,Gt.prototype.send=Gt.prototype.o,Gt.prototype.open=Gt.prototype.m,Gt.prototype.close=Gt.prototype.close,rl=function(){return new $s},sl=function(){return x()},nl=dt,ni={mb:0,pb:1,qb:2,Jb:3,Ob:4,Lb:5,Mb:6,Kb:7,Ib:8,Nb:9,PROXY:10,NOPROXY:11,Gb:12,Cb:13,Db:14,Bb:15,Eb:16,Fb:17,ib:18,hb:19,jb:20},cn.NO_ERROR=0,cn.TIMEOUT=8,cn.HTTP_ERROR=6,tr=cn,ao.COMPLETE="complete",el=ao,it.EventType=j,j.OPEN="a",j.CLOSE="b",j.ERROR="c",j.MESSAGE="d",Rt.prototype.listen=Rt.prototype.K,Hn=it,_t.prototype.listenOnce=_t.prototype.L,_t.prototype.getLastError=_t.prototype.Ka,_t.prototype.getLastErrorCode=_t.prototype.Ba,_t.prototype.getStatus=_t.prototype.Z,_t.prototype.getResponseJson=_t.prototype.Oa,_t.prototype.getResponseText=_t.prototype.oa,_t.prototype.send=_t.prototype.ea,_t.prototype.setWithCredentials=_t.prototype.Ha,tl=_t}).apply(typeof Qs<"u"?Qs:typeof self<"u"?self:typeof window<"u"?window:{});const Jo="@firebase/firestore";/**
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
 */class Ft{constructor(t){this.uid=t}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(t){return t.uid===this.uid}}Ft.UNAUTHENTICATED=new Ft(null),Ft.GOOGLE_CREDENTIALS=new Ft("google-credentials-uid"),Ft.FIRST_PARTY=new Ft("first-party-uid"),Ft.MOCK_USER=new Ft("mock-user");/**
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
 */let Pn="10.14.0";/**
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
 */const Ze=new ic("@firebase/firestore");function Qn(){return Ze.logLevel}function F(n,...t){if(Ze.logLevel<=Se.DEBUG){const e=t.map(vi);Ze.debug(`Firestore (${Pn}): ${n}`,...e)}}function ve(n,...t){if(Ze.logLevel<=Se.ERROR){const e=t.map(vi);Ze.error(`Firestore (${Pn}): ${n}`,...e)}}function vn(n,...t){if(Ze.logLevel<=Se.WARN){const e=t.map(vi);Ze.warn(`Firestore (${Pn}): ${n}`,...e)}}function vi(n){if(typeof n=="string")return n;try{/**
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
 */function $(n="Unexpected state"){const t=`FIRESTORE (${Pn}) INTERNAL ASSERTION FAILED: `+n;throw ve(t),new Error(t)}function at(n,t){n||$()}function W(n,t){return n}/**
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
 */const b={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class L extends Ha{constructor(t,e){super(t,e),this.code=t,this.message=e,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
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
 */class De{constructor(){this.promise=new Promise((t,e)=>{this.resolve=t,this.reject=e})}}/**
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
 */class il{constructor(t,e){this.user=e,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${t}`)}}class yc{getToken(){return Promise.resolve(null)}invalidateToken(){}start(t,e){t.enqueueRetryable(()=>e(Ft.UNAUTHENTICATED))}shutdown(){}}class vc{constructor(t){this.token=t,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(t,e){this.changeListener=e,t.enqueueRetryable(()=>e(this.token.user))}shutdown(){this.changeListener=null}}class Tc{constructor(t){this.t=t,this.currentUser=Ft.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(t,e){at(this.o===void 0);let s=this.i;const i=h=>this.i!==s?(s=this.i,e(h)):Promise.resolve();let o=new De;this.o=()=>{this.i++,this.currentUser=this.u(),o.resolve(),o=new De,t.enqueueRetryable(()=>i(this.currentUser))};const a=()=>{const h=o;t.enqueueRetryable(async()=>{await h.promise,await i(this.currentUser)})},c=h=>{F("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=h,this.o&&(this.auth.addAuthTokenListener(this.o),a())};this.t.onInit(h=>c(h)),setTimeout(()=>{if(!this.auth){const h=this.t.getImmediate({optional:!0});h?c(h):(F("FirebaseAuthCredentialsProvider","Auth not yet detected"),o.resolve(),o=new De)}},0),a()}getToken(){const t=this.i,e=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(e).then(s=>this.i!==t?(F("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):s?(at(typeof s.accessToken=="string"),new il(s.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const t=this.auth&&this.auth.getUid();return at(t===null||typeof t=="string"),new Ft(t)}}class Ec{constructor(t,e,s){this.l=t,this.h=e,this.P=s,this.type="FirstParty",this.user=Ft.FIRST_PARTY,this.I=new Map}T(){return this.P?this.P():null}get headers(){this.I.set("X-Goog-AuthUser",this.l);const t=this.T();return t&&this.I.set("Authorization",t),this.h&&this.I.set("X-Goog-Iam-Authorization-Token",this.h),this.I}}class wc{constructor(t,e,s){this.l=t,this.h=e,this.P=s}getToken(){return Promise.resolve(new Ec(this.l,this.h,this.P))}start(t,e){t.enqueueRetryable(()=>e(Ft.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class Ac{constructor(t){this.value=t,this.type="AppCheck",this.headers=new Map,t&&t.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class Ic{constructor(t){this.A=t,this.forceRefresh=!1,this.appCheck=null,this.R=null}start(t,e){at(this.o===void 0);const s=o=>{o.error!=null&&F("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${o.error.message}`);const a=o.token!==this.R;return this.R=o.token,F("FirebaseAppCheckTokenProvider",`Received ${a?"new":"existing"} token.`),a?e(o.token):Promise.resolve()};this.o=o=>{t.enqueueRetryable(()=>s(o))};const i=o=>{F("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=o,this.o&&this.appCheck.addTokenListener(this.o)};this.A.onInit(o=>i(o)),setTimeout(()=>{if(!this.appCheck){const o=this.A.getImmediate({optional:!0});o?i(o):F("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const t=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(t).then(e=>e?(at(typeof e.token=="string"),this.R=e.token,new Ac(e.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
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
 */function Rc(n){const t=typeof self<"u"&&(self.crypto||self.msCrypto),e=new Uint8Array(n);if(t&&typeof t.getRandomValues=="function")t.getRandomValues(e);else for(let s=0;s<n;s++)e[s]=Math.floor(256*Math.random());return e}/**
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
 */class ol{static newId(){const t="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",e=Math.floor(256/t.length)*t.length;let s="";for(;s.length<20;){const i=Rc(40);for(let o=0;o<i.length;++o)s.length<20&&i[o]<e&&(s+=t.charAt(i[o]%t.length))}return s}}function rt(n,t){return n<t?-1:n>t?1:0}function Tn(n,t,e){return n.length===t.length&&n.every((s,i)=>e(s,t[i]))}/**
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
 */class At{constructor(t,e){if(this.seconds=t,this.nanoseconds=e,e<0)throw new L(b.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+e);if(e>=1e9)throw new L(b.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+e);if(t<-62135596800)throw new L(b.INVALID_ARGUMENT,"Timestamp seconds out of range: "+t);if(t>=253402300800)throw new L(b.INVALID_ARGUMENT,"Timestamp seconds out of range: "+t)}static now(){return At.fromMillis(Date.now())}static fromDate(t){return At.fromMillis(t.getTime())}static fromMillis(t){const e=Math.floor(t/1e3),s=Math.floor(1e6*(t-1e3*e));return new At(e,s)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(t){return this.seconds===t.seconds?rt(this.nanoseconds,t.nanoseconds):rt(this.seconds,t.seconds)}isEqual(t){return t.seconds===this.seconds&&t.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const t=this.seconds- -62135596800;return String(t).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
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
 */class Q{constructor(t){this.timestamp=t}static fromTimestamp(t){return new Q(t)}static min(){return new Q(new At(0,0))}static max(){return new Q(new At(253402300799,999999999))}compareTo(t){return this.timestamp._compareTo(t.timestamp)}isEqual(t){return this.timestamp.isEqual(t.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
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
 */class rs{constructor(t,e,s){e===void 0?e=0:e>t.length&&$(),s===void 0?s=t.length-e:s>t.length-e&&$(),this.segments=t,this.offset=e,this.len=s}get length(){return this.len}isEqual(t){return rs.comparator(this,t)===0}child(t){const e=this.segments.slice(this.offset,this.limit());return t instanceof rs?t.forEach(s=>{e.push(s)}):e.push(t),this.construct(e)}limit(){return this.offset+this.length}popFirst(t){return t=t===void 0?1:t,this.construct(this.segments,this.offset+t,this.length-t)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(t){return this.segments[this.offset+t]}isEmpty(){return this.length===0}isPrefixOf(t){if(t.length<this.length)return!1;for(let e=0;e<this.length;e++)if(this.get(e)!==t.get(e))return!1;return!0}isImmediateParentOf(t){if(this.length+1!==t.length)return!1;for(let e=0;e<this.length;e++)if(this.get(e)!==t.get(e))return!1;return!0}forEach(t){for(let e=this.offset,s=this.limit();e<s;e++)t(this.segments[e])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(t,e){const s=Math.min(t.length,e.length);for(let i=0;i<s;i++){const o=t.get(i),a=e.get(i);if(o<a)return-1;if(o>a)return 1}return t.length<e.length?-1:t.length>e.length?1:0}}class pt extends rs{construct(t,e,s){return new pt(t,e,s)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...t){const e=[];for(const s of t){if(s.indexOf("//")>=0)throw new L(b.INVALID_ARGUMENT,`Invalid segment (${s}). Paths must not contain // in them.`);e.push(...s.split("/").filter(i=>i.length>0))}return new pt(e)}static emptyPath(){return new pt([])}}const Pc=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class kt extends rs{construct(t,e,s){return new kt(t,e,s)}static isValidIdentifier(t){return Pc.test(t)}canonicalString(){return this.toArray().map(t=>(t=t.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),kt.isValidIdentifier(t)||(t="`"+t+"`"),t)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new kt(["__name__"])}static fromServerFormat(t){const e=[];let s="",i=0;const o=()=>{if(s.length===0)throw new L(b.INVALID_ARGUMENT,`Invalid field path (${t}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);e.push(s),s=""};let a=!1;for(;i<t.length;){const c=t[i];if(c==="\\"){if(i+1===t.length)throw new L(b.INVALID_ARGUMENT,"Path has trailing escape character: "+t);const h=t[i+1];if(h!=="\\"&&h!=="."&&h!=="`")throw new L(b.INVALID_ARGUMENT,"Path has invalid escape sequence: "+t);s+=h,i+=2}else c==="`"?(a=!a,i++):c!=="."||a?(s+=c,i++):(o(),i++)}if(o(),a)throw new L(b.INVALID_ARGUMENT,"Unterminated ` in path: "+t);return new kt(e)}static emptyPath(){return new kt([])}}/**
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
 */class B{constructor(t){this.path=t}static fromPath(t){return new B(pt.fromString(t))}static fromName(t){return new B(pt.fromString(t).popFirst(5))}static empty(){return new B(pt.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(t){return this.path.length>=2&&this.path.get(this.path.length-2)===t}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(t){return t!==null&&pt.comparator(this.path,t.path)===0}toString(){return this.path.toString()}static comparator(t,e){return pt.comparator(t.path,e.path)}static isDocumentKey(t){return t.length%2==0}static fromSegments(t){return new B(new pt(t.slice()))}}function Cc(n,t){const e=n.toTimestamp().seconds,s=n.toTimestamp().nanoseconds+1,i=Q.fromTimestamp(s===1e9?new At(e+1,0):new At(e,s));return new xe(i,B.empty(),t)}function Vc(n){return new xe(n.readTime,n.key,-1)}class xe{constructor(t,e,s){this.readTime=t,this.documentKey=e,this.largestBatchId=s}static min(){return new xe(Q.min(),B.empty(),-1)}static max(){return new xe(Q.max(),B.empty(),-1)}}function Sc(n,t){let e=n.readTime.compareTo(t.readTime);return e!==0?e:(e=B.comparator(n.documentKey,t.documentKey),e!==0?e:rt(n.largestBatchId,t.largestBatchId))}/**
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
 */const bc="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class kc{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(t){this.onCommittedListeners.push(t)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(t=>t())}}/**
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
 */async function ds(n){if(n.code!==b.FAILED_PRECONDITION||n.message!==bc)throw n;F("LocalStore","Unexpectedly lost primary lease")}/**
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
 */class k{constructor(t){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,t(e=>{this.isDone=!0,this.result=e,this.nextCallback&&this.nextCallback(e)},e=>{this.isDone=!0,this.error=e,this.catchCallback&&this.catchCallback(e)})}catch(t){return this.next(void 0,t)}next(t,e){return this.callbackAttached&&$(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(e,this.error):this.wrapSuccess(t,this.result):new k((s,i)=>{this.nextCallback=o=>{this.wrapSuccess(t,o).next(s,i)},this.catchCallback=o=>{this.wrapFailure(e,o).next(s,i)}})}toPromise(){return new Promise((t,e)=>{this.next(t,e)})}wrapUserFunction(t){try{const e=t();return e instanceof k?e:k.resolve(e)}catch(e){return k.reject(e)}}wrapSuccess(t,e){return t?this.wrapUserFunction(()=>t(e)):k.resolve(e)}wrapFailure(t,e){return t?this.wrapUserFunction(()=>t(e)):k.reject(e)}static resolve(t){return new k((e,s)=>{e(t)})}static reject(t){return new k((e,s)=>{s(t)})}static waitFor(t){return new k((e,s)=>{let i=0,o=0,a=!1;t.forEach(c=>{++i,c.next(()=>{++o,a&&o===i&&e()},h=>s(h))}),a=!0,o===i&&e()})}static or(t){let e=k.resolve(!1);for(const s of t)e=e.next(i=>i?k.resolve(i):s());return e}static forEach(t,e){const s=[];return t.forEach((i,o)=>{s.push(e.call(this,i,o))}),this.waitFor(s)}static mapArray(t,e){return new k((s,i)=>{const o=t.length,a=new Array(o);let c=0;for(let h=0;h<o;h++){const f=h;e(t[f]).next(p=>{a[f]=p,++c,c===o&&s(a)},p=>i(p))}})}static doWhile(t,e){return new k((s,i)=>{const o=()=>{t()===!0?e().next(()=>{o()},i):s()};o()})}}function Dc(n){const t=n.match(/Android ([\d.]+)/i),e=t?t[1].split(".").slice(0,2).join("."):"-1";return Number(e)}function fs(n){return n.name==="IndexedDbTransactionError"}/**
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
 */class Ti{constructor(t,e){this.previousValue=t,e&&(e.sequenceNumberHandler=s=>this.ie(s),this.se=s=>e.writeSequenceNumber(s))}ie(t){return this.previousValue=Math.max(t,this.previousValue),this.previousValue}next(){const t=++this.previousValue;return this.se&&this.se(t),t}}Ti.oe=-1;function pr(n){return n==null}function or(n){return n===0&&1/n==-1/0}function Nc(n){return typeof n=="number"&&Number.isInteger(n)&&!or(n)&&n<=Number.MAX_SAFE_INTEGER&&n>=Number.MIN_SAFE_INTEGER}/**
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
 */function Zo(n){let t=0;for(const e in n)Object.prototype.hasOwnProperty.call(n,e)&&t++;return t}function sn(n,t){for(const e in n)Object.prototype.hasOwnProperty.call(n,e)&&t(e,n[e])}function al(n){for(const t in n)if(Object.prototype.hasOwnProperty.call(n,t))return!1;return!0}/**
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
 */class gt{constructor(t,e){this.comparator=t,this.root=e||bt.EMPTY}insert(t,e){return new gt(this.comparator,this.root.insert(t,e,this.comparator).copy(null,null,bt.BLACK,null,null))}remove(t){return new gt(this.comparator,this.root.remove(t,this.comparator).copy(null,null,bt.BLACK,null,null))}get(t){let e=this.root;for(;!e.isEmpty();){const s=this.comparator(t,e.key);if(s===0)return e.value;s<0?e=e.left:s>0&&(e=e.right)}return null}indexOf(t){let e=0,s=this.root;for(;!s.isEmpty();){const i=this.comparator(t,s.key);if(i===0)return e+s.left.size;i<0?s=s.left:(e+=s.left.size+1,s=s.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(t){return this.root.inorderTraversal(t)}forEach(t){this.inorderTraversal((e,s)=>(t(e,s),!1))}toString(){const t=[];return this.inorderTraversal((e,s)=>(t.push(`${e}:${s}`),!1)),`{${t.join(", ")}}`}reverseTraversal(t){return this.root.reverseTraversal(t)}getIterator(){return new Ws(this.root,null,this.comparator,!1)}getIteratorFrom(t){return new Ws(this.root,t,this.comparator,!1)}getReverseIterator(){return new Ws(this.root,null,this.comparator,!0)}getReverseIteratorFrom(t){return new Ws(this.root,t,this.comparator,!0)}}class Ws{constructor(t,e,s,i){this.isReverse=i,this.nodeStack=[];let o=1;for(;!t.isEmpty();)if(o=e?s(t.key,e):1,e&&i&&(o*=-1),o<0)t=this.isReverse?t.left:t.right;else{if(o===0){this.nodeStack.push(t);break}this.nodeStack.push(t),t=this.isReverse?t.right:t.left}}getNext(){let t=this.nodeStack.pop();const e={key:t.key,value:t.value};if(this.isReverse)for(t=t.left;!t.isEmpty();)this.nodeStack.push(t),t=t.right;else for(t=t.right;!t.isEmpty();)this.nodeStack.push(t),t=t.left;return e}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const t=this.nodeStack[this.nodeStack.length-1];return{key:t.key,value:t.value}}}class bt{constructor(t,e,s,i,o){this.key=t,this.value=e,this.color=s??bt.RED,this.left=i??bt.EMPTY,this.right=o??bt.EMPTY,this.size=this.left.size+1+this.right.size}copy(t,e,s,i,o){return new bt(t??this.key,e??this.value,s??this.color,i??this.left,o??this.right)}isEmpty(){return!1}inorderTraversal(t){return this.left.inorderTraversal(t)||t(this.key,this.value)||this.right.inorderTraversal(t)}reverseTraversal(t){return this.right.reverseTraversal(t)||t(this.key,this.value)||this.left.reverseTraversal(t)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(t,e,s){let i=this;const o=s(t,i.key);return i=o<0?i.copy(null,null,null,i.left.insert(t,e,s),null):o===0?i.copy(null,e,null,null,null):i.copy(null,null,null,null,i.right.insert(t,e,s)),i.fixUp()}removeMin(){if(this.left.isEmpty())return bt.EMPTY;let t=this;return t.left.isRed()||t.left.left.isRed()||(t=t.moveRedLeft()),t=t.copy(null,null,null,t.left.removeMin(),null),t.fixUp()}remove(t,e){let s,i=this;if(e(t,i.key)<0)i.left.isEmpty()||i.left.isRed()||i.left.left.isRed()||(i=i.moveRedLeft()),i=i.copy(null,null,null,i.left.remove(t,e),null);else{if(i.left.isRed()&&(i=i.rotateRight()),i.right.isEmpty()||i.right.isRed()||i.right.left.isRed()||(i=i.moveRedRight()),e(t,i.key)===0){if(i.right.isEmpty())return bt.EMPTY;s=i.right.min(),i=i.copy(s.key,s.value,null,null,i.right.removeMin())}i=i.copy(null,null,null,null,i.right.remove(t,e))}return i.fixUp()}isRed(){return this.color}fixUp(){let t=this;return t.right.isRed()&&!t.left.isRed()&&(t=t.rotateLeft()),t.left.isRed()&&t.left.left.isRed()&&(t=t.rotateRight()),t.left.isRed()&&t.right.isRed()&&(t=t.colorFlip()),t}moveRedLeft(){let t=this.colorFlip();return t.right.left.isRed()&&(t=t.copy(null,null,null,null,t.right.rotateRight()),t=t.rotateLeft(),t=t.colorFlip()),t}moveRedRight(){let t=this.colorFlip();return t.left.left.isRed()&&(t=t.rotateRight(),t=t.colorFlip()),t}rotateLeft(){const t=this.copy(null,null,bt.RED,null,this.right.left);return this.right.copy(null,null,this.color,t,null)}rotateRight(){const t=this.copy(null,null,bt.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,t)}colorFlip(){const t=this.left.copy(null,null,!this.left.color,null,null),e=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,t,e)}checkMaxDepth(){const t=this.check();return Math.pow(2,t)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw $();const t=this.left.check();if(t!==this.right.check())throw $();return t+(this.isRed()?0:1)}}bt.EMPTY=null,bt.RED=!0,bt.BLACK=!1;bt.EMPTY=new class{constructor(){this.size=0}get key(){throw $()}get value(){throw $()}get color(){throw $()}get left(){throw $()}get right(){throw $()}copy(t,e,s,i,o){return this}insert(t,e,s){return new bt(t,e)}remove(t,e){return this}isEmpty(){return!0}inorderTraversal(t){return!1}reverseTraversal(t){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
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
 */class Dt{constructor(t){this.comparator=t,this.data=new gt(this.comparator)}has(t){return this.data.get(t)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(t){return this.data.indexOf(t)}forEach(t){this.data.inorderTraversal((e,s)=>(t(e),!1))}forEachInRange(t,e){const s=this.data.getIteratorFrom(t[0]);for(;s.hasNext();){const i=s.getNext();if(this.comparator(i.key,t[1])>=0)return;e(i.key)}}forEachWhile(t,e){let s;for(s=e!==void 0?this.data.getIteratorFrom(e):this.data.getIterator();s.hasNext();)if(!t(s.getNext().key))return}firstAfterOrEqual(t){const e=this.data.getIteratorFrom(t);return e.hasNext()?e.getNext().key:null}getIterator(){return new ta(this.data.getIterator())}getIteratorFrom(t){return new ta(this.data.getIteratorFrom(t))}add(t){return this.copy(this.data.remove(t).insert(t,!0))}delete(t){return this.has(t)?this.copy(this.data.remove(t)):this}isEmpty(){return this.data.isEmpty()}unionWith(t){let e=this;return e.size<t.size&&(e=t,t=this),t.forEach(s=>{e=e.add(s)}),e}isEqual(t){if(!(t instanceof Dt)||this.size!==t.size)return!1;const e=this.data.getIterator(),s=t.data.getIterator();for(;e.hasNext();){const i=e.getNext().key,o=s.getNext().key;if(this.comparator(i,o)!==0)return!1}return!0}toArray(){const t=[];return this.forEach(e=>{t.push(e)}),t}toString(){const t=[];return this.forEach(e=>t.push(e)),"SortedSet("+t.toString()+")"}copy(t){const e=new Dt(this.comparator);return e.data=t,e}}class ta{constructor(t){this.iter=t}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
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
 */class Qt{constructor(t){this.fields=t,t.sort(kt.comparator)}static empty(){return new Qt([])}unionWith(t){let e=new Dt(kt.comparator);for(const s of this.fields)e=e.add(s);for(const s of t)e=e.add(s);return new Qt(e.toArray())}covers(t){for(const e of this.fields)if(e.isPrefixOf(t))return!0;return!1}isEqual(t){return Tn(this.fields,t.fields,(e,s)=>e.isEqual(s))}}/**
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
 */class ll extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
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
 */class Nt{constructor(t){this.binaryString=t}static fromBase64String(t){const e=function(i){try{return atob(i)}catch(o){throw typeof DOMException<"u"&&o instanceof DOMException?new ll("Invalid base64 string: "+o):o}}(t);return new Nt(e)}static fromUint8Array(t){const e=function(i){let o="";for(let a=0;a<i.length;++a)o+=String.fromCharCode(i[a]);return o}(t);return new Nt(e)}[Symbol.iterator](){let t=0;return{next:()=>t<this.binaryString.length?{value:this.binaryString.charCodeAt(t++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(e){return btoa(e)}(this.binaryString)}toUint8Array(){return function(e){const s=new Uint8Array(e.length);for(let i=0;i<e.length;i++)s[i]=e.charCodeAt(i);return s}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(t){return rt(this.binaryString,t.binaryString)}isEqual(t){return this.binaryString===t.binaryString}}Nt.EMPTY_BYTE_STRING=new Nt("");const xc=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function Oe(n){if(at(!!n),typeof n=="string"){let t=0;const e=xc.exec(n);if(at(!!e),e[1]){let i=e[1];i=(i+"000000000").substr(0,9),t=Number(i)}const s=new Date(n);return{seconds:Math.floor(s.getTime()/1e3),nanos:t}}return{seconds:Tt(n.seconds),nanos:Tt(n.nanos)}}function Tt(n){return typeof n=="number"?n:typeof n=="string"?Number(n):0}function tn(n){return typeof n=="string"?Nt.fromBase64String(n):Nt.fromUint8Array(n)}/**
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
 */function Ei(n){var t,e;return((e=(((t=n==null?void 0:n.mapValue)===null||t===void 0?void 0:t.fields)||{}).__type__)===null||e===void 0?void 0:e.stringValue)==="server_timestamp"}function wi(n){const t=n.mapValue.fields.__previous_value__;return Ei(t)?wi(t):t}function is(n){const t=Oe(n.mapValue.fields.__local_write_time__.timestampValue);return new At(t.seconds,t.nanos)}/**
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
 */class Oc{constructor(t,e,s,i,o,a,c,h,f){this.databaseId=t,this.appId=e,this.persistenceKey=s,this.host=i,this.ssl=o,this.forceLongPolling=a,this.autoDetectLongPolling=c,this.longPollingOptions=h,this.useFetchStreams=f}}class os{constructor(t,e){this.projectId=t,this.database=e||"(default)"}static empty(){return new os("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(t){return t instanceof os&&t.projectId===this.projectId&&t.database===this.database}}/**
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
 */const Hs={mapValue:{}};function en(n){return"nullValue"in n?0:"booleanValue"in n?1:"integerValue"in n||"doubleValue"in n?2:"timestampValue"in n?3:"stringValue"in n?5:"bytesValue"in n?6:"referenceValue"in n?7:"geoPointValue"in n?8:"arrayValue"in n?9:"mapValue"in n?Ei(n)?4:Lc(n)?9007199254740991:Mc(n)?10:11:$()}function he(n,t){if(n===t)return!0;const e=en(n);if(e!==en(t))return!1;switch(e){case 0:case 9007199254740991:return!0;case 1:return n.booleanValue===t.booleanValue;case 4:return is(n).isEqual(is(t));case 3:return function(i,o){if(typeof i.timestampValue=="string"&&typeof o.timestampValue=="string"&&i.timestampValue.length===o.timestampValue.length)return i.timestampValue===o.timestampValue;const a=Oe(i.timestampValue),c=Oe(o.timestampValue);return a.seconds===c.seconds&&a.nanos===c.nanos}(n,t);case 5:return n.stringValue===t.stringValue;case 6:return function(i,o){return tn(i.bytesValue).isEqual(tn(o.bytesValue))}(n,t);case 7:return n.referenceValue===t.referenceValue;case 8:return function(i,o){return Tt(i.geoPointValue.latitude)===Tt(o.geoPointValue.latitude)&&Tt(i.geoPointValue.longitude)===Tt(o.geoPointValue.longitude)}(n,t);case 2:return function(i,o){if("integerValue"in i&&"integerValue"in o)return Tt(i.integerValue)===Tt(o.integerValue);if("doubleValue"in i&&"doubleValue"in o){const a=Tt(i.doubleValue),c=Tt(o.doubleValue);return a===c?or(a)===or(c):isNaN(a)&&isNaN(c)}return!1}(n,t);case 9:return Tn(n.arrayValue.values||[],t.arrayValue.values||[],he);case 10:case 11:return function(i,o){const a=i.mapValue.fields||{},c=o.mapValue.fields||{};if(Zo(a)!==Zo(c))return!1;for(const h in a)if(a.hasOwnProperty(h)&&(c[h]===void 0||!he(a[h],c[h])))return!1;return!0}(n,t);default:return $()}}function as(n,t){return(n.values||[]).find(e=>he(e,t))!==void 0}function En(n,t){if(n===t)return 0;const e=en(n),s=en(t);if(e!==s)return rt(e,s);switch(e){case 0:case 9007199254740991:return 0;case 1:return rt(n.booleanValue,t.booleanValue);case 2:return function(o,a){const c=Tt(o.integerValue||o.doubleValue),h=Tt(a.integerValue||a.doubleValue);return c<h?-1:c>h?1:c===h?0:isNaN(c)?isNaN(h)?0:-1:1}(n,t);case 3:return ea(n.timestampValue,t.timestampValue);case 4:return ea(is(n),is(t));case 5:return rt(n.stringValue,t.stringValue);case 6:return function(o,a){const c=tn(o),h=tn(a);return c.compareTo(h)}(n.bytesValue,t.bytesValue);case 7:return function(o,a){const c=o.split("/"),h=a.split("/");for(let f=0;f<c.length&&f<h.length;f++){const p=rt(c[f],h[f]);if(p!==0)return p}return rt(c.length,h.length)}(n.referenceValue,t.referenceValue);case 8:return function(o,a){const c=rt(Tt(o.latitude),Tt(a.latitude));return c!==0?c:rt(Tt(o.longitude),Tt(a.longitude))}(n.geoPointValue,t.geoPointValue);case 9:return na(n.arrayValue,t.arrayValue);case 10:return function(o,a){var c,h,f,p;const E=o.fields||{},R=a.fields||{},V=(c=E.value)===null||c===void 0?void 0:c.arrayValue,N=(h=R.value)===null||h===void 0?void 0:h.arrayValue,M=rt(((f=V==null?void 0:V.values)===null||f===void 0?void 0:f.length)||0,((p=N==null?void 0:N.values)===null||p===void 0?void 0:p.length)||0);return M!==0?M:na(V,N)}(n.mapValue,t.mapValue);case 11:return function(o,a){if(o===Hs.mapValue&&a===Hs.mapValue)return 0;if(o===Hs.mapValue)return 1;if(a===Hs.mapValue)return-1;const c=o.fields||{},h=Object.keys(c),f=a.fields||{},p=Object.keys(f);h.sort(),p.sort();for(let E=0;E<h.length&&E<p.length;++E){const R=rt(h[E],p[E]);if(R!==0)return R;const V=En(c[h[E]],f[p[E]]);if(V!==0)return V}return rt(h.length,p.length)}(n.mapValue,t.mapValue);default:throw $()}}function ea(n,t){if(typeof n=="string"&&typeof t=="string"&&n.length===t.length)return rt(n,t);const e=Oe(n),s=Oe(t),i=rt(e.seconds,s.seconds);return i!==0?i:rt(e.nanos,s.nanos)}function na(n,t){const e=n.values||[],s=t.values||[];for(let i=0;i<e.length&&i<s.length;++i){const o=En(e[i],s[i]);if(o)return o}return rt(e.length,s.length)}function wn(n){return si(n)}function si(n){return"nullValue"in n?"null":"booleanValue"in n?""+n.booleanValue:"integerValue"in n?""+n.integerValue:"doubleValue"in n?""+n.doubleValue:"timestampValue"in n?function(e){const s=Oe(e);return`time(${s.seconds},${s.nanos})`}(n.timestampValue):"stringValue"in n?n.stringValue:"bytesValue"in n?function(e){return tn(e).toBase64()}(n.bytesValue):"referenceValue"in n?function(e){return B.fromName(e).toString()}(n.referenceValue):"geoPointValue"in n?function(e){return`geo(${e.latitude},${e.longitude})`}(n.geoPointValue):"arrayValue"in n?function(e){let s="[",i=!0;for(const o of e.values||[])i?i=!1:s+=",",s+=si(o);return s+"]"}(n.arrayValue):"mapValue"in n?function(e){const s=Object.keys(e.fields||{}).sort();let i="{",o=!0;for(const a of s)o?o=!1:i+=",",i+=`${a}:${si(e.fields[a])}`;return i+"}"}(n.mapValue):$()}function sa(n,t){return{referenceValue:`projects/${n.projectId}/databases/${n.database}/documents/${t.path.canonicalString()}`}}function ri(n){return!!n&&"integerValue"in n}function Ai(n){return!!n&&"arrayValue"in n}function ra(n){return!!n&&"nullValue"in n}function ia(n){return!!n&&"doubleValue"in n&&isNaN(Number(n.doubleValue))}function er(n){return!!n&&"mapValue"in n}function Mc(n){var t,e;return((e=(((t=n==null?void 0:n.mapValue)===null||t===void 0?void 0:t.fields)||{}).__type__)===null||e===void 0?void 0:e.stringValue)==="__vector__"}function Zn(n){if(n.geoPointValue)return{geoPointValue:Object.assign({},n.geoPointValue)};if(n.timestampValue&&typeof n.timestampValue=="object")return{timestampValue:Object.assign({},n.timestampValue)};if(n.mapValue){const t={mapValue:{fields:{}}};return sn(n.mapValue.fields,(e,s)=>t.mapValue.fields[e]=Zn(s)),t}if(n.arrayValue){const t={arrayValue:{values:[]}};for(let e=0;e<(n.arrayValue.values||[]).length;++e)t.arrayValue.values[e]=Zn(n.arrayValue.values[e]);return t}return Object.assign({},n)}function Lc(n){return(((n.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}/**
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
 */class jt{constructor(t){this.value=t}static empty(){return new jt({mapValue:{}})}field(t){if(t.isEmpty())return this.value;{let e=this.value;for(let s=0;s<t.length-1;++s)if(e=(e.mapValue.fields||{})[t.get(s)],!er(e))return null;return e=(e.mapValue.fields||{})[t.lastSegment()],e||null}}set(t,e){this.getFieldsMap(t.popLast())[t.lastSegment()]=Zn(e)}setAll(t){let e=kt.emptyPath(),s={},i=[];t.forEach((a,c)=>{if(!e.isImmediateParentOf(c)){const h=this.getFieldsMap(e);this.applyChanges(h,s,i),s={},i=[],e=c.popLast()}a?s[c.lastSegment()]=Zn(a):i.push(c.lastSegment())});const o=this.getFieldsMap(e);this.applyChanges(o,s,i)}delete(t){const e=this.field(t.popLast());er(e)&&e.mapValue.fields&&delete e.mapValue.fields[t.lastSegment()]}isEqual(t){return he(this.value,t.value)}getFieldsMap(t){let e=this.value;e.mapValue.fields||(e.mapValue={fields:{}});for(let s=0;s<t.length;++s){let i=e.mapValue.fields[t.get(s)];er(i)&&i.mapValue.fields||(i={mapValue:{fields:{}}},e.mapValue.fields[t.get(s)]=i),e=i}return e.mapValue.fields}applyChanges(t,e,s){sn(e,(i,o)=>t[i]=o);for(const i of s)delete t[i]}clone(){return new jt(Zn(this.value))}}function ul(n){const t=[];return sn(n.fields,(e,s)=>{const i=new kt([e]);if(er(s)){const o=ul(s.mapValue).fields;if(o.length===0)t.push(i);else for(const a of o)t.push(i.child(a))}else t.push(i)}),new Qt(t)}/**
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
 */class Ut{constructor(t,e,s,i,o,a,c){this.key=t,this.documentType=e,this.version=s,this.readTime=i,this.createTime=o,this.data=a,this.documentState=c}static newInvalidDocument(t){return new Ut(t,0,Q.min(),Q.min(),Q.min(),jt.empty(),0)}static newFoundDocument(t,e,s,i){return new Ut(t,1,e,Q.min(),s,i,0)}static newNoDocument(t,e){return new Ut(t,2,e,Q.min(),Q.min(),jt.empty(),0)}static newUnknownDocument(t,e){return new Ut(t,3,e,Q.min(),Q.min(),jt.empty(),2)}convertToFoundDocument(t,e){return!this.createTime.isEqual(Q.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=t),this.version=t,this.documentType=1,this.data=e,this.documentState=0,this}convertToNoDocument(t){return this.version=t,this.documentType=2,this.data=jt.empty(),this.documentState=0,this}convertToUnknownDocument(t){return this.version=t,this.documentType=3,this.data=jt.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=Q.min(),this}setReadTime(t){return this.readTime=t,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(t){return t instanceof Ut&&this.key.isEqual(t.key)&&this.version.isEqual(t.version)&&this.documentType===t.documentType&&this.documentState===t.documentState&&this.data.isEqual(t.data)}mutableCopy(){return new Ut(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
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
 */class ar{constructor(t,e){this.position=t,this.inclusive=e}}function oa(n,t,e){let s=0;for(let i=0;i<n.position.length;i++){const o=t[i],a=n.position[i];if(o.field.isKeyField()?s=B.comparator(B.fromName(a.referenceValue),e.key):s=En(a,e.data.field(o.field)),o.dir==="desc"&&(s*=-1),s!==0)break}return s}function aa(n,t){if(n===null)return t===null;if(t===null||n.inclusive!==t.inclusive||n.position.length!==t.position.length)return!1;for(let e=0;e<n.position.length;e++)if(!he(n.position[e],t.position[e]))return!1;return!0}/**
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
 */class ls{constructor(t,e="asc"){this.field=t,this.dir=e}}function Fc(n,t){return n.dir===t.dir&&n.field.isEqual(t.field)}/**
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
 */class cl{}class wt extends cl{constructor(t,e,s){super(),this.field=t,this.op=e,this.value=s}static create(t,e,s){return t.isKeyField()?e==="in"||e==="not-in"?this.createKeyFieldInFilter(t,e,s):new Bc(t,e,s):e==="array-contains"?new $c(t,s):e==="in"?new zc(t,s):e==="not-in"?new Kc(t,s):e==="array-contains-any"?new Gc(t,s):new wt(t,e,s)}static createKeyFieldInFilter(t,e,s){return e==="in"?new qc(t,s):new jc(t,s)}matches(t){const e=t.data.field(this.field);return this.op==="!="?e!==null&&this.matchesComparison(En(e,this.value)):e!==null&&en(this.value)===en(e)&&this.matchesComparison(En(e,this.value))}matchesComparison(t){switch(this.op){case"<":return t<0;case"<=":return t<=0;case"==":return t===0;case"!=":return t!==0;case">":return t>0;case">=":return t>=0;default:return $()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class ne extends cl{constructor(t,e){super(),this.filters=t,this.op=e,this.ae=null}static create(t,e){return new ne(t,e)}matches(t){return hl(this)?this.filters.find(e=>!e.matches(t))===void 0:this.filters.find(e=>e.matches(t))!==void 0}getFlattenedFilters(){return this.ae!==null||(this.ae=this.filters.reduce((t,e)=>t.concat(e.getFlattenedFilters()),[])),this.ae}getFilters(){return Object.assign([],this.filters)}}function hl(n){return n.op==="and"}function dl(n){return Uc(n)&&hl(n)}function Uc(n){for(const t of n.filters)if(t instanceof ne)return!1;return!0}function ii(n){if(n instanceof wt)return n.field.canonicalString()+n.op.toString()+wn(n.value);if(dl(n))return n.filters.map(t=>ii(t)).join(",");{const t=n.filters.map(e=>ii(e)).join(",");return`${n.op}(${t})`}}function fl(n,t){return n instanceof wt?function(s,i){return i instanceof wt&&s.op===i.op&&s.field.isEqual(i.field)&&he(s.value,i.value)}(n,t):n instanceof ne?function(s,i){return i instanceof ne&&s.op===i.op&&s.filters.length===i.filters.length?s.filters.reduce((o,a,c)=>o&&fl(a,i.filters[c]),!0):!1}(n,t):void $()}function pl(n){return n instanceof wt?function(e){return`${e.field.canonicalString()} ${e.op} ${wn(e.value)}`}(n):n instanceof ne?function(e){return e.op.toString()+" {"+e.getFilters().map(pl).join(" ,")+"}"}(n):"Filter"}class Bc extends wt{constructor(t,e,s){super(t,e,s),this.key=B.fromName(s.referenceValue)}matches(t){const e=B.comparator(t.key,this.key);return this.matchesComparison(e)}}class qc extends wt{constructor(t,e){super(t,"in",e),this.keys=ml("in",e)}matches(t){return this.keys.some(e=>e.isEqual(t.key))}}class jc extends wt{constructor(t,e){super(t,"not-in",e),this.keys=ml("not-in",e)}matches(t){return!this.keys.some(e=>e.isEqual(t.key))}}function ml(n,t){var e;return(((e=t.arrayValue)===null||e===void 0?void 0:e.values)||[]).map(s=>B.fromName(s.referenceValue))}class $c extends wt{constructor(t,e){super(t,"array-contains",e)}matches(t){const e=t.data.field(this.field);return Ai(e)&&as(e.arrayValue,this.value)}}class zc extends wt{constructor(t,e){super(t,"in",e)}matches(t){const e=t.data.field(this.field);return e!==null&&as(this.value.arrayValue,e)}}class Kc extends wt{constructor(t,e){super(t,"not-in",e)}matches(t){if(as(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const e=t.data.field(this.field);return e!==null&&!as(this.value.arrayValue,e)}}class Gc extends wt{constructor(t,e){super(t,"array-contains-any",e)}matches(t){const e=t.data.field(this.field);return!(!Ai(e)||!e.arrayValue.values)&&e.arrayValue.values.some(s=>as(this.value.arrayValue,s))}}/**
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
 */class Qc{constructor(t,e=null,s=[],i=[],o=null,a=null,c=null){this.path=t,this.collectionGroup=e,this.orderBy=s,this.filters=i,this.limit=o,this.startAt=a,this.endAt=c,this.ue=null}}function la(n,t=null,e=[],s=[],i=null,o=null,a=null){return new Qc(n,t,e,s,i,o,a)}function Ii(n){const t=W(n);if(t.ue===null){let e=t.path.canonicalString();t.collectionGroup!==null&&(e+="|cg:"+t.collectionGroup),e+="|f:",e+=t.filters.map(s=>ii(s)).join(","),e+="|ob:",e+=t.orderBy.map(s=>function(o){return o.field.canonicalString()+o.dir}(s)).join(","),pr(t.limit)||(e+="|l:",e+=t.limit),t.startAt&&(e+="|lb:",e+=t.startAt.inclusive?"b:":"a:",e+=t.startAt.position.map(s=>wn(s)).join(",")),t.endAt&&(e+="|ub:",e+=t.endAt.inclusive?"a:":"b:",e+=t.endAt.position.map(s=>wn(s)).join(",")),t.ue=e}return t.ue}function Ri(n,t){if(n.limit!==t.limit||n.orderBy.length!==t.orderBy.length)return!1;for(let e=0;e<n.orderBy.length;e++)if(!Fc(n.orderBy[e],t.orderBy[e]))return!1;if(n.filters.length!==t.filters.length)return!1;for(let e=0;e<n.filters.length;e++)if(!fl(n.filters[e],t.filters[e]))return!1;return n.collectionGroup===t.collectionGroup&&!!n.path.isEqual(t.path)&&!!aa(n.startAt,t.startAt)&&aa(n.endAt,t.endAt)}function oi(n){return B.isDocumentKey(n.path)&&n.collectionGroup===null&&n.filters.length===0}/**
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
 */class Cn{constructor(t,e=null,s=[],i=[],o=null,a="F",c=null,h=null){this.path=t,this.collectionGroup=e,this.explicitOrderBy=s,this.filters=i,this.limit=o,this.limitType=a,this.startAt=c,this.endAt=h,this.ce=null,this.le=null,this.he=null,this.startAt,this.endAt}}function Wc(n,t,e,s,i,o,a,c){return new Cn(n,t,e,s,i,o,a,c)}function mr(n){return new Cn(n)}function ua(n){return n.filters.length===0&&n.limit===null&&n.startAt==null&&n.endAt==null&&(n.explicitOrderBy.length===0||n.explicitOrderBy.length===1&&n.explicitOrderBy[0].field.isKeyField())}function gl(n){return n.collectionGroup!==null}function ts(n){const t=W(n);if(t.ce===null){t.ce=[];const e=new Set;for(const o of t.explicitOrderBy)t.ce.push(o),e.add(o.field.canonicalString());const s=t.explicitOrderBy.length>0?t.explicitOrderBy[t.explicitOrderBy.length-1].dir:"asc";(function(a){let c=new Dt(kt.comparator);return a.filters.forEach(h=>{h.getFlattenedFilters().forEach(f=>{f.isInequality()&&(c=c.add(f.field))})}),c})(t).forEach(o=>{e.has(o.canonicalString())||o.isKeyField()||t.ce.push(new ls(o,s))}),e.has(kt.keyField().canonicalString())||t.ce.push(new ls(kt.keyField(),s))}return t.ce}function ue(n){const t=W(n);return t.le||(t.le=Hc(t,ts(n))),t.le}function Hc(n,t){if(n.limitType==="F")return la(n.path,n.collectionGroup,t,n.filters,n.limit,n.startAt,n.endAt);{t=t.map(i=>{const o=i.dir==="desc"?"asc":"desc";return new ls(i.field,o)});const e=n.endAt?new ar(n.endAt.position,n.endAt.inclusive):null,s=n.startAt?new ar(n.startAt.position,n.startAt.inclusive):null;return la(n.path,n.collectionGroup,t,n.filters,n.limit,e,s)}}function ai(n,t){const e=n.filters.concat([t]);return new Cn(n.path,n.collectionGroup,n.explicitOrderBy.slice(),e,n.limit,n.limitType,n.startAt,n.endAt)}function lr(n,t,e){return new Cn(n.path,n.collectionGroup,n.explicitOrderBy.slice(),n.filters.slice(),t,e,n.startAt,n.endAt)}function gr(n,t){return Ri(ue(n),ue(t))&&n.limitType===t.limitType}function _l(n){return`${Ii(ue(n))}|lt:${n.limitType}`}function pn(n){return`Query(target=${function(e){let s=e.path.canonicalString();return e.collectionGroup!==null&&(s+=" collectionGroup="+e.collectionGroup),e.filters.length>0&&(s+=`, filters: [${e.filters.map(i=>pl(i)).join(", ")}]`),pr(e.limit)||(s+=", limit: "+e.limit),e.orderBy.length>0&&(s+=`, orderBy: [${e.orderBy.map(i=>function(a){return`${a.field.canonicalString()} (${a.dir})`}(i)).join(", ")}]`),e.startAt&&(s+=", startAt: ",s+=e.startAt.inclusive?"b:":"a:",s+=e.startAt.position.map(i=>wn(i)).join(",")),e.endAt&&(s+=", endAt: ",s+=e.endAt.inclusive?"a:":"b:",s+=e.endAt.position.map(i=>wn(i)).join(",")),`Target(${s})`}(ue(n))}; limitType=${n.limitType})`}function _r(n,t){return t.isFoundDocument()&&function(s,i){const o=i.key.path;return s.collectionGroup!==null?i.key.hasCollectionId(s.collectionGroup)&&s.path.isPrefixOf(o):B.isDocumentKey(s.path)?s.path.isEqual(o):s.path.isImmediateParentOf(o)}(n,t)&&function(s,i){for(const o of ts(s))if(!o.field.isKeyField()&&i.data.field(o.field)===null)return!1;return!0}(n,t)&&function(s,i){for(const o of s.filters)if(!o.matches(i))return!1;return!0}(n,t)&&function(s,i){return!(s.startAt&&!function(a,c,h){const f=oa(a,c,h);return a.inclusive?f<=0:f<0}(s.startAt,ts(s),i)||s.endAt&&!function(a,c,h){const f=oa(a,c,h);return a.inclusive?f>=0:f>0}(s.endAt,ts(s),i))}(n,t)}function Xc(n){return n.collectionGroup||(n.path.length%2==1?n.path.lastSegment():n.path.get(n.path.length-2))}function yl(n){return(t,e)=>{let s=!1;for(const i of ts(n)){const o=Yc(i,t,e);if(o!==0)return o;s=s||i.field.isKeyField()}return 0}}function Yc(n,t,e){const s=n.field.isKeyField()?B.comparator(t.key,e.key):function(o,a,c){const h=a.data.field(o),f=c.data.field(o);return h!==null&&f!==null?En(h,f):$()}(n.field,t,e);switch(n.dir){case"asc":return s;case"desc":return-1*s;default:return $()}}/**
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
 */class Vn{constructor(t,e){this.mapKeyFn=t,this.equalsFn=e,this.inner={},this.innerSize=0}get(t){const e=this.mapKeyFn(t),s=this.inner[e];if(s!==void 0){for(const[i,o]of s)if(this.equalsFn(i,t))return o}}has(t){return this.get(t)!==void 0}set(t,e){const s=this.mapKeyFn(t),i=this.inner[s];if(i===void 0)return this.inner[s]=[[t,e]],void this.innerSize++;for(let o=0;o<i.length;o++)if(this.equalsFn(i[o][0],t))return void(i[o]=[t,e]);i.push([t,e]),this.innerSize++}delete(t){const e=this.mapKeyFn(t),s=this.inner[e];if(s===void 0)return!1;for(let i=0;i<s.length;i++)if(this.equalsFn(s[i][0],t))return s.length===1?delete this.inner[e]:s.splice(i,1),this.innerSize--,!0;return!1}forEach(t){sn(this.inner,(e,s)=>{for(const[i,o]of s)t(i,o)})}isEmpty(){return al(this.inner)}size(){return this.innerSize}}/**
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
 */const Jc=new gt(B.comparator);function Te(){return Jc}const vl=new gt(B.comparator);function Xn(...n){let t=vl;for(const e of n)t=t.insert(e.key,e);return t}function Tl(n){let t=vl;return n.forEach((e,s)=>t=t.insert(e,s.overlayedDocument)),t}function Xe(){return es()}function El(){return es()}function es(){return new Vn(n=>n.toString(),(n,t)=>n.isEqual(t))}const Zc=new gt(B.comparator),th=new Dt(B.comparator);function Z(...n){let t=th;for(const e of n)t=t.add(e);return t}const eh=new Dt(rt);function nh(){return eh}/**
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
 */function Pi(n,t){if(n.useProto3Json){if(isNaN(t))return{doubleValue:"NaN"};if(t===1/0)return{doubleValue:"Infinity"};if(t===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:or(t)?"-0":t}}function wl(n){return{integerValue:""+n}}function sh(n,t){return Nc(t)?wl(t):Pi(n,t)}/**
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
 */class yr{constructor(){this._=void 0}}function rh(n,t,e){return n instanceof us?function(i,o){const a={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:i.seconds,nanos:i.nanoseconds}}}};return o&&Ei(o)&&(o=wi(o)),o&&(a.fields.__previous_value__=o),{mapValue:a}}(e,t):n instanceof cs?Il(n,t):n instanceof hs?Rl(n,t):function(i,o){const a=Al(i,o),c=ca(a)+ca(i.Pe);return ri(a)&&ri(i.Pe)?wl(c):Pi(i.serializer,c)}(n,t)}function ih(n,t,e){return n instanceof cs?Il(n,t):n instanceof hs?Rl(n,t):e}function Al(n,t){return n instanceof ur?function(s){return ri(s)||function(o){return!!o&&"doubleValue"in o}(s)}(t)?t:{integerValue:0}:null}class us extends yr{}class cs extends yr{constructor(t){super(),this.elements=t}}function Il(n,t){const e=Pl(t);for(const s of n.elements)e.some(i=>he(i,s))||e.push(s);return{arrayValue:{values:e}}}class hs extends yr{constructor(t){super(),this.elements=t}}function Rl(n,t){let e=Pl(t);for(const s of n.elements)e=e.filter(i=>!he(i,s));return{arrayValue:{values:e}}}class ur extends yr{constructor(t,e){super(),this.serializer=t,this.Pe=e}}function ca(n){return Tt(n.integerValue||n.doubleValue)}function Pl(n){return Ai(n)&&n.arrayValue.values?n.arrayValue.values.slice():[]}/**
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
 */class oh{constructor(t,e){this.field=t,this.transform=e}}function ah(n,t){return n.field.isEqual(t.field)&&function(s,i){return s instanceof cs&&i instanceof cs||s instanceof hs&&i instanceof hs?Tn(s.elements,i.elements,he):s instanceof ur&&i instanceof ur?he(s.Pe,i.Pe):s instanceof us&&i instanceof us}(n.transform,t.transform)}class lh{constructor(t,e){this.version=t,this.transformResults=e}}class Xt{constructor(t,e){this.updateTime=t,this.exists=e}static none(){return new Xt}static exists(t){return new Xt(void 0,t)}static updateTime(t){return new Xt(t)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(t){return this.exists===t.exists&&(this.updateTime?!!t.updateTime&&this.updateTime.isEqual(t.updateTime):!t.updateTime)}}function nr(n,t){return n.updateTime!==void 0?t.isFoundDocument()&&t.version.isEqual(n.updateTime):n.exists===void 0||n.exists===t.isFoundDocument()}class vr{}function Cl(n,t){if(!n.hasLocalMutations||t&&t.fields.length===0)return null;if(t===null)return n.isNoDocument()?new Ci(n.key,Xt.none()):new ps(n.key,n.data,Xt.none());{const e=n.data,s=jt.empty();let i=new Dt(kt.comparator);for(let o of t.fields)if(!i.has(o)){let a=e.field(o);a===null&&o.length>1&&(o=o.popLast(),a=e.field(o)),a===null?s.delete(o):s.set(o,a),i=i.add(o)}return new Fe(n.key,s,new Qt(i.toArray()),Xt.none())}}function uh(n,t,e){n instanceof ps?function(i,o,a){const c=i.value.clone(),h=da(i.fieldTransforms,o,a.transformResults);c.setAll(h),o.convertToFoundDocument(a.version,c).setHasCommittedMutations()}(n,t,e):n instanceof Fe?function(i,o,a){if(!nr(i.precondition,o))return void o.convertToUnknownDocument(a.version);const c=da(i.fieldTransforms,o,a.transformResults),h=o.data;h.setAll(Vl(i)),h.setAll(c),o.convertToFoundDocument(a.version,h).setHasCommittedMutations()}(n,t,e):function(i,o,a){o.convertToNoDocument(a.version).setHasCommittedMutations()}(0,t,e)}function ns(n,t,e,s){return n instanceof ps?function(o,a,c,h){if(!nr(o.precondition,a))return c;const f=o.value.clone(),p=fa(o.fieldTransforms,h,a);return f.setAll(p),a.convertToFoundDocument(a.version,f).setHasLocalMutations(),null}(n,t,e,s):n instanceof Fe?function(o,a,c,h){if(!nr(o.precondition,a))return c;const f=fa(o.fieldTransforms,h,a),p=a.data;return p.setAll(Vl(o)),p.setAll(f),a.convertToFoundDocument(a.version,p).setHasLocalMutations(),c===null?null:c.unionWith(o.fieldMask.fields).unionWith(o.fieldTransforms.map(E=>E.field))}(n,t,e,s):function(o,a,c){return nr(o.precondition,a)?(a.convertToNoDocument(a.version).setHasLocalMutations(),null):c}(n,t,e)}function ch(n,t){let e=null;for(const s of n.fieldTransforms){const i=t.data.field(s.field),o=Al(s.transform,i||null);o!=null&&(e===null&&(e=jt.empty()),e.set(s.field,o))}return e||null}function ha(n,t){return n.type===t.type&&!!n.key.isEqual(t.key)&&!!n.precondition.isEqual(t.precondition)&&!!function(s,i){return s===void 0&&i===void 0||!(!s||!i)&&Tn(s,i,(o,a)=>ah(o,a))}(n.fieldTransforms,t.fieldTransforms)&&(n.type===0?n.value.isEqual(t.value):n.type!==1||n.data.isEqual(t.data)&&n.fieldMask.isEqual(t.fieldMask))}class ps extends vr{constructor(t,e,s,i=[]){super(),this.key=t,this.value=e,this.precondition=s,this.fieldTransforms=i,this.type=0}getFieldMask(){return null}}class Fe extends vr{constructor(t,e,s,i,o=[]){super(),this.key=t,this.data=e,this.fieldMask=s,this.precondition=i,this.fieldTransforms=o,this.type=1}getFieldMask(){return this.fieldMask}}function Vl(n){const t=new Map;return n.fieldMask.fields.forEach(e=>{if(!e.isEmpty()){const s=n.data.field(e);t.set(e,s)}}),t}function da(n,t,e){const s=new Map;at(n.length===e.length);for(let i=0;i<e.length;i++){const o=n[i],a=o.transform,c=t.data.field(o.field);s.set(o.field,ih(a,c,e[i]))}return s}function fa(n,t,e){const s=new Map;for(const i of n){const o=i.transform,a=e.data.field(i.field);s.set(i.field,rh(o,a,t))}return s}class Ci extends vr{constructor(t,e){super(),this.key=t,this.precondition=e,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class hh extends vr{constructor(t,e){super(),this.key=t,this.precondition=e,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
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
 */class dh{constructor(t,e,s,i){this.batchId=t,this.localWriteTime=e,this.baseMutations=s,this.mutations=i}applyToRemoteDocument(t,e){const s=e.mutationResults;for(let i=0;i<this.mutations.length;i++){const o=this.mutations[i];o.key.isEqual(t.key)&&uh(o,t,s[i])}}applyToLocalView(t,e){for(const s of this.baseMutations)s.key.isEqual(t.key)&&(e=ns(s,t,e,this.localWriteTime));for(const s of this.mutations)s.key.isEqual(t.key)&&(e=ns(s,t,e,this.localWriteTime));return e}applyToLocalDocumentSet(t,e){const s=El();return this.mutations.forEach(i=>{const o=t.get(i.key),a=o.overlayedDocument;let c=this.applyToLocalView(a,o.mutatedFields);c=e.has(i.key)?null:c;const h=Cl(a,c);h!==null&&s.set(i.key,h),a.isValidDocument()||a.convertToNoDocument(Q.min())}),s}keys(){return this.mutations.reduce((t,e)=>t.add(e.key),Z())}isEqual(t){return this.batchId===t.batchId&&Tn(this.mutations,t.mutations,(e,s)=>ha(e,s))&&Tn(this.baseMutations,t.baseMutations,(e,s)=>ha(e,s))}}class Vi{constructor(t,e,s,i){this.batch=t,this.commitVersion=e,this.mutationResults=s,this.docVersions=i}static from(t,e,s){at(t.mutations.length===s.length);let i=function(){return Zc}();const o=t.mutations;for(let a=0;a<o.length;a++)i=i.insert(o[a].key,s[a].version);return new Vi(t,e,s,i)}}/**
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
 */class fh{constructor(t,e){this.largestBatchId=t,this.mutation=e}getKey(){return this.mutation.key}isEqual(t){return t!==null&&this.mutation===t.mutation}toString(){return`Overlay{
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
 */class ph{constructor(t,e){this.count=t,this.unchangedNames=e}}/**
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
 */var Et,tt;function mh(n){switch(n){default:return $();case b.CANCELLED:case b.UNKNOWN:case b.DEADLINE_EXCEEDED:case b.RESOURCE_EXHAUSTED:case b.INTERNAL:case b.UNAVAILABLE:case b.UNAUTHENTICATED:return!1;case b.INVALID_ARGUMENT:case b.NOT_FOUND:case b.ALREADY_EXISTS:case b.PERMISSION_DENIED:case b.FAILED_PRECONDITION:case b.ABORTED:case b.OUT_OF_RANGE:case b.UNIMPLEMENTED:case b.DATA_LOSS:return!0}}function Sl(n){if(n===void 0)return ve("GRPC error has no .code"),b.UNKNOWN;switch(n){case Et.OK:return b.OK;case Et.CANCELLED:return b.CANCELLED;case Et.UNKNOWN:return b.UNKNOWN;case Et.DEADLINE_EXCEEDED:return b.DEADLINE_EXCEEDED;case Et.RESOURCE_EXHAUSTED:return b.RESOURCE_EXHAUSTED;case Et.INTERNAL:return b.INTERNAL;case Et.UNAVAILABLE:return b.UNAVAILABLE;case Et.UNAUTHENTICATED:return b.UNAUTHENTICATED;case Et.INVALID_ARGUMENT:return b.INVALID_ARGUMENT;case Et.NOT_FOUND:return b.NOT_FOUND;case Et.ALREADY_EXISTS:return b.ALREADY_EXISTS;case Et.PERMISSION_DENIED:return b.PERMISSION_DENIED;case Et.FAILED_PRECONDITION:return b.FAILED_PRECONDITION;case Et.ABORTED:return b.ABORTED;case Et.OUT_OF_RANGE:return b.OUT_OF_RANGE;case Et.UNIMPLEMENTED:return b.UNIMPLEMENTED;case Et.DATA_LOSS:return b.DATA_LOSS;default:return $()}}(tt=Et||(Et={}))[tt.OK=0]="OK",tt[tt.CANCELLED=1]="CANCELLED",tt[tt.UNKNOWN=2]="UNKNOWN",tt[tt.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",tt[tt.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",tt[tt.NOT_FOUND=5]="NOT_FOUND",tt[tt.ALREADY_EXISTS=6]="ALREADY_EXISTS",tt[tt.PERMISSION_DENIED=7]="PERMISSION_DENIED",tt[tt.UNAUTHENTICATED=16]="UNAUTHENTICATED",tt[tt.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",tt[tt.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",tt[tt.ABORTED=10]="ABORTED",tt[tt.OUT_OF_RANGE=11]="OUT_OF_RANGE",tt[tt.UNIMPLEMENTED=12]="UNIMPLEMENTED",tt[tt.INTERNAL=13]="INTERNAL",tt[tt.UNAVAILABLE=14]="UNAVAILABLE",tt[tt.DATA_LOSS=15]="DATA_LOSS";/**
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
 */function gh(){return new TextEncoder}/**
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
 */const _h=new Ye([4294967295,4294967295],0);function pa(n){const t=gh().encode(n),e=new Za;return e.update(t),new Uint8Array(e.digest())}function ma(n){const t=new DataView(n.buffer),e=t.getUint32(0,!0),s=t.getUint32(4,!0),i=t.getUint32(8,!0),o=t.getUint32(12,!0);return[new Ye([e,s],0),new Ye([i,o],0)]}class Si{constructor(t,e,s){if(this.bitmap=t,this.padding=e,this.hashCount=s,e<0||e>=8)throw new Yn(`Invalid padding: ${e}`);if(s<0)throw new Yn(`Invalid hash count: ${s}`);if(t.length>0&&this.hashCount===0)throw new Yn(`Invalid hash count: ${s}`);if(t.length===0&&e!==0)throw new Yn(`Invalid padding when bitmap length is 0: ${e}`);this.Ie=8*t.length-e,this.Te=Ye.fromNumber(this.Ie)}Ee(t,e,s){let i=t.add(e.multiply(Ye.fromNumber(s)));return i.compare(_h)===1&&(i=new Ye([i.getBits(0),i.getBits(1)],0)),i.modulo(this.Te).toNumber()}de(t){return(this.bitmap[Math.floor(t/8)]&1<<t%8)!=0}mightContain(t){if(this.Ie===0)return!1;const e=pa(t),[s,i]=ma(e);for(let o=0;o<this.hashCount;o++){const a=this.Ee(s,i,o);if(!this.de(a))return!1}return!0}static create(t,e,s){const i=t%8==0?0:8-t%8,o=new Uint8Array(Math.ceil(t/8)),a=new Si(o,i,e);return s.forEach(c=>a.insert(c)),a}insert(t){if(this.Ie===0)return;const e=pa(t),[s,i]=ma(e);for(let o=0;o<this.hashCount;o++){const a=this.Ee(s,i,o);this.Ae(a)}}Ae(t){const e=Math.floor(t/8),s=t%8;this.bitmap[e]|=1<<s}}class Yn extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
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
 */class Tr{constructor(t,e,s,i,o){this.snapshotVersion=t,this.targetChanges=e,this.targetMismatches=s,this.documentUpdates=i,this.resolvedLimboDocuments=o}static createSynthesizedRemoteEventForCurrentChange(t,e,s){const i=new Map;return i.set(t,ms.createSynthesizedTargetChangeForCurrentChange(t,e,s)),new Tr(Q.min(),i,new gt(rt),Te(),Z())}}class ms{constructor(t,e,s,i,o){this.resumeToken=t,this.current=e,this.addedDocuments=s,this.modifiedDocuments=i,this.removedDocuments=o}static createSynthesizedTargetChangeForCurrentChange(t,e,s){return new ms(s,e,Z(),Z(),Z())}}/**
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
 */class sr{constructor(t,e,s,i){this.Re=t,this.removedTargetIds=e,this.key=s,this.Ve=i}}class bl{constructor(t,e){this.targetId=t,this.me=e}}class kl{constructor(t,e,s=Nt.EMPTY_BYTE_STRING,i=null){this.state=t,this.targetIds=e,this.resumeToken=s,this.cause=i}}class ga{constructor(){this.fe=0,this.ge=ya(),this.pe=Nt.EMPTY_BYTE_STRING,this.ye=!1,this.we=!0}get current(){return this.ye}get resumeToken(){return this.pe}get Se(){return this.fe!==0}get be(){return this.we}De(t){t.approximateByteSize()>0&&(this.we=!0,this.pe=t)}ve(){let t=Z(),e=Z(),s=Z();return this.ge.forEach((i,o)=>{switch(o){case 0:t=t.add(i);break;case 2:e=e.add(i);break;case 1:s=s.add(i);break;default:$()}}),new ms(this.pe,this.ye,t,e,s)}Ce(){this.we=!1,this.ge=ya()}Fe(t,e){this.we=!0,this.ge=this.ge.insert(t,e)}Me(t){this.we=!0,this.ge=this.ge.remove(t)}xe(){this.fe+=1}Oe(){this.fe-=1,at(this.fe>=0)}Ne(){this.we=!0,this.ye=!0}}class yh{constructor(t){this.Le=t,this.Be=new Map,this.ke=Te(),this.qe=_a(),this.Qe=new gt(rt)}Ke(t){for(const e of t.Re)t.Ve&&t.Ve.isFoundDocument()?this.$e(e,t.Ve):this.Ue(e,t.key,t.Ve);for(const e of t.removedTargetIds)this.Ue(e,t.key,t.Ve)}We(t){this.forEachTarget(t,e=>{const s=this.Ge(e);switch(t.state){case 0:this.ze(e)&&s.De(t.resumeToken);break;case 1:s.Oe(),s.Se||s.Ce(),s.De(t.resumeToken);break;case 2:s.Oe(),s.Se||this.removeTarget(e);break;case 3:this.ze(e)&&(s.Ne(),s.De(t.resumeToken));break;case 4:this.ze(e)&&(this.je(e),s.De(t.resumeToken));break;default:$()}})}forEachTarget(t,e){t.targetIds.length>0?t.targetIds.forEach(e):this.Be.forEach((s,i)=>{this.ze(i)&&e(i)})}He(t){const e=t.targetId,s=t.me.count,i=this.Je(e);if(i){const o=i.target;if(oi(o))if(s===0){const a=new B(o.path);this.Ue(e,a,Ut.newNoDocument(a,Q.min()))}else at(s===1);else{const a=this.Ye(e);if(a!==s){const c=this.Ze(t),h=c?this.Xe(c,t,a):1;if(h!==0){this.je(e);const f=h===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Qe=this.Qe.insert(e,f)}}}}}Ze(t){const e=t.me.unchangedNames;if(!e||!e.bits)return null;const{bits:{bitmap:s="",padding:i=0},hashCount:o=0}=e;let a,c;try{a=tn(s).toUint8Array()}catch(h){if(h instanceof ll)return vn("Decoding the base64 bloom filter in existence filter failed ("+h.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw h}try{c=new Si(a,i,o)}catch(h){return vn(h instanceof Yn?"BloomFilter error: ":"Applying bloom filter failed: ",h),null}return c.Ie===0?null:c}Xe(t,e,s){return e.me.count===s-this.nt(t,e.targetId)?0:2}nt(t,e){const s=this.Le.getRemoteKeysForTarget(e);let i=0;return s.forEach(o=>{const a=this.Le.tt(),c=`projects/${a.projectId}/databases/${a.database}/documents/${o.path.canonicalString()}`;t.mightContain(c)||(this.Ue(e,o,null),i++)}),i}rt(t){const e=new Map;this.Be.forEach((o,a)=>{const c=this.Je(a);if(c){if(o.current&&oi(c.target)){const h=new B(c.target.path);this.ke.get(h)!==null||this.it(a,h)||this.Ue(a,h,Ut.newNoDocument(h,t))}o.be&&(e.set(a,o.ve()),o.Ce())}});let s=Z();this.qe.forEach((o,a)=>{let c=!0;a.forEachWhile(h=>{const f=this.Je(h);return!f||f.purpose==="TargetPurposeLimboResolution"||(c=!1,!1)}),c&&(s=s.add(o))}),this.ke.forEach((o,a)=>a.setReadTime(t));const i=new Tr(t,e,this.Qe,this.ke,s);return this.ke=Te(),this.qe=_a(),this.Qe=new gt(rt),i}$e(t,e){if(!this.ze(t))return;const s=this.it(t,e.key)?2:0;this.Ge(t).Fe(e.key,s),this.ke=this.ke.insert(e.key,e),this.qe=this.qe.insert(e.key,this.st(e.key).add(t))}Ue(t,e,s){if(!this.ze(t))return;const i=this.Ge(t);this.it(t,e)?i.Fe(e,1):i.Me(e),this.qe=this.qe.insert(e,this.st(e).delete(t)),s&&(this.ke=this.ke.insert(e,s))}removeTarget(t){this.Be.delete(t)}Ye(t){const e=this.Ge(t).ve();return this.Le.getRemoteKeysForTarget(t).size+e.addedDocuments.size-e.removedDocuments.size}xe(t){this.Ge(t).xe()}Ge(t){let e=this.Be.get(t);return e||(e=new ga,this.Be.set(t,e)),e}st(t){let e=this.qe.get(t);return e||(e=new Dt(rt),this.qe=this.qe.insert(t,e)),e}ze(t){const e=this.Je(t)!==null;return e||F("WatchChangeAggregator","Detected inactive target",t),e}Je(t){const e=this.Be.get(t);return e&&e.Se?null:this.Le.ot(t)}je(t){this.Be.set(t,new ga),this.Le.getRemoteKeysForTarget(t).forEach(e=>{this.Ue(t,e,null)})}it(t,e){return this.Le.getRemoteKeysForTarget(t).has(e)}}function _a(){return new gt(B.comparator)}function ya(){return new gt(B.comparator)}const vh={asc:"ASCENDING",desc:"DESCENDING"},Th={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},Eh={and:"AND",or:"OR"};class wh{constructor(t,e){this.databaseId=t,this.useProto3Json=e}}function li(n,t){return n.useProto3Json||pr(t)?t:{value:t}}function cr(n,t){return n.useProto3Json?`${new Date(1e3*t.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+t.nanoseconds).slice(-9)}Z`:{seconds:""+t.seconds,nanos:t.nanoseconds}}function Dl(n,t){return n.useProto3Json?t.toBase64():t.toUint8Array()}function Ah(n,t){return cr(n,t.toTimestamp())}function ce(n){return at(!!n),Q.fromTimestamp(function(e){const s=Oe(e);return new At(s.seconds,s.nanos)}(n))}function bi(n,t){return ui(n,t).canonicalString()}function ui(n,t){const e=function(i){return new pt(["projects",i.projectId,"databases",i.database])}(n).child("documents");return t===void 0?e:e.child(t)}function Nl(n){const t=pt.fromString(n);return at(Fl(t)),t}function ci(n,t){return bi(n.databaseId,t.path)}function Hr(n,t){const e=Nl(t);if(e.get(1)!==n.databaseId.projectId)throw new L(b.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+e.get(1)+" vs "+n.databaseId.projectId);if(e.get(3)!==n.databaseId.database)throw new L(b.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+e.get(3)+" vs "+n.databaseId.database);return new B(Ol(e))}function xl(n,t){return bi(n.databaseId,t)}function Ih(n){const t=Nl(n);return t.length===4?pt.emptyPath():Ol(t)}function hi(n){return new pt(["projects",n.databaseId.projectId,"databases",n.databaseId.database]).canonicalString()}function Ol(n){return at(n.length>4&&n.get(4)==="documents"),n.popFirst(5)}function va(n,t,e){return{name:ci(n,t),fields:e.value.mapValue.fields}}function Rh(n,t){let e;if("targetChange"in t){t.targetChange;const s=function(f){return f==="NO_CHANGE"?0:f==="ADD"?1:f==="REMOVE"?2:f==="CURRENT"?3:f==="RESET"?4:$()}(t.targetChange.targetChangeType||"NO_CHANGE"),i=t.targetChange.targetIds||[],o=function(f,p){return f.useProto3Json?(at(p===void 0||typeof p=="string"),Nt.fromBase64String(p||"")):(at(p===void 0||p instanceof Buffer||p instanceof Uint8Array),Nt.fromUint8Array(p||new Uint8Array))}(n,t.targetChange.resumeToken),a=t.targetChange.cause,c=a&&function(f){const p=f.code===void 0?b.UNKNOWN:Sl(f.code);return new L(p,f.message||"")}(a);e=new kl(s,i,o,c||null)}else if("documentChange"in t){t.documentChange;const s=t.documentChange;s.document,s.document.name,s.document.updateTime;const i=Hr(n,s.document.name),o=ce(s.document.updateTime),a=s.document.createTime?ce(s.document.createTime):Q.min(),c=new jt({mapValue:{fields:s.document.fields}}),h=Ut.newFoundDocument(i,o,a,c),f=s.targetIds||[],p=s.removedTargetIds||[];e=new sr(f,p,h.key,h)}else if("documentDelete"in t){t.documentDelete;const s=t.documentDelete;s.document;const i=Hr(n,s.document),o=s.readTime?ce(s.readTime):Q.min(),a=Ut.newNoDocument(i,o),c=s.removedTargetIds||[];e=new sr([],c,a.key,a)}else if("documentRemove"in t){t.documentRemove;const s=t.documentRemove;s.document;const i=Hr(n,s.document),o=s.removedTargetIds||[];e=new sr([],o,i,null)}else{if(!("filter"in t))return $();{t.filter;const s=t.filter;s.targetId;const{count:i=0,unchangedNames:o}=s,a=new ph(i,o),c=s.targetId;e=new bl(c,a)}}return e}function Ph(n,t){let e;if(t instanceof ps)e={update:va(n,t.key,t.value)};else if(t instanceof Ci)e={delete:ci(n,t.key)};else if(t instanceof Fe)e={update:va(n,t.key,t.data),updateMask:Oh(t.fieldMask)};else{if(!(t instanceof hh))return $();e={verify:ci(n,t.key)}}return t.fieldTransforms.length>0&&(e.updateTransforms=t.fieldTransforms.map(s=>function(o,a){const c=a.transform;if(c instanceof us)return{fieldPath:a.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(c instanceof cs)return{fieldPath:a.field.canonicalString(),appendMissingElements:{values:c.elements}};if(c instanceof hs)return{fieldPath:a.field.canonicalString(),removeAllFromArray:{values:c.elements}};if(c instanceof ur)return{fieldPath:a.field.canonicalString(),increment:c.Pe};throw $()}(0,s))),t.precondition.isNone||(e.currentDocument=function(i,o){return o.updateTime!==void 0?{updateTime:Ah(i,o.updateTime)}:o.exists!==void 0?{exists:o.exists}:$()}(n,t.precondition)),e}function Ch(n,t){return n&&n.length>0?(at(t!==void 0),n.map(e=>function(i,o){let a=i.updateTime?ce(i.updateTime):ce(o);return a.isEqual(Q.min())&&(a=ce(o)),new lh(a,i.transformResults||[])}(e,t))):[]}function Vh(n,t){return{documents:[xl(n,t.path)]}}function Sh(n,t){const e={structuredQuery:{}},s=t.path;let i;t.collectionGroup!==null?(i=s,e.structuredQuery.from=[{collectionId:t.collectionGroup,allDescendants:!0}]):(i=s.popLast(),e.structuredQuery.from=[{collectionId:s.lastSegment()}]),e.parent=xl(n,i);const o=function(f){if(f.length!==0)return Ll(ne.create(f,"and"))}(t.filters);o&&(e.structuredQuery.where=o);const a=function(f){if(f.length!==0)return f.map(p=>function(R){return{field:mn(R.field),direction:Dh(R.dir)}}(p))}(t.orderBy);a&&(e.structuredQuery.orderBy=a);const c=li(n,t.limit);return c!==null&&(e.structuredQuery.limit=c),t.startAt&&(e.structuredQuery.startAt=function(f){return{before:f.inclusive,values:f.position}}(t.startAt)),t.endAt&&(e.structuredQuery.endAt=function(f){return{before:!f.inclusive,values:f.position}}(t.endAt)),{_t:e,parent:i}}function bh(n){let t=Ih(n.parent);const e=n.structuredQuery,s=e.from?e.from.length:0;let i=null;if(s>0){at(s===1);const p=e.from[0];p.allDescendants?i=p.collectionId:t=t.child(p.collectionId)}let o=[];e.where&&(o=function(E){const R=Ml(E);return R instanceof ne&&dl(R)?R.getFilters():[R]}(e.where));let a=[];e.orderBy&&(a=function(E){return E.map(R=>function(N){return new ls(gn(N.field),function(D){switch(D){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(N.direction))}(R))}(e.orderBy));let c=null;e.limit&&(c=function(E){let R;return R=typeof E=="object"?E.value:E,pr(R)?null:R}(e.limit));let h=null;e.startAt&&(h=function(E){const R=!!E.before,V=E.values||[];return new ar(V,R)}(e.startAt));let f=null;return e.endAt&&(f=function(E){const R=!E.before,V=E.values||[];return new ar(V,R)}(e.endAt)),Wc(t,i,a,o,c,"F",h,f)}function kh(n,t){const e=function(i){switch(i){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return $()}}(t.purpose);return e==null?null:{"goog-listen-tags":e}}function Ml(n){return n.unaryFilter!==void 0?function(e){switch(e.unaryFilter.op){case"IS_NAN":const s=gn(e.unaryFilter.field);return wt.create(s,"==",{doubleValue:NaN});case"IS_NULL":const i=gn(e.unaryFilter.field);return wt.create(i,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const o=gn(e.unaryFilter.field);return wt.create(o,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const a=gn(e.unaryFilter.field);return wt.create(a,"!=",{nullValue:"NULL_VALUE"});default:return $()}}(n):n.fieldFilter!==void 0?function(e){return wt.create(gn(e.fieldFilter.field),function(i){switch(i){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return $()}}(e.fieldFilter.op),e.fieldFilter.value)}(n):n.compositeFilter!==void 0?function(e){return ne.create(e.compositeFilter.filters.map(s=>Ml(s)),function(i){switch(i){case"AND":return"and";case"OR":return"or";default:return $()}}(e.compositeFilter.op))}(n):$()}function Dh(n){return vh[n]}function Nh(n){return Th[n]}function xh(n){return Eh[n]}function mn(n){return{fieldPath:n.canonicalString()}}function gn(n){return kt.fromServerFormat(n.fieldPath)}function Ll(n){return n instanceof wt?function(e){if(e.op==="=="){if(ia(e.value))return{unaryFilter:{field:mn(e.field),op:"IS_NAN"}};if(ra(e.value))return{unaryFilter:{field:mn(e.field),op:"IS_NULL"}}}else if(e.op==="!="){if(ia(e.value))return{unaryFilter:{field:mn(e.field),op:"IS_NOT_NAN"}};if(ra(e.value))return{unaryFilter:{field:mn(e.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:mn(e.field),op:Nh(e.op),value:e.value}}}(n):n instanceof ne?function(e){const s=e.getFilters().map(i=>Ll(i));return s.length===1?s[0]:{compositeFilter:{op:xh(e.op),filters:s}}}(n):$()}function Oh(n){const t=[];return n.fields.forEach(e=>t.push(e.canonicalString())),{fieldPaths:t}}function Fl(n){return n.length>=4&&n.get(0)==="projects"&&n.get(2)==="databases"}/**
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
 */class ke{constructor(t,e,s,i,o=Q.min(),a=Q.min(),c=Nt.EMPTY_BYTE_STRING,h=null){this.target=t,this.targetId=e,this.purpose=s,this.sequenceNumber=i,this.snapshotVersion=o,this.lastLimboFreeSnapshotVersion=a,this.resumeToken=c,this.expectedCount=h}withSequenceNumber(t){return new ke(this.target,this.targetId,this.purpose,t,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(t,e){return new ke(this.target,this.targetId,this.purpose,this.sequenceNumber,e,this.lastLimboFreeSnapshotVersion,t,null)}withExpectedCount(t){return new ke(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,t)}withLastLimboFreeSnapshotVersion(t){return new ke(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,t,this.resumeToken,this.expectedCount)}}/**
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
 */class Mh{constructor(t){this.ct=t}}function Lh(n){const t=bh({parent:n.parent,structuredQuery:n.structuredQuery});return n.limitType==="LAST"?lr(t,t.limit,"L"):t}/**
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
 */class Fh{constructor(){this.un=new Uh}addToCollectionParentIndex(t,e){return this.un.add(e),k.resolve()}getCollectionParents(t,e){return k.resolve(this.un.getEntries(e))}addFieldIndex(t,e){return k.resolve()}deleteFieldIndex(t,e){return k.resolve()}deleteAllFieldIndexes(t){return k.resolve()}createTargetIndexes(t,e){return k.resolve()}getDocumentsMatchingTarget(t,e){return k.resolve(null)}getIndexType(t,e){return k.resolve(0)}getFieldIndexes(t,e){return k.resolve([])}getNextCollectionGroupToUpdate(t){return k.resolve(null)}getMinOffset(t,e){return k.resolve(xe.min())}getMinOffsetFromCollectionGroup(t,e){return k.resolve(xe.min())}updateCollectionGroup(t,e,s){return k.resolve()}updateIndexEntries(t,e){return k.resolve()}}class Uh{constructor(){this.index={}}add(t){const e=t.lastSegment(),s=t.popLast(),i=this.index[e]||new Dt(pt.comparator),o=!i.has(s);return this.index[e]=i.add(s),o}has(t){const e=t.lastSegment(),s=t.popLast(),i=this.index[e];return i&&i.has(s)}getEntries(t){return(this.index[t]||new Dt(pt.comparator)).toArray()}}/**
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
 */class An{constructor(t){this.Ln=t}next(){return this.Ln+=2,this.Ln}static Bn(){return new An(0)}static kn(){return new An(-1)}}/**
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
 */class Bh{constructor(){this.changes=new Vn(t=>t.toString(),(t,e)=>t.isEqual(e)),this.changesApplied=!1}addEntry(t){this.assertNotApplied(),this.changes.set(t.key,t)}removeEntry(t,e){this.assertNotApplied(),this.changes.set(t,Ut.newInvalidDocument(t).setReadTime(e))}getEntry(t,e){this.assertNotApplied();const s=this.changes.get(e);return s!==void 0?k.resolve(s):this.getFromCache(t,e)}getEntries(t,e){return this.getAllFromCache(t,e)}apply(t){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(t)}assertNotApplied(){}}/**
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
 */class qh{constructor(t,e){this.overlayedDocument=t,this.mutatedFields=e}}/**
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
 */class jh{constructor(t,e,s,i){this.remoteDocumentCache=t,this.mutationQueue=e,this.documentOverlayCache=s,this.indexManager=i}getDocument(t,e){let s=null;return this.documentOverlayCache.getOverlay(t,e).next(i=>(s=i,this.remoteDocumentCache.getEntry(t,e))).next(i=>(s!==null&&ns(s.mutation,i,Qt.empty(),At.now()),i))}getDocuments(t,e){return this.remoteDocumentCache.getEntries(t,e).next(s=>this.getLocalViewOfDocuments(t,s,Z()).next(()=>s))}getLocalViewOfDocuments(t,e,s=Z()){const i=Xe();return this.populateOverlays(t,i,e).next(()=>this.computeViews(t,e,i,s).next(o=>{let a=Xn();return o.forEach((c,h)=>{a=a.insert(c,h.overlayedDocument)}),a}))}getOverlayedDocuments(t,e){const s=Xe();return this.populateOverlays(t,s,e).next(()=>this.computeViews(t,e,s,Z()))}populateOverlays(t,e,s){const i=[];return s.forEach(o=>{e.has(o)||i.push(o)}),this.documentOverlayCache.getOverlays(t,i).next(o=>{o.forEach((a,c)=>{e.set(a,c)})})}computeViews(t,e,s,i){let o=Te();const a=es(),c=function(){return es()}();return e.forEach((h,f)=>{const p=s.get(f.key);i.has(f.key)&&(p===void 0||p.mutation instanceof Fe)?o=o.insert(f.key,f):p!==void 0?(a.set(f.key,p.mutation.getFieldMask()),ns(p.mutation,f,p.mutation.getFieldMask(),At.now())):a.set(f.key,Qt.empty())}),this.recalculateAndSaveOverlays(t,o).next(h=>(h.forEach((f,p)=>a.set(f,p)),e.forEach((f,p)=>{var E;return c.set(f,new qh(p,(E=a.get(f))!==null&&E!==void 0?E:null))}),c))}recalculateAndSaveOverlays(t,e){const s=es();let i=new gt((a,c)=>a-c),o=Z();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(t,e).next(a=>{for(const c of a)c.keys().forEach(h=>{const f=e.get(h);if(f===null)return;let p=s.get(h)||Qt.empty();p=c.applyToLocalView(f,p),s.set(h,p);const E=(i.get(c.batchId)||Z()).add(h);i=i.insert(c.batchId,E)})}).next(()=>{const a=[],c=i.getReverseIterator();for(;c.hasNext();){const h=c.getNext(),f=h.key,p=h.value,E=El();p.forEach(R=>{if(!o.has(R)){const V=Cl(e.get(R),s.get(R));V!==null&&E.set(R,V),o=o.add(R)}}),a.push(this.documentOverlayCache.saveOverlays(t,f,E))}return k.waitFor(a)}).next(()=>s)}recalculateAndSaveOverlaysForDocumentKeys(t,e){return this.remoteDocumentCache.getEntries(t,e).next(s=>this.recalculateAndSaveOverlays(t,s))}getDocumentsMatchingQuery(t,e,s,i){return function(a){return B.isDocumentKey(a.path)&&a.collectionGroup===null&&a.filters.length===0}(e)?this.getDocumentsMatchingDocumentQuery(t,e.path):gl(e)?this.getDocumentsMatchingCollectionGroupQuery(t,e,s,i):this.getDocumentsMatchingCollectionQuery(t,e,s,i)}getNextDocuments(t,e,s,i){return this.remoteDocumentCache.getAllFromCollectionGroup(t,e,s,i).next(o=>{const a=i-o.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(t,e,s.largestBatchId,i-o.size):k.resolve(Xe());let c=-1,h=o;return a.next(f=>k.forEach(f,(p,E)=>(c<E.largestBatchId&&(c=E.largestBatchId),o.get(p)?k.resolve():this.remoteDocumentCache.getEntry(t,p).next(R=>{h=h.insert(p,R)}))).next(()=>this.populateOverlays(t,f,o)).next(()=>this.computeViews(t,h,f,Z())).next(p=>({batchId:c,changes:Tl(p)})))})}getDocumentsMatchingDocumentQuery(t,e){return this.getDocument(t,new B(e)).next(s=>{let i=Xn();return s.isFoundDocument()&&(i=i.insert(s.key,s)),i})}getDocumentsMatchingCollectionGroupQuery(t,e,s,i){const o=e.collectionGroup;let a=Xn();return this.indexManager.getCollectionParents(t,o).next(c=>k.forEach(c,h=>{const f=function(E,R){return new Cn(R,null,E.explicitOrderBy.slice(),E.filters.slice(),E.limit,E.limitType,E.startAt,E.endAt)}(e,h.child(o));return this.getDocumentsMatchingCollectionQuery(t,f,s,i).next(p=>{p.forEach((E,R)=>{a=a.insert(E,R)})})}).next(()=>a))}getDocumentsMatchingCollectionQuery(t,e,s,i){let o;return this.documentOverlayCache.getOverlaysForCollection(t,e.path,s.largestBatchId).next(a=>(o=a,this.remoteDocumentCache.getDocumentsMatchingQuery(t,e,s,o,i))).next(a=>{o.forEach((h,f)=>{const p=f.getKey();a.get(p)===null&&(a=a.insert(p,Ut.newInvalidDocument(p)))});let c=Xn();return a.forEach((h,f)=>{const p=o.get(h);p!==void 0&&ns(p.mutation,f,Qt.empty(),At.now()),_r(e,f)&&(c=c.insert(h,f))}),c})}}/**
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
 */class $h{constructor(t){this.serializer=t,this.hr=new Map,this.Pr=new Map}getBundleMetadata(t,e){return k.resolve(this.hr.get(e))}saveBundleMetadata(t,e){return this.hr.set(e.id,function(i){return{id:i.id,version:i.version,createTime:ce(i.createTime)}}(e)),k.resolve()}getNamedQuery(t,e){return k.resolve(this.Pr.get(e))}saveNamedQuery(t,e){return this.Pr.set(e.name,function(i){return{name:i.name,query:Lh(i.bundledQuery),readTime:ce(i.readTime)}}(e)),k.resolve()}}/**
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
 */class zh{constructor(){this.overlays=new gt(B.comparator),this.Ir=new Map}getOverlay(t,e){return k.resolve(this.overlays.get(e))}getOverlays(t,e){const s=Xe();return k.forEach(e,i=>this.getOverlay(t,i).next(o=>{o!==null&&s.set(i,o)})).next(()=>s)}saveOverlays(t,e,s){return s.forEach((i,o)=>{this.ht(t,e,o)}),k.resolve()}removeOverlaysForBatchId(t,e,s){const i=this.Ir.get(s);return i!==void 0&&(i.forEach(o=>this.overlays=this.overlays.remove(o)),this.Ir.delete(s)),k.resolve()}getOverlaysForCollection(t,e,s){const i=Xe(),o=e.length+1,a=new B(e.child("")),c=this.overlays.getIteratorFrom(a);for(;c.hasNext();){const h=c.getNext().value,f=h.getKey();if(!e.isPrefixOf(f.path))break;f.path.length===o&&h.largestBatchId>s&&i.set(h.getKey(),h)}return k.resolve(i)}getOverlaysForCollectionGroup(t,e,s,i){let o=new gt((f,p)=>f-p);const a=this.overlays.getIterator();for(;a.hasNext();){const f=a.getNext().value;if(f.getKey().getCollectionGroup()===e&&f.largestBatchId>s){let p=o.get(f.largestBatchId);p===null&&(p=Xe(),o=o.insert(f.largestBatchId,p)),p.set(f.getKey(),f)}}const c=Xe(),h=o.getIterator();for(;h.hasNext()&&(h.getNext().value.forEach((f,p)=>c.set(f,p)),!(c.size()>=i)););return k.resolve(c)}ht(t,e,s){const i=this.overlays.get(s.key);if(i!==null){const a=this.Ir.get(i.largestBatchId).delete(s.key);this.Ir.set(i.largestBatchId,a)}this.overlays=this.overlays.insert(s.key,new fh(e,s));let o=this.Ir.get(e);o===void 0&&(o=Z(),this.Ir.set(e,o)),this.Ir.set(e,o.add(s.key))}}/**
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
 */class Kh{constructor(){this.sessionToken=Nt.EMPTY_BYTE_STRING}getSessionToken(t){return k.resolve(this.sessionToken)}setSessionToken(t,e){return this.sessionToken=e,k.resolve()}}/**
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
 */class ki{constructor(){this.Tr=new Dt(Ct.Er),this.dr=new Dt(Ct.Ar)}isEmpty(){return this.Tr.isEmpty()}addReference(t,e){const s=new Ct(t,e);this.Tr=this.Tr.add(s),this.dr=this.dr.add(s)}Rr(t,e){t.forEach(s=>this.addReference(s,e))}removeReference(t,e){this.Vr(new Ct(t,e))}mr(t,e){t.forEach(s=>this.removeReference(s,e))}gr(t){const e=new B(new pt([])),s=new Ct(e,t),i=new Ct(e,t+1),o=[];return this.dr.forEachInRange([s,i],a=>{this.Vr(a),o.push(a.key)}),o}pr(){this.Tr.forEach(t=>this.Vr(t))}Vr(t){this.Tr=this.Tr.delete(t),this.dr=this.dr.delete(t)}yr(t){const e=new B(new pt([])),s=new Ct(e,t),i=new Ct(e,t+1);let o=Z();return this.dr.forEachInRange([s,i],a=>{o=o.add(a.key)}),o}containsKey(t){const e=new Ct(t,0),s=this.Tr.firstAfterOrEqual(e);return s!==null&&t.isEqual(s.key)}}class Ct{constructor(t,e){this.key=t,this.wr=e}static Er(t,e){return B.comparator(t.key,e.key)||rt(t.wr,e.wr)}static Ar(t,e){return rt(t.wr,e.wr)||B.comparator(t.key,e.key)}}/**
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
 */class Gh{constructor(t,e){this.indexManager=t,this.referenceDelegate=e,this.mutationQueue=[],this.Sr=1,this.br=new Dt(Ct.Er)}checkEmpty(t){return k.resolve(this.mutationQueue.length===0)}addMutationBatch(t,e,s,i){const o=this.Sr;this.Sr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const a=new dh(o,e,s,i);this.mutationQueue.push(a);for(const c of i)this.br=this.br.add(new Ct(c.key,o)),this.indexManager.addToCollectionParentIndex(t,c.key.path.popLast());return k.resolve(a)}lookupMutationBatch(t,e){return k.resolve(this.Dr(e))}getNextMutationBatchAfterBatchId(t,e){const s=e+1,i=this.vr(s),o=i<0?0:i;return k.resolve(this.mutationQueue.length>o?this.mutationQueue[o]:null)}getHighestUnacknowledgedBatchId(){return k.resolve(this.mutationQueue.length===0?-1:this.Sr-1)}getAllMutationBatches(t){return k.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(t,e){const s=new Ct(e,0),i=new Ct(e,Number.POSITIVE_INFINITY),o=[];return this.br.forEachInRange([s,i],a=>{const c=this.Dr(a.wr);o.push(c)}),k.resolve(o)}getAllMutationBatchesAffectingDocumentKeys(t,e){let s=new Dt(rt);return e.forEach(i=>{const o=new Ct(i,0),a=new Ct(i,Number.POSITIVE_INFINITY);this.br.forEachInRange([o,a],c=>{s=s.add(c.wr)})}),k.resolve(this.Cr(s))}getAllMutationBatchesAffectingQuery(t,e){const s=e.path,i=s.length+1;let o=s;B.isDocumentKey(o)||(o=o.child(""));const a=new Ct(new B(o),0);let c=new Dt(rt);return this.br.forEachWhile(h=>{const f=h.key.path;return!!s.isPrefixOf(f)&&(f.length===i&&(c=c.add(h.wr)),!0)},a),k.resolve(this.Cr(c))}Cr(t){const e=[];return t.forEach(s=>{const i=this.Dr(s);i!==null&&e.push(i)}),e}removeMutationBatch(t,e){at(this.Fr(e.batchId,"removed")===0),this.mutationQueue.shift();let s=this.br;return k.forEach(e.mutations,i=>{const o=new Ct(i.key,e.batchId);return s=s.delete(o),this.referenceDelegate.markPotentiallyOrphaned(t,i.key)}).next(()=>{this.br=s})}On(t){}containsKey(t,e){const s=new Ct(e,0),i=this.br.firstAfterOrEqual(s);return k.resolve(e.isEqual(i&&i.key))}performConsistencyCheck(t){return this.mutationQueue.length,k.resolve()}Fr(t,e){return this.vr(t)}vr(t){return this.mutationQueue.length===0?0:t-this.mutationQueue[0].batchId}Dr(t){const e=this.vr(t);return e<0||e>=this.mutationQueue.length?null:this.mutationQueue[e]}}/**
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
 */class Qh{constructor(t){this.Mr=t,this.docs=function(){return new gt(B.comparator)}(),this.size=0}setIndexManager(t){this.indexManager=t}addEntry(t,e){const s=e.key,i=this.docs.get(s),o=i?i.size:0,a=this.Mr(e);return this.docs=this.docs.insert(s,{document:e.mutableCopy(),size:a}),this.size+=a-o,this.indexManager.addToCollectionParentIndex(t,s.path.popLast())}removeEntry(t){const e=this.docs.get(t);e&&(this.docs=this.docs.remove(t),this.size-=e.size)}getEntry(t,e){const s=this.docs.get(e);return k.resolve(s?s.document.mutableCopy():Ut.newInvalidDocument(e))}getEntries(t,e){let s=Te();return e.forEach(i=>{const o=this.docs.get(i);s=s.insert(i,o?o.document.mutableCopy():Ut.newInvalidDocument(i))}),k.resolve(s)}getDocumentsMatchingQuery(t,e,s,i){let o=Te();const a=e.path,c=new B(a.child("")),h=this.docs.getIteratorFrom(c);for(;h.hasNext();){const{key:f,value:{document:p}}=h.getNext();if(!a.isPrefixOf(f.path))break;f.path.length>a.length+1||Sc(Vc(p),s)<=0||(i.has(p.key)||_r(e,p))&&(o=o.insert(p.key,p.mutableCopy()))}return k.resolve(o)}getAllFromCollectionGroup(t,e,s,i){$()}Or(t,e){return k.forEach(this.docs,s=>e(s))}newChangeBuffer(t){return new Wh(this)}getSize(t){return k.resolve(this.size)}}class Wh extends Bh{constructor(t){super(),this.cr=t}applyChanges(t){const e=[];return this.changes.forEach((s,i)=>{i.isValidDocument()?e.push(this.cr.addEntry(t,i)):this.cr.removeEntry(s)}),k.waitFor(e)}getFromCache(t,e){return this.cr.getEntry(t,e)}getAllFromCache(t,e){return this.cr.getEntries(t,e)}}/**
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
 */class Hh{constructor(t){this.persistence=t,this.Nr=new Vn(e=>Ii(e),Ri),this.lastRemoteSnapshotVersion=Q.min(),this.highestTargetId=0,this.Lr=0,this.Br=new ki,this.targetCount=0,this.kr=An.Bn()}forEachTarget(t,e){return this.Nr.forEach((s,i)=>e(i)),k.resolve()}getLastRemoteSnapshotVersion(t){return k.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(t){return k.resolve(this.Lr)}allocateTargetId(t){return this.highestTargetId=this.kr.next(),k.resolve(this.highestTargetId)}setTargetsMetadata(t,e,s){return s&&(this.lastRemoteSnapshotVersion=s),e>this.Lr&&(this.Lr=e),k.resolve()}Kn(t){this.Nr.set(t.target,t);const e=t.targetId;e>this.highestTargetId&&(this.kr=new An(e),this.highestTargetId=e),t.sequenceNumber>this.Lr&&(this.Lr=t.sequenceNumber)}addTargetData(t,e){return this.Kn(e),this.targetCount+=1,k.resolve()}updateTargetData(t,e){return this.Kn(e),k.resolve()}removeTargetData(t,e){return this.Nr.delete(e.target),this.Br.gr(e.targetId),this.targetCount-=1,k.resolve()}removeTargets(t,e,s){let i=0;const o=[];return this.Nr.forEach((a,c)=>{c.sequenceNumber<=e&&s.get(c.targetId)===null&&(this.Nr.delete(a),o.push(this.removeMatchingKeysForTargetId(t,c.targetId)),i++)}),k.waitFor(o).next(()=>i)}getTargetCount(t){return k.resolve(this.targetCount)}getTargetData(t,e){const s=this.Nr.get(e)||null;return k.resolve(s)}addMatchingKeys(t,e,s){return this.Br.Rr(e,s),k.resolve()}removeMatchingKeys(t,e,s){this.Br.mr(e,s);const i=this.persistence.referenceDelegate,o=[];return i&&e.forEach(a=>{o.push(i.markPotentiallyOrphaned(t,a))}),k.waitFor(o)}removeMatchingKeysForTargetId(t,e){return this.Br.gr(e),k.resolve()}getMatchingKeysForTargetId(t,e){const s=this.Br.yr(e);return k.resolve(s)}containsKey(t,e){return k.resolve(this.Br.containsKey(e))}}/**
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
 */class Xh{constructor(t,e){this.qr={},this.overlays={},this.Qr=new Ti(0),this.Kr=!1,this.Kr=!0,this.$r=new Kh,this.referenceDelegate=t(this),this.Ur=new Hh(this),this.indexManager=new Fh,this.remoteDocumentCache=function(i){return new Qh(i)}(s=>this.referenceDelegate.Wr(s)),this.serializer=new Mh(e),this.Gr=new $h(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.Kr=!1,Promise.resolve()}get started(){return this.Kr}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(t){return this.indexManager}getDocumentOverlayCache(t){let e=this.overlays[t.toKey()];return e||(e=new zh,this.overlays[t.toKey()]=e),e}getMutationQueue(t,e){let s=this.qr[t.toKey()];return s||(s=new Gh(e,this.referenceDelegate),this.qr[t.toKey()]=s),s}getGlobalsCache(){return this.$r}getTargetCache(){return this.Ur}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Gr}runTransaction(t,e,s){F("MemoryPersistence","Starting transaction:",t);const i=new Yh(this.Qr.next());return this.referenceDelegate.zr(),s(i).next(o=>this.referenceDelegate.jr(i).next(()=>o)).toPromise().then(o=>(i.raiseOnCommittedEvent(),o))}Hr(t,e){return k.or(Object.values(this.qr).map(s=>()=>s.containsKey(t,e)))}}class Yh extends kc{constructor(t){super(),this.currentSequenceNumber=t}}class Di{constructor(t){this.persistence=t,this.Jr=new ki,this.Yr=null}static Zr(t){return new Di(t)}get Xr(){if(this.Yr)return this.Yr;throw $()}addReference(t,e,s){return this.Jr.addReference(s,e),this.Xr.delete(s.toString()),k.resolve()}removeReference(t,e,s){return this.Jr.removeReference(s,e),this.Xr.add(s.toString()),k.resolve()}markPotentiallyOrphaned(t,e){return this.Xr.add(e.toString()),k.resolve()}removeTarget(t,e){this.Jr.gr(e.targetId).forEach(i=>this.Xr.add(i.toString()));const s=this.persistence.getTargetCache();return s.getMatchingKeysForTargetId(t,e.targetId).next(i=>{i.forEach(o=>this.Xr.add(o.toString()))}).next(()=>s.removeTargetData(t,e))}zr(){this.Yr=new Set}jr(t){const e=this.persistence.getRemoteDocumentCache().newChangeBuffer();return k.forEach(this.Xr,s=>{const i=B.fromPath(s);return this.ei(t,i).next(o=>{o||e.removeEntry(i,Q.min())})}).next(()=>(this.Yr=null,e.apply(t)))}updateLimboDocument(t,e){return this.ei(t,e).next(s=>{s?this.Xr.delete(e.toString()):this.Xr.add(e.toString())})}Wr(t){return 0}ei(t,e){return k.or([()=>k.resolve(this.Jr.containsKey(e)),()=>this.persistence.getTargetCache().containsKey(t,e),()=>this.persistence.Hr(t,e)])}}/**
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
 */class Ni{constructor(t,e,s,i){this.targetId=t,this.fromCache=e,this.$i=s,this.Ui=i}static Wi(t,e){let s=Z(),i=Z();for(const o of e.docChanges)switch(o.type){case 0:s=s.add(o.doc.key);break;case 1:i=i.add(o.doc.key)}return new Ni(t,e.fromCache,s,i)}}/**
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
 */class Jh{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(t){this._documentReadCount+=t}}/**
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
 */class Zh{constructor(){this.Gi=!1,this.zi=!1,this.ji=100,this.Hi=function(){return oc()?8:Dc(ac())>0?6:4}()}initialize(t,e){this.Ji=t,this.indexManager=e,this.Gi=!0}getDocumentsMatchingQuery(t,e,s,i){const o={result:null};return this.Yi(t,e).next(a=>{o.result=a}).next(()=>{if(!o.result)return this.Zi(t,e,i,s).next(a=>{o.result=a})}).next(()=>{if(o.result)return;const a=new Jh;return this.Xi(t,e,a).next(c=>{if(o.result=c,this.zi)return this.es(t,e,a,c.size)})}).next(()=>o.result)}es(t,e,s,i){return s.documentReadCount<this.ji?(Qn()<=Se.DEBUG&&F("QueryEngine","SDK will not create cache indexes for query:",pn(e),"since it only creates cache indexes for collection contains","more than or equal to",this.ji,"documents"),k.resolve()):(Qn()<=Se.DEBUG&&F("QueryEngine","Query:",pn(e),"scans",s.documentReadCount,"local documents and returns",i,"documents as results."),s.documentReadCount>this.Hi*i?(Qn()<=Se.DEBUG&&F("QueryEngine","The SDK decides to create cache indexes for query:",pn(e),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(t,ue(e))):k.resolve())}Yi(t,e){if(ua(e))return k.resolve(null);let s=ue(e);return this.indexManager.getIndexType(t,s).next(i=>i===0?null:(e.limit!==null&&i===1&&(e=lr(e,null,"F"),s=ue(e)),this.indexManager.getDocumentsMatchingTarget(t,s).next(o=>{const a=Z(...o);return this.Ji.getDocuments(t,a).next(c=>this.indexManager.getMinOffset(t,s).next(h=>{const f=this.ts(e,c);return this.ns(e,f,a,h.readTime)?this.Yi(t,lr(e,null,"F")):this.rs(t,f,e,h)}))})))}Zi(t,e,s,i){return ua(e)||i.isEqual(Q.min())?k.resolve(null):this.Ji.getDocuments(t,s).next(o=>{const a=this.ts(e,o);return this.ns(e,a,s,i)?k.resolve(null):(Qn()<=Se.DEBUG&&F("QueryEngine","Re-using previous result from %s to execute query: %s",i.toString(),pn(e)),this.rs(t,a,e,Cc(i,-1)).next(c=>c))})}ts(t,e){let s=new Dt(yl(t));return e.forEach((i,o)=>{_r(t,o)&&(s=s.add(o))}),s}ns(t,e,s,i){if(t.limit===null)return!1;if(s.size!==e.size)return!0;const o=t.limitType==="F"?e.last():e.first();return!!o&&(o.hasPendingWrites||o.version.compareTo(i)>0)}Xi(t,e,s){return Qn()<=Se.DEBUG&&F("QueryEngine","Using full collection scan to execute query:",pn(e)),this.Ji.getDocumentsMatchingQuery(t,e,xe.min(),s)}rs(t,e,s,i){return this.Ji.getDocumentsMatchingQuery(t,s,i).next(o=>(e.forEach(a=>{o=o.insert(a.key,a)}),o))}}/**
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
 */class td{constructor(t,e,s,i){this.persistence=t,this.ss=e,this.serializer=i,this.os=new gt(rt),this._s=new Vn(o=>Ii(o),Ri),this.us=new Map,this.cs=t.getRemoteDocumentCache(),this.Ur=t.getTargetCache(),this.Gr=t.getBundleCache(),this.ls(s)}ls(t){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(t),this.indexManager=this.persistence.getIndexManager(t),this.mutationQueue=this.persistence.getMutationQueue(t,this.indexManager),this.localDocuments=new jh(this.cs,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.cs.setIndexManager(this.indexManager),this.ss.initialize(this.localDocuments,this.indexManager)}collectGarbage(t){return this.persistence.runTransaction("Collect garbage","readwrite-primary",e=>t.collect(e,this.os))}}function ed(n,t,e,s){return new td(n,t,e,s)}async function Ul(n,t){const e=W(n);return await e.persistence.runTransaction("Handle user change","readonly",s=>{let i;return e.mutationQueue.getAllMutationBatches(s).next(o=>(i=o,e.ls(t),e.mutationQueue.getAllMutationBatches(s))).next(o=>{const a=[],c=[];let h=Z();for(const f of i){a.push(f.batchId);for(const p of f.mutations)h=h.add(p.key)}for(const f of o){c.push(f.batchId);for(const p of f.mutations)h=h.add(p.key)}return e.localDocuments.getDocuments(s,h).next(f=>({hs:f,removedBatchIds:a,addedBatchIds:c}))})})}function nd(n,t){const e=W(n);return e.persistence.runTransaction("Acknowledge batch","readwrite-primary",s=>{const i=t.batch.keys(),o=e.cs.newChangeBuffer({trackRemovals:!0});return function(c,h,f,p){const E=f.batch,R=E.keys();let V=k.resolve();return R.forEach(N=>{V=V.next(()=>p.getEntry(h,N)).next(M=>{const D=f.docVersions.get(N);at(D!==null),M.version.compareTo(D)<0&&(E.applyToRemoteDocument(M,f),M.isValidDocument()&&(M.setReadTime(f.commitVersion),p.addEntry(M)))})}),V.next(()=>c.mutationQueue.removeMutationBatch(h,E))}(e,s,t,o).next(()=>o.apply(s)).next(()=>e.mutationQueue.performConsistencyCheck(s)).next(()=>e.documentOverlayCache.removeOverlaysForBatchId(s,i,t.batch.batchId)).next(()=>e.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(s,function(c){let h=Z();for(let f=0;f<c.mutationResults.length;++f)c.mutationResults[f].transformResults.length>0&&(h=h.add(c.batch.mutations[f].key));return h}(t))).next(()=>e.localDocuments.getDocuments(s,i))})}function Bl(n){const t=W(n);return t.persistence.runTransaction("Get last remote snapshot version","readonly",e=>t.Ur.getLastRemoteSnapshotVersion(e))}function sd(n,t){const e=W(n),s=t.snapshotVersion;let i=e.os;return e.persistence.runTransaction("Apply remote event","readwrite-primary",o=>{const a=e.cs.newChangeBuffer({trackRemovals:!0});i=e.os;const c=[];t.targetChanges.forEach((p,E)=>{const R=i.get(E);if(!R)return;c.push(e.Ur.removeMatchingKeys(o,p.removedDocuments,E).next(()=>e.Ur.addMatchingKeys(o,p.addedDocuments,E)));let V=R.withSequenceNumber(o.currentSequenceNumber);t.targetMismatches.get(E)!==null?V=V.withResumeToken(Nt.EMPTY_BYTE_STRING,Q.min()).withLastLimboFreeSnapshotVersion(Q.min()):p.resumeToken.approximateByteSize()>0&&(V=V.withResumeToken(p.resumeToken,s)),i=i.insert(E,V),function(M,D,G){return M.resumeToken.approximateByteSize()===0||D.snapshotVersion.toMicroseconds()-M.snapshotVersion.toMicroseconds()>=3e8?!0:G.addedDocuments.size+G.modifiedDocuments.size+G.removedDocuments.size>0}(R,V,p)&&c.push(e.Ur.updateTargetData(o,V))});let h=Te(),f=Z();if(t.documentUpdates.forEach(p=>{t.resolvedLimboDocuments.has(p)&&c.push(e.persistence.referenceDelegate.updateLimboDocument(o,p))}),c.push(rd(o,a,t.documentUpdates).next(p=>{h=p.Ps,f=p.Is})),!s.isEqual(Q.min())){const p=e.Ur.getLastRemoteSnapshotVersion(o).next(E=>e.Ur.setTargetsMetadata(o,o.currentSequenceNumber,s));c.push(p)}return k.waitFor(c).next(()=>a.apply(o)).next(()=>e.localDocuments.getLocalViewOfDocuments(o,h,f)).next(()=>h)}).then(o=>(e.os=i,o))}function rd(n,t,e){let s=Z(),i=Z();return e.forEach(o=>s=s.add(o)),t.getEntries(n,s).next(o=>{let a=Te();return e.forEach((c,h)=>{const f=o.get(c);h.isFoundDocument()!==f.isFoundDocument()&&(i=i.add(c)),h.isNoDocument()&&h.version.isEqual(Q.min())?(t.removeEntry(c,h.readTime),a=a.insert(c,h)):!f.isValidDocument()||h.version.compareTo(f.version)>0||h.version.compareTo(f.version)===0&&f.hasPendingWrites?(t.addEntry(h),a=a.insert(c,h)):F("LocalStore","Ignoring outdated watch update for ",c,". Current version:",f.version," Watch version:",h.version)}),{Ps:a,Is:i}})}function id(n,t){const e=W(n);return e.persistence.runTransaction("Get next mutation batch","readonly",s=>(t===void 0&&(t=-1),e.mutationQueue.getNextMutationBatchAfterBatchId(s,t)))}function od(n,t){const e=W(n);return e.persistence.runTransaction("Allocate target","readwrite",s=>{let i;return e.Ur.getTargetData(s,t).next(o=>o?(i=o,k.resolve(i)):e.Ur.allocateTargetId(s).next(a=>(i=new ke(t,a,"TargetPurposeListen",s.currentSequenceNumber),e.Ur.addTargetData(s,i).next(()=>i))))}).then(s=>{const i=e.os.get(s.targetId);return(i===null||s.snapshotVersion.compareTo(i.snapshotVersion)>0)&&(e.os=e.os.insert(s.targetId,s),e._s.set(t,s.targetId)),s})}async function di(n,t,e){const s=W(n),i=s.os.get(t),o=e?"readwrite":"readwrite-primary";try{e||await s.persistence.runTransaction("Release target",o,a=>s.persistence.referenceDelegate.removeTarget(a,i))}catch(a){if(!fs(a))throw a;F("LocalStore",`Failed to update sequence numbers for target ${t}: ${a}`)}s.os=s.os.remove(t),s._s.delete(i.target)}function Ta(n,t,e){const s=W(n);let i=Q.min(),o=Z();return s.persistence.runTransaction("Execute query","readwrite",a=>function(h,f,p){const E=W(h),R=E._s.get(p);return R!==void 0?k.resolve(E.os.get(R)):E.Ur.getTargetData(f,p)}(s,a,ue(t)).next(c=>{if(c)return i=c.lastLimboFreeSnapshotVersion,s.Ur.getMatchingKeysForTargetId(a,c.targetId).next(h=>{o=h})}).next(()=>s.ss.getDocumentsMatchingQuery(a,t,e?i:Q.min(),e?o:Z())).next(c=>(ad(s,Xc(t),c),{documents:c,Ts:o})))}function ad(n,t,e){let s=n.us.get(t)||Q.min();e.forEach((i,o)=>{o.readTime.compareTo(s)>0&&(s=o.readTime)}),n.us.set(t,s)}class Ea{constructor(){this.activeTargetIds=nh()}fs(t){this.activeTargetIds=this.activeTargetIds.add(t)}gs(t){this.activeTargetIds=this.activeTargetIds.delete(t)}Vs(){const t={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(t)}}class ld{constructor(){this.so=new Ea,this.oo={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(t){}updateMutationState(t,e,s){}addLocalQueryTarget(t,e=!0){return e&&this.so.fs(t),this.oo[t]||"not-current"}updateQueryState(t,e,s){this.oo[t]=e}removeLocalQueryTarget(t){this.so.gs(t)}isLocalQueryTarget(t){return this.so.activeTargetIds.has(t)}clearQueryState(t){delete this.oo[t]}getAllActiveQueryTargets(){return this.so.activeTargetIds}isActiveQueryTarget(t){return this.so.activeTargetIds.has(t)}start(){return this.so=new Ea,Promise.resolve()}handleUserChange(t,e,s){}setOnlineState(t){}shutdown(){}writeSequenceNumber(t){}notifyBundleLoaded(t){}}/**
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
 */class ud{_o(t){}shutdown(){}}/**
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
 */class wa{constructor(){this.ao=()=>this.uo(),this.co=()=>this.lo(),this.ho=[],this.Po()}_o(t){this.ho.push(t)}shutdown(){window.removeEventListener("online",this.ao),window.removeEventListener("offline",this.co)}Po(){window.addEventListener("online",this.ao),window.addEventListener("offline",this.co)}uo(){F("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const t of this.ho)t(0)}lo(){F("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const t of this.ho)t(1)}static D(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
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
 */let Xs=null;function Xr(){return Xs===null?Xs=function(){return 268435456+Math.round(2147483648*Math.random())}():Xs++,"0x"+Xs.toString(16)}/**
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
 */const cd={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};/**
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
 */class hd{constructor(t){this.Io=t.Io,this.To=t.To}Eo(t){this.Ao=t}Ro(t){this.Vo=t}mo(t){this.fo=t}onMessage(t){this.po=t}close(){this.To()}send(t){this.Io(t)}yo(){this.Ao()}wo(){this.Vo()}So(t){this.fo(t)}bo(t){this.po(t)}}/**
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
 */const Lt="WebChannelConnection";class dd extends class{constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const s=e.ssl?"https":"http",i=encodeURIComponent(this.databaseId.projectId),o=encodeURIComponent(this.databaseId.database);this.Do=s+"://"+e.host,this.vo=`projects/${i}/databases/${o}`,this.Co=this.databaseId.database==="(default)"?`project_id=${i}`:`project_id=${i}&database_id=${o}`}get Fo(){return!1}Mo(e,s,i,o,a){const c=Xr(),h=this.xo(e,s.toUriEncodedString());F("RestConnection",`Sending RPC '${e}' ${c}:`,h,i);const f={"google-cloud-resource-prefix":this.vo,"x-goog-request-params":this.Co};return this.Oo(f,o,a),this.No(e,h,f,i).then(p=>(F("RestConnection",`Received RPC '${e}' ${c}: `,p),p),p=>{throw vn("RestConnection",`RPC '${e}' ${c} failed with error: `,p,"url: ",h,"request:",i),p})}Lo(e,s,i,o,a,c){return this.Mo(e,s,i,o,a)}Oo(e,s,i){e["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+Pn}(),e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),s&&s.headers.forEach((o,a)=>e[a]=o),i&&i.headers.forEach((o,a)=>e[a]=o)}xo(e,s){const i=cd[e];return`${this.Do}/v1/${s}:${i}`}terminate(){}}{constructor(t){super(t),this.forceLongPolling=t.forceLongPolling,this.autoDetectLongPolling=t.autoDetectLongPolling,this.useFetchStreams=t.useFetchStreams,this.longPollingOptions=t.longPollingOptions}No(t,e,s,i){const o=Xr();return new Promise((a,c)=>{const h=new tl;h.setWithCredentials(!0),h.listenOnce(el.COMPLETE,()=>{try{switch(h.getLastErrorCode()){case tr.NO_ERROR:const p=h.getResponseJson();F(Lt,`XHR for RPC '${t}' ${o} received:`,JSON.stringify(p)),a(p);break;case tr.TIMEOUT:F(Lt,`RPC '${t}' ${o} timed out`),c(new L(b.DEADLINE_EXCEEDED,"Request time out"));break;case tr.HTTP_ERROR:const E=h.getStatus();if(F(Lt,`RPC '${t}' ${o} failed with status:`,E,"response text:",h.getResponseText()),E>0){let R=h.getResponseJson();Array.isArray(R)&&(R=R[0]);const V=R==null?void 0:R.error;if(V&&V.status&&V.message){const N=function(D){const G=D.toLowerCase().replace(/_/g,"-");return Object.values(b).indexOf(G)>=0?G:b.UNKNOWN}(V.status);c(new L(N,V.message))}else c(new L(b.UNKNOWN,"Server responded with status "+h.getStatus()))}else c(new L(b.UNAVAILABLE,"Connection failed."));break;default:$()}}finally{F(Lt,`RPC '${t}' ${o} completed.`)}});const f=JSON.stringify(i);F(Lt,`RPC '${t}' ${o} sending request:`,i),h.send(e,"POST",f,s,15)})}Bo(t,e,s){const i=Xr(),o=[this.Do,"/","google.firestore.v1.Firestore","/",t,"/channel"],a=rl(),c=sl(),h={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},f=this.longPollingOptions.timeoutSeconds;f!==void 0&&(h.longPollingTimeout=Math.round(1e3*f)),this.useFetchStreams&&(h.useFetchStreams=!0),this.Oo(h.initMessageHeaders,e,s),h.encodeInitMessageHeaders=!0;const p=o.join("");F(Lt,`Creating RPC '${t}' stream ${i}: ${p}`,h);const E=a.createWebChannel(p,h);let R=!1,V=!1;const N=new hd({Io:D=>{V?F(Lt,`Not sending because RPC '${t}' stream ${i} is closed:`,D):(R||(F(Lt,`Opening RPC '${t}' stream ${i} transport.`),E.open(),R=!0),F(Lt,`RPC '${t}' stream ${i} sending:`,D),E.send(D))},To:()=>E.close()}),M=(D,G,X)=>{D.listen(G,H=>{try{X(H)}catch(Y){setTimeout(()=>{throw Y},0)}})};return M(E,Hn.EventType.OPEN,()=>{V||(F(Lt,`RPC '${t}' stream ${i} transport opened.`),N.yo())}),M(E,Hn.EventType.CLOSE,()=>{V||(V=!0,F(Lt,`RPC '${t}' stream ${i} transport closed`),N.So())}),M(E,Hn.EventType.ERROR,D=>{V||(V=!0,vn(Lt,`RPC '${t}' stream ${i} transport errored:`,D),N.So(new L(b.UNAVAILABLE,"The operation could not be completed")))}),M(E,Hn.EventType.MESSAGE,D=>{var G;if(!V){const X=D.data[0];at(!!X);const H=X,Y=H.error||((G=H[0])===null||G===void 0?void 0:G.error);if(Y){F(Lt,`RPC '${t}' stream ${i} received error:`,Y);const Vt=Y.status;let ht=function(g){const y=Et[g];if(y!==void 0)return Sl(y)}(Vt),v=Y.message;ht===void 0&&(ht=b.INTERNAL,v="Unknown error status: "+Vt+" with message "+Y.message),V=!0,N.So(new L(ht,v)),E.close()}else F(Lt,`RPC '${t}' stream ${i} received:`,X),N.bo(X)}}),M(c,nl.STAT_EVENT,D=>{D.stat===ni.PROXY?F(Lt,`RPC '${t}' stream ${i} detected buffering proxy`):D.stat===ni.NOPROXY&&F(Lt,`RPC '${t}' stream ${i} detected no buffering proxy`)}),setTimeout(()=>{N.wo()},0),N}}function Yr(){return typeof document<"u"?document:null}/**
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
 */function Er(n){return new wh(n,!0)}/**
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
 */class ql{constructor(t,e,s=1e3,i=1.5,o=6e4){this.ui=t,this.timerId=e,this.ko=s,this.qo=i,this.Qo=o,this.Ko=0,this.$o=null,this.Uo=Date.now(),this.reset()}reset(){this.Ko=0}Wo(){this.Ko=this.Qo}Go(t){this.cancel();const e=Math.floor(this.Ko+this.zo()),s=Math.max(0,Date.now()-this.Uo),i=Math.max(0,e-s);i>0&&F("ExponentialBackoff",`Backing off for ${i} ms (base delay: ${this.Ko} ms, delay with jitter: ${e} ms, last attempt: ${s} ms ago)`),this.$o=this.ui.enqueueAfterDelay(this.timerId,i,()=>(this.Uo=Date.now(),t())),this.Ko*=this.qo,this.Ko<this.ko&&(this.Ko=this.ko),this.Ko>this.Qo&&(this.Ko=this.Qo)}jo(){this.$o!==null&&(this.$o.skipDelay(),this.$o=null)}cancel(){this.$o!==null&&(this.$o.cancel(),this.$o=null)}zo(){return(Math.random()-.5)*this.Ko}}/**
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
 */class jl{constructor(t,e,s,i,o,a,c,h){this.ui=t,this.Ho=s,this.Jo=i,this.connection=o,this.authCredentialsProvider=a,this.appCheckCredentialsProvider=c,this.listener=h,this.state=0,this.Yo=0,this.Zo=null,this.Xo=null,this.stream=null,this.e_=0,this.t_=new ql(t,e)}n_(){return this.state===1||this.state===5||this.r_()}r_(){return this.state===2||this.state===3}start(){this.e_=0,this.state!==4?this.auth():this.i_()}async stop(){this.n_()&&await this.close(0)}s_(){this.state=0,this.t_.reset()}o_(){this.r_()&&this.Zo===null&&(this.Zo=this.ui.enqueueAfterDelay(this.Ho,6e4,()=>this.__()))}a_(t){this.u_(),this.stream.send(t)}async __(){if(this.r_())return this.close(0)}u_(){this.Zo&&(this.Zo.cancel(),this.Zo=null)}c_(){this.Xo&&(this.Xo.cancel(),this.Xo=null)}async close(t,e){this.u_(),this.c_(),this.t_.cancel(),this.Yo++,t!==4?this.t_.reset():e&&e.code===b.RESOURCE_EXHAUSTED?(ve(e.toString()),ve("Using maximum backoff delay to prevent overloading the backend."),this.t_.Wo()):e&&e.code===b.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.l_(),this.stream.close(),this.stream=null),this.state=t,await this.listener.mo(e)}l_(){}auth(){this.state=1;const t=this.h_(this.Yo),e=this.Yo;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([s,i])=>{this.Yo===e&&this.P_(s,i)},s=>{t(()=>{const i=new L(b.UNKNOWN,"Fetching auth token failed: "+s.message);return this.I_(i)})})}P_(t,e){const s=this.h_(this.Yo);this.stream=this.T_(t,e),this.stream.Eo(()=>{s(()=>this.listener.Eo())}),this.stream.Ro(()=>{s(()=>(this.state=2,this.Xo=this.ui.enqueueAfterDelay(this.Jo,1e4,()=>(this.r_()&&(this.state=3),Promise.resolve())),this.listener.Ro()))}),this.stream.mo(i=>{s(()=>this.I_(i))}),this.stream.onMessage(i=>{s(()=>++this.e_==1?this.E_(i):this.onNext(i))})}i_(){this.state=5,this.t_.Go(async()=>{this.state=0,this.start()})}I_(t){return F("PersistentStream",`close with error: ${t}`),this.stream=null,this.close(4,t)}h_(t){return e=>{this.ui.enqueueAndForget(()=>this.Yo===t?e():(F("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class fd extends jl{constructor(t,e,s,i,o,a){super(t,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",e,s,i,a),this.serializer=o}T_(t,e){return this.connection.Bo("Listen",t,e)}E_(t){return this.onNext(t)}onNext(t){this.t_.reset();const e=Rh(this.serializer,t),s=function(o){if(!("targetChange"in o))return Q.min();const a=o.targetChange;return a.targetIds&&a.targetIds.length?Q.min():a.readTime?ce(a.readTime):Q.min()}(t);return this.listener.d_(e,s)}A_(t){const e={};e.database=hi(this.serializer),e.addTarget=function(o,a){let c;const h=a.target;if(c=oi(h)?{documents:Vh(o,h)}:{query:Sh(o,h)._t},c.targetId=a.targetId,a.resumeToken.approximateByteSize()>0){c.resumeToken=Dl(o,a.resumeToken);const f=li(o,a.expectedCount);f!==null&&(c.expectedCount=f)}else if(a.snapshotVersion.compareTo(Q.min())>0){c.readTime=cr(o,a.snapshotVersion.toTimestamp());const f=li(o,a.expectedCount);f!==null&&(c.expectedCount=f)}return c}(this.serializer,t);const s=kh(this.serializer,t);s&&(e.labels=s),this.a_(e)}R_(t){const e={};e.database=hi(this.serializer),e.removeTarget=t,this.a_(e)}}class pd extends jl{constructor(t,e,s,i,o,a){super(t,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",e,s,i,a),this.serializer=o}get V_(){return this.e_>0}start(){this.lastStreamToken=void 0,super.start()}l_(){this.V_&&this.m_([])}T_(t,e){return this.connection.Bo("Write",t,e)}E_(t){return at(!!t.streamToken),this.lastStreamToken=t.streamToken,at(!t.writeResults||t.writeResults.length===0),this.listener.f_()}onNext(t){at(!!t.streamToken),this.lastStreamToken=t.streamToken,this.t_.reset();const e=Ch(t.writeResults,t.commitTime),s=ce(t.commitTime);return this.listener.g_(s,e)}p_(){const t={};t.database=hi(this.serializer),this.a_(t)}m_(t){const e={streamToken:this.lastStreamToken,writes:t.map(s=>Ph(this.serializer,s))};this.a_(e)}}/**
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
 */class md extends class{}{constructor(t,e,s,i){super(),this.authCredentials=t,this.appCheckCredentials=e,this.connection=s,this.serializer=i,this.y_=!1}w_(){if(this.y_)throw new L(b.FAILED_PRECONDITION,"The client has already been terminated.")}Mo(t,e,s,i){return this.w_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([o,a])=>this.connection.Mo(t,ui(e,s),i,o,a)).catch(o=>{throw o.name==="FirebaseError"?(o.code===b.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),o):new L(b.UNKNOWN,o.toString())})}Lo(t,e,s,i,o){return this.w_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([a,c])=>this.connection.Lo(t,ui(e,s),i,a,c,o)).catch(a=>{throw a.name==="FirebaseError"?(a.code===b.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),a):new L(b.UNKNOWN,a.toString())})}terminate(){this.y_=!0,this.connection.terminate()}}class gd{constructor(t,e){this.asyncQueue=t,this.onlineStateHandler=e,this.state="Unknown",this.S_=0,this.b_=null,this.D_=!0}v_(){this.S_===0&&(this.C_("Unknown"),this.b_=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.b_=null,this.F_("Backend didn't respond within 10 seconds."),this.C_("Offline"),Promise.resolve())))}M_(t){this.state==="Online"?this.C_("Unknown"):(this.S_++,this.S_>=1&&(this.x_(),this.F_(`Connection failed 1 times. Most recent error: ${t.toString()}`),this.C_("Offline")))}set(t){this.x_(),this.S_=0,t==="Online"&&(this.D_=!1),this.C_(t)}C_(t){t!==this.state&&(this.state=t,this.onlineStateHandler(t))}F_(t){const e=`Could not reach Cloud Firestore backend. ${t}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.D_?(ve(e),this.D_=!1):F("OnlineStateTracker",e)}x_(){this.b_!==null&&(this.b_.cancel(),this.b_=null)}}/**
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
 */class _d{constructor(t,e,s,i,o){this.localStore=t,this.datastore=e,this.asyncQueue=s,this.remoteSyncer={},this.O_=[],this.N_=new Map,this.L_=new Set,this.B_=[],this.k_=o,this.k_._o(a=>{s.enqueueAndForget(async()=>{rn(this)&&(F("RemoteStore","Restarting streams for network reachability change."),await async function(h){const f=W(h);f.L_.add(4),await gs(f),f.q_.set("Unknown"),f.L_.delete(4),await wr(f)}(this))})}),this.q_=new gd(s,i)}}async function wr(n){if(rn(n))for(const t of n.B_)await t(!0)}async function gs(n){for(const t of n.B_)await t(!1)}function $l(n,t){const e=W(n);e.N_.has(t.targetId)||(e.N_.set(t.targetId,t),Li(e)?Mi(e):Sn(e).r_()&&Oi(e,t))}function xi(n,t){const e=W(n),s=Sn(e);e.N_.delete(t),s.r_()&&zl(e,t),e.N_.size===0&&(s.r_()?s.o_():rn(e)&&e.q_.set("Unknown"))}function Oi(n,t){if(n.Q_.xe(t.targetId),t.resumeToken.approximateByteSize()>0||t.snapshotVersion.compareTo(Q.min())>0){const e=n.remoteSyncer.getRemoteKeysForTarget(t.targetId).size;t=t.withExpectedCount(e)}Sn(n).A_(t)}function zl(n,t){n.Q_.xe(t),Sn(n).R_(t)}function Mi(n){n.Q_=new yh({getRemoteKeysForTarget:t=>n.remoteSyncer.getRemoteKeysForTarget(t),ot:t=>n.N_.get(t)||null,tt:()=>n.datastore.serializer.databaseId}),Sn(n).start(),n.q_.v_()}function Li(n){return rn(n)&&!Sn(n).n_()&&n.N_.size>0}function rn(n){return W(n).L_.size===0}function Kl(n){n.Q_=void 0}async function yd(n){n.q_.set("Online")}async function vd(n){n.N_.forEach((t,e)=>{Oi(n,t)})}async function Td(n,t){Kl(n),Li(n)?(n.q_.M_(t),Mi(n)):n.q_.set("Unknown")}async function Ed(n,t,e){if(n.q_.set("Online"),t instanceof kl&&t.state===2&&t.cause)try{await async function(i,o){const a=o.cause;for(const c of o.targetIds)i.N_.has(c)&&(await i.remoteSyncer.rejectListen(c,a),i.N_.delete(c),i.Q_.removeTarget(c))}(n,t)}catch(s){F("RemoteStore","Failed to remove targets %s: %s ",t.targetIds.join(","),s),await hr(n,s)}else if(t instanceof sr?n.Q_.Ke(t):t instanceof bl?n.Q_.He(t):n.Q_.We(t),!e.isEqual(Q.min()))try{const s=await Bl(n.localStore);e.compareTo(s)>=0&&await function(o,a){const c=o.Q_.rt(a);return c.targetChanges.forEach((h,f)=>{if(h.resumeToken.approximateByteSize()>0){const p=o.N_.get(f);p&&o.N_.set(f,p.withResumeToken(h.resumeToken,a))}}),c.targetMismatches.forEach((h,f)=>{const p=o.N_.get(h);if(!p)return;o.N_.set(h,p.withResumeToken(Nt.EMPTY_BYTE_STRING,p.snapshotVersion)),zl(o,h);const E=new ke(p.target,h,f,p.sequenceNumber);Oi(o,E)}),o.remoteSyncer.applyRemoteEvent(c)}(n,e)}catch(s){F("RemoteStore","Failed to raise snapshot:",s),await hr(n,s)}}async function hr(n,t,e){if(!fs(t))throw t;n.L_.add(1),await gs(n),n.q_.set("Offline"),e||(e=()=>Bl(n.localStore)),n.asyncQueue.enqueueRetryable(async()=>{F("RemoteStore","Retrying IndexedDB access"),await e(),n.L_.delete(1),await wr(n)})}function Gl(n,t){return t().catch(e=>hr(n,e,t))}async function Ar(n){const t=W(n),e=Me(t);let s=t.O_.length>0?t.O_[t.O_.length-1].batchId:-1;for(;wd(t);)try{const i=await id(t.localStore,s);if(i===null){t.O_.length===0&&e.o_();break}s=i.batchId,Ad(t,i)}catch(i){await hr(t,i)}Ql(t)&&Wl(t)}function wd(n){return rn(n)&&n.O_.length<10}function Ad(n,t){n.O_.push(t);const e=Me(n);e.r_()&&e.V_&&e.m_(t.mutations)}function Ql(n){return rn(n)&&!Me(n).n_()&&n.O_.length>0}function Wl(n){Me(n).start()}async function Id(n){Me(n).p_()}async function Rd(n){const t=Me(n);for(const e of n.O_)t.m_(e.mutations)}async function Pd(n,t,e){const s=n.O_.shift(),i=Vi.from(s,t,e);await Gl(n,()=>n.remoteSyncer.applySuccessfulWrite(i)),await Ar(n)}async function Cd(n,t){t&&Me(n).V_&&await async function(s,i){if(function(a){return mh(a)&&a!==b.ABORTED}(i.code)){const o=s.O_.shift();Me(s).s_(),await Gl(s,()=>s.remoteSyncer.rejectFailedWrite(o.batchId,i)),await Ar(s)}}(n,t),Ql(n)&&Wl(n)}async function Aa(n,t){const e=W(n);e.asyncQueue.verifyOperationInProgress(),F("RemoteStore","RemoteStore received new credentials");const s=rn(e);e.L_.add(3),await gs(e),s&&e.q_.set("Unknown"),await e.remoteSyncer.handleCredentialChange(t),e.L_.delete(3),await wr(e)}async function Vd(n,t){const e=W(n);t?(e.L_.delete(2),await wr(e)):t||(e.L_.add(2),await gs(e),e.q_.set("Unknown"))}function Sn(n){return n.K_||(n.K_=function(e,s,i){const o=W(e);return o.w_(),new fd(s,o.connection,o.authCredentials,o.appCheckCredentials,o.serializer,i)}(n.datastore,n.asyncQueue,{Eo:yd.bind(null,n),Ro:vd.bind(null,n),mo:Td.bind(null,n),d_:Ed.bind(null,n)}),n.B_.push(async t=>{t?(n.K_.s_(),Li(n)?Mi(n):n.q_.set("Unknown")):(await n.K_.stop(),Kl(n))})),n.K_}function Me(n){return n.U_||(n.U_=function(e,s,i){const o=W(e);return o.w_(),new pd(s,o.connection,o.authCredentials,o.appCheckCredentials,o.serializer,i)}(n.datastore,n.asyncQueue,{Eo:()=>Promise.resolve(),Ro:Id.bind(null,n),mo:Cd.bind(null,n),f_:Rd.bind(null,n),g_:Pd.bind(null,n)}),n.B_.push(async t=>{t?(n.U_.s_(),await Ar(n)):(await n.U_.stop(),n.O_.length>0&&(F("RemoteStore",`Stopping write stream with ${n.O_.length} pending writes`),n.O_=[]))})),n.U_}/**
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
 */class Fi{constructor(t,e,s,i,o){this.asyncQueue=t,this.timerId=e,this.targetTimeMs=s,this.op=i,this.removalCallback=o,this.deferred=new De,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(a=>{})}get promise(){return this.deferred.promise}static createAndSchedule(t,e,s,i,o){const a=Date.now()+s,c=new Fi(t,e,a,i,o);return c.start(s),c}start(t){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),t)}skipDelay(){return this.handleDelayElapsed()}cancel(t){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new L(b.CANCELLED,"Operation cancelled"+(t?": "+t:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(t=>this.deferred.resolve(t))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function Ui(n,t){if(ve("AsyncQueue",`${t}: ${n}`),fs(n))return new L(b.UNAVAILABLE,`${t}: ${n}`);throw n}/**
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
 */class yn{constructor(t){this.comparator=t?(e,s)=>t(e,s)||B.comparator(e.key,s.key):(e,s)=>B.comparator(e.key,s.key),this.keyedMap=Xn(),this.sortedSet=new gt(this.comparator)}static emptySet(t){return new yn(t.comparator)}has(t){return this.keyedMap.get(t)!=null}get(t){return this.keyedMap.get(t)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(t){const e=this.keyedMap.get(t);return e?this.sortedSet.indexOf(e):-1}get size(){return this.sortedSet.size}forEach(t){this.sortedSet.inorderTraversal((e,s)=>(t(e),!1))}add(t){const e=this.delete(t.key);return e.copy(e.keyedMap.insert(t.key,t),e.sortedSet.insert(t,null))}delete(t){const e=this.get(t);return e?this.copy(this.keyedMap.remove(t),this.sortedSet.remove(e)):this}isEqual(t){if(!(t instanceof yn)||this.size!==t.size)return!1;const e=this.sortedSet.getIterator(),s=t.sortedSet.getIterator();for(;e.hasNext();){const i=e.getNext().key,o=s.getNext().key;if(!i.isEqual(o))return!1}return!0}toString(){const t=[];return this.forEach(e=>{t.push(e.toString())}),t.length===0?"DocumentSet ()":`DocumentSet (
  `+t.join(`  
`)+`
)`}copy(t,e){const s=new yn;return s.comparator=this.comparator,s.keyedMap=t,s.sortedSet=e,s}}/**
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
 */class Ia{constructor(){this.W_=new gt(B.comparator)}track(t){const e=t.doc.key,s=this.W_.get(e);s?t.type!==0&&s.type===3?this.W_=this.W_.insert(e,t):t.type===3&&s.type!==1?this.W_=this.W_.insert(e,{type:s.type,doc:t.doc}):t.type===2&&s.type===2?this.W_=this.W_.insert(e,{type:2,doc:t.doc}):t.type===2&&s.type===0?this.W_=this.W_.insert(e,{type:0,doc:t.doc}):t.type===1&&s.type===0?this.W_=this.W_.remove(e):t.type===1&&s.type===2?this.W_=this.W_.insert(e,{type:1,doc:s.doc}):t.type===0&&s.type===1?this.W_=this.W_.insert(e,{type:2,doc:t.doc}):$():this.W_=this.W_.insert(e,t)}G_(){const t=[];return this.W_.inorderTraversal((e,s)=>{t.push(s)}),t}}class In{constructor(t,e,s,i,o,a,c,h,f){this.query=t,this.docs=e,this.oldDocs=s,this.docChanges=i,this.mutatedKeys=o,this.fromCache=a,this.syncStateChanged=c,this.excludesMetadataChanges=h,this.hasCachedResults=f}static fromInitialDocuments(t,e,s,i,o){const a=[];return e.forEach(c=>{a.push({type:0,doc:c})}),new In(t,e,yn.emptySet(e),a,s,i,!0,!1,o)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(t){if(!(this.fromCache===t.fromCache&&this.hasCachedResults===t.hasCachedResults&&this.syncStateChanged===t.syncStateChanged&&this.mutatedKeys.isEqual(t.mutatedKeys)&&gr(this.query,t.query)&&this.docs.isEqual(t.docs)&&this.oldDocs.isEqual(t.oldDocs)))return!1;const e=this.docChanges,s=t.docChanges;if(e.length!==s.length)return!1;for(let i=0;i<e.length;i++)if(e[i].type!==s[i].type||!e[i].doc.isEqual(s[i].doc))return!1;return!0}}/**
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
 */class Sd{constructor(){this.z_=void 0,this.j_=[]}H_(){return this.j_.some(t=>t.J_())}}class bd{constructor(){this.queries=Ra(),this.onlineState="Unknown",this.Y_=new Set}terminate(){(function(e,s){const i=W(e),o=i.queries;i.queries=Ra(),o.forEach((a,c)=>{for(const h of c.j_)h.onError(s)})})(this,new L(b.ABORTED,"Firestore shutting down"))}}function Ra(){return new Vn(n=>_l(n),gr)}async function Hl(n,t){const e=W(n);let s=3;const i=t.query;let o=e.queries.get(i);o?!o.H_()&&t.J_()&&(s=2):(o=new Sd,s=t.J_()?0:1);try{switch(s){case 0:o.z_=await e.onListen(i,!0);break;case 1:o.z_=await e.onListen(i,!1);break;case 2:await e.onFirstRemoteStoreListen(i)}}catch(a){const c=Ui(a,`Initialization of query '${pn(t.query)}' failed`);return void t.onError(c)}e.queries.set(i,o),o.j_.push(t),t.Z_(e.onlineState),o.z_&&t.X_(o.z_)&&Bi(e)}async function Xl(n,t){const e=W(n),s=t.query;let i=3;const o=e.queries.get(s);if(o){const a=o.j_.indexOf(t);a>=0&&(o.j_.splice(a,1),o.j_.length===0?i=t.J_()?0:1:!o.H_()&&t.J_()&&(i=2))}switch(i){case 0:return e.queries.delete(s),e.onUnlisten(s,!0);case 1:return e.queries.delete(s),e.onUnlisten(s,!1);case 2:return e.onLastRemoteStoreUnlisten(s);default:return}}function kd(n,t){const e=W(n);let s=!1;for(const i of t){const o=i.query,a=e.queries.get(o);if(a){for(const c of a.j_)c.X_(i)&&(s=!0);a.z_=i}}s&&Bi(e)}function Dd(n,t,e){const s=W(n),i=s.queries.get(t);if(i)for(const o of i.j_)o.onError(e);s.queries.delete(t)}function Bi(n){n.Y_.forEach(t=>{t.next()})}var fi,Pa;(Pa=fi||(fi={})).ea="default",Pa.Cache="cache";class Yl{constructor(t,e,s){this.query=t,this.ta=e,this.na=!1,this.ra=null,this.onlineState="Unknown",this.options=s||{}}X_(t){if(!this.options.includeMetadataChanges){const s=[];for(const i of t.docChanges)i.type!==3&&s.push(i);t=new In(t.query,t.docs,t.oldDocs,s,t.mutatedKeys,t.fromCache,t.syncStateChanged,!0,t.hasCachedResults)}let e=!1;return this.na?this.ia(t)&&(this.ta.next(t),e=!0):this.sa(t,this.onlineState)&&(this.oa(t),e=!0),this.ra=t,e}onError(t){this.ta.error(t)}Z_(t){this.onlineState=t;let e=!1;return this.ra&&!this.na&&this.sa(this.ra,t)&&(this.oa(this.ra),e=!0),e}sa(t,e){if(!t.fromCache||!this.J_())return!0;const s=e!=="Offline";return(!this.options._a||!s)&&(!t.docs.isEmpty()||t.hasCachedResults||e==="Offline")}ia(t){if(t.docChanges.length>0)return!0;const e=this.ra&&this.ra.hasPendingWrites!==t.hasPendingWrites;return!(!t.syncStateChanged&&!e)&&this.options.includeMetadataChanges===!0}oa(t){t=In.fromInitialDocuments(t.query,t.docs,t.mutatedKeys,t.fromCache,t.hasCachedResults),this.na=!0,this.ta.next(t)}J_(){return this.options.source!==fi.Cache}}/**
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
 */class Jl{constructor(t){this.key=t}}class Zl{constructor(t){this.key=t}}class Nd{constructor(t,e){this.query=t,this.Ta=e,this.Ea=null,this.hasCachedResults=!1,this.current=!1,this.da=Z(),this.mutatedKeys=Z(),this.Aa=yl(t),this.Ra=new yn(this.Aa)}get Va(){return this.Ta}ma(t,e){const s=e?e.fa:new Ia,i=e?e.Ra:this.Ra;let o=e?e.mutatedKeys:this.mutatedKeys,a=i,c=!1;const h=this.query.limitType==="F"&&i.size===this.query.limit?i.last():null,f=this.query.limitType==="L"&&i.size===this.query.limit?i.first():null;if(t.inorderTraversal((p,E)=>{const R=i.get(p),V=_r(this.query,E)?E:null,N=!!R&&this.mutatedKeys.has(R.key),M=!!V&&(V.hasLocalMutations||this.mutatedKeys.has(V.key)&&V.hasCommittedMutations);let D=!1;R&&V?R.data.isEqual(V.data)?N!==M&&(s.track({type:3,doc:V}),D=!0):this.ga(R,V)||(s.track({type:2,doc:V}),D=!0,(h&&this.Aa(V,h)>0||f&&this.Aa(V,f)<0)&&(c=!0)):!R&&V?(s.track({type:0,doc:V}),D=!0):R&&!V&&(s.track({type:1,doc:R}),D=!0,(h||f)&&(c=!0)),D&&(V?(a=a.add(V),o=M?o.add(p):o.delete(p)):(a=a.delete(p),o=o.delete(p)))}),this.query.limit!==null)for(;a.size>this.query.limit;){const p=this.query.limitType==="F"?a.last():a.first();a=a.delete(p.key),o=o.delete(p.key),s.track({type:1,doc:p})}return{Ra:a,fa:s,ns:c,mutatedKeys:o}}ga(t,e){return t.hasLocalMutations&&e.hasCommittedMutations&&!e.hasLocalMutations}applyChanges(t,e,s,i){const o=this.Ra;this.Ra=t.Ra,this.mutatedKeys=t.mutatedKeys;const a=t.fa.G_();a.sort((p,E)=>function(V,N){const M=D=>{switch(D){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return $()}};return M(V)-M(N)}(p.type,E.type)||this.Aa(p.doc,E.doc)),this.pa(s),i=i!=null&&i;const c=e&&!i?this.ya():[],h=this.da.size===0&&this.current&&!i?1:0,f=h!==this.Ea;return this.Ea=h,a.length!==0||f?{snapshot:new In(this.query,t.Ra,o,a,t.mutatedKeys,h===0,f,!1,!!s&&s.resumeToken.approximateByteSize()>0),wa:c}:{wa:c}}Z_(t){return this.current&&t==="Offline"?(this.current=!1,this.applyChanges({Ra:this.Ra,fa:new Ia,mutatedKeys:this.mutatedKeys,ns:!1},!1)):{wa:[]}}Sa(t){return!this.Ta.has(t)&&!!this.Ra.has(t)&&!this.Ra.get(t).hasLocalMutations}pa(t){t&&(t.addedDocuments.forEach(e=>this.Ta=this.Ta.add(e)),t.modifiedDocuments.forEach(e=>{}),t.removedDocuments.forEach(e=>this.Ta=this.Ta.delete(e)),this.current=t.current)}ya(){if(!this.current)return[];const t=this.da;this.da=Z(),this.Ra.forEach(s=>{this.Sa(s.key)&&(this.da=this.da.add(s.key))});const e=[];return t.forEach(s=>{this.da.has(s)||e.push(new Zl(s))}),this.da.forEach(s=>{t.has(s)||e.push(new Jl(s))}),e}ba(t){this.Ta=t.Ts,this.da=Z();const e=this.ma(t.documents);return this.applyChanges(e,!0)}Da(){return In.fromInitialDocuments(this.query,this.Ra,this.mutatedKeys,this.Ea===0,this.hasCachedResults)}}class xd{constructor(t,e,s){this.query=t,this.targetId=e,this.view=s}}class Od{constructor(t){this.key=t,this.va=!1}}class Md{constructor(t,e,s,i,o,a){this.localStore=t,this.remoteStore=e,this.eventManager=s,this.sharedClientState=i,this.currentUser=o,this.maxConcurrentLimboResolutions=a,this.Ca={},this.Fa=new Vn(c=>_l(c),gr),this.Ma=new Map,this.xa=new Set,this.Oa=new gt(B.comparator),this.Na=new Map,this.La=new ki,this.Ba={},this.ka=new Map,this.qa=An.kn(),this.onlineState="Unknown",this.Qa=void 0}get isPrimaryClient(){return this.Qa===!0}}async function Ld(n,t,e=!0){const s=iu(n);let i;const o=s.Fa.get(t);return o?(s.sharedClientState.addLocalQueryTarget(o.targetId),i=o.view.Da()):i=await tu(s,t,e,!0),i}async function Fd(n,t){const e=iu(n);await tu(e,t,!0,!1)}async function tu(n,t,e,s){const i=await od(n.localStore,ue(t)),o=i.targetId,a=n.sharedClientState.addLocalQueryTarget(o,e);let c;return s&&(c=await Ud(n,t,o,a==="current",i.resumeToken)),n.isPrimaryClient&&e&&$l(n.remoteStore,i),c}async function Ud(n,t,e,s,i){n.Ka=(E,R,V)=>async function(M,D,G,X){let H=D.view.ma(G);H.ns&&(H=await Ta(M.localStore,D.query,!1).then(({documents:v})=>D.view.ma(v,H)));const Y=X&&X.targetChanges.get(D.targetId),Vt=X&&X.targetMismatches.get(D.targetId)!=null,ht=D.view.applyChanges(H,M.isPrimaryClient,Y,Vt);return Va(M,D.targetId,ht.wa),ht.snapshot}(n,E,R,V);const o=await Ta(n.localStore,t,!0),a=new Nd(t,o.Ts),c=a.ma(o.documents),h=ms.createSynthesizedTargetChangeForCurrentChange(e,s&&n.onlineState!=="Offline",i),f=a.applyChanges(c,n.isPrimaryClient,h);Va(n,e,f.wa);const p=new xd(t,e,a);return n.Fa.set(t,p),n.Ma.has(e)?n.Ma.get(e).push(t):n.Ma.set(e,[t]),f.snapshot}async function Bd(n,t,e){const s=W(n),i=s.Fa.get(t),o=s.Ma.get(i.targetId);if(o.length>1)return s.Ma.set(i.targetId,o.filter(a=>!gr(a,t))),void s.Fa.delete(t);s.isPrimaryClient?(s.sharedClientState.removeLocalQueryTarget(i.targetId),s.sharedClientState.isActiveQueryTarget(i.targetId)||await di(s.localStore,i.targetId,!1).then(()=>{s.sharedClientState.clearQueryState(i.targetId),e&&xi(s.remoteStore,i.targetId),pi(s,i.targetId)}).catch(ds)):(pi(s,i.targetId),await di(s.localStore,i.targetId,!0))}async function qd(n,t){const e=W(n),s=e.Fa.get(t),i=e.Ma.get(s.targetId);e.isPrimaryClient&&i.length===1&&(e.sharedClientState.removeLocalQueryTarget(s.targetId),xi(e.remoteStore,s.targetId))}async function jd(n,t,e){const s=Hd(n);try{const i=await function(a,c){const h=W(a),f=At.now(),p=c.reduce((V,N)=>V.add(N.key),Z());let E,R;return h.persistence.runTransaction("Locally write mutations","readwrite",V=>{let N=Te(),M=Z();return h.cs.getEntries(V,p).next(D=>{N=D,N.forEach((G,X)=>{X.isValidDocument()||(M=M.add(G))})}).next(()=>h.localDocuments.getOverlayedDocuments(V,N)).next(D=>{E=D;const G=[];for(const X of c){const H=ch(X,E.get(X.key).overlayedDocument);H!=null&&G.push(new Fe(X.key,H,ul(H.value.mapValue),Xt.exists(!0)))}return h.mutationQueue.addMutationBatch(V,f,G,c)}).next(D=>{R=D;const G=D.applyToLocalDocumentSet(E,M);return h.documentOverlayCache.saveOverlays(V,D.batchId,G)})}).then(()=>({batchId:R.batchId,changes:Tl(E)}))}(s.localStore,t);s.sharedClientState.addPendingMutation(i.batchId),function(a,c,h){let f=a.Ba[a.currentUser.toKey()];f||(f=new gt(rt)),f=f.insert(c,h),a.Ba[a.currentUser.toKey()]=f}(s,i.batchId,e),await _s(s,i.changes),await Ar(s.remoteStore)}catch(i){const o=Ui(i,"Failed to persist write");e.reject(o)}}async function eu(n,t){const e=W(n);try{const s=await sd(e.localStore,t);t.targetChanges.forEach((i,o)=>{const a=e.Na.get(o);a&&(at(i.addedDocuments.size+i.modifiedDocuments.size+i.removedDocuments.size<=1),i.addedDocuments.size>0?a.va=!0:i.modifiedDocuments.size>0?at(a.va):i.removedDocuments.size>0&&(at(a.va),a.va=!1))}),await _s(e,s,t)}catch(s){await ds(s)}}function Ca(n,t,e){const s=W(n);if(s.isPrimaryClient&&e===0||!s.isPrimaryClient&&e===1){const i=[];s.Fa.forEach((o,a)=>{const c=a.view.Z_(t);c.snapshot&&i.push(c.snapshot)}),function(a,c){const h=W(a);h.onlineState=c;let f=!1;h.queries.forEach((p,E)=>{for(const R of E.j_)R.Z_(c)&&(f=!0)}),f&&Bi(h)}(s.eventManager,t),i.length&&s.Ca.d_(i),s.onlineState=t,s.isPrimaryClient&&s.sharedClientState.setOnlineState(t)}}async function $d(n,t,e){const s=W(n);s.sharedClientState.updateQueryState(t,"rejected",e);const i=s.Na.get(t),o=i&&i.key;if(o){let a=new gt(B.comparator);a=a.insert(o,Ut.newNoDocument(o,Q.min()));const c=Z().add(o),h=new Tr(Q.min(),new Map,new gt(rt),a,c);await eu(s,h),s.Oa=s.Oa.remove(o),s.Na.delete(t),qi(s)}else await di(s.localStore,t,!1).then(()=>pi(s,t,e)).catch(ds)}async function zd(n,t){const e=W(n),s=t.batch.batchId;try{const i=await nd(e.localStore,t);su(e,s,null),nu(e,s),e.sharedClientState.updateMutationState(s,"acknowledged"),await _s(e,i)}catch(i){await ds(i)}}async function Kd(n,t,e){const s=W(n);try{const i=await function(a,c){const h=W(a);return h.persistence.runTransaction("Reject batch","readwrite-primary",f=>{let p;return h.mutationQueue.lookupMutationBatch(f,c).next(E=>(at(E!==null),p=E.keys(),h.mutationQueue.removeMutationBatch(f,E))).next(()=>h.mutationQueue.performConsistencyCheck(f)).next(()=>h.documentOverlayCache.removeOverlaysForBatchId(f,p,c)).next(()=>h.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(f,p)).next(()=>h.localDocuments.getDocuments(f,p))})}(s.localStore,t);su(s,t,e),nu(s,t),s.sharedClientState.updateMutationState(t,"rejected",e),await _s(s,i)}catch(i){await ds(i)}}function nu(n,t){(n.ka.get(t)||[]).forEach(e=>{e.resolve()}),n.ka.delete(t)}function su(n,t,e){const s=W(n);let i=s.Ba[s.currentUser.toKey()];if(i){const o=i.get(t);o&&(e?o.reject(e):o.resolve(),i=i.remove(t)),s.Ba[s.currentUser.toKey()]=i}}function pi(n,t,e=null){n.sharedClientState.removeLocalQueryTarget(t);for(const s of n.Ma.get(t))n.Fa.delete(s),e&&n.Ca.$a(s,e);n.Ma.delete(t),n.isPrimaryClient&&n.La.gr(t).forEach(s=>{n.La.containsKey(s)||ru(n,s)})}function ru(n,t){n.xa.delete(t.path.canonicalString());const e=n.Oa.get(t);e!==null&&(xi(n.remoteStore,e),n.Oa=n.Oa.remove(t),n.Na.delete(e),qi(n))}function Va(n,t,e){for(const s of e)s instanceof Jl?(n.La.addReference(s.key,t),Gd(n,s)):s instanceof Zl?(F("SyncEngine","Document no longer in limbo: "+s.key),n.La.removeReference(s.key,t),n.La.containsKey(s.key)||ru(n,s.key)):$()}function Gd(n,t){const e=t.key,s=e.path.canonicalString();n.Oa.get(e)||n.xa.has(s)||(F("SyncEngine","New document in limbo: "+e),n.xa.add(s),qi(n))}function qi(n){for(;n.xa.size>0&&n.Oa.size<n.maxConcurrentLimboResolutions;){const t=n.xa.values().next().value;n.xa.delete(t);const e=new B(pt.fromString(t)),s=n.qa.next();n.Na.set(s,new Od(e)),n.Oa=n.Oa.insert(e,s),$l(n.remoteStore,new ke(ue(mr(e.path)),s,"TargetPurposeLimboResolution",Ti.oe))}}async function _s(n,t,e){const s=W(n),i=[],o=[],a=[];s.Fa.isEmpty()||(s.Fa.forEach((c,h)=>{a.push(s.Ka(h,t,e).then(f=>{var p;if((f||e)&&s.isPrimaryClient){const E=f?!f.fromCache:(p=e==null?void 0:e.targetChanges.get(h.targetId))===null||p===void 0?void 0:p.current;s.sharedClientState.updateQueryState(h.targetId,E?"current":"not-current")}if(f){i.push(f);const E=Ni.Wi(h.targetId,f);o.push(E)}}))}),await Promise.all(a),s.Ca.d_(i),await async function(h,f){const p=W(h);try{await p.persistence.runTransaction("notifyLocalViewChanges","readwrite",E=>k.forEach(f,R=>k.forEach(R.$i,V=>p.persistence.referenceDelegate.addReference(E,R.targetId,V)).next(()=>k.forEach(R.Ui,V=>p.persistence.referenceDelegate.removeReference(E,R.targetId,V)))))}catch(E){if(!fs(E))throw E;F("LocalStore","Failed to update sequence numbers: "+E)}for(const E of f){const R=E.targetId;if(!E.fromCache){const V=p.os.get(R),N=V.snapshotVersion,M=V.withLastLimboFreeSnapshotVersion(N);p.os=p.os.insert(R,M)}}}(s.localStore,o))}async function Qd(n,t){const e=W(n);if(!e.currentUser.isEqual(t)){F("SyncEngine","User change. New user:",t.toKey());const s=await Ul(e.localStore,t);e.currentUser=t,function(o,a){o.ka.forEach(c=>{c.forEach(h=>{h.reject(new L(b.CANCELLED,a))})}),o.ka.clear()}(e,"'waitForPendingWrites' promise is rejected due to a user change."),e.sharedClientState.handleUserChange(t,s.removedBatchIds,s.addedBatchIds),await _s(e,s.hs)}}function Wd(n,t){const e=W(n),s=e.Na.get(t);if(s&&s.va)return Z().add(s.key);{let i=Z();const o=e.Ma.get(t);if(!o)return i;for(const a of o){const c=e.Fa.get(a);i=i.unionWith(c.view.Va)}return i}}function iu(n){const t=W(n);return t.remoteStore.remoteSyncer.applyRemoteEvent=eu.bind(null,t),t.remoteStore.remoteSyncer.getRemoteKeysForTarget=Wd.bind(null,t),t.remoteStore.remoteSyncer.rejectListen=$d.bind(null,t),t.Ca.d_=kd.bind(null,t.eventManager),t.Ca.$a=Dd.bind(null,t.eventManager),t}function Hd(n){const t=W(n);return t.remoteStore.remoteSyncer.applySuccessfulWrite=zd.bind(null,t),t.remoteStore.remoteSyncer.rejectFailedWrite=Kd.bind(null,t),t}class dr{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(t){this.serializer=Er(t.databaseInfo.databaseId),this.sharedClientState=this.Wa(t),this.persistence=this.Ga(t),await this.persistence.start(),this.localStore=this.za(t),this.gcScheduler=this.ja(t,this.localStore),this.indexBackfillerScheduler=this.Ha(t,this.localStore)}ja(t,e){return null}Ha(t,e){return null}za(t){return ed(this.persistence,new Zh,t.initialUser,this.serializer)}Ga(t){return new Xh(Di.Zr,this.serializer)}Wa(t){return new ld}async terminate(){var t,e;(t=this.gcScheduler)===null||t===void 0||t.stop(),(e=this.indexBackfillerScheduler)===null||e===void 0||e.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}dr.provider={build:()=>new dr};class mi{async initialize(t,e){this.localStore||(this.localStore=t.localStore,this.sharedClientState=t.sharedClientState,this.datastore=this.createDatastore(e),this.remoteStore=this.createRemoteStore(e),this.eventManager=this.createEventManager(e),this.syncEngine=this.createSyncEngine(e,!t.synchronizeTabs),this.sharedClientState.onlineStateHandler=s=>Ca(this.syncEngine,s,1),this.remoteStore.remoteSyncer.handleCredentialChange=Qd.bind(null,this.syncEngine),await Vd(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(t){return function(){return new bd}()}createDatastore(t){const e=Er(t.databaseInfo.databaseId),s=function(o){return new dd(o)}(t.databaseInfo);return function(o,a,c,h){return new md(o,a,c,h)}(t.authCredentials,t.appCheckCredentials,s,e)}createRemoteStore(t){return function(s,i,o,a,c){return new _d(s,i,o,a,c)}(this.localStore,this.datastore,t.asyncQueue,e=>Ca(this.syncEngine,e,0),function(){return wa.D()?new wa:new ud}())}createSyncEngine(t,e){return function(i,o,a,c,h,f,p){const E=new Md(i,o,a,c,h,f);return p&&(E.Qa=!0),E}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,t.initialUser,t.maxConcurrentLimboResolutions,e)}async terminate(){var t,e;await async function(i){const o=W(i);F("RemoteStore","RemoteStore shutting down."),o.L_.add(5),await gs(o),o.k_.shutdown(),o.q_.set("Unknown")}(this.remoteStore),(t=this.datastore)===null||t===void 0||t.terminate(),(e=this.eventManager)===null||e===void 0||e.terminate()}}mi.provider={build:()=>new mi};/**
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
 */class ou{constructor(t){this.observer=t,this.muted=!1}next(t){this.muted||this.observer.next&&this.Ya(this.observer.next,t)}error(t){this.muted||(this.observer.error?this.Ya(this.observer.error,t):ve("Uncaught Error in snapshot listener:",t.toString()))}Za(){this.muted=!0}Ya(t,e){setTimeout(()=>{this.muted||t(e)},0)}}/**
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
 */class Xd{constructor(t,e,s,i,o){this.authCredentials=t,this.appCheckCredentials=e,this.asyncQueue=s,this.databaseInfo=i,this.user=Ft.UNAUTHENTICATED,this.clientId=ol.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=o,this.authCredentials.start(s,async a=>{F("FirestoreClient","Received user=",a.uid),await this.authCredentialListener(a),this.user=a}),this.appCheckCredentials.start(s,a=>(F("FirestoreClient","Received new app check token=",a),this.appCheckCredentialListener(a,this.user)))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(t){this.authCredentialListener=t}setAppCheckTokenChangeListener(t){this.appCheckCredentialListener=t}terminate(){this.asyncQueue.enterRestrictedMode();const t=new De;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),t.resolve()}catch(e){const s=Ui(e,"Failed to shutdown persistence");t.reject(s)}}),t.promise}}async function Jr(n,t){n.asyncQueue.verifyOperationInProgress(),F("FirestoreClient","Initializing OfflineComponentProvider");const e=n.configuration;await t.initialize(e);let s=e.initialUser;n.setCredentialChangeListener(async i=>{s.isEqual(i)||(await Ul(t.localStore,i),s=i)}),t.persistence.setDatabaseDeletedListener(()=>n.terminate()),n._offlineComponents=t}async function Sa(n,t){n.asyncQueue.verifyOperationInProgress();const e=await Yd(n);F("FirestoreClient","Initializing OnlineComponentProvider"),await t.initialize(e,n.configuration),n.setCredentialChangeListener(s=>Aa(t.remoteStore,s)),n.setAppCheckTokenChangeListener((s,i)=>Aa(t.remoteStore,i)),n._onlineComponents=t}async function Yd(n){if(!n._offlineComponents)if(n._uninitializedComponentsProvider){F("FirestoreClient","Using user provided OfflineComponentProvider");try{await Jr(n,n._uninitializedComponentsProvider._offline)}catch(t){const e=t;if(!function(i){return i.name==="FirebaseError"?i.code===b.FAILED_PRECONDITION||i.code===b.UNIMPLEMENTED:!(typeof DOMException<"u"&&i instanceof DOMException)||i.code===22||i.code===20||i.code===11}(e))throw e;vn("Error using user provided cache. Falling back to memory cache: "+e),await Jr(n,new dr)}}else F("FirestoreClient","Using default OfflineComponentProvider"),await Jr(n,new dr);return n._offlineComponents}async function au(n){return n._onlineComponents||(n._uninitializedComponentsProvider?(F("FirestoreClient","Using user provided OnlineComponentProvider"),await Sa(n,n._uninitializedComponentsProvider._online)):(F("FirestoreClient","Using default OnlineComponentProvider"),await Sa(n,new mi))),n._onlineComponents}function Jd(n){return au(n).then(t=>t.syncEngine)}async function gi(n){const t=await au(n),e=t.eventManager;return e.onListen=Ld.bind(null,t.syncEngine),e.onUnlisten=Bd.bind(null,t.syncEngine),e.onFirstRemoteStoreListen=Fd.bind(null,t.syncEngine),e.onLastRemoteStoreUnlisten=qd.bind(null,t.syncEngine),e}function Zd(n,t,e={}){const s=new De;return n.asyncQueue.enqueueAndForget(async()=>function(o,a,c,h,f){const p=new ou({next:R=>{p.Za(),a.enqueueAndForget(()=>Xl(o,E));const V=R.docs.has(c);!V&&R.fromCache?f.reject(new L(b.UNAVAILABLE,"Failed to get document because the client is offline.")):V&&R.fromCache&&h&&h.source==="server"?f.reject(new L(b.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):f.resolve(R)},error:R=>f.reject(R)}),E=new Yl(mr(c.path),p,{includeMetadataChanges:!0,_a:!0});return Hl(o,E)}(await gi(n),n.asyncQueue,t,e,s)),s.promise}/**
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
 */function lu(n){const t={};return n.timeoutSeconds!==void 0&&(t.timeoutSeconds=n.timeoutSeconds),t}/**
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
 */const ba=new Map;/**
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
 */function uu(n,t,e){if(!e)throw new L(b.INVALID_ARGUMENT,`Function ${n}() cannot be called with an empty ${t}.`)}function tf(n,t,e,s){if(t===!0&&s===!0)throw new L(b.INVALID_ARGUMENT,`${n} and ${e} cannot be used together.`)}function ka(n){if(!B.isDocumentKey(n))throw new L(b.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${n} has ${n.length}.`)}function Da(n){if(B.isDocumentKey(n))throw new L(b.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${n} has ${n.length}.`)}function Ir(n){if(n===void 0)return"undefined";if(n===null)return"null";if(typeof n=="string")return n.length>20&&(n=`${n.substring(0,20)}...`),JSON.stringify(n);if(typeof n=="number"||typeof n=="boolean")return""+n;if(typeof n=="object"){if(n instanceof Array)return"an array";{const t=function(s){return s.constructor?s.constructor.name:null}(n);return t?`a custom ${t} object`:"an object"}}return typeof n=="function"?"a function":$()}function Yt(n,t){if("_delegate"in n&&(n=n._delegate),!(n instanceof t)){if(t.name===n.constructor.name)throw new L(b.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const e=Ir(n);throw new L(b.INVALID_ARGUMENT,`Expected type '${t.name}', but it was: ${e}`)}}return n}/**
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
 */class Na{constructor(t){var e,s;if(t.host===void 0){if(t.ssl!==void 0)throw new L(b.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=t.host,this.ssl=(e=t.ssl)===null||e===void 0||e;if(this.credentials=t.credentials,this.ignoreUndefinedProperties=!!t.ignoreUndefinedProperties,this.localCache=t.localCache,t.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(t.cacheSizeBytes!==-1&&t.cacheSizeBytes<1048576)throw new L(b.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=t.cacheSizeBytes}tf("experimentalForceLongPolling",t.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",t.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!t.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:t.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!t.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=lu((s=t.experimentalLongPollingOptions)!==null&&s!==void 0?s:{}),function(o){if(o.timeoutSeconds!==void 0){if(isNaN(o.timeoutSeconds))throw new L(b.INVALID_ARGUMENT,`invalid long polling timeout: ${o.timeoutSeconds} (must not be NaN)`);if(o.timeoutSeconds<5)throw new L(b.INVALID_ARGUMENT,`invalid long polling timeout: ${o.timeoutSeconds} (minimum allowed value is 5)`);if(o.timeoutSeconds>30)throw new L(b.INVALID_ARGUMENT,`invalid long polling timeout: ${o.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!t.useFetchStreams}isEqual(t){return this.host===t.host&&this.ssl===t.ssl&&this.credentials===t.credentials&&this.cacheSizeBytes===t.cacheSizeBytes&&this.experimentalForceLongPolling===t.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===t.experimentalAutoDetectLongPolling&&function(s,i){return s.timeoutSeconds===i.timeoutSeconds}(this.experimentalLongPollingOptions,t.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===t.ignoreUndefinedProperties&&this.useFetchStreams===t.useFetchStreams}}class Rr{constructor(t,e,s,i){this._authCredentials=t,this._appCheckCredentials=e,this._databaseId=s,this._app=i,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new Na({}),this._settingsFrozen=!1,this._terminateTask="notTerminated"}get app(){if(!this._app)throw new L(b.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(t){if(this._settingsFrozen)throw new L(b.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new Na(t),t.credentials!==void 0&&(this._authCredentials=function(s){if(!s)return new yc;switch(s.type){case"firstParty":return new wc(s.sessionIndex||"0",s.iamToken||null,s.authTokenFactory||null);case"provider":return s.client;default:throw new L(b.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(t.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(e){const s=ba.get(e);s&&(F("ComponentProvider","Removing Datastore"),ba.delete(e),s.terminate())}(this),Promise.resolve()}}function ef(n,t,e,s={}){var i;const o=(n=Yt(n,Rr))._getSettings(),a=`${t}:${e}`;if(o.host!=="firestore.googleapis.com"&&o.host!==a&&vn("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used."),n._setSettings(Object.assign(Object.assign({},o),{host:a,ssl:!1})),s.mockUserToken){let c,h;if(typeof s.mockUserToken=="string")c=s.mockUserToken,h=Ft.MOCK_USER;else{c=Wa(s.mockUserToken,(i=n._app)===null||i===void 0?void 0:i.options.projectId);const f=s.mockUserToken.sub||s.mockUserToken.user_id;if(!f)throw new L(b.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");h=new Ft(f)}n._authCredentials=new vc(new il(c,h))}}/**
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
 */class Ue{constructor(t,e,s){this.converter=e,this._query=s,this.type="query",this.firestore=t}withConverter(t){return new Ue(this.firestore,t,this._query)}}class Bt{constructor(t,e,s){this.converter=e,this._key=s,this.type="document",this.firestore=t}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new Ne(this.firestore,this.converter,this._key.path.popLast())}withConverter(t){return new Bt(this.firestore,t,this._key)}}class Ne extends Ue{constructor(t,e,s){super(t,e,mr(s)),this._path=s,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const t=this._path.popLast();return t.isEmpty()?null:new Bt(this.firestore,null,new B(t))}withConverter(t){return new Ne(this.firestore,t,this._path)}}function Zr(n,t,...e){if(n=$t(n),uu("collection","path",t),n instanceof Rr){const s=pt.fromString(t,...e);return Da(s),new Ne(n,null,s)}{if(!(n instanceof Bt||n instanceof Ne))throw new L(b.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const s=n._path.child(pt.fromString(t,...e));return Da(s),new Ne(n.firestore,null,s)}}function _n(n,t,...e){if(n=$t(n),arguments.length===1&&(t=ol.newId()),uu("doc","path",t),n instanceof Rr){const s=pt.fromString(t,...e);return ka(s),new Bt(n,null,new B(s))}{if(!(n instanceof Bt||n instanceof Ne))throw new L(b.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const s=n._path.child(pt.fromString(t,...e));return ka(s),new Bt(n.firestore,n instanceof Ne?n.converter:null,new B(s))}}/**
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
 */class xa{constructor(t=Promise.resolve()){this.Pu=[],this.Iu=!1,this.Tu=[],this.Eu=null,this.du=!1,this.Au=!1,this.Ru=[],this.t_=new ql(this,"async_queue_retry"),this.Vu=()=>{const s=Yr();s&&F("AsyncQueue","Visibility state changed to "+s.visibilityState),this.t_.jo()},this.mu=t;const e=Yr();e&&typeof e.addEventListener=="function"&&e.addEventListener("visibilitychange",this.Vu)}get isShuttingDown(){return this.Iu}enqueueAndForget(t){this.enqueue(t)}enqueueAndForgetEvenWhileRestricted(t){this.fu(),this.gu(t)}enterRestrictedMode(t){if(!this.Iu){this.Iu=!0,this.Au=t||!1;const e=Yr();e&&typeof e.removeEventListener=="function"&&e.removeEventListener("visibilitychange",this.Vu)}}enqueue(t){if(this.fu(),this.Iu)return new Promise(()=>{});const e=new De;return this.gu(()=>this.Iu&&this.Au?Promise.resolve():(t().then(e.resolve,e.reject),e.promise)).then(()=>e.promise)}enqueueRetryable(t){this.enqueueAndForget(()=>(this.Pu.push(t),this.pu()))}async pu(){if(this.Pu.length!==0){try{await this.Pu[0](),this.Pu.shift(),this.t_.reset()}catch(t){if(!fs(t))throw t;F("AsyncQueue","Operation failed with retryable error: "+t)}this.Pu.length>0&&this.t_.Go(()=>this.pu())}}gu(t){const e=this.mu.then(()=>(this.du=!0,t().catch(s=>{this.Eu=s,this.du=!1;const i=function(a){let c=a.message||"";return a.stack&&(c=a.stack.includes(a.message)?a.stack:a.message+`
`+a.stack),c}(s);throw ve("INTERNAL UNHANDLED ERROR: ",i),s}).then(s=>(this.du=!1,s))));return this.mu=e,e}enqueueAfterDelay(t,e,s){this.fu(),this.Ru.indexOf(t)>-1&&(e=0);const i=Fi.createAndSchedule(this,t,e,s,o=>this.yu(o));return this.Tu.push(i),i}fu(){this.Eu&&$()}verifyOperationInProgress(){}async wu(){let t;do t=this.mu,await t;while(t!==this.mu)}Su(t){for(const e of this.Tu)if(e.timerId===t)return!0;return!1}bu(t){return this.wu().then(()=>{this.Tu.sort((e,s)=>e.targetTimeMs-s.targetTimeMs);for(const e of this.Tu)if(e.skipDelay(),t!=="all"&&e.timerId===t)break;return this.wu()})}Du(t){this.Ru.push(t)}yu(t){const e=this.Tu.indexOf(t);this.Tu.splice(e,1)}}function Oa(n){return function(e,s){if(typeof e!="object"||e===null)return!1;const i=e;for(const o of s)if(o in i&&typeof i[o]=="function")return!0;return!1}(n,["next","error","complete"])}class Le extends Rr{constructor(t,e,s,i){super(t,e,s,i),this.type="firestore",this._queue=new xa,this._persistenceKey=(i==null?void 0:i.name)||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const t=this._firestoreClient.terminate();this._queue=new xa(t),this._firestoreClient=void 0,await t}}}function He(n,t){const e=typeof n=="object"?n:Ka(),s=typeof n=="string"?n:"(default)",i=Ga(e,"firestore").getImmediate({identifier:s});if(!i._initialized){const o=Qa("firestore");o&&ef(i,...o)}return i}function ji(n){if(n._terminated)throw new L(b.FAILED_PRECONDITION,"The client has already been terminated.");return n._firestoreClient||nf(n),n._firestoreClient}function nf(n){var t,e,s;const i=n._freezeSettings(),o=function(c,h,f,p){return new Oc(c,h,f,p.host,p.ssl,p.experimentalForceLongPolling,p.experimentalAutoDetectLongPolling,lu(p.experimentalLongPollingOptions),p.useFetchStreams)}(n._databaseId,((t=n._app)===null||t===void 0?void 0:t.options.appId)||"",n._persistenceKey,i);n._componentsProvider||!((e=i.localCache)===null||e===void 0)&&e._offlineComponentProvider&&(!((s=i.localCache)===null||s===void 0)&&s._onlineComponentProvider)&&(n._componentsProvider={_offline:i.localCache._offlineComponentProvider,_online:i.localCache._onlineComponentProvider}),n._firestoreClient=new Xd(n._authCredentials,n._appCheckCredentials,n._queue,o,n._componentsProvider&&function(c){const h=c==null?void 0:c._online.build();return{_offline:c==null?void 0:c._offline.build(h),_online:h}}(n._componentsProvider))}/**
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
 */class Rn{constructor(t){this._byteString=t}static fromBase64String(t){try{return new Rn(Nt.fromBase64String(t))}catch(e){throw new L(b.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+e)}}static fromUint8Array(t){return new Rn(Nt.fromUint8Array(t))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(t){return this._byteString.isEqual(t._byteString)}}/**
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
 */class Pr{constructor(...t){for(let e=0;e<t.length;++e)if(t[e].length===0)throw new L(b.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new kt(t)}isEqual(t){return this._internalPath.isEqual(t._internalPath)}}/**
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
 */class Cr{constructor(t){this._methodName=t}}/**
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
 */class $i{constructor(t,e){if(!isFinite(t)||t<-90||t>90)throw new L(b.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+t);if(!isFinite(e)||e<-180||e>180)throw new L(b.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+e);this._lat=t,this._long=e}get latitude(){return this._lat}get longitude(){return this._long}isEqual(t){return this._lat===t._lat&&this._long===t._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(t){return rt(this._lat,t._lat)||rt(this._long,t._long)}}/**
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
 */class zi{constructor(t){this._values=(t||[]).map(e=>e)}toArray(){return this._values.map(t=>t)}isEqual(t){return function(s,i){if(s.length!==i.length)return!1;for(let o=0;o<s.length;++o)if(s[o]!==i[o])return!1;return!0}(this._values,t._values)}}/**
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
 */const sf=/^__.*__$/;class rf{constructor(t,e,s){this.data=t,this.fieldMask=e,this.fieldTransforms=s}toMutation(t,e){return this.fieldMask!==null?new Fe(t,this.data,this.fieldMask,e,this.fieldTransforms):new ps(t,this.data,e,this.fieldTransforms)}}class cu{constructor(t,e,s){this.data=t,this.fieldMask=e,this.fieldTransforms=s}toMutation(t,e){return new Fe(t,this.data,this.fieldMask,e,this.fieldTransforms)}}function hu(n){switch(n){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw $()}}class Ki{constructor(t,e,s,i,o,a){this.settings=t,this.databaseId=e,this.serializer=s,this.ignoreUndefinedProperties=i,o===void 0&&this.vu(),this.fieldTransforms=o||[],this.fieldMask=a||[]}get path(){return this.settings.path}get Cu(){return this.settings.Cu}Fu(t){return new Ki(Object.assign(Object.assign({},this.settings),t),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}Mu(t){var e;const s=(e=this.path)===null||e===void 0?void 0:e.child(t),i=this.Fu({path:s,xu:!1});return i.Ou(t),i}Nu(t){var e;const s=(e=this.path)===null||e===void 0?void 0:e.child(t),i=this.Fu({path:s,xu:!1});return i.vu(),i}Lu(t){return this.Fu({path:void 0,xu:!0})}Bu(t){return fr(t,this.settings.methodName,this.settings.ku||!1,this.path,this.settings.qu)}contains(t){return this.fieldMask.find(e=>t.isPrefixOf(e))!==void 0||this.fieldTransforms.find(e=>t.isPrefixOf(e.field))!==void 0}vu(){if(this.path)for(let t=0;t<this.path.length;t++)this.Ou(this.path.get(t))}Ou(t){if(t.length===0)throw this.Bu("Document fields must not be empty");if(hu(this.Cu)&&sf.test(t))throw this.Bu('Document fields cannot begin and end with "__"')}}class of{constructor(t,e,s){this.databaseId=t,this.ignoreUndefinedProperties=e,this.serializer=s||Er(t)}Qu(t,e,s,i=!1){return new Ki({Cu:t,methodName:e,qu:s,path:kt.emptyPath(),xu:!1,ku:i},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function Vr(n){const t=n._freezeSettings(),e=Er(n._databaseId);return new of(n._databaseId,!!t.ignoreUndefinedProperties,e)}function du(n,t,e,s,i,o={}){const a=n.Qu(o.merge||o.mergeFields?2:0,t,e,i);Qi("Data must be an object, but it was:",a,s);const c=fu(s,a);let h,f;if(o.merge)h=new Qt(a.fieldMask),f=a.fieldTransforms;else if(o.mergeFields){const p=[];for(const E of o.mergeFields){const R=_i(t,E,e);if(!a.contains(R))throw new L(b.INVALID_ARGUMENT,`Field '${R}' is specified in your field mask but missing from your input data.`);mu(p,R)||p.push(R)}h=new Qt(p),f=a.fieldTransforms.filter(E=>h.covers(E.field))}else h=null,f=a.fieldTransforms;return new rf(new jt(c),h,f)}class Sr extends Cr{_toFieldTransform(t){if(t.Cu!==2)throw t.Cu===1?t.Bu(`${this._methodName}() can only appear at the top level of your update data`):t.Bu(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return t.fieldMask.push(t.path),null}isEqual(t){return t instanceof Sr}}class Gi extends Cr{_toFieldTransform(t){return new oh(t.path,new us)}isEqual(t){return t instanceof Gi}}function af(n,t,e,s){const i=n.Qu(1,t,e);Qi("Data must be an object, but it was:",i,s);const o=[],a=jt.empty();sn(s,(h,f)=>{const p=Wi(t,h,e);f=$t(f);const E=i.Nu(p);if(f instanceof Sr)o.push(p);else{const R=ys(f,E);R!=null&&(o.push(p),a.set(p,R))}});const c=new Qt(o);return new cu(a,c,i.fieldTransforms)}function lf(n,t,e,s,i,o){const a=n.Qu(1,t,e),c=[_i(t,s,e)],h=[i];if(o.length%2!=0)throw new L(b.INVALID_ARGUMENT,`Function ${t}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let R=0;R<o.length;R+=2)c.push(_i(t,o[R])),h.push(o[R+1]);const f=[],p=jt.empty();for(let R=c.length-1;R>=0;--R)if(!mu(f,c[R])){const V=c[R];let N=h[R];N=$t(N);const M=a.Nu(V);if(N instanceof Sr)f.push(V);else{const D=ys(N,M);D!=null&&(f.push(V),p.set(V,D))}}const E=new Qt(f);return new cu(p,E,a.fieldTransforms)}function uf(n,t,e,s=!1){return ys(e,n.Qu(s?4:3,t))}function ys(n,t){if(pu(n=$t(n)))return Qi("Unsupported field value:",t,n),fu(n,t);if(n instanceof Cr)return function(s,i){if(!hu(i.Cu))throw i.Bu(`${s._methodName}() can only be used with update() and set()`);if(!i.path)throw i.Bu(`${s._methodName}() is not currently supported inside arrays`);const o=s._toFieldTransform(i);o&&i.fieldTransforms.push(o)}(n,t),null;if(n===void 0&&t.ignoreUndefinedProperties)return null;if(t.path&&t.fieldMask.push(t.path),n instanceof Array){if(t.settings.xu&&t.Cu!==4)throw t.Bu("Nested arrays are not supported");return function(s,i){const o=[];let a=0;for(const c of s){let h=ys(c,i.Lu(a));h==null&&(h={nullValue:"NULL_VALUE"}),o.push(h),a++}return{arrayValue:{values:o}}}(n,t)}return function(s,i){if((s=$t(s))===null)return{nullValue:"NULL_VALUE"};if(typeof s=="number")return sh(i.serializer,s);if(typeof s=="boolean")return{booleanValue:s};if(typeof s=="string")return{stringValue:s};if(s instanceof Date){const o=At.fromDate(s);return{timestampValue:cr(i.serializer,o)}}if(s instanceof At){const o=new At(s.seconds,1e3*Math.floor(s.nanoseconds/1e3));return{timestampValue:cr(i.serializer,o)}}if(s instanceof $i)return{geoPointValue:{latitude:s.latitude,longitude:s.longitude}};if(s instanceof Rn)return{bytesValue:Dl(i.serializer,s._byteString)};if(s instanceof Bt){const o=i.databaseId,a=s.firestore._databaseId;if(!a.isEqual(o))throw i.Bu(`Document reference is for database ${a.projectId}/${a.database} but should be for database ${o.projectId}/${o.database}`);return{referenceValue:bi(s.firestore._databaseId||i.databaseId,s._key.path)}}if(s instanceof zi)return function(a,c){return{mapValue:{fields:{__type__:{stringValue:"__vector__"},value:{arrayValue:{values:a.toArray().map(h=>{if(typeof h!="number")throw c.Bu("VectorValues must only contain numeric values.");return Pi(c.serializer,h)})}}}}}}(s,i);throw i.Bu(`Unsupported field value: ${Ir(s)}`)}(n,t)}function fu(n,t){const e={};return al(n)?t.path&&t.path.length>0&&t.fieldMask.push(t.path):sn(n,(s,i)=>{const o=ys(i,t.Mu(s));o!=null&&(e[s]=o)}),{mapValue:{fields:e}}}function pu(n){return!(typeof n!="object"||n===null||n instanceof Array||n instanceof Date||n instanceof At||n instanceof $i||n instanceof Rn||n instanceof Bt||n instanceof Cr||n instanceof zi)}function Qi(n,t,e){if(!pu(e)||!function(i){return typeof i=="object"&&i!==null&&(Object.getPrototypeOf(i)===Object.prototype||Object.getPrototypeOf(i)===null)}(e)){const s=Ir(e);throw s==="an object"?t.Bu(n+" a custom object"):t.Bu(n+" "+s)}}function _i(n,t,e){if((t=$t(t))instanceof Pr)return t._internalPath;if(typeof t=="string")return Wi(n,t);throw fr("Field path arguments must be of type string or ",n,!1,void 0,e)}const cf=new RegExp("[~\\*/\\[\\]]");function Wi(n,t,e){if(t.search(cf)>=0)throw fr(`Invalid field path (${t}). Paths must not contain '~', '*', '/', '[', or ']'`,n,!1,void 0,e);try{return new Pr(...t.split("."))._internalPath}catch{throw fr(`Invalid field path (${t}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,n,!1,void 0,e)}}function fr(n,t,e,s,i){const o=s&&!s.isEmpty(),a=i!==void 0;let c=`Function ${t}() called with invalid data`;e&&(c+=" (via `toFirestore()`)"),c+=". ";let h="";return(o||a)&&(h+=" (found",o&&(h+=` in field ${s}`),a&&(h+=` in document ${i}`),h+=")"),new L(b.INVALID_ARGUMENT,c+n+h)}function mu(n,t){return n.some(e=>e.isEqual(t))}/**
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
 */class gu{constructor(t,e,s,i,o){this._firestore=t,this._userDataWriter=e,this._key=s,this._document=i,this._converter=o}get id(){return this._key.path.lastSegment()}get ref(){return new Bt(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const t=new hf(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(t)}return this._userDataWriter.convertValue(this._document.data.value)}}get(t){if(this._document){const e=this._document.data.field(Hi("DocumentSnapshot.get",t));if(e!==null)return this._userDataWriter.convertValue(e)}}}class hf extends gu{data(){return super.data()}}function Hi(n,t){return typeof t=="string"?Wi(n,t):t instanceof Pr?t._internalPath:t._delegate._internalPath}/**
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
 */function df(n){if(n.limitType==="L"&&n.explicitOrderBy.length===0)throw new L(b.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class Xi{}class Yi extends Xi{}function ff(n,t,...e){let s=[];t instanceof Xi&&s.push(t),s=s.concat(e),function(o){const a=o.filter(h=>h instanceof Zi).length,c=o.filter(h=>h instanceof Ji).length;if(a>1||a>0&&c>0)throw new L(b.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")}(s);for(const i of s)n=i._apply(n);return n}class Ji extends Yi{constructor(t,e,s){super(),this._field=t,this._op=e,this._value=s,this.type="where"}static _create(t,e,s){return new Ji(t,e,s)}_apply(t){const e=this._parse(t);return _u(t._query,e),new Ue(t.firestore,t.converter,ai(t._query,e))}_parse(t){const e=Vr(t.firestore);return function(o,a,c,h,f,p,E){let R;if(f.isKeyField()){if(p==="array-contains"||p==="array-contains-any")throw new L(b.INVALID_ARGUMENT,`Invalid Query. You can't perform '${p}' queries on documentId().`);if(p==="in"||p==="not-in"){La(E,p);const V=[];for(const N of E)V.push(Ma(h,o,N));R={arrayValue:{values:V}}}else R=Ma(h,o,E)}else p!=="in"&&p!=="not-in"&&p!=="array-contains-any"||La(E,p),R=uf(c,a,E,p==="in"||p==="not-in");return wt.create(f,p,R)}(t._query,"where",e,t.firestore._databaseId,this._field,this._op,this._value)}}class Zi extends Xi{constructor(t,e){super(),this.type=t,this._queryConstraints=e}static _create(t,e){return new Zi(t,e)}_parse(t){const e=this._queryConstraints.map(s=>s._parse(t)).filter(s=>s.getFilters().length>0);return e.length===1?e[0]:ne.create(e,this._getOperator())}_apply(t){const e=this._parse(t);return e.getFilters().length===0?t:(function(i,o){let a=i;const c=o.getFlattenedFilters();for(const h of c)_u(a,h),a=ai(a,h)}(t._query,e),new Ue(t.firestore,t.converter,ai(t._query,e)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return this.type==="and"?"and":"or"}}class to extends Yi{constructor(t,e){super(),this._field=t,this._direction=e,this.type="orderBy"}static _create(t,e){return new to(t,e)}_apply(t){const e=function(i,o,a){if(i.startAt!==null)throw new L(b.INVALID_ARGUMENT,"Invalid query. You must not call startAt() or startAfter() before calling orderBy().");if(i.endAt!==null)throw new L(b.INVALID_ARGUMENT,"Invalid query. You must not call endAt() or endBefore() before calling orderBy().");return new ls(o,a)}(t._query,this._field,this._direction);return new Ue(t.firestore,t.converter,function(i,o){const a=i.explicitOrderBy.concat([o]);return new Cn(i.path,i.collectionGroup,a,i.filters.slice(),i.limit,i.limitType,i.startAt,i.endAt)}(t._query,e))}}function pf(n,t="asc"){const e=t,s=Hi("orderBy",n);return to._create(s,e)}class eo extends Yi{constructor(t,e,s){super(),this.type=t,this._limit=e,this._limitType=s}static _create(t,e,s){return new eo(t,e,s)}_apply(t){return new Ue(t.firestore,t.converter,lr(t._query,this._limit,this._limitType))}}function mf(n){return eo._create("limit",n,"F")}function Ma(n,t,e){if(typeof(e=$t(e))=="string"){if(e==="")throw new L(b.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!gl(t)&&e.indexOf("/")!==-1)throw new L(b.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${e}' contains a '/' character.`);const s=t.path.child(pt.fromString(e));if(!B.isDocumentKey(s))throw new L(b.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${s}' is not because it has an odd number of segments (${s.length}).`);return sa(n,new B(s))}if(e instanceof Bt)return sa(n,e._key);throw new L(b.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${Ir(e)}.`)}function La(n,t){if(!Array.isArray(n)||n.length===0)throw new L(b.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${t.toString()}' filters.`)}function _u(n,t){const e=function(i,o){for(const a of i)for(const c of a.getFlattenedFilters())if(o.indexOf(c.op)>=0)return c.op;return null}(n.filters,function(i){switch(i){case"!=":return["!=","not-in"];case"array-contains-any":case"in":return["not-in"];case"not-in":return["array-contains-any","in","not-in","!="];default:return[]}}(t.op));if(e!==null)throw e===t.op?new L(b.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${t.op.toString()}' filter.`):new L(b.INVALID_ARGUMENT,`Invalid query. You cannot use '${t.op.toString()}' filters with '${e.toString()}' filters.`)}class gf{convertValue(t,e="none"){switch(en(t)){case 0:return null;case 1:return t.booleanValue;case 2:return Tt(t.integerValue||t.doubleValue);case 3:return this.convertTimestamp(t.timestampValue);case 4:return this.convertServerTimestamp(t,e);case 5:return t.stringValue;case 6:return this.convertBytes(tn(t.bytesValue));case 7:return this.convertReference(t.referenceValue);case 8:return this.convertGeoPoint(t.geoPointValue);case 9:return this.convertArray(t.arrayValue,e);case 11:return this.convertObject(t.mapValue,e);case 10:return this.convertVectorValue(t.mapValue);default:throw $()}}convertObject(t,e){return this.convertObjectMap(t.fields,e)}convertObjectMap(t,e="none"){const s={};return sn(t,(i,o)=>{s[i]=this.convertValue(o,e)}),s}convertVectorValue(t){var e,s,i;const o=(i=(s=(e=t.fields)===null||e===void 0?void 0:e.value.arrayValue)===null||s===void 0?void 0:s.values)===null||i===void 0?void 0:i.map(a=>Tt(a.doubleValue));return new zi(o)}convertGeoPoint(t){return new $i(Tt(t.latitude),Tt(t.longitude))}convertArray(t,e){return(t.values||[]).map(s=>this.convertValue(s,e))}convertServerTimestamp(t,e){switch(e){case"previous":const s=wi(t);return s==null?null:this.convertValue(s,e);case"estimate":return this.convertTimestamp(is(t));default:return null}}convertTimestamp(t){const e=Oe(t);return new At(e.seconds,e.nanos)}convertDocumentKey(t,e){const s=pt.fromString(t);at(Fl(s));const i=new os(s.get(1),s.get(3)),o=new B(s.popFirst(5));return i.isEqual(e)||ve(`Document ${o} contains a document reference within a different database (${i.projectId}/${i.database}) which is not supported. It will be treated as a reference in the current database (${e.projectId}/${e.database}) instead.`),o}}/**
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
 */function yu(n,t,e){let s;return s=n?n.toFirestore(t):t,s}/**
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
 */class Jn{constructor(t,e){this.hasPendingWrites=t,this.fromCache=e}isEqual(t){return this.hasPendingWrites===t.hasPendingWrites&&this.fromCache===t.fromCache}}class vu extends gu{constructor(t,e,s,i,o,a){super(t,e,s,i,a),this._firestore=t,this._firestoreImpl=t,this.metadata=o}exists(){return super.exists()}data(t={}){if(this._document){if(this._converter){const e=new rr(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(e,t)}return this._userDataWriter.convertValue(this._document.data.value,t.serverTimestamps)}}get(t,e={}){if(this._document){const s=this._document.data.field(Hi("DocumentSnapshot.get",t));if(s!==null)return this._userDataWriter.convertValue(s,e.serverTimestamps)}}}class rr extends vu{data(t={}){return super.data(t)}}class _f{constructor(t,e,s,i){this._firestore=t,this._userDataWriter=e,this._snapshot=i,this.metadata=new Jn(i.hasPendingWrites,i.fromCache),this.query=s}get docs(){const t=[];return this.forEach(e=>t.push(e)),t}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(t,e){this._snapshot.docs.forEach(s=>{t.call(e,new rr(this._firestore,this._userDataWriter,s.key,s,new Jn(this._snapshot.mutatedKeys.has(s.key),this._snapshot.fromCache),this.query.converter))})}docChanges(t={}){const e=!!t.includeMetadataChanges;if(e&&this._snapshot.excludesMetadataChanges)throw new L(b.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===e||(this._cachedChanges=function(i,o){if(i._snapshot.oldDocs.isEmpty()){let a=0;return i._snapshot.docChanges.map(c=>{const h=new rr(i._firestore,i._userDataWriter,c.doc.key,c.doc,new Jn(i._snapshot.mutatedKeys.has(c.doc.key),i._snapshot.fromCache),i.query.converter);return c.doc,{type:"added",doc:h,oldIndex:-1,newIndex:a++}})}{let a=i._snapshot.oldDocs;return i._snapshot.docChanges.filter(c=>o||c.type!==3).map(c=>{const h=new rr(i._firestore,i._userDataWriter,c.doc.key,c.doc,new Jn(i._snapshot.mutatedKeys.has(c.doc.key),i._snapshot.fromCache),i.query.converter);let f=-1,p=-1;return c.type!==0&&(f=a.indexOf(c.doc.key),a=a.delete(c.doc.key)),c.type!==1&&(a=a.add(c.doc),p=a.indexOf(c.doc.key)),{type:yf(c.type),doc:h,oldIndex:f,newIndex:p}})}}(this,e),this._cachedChangesIncludeMetadataChanges=e),this._cachedChanges}}function yf(n){switch(n){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return $()}}/**
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
 */function vf(n){n=Yt(n,Bt);const t=Yt(n.firestore,Le);return Zd(ji(t),n._key).then(e=>Eu(t,n,e))}class Tu extends gf{constructor(t){super(),this.firestore=t}convertBytes(t){return new Rn(t)}convertReference(t){const e=this.convertDocumentKey(t,this.firestore._databaseId);return new Bt(this.firestore,null,e)}}function Fa(n,t,e){n=Yt(n,Bt);const s=Yt(n.firestore,Le),i=yu(n.converter,t);return br(s,[du(Vr(s),"setDoc",n._key,i,n.converter!==null,e).toMutation(n._key,Xt.none())])}function Tf(n,t,e,...s){n=Yt(n,Bt);const i=Yt(n.firestore,Le),o=Vr(i);let a;return a=typeof(t=$t(t))=="string"||t instanceof Pr?lf(o,"updateDoc",n._key,t,e,s):af(o,"updateDoc",n._key,t),br(i,[a.toMutation(n._key,Xt.exists(!0))])}function Ys(n){return br(Yt(n.firestore,Le),[new Ci(n._key,Xt.none())])}function Ef(n,t){const e=Yt(n.firestore,Le),s=_n(n),i=yu(n.converter,t);return br(e,[du(Vr(n.firestore),"addDoc",s._key,i,n.converter!==null,{}).toMutation(s._key,Xt.exists(!1))]).then(()=>s)}function Ua(n,...t){var e,s,i;n=$t(n);let o={includeMetadataChanges:!1,source:"default"},a=0;typeof t[a]!="object"||Oa(t[a])||(o=t[a],a++);const c={includeMetadataChanges:o.includeMetadataChanges,source:o.source};if(Oa(t[a])){const E=t[a];t[a]=(e=E.next)===null||e===void 0?void 0:e.bind(E),t[a+1]=(s=E.error)===null||s===void 0?void 0:s.bind(E),t[a+2]=(i=E.complete)===null||i===void 0?void 0:i.bind(E)}let h,f,p;if(n instanceof Bt)f=Yt(n.firestore,Le),p=mr(n._key.path),h={next:E=>{t[a]&&t[a](Eu(f,n,E))},error:t[a+1],complete:t[a+2]};else{const E=Yt(n,Ue);f=Yt(E.firestore,Le),p=E._query;const R=new Tu(f);h={next:V=>{t[a]&&t[a](new _f(f,R,E,V))},error:t[a+1],complete:t[a+2]},df(n._query)}return function(R,V,N,M){const D=new ou(M),G=new Yl(V,D,N);return R.asyncQueue.enqueueAndForget(async()=>Hl(await gi(R),G)),()=>{D.Za(),R.asyncQueue.enqueueAndForget(async()=>Xl(await gi(R),G))}}(ji(f),p,c,h)}function br(n,t){return function(s,i){const o=new De;return s.asyncQueue.enqueueAndForget(async()=>jd(await Jd(s),i,o)),o.promise}(ji(n),t)}function Eu(n,t,e){const s=e.docs.get(t._key),i=new Tu(n);return new vu(n,i,t._key,s,new Jn(e.hasPendingWrites,e.fromCache),t.converter)}function wf(){return new Gi("serverTimestamp")}(function(t,e=!0){(function(i){Pn=i})(Xa),Ya(new Ja("firestore",(s,{instanceIdentifier:i,options:o})=>{const a=s.getProvider("app").getImmediate(),c=new Le(new Tc(s.getProvider("auth-internal")),new Ic(s.getProvider("app-check-internal")),function(f,p){if(!Object.prototype.hasOwnProperty.apply(f.options,["projectId"]))throw new L(b.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new os(f.options.projectId,p)}(a,i),a);return o=Object.assign({useFetchStreams:e},o),c._setSettings(o),c},"PUBLIC").setMultipleInstances(!0)),ir(Jo,"4.7.3",t),ir(Jo,"4.7.3","esm2017")})();/**
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
 */const wu="firebasestorage.googleapis.com",Au="storageBucket",Af=2*60*1e3,If=10*60*1e3;/**
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
 */class vt extends Ha{constructor(t,e,s=0){super(ti(t),`Firebase Storage: ${e} (${ti(t)})`),this.status_=s,this.customData={serverResponse:null},this._baseMessage=this.message,Object.setPrototypeOf(this,vt.prototype)}get status(){return this.status_}set status(t){this.status_=t}_codeEquals(t){return ti(t)===this.code}get serverResponse(){return this.customData.serverResponse}set serverResponse(t){this.customData.serverResponse=t,this.customData.serverResponse?this.message=`${this._baseMessage}
${this.customData.serverResponse}`:this.message=this._baseMessage}}var yt;(function(n){n.UNKNOWN="unknown",n.OBJECT_NOT_FOUND="object-not-found",n.BUCKET_NOT_FOUND="bucket-not-found",n.PROJECT_NOT_FOUND="project-not-found",n.QUOTA_EXCEEDED="quota-exceeded",n.UNAUTHENTICATED="unauthenticated",n.UNAUTHORIZED="unauthorized",n.UNAUTHORIZED_APP="unauthorized-app",n.RETRY_LIMIT_EXCEEDED="retry-limit-exceeded",n.INVALID_CHECKSUM="invalid-checksum",n.CANCELED="canceled",n.INVALID_EVENT_NAME="invalid-event-name",n.INVALID_URL="invalid-url",n.INVALID_DEFAULT_BUCKET="invalid-default-bucket",n.NO_DEFAULT_BUCKET="no-default-bucket",n.CANNOT_SLICE_BLOB="cannot-slice-blob",n.SERVER_FILE_WRONG_SIZE="server-file-wrong-size",n.NO_DOWNLOAD_URL="no-download-url",n.INVALID_ARGUMENT="invalid-argument",n.INVALID_ARGUMENT_COUNT="invalid-argument-count",n.APP_DELETED="app-deleted",n.INVALID_ROOT_OPERATION="invalid-root-operation",n.INVALID_FORMAT="invalid-format",n.INTERNAL_ERROR="internal-error",n.UNSUPPORTED_ENVIRONMENT="unsupported-environment"})(yt||(yt={}));function ti(n){return"storage/"+n}function no(){const n="An unknown error occurred, please check the error payload for server response.";return new vt(yt.UNKNOWN,n)}function Rf(n){return new vt(yt.OBJECT_NOT_FOUND,"Object '"+n+"' does not exist.")}function Pf(n){return new vt(yt.QUOTA_EXCEEDED,"Quota for bucket '"+n+"' exceeded, please view quota on https://firebase.google.com/pricing/.")}function Cf(){const n="User is not authenticated, please authenticate using Firebase Authentication and try again.";return new vt(yt.UNAUTHENTICATED,n)}function Vf(){return new vt(yt.UNAUTHORIZED_APP,"This app does not have permission to access Firebase Storage on this project.")}function Sf(n){return new vt(yt.UNAUTHORIZED,"User does not have permission to access '"+n+"'.")}function bf(){return new vt(yt.RETRY_LIMIT_EXCEEDED,"Max retry time for operation exceeded, please try again.")}function kf(){return new vt(yt.CANCELED,"User canceled the upload/download.")}function Df(n){return new vt(yt.INVALID_URL,"Invalid URL '"+n+"'.")}function Nf(n){return new vt(yt.INVALID_DEFAULT_BUCKET,"Invalid default bucket '"+n+"'.")}function xf(){return new vt(yt.NO_DEFAULT_BUCKET,"No default bucket found. Did you set the '"+Au+"' property when initializing the app?")}function Of(){return new vt(yt.CANNOT_SLICE_BLOB,"Cannot slice blob for upload. Please retry the upload.")}function Mf(){return new vt(yt.NO_DOWNLOAD_URL,"The given file does not have any download URLs.")}function Lf(n){return new vt(yt.UNSUPPORTED_ENVIRONMENT,`${n} is missing. Make sure to install the required polyfills. See https://firebase.google.com/docs/web/environments-js-sdk#polyfills for more information.`)}function yi(n){return new vt(yt.INVALID_ARGUMENT,n)}function Iu(){return new vt(yt.APP_DELETED,"The Firebase app was deleted.")}function Ff(n){return new vt(yt.INVALID_ROOT_OPERATION,"The operation '"+n+"' cannot be performed on a root reference, create a non-root reference using child, such as .child('file.png').")}function ss(n,t){return new vt(yt.INVALID_FORMAT,"String does not match format '"+n+"': "+t)}function Wn(n){throw new vt(yt.INTERNAL_ERROR,"Internal error: "+n)}/**
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
 */class Wt{constructor(t,e){this.bucket=t,this.path_=e}get path(){return this.path_}get isRoot(){return this.path.length===0}fullServerUrl(){const t=encodeURIComponent;return"/b/"+t(this.bucket)+"/o/"+t(this.path)}bucketOnlyServerUrl(){return"/b/"+encodeURIComponent(this.bucket)+"/o"}static makeFromBucketSpec(t,e){let s;try{s=Wt.makeFromUrl(t,e)}catch{return new Wt(t,"")}if(s.path==="")return s;throw Nf(t)}static makeFromUrl(t,e){let s=null;const i="([A-Za-z0-9.\\-_]+)";function o(Y){Y.path.charAt(Y.path.length-1)==="/"&&(Y.path_=Y.path_.slice(0,-1))}const a="(/(.*))?$",c=new RegExp("^gs://"+i+a,"i"),h={bucket:1,path:3};function f(Y){Y.path_=decodeURIComponent(Y.path)}const p="v[A-Za-z0-9_]+",E=e.replace(/[.]/g,"\\."),R="(/([^?#]*).*)?$",V=new RegExp(`^https?://${E}/${p}/b/${i}/o${R}`,"i"),N={bucket:1,path:3},M=e===wu?"(?:storage.googleapis.com|storage.cloud.google.com)":e,D="([^?#]*)",G=new RegExp(`^https?://${M}/${i}/${D}`,"i"),H=[{regex:c,indices:h,postModify:o},{regex:V,indices:N,postModify:f},{regex:G,indices:{bucket:1,path:2},postModify:f}];for(let Y=0;Y<H.length;Y++){const Vt=H[Y],ht=Vt.regex.exec(t);if(ht){const v=ht[Vt.indices.bucket];let m=ht[Vt.indices.path];m||(m=""),s=new Wt(v,m),Vt.postModify(s);break}}if(s==null)throw Df(t);return s}}class Uf{constructor(t){this.promise_=Promise.reject(t)}getPromise(){return this.promise_}cancel(t=!1){}}/**
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
 */function Bf(n,t,e){let s=1,i=null,o=null,a=!1,c=0;function h(){return c===2}let f=!1;function p(...D){f||(f=!0,t.apply(null,D))}function E(D){i=setTimeout(()=>{i=null,n(V,h())},D)}function R(){o&&clearTimeout(o)}function V(D,...G){if(f){R();return}if(D){R(),p.call(null,D,...G);return}if(h()||a){R(),p.call(null,D,...G);return}s<64&&(s*=2);let H;c===1?(c=2,H=0):H=(s+Math.random())*1e3,E(H)}let N=!1;function M(D){N||(N=!0,R(),!f&&(i!==null?(D||(c=2),clearTimeout(i),E(0)):D||(c=1)))}return E(0),o=setTimeout(()=>{a=!0,M(!0)},e),M}function qf(n){n(!1)}/**
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
 */function jf(n){return n!==void 0}function $f(n){return typeof n=="object"&&!Array.isArray(n)}function so(n){return typeof n=="string"||n instanceof String}function Ba(n){return ro()&&n instanceof Blob}function ro(){return typeof Blob<"u"}function qa(n,t,e,s){if(s<t)throw yi(`Invalid value for '${n}'. Expected ${t} or greater.`);if(s>e)throw yi(`Invalid value for '${n}'. Expected ${e} or less.`)}/**
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
 */function io(n,t,e){let s=t;return e==null&&(s=`https://${t}`),`${e}://${s}/v0${n}`}function Ru(n){const t=encodeURIComponent;let e="?";for(const s in n)if(n.hasOwnProperty(s)){const i=t(s)+"="+t(n[s]);e=e+i+"&"}return e=e.slice(0,-1),e}var Je;(function(n){n[n.NO_ERROR=0]="NO_ERROR",n[n.NETWORK_ERROR=1]="NETWORK_ERROR",n[n.ABORT=2]="ABORT"})(Je||(Je={}));/**
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
 */function zf(n,t){const e=n>=500&&n<600,i=[408,429].indexOf(n)!==-1,o=t.indexOf(n)!==-1;return e||i||o}/**
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
 */class Kf{constructor(t,e,s,i,o,a,c,h,f,p,E,R=!0){this.url_=t,this.method_=e,this.headers_=s,this.body_=i,this.successCodes_=o,this.additionalRetryCodes_=a,this.callback_=c,this.errorCallback_=h,this.timeout_=f,this.progressCallback_=p,this.connectionFactory_=E,this.retry=R,this.pendingConnection_=null,this.backoffId_=null,this.canceled_=!1,this.appDelete_=!1,this.promise_=new Promise((V,N)=>{this.resolve_=V,this.reject_=N,this.start_()})}start_(){const t=(s,i)=>{if(i){s(!1,new Js(!1,null,!0));return}const o=this.connectionFactory_();this.pendingConnection_=o;const a=c=>{const h=c.loaded,f=c.lengthComputable?c.total:-1;this.progressCallback_!==null&&this.progressCallback_(h,f)};this.progressCallback_!==null&&o.addUploadProgressListener(a),o.send(this.url_,this.method_,this.body_,this.headers_).then(()=>{this.progressCallback_!==null&&o.removeUploadProgressListener(a),this.pendingConnection_=null;const c=o.getErrorCode()===Je.NO_ERROR,h=o.getStatus();if(!c||zf(h,this.additionalRetryCodes_)&&this.retry){const p=o.getErrorCode()===Je.ABORT;s(!1,new Js(!1,null,p));return}const f=this.successCodes_.indexOf(h)!==-1;s(!0,new Js(f,o))})},e=(s,i)=>{const o=this.resolve_,a=this.reject_,c=i.connection;if(i.wasSuccessCode)try{const h=this.callback_(c,c.getResponse());jf(h)?o(h):o()}catch(h){a(h)}else if(c!==null){const h=no();h.serverResponse=c.getErrorText(),this.errorCallback_?a(this.errorCallback_(c,h)):a(h)}else if(i.canceled){const h=this.appDelete_?Iu():kf();a(h)}else{const h=bf();a(h)}};this.canceled_?e(!1,new Js(!1,null,!0)):this.backoffId_=Bf(t,e,this.timeout_)}getPromise(){return this.promise_}cancel(t){this.canceled_=!0,this.appDelete_=t||!1,this.backoffId_!==null&&qf(this.backoffId_),this.pendingConnection_!==null&&this.pendingConnection_.abort()}}class Js{constructor(t,e,s){this.wasSuccessCode=t,this.connection=e,this.canceled=!!s}}function Gf(n,t){t!==null&&t.length>0&&(n.Authorization="Firebase "+t)}function Qf(n,t){n["X-Firebase-Storage-Version"]="webjs/"+(t??"AppManager")}function Wf(n,t){t&&(n["X-Firebase-GMPID"]=t)}function Hf(n,t){t!==null&&(n["X-Firebase-AppCheck"]=t)}function Xf(n,t,e,s,i,o,a=!0){const c=Ru(n.urlParams),h=n.url+c,f=Object.assign({},n.headers);return Wf(f,t),Gf(f,e),Qf(f,o),Hf(f,s),new Kf(h,n.method,f,n.body,n.successCodes,n.additionalRetryCodes,n.handler,n.errorHandler,n.timeout,n.progressCallback,i,a)}/**
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
 */function Yf(){return typeof BlobBuilder<"u"?BlobBuilder:typeof WebKitBlobBuilder<"u"?WebKitBlobBuilder:void 0}function Jf(...n){const t=Yf();if(t!==void 0){const e=new t;for(let s=0;s<n.length;s++)e.append(n[s]);return e.getBlob()}else{if(ro())return new Blob(n);throw new vt(yt.UNSUPPORTED_ENVIRONMENT,"This browser doesn't seem to support creating Blobs")}}function Zf(n,t,e){return n.webkitSlice?n.webkitSlice(t,e):n.mozSlice?n.mozSlice(t,e):n.slice?n.slice(t,e):null}/**
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
 */function tp(n){if(typeof atob>"u")throw Lf("base-64");return atob(n)}/**
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
 */const le={RAW:"raw",BASE64:"base64",BASE64URL:"base64url",DATA_URL:"data_url"};class ei{constructor(t,e){this.data=t,this.contentType=e||null}}function ep(n,t){switch(n){case le.RAW:return new ei(Pu(t));case le.BASE64:case le.BASE64URL:return new ei(Cu(n,t));case le.DATA_URL:return new ei(sp(t),rp(t))}throw no()}function Pu(n){const t=[];for(let e=0;e<n.length;e++){let s=n.charCodeAt(e);if(s<=127)t.push(s);else if(s<=2047)t.push(192|s>>6,128|s&63);else if((s&64512)===55296)if(!(e<n.length-1&&(n.charCodeAt(e+1)&64512)===56320))t.push(239,191,189);else{const o=s,a=n.charCodeAt(++e);s=65536|(o&1023)<<10|a&1023,t.push(240|s>>18,128|s>>12&63,128|s>>6&63,128|s&63)}else(s&64512)===56320?t.push(239,191,189):t.push(224|s>>12,128|s>>6&63,128|s&63)}return new Uint8Array(t)}function np(n){let t;try{t=decodeURIComponent(n)}catch{throw ss(le.DATA_URL,"Malformed data URL.")}return Pu(t)}function Cu(n,t){switch(n){case le.BASE64:{const i=t.indexOf("-")!==-1,o=t.indexOf("_")!==-1;if(i||o)throw ss(n,"Invalid character '"+(i?"-":"_")+"' found: is it base64url encoded?");break}case le.BASE64URL:{const i=t.indexOf("+")!==-1,o=t.indexOf("/")!==-1;if(i||o)throw ss(n,"Invalid character '"+(i?"+":"/")+"' found: is it base64 encoded?");t=t.replace(/-/g,"+").replace(/_/g,"/");break}}let e;try{e=tp(t)}catch(i){throw i.message.includes("polyfill")?i:ss(n,"Invalid character found")}const s=new Uint8Array(e.length);for(let i=0;i<e.length;i++)s[i]=e.charCodeAt(i);return s}class Vu{constructor(t){this.base64=!1,this.contentType=null;const e=t.match(/^data:([^,]+)?,/);if(e===null)throw ss(le.DATA_URL,"Must be formatted 'data:[<mediatype>][;base64],<data>");const s=e[1]||null;s!=null&&(this.base64=ip(s,";base64"),this.contentType=this.base64?s.substring(0,s.length-7):s),this.rest=t.substring(t.indexOf(",")+1)}}function sp(n){const t=new Vu(n);return t.base64?Cu(le.BASE64,t.rest):np(t.rest)}function rp(n){return new Vu(n).contentType}function ip(n,t){return n.length>=t.length?n.substring(n.length-t.length)===t:!1}/**
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
 */class be{constructor(t,e){let s=0,i="";Ba(t)?(this.data_=t,s=t.size,i=t.type):t instanceof ArrayBuffer?(e?this.data_=new Uint8Array(t):(this.data_=new Uint8Array(t.byteLength),this.data_.set(new Uint8Array(t))),s=this.data_.length):t instanceof Uint8Array&&(e?this.data_=t:(this.data_=new Uint8Array(t.length),this.data_.set(t)),s=t.length),this.size_=s,this.type_=i}size(){return this.size_}type(){return this.type_}slice(t,e){if(Ba(this.data_)){const s=this.data_,i=Zf(s,t,e);return i===null?null:new be(i)}else{const s=new Uint8Array(this.data_.buffer,t,e-t);return new be(s,!0)}}static getBlob(...t){if(ro()){const e=t.map(s=>s instanceof be?s.data_:s);return new be(Jf.apply(null,e))}else{const e=t.map(a=>so(a)?ep(le.RAW,a).data:a.data_);let s=0;e.forEach(a=>{s+=a.byteLength});const i=new Uint8Array(s);let o=0;return e.forEach(a=>{for(let c=0;c<a.length;c++)i[o++]=a[c]}),new be(i,!0)}}uploadData(){return this.data_}}/**
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
 */function Su(n){let t;try{t=JSON.parse(n)}catch{return null}return $f(t)?t:null}/**
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
 */function op(n){if(n.length===0)return null;const t=n.lastIndexOf("/");return t===-1?"":n.slice(0,t)}function ap(n,t){const e=t.split("/").filter(s=>s.length>0).join("/");return n.length===0?e:n+"/"+e}function bu(n){const t=n.lastIndexOf("/",n.length-2);return t===-1?n:n.slice(t+1)}/**
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
 */function lp(n,t){return t}class qt{constructor(t,e,s,i){this.server=t,this.local=e||t,this.writable=!!s,this.xform=i||lp}}let Zs=null;function up(n){return!so(n)||n.length<2?n:bu(n)}function ku(){if(Zs)return Zs;const n=[];n.push(new qt("bucket")),n.push(new qt("generation")),n.push(new qt("metageneration")),n.push(new qt("name","fullPath",!0));function t(o,a){return up(a)}const e=new qt("name");e.xform=t,n.push(e);function s(o,a){return a!==void 0?Number(a):a}const i=new qt("size");return i.xform=s,n.push(i),n.push(new qt("timeCreated")),n.push(new qt("updated")),n.push(new qt("md5Hash",null,!0)),n.push(new qt("cacheControl",null,!0)),n.push(new qt("contentDisposition",null,!0)),n.push(new qt("contentEncoding",null,!0)),n.push(new qt("contentLanguage",null,!0)),n.push(new qt("contentType",null,!0)),n.push(new qt("metadata","customMetadata",!0)),Zs=n,Zs}function cp(n,t){function e(){const s=n.bucket,i=n.fullPath,o=new Wt(s,i);return t._makeStorageReference(o)}Object.defineProperty(n,"ref",{get:e})}function hp(n,t,e){const s={};s.type="file";const i=e.length;for(let o=0;o<i;o++){const a=e[o];s[a.local]=a.xform(s,t[a.server])}return cp(s,n),s}function Du(n,t,e){const s=Su(t);return s===null?null:hp(n,s,e)}function dp(n,t,e,s){const i=Su(t);if(i===null||!so(i.downloadTokens))return null;const o=i.downloadTokens;if(o.length===0)return null;const a=encodeURIComponent;return o.split(",").map(f=>{const p=n.bucket,E=n.fullPath,R="/b/"+a(p)+"/o/"+a(E),V=io(R,e,s),N=Ru({alt:"media",token:f});return V+N})[0]}function fp(n,t){const e={},s=t.length;for(let i=0;i<s;i++){const o=t[i];o.writable&&(e[o.server]=n[o.local])}return JSON.stringify(e)}class Nu{constructor(t,e,s,i){this.url=t,this.method=e,this.handler=s,this.timeout=i,this.urlParams={},this.headers={},this.body=null,this.errorHandler=null,this.progressCallback=null,this.successCodes=[200],this.additionalRetryCodes=[]}}/**
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
 */function xu(n){if(!n)throw no()}function pp(n,t){function e(s,i){const o=Du(n,i,t);return xu(o!==null),o}return e}function mp(n,t){function e(s,i){const o=Du(n,i,t);return xu(o!==null),dp(o,i,n.host,n._protocol)}return e}function Ou(n){function t(e,s){let i;return e.getStatus()===401?e.getErrorText().includes("Firebase App Check token is invalid")?i=Vf():i=Cf():e.getStatus()===402?i=Pf(n.bucket):e.getStatus()===403?i=Sf(n.path):i=s,i.status=e.getStatus(),i.serverResponse=s.serverResponse,i}return t}function gp(n){const t=Ou(n);function e(s,i){let o=t(s,i);return s.getStatus()===404&&(o=Rf(n.path)),o.serverResponse=i.serverResponse,o}return e}function _p(n,t,e){const s=t.fullServerUrl(),i=io(s,n.host,n._protocol),o="GET",a=n.maxOperationRetryTime,c=new Nu(i,o,mp(n,e),a);return c.errorHandler=gp(t),c}function yp(n,t){return n&&n.contentType||t&&t.type()||"application/octet-stream"}function vp(n,t,e){const s=Object.assign({},e);return s.fullPath=n.path,s.size=t.size(),s.contentType||(s.contentType=yp(null,t)),s}function Tp(n,t,e,s,i){const o=t.bucketOnlyServerUrl(),a={"X-Goog-Upload-Protocol":"multipart"};function c(){let H="";for(let Y=0;Y<2;Y++)H=H+Math.random().toString().slice(2);return H}const h=c();a["Content-Type"]="multipart/related; boundary="+h;const f=vp(t,s,i),p=fp(f,e),E="--"+h+`\r
Content-Type: application/json; charset=utf-8\r
\r
`+p+`\r
--`+h+`\r
Content-Type: `+f.contentType+`\r
\r
`,R=`\r
--`+h+"--",V=be.getBlob(E,s,R);if(V===null)throw Of();const N={name:f.fullPath},M=io(o,n.host,n._protocol),D="POST",G=n.maxUploadRetryTime,X=new Nu(M,D,pp(n,e),G);return X.urlParams=N,X.headers=a,X.body=V.uploadData(),X.errorHandler=Ou(t),X}class Ep{constructor(){this.sent_=!1,this.xhr_=new XMLHttpRequest,this.initXhr(),this.errorCode_=Je.NO_ERROR,this.sendPromise_=new Promise(t=>{this.xhr_.addEventListener("abort",()=>{this.errorCode_=Je.ABORT,t()}),this.xhr_.addEventListener("error",()=>{this.errorCode_=Je.NETWORK_ERROR,t()}),this.xhr_.addEventListener("load",()=>{t()})})}send(t,e,s,i){if(this.sent_)throw Wn("cannot .send() more than once");if(this.sent_=!0,this.xhr_.open(e,t,!0),i!==void 0)for(const o in i)i.hasOwnProperty(o)&&this.xhr_.setRequestHeader(o,i[o].toString());return s!==void 0?this.xhr_.send(s):this.xhr_.send(),this.sendPromise_}getErrorCode(){if(!this.sent_)throw Wn("cannot .getErrorCode() before sending");return this.errorCode_}getStatus(){if(!this.sent_)throw Wn("cannot .getStatus() before sending");try{return this.xhr_.status}catch{return-1}}getResponse(){if(!this.sent_)throw Wn("cannot .getResponse() before sending");return this.xhr_.response}getErrorText(){if(!this.sent_)throw Wn("cannot .getErrorText() before sending");return this.xhr_.statusText}abort(){this.xhr_.abort()}getResponseHeader(t){return this.xhr_.getResponseHeader(t)}addUploadProgressListener(t){this.xhr_.upload!=null&&this.xhr_.upload.addEventListener("progress",t)}removeUploadProgressListener(t){this.xhr_.upload!=null&&this.xhr_.upload.removeEventListener("progress",t)}}class wp extends Ep{initXhr(){this.xhr_.responseType="text"}}function Mu(){return new wp}/**
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
 */class nn{constructor(t,e){this._service=t,e instanceof Wt?this._location=e:this._location=Wt.makeFromUrl(e,t.host)}toString(){return"gs://"+this._location.bucket+"/"+this._location.path}_newRef(t,e){return new nn(t,e)}get root(){const t=new Wt(this._location.bucket,"");return this._newRef(this._service,t)}get bucket(){return this._location.bucket}get fullPath(){return this._location.path}get name(){return bu(this._location.path)}get storage(){return this._service}get parent(){const t=op(this._location.path);if(t===null)return null;const e=new Wt(this._location.bucket,t);return new nn(this._service,e)}_throwIfRoot(t){if(this._location.path==="")throw Ff(t)}}function Ap(n,t,e){n._throwIfRoot("uploadBytes");const s=Tp(n.storage,n._location,ku(),new be(t,!0),e);return n.storage.makeRequestWithTokens(s,Mu).then(i=>({metadata:i,ref:n}))}function Ip(n){n._throwIfRoot("getDownloadURL");const t=_p(n.storage,n._location,ku());return n.storage.makeRequestWithTokens(t,Mu).then(e=>{if(e===null)throw Mf();return e})}function Rp(n,t){const e=ap(n._location.path,t),s=new Wt(n._location.bucket,e);return new nn(n.storage,s)}/**
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
 */function Pp(n){return/^[A-Za-z]+:\/\//.test(n)}function Cp(n,t){return new nn(n,t)}function Lu(n,t){if(n instanceof oo){const e=n;if(e._bucket==null)throw xf();const s=new nn(e,e._bucket);return t!=null?Lu(s,t):s}else return t!==void 0?Rp(n,t):n}function Vp(n,t){if(t&&Pp(t)){if(n instanceof oo)return Cp(n,t);throw yi("To use ref(service, url), the first argument must be a Storage instance.")}else return Lu(n,t)}function ja(n,t){const e=t==null?void 0:t[Au];return e==null?null:Wt.makeFromBucketSpec(e,n)}function Sp(n,t,e,s={}){n.host=`${t}:${e}`,n._protocol="http";const{mockUserToken:i}=s;i&&(n._overrideAuthToken=typeof i=="string"?i:Wa(i,n.app.options.projectId))}class oo{constructor(t,e,s,i,o){this.app=t,this._authProvider=e,this._appCheckProvider=s,this._url=i,this._firebaseVersion=o,this._bucket=null,this._host=wu,this._protocol="https",this._appId=null,this._deleted=!1,this._maxOperationRetryTime=Af,this._maxUploadRetryTime=If,this._requests=new Set,i!=null?this._bucket=Wt.makeFromBucketSpec(i,this._host):this._bucket=ja(this._host,this.app.options)}get host(){return this._host}set host(t){this._host=t,this._url!=null?this._bucket=Wt.makeFromBucketSpec(this._url,t):this._bucket=ja(t,this.app.options)}get maxUploadRetryTime(){return this._maxUploadRetryTime}set maxUploadRetryTime(t){qa("time",0,Number.POSITIVE_INFINITY,t),this._maxUploadRetryTime=t}get maxOperationRetryTime(){return this._maxOperationRetryTime}set maxOperationRetryTime(t){qa("time",0,Number.POSITIVE_INFINITY,t),this._maxOperationRetryTime=t}async _getAuthToken(){if(this._overrideAuthToken)return this._overrideAuthToken;const t=this._authProvider.getImmediate({optional:!0});if(t){const e=await t.getToken();if(e!==null)return e.accessToken}return null}async _getAppCheckToken(){const t=this._appCheckProvider.getImmediate({optional:!0});return t?(await t.getToken()).token:null}_delete(){return this._deleted||(this._deleted=!0,this._requests.forEach(t=>t.cancel()),this._requests.clear()),Promise.resolve()}_makeStorageReference(t){return new nn(this,t)}_makeRequest(t,e,s,i,o=!0){if(this._deleted)return new Uf(Iu());{const a=Xf(t,this._appId,s,i,e,this._firebaseVersion,o);return this._requests.add(a),a.getPromise().then(()=>this._requests.delete(a),()=>this._requests.delete(a)),a}}async makeRequestWithTokens(t,e){const[s,i]=await Promise.all([this._getAuthToken(),this._getAppCheckToken()]);return this._makeRequest(t,e,s,i).getPromise()}}const $a="@firebase/storage",za="0.13.2";/**
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
 */const Fu="storage";function bp(n,t,e){return n=$t(n),Ap(n,t,e)}function kp(n){return n=$t(n),Ip(n)}function Dp(n,t){return n=$t(n),Vp(n,t)}function Np(n=Ka(),t){n=$t(n);const s=Ga(n,Fu).getImmediate({identifier:t}),i=Qa("storage");return i&&xp(s,...i),s}function xp(n,t,e,s={}){Sp(n,t,e,s)}function Op(n,{instanceIdentifier:t}){const e=n.getProvider("app").getImmediate(),s=n.getProvider("auth-internal"),i=n.getProvider("app-check-internal");return new oo(e,s,i,t,Xa)}function Mp(){Ya(new Ja(Fu,Op,"PUBLIC").setMultipleInstances(!0)),ir($a,za,""),ir($a,za,"esm2017")}Mp();const Lp={key:0,class:"chat-app"},Fp={key:0,class:"admin-toast glass-heavy"},Up={class:"admin-toast-text"},Bp={class:"sidebar-header"},qp={class:"user-profile"},jp={class:"user-avatar-wrapper"},$p={class:"user-info"},zp={class:"user-name"},Kp={key:0,class:"admin-badge-gold",title:"Super Admin Actif"},Gp={class:"user-email"},Qp={class:"sidebar-search"},Wp={class:"input-wrapper"},Hp={class:"rooms-section"},Xp=["onClick"],Yp={class:"room-icon"},Jp={class:"room-info"},Zp={class:"room-name"},tm={class:"room-desc"},em={key:0,class:"room-unread"},nm={class:"chat-main"},sm={class:"chat-header glass"},rm={class:"chat-header-info"},im={class:"ch-room-icon"},om={class:"ch-room-name"},am={class:"ch-room-desc"},lm={class:"chat-header-actions"},um={class:"online-pill"},cm={key:0,class:"admin-pill-badge",title:"Mode Admin Actif"},hm={key:0,class:"msg-search-bar glass"},dm={class:"input-wrapper"},fm={class:"welcome-banner"},pm={class:"wb-icon"},mm={class:"wb-title"},gm={class:"wb-desc"},_m={class:"wb-divider"},ym={class:"wb-divider-text"},vm={key:0,class:"date-separator"},Tm={class:"ds-text"},Em={class:"msg-content"},wm={key:0,class:"msg-header"},Am={class:"msg-author"},Im={key:0,class:"admin-badge-gold"},Rm={class:"msg-time"},Pm=["onMouseenter"],Cm=["src","onClick"],Vm=["href","download"],Sm={class:"file-info"},bm={class:"file-name"},km={class:"file-size"},Dm=["innerHTML"],Nm={key:3,class:"msg-time-mine"},xm={key:0,class:"admin-badge-gold",style:{"margin-right":"4px"}},Om={key:0,class:"msg-actions"},Mm=["onClick","title"],Lm=["onClick","title"],Fm={key:4,class:"msg-reactions"},Um=["onClick"],Bm={key:0},qm={class:"input-area glass"},jm={class:"input-toolbar"},$m={key:0,class:"emoji-picker glass-heavy"},zm={class:"ep-tabs"},Km=["onClick"],Gm={class:"ep-grid"},Qm=["onClick"],Wm={key:0,class:"file-preview-bar"},Hm={class:"file-preview-card"},Xm=["src"],Ym={key:1,class:"file-preview-icon"},Jm={class:"file-preview-details"},Zm={class:"file-preview-name"},tg={class:"file-preview-size"},eg={class:"main-input-row"},ng={class:"input-box-wrap"},sg=["placeholder","onKeydown"],rg=["disabled"],ig={key:0,class:"spinner",style:{width:"16px",height:"16px","border-width":"2px"}},og={key:1},ag={key:0,class:"members-panel glass"},lg={class:"mp-header"},ug={class:"mp-list"},cg={class:"mp-name"},hg=["src"],dg={class:"settings-inner"},fg={class:"settings-section"},pg={class:"color-picker"},mg=["onClick"],gg={class:"settings-section"},_g={class:"toggle-switch"},yg={key:1,class:"loading-screen"},vg={__name:"chat",setup(n){lc({title:"Chat"});const{$firebase:t}=uc(),e=lt(null),s=lt([]),i=lt(""),o=lt("general"),a=lt(!1),c=lt(!1),h=lt(!1),f=lt(!1),p=lt(!1),E=lt(""),R=lt(""),V=lt(null),N=lt(!1),M=lt(null),D=lt(!1),G=lt(0),X=lt(!0),H=lt("Smileys"),Y=lt(null),Vt=lt(null),ht=lt(null),v=lt(null),m=lt("#7c3aed"),g=lt(!1),y=lt("");let T=null;function A(S){y.value=S,clearTimeout(T),T=setTimeout(()=>{y.value=""},4500)}function _(){try{const S=new(window.AudioContext||window.webkitAudioContext);[523.25,659.25,783.99,1046.5].forEach((U,q)=>{const it=S.createOscillator(),j=S.createGain();it.type="triangle",it.frequency.setValueAtTime(U,S.currentTime+q*.09),j.gain.setValueAtTime(.15,S.currentTime+q*.09),j.gain.exponentialRampToValueAtTime(.001,S.currentTime+q*.09+.35),it.connect(j),j.connect(S.destination),it.start(S.currentTime+q*.09),it.stop(S.currentTime+q*.09+.35)})}catch{}}const Jt=["#7c3aed","#ec4899","#f97316","#3b82f6","#14b8a6","#8b5cf6","#06b6d4","#10b981"],se=[{id:"general",name:"général",icon:"📣",desc:"Discussion générale & vie du lycée",unread:0},{id:"entraide",name:"entraide",icon:"📚",desc:"Devoirs, cours & révisions",unread:0},{id:"detente",name:"détente",icon:"🎮",desc:"Pause café & bavardages",unread:0}],kr=We(()=>R.value?se.filter(S=>S.name.toLowerCase().includes(R.value.toLowerCase())):se),zt=We(()=>se.find(S=>S.id===o.value)||se[0]),Ee=[{name:"Smileys",icon:"😄",emojis:["😀","😂","🥹","😊","😍","🤩","😎","🥳","😏","🤔","😅","🫡","😴","🤯","🥸","🤗","😇","🫶","🙏","👀","💪","✌️","👍","❤️","🔥","⭐","💯","🎉","✨","💥"]},{name:"Lycée",icon:"📚",emojis:["📚","📖","✏️","📝","🖊️","📐","📏","🔬","🔭","💡","🧪","🧬","🎓","🏫","📋","📊","📈","🗒️","💻","🖥️","⌨️","🖱️","📱","⏰","📅","🗂️"]},{name:"Fun",icon:"🎮",emojis:["🎮","🎲","🎯","🎸","🎵","🎨","🏆","🥇","⚽","🏀","🎾","🎳","🎭","🎬","🎪","🎢","🎡","🎠","🚀","🌈","🦄","🐸","🦊","🐉","🌟","🌙","☀️","🌊","🏖️","🌴"]},{name:"Bouffe",icon:"🍕",emojis:["🍕","🍔","🌮","🍜","🍣","🍰","🎂","🍩","🧁","🍪","🍫","🧃","☕","🧋","🍵","🍺","🥤","🍿","🥗","🍎","🍓","🍇","🥑","🌽","🥪","🍟","🌯","🥙","🫔"]}],bn=["👍","❤️","😂","🔥","😮","👏"],vs=We(()=>{var S;return((S=Ee.find(I=>I.name===H.value))==null?void 0:S.emojis)||[]}),re=lt(null),xt=lt(null);function It(){var S;(S=v.value)==null||S.click()}function Dr(S){var U;const I=(U=S.target.files)==null?void 0:U[0];if(I){if(I.size>20*1024*1024){alert("Fichier trop volumineux (20 Mo maximum)."),v.value&&(v.value.value="");return}re.value=I,I.type.startsWith("image/")?xt.value=URL.createObjectURL(I):xt.value=null,v.value&&(v.value.value="")}}function we(){xt.value&&URL.revokeObjectURL(xt.value),re.value=null,xt.value=null}function Ts(S){return S?S<1024?S+" o":S<1024*1024?(S/1024).toFixed(1)+" Ko":(S/(1024*1024)).toFixed(1)+" Mo":""}const ie=lt([]),kn=We(()=>ie.value.length||1);function Nr(S){return(S.name||S.email||"?").split(" ").map(U=>U[0]).join("").toUpperCase().slice(0,2)}const Be=We(()=>{var I,U;return(((I=e.value)==null?void 0:I.displayName)||((U=e.value)==null?void 0:U.email)||"?").split(" ").map(q=>q[0]).join("").toUpperCase().slice(0,2)});let oe=null,qe=null,je=null;function Dn(S){if(!S||!t)return;const I=He(t),U=_n(I,"presence",S.uid),q={uid:S.uid,name:S.displayName||S.email.split("@")[0]||"Utilisateur",email:S.email,color:m.value,lastSeen:Date.now()};Fa(U,q).catch(()=>{}),je=pc(()=>{Fa(U,{...q,color:m.value,lastSeen:Date.now()}).catch(()=>{})},45e3);try{qe=Ua(Zr(I,"presence"),it=>{const j=Date.now(),et=[];it.forEach(ot=>{const dt=ot.data();dt&&(!dt.lastSeen||j-dt.lastSeen<18e4)&&et.push({...dt,uid:ot.id})}),et.some(ot=>ot.uid===S.uid)||et.unshift(q),ie.value=et},()=>{ie.value=[q]})}catch{ie.value=[q]}typeof window<"u"&&window.addEventListener("beforeunload",()=>{Ys(U).catch(()=>{})})}const Nn=We(()=>{const S=E.value?s.value.filter(j=>(j.text||"").toLowerCase().includes(E.value.toLowerCase())||(j.fileName||"").toLowerCase().includes(E.value.toLowerCase())):s.value,I=[];let U=null,q=null,it=null;return S.forEach(j=>{var Ht,de,Ae,Ss,bs,fe,un,ks;const et=((de=(Ht=j.createdAt)==null?void 0:Ht.toDate)==null?void 0:de.call(Ht))||((Ae=j.createdAt)!=null&&Ae.seconds?new Date(j.createdAt.seconds*1e3):new Date),ot=ze(et),dt=Vs(et),Zt=j.uid===((Ss=e.value)==null?void 0:Ss.uid),x=j.displayName||j.author||((bs=j.email)==null?void 0:bs.split("@")[0])||"Anonyme",Kt=x.split(" ").map(cn=>cn[0]).join("").toUpperCase().slice(0,2),nt=On(j.uid||x),te=ot!==q;te&&(q=ot),j.uid===U&&!te&&it&&et-(((ks=(un=(fe=it.messages.at(-1))==null?void 0:fe.createdAt)==null?void 0:un.toDate)==null?void 0:ks.call(un))||new Date)<3e5&&it?it.messages.push(j):(it={author:x,initials:Kt,color:nt,isOwn:Zt,isAdmin:!!j.isAdmin,time:dt,date:ot,showDate:te,messages:[j]},I.push(it)),U=j.uid}),I}),Es=We(()=>new Date().toLocaleDateString("fr-FR",{weekday:"long",year:"numeric",month:"long",day:"numeric"}));cc(async()=>{localStorage.getItem("chat_admin_goofy")==="true"&&(g.value=!0);const I=Xo(t);mc(I,U=>{if(U){e.value=U;const q=localStorage.getItem("profileColor");q&&(m.value=q),Dn(U),ws(o.value)}else Wo("/login")})}),hc(m,S=>localStorage.setItem("profileColor",S)),dc(()=>{if(oe&&oe(),qe&&qe(),je&&clearInterval(je),e.value&&t){const S=He(t);Ys(_n(S,"presence",e.value.uid)).catch(()=>{})}});function ws(S){oe&&oe(),s.value=[];const I=He(t),U=ff(Zr(I,"messages"),pf("createdAt","desc"),mf(150));oe=Ua(U,q=>{const it=s.value.length,j=q.docs.map(et=>({id:et.id,...et.data()}));j.sort((et,ot)=>{var x,Kt,nt,te;const dt=(x=et.createdAt)!=null&&x.toMillis?et.createdAt.toMillis():(Kt=et.createdAt)!=null&&Kt.seconds?et.createdAt.seconds*1e3:0,Zt=(nt=ot.createdAt)!=null&&nt.toMillis?ot.createdAt.toMillis():(te=ot.createdAt)!=null&&te.seconds?ot.createdAt.seconds*1e3:0;return dt-Zt}),s.value=j.filter(et=>(et.room||"general")===o.value),s.value.length>it&&it>0&&(G.value++,X.value&&Mn()),Ho($e)},q=>{console.error("Erreur écoute messages Firestore:",q)})}async function As(){const S=i.value.trim(),I=re.value;if(S.toLowerCase()==="/admingoofyahah"){i.value="",g.value=!g.value,localStorage.setItem("chat_admin_goofy",g.value?"true":"false"),_(),g.value?A("👑 MODE ADMIN ACTIVÉ ! Vous avez les pleins pouvoirs de modération et pouvez supprimer n'importe quel message."):A("🛡️ Mode Admin désactivé.");return}if(g.value&&S.toLowerCase()==="/clear"){i.value="",s.value=[],A("🧹 Messages nettoyés localement.");return}if(!S&&!I||N.value)return;N.value=!0;const U=He(t);let q=null,it=!1;try{if(I){it=I.type.startsWith("image/");try{const et=Np(t),ot=`chat_files/${Date.now()}_${I.name}`,dt=Dp(et,ot);await bp(dt,I),q=await kp(dt)}catch(et){if(console.warn("Firebase Storage échoué, utilisation du fallback local...",et),I.size<800*1024)q=await new Promise(ot=>{const dt=new FileReader;dt.onload=Zt=>ot(Zt.target.result),dt.onerror=()=>ot(null),dt.readAsDataURL(I)});else{alert("Impossible de transférer ce fichier via le stockage Firebase. Limitez à 800 Ko en mode direct."),N.value=!1;return}}}const j={text:S||"",author:e.value.displayName||e.value.email.split("@")[0]||"Anonyme",displayName:e.value.displayName||e.value.email.split("@")[0]||"Anonyme",email:e.value.email,uid:e.value.uid,room:o.value,isAdmin:!!g.value,createdAt:wf(),reactions:{}};q&&(j.fileUrl=q,j.fileName=I.name,j.fileSize=I.size,j.fileType=I.type,it&&(j.imageUrl=q)),await Ef(Zr(U,"messages"),j),i.value="",we(),p.value=!1,Ho(()=>{Pt(),$e()})}catch(j){console.error("Erreur sendMessage:",j),alert("Erreur lors de l'envoi du message : "+(j.message||"Vérifiez la connexion."))}finally{N.value=!1}}async function Is(S){var I;if(g.value&&S.uid!==((I=e.value)==null?void 0:I.uid)){const U=S.author||S.displayName||"cet utilisateur";if(!confirm(`👑 Action Administrateur :
Voulez-vous supprimer le message de "${U}" ?`))return}try{const U=He(t);await Ys(_n(U,"messages",S.id)),s.value=s.value.filter(q=>q.id!==S.id),A("Message supprimé 🗑️")}catch(U){console.error("Erreur suppression message:",U),alert("Erreur lors de la suppression : "+(U.message||"Impossible de supprimer ce message."))}}async function on(S,I){var U;try{const q=He(t),it=_n(q,"messages",S.id),et=((U=(await vf(it)).data())==null?void 0:U.reactions)||{},ot=`${I}`;et[ot]=(et[ot]||0)+1,await Tf(it,{reactions:et})}catch(q){console.error("Erreur réaction:",q)}}function Rs(S,I){return!1}function xr(S){o.value=S.id,S.unread=0,a.value=!1,ws(S.id)}async function xn(){if(e.value&&t){const I=He(t);Ys(_n(I,"presence",e.value.uid)).catch(()=>{})}const S=Xo(t);await gc(S),Wo("/")}function $e(){var S;(S=Vt.value)==null||S.scrollIntoView({behavior:"smooth"}),D.value=!1,G.value=0}function Ps(){if(!Y.value)return;const S=Y.value,I=S.scrollHeight-S.scrollTop-S.clientHeight<100;D.value=!I}function Rt(){Pt()}function Pt(){const S=ht.value;S&&(S.style.height="auto",S.style.height=Math.min(S.scrollHeight,150)+"px")}function an(S){var I;i.value+=S,p.value=!1,(I=ht.value)==null||I.focus()}function ln(S){const I=ht.value;if(!I)return;const U=I.selectionStart,q=I.selectionEnd,it=i.value.slice(U,q);i.value=i.value.slice(0,U)+S+it+S+i.value.slice(q)}function Cs(S){M.value=S}function Or(S,I){if(!S)return"";let U=S.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/\*\*(.*?)\*\*/g,"<strong>$1</strong>").replace(/_(.*?)_/g,"<em>$1</em>").replace(/`(.*?)`/g,'<code class="inline-code">$1</code>').replace(/\n/g,"<br>");if(I){const q=new RegExp(`(${I.replace(/[.*+?^${}()|[\]\\]/g,"\\$&")})`,"gi");U=U.replace(q,'<mark class="search-highlight">$1</mark>')}return U}function ze(S){const I=new Date,U=new Date(I);return U.setDate(I.getDate()-1),S.toDateString()===I.toDateString()?"Aujourd'hui":S.toDateString()===U.toDateString()?"Hier":S.toLocaleDateString("fr-FR",{weekday:"long",day:"numeric",month:"long"})}function Vs(S){return S.toLocaleTimeString("fr-FR",{hour:"2-digit",minute:"2-digit"})}function On(S){if(!S)return"#7c3aed";const I=["#7c3aed","#ec4899","#f97316","#3b82f6","#14b8a6","#8b5cf6","#06b6d4","#10b981","#f59e0b"];let U=0;for(const q of S)U=q.charCodeAt(0)+((U<<5)-U);return I[Math.abs(U)%I.length]}function Mn(){try{const S=new(window.AudioContext||window.webkitAudioContext),I=S.createOscillator(),U=S.createGain();I.connect(U),U.connect(S.destination),I.frequency.setValueAtTime(880,S.currentTime),U.gain.setValueAtTime(.1,S.currentTime),U.gain.exponentialRampToValueAtTime(.001,S.currentTime+.3),I.start(),I.stop(S.currentTime+.3)}catch{}}return(S,I)=>{var q,it,j,et,ot,dt,Zt;const U=rc;return e.value?(K(),z("div",Lp,[ge(Ce,{name:"slide-down"},{default:_e(()=>[y.value?(K(),z("div",Fp,[I[23]||(I[23]=C("span",{class:"admin-toast-icon"},"👑",-1)),C("span",Up,J(y.value),1),C("button",{class:"admin-toast-close",onClick:I[0]||(I[0]=x=>y.value="")},"✕")])):mt("",!0)]),_:1}),C("aside",{class:Ve(["sidebar",{open:a.value}])},[C("div",Bp,[ge(U,{to:"/",class:"sidebar-logo"},{default:_e(()=>[...I[24]||(I[24]=[C("div",{class:"sidebar-logo-icon"},"🎓",-1),C("div",null,[C("div",{class:"sidebar-logo-text"},"Lycée Europe"),C("div",{class:"sidebar-logo-sub"},"Chat ∙ Communauté")],-1)])]),_:1}),C("button",{class:"mobile-close-btn",onClick:I[1]||(I[1]=x=>a.value=!1)},"✕")]),C("div",qp,[C("div",jp,[C("div",{class:"user-avatar",style:Kn(`background: ${m.value}`)},J(Be.value),5),I[25]||(I[25]=C("div",{class:"status-dot"},null,-1))]),C("div",$p,[C("div",zp,[Gn(J(e.value.displayName||"Anonyme")+" ",1),g.value?(K(),z("span",Kp,"👑 ADMIN")):mt("",!0)]),C("div",Gp,J(e.value.email),1)]),C("button",{class:"settings-btn",onClick:I[2]||(I[2]=x=>f.value=!f.value),title:"Paramètres"},"⚙")]),C("div",Qp,[C("div",Wp,[I[26]||(I[26]=C("span",{class:"input-icon"},"🔍",-1)),Ks(C("input",{"onUpdate:modelValue":I[3]||(I[3]=x=>R.value=x),type:"text",class:"input-field",placeholder:"Rechercher un salon..."},null,512),[[Wr,R.value]])])]),C("div",Hp,[I[27]||(I[27]=C("div",{class:"rooms-category"},[C("span",{class:"category-label"},"Salons officiels (3)")],-1)),(K(!0),z(ae,null,ye(kr.value,x=>(K(),z("button",{key:x.id,class:Ve(["room-btn",{active:o.value===x.id}]),onClick:Kt=>xr(x)},[C("span",Yp,J(x.icon),1),C("div",Jp,[C("span",Zp,"# "+J(x.name),1),C("span",tm,J(x.desc),1)]),x.unread?(K(),z("span",em,J(x.unread),1)):mt("",!0)],10,Xp))),128))]),C("div",{class:"sidebar-footer"},[C("button",{class:"logout-btn",onClick:xn},[...I[28]||(I[28]=[C("span",null,"🚪",-1),Gn(" Se déconnecter ",-1)])])])],2),C("main",nm,[C("div",sm,[C("button",{class:"mobile-menu-btn",onClick:I[4]||(I[4]=x=>a.value=!0)},"☰"),C("div",rm,[C("div",im,J(((q=zt.value)==null?void 0:q.icon)||"💬"),1),C("div",null,[C("h2",om,"# "+J(((it=zt.value)==null?void 0:it.name)||"général"),1),C("p",am,J(((j=zt.value)==null?void 0:j.desc)||"")+" ∙ "+J(kn.value)+" en ligne",1)])]),C("div",lm,[C("button",{class:"icon-btn",title:"Rechercher",onClick:I[5]||(I[5]=x=>h.value=!h.value),"data-tooltip":"Rechercher dans ce salon"},"🔍"),C("button",{class:"icon-btn",title:"Membres",onClick:I[6]||(I[6]=x=>c.value=!c.value),"data-tooltip":"Membres en ligne"},"👥"),C("div",um,[I[29]||(I[29]=C("span",{class:"status-dot",style:{width:"6px",height:"6px"}},null,-1)),Gn(" "+J(kn.value)+" en ligne ",1),g.value?(K(),z("span",cm,"👑 Admin")):mt("",!0)])])]),ge(Ce,{name:"slide-down"},{default:_e(()=>[h.value?(K(),z("div",hm,[C("div",dm,[I[30]||(I[30]=C("span",{class:"input-icon"},"🔍",-1)),Ks(C("input",{"onUpdate:modelValue":I[7]||(I[7]=x=>E.value=x),class:"input-field",placeholder:"Rechercher dans les messages..."},null,512),[[Wr,E.value]])]),C("button",{onClick:I[8]||(I[8]=x=>{h.value=!1,E.value=""}),class:"btn btn-glass btn-sm"},"✕")])):mt("",!0)]),_:1}),C("div",{class:"messages-area",ref_key:"messagesArea",ref:Y,onScroll:Ps},[C("div",fm,[C("div",pm,J(((et=zt.value)==null?void 0:et.icon)||"💬"),1),C("h3",mm,"Bienvenue dans #"+J(((ot=zt.value)==null?void 0:ot.name)||"général"),1),C("p",gm,J(((dt=zt.value)==null?void 0:dt.desc)||"Discutez avec votre communauté."),1),C("div",_m,[C("span",ym,"Début du salon ∙ "+J(Es.value),1)])]),(K(!0),z(ae,null,ye(Nn.value,(x,Kt)=>(K(),z(ae,{key:Kt},[x.showDate?(K(),z("div",vm,[I[31]||(I[31]=C("span",{class:"ds-line"},null,-1)),C("span",Tm,J(x.date),1),I[32]||(I[32]=C("span",{class:"ds-line"},null,-1))])):mt("",!0),C("div",{class:Ve(["msg-group",{"msg-mine":x.isOwn,"anim-fade-up":!0,highlighted:E.value&&x.messages.some(nt=>nt.text.toLowerCase().includes(E.value.toLowerCase()))}])},[x.isOwn?mt("",!0):(K(),z("div",{key:0,class:"msg-avatar",style:Kn(`background: ${x.color}`)},J(x.initials),5)),C("div",Em,[x.isOwn?mt("",!0):(K(),z("div",wm,[C("span",Am,J(x.author),1),x.isAdmin?(K(),z("span",Im,"👑 ADMIN")):mt("",!0),C("span",Rm,J(x.time),1)])),(K(!0),z(ae,null,ye(x.messages,(nt,te)=>(K(),z("div",{key:nt.id,class:Ve(["msg-bubble",{mine:x.isOwn}]),onMouseenter:ut=>V.value=nt.id,onMouseleave:I[9]||(I[9]=ut=>V.value=null)},[nt.imageUrl?(K(),z("img",{key:0,src:nt.imageUrl,class:"msg-image",onClick:ut=>Cs(nt.imageUrl)},null,8,Cm)):nt.fileUrl?(K(),z("a",{key:1,href:nt.fileUrl,target:"_blank",download:nt.fileName||"fichier",class:"msg-file-attachment"},[I[33]||(I[33]=C("span",{class:"file-icon-badge"},"📄",-1)),C("div",Sm,[C("span",bm,J(nt.fileName||"Fichier joint"),1),C("span",km,J(Ts(nt.fileSize)),1)]),I[34]||(I[34]=C("span",{class:"file-download-btn",title:"Télécharger"},"⬇",-1))],8,Vm)):mt("",!0),nt.text?(K(),z("span",{key:2,innerHTML:Or(nt.text,E.value)},null,8,Dm)):mt("",!0),x.isOwn&&te===x.messages.length-1?(K(),z("span",Nm,[g.value?(K(),z("span",xm,"👑 ADMIN")):mt("",!0),Gn(" "+J(x.time),1)])):mt("",!0),ge(Ce,{name:"fade-fast"},{default:_e(()=>[V.value===nt.id?(K(),z("div",Om,[(K(),z(ae,null,ye(bn,ut=>C("button",{key:ut,class:"reaction-btn",onClick:Ht=>on(nt,ut),title:ut},J(ut),9,Mm)),64)),x.isOwn||g.value?(K(),z("button",{key:0,class:"reaction-btn danger",onClick:ut=>Is(nt),title:g.value&&!x.isOwn?"👑 Modération Admin : Supprimer ce message":"Supprimer"},"🗑",8,Lm)):mt("",!0)])):mt("",!0)]),_:2},1024),nt.reactions&&Object.keys(nt.reactions).length?(K(),z("div",Fm,[(K(!0),z(ae,null,ye(nt.reactions,(ut,Ht)=>(K(),z("button",{key:Ht,class:Ve(["reaction-pill",{active:Rs()}]),onClick:de=>on(nt,Ht)},J(Ht)+" "+J(ut),11,Um))),128))])):mt("",!0)],42,Pm))),128))])],2)],64))),128)),C("div",{ref_key:"messagesBottom",ref:Vt},null,512)],544),ge(Ce,{name:"scale-up"},{default:_e(()=>[D.value?(K(),z("button",{key:0,class:"scroll-bottom-btn",onClick:$e},[I[35]||(I[35]=Gn(" ↓ ",-1)),G.value>0?(K(),z("span",Bm,J(G.value)+" nouveau"+J(G.value>1?"x":""),1)):mt("",!0)])):mt("",!0)]),_:1}),C("div",qm,[C("div",jm,[C("button",{class:"tool-btn",onClick:It,title:"Image"},"📎"),C("button",{class:"tool-btn",onClick:I[10]||(I[10]=x=>p.value=!p.value),title:"Emoji"},"😄"),C("button",{class:"tool-btn",onClick:I[11]||(I[11]=x=>ln("**")),title:"Gras"},"𝐁"),C("button",{class:"tool-btn",onClick:I[12]||(I[12]=x=>ln("_")),title:"Italique"},"𝐼"),C("button",{class:"tool-btn",onClick:I[13]||(I[13]=x=>ln("`")),title:"Code"},"〈/〉")]),ge(Ce,{name:"scale-up"},{default:_e(()=>[p.value?(K(),z("div",$m,[C("div",zm,[(K(),z(ae,null,ye(Ee,x=>C("button",{key:x.name,class:Ve(["ep-tab",{active:H.value===x.name}]),onClick:Kt=>H.value=x.name},J(x.icon),11,Km)),64))]),C("div",Gm,[(K(!0),z(ae,null,ye(vs.value,x=>(K(),z("button",{key:x,class:"ep-emoji",onClick:Kt=>an(x)},J(x),9,Qm))),128))])])):mt("",!0)]),_:1}),re.value?(K(),z("div",Wm,[C("div",Hm,[xt.value?(K(),z("img",{key:0,src:xt.value,class:"file-preview-thumb"},null,8,Xm)):(K(),z("span",Ym,"📎")),C("div",Jm,[C("span",Zm,J(re.value.name),1),C("span",tg,J(Ts(re.value.size)),1)]),C("button",{class:"file-preview-remove",onClick:we,title:"Retirer le fichier"},"✕")])])):mt("",!0),C("div",eg,[C("div",{class:"user-avatar-small",style:Kn(`background: ${m.value}`)},J(Be.value),5),C("div",ng,[Ks(C("textarea",{ref_key:"messageInput",ref:ht,"onUpdate:modelValue":I[14]||(I[14]=x=>i.value=x),class:"message-textarea",placeholder:`Message dans #${((Zt=zt.value)==null?void 0:Zt.name)||"général"}…`,onKeydown:[Qo(Gs(As,["exact","prevent"]),["enter"]),I[15]||(I[15]=Qo(Gs(x=>i.value+=`
`,["shift","exact"]),["enter"]))],onInput:Rt,rows:"1"},null,40,sg),[[Wr,i.value]]),C("input",{ref_key:"fileInput",ref:v,type:"file",style:{display:"none"},onChange:Dr},null,544)]),C("button",{class:Ve(["send-btn",{active:i.value.trim()||re.value}]),onClick:As,disabled:!i.value.trim()&&!re.value||N.value,title:"Envoyer"},[N.value?(K(),z("span",ig)):(K(),z("span",og,"➤"))],10,rg)]),I[36]||(I[36]=C("div",{class:"input-hint"},[C("span",null,"Entrée pour envoyer"),C("span",null,"Maj+Entrée pour nouvelle ligne")],-1))])]),ge(Ce,{name:"slide-left"},{default:_e(()=>[c.value?(K(),z("aside",ag,[C("div",lg,[C("h3",null,"Membres en ligne ("+J(kn.value)+")",1),C("button",{class:"icon-btn",onClick:I[16]||(I[16]=x=>c.value=!1)},"✕")]),C("div",ug,[(K(!0),z(ae,null,ye(ie.value,x=>(K(),z("div",{key:x.uid,class:"mp-member"},[C("div",{class:"mp-avatar",style:Kn(`background: ${x.color||On(x.uid||"1")}`)},J(Nr(x)),5),C("div",null,[C("div",cg,J(x.name||x.email||"Utilisateur"),1),I[37]||(I[37]=C("div",{class:"mp-status"},"En ligne",-1))]),I[38]||(I[38]=C("div",{class:"status-dot",style:{"margin-left":"auto"}},null,-1))]))),128))])])):mt("",!0)]),_:1}),ge(Ce,{name:"fade-fast"},{default:_e(()=>[M.value?(K(),z("div",{key:0,class:"lightbox",onClick:I[19]||(I[19]=x=>M.value=null)},[C("img",{src:M.value,class:"lightbox-img",onClick:I[17]||(I[17]=Gs(()=>{},["stop"]))},null,8,hg),C("button",{class:"lightbox-close",onClick:I[18]||(I[18]=x=>M.value=null)},"✕")])):mt("",!0)]),_:1}),ge(Ce,{name:"scale-up"},{default:_e(()=>[f.value?(K(),z("div",{key:0,class:"settings-modal glass-heavy",onClick:I[22]||(I[22]=Gs(x=>f.value=!1,["self"]))},[C("div",dg,[I[42]||(I[42]=C("h3",{class:"settings-title"},"⚙ Paramètres",-1)),C("div",fg,[I[39]||(I[39]=C("label",{class:"settings-label"},"Couleur de profil",-1)),C("div",pg,[(K(),z(ae,null,ye(Jt,x=>C("button",{key:x,class:Ve(["color-swatch",{selected:m.value===x}]),style:Kn(`background: ${x}`),onClick:Kt=>m.value=x},null,14,mg)),64))])]),C("div",gg,[I[41]||(I[41]=C("label",{class:"settings-label"},"Notifications sonores",-1)),C("label",_g,[Ks(C("input",{type:"checkbox","onUpdate:modelValue":I[20]||(I[20]=x=>X.value=x)},null,512),[[fc,X.value]]),I[40]||(I[40]=C("span",{class:"toggle-track"},null,-1))])]),C("button",{class:"btn btn-primary btn-sm",style:{"margin-top":"16px"},onClick:I[21]||(I[21]=x=>f.value=!1)},"Fermer")])])):mt("",!0)]),_:1})])):(K(),z("div",yg,[...I[43]||(I[43]=[C("div",{class:"loading-spinner"},null,-1),C("p",null,"Vérification de votre session…",-1)])]))}}},Vg=_c(vg,[["__scopeId","data-v-586ce680"]]);export{Vg as default};

import{_ as rc}from"./41hPsWHY.js";import{g as Ka,_ as Ga,e as Qa,f as Qt,h as Wa,F as Ha,L as ic,i as ke,S as Xa,j as Ya,C as Ja,r as lr,k as oc,l as ac,u as lc,m as uc,n as cc,p as hc,q as dc,c as G,b as _e,w as ye,T as Ce,a as V,s as Zn,t as tt,d as ts,v as mt,x as Ws,y as Yr,z as le,A as ve,B as Ve,D as Go,E as Hs,G as ot,H as be,I as Qo,J as Wo,o as Q,K as fc}from"./LifXEpCo.js";import{s as Ho}from"./De0NR53R.js";import{g as Xo,o as mc,s as pc}from"./LoxqRNhy.js";import{_ as gc}from"./DlAUqK2U.js";var Yo=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var tn,Za;(function(){var n;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function t(v,m){function g(){}g.prototype=m.prototype,v.D=m.prototype,v.prototype=new g,v.prototype.constructor=v,v.C=function(y,E,I){for(var _=Array(arguments.length-2),ee=2;ee<arguments.length;ee++)_[ee-2]=arguments[ee];return m.prototype[E].apply(y,_)}}function e(){this.blockSize=-1}function s(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.B=Array(this.blockSize),this.o=this.h=0,this.s()}t(s,e),s.prototype.s=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function i(v,m,g){g||(g=0);var y=Array(16);if(typeof m=="string")for(var E=0;16>E;++E)y[E]=m.charCodeAt(g++)|m.charCodeAt(g++)<<8|m.charCodeAt(g++)<<16|m.charCodeAt(g++)<<24;else for(E=0;16>E;++E)y[E]=m[g++]|m[g++]<<8|m[g++]<<16|m[g++]<<24;m=v.g[0],g=v.g[1],E=v.g[2];var I=v.g[3],_=m+(I^g&(E^I))+y[0]+3614090360&4294967295;m=g+(_<<7&4294967295|_>>>25),_=I+(E^m&(g^E))+y[1]+3905402710&4294967295,I=m+(_<<12&4294967295|_>>>20),_=E+(g^I&(m^g))+y[2]+606105819&4294967295,E=I+(_<<17&4294967295|_>>>15),_=g+(m^E&(I^m))+y[3]+3250441966&4294967295,g=E+(_<<22&4294967295|_>>>10),_=m+(I^g&(E^I))+y[4]+4118548399&4294967295,m=g+(_<<7&4294967295|_>>>25),_=I+(E^m&(g^E))+y[5]+1200080426&4294967295,I=m+(_<<12&4294967295|_>>>20),_=E+(g^I&(m^g))+y[6]+2821735955&4294967295,E=I+(_<<17&4294967295|_>>>15),_=g+(m^E&(I^m))+y[7]+4249261313&4294967295,g=E+(_<<22&4294967295|_>>>10),_=m+(I^g&(E^I))+y[8]+1770035416&4294967295,m=g+(_<<7&4294967295|_>>>25),_=I+(E^m&(g^E))+y[9]+2336552879&4294967295,I=m+(_<<12&4294967295|_>>>20),_=E+(g^I&(m^g))+y[10]+4294925233&4294967295,E=I+(_<<17&4294967295|_>>>15),_=g+(m^E&(I^m))+y[11]+2304563134&4294967295,g=E+(_<<22&4294967295|_>>>10),_=m+(I^g&(E^I))+y[12]+1804603682&4294967295,m=g+(_<<7&4294967295|_>>>25),_=I+(E^m&(g^E))+y[13]+4254626195&4294967295,I=m+(_<<12&4294967295|_>>>20),_=E+(g^I&(m^g))+y[14]+2792965006&4294967295,E=I+(_<<17&4294967295|_>>>15),_=g+(m^E&(I^m))+y[15]+1236535329&4294967295,g=E+(_<<22&4294967295|_>>>10),_=m+(E^I&(g^E))+y[1]+4129170786&4294967295,m=g+(_<<5&4294967295|_>>>27),_=I+(g^E&(m^g))+y[6]+3225465664&4294967295,I=m+(_<<9&4294967295|_>>>23),_=E+(m^g&(I^m))+y[11]+643717713&4294967295,E=I+(_<<14&4294967295|_>>>18),_=g+(I^m&(E^I))+y[0]+3921069994&4294967295,g=E+(_<<20&4294967295|_>>>12),_=m+(E^I&(g^E))+y[5]+3593408605&4294967295,m=g+(_<<5&4294967295|_>>>27),_=I+(g^E&(m^g))+y[10]+38016083&4294967295,I=m+(_<<9&4294967295|_>>>23),_=E+(m^g&(I^m))+y[15]+3634488961&4294967295,E=I+(_<<14&4294967295|_>>>18),_=g+(I^m&(E^I))+y[4]+3889429448&4294967295,g=E+(_<<20&4294967295|_>>>12),_=m+(E^I&(g^E))+y[9]+568446438&4294967295,m=g+(_<<5&4294967295|_>>>27),_=I+(g^E&(m^g))+y[14]+3275163606&4294967295,I=m+(_<<9&4294967295|_>>>23),_=E+(m^g&(I^m))+y[3]+4107603335&4294967295,E=I+(_<<14&4294967295|_>>>18),_=g+(I^m&(E^I))+y[8]+1163531501&4294967295,g=E+(_<<20&4294967295|_>>>12),_=m+(E^I&(g^E))+y[13]+2850285829&4294967295,m=g+(_<<5&4294967295|_>>>27),_=I+(g^E&(m^g))+y[2]+4243563512&4294967295,I=m+(_<<9&4294967295|_>>>23),_=E+(m^g&(I^m))+y[7]+1735328473&4294967295,E=I+(_<<14&4294967295|_>>>18),_=g+(I^m&(E^I))+y[12]+2368359562&4294967295,g=E+(_<<20&4294967295|_>>>12),_=m+(g^E^I)+y[5]+4294588738&4294967295,m=g+(_<<4&4294967295|_>>>28),_=I+(m^g^E)+y[8]+2272392833&4294967295,I=m+(_<<11&4294967295|_>>>21),_=E+(I^m^g)+y[11]+1839030562&4294967295,E=I+(_<<16&4294967295|_>>>16),_=g+(E^I^m)+y[14]+4259657740&4294967295,g=E+(_<<23&4294967295|_>>>9),_=m+(g^E^I)+y[1]+2763975236&4294967295,m=g+(_<<4&4294967295|_>>>28),_=I+(m^g^E)+y[4]+1272893353&4294967295,I=m+(_<<11&4294967295|_>>>21),_=E+(I^m^g)+y[7]+4139469664&4294967295,E=I+(_<<16&4294967295|_>>>16),_=g+(E^I^m)+y[10]+3200236656&4294967295,g=E+(_<<23&4294967295|_>>>9),_=m+(g^E^I)+y[13]+681279174&4294967295,m=g+(_<<4&4294967295|_>>>28),_=I+(m^g^E)+y[0]+3936430074&4294967295,I=m+(_<<11&4294967295|_>>>21),_=E+(I^m^g)+y[3]+3572445317&4294967295,E=I+(_<<16&4294967295|_>>>16),_=g+(E^I^m)+y[6]+76029189&4294967295,g=E+(_<<23&4294967295|_>>>9),_=m+(g^E^I)+y[9]+3654602809&4294967295,m=g+(_<<4&4294967295|_>>>28),_=I+(m^g^E)+y[12]+3873151461&4294967295,I=m+(_<<11&4294967295|_>>>21),_=E+(I^m^g)+y[15]+530742520&4294967295,E=I+(_<<16&4294967295|_>>>16),_=g+(E^I^m)+y[2]+3299628645&4294967295,g=E+(_<<23&4294967295|_>>>9),_=m+(E^(g|~I))+y[0]+4096336452&4294967295,m=g+(_<<6&4294967295|_>>>26),_=I+(g^(m|~E))+y[7]+1126891415&4294967295,I=m+(_<<10&4294967295|_>>>22),_=E+(m^(I|~g))+y[14]+2878612391&4294967295,E=I+(_<<15&4294967295|_>>>17),_=g+(I^(E|~m))+y[5]+4237533241&4294967295,g=E+(_<<21&4294967295|_>>>11),_=m+(E^(g|~I))+y[12]+1700485571&4294967295,m=g+(_<<6&4294967295|_>>>26),_=I+(g^(m|~E))+y[3]+2399980690&4294967295,I=m+(_<<10&4294967295|_>>>22),_=E+(m^(I|~g))+y[10]+4293915773&4294967295,E=I+(_<<15&4294967295|_>>>17),_=g+(I^(E|~m))+y[1]+2240044497&4294967295,g=E+(_<<21&4294967295|_>>>11),_=m+(E^(g|~I))+y[8]+1873313359&4294967295,m=g+(_<<6&4294967295|_>>>26),_=I+(g^(m|~E))+y[15]+4264355552&4294967295,I=m+(_<<10&4294967295|_>>>22),_=E+(m^(I|~g))+y[6]+2734768916&4294967295,E=I+(_<<15&4294967295|_>>>17),_=g+(I^(E|~m))+y[13]+1309151649&4294967295,g=E+(_<<21&4294967295|_>>>11),_=m+(E^(g|~I))+y[4]+4149444226&4294967295,m=g+(_<<6&4294967295|_>>>26),_=I+(g^(m|~E))+y[11]+3174756917&4294967295,I=m+(_<<10&4294967295|_>>>22),_=E+(m^(I|~g))+y[2]+718787259&4294967295,E=I+(_<<15&4294967295|_>>>17),_=g+(I^(E|~m))+y[9]+3951481745&4294967295,v.g[0]=v.g[0]+m&4294967295,v.g[1]=v.g[1]+(E+(_<<21&4294967295|_>>>11))&4294967295,v.g[2]=v.g[2]+E&4294967295,v.g[3]=v.g[3]+I&4294967295}s.prototype.u=function(v,m){m===void 0&&(m=v.length);for(var g=m-this.blockSize,y=this.B,E=this.h,I=0;I<m;){if(E==0)for(;I<=g;)i(this,v,I),I+=this.blockSize;if(typeof v=="string"){for(;I<m;)if(y[E++]=v.charCodeAt(I++),E==this.blockSize){i(this,y),E=0;break}}else for(;I<m;)if(y[E++]=v[I++],E==this.blockSize){i(this,y),E=0;break}}this.h=E,this.o+=m},s.prototype.v=function(){var v=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);v[0]=128;for(var m=1;m<v.length-8;++m)v[m]=0;var g=8*this.o;for(m=v.length-8;m<v.length;++m)v[m]=g&255,g/=256;for(this.u(v),v=Array(16),m=g=0;4>m;++m)for(var y=0;32>y;y+=8)v[g++]=this.g[m]>>>y&255;return v};function o(v,m){var g=c;return Object.prototype.hasOwnProperty.call(g,v)?g[v]:g[v]=m(v)}function a(v,m){this.h=m;for(var g=[],y=!0,E=v.length-1;0<=E;E--){var I=v[E]|0;y&&I==m||(g[E]=I,y=!1)}this.g=g}var c={};function h(v){return-128<=v&&128>v?o(v,function(m){return new a([m|0],0>m?-1:0)}):new a([v|0],0>v?-1:0)}function f(v){if(isNaN(v)||!isFinite(v))return w;if(0>v)return D(f(-v));for(var m=[],g=1,y=0;v>=g;y++)m[y]=v/g|0,g*=4294967296;return new a(m,0)}function p(v,m){if(v.length==0)throw Error("number format error: empty string");if(m=m||10,2>m||36<m)throw Error("radix out of range: "+m);if(v.charAt(0)=="-")return D(p(v.substring(1),m));if(0<=v.indexOf("-"))throw Error('number format error: interior "-" character');for(var g=f(Math.pow(m,8)),y=w,E=0;E<v.length;E+=8){var I=Math.min(8,v.length-E),_=parseInt(v.substring(E,E+I),m);8>I?(I=f(Math.pow(m,I)),y=y.j(I).add(f(_))):(y=y.j(g),y=y.add(f(_)))}return y}var w=h(0),R=h(1),b=h(16777216);n=a.prototype,n.m=function(){if(L(this))return-D(this).m();for(var v=0,m=1,g=0;g<this.g.length;g++){var y=this.i(g);v+=(0<=y?y:4294967296+y)*m,m*=4294967296}return v},n.toString=function(v){if(v=v||10,2>v||36<v)throw Error("radix out of range: "+v);if(N(this))return"0";if(L(this))return"-"+D(this).toString(v);for(var m=f(Math.pow(v,6)),g=this,y="";;){var E=Z(g,m).g;g=W(g,E.j(m));var I=((0<g.g.length?g.g[0]:g.h)>>>0).toString(v);if(g=E,N(g))return I+y;for(;6>I.length;)I="0"+I;y=I+y}},n.i=function(v){return 0>v?0:v<this.g.length?this.g[v]:this.h};function N(v){if(v.h!=0)return!1;for(var m=0;m<v.g.length;m++)if(v.g[m]!=0)return!1;return!0}function L(v){return v.h==-1}n.l=function(v){return v=W(this,v),L(v)?-1:N(v)?0:1};function D(v){for(var m=v.g.length,g=[],y=0;y<m;y++)g[y]=~v.g[y];return new a(g,~v.h).add(R)}n.abs=function(){return L(this)?D(this):this},n.add=function(v){for(var m=Math.max(this.g.length,v.g.length),g=[],y=0,E=0;E<=m;E++){var I=y+(this.i(E)&65535)+(v.i(E)&65535),_=(I>>>16)+(this.i(E)>>>16)+(v.i(E)>>>16);y=_>>>16,I&=65535,_&=65535,g[E]=_<<16|I}return new a(g,g[g.length-1]&-2147483648?-1:0)};function W(v,m){return v.add(D(m))}n.j=function(v){if(N(this)||N(v))return w;if(L(this))return L(v)?D(this).j(D(v)):D(D(this).j(v));if(L(v))return D(this.j(D(v)));if(0>this.l(b)&&0>v.l(b))return f(this.m()*v.m());for(var m=this.g.length+v.g.length,g=[],y=0;y<2*m;y++)g[y]=0;for(y=0;y<this.g.length;y++)for(var E=0;E<v.g.length;E++){var I=this.i(y)>>>16,_=this.i(y)&65535,ee=v.i(E)>>>16,re=v.i(E)&65535;g[2*y+2*E]+=_*re,J(g,2*y+2*E),g[2*y+2*E+1]+=I*re,J(g,2*y+2*E+1),g[2*y+2*E+1]+=_*ee,J(g,2*y+2*E+1),g[2*y+2*E+2]+=I*ee,J(g,2*y+2*E+2)}for(y=0;y<m;y++)g[y]=g[2*y+1]<<16|g[2*y];for(y=m;y<2*m;y++)g[y]=0;return new a(g,0)};function J(v,m){for(;(v[m]&65535)!=v[m];)v[m+1]+=v[m]>>>16,v[m]&=65535,m++}function Y(v,m){this.g=v,this.h=m}function Z(v,m){if(N(m))throw Error("division by zero");if(N(v))return new Y(w,w);if(L(v))return m=Z(D(v),m),new Y(D(m.g),D(m.h));if(L(m))return m=Z(v,D(m)),new Y(D(m.g),m.h);if(30<v.g.length){if(L(v)||L(m))throw Error("slowDivide_ only works with positive integers.");for(var g=R,y=m;0>=y.l(v);)g=Vt(g),y=Vt(y);var E=ct(g,1),I=ct(y,1);for(y=ct(y,2),g=ct(g,2);!N(y);){var _=I.add(y);0>=_.l(v)&&(E=E.add(g),I=_),y=ct(y,1),g=ct(g,1)}return m=W(v,E.j(m)),new Y(E,m)}for(E=w;0<=v.l(m);){for(g=Math.max(1,Math.floor(v.m()/m.m())),y=Math.ceil(Math.log(g)/Math.LN2),y=48>=y?1:Math.pow(2,y-48),I=f(g),_=I.j(m);L(_)||0<_.l(v);)g-=y,I=f(g),_=I.j(m);N(I)&&(I=R),E=E.add(I),v=W(v,_)}return new Y(E,v)}n.A=function(v){return Z(this,v).h},n.and=function(v){for(var m=Math.max(this.g.length,v.g.length),g=[],y=0;y<m;y++)g[y]=this.i(y)&v.i(y);return new a(g,this.h&v.h)},n.or=function(v){for(var m=Math.max(this.g.length,v.g.length),g=[],y=0;y<m;y++)g[y]=this.i(y)|v.i(y);return new a(g,this.h|v.h)},n.xor=function(v){for(var m=Math.max(this.g.length,v.g.length),g=[],y=0;y<m;y++)g[y]=this.i(y)^v.i(y);return new a(g,this.h^v.h)};function Vt(v){for(var m=v.g.length+1,g=[],y=0;y<m;y++)g[y]=v.i(y)<<1|v.i(y-1)>>>31;return new a(g,v.h)}function ct(v,m){var g=m>>5;m%=32;for(var y=v.g.length-g,E=[],I=0;I<y;I++)E[I]=0<m?v.i(I+g)>>>m|v.i(I+g+1)<<32-m:v.i(I+g);return new a(E,v.h)}s.prototype.digest=s.prototype.v,s.prototype.reset=s.prototype.s,s.prototype.update=s.prototype.u,Za=s,a.prototype.add=a.prototype.add,a.prototype.multiply=a.prototype.j,a.prototype.modulo=a.prototype.A,a.prototype.compare=a.prototype.l,a.prototype.toNumber=a.prototype.m,a.prototype.toString=a.prototype.toString,a.prototype.getBits=a.prototype.i,a.fromNumber=f,a.fromString=p,tn=a}).apply(typeof Yo<"u"?Yo:typeof self<"u"?self:typeof window<"u"?window:{});var Xs=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var tl,ss,el,sr,ri,nl,sl,rl;(function(){var n,t=typeof Object.defineProperties=="function"?Object.defineProperty:function(r,l,u){return r==Array.prototype||r==Object.prototype||(r[l]=u.value),r};function e(r){r=[typeof globalThis=="object"&&globalThis,r,typeof window=="object"&&window,typeof self=="object"&&self,typeof Xs=="object"&&Xs];for(var l=0;l<r.length;++l){var u=r[l];if(u&&u.Math==Math)return u}throw Error("Cannot find global object")}var s=e(this);function i(r,l){if(l)t:{var u=s;r=r.split(".");for(var d=0;d<r.length-1;d++){var A=r[d];if(!(A in u))break t;u=u[A]}r=r[r.length-1],d=u[r],l=l(d),l!=d&&l!=null&&t(u,r,{configurable:!0,writable:!0,value:l})}}function o(r,l){r instanceof String&&(r+="");var u=0,d=!1,A={next:function(){if(!d&&u<r.length){var C=u++;return{value:l(C,r[C]),done:!1}}return d=!0,{done:!0,value:void 0}}};return A[Symbol.iterator]=function(){return A},A}i("Array.prototype.values",function(r){return r||function(){return o(this,function(l,u){return u})}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var a=a||{},c=this||self;function h(r){var l=typeof r;return l=l!="object"?l:r?Array.isArray(r)?"array":l:"null",l=="array"||l=="object"&&typeof r.length=="number"}function f(r){var l=typeof r;return l=="object"&&r!=null||l=="function"}function p(r,l,u){return r.call.apply(r.bind,arguments)}function w(r,l,u){if(!r)throw Error();if(2<arguments.length){var d=Array.prototype.slice.call(arguments,2);return function(){var A=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(A,d),r.apply(l,A)}}return function(){return r.apply(l,arguments)}}function R(r,l,u){return R=Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?p:w,R.apply(null,arguments)}function b(r,l){var u=Array.prototype.slice.call(arguments,1);return function(){var d=u.slice();return d.push.apply(d,arguments),r.apply(this,d)}}function N(r,l){function u(){}u.prototype=l.prototype,r.aa=l.prototype,r.prototype=new u,r.prototype.constructor=r,r.Qb=function(d,A,C){for(var O=Array(arguments.length-2),ut=2;ut<arguments.length;ut++)O[ut-2]=arguments[ut];return l.prototype[A].apply(d,O)}}function L(r){const l=r.length;if(0<l){const u=Array(l);for(let d=0;d<l;d++)u[d]=r[d];return u}return[]}function D(r,l){for(let u=1;u<arguments.length;u++){const d=arguments[u];if(h(d)){const A=r.length||0,C=d.length||0;r.length=A+C;for(let O=0;O<C;O++)r[A+O]=d[O]}else r.push(d)}}class W{constructor(l,u){this.i=l,this.j=u,this.h=0,this.g=null}get(){let l;return 0<this.h?(this.h--,l=this.g,this.g=l.next,l.next=null):l=this.i(),l}}function J(r){return/^[\s\xa0]*$/.test(r)}function Y(){var r=c.navigator;return r&&(r=r.userAgent)?r:""}function Z(r){return Z[" "](r),r}Z[" "]=function(){};var Vt=Y().indexOf("Gecko")!=-1&&!(Y().toLowerCase().indexOf("webkit")!=-1&&Y().indexOf("Edge")==-1)&&!(Y().indexOf("Trident")!=-1||Y().indexOf("MSIE")!=-1)&&Y().indexOf("Edge")==-1;function ct(r,l,u){for(const d in r)l.call(u,r[d],d,r)}function v(r,l){for(const u in r)l.call(void 0,r[u],u,r)}function m(r){const l={};for(const u in r)l[u]=r[u];return l}const g="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function y(r,l){let u,d;for(let A=1;A<arguments.length;A++){d=arguments[A];for(u in d)r[u]=d[u];for(let C=0;C<g.length;C++)u=g[C],Object.prototype.hasOwnProperty.call(d,u)&&(r[u]=d[u])}}function E(r){var l=1;r=r.split(":");const u=[];for(;0<l&&r.length;)u.push(r.shift()),l--;return r.length&&u.push(r.join(":")),u}function I(r){c.setTimeout(()=>{throw r},0)}function _(){var r=Mn;let l=null;return r.g&&(l=r.g,r.g=r.g.next,r.g||(r.h=null),l.next=null),l}class ee{constructor(){this.h=this.g=null}add(l,u){const d=re.get();d.set(l,u),this.h?this.h.next=d:this.g=d,this.h=d}}var re=new W(()=>new xr,r=>r.reset());class xr{constructor(){this.next=this.g=this.h=null}set(l,u){this.h=l,this.g=u,this.next=null}reset(){this.next=this.g=this.h=null}}let Wt,we=!1,Mn=new ee,Cs=()=>{const r=c.Promise.resolve(void 0);Wt=()=>{r.then(ie)}};var ie=()=>{for(var r;r=_();){try{r.h.call(r.g)}catch(u){I(u)}var l=re;l.j(r),100>l.h&&(l.h++,r.next=l.g,l.g=r)}we=!1};function Ot(){this.s=this.s,this.C=this.C}Ot.prototype.s=!1,Ot.prototype.ma=function(){this.s||(this.s=!0,this.N())},Ot.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function Rt(r,l){this.type=r,this.g=this.target=l,this.defaultPrevented=!1}Rt.prototype.h=function(){this.defaultPrevented=!0};var Or=function(){if(!c.addEventListener||!Object.defineProperty)return!1;var r=!1,l=Object.defineProperty({},"passive",{get:function(){r=!0}});try{const u=()=>{};c.addEventListener("test",u,l),c.removeEventListener("test",u,l)}catch{}return r}();function Ae(r,l){if(Rt.call(this,r?r.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,r){var u=this.type=r.type,d=r.changedTouches&&r.changedTouches.length?r.changedTouches[0]:null;if(this.target=r.target||r.srcElement,this.g=l,l=r.relatedTarget){if(Vt){t:{try{Z(l.nodeName);var A=!0;break t}catch{}A=!1}A||(l=null)}}else u=="mouseover"?l=r.fromElement:u=="mouseout"&&(l=r.toElement);this.relatedTarget=l,d?(this.clientX=d.clientX!==void 0?d.clientX:d.pageX,this.clientY=d.clientY!==void 0?d.clientY:d.pageY,this.screenX=d.screenX||0,this.screenY=d.screenY||0):(this.clientX=r.clientX!==void 0?r.clientX:r.pageX,this.clientY=r.clientY!==void 0?r.clientY:r.pageY,this.screenX=r.screenX||0,this.screenY=r.screenY||0),this.button=r.button,this.key=r.key||"",this.ctrlKey=r.ctrlKey,this.altKey=r.altKey,this.shiftKey=r.shiftKey,this.metaKey=r.metaKey,this.pointerId=r.pointerId||0,this.pointerType=typeof r.pointerType=="string"?r.pointerType:Vs[r.pointerType]||"",this.state=r.state,this.i=r,r.defaultPrevented&&Ae.aa.h.call(this)}}N(Ae,Rt);var Vs={2:"touch",3:"pen",4:"mouse"};Ae.prototype.h=function(){Ae.aa.h.call(this);var r=this.i;r.preventDefault?r.preventDefault():r.returnValue=!1};var zt="closure_listenable_"+(1e6*Math.random()|0),un=0;function bs(r,l,u,d,A){this.listener=r,this.proxy=null,this.src=l,this.type=u,this.capture=!!d,this.ha=A,this.key=++un,this.da=this.fa=!1}function cn(r){r.da=!0,r.listener=null,r.proxy=null,r.src=null,r.ha=null}function je(r){this.src=r,this.g={},this.h=0}je.prototype.add=function(r,l,u,d,A){var C=r.toString();r=this.g[C],r||(r=this.g[C]=[],this.h++);var O=$e(r,l,d,A);return-1<O?(l=r[O],u||(l.fa=!1)):(l=new bs(l,this.src,C,!!d,A),l.fa=u,r.push(l)),l};function hn(r,l){var u=l.type;if(u in r.g){var d=r.g[u],A=Array.prototype.indexOf.call(d,l,void 0),C;(C=0<=A)&&Array.prototype.splice.call(d,A,1),C&&(cn(l),r.g[u].length==0&&(delete r.g[u],r.h--))}}function $e(r,l,u,d){for(var A=0;A<r.length;++A){var C=r[A];if(!C.da&&C.listener==l&&C.capture==!!u&&C.ha==d)return A}return-1}var fe="closure_lm_"+(1e6*Math.random()|0),me={};function Ie(r,l,u,d,A){if(Array.isArray(l)){for(var C=0;C<l.length;C++)Ie(r,l[C],u,d,A);return null}return u=ks(u),r&&r[zt]?r.K(l,u,f(d)?!!d.capture:!1,A):oe(r,l,u,!1,d,A)}function oe(r,l,u,d,A,C){if(!l)throw Error("Invalid event type");var O=f(A)?!!A.capture:!!A,ut=dn(r);if(ut||(r[fe]=ut=new je(r)),u=ut.add(l,u,d,O,C),u.proxy)return u;if(d=Ln(),u.proxy=d,d.src=r,d.listener=u,r.addEventListener)Or||(A=O),A===void 0&&(A=!1),r.addEventListener(l.toString(),d,A);else if(r.attachEvent)r.attachEvent(Ss(l.toString()),d);else if(r.addListener&&r.removeListener)r.addListener(d);else throw Error("addEventListener and attachEvent are unavailable.");return u}function Ln(){function r(u){return l.call(r.src,r.listener,u)}const l=Mr;return r}function Fn(r,l,u,d,A){if(Array.isArray(l))for(var C=0;C<l.length;C++)Fn(r,l[C],u,d,A);else d=f(d)?!!d.capture:!!d,u=ks(u),r&&r[zt]?(r=r.i,l=String(l).toString(),l in r.g&&(C=r.g[l],u=$e(C,u,d,A),-1<u&&(cn(C[u]),Array.prototype.splice.call(C,u,1),C.length==0&&(delete r.g[l],r.h--)))):r&&(r=dn(r))&&(l=r.g[l.toString()],r=-1,l&&(r=$e(l,u,d,A)),(u=-1<r?l[r]:null)&&Un(u))}function Un(r){if(typeof r!="number"&&r&&!r.da){var l=r.src;if(l&&l[zt])hn(l.i,r);else{var u=r.type,d=r.proxy;l.removeEventListener?l.removeEventListener(u,d,r.capture):l.detachEvent?l.detachEvent(Ss(u),d):l.addListener&&l.removeListener&&l.removeListener(d),(u=dn(l))?(hn(u,r),u.h==0&&(u.src=null,l[fe]=null)):cn(r)}}}function Ss(r){return r in me?me[r]:me[r]="on"+r}function Mr(r,l){if(r.da)r=!0;else{l=new Ae(l,this);var u=r.listener,d=r.ha||r.src;r.fa&&Un(r),r=u.call(d,l)}return r}function dn(r){return r=r[fe],r instanceof je?r:null}var fn="__closure_events_fn_"+(1e9*Math.random()>>>0);function ks(r){return typeof r=="function"?r:(r[fn]||(r[fn]=function(l){return r.handleEvent(l)}),r[fn])}function At(){Ot.call(this),this.i=new je(this),this.M=this,this.F=null}N(At,Ot),At.prototype[zt]=!0,At.prototype.removeEventListener=function(r,l,u,d){Fn(this,r,l,u,d)};function bt(r,l){var u,d=r.F;if(d)for(u=[];d;d=d.F)u.push(d);if(r=r.M,d=l.type||l,typeof l=="string")l=new Rt(l,r);else if(l instanceof Rt)l.target=l.target||r;else{var A=l;l=new Rt(d,r),y(l,A)}if(A=!0,u)for(var C=u.length-1;0<=C;C--){var O=l.g=u[C];A=mn(O,d,!0,l)&&A}if(O=l.g=r,A=mn(O,d,!0,l)&&A,A=mn(O,d,!1,l)&&A,u)for(C=0;C<u.length;C++)O=l.g=u[C],A=mn(O,d,!1,l)&&A}At.prototype.N=function(){if(At.aa.N.call(this),this.i){var r=this.i,l;for(l in r.g){for(var u=r.g[l],d=0;d<u.length;d++)cn(u[d]);delete r.g[l],r.h--}}this.F=null},At.prototype.K=function(r,l,u,d){return this.i.add(String(r),l,!1,u,d)},At.prototype.L=function(r,l,u,d){return this.i.add(String(r),l,!0,u,d)};function mn(r,l,u,d){if(l=r.i.g[String(l)],!l)return!0;l=l.concat();for(var A=!0,C=0;C<l.length;++C){var O=l[C];if(O&&!O.da&&O.capture==u){var ut=O.listener,St=O.ha||O.src;O.fa&&hn(r.i,O),A=ut.call(St,d)!==!1&&A}}return A&&!d.defaultPrevented}function Ds(r,l,u){if(typeof r=="function")u&&(r=R(r,u));else if(r&&typeof r.handleEvent=="function")r=R(r.handleEvent,r);else throw Error("Invalid listener argument");return 2147483647<Number(l)?-1:c.setTimeout(r,l||0)}function pn(r){r.g=Ds(()=>{r.g=null,r.i&&(r.i=!1,pn(r))},r.l);const l=r.h;r.h=null,r.m.apply(null,l)}class Lr extends Ot{constructor(l,u){super(),this.m=l,this.l=u,this.h=null,this.i=!1,this.g=null}j(l){this.h=arguments,this.g?this.i=!0:pn(this)}N(){super.N(),this.g&&(c.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function ze(r){Ot.call(this),this.h=r,this.g={}}N(ze,Ot);var Bn=[];function Ns(r){ct(r.g,function(l,u){this.g.hasOwnProperty(u)&&Un(l)},r),r.g={}}ze.prototype.N=function(){ze.aa.N.call(this),Ns(this)},ze.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var Ke=c.JSON.stringify,Fr=c.JSON.parse,Ur=class{stringify(r){return c.JSON.stringify(r,void 0)}parse(r){return c.JSON.parse(r,void 0)}};function qn(){}qn.prototype.h=null;function xs(r){return r.h||(r.h=r.i())}function gn(){}var Ge={OPEN:"a",kb:"b",Ja:"c",wb:"d"};function P(){Rt.call(this,"d")}N(P,Rt);function T(){Rt.call(this,"c")}N(T,Rt);var M={},j=null;function z(){return j=j||new At}M.La="serverreachability";function U(r){Rt.call(this,M.La,r)}N(U,Rt);function st(r){const l=z();bt(l,new U(l))}M.STAT_EVENT="statevent";function ft(r,l){Rt.call(this,M.STAT_EVENT,r),this.stat=l}N(ft,Rt);function q(r){const l=z();bt(l,new ft(l,r))}M.Ma="timingevent";function Pt(r,l){Rt.call(this,M.Ma,r),this.size=l}N(Pt,Rt);function x(r,l){if(typeof r!="function")throw Error("Fn must not be null and must be a function");return c.setTimeout(function(){r()},l)}function jt(){this.g=!0}jt.prototype.xa=function(){this.g=!1};function lt(r,l,u,d,A,C){r.info(function(){if(r.g)if(C)for(var O="",ut=C.split("&"),St=0;St<ut.length;St++){var rt=ut[St].split("=");if(1<rt.length){var Mt=rt[0];rt=rt[1];var Lt=Mt.split("_");O=2<=Lt.length&&Lt[1]=="type"?O+(Mt+"="+rt+"&"):O+(Mt+"=redacted&")}}else O=null;else O=C;return"XMLHTTP REQ ("+d+") [attempt "+A+"]: "+l+`
`+u+`
`+O})}function ae(r,l,u,d,A,C,O){r.info(function(){return"XMLHTTP RESP ("+d+") [ attempt "+A+"]: "+l+`
`+u+`
`+C+" "+O})}function vt(r,l,u,d){r.info(function(){return"XMLHTTP TEXT ("+l+"): "+jn(r,u)+(d?" "+d:"")})}function Kt(r,l){r.info(function(){return"TIMEOUT: "+l})}jt.prototype.info=function(){};function jn(r,l){if(!r.g)return l;if(!l)return null;try{var u=JSON.parse(l);if(u){for(r=0;r<u.length;r++)if(Array.isArray(u[r])){var d=u[r];if(!(2>d.length)){var A=d[1];if(Array.isArray(A)&&!(1>A.length)){var C=A[0];if(C!="noop"&&C!="stop"&&C!="close")for(var O=1;O<A.length;O++)A[O]=""}}}}return Ke(u)}catch{return l}}var Qe={NO_ERROR:0,gb:1,tb:2,sb:3,nb:4,rb:5,ub:6,Ia:7,TIMEOUT:8,xb:9},$n={lb:"complete",Hb:"success",Ja:"error",Ia:"abort",zb:"ready",Ab:"readystatechange",TIMEOUT:"timeout",vb:"incrementaldata",yb:"progress",ob:"downloadprogress",Pb:"uploadprogress"},_n;function We(){}N(We,qn),We.prototype.g=function(){return new XMLHttpRequest},We.prototype.i=function(){return{}},_n=new We;function Ht(r,l,u,d){this.j=r,this.i=l,this.l=u,this.R=d||1,this.U=new ze(this),this.I=45e3,this.H=null,this.o=!1,this.m=this.A=this.v=this.L=this.F=this.S=this.B=null,this.D=[],this.g=null,this.C=0,this.s=this.u=null,this.X=-1,this.J=!1,this.O=0,this.M=null,this.W=this.K=this.T=this.P=!1,this.h=new zn}function zn(){this.i=null,this.g="",this.h=!1}var Os={},Br={};function qr(r,l,u){r.L=1,r.v=Us(pe(l)),r.m=u,r.P=!0,uo(r,null)}function uo(r,l){r.F=Date.now(),Ms(r),r.A=pe(r.v);var u=r.A,d=r.R;Array.isArray(d)||(d=[String(d)]),Io(u.i,"t",d),r.C=0,u=r.j.J,r.h=new zn,r.g=jo(r.j,u?l:null,!r.m),0<r.O&&(r.M=new Lr(R(r.Y,r,r.g),r.O)),l=r.U,u=r.g,d=r.ca;var A="readystatechange";Array.isArray(A)||(A&&(Bn[0]=A.toString()),A=Bn);for(var C=0;C<A.length;C++){var O=Ie(u,A[C],d||l.handleEvent,!1,l.h||l);if(!O)break;l.g[O.key]=O}l=r.H?m(r.H):{},r.m?(r.u||(r.u="POST"),l["Content-Type"]="application/x-www-form-urlencoded",r.g.ea(r.A,r.u,r.m,l)):(r.u="GET",r.g.ea(r.A,r.u,null,l)),st(),lt(r.i,r.u,r.A,r.l,r.R,r.m)}Ht.prototype.ca=function(r){r=r.target;const l=this.M;l&&ge(r)==3?l.j():this.Y(r)},Ht.prototype.Y=function(r){try{if(r==this.g)t:{const Lt=ge(this.g);var l=this.g.Ba();const Tn=this.g.Z();if(!(3>Lt)&&(Lt!=3||this.g&&(this.h.h||this.g.oa()||ko(this.g)))){this.J||Lt!=4||l==7||(l==8||0>=Tn?st(3):st(2)),jr(this);var u=this.g.Z();this.X=u;e:if(co(this)){var d=ko(this.g);r="";var A=d.length,C=ge(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){He(this),Kn(this);var O="";break e}this.h.i=new c.TextDecoder}for(l=0;l<A;l++)this.h.h=!0,r+=this.h.i.decode(d[l],{stream:!(C&&l==A-1)});d.length=0,this.h.g+=r,this.C=0,O=this.h.g}else O=this.g.oa();if(this.o=u==200,ae(this.i,this.u,this.A,this.l,this.R,Lt,u),this.o){if(this.T&&!this.K){e:{if(this.g){var ut,St=this.g;if((ut=St.g?St.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!J(ut)){var rt=ut;break e}}rt=null}if(u=rt)vt(this.i,this.l,u,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,$r(this,u);else{this.o=!1,this.s=3,q(12),He(this),Kn(this);break t}}if(this.P){u=!0;let ne;for(;!this.J&&this.C<O.length;)if(ne=Uu(this,O),ne==Br){Lt==4&&(this.s=4,q(14),u=!1),vt(this.i,this.l,null,"[Incomplete Response]");break}else if(ne==Os){this.s=4,q(15),vt(this.i,this.l,O,"[Invalid Chunk]"),u=!1;break}else vt(this.i,this.l,ne,null),$r(this,ne);if(co(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),Lt!=4||O.length!=0||this.h.h||(this.s=1,q(16),u=!1),this.o=this.o&&u,!u)vt(this.i,this.l,O,"[Invalid Chunked Response]"),He(this),Kn(this);else if(0<O.length&&!this.W){this.W=!0;var Mt=this.j;Mt.g==this&&Mt.ba&&!Mt.M&&(Mt.j.info("Great, no buffering proxy detected. Bytes received: "+O.length),Hr(Mt),Mt.M=!0,q(11))}}else vt(this.i,this.l,O,null),$r(this,O);Lt==4&&He(this),this.o&&!this.J&&(Lt==4?Fo(this.j,this):(this.o=!1,Ms(this)))}else nc(this.g),u==400&&0<O.indexOf("Unknown SID")?(this.s=3,q(12)):(this.s=0,q(13)),He(this),Kn(this)}}}catch{}finally{}};function co(r){return r.g?r.u=="GET"&&r.L!=2&&r.j.Ca:!1}function Uu(r,l){var u=r.C,d=l.indexOf(`
`,u);return d==-1?Br:(u=Number(l.substring(u,d)),isNaN(u)?Os:(d+=1,d+u>l.length?Br:(l=l.slice(d,d+u),r.C=d+u,l)))}Ht.prototype.cancel=function(){this.J=!0,He(this)};function Ms(r){r.S=Date.now()+r.I,ho(r,r.I)}function ho(r,l){if(r.B!=null)throw Error("WatchDog timer not null");r.B=x(R(r.ba,r),l)}function jr(r){r.B&&(c.clearTimeout(r.B),r.B=null)}Ht.prototype.ba=function(){this.B=null;const r=Date.now();0<=r-this.S?(Kt(this.i,this.A),this.L!=2&&(st(),q(17)),He(this),this.s=2,Kn(this)):ho(this,this.S-r)};function Kn(r){r.j.G==0||r.J||Fo(r.j,r)}function He(r){jr(r);var l=r.M;l&&typeof l.ma=="function"&&l.ma(),r.M=null,Ns(r.U),r.g&&(l=r.g,r.g=null,l.abort(),l.ma())}function $r(r,l){try{var u=r.j;if(u.G!=0&&(u.g==r||zr(u.h,r))){if(!r.K&&zr(u.h,r)&&u.G==3){try{var d=u.Da.g.parse(l)}catch{d=null}if(Array.isArray(d)&&d.length==3){var A=d;if(A[0]==0){t:if(!u.u){if(u.g)if(u.g.F+3e3<r.F)Ks(u),$s(u);else break t;Wr(u),q(18)}}else u.za=A[1],0<u.za-u.T&&37500>A[2]&&u.F&&u.v==0&&!u.C&&(u.C=x(R(u.Za,u),6e3));if(1>=po(u.h)&&u.ca){try{u.ca()}catch{}u.ca=void 0}}else Ye(u,11)}else if((r.K||u.g==r)&&Ks(u),!J(l))for(A=u.Da.g.parse(l),l=0;l<A.length;l++){let rt=A[l];if(u.T=rt[0],rt=rt[1],u.G==2)if(rt[0]=="c"){u.K=rt[1],u.ia=rt[2];const Mt=rt[3];Mt!=null&&(u.la=Mt,u.j.info("VER="+u.la));const Lt=rt[4];Lt!=null&&(u.Aa=Lt,u.j.info("SVER="+u.Aa));const Tn=rt[5];Tn!=null&&typeof Tn=="number"&&0<Tn&&(d=1.5*Tn,u.L=d,u.j.info("backChannelRequestTimeoutMs_="+d)),d=u;const ne=r.g;if(ne){const Qs=ne.g?ne.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(Qs){var C=d.h;C.g||Qs.indexOf("spdy")==-1&&Qs.indexOf("quic")==-1&&Qs.indexOf("h2")==-1||(C.j=C.l,C.g=new Set,C.h&&(Kr(C,C.h),C.h=null))}if(d.D){const Xr=ne.g?ne.g.getResponseHeader("X-HTTP-Session-Id"):null;Xr&&(d.ya=Xr,ht(d.I,d.D,Xr))}}u.G=3,u.l&&u.l.ua(),u.ba&&(u.R=Date.now()-r.F,u.j.info("Handshake RTT: "+u.R+"ms")),d=u;var O=r;if(d.qa=qo(d,d.J?d.ia:null,d.W),O.K){go(d.h,O);var ut=O,St=d.L;St&&(ut.I=St),ut.B&&(jr(ut),Ms(ut)),d.g=O}else Mo(d);0<u.i.length&&zs(u)}else rt[0]!="stop"&&rt[0]!="close"||Ye(u,7);else u.G==3&&(rt[0]=="stop"||rt[0]=="close"?rt[0]=="stop"?Ye(u,7):Qr(u):rt[0]!="noop"&&u.l&&u.l.ta(rt),u.v=0)}}st(4)}catch{}}var Bu=class{constructor(r,l){this.g=r,this.map=l}};function fo(r){this.l=r||10,c.PerformanceNavigationTiming?(r=c.performance.getEntriesByType("navigation"),r=0<r.length&&(r[0].nextHopProtocol=="hq"||r[0].nextHopProtocol=="h2")):r=!!(c.chrome&&c.chrome.loadTimes&&c.chrome.loadTimes()&&c.chrome.loadTimes().wasFetchedViaSpdy),this.j=r?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}function mo(r){return r.h?!0:r.g?r.g.size>=r.j:!1}function po(r){return r.h?1:r.g?r.g.size:0}function zr(r,l){return r.h?r.h==l:r.g?r.g.has(l):!1}function Kr(r,l){r.g?r.g.add(l):r.h=l}function go(r,l){r.h&&r.h==l?r.h=null:r.g&&r.g.has(l)&&r.g.delete(l)}fo.prototype.cancel=function(){if(this.i=_o(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const r of this.g.values())r.cancel();this.g.clear()}};function _o(r){if(r.h!=null)return r.i.concat(r.h.D);if(r.g!=null&&r.g.size!==0){let l=r.i;for(const u of r.g.values())l=l.concat(u.D);return l}return L(r.i)}function qu(r){if(r.V&&typeof r.V=="function")return r.V();if(typeof Map<"u"&&r instanceof Map||typeof Set<"u"&&r instanceof Set)return Array.from(r.values());if(typeof r=="string")return r.split("");if(h(r)){for(var l=[],u=r.length,d=0;d<u;d++)l.push(r[d]);return l}l=[],u=0;for(d in r)l[u++]=r[d];return l}function ju(r){if(r.na&&typeof r.na=="function")return r.na();if(!r.V||typeof r.V!="function"){if(typeof Map<"u"&&r instanceof Map)return Array.from(r.keys());if(!(typeof Set<"u"&&r instanceof Set)){if(h(r)||typeof r=="string"){var l=[];r=r.length;for(var u=0;u<r;u++)l.push(u);return l}l=[],u=0;for(const d in r)l[u++]=d;return l}}}function yo(r,l){if(r.forEach&&typeof r.forEach=="function")r.forEach(l,void 0);else if(h(r)||typeof r=="string")Array.prototype.forEach.call(r,l,void 0);else for(var u=ju(r),d=qu(r),A=d.length,C=0;C<A;C++)l.call(void 0,d[C],u&&u[C],r)}var vo=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function $u(r,l){if(r){r=r.split("&");for(var u=0;u<r.length;u++){var d=r[u].indexOf("="),A=null;if(0<=d){var C=r[u].substring(0,d);A=r[u].substring(d+1)}else C=r[u];l(C,A?decodeURIComponent(A.replace(/\+/g," ")):"")}}}function Xe(r){if(this.g=this.o=this.j="",this.s=null,this.m=this.l="",this.h=!1,r instanceof Xe){this.h=r.h,Ls(this,r.j),this.o=r.o,this.g=r.g,Fs(this,r.s),this.l=r.l;var l=r.i,u=new Wn;u.i=l.i,l.g&&(u.g=new Map(l.g),u.h=l.h),To(this,u),this.m=r.m}else r&&(l=String(r).match(vo))?(this.h=!1,Ls(this,l[1]||"",!0),this.o=Gn(l[2]||""),this.g=Gn(l[3]||"",!0),Fs(this,l[4]),this.l=Gn(l[5]||"",!0),To(this,l[6]||"",!0),this.m=Gn(l[7]||"")):(this.h=!1,this.i=new Wn(null,this.h))}Xe.prototype.toString=function(){var r=[],l=this.j;l&&r.push(Qn(l,Eo,!0),":");var u=this.g;return(u||l=="file")&&(r.push("//"),(l=this.o)&&r.push(Qn(l,Eo,!0),"@"),r.push(encodeURIComponent(String(u)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),u=this.s,u!=null&&r.push(":",String(u))),(u=this.l)&&(this.g&&u.charAt(0)!="/"&&r.push("/"),r.push(Qn(u,u.charAt(0)=="/"?Gu:Ku,!0))),(u=this.i.toString())&&r.push("?",u),(u=this.m)&&r.push("#",Qn(u,Wu)),r.join("")};function pe(r){return new Xe(r)}function Ls(r,l,u){r.j=u?Gn(l,!0):l,r.j&&(r.j=r.j.replace(/:$/,""))}function Fs(r,l){if(l){if(l=Number(l),isNaN(l)||0>l)throw Error("Bad port number "+l);r.s=l}else r.s=null}function To(r,l,u){l instanceof Wn?(r.i=l,Hu(r.i,r.h)):(u||(l=Qn(l,Qu)),r.i=new Wn(l,r.h))}function ht(r,l,u){r.i.set(l,u)}function Us(r){return ht(r,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),r}function Gn(r,l){return r?l?decodeURI(r.replace(/%25/g,"%2525")):decodeURIComponent(r):""}function Qn(r,l,u){return typeof r=="string"?(r=encodeURI(r).replace(l,zu),u&&(r=r.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),r):null}function zu(r){return r=r.charCodeAt(0),"%"+(r>>4&15).toString(16)+(r&15).toString(16)}var Eo=/[#\/\?@]/g,Ku=/[#\?:]/g,Gu=/[#\?]/g,Qu=/[#\?@]/g,Wu=/#/g;function Wn(r,l){this.h=this.g=null,this.i=r||null,this.j=!!l}function Re(r){r.g||(r.g=new Map,r.h=0,r.i&&$u(r.i,function(l,u){r.add(decodeURIComponent(l.replace(/\+/g," ")),u)}))}n=Wn.prototype,n.add=function(r,l){Re(this),this.i=null,r=yn(this,r);var u=this.g.get(r);return u||this.g.set(r,u=[]),u.push(l),this.h+=1,this};function wo(r,l){Re(r),l=yn(r,l),r.g.has(l)&&(r.i=null,r.h-=r.g.get(l).length,r.g.delete(l))}function Ao(r,l){return Re(r),l=yn(r,l),r.g.has(l)}n.forEach=function(r,l){Re(this),this.g.forEach(function(u,d){u.forEach(function(A){r.call(l,A,d,this)},this)},this)},n.na=function(){Re(this);const r=Array.from(this.g.values()),l=Array.from(this.g.keys()),u=[];for(let d=0;d<l.length;d++){const A=r[d];for(let C=0;C<A.length;C++)u.push(l[d])}return u},n.V=function(r){Re(this);let l=[];if(typeof r=="string")Ao(this,r)&&(l=l.concat(this.g.get(yn(this,r))));else{r=Array.from(this.g.values());for(let u=0;u<r.length;u++)l=l.concat(r[u])}return l},n.set=function(r,l){return Re(this),this.i=null,r=yn(this,r),Ao(this,r)&&(this.h-=this.g.get(r).length),this.g.set(r,[l]),this.h+=1,this},n.get=function(r,l){return r?(r=this.V(r),0<r.length?String(r[0]):l):l};function Io(r,l,u){wo(r,l),0<u.length&&(r.i=null,r.g.set(yn(r,l),L(u)),r.h+=u.length)}n.toString=function(){if(this.i)return this.i;if(!this.g)return"";const r=[],l=Array.from(this.g.keys());for(var u=0;u<l.length;u++){var d=l[u];const C=encodeURIComponent(String(d)),O=this.V(d);for(d=0;d<O.length;d++){var A=C;O[d]!==""&&(A+="="+encodeURIComponent(String(O[d]))),r.push(A)}}return this.i=r.join("&")};function yn(r,l){return l=String(l),r.j&&(l=l.toLowerCase()),l}function Hu(r,l){l&&!r.j&&(Re(r),r.i=null,r.g.forEach(function(u,d){var A=d.toLowerCase();d!=A&&(wo(this,d),Io(this,A,u))},r)),r.j=l}function Xu(r,l){const u=new jt;if(c.Image){const d=new Image;d.onload=b(Pe,u,"TestLoadImage: loaded",!0,l,d),d.onerror=b(Pe,u,"TestLoadImage: error",!1,l,d),d.onabort=b(Pe,u,"TestLoadImage: abort",!1,l,d),d.ontimeout=b(Pe,u,"TestLoadImage: timeout",!1,l,d),c.setTimeout(function(){d.ontimeout&&d.ontimeout()},1e4),d.src=r}else l(!1)}function Yu(r,l){const u=new jt,d=new AbortController,A=setTimeout(()=>{d.abort(),Pe(u,"TestPingServer: timeout",!1,l)},1e4);fetch(r,{signal:d.signal}).then(C=>{clearTimeout(A),C.ok?Pe(u,"TestPingServer: ok",!0,l):Pe(u,"TestPingServer: server error",!1,l)}).catch(()=>{clearTimeout(A),Pe(u,"TestPingServer: error",!1,l)})}function Pe(r,l,u,d,A){try{A&&(A.onload=null,A.onerror=null,A.onabort=null,A.ontimeout=null),d(u)}catch{}}function Ju(){this.g=new Ur}function Zu(r,l,u){const d=u||"";try{yo(r,function(A,C){let O=A;f(A)&&(O=Ke(A)),l.push(d+C+"="+encodeURIComponent(O))})}catch(A){throw l.push(d+"type="+encodeURIComponent("_badmap")),A}}function Bs(r){this.l=r.Ub||null,this.j=r.eb||!1}N(Bs,qn),Bs.prototype.g=function(){return new qs(this.l,this.j)},Bs.prototype.i=function(r){return function(){return r}}({});function qs(r,l){At.call(this),this.D=r,this.o=l,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.u=new Headers,this.h=null,this.B="GET",this.A="",this.g=!1,this.v=this.j=this.l=null}N(qs,At),n=qs.prototype,n.open=function(r,l){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.B=r,this.A=l,this.readyState=1,Xn(this)},n.send=function(r){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const l={headers:this.u,method:this.B,credentials:this.m,cache:void 0};r&&(l.body=r),(this.D||c).fetch(new Request(this.A,l)).then(this.Sa.bind(this),this.ga.bind(this))},n.abort=function(){this.response=this.responseText="",this.u=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,Hn(this)),this.readyState=0},n.Sa=function(r){if(this.g&&(this.l=r,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=r.headers,this.readyState=2,Xn(this)),this.g&&(this.readyState=3,Xn(this),this.g)))if(this.responseType==="arraybuffer")r.arrayBuffer().then(this.Qa.bind(this),this.ga.bind(this));else if(typeof c.ReadableStream<"u"&&"body"in r){if(this.j=r.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.v=new TextDecoder;Ro(this)}else r.text().then(this.Ra.bind(this),this.ga.bind(this))};function Ro(r){r.j.read().then(r.Pa.bind(r)).catch(r.ga.bind(r))}n.Pa=function(r){if(this.g){if(this.o&&r.value)this.response.push(r.value);else if(!this.o){var l=r.value?r.value:new Uint8Array(0);(l=this.v.decode(l,{stream:!r.done}))&&(this.response=this.responseText+=l)}r.done?Hn(this):Xn(this),this.readyState==3&&Ro(this)}},n.Ra=function(r){this.g&&(this.response=this.responseText=r,Hn(this))},n.Qa=function(r){this.g&&(this.response=r,Hn(this))},n.ga=function(){this.g&&Hn(this)};function Hn(r){r.readyState=4,r.l=null,r.j=null,r.v=null,Xn(r)}n.setRequestHeader=function(r,l){this.u.append(r,l)},n.getResponseHeader=function(r){return this.h&&this.h.get(r.toLowerCase())||""},n.getAllResponseHeaders=function(){if(!this.h)return"";const r=[],l=this.h.entries();for(var u=l.next();!u.done;)u=u.value,r.push(u[0]+": "+u[1]),u=l.next();return r.join(`\r
`)};function Xn(r){r.onreadystatechange&&r.onreadystatechange.call(r)}Object.defineProperty(qs.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(r){this.m=r?"include":"same-origin"}});function Po(r){let l="";return ct(r,function(u,d){l+=d,l+=":",l+=u,l+=`\r
`}),l}function Gr(r,l,u){t:{for(d in u){var d=!1;break t}d=!0}d||(u=Po(u),typeof r=="string"?u!=null&&encodeURIComponent(String(u)):ht(r,l,u))}function gt(r){At.call(this),this.headers=new Map,this.o=r||null,this.h=!1,this.v=this.g=null,this.D="",this.m=0,this.l="",this.j=this.B=this.u=this.A=!1,this.I=null,this.H="",this.J=!1}N(gt,At);var tc=/^https?$/i,ec=["POST","PUT"];n=gt.prototype,n.Ha=function(r){this.J=r},n.ea=function(r,l,u,d){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+r);l=l?l.toUpperCase():"GET",this.D=r,this.l="",this.m=0,this.A=!1,this.h=!0,this.g=this.o?this.o.g():_n.g(),this.v=this.o?xs(this.o):xs(_n),this.g.onreadystatechange=R(this.Ea,this);try{this.B=!0,this.g.open(l,String(r),!0),this.B=!1}catch(C){Co(this,C);return}if(r=u||"",u=new Map(this.headers),d)if(Object.getPrototypeOf(d)===Object.prototype)for(var A in d)u.set(A,d[A]);else if(typeof d.keys=="function"&&typeof d.get=="function")for(const C of d.keys())u.set(C,d.get(C));else throw Error("Unknown input type for opt_headers: "+String(d));d=Array.from(u.keys()).find(C=>C.toLowerCase()=="content-type"),A=c.FormData&&r instanceof c.FormData,!(0<=Array.prototype.indexOf.call(ec,l,void 0))||d||A||u.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[C,O]of u)this.g.setRequestHeader(C,O);this.H&&(this.g.responseType=this.H),"withCredentials"in this.g&&this.g.withCredentials!==this.J&&(this.g.withCredentials=this.J);try{So(this),this.u=!0,this.g.send(r),this.u=!1}catch(C){Co(this,C)}};function Co(r,l){r.h=!1,r.g&&(r.j=!0,r.g.abort(),r.j=!1),r.l=l,r.m=5,Vo(r),js(r)}function Vo(r){r.A||(r.A=!0,bt(r,"complete"),bt(r,"error"))}n.abort=function(r){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.m=r||7,bt(this,"complete"),bt(this,"abort"),js(this))},n.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),js(this,!0)),gt.aa.N.call(this)},n.Ea=function(){this.s||(this.B||this.u||this.j?bo(this):this.bb())},n.bb=function(){bo(this)};function bo(r){if(r.h&&typeof a<"u"&&(!r.v[1]||ge(r)!=4||r.Z()!=2)){if(r.u&&ge(r)==4)Ds(r.Ea,0,r);else if(bt(r,"readystatechange"),ge(r)==4){r.h=!1;try{const O=r.Z();t:switch(O){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var l=!0;break t;default:l=!1}var u;if(!(u=l)){var d;if(d=O===0){var A=String(r.D).match(vo)[1]||null;!A&&c.self&&c.self.location&&(A=c.self.location.protocol.slice(0,-1)),d=!tc.test(A?A.toLowerCase():"")}u=d}if(u)bt(r,"complete"),bt(r,"success");else{r.m=6;try{var C=2<ge(r)?r.g.statusText:""}catch{C=""}r.l=C+" ["+r.Z()+"]",Vo(r)}}finally{js(r)}}}}function js(r,l){if(r.g){So(r);const u=r.g,d=r.v[0]?()=>{}:null;r.g=null,r.v=null,l||bt(r,"ready");try{u.onreadystatechange=d}catch{}}}function So(r){r.I&&(c.clearTimeout(r.I),r.I=null)}n.isActive=function(){return!!this.g};function ge(r){return r.g?r.g.readyState:0}n.Z=function(){try{return 2<ge(this)?this.g.status:-1}catch{return-1}},n.oa=function(){try{return this.g?this.g.responseText:""}catch{return""}},n.Oa=function(r){if(this.g){var l=this.g.responseText;return r&&l.indexOf(r)==0&&(l=l.substring(r.length)),Fr(l)}};function ko(r){try{if(!r.g)return null;if("response"in r.g)return r.g.response;switch(r.H){case"":case"text":return r.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in r.g)return r.g.mozResponseArrayBuffer}return null}catch{return null}}function nc(r){const l={};r=(r.g&&2<=ge(r)&&r.g.getAllResponseHeaders()||"").split(`\r
`);for(let d=0;d<r.length;d++){if(J(r[d]))continue;var u=E(r[d]);const A=u[0];if(u=u[1],typeof u!="string")continue;u=u.trim();const C=l[A]||[];l[A]=C,C.push(u)}v(l,function(d){return d.join(", ")})}n.Ba=function(){return this.m},n.Ka=function(){return typeof this.l=="string"?this.l:String(this.l)};function Yn(r,l,u){return u&&u.internalChannelParams&&u.internalChannelParams[r]||l}function Do(r){this.Aa=0,this.i=[],this.j=new jt,this.ia=this.qa=this.I=this.W=this.g=this.ya=this.D=this.H=this.m=this.S=this.o=null,this.Ya=this.U=0,this.Va=Yn("failFast",!1,r),this.F=this.C=this.u=this.s=this.l=null,this.X=!0,this.za=this.T=-1,this.Y=this.v=this.B=0,this.Ta=Yn("baseRetryDelayMs",5e3,r),this.cb=Yn("retryDelaySeedMs",1e4,r),this.Wa=Yn("forwardChannelMaxRetries",2,r),this.wa=Yn("forwardChannelRequestTimeoutMs",2e4,r),this.pa=r&&r.xmlHttpFactory||void 0,this.Xa=r&&r.Tb||void 0,this.Ca=r&&r.useFetchStreams||!1,this.L=void 0,this.J=r&&r.supportsCrossDomainXhr||!1,this.K="",this.h=new fo(r&&r.concurrentRequestLimit),this.Da=new Ju,this.P=r&&r.fastHandshake||!1,this.O=r&&r.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.Ua=r&&r.Rb||!1,r&&r.xa&&this.j.xa(),r&&r.forceLongPolling&&(this.X=!1),this.ba=!this.P&&this.X&&r&&r.detectBufferingProxy||!1,this.ja=void 0,r&&r.longPollingTimeout&&0<r.longPollingTimeout&&(this.ja=r.longPollingTimeout),this.ca=void 0,this.R=0,this.M=!1,this.ka=this.A=null}n=Do.prototype,n.la=8,n.G=1,n.connect=function(r,l,u,d){q(0),this.W=r,this.H=l||{},u&&d!==void 0&&(this.H.OSID=u,this.H.OAID=d),this.F=this.X,this.I=qo(this,null,this.W),zs(this)};function Qr(r){if(No(r),r.G==3){var l=r.U++,u=pe(r.I);if(ht(u,"SID",r.K),ht(u,"RID",l),ht(u,"TYPE","terminate"),Jn(r,u),l=new Ht(r,r.j,l),l.L=2,l.v=Us(pe(u)),u=!1,c.navigator&&c.navigator.sendBeacon)try{u=c.navigator.sendBeacon(l.v.toString(),"")}catch{}!u&&c.Image&&(new Image().src=l.v,u=!0),u||(l.g=jo(l.j,null),l.g.ea(l.v)),l.F=Date.now(),Ms(l)}Bo(r)}function $s(r){r.g&&(Hr(r),r.g.cancel(),r.g=null)}function No(r){$s(r),r.u&&(c.clearTimeout(r.u),r.u=null),Ks(r),r.h.cancel(),r.s&&(typeof r.s=="number"&&c.clearTimeout(r.s),r.s=null)}function zs(r){if(!mo(r.h)&&!r.s){r.s=!0;var l=r.Ga;Wt||Cs(),we||(Wt(),we=!0),Mn.add(l,r),r.B=0}}function sc(r,l){return po(r.h)>=r.h.j-(r.s?1:0)?!1:r.s?(r.i=l.D.concat(r.i),!0):r.G==1||r.G==2||r.B>=(r.Va?0:r.Wa)?!1:(r.s=x(R(r.Ga,r,l),Uo(r,r.B)),r.B++,!0)}n.Ga=function(r){if(this.s)if(this.s=null,this.G==1){if(!r){this.U=Math.floor(1e5*Math.random()),r=this.U++;const A=new Ht(this,this.j,r);let C=this.o;if(this.S&&(C?(C=m(C),y(C,this.S)):C=this.S),this.m!==null||this.O||(A.H=C,C=null),this.P)t:{for(var l=0,u=0;u<this.i.length;u++){e:{var d=this.i[u];if("__data__"in d.map&&(d=d.map.__data__,typeof d=="string")){d=d.length;break e}d=void 0}if(d===void 0)break;if(l+=d,4096<l){l=u;break t}if(l===4096||u===this.i.length-1){l=u+1;break t}}l=1e3}else l=1e3;l=Oo(this,A,l),u=pe(this.I),ht(u,"RID",r),ht(u,"CVER",22),this.D&&ht(u,"X-HTTP-Session-Id",this.D),Jn(this,u),C&&(this.O?l="headers="+encodeURIComponent(String(Po(C)))+"&"+l:this.m&&Gr(u,this.m,C)),Kr(this.h,A),this.Ua&&ht(u,"TYPE","init"),this.P?(ht(u,"$req",l),ht(u,"SID","null"),A.T=!0,qr(A,u,null)):qr(A,u,l),this.G=2}}else this.G==3&&(r?xo(this,r):this.i.length==0||mo(this.h)||xo(this))};function xo(r,l){var u;l?u=l.l:u=r.U++;const d=pe(r.I);ht(d,"SID",r.K),ht(d,"RID",u),ht(d,"AID",r.T),Jn(r,d),r.m&&r.o&&Gr(d,r.m,r.o),u=new Ht(r,r.j,u,r.B+1),r.m===null&&(u.H=r.o),l&&(r.i=l.D.concat(r.i)),l=Oo(r,u,1e3),u.I=Math.round(.5*r.wa)+Math.round(.5*r.wa*Math.random()),Kr(r.h,u),qr(u,d,l)}function Jn(r,l){r.H&&ct(r.H,function(u,d){ht(l,d,u)}),r.l&&yo({},function(u,d){ht(l,d,u)})}function Oo(r,l,u){u=Math.min(r.i.length,u);var d=r.l?R(r.l.Na,r.l,r):null;t:{var A=r.i;let C=-1;for(;;){const O=["count="+u];C==-1?0<u?(C=A[0].g,O.push("ofs="+C)):C=0:O.push("ofs="+C);let ut=!0;for(let St=0;St<u;St++){let rt=A[St].g;const Mt=A[St].map;if(rt-=C,0>rt)C=Math.max(0,A[St].g-100),ut=!1;else try{Zu(Mt,O,"req"+rt+"_")}catch{d&&d(Mt)}}if(ut){d=O.join("&");break t}}}return r=r.i.splice(0,u),l.D=r,d}function Mo(r){if(!r.g&&!r.u){r.Y=1;var l=r.Fa;Wt||Cs(),we||(Wt(),we=!0),Mn.add(l,r),r.v=0}}function Wr(r){return r.g||r.u||3<=r.v?!1:(r.Y++,r.u=x(R(r.Fa,r),Uo(r,r.v)),r.v++,!0)}n.Fa=function(){if(this.u=null,Lo(this),this.ba&&!(this.M||this.g==null||0>=this.R)){var r=2*this.R;this.j.info("BP detection timer enabled: "+r),this.A=x(R(this.ab,this),r)}},n.ab=function(){this.A&&(this.A=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.M=!0,q(10),$s(this),Lo(this))};function Hr(r){r.A!=null&&(c.clearTimeout(r.A),r.A=null)}function Lo(r){r.g=new Ht(r,r.j,"rpc",r.Y),r.m===null&&(r.g.H=r.o),r.g.O=0;var l=pe(r.qa);ht(l,"RID","rpc"),ht(l,"SID",r.K),ht(l,"AID",r.T),ht(l,"CI",r.F?"0":"1"),!r.F&&r.ja&&ht(l,"TO",r.ja),ht(l,"TYPE","xmlhttp"),Jn(r,l),r.m&&r.o&&Gr(l,r.m,r.o),r.L&&(r.g.I=r.L);var u=r.g;r=r.ia,u.L=1,u.v=Us(pe(l)),u.m=null,u.P=!0,uo(u,r)}n.Za=function(){this.C!=null&&(this.C=null,$s(this),Wr(this),q(19))};function Ks(r){r.C!=null&&(c.clearTimeout(r.C),r.C=null)}function Fo(r,l){var u=null;if(r.g==l){Ks(r),Hr(r),r.g=null;var d=2}else if(zr(r.h,l))u=l.D,go(r.h,l),d=1;else return;if(r.G!=0){if(l.o)if(d==1){u=l.m?l.m.length:0,l=Date.now()-l.F;var A=r.B;d=z(),bt(d,new Pt(d,u)),zs(r)}else Mo(r);else if(A=l.s,A==3||A==0&&0<l.X||!(d==1&&sc(r,l)||d==2&&Wr(r)))switch(u&&0<u.length&&(l=r.h,l.i=l.i.concat(u)),A){case 1:Ye(r,5);break;case 4:Ye(r,10);break;case 3:Ye(r,6);break;default:Ye(r,2)}}}function Uo(r,l){let u=r.Ta+Math.floor(Math.random()*r.cb);return r.isActive()||(u*=2),u*l}function Ye(r,l){if(r.j.info("Error code "+l),l==2){var u=R(r.fb,r),d=r.Xa;const A=!d;d=new Xe(d||"//www.google.com/images/cleardot.gif"),c.location&&c.location.protocol=="http"||Ls(d,"https"),Us(d),A?Xu(d.toString(),u):Yu(d.toString(),u)}else q(2);r.G=0,r.l&&r.l.sa(l),Bo(r),No(r)}n.fb=function(r){r?(this.j.info("Successfully pinged google.com"),q(2)):(this.j.info("Failed to ping google.com"),q(1))};function Bo(r){if(r.G=0,r.ka=[],r.l){const l=_o(r.h);(l.length!=0||r.i.length!=0)&&(D(r.ka,l),D(r.ka,r.i),r.h.i.length=0,L(r.i),r.i.length=0),r.l.ra()}}function qo(r,l,u){var d=u instanceof Xe?pe(u):new Xe(u);if(d.g!="")l&&(d.g=l+"."+d.g),Fs(d,d.s);else{var A=c.location;d=A.protocol,l=l?l+"."+A.hostname:A.hostname,A=+A.port;var C=new Xe(null);d&&Ls(C,d),l&&(C.g=l),A&&Fs(C,A),u&&(C.l=u),d=C}return u=r.D,l=r.ya,u&&l&&ht(d,u,l),ht(d,"VER",r.la),Jn(r,d),d}function jo(r,l,u){if(l&&!r.J)throw Error("Can't create secondary domain capable XhrIo object.");return l=r.Ca&&!r.pa?new gt(new Bs({eb:u})):new gt(r.pa),l.Ha(r.J),l}n.isActive=function(){return!!this.l&&this.l.isActive(this)};function $o(){}n=$o.prototype,n.ua=function(){},n.ta=function(){},n.sa=function(){},n.ra=function(){},n.isActive=function(){return!0},n.Na=function(){};function Gs(){}Gs.prototype.g=function(r,l){return new Xt(r,l)};function Xt(r,l){At.call(this),this.g=new Do(l),this.l=r,this.h=l&&l.messageUrlParams||null,r=l&&l.messageHeaders||null,l&&l.clientProtocolHeaderRequired&&(r?r["X-Client-Protocol"]="webchannel":r={"X-Client-Protocol":"webchannel"}),this.g.o=r,r=l&&l.initMessageHeaders||null,l&&l.messageContentType&&(r?r["X-WebChannel-Content-Type"]=l.messageContentType:r={"X-WebChannel-Content-Type":l.messageContentType}),l&&l.va&&(r?r["X-WebChannel-Client-Profile"]=l.va:r={"X-WebChannel-Client-Profile":l.va}),this.g.S=r,(r=l&&l.Sb)&&!J(r)&&(this.g.m=r),this.v=l&&l.supportsCrossDomainXhr||!1,this.u=l&&l.sendRawJson||!1,(l=l&&l.httpSessionIdParam)&&!J(l)&&(this.g.D=l,r=this.h,r!==null&&l in r&&(r=this.h,l in r&&delete r[l])),this.j=new vn(this)}N(Xt,At),Xt.prototype.m=function(){this.g.l=this.j,this.v&&(this.g.J=!0),this.g.connect(this.l,this.h||void 0)},Xt.prototype.close=function(){Qr(this.g)},Xt.prototype.o=function(r){var l=this.g;if(typeof r=="string"){var u={};u.__data__=r,r=u}else this.u&&(u={},u.__data__=Ke(r),r=u);l.i.push(new Bu(l.Ya++,r)),l.G==3&&zs(l)},Xt.prototype.N=function(){this.g.l=null,delete this.j,Qr(this.g),delete this.g,Xt.aa.N.call(this)};function zo(r){P.call(this),r.__headers__&&(this.headers=r.__headers__,this.statusCode=r.__status__,delete r.__headers__,delete r.__status__);var l=r.__sm__;if(l){t:{for(const u in l){r=u;break t}r=void 0}(this.i=r)&&(r=this.i,l=l!==null&&r in l?l[r]:void 0),this.data=l}else this.data=r}N(zo,P);function Ko(){T.call(this),this.status=1}N(Ko,T);function vn(r){this.g=r}N(vn,$o),vn.prototype.ua=function(){bt(this.g,"a")},vn.prototype.ta=function(r){bt(this.g,new zo(r))},vn.prototype.sa=function(r){bt(this.g,new Ko)},vn.prototype.ra=function(){bt(this.g,"b")},Gs.prototype.createWebChannel=Gs.prototype.g,Xt.prototype.send=Xt.prototype.o,Xt.prototype.open=Xt.prototype.m,Xt.prototype.close=Xt.prototype.close,rl=function(){return new Gs},sl=function(){return z()},nl=M,ri={mb:0,pb:1,qb:2,Jb:3,Ob:4,Lb:5,Mb:6,Kb:7,Ib:8,Nb:9,PROXY:10,NOPROXY:11,Gb:12,Cb:13,Db:14,Bb:15,Eb:16,Fb:17,ib:18,hb:19,jb:20},Qe.NO_ERROR=0,Qe.TIMEOUT=8,Qe.HTTP_ERROR=6,sr=Qe,$n.COMPLETE="complete",el=$n,gn.EventType=Ge,Ge.OPEN="a",Ge.CLOSE="b",Ge.ERROR="c",Ge.MESSAGE="d",At.prototype.listen=At.prototype.K,ss=gn,gt.prototype.listenOnce=gt.prototype.L,gt.prototype.getLastError=gt.prototype.Ka,gt.prototype.getLastErrorCode=gt.prototype.Ba,gt.prototype.getStatus=gt.prototype.Z,gt.prototype.getResponseJson=gt.prototype.Oa,gt.prototype.getResponseText=gt.prototype.oa,gt.prototype.send=gt.prototype.ea,gt.prototype.setWithCredentials=gt.prototype.Ha,tl=gt}).apply(typeof Xs<"u"?Xs:typeof self<"u"?self:typeof window<"u"?window:{});const Jo="@firebase/firestore";/**
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
 */class Ut{constructor(t){this.uid=t}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(t){return t.uid===this.uid}}Ut.UNAUTHENTICATED=new Ut(null),Ut.GOOGLE_CREDENTIALS=new Ut("google-credentials-uid"),Ut.FIRST_PARTY=new Ut("first-party-uid"),Ut.MOCK_USER=new Ut("mock-user");/**
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
 */let Dn="10.14.0";/**
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
 */const nn=new ic("@firebase/firestore");function es(){return nn.logLevel}function B(n,...t){if(nn.logLevel<=ke.DEBUG){const e=t.map(Ei);nn.debug(`Firestore (${Dn}): ${n}`,...e)}}function Te(n,...t){if(nn.logLevel<=ke.ERROR){const e=t.map(Ei);nn.error(`Firestore (${Dn}): ${n}`,...e)}}function Rn(n,...t){if(nn.logLevel<=ke.WARN){const e=t.map(Ei);nn.warn(`Firestore (${Dn}): ${n}`,...e)}}function Ei(n){if(typeof n=="string")return n;try{/**
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
 */function K(n="Unexpected state"){const t=`FIRESTORE (${Dn}) INTERNAL ASSERTION FAILED: `+n;throw Te(t),new Error(t)}function at(n,t){n||K()}function X(n,t){return n}/**
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
 */const S={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class F extends Ha{constructor(t,e){super(t,e),this.code=t,this.message=e,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
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
 */class xe{constructor(){this.promise=new Promise((t,e)=>{this.resolve=t,this.reject=e})}}/**
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
 */class il{constructor(t,e){this.user=e,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${t}`)}}class _c{getToken(){return Promise.resolve(null)}invalidateToken(){}start(t,e){t.enqueueRetryable(()=>e(Ut.UNAUTHENTICATED))}shutdown(){}}class yc{constructor(t){this.token=t,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(t,e){this.changeListener=e,t.enqueueRetryable(()=>e(this.token.user))}shutdown(){this.changeListener=null}}class vc{constructor(t){this.t=t,this.currentUser=Ut.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(t,e){at(this.o===void 0);let s=this.i;const i=h=>this.i!==s?(s=this.i,e(h)):Promise.resolve();let o=new xe;this.o=()=>{this.i++,this.currentUser=this.u(),o.resolve(),o=new xe,t.enqueueRetryable(()=>i(this.currentUser))};const a=()=>{const h=o;t.enqueueRetryable(async()=>{await h.promise,await i(this.currentUser)})},c=h=>{B("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=h,this.o&&(this.auth.addAuthTokenListener(this.o),a())};this.t.onInit(h=>c(h)),setTimeout(()=>{if(!this.auth){const h=this.t.getImmediate({optional:!0});h?c(h):(B("FirebaseAuthCredentialsProvider","Auth not yet detected"),o.resolve(),o=new xe)}},0),a()}getToken(){const t=this.i,e=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(e).then(s=>this.i!==t?(B("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):s?(at(typeof s.accessToken=="string"),new il(s.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const t=this.auth&&this.auth.getUid();return at(t===null||typeof t=="string"),new Ut(t)}}class Tc{constructor(t,e,s){this.l=t,this.h=e,this.P=s,this.type="FirstParty",this.user=Ut.FIRST_PARTY,this.I=new Map}T(){return this.P?this.P():null}get headers(){this.I.set("X-Goog-AuthUser",this.l);const t=this.T();return t&&this.I.set("Authorization",t),this.h&&this.I.set("X-Goog-Iam-Authorization-Token",this.h),this.I}}class Ec{constructor(t,e,s){this.l=t,this.h=e,this.P=s}getToken(){return Promise.resolve(new Tc(this.l,this.h,this.P))}start(t,e){t.enqueueRetryable(()=>e(Ut.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class wc{constructor(t){this.value=t,this.type="AppCheck",this.headers=new Map,t&&t.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class Ac{constructor(t){this.A=t,this.forceRefresh=!1,this.appCheck=null,this.R=null}start(t,e){at(this.o===void 0);const s=o=>{o.error!=null&&B("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${o.error.message}`);const a=o.token!==this.R;return this.R=o.token,B("FirebaseAppCheckTokenProvider",`Received ${a?"new":"existing"} token.`),a?e(o.token):Promise.resolve()};this.o=o=>{t.enqueueRetryable(()=>s(o))};const i=o=>{B("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=o,this.o&&this.appCheck.addTokenListener(this.o)};this.A.onInit(o=>i(o)),setTimeout(()=>{if(!this.appCheck){const o=this.A.getImmediate({optional:!0});o?i(o):B("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const t=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(t).then(e=>e?(at(typeof e.token=="string"),this.R=e.token,new wc(e.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
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
 */function Ic(n){const t=typeof self<"u"&&(self.crypto||self.msCrypto),e=new Uint8Array(n);if(t&&typeof t.getRandomValues=="function")t.getRandomValues(e);else for(let s=0;s<n;s++)e[s]=Math.floor(256*Math.random());return e}/**
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
 */class ol{static newId(){const t="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",e=Math.floor(256/t.length)*t.length;let s="";for(;s.length<20;){const i=Ic(40);for(let o=0;o<i.length;++o)s.length<20&&i[o]<e&&(s+=t.charAt(i[o]%t.length))}return s}}function it(n,t){return n<t?-1:n>t?1:0}function Pn(n,t,e){return n.length===t.length&&n.every((s,i)=>e(s,t[i]))}/**
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
 */class It{constructor(t,e){if(this.seconds=t,this.nanoseconds=e,e<0)throw new F(S.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+e);if(e>=1e9)throw new F(S.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+e);if(t<-62135596800)throw new F(S.INVALID_ARGUMENT,"Timestamp seconds out of range: "+t);if(t>=253402300800)throw new F(S.INVALID_ARGUMENT,"Timestamp seconds out of range: "+t)}static now(){return It.fromMillis(Date.now())}static fromDate(t){return It.fromMillis(t.getTime())}static fromMillis(t){const e=Math.floor(t/1e3),s=Math.floor(1e6*(t-1e3*e));return new It(e,s)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(t){return this.seconds===t.seconds?it(this.nanoseconds,t.nanoseconds):it(this.seconds,t.seconds)}isEqual(t){return t.seconds===this.seconds&&t.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const t=this.seconds- -62135596800;return String(t).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
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
 */class H{constructor(t){this.timestamp=t}static fromTimestamp(t){return new H(t)}static min(){return new H(new It(0,0))}static max(){return new H(new It(253402300799,999999999))}compareTo(t){return this.timestamp._compareTo(t.timestamp)}isEqual(t){return this.timestamp.isEqual(t.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
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
 */class ds{constructor(t,e,s){e===void 0?e=0:e>t.length&&K(),s===void 0?s=t.length-e:s>t.length-e&&K(),this.segments=t,this.offset=e,this.len=s}get length(){return this.len}isEqual(t){return ds.comparator(this,t)===0}child(t){const e=this.segments.slice(this.offset,this.limit());return t instanceof ds?t.forEach(s=>{e.push(s)}):e.push(t),this.construct(e)}limit(){return this.offset+this.length}popFirst(t){return t=t===void 0?1:t,this.construct(this.segments,this.offset+t,this.length-t)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(t){return this.segments[this.offset+t]}isEmpty(){return this.length===0}isPrefixOf(t){if(t.length<this.length)return!1;for(let e=0;e<this.length;e++)if(this.get(e)!==t.get(e))return!1;return!0}isImmediateParentOf(t){if(this.length+1!==t.length)return!1;for(let e=0;e<this.length;e++)if(this.get(e)!==t.get(e))return!1;return!0}forEach(t){for(let e=this.offset,s=this.limit();e<s;e++)t(this.segments[e])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(t,e){const s=Math.min(t.length,e.length);for(let i=0;i<s;i++){const o=t.get(i),a=e.get(i);if(o<a)return-1;if(o>a)return 1}return t.length<e.length?-1:t.length>e.length?1:0}}class dt extends ds{construct(t,e,s){return new dt(t,e,s)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...t){const e=[];for(const s of t){if(s.indexOf("//")>=0)throw new F(S.INVALID_ARGUMENT,`Invalid segment (${s}). Paths must not contain // in them.`);e.push(...s.split("/").filter(i=>i.length>0))}return new dt(e)}static emptyPath(){return new dt([])}}const Rc=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class Dt extends ds{construct(t,e,s){return new Dt(t,e,s)}static isValidIdentifier(t){return Rc.test(t)}canonicalString(){return this.toArray().map(t=>(t=t.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),Dt.isValidIdentifier(t)||(t="`"+t+"`"),t)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new Dt(["__name__"])}static fromServerFormat(t){const e=[];let s="",i=0;const o=()=>{if(s.length===0)throw new F(S.INVALID_ARGUMENT,`Invalid field path (${t}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);e.push(s),s=""};let a=!1;for(;i<t.length;){const c=t[i];if(c==="\\"){if(i+1===t.length)throw new F(S.INVALID_ARGUMENT,"Path has trailing escape character: "+t);const h=t[i+1];if(h!=="\\"&&h!=="."&&h!=="`")throw new F(S.INVALID_ARGUMENT,"Path has invalid escape sequence: "+t);s+=h,i+=2}else c==="`"?(a=!a,i++):c!=="."||a?(s+=c,i++):(o(),i++)}if(o(),a)throw new F(S.INVALID_ARGUMENT,"Unterminated ` in path: "+t);return new Dt(e)}static emptyPath(){return new Dt([])}}/**
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
 */class ${constructor(t){this.path=t}static fromPath(t){return new $(dt.fromString(t))}static fromName(t){return new $(dt.fromString(t).popFirst(5))}static empty(){return new $(dt.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(t){return this.path.length>=2&&this.path.get(this.path.length-2)===t}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(t){return t!==null&&dt.comparator(this.path,t.path)===0}toString(){return this.path.toString()}static comparator(t,e){return dt.comparator(t.path,e.path)}static isDocumentKey(t){return t.length%2==0}static fromSegments(t){return new $(new dt(t.slice()))}}function Pc(n,t){const e=n.toTimestamp().seconds,s=n.toTimestamp().nanoseconds+1,i=H.fromTimestamp(s===1e9?new It(e+1,0):new It(e,s));return new Me(i,$.empty(),t)}function Cc(n){return new Me(n.readTime,n.key,-1)}class Me{constructor(t,e,s){this.readTime=t,this.documentKey=e,this.largestBatchId=s}static min(){return new Me(H.min(),$.empty(),-1)}static max(){return new Me(H.max(),$.empty(),-1)}}function Vc(n,t){let e=n.readTime.compareTo(t.readTime);return e!==0?e:(e=$.comparator(n.documentKey,t.documentKey),e!==0?e:it(n.largestBatchId,t.largestBatchId))}/**
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
 */const bc="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class Sc{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(t){this.onCommittedListeners.push(t)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(t=>t())}}/**
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
 */async function Ts(n){if(n.code!==S.FAILED_PRECONDITION||n.message!==bc)throw n;B("LocalStore","Unexpectedly lost primary lease")}/**
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
 */class k{constructor(t){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,t(e=>{this.isDone=!0,this.result=e,this.nextCallback&&this.nextCallback(e)},e=>{this.isDone=!0,this.error=e,this.catchCallback&&this.catchCallback(e)})}catch(t){return this.next(void 0,t)}next(t,e){return this.callbackAttached&&K(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(e,this.error):this.wrapSuccess(t,this.result):new k((s,i)=>{this.nextCallback=o=>{this.wrapSuccess(t,o).next(s,i)},this.catchCallback=o=>{this.wrapFailure(e,o).next(s,i)}})}toPromise(){return new Promise((t,e)=>{this.next(t,e)})}wrapUserFunction(t){try{const e=t();return e instanceof k?e:k.resolve(e)}catch(e){return k.reject(e)}}wrapSuccess(t,e){return t?this.wrapUserFunction(()=>t(e)):k.resolve(e)}wrapFailure(t,e){return t?this.wrapUserFunction(()=>t(e)):k.reject(e)}static resolve(t){return new k((e,s)=>{e(t)})}static reject(t){return new k((e,s)=>{s(t)})}static waitFor(t){return new k((e,s)=>{let i=0,o=0,a=!1;t.forEach(c=>{++i,c.next(()=>{++o,a&&o===i&&e()},h=>s(h))}),a=!0,o===i&&e()})}static or(t){let e=k.resolve(!1);for(const s of t)e=e.next(i=>i?k.resolve(i):s());return e}static forEach(t,e){const s=[];return t.forEach((i,o)=>{s.push(e.call(this,i,o))}),this.waitFor(s)}static mapArray(t,e){return new k((s,i)=>{const o=t.length,a=new Array(o);let c=0;for(let h=0;h<o;h++){const f=h;e(t[f]).next(p=>{a[f]=p,++c,c===o&&s(a)},p=>i(p))}})}static doWhile(t,e){return new k((s,i)=>{const o=()=>{t()===!0?e().next(()=>{o()},i):s()};o()})}}function kc(n){const t=n.match(/Android ([\d.]+)/i),e=t?t[1].split(".").slice(0,2).join("."):"-1";return Number(e)}function Es(n){return n.name==="IndexedDbTransactionError"}/**
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
 */class wi{constructor(t,e){this.previousValue=t,e&&(e.sequenceNumberHandler=s=>this.ie(s),this.se=s=>e.writeSequenceNumber(s))}ie(t){return this.previousValue=Math.max(t,this.previousValue),this.previousValue}next(){const t=++this.previousValue;return this.se&&this.se(t),t}}wi.oe=-1;function _r(n){return n==null}function ur(n){return n===0&&1/n==-1/0}function Dc(n){return typeof n=="number"&&Number.isInteger(n)&&!ur(n)&&n<=Number.MAX_SAFE_INTEGER&&n>=Number.MIN_SAFE_INTEGER}/**
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
 */function Zo(n){let t=0;for(const e in n)Object.prototype.hasOwnProperty.call(n,e)&&t++;return t}function an(n,t){for(const e in n)Object.prototype.hasOwnProperty.call(n,e)&&t(e,n[e])}function al(n){for(const t in n)if(Object.prototype.hasOwnProperty.call(n,t))return!1;return!0}/**
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
 */class pt{constructor(t,e){this.comparator=t,this.root=e||kt.EMPTY}insert(t,e){return new pt(this.comparator,this.root.insert(t,e,this.comparator).copy(null,null,kt.BLACK,null,null))}remove(t){return new pt(this.comparator,this.root.remove(t,this.comparator).copy(null,null,kt.BLACK,null,null))}get(t){let e=this.root;for(;!e.isEmpty();){const s=this.comparator(t,e.key);if(s===0)return e.value;s<0?e=e.left:s>0&&(e=e.right)}return null}indexOf(t){let e=0,s=this.root;for(;!s.isEmpty();){const i=this.comparator(t,s.key);if(i===0)return e+s.left.size;i<0?s=s.left:(e+=s.left.size+1,s=s.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(t){return this.root.inorderTraversal(t)}forEach(t){this.inorderTraversal((e,s)=>(t(e,s),!1))}toString(){const t=[];return this.inorderTraversal((e,s)=>(t.push(`${e}:${s}`),!1)),`{${t.join(", ")}}`}reverseTraversal(t){return this.root.reverseTraversal(t)}getIterator(){return new Ys(this.root,null,this.comparator,!1)}getIteratorFrom(t){return new Ys(this.root,t,this.comparator,!1)}getReverseIterator(){return new Ys(this.root,null,this.comparator,!0)}getReverseIteratorFrom(t){return new Ys(this.root,t,this.comparator,!0)}}class Ys{constructor(t,e,s,i){this.isReverse=i,this.nodeStack=[];let o=1;for(;!t.isEmpty();)if(o=e?s(t.key,e):1,e&&i&&(o*=-1),o<0)t=this.isReverse?t.left:t.right;else{if(o===0){this.nodeStack.push(t);break}this.nodeStack.push(t),t=this.isReverse?t.right:t.left}}getNext(){let t=this.nodeStack.pop();const e={key:t.key,value:t.value};if(this.isReverse)for(t=t.left;!t.isEmpty();)this.nodeStack.push(t),t=t.right;else for(t=t.right;!t.isEmpty();)this.nodeStack.push(t),t=t.left;return e}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const t=this.nodeStack[this.nodeStack.length-1];return{key:t.key,value:t.value}}}class kt{constructor(t,e,s,i,o){this.key=t,this.value=e,this.color=s??kt.RED,this.left=i??kt.EMPTY,this.right=o??kt.EMPTY,this.size=this.left.size+1+this.right.size}copy(t,e,s,i,o){return new kt(t??this.key,e??this.value,s??this.color,i??this.left,o??this.right)}isEmpty(){return!1}inorderTraversal(t){return this.left.inorderTraversal(t)||t(this.key,this.value)||this.right.inorderTraversal(t)}reverseTraversal(t){return this.right.reverseTraversal(t)||t(this.key,this.value)||this.left.reverseTraversal(t)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(t,e,s){let i=this;const o=s(t,i.key);return i=o<0?i.copy(null,null,null,i.left.insert(t,e,s),null):o===0?i.copy(null,e,null,null,null):i.copy(null,null,null,null,i.right.insert(t,e,s)),i.fixUp()}removeMin(){if(this.left.isEmpty())return kt.EMPTY;let t=this;return t.left.isRed()||t.left.left.isRed()||(t=t.moveRedLeft()),t=t.copy(null,null,null,t.left.removeMin(),null),t.fixUp()}remove(t,e){let s,i=this;if(e(t,i.key)<0)i.left.isEmpty()||i.left.isRed()||i.left.left.isRed()||(i=i.moveRedLeft()),i=i.copy(null,null,null,i.left.remove(t,e),null);else{if(i.left.isRed()&&(i=i.rotateRight()),i.right.isEmpty()||i.right.isRed()||i.right.left.isRed()||(i=i.moveRedRight()),e(t,i.key)===0){if(i.right.isEmpty())return kt.EMPTY;s=i.right.min(),i=i.copy(s.key,s.value,null,null,i.right.removeMin())}i=i.copy(null,null,null,null,i.right.remove(t,e))}return i.fixUp()}isRed(){return this.color}fixUp(){let t=this;return t.right.isRed()&&!t.left.isRed()&&(t=t.rotateLeft()),t.left.isRed()&&t.left.left.isRed()&&(t=t.rotateRight()),t.left.isRed()&&t.right.isRed()&&(t=t.colorFlip()),t}moveRedLeft(){let t=this.colorFlip();return t.right.left.isRed()&&(t=t.copy(null,null,null,null,t.right.rotateRight()),t=t.rotateLeft(),t=t.colorFlip()),t}moveRedRight(){let t=this.colorFlip();return t.left.left.isRed()&&(t=t.rotateRight(),t=t.colorFlip()),t}rotateLeft(){const t=this.copy(null,null,kt.RED,null,this.right.left);return this.right.copy(null,null,this.color,t,null)}rotateRight(){const t=this.copy(null,null,kt.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,t)}colorFlip(){const t=this.left.copy(null,null,!this.left.color,null,null),e=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,t,e)}checkMaxDepth(){const t=this.check();return Math.pow(2,t)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw K();const t=this.left.check();if(t!==this.right.check())throw K();return t+(this.isRed()?0:1)}}kt.EMPTY=null,kt.RED=!0,kt.BLACK=!1;kt.EMPTY=new class{constructor(){this.size=0}get key(){throw K()}get value(){throw K()}get color(){throw K()}get left(){throw K()}get right(){throw K()}copy(t,e,s,i,o){return this}insert(t,e,s){return new kt(t,e)}remove(t,e){return this}isEmpty(){return!0}inorderTraversal(t){return!1}reverseTraversal(t){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
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
 */class Nt{constructor(t){this.comparator=t,this.data=new pt(this.comparator)}has(t){return this.data.get(t)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(t){return this.data.indexOf(t)}forEach(t){this.data.inorderTraversal((e,s)=>(t(e),!1))}forEachInRange(t,e){const s=this.data.getIteratorFrom(t[0]);for(;s.hasNext();){const i=s.getNext();if(this.comparator(i.key,t[1])>=0)return;e(i.key)}}forEachWhile(t,e){let s;for(s=e!==void 0?this.data.getIteratorFrom(e):this.data.getIterator();s.hasNext();)if(!t(s.getNext().key))return}firstAfterOrEqual(t){const e=this.data.getIteratorFrom(t);return e.hasNext()?e.getNext().key:null}getIterator(){return new ta(this.data.getIterator())}getIteratorFrom(t){return new ta(this.data.getIteratorFrom(t))}add(t){return this.copy(this.data.remove(t).insert(t,!0))}delete(t){return this.has(t)?this.copy(this.data.remove(t)):this}isEmpty(){return this.data.isEmpty()}unionWith(t){let e=this;return e.size<t.size&&(e=t,t=this),t.forEach(s=>{e=e.add(s)}),e}isEqual(t){if(!(t instanceof Nt)||this.size!==t.size)return!1;const e=this.data.getIterator(),s=t.data.getIterator();for(;e.hasNext();){const i=e.getNext().key,o=s.getNext().key;if(this.comparator(i,o)!==0)return!1}return!0}toArray(){const t=[];return this.forEach(e=>{t.push(e)}),t}toString(){const t=[];return this.forEach(e=>t.push(e)),"SortedSet("+t.toString()+")"}copy(t){const e=new Nt(this.comparator);return e.data=t,e}}class ta{constructor(t){this.iter=t}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
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
 */class Yt{constructor(t){this.fields=t,t.sort(Dt.comparator)}static empty(){return new Yt([])}unionWith(t){let e=new Nt(Dt.comparator);for(const s of this.fields)e=e.add(s);for(const s of t)e=e.add(s);return new Yt(e.toArray())}covers(t){for(const e of this.fields)if(e.isPrefixOf(t))return!0;return!1}isEqual(t){return Pn(this.fields,t.fields,(e,s)=>e.isEqual(s))}}/**
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
 */class xt{constructor(t){this.binaryString=t}static fromBase64String(t){const e=function(i){try{return atob(i)}catch(o){throw typeof DOMException<"u"&&o instanceof DOMException?new ll("Invalid base64 string: "+o):o}}(t);return new xt(e)}static fromUint8Array(t){const e=function(i){let o="";for(let a=0;a<i.length;++a)o+=String.fromCharCode(i[a]);return o}(t);return new xt(e)}[Symbol.iterator](){let t=0;return{next:()=>t<this.binaryString.length?{value:this.binaryString.charCodeAt(t++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(e){return btoa(e)}(this.binaryString)}toUint8Array(){return function(e){const s=new Uint8Array(e.length);for(let i=0;i<e.length;i++)s[i]=e.charCodeAt(i);return s}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(t){return it(this.binaryString,t.binaryString)}isEqual(t){return this.binaryString===t.binaryString}}xt.EMPTY_BYTE_STRING=new xt("");const Nc=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function Le(n){if(at(!!n),typeof n=="string"){let t=0;const e=Nc.exec(n);if(at(!!e),e[1]){let i=e[1];i=(i+"000000000").substr(0,9),t=Number(i)}const s=new Date(n);return{seconds:Math.floor(s.getTime()/1e3),nanos:t}}return{seconds:Tt(n.seconds),nanos:Tt(n.nanos)}}function Tt(n){return typeof n=="number"?n:typeof n=="string"?Number(n):0}function sn(n){return typeof n=="string"?xt.fromBase64String(n):xt.fromUint8Array(n)}/**
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
 */function Ai(n){var t,e;return((e=(((t=n==null?void 0:n.mapValue)===null||t===void 0?void 0:t.fields)||{}).__type__)===null||e===void 0?void 0:e.stringValue)==="server_timestamp"}function Ii(n){const t=n.mapValue.fields.__previous_value__;return Ai(t)?Ii(t):t}function fs(n){const t=Le(n.mapValue.fields.__local_write_time__.timestampValue);return new It(t.seconds,t.nanos)}/**
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
 */class xc{constructor(t,e,s,i,o,a,c,h,f){this.databaseId=t,this.appId=e,this.persistenceKey=s,this.host=i,this.ssl=o,this.forceLongPolling=a,this.autoDetectLongPolling=c,this.longPollingOptions=h,this.useFetchStreams=f}}class ms{constructor(t,e){this.projectId=t,this.database=e||"(default)"}static empty(){return new ms("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(t){return t instanceof ms&&t.projectId===this.projectId&&t.database===this.database}}/**
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
 */const Js={mapValue:{}};function rn(n){return"nullValue"in n?0:"booleanValue"in n?1:"integerValue"in n||"doubleValue"in n?2:"timestampValue"in n?3:"stringValue"in n?5:"bytesValue"in n?6:"referenceValue"in n?7:"geoPointValue"in n?8:"arrayValue"in n?9:"mapValue"in n?Ai(n)?4:Mc(n)?9007199254740991:Oc(n)?10:11:K()}function de(n,t){if(n===t)return!0;const e=rn(n);if(e!==rn(t))return!1;switch(e){case 0:case 9007199254740991:return!0;case 1:return n.booleanValue===t.booleanValue;case 4:return fs(n).isEqual(fs(t));case 3:return function(i,o){if(typeof i.timestampValue=="string"&&typeof o.timestampValue=="string"&&i.timestampValue.length===o.timestampValue.length)return i.timestampValue===o.timestampValue;const a=Le(i.timestampValue),c=Le(o.timestampValue);return a.seconds===c.seconds&&a.nanos===c.nanos}(n,t);case 5:return n.stringValue===t.stringValue;case 6:return function(i,o){return sn(i.bytesValue).isEqual(sn(o.bytesValue))}(n,t);case 7:return n.referenceValue===t.referenceValue;case 8:return function(i,o){return Tt(i.geoPointValue.latitude)===Tt(o.geoPointValue.latitude)&&Tt(i.geoPointValue.longitude)===Tt(o.geoPointValue.longitude)}(n,t);case 2:return function(i,o){if("integerValue"in i&&"integerValue"in o)return Tt(i.integerValue)===Tt(o.integerValue);if("doubleValue"in i&&"doubleValue"in o){const a=Tt(i.doubleValue),c=Tt(o.doubleValue);return a===c?ur(a)===ur(c):isNaN(a)&&isNaN(c)}return!1}(n,t);case 9:return Pn(n.arrayValue.values||[],t.arrayValue.values||[],de);case 10:case 11:return function(i,o){const a=i.mapValue.fields||{},c=o.mapValue.fields||{};if(Zo(a)!==Zo(c))return!1;for(const h in a)if(a.hasOwnProperty(h)&&(c[h]===void 0||!de(a[h],c[h])))return!1;return!0}(n,t);default:return K()}}function ps(n,t){return(n.values||[]).find(e=>de(e,t))!==void 0}function Cn(n,t){if(n===t)return 0;const e=rn(n),s=rn(t);if(e!==s)return it(e,s);switch(e){case 0:case 9007199254740991:return 0;case 1:return it(n.booleanValue,t.booleanValue);case 2:return function(o,a){const c=Tt(o.integerValue||o.doubleValue),h=Tt(a.integerValue||a.doubleValue);return c<h?-1:c>h?1:c===h?0:isNaN(c)?isNaN(h)?0:-1:1}(n,t);case 3:return ea(n.timestampValue,t.timestampValue);case 4:return ea(fs(n),fs(t));case 5:return it(n.stringValue,t.stringValue);case 6:return function(o,a){const c=sn(o),h=sn(a);return c.compareTo(h)}(n.bytesValue,t.bytesValue);case 7:return function(o,a){const c=o.split("/"),h=a.split("/");for(let f=0;f<c.length&&f<h.length;f++){const p=it(c[f],h[f]);if(p!==0)return p}return it(c.length,h.length)}(n.referenceValue,t.referenceValue);case 8:return function(o,a){const c=it(Tt(o.latitude),Tt(a.latitude));return c!==0?c:it(Tt(o.longitude),Tt(a.longitude))}(n.geoPointValue,t.geoPointValue);case 9:return na(n.arrayValue,t.arrayValue);case 10:return function(o,a){var c,h,f,p;const w=o.fields||{},R=a.fields||{},b=(c=w.value)===null||c===void 0?void 0:c.arrayValue,N=(h=R.value)===null||h===void 0?void 0:h.arrayValue,L=it(((f=b==null?void 0:b.values)===null||f===void 0?void 0:f.length)||0,((p=N==null?void 0:N.values)===null||p===void 0?void 0:p.length)||0);return L!==0?L:na(b,N)}(n.mapValue,t.mapValue);case 11:return function(o,a){if(o===Js.mapValue&&a===Js.mapValue)return 0;if(o===Js.mapValue)return 1;if(a===Js.mapValue)return-1;const c=o.fields||{},h=Object.keys(c),f=a.fields||{},p=Object.keys(f);h.sort(),p.sort();for(let w=0;w<h.length&&w<p.length;++w){const R=it(h[w],p[w]);if(R!==0)return R;const b=Cn(c[h[w]],f[p[w]]);if(b!==0)return b}return it(h.length,p.length)}(n.mapValue,t.mapValue);default:throw K()}}function ea(n,t){if(typeof n=="string"&&typeof t=="string"&&n.length===t.length)return it(n,t);const e=Le(n),s=Le(t),i=it(e.seconds,s.seconds);return i!==0?i:it(e.nanos,s.nanos)}function na(n,t){const e=n.values||[],s=t.values||[];for(let i=0;i<e.length&&i<s.length;++i){const o=Cn(e[i],s[i]);if(o)return o}return it(e.length,s.length)}function Vn(n){return ii(n)}function ii(n){return"nullValue"in n?"null":"booleanValue"in n?""+n.booleanValue:"integerValue"in n?""+n.integerValue:"doubleValue"in n?""+n.doubleValue:"timestampValue"in n?function(e){const s=Le(e);return`time(${s.seconds},${s.nanos})`}(n.timestampValue):"stringValue"in n?n.stringValue:"bytesValue"in n?function(e){return sn(e).toBase64()}(n.bytesValue):"referenceValue"in n?function(e){return $.fromName(e).toString()}(n.referenceValue):"geoPointValue"in n?function(e){return`geo(${e.latitude},${e.longitude})`}(n.geoPointValue):"arrayValue"in n?function(e){let s="[",i=!0;for(const o of e.values||[])i?i=!1:s+=",",s+=ii(o);return s+"]"}(n.arrayValue):"mapValue"in n?function(e){const s=Object.keys(e.fields||{}).sort();let i="{",o=!0;for(const a of s)o?o=!1:i+=",",i+=`${a}:${ii(e.fields[a])}`;return i+"}"}(n.mapValue):K()}function sa(n,t){return{referenceValue:`projects/${n.projectId}/databases/${n.database}/documents/${t.path.canonicalString()}`}}function oi(n){return!!n&&"integerValue"in n}function Ri(n){return!!n&&"arrayValue"in n}function ra(n){return!!n&&"nullValue"in n}function ia(n){return!!n&&"doubleValue"in n&&isNaN(Number(n.doubleValue))}function rr(n){return!!n&&"mapValue"in n}function Oc(n){var t,e;return((e=(((t=n==null?void 0:n.mapValue)===null||t===void 0?void 0:t.fields)||{}).__type__)===null||e===void 0?void 0:e.stringValue)==="__vector__"}function as(n){if(n.geoPointValue)return{geoPointValue:Object.assign({},n.geoPointValue)};if(n.timestampValue&&typeof n.timestampValue=="object")return{timestampValue:Object.assign({},n.timestampValue)};if(n.mapValue){const t={mapValue:{fields:{}}};return an(n.mapValue.fields,(e,s)=>t.mapValue.fields[e]=as(s)),t}if(n.arrayValue){const t={arrayValue:{values:[]}};for(let e=0;e<(n.arrayValue.values||[]).length;++e)t.arrayValue.values[e]=as(n.arrayValue.values[e]);return t}return Object.assign({},n)}function Mc(n){return(((n.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}/**
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
 */class Gt{constructor(t){this.value=t}static empty(){return new Gt({mapValue:{}})}field(t){if(t.isEmpty())return this.value;{let e=this.value;for(let s=0;s<t.length-1;++s)if(e=(e.mapValue.fields||{})[t.get(s)],!rr(e))return null;return e=(e.mapValue.fields||{})[t.lastSegment()],e||null}}set(t,e){this.getFieldsMap(t.popLast())[t.lastSegment()]=as(e)}setAll(t){let e=Dt.emptyPath(),s={},i=[];t.forEach((a,c)=>{if(!e.isImmediateParentOf(c)){const h=this.getFieldsMap(e);this.applyChanges(h,s,i),s={},i=[],e=c.popLast()}a?s[c.lastSegment()]=as(a):i.push(c.lastSegment())});const o=this.getFieldsMap(e);this.applyChanges(o,s,i)}delete(t){const e=this.field(t.popLast());rr(e)&&e.mapValue.fields&&delete e.mapValue.fields[t.lastSegment()]}isEqual(t){return de(this.value,t.value)}getFieldsMap(t){let e=this.value;e.mapValue.fields||(e.mapValue={fields:{}});for(let s=0;s<t.length;++s){let i=e.mapValue.fields[t.get(s)];rr(i)&&i.mapValue.fields||(i={mapValue:{fields:{}}},e.mapValue.fields[t.get(s)]=i),e=i}return e.mapValue.fields}applyChanges(t,e,s){an(e,(i,o)=>t[i]=o);for(const i of s)delete t[i]}clone(){return new Gt(as(this.value))}}function ul(n){const t=[];return an(n.fields,(e,s)=>{const i=new Dt([e]);if(rr(s)){const o=ul(s.mapValue).fields;if(o.length===0)t.push(i);else for(const a of o)t.push(i.child(a))}else t.push(i)}),new Yt(t)}/**
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
 */class Bt{constructor(t,e,s,i,o,a,c){this.key=t,this.documentType=e,this.version=s,this.readTime=i,this.createTime=o,this.data=a,this.documentState=c}static newInvalidDocument(t){return new Bt(t,0,H.min(),H.min(),H.min(),Gt.empty(),0)}static newFoundDocument(t,e,s,i){return new Bt(t,1,e,H.min(),s,i,0)}static newNoDocument(t,e){return new Bt(t,2,e,H.min(),H.min(),Gt.empty(),0)}static newUnknownDocument(t,e){return new Bt(t,3,e,H.min(),H.min(),Gt.empty(),2)}convertToFoundDocument(t,e){return!this.createTime.isEqual(H.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=t),this.version=t,this.documentType=1,this.data=e,this.documentState=0,this}convertToNoDocument(t){return this.version=t,this.documentType=2,this.data=Gt.empty(),this.documentState=0,this}convertToUnknownDocument(t){return this.version=t,this.documentType=3,this.data=Gt.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=H.min(),this}setReadTime(t){return this.readTime=t,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(t){return t instanceof Bt&&this.key.isEqual(t.key)&&this.version.isEqual(t.version)&&this.documentType===t.documentType&&this.documentState===t.documentState&&this.data.isEqual(t.data)}mutableCopy(){return new Bt(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
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
 */class cr{constructor(t,e){this.position=t,this.inclusive=e}}function oa(n,t,e){let s=0;for(let i=0;i<n.position.length;i++){const o=t[i],a=n.position[i];if(o.field.isKeyField()?s=$.comparator($.fromName(a.referenceValue),e.key):s=Cn(a,e.data.field(o.field)),o.dir==="desc"&&(s*=-1),s!==0)break}return s}function aa(n,t){if(n===null)return t===null;if(t===null||n.inclusive!==t.inclusive||n.position.length!==t.position.length)return!1;for(let e=0;e<n.position.length;e++)if(!de(n.position[e],t.position[e]))return!1;return!0}/**
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
 */class gs{constructor(t,e="asc"){this.field=t,this.dir=e}}function Lc(n,t){return n.dir===t.dir&&n.field.isEqual(t.field)}/**
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
 */class cl{}class wt extends cl{constructor(t,e,s){super(),this.field=t,this.op=e,this.value=s}static create(t,e,s){return t.isKeyField()?e==="in"||e==="not-in"?this.createKeyFieldInFilter(t,e,s):new Uc(t,e,s):e==="array-contains"?new jc(t,s):e==="in"?new $c(t,s):e==="not-in"?new zc(t,s):e==="array-contains-any"?new Kc(t,s):new wt(t,e,s)}static createKeyFieldInFilter(t,e,s){return e==="in"?new Bc(t,s):new qc(t,s)}matches(t){const e=t.data.field(this.field);return this.op==="!="?e!==null&&this.matchesComparison(Cn(e,this.value)):e!==null&&rn(this.value)===rn(e)&&this.matchesComparison(Cn(e,this.value))}matchesComparison(t){switch(this.op){case"<":return t<0;case"<=":return t<=0;case"==":return t===0;case"!=":return t!==0;case">":return t>0;case">=":return t>=0;default:return K()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class se extends cl{constructor(t,e){super(),this.filters=t,this.op=e,this.ae=null}static create(t,e){return new se(t,e)}matches(t){return hl(this)?this.filters.find(e=>!e.matches(t))===void 0:this.filters.find(e=>e.matches(t))!==void 0}getFlattenedFilters(){return this.ae!==null||(this.ae=this.filters.reduce((t,e)=>t.concat(e.getFlattenedFilters()),[])),this.ae}getFilters(){return Object.assign([],this.filters)}}function hl(n){return n.op==="and"}function dl(n){return Fc(n)&&hl(n)}function Fc(n){for(const t of n.filters)if(t instanceof se)return!1;return!0}function ai(n){if(n instanceof wt)return n.field.canonicalString()+n.op.toString()+Vn(n.value);if(dl(n))return n.filters.map(t=>ai(t)).join(",");{const t=n.filters.map(e=>ai(e)).join(",");return`${n.op}(${t})`}}function fl(n,t){return n instanceof wt?function(s,i){return i instanceof wt&&s.op===i.op&&s.field.isEqual(i.field)&&de(s.value,i.value)}(n,t):n instanceof se?function(s,i){return i instanceof se&&s.op===i.op&&s.filters.length===i.filters.length?s.filters.reduce((o,a,c)=>o&&fl(a,i.filters[c]),!0):!1}(n,t):void K()}function ml(n){return n instanceof wt?function(e){return`${e.field.canonicalString()} ${e.op} ${Vn(e.value)}`}(n):n instanceof se?function(e){return e.op.toString()+" {"+e.getFilters().map(ml).join(" ,")+"}"}(n):"Filter"}class Uc extends wt{constructor(t,e,s){super(t,e,s),this.key=$.fromName(s.referenceValue)}matches(t){const e=$.comparator(t.key,this.key);return this.matchesComparison(e)}}class Bc extends wt{constructor(t,e){super(t,"in",e),this.keys=pl("in",e)}matches(t){return this.keys.some(e=>e.isEqual(t.key))}}class qc extends wt{constructor(t,e){super(t,"not-in",e),this.keys=pl("not-in",e)}matches(t){return!this.keys.some(e=>e.isEqual(t.key))}}function pl(n,t){var e;return(((e=t.arrayValue)===null||e===void 0?void 0:e.values)||[]).map(s=>$.fromName(s.referenceValue))}class jc extends wt{constructor(t,e){super(t,"array-contains",e)}matches(t){const e=t.data.field(this.field);return Ri(e)&&ps(e.arrayValue,this.value)}}class $c extends wt{constructor(t,e){super(t,"in",e)}matches(t){const e=t.data.field(this.field);return e!==null&&ps(this.value.arrayValue,e)}}class zc extends wt{constructor(t,e){super(t,"not-in",e)}matches(t){if(ps(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const e=t.data.field(this.field);return e!==null&&!ps(this.value.arrayValue,e)}}class Kc extends wt{constructor(t,e){super(t,"array-contains-any",e)}matches(t){const e=t.data.field(this.field);return!(!Ri(e)||!e.arrayValue.values)&&e.arrayValue.values.some(s=>ps(this.value.arrayValue,s))}}/**
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
 */class Gc{constructor(t,e=null,s=[],i=[],o=null,a=null,c=null){this.path=t,this.collectionGroup=e,this.orderBy=s,this.filters=i,this.limit=o,this.startAt=a,this.endAt=c,this.ue=null}}function la(n,t=null,e=[],s=[],i=null,o=null,a=null){return new Gc(n,t,e,s,i,o,a)}function Pi(n){const t=X(n);if(t.ue===null){let e=t.path.canonicalString();t.collectionGroup!==null&&(e+="|cg:"+t.collectionGroup),e+="|f:",e+=t.filters.map(s=>ai(s)).join(","),e+="|ob:",e+=t.orderBy.map(s=>function(o){return o.field.canonicalString()+o.dir}(s)).join(","),_r(t.limit)||(e+="|l:",e+=t.limit),t.startAt&&(e+="|lb:",e+=t.startAt.inclusive?"b:":"a:",e+=t.startAt.position.map(s=>Vn(s)).join(",")),t.endAt&&(e+="|ub:",e+=t.endAt.inclusive?"a:":"b:",e+=t.endAt.position.map(s=>Vn(s)).join(",")),t.ue=e}return t.ue}function Ci(n,t){if(n.limit!==t.limit||n.orderBy.length!==t.orderBy.length)return!1;for(let e=0;e<n.orderBy.length;e++)if(!Lc(n.orderBy[e],t.orderBy[e]))return!1;if(n.filters.length!==t.filters.length)return!1;for(let e=0;e<n.filters.length;e++)if(!fl(n.filters[e],t.filters[e]))return!1;return n.collectionGroup===t.collectionGroup&&!!n.path.isEqual(t.path)&&!!aa(n.startAt,t.startAt)&&aa(n.endAt,t.endAt)}function li(n){return $.isDocumentKey(n.path)&&n.collectionGroup===null&&n.filters.length===0}/**
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
 */class Nn{constructor(t,e=null,s=[],i=[],o=null,a="F",c=null,h=null){this.path=t,this.collectionGroup=e,this.explicitOrderBy=s,this.filters=i,this.limit=o,this.limitType=a,this.startAt=c,this.endAt=h,this.ce=null,this.le=null,this.he=null,this.startAt,this.endAt}}function Qc(n,t,e,s,i,o,a,c){return new Nn(n,t,e,s,i,o,a,c)}function yr(n){return new Nn(n)}function ua(n){return n.filters.length===0&&n.limit===null&&n.startAt==null&&n.endAt==null&&(n.explicitOrderBy.length===0||n.explicitOrderBy.length===1&&n.explicitOrderBy[0].field.isKeyField())}function gl(n){return n.collectionGroup!==null}function ls(n){const t=X(n);if(t.ce===null){t.ce=[];const e=new Set;for(const o of t.explicitOrderBy)t.ce.push(o),e.add(o.field.canonicalString());const s=t.explicitOrderBy.length>0?t.explicitOrderBy[t.explicitOrderBy.length-1].dir:"asc";(function(a){let c=new Nt(Dt.comparator);return a.filters.forEach(h=>{h.getFlattenedFilters().forEach(f=>{f.isInequality()&&(c=c.add(f.field))})}),c})(t).forEach(o=>{e.has(o.canonicalString())||o.isKeyField()||t.ce.push(new gs(o,s))}),e.has(Dt.keyField().canonicalString())||t.ce.push(new gs(Dt.keyField(),s))}return t.ce}function ce(n){const t=X(n);return t.le||(t.le=Wc(t,ls(n))),t.le}function Wc(n,t){if(n.limitType==="F")return la(n.path,n.collectionGroup,t,n.filters,n.limit,n.startAt,n.endAt);{t=t.map(i=>{const o=i.dir==="desc"?"asc":"desc";return new gs(i.field,o)});const e=n.endAt?new cr(n.endAt.position,n.endAt.inclusive):null,s=n.startAt?new cr(n.startAt.position,n.startAt.inclusive):null;return la(n.path,n.collectionGroup,t,n.filters,n.limit,e,s)}}function ui(n,t){const e=n.filters.concat([t]);return new Nn(n.path,n.collectionGroup,n.explicitOrderBy.slice(),e,n.limit,n.limitType,n.startAt,n.endAt)}function hr(n,t,e){return new Nn(n.path,n.collectionGroup,n.explicitOrderBy.slice(),n.filters.slice(),t,e,n.startAt,n.endAt)}function vr(n,t){return Ci(ce(n),ce(t))&&n.limitType===t.limitType}function _l(n){return`${Pi(ce(n))}|lt:${n.limitType}`}function En(n){return`Query(target=${function(e){let s=e.path.canonicalString();return e.collectionGroup!==null&&(s+=" collectionGroup="+e.collectionGroup),e.filters.length>0&&(s+=`, filters: [${e.filters.map(i=>ml(i)).join(", ")}]`),_r(e.limit)||(s+=", limit: "+e.limit),e.orderBy.length>0&&(s+=`, orderBy: [${e.orderBy.map(i=>function(a){return`${a.field.canonicalString()} (${a.dir})`}(i)).join(", ")}]`),e.startAt&&(s+=", startAt: ",s+=e.startAt.inclusive?"b:":"a:",s+=e.startAt.position.map(i=>Vn(i)).join(",")),e.endAt&&(s+=", endAt: ",s+=e.endAt.inclusive?"a:":"b:",s+=e.endAt.position.map(i=>Vn(i)).join(",")),`Target(${s})`}(ce(n))}; limitType=${n.limitType})`}function Tr(n,t){return t.isFoundDocument()&&function(s,i){const o=i.key.path;return s.collectionGroup!==null?i.key.hasCollectionId(s.collectionGroup)&&s.path.isPrefixOf(o):$.isDocumentKey(s.path)?s.path.isEqual(o):s.path.isImmediateParentOf(o)}(n,t)&&function(s,i){for(const o of ls(s))if(!o.field.isKeyField()&&i.data.field(o.field)===null)return!1;return!0}(n,t)&&function(s,i){for(const o of s.filters)if(!o.matches(i))return!1;return!0}(n,t)&&function(s,i){return!(s.startAt&&!function(a,c,h){const f=oa(a,c,h);return a.inclusive?f<=0:f<0}(s.startAt,ls(s),i)||s.endAt&&!function(a,c,h){const f=oa(a,c,h);return a.inclusive?f>=0:f>0}(s.endAt,ls(s),i))}(n,t)}function Hc(n){return n.collectionGroup||(n.path.length%2==1?n.path.lastSegment():n.path.get(n.path.length-2))}function yl(n){return(t,e)=>{let s=!1;for(const i of ls(n)){const o=Xc(i,t,e);if(o!==0)return o;s=s||i.field.isKeyField()}return 0}}function Xc(n,t,e){const s=n.field.isKeyField()?$.comparator(t.key,e.key):function(o,a,c){const h=a.data.field(o),f=c.data.field(o);return h!==null&&f!==null?Cn(h,f):K()}(n.field,t,e);switch(n.dir){case"asc":return s;case"desc":return-1*s;default:return K()}}/**
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
 */class xn{constructor(t,e){this.mapKeyFn=t,this.equalsFn=e,this.inner={},this.innerSize=0}get(t){const e=this.mapKeyFn(t),s=this.inner[e];if(s!==void 0){for(const[i,o]of s)if(this.equalsFn(i,t))return o}}has(t){return this.get(t)!==void 0}set(t,e){const s=this.mapKeyFn(t),i=this.inner[s];if(i===void 0)return this.inner[s]=[[t,e]],void this.innerSize++;for(let o=0;o<i.length;o++)if(this.equalsFn(i[o][0],t))return void(i[o]=[t,e]);i.push([t,e]),this.innerSize++}delete(t){const e=this.mapKeyFn(t),s=this.inner[e];if(s===void 0)return!1;for(let i=0;i<s.length;i++)if(this.equalsFn(s[i][0],t))return s.length===1?delete this.inner[e]:s.splice(i,1),this.innerSize--,!0;return!1}forEach(t){an(this.inner,(e,s)=>{for(const[i,o]of s)t(i,o)})}isEmpty(){return al(this.inner)}size(){return this.innerSize}}/**
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
 */const Yc=new pt($.comparator);function Ee(){return Yc}const vl=new pt($.comparator);function rs(...n){let t=vl;for(const e of n)t=t.insert(e.key,e);return t}function Tl(n){let t=vl;return n.forEach((e,s)=>t=t.insert(e,s.overlayedDocument)),t}function Ze(){return us()}function El(){return us()}function us(){return new xn(n=>n.toString(),(n,t)=>n.isEqual(t))}const Jc=new pt($.comparator),Zc=new Nt($.comparator);function et(...n){let t=Zc;for(const e of n)t=t.add(e);return t}const th=new Nt(it);function eh(){return th}/**
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
 */function Vi(n,t){if(n.useProto3Json){if(isNaN(t))return{doubleValue:"NaN"};if(t===1/0)return{doubleValue:"Infinity"};if(t===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:ur(t)?"-0":t}}function wl(n){return{integerValue:""+n}}function nh(n,t){return Dc(t)?wl(t):Vi(n,t)}/**
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
 */class Er{constructor(){this._=void 0}}function sh(n,t,e){return n instanceof _s?function(i,o){const a={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:i.seconds,nanos:i.nanoseconds}}}};return o&&Ai(o)&&(o=Ii(o)),o&&(a.fields.__previous_value__=o),{mapValue:a}}(e,t):n instanceof ys?Il(n,t):n instanceof vs?Rl(n,t):function(i,o){const a=Al(i,o),c=ca(a)+ca(i.Pe);return oi(a)&&oi(i.Pe)?wl(c):Vi(i.serializer,c)}(n,t)}function rh(n,t,e){return n instanceof ys?Il(n,t):n instanceof vs?Rl(n,t):e}function Al(n,t){return n instanceof dr?function(s){return oi(s)||function(o){return!!o&&"doubleValue"in o}(s)}(t)?t:{integerValue:0}:null}class _s extends Er{}class ys extends Er{constructor(t){super(),this.elements=t}}function Il(n,t){const e=Pl(t);for(const s of n.elements)e.some(i=>de(i,s))||e.push(s);return{arrayValue:{values:e}}}class vs extends Er{constructor(t){super(),this.elements=t}}function Rl(n,t){let e=Pl(t);for(const s of n.elements)e=e.filter(i=>!de(i,s));return{arrayValue:{values:e}}}class dr extends Er{constructor(t,e){super(),this.serializer=t,this.Pe=e}}function ca(n){return Tt(n.integerValue||n.doubleValue)}function Pl(n){return Ri(n)&&n.arrayValue.values?n.arrayValue.values.slice():[]}/**
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
 */class ih{constructor(t,e){this.field=t,this.transform=e}}function oh(n,t){return n.field.isEqual(t.field)&&function(s,i){return s instanceof ys&&i instanceof ys||s instanceof vs&&i instanceof vs?Pn(s.elements,i.elements,de):s instanceof dr&&i instanceof dr?de(s.Pe,i.Pe):s instanceof _s&&i instanceof _s}(n.transform,t.transform)}class ah{constructor(t,e){this.version=t,this.transformResults=e}}class Zt{constructor(t,e){this.updateTime=t,this.exists=e}static none(){return new Zt}static exists(t){return new Zt(void 0,t)}static updateTime(t){return new Zt(t)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(t){return this.exists===t.exists&&(this.updateTime?!!t.updateTime&&this.updateTime.isEqual(t.updateTime):!t.updateTime)}}function ir(n,t){return n.updateTime!==void 0?t.isFoundDocument()&&t.version.isEqual(n.updateTime):n.exists===void 0||n.exists===t.isFoundDocument()}class wr{}function Cl(n,t){if(!n.hasLocalMutations||t&&t.fields.length===0)return null;if(t===null)return n.isNoDocument()?new bi(n.key,Zt.none()):new ws(n.key,n.data,Zt.none());{const e=n.data,s=Gt.empty();let i=new Nt(Dt.comparator);for(let o of t.fields)if(!i.has(o)){let a=e.field(o);a===null&&o.length>1&&(o=o.popLast(),a=e.field(o)),a===null?s.delete(o):s.set(o,a),i=i.add(o)}return new Be(n.key,s,new Yt(i.toArray()),Zt.none())}}function lh(n,t,e){n instanceof ws?function(i,o,a){const c=i.value.clone(),h=da(i.fieldTransforms,o,a.transformResults);c.setAll(h),o.convertToFoundDocument(a.version,c).setHasCommittedMutations()}(n,t,e):n instanceof Be?function(i,o,a){if(!ir(i.precondition,o))return void o.convertToUnknownDocument(a.version);const c=da(i.fieldTransforms,o,a.transformResults),h=o.data;h.setAll(Vl(i)),h.setAll(c),o.convertToFoundDocument(a.version,h).setHasCommittedMutations()}(n,t,e):function(i,o,a){o.convertToNoDocument(a.version).setHasCommittedMutations()}(0,t,e)}function cs(n,t,e,s){return n instanceof ws?function(o,a,c,h){if(!ir(o.precondition,a))return c;const f=o.value.clone(),p=fa(o.fieldTransforms,h,a);return f.setAll(p),a.convertToFoundDocument(a.version,f).setHasLocalMutations(),null}(n,t,e,s):n instanceof Be?function(o,a,c,h){if(!ir(o.precondition,a))return c;const f=fa(o.fieldTransforms,h,a),p=a.data;return p.setAll(Vl(o)),p.setAll(f),a.convertToFoundDocument(a.version,p).setHasLocalMutations(),c===null?null:c.unionWith(o.fieldMask.fields).unionWith(o.fieldTransforms.map(w=>w.field))}(n,t,e,s):function(o,a,c){return ir(o.precondition,a)?(a.convertToNoDocument(a.version).setHasLocalMutations(),null):c}(n,t,e)}function uh(n,t){let e=null;for(const s of n.fieldTransforms){const i=t.data.field(s.field),o=Al(s.transform,i||null);o!=null&&(e===null&&(e=Gt.empty()),e.set(s.field,o))}return e||null}function ha(n,t){return n.type===t.type&&!!n.key.isEqual(t.key)&&!!n.precondition.isEqual(t.precondition)&&!!function(s,i){return s===void 0&&i===void 0||!(!s||!i)&&Pn(s,i,(o,a)=>oh(o,a))}(n.fieldTransforms,t.fieldTransforms)&&(n.type===0?n.value.isEqual(t.value):n.type!==1||n.data.isEqual(t.data)&&n.fieldMask.isEqual(t.fieldMask))}class ws extends wr{constructor(t,e,s,i=[]){super(),this.key=t,this.value=e,this.precondition=s,this.fieldTransforms=i,this.type=0}getFieldMask(){return null}}class Be extends wr{constructor(t,e,s,i,o=[]){super(),this.key=t,this.data=e,this.fieldMask=s,this.precondition=i,this.fieldTransforms=o,this.type=1}getFieldMask(){return this.fieldMask}}function Vl(n){const t=new Map;return n.fieldMask.fields.forEach(e=>{if(!e.isEmpty()){const s=n.data.field(e);t.set(e,s)}}),t}function da(n,t,e){const s=new Map;at(n.length===e.length);for(let i=0;i<e.length;i++){const o=n[i],a=o.transform,c=t.data.field(o.field);s.set(o.field,rh(a,c,e[i]))}return s}function fa(n,t,e){const s=new Map;for(const i of n){const o=i.transform,a=e.data.field(i.field);s.set(i.field,sh(o,a,t))}return s}class bi extends wr{constructor(t,e){super(),this.key=t,this.precondition=e,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class ch extends wr{constructor(t,e){super(),this.key=t,this.precondition=e,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
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
 */class hh{constructor(t,e,s,i){this.batchId=t,this.localWriteTime=e,this.baseMutations=s,this.mutations=i}applyToRemoteDocument(t,e){const s=e.mutationResults;for(let i=0;i<this.mutations.length;i++){const o=this.mutations[i];o.key.isEqual(t.key)&&lh(o,t,s[i])}}applyToLocalView(t,e){for(const s of this.baseMutations)s.key.isEqual(t.key)&&(e=cs(s,t,e,this.localWriteTime));for(const s of this.mutations)s.key.isEqual(t.key)&&(e=cs(s,t,e,this.localWriteTime));return e}applyToLocalDocumentSet(t,e){const s=El();return this.mutations.forEach(i=>{const o=t.get(i.key),a=o.overlayedDocument;let c=this.applyToLocalView(a,o.mutatedFields);c=e.has(i.key)?null:c;const h=Cl(a,c);h!==null&&s.set(i.key,h),a.isValidDocument()||a.convertToNoDocument(H.min())}),s}keys(){return this.mutations.reduce((t,e)=>t.add(e.key),et())}isEqual(t){return this.batchId===t.batchId&&Pn(this.mutations,t.mutations,(e,s)=>ha(e,s))&&Pn(this.baseMutations,t.baseMutations,(e,s)=>ha(e,s))}}class Si{constructor(t,e,s,i){this.batch=t,this.commitVersion=e,this.mutationResults=s,this.docVersions=i}static from(t,e,s){at(t.mutations.length===s.length);let i=function(){return Jc}();const o=t.mutations;for(let a=0;a<o.length;a++)i=i.insert(o[a].key,s[a].version);return new Si(t,e,s,i)}}/**
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
 */class dh{constructor(t,e){this.largestBatchId=t,this.mutation=e}getKey(){return this.mutation.key}isEqual(t){return t!==null&&this.mutation===t.mutation}toString(){return`Overlay{
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
 */class fh{constructor(t,e){this.count=t,this.unchangedNames=e}}/**
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
 */var Et,nt;function mh(n){switch(n){default:return K();case S.CANCELLED:case S.UNKNOWN:case S.DEADLINE_EXCEEDED:case S.RESOURCE_EXHAUSTED:case S.INTERNAL:case S.UNAVAILABLE:case S.UNAUTHENTICATED:return!1;case S.INVALID_ARGUMENT:case S.NOT_FOUND:case S.ALREADY_EXISTS:case S.PERMISSION_DENIED:case S.FAILED_PRECONDITION:case S.ABORTED:case S.OUT_OF_RANGE:case S.UNIMPLEMENTED:case S.DATA_LOSS:return!0}}function bl(n){if(n===void 0)return Te("GRPC error has no .code"),S.UNKNOWN;switch(n){case Et.OK:return S.OK;case Et.CANCELLED:return S.CANCELLED;case Et.UNKNOWN:return S.UNKNOWN;case Et.DEADLINE_EXCEEDED:return S.DEADLINE_EXCEEDED;case Et.RESOURCE_EXHAUSTED:return S.RESOURCE_EXHAUSTED;case Et.INTERNAL:return S.INTERNAL;case Et.UNAVAILABLE:return S.UNAVAILABLE;case Et.UNAUTHENTICATED:return S.UNAUTHENTICATED;case Et.INVALID_ARGUMENT:return S.INVALID_ARGUMENT;case Et.NOT_FOUND:return S.NOT_FOUND;case Et.ALREADY_EXISTS:return S.ALREADY_EXISTS;case Et.PERMISSION_DENIED:return S.PERMISSION_DENIED;case Et.FAILED_PRECONDITION:return S.FAILED_PRECONDITION;case Et.ABORTED:return S.ABORTED;case Et.OUT_OF_RANGE:return S.OUT_OF_RANGE;case Et.UNIMPLEMENTED:return S.UNIMPLEMENTED;case Et.DATA_LOSS:return S.DATA_LOSS;default:return K()}}(nt=Et||(Et={}))[nt.OK=0]="OK",nt[nt.CANCELLED=1]="CANCELLED",nt[nt.UNKNOWN=2]="UNKNOWN",nt[nt.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",nt[nt.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",nt[nt.NOT_FOUND=5]="NOT_FOUND",nt[nt.ALREADY_EXISTS=6]="ALREADY_EXISTS",nt[nt.PERMISSION_DENIED=7]="PERMISSION_DENIED",nt[nt.UNAUTHENTICATED=16]="UNAUTHENTICATED",nt[nt.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",nt[nt.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",nt[nt.ABORTED=10]="ABORTED",nt[nt.OUT_OF_RANGE=11]="OUT_OF_RANGE",nt[nt.UNIMPLEMENTED=12]="UNIMPLEMENTED",nt[nt.INTERNAL=13]="INTERNAL",nt[nt.UNAVAILABLE=14]="UNAVAILABLE",nt[nt.DATA_LOSS=15]="DATA_LOSS";/**
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
 */function ph(){return new TextEncoder}/**
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
 */const gh=new tn([4294967295,4294967295],0);function ma(n){const t=ph().encode(n),e=new Za;return e.update(t),new Uint8Array(e.digest())}function pa(n){const t=new DataView(n.buffer),e=t.getUint32(0,!0),s=t.getUint32(4,!0),i=t.getUint32(8,!0),o=t.getUint32(12,!0);return[new tn([e,s],0),new tn([i,o],0)]}class ki{constructor(t,e,s){if(this.bitmap=t,this.padding=e,this.hashCount=s,e<0||e>=8)throw new is(`Invalid padding: ${e}`);if(s<0)throw new is(`Invalid hash count: ${s}`);if(t.length>0&&this.hashCount===0)throw new is(`Invalid hash count: ${s}`);if(t.length===0&&e!==0)throw new is(`Invalid padding when bitmap length is 0: ${e}`);this.Ie=8*t.length-e,this.Te=tn.fromNumber(this.Ie)}Ee(t,e,s){let i=t.add(e.multiply(tn.fromNumber(s)));return i.compare(gh)===1&&(i=new tn([i.getBits(0),i.getBits(1)],0)),i.modulo(this.Te).toNumber()}de(t){return(this.bitmap[Math.floor(t/8)]&1<<t%8)!=0}mightContain(t){if(this.Ie===0)return!1;const e=ma(t),[s,i]=pa(e);for(let o=0;o<this.hashCount;o++){const a=this.Ee(s,i,o);if(!this.de(a))return!1}return!0}static create(t,e,s){const i=t%8==0?0:8-t%8,o=new Uint8Array(Math.ceil(t/8)),a=new ki(o,i,e);return s.forEach(c=>a.insert(c)),a}insert(t){if(this.Ie===0)return;const e=ma(t),[s,i]=pa(e);for(let o=0;o<this.hashCount;o++){const a=this.Ee(s,i,o);this.Ae(a)}}Ae(t){const e=Math.floor(t/8),s=t%8;this.bitmap[e]|=1<<s}}class is extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
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
 */class Ar{constructor(t,e,s,i,o){this.snapshotVersion=t,this.targetChanges=e,this.targetMismatches=s,this.documentUpdates=i,this.resolvedLimboDocuments=o}static createSynthesizedRemoteEventForCurrentChange(t,e,s){const i=new Map;return i.set(t,As.createSynthesizedTargetChangeForCurrentChange(t,e,s)),new Ar(H.min(),i,new pt(it),Ee(),et())}}class As{constructor(t,e,s,i,o){this.resumeToken=t,this.current=e,this.addedDocuments=s,this.modifiedDocuments=i,this.removedDocuments=o}static createSynthesizedTargetChangeForCurrentChange(t,e,s){return new As(s,e,et(),et(),et())}}/**
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
 */class or{constructor(t,e,s,i){this.Re=t,this.removedTargetIds=e,this.key=s,this.Ve=i}}class Sl{constructor(t,e){this.targetId=t,this.me=e}}class kl{constructor(t,e,s=xt.EMPTY_BYTE_STRING,i=null){this.state=t,this.targetIds=e,this.resumeToken=s,this.cause=i}}class ga{constructor(){this.fe=0,this.ge=ya(),this.pe=xt.EMPTY_BYTE_STRING,this.ye=!1,this.we=!0}get current(){return this.ye}get resumeToken(){return this.pe}get Se(){return this.fe!==0}get be(){return this.we}De(t){t.approximateByteSize()>0&&(this.we=!0,this.pe=t)}ve(){let t=et(),e=et(),s=et();return this.ge.forEach((i,o)=>{switch(o){case 0:t=t.add(i);break;case 2:e=e.add(i);break;case 1:s=s.add(i);break;default:K()}}),new As(this.pe,this.ye,t,e,s)}Ce(){this.we=!1,this.ge=ya()}Fe(t,e){this.we=!0,this.ge=this.ge.insert(t,e)}Me(t){this.we=!0,this.ge=this.ge.remove(t)}xe(){this.fe+=1}Oe(){this.fe-=1,at(this.fe>=0)}Ne(){this.we=!0,this.ye=!0}}class _h{constructor(t){this.Le=t,this.Be=new Map,this.ke=Ee(),this.qe=_a(),this.Qe=new pt(it)}Ke(t){for(const e of t.Re)t.Ve&&t.Ve.isFoundDocument()?this.$e(e,t.Ve):this.Ue(e,t.key,t.Ve);for(const e of t.removedTargetIds)this.Ue(e,t.key,t.Ve)}We(t){this.forEachTarget(t,e=>{const s=this.Ge(e);switch(t.state){case 0:this.ze(e)&&s.De(t.resumeToken);break;case 1:s.Oe(),s.Se||s.Ce(),s.De(t.resumeToken);break;case 2:s.Oe(),s.Se||this.removeTarget(e);break;case 3:this.ze(e)&&(s.Ne(),s.De(t.resumeToken));break;case 4:this.ze(e)&&(this.je(e),s.De(t.resumeToken));break;default:K()}})}forEachTarget(t,e){t.targetIds.length>0?t.targetIds.forEach(e):this.Be.forEach((s,i)=>{this.ze(i)&&e(i)})}He(t){const e=t.targetId,s=t.me.count,i=this.Je(e);if(i){const o=i.target;if(li(o))if(s===0){const a=new $(o.path);this.Ue(e,a,Bt.newNoDocument(a,H.min()))}else at(s===1);else{const a=this.Ye(e);if(a!==s){const c=this.Ze(t),h=c?this.Xe(c,t,a):1;if(h!==0){this.je(e);const f=h===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Qe=this.Qe.insert(e,f)}}}}}Ze(t){const e=t.me.unchangedNames;if(!e||!e.bits)return null;const{bits:{bitmap:s="",padding:i=0},hashCount:o=0}=e;let a,c;try{a=sn(s).toUint8Array()}catch(h){if(h instanceof ll)return Rn("Decoding the base64 bloom filter in existence filter failed ("+h.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw h}try{c=new ki(a,i,o)}catch(h){return Rn(h instanceof is?"BloomFilter error: ":"Applying bloom filter failed: ",h),null}return c.Ie===0?null:c}Xe(t,e,s){return e.me.count===s-this.nt(t,e.targetId)?0:2}nt(t,e){const s=this.Le.getRemoteKeysForTarget(e);let i=0;return s.forEach(o=>{const a=this.Le.tt(),c=`projects/${a.projectId}/databases/${a.database}/documents/${o.path.canonicalString()}`;t.mightContain(c)||(this.Ue(e,o,null),i++)}),i}rt(t){const e=new Map;this.Be.forEach((o,a)=>{const c=this.Je(a);if(c){if(o.current&&li(c.target)){const h=new $(c.target.path);this.ke.get(h)!==null||this.it(a,h)||this.Ue(a,h,Bt.newNoDocument(h,t))}o.be&&(e.set(a,o.ve()),o.Ce())}});let s=et();this.qe.forEach((o,a)=>{let c=!0;a.forEachWhile(h=>{const f=this.Je(h);return!f||f.purpose==="TargetPurposeLimboResolution"||(c=!1,!1)}),c&&(s=s.add(o))}),this.ke.forEach((o,a)=>a.setReadTime(t));const i=new Ar(t,e,this.Qe,this.ke,s);return this.ke=Ee(),this.qe=_a(),this.Qe=new pt(it),i}$e(t,e){if(!this.ze(t))return;const s=this.it(t,e.key)?2:0;this.Ge(t).Fe(e.key,s),this.ke=this.ke.insert(e.key,e),this.qe=this.qe.insert(e.key,this.st(e.key).add(t))}Ue(t,e,s){if(!this.ze(t))return;const i=this.Ge(t);this.it(t,e)?i.Fe(e,1):i.Me(e),this.qe=this.qe.insert(e,this.st(e).delete(t)),s&&(this.ke=this.ke.insert(e,s))}removeTarget(t){this.Be.delete(t)}Ye(t){const e=this.Ge(t).ve();return this.Le.getRemoteKeysForTarget(t).size+e.addedDocuments.size-e.removedDocuments.size}xe(t){this.Ge(t).xe()}Ge(t){let e=this.Be.get(t);return e||(e=new ga,this.Be.set(t,e)),e}st(t){let e=this.qe.get(t);return e||(e=new Nt(it),this.qe=this.qe.insert(t,e)),e}ze(t){const e=this.Je(t)!==null;return e||B("WatchChangeAggregator","Detected inactive target",t),e}Je(t){const e=this.Be.get(t);return e&&e.Se?null:this.Le.ot(t)}je(t){this.Be.set(t,new ga),this.Le.getRemoteKeysForTarget(t).forEach(e=>{this.Ue(t,e,null)})}it(t,e){return this.Le.getRemoteKeysForTarget(t).has(e)}}function _a(){return new pt($.comparator)}function ya(){return new pt($.comparator)}const yh={asc:"ASCENDING",desc:"DESCENDING"},vh={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},Th={and:"AND",or:"OR"};class Eh{constructor(t,e){this.databaseId=t,this.useProto3Json=e}}function ci(n,t){return n.useProto3Json||_r(t)?t:{value:t}}function fr(n,t){return n.useProto3Json?`${new Date(1e3*t.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+t.nanoseconds).slice(-9)}Z`:{seconds:""+t.seconds,nanos:t.nanoseconds}}function Dl(n,t){return n.useProto3Json?t.toBase64():t.toUint8Array()}function wh(n,t){return fr(n,t.toTimestamp())}function he(n){return at(!!n),H.fromTimestamp(function(e){const s=Le(e);return new It(s.seconds,s.nanos)}(n))}function Di(n,t){return hi(n,t).canonicalString()}function hi(n,t){const e=function(i){return new dt(["projects",i.projectId,"databases",i.database])}(n).child("documents");return t===void 0?e:e.child(t)}function Nl(n){const t=dt.fromString(n);return at(Fl(t)),t}function di(n,t){return Di(n.databaseId,t.path)}function Jr(n,t){const e=Nl(t);if(e.get(1)!==n.databaseId.projectId)throw new F(S.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+e.get(1)+" vs "+n.databaseId.projectId);if(e.get(3)!==n.databaseId.database)throw new F(S.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+e.get(3)+" vs "+n.databaseId.database);return new $(Ol(e))}function xl(n,t){return Di(n.databaseId,t)}function Ah(n){const t=Nl(n);return t.length===4?dt.emptyPath():Ol(t)}function fi(n){return new dt(["projects",n.databaseId.projectId,"databases",n.databaseId.database]).canonicalString()}function Ol(n){return at(n.length>4&&n.get(4)==="documents"),n.popFirst(5)}function va(n,t,e){return{name:di(n,t),fields:e.value.mapValue.fields}}function Ih(n,t){let e;if("targetChange"in t){t.targetChange;const s=function(f){return f==="NO_CHANGE"?0:f==="ADD"?1:f==="REMOVE"?2:f==="CURRENT"?3:f==="RESET"?4:K()}(t.targetChange.targetChangeType||"NO_CHANGE"),i=t.targetChange.targetIds||[],o=function(f,p){return f.useProto3Json?(at(p===void 0||typeof p=="string"),xt.fromBase64String(p||"")):(at(p===void 0||p instanceof Buffer||p instanceof Uint8Array),xt.fromUint8Array(p||new Uint8Array))}(n,t.targetChange.resumeToken),a=t.targetChange.cause,c=a&&function(f){const p=f.code===void 0?S.UNKNOWN:bl(f.code);return new F(p,f.message||"")}(a);e=new kl(s,i,o,c||null)}else if("documentChange"in t){t.documentChange;const s=t.documentChange;s.document,s.document.name,s.document.updateTime;const i=Jr(n,s.document.name),o=he(s.document.updateTime),a=s.document.createTime?he(s.document.createTime):H.min(),c=new Gt({mapValue:{fields:s.document.fields}}),h=Bt.newFoundDocument(i,o,a,c),f=s.targetIds||[],p=s.removedTargetIds||[];e=new or(f,p,h.key,h)}else if("documentDelete"in t){t.documentDelete;const s=t.documentDelete;s.document;const i=Jr(n,s.document),o=s.readTime?he(s.readTime):H.min(),a=Bt.newNoDocument(i,o),c=s.removedTargetIds||[];e=new or([],c,a.key,a)}else if("documentRemove"in t){t.documentRemove;const s=t.documentRemove;s.document;const i=Jr(n,s.document),o=s.removedTargetIds||[];e=new or([],o,i,null)}else{if(!("filter"in t))return K();{t.filter;const s=t.filter;s.targetId;const{count:i=0,unchangedNames:o}=s,a=new fh(i,o),c=s.targetId;e=new Sl(c,a)}}return e}function Rh(n,t){let e;if(t instanceof ws)e={update:va(n,t.key,t.value)};else if(t instanceof bi)e={delete:di(n,t.key)};else if(t instanceof Be)e={update:va(n,t.key,t.data),updateMask:xh(t.fieldMask)};else{if(!(t instanceof ch))return K();e={verify:di(n,t.key)}}return t.fieldTransforms.length>0&&(e.updateTransforms=t.fieldTransforms.map(s=>function(o,a){const c=a.transform;if(c instanceof _s)return{fieldPath:a.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(c instanceof ys)return{fieldPath:a.field.canonicalString(),appendMissingElements:{values:c.elements}};if(c instanceof vs)return{fieldPath:a.field.canonicalString(),removeAllFromArray:{values:c.elements}};if(c instanceof dr)return{fieldPath:a.field.canonicalString(),increment:c.Pe};throw K()}(0,s))),t.precondition.isNone||(e.currentDocument=function(i,o){return o.updateTime!==void 0?{updateTime:wh(i,o.updateTime)}:o.exists!==void 0?{exists:o.exists}:K()}(n,t.precondition)),e}function Ph(n,t){return n&&n.length>0?(at(t!==void 0),n.map(e=>function(i,o){let a=i.updateTime?he(i.updateTime):he(o);return a.isEqual(H.min())&&(a=he(o)),new ah(a,i.transformResults||[])}(e,t))):[]}function Ch(n,t){return{documents:[xl(n,t.path)]}}function Vh(n,t){const e={structuredQuery:{}},s=t.path;let i;t.collectionGroup!==null?(i=s,e.structuredQuery.from=[{collectionId:t.collectionGroup,allDescendants:!0}]):(i=s.popLast(),e.structuredQuery.from=[{collectionId:s.lastSegment()}]),e.parent=xl(n,i);const o=function(f){if(f.length!==0)return Ll(se.create(f,"and"))}(t.filters);o&&(e.structuredQuery.where=o);const a=function(f){if(f.length!==0)return f.map(p=>function(R){return{field:wn(R.field),direction:kh(R.dir)}}(p))}(t.orderBy);a&&(e.structuredQuery.orderBy=a);const c=ci(n,t.limit);return c!==null&&(e.structuredQuery.limit=c),t.startAt&&(e.structuredQuery.startAt=function(f){return{before:f.inclusive,values:f.position}}(t.startAt)),t.endAt&&(e.structuredQuery.endAt=function(f){return{before:!f.inclusive,values:f.position}}(t.endAt)),{_t:e,parent:i}}function bh(n){let t=Ah(n.parent);const e=n.structuredQuery,s=e.from?e.from.length:0;let i=null;if(s>0){at(s===1);const p=e.from[0];p.allDescendants?i=p.collectionId:t=t.child(p.collectionId)}let o=[];e.where&&(o=function(w){const R=Ml(w);return R instanceof se&&dl(R)?R.getFilters():[R]}(e.where));let a=[];e.orderBy&&(a=function(w){return w.map(R=>function(N){return new gs(An(N.field),function(D){switch(D){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(N.direction))}(R))}(e.orderBy));let c=null;e.limit&&(c=function(w){let R;return R=typeof w=="object"?w.value:w,_r(R)?null:R}(e.limit));let h=null;e.startAt&&(h=function(w){const R=!!w.before,b=w.values||[];return new cr(b,R)}(e.startAt));let f=null;return e.endAt&&(f=function(w){const R=!w.before,b=w.values||[];return new cr(b,R)}(e.endAt)),Qc(t,i,a,o,c,"F",h,f)}function Sh(n,t){const e=function(i){switch(i){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return K()}}(t.purpose);return e==null?null:{"goog-listen-tags":e}}function Ml(n){return n.unaryFilter!==void 0?function(e){switch(e.unaryFilter.op){case"IS_NAN":const s=An(e.unaryFilter.field);return wt.create(s,"==",{doubleValue:NaN});case"IS_NULL":const i=An(e.unaryFilter.field);return wt.create(i,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const o=An(e.unaryFilter.field);return wt.create(o,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const a=An(e.unaryFilter.field);return wt.create(a,"!=",{nullValue:"NULL_VALUE"});default:return K()}}(n):n.fieldFilter!==void 0?function(e){return wt.create(An(e.fieldFilter.field),function(i){switch(i){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return K()}}(e.fieldFilter.op),e.fieldFilter.value)}(n):n.compositeFilter!==void 0?function(e){return se.create(e.compositeFilter.filters.map(s=>Ml(s)),function(i){switch(i){case"AND":return"and";case"OR":return"or";default:return K()}}(e.compositeFilter.op))}(n):K()}function kh(n){return yh[n]}function Dh(n){return vh[n]}function Nh(n){return Th[n]}function wn(n){return{fieldPath:n.canonicalString()}}function An(n){return Dt.fromServerFormat(n.fieldPath)}function Ll(n){return n instanceof wt?function(e){if(e.op==="=="){if(ia(e.value))return{unaryFilter:{field:wn(e.field),op:"IS_NAN"}};if(ra(e.value))return{unaryFilter:{field:wn(e.field),op:"IS_NULL"}}}else if(e.op==="!="){if(ia(e.value))return{unaryFilter:{field:wn(e.field),op:"IS_NOT_NAN"}};if(ra(e.value))return{unaryFilter:{field:wn(e.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:wn(e.field),op:Dh(e.op),value:e.value}}}(n):n instanceof se?function(e){const s=e.getFilters().map(i=>Ll(i));return s.length===1?s[0]:{compositeFilter:{op:Nh(e.op),filters:s}}}(n):K()}function xh(n){const t=[];return n.fields.forEach(e=>t.push(e.canonicalString())),{fieldPaths:t}}function Fl(n){return n.length>=4&&n.get(0)==="projects"&&n.get(2)==="databases"}/**
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
 */class Ne{constructor(t,e,s,i,o=H.min(),a=H.min(),c=xt.EMPTY_BYTE_STRING,h=null){this.target=t,this.targetId=e,this.purpose=s,this.sequenceNumber=i,this.snapshotVersion=o,this.lastLimboFreeSnapshotVersion=a,this.resumeToken=c,this.expectedCount=h}withSequenceNumber(t){return new Ne(this.target,this.targetId,this.purpose,t,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(t,e){return new Ne(this.target,this.targetId,this.purpose,this.sequenceNumber,e,this.lastLimboFreeSnapshotVersion,t,null)}withExpectedCount(t){return new Ne(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,t)}withLastLimboFreeSnapshotVersion(t){return new Ne(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,t,this.resumeToken,this.expectedCount)}}/**
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
 */class Oh{constructor(t){this.ct=t}}function Mh(n){const t=bh({parent:n.parent,structuredQuery:n.structuredQuery});return n.limitType==="LAST"?hr(t,t.limit,"L"):t}/**
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
 */class Lh{constructor(){this.un=new Fh}addToCollectionParentIndex(t,e){return this.un.add(e),k.resolve()}getCollectionParents(t,e){return k.resolve(this.un.getEntries(e))}addFieldIndex(t,e){return k.resolve()}deleteFieldIndex(t,e){return k.resolve()}deleteAllFieldIndexes(t){return k.resolve()}createTargetIndexes(t,e){return k.resolve()}getDocumentsMatchingTarget(t,e){return k.resolve(null)}getIndexType(t,e){return k.resolve(0)}getFieldIndexes(t,e){return k.resolve([])}getNextCollectionGroupToUpdate(t){return k.resolve(null)}getMinOffset(t,e){return k.resolve(Me.min())}getMinOffsetFromCollectionGroup(t,e){return k.resolve(Me.min())}updateCollectionGroup(t,e,s){return k.resolve()}updateIndexEntries(t,e){return k.resolve()}}class Fh{constructor(){this.index={}}add(t){const e=t.lastSegment(),s=t.popLast(),i=this.index[e]||new Nt(dt.comparator),o=!i.has(s);return this.index[e]=i.add(s),o}has(t){const e=t.lastSegment(),s=t.popLast(),i=this.index[e];return i&&i.has(s)}getEntries(t){return(this.index[t]||new Nt(dt.comparator)).toArray()}}/**
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
 */class bn{constructor(t){this.Ln=t}next(){return this.Ln+=2,this.Ln}static Bn(){return new bn(0)}static kn(){return new bn(-1)}}/**
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
 */class Uh{constructor(){this.changes=new xn(t=>t.toString(),(t,e)=>t.isEqual(e)),this.changesApplied=!1}addEntry(t){this.assertNotApplied(),this.changes.set(t.key,t)}removeEntry(t,e){this.assertNotApplied(),this.changes.set(t,Bt.newInvalidDocument(t).setReadTime(e))}getEntry(t,e){this.assertNotApplied();const s=this.changes.get(e);return s!==void 0?k.resolve(s):this.getFromCache(t,e)}getEntries(t,e){return this.getAllFromCache(t,e)}apply(t){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(t)}assertNotApplied(){}}/**
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
 */class Bh{constructor(t,e){this.overlayedDocument=t,this.mutatedFields=e}}/**
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
 */class qh{constructor(t,e,s,i){this.remoteDocumentCache=t,this.mutationQueue=e,this.documentOverlayCache=s,this.indexManager=i}getDocument(t,e){let s=null;return this.documentOverlayCache.getOverlay(t,e).next(i=>(s=i,this.remoteDocumentCache.getEntry(t,e))).next(i=>(s!==null&&cs(s.mutation,i,Yt.empty(),It.now()),i))}getDocuments(t,e){return this.remoteDocumentCache.getEntries(t,e).next(s=>this.getLocalViewOfDocuments(t,s,et()).next(()=>s))}getLocalViewOfDocuments(t,e,s=et()){const i=Ze();return this.populateOverlays(t,i,e).next(()=>this.computeViews(t,e,i,s).next(o=>{let a=rs();return o.forEach((c,h)=>{a=a.insert(c,h.overlayedDocument)}),a}))}getOverlayedDocuments(t,e){const s=Ze();return this.populateOverlays(t,s,e).next(()=>this.computeViews(t,e,s,et()))}populateOverlays(t,e,s){const i=[];return s.forEach(o=>{e.has(o)||i.push(o)}),this.documentOverlayCache.getOverlays(t,i).next(o=>{o.forEach((a,c)=>{e.set(a,c)})})}computeViews(t,e,s,i){let o=Ee();const a=us(),c=function(){return us()}();return e.forEach((h,f)=>{const p=s.get(f.key);i.has(f.key)&&(p===void 0||p.mutation instanceof Be)?o=o.insert(f.key,f):p!==void 0?(a.set(f.key,p.mutation.getFieldMask()),cs(p.mutation,f,p.mutation.getFieldMask(),It.now())):a.set(f.key,Yt.empty())}),this.recalculateAndSaveOverlays(t,o).next(h=>(h.forEach((f,p)=>a.set(f,p)),e.forEach((f,p)=>{var w;return c.set(f,new Bh(p,(w=a.get(f))!==null&&w!==void 0?w:null))}),c))}recalculateAndSaveOverlays(t,e){const s=us();let i=new pt((a,c)=>a-c),o=et();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(t,e).next(a=>{for(const c of a)c.keys().forEach(h=>{const f=e.get(h);if(f===null)return;let p=s.get(h)||Yt.empty();p=c.applyToLocalView(f,p),s.set(h,p);const w=(i.get(c.batchId)||et()).add(h);i=i.insert(c.batchId,w)})}).next(()=>{const a=[],c=i.getReverseIterator();for(;c.hasNext();){const h=c.getNext(),f=h.key,p=h.value,w=El();p.forEach(R=>{if(!o.has(R)){const b=Cl(e.get(R),s.get(R));b!==null&&w.set(R,b),o=o.add(R)}}),a.push(this.documentOverlayCache.saveOverlays(t,f,w))}return k.waitFor(a)}).next(()=>s)}recalculateAndSaveOverlaysForDocumentKeys(t,e){return this.remoteDocumentCache.getEntries(t,e).next(s=>this.recalculateAndSaveOverlays(t,s))}getDocumentsMatchingQuery(t,e,s,i){return function(a){return $.isDocumentKey(a.path)&&a.collectionGroup===null&&a.filters.length===0}(e)?this.getDocumentsMatchingDocumentQuery(t,e.path):gl(e)?this.getDocumentsMatchingCollectionGroupQuery(t,e,s,i):this.getDocumentsMatchingCollectionQuery(t,e,s,i)}getNextDocuments(t,e,s,i){return this.remoteDocumentCache.getAllFromCollectionGroup(t,e,s,i).next(o=>{const a=i-o.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(t,e,s.largestBatchId,i-o.size):k.resolve(Ze());let c=-1,h=o;return a.next(f=>k.forEach(f,(p,w)=>(c<w.largestBatchId&&(c=w.largestBatchId),o.get(p)?k.resolve():this.remoteDocumentCache.getEntry(t,p).next(R=>{h=h.insert(p,R)}))).next(()=>this.populateOverlays(t,f,o)).next(()=>this.computeViews(t,h,f,et())).next(p=>({batchId:c,changes:Tl(p)})))})}getDocumentsMatchingDocumentQuery(t,e){return this.getDocument(t,new $(e)).next(s=>{let i=rs();return s.isFoundDocument()&&(i=i.insert(s.key,s)),i})}getDocumentsMatchingCollectionGroupQuery(t,e,s,i){const o=e.collectionGroup;let a=rs();return this.indexManager.getCollectionParents(t,o).next(c=>k.forEach(c,h=>{const f=function(w,R){return new Nn(R,null,w.explicitOrderBy.slice(),w.filters.slice(),w.limit,w.limitType,w.startAt,w.endAt)}(e,h.child(o));return this.getDocumentsMatchingCollectionQuery(t,f,s,i).next(p=>{p.forEach((w,R)=>{a=a.insert(w,R)})})}).next(()=>a))}getDocumentsMatchingCollectionQuery(t,e,s,i){let o;return this.documentOverlayCache.getOverlaysForCollection(t,e.path,s.largestBatchId).next(a=>(o=a,this.remoteDocumentCache.getDocumentsMatchingQuery(t,e,s,o,i))).next(a=>{o.forEach((h,f)=>{const p=f.getKey();a.get(p)===null&&(a=a.insert(p,Bt.newInvalidDocument(p)))});let c=rs();return a.forEach((h,f)=>{const p=o.get(h);p!==void 0&&cs(p.mutation,f,Yt.empty(),It.now()),Tr(e,f)&&(c=c.insert(h,f))}),c})}}/**
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
 */class jh{constructor(t){this.serializer=t,this.hr=new Map,this.Pr=new Map}getBundleMetadata(t,e){return k.resolve(this.hr.get(e))}saveBundleMetadata(t,e){return this.hr.set(e.id,function(i){return{id:i.id,version:i.version,createTime:he(i.createTime)}}(e)),k.resolve()}getNamedQuery(t,e){return k.resolve(this.Pr.get(e))}saveNamedQuery(t,e){return this.Pr.set(e.name,function(i){return{name:i.name,query:Mh(i.bundledQuery),readTime:he(i.readTime)}}(e)),k.resolve()}}/**
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
 */class $h{constructor(){this.overlays=new pt($.comparator),this.Ir=new Map}getOverlay(t,e){return k.resolve(this.overlays.get(e))}getOverlays(t,e){const s=Ze();return k.forEach(e,i=>this.getOverlay(t,i).next(o=>{o!==null&&s.set(i,o)})).next(()=>s)}saveOverlays(t,e,s){return s.forEach((i,o)=>{this.ht(t,e,o)}),k.resolve()}removeOverlaysForBatchId(t,e,s){const i=this.Ir.get(s);return i!==void 0&&(i.forEach(o=>this.overlays=this.overlays.remove(o)),this.Ir.delete(s)),k.resolve()}getOverlaysForCollection(t,e,s){const i=Ze(),o=e.length+1,a=new $(e.child("")),c=this.overlays.getIteratorFrom(a);for(;c.hasNext();){const h=c.getNext().value,f=h.getKey();if(!e.isPrefixOf(f.path))break;f.path.length===o&&h.largestBatchId>s&&i.set(h.getKey(),h)}return k.resolve(i)}getOverlaysForCollectionGroup(t,e,s,i){let o=new pt((f,p)=>f-p);const a=this.overlays.getIterator();for(;a.hasNext();){const f=a.getNext().value;if(f.getKey().getCollectionGroup()===e&&f.largestBatchId>s){let p=o.get(f.largestBatchId);p===null&&(p=Ze(),o=o.insert(f.largestBatchId,p)),p.set(f.getKey(),f)}}const c=Ze(),h=o.getIterator();for(;h.hasNext()&&(h.getNext().value.forEach((f,p)=>c.set(f,p)),!(c.size()>=i)););return k.resolve(c)}ht(t,e,s){const i=this.overlays.get(s.key);if(i!==null){const a=this.Ir.get(i.largestBatchId).delete(s.key);this.Ir.set(i.largestBatchId,a)}this.overlays=this.overlays.insert(s.key,new dh(e,s));let o=this.Ir.get(e);o===void 0&&(o=et(),this.Ir.set(e,o)),this.Ir.set(e,o.add(s.key))}}/**
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
 */class zh{constructor(){this.sessionToken=xt.EMPTY_BYTE_STRING}getSessionToken(t){return k.resolve(this.sessionToken)}setSessionToken(t,e){return this.sessionToken=e,k.resolve()}}/**
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
 */class Ni{constructor(){this.Tr=new Nt(Ct.Er),this.dr=new Nt(Ct.Ar)}isEmpty(){return this.Tr.isEmpty()}addReference(t,e){const s=new Ct(t,e);this.Tr=this.Tr.add(s),this.dr=this.dr.add(s)}Rr(t,e){t.forEach(s=>this.addReference(s,e))}removeReference(t,e){this.Vr(new Ct(t,e))}mr(t,e){t.forEach(s=>this.removeReference(s,e))}gr(t){const e=new $(new dt([])),s=new Ct(e,t),i=new Ct(e,t+1),o=[];return this.dr.forEachInRange([s,i],a=>{this.Vr(a),o.push(a.key)}),o}pr(){this.Tr.forEach(t=>this.Vr(t))}Vr(t){this.Tr=this.Tr.delete(t),this.dr=this.dr.delete(t)}yr(t){const e=new $(new dt([])),s=new Ct(e,t),i=new Ct(e,t+1);let o=et();return this.dr.forEachInRange([s,i],a=>{o=o.add(a.key)}),o}containsKey(t){const e=new Ct(t,0),s=this.Tr.firstAfterOrEqual(e);return s!==null&&t.isEqual(s.key)}}class Ct{constructor(t,e){this.key=t,this.wr=e}static Er(t,e){return $.comparator(t.key,e.key)||it(t.wr,e.wr)}static Ar(t,e){return it(t.wr,e.wr)||$.comparator(t.key,e.key)}}/**
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
 */class Kh{constructor(t,e){this.indexManager=t,this.referenceDelegate=e,this.mutationQueue=[],this.Sr=1,this.br=new Nt(Ct.Er)}checkEmpty(t){return k.resolve(this.mutationQueue.length===0)}addMutationBatch(t,e,s,i){const o=this.Sr;this.Sr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const a=new hh(o,e,s,i);this.mutationQueue.push(a);for(const c of i)this.br=this.br.add(new Ct(c.key,o)),this.indexManager.addToCollectionParentIndex(t,c.key.path.popLast());return k.resolve(a)}lookupMutationBatch(t,e){return k.resolve(this.Dr(e))}getNextMutationBatchAfterBatchId(t,e){const s=e+1,i=this.vr(s),o=i<0?0:i;return k.resolve(this.mutationQueue.length>o?this.mutationQueue[o]:null)}getHighestUnacknowledgedBatchId(){return k.resolve(this.mutationQueue.length===0?-1:this.Sr-1)}getAllMutationBatches(t){return k.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(t,e){const s=new Ct(e,0),i=new Ct(e,Number.POSITIVE_INFINITY),o=[];return this.br.forEachInRange([s,i],a=>{const c=this.Dr(a.wr);o.push(c)}),k.resolve(o)}getAllMutationBatchesAffectingDocumentKeys(t,e){let s=new Nt(it);return e.forEach(i=>{const o=new Ct(i,0),a=new Ct(i,Number.POSITIVE_INFINITY);this.br.forEachInRange([o,a],c=>{s=s.add(c.wr)})}),k.resolve(this.Cr(s))}getAllMutationBatchesAffectingQuery(t,e){const s=e.path,i=s.length+1;let o=s;$.isDocumentKey(o)||(o=o.child(""));const a=new Ct(new $(o),0);let c=new Nt(it);return this.br.forEachWhile(h=>{const f=h.key.path;return!!s.isPrefixOf(f)&&(f.length===i&&(c=c.add(h.wr)),!0)},a),k.resolve(this.Cr(c))}Cr(t){const e=[];return t.forEach(s=>{const i=this.Dr(s);i!==null&&e.push(i)}),e}removeMutationBatch(t,e){at(this.Fr(e.batchId,"removed")===0),this.mutationQueue.shift();let s=this.br;return k.forEach(e.mutations,i=>{const o=new Ct(i.key,e.batchId);return s=s.delete(o),this.referenceDelegate.markPotentiallyOrphaned(t,i.key)}).next(()=>{this.br=s})}On(t){}containsKey(t,e){const s=new Ct(e,0),i=this.br.firstAfterOrEqual(s);return k.resolve(e.isEqual(i&&i.key))}performConsistencyCheck(t){return this.mutationQueue.length,k.resolve()}Fr(t,e){return this.vr(t)}vr(t){return this.mutationQueue.length===0?0:t-this.mutationQueue[0].batchId}Dr(t){const e=this.vr(t);return e<0||e>=this.mutationQueue.length?null:this.mutationQueue[e]}}/**
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
 */class Gh{constructor(t){this.Mr=t,this.docs=function(){return new pt($.comparator)}(),this.size=0}setIndexManager(t){this.indexManager=t}addEntry(t,e){const s=e.key,i=this.docs.get(s),o=i?i.size:0,a=this.Mr(e);return this.docs=this.docs.insert(s,{document:e.mutableCopy(),size:a}),this.size+=a-o,this.indexManager.addToCollectionParentIndex(t,s.path.popLast())}removeEntry(t){const e=this.docs.get(t);e&&(this.docs=this.docs.remove(t),this.size-=e.size)}getEntry(t,e){const s=this.docs.get(e);return k.resolve(s?s.document.mutableCopy():Bt.newInvalidDocument(e))}getEntries(t,e){let s=Ee();return e.forEach(i=>{const o=this.docs.get(i);s=s.insert(i,o?o.document.mutableCopy():Bt.newInvalidDocument(i))}),k.resolve(s)}getDocumentsMatchingQuery(t,e,s,i){let o=Ee();const a=e.path,c=new $(a.child("")),h=this.docs.getIteratorFrom(c);for(;h.hasNext();){const{key:f,value:{document:p}}=h.getNext();if(!a.isPrefixOf(f.path))break;f.path.length>a.length+1||Vc(Cc(p),s)<=0||(i.has(p.key)||Tr(e,p))&&(o=o.insert(p.key,p.mutableCopy()))}return k.resolve(o)}getAllFromCollectionGroup(t,e,s,i){K()}Or(t,e){return k.forEach(this.docs,s=>e(s))}newChangeBuffer(t){return new Qh(this)}getSize(t){return k.resolve(this.size)}}class Qh extends Uh{constructor(t){super(),this.cr=t}applyChanges(t){const e=[];return this.changes.forEach((s,i)=>{i.isValidDocument()?e.push(this.cr.addEntry(t,i)):this.cr.removeEntry(s)}),k.waitFor(e)}getFromCache(t,e){return this.cr.getEntry(t,e)}getAllFromCache(t,e){return this.cr.getEntries(t,e)}}/**
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
 */class Wh{constructor(t){this.persistence=t,this.Nr=new xn(e=>Pi(e),Ci),this.lastRemoteSnapshotVersion=H.min(),this.highestTargetId=0,this.Lr=0,this.Br=new Ni,this.targetCount=0,this.kr=bn.Bn()}forEachTarget(t,e){return this.Nr.forEach((s,i)=>e(i)),k.resolve()}getLastRemoteSnapshotVersion(t){return k.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(t){return k.resolve(this.Lr)}allocateTargetId(t){return this.highestTargetId=this.kr.next(),k.resolve(this.highestTargetId)}setTargetsMetadata(t,e,s){return s&&(this.lastRemoteSnapshotVersion=s),e>this.Lr&&(this.Lr=e),k.resolve()}Kn(t){this.Nr.set(t.target,t);const e=t.targetId;e>this.highestTargetId&&(this.kr=new bn(e),this.highestTargetId=e),t.sequenceNumber>this.Lr&&(this.Lr=t.sequenceNumber)}addTargetData(t,e){return this.Kn(e),this.targetCount+=1,k.resolve()}updateTargetData(t,e){return this.Kn(e),k.resolve()}removeTargetData(t,e){return this.Nr.delete(e.target),this.Br.gr(e.targetId),this.targetCount-=1,k.resolve()}removeTargets(t,e,s){let i=0;const o=[];return this.Nr.forEach((a,c)=>{c.sequenceNumber<=e&&s.get(c.targetId)===null&&(this.Nr.delete(a),o.push(this.removeMatchingKeysForTargetId(t,c.targetId)),i++)}),k.waitFor(o).next(()=>i)}getTargetCount(t){return k.resolve(this.targetCount)}getTargetData(t,e){const s=this.Nr.get(e)||null;return k.resolve(s)}addMatchingKeys(t,e,s){return this.Br.Rr(e,s),k.resolve()}removeMatchingKeys(t,e,s){this.Br.mr(e,s);const i=this.persistence.referenceDelegate,o=[];return i&&e.forEach(a=>{o.push(i.markPotentiallyOrphaned(t,a))}),k.waitFor(o)}removeMatchingKeysForTargetId(t,e){return this.Br.gr(e),k.resolve()}getMatchingKeysForTargetId(t,e){const s=this.Br.yr(e);return k.resolve(s)}containsKey(t,e){return k.resolve(this.Br.containsKey(e))}}/**
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
 */class Hh{constructor(t,e){this.qr={},this.overlays={},this.Qr=new wi(0),this.Kr=!1,this.Kr=!0,this.$r=new zh,this.referenceDelegate=t(this),this.Ur=new Wh(this),this.indexManager=new Lh,this.remoteDocumentCache=function(i){return new Gh(i)}(s=>this.referenceDelegate.Wr(s)),this.serializer=new Oh(e),this.Gr=new jh(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.Kr=!1,Promise.resolve()}get started(){return this.Kr}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(t){return this.indexManager}getDocumentOverlayCache(t){let e=this.overlays[t.toKey()];return e||(e=new $h,this.overlays[t.toKey()]=e),e}getMutationQueue(t,e){let s=this.qr[t.toKey()];return s||(s=new Kh(e,this.referenceDelegate),this.qr[t.toKey()]=s),s}getGlobalsCache(){return this.$r}getTargetCache(){return this.Ur}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Gr}runTransaction(t,e,s){B("MemoryPersistence","Starting transaction:",t);const i=new Xh(this.Qr.next());return this.referenceDelegate.zr(),s(i).next(o=>this.referenceDelegate.jr(i).next(()=>o)).toPromise().then(o=>(i.raiseOnCommittedEvent(),o))}Hr(t,e){return k.or(Object.values(this.qr).map(s=>()=>s.containsKey(t,e)))}}class Xh extends Sc{constructor(t){super(),this.currentSequenceNumber=t}}class xi{constructor(t){this.persistence=t,this.Jr=new Ni,this.Yr=null}static Zr(t){return new xi(t)}get Xr(){if(this.Yr)return this.Yr;throw K()}addReference(t,e,s){return this.Jr.addReference(s,e),this.Xr.delete(s.toString()),k.resolve()}removeReference(t,e,s){return this.Jr.removeReference(s,e),this.Xr.add(s.toString()),k.resolve()}markPotentiallyOrphaned(t,e){return this.Xr.add(e.toString()),k.resolve()}removeTarget(t,e){this.Jr.gr(e.targetId).forEach(i=>this.Xr.add(i.toString()));const s=this.persistence.getTargetCache();return s.getMatchingKeysForTargetId(t,e.targetId).next(i=>{i.forEach(o=>this.Xr.add(o.toString()))}).next(()=>s.removeTargetData(t,e))}zr(){this.Yr=new Set}jr(t){const e=this.persistence.getRemoteDocumentCache().newChangeBuffer();return k.forEach(this.Xr,s=>{const i=$.fromPath(s);return this.ei(t,i).next(o=>{o||e.removeEntry(i,H.min())})}).next(()=>(this.Yr=null,e.apply(t)))}updateLimboDocument(t,e){return this.ei(t,e).next(s=>{s?this.Xr.delete(e.toString()):this.Xr.add(e.toString())})}Wr(t){return 0}ei(t,e){return k.or([()=>k.resolve(this.Jr.containsKey(e)),()=>this.persistence.getTargetCache().containsKey(t,e),()=>this.persistence.Hr(t,e)])}}/**
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
 */class Oi{constructor(t,e,s,i){this.targetId=t,this.fromCache=e,this.$i=s,this.Ui=i}static Wi(t,e){let s=et(),i=et();for(const o of e.docChanges)switch(o.type){case 0:s=s.add(o.doc.key);break;case 1:i=i.add(o.doc.key)}return new Oi(t,e.fromCache,s,i)}}/**
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
 */class Yh{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(t){this._documentReadCount+=t}}/**
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
 */class Jh{constructor(){this.Gi=!1,this.zi=!1,this.ji=100,this.Hi=function(){return oc()?8:kc(ac())>0?6:4}()}initialize(t,e){this.Ji=t,this.indexManager=e,this.Gi=!0}getDocumentsMatchingQuery(t,e,s,i){const o={result:null};return this.Yi(t,e).next(a=>{o.result=a}).next(()=>{if(!o.result)return this.Zi(t,e,i,s).next(a=>{o.result=a})}).next(()=>{if(o.result)return;const a=new Yh;return this.Xi(t,e,a).next(c=>{if(o.result=c,this.zi)return this.es(t,e,a,c.size)})}).next(()=>o.result)}es(t,e,s,i){return s.documentReadCount<this.ji?(es()<=ke.DEBUG&&B("QueryEngine","SDK will not create cache indexes for query:",En(e),"since it only creates cache indexes for collection contains","more than or equal to",this.ji,"documents"),k.resolve()):(es()<=ke.DEBUG&&B("QueryEngine","Query:",En(e),"scans",s.documentReadCount,"local documents and returns",i,"documents as results."),s.documentReadCount>this.Hi*i?(es()<=ke.DEBUG&&B("QueryEngine","The SDK decides to create cache indexes for query:",En(e),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(t,ce(e))):k.resolve())}Yi(t,e){if(ua(e))return k.resolve(null);let s=ce(e);return this.indexManager.getIndexType(t,s).next(i=>i===0?null:(e.limit!==null&&i===1&&(e=hr(e,null,"F"),s=ce(e)),this.indexManager.getDocumentsMatchingTarget(t,s).next(o=>{const a=et(...o);return this.Ji.getDocuments(t,a).next(c=>this.indexManager.getMinOffset(t,s).next(h=>{const f=this.ts(e,c);return this.ns(e,f,a,h.readTime)?this.Yi(t,hr(e,null,"F")):this.rs(t,f,e,h)}))})))}Zi(t,e,s,i){return ua(e)||i.isEqual(H.min())?k.resolve(null):this.Ji.getDocuments(t,s).next(o=>{const a=this.ts(e,o);return this.ns(e,a,s,i)?k.resolve(null):(es()<=ke.DEBUG&&B("QueryEngine","Re-using previous result from %s to execute query: %s",i.toString(),En(e)),this.rs(t,a,e,Pc(i,-1)).next(c=>c))})}ts(t,e){let s=new Nt(yl(t));return e.forEach((i,o)=>{Tr(t,o)&&(s=s.add(o))}),s}ns(t,e,s,i){if(t.limit===null)return!1;if(s.size!==e.size)return!0;const o=t.limitType==="F"?e.last():e.first();return!!o&&(o.hasPendingWrites||o.version.compareTo(i)>0)}Xi(t,e,s){return es()<=ke.DEBUG&&B("QueryEngine","Using full collection scan to execute query:",En(e)),this.Ji.getDocumentsMatchingQuery(t,e,Me.min(),s)}rs(t,e,s,i){return this.Ji.getDocumentsMatchingQuery(t,s,i).next(o=>(e.forEach(a=>{o=o.insert(a.key,a)}),o))}}/**
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
 */class Zh{constructor(t,e,s,i){this.persistence=t,this.ss=e,this.serializer=i,this.os=new pt(it),this._s=new xn(o=>Pi(o),Ci),this.us=new Map,this.cs=t.getRemoteDocumentCache(),this.Ur=t.getTargetCache(),this.Gr=t.getBundleCache(),this.ls(s)}ls(t){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(t),this.indexManager=this.persistence.getIndexManager(t),this.mutationQueue=this.persistence.getMutationQueue(t,this.indexManager),this.localDocuments=new qh(this.cs,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.cs.setIndexManager(this.indexManager),this.ss.initialize(this.localDocuments,this.indexManager)}collectGarbage(t){return this.persistence.runTransaction("Collect garbage","readwrite-primary",e=>t.collect(e,this.os))}}function td(n,t,e,s){return new Zh(n,t,e,s)}async function Ul(n,t){const e=X(n);return await e.persistence.runTransaction("Handle user change","readonly",s=>{let i;return e.mutationQueue.getAllMutationBatches(s).next(o=>(i=o,e.ls(t),e.mutationQueue.getAllMutationBatches(s))).next(o=>{const a=[],c=[];let h=et();for(const f of i){a.push(f.batchId);for(const p of f.mutations)h=h.add(p.key)}for(const f of o){c.push(f.batchId);for(const p of f.mutations)h=h.add(p.key)}return e.localDocuments.getDocuments(s,h).next(f=>({hs:f,removedBatchIds:a,addedBatchIds:c}))})})}function ed(n,t){const e=X(n);return e.persistence.runTransaction("Acknowledge batch","readwrite-primary",s=>{const i=t.batch.keys(),o=e.cs.newChangeBuffer({trackRemovals:!0});return function(c,h,f,p){const w=f.batch,R=w.keys();let b=k.resolve();return R.forEach(N=>{b=b.next(()=>p.getEntry(h,N)).next(L=>{const D=f.docVersions.get(N);at(D!==null),L.version.compareTo(D)<0&&(w.applyToRemoteDocument(L,f),L.isValidDocument()&&(L.setReadTime(f.commitVersion),p.addEntry(L)))})}),b.next(()=>c.mutationQueue.removeMutationBatch(h,w))}(e,s,t,o).next(()=>o.apply(s)).next(()=>e.mutationQueue.performConsistencyCheck(s)).next(()=>e.documentOverlayCache.removeOverlaysForBatchId(s,i,t.batch.batchId)).next(()=>e.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(s,function(c){let h=et();for(let f=0;f<c.mutationResults.length;++f)c.mutationResults[f].transformResults.length>0&&(h=h.add(c.batch.mutations[f].key));return h}(t))).next(()=>e.localDocuments.getDocuments(s,i))})}function Bl(n){const t=X(n);return t.persistence.runTransaction("Get last remote snapshot version","readonly",e=>t.Ur.getLastRemoteSnapshotVersion(e))}function nd(n,t){const e=X(n),s=t.snapshotVersion;let i=e.os;return e.persistence.runTransaction("Apply remote event","readwrite-primary",o=>{const a=e.cs.newChangeBuffer({trackRemovals:!0});i=e.os;const c=[];t.targetChanges.forEach((p,w)=>{const R=i.get(w);if(!R)return;c.push(e.Ur.removeMatchingKeys(o,p.removedDocuments,w).next(()=>e.Ur.addMatchingKeys(o,p.addedDocuments,w)));let b=R.withSequenceNumber(o.currentSequenceNumber);t.targetMismatches.get(w)!==null?b=b.withResumeToken(xt.EMPTY_BYTE_STRING,H.min()).withLastLimboFreeSnapshotVersion(H.min()):p.resumeToken.approximateByteSize()>0&&(b=b.withResumeToken(p.resumeToken,s)),i=i.insert(w,b),function(L,D,W){return L.resumeToken.approximateByteSize()===0||D.snapshotVersion.toMicroseconds()-L.snapshotVersion.toMicroseconds()>=3e8?!0:W.addedDocuments.size+W.modifiedDocuments.size+W.removedDocuments.size>0}(R,b,p)&&c.push(e.Ur.updateTargetData(o,b))});let h=Ee(),f=et();if(t.documentUpdates.forEach(p=>{t.resolvedLimboDocuments.has(p)&&c.push(e.persistence.referenceDelegate.updateLimboDocument(o,p))}),c.push(sd(o,a,t.documentUpdates).next(p=>{h=p.Ps,f=p.Is})),!s.isEqual(H.min())){const p=e.Ur.getLastRemoteSnapshotVersion(o).next(w=>e.Ur.setTargetsMetadata(o,o.currentSequenceNumber,s));c.push(p)}return k.waitFor(c).next(()=>a.apply(o)).next(()=>e.localDocuments.getLocalViewOfDocuments(o,h,f)).next(()=>h)}).then(o=>(e.os=i,o))}function sd(n,t,e){let s=et(),i=et();return e.forEach(o=>s=s.add(o)),t.getEntries(n,s).next(o=>{let a=Ee();return e.forEach((c,h)=>{const f=o.get(c);h.isFoundDocument()!==f.isFoundDocument()&&(i=i.add(c)),h.isNoDocument()&&h.version.isEqual(H.min())?(t.removeEntry(c,h.readTime),a=a.insert(c,h)):!f.isValidDocument()||h.version.compareTo(f.version)>0||h.version.compareTo(f.version)===0&&f.hasPendingWrites?(t.addEntry(h),a=a.insert(c,h)):B("LocalStore","Ignoring outdated watch update for ",c,". Current version:",f.version," Watch version:",h.version)}),{Ps:a,Is:i}})}function rd(n,t){const e=X(n);return e.persistence.runTransaction("Get next mutation batch","readonly",s=>(t===void 0&&(t=-1),e.mutationQueue.getNextMutationBatchAfterBatchId(s,t)))}function id(n,t){const e=X(n);return e.persistence.runTransaction("Allocate target","readwrite",s=>{let i;return e.Ur.getTargetData(s,t).next(o=>o?(i=o,k.resolve(i)):e.Ur.allocateTargetId(s).next(a=>(i=new Ne(t,a,"TargetPurposeListen",s.currentSequenceNumber),e.Ur.addTargetData(s,i).next(()=>i))))}).then(s=>{const i=e.os.get(s.targetId);return(i===null||s.snapshotVersion.compareTo(i.snapshotVersion)>0)&&(e.os=e.os.insert(s.targetId,s),e._s.set(t,s.targetId)),s})}async function mi(n,t,e){const s=X(n),i=s.os.get(t),o=e?"readwrite":"readwrite-primary";try{e||await s.persistence.runTransaction("Release target",o,a=>s.persistence.referenceDelegate.removeTarget(a,i))}catch(a){if(!Es(a))throw a;B("LocalStore",`Failed to update sequence numbers for target ${t}: ${a}`)}s.os=s.os.remove(t),s._s.delete(i.target)}function Ta(n,t,e){const s=X(n);let i=H.min(),o=et();return s.persistence.runTransaction("Execute query","readwrite",a=>function(h,f,p){const w=X(h),R=w._s.get(p);return R!==void 0?k.resolve(w.os.get(R)):w.Ur.getTargetData(f,p)}(s,a,ce(t)).next(c=>{if(c)return i=c.lastLimboFreeSnapshotVersion,s.Ur.getMatchingKeysForTargetId(a,c.targetId).next(h=>{o=h})}).next(()=>s.ss.getDocumentsMatchingQuery(a,t,e?i:H.min(),e?o:et())).next(c=>(od(s,Hc(t),c),{documents:c,Ts:o})))}function od(n,t,e){let s=n.us.get(t)||H.min();e.forEach((i,o)=>{o.readTime.compareTo(s)>0&&(s=o.readTime)}),n.us.set(t,s)}class Ea{constructor(){this.activeTargetIds=eh()}fs(t){this.activeTargetIds=this.activeTargetIds.add(t)}gs(t){this.activeTargetIds=this.activeTargetIds.delete(t)}Vs(){const t={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(t)}}class ad{constructor(){this.so=new Ea,this.oo={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(t){}updateMutationState(t,e,s){}addLocalQueryTarget(t,e=!0){return e&&this.so.fs(t),this.oo[t]||"not-current"}updateQueryState(t,e,s){this.oo[t]=e}removeLocalQueryTarget(t){this.so.gs(t)}isLocalQueryTarget(t){return this.so.activeTargetIds.has(t)}clearQueryState(t){delete this.oo[t]}getAllActiveQueryTargets(){return this.so.activeTargetIds}isActiveQueryTarget(t){return this.so.activeTargetIds.has(t)}start(){return this.so=new Ea,Promise.resolve()}handleUserChange(t,e,s){}setOnlineState(t){}shutdown(){}writeSequenceNumber(t){}notifyBundleLoaded(t){}}/**
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
 */class ld{_o(t){}shutdown(){}}/**
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
 */class wa{constructor(){this.ao=()=>this.uo(),this.co=()=>this.lo(),this.ho=[],this.Po()}_o(t){this.ho.push(t)}shutdown(){window.removeEventListener("online",this.ao),window.removeEventListener("offline",this.co)}Po(){window.addEventListener("online",this.ao),window.addEventListener("offline",this.co)}uo(){B("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const t of this.ho)t(0)}lo(){B("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const t of this.ho)t(1)}static D(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
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
 */let Zs=null;function Zr(){return Zs===null?Zs=function(){return 268435456+Math.round(2147483648*Math.random())}():Zs++,"0x"+Zs.toString(16)}/**
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
 */const ud={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};/**
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
 */class cd{constructor(t){this.Io=t.Io,this.To=t.To}Eo(t){this.Ao=t}Ro(t){this.Vo=t}mo(t){this.fo=t}onMessage(t){this.po=t}close(){this.To()}send(t){this.Io(t)}yo(){this.Ao()}wo(){this.Vo()}So(t){this.fo(t)}bo(t){this.po(t)}}/**
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
 */const Ft="WebChannelConnection";class hd extends class{constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const s=e.ssl?"https":"http",i=encodeURIComponent(this.databaseId.projectId),o=encodeURIComponent(this.databaseId.database);this.Do=s+"://"+e.host,this.vo=`projects/${i}/databases/${o}`,this.Co=this.databaseId.database==="(default)"?`project_id=${i}`:`project_id=${i}&database_id=${o}`}get Fo(){return!1}Mo(e,s,i,o,a){const c=Zr(),h=this.xo(e,s.toUriEncodedString());B("RestConnection",`Sending RPC '${e}' ${c}:`,h,i);const f={"google-cloud-resource-prefix":this.vo,"x-goog-request-params":this.Co};return this.Oo(f,o,a),this.No(e,h,f,i).then(p=>(B("RestConnection",`Received RPC '${e}' ${c}: `,p),p),p=>{throw Rn("RestConnection",`RPC '${e}' ${c} failed with error: `,p,"url: ",h,"request:",i),p})}Lo(e,s,i,o,a,c){return this.Mo(e,s,i,o,a)}Oo(e,s,i){e["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+Dn}(),e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),s&&s.headers.forEach((o,a)=>e[a]=o),i&&i.headers.forEach((o,a)=>e[a]=o)}xo(e,s){const i=ud[e];return`${this.Do}/v1/${s}:${i}`}terminate(){}}{constructor(t){super(t),this.forceLongPolling=t.forceLongPolling,this.autoDetectLongPolling=t.autoDetectLongPolling,this.useFetchStreams=t.useFetchStreams,this.longPollingOptions=t.longPollingOptions}No(t,e,s,i){const o=Zr();return new Promise((a,c)=>{const h=new tl;h.setWithCredentials(!0),h.listenOnce(el.COMPLETE,()=>{try{switch(h.getLastErrorCode()){case sr.NO_ERROR:const p=h.getResponseJson();B(Ft,`XHR for RPC '${t}' ${o} received:`,JSON.stringify(p)),a(p);break;case sr.TIMEOUT:B(Ft,`RPC '${t}' ${o} timed out`),c(new F(S.DEADLINE_EXCEEDED,"Request time out"));break;case sr.HTTP_ERROR:const w=h.getStatus();if(B(Ft,`RPC '${t}' ${o} failed with status:`,w,"response text:",h.getResponseText()),w>0){let R=h.getResponseJson();Array.isArray(R)&&(R=R[0]);const b=R==null?void 0:R.error;if(b&&b.status&&b.message){const N=function(D){const W=D.toLowerCase().replace(/_/g,"-");return Object.values(S).indexOf(W)>=0?W:S.UNKNOWN}(b.status);c(new F(N,b.message))}else c(new F(S.UNKNOWN,"Server responded with status "+h.getStatus()))}else c(new F(S.UNAVAILABLE,"Connection failed."));break;default:K()}}finally{B(Ft,`RPC '${t}' ${o} completed.`)}});const f=JSON.stringify(i);B(Ft,`RPC '${t}' ${o} sending request:`,i),h.send(e,"POST",f,s,15)})}Bo(t,e,s){const i=Zr(),o=[this.Do,"/","google.firestore.v1.Firestore","/",t,"/channel"],a=rl(),c=sl(),h={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},f=this.longPollingOptions.timeoutSeconds;f!==void 0&&(h.longPollingTimeout=Math.round(1e3*f)),this.useFetchStreams&&(h.useFetchStreams=!0),this.Oo(h.initMessageHeaders,e,s),h.encodeInitMessageHeaders=!0;const p=o.join("");B(Ft,`Creating RPC '${t}' stream ${i}: ${p}`,h);const w=a.createWebChannel(p,h);let R=!1,b=!1;const N=new cd({Io:D=>{b?B(Ft,`Not sending because RPC '${t}' stream ${i} is closed:`,D):(R||(B(Ft,`Opening RPC '${t}' stream ${i} transport.`),w.open(),R=!0),B(Ft,`RPC '${t}' stream ${i} sending:`,D),w.send(D))},To:()=>w.close()}),L=(D,W,J)=>{D.listen(W,Y=>{try{J(Y)}catch(Z){setTimeout(()=>{throw Z},0)}})};return L(w,ss.EventType.OPEN,()=>{b||(B(Ft,`RPC '${t}' stream ${i} transport opened.`),N.yo())}),L(w,ss.EventType.CLOSE,()=>{b||(b=!0,B(Ft,`RPC '${t}' stream ${i} transport closed`),N.So())}),L(w,ss.EventType.ERROR,D=>{b||(b=!0,Rn(Ft,`RPC '${t}' stream ${i} transport errored:`,D),N.So(new F(S.UNAVAILABLE,"The operation could not be completed")))}),L(w,ss.EventType.MESSAGE,D=>{var W;if(!b){const J=D.data[0];at(!!J);const Y=J,Z=Y.error||((W=Y[0])===null||W===void 0?void 0:W.error);if(Z){B(Ft,`RPC '${t}' stream ${i} received error:`,Z);const Vt=Z.status;let ct=function(g){const y=Et[g];if(y!==void 0)return bl(y)}(Vt),v=Z.message;ct===void 0&&(ct=S.INTERNAL,v="Unknown error status: "+Vt+" with message "+Z.message),b=!0,N.So(new F(ct,v)),w.close()}else B(Ft,`RPC '${t}' stream ${i} received:`,J),N.bo(J)}}),L(c,nl.STAT_EVENT,D=>{D.stat===ri.PROXY?B(Ft,`RPC '${t}' stream ${i} detected buffering proxy`):D.stat===ri.NOPROXY&&B(Ft,`RPC '${t}' stream ${i} detected no buffering proxy`)}),setTimeout(()=>{N.wo()},0),N}}function ti(){return typeof document<"u"?document:null}/**
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
 */function Ir(n){return new Eh(n,!0)}/**
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
 */class ql{constructor(t,e,s=1e3,i=1.5,o=6e4){this.ui=t,this.timerId=e,this.ko=s,this.qo=i,this.Qo=o,this.Ko=0,this.$o=null,this.Uo=Date.now(),this.reset()}reset(){this.Ko=0}Wo(){this.Ko=this.Qo}Go(t){this.cancel();const e=Math.floor(this.Ko+this.zo()),s=Math.max(0,Date.now()-this.Uo),i=Math.max(0,e-s);i>0&&B("ExponentialBackoff",`Backing off for ${i} ms (base delay: ${this.Ko} ms, delay with jitter: ${e} ms, last attempt: ${s} ms ago)`),this.$o=this.ui.enqueueAfterDelay(this.timerId,i,()=>(this.Uo=Date.now(),t())),this.Ko*=this.qo,this.Ko<this.ko&&(this.Ko=this.ko),this.Ko>this.Qo&&(this.Ko=this.Qo)}jo(){this.$o!==null&&(this.$o.skipDelay(),this.$o=null)}cancel(){this.$o!==null&&(this.$o.cancel(),this.$o=null)}zo(){return(Math.random()-.5)*this.Ko}}/**
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
 */class jl{constructor(t,e,s,i,o,a,c,h){this.ui=t,this.Ho=s,this.Jo=i,this.connection=o,this.authCredentialsProvider=a,this.appCheckCredentialsProvider=c,this.listener=h,this.state=0,this.Yo=0,this.Zo=null,this.Xo=null,this.stream=null,this.e_=0,this.t_=new ql(t,e)}n_(){return this.state===1||this.state===5||this.r_()}r_(){return this.state===2||this.state===3}start(){this.e_=0,this.state!==4?this.auth():this.i_()}async stop(){this.n_()&&await this.close(0)}s_(){this.state=0,this.t_.reset()}o_(){this.r_()&&this.Zo===null&&(this.Zo=this.ui.enqueueAfterDelay(this.Ho,6e4,()=>this.__()))}a_(t){this.u_(),this.stream.send(t)}async __(){if(this.r_())return this.close(0)}u_(){this.Zo&&(this.Zo.cancel(),this.Zo=null)}c_(){this.Xo&&(this.Xo.cancel(),this.Xo=null)}async close(t,e){this.u_(),this.c_(),this.t_.cancel(),this.Yo++,t!==4?this.t_.reset():e&&e.code===S.RESOURCE_EXHAUSTED?(Te(e.toString()),Te("Using maximum backoff delay to prevent overloading the backend."),this.t_.Wo()):e&&e.code===S.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.l_(),this.stream.close(),this.stream=null),this.state=t,await this.listener.mo(e)}l_(){}auth(){this.state=1;const t=this.h_(this.Yo),e=this.Yo;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([s,i])=>{this.Yo===e&&this.P_(s,i)},s=>{t(()=>{const i=new F(S.UNKNOWN,"Fetching auth token failed: "+s.message);return this.I_(i)})})}P_(t,e){const s=this.h_(this.Yo);this.stream=this.T_(t,e),this.stream.Eo(()=>{s(()=>this.listener.Eo())}),this.stream.Ro(()=>{s(()=>(this.state=2,this.Xo=this.ui.enqueueAfterDelay(this.Jo,1e4,()=>(this.r_()&&(this.state=3),Promise.resolve())),this.listener.Ro()))}),this.stream.mo(i=>{s(()=>this.I_(i))}),this.stream.onMessage(i=>{s(()=>++this.e_==1?this.E_(i):this.onNext(i))})}i_(){this.state=5,this.t_.Go(async()=>{this.state=0,this.start()})}I_(t){return B("PersistentStream",`close with error: ${t}`),this.stream=null,this.close(4,t)}h_(t){return e=>{this.ui.enqueueAndForget(()=>this.Yo===t?e():(B("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class dd extends jl{constructor(t,e,s,i,o,a){super(t,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",e,s,i,a),this.serializer=o}T_(t,e){return this.connection.Bo("Listen",t,e)}E_(t){return this.onNext(t)}onNext(t){this.t_.reset();const e=Ih(this.serializer,t),s=function(o){if(!("targetChange"in o))return H.min();const a=o.targetChange;return a.targetIds&&a.targetIds.length?H.min():a.readTime?he(a.readTime):H.min()}(t);return this.listener.d_(e,s)}A_(t){const e={};e.database=fi(this.serializer),e.addTarget=function(o,a){let c;const h=a.target;if(c=li(h)?{documents:Ch(o,h)}:{query:Vh(o,h)._t},c.targetId=a.targetId,a.resumeToken.approximateByteSize()>0){c.resumeToken=Dl(o,a.resumeToken);const f=ci(o,a.expectedCount);f!==null&&(c.expectedCount=f)}else if(a.snapshotVersion.compareTo(H.min())>0){c.readTime=fr(o,a.snapshotVersion.toTimestamp());const f=ci(o,a.expectedCount);f!==null&&(c.expectedCount=f)}return c}(this.serializer,t);const s=Sh(this.serializer,t);s&&(e.labels=s),this.a_(e)}R_(t){const e={};e.database=fi(this.serializer),e.removeTarget=t,this.a_(e)}}class fd extends jl{constructor(t,e,s,i,o,a){super(t,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",e,s,i,a),this.serializer=o}get V_(){return this.e_>0}start(){this.lastStreamToken=void 0,super.start()}l_(){this.V_&&this.m_([])}T_(t,e){return this.connection.Bo("Write",t,e)}E_(t){return at(!!t.streamToken),this.lastStreamToken=t.streamToken,at(!t.writeResults||t.writeResults.length===0),this.listener.f_()}onNext(t){at(!!t.streamToken),this.lastStreamToken=t.streamToken,this.t_.reset();const e=Ph(t.writeResults,t.commitTime),s=he(t.commitTime);return this.listener.g_(s,e)}p_(){const t={};t.database=fi(this.serializer),this.a_(t)}m_(t){const e={streamToken:this.lastStreamToken,writes:t.map(s=>Rh(this.serializer,s))};this.a_(e)}}/**
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
 */class md extends class{}{constructor(t,e,s,i){super(),this.authCredentials=t,this.appCheckCredentials=e,this.connection=s,this.serializer=i,this.y_=!1}w_(){if(this.y_)throw new F(S.FAILED_PRECONDITION,"The client has already been terminated.")}Mo(t,e,s,i){return this.w_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([o,a])=>this.connection.Mo(t,hi(e,s),i,o,a)).catch(o=>{throw o.name==="FirebaseError"?(o.code===S.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),o):new F(S.UNKNOWN,o.toString())})}Lo(t,e,s,i,o){return this.w_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([a,c])=>this.connection.Lo(t,hi(e,s),i,a,c,o)).catch(a=>{throw a.name==="FirebaseError"?(a.code===S.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),a):new F(S.UNKNOWN,a.toString())})}terminate(){this.y_=!0,this.connection.terminate()}}class pd{constructor(t,e){this.asyncQueue=t,this.onlineStateHandler=e,this.state="Unknown",this.S_=0,this.b_=null,this.D_=!0}v_(){this.S_===0&&(this.C_("Unknown"),this.b_=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.b_=null,this.F_("Backend didn't respond within 10 seconds."),this.C_("Offline"),Promise.resolve())))}M_(t){this.state==="Online"?this.C_("Unknown"):(this.S_++,this.S_>=1&&(this.x_(),this.F_(`Connection failed 1 times. Most recent error: ${t.toString()}`),this.C_("Offline")))}set(t){this.x_(),this.S_=0,t==="Online"&&(this.D_=!1),this.C_(t)}C_(t){t!==this.state&&(this.state=t,this.onlineStateHandler(t))}F_(t){const e=`Could not reach Cloud Firestore backend. ${t}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.D_?(Te(e),this.D_=!1):B("OnlineStateTracker",e)}x_(){this.b_!==null&&(this.b_.cancel(),this.b_=null)}}/**
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
 */class gd{constructor(t,e,s,i,o){this.localStore=t,this.datastore=e,this.asyncQueue=s,this.remoteSyncer={},this.O_=[],this.N_=new Map,this.L_=new Set,this.B_=[],this.k_=o,this.k_._o(a=>{s.enqueueAndForget(async()=>{ln(this)&&(B("RemoteStore","Restarting streams for network reachability change."),await async function(h){const f=X(h);f.L_.add(4),await Is(f),f.q_.set("Unknown"),f.L_.delete(4),await Rr(f)}(this))})}),this.q_=new pd(s,i)}}async function Rr(n){if(ln(n))for(const t of n.B_)await t(!0)}async function Is(n){for(const t of n.B_)await t(!1)}function $l(n,t){const e=X(n);e.N_.has(t.targetId)||(e.N_.set(t.targetId,t),Ui(e)?Fi(e):On(e).r_()&&Li(e,t))}function Mi(n,t){const e=X(n),s=On(e);e.N_.delete(t),s.r_()&&zl(e,t),e.N_.size===0&&(s.r_()?s.o_():ln(e)&&e.q_.set("Unknown"))}function Li(n,t){if(n.Q_.xe(t.targetId),t.resumeToken.approximateByteSize()>0||t.snapshotVersion.compareTo(H.min())>0){const e=n.remoteSyncer.getRemoteKeysForTarget(t.targetId).size;t=t.withExpectedCount(e)}On(n).A_(t)}function zl(n,t){n.Q_.xe(t),On(n).R_(t)}function Fi(n){n.Q_=new _h({getRemoteKeysForTarget:t=>n.remoteSyncer.getRemoteKeysForTarget(t),ot:t=>n.N_.get(t)||null,tt:()=>n.datastore.serializer.databaseId}),On(n).start(),n.q_.v_()}function Ui(n){return ln(n)&&!On(n).n_()&&n.N_.size>0}function ln(n){return X(n).L_.size===0}function Kl(n){n.Q_=void 0}async function _d(n){n.q_.set("Online")}async function yd(n){n.N_.forEach((t,e)=>{Li(n,t)})}async function vd(n,t){Kl(n),Ui(n)?(n.q_.M_(t),Fi(n)):n.q_.set("Unknown")}async function Td(n,t,e){if(n.q_.set("Online"),t instanceof kl&&t.state===2&&t.cause)try{await async function(i,o){const a=o.cause;for(const c of o.targetIds)i.N_.has(c)&&(await i.remoteSyncer.rejectListen(c,a),i.N_.delete(c),i.Q_.removeTarget(c))}(n,t)}catch(s){B("RemoteStore","Failed to remove targets %s: %s ",t.targetIds.join(","),s),await mr(n,s)}else if(t instanceof or?n.Q_.Ke(t):t instanceof Sl?n.Q_.He(t):n.Q_.We(t),!e.isEqual(H.min()))try{const s=await Bl(n.localStore);e.compareTo(s)>=0&&await function(o,a){const c=o.Q_.rt(a);return c.targetChanges.forEach((h,f)=>{if(h.resumeToken.approximateByteSize()>0){const p=o.N_.get(f);p&&o.N_.set(f,p.withResumeToken(h.resumeToken,a))}}),c.targetMismatches.forEach((h,f)=>{const p=o.N_.get(h);if(!p)return;o.N_.set(h,p.withResumeToken(xt.EMPTY_BYTE_STRING,p.snapshotVersion)),zl(o,h);const w=new Ne(p.target,h,f,p.sequenceNumber);Li(o,w)}),o.remoteSyncer.applyRemoteEvent(c)}(n,e)}catch(s){B("RemoteStore","Failed to raise snapshot:",s),await mr(n,s)}}async function mr(n,t,e){if(!Es(t))throw t;n.L_.add(1),await Is(n),n.q_.set("Offline"),e||(e=()=>Bl(n.localStore)),n.asyncQueue.enqueueRetryable(async()=>{B("RemoteStore","Retrying IndexedDB access"),await e(),n.L_.delete(1),await Rr(n)})}function Gl(n,t){return t().catch(e=>mr(n,e,t))}async function Pr(n){const t=X(n),e=Fe(t);let s=t.O_.length>0?t.O_[t.O_.length-1].batchId:-1;for(;Ed(t);)try{const i=await rd(t.localStore,s);if(i===null){t.O_.length===0&&e.o_();break}s=i.batchId,wd(t,i)}catch(i){await mr(t,i)}Ql(t)&&Wl(t)}function Ed(n){return ln(n)&&n.O_.length<10}function wd(n,t){n.O_.push(t);const e=Fe(n);e.r_()&&e.V_&&e.m_(t.mutations)}function Ql(n){return ln(n)&&!Fe(n).n_()&&n.O_.length>0}function Wl(n){Fe(n).start()}async function Ad(n){Fe(n).p_()}async function Id(n){const t=Fe(n);for(const e of n.O_)t.m_(e.mutations)}async function Rd(n,t,e){const s=n.O_.shift(),i=Si.from(s,t,e);await Gl(n,()=>n.remoteSyncer.applySuccessfulWrite(i)),await Pr(n)}async function Pd(n,t){t&&Fe(n).V_&&await async function(s,i){if(function(a){return mh(a)&&a!==S.ABORTED}(i.code)){const o=s.O_.shift();Fe(s).s_(),await Gl(s,()=>s.remoteSyncer.rejectFailedWrite(o.batchId,i)),await Pr(s)}}(n,t),Ql(n)&&Wl(n)}async function Aa(n,t){const e=X(n);e.asyncQueue.verifyOperationInProgress(),B("RemoteStore","RemoteStore received new credentials");const s=ln(e);e.L_.add(3),await Is(e),s&&e.q_.set("Unknown"),await e.remoteSyncer.handleCredentialChange(t),e.L_.delete(3),await Rr(e)}async function Cd(n,t){const e=X(n);t?(e.L_.delete(2),await Rr(e)):t||(e.L_.add(2),await Is(e),e.q_.set("Unknown"))}function On(n){return n.K_||(n.K_=function(e,s,i){const o=X(e);return o.w_(),new dd(s,o.connection,o.authCredentials,o.appCheckCredentials,o.serializer,i)}(n.datastore,n.asyncQueue,{Eo:_d.bind(null,n),Ro:yd.bind(null,n),mo:vd.bind(null,n),d_:Td.bind(null,n)}),n.B_.push(async t=>{t?(n.K_.s_(),Ui(n)?Fi(n):n.q_.set("Unknown")):(await n.K_.stop(),Kl(n))})),n.K_}function Fe(n){return n.U_||(n.U_=function(e,s,i){const o=X(e);return o.w_(),new fd(s,o.connection,o.authCredentials,o.appCheckCredentials,o.serializer,i)}(n.datastore,n.asyncQueue,{Eo:()=>Promise.resolve(),Ro:Ad.bind(null,n),mo:Pd.bind(null,n),f_:Id.bind(null,n),g_:Rd.bind(null,n)}),n.B_.push(async t=>{t?(n.U_.s_(),await Pr(n)):(await n.U_.stop(),n.O_.length>0&&(B("RemoteStore",`Stopping write stream with ${n.O_.length} pending writes`),n.O_=[]))})),n.U_}/**
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
 */class Bi{constructor(t,e,s,i,o){this.asyncQueue=t,this.timerId=e,this.targetTimeMs=s,this.op=i,this.removalCallback=o,this.deferred=new xe,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(a=>{})}get promise(){return this.deferred.promise}static createAndSchedule(t,e,s,i,o){const a=Date.now()+s,c=new Bi(t,e,a,i,o);return c.start(s),c}start(t){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),t)}skipDelay(){return this.handleDelayElapsed()}cancel(t){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new F(S.CANCELLED,"Operation cancelled"+(t?": "+t:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(t=>this.deferred.resolve(t))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function qi(n,t){if(Te("AsyncQueue",`${t}: ${n}`),Es(n))return new F(S.UNAVAILABLE,`${t}: ${n}`);throw n}/**
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
 */class In{constructor(t){this.comparator=t?(e,s)=>t(e,s)||$.comparator(e.key,s.key):(e,s)=>$.comparator(e.key,s.key),this.keyedMap=rs(),this.sortedSet=new pt(this.comparator)}static emptySet(t){return new In(t.comparator)}has(t){return this.keyedMap.get(t)!=null}get(t){return this.keyedMap.get(t)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(t){const e=this.keyedMap.get(t);return e?this.sortedSet.indexOf(e):-1}get size(){return this.sortedSet.size}forEach(t){this.sortedSet.inorderTraversal((e,s)=>(t(e),!1))}add(t){const e=this.delete(t.key);return e.copy(e.keyedMap.insert(t.key,t),e.sortedSet.insert(t,null))}delete(t){const e=this.get(t);return e?this.copy(this.keyedMap.remove(t),this.sortedSet.remove(e)):this}isEqual(t){if(!(t instanceof In)||this.size!==t.size)return!1;const e=this.sortedSet.getIterator(),s=t.sortedSet.getIterator();for(;e.hasNext();){const i=e.getNext().key,o=s.getNext().key;if(!i.isEqual(o))return!1}return!0}toString(){const t=[];return this.forEach(e=>{t.push(e.toString())}),t.length===0?"DocumentSet ()":`DocumentSet (
  `+t.join(`  
`)+`
)`}copy(t,e){const s=new In;return s.comparator=this.comparator,s.keyedMap=t,s.sortedSet=e,s}}/**
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
 */class Ia{constructor(){this.W_=new pt($.comparator)}track(t){const e=t.doc.key,s=this.W_.get(e);s?t.type!==0&&s.type===3?this.W_=this.W_.insert(e,t):t.type===3&&s.type!==1?this.W_=this.W_.insert(e,{type:s.type,doc:t.doc}):t.type===2&&s.type===2?this.W_=this.W_.insert(e,{type:2,doc:t.doc}):t.type===2&&s.type===0?this.W_=this.W_.insert(e,{type:0,doc:t.doc}):t.type===1&&s.type===0?this.W_=this.W_.remove(e):t.type===1&&s.type===2?this.W_=this.W_.insert(e,{type:1,doc:s.doc}):t.type===0&&s.type===1?this.W_=this.W_.insert(e,{type:2,doc:t.doc}):K():this.W_=this.W_.insert(e,t)}G_(){const t=[];return this.W_.inorderTraversal((e,s)=>{t.push(s)}),t}}class Sn{constructor(t,e,s,i,o,a,c,h,f){this.query=t,this.docs=e,this.oldDocs=s,this.docChanges=i,this.mutatedKeys=o,this.fromCache=a,this.syncStateChanged=c,this.excludesMetadataChanges=h,this.hasCachedResults=f}static fromInitialDocuments(t,e,s,i,o){const a=[];return e.forEach(c=>{a.push({type:0,doc:c})}),new Sn(t,e,In.emptySet(e),a,s,i,!0,!1,o)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(t){if(!(this.fromCache===t.fromCache&&this.hasCachedResults===t.hasCachedResults&&this.syncStateChanged===t.syncStateChanged&&this.mutatedKeys.isEqual(t.mutatedKeys)&&vr(this.query,t.query)&&this.docs.isEqual(t.docs)&&this.oldDocs.isEqual(t.oldDocs)))return!1;const e=this.docChanges,s=t.docChanges;if(e.length!==s.length)return!1;for(let i=0;i<e.length;i++)if(e[i].type!==s[i].type||!e[i].doc.isEqual(s[i].doc))return!1;return!0}}/**
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
 */class Vd{constructor(){this.z_=void 0,this.j_=[]}H_(){return this.j_.some(t=>t.J_())}}class bd{constructor(){this.queries=Ra(),this.onlineState="Unknown",this.Y_=new Set}terminate(){(function(e,s){const i=X(e),o=i.queries;i.queries=Ra(),o.forEach((a,c)=>{for(const h of c.j_)h.onError(s)})})(this,new F(S.ABORTED,"Firestore shutting down"))}}function Ra(){return new xn(n=>_l(n),vr)}async function Hl(n,t){const e=X(n);let s=3;const i=t.query;let o=e.queries.get(i);o?!o.H_()&&t.J_()&&(s=2):(o=new Vd,s=t.J_()?0:1);try{switch(s){case 0:o.z_=await e.onListen(i,!0);break;case 1:o.z_=await e.onListen(i,!1);break;case 2:await e.onFirstRemoteStoreListen(i)}}catch(a){const c=qi(a,`Initialization of query '${En(t.query)}' failed`);return void t.onError(c)}e.queries.set(i,o),o.j_.push(t),t.Z_(e.onlineState),o.z_&&t.X_(o.z_)&&ji(e)}async function Xl(n,t){const e=X(n),s=t.query;let i=3;const o=e.queries.get(s);if(o){const a=o.j_.indexOf(t);a>=0&&(o.j_.splice(a,1),o.j_.length===0?i=t.J_()?0:1:!o.H_()&&t.J_()&&(i=2))}switch(i){case 0:return e.queries.delete(s),e.onUnlisten(s,!0);case 1:return e.queries.delete(s),e.onUnlisten(s,!1);case 2:return e.onLastRemoteStoreUnlisten(s);default:return}}function Sd(n,t){const e=X(n);let s=!1;for(const i of t){const o=i.query,a=e.queries.get(o);if(a){for(const c of a.j_)c.X_(i)&&(s=!0);a.z_=i}}s&&ji(e)}function kd(n,t,e){const s=X(n),i=s.queries.get(t);if(i)for(const o of i.j_)o.onError(e);s.queries.delete(t)}function ji(n){n.Y_.forEach(t=>{t.next()})}var pi,Pa;(Pa=pi||(pi={})).ea="default",Pa.Cache="cache";class Yl{constructor(t,e,s){this.query=t,this.ta=e,this.na=!1,this.ra=null,this.onlineState="Unknown",this.options=s||{}}X_(t){if(!this.options.includeMetadataChanges){const s=[];for(const i of t.docChanges)i.type!==3&&s.push(i);t=new Sn(t.query,t.docs,t.oldDocs,s,t.mutatedKeys,t.fromCache,t.syncStateChanged,!0,t.hasCachedResults)}let e=!1;return this.na?this.ia(t)&&(this.ta.next(t),e=!0):this.sa(t,this.onlineState)&&(this.oa(t),e=!0),this.ra=t,e}onError(t){this.ta.error(t)}Z_(t){this.onlineState=t;let e=!1;return this.ra&&!this.na&&this.sa(this.ra,t)&&(this.oa(this.ra),e=!0),e}sa(t,e){if(!t.fromCache||!this.J_())return!0;const s=e!=="Offline";return(!this.options._a||!s)&&(!t.docs.isEmpty()||t.hasCachedResults||e==="Offline")}ia(t){if(t.docChanges.length>0)return!0;const e=this.ra&&this.ra.hasPendingWrites!==t.hasPendingWrites;return!(!t.syncStateChanged&&!e)&&this.options.includeMetadataChanges===!0}oa(t){t=Sn.fromInitialDocuments(t.query,t.docs,t.mutatedKeys,t.fromCache,t.hasCachedResults),this.na=!0,this.ta.next(t)}J_(){return this.options.source!==pi.Cache}}/**
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
 */class Jl{constructor(t){this.key=t}}class Zl{constructor(t){this.key=t}}class Dd{constructor(t,e){this.query=t,this.Ta=e,this.Ea=null,this.hasCachedResults=!1,this.current=!1,this.da=et(),this.mutatedKeys=et(),this.Aa=yl(t),this.Ra=new In(this.Aa)}get Va(){return this.Ta}ma(t,e){const s=e?e.fa:new Ia,i=e?e.Ra:this.Ra;let o=e?e.mutatedKeys:this.mutatedKeys,a=i,c=!1;const h=this.query.limitType==="F"&&i.size===this.query.limit?i.last():null,f=this.query.limitType==="L"&&i.size===this.query.limit?i.first():null;if(t.inorderTraversal((p,w)=>{const R=i.get(p),b=Tr(this.query,w)?w:null,N=!!R&&this.mutatedKeys.has(R.key),L=!!b&&(b.hasLocalMutations||this.mutatedKeys.has(b.key)&&b.hasCommittedMutations);let D=!1;R&&b?R.data.isEqual(b.data)?N!==L&&(s.track({type:3,doc:b}),D=!0):this.ga(R,b)||(s.track({type:2,doc:b}),D=!0,(h&&this.Aa(b,h)>0||f&&this.Aa(b,f)<0)&&(c=!0)):!R&&b?(s.track({type:0,doc:b}),D=!0):R&&!b&&(s.track({type:1,doc:R}),D=!0,(h||f)&&(c=!0)),D&&(b?(a=a.add(b),o=L?o.add(p):o.delete(p)):(a=a.delete(p),o=o.delete(p)))}),this.query.limit!==null)for(;a.size>this.query.limit;){const p=this.query.limitType==="F"?a.last():a.first();a=a.delete(p.key),o=o.delete(p.key),s.track({type:1,doc:p})}return{Ra:a,fa:s,ns:c,mutatedKeys:o}}ga(t,e){return t.hasLocalMutations&&e.hasCommittedMutations&&!e.hasLocalMutations}applyChanges(t,e,s,i){const o=this.Ra;this.Ra=t.Ra,this.mutatedKeys=t.mutatedKeys;const a=t.fa.G_();a.sort((p,w)=>function(b,N){const L=D=>{switch(D){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return K()}};return L(b)-L(N)}(p.type,w.type)||this.Aa(p.doc,w.doc)),this.pa(s),i=i!=null&&i;const c=e&&!i?this.ya():[],h=this.da.size===0&&this.current&&!i?1:0,f=h!==this.Ea;return this.Ea=h,a.length!==0||f?{snapshot:new Sn(this.query,t.Ra,o,a,t.mutatedKeys,h===0,f,!1,!!s&&s.resumeToken.approximateByteSize()>0),wa:c}:{wa:c}}Z_(t){return this.current&&t==="Offline"?(this.current=!1,this.applyChanges({Ra:this.Ra,fa:new Ia,mutatedKeys:this.mutatedKeys,ns:!1},!1)):{wa:[]}}Sa(t){return!this.Ta.has(t)&&!!this.Ra.has(t)&&!this.Ra.get(t).hasLocalMutations}pa(t){t&&(t.addedDocuments.forEach(e=>this.Ta=this.Ta.add(e)),t.modifiedDocuments.forEach(e=>{}),t.removedDocuments.forEach(e=>this.Ta=this.Ta.delete(e)),this.current=t.current)}ya(){if(!this.current)return[];const t=this.da;this.da=et(),this.Ra.forEach(s=>{this.Sa(s.key)&&(this.da=this.da.add(s.key))});const e=[];return t.forEach(s=>{this.da.has(s)||e.push(new Zl(s))}),this.da.forEach(s=>{t.has(s)||e.push(new Jl(s))}),e}ba(t){this.Ta=t.Ts,this.da=et();const e=this.ma(t.documents);return this.applyChanges(e,!0)}Da(){return Sn.fromInitialDocuments(this.query,this.Ra,this.mutatedKeys,this.Ea===0,this.hasCachedResults)}}class Nd{constructor(t,e,s){this.query=t,this.targetId=e,this.view=s}}class xd{constructor(t){this.key=t,this.va=!1}}class Od{constructor(t,e,s,i,o,a){this.localStore=t,this.remoteStore=e,this.eventManager=s,this.sharedClientState=i,this.currentUser=o,this.maxConcurrentLimboResolutions=a,this.Ca={},this.Fa=new xn(c=>_l(c),vr),this.Ma=new Map,this.xa=new Set,this.Oa=new pt($.comparator),this.Na=new Map,this.La=new Ni,this.Ba={},this.ka=new Map,this.qa=bn.kn(),this.onlineState="Unknown",this.Qa=void 0}get isPrimaryClient(){return this.Qa===!0}}async function Md(n,t,e=!0){const s=iu(n);let i;const o=s.Fa.get(t);return o?(s.sharedClientState.addLocalQueryTarget(o.targetId),i=o.view.Da()):i=await tu(s,t,e,!0),i}async function Ld(n,t){const e=iu(n);await tu(e,t,!0,!1)}async function tu(n,t,e,s){const i=await id(n.localStore,ce(t)),o=i.targetId,a=n.sharedClientState.addLocalQueryTarget(o,e);let c;return s&&(c=await Fd(n,t,o,a==="current",i.resumeToken)),n.isPrimaryClient&&e&&$l(n.remoteStore,i),c}async function Fd(n,t,e,s,i){n.Ka=(w,R,b)=>async function(L,D,W,J){let Y=D.view.ma(W);Y.ns&&(Y=await Ta(L.localStore,D.query,!1).then(({documents:v})=>D.view.ma(v,Y)));const Z=J&&J.targetChanges.get(D.targetId),Vt=J&&J.targetMismatches.get(D.targetId)!=null,ct=D.view.applyChanges(Y,L.isPrimaryClient,Z,Vt);return Va(L,D.targetId,ct.wa),ct.snapshot}(n,w,R,b);const o=await Ta(n.localStore,t,!0),a=new Dd(t,o.Ts),c=a.ma(o.documents),h=As.createSynthesizedTargetChangeForCurrentChange(e,s&&n.onlineState!=="Offline",i),f=a.applyChanges(c,n.isPrimaryClient,h);Va(n,e,f.wa);const p=new Nd(t,e,a);return n.Fa.set(t,p),n.Ma.has(e)?n.Ma.get(e).push(t):n.Ma.set(e,[t]),f.snapshot}async function Ud(n,t,e){const s=X(n),i=s.Fa.get(t),o=s.Ma.get(i.targetId);if(o.length>1)return s.Ma.set(i.targetId,o.filter(a=>!vr(a,t))),void s.Fa.delete(t);s.isPrimaryClient?(s.sharedClientState.removeLocalQueryTarget(i.targetId),s.sharedClientState.isActiveQueryTarget(i.targetId)||await mi(s.localStore,i.targetId,!1).then(()=>{s.sharedClientState.clearQueryState(i.targetId),e&&Mi(s.remoteStore,i.targetId),gi(s,i.targetId)}).catch(Ts)):(gi(s,i.targetId),await mi(s.localStore,i.targetId,!0))}async function Bd(n,t){const e=X(n),s=e.Fa.get(t),i=e.Ma.get(s.targetId);e.isPrimaryClient&&i.length===1&&(e.sharedClientState.removeLocalQueryTarget(s.targetId),Mi(e.remoteStore,s.targetId))}async function qd(n,t,e){const s=Wd(n);try{const i=await function(a,c){const h=X(a),f=It.now(),p=c.reduce((b,N)=>b.add(N.key),et());let w,R;return h.persistence.runTransaction("Locally write mutations","readwrite",b=>{let N=Ee(),L=et();return h.cs.getEntries(b,p).next(D=>{N=D,N.forEach((W,J)=>{J.isValidDocument()||(L=L.add(W))})}).next(()=>h.localDocuments.getOverlayedDocuments(b,N)).next(D=>{w=D;const W=[];for(const J of c){const Y=uh(J,w.get(J.key).overlayedDocument);Y!=null&&W.push(new Be(J.key,Y,ul(Y.value.mapValue),Zt.exists(!0)))}return h.mutationQueue.addMutationBatch(b,f,W,c)}).next(D=>{R=D;const W=D.applyToLocalDocumentSet(w,L);return h.documentOverlayCache.saveOverlays(b,D.batchId,W)})}).then(()=>({batchId:R.batchId,changes:Tl(w)}))}(s.localStore,t);s.sharedClientState.addPendingMutation(i.batchId),function(a,c,h){let f=a.Ba[a.currentUser.toKey()];f||(f=new pt(it)),f=f.insert(c,h),a.Ba[a.currentUser.toKey()]=f}(s,i.batchId,e),await Rs(s,i.changes),await Pr(s.remoteStore)}catch(i){const o=qi(i,"Failed to persist write");e.reject(o)}}async function eu(n,t){const e=X(n);try{const s=await nd(e.localStore,t);t.targetChanges.forEach((i,o)=>{const a=e.Na.get(o);a&&(at(i.addedDocuments.size+i.modifiedDocuments.size+i.removedDocuments.size<=1),i.addedDocuments.size>0?a.va=!0:i.modifiedDocuments.size>0?at(a.va):i.removedDocuments.size>0&&(at(a.va),a.va=!1))}),await Rs(e,s,t)}catch(s){await Ts(s)}}function Ca(n,t,e){const s=X(n);if(s.isPrimaryClient&&e===0||!s.isPrimaryClient&&e===1){const i=[];s.Fa.forEach((o,a)=>{const c=a.view.Z_(t);c.snapshot&&i.push(c.snapshot)}),function(a,c){const h=X(a);h.onlineState=c;let f=!1;h.queries.forEach((p,w)=>{for(const R of w.j_)R.Z_(c)&&(f=!0)}),f&&ji(h)}(s.eventManager,t),i.length&&s.Ca.d_(i),s.onlineState=t,s.isPrimaryClient&&s.sharedClientState.setOnlineState(t)}}async function jd(n,t,e){const s=X(n);s.sharedClientState.updateQueryState(t,"rejected",e);const i=s.Na.get(t),o=i&&i.key;if(o){let a=new pt($.comparator);a=a.insert(o,Bt.newNoDocument(o,H.min()));const c=et().add(o),h=new Ar(H.min(),new Map,new pt(it),a,c);await eu(s,h),s.Oa=s.Oa.remove(o),s.Na.delete(t),$i(s)}else await mi(s.localStore,t,!1).then(()=>gi(s,t,e)).catch(Ts)}async function $d(n,t){const e=X(n),s=t.batch.batchId;try{const i=await ed(e.localStore,t);su(e,s,null),nu(e,s),e.sharedClientState.updateMutationState(s,"acknowledged"),await Rs(e,i)}catch(i){await Ts(i)}}async function zd(n,t,e){const s=X(n);try{const i=await function(a,c){const h=X(a);return h.persistence.runTransaction("Reject batch","readwrite-primary",f=>{let p;return h.mutationQueue.lookupMutationBatch(f,c).next(w=>(at(w!==null),p=w.keys(),h.mutationQueue.removeMutationBatch(f,w))).next(()=>h.mutationQueue.performConsistencyCheck(f)).next(()=>h.documentOverlayCache.removeOverlaysForBatchId(f,p,c)).next(()=>h.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(f,p)).next(()=>h.localDocuments.getDocuments(f,p))})}(s.localStore,t);su(s,t,e),nu(s,t),s.sharedClientState.updateMutationState(t,"rejected",e),await Rs(s,i)}catch(i){await Ts(i)}}function nu(n,t){(n.ka.get(t)||[]).forEach(e=>{e.resolve()}),n.ka.delete(t)}function su(n,t,e){const s=X(n);let i=s.Ba[s.currentUser.toKey()];if(i){const o=i.get(t);o&&(e?o.reject(e):o.resolve(),i=i.remove(t)),s.Ba[s.currentUser.toKey()]=i}}function gi(n,t,e=null){n.sharedClientState.removeLocalQueryTarget(t);for(const s of n.Ma.get(t))n.Fa.delete(s),e&&n.Ca.$a(s,e);n.Ma.delete(t),n.isPrimaryClient&&n.La.gr(t).forEach(s=>{n.La.containsKey(s)||ru(n,s)})}function ru(n,t){n.xa.delete(t.path.canonicalString());const e=n.Oa.get(t);e!==null&&(Mi(n.remoteStore,e),n.Oa=n.Oa.remove(t),n.Na.delete(e),$i(n))}function Va(n,t,e){for(const s of e)s instanceof Jl?(n.La.addReference(s.key,t),Kd(n,s)):s instanceof Zl?(B("SyncEngine","Document no longer in limbo: "+s.key),n.La.removeReference(s.key,t),n.La.containsKey(s.key)||ru(n,s.key)):K()}function Kd(n,t){const e=t.key,s=e.path.canonicalString();n.Oa.get(e)||n.xa.has(s)||(B("SyncEngine","New document in limbo: "+e),n.xa.add(s),$i(n))}function $i(n){for(;n.xa.size>0&&n.Oa.size<n.maxConcurrentLimboResolutions;){const t=n.xa.values().next().value;n.xa.delete(t);const e=new $(dt.fromString(t)),s=n.qa.next();n.Na.set(s,new xd(e)),n.Oa=n.Oa.insert(e,s),$l(n.remoteStore,new Ne(ce(yr(e.path)),s,"TargetPurposeLimboResolution",wi.oe))}}async function Rs(n,t,e){const s=X(n),i=[],o=[],a=[];s.Fa.isEmpty()||(s.Fa.forEach((c,h)=>{a.push(s.Ka(h,t,e).then(f=>{var p;if((f||e)&&s.isPrimaryClient){const w=f?!f.fromCache:(p=e==null?void 0:e.targetChanges.get(h.targetId))===null||p===void 0?void 0:p.current;s.sharedClientState.updateQueryState(h.targetId,w?"current":"not-current")}if(f){i.push(f);const w=Oi.Wi(h.targetId,f);o.push(w)}}))}),await Promise.all(a),s.Ca.d_(i),await async function(h,f){const p=X(h);try{await p.persistence.runTransaction("notifyLocalViewChanges","readwrite",w=>k.forEach(f,R=>k.forEach(R.$i,b=>p.persistence.referenceDelegate.addReference(w,R.targetId,b)).next(()=>k.forEach(R.Ui,b=>p.persistence.referenceDelegate.removeReference(w,R.targetId,b)))))}catch(w){if(!Es(w))throw w;B("LocalStore","Failed to update sequence numbers: "+w)}for(const w of f){const R=w.targetId;if(!w.fromCache){const b=p.os.get(R),N=b.snapshotVersion,L=b.withLastLimboFreeSnapshotVersion(N);p.os=p.os.insert(R,L)}}}(s.localStore,o))}async function Gd(n,t){const e=X(n);if(!e.currentUser.isEqual(t)){B("SyncEngine","User change. New user:",t.toKey());const s=await Ul(e.localStore,t);e.currentUser=t,function(o,a){o.ka.forEach(c=>{c.forEach(h=>{h.reject(new F(S.CANCELLED,a))})}),o.ka.clear()}(e,"'waitForPendingWrites' promise is rejected due to a user change."),e.sharedClientState.handleUserChange(t,s.removedBatchIds,s.addedBatchIds),await Rs(e,s.hs)}}function Qd(n,t){const e=X(n),s=e.Na.get(t);if(s&&s.va)return et().add(s.key);{let i=et();const o=e.Ma.get(t);if(!o)return i;for(const a of o){const c=e.Fa.get(a);i=i.unionWith(c.view.Va)}return i}}function iu(n){const t=X(n);return t.remoteStore.remoteSyncer.applyRemoteEvent=eu.bind(null,t),t.remoteStore.remoteSyncer.getRemoteKeysForTarget=Qd.bind(null,t),t.remoteStore.remoteSyncer.rejectListen=jd.bind(null,t),t.Ca.d_=Sd.bind(null,t.eventManager),t.Ca.$a=kd.bind(null,t.eventManager),t}function Wd(n){const t=X(n);return t.remoteStore.remoteSyncer.applySuccessfulWrite=$d.bind(null,t),t.remoteStore.remoteSyncer.rejectFailedWrite=zd.bind(null,t),t}class pr{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(t){this.serializer=Ir(t.databaseInfo.databaseId),this.sharedClientState=this.Wa(t),this.persistence=this.Ga(t),await this.persistence.start(),this.localStore=this.za(t),this.gcScheduler=this.ja(t,this.localStore),this.indexBackfillerScheduler=this.Ha(t,this.localStore)}ja(t,e){return null}Ha(t,e){return null}za(t){return td(this.persistence,new Jh,t.initialUser,this.serializer)}Ga(t){return new Hh(xi.Zr,this.serializer)}Wa(t){return new ad}async terminate(){var t,e;(t=this.gcScheduler)===null||t===void 0||t.stop(),(e=this.indexBackfillerScheduler)===null||e===void 0||e.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}pr.provider={build:()=>new pr};class _i{async initialize(t,e){this.localStore||(this.localStore=t.localStore,this.sharedClientState=t.sharedClientState,this.datastore=this.createDatastore(e),this.remoteStore=this.createRemoteStore(e),this.eventManager=this.createEventManager(e),this.syncEngine=this.createSyncEngine(e,!t.synchronizeTabs),this.sharedClientState.onlineStateHandler=s=>Ca(this.syncEngine,s,1),this.remoteStore.remoteSyncer.handleCredentialChange=Gd.bind(null,this.syncEngine),await Cd(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(t){return function(){return new bd}()}createDatastore(t){const e=Ir(t.databaseInfo.databaseId),s=function(o){return new hd(o)}(t.databaseInfo);return function(o,a,c,h){return new md(o,a,c,h)}(t.authCredentials,t.appCheckCredentials,s,e)}createRemoteStore(t){return function(s,i,o,a,c){return new gd(s,i,o,a,c)}(this.localStore,this.datastore,t.asyncQueue,e=>Ca(this.syncEngine,e,0),function(){return wa.D()?new wa:new ld}())}createSyncEngine(t,e){return function(i,o,a,c,h,f,p){const w=new Od(i,o,a,c,h,f);return p&&(w.Qa=!0),w}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,t.initialUser,t.maxConcurrentLimboResolutions,e)}async terminate(){var t,e;await async function(i){const o=X(i);B("RemoteStore","RemoteStore shutting down."),o.L_.add(5),await Is(o),o.k_.shutdown(),o.q_.set("Unknown")}(this.remoteStore),(t=this.datastore)===null||t===void 0||t.terminate(),(e=this.eventManager)===null||e===void 0||e.terminate()}}_i.provider={build:()=>new _i};/**
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
 */class ou{constructor(t){this.observer=t,this.muted=!1}next(t){this.muted||this.observer.next&&this.Ya(this.observer.next,t)}error(t){this.muted||(this.observer.error?this.Ya(this.observer.error,t):Te("Uncaught Error in snapshot listener:",t.toString()))}Za(){this.muted=!0}Ya(t,e){setTimeout(()=>{this.muted||t(e)},0)}}/**
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
 */class Hd{constructor(t,e,s,i,o){this.authCredentials=t,this.appCheckCredentials=e,this.asyncQueue=s,this.databaseInfo=i,this.user=Ut.UNAUTHENTICATED,this.clientId=ol.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=o,this.authCredentials.start(s,async a=>{B("FirestoreClient","Received user=",a.uid),await this.authCredentialListener(a),this.user=a}),this.appCheckCredentials.start(s,a=>(B("FirestoreClient","Received new app check token=",a),this.appCheckCredentialListener(a,this.user)))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(t){this.authCredentialListener=t}setAppCheckTokenChangeListener(t){this.appCheckCredentialListener=t}terminate(){this.asyncQueue.enterRestrictedMode();const t=new xe;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),t.resolve()}catch(e){const s=qi(e,"Failed to shutdown persistence");t.reject(s)}}),t.promise}}async function ei(n,t){n.asyncQueue.verifyOperationInProgress(),B("FirestoreClient","Initializing OfflineComponentProvider");const e=n.configuration;await t.initialize(e);let s=e.initialUser;n.setCredentialChangeListener(async i=>{s.isEqual(i)||(await Ul(t.localStore,i),s=i)}),t.persistence.setDatabaseDeletedListener(()=>n.terminate()),n._offlineComponents=t}async function ba(n,t){n.asyncQueue.verifyOperationInProgress();const e=await Xd(n);B("FirestoreClient","Initializing OnlineComponentProvider"),await t.initialize(e,n.configuration),n.setCredentialChangeListener(s=>Aa(t.remoteStore,s)),n.setAppCheckTokenChangeListener((s,i)=>Aa(t.remoteStore,i)),n._onlineComponents=t}async function Xd(n){if(!n._offlineComponents)if(n._uninitializedComponentsProvider){B("FirestoreClient","Using user provided OfflineComponentProvider");try{await ei(n,n._uninitializedComponentsProvider._offline)}catch(t){const e=t;if(!function(i){return i.name==="FirebaseError"?i.code===S.FAILED_PRECONDITION||i.code===S.UNIMPLEMENTED:!(typeof DOMException<"u"&&i instanceof DOMException)||i.code===22||i.code===20||i.code===11}(e))throw e;Rn("Error using user provided cache. Falling back to memory cache: "+e),await ei(n,new pr)}}else B("FirestoreClient","Using default OfflineComponentProvider"),await ei(n,new pr);return n._offlineComponents}async function au(n){return n._onlineComponents||(n._uninitializedComponentsProvider?(B("FirestoreClient","Using user provided OnlineComponentProvider"),await ba(n,n._uninitializedComponentsProvider._online)):(B("FirestoreClient","Using default OnlineComponentProvider"),await ba(n,new _i))),n._onlineComponents}function Yd(n){return au(n).then(t=>t.syncEngine)}async function yi(n){const t=await au(n),e=t.eventManager;return e.onListen=Md.bind(null,t.syncEngine),e.onUnlisten=Ud.bind(null,t.syncEngine),e.onFirstRemoteStoreListen=Ld.bind(null,t.syncEngine),e.onLastRemoteStoreUnlisten=Bd.bind(null,t.syncEngine),e}function Jd(n,t,e={}){const s=new xe;return n.asyncQueue.enqueueAndForget(async()=>function(o,a,c,h,f){const p=new ou({next:R=>{p.Za(),a.enqueueAndForget(()=>Xl(o,w));const b=R.docs.has(c);!b&&R.fromCache?f.reject(new F(S.UNAVAILABLE,"Failed to get document because the client is offline.")):b&&R.fromCache&&h&&h.source==="server"?f.reject(new F(S.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):f.resolve(R)},error:R=>f.reject(R)}),w=new Yl(yr(c.path),p,{includeMetadataChanges:!0,_a:!0});return Hl(o,w)}(await yi(n),n.asyncQueue,t,e,s)),s.promise}/**
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
 */const Sa=new Map;/**
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
 */function uu(n,t,e){if(!e)throw new F(S.INVALID_ARGUMENT,`Function ${n}() cannot be called with an empty ${t}.`)}function Zd(n,t,e,s){if(t===!0&&s===!0)throw new F(S.INVALID_ARGUMENT,`${n} and ${e} cannot be used together.`)}function ka(n){if(!$.isDocumentKey(n))throw new F(S.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${n} has ${n.length}.`)}function Da(n){if($.isDocumentKey(n))throw new F(S.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${n} has ${n.length}.`)}function Cr(n){if(n===void 0)return"undefined";if(n===null)return"null";if(typeof n=="string")return n.length>20&&(n=`${n.substring(0,20)}...`),JSON.stringify(n);if(typeof n=="number"||typeof n=="boolean")return""+n;if(typeof n=="object"){if(n instanceof Array)return"an array";{const t=function(s){return s.constructor?s.constructor.name:null}(n);return t?`a custom ${t} object`:"an object"}}return typeof n=="function"?"a function":K()}function te(n,t){if("_delegate"in n&&(n=n._delegate),!(n instanceof t)){if(t.name===n.constructor.name)throw new F(S.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const e=Cr(n);throw new F(S.INVALID_ARGUMENT,`Expected type '${t.name}', but it was: ${e}`)}}return n}/**
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
 */class Na{constructor(t){var e,s;if(t.host===void 0){if(t.ssl!==void 0)throw new F(S.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=t.host,this.ssl=(e=t.ssl)===null||e===void 0||e;if(this.credentials=t.credentials,this.ignoreUndefinedProperties=!!t.ignoreUndefinedProperties,this.localCache=t.localCache,t.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(t.cacheSizeBytes!==-1&&t.cacheSizeBytes<1048576)throw new F(S.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=t.cacheSizeBytes}Zd("experimentalForceLongPolling",t.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",t.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!t.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:t.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!t.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=lu((s=t.experimentalLongPollingOptions)!==null&&s!==void 0?s:{}),function(o){if(o.timeoutSeconds!==void 0){if(isNaN(o.timeoutSeconds))throw new F(S.INVALID_ARGUMENT,`invalid long polling timeout: ${o.timeoutSeconds} (must not be NaN)`);if(o.timeoutSeconds<5)throw new F(S.INVALID_ARGUMENT,`invalid long polling timeout: ${o.timeoutSeconds} (minimum allowed value is 5)`);if(o.timeoutSeconds>30)throw new F(S.INVALID_ARGUMENT,`invalid long polling timeout: ${o.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!t.useFetchStreams}isEqual(t){return this.host===t.host&&this.ssl===t.ssl&&this.credentials===t.credentials&&this.cacheSizeBytes===t.cacheSizeBytes&&this.experimentalForceLongPolling===t.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===t.experimentalAutoDetectLongPolling&&function(s,i){return s.timeoutSeconds===i.timeoutSeconds}(this.experimentalLongPollingOptions,t.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===t.ignoreUndefinedProperties&&this.useFetchStreams===t.useFetchStreams}}class Vr{constructor(t,e,s,i){this._authCredentials=t,this._appCheckCredentials=e,this._databaseId=s,this._app=i,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new Na({}),this._settingsFrozen=!1,this._terminateTask="notTerminated"}get app(){if(!this._app)throw new F(S.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(t){if(this._settingsFrozen)throw new F(S.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new Na(t),t.credentials!==void 0&&(this._authCredentials=function(s){if(!s)return new _c;switch(s.type){case"firstParty":return new Ec(s.sessionIndex||"0",s.iamToken||null,s.authTokenFactory||null);case"provider":return s.client;default:throw new F(S.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(t.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(e){const s=Sa.get(e);s&&(B("ComponentProvider","Removing Datastore"),Sa.delete(e),s.terminate())}(this),Promise.resolve()}}function tf(n,t,e,s={}){var i;const o=(n=te(n,Vr))._getSettings(),a=`${t}:${e}`;if(o.host!=="firestore.googleapis.com"&&o.host!==a&&Rn("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used."),n._setSettings(Object.assign(Object.assign({},o),{host:a,ssl:!1})),s.mockUserToken){let c,h;if(typeof s.mockUserToken=="string")c=s.mockUserToken,h=Ut.MOCK_USER;else{c=Wa(s.mockUserToken,(i=n._app)===null||i===void 0?void 0:i.options.projectId);const f=s.mockUserToken.sub||s.mockUserToken.user_id;if(!f)throw new F(S.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");h=new Ut(f)}n._authCredentials=new yc(new il(c,h))}}/**
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
 */class qe{constructor(t,e,s){this.converter=e,this._query=s,this.type="query",this.firestore=t}withConverter(t){return new qe(this.firestore,t,this._query)}}class qt{constructor(t,e,s){this.converter=e,this._key=s,this.type="document",this.firestore=t}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new Oe(this.firestore,this.converter,this._key.path.popLast())}withConverter(t){return new qt(this.firestore,t,this._key)}}class Oe extends qe{constructor(t,e,s){super(t,e,yr(s)),this._path=s,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const t=this._path.popLast();return t.isEmpty()?null:new qt(this.firestore,null,new $(t))}withConverter(t){return new Oe(this.firestore,t,this._path)}}function xa(n,t,...e){if(n=Qt(n),uu("collection","path",t),n instanceof Vr){const s=dt.fromString(t,...e);return Da(s),new Oe(n,null,s)}{if(!(n instanceof qt||n instanceof Oe))throw new F(S.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const s=n._path.child(dt.fromString(t,...e));return Da(s),new Oe(n.firestore,null,s)}}function Je(n,t,...e){if(n=Qt(n),arguments.length===1&&(t=ol.newId()),uu("doc","path",t),n instanceof Vr){const s=dt.fromString(t,...e);return ka(s),new qt(n,null,new $(s))}{if(!(n instanceof qt||n instanceof Oe))throw new F(S.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const s=n._path.child(dt.fromString(t,...e));return ka(s),new qt(n.firestore,n instanceof Oe?n.converter:null,new $(s))}}/**
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
 */class Oa{constructor(t=Promise.resolve()){this.Pu=[],this.Iu=!1,this.Tu=[],this.Eu=null,this.du=!1,this.Au=!1,this.Ru=[],this.t_=new ql(this,"async_queue_retry"),this.Vu=()=>{const s=ti();s&&B("AsyncQueue","Visibility state changed to "+s.visibilityState),this.t_.jo()},this.mu=t;const e=ti();e&&typeof e.addEventListener=="function"&&e.addEventListener("visibilitychange",this.Vu)}get isShuttingDown(){return this.Iu}enqueueAndForget(t){this.enqueue(t)}enqueueAndForgetEvenWhileRestricted(t){this.fu(),this.gu(t)}enterRestrictedMode(t){if(!this.Iu){this.Iu=!0,this.Au=t||!1;const e=ti();e&&typeof e.removeEventListener=="function"&&e.removeEventListener("visibilitychange",this.Vu)}}enqueue(t){if(this.fu(),this.Iu)return new Promise(()=>{});const e=new xe;return this.gu(()=>this.Iu&&this.Au?Promise.resolve():(t().then(e.resolve,e.reject),e.promise)).then(()=>e.promise)}enqueueRetryable(t){this.enqueueAndForget(()=>(this.Pu.push(t),this.pu()))}async pu(){if(this.Pu.length!==0){try{await this.Pu[0](),this.Pu.shift(),this.t_.reset()}catch(t){if(!Es(t))throw t;B("AsyncQueue","Operation failed with retryable error: "+t)}this.Pu.length>0&&this.t_.Go(()=>this.pu())}}gu(t){const e=this.mu.then(()=>(this.du=!0,t().catch(s=>{this.Eu=s,this.du=!1;const i=function(a){let c=a.message||"";return a.stack&&(c=a.stack.includes(a.message)?a.stack:a.message+`
`+a.stack),c}(s);throw Te("INTERNAL UNHANDLED ERROR: ",i),s}).then(s=>(this.du=!1,s))));return this.mu=e,e}enqueueAfterDelay(t,e,s){this.fu(),this.Ru.indexOf(t)>-1&&(e=0);const i=Bi.createAndSchedule(this,t,e,s,o=>this.yu(o));return this.Tu.push(i),i}fu(){this.Eu&&K()}verifyOperationInProgress(){}async wu(){let t;do t=this.mu,await t;while(t!==this.mu)}Su(t){for(const e of this.Tu)if(e.timerId===t)return!0;return!1}bu(t){return this.wu().then(()=>{this.Tu.sort((e,s)=>e.targetTimeMs-s.targetTimeMs);for(const e of this.Tu)if(e.skipDelay(),t!=="all"&&e.timerId===t)break;return this.wu()})}Du(t){this.Ru.push(t)}yu(t){const e=this.Tu.indexOf(t);this.Tu.splice(e,1)}}function Ma(n){return function(e,s){if(typeof e!="object"||e===null)return!1;const i=e;for(const o of s)if(o in i&&typeof i[o]=="function")return!0;return!1}(n,["next","error","complete"])}class Ue extends Vr{constructor(t,e,s,i){super(t,e,s,i),this.type="firestore",this._queue=new Oa,this._persistenceKey=(i==null?void 0:i.name)||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const t=this._firestoreClient.terminate();this._queue=new Oa(t),this._firestoreClient=void 0,await t}}}function Se(n,t){const e=typeof n=="object"?n:Ka(),s=typeof n=="string"?n:"(default)",i=Ga(e,"firestore").getImmediate({identifier:s});if(!i._initialized){const o=Qa("firestore");o&&tf(i,...o)}return i}function zi(n){if(n._terminated)throw new F(S.FAILED_PRECONDITION,"The client has already been terminated.");return n._firestoreClient||ef(n),n._firestoreClient}function ef(n){var t,e,s;const i=n._freezeSettings(),o=function(c,h,f,p){return new xc(c,h,f,p.host,p.ssl,p.experimentalForceLongPolling,p.experimentalAutoDetectLongPolling,lu(p.experimentalLongPollingOptions),p.useFetchStreams)}(n._databaseId,((t=n._app)===null||t===void 0?void 0:t.options.appId)||"",n._persistenceKey,i);n._componentsProvider||!((e=i.localCache)===null||e===void 0)&&e._offlineComponentProvider&&(!((s=i.localCache)===null||s===void 0)&&s._onlineComponentProvider)&&(n._componentsProvider={_offline:i.localCache._offlineComponentProvider,_online:i.localCache._onlineComponentProvider}),n._firestoreClient=new Hd(n._authCredentials,n._appCheckCredentials,n._queue,o,n._componentsProvider&&function(c){const h=c==null?void 0:c._online.build();return{_offline:c==null?void 0:c._offline.build(h),_online:h}}(n._componentsProvider))}/**
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
 */class kn{constructor(t){this._byteString=t}static fromBase64String(t){try{return new kn(xt.fromBase64String(t))}catch(e){throw new F(S.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+e)}}static fromUint8Array(t){return new kn(xt.fromUint8Array(t))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(t){return this._byteString.isEqual(t._byteString)}}/**
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
 */class br{constructor(...t){for(let e=0;e<t.length;++e)if(t[e].length===0)throw new F(S.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new Dt(t)}isEqual(t){return this._internalPath.isEqual(t._internalPath)}}/**
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
 */class Sr{constructor(t){this._methodName=t}}/**
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
 */class Ki{constructor(t,e){if(!isFinite(t)||t<-90||t>90)throw new F(S.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+t);if(!isFinite(e)||e<-180||e>180)throw new F(S.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+e);this._lat=t,this._long=e}get latitude(){return this._lat}get longitude(){return this._long}isEqual(t){return this._lat===t._lat&&this._long===t._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(t){return it(this._lat,t._lat)||it(this._long,t._long)}}/**
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
 */class Gi{constructor(t){this._values=(t||[]).map(e=>e)}toArray(){return this._values.map(t=>t)}isEqual(t){return function(s,i){if(s.length!==i.length)return!1;for(let o=0;o<s.length;++o)if(s[o]!==i[o])return!1;return!0}(this._values,t._values)}}/**
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
 */const nf=/^__.*__$/;class sf{constructor(t,e,s){this.data=t,this.fieldMask=e,this.fieldTransforms=s}toMutation(t,e){return this.fieldMask!==null?new Be(t,this.data,this.fieldMask,e,this.fieldTransforms):new ws(t,this.data,e,this.fieldTransforms)}}class cu{constructor(t,e,s){this.data=t,this.fieldMask=e,this.fieldTransforms=s}toMutation(t,e){return new Be(t,this.data,this.fieldMask,e,this.fieldTransforms)}}function hu(n){switch(n){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw K()}}class Qi{constructor(t,e,s,i,o,a){this.settings=t,this.databaseId=e,this.serializer=s,this.ignoreUndefinedProperties=i,o===void 0&&this.vu(),this.fieldTransforms=o||[],this.fieldMask=a||[]}get path(){return this.settings.path}get Cu(){return this.settings.Cu}Fu(t){return new Qi(Object.assign(Object.assign({},this.settings),t),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}Mu(t){var e;const s=(e=this.path)===null||e===void 0?void 0:e.child(t),i=this.Fu({path:s,xu:!1});return i.Ou(t),i}Nu(t){var e;const s=(e=this.path)===null||e===void 0?void 0:e.child(t),i=this.Fu({path:s,xu:!1});return i.vu(),i}Lu(t){return this.Fu({path:void 0,xu:!0})}Bu(t){return gr(t,this.settings.methodName,this.settings.ku||!1,this.path,this.settings.qu)}contains(t){return this.fieldMask.find(e=>t.isPrefixOf(e))!==void 0||this.fieldTransforms.find(e=>t.isPrefixOf(e.field))!==void 0}vu(){if(this.path)for(let t=0;t<this.path.length;t++)this.Ou(this.path.get(t))}Ou(t){if(t.length===0)throw this.Bu("Document fields must not be empty");if(hu(this.Cu)&&nf.test(t))throw this.Bu('Document fields cannot begin and end with "__"')}}class rf{constructor(t,e,s){this.databaseId=t,this.ignoreUndefinedProperties=e,this.serializer=s||Ir(t)}Qu(t,e,s,i=!1){return new Qi({Cu:t,methodName:e,qu:s,path:Dt.emptyPath(),xu:!1,ku:i},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function kr(n){const t=n._freezeSettings(),e=Ir(n._databaseId);return new rf(n._databaseId,!!t.ignoreUndefinedProperties,e)}function du(n,t,e,s,i,o={}){const a=n.Qu(o.merge||o.mergeFields?2:0,t,e,i);Hi("Data must be an object, but it was:",a,s);const c=fu(s,a);let h,f;if(o.merge)h=new Yt(a.fieldMask),f=a.fieldTransforms;else if(o.mergeFields){const p=[];for(const w of o.mergeFields){const R=vi(t,w,e);if(!a.contains(R))throw new F(S.INVALID_ARGUMENT,`Field '${R}' is specified in your field mask but missing from your input data.`);pu(p,R)||p.push(R)}h=new Yt(p),f=a.fieldTransforms.filter(w=>h.covers(w.field))}else h=null,f=a.fieldTransforms;return new sf(new Gt(c),h,f)}class Dr extends Sr{_toFieldTransform(t){if(t.Cu!==2)throw t.Cu===1?t.Bu(`${this._methodName}() can only appear at the top level of your update data`):t.Bu(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return t.fieldMask.push(t.path),null}isEqual(t){return t instanceof Dr}}class Wi extends Sr{_toFieldTransform(t){return new ih(t.path,new _s)}isEqual(t){return t instanceof Wi}}function of(n,t,e,s){const i=n.Qu(1,t,e);Hi("Data must be an object, but it was:",i,s);const o=[],a=Gt.empty();an(s,(h,f)=>{const p=Xi(t,h,e);f=Qt(f);const w=i.Nu(p);if(f instanceof Dr)o.push(p);else{const R=Ps(f,w);R!=null&&(o.push(p),a.set(p,R))}});const c=new Yt(o);return new cu(a,c,i.fieldTransforms)}function af(n,t,e,s,i,o){const a=n.Qu(1,t,e),c=[vi(t,s,e)],h=[i];if(o.length%2!=0)throw new F(S.INVALID_ARGUMENT,`Function ${t}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let R=0;R<o.length;R+=2)c.push(vi(t,o[R])),h.push(o[R+1]);const f=[],p=Gt.empty();for(let R=c.length-1;R>=0;--R)if(!pu(f,c[R])){const b=c[R];let N=h[R];N=Qt(N);const L=a.Nu(b);if(N instanceof Dr)f.push(b);else{const D=Ps(N,L);D!=null&&(f.push(b),p.set(b,D))}}const w=new Yt(f);return new cu(p,w,a.fieldTransforms)}function lf(n,t,e,s=!1){return Ps(e,n.Qu(s?4:3,t))}function Ps(n,t){if(mu(n=Qt(n)))return Hi("Unsupported field value:",t,n),fu(n,t);if(n instanceof Sr)return function(s,i){if(!hu(i.Cu))throw i.Bu(`${s._methodName}() can only be used with update() and set()`);if(!i.path)throw i.Bu(`${s._methodName}() is not currently supported inside arrays`);const o=s._toFieldTransform(i);o&&i.fieldTransforms.push(o)}(n,t),null;if(n===void 0&&t.ignoreUndefinedProperties)return null;if(t.path&&t.fieldMask.push(t.path),n instanceof Array){if(t.settings.xu&&t.Cu!==4)throw t.Bu("Nested arrays are not supported");return function(s,i){const o=[];let a=0;for(const c of s){let h=Ps(c,i.Lu(a));h==null&&(h={nullValue:"NULL_VALUE"}),o.push(h),a++}return{arrayValue:{values:o}}}(n,t)}return function(s,i){if((s=Qt(s))===null)return{nullValue:"NULL_VALUE"};if(typeof s=="number")return nh(i.serializer,s);if(typeof s=="boolean")return{booleanValue:s};if(typeof s=="string")return{stringValue:s};if(s instanceof Date){const o=It.fromDate(s);return{timestampValue:fr(i.serializer,o)}}if(s instanceof It){const o=new It(s.seconds,1e3*Math.floor(s.nanoseconds/1e3));return{timestampValue:fr(i.serializer,o)}}if(s instanceof Ki)return{geoPointValue:{latitude:s.latitude,longitude:s.longitude}};if(s instanceof kn)return{bytesValue:Dl(i.serializer,s._byteString)};if(s instanceof qt){const o=i.databaseId,a=s.firestore._databaseId;if(!a.isEqual(o))throw i.Bu(`Document reference is for database ${a.projectId}/${a.database} but should be for database ${o.projectId}/${o.database}`);return{referenceValue:Di(s.firestore._databaseId||i.databaseId,s._key.path)}}if(s instanceof Gi)return function(a,c){return{mapValue:{fields:{__type__:{stringValue:"__vector__"},value:{arrayValue:{values:a.toArray().map(h=>{if(typeof h!="number")throw c.Bu("VectorValues must only contain numeric values.");return Vi(c.serializer,h)})}}}}}}(s,i);throw i.Bu(`Unsupported field value: ${Cr(s)}`)}(n,t)}function fu(n,t){const e={};return al(n)?t.path&&t.path.length>0&&t.fieldMask.push(t.path):an(n,(s,i)=>{const o=Ps(i,t.Mu(s));o!=null&&(e[s]=o)}),{mapValue:{fields:e}}}function mu(n){return!(typeof n!="object"||n===null||n instanceof Array||n instanceof Date||n instanceof It||n instanceof Ki||n instanceof kn||n instanceof qt||n instanceof Sr||n instanceof Gi)}function Hi(n,t,e){if(!mu(e)||!function(i){return typeof i=="object"&&i!==null&&(Object.getPrototypeOf(i)===Object.prototype||Object.getPrototypeOf(i)===null)}(e)){const s=Cr(e);throw s==="an object"?t.Bu(n+" a custom object"):t.Bu(n+" "+s)}}function vi(n,t,e){if((t=Qt(t))instanceof br)return t._internalPath;if(typeof t=="string")return Xi(n,t);throw gr("Field path arguments must be of type string or ",n,!1,void 0,e)}const uf=new RegExp("[~\\*/\\[\\]]");function Xi(n,t,e){if(t.search(uf)>=0)throw gr(`Invalid field path (${t}). Paths must not contain '~', '*', '/', '[', or ']'`,n,!1,void 0,e);try{return new br(...t.split("."))._internalPath}catch{throw gr(`Invalid field path (${t}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,n,!1,void 0,e)}}function gr(n,t,e,s,i){const o=s&&!s.isEmpty(),a=i!==void 0;let c=`Function ${t}() called with invalid data`;e&&(c+=" (via `toFirestore()`)"),c+=". ";let h="";return(o||a)&&(h+=" (found",o&&(h+=` in field ${s}`),a&&(h+=` in document ${i}`),h+=")"),new F(S.INVALID_ARGUMENT,c+n+h)}function pu(n,t){return n.some(e=>e.isEqual(t))}/**
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
 */class gu{constructor(t,e,s,i,o){this._firestore=t,this._userDataWriter=e,this._key=s,this._document=i,this._converter=o}get id(){return this._key.path.lastSegment()}get ref(){return new qt(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const t=new cf(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(t)}return this._userDataWriter.convertValue(this._document.data.value)}}get(t){if(this._document){const e=this._document.data.field(Yi("DocumentSnapshot.get",t));if(e!==null)return this._userDataWriter.convertValue(e)}}}class cf extends gu{data(){return super.data()}}function Yi(n,t){return typeof t=="string"?Xi(n,t):t instanceof br?t._internalPath:t._delegate._internalPath}/**
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
 */function hf(n){if(n.limitType==="L"&&n.explicitOrderBy.length===0)throw new F(S.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class Ji{}class Zi extends Ji{}function df(n,t,...e){let s=[];t instanceof Ji&&s.push(t),s=s.concat(e),function(o){const a=o.filter(h=>h instanceof eo).length,c=o.filter(h=>h instanceof to).length;if(a>1||a>0&&c>0)throw new F(S.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")}(s);for(const i of s)n=i._apply(n);return n}class to extends Zi{constructor(t,e,s){super(),this._field=t,this._op=e,this._value=s,this.type="where"}static _create(t,e,s){return new to(t,e,s)}_apply(t){const e=this._parse(t);return _u(t._query,e),new qe(t.firestore,t.converter,ui(t._query,e))}_parse(t){const e=kr(t.firestore);return function(o,a,c,h,f,p,w){let R;if(f.isKeyField()){if(p==="array-contains"||p==="array-contains-any")throw new F(S.INVALID_ARGUMENT,`Invalid Query. You can't perform '${p}' queries on documentId().`);if(p==="in"||p==="not-in"){Fa(w,p);const b=[];for(const N of w)b.push(La(h,o,N));R={arrayValue:{values:b}}}else R=La(h,o,w)}else p!=="in"&&p!=="not-in"&&p!=="array-contains-any"||Fa(w,p),R=lf(c,a,w,p==="in"||p==="not-in");return wt.create(f,p,R)}(t._query,"where",e,t.firestore._databaseId,this._field,this._op,this._value)}}class eo extends Ji{constructor(t,e){super(),this.type=t,this._queryConstraints=e}static _create(t,e){return new eo(t,e)}_parse(t){const e=this._queryConstraints.map(s=>s._parse(t)).filter(s=>s.getFilters().length>0);return e.length===1?e[0]:se.create(e,this._getOperator())}_apply(t){const e=this._parse(t);return e.getFilters().length===0?t:(function(i,o){let a=i;const c=o.getFlattenedFilters();for(const h of c)_u(a,h),a=ui(a,h)}(t._query,e),new qe(t.firestore,t.converter,ui(t._query,e)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return this.type==="and"?"and":"or"}}class no extends Zi{constructor(t,e){super(),this._field=t,this._direction=e,this.type="orderBy"}static _create(t,e){return new no(t,e)}_apply(t){const e=function(i,o,a){if(i.startAt!==null)throw new F(S.INVALID_ARGUMENT,"Invalid query. You must not call startAt() or startAfter() before calling orderBy().");if(i.endAt!==null)throw new F(S.INVALID_ARGUMENT,"Invalid query. You must not call endAt() or endBefore() before calling orderBy().");return new gs(o,a)}(t._query,this._field,this._direction);return new qe(t.firestore,t.converter,function(i,o){const a=i.explicitOrderBy.concat([o]);return new Nn(i.path,i.collectionGroup,a,i.filters.slice(),i.limit,i.limitType,i.startAt,i.endAt)}(t._query,e))}}function ff(n,t="asc"){const e=t,s=Yi("orderBy",n);return no._create(s,e)}class so extends Zi{constructor(t,e,s){super(),this.type=t,this._limit=e,this._limitType=s}static _create(t,e,s){return new so(t,e,s)}_apply(t){return new qe(t.firestore,t.converter,hr(t._query,this._limit,this._limitType))}}function mf(n){return so._create("limit",n,"F")}function La(n,t,e){if(typeof(e=Qt(e))=="string"){if(e==="")throw new F(S.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!gl(t)&&e.indexOf("/")!==-1)throw new F(S.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${e}' contains a '/' character.`);const s=t.path.child(dt.fromString(e));if(!$.isDocumentKey(s))throw new F(S.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${s}' is not because it has an odd number of segments (${s.length}).`);return sa(n,new $(s))}if(e instanceof qt)return sa(n,e._key);throw new F(S.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${Cr(e)}.`)}function Fa(n,t){if(!Array.isArray(n)||n.length===0)throw new F(S.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${t.toString()}' filters.`)}function _u(n,t){const e=function(i,o){for(const a of i)for(const c of a.getFlattenedFilters())if(o.indexOf(c.op)>=0)return c.op;return null}(n.filters,function(i){switch(i){case"!=":return["!=","not-in"];case"array-contains-any":case"in":return["not-in"];case"not-in":return["array-contains-any","in","not-in","!="];default:return[]}}(t.op));if(e!==null)throw e===t.op?new F(S.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${t.op.toString()}' filter.`):new F(S.INVALID_ARGUMENT,`Invalid query. You cannot use '${t.op.toString()}' filters with '${e.toString()}' filters.`)}class pf{convertValue(t,e="none"){switch(rn(t)){case 0:return null;case 1:return t.booleanValue;case 2:return Tt(t.integerValue||t.doubleValue);case 3:return this.convertTimestamp(t.timestampValue);case 4:return this.convertServerTimestamp(t,e);case 5:return t.stringValue;case 6:return this.convertBytes(sn(t.bytesValue));case 7:return this.convertReference(t.referenceValue);case 8:return this.convertGeoPoint(t.geoPointValue);case 9:return this.convertArray(t.arrayValue,e);case 11:return this.convertObject(t.mapValue,e);case 10:return this.convertVectorValue(t.mapValue);default:throw K()}}convertObject(t,e){return this.convertObjectMap(t.fields,e)}convertObjectMap(t,e="none"){const s={};return an(t,(i,o)=>{s[i]=this.convertValue(o,e)}),s}convertVectorValue(t){var e,s,i;const o=(i=(s=(e=t.fields)===null||e===void 0?void 0:e.value.arrayValue)===null||s===void 0?void 0:s.values)===null||i===void 0?void 0:i.map(a=>Tt(a.doubleValue));return new Gi(o)}convertGeoPoint(t){return new Ki(Tt(t.latitude),Tt(t.longitude))}convertArray(t,e){return(t.values||[]).map(s=>this.convertValue(s,e))}convertServerTimestamp(t,e){switch(e){case"previous":const s=Ii(t);return s==null?null:this.convertValue(s,e);case"estimate":return this.convertTimestamp(fs(t));default:return null}}convertTimestamp(t){const e=Le(t);return new It(e.seconds,e.nanos)}convertDocumentKey(t,e){const s=dt.fromString(t);at(Fl(s));const i=new ms(s.get(1),s.get(3)),o=new $(s.popFirst(5));return i.isEqual(e)||Te(`Document ${o} contains a document reference within a different database (${i.projectId}/${i.database}) which is not supported. It will be treated as a reference in the current database (${e.projectId}/${e.database}) instead.`),o}}/**
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
 */function yu(n,t,e){let s;return s=n?e&&(e.merge||e.mergeFields)?n.toFirestore(t,e):n.toFirestore(t):t,s}/**
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
 */class os{constructor(t,e){this.hasPendingWrites=t,this.fromCache=e}isEqual(t){return this.hasPendingWrites===t.hasPendingWrites&&this.fromCache===t.fromCache}}class vu extends gu{constructor(t,e,s,i,o,a){super(t,e,s,i,a),this._firestore=t,this._firestoreImpl=t,this.metadata=o}exists(){return super.exists()}data(t={}){if(this._document){if(this._converter){const e=new ar(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(e,t)}return this._userDataWriter.convertValue(this._document.data.value,t.serverTimestamps)}}get(t,e={}){if(this._document){const s=this._document.data.field(Yi("DocumentSnapshot.get",t));if(s!==null)return this._userDataWriter.convertValue(s,e.serverTimestamps)}}}class ar extends vu{data(t={}){return super.data(t)}}class gf{constructor(t,e,s,i){this._firestore=t,this._userDataWriter=e,this._snapshot=i,this.metadata=new os(i.hasPendingWrites,i.fromCache),this.query=s}get docs(){const t=[];return this.forEach(e=>t.push(e)),t}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(t,e){this._snapshot.docs.forEach(s=>{t.call(e,new ar(this._firestore,this._userDataWriter,s.key,s,new os(this._snapshot.mutatedKeys.has(s.key),this._snapshot.fromCache),this.query.converter))})}docChanges(t={}){const e=!!t.includeMetadataChanges;if(e&&this._snapshot.excludesMetadataChanges)throw new F(S.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===e||(this._cachedChanges=function(i,o){if(i._snapshot.oldDocs.isEmpty()){let a=0;return i._snapshot.docChanges.map(c=>{const h=new ar(i._firestore,i._userDataWriter,c.doc.key,c.doc,new os(i._snapshot.mutatedKeys.has(c.doc.key),i._snapshot.fromCache),i.query.converter);return c.doc,{type:"added",doc:h,oldIndex:-1,newIndex:a++}})}{let a=i._snapshot.oldDocs;return i._snapshot.docChanges.filter(c=>o||c.type!==3).map(c=>{const h=new ar(i._firestore,i._userDataWriter,c.doc.key,c.doc,new os(i._snapshot.mutatedKeys.has(c.doc.key),i._snapshot.fromCache),i.query.converter);let f=-1,p=-1;return c.type!==0&&(f=a.indexOf(c.doc.key),a=a.delete(c.doc.key)),c.type!==1&&(a=a.add(c.doc),p=a.indexOf(c.doc.key)),{type:_f(c.type),doc:h,oldIndex:f,newIndex:p}})}}(this,e),this._cachedChangesIncludeMetadataChanges=e),this._cachedChanges}}function _f(n){switch(n){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return K()}}/**
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
 */function yf(n){n=te(n,qt);const t=te(n.firestore,Ue);return Jd(zi(t),n._key).then(e=>Eu(t,n,e))}class Tu extends pf{constructor(t){super(),this.firestore=t}convertBytes(t){return new kn(t)}convertReference(t){const e=this.convertDocumentKey(t,this.firestore._databaseId);return new qt(this.firestore,null,e)}}function vf(n,t,e){n=te(n,qt);const s=te(n.firestore,Ue),i=yu(n.converter,t,e);return Nr(s,[du(kr(s),"setDoc",n._key,i,n.converter!==null,e).toMutation(n._key,Zt.none())])}function Tf(n,t,e,...s){n=te(n,qt);const i=te(n.firestore,Ue),o=kr(i);let a;return a=typeof(t=Qt(t))=="string"||t instanceof br?af(o,"updateDoc",n._key,t,e,s):of(o,"updateDoc",n._key,t),Nr(i,[a.toMutation(n._key,Zt.exists(!0))])}function tr(n){return Nr(te(n.firestore,Ue),[new bi(n._key,Zt.none())])}function Ef(n,t){const e=te(n.firestore,Ue),s=Je(n),i=yu(n.converter,t);return Nr(e,[du(kr(n.firestore),"addDoc",s._key,i,n.converter!==null,{}).toMutation(s._key,Zt.exists(!1))]).then(()=>s)}function wf(n,...t){var e,s,i;n=Qt(n);let o={includeMetadataChanges:!1,source:"default"},a=0;typeof t[a]!="object"||Ma(t[a])||(o=t[a],a++);const c={includeMetadataChanges:o.includeMetadataChanges,source:o.source};if(Ma(t[a])){const w=t[a];t[a]=(e=w.next)===null||e===void 0?void 0:e.bind(w),t[a+1]=(s=w.error)===null||s===void 0?void 0:s.bind(w),t[a+2]=(i=w.complete)===null||i===void 0?void 0:i.bind(w)}let h,f,p;if(n instanceof qt)f=te(n.firestore,Ue),p=yr(n._key.path),h={next:w=>{t[a]&&t[a](Eu(f,n,w))},error:t[a+1],complete:t[a+2]};else{const w=te(n,qe);f=te(w.firestore,Ue),p=w._query;const R=new Tu(f);h={next:b=>{t[a]&&t[a](new gf(f,R,w,b))},error:t[a+1],complete:t[a+2]},hf(n._query)}return function(R,b,N,L){const D=new ou(L),W=new Yl(b,D,N);return R.asyncQueue.enqueueAndForget(async()=>Hl(await yi(R),W)),()=>{D.Za(),R.asyncQueue.enqueueAndForget(async()=>Xl(await yi(R),W))}}(zi(f),p,c,h)}function Nr(n,t){return function(s,i){const o=new xe;return s.asyncQueue.enqueueAndForget(async()=>qd(await Yd(s),i,o)),o.promise}(zi(n),t)}function Eu(n,t,e){const s=e.docs.get(t._key),i=new Tu(n);return new vu(n,i,t._key,s,new os(e.hasPendingWrites,e.fromCache),t.converter)}function Ua(){return new Wi("serverTimestamp")}(function(t,e=!0){(function(i){Dn=i})(Xa),Ya(new Ja("firestore",(s,{instanceIdentifier:i,options:o})=>{const a=s.getProvider("app").getImmediate(),c=new Ue(new vc(s.getProvider("auth-internal")),new Ac(s.getProvider("app-check-internal")),function(f,p){if(!Object.prototype.hasOwnProperty.apply(f.options,["projectId"]))throw new F(S.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new ms(f.options.projectId,p)}(a,i),a);return o=Object.assign({useFetchStreams:e},o),c._setSettings(o),c},"PUBLIC").setMultipleInstances(!0)),lr(Jo,"4.7.3",t),lr(Jo,"4.7.3","esm2017")})();/**
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
 */class yt extends Ha{constructor(t,e,s=0){super(ni(t),`Firebase Storage: ${e} (${ni(t)})`),this.status_=s,this.customData={serverResponse:null},this._baseMessage=this.message,Object.setPrototypeOf(this,yt.prototype)}get status(){return this.status_}set status(t){this.status_=t}_codeEquals(t){return ni(t)===this.code}get serverResponse(){return this.customData.serverResponse}set serverResponse(t){this.customData.serverResponse=t,this.customData.serverResponse?this.message=`${this._baseMessage}
${this.customData.serverResponse}`:this.message=this._baseMessage}}var _t;(function(n){n.UNKNOWN="unknown",n.OBJECT_NOT_FOUND="object-not-found",n.BUCKET_NOT_FOUND="bucket-not-found",n.PROJECT_NOT_FOUND="project-not-found",n.QUOTA_EXCEEDED="quota-exceeded",n.UNAUTHENTICATED="unauthenticated",n.UNAUTHORIZED="unauthorized",n.UNAUTHORIZED_APP="unauthorized-app",n.RETRY_LIMIT_EXCEEDED="retry-limit-exceeded",n.INVALID_CHECKSUM="invalid-checksum",n.CANCELED="canceled",n.INVALID_EVENT_NAME="invalid-event-name",n.INVALID_URL="invalid-url",n.INVALID_DEFAULT_BUCKET="invalid-default-bucket",n.NO_DEFAULT_BUCKET="no-default-bucket",n.CANNOT_SLICE_BLOB="cannot-slice-blob",n.SERVER_FILE_WRONG_SIZE="server-file-wrong-size",n.NO_DOWNLOAD_URL="no-download-url",n.INVALID_ARGUMENT="invalid-argument",n.INVALID_ARGUMENT_COUNT="invalid-argument-count",n.APP_DELETED="app-deleted",n.INVALID_ROOT_OPERATION="invalid-root-operation",n.INVALID_FORMAT="invalid-format",n.INTERNAL_ERROR="internal-error",n.UNSUPPORTED_ENVIRONMENT="unsupported-environment"})(_t||(_t={}));function ni(n){return"storage/"+n}function ro(){const n="An unknown error occurred, please check the error payload for server response.";return new yt(_t.UNKNOWN,n)}function Rf(n){return new yt(_t.OBJECT_NOT_FOUND,"Object '"+n+"' does not exist.")}function Pf(n){return new yt(_t.QUOTA_EXCEEDED,"Quota for bucket '"+n+"' exceeded, please view quota on https://firebase.google.com/pricing/.")}function Cf(){const n="User is not authenticated, please authenticate using Firebase Authentication and try again.";return new yt(_t.UNAUTHENTICATED,n)}function Vf(){return new yt(_t.UNAUTHORIZED_APP,"This app does not have permission to access Firebase Storage on this project.")}function bf(n){return new yt(_t.UNAUTHORIZED,"User does not have permission to access '"+n+"'.")}function Sf(){return new yt(_t.RETRY_LIMIT_EXCEEDED,"Max retry time for operation exceeded, please try again.")}function kf(){return new yt(_t.CANCELED,"User canceled the upload/download.")}function Df(n){return new yt(_t.INVALID_URL,"Invalid URL '"+n+"'.")}function Nf(n){return new yt(_t.INVALID_DEFAULT_BUCKET,"Invalid default bucket '"+n+"'.")}function xf(){return new yt(_t.NO_DEFAULT_BUCKET,"No default bucket found. Did you set the '"+Au+"' property when initializing the app?")}function Of(){return new yt(_t.CANNOT_SLICE_BLOB,"Cannot slice blob for upload. Please retry the upload.")}function Mf(){return new yt(_t.NO_DOWNLOAD_URL,"The given file does not have any download URLs.")}function Lf(n){return new yt(_t.UNSUPPORTED_ENVIRONMENT,`${n} is missing. Make sure to install the required polyfills. See https://firebase.google.com/docs/web/environments-js-sdk#polyfills for more information.`)}function Ti(n){return new yt(_t.INVALID_ARGUMENT,n)}function Iu(){return new yt(_t.APP_DELETED,"The Firebase app was deleted.")}function Ff(n){return new yt(_t.INVALID_ROOT_OPERATION,"The operation '"+n+"' cannot be performed on a root reference, create a non-root reference using child, such as .child('file.png').")}function hs(n,t){return new yt(_t.INVALID_FORMAT,"String does not match format '"+n+"': "+t)}function ns(n){throw new yt(_t.INTERNAL_ERROR,"Internal error: "+n)}/**
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
 */class Jt{constructor(t,e){this.bucket=t,this.path_=e}get path(){return this.path_}get isRoot(){return this.path.length===0}fullServerUrl(){const t=encodeURIComponent;return"/b/"+t(this.bucket)+"/o/"+t(this.path)}bucketOnlyServerUrl(){return"/b/"+encodeURIComponent(this.bucket)+"/o"}static makeFromBucketSpec(t,e){let s;try{s=Jt.makeFromUrl(t,e)}catch{return new Jt(t,"")}if(s.path==="")return s;throw Nf(t)}static makeFromUrl(t,e){let s=null;const i="([A-Za-z0-9.\\-_]+)";function o(Z){Z.path.charAt(Z.path.length-1)==="/"&&(Z.path_=Z.path_.slice(0,-1))}const a="(/(.*))?$",c=new RegExp("^gs://"+i+a,"i"),h={bucket:1,path:3};function f(Z){Z.path_=decodeURIComponent(Z.path)}const p="v[A-Za-z0-9_]+",w=e.replace(/[.]/g,"\\."),R="(/([^?#]*).*)?$",b=new RegExp(`^https?://${w}/${p}/b/${i}/o${R}`,"i"),N={bucket:1,path:3},L=e===wu?"(?:storage.googleapis.com|storage.cloud.google.com)":e,D="([^?#]*)",W=new RegExp(`^https?://${L}/${i}/${D}`,"i"),Y=[{regex:c,indices:h,postModify:o},{regex:b,indices:N,postModify:f},{regex:W,indices:{bucket:1,path:2},postModify:f}];for(let Z=0;Z<Y.length;Z++){const Vt=Y[Z],ct=Vt.regex.exec(t);if(ct){const v=ct[Vt.indices.bucket];let m=ct[Vt.indices.path];m||(m=""),s=new Jt(v,m),Vt.postModify(s);break}}if(s==null)throw Df(t);return s}}class Uf{constructor(t){this.promise_=Promise.reject(t)}getPromise(){return this.promise_}cancel(t=!1){}}/**
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
 */function Bf(n,t,e){let s=1,i=null,o=null,a=!1,c=0;function h(){return c===2}let f=!1;function p(...D){f||(f=!0,t.apply(null,D))}function w(D){i=setTimeout(()=>{i=null,n(b,h())},D)}function R(){o&&clearTimeout(o)}function b(D,...W){if(f){R();return}if(D){R(),p.call(null,D,...W);return}if(h()||a){R(),p.call(null,D,...W);return}s<64&&(s*=2);let Y;c===1?(c=2,Y=0):Y=(s+Math.random())*1e3,w(Y)}let N=!1;function L(D){N||(N=!0,R(),!f&&(i!==null?(D||(c=2),clearTimeout(i),w(0)):D||(c=1)))}return w(0),o=setTimeout(()=>{a=!0,L(!0)},e),L}function qf(n){n(!1)}/**
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
 */function jf(n){return n!==void 0}function $f(n){return typeof n=="object"&&!Array.isArray(n)}function io(n){return typeof n=="string"||n instanceof String}function Ba(n){return oo()&&n instanceof Blob}function oo(){return typeof Blob<"u"}function qa(n,t,e,s){if(s<t)throw Ti(`Invalid value for '${n}'. Expected ${t} or greater.`);if(s>e)throw Ti(`Invalid value for '${n}'. Expected ${e} or less.`)}/**
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
 */function ao(n,t,e){let s=t;return e==null&&(s=`https://${t}`),`${e}://${s}/v0${n}`}function Ru(n){const t=encodeURIComponent;let e="?";for(const s in n)if(n.hasOwnProperty(s)){const i=t(s)+"="+t(n[s]);e=e+i+"&"}return e=e.slice(0,-1),e}var en;(function(n){n[n.NO_ERROR=0]="NO_ERROR",n[n.NETWORK_ERROR=1]="NETWORK_ERROR",n[n.ABORT=2]="ABORT"})(en||(en={}));/**
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
 */class Kf{constructor(t,e,s,i,o,a,c,h,f,p,w,R=!0){this.url_=t,this.method_=e,this.headers_=s,this.body_=i,this.successCodes_=o,this.additionalRetryCodes_=a,this.callback_=c,this.errorCallback_=h,this.timeout_=f,this.progressCallback_=p,this.connectionFactory_=w,this.retry=R,this.pendingConnection_=null,this.backoffId_=null,this.canceled_=!1,this.appDelete_=!1,this.promise_=new Promise((b,N)=>{this.resolve_=b,this.reject_=N,this.start_()})}start_(){const t=(s,i)=>{if(i){s(!1,new er(!1,null,!0));return}const o=this.connectionFactory_();this.pendingConnection_=o;const a=c=>{const h=c.loaded,f=c.lengthComputable?c.total:-1;this.progressCallback_!==null&&this.progressCallback_(h,f)};this.progressCallback_!==null&&o.addUploadProgressListener(a),o.send(this.url_,this.method_,this.body_,this.headers_).then(()=>{this.progressCallback_!==null&&o.removeUploadProgressListener(a),this.pendingConnection_=null;const c=o.getErrorCode()===en.NO_ERROR,h=o.getStatus();if(!c||zf(h,this.additionalRetryCodes_)&&this.retry){const p=o.getErrorCode()===en.ABORT;s(!1,new er(!1,null,p));return}const f=this.successCodes_.indexOf(h)!==-1;s(!0,new er(f,o))})},e=(s,i)=>{const o=this.resolve_,a=this.reject_,c=i.connection;if(i.wasSuccessCode)try{const h=this.callback_(c,c.getResponse());jf(h)?o(h):o()}catch(h){a(h)}else if(c!==null){const h=ro();h.serverResponse=c.getErrorText(),this.errorCallback_?a(this.errorCallback_(c,h)):a(h)}else if(i.canceled){const h=this.appDelete_?Iu():kf();a(h)}else{const h=Sf();a(h)}};this.canceled_?e(!1,new er(!1,null,!0)):this.backoffId_=Bf(t,e,this.timeout_)}getPromise(){return this.promise_}cancel(t){this.canceled_=!0,this.appDelete_=t||!1,this.backoffId_!==null&&qf(this.backoffId_),this.pendingConnection_!==null&&this.pendingConnection_.abort()}}class er{constructor(t,e,s){this.wasSuccessCode=t,this.connection=e,this.canceled=!!s}}function Gf(n,t){t!==null&&t.length>0&&(n.Authorization="Firebase "+t)}function Qf(n,t){n["X-Firebase-Storage-Version"]="webjs/"+(t??"AppManager")}function Wf(n,t){t&&(n["X-Firebase-GMPID"]=t)}function Hf(n,t){t!==null&&(n["X-Firebase-AppCheck"]=t)}function Xf(n,t,e,s,i,o,a=!0){const c=Ru(n.urlParams),h=n.url+c,f=Object.assign({},n.headers);return Wf(f,t),Gf(f,e),Qf(f,o),Hf(f,s),new Kf(h,n.method,f,n.body,n.successCodes,n.additionalRetryCodes,n.handler,n.errorHandler,n.timeout,n.progressCallback,i,a)}/**
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
 */function Yf(){return typeof BlobBuilder<"u"?BlobBuilder:typeof WebKitBlobBuilder<"u"?WebKitBlobBuilder:void 0}function Jf(...n){const t=Yf();if(t!==void 0){const e=new t;for(let s=0;s<n.length;s++)e.append(n[s]);return e.getBlob()}else{if(oo())return new Blob(n);throw new yt(_t.UNSUPPORTED_ENVIRONMENT,"This browser doesn't seem to support creating Blobs")}}function Zf(n,t,e){return n.webkitSlice?n.webkitSlice(t,e):n.mozSlice?n.mozSlice(t,e):n.slice?n.slice(t,e):null}/**
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
 */function tm(n){if(typeof atob>"u")throw Lf("base-64");return atob(n)}/**
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
 */const ue={RAW:"raw",BASE64:"base64",BASE64URL:"base64url",DATA_URL:"data_url"};class si{constructor(t,e){this.data=t,this.contentType=e||null}}function em(n,t){switch(n){case ue.RAW:return new si(Pu(t));case ue.BASE64:case ue.BASE64URL:return new si(Cu(n,t));case ue.DATA_URL:return new si(sm(t),rm(t))}throw ro()}function Pu(n){const t=[];for(let e=0;e<n.length;e++){let s=n.charCodeAt(e);if(s<=127)t.push(s);else if(s<=2047)t.push(192|s>>6,128|s&63);else if((s&64512)===55296)if(!(e<n.length-1&&(n.charCodeAt(e+1)&64512)===56320))t.push(239,191,189);else{const o=s,a=n.charCodeAt(++e);s=65536|(o&1023)<<10|a&1023,t.push(240|s>>18,128|s>>12&63,128|s>>6&63,128|s&63)}else(s&64512)===56320?t.push(239,191,189):t.push(224|s>>12,128|s>>6&63,128|s&63)}return new Uint8Array(t)}function nm(n){let t;try{t=decodeURIComponent(n)}catch{throw hs(ue.DATA_URL,"Malformed data URL.")}return Pu(t)}function Cu(n,t){switch(n){case ue.BASE64:{const i=t.indexOf("-")!==-1,o=t.indexOf("_")!==-1;if(i||o)throw hs(n,"Invalid character '"+(i?"-":"_")+"' found: is it base64url encoded?");break}case ue.BASE64URL:{const i=t.indexOf("+")!==-1,o=t.indexOf("/")!==-1;if(i||o)throw hs(n,"Invalid character '"+(i?"+":"/")+"' found: is it base64 encoded?");t=t.replace(/-/g,"+").replace(/_/g,"/");break}}let e;try{e=tm(t)}catch(i){throw i.message.includes("polyfill")?i:hs(n,"Invalid character found")}const s=new Uint8Array(e.length);for(let i=0;i<e.length;i++)s[i]=e.charCodeAt(i);return s}class Vu{constructor(t){this.base64=!1,this.contentType=null;const e=t.match(/^data:([^,]+)?,/);if(e===null)throw hs(ue.DATA_URL,"Must be formatted 'data:[<mediatype>][;base64],<data>");const s=e[1]||null;s!=null&&(this.base64=im(s,";base64"),this.contentType=this.base64?s.substring(0,s.length-7):s),this.rest=t.substring(t.indexOf(",")+1)}}function sm(n){const t=new Vu(n);return t.base64?Cu(ue.BASE64,t.rest):nm(t.rest)}function rm(n){return new Vu(n).contentType}function im(n,t){return n.length>=t.length?n.substring(n.length-t.length)===t:!1}/**
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
 */class De{constructor(t,e){let s=0,i="";Ba(t)?(this.data_=t,s=t.size,i=t.type):t instanceof ArrayBuffer?(e?this.data_=new Uint8Array(t):(this.data_=new Uint8Array(t.byteLength),this.data_.set(new Uint8Array(t))),s=this.data_.length):t instanceof Uint8Array&&(e?this.data_=t:(this.data_=new Uint8Array(t.length),this.data_.set(t)),s=t.length),this.size_=s,this.type_=i}size(){return this.size_}type(){return this.type_}slice(t,e){if(Ba(this.data_)){const s=this.data_,i=Zf(s,t,e);return i===null?null:new De(i)}else{const s=new Uint8Array(this.data_.buffer,t,e-t);return new De(s,!0)}}static getBlob(...t){if(oo()){const e=t.map(s=>s instanceof De?s.data_:s);return new De(Jf.apply(null,e))}else{const e=t.map(a=>io(a)?em(ue.RAW,a).data:a.data_);let s=0;e.forEach(a=>{s+=a.byteLength});const i=new Uint8Array(s);let o=0;return e.forEach(a=>{for(let c=0;c<a.length;c++)i[o++]=a[c]}),new De(i,!0)}}uploadData(){return this.data_}}/**
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
 */function bu(n){let t;try{t=JSON.parse(n)}catch{return null}return $f(t)?t:null}/**
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
 */function om(n){if(n.length===0)return null;const t=n.lastIndexOf("/");return t===-1?"":n.slice(0,t)}function am(n,t){const e=t.split("/").filter(s=>s.length>0).join("/");return n.length===0?e:n+"/"+e}function Su(n){const t=n.lastIndexOf("/",n.length-2);return t===-1?n:n.slice(t+1)}/**
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
 */function lm(n,t){return t}class $t{constructor(t,e,s,i){this.server=t,this.local=e||t,this.writable=!!s,this.xform=i||lm}}let nr=null;function um(n){return!io(n)||n.length<2?n:Su(n)}function ku(){if(nr)return nr;const n=[];n.push(new $t("bucket")),n.push(new $t("generation")),n.push(new $t("metageneration")),n.push(new $t("name","fullPath",!0));function t(o,a){return um(a)}const e=new $t("name");e.xform=t,n.push(e);function s(o,a){return a!==void 0?Number(a):a}const i=new $t("size");return i.xform=s,n.push(i),n.push(new $t("timeCreated")),n.push(new $t("updated")),n.push(new $t("md5Hash",null,!0)),n.push(new $t("cacheControl",null,!0)),n.push(new $t("contentDisposition",null,!0)),n.push(new $t("contentEncoding",null,!0)),n.push(new $t("contentLanguage",null,!0)),n.push(new $t("contentType",null,!0)),n.push(new $t("metadata","customMetadata",!0)),nr=n,nr}function cm(n,t){function e(){const s=n.bucket,i=n.fullPath,o=new Jt(s,i);return t._makeStorageReference(o)}Object.defineProperty(n,"ref",{get:e})}function hm(n,t,e){const s={};s.type="file";const i=e.length;for(let o=0;o<i;o++){const a=e[o];s[a.local]=a.xform(s,t[a.server])}return cm(s,n),s}function Du(n,t,e){const s=bu(t);return s===null?null:hm(n,s,e)}function dm(n,t,e,s){const i=bu(t);if(i===null||!io(i.downloadTokens))return null;const o=i.downloadTokens;if(o.length===0)return null;const a=encodeURIComponent;return o.split(",").map(f=>{const p=n.bucket,w=n.fullPath,R="/b/"+a(p)+"/o/"+a(w),b=ao(R,e,s),N=Ru({alt:"media",token:f});return b+N})[0]}function fm(n,t){const e={},s=t.length;for(let i=0;i<s;i++){const o=t[i];o.writable&&(e[o.server]=n[o.local])}return JSON.stringify(e)}class Nu{constructor(t,e,s,i){this.url=t,this.method=e,this.handler=s,this.timeout=i,this.urlParams={},this.headers={},this.body=null,this.errorHandler=null,this.progressCallback=null,this.successCodes=[200],this.additionalRetryCodes=[]}}/**
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
 */function xu(n){if(!n)throw ro()}function mm(n,t){function e(s,i){const o=Du(n,i,t);return xu(o!==null),o}return e}function pm(n,t){function e(s,i){const o=Du(n,i,t);return xu(o!==null),dm(o,i,n.host,n._protocol)}return e}function Ou(n){function t(e,s){let i;return e.getStatus()===401?e.getErrorText().includes("Firebase App Check token is invalid")?i=Vf():i=Cf():e.getStatus()===402?i=Pf(n.bucket):e.getStatus()===403?i=bf(n.path):i=s,i.status=e.getStatus(),i.serverResponse=s.serverResponse,i}return t}function gm(n){const t=Ou(n);function e(s,i){let o=t(s,i);return s.getStatus()===404&&(o=Rf(n.path)),o.serverResponse=i.serverResponse,o}return e}function _m(n,t,e){const s=t.fullServerUrl(),i=ao(s,n.host,n._protocol),o="GET",a=n.maxOperationRetryTime,c=new Nu(i,o,pm(n,e),a);return c.errorHandler=gm(t),c}function ym(n,t){return n&&n.contentType||t&&t.type()||"application/octet-stream"}function vm(n,t,e){const s=Object.assign({},e);return s.fullPath=n.path,s.size=t.size(),s.contentType||(s.contentType=ym(null,t)),s}function Tm(n,t,e,s,i){const o=t.bucketOnlyServerUrl(),a={"X-Goog-Upload-Protocol":"multipart"};function c(){let Y="";for(let Z=0;Z<2;Z++)Y=Y+Math.random().toString().slice(2);return Y}const h=c();a["Content-Type"]="multipart/related; boundary="+h;const f=vm(t,s,i),p=fm(f,e),w="--"+h+`\r
Content-Type: application/json; charset=utf-8\r
\r
`+p+`\r
--`+h+`\r
Content-Type: `+f.contentType+`\r
\r
`,R=`\r
--`+h+"--",b=De.getBlob(w,s,R);if(b===null)throw Of();const N={name:f.fullPath},L=ao(o,n.host,n._protocol),D="POST",W=n.maxUploadRetryTime,J=new Nu(L,D,mm(n,e),W);return J.urlParams=N,J.headers=a,J.body=b.uploadData(),J.errorHandler=Ou(t),J}class Em{constructor(){this.sent_=!1,this.xhr_=new XMLHttpRequest,this.initXhr(),this.errorCode_=en.NO_ERROR,this.sendPromise_=new Promise(t=>{this.xhr_.addEventListener("abort",()=>{this.errorCode_=en.ABORT,t()}),this.xhr_.addEventListener("error",()=>{this.errorCode_=en.NETWORK_ERROR,t()}),this.xhr_.addEventListener("load",()=>{t()})})}send(t,e,s,i){if(this.sent_)throw ns("cannot .send() more than once");if(this.sent_=!0,this.xhr_.open(e,t,!0),i!==void 0)for(const o in i)i.hasOwnProperty(o)&&this.xhr_.setRequestHeader(o,i[o].toString());return s!==void 0?this.xhr_.send(s):this.xhr_.send(),this.sendPromise_}getErrorCode(){if(!this.sent_)throw ns("cannot .getErrorCode() before sending");return this.errorCode_}getStatus(){if(!this.sent_)throw ns("cannot .getStatus() before sending");try{return this.xhr_.status}catch{return-1}}getResponse(){if(!this.sent_)throw ns("cannot .getResponse() before sending");return this.xhr_.response}getErrorText(){if(!this.sent_)throw ns("cannot .getErrorText() before sending");return this.xhr_.statusText}abort(){this.xhr_.abort()}getResponseHeader(t){return this.xhr_.getResponseHeader(t)}addUploadProgressListener(t){this.xhr_.upload!=null&&this.xhr_.upload.addEventListener("progress",t)}removeUploadProgressListener(t){this.xhr_.upload!=null&&this.xhr_.upload.removeEventListener("progress",t)}}class wm extends Em{initXhr(){this.xhr_.responseType="text"}}function Mu(){return new wm}/**
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
 */class on{constructor(t,e){this._service=t,e instanceof Jt?this._location=e:this._location=Jt.makeFromUrl(e,t.host)}toString(){return"gs://"+this._location.bucket+"/"+this._location.path}_newRef(t,e){return new on(t,e)}get root(){const t=new Jt(this._location.bucket,"");return this._newRef(this._service,t)}get bucket(){return this._location.bucket}get fullPath(){return this._location.path}get name(){return Su(this._location.path)}get storage(){return this._service}get parent(){const t=om(this._location.path);if(t===null)return null;const e=new Jt(this._location.bucket,t);return new on(this._service,e)}_throwIfRoot(t){if(this._location.path==="")throw Ff(t)}}function Am(n,t,e){n._throwIfRoot("uploadBytes");const s=Tm(n.storage,n._location,ku(),new De(t,!0),e);return n.storage.makeRequestWithTokens(s,Mu).then(i=>({metadata:i,ref:n}))}function Im(n){n._throwIfRoot("getDownloadURL");const t=_m(n.storage,n._location,ku());return n.storage.makeRequestWithTokens(t,Mu).then(e=>{if(e===null)throw Mf();return e})}function Rm(n,t){const e=am(n._location.path,t),s=new Jt(n._location.bucket,e);return new on(n.storage,s)}/**
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
 */function Pm(n){return/^[A-Za-z]+:\/\//.test(n)}function Cm(n,t){return new on(n,t)}function Lu(n,t){if(n instanceof lo){const e=n;if(e._bucket==null)throw xf();const s=new on(e,e._bucket);return t!=null?Lu(s,t):s}else return t!==void 0?Rm(n,t):n}function Vm(n,t){if(t&&Pm(t)){if(n instanceof lo)return Cm(n,t);throw Ti("To use ref(service, url), the first argument must be a Storage instance.")}else return Lu(n,t)}function ja(n,t){const e=t==null?void 0:t[Au];return e==null?null:Jt.makeFromBucketSpec(e,n)}function bm(n,t,e,s={}){n.host=`${t}:${e}`,n._protocol="http";const{mockUserToken:i}=s;i&&(n._overrideAuthToken=typeof i=="string"?i:Wa(i,n.app.options.projectId))}class lo{constructor(t,e,s,i,o){this.app=t,this._authProvider=e,this._appCheckProvider=s,this._url=i,this._firebaseVersion=o,this._bucket=null,this._host=wu,this._protocol="https",this._appId=null,this._deleted=!1,this._maxOperationRetryTime=Af,this._maxUploadRetryTime=If,this._requests=new Set,i!=null?this._bucket=Jt.makeFromBucketSpec(i,this._host):this._bucket=ja(this._host,this.app.options)}get host(){return this._host}set host(t){this._host=t,this._url!=null?this._bucket=Jt.makeFromBucketSpec(this._url,t):this._bucket=ja(t,this.app.options)}get maxUploadRetryTime(){return this._maxUploadRetryTime}set maxUploadRetryTime(t){qa("time",0,Number.POSITIVE_INFINITY,t),this._maxUploadRetryTime=t}get maxOperationRetryTime(){return this._maxOperationRetryTime}set maxOperationRetryTime(t){qa("time",0,Number.POSITIVE_INFINITY,t),this._maxOperationRetryTime=t}async _getAuthToken(){if(this._overrideAuthToken)return this._overrideAuthToken;const t=this._authProvider.getImmediate({optional:!0});if(t){const e=await t.getToken();if(e!==null)return e.accessToken}return null}async _getAppCheckToken(){const t=this._appCheckProvider.getImmediate({optional:!0});return t?(await t.getToken()).token:null}_delete(){return this._deleted||(this._deleted=!0,this._requests.forEach(t=>t.cancel()),this._requests.clear()),Promise.resolve()}_makeStorageReference(t){return new on(this,t)}_makeRequest(t,e,s,i,o=!0){if(this._deleted)return new Uf(Iu());{const a=Xf(t,this._appId,s,i,e,this._firebaseVersion,o);return this._requests.add(a),a.getPromise().then(()=>this._requests.delete(a),()=>this._requests.delete(a)),a}}async makeRequestWithTokens(t,e){const[s,i]=await Promise.all([this._getAuthToken(),this._getAppCheckToken()]);return this._makeRequest(t,e,s,i).getPromise()}}const $a="@firebase/storage",za="0.13.2";/**
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
 */const Fu="storage";function Sm(n,t,e){return n=Qt(n),Am(n,t,e)}function km(n){return n=Qt(n),Im(n)}function Dm(n,t){return n=Qt(n),Vm(n,t)}function Nm(n=Ka(),t){n=Qt(n);const s=Ga(n,Fu).getImmediate({identifier:t}),i=Qa("storage");return i&&xm(s,...i),s}function xm(n,t,e,s={}){bm(n,t,e,s)}function Om(n,{instanceIdentifier:t}){const e=n.getProvider("app").getImmediate(),s=n.getProvider("auth-internal"),i=n.getProvider("app-check-internal");return new lo(e,s,i,t,Xa)}function Mm(){Ya(new Ja(Fu,Om,"PUBLIC").setMultipleInstances(!0)),lr($a,za,""),lr($a,za,"esm2017")}Mm();const Lm={key:0,class:"chat-app"},Fm={key:0,class:"admin-toast glass-heavy"},Um={class:"admin-toast-text"},Bm={class:"sidebar-header"},qm={class:"user-profile"},jm={class:"user-avatar-wrapper"},$m={class:"user-info"},zm={class:"user-name"},Km={key:0,class:"admin-badge-gold",title:"Super Admin Actif"},Gm={class:"user-email"},Qm={class:"sidebar-search"},Wm={class:"input-wrapper"},Hm={class:"rooms-section"},Xm=["onClick"],Ym={class:"room-icon"},Jm={class:"room-info"},Zm={class:"room-name"},tp={class:"room-desc"},ep={key:0,class:"room-unread"},np={class:"chat-main"},sp={class:"chat-header glass"},rp={class:"chat-header-info"},ip={class:"ch-room-icon"},op={class:"ch-room-name"},ap={class:"ch-room-desc"},lp={class:"chat-header-actions"},up={class:"online-pill"},cp={key:0,class:"admin-pill-badge",title:"Mode Admin Actif"},hp={key:0,class:"msg-search-bar glass"},dp={class:"input-wrapper"},fp={class:"welcome-banner"},mp={class:"wb-icon"},pp={class:"wb-title"},gp={class:"wb-desc"},_p={class:"wb-divider"},yp={class:"wb-divider-text"},vp={key:0,class:"date-separator"},Tp={class:"ds-text"},Ep={class:"msg-content"},wp={key:0,class:"msg-header"},Ap={class:"msg-author"},Ip={key:0,class:"admin-badge-gold"},Rp={class:"msg-time"},Pp=["onMouseenter"],Cp=["src","onClick"],Vp=["href","download"],bp={class:"file-info"},Sp={class:"file-name"},kp={class:"file-size"},Dp=["innerHTML"],Np={key:3,class:"msg-time-mine"},xp={key:0,class:"admin-badge-gold",style:{"margin-right":"4px"}},Op={key:0,class:"msg-actions"},Mp=["onClick","title"],Lp=["onClick","title"],Fp={key:4,class:"msg-reactions"},Up=["onClick"],Bp={key:0},qp={class:"input-area glass"},jp={class:"input-toolbar"},$p={key:0,class:"emoji-picker glass-heavy"},zp={class:"ep-tabs"},Kp=["onClick"],Gp={class:"ep-grid"},Qp=["onClick"],Wp={key:0,class:"file-preview-bar"},Hp={class:"file-preview-card"},Xp=["src"],Yp={key:1,class:"file-preview-icon"},Jp={class:"file-preview-details"},Zp={class:"file-preview-name"},tg={class:"file-preview-size"},eg={class:"main-input-row"},ng={class:"input-box-wrap"},sg=["placeholder","onKeydown"],rg=["disabled"],ig={key:0,class:"spinner",style:{width:"16px",height:"16px","border-width":"2px"}},og={key:1},ag={key:0,class:"members-panel glass"},lg={class:"mp-header"},ug={class:"mp-list"},cg={class:"mp-name"},hg=["src"],dg={class:"settings-inner"},fg={class:"settings-section"},mg={class:"color-picker"},pg=["onClick"],gg={class:"settings-section"},_g={class:"toggle-switch"},yg={key:1,class:"loading-screen"},vg={__name:"chat",setup(n){lc({title:"Chat"});const{$firebase:t}=uc(),e=ot(null),s=ot([]),i=ot(""),o=ot("general"),a=ot(!1),c=ot(!1),h=ot(!1),f=ot(!1),p=ot(!1),w=ot(""),R=ot(""),b=ot(null),N=ot(!1),L=ot(null),D=ot(!1),W=ot(0),J=ot(!0),Y=ot("Smileys"),Z=ot(null),Vt=ot(null),ct=ot(null),v=ot(null),m=ot("#7c3aed"),g=ot(!1),y=ot("");let E=null;function I(P){y.value=P,clearTimeout(E),E=setTimeout(()=>{y.value=""},4500)}function _(){try{const P=new(window.AudioContext||window.webkitAudioContext);[523.25,659.25,783.99,1046.5].forEach((M,j)=>{const z=P.createOscillator(),U=P.createGain();z.type="triangle",z.frequency.setValueAtTime(M,P.currentTime+j*.09),U.gain.setValueAtTime(.15,P.currentTime+j*.09),U.gain.exponentialRampToValueAtTime(.001,P.currentTime+j*.09+.35),z.connect(U),U.connect(P.destination),z.start(P.currentTime+j*.09),z.stop(P.currentTime+j*.09+.35)})}catch{}}const ee=["#7c3aed","#ec4899","#f97316","#3b82f6","#14b8a6","#8b5cf6","#06b6d4","#10b981"],re=[{id:"general",name:"général",icon:"📣",desc:"Discussion générale & vie du lycée",unread:0},{id:"entraide",name:"entraide",icon:"📚",desc:"Devoirs, cours & révisions",unread:0},{id:"detente",name:"détente",icon:"🎮",desc:"Pause café & bavardages",unread:0}],xr=be(()=>R.value?re.filter(P=>P.name.toLowerCase().includes(R.value.toLowerCase())):re),Wt=be(()=>re.find(P=>P.id===o.value)||re[0]),we=[{name:"Smileys",icon:"😄",emojis:["😀","😂","🥹","😊","😍","🤩","😎","🥳","😏","🤔","😅","🫡","😴","🤯","🥸","🤗","😇","🫶","🙏","👀","💪","✌️","👍","❤️","🔥","⭐","💯","🎉","✨","💥"]},{name:"Lycée",icon:"📚",emojis:["📚","📖","✏️","📝","🖊️","📐","📏","🔬","🔭","💡","🧪","🧬","🎓","🏫","📋","📊","📈","🗒️","💻","🖥️","⌨️","🖱️","📱","⏰","📅","🗂️"]},{name:"Fun",icon:"🎮",emojis:["🎮","🎲","🎯","🎸","🎵","🎨","🏆","🥇","⚽","🏀","🎾","🎳","🎭","🎬","🎪","🎢","🎡","🎠","🚀","🌈","🦄","🐸","🦊","🐉","🌟","🌙","☀️","🌊","🏖️","🌴"]},{name:"Bouffe",icon:"🍕",emojis:["🍕","🍔","🌮","🍜","🍣","🍰","🎂","🍩","🧁","🍪","🍫","🧃","☕","🧋","🍵","🍺","🥤","🍿","🥗","🍎","🍓","🍇","🥑","🌽","🥪","🍟","🌯","🥙","🫔"]}],Mn=["👍","❤️","😂","🔥","😮","👏"],Cs=be(()=>{var P;return((P=we.find(T=>T.name===Y.value))==null?void 0:P.emojis)||[]}),ie=ot(null),Ot=ot(null);function Rt(){var P;(P=v.value)==null||P.click()}function Or(P){var M;const T=(M=P.target.files)==null?void 0:M[0];if(T){if(T.size>20*1024*1024){alert("Fichier trop volumineux (20 Mo maximum)."),v.value&&(v.value.value="");return}ie.value=T,T.type.startsWith("image/")?Ot.value=URL.createObjectURL(T):Ot.value=null,v.value&&(v.value.value="")}}function Ae(){Ot.value&&URL.revokeObjectURL(Ot.value),ie.value=null,Ot.value=null}function Vs(P){return P?P<1024?P+" o":P<1024*1024?(P/1024).toFixed(1)+" Ko":(P/(1024*1024)).toFixed(1)+" Mo":""}const zt=typeof window<"u"?"tab_"+Math.random().toString(36).substring(2,9):"tab_init",un=ot([]),bs=ot([]);function cn(P){return(P.name||P.email||"?").split(" ").map(M=>M[0]).join("").toUpperCase().slice(0,2)}const je=be(()=>{var T,M;return(((T=e.value)==null?void 0:T.displayName)||((M=e.value)==null?void 0:M.email)||"?").split(" ").map(j=>j[0]).join("").toUpperCase().slice(0,2)}),hn=be(()=>{var z;const P=[],T=un.value||[];let M=0;T.forEach(U=>{M++;const st=U.id===zt,ft=T.length>1?st?" (Vous)":` (Onglet ${M})`:"";P.push({id:U.id,uid:U.uid,name:(U.name||"Utilisateur")+ft,email:U.email,color:U.color||m.value,isLocal:!0,isPrimary:st})});const j=new Set(T.map(U=>U.uid));return bs.value.forEach(U=>{!j.has(U.uid)&&!P.some(st=>st.uid===U.uid)&&P.push({id:"remote_"+U.uid,uid:U.uid,name:U.name||U.email||"Utilisateur",email:U.email,color:U.color||gn(U.uid),isLocal:!1})}),P.length===0&&e.value&&P.push({id:zt,uid:e.value.uid,name:e.value.displayName||((z=e.value.email)==null?void 0:z.split("@")[0])||"Utilisateur",email:e.value.email,color:m.value,isLocal:!0,isPrimary:!0}),P}),$e=be(()=>hn.value.length||1);let fe=null,me=null,Ie=null,oe=null;function Ln(P){var T,M;if(!(typeof window>"u"||!P))try{const j=localStorage.getItem("lycee_chat_tabs");let z={};if(j)try{z=JSON.parse(j)}catch{}const U=Date.now(),st={};for(const[ft,q]of Object.entries(z))q&&q.lastSeen&&U-q.lastSeen<1e4&&(st[ft]=q);st[zt]={id:zt,uid:P.uid,name:P.displayName||((T=P.email)==null?void 0:T.split("@")[0])||"Élève",email:P.email,color:m.value,lastSeen:U},localStorage.setItem("lycee_chat_tabs",JSON.stringify(st)),un.value=Object.values(st)}catch{un.value=[{id:zt,uid:P.uid,name:P.displayName||((M=P.email)==null?void 0:M.split("@")[0])||"Élève",email:P.email,color:m.value,lastSeen:Date.now()}]}}function Fn(){if(!(typeof window>"u"))try{const P=localStorage.getItem("lycee_chat_tabs");if(P){const T=JSON.parse(P);delete T[zt],localStorage.setItem("lycee_chat_tabs",JSON.stringify(T))}}catch{}}function Un(P){if(P){if(Ln(P),Ie&&clearInterval(Ie),Ie=Ho(()=>Ln(P),3500),typeof window<"u"){if(window.addEventListener("storage",T=>{if(T.key==="lycee_chat_tabs"&&T.newValue)try{const M=JSON.parse(T.newValue),j=Date.now();un.value=Object.values(M).filter(z=>z&&j-z.lastSeen<1e4)}catch{}}),typeof BroadcastChannel<"u")try{oe=new BroadcastChannel("lycee_chat_presence"),oe.onmessage=T=>{var M,j,z;(((M=T.data)==null?void 0:M.type)==="HEARTBEAT"||((j=T.data)==null?void 0:j.type)==="JOIN"||((z=T.data)==null?void 0:z.type)==="LEAVE")&&Ln(P)},oe.postMessage({type:"JOIN",id:zt})}catch{}window.addEventListener("beforeunload",()=>{if(Fn(),oe)try{oe.postMessage({type:"LEAVE",id:zt})}catch{}if(t&&P){const T=Se(t);tr(Je(T,"messages","presence_"+P.uid)).catch(()=>{})}})}if(t){const T=Se(t),M=Je(T,"messages","presence_"+P.uid),j=()=>{var z;vf(M,{room:"__presence__",isPresence:!0,uid:P.uid,name:P.displayName||((z=P.email)==null?void 0:z.split("@")[0])||"Utilisateur",email:P.email,color:m.value,lastSeen:Date.now(),createdAt:Ua()},{merge:!0}).catch(()=>{})};j(),me&&clearInterval(me),me=Ho(j,3e4)}}}const Ss=be(()=>{const P=w.value?s.value.filter(U=>(U.text||"").toLowerCase().includes(w.value.toLowerCase())||(U.fileName||"").toLowerCase().includes(w.value.toLowerCase())):s.value,T=[];let M=null,j=null,z=null;return P.forEach(U=>{var Kt,jn,Qe,$n,_n,We,Ht,zn;const st=((jn=(Kt=U.createdAt)==null?void 0:Kt.toDate)==null?void 0:jn.call(Kt))||((Qe=U.createdAt)!=null&&Qe.seconds?new Date(U.createdAt.seconds*1e3):new Date),ft=qn(st),q=xs(st),Pt=U.uid===(($n=e.value)==null?void 0:$n.uid),x=U.displayName||U.author||((_n=U.email)==null?void 0:_n.split("@")[0])||"Anonyme",jt=x.split(" ").map(Os=>Os[0]).join("").toUpperCase().slice(0,2),lt=gn(U.uid||x),ae=ft!==j;ae&&(j=ft),U.uid===M&&!ae&&z&&st-(((zn=(Ht=(We=z.messages.at(-1))==null?void 0:We.createdAt)==null?void 0:Ht.toDate)==null?void 0:zn.call(Ht))||new Date)<3e5&&z?z.messages.push(U):(z={author:x,initials:jt,color:lt,isOwn:Pt,isAdmin:!!U.isAdmin,time:q,date:ft,showDate:ae,messages:[U]},T.push(z)),M=U.uid}),T}),Mr=be(()=>new Date().toLocaleDateString("fr-FR",{weekday:"long",year:"numeric",month:"long",day:"numeric"}));cc(async()=>{localStorage.getItem("chat_admin_goofy")==="true"&&(g.value=!0);const T=Xo(t);mc(T,M=>{if(M){e.value=M;const j=localStorage.getItem("profileColor");j&&(m.value=j),Un(M),dn(o.value)}else Qo("/login")})}),hc(m,P=>localStorage.setItem("profileColor",P)),dc(()=>{if(fe&&fe(),me&&clearInterval(me),Ie&&clearInterval(Ie),Fn(),oe)try{oe.postMessage({type:"LEAVE",id:zt}),oe.close()}catch{}if(e.value&&t){const P=Se(t);tr(Je(P,"messages","presence_"+e.value.uid)).catch(()=>{})}});function dn(P){fe&&fe(),s.value=[];const T=Se(t),M=df(xa(T,"messages"),ff("createdAt","desc"),mf(150));fe=wf(M,j=>{const z=s.value.length,U=j.docs.map(q=>({id:q.id,...q.data()})),st=Date.now();bs.value=U.filter(q=>(q.isPresence||q.room==="__presence__")&&q.uid&&st-(q.lastSeen||0)<12e4).map(q=>{var Pt;return{uid:q.uid,name:q.name||((Pt=q.email)==null?void 0:Pt.split("@")[0])||"Utilisateur",email:q.email,color:q.color,lastSeen:q.lastSeen}});const ft=U.filter(q=>!q.isPresence&&q.room!=="__presence__");ft.sort((q,Pt)=>{var lt,ae,vt,Kt;const x=(lt=q.createdAt)!=null&&lt.toMillis?q.createdAt.toMillis():(ae=q.createdAt)!=null&&ae.seconds?q.createdAt.seconds*1e3:0,jt=(vt=Pt.createdAt)!=null&&vt.toMillis?Pt.createdAt.toMillis():(Kt=Pt.createdAt)!=null&&Kt.seconds?Pt.createdAt.seconds*1e3:0;return x-jt}),s.value=ft.filter(q=>(q.room||"general")===o.value),s.value.length>z&&z>0&&(W.value++,J.value&&Ge()),Wo(pn)},j=>{console.error("Erreur écoute messages Firestore:",j)})}async function fn(){const P=i.value.trim(),T=ie.value;if(P.toLowerCase()==="/admingoofyahah"){i.value="",g.value=!g.value,localStorage.setItem("chat_admin_goofy",g.value?"true":"false"),_(),g.value?I("👑 MODE ADMIN ACTIVÉ ! Vous avez les pleins pouvoirs de modération et pouvez supprimer n'importe quel message."):I("🛡️ Mode Admin désactivé.");return}if(g.value&&P.toLowerCase()==="/clear"){i.value="",s.value=[],I("🧹 Messages nettoyés localement.");return}if(!P&&!T||N.value)return;N.value=!0;const M=Se(t);let j=null,z=!1;try{if(T){z=T.type.startsWith("image/");try{const st=Nm(t),ft=`chat_files/${Date.now()}_${T.name}`,q=Dm(st,ft);await Sm(q,T),j=await km(q)}catch(st){if(console.warn("Firebase Storage échoué, utilisation du fallback local...",st),T.size<800*1024)j=await new Promise(ft=>{const q=new FileReader;q.onload=Pt=>ft(Pt.target.result),q.onerror=()=>ft(null),q.readAsDataURL(T)});else{alert("Impossible de transférer ce fichier via le stockage Firebase. Limitez à 800 Ko en mode direct."),N.value=!1;return}}}const U={text:P||"",author:e.value.displayName||e.value.email.split("@")[0]||"Anonyme",displayName:e.value.displayName||e.value.email.split("@")[0]||"Anonyme",email:e.value.email,uid:e.value.uid,room:o.value,isAdmin:!!g.value,createdAt:Ua(),reactions:{}};j&&(U.fileUrl=j,U.fileName=T.name,U.fileSize=T.size,U.fileType=T.type,z&&(U.imageUrl=j)),await Ef(xa(M,"messages"),U),i.value="",Ae(),p.value=!1,Wo(()=>{Bn(),pn()})}catch(U){console.error("Erreur sendMessage:",U),alert("Erreur lors de l'envoi du message : "+(U.message||"Vérifiez la connexion."))}finally{N.value=!1}}async function ks(P){var T;if(g.value&&P.uid!==((T=e.value)==null?void 0:T.uid)){const M=P.author||P.displayName||"cet utilisateur";if(!confirm(`👑 Action Administrateur :
Voulez-vous supprimer le message de "${M}" ?`))return}try{const M=Se(t);await tr(Je(M,"messages",P.id)),s.value=s.value.filter(j=>j.id!==P.id),I("Message supprimé 🗑️")}catch(M){console.error("Erreur suppression message:",M),alert("Erreur lors de la suppression : "+(M.message||"Impossible de supprimer ce message."))}}async function At(P,T){var M;try{const j=Se(t),z=Je(j,"messages",P.id),st=((M=(await yf(z)).data())==null?void 0:M.reactions)||{},ft=`${T}`;st[ft]=(st[ft]||0)+1,await Tf(z,{reactions:st})}catch(j){console.error("Erreur réaction:",j)}}function bt(P,T){return!1}function mn(P){o.value=P.id,P.unread=0,a.value=!1,dn(P.id)}async function Ds(){if(e.value&&t){const T=Se(t);tr(Je(T,"presence",e.value.uid)).catch(()=>{})}const P=Xo(t);await pc(P),Qo("/")}function pn(){var P;(P=Vt.value)==null||P.scrollIntoView({behavior:"smooth"}),D.value=!1,W.value=0}function Lr(){if(!Z.value)return;const P=Z.value,T=P.scrollHeight-P.scrollTop-P.clientHeight<100;D.value=!T}function ze(){Bn()}function Bn(){const P=ct.value;P&&(P.style.height="auto",P.style.height=Math.min(P.scrollHeight,150)+"px")}function Ns(P){var T;i.value+=P,p.value=!1,(T=ct.value)==null||T.focus()}function Ke(P){const T=ct.value;if(!T)return;const M=T.selectionStart,j=T.selectionEnd,z=i.value.slice(M,j);i.value=i.value.slice(0,M)+P+z+P+i.value.slice(j)}function Fr(P){L.value=P}function Ur(P,T){if(!P)return"";let M=P.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/\*\*(.*?)\*\*/g,"<strong>$1</strong>").replace(/_(.*?)_/g,"<em>$1</em>").replace(/`(.*?)`/g,'<code class="inline-code">$1</code>').replace(/\n/g,"<br>");if(T){const j=new RegExp(`(${T.replace(/[.*+?^${}()|[\]\\]/g,"\\$&")})`,"gi");M=M.replace(j,'<mark class="search-highlight">$1</mark>')}return M}function qn(P){const T=new Date,M=new Date(T);return M.setDate(T.getDate()-1),P.toDateString()===T.toDateString()?"Aujourd'hui":P.toDateString()===M.toDateString()?"Hier":P.toLocaleDateString("fr-FR",{weekday:"long",day:"numeric",month:"long"})}function xs(P){return P.toLocaleTimeString("fr-FR",{hour:"2-digit",minute:"2-digit"})}function gn(P){if(!P)return"#7c3aed";const T=["#7c3aed","#ec4899","#f97316","#3b82f6","#14b8a6","#8b5cf6","#06b6d4","#10b981","#f59e0b"];let M=0;for(const j of P)M=j.charCodeAt(0)+((M<<5)-M);return T[Math.abs(M)%T.length]}function Ge(){try{const P=new(window.AudioContext||window.webkitAudioContext),T=P.createOscillator(),M=P.createGain();T.connect(M),M.connect(P.destination),T.frequency.setValueAtTime(880,P.currentTime),M.gain.setValueAtTime(.1,P.currentTime),M.gain.exponentialRampToValueAtTime(.001,P.currentTime+.3),T.start(),T.stop(P.currentTime+.3)}catch{}}return(P,T)=>{var j,z,U,st,ft,q,Pt;const M=rc;return e.value?(Q(),G("div",Lm,[_e(Ce,{name:"slide-down"},{default:ye(()=>[y.value?(Q(),G("div",Fm,[T[23]||(T[23]=V("span",{class:"admin-toast-icon"},"👑",-1)),V("span",Um,tt(y.value),1),V("button",{class:"admin-toast-close",onClick:T[0]||(T[0]=x=>y.value="")},"✕")])):mt("",!0)]),_:1}),V("aside",{class:Ve(["sidebar",{open:a.value}])},[V("div",Bm,[_e(M,{to:"/",class:"sidebar-logo"},{default:ye(()=>[...T[24]||(T[24]=[V("div",{class:"sidebar-logo-icon"},"🎓",-1),V("div",null,[V("div",{class:"sidebar-logo-text"},"Lycée Europe"),V("div",{class:"sidebar-logo-sub"},"Chat ∙ Communauté")],-1)])]),_:1}),V("button",{class:"mobile-close-btn",onClick:T[1]||(T[1]=x=>a.value=!1)},"✕")]),V("div",qm,[V("div",jm,[V("div",{class:"user-avatar",style:Zn(`background: ${m.value}`)},tt(je.value),5),T[25]||(T[25]=V("div",{class:"status-dot"},null,-1))]),V("div",$m,[V("div",zm,[ts(tt(e.value.displayName||"Anonyme")+" ",1),g.value?(Q(),G("span",Km,"👑 ADMIN")):mt("",!0)]),V("div",Gm,tt(e.value.email),1)]),V("button",{class:"settings-btn",onClick:T[2]||(T[2]=x=>f.value=!f.value),title:"Paramètres"},"⚙")]),V("div",Qm,[V("div",Wm,[T[26]||(T[26]=V("span",{class:"input-icon"},"🔍",-1)),Ws(V("input",{"onUpdate:modelValue":T[3]||(T[3]=x=>R.value=x),type:"text",class:"input-field",placeholder:"Rechercher un salon..."},null,512),[[Yr,R.value]])])]),V("div",Hm,[T[27]||(T[27]=V("div",{class:"rooms-category"},[V("span",{class:"category-label"},"Salons officiels (3)")],-1)),(Q(!0),G(le,null,ve(xr.value,x=>(Q(),G("button",{key:x.id,class:Ve(["room-btn",{active:o.value===x.id}]),onClick:jt=>mn(x)},[V("span",Ym,tt(x.icon),1),V("div",Jm,[V("span",Zm,"# "+tt(x.name),1),V("span",tp,tt(x.desc),1)]),x.unread?(Q(),G("span",ep,tt(x.unread),1)):mt("",!0)],10,Xm))),128))]),V("div",{class:"sidebar-footer"},[V("button",{class:"logout-btn",onClick:Ds},[...T[28]||(T[28]=[V("span",null,"🚪",-1),ts(" Se déconnecter ",-1)])])])],2),V("main",np,[V("div",sp,[V("button",{class:"mobile-menu-btn",onClick:T[4]||(T[4]=x=>a.value=!0)},"☰"),V("div",rp,[V("div",ip,tt(((j=Wt.value)==null?void 0:j.icon)||"💬"),1),V("div",null,[V("h2",op,"# "+tt(((z=Wt.value)==null?void 0:z.name)||"général"),1),V("p",ap,tt(((U=Wt.value)==null?void 0:U.desc)||"")+" ∙ "+tt($e.value)+" en ligne",1)])]),V("div",lp,[V("button",{class:"icon-btn",title:"Rechercher",onClick:T[5]||(T[5]=x=>h.value=!h.value),"data-tooltip":"Rechercher dans ce salon"},"🔍"),V("button",{class:"icon-btn",title:"Membres",onClick:T[6]||(T[6]=x=>c.value=!c.value),"data-tooltip":"Membres en ligne"},"👥"),V("div",up,[T[29]||(T[29]=V("span",{class:"status-dot",style:{width:"6px",height:"6px"}},null,-1)),ts(" "+tt($e.value)+" en ligne ",1),g.value?(Q(),G("span",cp,"👑 Admin")):mt("",!0)])])]),_e(Ce,{name:"slide-down"},{default:ye(()=>[h.value?(Q(),G("div",hp,[V("div",dp,[T[30]||(T[30]=V("span",{class:"input-icon"},"🔍",-1)),Ws(V("input",{"onUpdate:modelValue":T[7]||(T[7]=x=>w.value=x),class:"input-field",placeholder:"Rechercher dans les messages..."},null,512),[[Yr,w.value]])]),V("button",{onClick:T[8]||(T[8]=x=>{h.value=!1,w.value=""}),class:"btn btn-glass btn-sm"},"✕")])):mt("",!0)]),_:1}),V("div",{class:"messages-area",ref_key:"messagesArea",ref:Z,onScroll:Lr},[V("div",fp,[V("div",mp,tt(((st=Wt.value)==null?void 0:st.icon)||"💬"),1),V("h3",pp,"Bienvenue dans #"+tt(((ft=Wt.value)==null?void 0:ft.name)||"général"),1),V("p",gp,tt(((q=Wt.value)==null?void 0:q.desc)||"Discutez avec votre communauté."),1),V("div",_p,[V("span",yp,"Début du salon ∙ "+tt(Mr.value),1)])]),(Q(!0),G(le,null,ve(Ss.value,(x,jt)=>(Q(),G(le,{key:jt},[x.showDate?(Q(),G("div",vp,[T[31]||(T[31]=V("span",{class:"ds-line"},null,-1)),V("span",Tp,tt(x.date),1),T[32]||(T[32]=V("span",{class:"ds-line"},null,-1))])):mt("",!0),V("div",{class:Ve(["msg-group",{"msg-mine":x.isOwn,"anim-fade-up":!0,highlighted:w.value&&x.messages.some(lt=>lt.text.toLowerCase().includes(w.value.toLowerCase()))}])},[x.isOwn?mt("",!0):(Q(),G("div",{key:0,class:"msg-avatar",style:Zn(`background: ${x.color}`)},tt(x.initials),5)),V("div",Ep,[x.isOwn?mt("",!0):(Q(),G("div",wp,[V("span",Ap,tt(x.author),1),x.isAdmin?(Q(),G("span",Ip,"👑 ADMIN")):mt("",!0),V("span",Rp,tt(x.time),1)])),(Q(!0),G(le,null,ve(x.messages,(lt,ae)=>(Q(),G("div",{key:lt.id,class:Ve(["msg-bubble",{mine:x.isOwn}]),onMouseenter:vt=>b.value=lt.id,onMouseleave:T[9]||(T[9]=vt=>b.value=null)},[lt.imageUrl?(Q(),G("img",{key:0,src:lt.imageUrl,class:"msg-image",onClick:vt=>Fr(lt.imageUrl)},null,8,Cp)):lt.fileUrl?(Q(),G("a",{key:1,href:lt.fileUrl,target:"_blank",download:lt.fileName||"fichier",class:"msg-file-attachment"},[T[33]||(T[33]=V("span",{class:"file-icon-badge"},"📄",-1)),V("div",bp,[V("span",Sp,tt(lt.fileName||"Fichier joint"),1),V("span",kp,tt(Vs(lt.fileSize)),1)]),T[34]||(T[34]=V("span",{class:"file-download-btn",title:"Télécharger"},"⬇",-1))],8,Vp)):mt("",!0),lt.text?(Q(),G("span",{key:2,innerHTML:Ur(lt.text,w.value)},null,8,Dp)):mt("",!0),x.isOwn&&ae===x.messages.length-1?(Q(),G("span",Np,[g.value?(Q(),G("span",xp,"👑 ADMIN")):mt("",!0),ts(" "+tt(x.time),1)])):mt("",!0),_e(Ce,{name:"fade-fast"},{default:ye(()=>[b.value===lt.id?(Q(),G("div",Op,[(Q(),G(le,null,ve(Mn,vt=>V("button",{key:vt,class:"reaction-btn",onClick:Kt=>At(lt,vt),title:vt},tt(vt),9,Mp)),64)),x.isOwn||g.value?(Q(),G("button",{key:0,class:"reaction-btn danger",onClick:vt=>ks(lt),title:g.value&&!x.isOwn?"👑 Modération Admin : Supprimer ce message":"Supprimer"},"🗑",8,Lp)):mt("",!0)])):mt("",!0)]),_:2},1024),lt.reactions&&Object.keys(lt.reactions).length?(Q(),G("div",Fp,[(Q(!0),G(le,null,ve(lt.reactions,(vt,Kt)=>(Q(),G("button",{key:Kt,class:Ve(["reaction-pill",{active:bt()}]),onClick:jn=>At(lt,Kt)},tt(Kt)+" "+tt(vt),11,Up))),128))])):mt("",!0)],42,Pp))),128))])],2)],64))),128)),V("div",{ref_key:"messagesBottom",ref:Vt},null,512)],544),_e(Ce,{name:"scale-up"},{default:ye(()=>[D.value?(Q(),G("button",{key:0,class:"scroll-bottom-btn",onClick:pn},[T[35]||(T[35]=ts(" ↓ ",-1)),W.value>0?(Q(),G("span",Bp,tt(W.value)+" nouveau"+tt(W.value>1?"x":""),1)):mt("",!0)])):mt("",!0)]),_:1}),V("div",qp,[V("div",jp,[V("button",{class:"tool-btn",onClick:Rt,title:"Image"},"📎"),V("button",{class:"tool-btn",onClick:T[10]||(T[10]=x=>p.value=!p.value),title:"Emoji"},"😄"),V("button",{class:"tool-btn",onClick:T[11]||(T[11]=x=>Ke("**")),title:"Gras"},"𝐁"),V("button",{class:"tool-btn",onClick:T[12]||(T[12]=x=>Ke("_")),title:"Italique"},"𝐼"),V("button",{class:"tool-btn",onClick:T[13]||(T[13]=x=>Ke("`")),title:"Code"},"〈/〉")]),_e(Ce,{name:"scale-up"},{default:ye(()=>[p.value?(Q(),G("div",$p,[V("div",zp,[(Q(),G(le,null,ve(we,x=>V("button",{key:x.name,class:Ve(["ep-tab",{active:Y.value===x.name}]),onClick:jt=>Y.value=x.name},tt(x.icon),11,Kp)),64))]),V("div",Gp,[(Q(!0),G(le,null,ve(Cs.value,x=>(Q(),G("button",{key:x,class:"ep-emoji",onClick:jt=>Ns(x)},tt(x),9,Qp))),128))])])):mt("",!0)]),_:1}),ie.value?(Q(),G("div",Wp,[V("div",Hp,[Ot.value?(Q(),G("img",{key:0,src:Ot.value,class:"file-preview-thumb"},null,8,Xp)):(Q(),G("span",Yp,"📎")),V("div",Jp,[V("span",Zp,tt(ie.value.name),1),V("span",tg,tt(Vs(ie.value.size)),1)]),V("button",{class:"file-preview-remove",onClick:Ae,title:"Retirer le fichier"},"✕")])])):mt("",!0),V("div",eg,[V("div",{class:"user-avatar-small",style:Zn(`background: ${m.value}`)},tt(je.value),5),V("div",ng,[Ws(V("textarea",{ref_key:"messageInput",ref:ct,"onUpdate:modelValue":T[14]||(T[14]=x=>i.value=x),class:"message-textarea",placeholder:`Message dans #${((Pt=Wt.value)==null?void 0:Pt.name)||"général"}…`,onKeydown:[Go(Hs(fn,["exact","prevent"]),["enter"]),T[15]||(T[15]=Go(Hs(x=>i.value+=`
`,["shift","exact"]),["enter"]))],onInput:ze,rows:"1"},null,40,sg),[[Yr,i.value]]),V("input",{ref_key:"fileInput",ref:v,type:"file",style:{display:"none"},onChange:Or},null,544)]),V("button",{class:Ve(["send-btn",{active:i.value.trim()||ie.value}]),onClick:fn,disabled:!i.value.trim()&&!ie.value||N.value,title:"Envoyer"},[N.value?(Q(),G("span",ig)):(Q(),G("span",og,"➤"))],10,rg)]),T[36]||(T[36]=V("div",{class:"input-hint"},[V("span",null,"Entrée pour envoyer"),V("span",null,"Maj+Entrée pour nouvelle ligne")],-1))])]),_e(Ce,{name:"slide-left"},{default:ye(()=>[c.value?(Q(),G("aside",ag,[V("div",lg,[V("h3",null,"Membres en ligne ("+tt($e.value)+")",1),V("button",{class:"icon-btn",onClick:T[16]||(T[16]=x=>c.value=!1)},"✕")]),V("div",ug,[(Q(!0),G(le,null,ve(hn.value,x=>(Q(),G("div",{key:x.uid,class:"mp-member"},[V("div",{class:"mp-avatar",style:Zn(`background: ${x.color||gn(x.uid||"1")}`)},tt(cn(x)),5),V("div",null,[V("div",cg,tt(x.name||x.email||"Utilisateur"),1),T[37]||(T[37]=V("div",{class:"mp-status"},"En ligne",-1))]),T[38]||(T[38]=V("div",{class:"status-dot",style:{"margin-left":"auto"}},null,-1))]))),128))])])):mt("",!0)]),_:1}),_e(Ce,{name:"fade-fast"},{default:ye(()=>[L.value?(Q(),G("div",{key:0,class:"lightbox",onClick:T[19]||(T[19]=x=>L.value=null)},[V("img",{src:L.value,class:"lightbox-img",onClick:T[17]||(T[17]=Hs(()=>{},["stop"]))},null,8,hg),V("button",{class:"lightbox-close",onClick:T[18]||(T[18]=x=>L.value=null)},"✕")])):mt("",!0)]),_:1}),_e(Ce,{name:"scale-up"},{default:ye(()=>[f.value?(Q(),G("div",{key:0,class:"settings-modal glass-heavy",onClick:T[22]||(T[22]=Hs(x=>f.value=!1,["self"]))},[V("div",dg,[T[42]||(T[42]=V("h3",{class:"settings-title"},"⚙ Paramètres",-1)),V("div",fg,[T[39]||(T[39]=V("label",{class:"settings-label"},"Couleur de profil",-1)),V("div",mg,[(Q(),G(le,null,ve(ee,x=>V("button",{key:x,class:Ve(["color-swatch",{selected:m.value===x}]),style:Zn(`background: ${x}`),onClick:jt=>m.value=x},null,14,pg)),64))])]),V("div",gg,[T[41]||(T[41]=V("label",{class:"settings-label"},"Notifications sonores",-1)),V("label",_g,[Ws(V("input",{type:"checkbox","onUpdate:modelValue":T[20]||(T[20]=x=>J.value=x)},null,512),[[fc,J.value]]),T[40]||(T[40]=V("span",{class:"toggle-track"},null,-1))])]),V("button",{class:"btn btn-primary btn-sm",style:{"margin-top":"16px"},onClick:T[21]||(T[21]=x=>f.value=!1)},"Fermer")])])):mt("",!0)]),_:1})])):(Q(),G("div",yg,[...T[43]||(T[43]=[V("div",{class:"loading-spinner"},null,-1),V("p",null,"Vérification de votre session…",-1)])]))}}},Vg=gc(vg,[["__scopeId","data-v-69f5ab8c"]]);export{Vg as default};

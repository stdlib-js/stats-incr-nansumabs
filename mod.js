// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./mod.d.ts" />
var n=function(n){return n!=n};var r=function(n){return Math.abs(n)};var t=function(){var n,t=0;return function(u){if(0===arguments.length)return n?t:null;return n=!0,t+=r(u)}};function u(){var r=t();return function(t){if(0===arguments.length||n(t))return r();return r(t)}}export{u as default};
//# sourceMappingURL=mod.js.map

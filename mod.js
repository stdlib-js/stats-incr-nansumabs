// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./mod.d.ts" />
var n=function(n){return Math.abs(n)};var r=function(n){return n!=n},t=function(){var r,t=0;return function(u){if(0===arguments.length)return r?t:null;return r=!0,t+=n(u)}};var u=function(){var n=t();return function(t){if(0===arguments.length||r(t))return n();return n(t)}};export{u as default};
//# sourceMappingURL=mod.js.map

// Copyright (c) 2026 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./mod.d.ts" />
function n(){var n,r=0;return function(t){if(0===arguments.length)return n?r:null;return n=!0,r+=function(n){return Math.abs(n)}(t)}}function r(){var r=n();return function(n){if(0===arguments.length||function(n){return n!=n}(n))return r();return r(n)}}export{r as default};
//# sourceMappingURL=mod.js.map

"use strict";var s=function(e,r){return function(){return r||e((r={exports:{}}).exports,r),r.exports}};var t=s(function(p,a){
var v=require('@stdlib/ndarray-base-numel-dimension/dist'),n=require('@stdlib/ndarray-base-stride/dist'),q=require('@stdlib/ndarray-base-offset/dist'),d=require('@stdlib/ndarray-base-data-buffer/dist'),m=require('@stdlib/stats-strided-dmaxabs/dist').ndarray;function o(e){var r=e[0];return m(v(r,0),d(r),n(r,0),q(r))}a.exports=o
});var x=require("path").join,f=require('@stdlib/utils-try-require/dist'),c=require('@stdlib/assert-is-error/dist'),g=t(),i,u=f(x(__dirname,"./native.js"));c(u)?i=g:i=u;module.exports=i;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map

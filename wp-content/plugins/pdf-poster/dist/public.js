(()=>{"use strict";var e;e=document.querySelectorAll(".pdfp_wrapper"),Object.values(e).map((function(e){var l=null==e?void 0:e.querySelector("iframe"),o=e.querySelector(".fullscreenBtn"),r=function(){var e,l,o,r,n,t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",c=(t=t||(null===(e=location)||void 0===e?void 0:e.href)).indexOf("?")+1,i=t.indexOf("#")+1||t.length+1,u=t.slice(c,i-1),d=u.replace(/\+/g," ").split("&"),p={};if(u!==t&&""!==u){for(l=0;l<d.length;l++)n=d[l].split("=",2),o=decodeURIComponent(n[0]),r=decodeURIComponent(n[1]),p.hasOwnProperty(o)||(p[o]=[]),p[o]=2===n.length?r:null;return p}}(null==l?void 0:l.src),n=new URL(null==r?void 0:r.file),t=new URL(null==l?void 0:l.src);if((null==t?void 0:t.protocol)!==(null==n?void 0:n.protocol)){var c=t.href.replace(n.protocol,t.protocol);l.src=c,o.href=c}}))})();
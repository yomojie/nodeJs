"use strict";!function(s,d){var e,t=!(!(e=d.createElement("canvas"))||!e.toDataURL)&&0===e.toDataURL("image/webp").indexOf("data:image/webp"),r=d.documentElement;function i(){var e=s.devicePixelRatio||1,t=640<r.clientWidth?640:r.clientWidth,i=Math.ceil(t/3.75);if(r.style.fontSize=(i%2==0?i:i+1)+"px",r.className=r.className.replace(/\s*hairlines/g,""),2<=e){var a=d.createElement("body"),n=d.createElement("div");n.style.border="0.5px solid transparent",a.appendChild(n),r.appendChild(a),1===n.offsetHeight&&(r.className+=" hairlines"),r.removeChild(a)}}i(),s.init=function(){var e=0<arguments.length&&void 0!==arguments[0]&&arguments[0];s.isProduction=e,s.isSupportWebp=t,e&&t&&(r.className+=" support-webp"),delete s.init},s.isSupportWebp=t,s.addEventListener("resize",i),s.addEventListener("pageshow",function(e){e.persisted&&i()})}(window,document);
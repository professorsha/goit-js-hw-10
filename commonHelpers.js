import"./assets/styles-161f0875.js";import{f,i as h}from"./assets/vendor-77e16229.js";let o,a;const s={enableTime:!0,time_24hr:!0,defaultDate:new Date,minuteIncrement:1,onClose(e){o=e[0],a=o-s.defaultDate,o<s.defaultDate?(h.error({color:"red",theme:"dark",position:"topCenter",message:"Please choose a date in the future"}),r.disabled=!0):r.disabled=!1}};f("#datetime-picker",s);const d=document.querySelector("#datetime-picker"),r=document.querySelector("button");r.disabled=!0;function p(e){const u=Math.floor(e/864e5),c=Math.floor(e%864e5/36e5),l=Math.floor(e%864e5%36e5/6e4),m=Math.floor(e%864e5%36e5%6e4/1e3);return{days:u,hours:c,minutes:l,seconds:m}}const n=document.querySelectorAll(".value");r.addEventListener("click",e=>{const i=setInterval(()=>{if(a=o-new Date,e.preventDefault(),d.disabled=!0,a<1){r.disabled=!0,d.disabled=!1,clearInterval(i);return}const t=p(a);n[0].innerText=t.days.toString().padStart(2,"0"),n[1].innerText=t.hours.toString().padStart(2,"0"),n[2].innerText=t.minutes.toString().padStart(2,"0"),n[3].innerText=t.seconds.toString().padStart(2,"0")},1e3)});
//# sourceMappingURL=commonHelpers.js.map
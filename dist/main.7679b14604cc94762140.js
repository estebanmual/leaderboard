(()=>{"use strict";const e=document.querySelector(".scores-table");const t=async()=>{const t=await fetch("https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/CFq0hC1cbHxChD2F2oRZ/scores/"),n=(await t.json()).result.sort(((e,t)=>t.score-e.score));n.forEach((t=>{const n=document.createElement("tr"),c=document.createElement("td"),o=document.createElement("p"),s=document.createElement("p");o.textContent=t.user,s.textContent=t.score,c.appendChild(o),c.appendChild(s),n.appendChild(c),e.appendChild(n)}))};const n=document.querySelector(".refresh-button"),c=document.querySelector(".scores-table");window.addEventListener("load",(()=>{t()})),n.addEventListener("click",(()=>{c.innerHTML="",t()}));const o=document.querySelector(".submit-button"),s=document.querySelector(".name-input"),a=document.querySelector(".score-input");o.addEventListener("click",(()=>{!async function(e,t){await fetch("https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/CFq0hC1cbHxChD2F2oRZ/scores/",{method:"POST",headers:{Accept:"application/json","Content-Type":"application/json"},body:JSON.stringify({user:e,score:t})})}(s.value,a.value),s.value="",a.value=""}))})();
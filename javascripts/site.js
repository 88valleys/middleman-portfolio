document.addEventListener("DOMContentLoaded",function(){function n(e,o,i){o<e.length?(t.innerHTML=e.substring(0,o+1)+'<span class="typed-cursor typed-cursor--blink" aria-hidden="true"></span>',setTimeout(function(){n(e,o+1,i)},100)):"function"==typeof i&&setTimeout(i,700)}function e(t){t>=o.length&&(t=0),n(o[t],0,function(){deleteWriter(o[t],o[t].length,function(){e(t+1)})})}const t=document.querySelector("h1 span"),o=["Senie \ud83d\udc4b"];if(!t)return void console.error("Element not found");e(0)});
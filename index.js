(function(n,o,l,i){"use strict";const a=function(){const e=Object.keys(l.listPlugins());if(e.length<=1){o.showToast("Not enough plugins to play!",{type:"error"});return}const u=Math.floor(Math.random()*6)+1;if(u===6)o.showToast("You're lucky! No plugin removed.",{type:"success"});else{const t=e[Math.floor(Math.random()*e.length)];i.showConfirmationAlert("Russian Roulette",`You rolled a ${u}. The plugin "${t}" will be removed!`,function(){l.removePlugin(t),o.showToast(`Plugin "${t}" removed!`,{type:"danger"})},"Proceed","Cancel")}},s=function(){o.showToast("Russian Roulette Plugin Loaded!",{type:"info"})},r=function(){o.showToast("Russian Roulette Plugin Unloaded!",{type:"info"})};return n.onLoad=s,n.onUnload=r,n.playRussianRoulette=a,n})({},vendetta.ui.toasts,vendetta.plugins,vendetta.ui.alerts);

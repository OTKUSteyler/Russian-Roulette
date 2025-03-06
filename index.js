(function(t,l,e,u,r,i,c){"use strict";const d=function(){return React.createElement(i.View,{style:{padding:10}},React.createElement(i.Text,{style:{fontSize:16,fontWeight:"bold",marginBottom:10}},"Click below to play Russian Roulette with your plugins!"),React.createElement(c.General.Button,{text:"\u{1F3B2} Spin the Roulette!",onPress:a,style:{backgroundColor:"#ff4444"},textStyle:{color:"#fff"}}))},a=function(){const n=Object.keys(u.listPlugins());if(n.length<=1){e.showToast("Not enough plugins to play!",{type:"error"});return}const s=Math.floor(Math.random()*6)+1;if(s===6)e.showToast("You're lucky! No plugin removed.",{type:"success"});else{const o=n[Math.floor(Math.random()*n.length)];r.showConfirmationAlert("Russian Roulette",`You rolled a ${s}. The plugin "${o}" will be removed!`,function(){u.removePlugin(o),e.showToast(`Plugin "${o}" removed!`,{type:"danger"})},"Proceed","Cancel")}},g=function(){l.registerSettings("Russian Roulette",d),e.showToast("Russian Roulette Plugin Loaded!",{type:"info"})},f=function(){l.unregisterSettings("Russian Roulette"),e.showToast("Russian Roulette Plugin Unloaded!",{type:"info"})};return t.onLoad=g,t.onUnload=f,t.playRussianRoulette=a,t})({},vendetta.settings,vendetta.ui.toasts,vendetta.plugins,vendetta.ui.alerts,vendetta.metro.common,vendetta.ui.components);

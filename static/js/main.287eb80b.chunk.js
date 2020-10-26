(this.webpackJsonpwebsite=this.webpackJsonpwebsite||[]).push([[0],{12:function(e,t,s){},13:function(e,t,s){},14:function(e,t,s){"use strict";s.r(t);var i=s(0),r=s.n(i),n=s(3),o=s.n(n),a=(s(12),s(1)),h=s(6),l=(s(13),s(4)),c=s(5),u=new(function(){function e(t){Object(l.a)(this,e),this.size=t,this.board=[],this.score=0,this.twos=.9,this.fours=.1,this.moveListeners=[],this.winListeners=[],this.loseListeners=[],this.won=!1,this.over=!1,this.setupNewGame()}return Object(c.a)(e,[{key:"setupNewGame",value:function(){for(var e=[],t=0;t<this.size*this.size;t++)e[t]=0;this.generateNum(e,2),this.board=e,this.won=!1,this.over=!1,this.score=0}},{key:"loadGame",value:function(e){this.board=e.board,this.score=e.score,this.won=e.won,this.over=e.over}},{key:"move",value:function(e){var t=this.board,s=!1,i=!1;switch(e){case"up":for(var r=0;r<this.size;r++){for(var n=[],o=0;o<this.size;o++){var a=this.getSpot(r,o);0!==t[a]&&n.push(t[a])}for(var h=[],l=0;l<n.length;l++)0===l?h.push(n[l]):n[l]===n[l-1]?(this.score+=2*n[l],2*n[l]===2048&&(s=!0),h[h.length-1]=2*n[l],n[l]=0):h.push(n[l]);for(;h.length<this.size;)h.push(0);for(var c=0;c<this.size;c++){var u=this.getSpot(r,c);h[c]!==t[u]&&(i=!0),t[u]=h[c]}}break;case"down":for(var v=0;v<this.size;v++){for(var f=[],g=this.size-1;g>=0;g--){var p=this.getSpot(v,g);0!==t[p]&&f.push(t[p])}for(var d=[],m=0;m<f.length;m++)0===m?d.push(f[m]):f[m]===f[m-1]?(this.score+=2*f[m],2*f[m]===2048&&(s=!0),d[d.length-1]=2*f[m],f[m]=0):d.push(f[m]);for(;d.length<this.size;)d.push(0);for(var w=0;w<this.size;w++){var b=this.getSpot(v,this.size-w-1);d[w]!==t[b]&&(i=!0),t[b]=d[w]}}break;case"left":for(var z=0;z<this.size;z++){for(var k=[],y=0;y<this.size;y++){var S=this.getSpot(y,z);0!==t[S]&&k.push(t[S])}for(var L=[],E=0;E<k.length;E++)0===E?L.push(k[E]):k[E]===k[E-1]?(this.score+=2*k[E],2*k[E]===2048&&(s=!0),L[L.length-1]=2*k[E],k[E]=0):L.push(k[E]);for(;L.length<this.size;)L.push(0);for(var x=0;x<this.size;x++){var O=this.getSpot(x,z);L[x]!==t[O]&&(i=!0),t[O]=L[x]}}break;case"right":for(var G=0;G<this.size;G++){for(var N=[],M=this.size-1;M>=0;M--){var j=this.getSpot(M,G);0!==t[j]&&N.push(t[j])}for(var A=[],W=0;W<N.length;W++)0===W?A.push(N[W]):N[W]===N[W-1]?(this.score+=2*N[W],2*N[W]===2048&&(s=!0),A[A.length-1]=2*N[W],N[W]=0):A.push(N[W]);for(;A.length<this.size;)A.push(0);for(var R=0;R<this.size;R++){var C=this.getSpot(this.size-R-1,G);A[R]!==t[C]&&(i=!0),t[C]=A[R]}}break;default:return}if(this.board=t,s){this.won=!0;for(var I=this.winListeners,J=0;J<I.length;J++)I[J](this.getGameState())}else if(i)if(this.generateNum(this.board,1),this.checkLose()){this.over=!0;for(var T=this.loseListeners,q=0;q<T.length;q++)T[q](this.getGameState())}else if(i)for(var B=this.moveListeners,D=0;D<B.length;D++)B[D](this.getGameState())}},{key:"generateNum",value:function(e,t){for(var s=[],i=0;i<e.length;i++)0===e[i]&&s.push(i);for(var r=0;r<t;r++){var n=Math.floor(Math.random()*s.length),o=s[n],a=s[s.length-1];s[s.length-1]=o,s[n]=a,s.pop(),e[o]=Math.random()<=this.twos?2:4}}},{key:"checkLose",value:function(){for(var e=this.board,t=0;t<this.size-1;t++)for(var s=0;s<this.size-1;s++){var i=this.getSpot(t,s),r=this.getSpot(t,s+1),n=this.getSpot(t+1,s);if(0===e[i]||e[i]===e[r]||e[i]===e[n])return!1}for(var o=0;o<this.size;o++){var a=this.getSpot(o,this.size-1),h=this.getSpot(o+1,this.size-1);if(0===e[a]||e[a]===e[h])return!1}for(var l=0;l<this.size;l++){var c=this.getSpot(this.size-1,l),u=this.getSpot(this.size-1,l+1);if(0===e[c]||e[c]===e[u])return!1}return!0}},{key:"toString",value:function(){for(var e=this.size,t=this.board,s="",i=0;i<e;i++){for(var r=0;r<e;r++)s+="[".concat(0===t[this.getSpot(r,i)]?" ":t[this.getSpot(r,i)],"] ");i!==e-1&&(s+="\n")}return s}},{key:"onMove",value:function(e){this.moveListeners.push(e)}},{key:"onWin",value:function(e){this.winListeners.push(e)}},{key:"onLose",value:function(e){this.loseListeners.push(e)}},{key:"unregisterOnMove",value:function(e){var t=this.moveListeners.indexOf(e);this.moveListeners.splice(t,1)}},{key:"unregisterOnWin",value:function(e){var t=this.winListeners.indexOf(e);this.winListeners.splice(t,1)}},{key:"unregisterOnLose",value:function(e){var t=this.loseListeners.indexOf(e);this.loseListeners.splice(t,1)}},{key:"getGameState",value:function(){return{board:this.board,score:this.score,won:this.won,over:this.over}}},{key:"getSpot",value:function(e,t){return t*this.size+e}}]),e}())(4);function v(e){var t=e.board,s=Math.sqrt(t.length);return r.a.createElement("div",{id:"board-container"},r.a.createElement("div",{id:"board"},t.map((function(e){return r.a.createElement("div",{style:{flex:"1 0 ".concat(100/s,"%"),alignItems:"center"}},r.a.createElement("div",{className:"tile tile-".concat(e),style:{margin:"3px",height:"".concat(450/s-6,"px"),display:"flex"}},r.a.createElement("div",{style:{margin:"auto"}},0===e?null:e)))}))))}function f(e){var t=Object(i.useState)(u.getGameState()),s=Object(h.a)(t,2),n=s[0],o=s[1],l=function(e){var t="";switch(e.code){case"ArrowUp":t="up";break;case"ArrowDown":t="down";break;case"ArrowLeft":t="left";break;case"ArrowRight":t="right"}u.move(t)},c=function(e){o(Object(a.a)({},e))};Object(i.useEffect)((function(){return u.onMove(c),u.onWin(c),u.onLose(c),window.addEventListener("keydown",l),function(){window.removeEventListener("keydown",l),u.unregisterOnMove(c),u.unregisterOnWin(c),u.unregisterOnLose(c)}}));return r.a.createElement("div",{style:{width:"450px",margin:"auto"}},r.a.createElement("div",null,r.a.createElement("div",{style:{float:"right",marginLeft:"auto"}},r.a.createElement("h1",{style:{marginTop:"0px",fontWeight:"normal"}},"Score: ",n.score)),r.a.createElement("h1",null,"2048")),r.a.createElement("div",{style:{position:"relative"}},n.won?r.a.createElement("div",{className:"screen winning"},"you won"):n.over?r.a.createElement("div",{className:"screen losing"},"you lost"):null,r.a.createElement(v,{board:n.board})),r.a.createElement("div",{style:{textAlign:"center",paddingTop:"20px"}},r.a.createElement("button",{style:{backgroundColor:"black",color:"white",border:"1px solid gray",width:"100px",height:"35px",fontWeight:"bold",borderRadius:"2px"},onClick:function(){u.setupNewGame(),o(Object(a.a)({},u.getGameState()))}},"Reset")))}var g=function(){return r.a.createElement("div",{className:"App"},r.a.createElement(f,null))};o.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(g,null)),document.getElementById("root"))},7:function(e,t,s){e.exports=s(14)}},[[7,1,2]]]);
//# sourceMappingURL=main.287eb80b.chunk.js.map
(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{32:function(e,t,n){e.exports=n(73)},37:function(e,t,n){},66:function(e,t){},69:function(e,t,n){},70:function(e,t,n){},73:function(e,t,n){"use strict";n.r(t);var a=n(0),c=n.n(a),l=n(8),i=n.n(l),o=(n(37),n(3)),s=n(75),r=n(30),u=n.n(r);n(69),n(70);var m=function(e){return c.a.createElement("div",null,c.a.createElement("button",{onClick:e.play,className:"button"},"Click"))};var p=function(){var e=Object(a.useState)(""),t=Object(o.a)(e,2),n=t[0],l=t[1],i=Object(a.useState)(!0),r=Object(o.a)(i,2),p=r[0],b=r[1],f=Object(a.useState)({counter:0,winCounter:0,points:0}),E=Object(o.a)(f,2),v=E[0],j=E[1],N=Object(a.useState)(),O=Object(o.a)(N,2),d=O[0],h=O[1],k=Object(a.useState)(!1),w=Object(o.a)(k,2),C=w[0],x=w[1];Object(a.useEffect)((function(){var e=u()("https://morning-journey-81748.herokuapp.com/");e.on("result",g),h(e)}),[]);var g=function(e){j(e),S(e.counter),y(e.points),x(!1)},S=function(e){if(e>0)if(e%500===0)l("You have won 250 points!");else if(e%100===0)l("You have won 40 points!");else{if(e%10!==0)return;l("You have won 5 points!")}},y=function(e){0===e&&b(!p)};return p?c.a.createElement("div",{className:"App"},c.a.createElement("br",null),c.a.createElement(m,{play:function(){d.emit("click"),l(""),x(!0)}}),c.a.createElement("label",{className:"text points-value-wincounter"},v.winCounter),c.a.createElement("label",{className:"text"},"Clicks for next prize"),c.a.createElement("label",{className:"text"},"Clicks left"),c.a.createElement("label",{className:v.points<=5?"testi points-under-5":v.points<=10?"points-under-10":"points-value-text"},v.points),c.a.createElement(s.a,{in:C,timeout:2e3,classNames:"slide"},n?c.a.createElement("label",{className:"animating point-increment"},n):c.a.createElement("label",{className:"animating point-decrement"},"-1")),c.a.createElement("br",null)):c.a.createElement("div",{className:"App"},c.a.createElement("h1",null,"You ran out of points!"),c.a.createElement("button",{onClick:function(){d.emit("reset"),b(!p)}},"New game"))};i.a.render(c.a.createElement(p,null),document.getElementById("root"))}},[[32,1,2]]]);
//# sourceMappingURL=main.d0ea1adf.chunk.js.map
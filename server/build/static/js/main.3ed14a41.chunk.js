(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{32:function(e,t,n){e.exports=n(69)},37:function(e,t,n){},65:function(e,t){},68:function(e,t,n){},69:function(e,t,n){"use strict";n.r(t);var a=n(0),i=n.n(a),c=n(30),l=n.n(c),u=(n(37),n(1)),o=n(31),r=n.n(o);n(68);var s=function(){var e=Object(a.useState)(r()("https://morning-journey-81748.herokuapp.com/")),t=Object(u.a)(e,2),n=t[0],c=(t[1],Object(a.useState)(0)),l=Object(u.a)(c,2),o=l[0],s=l[1],b=Object(a.useState)(""),p=Object(u.a)(b,2),m=p[0],f=p[1],j=Object(a.useState)(""),E=Object(u.a)(j,2),O=E[0],v=E[1],k=Object(a.useState)(""),S=Object(u.a)(k,2),h=S[0],d=S[1],P=Object(a.useState)(!0),V=Object(u.a)(P,2),g=V[0],y=V[1];Object(a.useEffect)((function(){w(o),A(h)}),[h]);var w=function(e){if(e>0)if(e%500===0)f("Voitit 250 pistett\xe4!");else if(e%100===0)f("Voitit 40 pistett\xe4!");else{if(e%10!==0)return;f("Voitit 5 pistett\xe4!")}},A=function(e){0===e&&y(!g)};return n.on("counter",(function(e){s(e.laskuri),v(e.voittolaskuri),d(e.pisteet)})),g?i.a.createElement("div",{className:"App"},i.a.createElement("button",{onClick:function(){n.emit("pelaa"),f("")},style:{fontSize:100,marginTop:50}},"Pelaa"),i.a.createElement("br",null),i.a.createElement("label",null,"Painalluksia seuraavaan voittoon: ",O,i.a.createElement("br",null),"Pisteet: ",h),i.a.createElement("br",null),i.a.createElement("label",null,"Voitto: ",m)):i.a.createElement("div",{className:"App"},i.a.createElement("h1",null,"Pisteet loppu!"),i.a.createElement("button",{onClick:function(){n.emit("uusiPeli"),y(!g)}},"Uusi peli"))};l.a.render(i.a.createElement(s,null),document.getElementById("root"))}},[[32,1,2]]]);
//# sourceMappingURL=main.3ed14a41.chunk.js.map
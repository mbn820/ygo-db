(this["webpackJsonpygo-db"]=this["webpackJsonpygo-db"]||[]).push([[0],{55:function(e,a,t){e.exports=t(91)},60:function(e,a,t){},61:function(e,a,t){},91:function(e,a,t){"use strict";t.r(a);var n=t(0),c=t.n(n),l=t(17),r=t.n(l),o=(t(60),t(25)),i=(t(61),t(27)),s=t(19),u=t(32),m=t(54),d=t(33),f=t(36),E=t(52),h=t.n(E),g=function(e){var a=e.searchFn,t=Object(n.useCallback)(h()((function(e){return a(e)}),1e3),[]);return c.a.createElement("div",null,c.a.createElement(i.a,{collapseOnSelect:!0,bg:"dark",variant:"dark",expand:"lg",fixed:"top"},c.a.createElement(u.a,null,c.a.createElement(i.a.Brand,null,c.a.createElement("img",{src:"/logo.png",height:"50"})),c.a.createElement(i.a.Toggle,null),c.a.createElement(i.a.Collapse,null,c.a.createElement(s.a,{className:"mr-auto d-flex align-items-center"},c.a.createElement(s.a.Link,{href:"#latest"},"Latest"),c.a.createElement(s.a.Link,{href:"#sets"},"Decks"),c.a.createElement(s.a.Link,{href:"#sets"},"Sets"),c.a.createElement(s.a.Link,{href:"#archetypes"},"Archetypes"),c.a.createElement(s.a.Link,{href:"#deck-builder"},"Deck Builder")),c.a.createElement(m.a,null,c.a.createElement(f.a,null,c.a.createElement(f.a.Prepend,null,c.a.createElement(f.a.Text,null,c.a.createElement("i",{className:"fa fa-search"}))),c.a.createElement(d.a,{type:"text",placeholder:"Search Cards",className:"mr-2",onChange:function(e){return t(e.target.value)}})))))))},v=t(53),p=t(34),k=t(38),b=t(26),y=function(e){var a,t=Object(n.useState)(e.cards[0]),l=Object(o.a)(t,2),r=l[0],i=l[1],s=Object(n.useState)(!1),u=Object(o.a)(s,2),m=u[0],d=u[1];return c.a.createElement("div",null,c.a.createElement(v.a,{className:"d-flex justify-content-center"},e.cards.map((function(e){var a;return c.a.createElement(p.a,{sm:6,md:3,lg:2,className:"mb-3 d-flex justify-content-center",key:e.id},c.a.createElement(k.a,{src:null===e||void 0===e||null===(a=e.card_images[0])||void 0===a?void 0:a.image_url_small,onClick:function(){return function(e){i(e),d(!0)}(e)}}))}))),c.a.createElement(b.a,{show:m,onHide:function(){return d(!1)},centered:"true"},c.a.createElement(b.a.Header,{closeButton:!0},c.a.createElement(b.a.Title,null,null===r||void 0===r?void 0:r.name)),c.a.createElement(b.a.Body,{className:"d-flex justify-content-center"},c.a.createElement(k.a,{src:null===r||void 0===r||null===(a=r.card_images[0])||void 0===a?void 0:a.image_url,className:"container-fluid"}))))},j=t(39),w=t.n(j);var x=function(){var e="https://db.ygoprodeck.com/api/v7/cardinfo.php?num=50&offset=0",a=Object(n.useState)({data:[]}),t=Object(o.a)(a,2),l=t[0],r=t[1];return Object(n.useEffect)((function(){w.a.get(e).then((function(e){console.log(e.data),r(e.data)}))}),[]),c.a.createElement("div",null,c.a.createElement(g,{searchFn:function(a){console.log("Searching: "+a),w.a.get("".concat(e,"&fname=").concat(a)).then((function(e){return r(e.data)}))}}),c.a.createElement("div",{style:{height:90}}),c.a.createElement(u.a,null,c.a.createElement(y,{cards:l.data})))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(c.a.createElement(c.a.StrictMode,null,c.a.createElement(x,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[55,1,2]]]);
//# sourceMappingURL=main.8a045722.chunk.js.map
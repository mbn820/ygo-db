(this["webpackJsonpygo-db"]=this["webpackJsonpygo-db"]||[]).push([[0],{100:function(e,a,t){e.exports=t.p+"static/media/loading2.36101818.gif"},118:function(e,a,t){"use strict";t.r(a);var n=t(0),l=t.n(n),r=t(26),c=t.n(r),o=(t(83),t(84),t(22)),m=(t(85),t(14)),s=t(8),i=t(42),u=t(29),E=t(47),d=t(71),p=t.n(d),f=t(72),g=t.n(f),h=function(e){var a=e.searchFn;Object(n.useCallback)(p()((function(e){return a(e)}),1e3),[]);return l.a.createElement("div",null,l.a.createElement(i.a,{collapseOnSelect:!0,bg:"dark",variant:"dark",expand:"lg",fixed:"top"},l.a.createElement(E.a,null,l.a.createElement(i.a.Brand,{as:m.b,to:"/cards"},l.a.createElement("img",{src:g.a,height:"50"})),l.a.createElement(i.a.Toggle,null),l.a.createElement(i.a.Collapse,null,l.a.createElement(u.a,{className:"ml-auto"},l.a.createElement(u.a.Link,{as:m.b,to:"/cards",className:"ml-5"},"Cards"),l.a.createElement(u.a.Link,{as:m.b,to:"/decks",className:"ml-5"},"Decks"),l.a.createElement(u.a.Link,{as:m.b,to:"/sets",className:"ml-5"},"Sets"),l.a.createElement(u.a.Link,{as:m.b,to:"/archetypes",className:"ml-5"},"Archetypes"),l.a.createElement(u.a.Link,{as:m.b,to:"/deck-builder",className:"ml-5"},"Deck Builder"))))))},v=t(27),b=t(6),N=(t(74),t(35)),C=(t(24),t(32)),L=t(12),y=t(49),k=t(57),S=t(36),M=t(39),A=t(75),O=function(e){var a=e.searchFn,t={fname:"",type:"",race:"",attribute:"",cardEffect:"",banList:"",format:"",archetype:"",rarity:"",cardSet:"",linkArrow:""},r=Object(n.useState)(t),c=Object(o.a)(r,2),m=c[0],s=c[1],i={Main:["Effect Monster","Flip Effect Monster","Flip Tuner Effect Monster","Gemini Monster","Normal Monster","Normal Tuner Monster","Pendulum Effect Monster","Pendulum Flip Effect Monster","Pendulum Normal Monster","Pendulum Tuner Effect Monster","Ritual Effect Monster","Skill Card","Spell Card","Spirit Monster","Toon Monster","Trap Card","Tuner Monster","Union Effect Monster"],Extra:["Fusion Monster","Link Monster","Pendulum Effect Fusion Monster","Synchro Monster","Synchro  Pendulum Effect Monster","Synchro Tuner Monster","XYZ Monster","XYZ Pendulum Effect Monster"]},u={Monster:["Aqua","Beast","Beast-warrior","Creator-God","Cyberse","Dinosaur","Divine-Beast","Dragon","Fairy","Fiend","Fish","Insect","Machine","Plant","Psychic","Pyro","Reptile","Rock","Sea Serpent","Spellcaster","Thunder","Warrior","Winged-Beast"],Spell:["Normal","Field","Equip","Continous","Quick-Play","Ritual"],Trap:["Normal","Continous","Counter"]},E=function(e){s(Object(k.a)(Object(k.a)({},m),{},Object(y.a)({},e.target.name,e.target.value)))},d=function(e){a(A.pickBy(e))};return l.a.createElement("div",{className:"mb-4"},l.a.createElement(v.a,null,l.a.createElement(v.a.Header,null,l.a.createElement(b.a.Group,null,l.a.createElement(b.a.Label,{className:"small"},"Card Name"),l.a.createElement(M.a,{size:"sm"},l.a.createElement(M.a.Prepend,null,l.a.createElement(M.a.Text,{variant:"primary"},l.a.createElement("i",{className:"fa fa-search"}))),l.a.createElement(S.a,{type:"text",placeholder:"Search Cards",name:"fname",value:m.fname,onChange:E})))),l.a.createElement(v.a.Body,{className:"row"},l.a.createElement(b.a.Group,{className:"col-lg-6 col-md-12"},l.a.createElement(b.a.Label,{className:"small"},"Card Type"),l.a.createElement(b.a.Control,{as:"select",size:"sm",name:"type",value:m.type,onChange:E},l.a.createElement("option",{value:""},"ALL"),Object.keys(i).map((function(e){return l.a.createElement("optgroup",{label:e},i[e].map((function(e){return l.a.createElement("option",{value:e},e)})))})))),l.a.createElement(b.a.Group,{className:"col-lg-6 col-md-12"},l.a.createElement(b.a.Label,{className:"small"},"Race"),l.a.createElement(b.a.Control,{as:"select",size:"sm",name:"race",value:m.race,onChange:E},l.a.createElement("option",{value:""},"ALL"),Object.keys(u).map((function(e){return l.a.createElement("optgroup",{label:e},u[e].map((function(e){return l.a.createElement("option",{value:e},e)})))})))),l.a.createElement(b.a.Group,{className:"col-lg-6 col-md-12"},l.a.createElement(b.a.Label,{className:"small"},"Attribute"),l.a.createElement(b.a.Control,{as:"select",size:"sm",name:"attribute",value:m.attribute,onChange:E},l.a.createElement("option",{value:""},"ALL"),["DARK","EARTH","FIRE","LIGHT","WATER","WIND","DIVINE"].map((function(e){return l.a.createElement("option",{value:e},e)})))),l.a.createElement(b.a.Group,{className:"col-lg-6 col-md-12"},l.a.createElement(b.a.Label,{className:"small"},"Card Effect"),l.a.createElement(b.a.Control,{as:"select",size:"sm",name:"cardEffect",value:m.cardEffect,onChange:E},l.a.createElement("option",{value:""},"ALL"),["Back to Deck","Back to Hand","Banish","Change ATK or DEF","Control","Counter","Damage LP","Destroy Monster","Direct Attack","Draw","Effect Damage","Fusion-Related","Gamble","Graveyard","Increase Level","LINK-Related","Negate","Pendulum-Related","Piercing","Recover LP","Repeat Attack","Ritual-Related","Search","Select","Special Summon","Synchro-Related","Token","Tuner-Related","Win the Duel","XYZ-Related"].map((function(e){return l.a.createElement("option",{value:e},e)})))),l.a.createElement(b.a.Group,{className:"col-lg-6 col-md-12"},l.a.createElement(b.a.Label,{className:"small"},"Ban List"),l.a.createElement(b.a.Control,{as:"select",size:"sm",name:"banList",value:m.banList,onChange:E},l.a.createElement("option",{value:""},"ALL"),["TCG","OCG","Goat"].map((function(e){return l.a.createElement("option",{value:e},e)})))),l.a.createElement(b.a.Group,{className:"col-lg-6 col-md-12"},l.a.createElement(b.a.Label,{className:"small"},"Format"),l.a.createElement(b.a.Control,{as:"select",size:"sm",name:"format",value:m.format,onChange:E},l.a.createElement("option",{value:""},"ALL"),["Duel Links","Speed Duel","Rush Duel","GOAT","OCG GOAT"].map((function(e){return l.a.createElement("option",{value:e},e)})))),l.a.createElement(b.a.Group,{className:"col-lg-6 col-md-12"},l.a.createElement(b.a.Label,{className:"small"},"Archetype"),l.a.createElement(b.a.Control,{as:"select",size:"sm",name:"archetype",value:m.archetype,onChange:E},l.a.createElement("option",{value:""},"ALL"),[].map((function(e){return l.a.createElement("option",{value:e},e)})))),l.a.createElement(b.a.Group,{className:"col-lg-6 col-md-12"},l.a.createElement(b.a.Label,{className:"small"},"Rarity"),l.a.createElement(b.a.Control,{as:"select",size:"sm",name:"rarity",value:m.rarity,onChange:E},l.a.createElement("option",{value:""},"ALL"),["Common","Collector's Rare"].map((function(e){return l.a.createElement("option",{value:e},e)})))),l.a.createElement(b.a.Group,{className:"col-lg-6 col-md-12"},l.a.createElement(b.a.Label,{className:"small"},"Card Set"),l.a.createElement(b.a.Control,{as:"select",size:"sm",name:"cardSet",value:m.cardSet,onChange:E},l.a.createElement("option",{value:""},"ALL"),[].map((function(e){return l.a.createElement("option",{value:e},e)})))),l.a.createElement(b.a.Group,{className:"col-lg-6 col-md-12"},l.a.createElement(b.a.Label,{className:"small"},"Link Arrow"),l.a.createElement(b.a.Control,{as:"select",size:"sm",name:"linkArrow",value:m.linkArrow,onChange:E},l.a.createElement("option",{value:""},"ALL"),[].map((function(e){return l.a.createElement("option",{value:e},e)})))),l.a.createElement("div",{className:"col-lg-6 col-md-12"},l.a.createElement(N.a,{variant:"warning",className:"mt-3",block:!0,onClick:function(){s(t),d(t)}},"Reset")),l.a.createElement("div",{className:"col-lg-6 col-md-12"},l.a.createElement(N.a,{className:"mt-3",block:!0,onClick:function(){return d(m)}},"Search")))))},R=t(40),F=t(41),G=t(76),T=t.n(G),j=function(e){var a=e.src,t=e.height,r=e.onClick,c=Object(n.useState)(!1),m=Object(o.a)(c,2),s=m[0],i=m[1];return l.a.createElement(l.a.Fragment,null,s?null:l.a.createElement(R.a,{src:T.a,height:t}),l.a.createElement(R.a,{src:a,height:t,onClick:r,onLoad:function(){return i(!0)},style:{display:s?"":"none",cursor:"pointer"}}))},D=function(e){var a,t=e.cards,r=Object(n.useState)(t?t[0]:{}),c=Object(o.a)(r,2),m=c[0],s=c[1],i=Object(n.useState)(!1),u=Object(o.a)(i,2),E=u[0],d=u[1];return l.a.createElement("div",null,l.a.createElement(C.a,{className:"d-flex"},t.map((function(e){var a;return l.a.createElement(L.a,{sm:6,md:6,lg:3,className:"mb-3 d-flex justify-content-center",key:e.id},l.a.createElement(j,{src:null===e||void 0===e||null===(a=e.card_images[0])||void 0===a?void 0:a.image_url_small,height:250,onClick:function(){return function(e){s(e),d(!0)}(e)},style:{cursor:"pointer"}}))}))),l.a.createElement(F.a,{show:E,onHide:function(){return d(!1)},centered:"true"},l.a.createElement(F.a.Header,{closeButton:!0},l.a.createElement(F.a.Title,null,null===m||void 0===m?void 0:m.name)),l.a.createElement(F.a.Body,{className:"d-flex justify-content-center"},l.a.createElement(j,{src:null===m||void 0===m||null===(a=m.card_images[0])||void 0===a?void 0:a.image_url,className:"container-fluid"}))))},P=t(77),w=t.n(P),x=(t(100),function(e){var a=e.cards,t=e.searchFn,n=e.loading;return l.a.createElement("div",null,l.a.createElement(C.a,null,l.a.createElement(L.a,{md:4,sm:12},l.a.createElement(O,{searchFn:function(e){t(e)}})),l.a.createElement(L.a,{md:8,sm:12},n?l.a.createElement(v.a,{className:"text-center",body:!0},l.a.createElement(R.a,{src:w.a}),l.a.createElement("h2",{className:"mt-4"},"Loading.....")):l.a.createElement(D,{cards:a.data}))))}),B=function(){return l.a.createElement("div",{className:"text-center mt-4"},l.a.createElement("h2",null,"404"),l.a.createElement("p",null,"Page Not Found"),l.a.createElement(m.b,{to:"/"},"HOME"))},z=function(){return l.a.createElement("div",{className:"text-center mt-4"},l.a.createElement("h2",null,"In Progress"),l.a.createElement("p",null,"Coming Soon"),l.a.createElement(m.b,{to:"/"},"HOME"))},I=t(51),H=t.n(I);var W=function(){var e="https://db.ygoprodeck.com/api/v7/cardinfo.php?num=25&offset=0",a=Object(n.useState)({data:[]}),t=Object(o.a)(a,2),r=t[0],c=t[1],i=Object(n.useState)(!1),u=Object(o.a)(i,2),d=u[0],p=u[1];Object(n.useEffect)((function(){p(!0),H.a.get(e).then((function(e){console.log(e.data),c(e.data)})).catch((function(e){return c([])})).finally((function(){return p(!1)}))}),[]);var f=function(a){console.log("PARAMS: "+JSON.stringify(a)),p(!0),H.a.get(e,{params:a}).then((function(e){return c(e.data)})).catch((function(e){console.log(e),c([])})).finally((function(){return p(!1)}))};return l.a.createElement("div",null,l.a.createElement(m.a,null,l.a.createElement(h,{searchFn:function(a){console.log("Searching: "+a),H.a.get("".concat(e,"&fname=").concat(a)).then((function(e){return c(e.data)}))}}),l.a.createElement("div",{style:{height:110}}),l.a.createElement(E.a,null,l.a.createElement(s.c,null,l.a.createElement(s.a,{path:"/",exact:!0},l.a.createElement(x,{cards:r,searchFn:f,loading:d})),l.a.createElement(s.a,{path:"/cards"},l.a.createElement(x,{cards:r,searchFn:f,loading:d})),l.a.createElement(s.a,{path:"/decks"},l.a.createElement(z,null)),l.a.createElement(s.a,{path:"/sets"},l.a.createElement(z,null)),l.a.createElement(s.a,{path:"/archetypes"},l.a.createElement(z,null)),l.a.createElement(s.a,{path:"/deck-builder"},l.a.createElement(z,null)),l.a.createElement(s.a,{path:"*"},l.a.createElement(B,null))))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(l.a.createElement(l.a.StrictMode,null,l.a.createElement(W,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},72:function(e,a,t){e.exports=t.p+"static/media/logo.6025d515.png"},76:function(e,a,t){e.exports=t.p+"static/media/card-back.f16ec535.png"},77:function(e,a,t){e.exports=t.p+"static/media/loading.701d0039.gif"},78:function(e,a,t){e.exports=t(118)},83:function(e,a,t){},84:function(e,a,t){},85:function(e,a,t){}},[[78,1,2]]]);
//# sourceMappingURL=main.c274f817.chunk.js.map
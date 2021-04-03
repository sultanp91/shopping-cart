(this["webpackJsonpshopping-cart"]=this["webpackJsonpshopping-cart"]||[]).push([[0],{38:function(e,t,i){},64:function(e,t,i){"use strict";i.r(t);var a=i(1),s=i.n(a),c=i(30),n=i.n(c),r=(i(38),i(14)),o=i(3),u=i(67),m=i(6),l=i(66),j=i(10),d=[{name:"Playstation 5 Console",description:"lorem ipsum",sku:"ps5-001",price:449,img1:"PS5-1",img2:"PS5-2",img3:"PS5-3",basket:2},{name:"Playstation 5 Digital Edition Console",description:"lorem ipsum",sku:"ps5-002",price:359.99,img1:"PS5-DE-1",img2:"PS5-DE-2",img3:"PS5-DE-3",basket:0},{name:"Xbox Series X",description:"lorem ipsum",sku:"xbx-001",price:449.99,img1:"Series-X-1",img2:"Series-X-2",img3:"Series-X-3",basket:0},{name:"Xbox Series S",description:"lorem ipsum",sku:"xbx-002",price:249.99,img1:"Series-S-1",img2:"Series-S-2",img3:"Series-S-3",basket:0},{name:"Nintendo Switch",description:"lorem ipsum",sku:"ntd-001",price:279.99,img1:"Switch-1",img2:"Switch-2",img3:"Switch-3",basket:0}],b=i(2),p=Object(a.createContext)();function h(e,t){switch(t.type){case"increment":return e.map((function(e){return e.sku===t.payload?Object(j.a)(Object(j.a)({},e),{},{basket:e.basket+1}):e}));case"decrement":return e.map((function(e){return e.sku===t.payload&&e.basket>0?Object(j.a)(Object(j.a)({},e),{},{basket:e.basket-1}):e}));case"add":return e.map((function(e){return e.sku===t.payload.sku?Object(j.a)(Object(j.a)({},e),{},{basket:e.basket+t.payload.count}):e}));case"remove":return e.map((function(e){return e.sku===t.payload&&e.basket>0?Object(j.a)(Object(j.a)({},e),{},{basket:0}):e}));default:return e}}var x=function(e){var t=e.children,i=Object(a.useReducer)(h,d),s=Object(m.a)(i,2),c=s[0],n=s[1];return Object(b.jsx)(p.Provider,{value:[c,n],children:t})};var O=function(e){var t=e.itemName,i=e.itemPrice,s=e.itemSku,c=e.itemBasket,n=e.itemImage1,r=Object(a.useContext)(p),o=Object(m.a)(r,2)[1];return Object(b.jsxs)("div",{className:"cart-item",children:[Object(b.jsx)("div",{className:"cart-item-image",children:Object(b.jsx)("img",{src:"./img/".concat(n,".jpg"),alt:"".concat(t)})}),Object(b.jsxs)("div",{className:"cart-text",children:[Object(b.jsx)("h3",{children:t}),Object(b.jsxs)("p",{children:["\xa3",i.toFixed(2)]}),Object(b.jsxs)("p",{children:["Qty: ",c]}),Object(b.jsx)("button",{type:"button",className:"plus-minus-buttons",onClick:function(){return o({type:"decrement",payload:s})},children:1===c?"Del":"-"}),Object(b.jsx)("button",{type:"button",className:"plus-minus-buttons",onClick:function(){return o({type:"increment",payload:s})},children:"+"}),Object(b.jsxs)("h4",{children:["Subtotal: \xa3",(i*c).toFixed(2)]})]})]})},g={hidden:{opacity:0,y:200},show:{opacity:1,y:0,transition:{duration:1}},exit:{opacity:0,y:200,transition:{duration:1}}};var v=function(){var e=Object(a.useContext)(p),t=Object(m.a)(e,1)[0];return Object(b.jsxs)(l.a.div,{variants:g,initial:"hidden",animate:"show",exit:"exit",className:"cart-page",children:[Object(b.jsx)("h2",{children:"Shopping Cart"}),t.filter((function(e){return e.basket>0})).map((function(e){return Object(b.jsx)(O,{itemName:e.name,itemPrice:e.price,itemSku:e.sku,itemBasket:e.basket,itemImage1:e.img1})})),Object(b.jsxs)("h3",{className:"total-price",children:["Total: \xa3",t.reduce((function(e,t){return e+t.basket*t.price}),0).toFixed(2),Object(b.jsx)("button",{type:"button",className:"checkout-button",onClick:function(){alert("This is a fake store! No PS5's or Xboxes here!")},children:"Checkout"})]})]})};var k=function(){return Object(b.jsxs)(l.a.div,{variants:g,exit:"exit",initial:"hidden",animate:"show",className:"hero",children:[Object(b.jsxs)("h1",{children:["Welcome to next ",Object(b.jsx)("br",{}),"generation gaming"]}),Object(b.jsx)(r.b,{to:"/shop",children:Object(b.jsx)("button",{type:"button",children:"Shop Now"})})]})},f=i(33);var N=function(){var e=Object(a.useContext)(p),t=Object(m.a)(e,1)[0];return Object(b.jsxs)("nav",{className:"nav",children:[Object(b.jsx)("h1",{children:"Next Gen Store"}),Object(b.jsxs)("ul",{children:[Object(b.jsx)(r.b,{to:"/",children:Object(b.jsx)("li",{children:"Home"})}),Object(b.jsx)(r.b,{to:"/shop",children:Object(b.jsx)("li",{children:"Shop"})}),Object(b.jsx)(r.b,{to:"/cart",children:Object(b.jsxs)("li",{className:"nav-cart",children:[Object(b.jsx)(f.a,{className:"basket-icon"}),Object(b.jsx)("span",{className:"nav-basket-count",children:t.reduce((function(e,t){return e+t.basket}),0)})]})})]})]})};var S=function(e){var t=e.itemName,i=e.itemPic,a=e.itemPrice;return Object(b.jsxs)("div",{className:"shop-item",children:[Object(b.jsx)("div",{className:"shop-item-image",children:Object(b.jsx)("img",{src:"./img/".concat(i,".jpg"),alt:"".concat(t)})}),Object(b.jsx)("p",{children:t}),Object(b.jsx)("strong",{children:Object(b.jsxs)("p",{children:["\xa3",a.toFixed(2)]})})]})};var y=function(){var e=Object(a.useContext)(p),t=Object(m.a)(e,1)[0];return Object(b.jsxs)(l.a.div,{variants:g,initial:"hidden",animate:"show",exit:"exit",children:[Object(b.jsxs)("section",{className:"header",children:[Object(b.jsx)("h2",{children:"Welcome to next generation"}),Object(b.jsx)("p",{children:"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Deleniti accusantium, est harum atque velit ex alias quasi nostrum dignissimos repellat molestias ipsum eligendi accusamus ipsam aliquam numquam id, minima fuga. Incidunt, quae doloremque? Magnam quaerat quas earum voluptatem quos possimus. Placeat fuga animi provident, consectetur molestiae dignissimos tempore ea, eaque error ipsum quas nulla culpa repellendus aliquid consequuntur est eveniet. Eius odit sequi ea nemo placeat dolorum ex inventore doloremque, earum, vero nihil odio fugit in autem, cumque dolorem iste accusamus quibusdam delectus! Officiis repudiandae voluptates sed suscipit sit pariatur."})]}),Object(b.jsx)("div",{className:"shop-container",children:t.map((function(e){return Object(b.jsx)(r.b,{to:"/shop/".concat(e.sku),children:Object(b.jsx)(S,{itemName:e.name,itemPic:e.img1,itemPrice:e.price})})}))})]})},q=i(32),P=i.n(q);i(62),i(63);var C=function(e){var t=e.match.params.id,i=Object(a.useState)(1),s=Object(m.a)(i,2),c=s[0],n=s[1],r=Object(a.useContext)(p),o=Object(m.a)(r,2),u=o[0],d=o[1],h=u.findIndex((function(e){return e.sku===t}));return Object(b.jsxs)(l.a.div,{variants:g,initial:"hidden",animate:"show",exit:"exit",className:"item-page",children:[Object(b.jsx)("div",{className:"slider-container",children:Object(b.jsxs)(P.a,Object(j.a)(Object(j.a)({className:"slider"},{arrows:!0,dots:!0,infinite:!0,speed:500,slidesToShow:1,slidesToScroll:1}),{},{children:[Object(b.jsx)("img",{src:"../img/".concat(u[h].img1,".jpg"),alt:u[h].img1}),Object(b.jsx)("img",{src:"../img/".concat(u[h].img2,".jpg"),alt:u[h].img2}),Object(b.jsx)("img",{src:"../img/".concat(u[h].img3,".jpg"),alt:u[h].img3})]}))}),Object(b.jsxs)("div",{className:"item-page-description",children:[Object(b.jsx)("h2",{children:u[h].name}),Object(b.jsx)("p",{children:"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Possimus, fuga placeat ad et repellat sint magni nemo tempora beatae accusantium dolor tenetur mollitia laborum debitis quae perferendis aliquid earum! Tenetur. Accusamus voluptatum saepe, obcaecati nihil vitae assumenda debitis sunt ratione atque ab repellat quasi fuga commodi repellendus est reprehenderit, porro placeat doloribus vero ducimus unde nam pariatur quaerat. Quam, fuga!"}),Object(b.jsxs)("ul",{children:[Object(b.jsx)("li",{children:"Lorem ipsum dolor sit amet consectetur"}),Object(b.jsx)("li",{children:"Esse aliquam laboriosam possimus nemo"}),Object(b.jsx)("li",{children:"Vel ipsam corrupti praesentium"}),Object(b.jsx)("li",{children:"Accusamus voluptatum saepe"})]}),Object(b.jsx)("button",{className:"plus-minus-buttons",type:"button",onClick:function(){c>0&&n(c-1)},children:"-"}),Object(b.jsx)("input",{type:"number",name:"quantity",id:"quantity",value:c,onChange:function(e){n(Number(e.target.value))}}),Object(b.jsx)("button",{className:"plus-minus-buttons",type:"button",onClick:function(){return n(c+1)},children:"+"}),Object(b.jsx)("button",{className:"add-basket-button",type:"button",onClick:function(){d({type:"add",payload:{sku:t,count:c}}),n(0)},children:"Add to Basket"})]})]})};var w=function(){var e=Object(o.f)();return Object(b.jsx)(x,{children:Object(b.jsxs)("div",{className:"App",children:[Object(b.jsx)(N,{}),Object(b.jsx)(u.a,{exitBeforeEnter:!0,children:Object(b.jsxs)(o.c,{location:e,children:[Object(b.jsx)(o.a,{exact:!0,path:"/",component:k}),Object(b.jsx)(o.a,{exact:!0,path:"/shop",component:y}),Object(b.jsx)(o.a,{path:"/shop/:id",component:C}),Object(b.jsx)(o.a,{path:"/cart",component:v})]},e.pathname)})]})})};n.a.render(Object(b.jsx)(s.a.StrictMode,{children:Object(b.jsx)(r.a,{children:Object(b.jsx)(w,{})})}),document.getElementById("root"))}},[[64,1,2]]]);
//# sourceMappingURL=main.a096aaaa.chunk.js.map
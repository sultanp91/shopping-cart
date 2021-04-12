(this["webpackJsonpshopping-cart"]=this["webpackJsonpshopping-cart"]||[]).push([[0],{40:function(e,t,i){},66:function(e,t,i){"use strict";i.r(t);var a=i(2),s=i.n(a),c=i(32),n=i.n(c),r=(i(40),i(15)),o=i(4),u=i(69),m=i(7),j=i(68),l=i(11),d=[{name:"Playstation 5 Console",sku:"ps5-001",price:449,img1:i.p+"static/media/PS5-1.66e2e6fb.jpg",img2:i.p+"static/media/PS5-2.22c61321.jpg",img3:i.p+"static/media/PS5-3.606d8bab.jpg",basket:0},{name:"Playstation 5 Digital Edition Console",sku:"ps5-002",price:359.99,img1:i.p+"static/media/PS5-DE-1.6d45c471.jpg",img2:i.p+"static/media/PS5-DE-2.0c2f963b.jpg",img3:i.p+"static/media/PS5-DE-3.0173cc28.jpg",basket:0},{name:"Xbox Series X",sku:"xbx-001",price:449.99,img1:i.p+"static/media/Series-X-1.7f27af79.jpg",img2:i.p+"static/media/Series-X-2.83788740.jpg",img3:i.p+"static/media/Series-X-3.f77241fb.jpg",basket:0},{name:"Xbox Series S",sku:"xbx-002",price:249.99,img1:i.p+"static/media/Series-S-1.87621c2f.jpg",img2:i.p+"static/media/Series-S-2.3f701744.jpg",img3:i.p+"static/media/Series-S-3.df84c226.jpg",basket:0},{name:"Nintendo Switch",sku:"ntd-001",price:279.99,img1:i.p+"static/media/Switch-1.7082d6e9.jpg",img2:i.p+"static/media/Switch-2.e760486f.jpg",img3:i.p+"static/media/Switch-3.0edb819a.jpg",basket:0}],b=i(3),p=Object(a.createContext)();function h(e,t){switch(t.type){case"increment":return e.map((function(e){return e.sku===t.payload?Object(l.a)(Object(l.a)({},e),{},{basket:e.basket+1}):e}));case"decrement":return e.map((function(e){return e.sku===t.payload&&e.basket>0?Object(l.a)(Object(l.a)({},e),{},{basket:e.basket-1}):e}));case"add":return e.map((function(e){return e.sku===t.payload.sku?Object(l.a)(Object(l.a)({},e),{},{basket:e.basket+t.payload.count}):e}));case"remove":return e.map((function(e){return e.sku===t.payload&&e.basket>0?Object(l.a)(Object(l.a)({},e),{},{basket:0}):e}));default:return e}}var x=function(e){var t=e.children,i=Object(a.useReducer)(h,d),s=Object(m.a)(i,2),c=s[0],n=s[1];return Object(b.jsx)(p.Provider,{value:[c,n],children:t})},O=i(25);var g=function(e){var t=e.itemName,i=e.itemPrice,s=e.itemSku,c=e.itemBasket,n=e.itemImage1,r=Object(a.useContext)(p),o=Object(m.a)(r,2)[1];return Object(b.jsxs)("div",{className:"cart-item",children:[Object(b.jsx)("div",{className:"cart-item-image",children:Object(b.jsx)("img",{src:n,alt:"".concat(t)})}),Object(b.jsxs)("div",{className:"cart-text",children:[Object(b.jsx)("h3",{children:t}),Object(b.jsxs)("p",{children:["\xa3",i.toFixed(2)]}),Object(b.jsxs)("p",{children:["Qty: ",c]}),Object(b.jsx)("button",{type:"button",className:"plus-minus-buttons",onClick:function(){return o({type:"decrement",payload:s})},children:1===c?Object(b.jsx)(O.a,{}):Object(b.jsx)(O.b,{})}),Object(b.jsx)("button",{type:"button",className:"plus-minus-buttons",onClick:function(){return o({type:"increment",payload:s})},children:Object(b.jsx)(O.c,{})}),Object(b.jsxs)("h4",{children:["Subtotal: \xa3",(i*c).toFixed(2)]})]})]})},f={hidden:{opacity:0,y:200},show:{opacity:1,y:0,transition:{duration:1}},exit:{opacity:0,y:200,transition:{duration:1}}};var v=function(){var e=Object(a.useContext)(p),t=Object(m.a)(e,1)[0];return Object(b.jsxs)(j.a.div,{variants:f,initial:"hidden",animate:"show",exit:"exit",className:"cart-page",children:[Object(b.jsx)("h2",{children:"Shopping Cart"}),t.filter((function(e){return e.basket>0})).map((function(e){return Object(b.jsx)(g,{itemName:e.name,itemPrice:e.price,itemSku:e.sku,itemBasket:e.basket,itemImage1:e.img1})})),Object(b.jsxs)("h3",{className:"total-price",children:["Total: \xa3",t.reduce((function(e,t){return e+t.basket*t.price}),0).toFixed(2),Object(b.jsx)("button",{type:"button",className:"checkout-button",onClick:function(){alert("This is a fake store! No PS5's or Xboxes here!")},children:"Checkout"})]})]})};var k=function(){return Object(b.jsxs)(j.a.div,{variants:f,exit:"exit",initial:"hidden",animate:"show",className:"hero",children:[Object(b.jsxs)("h1",{children:["WELCOME TO NEXT",Object(b.jsx)("br",{}),"GENERATION GAMING"]}),Object(b.jsx)(r.b,{to:"/shop",children:Object(b.jsx)("button",{type:"button",children:"Shop Now"})})]})},N=i(34);var S=function(){var e=Object(a.useContext)(p),t=Object(m.a)(e,1)[0];return Object(b.jsxs)("nav",{className:"nav",children:[Object(b.jsx)("h1",{children:"Next Gen Store"}),Object(b.jsxs)("ul",{children:[Object(b.jsx)(r.b,{to:"/",children:Object(b.jsx)("li",{children:"Home"})}),Object(b.jsx)(r.b,{to:"/shop",children:Object(b.jsx)("li",{children:"Shop"})}),Object(b.jsx)(r.b,{to:"/cart",children:Object(b.jsxs)("li",{className:"nav-cart",children:[Object(b.jsx)(N.a,{className:"basket-icon"}),Object(b.jsx)("span",{className:"nav-basket-count",children:t.reduce((function(e,t){return e+t.basket}),0)})]})})]})]})};var y=function(e){var t=e.itemName,i=e.itemPic,a=e.itemPrice;return Object(b.jsxs)("div",{className:"shop-item",children:[Object(b.jsx)("div",{className:"shop-item-image",children:Object(b.jsx)("img",{src:i,alt:"".concat(t)})}),Object(b.jsx)("p",{children:t}),Object(b.jsx)("strong",{children:Object(b.jsxs)("p",{children:["\xa3",a.toFixed(2)]})})]})};var q=function(){var e=Object(a.useContext)(p),t=Object(m.a)(e,1)[0];return Object(b.jsxs)(j.a.div,{variants:f,initial:"hidden",animate:"show",exit:"exit",children:[Object(b.jsxs)("section",{className:"header",children:[Object(b.jsx)("h2",{children:"Welcome to next generation"}),Object(b.jsx)("p",{children:"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Deleniti accusantium, est harum atque velit ex alias quasi nostrum dignissimos repellat molestias ipsum eligendi accusamus ipsam aliquam numquam id, minima fuga. Incidunt, quae doloremque? Magnam quaerat quas earum voluptatem quos possimus. Placeat fuga animi provident, consectetur molestiae dignissimos tempore ea, eaque error ipsum quas nulla culpa repellendus aliquid consequuntur est eveniet. Eius odit sequi ea nemo placeat dolorum ex inventore doloremque, earum, vero nihil odio fugit in autem, cumque dolorem iste accusamus quibusdam delectus! Officiis repudiandae voluptates sed suscipit sit pariatur."})]}),Object(b.jsx)("div",{className:"shop-container",children:t.map((function(e){return Object(b.jsx)(r.b,{to:"/shop/".concat(e.sku),children:Object(b.jsx)(y,{itemName:e.name,itemPic:e.img1,itemPrice:e.price})})}))})]})},C=i(35),P=i.n(C);i(64),i(65);var w=function(e){var t=e.match.params.id,i=Object(a.useState)(1),s=Object(m.a)(i,2),c=s[0],n=s[1],r=Object(a.useContext)(p),o=Object(m.a)(r,2),u=o[0],d=o[1],h=u.findIndex((function(e){return e.sku===t}));return Object(b.jsxs)(j.a.div,{variants:f,initial:"hidden",animate:"show",exit:"exit",className:"item-page",children:[Object(b.jsx)("div",{className:"slider-container",children:Object(b.jsxs)(P.a,Object(l.a)(Object(l.a)({className:"slider"},{arrows:!0,dots:!0,infinite:!0,speed:500,slidesToShow:1,slidesToScroll:1}),{},{children:[Object(b.jsx)("img",{src:u[h].img1,alt:u[h].img1}),Object(b.jsx)("img",{src:u[h].img2,alt:u[h].img2}),Object(b.jsx)("img",{src:u[h].img3,alt:u[h].img3})]}))}),Object(b.jsxs)("div",{className:"item-page-description",children:[Object(b.jsx)("h2",{children:u[h].name}),Object(b.jsx)("p",{children:"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Possimus, fuga placeat ad et repellat sint magni nemo tempora beatae accusantium dolor tenetur mollitia laborum debitis quae perferendis aliquid earum! Tenetur. Accusamus voluptatum saepe, obcaecati nihil vitae assumenda debitis sunt ratione atque ab repellat quasi fuga commodi repellendus est reprehenderit, porro placeat doloribus vero ducimus unde nam pariatur quaerat. Quam, fuga!"}),Object(b.jsxs)("ul",{children:[Object(b.jsx)("li",{children:"Lorem ipsum dolor sit amet consectetur"}),Object(b.jsx)("li",{children:"Esse aliquam laboriosam possimus nemo"}),Object(b.jsx)("li",{children:"Vel ipsam corrupti praesentium"}),Object(b.jsx)("li",{children:"Accusamus voluptatum saepe"})]}),Object(b.jsx)("button",{className:"plus-minus-buttons",type:"button",onClick:function(){c>0&&n(c-1)},children:"-"}),Object(b.jsx)("input",{type:"number",name:"quantity",id:"quantity",value:c,onChange:function(e){n(Number(e.target.value))}}),Object(b.jsx)("button",{className:"plus-minus-buttons",type:"button",onClick:function(){return n(c+1)},children:"+"}),Object(b.jsx)("button",{className:"add-basket-button",type:"button",onClick:function(){d({type:"add",payload:{sku:t,count:c}})},children:"Add to Basket"})]})]})};var E=function(){var e=Object(o.f)();return Object(b.jsx)(x,{children:Object(b.jsxs)("div",{className:"App",children:[Object(b.jsx)(S,{}),Object(b.jsx)(u.a,{exitBeforeEnter:!0,children:Object(b.jsxs)(o.c,{location:e,children:[Object(b.jsx)(o.a,{exact:!0,path:"/",component:k}),Object(b.jsx)(o.a,{exact:!0,path:"/shop",component:q}),Object(b.jsx)(o.a,{path:"/shop/:id",component:w}),Object(b.jsx)(o.a,{path:"/cart",component:v})]},e.pathname)})]})})};n.a.render(Object(b.jsx)(s.a.StrictMode,{children:Object(b.jsx)(r.a,{basename:"/shopping-cart",children:Object(b.jsx)(E,{})})}),document.getElementById("root"))}},[[66,1,2]]]);
//# sourceMappingURL=main.4eea33d7.chunk.js.map
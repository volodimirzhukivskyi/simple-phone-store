(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{102:function(e,t,c){},201:function(e,t,c){e.exports={elementsWrapper:"CardProduct_elementsWrapper__18I1U",starsWrapper:"CardProduct_starsWrapper__2BNjA",spanElement:"CardProduct_spanElement__3yPD5",colorBlock:"CardProduct_colorBlock__3bJgL",cardsWrapper__title:"CardProduct_cardsWrapper__title__vWtsw",cardsWrapper__price:"CardProduct_cardsWrapper__price__2RHvk",cardsWrapper__button:"CardProduct_cardsWrapper__button__2FhK2",starWrapper:"CardProduct_starWrapper__1Tdg2","cardsWrapper__hide-block":"CardProduct_cardsWrapper__hide-block__A8VZo",cardsWrapper:"CardProduct_cardsWrapper__2Xch_",cardsWrapper__img:"CardProduct_cardsWrapper__img__1maEX"}},202:function(e,t,c){"use strict";c.r(t);var r=c(1),n=c.n(r),a=c(38),s=c.n(a),o=c(8),i=(c(98),c(2)),l=c(31),d=c(29),p=c(0),j=function(e){var t=e.text,c=e.elUrlNav,r=e.className;return Object(p.jsx)(d.b,{exact:!0,className:r,activeStyle:{borderBottom:"2px solid white"},to:c,isActive:function(){return window.location.pathname+window.location.hash==={elUrlNav:c}},children:t})},u=function(e){var t=e.itemsCart;return Object(p.jsx)("header",{className:"head",children:Object(p.jsxs)("div",{className:"head-wrapper container",children:[Object(p.jsx)(j,{className:"block-logo",elUrlNav:"/",text:Object(p.jsxs)(p.Fragment,{children:[Object(p.jsx)(l.a,{className:"img-logo",src:"".concat("https://volodimirzhukivskyi.github.io/simple-phone-store","/img/phones/smartphone_79223.svg")}),Object(p.jsx)("h3",{className:"logo",children:"\u041c\u043e\u0431\u0438 \u043b\u0430\u0439\u0444"})]})}),Object(p.jsx)("nav",{className:"hero-navigation",children:Object(p.jsx)("ul",{className:"hero-navigation__list",children:[{id:2,title:"\u0422\u043e\u0432\u0430\u0440\u044b",path:"/phone"},{id:3,title:"\u0418\u0437\u0431\u0440\u0430\u043d\u043d\u043e\u0435",path:"/fav"}].map((function(e){var t=e.id,c=e.title,r=e.path;return Object(p.jsx)("li",{className:"list-item",children:Object(p.jsx)(j,{elUrlNav:r,text:c,className:"link-navigation"})},t)}))})}),Object(p.jsx)(j,{isActive:!1,elUrlNav:"/shopping",text:Object(p.jsx)(l.a,{className:t.length?"img-shop--red":"img-shop",src:"".concat("https://volodimirzhukivskyi.github.io/simple-phone-store","/img/phones/shoppingcart3_114877.svg")})})]})})},b=(c(45),c(102),"ADD_PRODUCT_SUCCESS"),m="ADD_SHOPPING_CART",h="ADD_FAV_PRODUCTS_IDS",O="ACTION_TO_CONFIRM",x="IS_LOADING",v="DELETE_FROM_SHOPPING",f="CHANGED_COUNTER",g="CLEAR_ITEM",C="ADD_PRODUCT_FAILURE",N="PRICE_CALCULATOR",k=function(e){return{type:O,payload:e}},_=function(e){return{type:x,payload:e}},y=function(e){return{type:f,payload:e}},A=function(e){return function(t){t(_(!0)),fetch(e).then((function(e){if(e.ok)return e.json();throw new Error("Failed to load")})).then((function(e){t(_(!1)),t({type:b,payload:e})})).catch((function(e){var c;t((c=e.message,{type:C,payload:{error:c}}))}))}},B=c(7),S=c(5),P=c(9);var T=function(e){var t=e.className,c=e.backgroundColor,r=e.text,n=e.onClick;return Object(p.jsx)("button",{className:t,style:{background:c},onClick:n,children:r})},W=[Object(p.jsx)("img",{src:"".concat("https://volodimirzhukivskyi.github.io/simple-phone-store","/img/sliderImg/informationBanner.png"),alt:"\u043a\u0430\u0440\u0442\u0438\u043d\u043a\u0438 \u043c\u0430\u0433\u0430\u0437\u0438\u043d\u0430 "},1),Object(p.jsx)("img",{src:"".concat("https://volodimirzhukivskyi.github.io/simple-phone-store","/img/sliderImg/youngWoman.jpg"),alt:"\u043a\u0430\u0440\u0442\u0438\u043d\u043a\u0438 \u043c\u0430\u0433\u0430\u0437\u0438\u043d\u0430 "},2),Object(p.jsx)("img",{src:"".concat("https://volodimirzhukivskyi.github.io/simple-phone-store","/img/sliderImg/Shop.jpg"),alt:"\u043a\u0430\u0440\u0442\u0438\u043d\u043a\u0438 \u043c\u0430\u0433\u0430\u0437\u0438\u043d\u0430 "},3)],w=function(){var e=Object(r.useState)(0),t=Object(P.a)(e,2),c=t[0],n=t[1];Object(r.useEffect)((function(){var e=setInterval((function(){n((function(e){return e===W.length-1?0:e+1}))}),5e3);return function(){return clearInterval(e)}}),[]);var a=c?c-1:W.length-1,s=c===W.length-1?0:c+1;return Object(p.jsxs)("div",{className:"slider",children:[Object(p.jsx)(T,{className:"buttonSliderPrev",backgroundColor:"black",text:"<",onClick:function(){n(a)}}),Object(p.jsx)("div",{className:"slider-img slider-img-prev",children:W[a]},a),Object(p.jsx)("div",{className:"slider-img",children:W[c]},c),Object(p.jsx)("div",{className:"slider-img slider-img-next",children:W[s]},s),Object(p.jsx)(T,{className:"buttonSliderNext",backgroundColor:"black",text:">",onClick:function(){n(s)}})]})},I=c(90),F=c(23),M="SHOP_FORM",E="SHOP_MODAL",D=function(e){return{type:E,payload:e}},L=function(e){return{type:M,payload:e}},R=function(e){var t=e.click,c=e.card,r=Object(o.b)(),n=F.b().shape({name:F.c().matches(/^[a-zA-Z]+$/,"\u042d\u0442\u043e \u043f\u043e\u043b\u0435 \u0434\u043e\u043b\u0436\u043d\u043e \u0431\u044b\u0442\u044c \u0441\u0442\u0440\u043e\u043a\u043e\u0439").min(2,"\u0421\u043b\u0438\u0448\u043a\u043e\u043c \u043a\u043e\u0440\u043e\u0442\u043a\u043e\u0435 \u0438\u043c\u044f!").max(50,"\u0421\u043b\u0438\u0448\u043a\u043e\u043c \u0434\u043b\u0438\u043d\u043d\u043e\u0435 \u0438\u043c\u044f!").required("\u041e\u0431\u044f\u0437\u0430\u0442\u0435\u043b\u044c\u043d\u043e"),secondName:F.c().matches(/^[a-zA-Z]+$/,"\u042d\u0442\u043e \u043f\u043e\u043b\u0435 \u0434\u043e\u043b\u0436\u043d\u043e \u0431\u044b\u0442\u044c \u0441\u0442\u0440\u043e\u043a\u043e\u0439").min(2,"\u0421\u043b\u0438\u0448\u043a\u043e\u043c \u043a\u043e\u0440\u043e\u0442\u043a\u0430\u044f \u0444\u0430\u043c\u0438\u043b\u0438\u044f!").max(50,"\u0421\u043b\u0438\u0448\u043a\u043e\u043c \u0434\u043b\u0438\u043d\u043d\u0430\u044f \u0444\u0430\u043c\u0438\u043b\u0438\u044f!").required("\u041e\u0431\u044f\u0437\u0430\u0442\u0435\u043b\u044c\u043d\u043e"),age:F.a().typeError("\u042d\u0442\u043e\u0442 \u0442\u0435\u043a\u0441\u0442 \u043d\u0435 \u044f\u0432\u043b\u044f\u0435\u0442\u0441\u044f \u0447\u0438\u0441\u043b\u043e\u043c").required("\u041e\u0431\u044f\u0437\u0430\u0442\u0435\u043b\u044c\u043d\u043e"),address:F.c().required("\u041e\u0431\u044f\u0437\u0430\u0442\u0435\u043b\u044c\u043d\u043e"),phoneNumber:F.a().min(10,"\u0421\u043b\u0438\u0448\u043a\u043e\u043c \u043a\u043e\u0440\u043e\u0442\u043a\u0438\u0439 \u043d\u043e\u043c\u0435\u0440 \u0442\u0435\u043b\u0435\u0444\u043e\u043d\u0430 !").typeError("\u042d\u0442\u043e\u0442 \u0442\u0435\u043a\u0441\u0442 \u043d\u0435 \u044f\u0432\u043b\u044f\u0435\u0442\u0441\u044f \u043d\u043e\u043c\u0435\u0440\u043e\u043c").required("\u041e\u0431\u044f\u0437\u0430\u0442\u0435\u043b\u044c\u043d\u043e")});return Object(p.jsx)(p.Fragment,{children:Object(p.jsx)(I.a,{initialValues:{name:"",secondName:"",age:"",address:"",phoneNumber:""},validateOnBlur:!0,onSubmit:function(e,t){var n;console.log(e),(n=console).log.apply(n,Object(B.a)(c.map((function(e){return"\u0412\u044b \u0437\u0430\u043a\u0430\u0437\u0430\u043b\u0438 - ".concat(e.name," \u0432 \u043a\u043e\u043b\u0438\u0447\u0435\u0441\u0442\u0432\u0435 - ").concat(e.count," \u0448\u0442\u0443\u043a")+"\n"})))),console.log("\u0418\u043d\u0444\u043e\u0440\u043c\u0430\u0446\u0438\u044f \u043e \u0432\u0430\u0441 -"),console.log(e),r({type:g}),r(L(!1)),r(D(!0)),t.resetForm({values:{name:"",secondName:"",age:"",address:"",phoneNumber:""}})},validationSchema:n,children:function(e){var c=e.values,r=e.errors,n=e.touched,a=e.handleChange,s=e.isValid,o=e.handleSubmit,i=(e.handleReset,e.handleBlur),l=e.dirty;return Object(p.jsx)("div",{className:"register-form-container",onClick:function(e){return e.stopPropagation()},children:Object(p.jsxs)("form",{action:"src/components/FormShop/FormShop",children:[Object(p.jsx)("h1",{className:"form-title",children:"\u0421\u0434\u0435\u043b\u0430\u0442\u044c \u0437\u0430\u043a\u0430\u0437"}),Object(p.jsxs)("div",{className:"form-fields",children:[Object(p.jsxs)("div",{className:"form-field",children:[Object(p.jsx)("input",{type:"text",placeholder:"\u0418\u043c\u044f",name:"name",onChange:a,onBlur:i,value:c.name})," ",n.name&&r.name&&Object(p.jsx)("p",{className:"error",children:r.name})]}),Object(p.jsxs)("div",{className:"form-field",children:[Object(p.jsx)("input",{type:"text",placeholder:"\u0424\u0430\u043c\u0438\u043b\u0438\u044f",name:"secondName",onChange:a,onBlur:i,value:c.secondName}),n.secondName&&r.secondName&&Object(p.jsx)("p",{className:"error",children:r.secondName})]}),Object(p.jsxs)("div",{className:"form-field",children:[Object(p.jsx)("input",{type:"number",placeholder:"\u0412\u043e\u0437\u0440\u0430\u0441\u0442 \u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u044f",name:"age",onChange:a,onBlur:i,value:c.age}),n.age&&r.age&&Object(p.jsx)("p",{className:"error",children:r.age})]}),Object(p.jsxs)("div",{className:"form-field",children:[Object(p.jsx)("input",{type:"text",placeholder:"\u0410\u0434\u0440\u0435\u0441 \u0434\u043e\u0441\u0442\u0430\u0432\u043a\u0438",name:"address",onChange:a,onBlur:i,value:c.address}),n.address&&r.address&&Object(p.jsx)("p",{className:"error",children:r.address})]}),Object(p.jsxs)("div",{className:"form-field",children:[Object(p.jsx)("input",{type:"tel",placeholder:"\u041c\u043e\u0431\u0438\u043b\u044c\u043d\u044b\u0439 \u0442\u0435\u043b\u0435\u0444\u043e\u043d",name:"phoneNumber",onChange:a,onBlur:i,value:c.phoneNumber}),n.phoneNumber&&r.phoneNumber&&Object(p.jsx)("p",{className:"error",children:r.phoneNumber})]})]}),Object(p.jsxs)("div",{className:"form-buttons",children:[Object(p.jsx)("button",{className:"button",disabled:!s&&!l,onClick:o,type:"submit",children:"\u041e\u0442\u043f\u0440\u0430\u0432\u0438\u0442\u044c \u0437\u0430\u044f\u0432\u043a\u0443"}),Object(p.jsx)("div",{className:"divider",children:" "}),t&&Object(p.jsx)("button",{onClick:t,type:"button",className:"button ",children:"\u0417\u0430\u043a\u0440\u044b\u0442\u044c"})]})]})})}})})},z=function(){var e=Object(o.c)((function(e){return{cards:e.reducerApp.cards}})).cards.find((function(e){return"iPhone 12"===e.name})),t=e.color,c=e.txt,n=e.img,a=e.price,s=e.name,i=Object(r.useState)(0),l=Object(P.a)(i,2),d=l[0],j=l[1],u=Object(r.useState)(null),b=Object(P.a)(u,2),m=b[0],h=b[1],O=function(e){var t=Number(e.target.attributes.value.value);j({clickEl:n[t]})};return Object(p.jsx)(p.Fragment,{children:Object(p.jsxs)("div",{className:"block-products-card container",children:[Object(p.jsxs)("div",{children:[Object(p.jsxs)("div",{className:"block-pic-slider",children:[Object(p.jsx)("div",{className:"block-pic",children:function(e){for(var t=[],c=0;c<e;c++){var r=n[c];t.push(Object(p.jsx)("img",{className:"pic-products",value:c,src:"https://volodimirzhukivskyi.github.io/simple-phone-store"+r,onClick:O,alt:"\u0442\u0435\u043b\u0435\u0444\u043e\u043d"},c))}return t}(3)}),Object(p.jsx)("div",{className:"block-active-pic",children:Object(p.jsx)("img",{className:"active-pic",src:d.clickEl?"https://volodimirzhukivskyi.github.io/simple-phone-store"+d.clickEl:"https://volodimirzhukivskyi.github.io/simple-phone-store"+n[d],onChange:O,alt:"\u0442\u0435\u043b\u0435\u0444\u043e\u043d"})})]}),Object(p.jsxs)("div",{className:"podInformation__content",children:[Object(p.jsxs)("div",{className:"color-block-container",children:[Object(p.jsxs)("p",{className:"color-text",children:["\u0426\u0432\u0435\u0442: ",Object(p.jsx)("span",{children:m})]}),Object(p.jsx)("div",{className:"wrapperButtons",children:t.map((function(e,t){return Object(p.jsx)("div",{className:m===e?"wrapperButton active-button ":"wrapperButton",children:Object(p.jsx)(T,{onClick:function(){return h(e)},backgroundColor:e,className:"colorDiv"})})}))})]}),Object(p.jsxs)("div",{className:"block-products-text",children:[Object(p.jsx)("h3",{className:"products-title",children:"\u041a\u0440\u0430\u0442\u043a\u043e\u0435 \u043e\u043f\u0438\u0441\u0430\u043d\u0438\u0435 \u0442\u043e\u0432\u0430\u0440\u0430"}),Object(p.jsx)("p",{children:c})]})]})]}),Object(p.jsxs)("div",{className:"hero-block__form",children:[Object(p.jsx)("div",{className:"price-information",children:Object(p.jsxs)("div",{className:"block-price",children:[Object(p.jsx)("h1",{children:s}),Object(p.jsxs)("p",{className:"price-number",children:[Object(p.jsx)("b",{className:"price-text",children:"\u0426\u0415\u041d\u0410 : "}),a]})]})}),Object(p.jsx)(R,{card:e})]})]})})},V=function(){return Object(p.jsxs)("div",{children:[Object(p.jsx)("h1",{className:"titleHero",children:"\u041c\u042b \u0420\u0410\u0414\u042b \u041f\u0420\u0418\u0412\u0415\u0422\u0421\u0422\u0412\u041e\u0412\u0410\u0422\u042c \u0412\u0410\u0421 \u0412 \u041d\u0410\u0428\u0415\u041c \u0418\u041d\u0422\u0415\u0420\u041d\u0415\u0422-\u041c\u0410\u0413\u0410\u0417\u0418\u041d\u0415!"}),Object(p.jsx)(w,{}),Object(p.jsx)(z,{})]})},U=c(87),H=c.n(U);var J=function(e){var t=e.header,c=e.closeButton,r=e.text,n=e.actions,a=e.click;return Object(p.jsx)("div",{className:"containerModal","data-testid":"closeModal",onClick:a,children:Object(p.jsxs)("div",{role:"modalBox",className:"modalWindow",tabIndex:"1",onClick:function(e){e.stopPropagation()},children:[Object(p.jsxs)("div",{className:"modalHeader",role:"textBox",children:[Object(p.jsx)("h2",{children:t}),c&&Object(p.jsx)(T,{className:H.a.CloseButton,backgroundColor:"none",text:"X",onClick:a})]}),Object(p.jsx)("p",{className:"modalContent",children:r}),n]})})},X=(c(201),function(e){var t=e.style;return Object(p.jsxs)("svg",{className:"star",version:"1.1",id:"Layer_1",xmlns:"http://www.w3.org/2000/svg",xmlnsXlink:"http://www.w3.org/1999/xlink",x:"0px",y:"0px",viewBox:"0 0 426.667 426.667",style:{background:"new 0 0 426.667 426.667"},xmlSpace:"preserve",children:[Object(p.jsx)("polygon",{style:t,points:"213.333,10.441 279.249,144.017 426.667,165.436 320,269.41 345.173,416.226 213.333,346.91\r 81.485,416.226 106.667,269.41 0,165.436 147.409,144.017 "}),Object(p.jsx)("g",{}),Object(p.jsx)("g",{}),Object(p.jsx)("g",{}),Object(p.jsx)("g",{}),Object(p.jsx)("g",{}),Object(p.jsx)("g",{}),Object(p.jsx)("g",{}),Object(p.jsx)("g",{}),Object(p.jsx)("g",{}),Object(p.jsx)("g",{}),Object(p.jsx)("g",{}),Object(p.jsx)("g",{}),Object(p.jsx)("g",{}),Object(p.jsx)("g",{}),Object(p.jsx)("g",{})]})}),q=function(e){var t=e.mapActions,c=e.onClickAddToCart,r=e.card,n=e.splitValue;return Object(p.jsxs)("div",{className:"cardsWrapper",children:[Object(p.jsx)("img",{className:"cardsWrapper__img",onClick:function(){},src:"https://volodimirzhukivskyi.github.io/simple-phone-store"+r.src,alt:""}),Object(p.jsxs)("div",{className:"elementsWrapper",children:[Object(p.jsxs)("div",{className:"starsWrapper",children:[Object(p.jsx)(l.a,{src:"./phones/star_77949.svg"}),Object(p.jsx)("span",{className:"spanElement",children:"4,5"})]}),Object(p.jsxs)("div",{children:[Object(p.jsx)("span",{style:{background:r.color},className:"colorBlock",children:Object(p.jsxs)("p",{className:"missingText",children:["\u0426\u0432\u0435\u0442:",Object(p.jsx)("br",{})," ",r.color]})}),Object(p.jsxs)("span",{className:"spanElement",children:["\u041a\u043e\u0434:",r.vendorCode," "]})]})]}),Object(p.jsx)("p",{className:"cardsWrapper__title",children:r.name}),Object(p.jsxs)("span",{className:"cardsWrapper__price",children:[n(r.price)," \ud83d\udcb2"]}),Object(p.jsx)("div",{children:Object(p.jsx)(T,{className:"cardsWrapper__button",style:{background:"#cccccc"},onClick:function(){c(r.vendorCode)},text:"\u0412 \u043a\u043e\u0440\u0437\u0438\u043d\u0443"})},r.vendorCode),Object(p.jsx)("div",{className:"starWrapper",onClick:function(){t(r.vendorCode)},children:Object(p.jsx)(X,{style:{fill:r.isFavorite?"gold":"white"}})}),Object(p.jsx)("p",{className:"cardsWrapper__hide-block",children:r.txt})]})};q.defaultProps={btnModal:"#b3382c"};var Z=q,G=function(e){var t=Object(r.useState)(""),c=Object(P.a)(t,2),n=c[0],a=c[1],s=Object(r.useState)(""),o=Object(P.a)(s,2),i=o[0],l=o[1],d=e.filter.filter,j=e.setFilter;return Object(p.jsxs)("div",{className:"filterForm-wrapper",children:[Object(p.jsxs)("h2",{className:"filterForm-title",children:[Object(p.jsx)("span",{className:"title-el",children:"\u0444\u0438\u043b\u044c\u0442\u0440"})," \u0442\u043e\u0432\u0430\u0440\u043e\u0432"]}),Object(p.jsxs)("form",{className:"filterForm",onSubmit:function(e){e.preventDefault(),d?(localStorage.removeItem("price"),a(""),l("")):localStorage.setItem("price",JSON.stringify({priceTo:n,priceFrom:i})),j({filter:!d})},children:[Object(p.jsx)("input",{className:"priceFrom ",type:"text",name:"priceFrom",disabled:d,placeholder:"Price from",onChange:function(e){l(e.target.value)},value:i}),Object(p.jsx)("input",{className:"priceTo",type:"text",name:"priceTo",disabled:d,placeholder:"Price to",onChange:function(e){a(e.target.value)},value:n}),Object(p.jsx)("input",{className:"filterForm-button",type:"submit",value:d?"\u043e\u0447\u0438\u0441\u0442\u0438\u0442\u044c":"\u0444\u0438\u043b\u044c\u0442\u0440\u043e\u0432\u0430\u0442\u044c"})]})]})},$=function(e){var t=Object(r.useState)(!1),c=Object(P.a)(t,2),n=c[0],a=c[1],s=e.mapActions,o=e.cards,i=e.onClickAddToCart,l=e.splitValue,d=JSON.parse(localStorage.getItem("price")),j=function(){return o.filter((function(e){return+d.priceFrom<e.price&&+d.priceTo>e.price}))};return Object(p.jsxs)("div",{className:"wrapperList",children:[Object(p.jsx)("h1",{className:"titleHero",children:"\u041f\u043e\u043f\u0443\u043b\u044f\u0440\u043d\u044b\u0435 \u043c\u043e\u0434\u0435\u043b\u0438 \u0442\u0435\u043b\u0435\u0444\u043e\u043d\u043e\u0432"}),Object(p.jsxs)("div",{className:"wrapperContent",children:[Object(p.jsx)(G,{filter:n,setFilter:a}),Object(p.jsx)("div",{className:"phonesWrapper",children:null!==d?Object(p.jsx)("div",{className:"phonesWrapper",children:j().length?j().map((function(e){return Object(p.jsx)(Z,{card:e,onClickAddToCart:i,mapActions:s,splitValue:l},e.vendorCode)})):Object(p.jsxs)("p",{className:"filter-message",children:["\u041d\u0435\u0442 \u0442\u043e\u0432\u0430\u0440\u043e\u0432 ",Object(p.jsx)("br",{}),"\u043f\u043e \u0437\u0430\u0434\u0430\u043d\u043e\u043c\u0443 \u0444\u0438\u043b\u044c\u0442\u0440\u0443"]})}):o.map((function(e){return Object(p.jsx)(Z,{card:e,onClickAddToCart:i,mapActions:s,splitValue:l},e.vendorCode)}))})]})]})},K=function(e){var t=e.onClickPlus,c=e.onClickMinus,r=e.counter;return Object(p.jsxs)("div",{className:"counterWrapper",children:[Object(p.jsx)("button",{onClick:t,children:"+"}),Object(p.jsx)("p",{children:r}),Object(p.jsx)("button",{onClick:c,children:"-"})]})},Q=function(e){var t=e.card,c=e.onClickMinus,r=e.onClickPlus,n=e.onClickDelete,a=e.onClickAddToCart,s=e.mapActions,i=e.splitValue,l=Object(o.b)();return Object(p.jsxs)("div",{className:"favCardsBlock",style:{borderBottom:"1px solid #cccccc"},children:[Object(p.jsx)("img",{src:"https://volodimirzhukivskyi.github.io/simple-phone-store"+t.src,alt:"\u0421\u043c\u0430\u0440\u0442\u0444\u043e\u043d"}),Object(p.jsxs)("div",{className:"contentTextWrapper",children:[Object(p.jsxs)("p",{className:"cardsWrapper__title",children:["\u041c\u043e\u0434\u0435\u043b\u044c : ",Object(p.jsx)("br",{}),t.name]}),Object(p.jsxs)("span",{className:"cardsWrapper__price",children:["\u0426\u0435\u043d\u0430 :"," ",i(n?t.price*t.count:t.price),"\u20b4"]})]}),n&&Object(p.jsx)(K,{onClickPlus:function(){return r(t.vendorCode)},onClickMinus:function(){return c(t.vendorCode)},counter:t.count}),Object(p.jsxs)("div",{className:"buttonWrapper",children:[Object(p.jsx)(T,{className:"CloseButtonModal",backgroundColor:"none",onClick:function(){s?s(t.vendorCode):n(t.vendorCode)},text:"X"}),Object(p.jsx)(T,{className:s?"cardsWrapper__button":"hide-block",style:{background:"#cccccc"},onClick:function(){s?a(t.vendorCode):l(L(!0))},text:"\u0412 \u043a\u043e\u0440\u0437\u0438\u043d\u0443"},t.vendorCode)]})]})},Y=function(e){var t=e.cards,c=e.onClickDelete,r=e.onClickAddToCart,n=e.mapActions,a=e.splitValue,s=Object(o.c)((function(e){return{cards:e.reducerApp.cards,shoppingCart:e.reducerApp.shoppingCart,favProductsIds:e.reducerApp.favProductsIds,actionToConfirm:e.reducerApp.actionToConfirm,shopModal:e.reducerModal.shopModal,shopForm:e.reducerModal.shopForm}})),i=s.shoppingCart,l=s.shopModal,d=s.shopForm,j=Object(o.b)(),u=function(e){var t=!(arguments.length>1&&void 0!==arguments[1])||arguments[1],c=i.map((function(c){return c.vendorCode===e?{vendorCode:e,count:t?c.count+1:c.count-1}:c})),r=c.filter((function(e){return e.count}));j(y(r))};return Object(p.jsxs)("div",{className:"favContentWrapper",children:[Object(p.jsx)("h1",{className:"titleHero",children:n?"\u0418\u0437\u0431\u0440\u0430\u043d\u043d\u043e\u0435":"\u041a\u043e\u0440\u0437\u0438\u043d\u0430"}),Object(p.jsxs)("div",{className:"favCardsWrapper",children:[t&&!t.length&&Object(p.jsxs)("div",{className:"style-title",children:["\u041f\u043e\u043a\u0430 \u0432",n?" \u0418\u0437\u0431\u0440\u0430\u043d\u043d\u043e\u043c":" \u041a\u043e\u0440\u0437\u0438\u043d\u0435"," \u043d\u0435\u0442 \u0442\u043e\u0432\u0430\u0440\u043e\u0432..."]}),t.map((function(e){return Object(p.jsx)(Q,{card:e,onClickMinus:function(e){return u(e,!1)},onClickAddToCart:r,onClickPlus:function(e){return u(e,!0)},mapActions:n,onClickDelete:c,splitValue:a},e.vendorCode)})),!n&&Object(p.jsxs)("div",{className:"total-price",children:[Object(p.jsxs)("p",{className:"total-price__text",children:["\u041a \u041e\u041f\u041b\u0410\u0422\u0415:",Object(p.jsx)("span",{className:"total-price__el",children:t.reduce((function(e,t){return e+t.count*+t.price}),0)})]}),Object(p.jsx)(T,{className:t.length?"cardsWrapper__button":"hide-block",style:{background:"#cccccc"},onClick:function(){!n&&j(L(!0))},text:"\u041a\u0443\u043f\u0438\u0442\u044c"})]}),!n&&d&&Object(p.jsx)("div",{className:"containerModal",children:Object(p.jsx)(R,{card:t.map((function(e){return e})),click:function(){return j(L(!1))}})}),l&&Object(p.jsx)(J,{header:"\u0421\u043f\u0430\u0441\u0438\u0431\u043e \u0437\u0430 \u0441\u043e\u0442\u0440\u0443\u0434\u043d\u0438\u0447\u0435\u0441\u0442\u0432\u043e!!! ",closeButton:!0,click:function(){return j(D(!1))},text:"\u0412\u0430\u0448 \u0437\u0430\u043a\u0430\u0437 \u043f\u0440\u0438\u043d\u044f\u0442 \u043d\u0430 \u043e\u0431\u0440\u043e\u0431\u043a\u0443.\u0421 \u0432\u0430\u043c\u0438 \u0441\u0432\u044f\u0436\u0435\u0442\u0441\u044f \u043c\u0435\u043d\u0435\u0434\u0436\u0435\u0440",actions:Object(p.jsx)("div",{className:"containerButton",children:Object(p.jsx)(T,{className:"modalButtonOne",backgroundColor:"#b3382c",text:"\u0417\u0430\u043a\u0440\u044b\u0442\u044c",onClick:function(){return j(D(!1))}})})})]})]})},ee=function(e){var t=Object(o.c)((function(e){return{cards:e.reducerApp.cards,shoppingCart:e.reducerApp.shoppingCart,favProductsIds:e.reducerApp.favProductsIds,actionToConfirm:e.reducerApp.actionToConfirm}})),c=t.cards,r=t.shoppingCart,n=t.favProductsIds,a=t.actionToConfirm,s=Object(o.b)(),l=function(e){s(function(e){return{type:h,payload:e}}(e))},d=function(e){var t=n.includes(e);l(t?n.filter((function(t){return t!==e})):[].concat(Object(B.a)(n),[e]))},j=function(e){return Object(i.a)(Object(i.a)({},e),{},{isFavorite:n.includes(e.vendorCode)})},u=function(e){return e.toString().replace(/\B(?=(\d{3})+(?!\d))/g," ")};return Object(p.jsxs)("main",{className:"container",children:[Object(p.jsxs)(S.c,{children:[Object(p.jsx)(S.a,{exact:!0,path:"/",render:function(){return Object(p.jsx)(V,{})}}),Object(p.jsx)(S.a,{exact:!0,path:"/simple-phone-store/",render:function(){return Object(p.jsx)(V,{})}}),Object(p.jsx)(S.a,{path:"".concat("https://volodimirzhukivskyi.github.io/simple-phone-store","/"),render:function(){return Object(p.jsx)(V,{})}}),Object(p.jsx)(S.a,{exact:!0,path:"/phone",render:function(){return Object(p.jsx)($,{cards:c.map(j),mapActions:d,onClickAddToCart:function(e){s(k({actionType:"add",vendorCode:e}))},splitValue:u})}}),Object(p.jsx)(S.a,{path:"/fav",render:function(){return Object(p.jsx)(Y,{cards:c.filter((function(e){return n.includes(e.vendorCode)})).map(j),mapActions:d,onClickAddToCart:function(e){s(k({actionType:"add",vendorCode:e}))},splitValue:u})}}),Object(p.jsx)(S.a,{path:"/shopping",render:function(){return Object(p.jsx)(Y,{cards:c.filter((function(e){return r.find((function(t){return e.vendorCode===t.vendorCode}))})).map((function(e){return Object(i.a)(Object(i.a)({},e),{},{count:r.find((function(t){return e.vendorCode===t.vendorCode})).count})})),onClickDelete:function(e){s(k({actionType:"delete",vendorCode:e}))},splitValue:u})}})]}),a&&Object(p.jsx)(J,{header:"",closeButton:!0,click:function(){s(k(null))},text:"add"===a.actionType?"\u0414\u043e\u0431\u0430\u0432\u0438\u0442\u044c \u0442\u043e\u0432\u0430\u0440 \u0432 \u043a\u043e\u0440\u0437\u0438\u043d\u0443 \u0432 \u043a\u043e\u0440\u0437\u0438\u043d\u0443?":"\u0412\u044b \u0442\u043e\u0447\u043d\u043e \u0445\u043e\u0442\u0438\u0442\u0435 \u0443\u0434\u0430\u043b\u0438\u0442\u044c \u0442\u043e\u0432\u0430\u0440 \u0438\u0437 \u043a\u043e\u0440\u0437\u0438\u043d\u044b?",actions:Object(p.jsxs)("div",{className:"containerButton",children:[Object(p.jsx)(T,{className:"modalButtonOne",backgroundColor:"#b3382c",text:"add"===a.actionType?"\u0414\u043e\u0431\u0430\u0432\u0438\u0442\u044c":"\u0423\u0434\u0430\u043b\u0438\u0442\u044c",onClick:function(){var e,t;"add"===a.actionType?s((t=a.vendorCode,{type:m,payload:t})):s((e=a.vendorCode,{type:v,payload:e})),s(k(null))}}),Object(p.jsx)(T,{className:"modalButtonOne",backgroundColor:"#b3382c",text:"\u0417\u0430\u043a\u0440\u044b\u0442\u044c",onClick:function(){s(k(null))}})]})})]})},te=function(){return Object(p.jsxs)("footer",{className:"footer",children:[Object(p.jsx)("h2",{className:"footer-title",children:"- \u0441\u0432\u044f\u0436\u0438\u0442\u0435\u0441\u044c \u0441 \u043d\u0430\u043c\u0438 -"}),Object(p.jsx)("ul",{className:"footer-wrapper--icon ",children:[{id:1,path:"https://youtube.com/",icon:"youtube"},{id:2,icon:"linkedin",path:"https://linkedin.com/in/"},{id:3,icon:"twitter",path:"https://twitter.com/"},{id:4,icon:"instagram",path:"https://instagram.com/"}].map((function(e){var t=e.id,c=e.icon,r=e.path;return Object(p.jsx)("li",{children:Object(p.jsx)("a",{href:r,target:"_blank",rel:"noopener noreferrer",children:Object(p.jsx)("i",{className:"fab fa-".concat(c)})})},t)}))}),Object(p.jsx)("div",{className:"footer-contact",children:"\xa9 All rights reserved, 2022"})]})},ce=function(){var e=Object(o.b)(),t=Object(o.c)((function(e){return{cards:e.reducerApp.cards,shoppingCart:e.reducerApp.shoppingCart,isLoading:e.reducerApp.isLoading,error:e.reducerApp.error}})),c=t.isLoading,n=t.error,a=t.cards,s=t.shoppingCart;Object(r.useEffect)((function(){e(A("".concat("https://volodimirzhukivskyi.github.io/simple-phone-store","/products.json")))}),[]);var l=a.filter((function(e){return s.find((function(t){return e.vendorCode===t.vendorCode}))})).map((function(e){return Object(i.a)(Object(i.a)({},e),{},{count:s.find((function(t){return e.vendorCode===t.vendorCode})).count})}));return Object(p.jsxs)("div",{className:"app-container",children:[Object(p.jsx)(u,{itemsCart:l}),n&&Object(p.jsx)("div",{children:n}),c&&Object(p.jsx)("div",{className:"wrapperLoader",children:Object(p.jsxs)("div",{className:"loader",children:[Object(p.jsx)("span",{}),Object(p.jsx)("span",{}),Object(p.jsx)("span",{}),Object(p.jsx)("span",{}),Object(p.jsx)("span",{})]})}),a.length&&Object(p.jsxs)(p.Fragment,{children:[Object(p.jsx)(ee,{})," ",Object(p.jsx)(te,{})]})]})},re=c(25),ne=c(88),ae=c(89),se={shopForm:!1,shopModal:!1},oe=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:se,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case E:return Object(i.a)(Object(i.a)({},e),{},{shopModal:t.payload});case M:return Object(i.a)(Object(i.a)({},e),{},{shopForm:t.payload});default:return e}},ie={cards:[],error:null,shoppingCart:localStorage.getItem("shoppCart")?JSON.parse(localStorage.getItem("shoppCart")):[],favProductsIds:localStorage.getItem("favProducts")?JSON.parse(localStorage.getItem("favProducts")):[],actionToConfirm:!1,isLoading:!1,category:[]},le=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ie,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case b:return Object(i.a)(Object(i.a)({},e),{},{error:null,cards:Object(B.a)(t.payload)});case C:return Object(i.a)(Object(i.a)({},e),{},{error:t.payload.error});case m:return Object(i.a)(Object(i.a)({},e),{},{shoppingCart:e.shoppingCart.find((function(e){return e.vendorCode===t.payload}))?e.shoppingCart.map((function(e){return e.vendorCode===t.payload?{vendorCode:t.payload,count:e.count+1}:e})):[].concat(Object(B.a)(e.shoppingCart),[{vendorCode:t.payload,count:1}])});case h:return Object(i.a)(Object(i.a)({},e),{},{favProductsIds:t.payload});case O:return Object(i.a)(Object(i.a)({},e),{},{actionToConfirm:t.payload});case x:return Object(i.a)(Object(i.a)({},e),{},{isLoading:t.payload});case v:return Object(i.a)(Object(i.a)({},e),{},{shoppingCart:e.shoppingCart.filter((function(e){return e.vendorCode!==t.payload}))});case f:return Object(i.a)(Object(i.a)({},e),{},{shoppingCart:t.payload});case g:return Object(i.a)(Object(i.a)({},e),{},{shoppingCart:[]});case N:return Object(i.a)({},e);default:return e}},de=Object(re.combineReducers)({reducerApp:le,reducerModal:oe}),pe=Object(re.createStore)(de,Object(ne.composeWithDevTools)(Object(re.applyMiddleware)(ae.a)));pe.subscribe((function(){localStorage.setItem("shoppCart",JSON.stringify(pe.getState().reducerApp.shoppingCart)),localStorage.setItem("favProducts",JSON.stringify(pe.getState().reducerApp.favProductsIds))})),s.a.render(Object(p.jsx)(n.a.StrictMode,{children:Object(p.jsx)(d.a,{children:Object(p.jsx)(o.a,{store:pe,children:Object(p.jsx)(ce,{})})})}),document.getElementById("root"))},45:function(e,t,c){},87:function(e,t,c){e.exports={button:"Button_button__2Zfrf",CloseButton:"Button_CloseButton__18gAN",CloseButtonModal:"Button_CloseButtonModal__2RBEm",modalButtonOne:"Button_modalButtonOne__2wXt8",modalButtonTwo:"Button_modalButtonTwo__3xjlZ"}},98:function(e,t,c){}},[[202,1,2]]]);
//# sourceMappingURL=main.16f9a942.chunk.js.map
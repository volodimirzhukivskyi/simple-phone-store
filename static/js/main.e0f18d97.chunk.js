(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{103:function(e,t,c){},202:function(e,t,c){"use strict";c.r(t);var n=c(1),r=c.n(n),a=c(39),s=c.n(a),o=c(8),i=(c(97),c(2)),l=c(30),d=c(0),j=function(e){var t=e.text,c=e.elUrlNav,n=e.className;return Object(d.jsx)(l.b,{exact:!0,className:n,activeStyle:{borderBottom:"2px solid white"},to:c,isActive:function(){return window.location.pathname+window.location.hash==={elUrlNav:c}},children:t})},u=c(32),p=function(e){var t=e.itemsCart;return Object(d.jsx)("header",{className:"head",children:Object(d.jsxs)("div",{className:"head-wrapper container",children:[Object(d.jsx)(j,{className:"block-logo",elUrlNav:"/",text:Object(d.jsxs)(d.Fragment,{children:[Object(d.jsx)(u.a,{className:"img-logo",src:"./phones/smartphone_79223.svg"}),Object(d.jsx)("h3",{className:"logo",children:"\u041c\u043e\u0431\u0438 \u043b\u0430\u0439\u0444"})]})}),Object(d.jsx)("nav",{className:"hero-navigation",children:Object(d.jsxs)("ul",{className:"hero-navigation__list",children:[Object(d.jsx)("li",{className:"list-item",children:Object(d.jsx)(j,{elUrlNav:"/",text:"\u0413\u043b\u0430\u0432\u043d\u0430\u044f",className:"link-navigation"})}),Object(d.jsx)("li",{className:"list-item",children:Object(d.jsx)(j,{elUrlNav:"/phone",text:"\u0422\u043e\u0432\u0430\u0440\u044b",className:"link-navigation"})}),Object(d.jsx)("li",{className:"list-item",children:Object(d.jsx)(j,{elUrlNav:"/fav",text:"\u0418\u0437\u0431\u0440\u0430\u043d\u043d\u043e\u0435",className:"link-navigation"})})]})}),Object(d.jsx)(j,{elUrlNav:"/shopping",text:Object(d.jsx)(u.a,{className:t.length?"img-shop--red":"img-shop",src:"./phones/shoppingcart3_114877.svg"})})]})})},b=(c(46),c(103),"ADD_PRODUCT_SUCCESS"),m="ADD_PRODUCT_FAILURE",O="ADD_SHOPPING_CART",h="ADD_FAV_PRODUCTS_IDS",x="ACTION_TO_CONFIRM",f="IS_LOADING",v="DELETE_FROM_SHOPPING",g="CHANGED_COUNTER",N="CLEAR_ITEM",C="PRICE_CALCULATOR",k="ADD_CATEGORIES_SUCCESS",y=function(e){return{type:m,payload:{error:e}}},_=function(e){return{type:x,payload:e}},S=function(e){return{type:f,payload:e}},A=function(e){return{type:g,payload:e}},w=function(){return function(e){e(S(!0)),fetch("products.json").then((function(e){if(e.ok)return e.json();throw new Error("Failed to load")})).then((function(t){e(S(!1)),e({type:b,payload:t})})).catch((function(t){e(y(t.message))}))}},T=c(7),B=c(5),I=c(9);var P=function(e){var t=e.className,c=e.backgroundColor,n=e.text,r=e.onClick;return Object(d.jsx)("button",{className:t,style:{background:c},onClick:r,children:n})},F=[Object(d.jsx)("img",{src:"imagesGeneralList/sliderImg/informationBanner.png",alt:"\u043a\u0430\u0440\u0442\u0438\u043d\u043a\u0438 \u043c\u0430\u0433\u0430\u0437\u0438\u043d\u0430 "},1),Object(d.jsx)("img",{src:"imagesGeneralList/sliderImg/youngWoman.jpg",alt:"\u043a\u0430\u0440\u0442\u0438\u043d\u043a\u0438 \u043c\u0430\u0433\u0430\u0437\u0438\u043d\u0430 "},2),Object(d.jsx)("img",{src:"imagesGeneralList/sliderImg/Shop.jpg ",alt:"\u043a\u0430\u0440\u0442\u0438\u043d\u043a\u0438 \u043c\u0430\u0433\u0430\u0437\u0438\u043d\u0430 "},3)],D=function(){var e=Object(n.useState)(0),t=Object(I.a)(e,2),c=t[0],r=t[1];Object(n.useEffect)((function(){var e=setInterval((function(){r((function(e){return e===F.length-1?0:e+1}))}),4e4);return function(){return clearInterval(e)}}),[]);var a=c?c-1:F.length-1,s=c===F.length-1?0:c+1;return Object(d.jsxs)("div",{className:"slider",children:[Object(d.jsx)(P,{className:"buttonSliderPrev",backgroundColor:"black",text:"<",onClick:function(){r(a)}}),Object(d.jsx)("div",{className:"slider-img slider-img-prev",children:F[a]},a),Object(d.jsx)("div",{className:"slider-img",children:F[c]},c),Object(d.jsx)("div",{className:"slider-img slider-img-next",children:F[s]},s),Object(d.jsx)(P,{className:"buttonSliderNext",backgroundColor:"black",text:">",onClick:function(){r(s)}})]})},E=c(91),L=c(24),M="SHOP_FORM",W="SHOP_MODAL",G=function(e){return{type:W,payload:e}},R=function(e){return{type:M,payload:e}},U=function(e){var t=e.click,c=e.card,n=Object(o.b)(),a=L.b().shape({name:L.c().matches(/^[a-zA-Z]+$/,"\u042d\u0442\u043e \u043f\u043e\u043b\u0435 \u0434\u043e\u043b\u0436\u043d\u043e \u0431\u044b\u0442\u044c \u0441\u0442\u0440\u043e\u043a\u043e\u0439").min(2,"\u0421\u043b\u0438\u0448\u043a\u043e\u043c \u043a\u043e\u0440\u043e\u0442\u043a\u043e\u0435 \u0438\u043c\u044f!").max(50,"\u0421\u043b\u0438\u0448\u043a\u043e\u043c \u0434\u043b\u0438\u043d\u043d\u043e\u0435 \u0438\u043c\u044f!").required("\u041e\u0431\u044f\u0437\u0430\u0442\u0435\u043b\u044c\u043d\u043e"),secondName:L.c().matches(/^[a-zA-Z]+$/,"\u042d\u0442\u043e \u043f\u043e\u043b\u0435 \u0434\u043e\u043b\u0436\u043d\u043e \u0431\u044b\u0442\u044c \u0441\u0442\u0440\u043e\u043a\u043e\u0439").min(2,"\u0421\u043b\u0438\u0448\u043a\u043e\u043c \u043a\u043e\u0440\u043e\u0442\u043a\u0430\u044f \u0444\u0430\u043c\u0438\u043b\u0438\u044f!").max(50,"\u0421\u043b\u0438\u0448\u043a\u043e\u043c \u0434\u043b\u0438\u043d\u043d\u0430\u044f \u0444\u0430\u043c\u0438\u043b\u0438\u044f!").required("\u041e\u0431\u044f\u0437\u0430\u0442\u0435\u043b\u044c\u043d\u043e"),age:L.a().typeError("\u042d\u0442\u043e\u0442 \u0442\u0435\u043a\u0441\u0442 \u043d\u0435 \u044f\u0432\u043b\u044f\u0435\u0442\u0441\u044f \u0447\u0438\u0441\u043b\u043e\u043c").required("\u041e\u0431\u044f\u0437\u0430\u0442\u0435\u043b\u044c\u043d\u043e"),address:L.c().required("\u041e\u0431\u044f\u0437\u0430\u0442\u0435\u043b\u044c\u043d\u043e"),phoneNumber:L.a().min(10,"\u0421\u043b\u0438\u0448\u043a\u043e\u043c \u043a\u043e\u0440\u043e\u0442\u043a\u0438\u0439 \u043d\u043e\u043c\u0435\u0440 \u0442\u0435\u043b\u0435\u0444\u043e\u043d\u0430 !").typeError("\u042d\u0442\u043e\u0442 \u0442\u0435\u043a\u0441\u0442 \u043d\u0435 \u044f\u0432\u043b\u044f\u0435\u0442\u0441\u044f \u043d\u043e\u043c\u0435\u0440\u043e\u043c").required("\u041e\u0431\u044f\u0437\u0430\u0442\u0435\u043b\u044c\u043d\u043e")});return Object(d.jsx)(r.a.Fragment,{children:Object(d.jsx)(E.a,{initialValues:{name:"",secondName:"",age:"",address:"",phoneNumber:""},validateOnBlur:!0,onSubmit:function(e,t){var r;console.log(e),(r=console).log.apply(r,Object(T.a)(c.map((function(e){return"\u0412\u044b \u0437\u0430\u043a\u0430\u0437\u0430\u043b\u0438 - ".concat(e.name," \u0432 \u043a\u043e\u043b\u0438\u0447\u0435\u0441\u0442\u0432\u0435 - ").concat(e.count," \u0448\u0442\u0443\u043a")+"\n"})))),console.log("\u0418\u043d\u0444\u043e\u0440\u043c\u0430\u0446\u0438\u044f \u043e \u0432\u0430\u0441 -"),console.log(e),n({type:N}),n(R(!1)),n(G(!0)),t.resetForm({values:{name:"",secondName:"",age:"",address:"",phoneNumber:""}})},validationSchema:a,children:function(e){var c=e.values,n=e.errors,r=e.touched,a=e.handleChange,s=e.isValid,o=e.handleSubmit,i=(e.handleReset,e.handleBlur),l=e.dirty;return Object(d.jsx)("div",{className:"register-form-container",onClick:function(e){return e.stopPropagation()},children:Object(d.jsxs)("form",{action:"",children:[Object(d.jsx)("h1",{className:"form-title",children:"\u0421\u0434\u0435\u043b\u0430\u0442\u044c \u0437\u0430\u043a\u0430\u0437"}),Object(d.jsxs)("div",{className:"form-fields",children:[Object(d.jsxs)("div",{className:"form-field",children:[Object(d.jsx)("input",{type:"text",placeholder:"\u0418\u043c\u044f",name:"name",onChange:a,onBlur:i,value:c.name})," ",r.name&&n.name&&Object(d.jsx)("p",{className:"error",children:n.name})]}),Object(d.jsxs)("div",{className:"form-field",children:[Object(d.jsx)("input",{type:"text",placeholder:"\u0424\u0430\u043c\u0438\u043b\u0438\u044f",name:"secondName",onChange:a,onBlur:i,value:c.secondName}),r.secondName&&n.secondName&&Object(d.jsx)("p",{className:"error",children:n.secondName})]}),Object(d.jsxs)("div",{className:"form-field",children:[Object(d.jsx)("input",{type:"number",placeholder:"\u0412\u043e\u0437\u0440\u0430\u0441\u0442 \u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u044f",name:"age",onChange:a,onBlur:i,value:c.age}),r.age&&n.age&&Object(d.jsx)("p",{className:"error",children:n.age})]}),Object(d.jsxs)("div",{className:"form-field",children:[Object(d.jsx)("input",{type:"text",placeholder:"\u0410\u0434\u0440\u0435\u0441 \u0434\u043e\u0441\u0442\u0430\u0432\u043a\u0438",name:"address",onChange:a,onBlur:i,value:c.address}),r.address&&n.address&&Object(d.jsx)("p",{className:"error",children:n.address})]}),Object(d.jsxs)("div",{className:"form-field",children:[Object(d.jsx)("input",{type:"tel",placeholder:"\u041c\u043e\u0431\u0438\u043b\u044c\u043d\u044b\u0439 \u0442\u0435\u043b\u0435\u0444\u043e\u043d",name:"phoneNumber",onChange:a,onBlur:i,value:c.phoneNumber}),r.phoneNumber&&n.phoneNumber&&Object(d.jsx)("p",{className:"error",children:n.phoneNumber})]})]}),Object(d.jsxs)("div",{className:"form-buttons",children:[Object(d.jsx)("button",{className:"button",disabled:!s&&!l,onClick:o,type:"submit",children:"\u041e\u0442\u043f\u0440\u0430\u0432\u0438\u0442\u044c \u0437\u0430\u044f\u0432\u043a\u0443"}),Object(d.jsx)("div",{className:"divider",children:" "}),t&&Object(d.jsx)("button",{onClick:t,type:"button",className:"button ",children:"\u0417\u0430\u043a\u0440\u044b\u0442\u044c"})]})]})})}})})},V=function(e){var t=Object(n.useState)(!1),c=Object(I.a)(t,2),r=c[0],a=c[1],s=e.descr.split(" "),o=r?s.length:5;return Object(d.jsxs)("p",{className:"post__descr",children:[s.splice(0,o).map((function(e){return" ".concat(e)})),Object(d.jsx)(P,{className:"showButton",text:r?" hide more":"...show more",onClick:function(){a(!r)}})]})},H=function(e){var t=e.showcaseSample,c=["black","red","green"],r='\u042d\u043a\u0440\u0430\u043d (6.7", OLED (Super Retina XDR), 2778x1284) / Apple A14 Bionic / \u0442\u0440\u043e\u0439\u043d\u0430\u044f \u043e\u0441\u043d\u043e\u0432\u043d\u0430\u044f \u043a\u0430\u043c\u0435\u0440\u0430: 12 \u041c\u043f + 12 \u041c\u043f + 12 \u041c\u043f, \u0444\u0440\u043e\u043d\u0442\u0430\u043b\u044c\u043d\u0430\u044f \u043a\u0430\u043c\u0435\u0440\u0430: 12 \u041c\u043f / 128 \u0413\u0411 \u0432\u0441\u0442\u0440\u043e\u0435\u043d\u043d\u043e\u0439 \u043f\u0430\u043c\u044f\u0442\u0438 / 3G / LTE / 5G / GPS / Nano-SIM / iOS 14',a=["imagesGeneralList/phones/iphone12/iphone12.jpg","imagesGeneralList/phones/iphone12/iphone12.3.jpg","imagesGeneralList/phones/iphone12/iphone12.4.jpg"],s=Object(n.useState)(0),o=Object(I.a)(s,2),i=o[0],l=o[1],j=function(e){var t=Number(e.target.attributes.value.value);l({clickEl:a[t]})};return Object(d.jsx)(d.Fragment,{children:Object(d.jsxs)("div",{className:"block-products-card container",children:[Object(d.jsxs)("div",{className:"podInformation__wrapper",children:[Object(d.jsxs)("div",{className:"block-pic-slider",children:[Object(d.jsx)("div",{className:"block-pic",children:function(e){for(var t=[],c=0;c<e;c++){var n=a[c];t.push(Object(d.jsx)("img",{className:"pic-products",value:c,src:"".concat(n),onClick:j,alt:"\u0442\u0435\u043b\u0435\u0444\u043e\u043d"},c))}return t}(3)}),Object(d.jsx)("div",{className:"block-active-pic",children:Object(d.jsx)("img",{className:"active-pic",src:i.clickEl?i.clickEl:a[i],onChange:j,alt:"\u0442\u0435\u043b\u0435\u0444\u043e\u043d"})})]}),Object(d.jsxs)("div",{className:"podInformation__content",children:[Object(d.jsxs)("div",{className:"color-block-container",children:[Object(d.jsxs)("h2",{children:[t[0].name," \u0435\u0441\u0442\u044c \u0432\u043d\u0430\u043b\u0438\u0447\u0438\u0435 \u0432 \u0442\u0430\u043a\u0438\u0445 \u0446\u0432\u0435\u0442\u0430\u0445:"]}),Object(d.jsx)("div",{className:"div-color-render",children:function(e){for(var t=[],n=0;n<e;n++){var r=c[n];t.push(Object(d.jsx)("div",{className:"colorDiv",style:{background:r},children:Object(d.jsx)("div",{className:"color-block",style:{background:r},children:Object(d.jsxs)("p",{className:"color-block-text",children:[Object(d.jsx)("b",{children:"\u0426\u0432\u0435\u0442"})," : ",r]})})},c[n]))}return t}(3)})]}),Object(d.jsxs)("div",{className:"block-products-text",children:[Object(d.jsx)("h3",{className:"products-title",children:"\u041a\u0440\u0430\u0442\u043a\u043e\u0435 \u043e\u043f\u0438\u0441\u0430\u043d\u0438\u0435 \u0442\u043e\u0432\u0430\u0440\u0430"}),Object(d.jsx)(V,{descr:r})]})]})]}),Object(d.jsxs)("div",{className:"hero-block__form",children:[Object(d.jsxs)("div",{className:"price-information",children:[Object(d.jsxs)("p",{className:"text-order-block",children:["\u041a\u0443\u043f\u0438\u0442\u0435 \u044d\u0442\u043e\u0442 \u0442\u043e\u0432\u0430\u0440 ",Object(d.jsx)("span",{className:"red-word",children:"\u0441\u0435\u0439\u0447\u0430\u0441"})," \u0438 \u043f\u043e\u043b\u0443\u0447\u0438\u0442\u0435 \u0432 \u043f\u043e\u0434\u0430\u0440\u043e\u043a : \u0441\u043a\u0438\u0434\u043a\u0443 \u0432 \u0440\u0430\u0437 \u043c\u0435\u0440\u0435"," ",Object(d.jsx)("span",{className:"red-word",children:"1000 \u0433\u0440\u043d"})," \u043d\u0430 \u043f\u043e\u043a\u0443\u043f\u043a\u0438 \u0432 \u043d\u0430\u0448\u0435\u043c \u043c\u0430\u0433\u0430\u0437\u0438\u043d\u0435."]}),Object(d.jsx)("div",{className:"block-price",children:Object(d.jsxs)("p",{className:"price-number",children:[Object(d.jsx)("b",{className:"price-text",children:"\u0426\u0415\u041d\u0410 : "}),t[0].price]})})]}),Object(d.jsx)(U,{card:t})]})]})})},J=function(e){var t=e.showcaseSample;return console.log(t),Object(d.jsxs)("div",{children:[Object(d.jsx)("h1",{className:"titleHero",children:"\u041c\u042b \u0420\u0410\u0414\u042b \u041f\u0420\u0418\u0412\u0415\u0422\u0421\u0422\u0412\u041e\u0412\u0410\u0422\u042c \u0412\u0410\u0421 \u0412 \u041d\u0410\u0428\u0415\u041c \u0418\u041d\u0422\u0415\u0420\u041d\u0415\u0422-\u041c\u0410\u0413\u0410\u0417\u0418\u041d\u0415!"}),Object(d.jsx)(D,{}),Object(d.jsx)(H,{showcaseSample:t})]})},q=c(88),X=c.n(q);var Z=function(e){var t=e.header,c=e.closeButton,n=e.text,r=e.actions,a=e.click;return Object(d.jsx)("div",{className:"containerModal","data-testid":"closeModal",onClick:a,children:Object(d.jsxs)("div",{role:"modalBox",className:"modalWindow",tabIndex:"1",onClick:function(e){e.stopPropagation()},children:[Object(d.jsxs)("div",{className:"modalHeader",role:"textBox",children:[Object(d.jsx)("h2",{children:t}),c&&Object(d.jsx)(P,{className:X.a.CloseButton,backgroundColor:"none",text:"X",onClick:a})]}),Object(d.jsx)("p",{className:"modalContent",children:n}),r]})})},z=function(e){var t=e.style;return Object(d.jsxs)("svg",{className:"star",version:"1.1",id:"Layer_1",xmlns:"http://www.w3.org/2000/svg",xmlnsXlink:"http://www.w3.org/1999/xlink",x:"0px",y:"0px",viewBox:"0 0 426.667 426.667",style:{background:"new 0 0 426.667 426.667"},xmlSpace:"preserve",children:[Object(d.jsx)("polygon",{style:t,points:"213.333,10.441 279.249,144.017 426.667,165.436 320,269.41 345.173,416.226 213.333,346.91\r 81.485,416.226 106.667,269.41 0,165.436 147.409,144.017 "}),Object(d.jsx)("g",{}),Object(d.jsx)("g",{}),Object(d.jsx)("g",{}),Object(d.jsx)("g",{}),Object(d.jsx)("g",{}),Object(d.jsx)("g",{}),Object(d.jsx)("g",{}),Object(d.jsx)("g",{}),Object(d.jsx)("g",{}),Object(d.jsx)("g",{}),Object(d.jsx)("g",{}),Object(d.jsx)("g",{}),Object(d.jsx)("g",{}),Object(d.jsx)("g",{}),Object(d.jsx)("g",{})]})},$=function(e){var t=e.mapActions,c=e.onClickAddToCart,n=e.card,r=e.splitValue;return Object(d.jsxs)("div",{className:"cardsWrapper",children:[Object(d.jsx)("img",{className:"cardsWrapper__img",onClick:function(){return console.log("yes")},src:n.src,alt:""}),Object(d.jsxs)("div",{className:"elementsWrapper",children:[Object(d.jsxs)("div",{className:"starsWrapper",children:[Object(d.jsx)(u.a,{src:"./phones/star_77949.svg"}),Object(d.jsx)("span",{className:"spanElement",children:"4,5"})]}),Object(d.jsxs)("div",{children:[Object(d.jsx)("span",{style:{background:n.color},className:"colorBlock",children:Object(d.jsxs)("p",{className:"missingText",children:["\u0426\u0432\u0435\u0442:",Object(d.jsx)("br",{})," ",n.color]})}),Object(d.jsxs)("span",{className:"spanElement",children:["\u041a\u043e\u0434:",n.vendorCode," "]})]})]}),Object(d.jsx)("p",{className:"cardsWrapper__title",children:n.name}),Object(d.jsxs)("span",{className:"cardsWrapper__price",children:[r(n.price)," \ud83d\udcb2"]}),Object(d.jsx)("div",{children:Object(d.jsx)(P,{className:"cardsWrapper__button",style:{background:"#cccccc"},onClick:function(){c(n.vendorCode)},text:"\u0412 \u043a\u043e\u0440\u0437\u0438\u043d\u0443"})},n.vendorCode),Object(d.jsx)("div",{className:"starWrapper",onClick:function(){t(n.vendorCode)},children:Object(d.jsx)(z,{style:{fill:n.isFavorite?"gold":"white"}})})]})};$.defaultProps={btnModal:"#b3382c"};var Q=$,Y=function(e){var t=Object(n.useState)(""),c=Object(I.a)(t,2),r=c[0],a=c[1],s=Object(n.useState)(""),o=Object(I.a)(s,2),i=o[0],l=o[1],j=e.filter.filter,u=e.setFilter;return Object(d.jsxs)("div",{className:"filterForm-wrapper",children:[Object(d.jsxs)("h2",{className:"filterForm-title",children:[Object(d.jsx)("span",{className:"title-el",children:"\u0444\u0438\u043b\u044c\u0442\u0440"})," \u0442\u043e\u0432\u0430\u0440\u043e\u0432"]}),Object(d.jsxs)("form",{className:"filterForm",onSubmit:function(e){e.preventDefault(),j?(localStorage.removeItem("price"),a(""),l("")):localStorage.setItem("price",JSON.stringify({priceTo:r,priceFrom:i})),u({filter:!j})},children:[Object(d.jsx)("input",{className:"priceFrom ",type:"text",name:"priceFrom",disabled:j,placeholder:"Price from",onChange:function(e){l(e.target.value)},value:i}),Object(d.jsx)("input",{className:"priceTo",type:"text",name:"priceTo",disabled:j,placeholder:"Price to",onChange:function(e){a(e.target.value)},value:r}),Object(d.jsx)("input",{className:"filterForm-button",type:"submit",value:j?"\u043e\u0447\u0438\u0441\u0442\u0438\u0442\u044c":"\u0444\u0438\u043b\u044c\u0442\u0440\u043e\u0432\u0430\u0442\u044c"})]})]})},K=function(e){var t=Object(n.useState)(!1),c=Object(I.a)(t,2),r=c[0],a=c[1],s=e.mapActions,o=e.cards,i=e.onClickAddToCart,l=e.splitValue,j=JSON.parse(localStorage.getItem("price")),u=function(){return o.filter((function(e){return+j.priceFrom<e.price&&+j.priceTo>e.price}))};return Object(d.jsxs)("div",{className:"wrapperList",children:[Object(d.jsx)("h1",{className:"titleHero",children:"\u041f\u043e\u043f\u0443\u043b\u044f\u0440\u043d\u044b\u0435 \u043c\u043e\u0434\u0435\u043b\u0438 \u0442\u0435\u043b\u0435\u0444\u043e\u043d\u043e\u0432"}),Object(d.jsxs)("div",{className:"wrapperContent",children:[Object(d.jsx)(Y,{filter:r,setFilter:a}),Object(d.jsx)("div",{className:"phonesWrapper",children:null!==j?Object(d.jsx)("div",{className:"phonesWrapper",children:u().length?u().map((function(e){return Object(d.jsx)(Q,{card:e,onClickAddToCart:i,mapActions:s,splitValue:l},e.vendorCode)})):Object(d.jsxs)("p",{className:"filter-message",children:["\u041d\u0435\u0442 \u0442\u043e\u0432\u0430\u0440\u043e\u0432 ",Object(d.jsx)("br",{}),"\u043f\u043e \u0437\u0430\u0434\u0430\u043d\u043e\u043c\u0443 \u0444\u0438\u043b\u044c\u0442\u0440\u0443"]})}):o.map((function(e){return Object(d.jsx)(Q,{card:e,onClickAddToCart:i,mapActions:s,splitValue:l},e.vendorCode)}))})]})]})},ee=function(e){var t=e.onClickPlus,c=e.onClickMinus,n=e.counter;return Object(d.jsxs)("div",{className:"counterWrapper",children:[Object(d.jsx)("button",{onClick:t,children:"+"}),Object(d.jsx)("p",{children:n}),Object(d.jsx)("button",{onClick:c,children:"-"})]})},te=function(e){var t=e.card,c=e.onClickMinus,n=e.onClickPlus,r=e.onClickDelete,a=e.onClickAddToCart,s=e.mapActions,i=e.splitValue,l=Object(o.b)();return Object(d.jsxs)("div",{className:"favCardsBlock",style:{borderBottom:"1px solid #cccccc"},children:[Object(d.jsx)("img",{src:t.src,alt:"\u0421\u043c\u0430\u0440\u0442\u0444\u043e\u043d"}),Object(d.jsxs)("div",{className:"contentTextWrapper",children:[Object(d.jsxs)("p",{className:"cardsWrapper__title",children:["\u041c\u043e\u0434\u0435\u043b\u044c : ",Object(d.jsx)("br",{}),t.name]}),Object(d.jsxs)("span",{className:"cardsWrapper__price",children:["\u0426\u0435\u043d\u0430 :"," ",i(r?t.price*t.count:t.price),"\u20b4"]})]}),r&&Object(d.jsx)(ee,{onClickPlus:function(){return n(t.vendorCode)},onClickMinus:function(){return c(t.vendorCode)},counter:t.count}),Object(d.jsxs)("div",{className:"buttonWrapper",children:[Object(d.jsx)(P,{className:"CloseButtonModal",backgroundColor:"none",onClick:function(){s?s(t.vendorCode):r(t.vendorCode)},text:"X"}),Object(d.jsx)(P,{className:s?"cardsWrapper__button":"hide-block",style:{background:"#cccccc"},onClick:function(){s?a(t.vendorCode):l(R(!0))},text:"\u0412 \u043a\u043e\u0440\u0437\u0438\u043d\u0443"},t.vendorCode)]})]})},ce=function(e){var t=e.cards,c=e.onClickDelete,n=e.onClickAddToCart,r=e.mapActions,a=e.splitValue,s=Object(o.c)((function(e){return{cards:e.reducerApp.cards,shoppingCart:e.reducerApp.shoppingCart,favProductsIds:e.reducerApp.favProductsIds,actionToConfirm:e.reducerApp.actionToConfirm,shopModal:e.reducerModal.shopModal,shopForm:e.reducerModal.shopForm}})),i=s.shoppingCart,l=s.shopModal,j=s.shopForm,u=Object(o.b)(),p=function(e){var t=!(arguments.length>1&&void 0!==arguments[1])||arguments[1],c=i.map((function(c){return c.vendorCode===e?{vendorCode:e,count:t?c.count+1:c.count-1}:c})),n=c.filter((function(e){return e.count}));u(A(n))};return Object(d.jsxs)("div",{className:"favContentWrapper",children:[Object(d.jsx)("h1",{className:"titleHero",children:r?"\u0418\u0437\u0431\u0440\u0430\u043d\u043d\u043e\u0435":"\u041a\u043e\u0440\u0437\u0438\u043d\u0430"}),Object(d.jsxs)("div",{className:"favCardsWrapper",children:[t&&!t.length&&Object(d.jsxs)("div",{className:"style-title",children:["\u041f\u043e\u043a\u0430 \u0432",r?" \u0418\u0437\u0431\u0440\u0430\u043d\u043d\u043e\u043c":" \u041a\u043e\u0440\u0437\u0438\u043d\u0435"," \u043d\u0435\u0442 \u0442\u043e\u0432\u0430\u0440\u043e\u0432..."]}),t.map((function(e){return Object(d.jsx)(te,{card:e,onClickMinus:function(e){return p(e,!1)},onClickAddToCart:n,onClickPlus:function(e){return p(e,!0)},mapActions:r,onClickDelete:c,splitValue:a},e.vendorCode)})),!r&&Object(d.jsxs)("div",{className:"total-price",children:[Object(d.jsxs)("p",{className:"total-price__text",children:["\u041a \u041e\u041f\u041b\u0410\u0422\u0415:",Object(d.jsx)("span",{className:"total-price__el",children:t.reduce((function(e,t){return e+t.count*+t.price}),0)})]}),Object(d.jsx)(P,{className:t.length?"cardsWrapper__button":"hide-block",style:{background:"#cccccc"},onClick:function(){!r&&u(R(!0))},text:"\u041a\u0443\u043f\u0438\u0442\u044c"})]}),!r&&j&&Object(d.jsx)("div",{className:"containerModal",children:Object(d.jsx)(U,{card:t.map((function(e){return e})),click:function(){return u(R(!1))}})}),l&&Object(d.jsx)(Z,{header:"\u0421\u043f\u0430\u0441\u0438\u0431\u043e \u0437\u0430 \u0441\u043e\u0442\u0440\u0443\u0434\u043d\u0438\u0447\u0435\u0441\u0442\u0432\u043e!!! ",closeButton:!0,click:function(){return u(G(!1))},text:"\u0412\u0430\u0448 \u0437\u0430\u043a\u0430\u0437 \u043f\u0440\u0438\u043d\u044f\u0442 \u043d\u0430 \u043e\u0431\u0440\u043e\u0431\u043a\u0443.\u0421 \u0432\u0430\u043c\u0438 \u0441\u0432\u044f\u0436\u0435\u0442\u0441\u044f \u043c\u0435\u043d\u0435\u0434\u0436\u0435\u0440",actions:Object(d.jsx)("div",{className:"containerButton",children:Object(d.jsx)(P,{className:"modalButtonOne",backgroundColor:"#b3382c",text:"\u0417\u0430\u043a\u0440\u044b\u0442\u044c",onClick:function(){return u(G(!1))}})})})]})]})},ne=function(e){var t=Object(o.c)((function(e){return{cards:e.reducerApp.cards,shoppingCart:e.reducerApp.shoppingCart,favProductsIds:e.reducerApp.favProductsIds,actionToConfirm:e.reducerApp.actionToConfirm}})),c=t.cards,n=t.shoppingCart,r=t.favProductsIds,a=t.actionToConfirm,s=Object(o.b)(),l=function(e){s(function(e){return{type:h,payload:e}}(e))},j=function(e){var t=r.includes(e);l(t?r.filter((function(t){return t!==e})):[].concat(Object(T.a)(r),[e]))},u=function(e){return Object(i.a)(Object(i.a)({},e),{},{isFavorite:r.includes(e.vendorCode)})},p=function(e){return e.toString().replace(/\B(?=(\d{3})+(?!\d))/g," ")};return Object(d.jsxs)("main",{className:"container",children:[Object(d.jsxs)(B.c,{children:[Object(d.jsx)(B.a,{exact:!0,path:"/",render:function(){return Object(d.jsx)(J,{showcaseSample:c.filter((function(e){return"iPhone 12"===e.name})).map((function(e){return Object(i.a)(Object(i.a)({},e),{},{count:1})}))})}}),Object(d.jsx)(B.a,{exact:!0,path:"/phone",render:function(){return Object(d.jsx)(K,{cards:c.map(u),mapActions:j,onClickAddToCart:function(e){s(_({actionType:"add",vendorCode:e}))},splitValue:p})}}),Object(d.jsx)(B.a,{path:"/fav",render:function(){return Object(d.jsx)(ce,{cards:c.filter((function(e){return r.includes(e.vendorCode)})).map(u),mapActions:j,onClickAddToCart:function(e){s(_({actionType:"add",vendorCode:e}))},splitValue:p})}}),Object(d.jsx)(B.a,{path:"/shopping",render:function(){return Object(d.jsx)(ce,{cards:c.filter((function(e){return n.find((function(t){return e.vendorCode===t.vendorCode}))})).map((function(e){return Object(i.a)(Object(i.a)({},e),{},{count:n.find((function(t){return e.vendorCode===t.vendorCode})).count})})),onClickDelete:function(e){s(_({actionType:"delete",vendorCode:e}))},splitValue:p})}})]}),a&&Object(d.jsx)(Z,{header:"",closeButton:!0,click:function(){s(_(null))},text:"add"===a.actionType?"\u0414\u043e\u0431\u0430\u0432\u0438\u0442\u044c \u0442\u043e\u0432\u0430\u0440 \u0432 \u043a\u043e\u0440\u0437\u0438\u043d\u0443 \u0432 \u043a\u043e\u0440\u0437\u0438\u043d\u0443?":"\u0412\u044b \u0442\u043e\u0447\u043d\u043e \u0445\u043e\u0442\u0438\u0442\u0435 \u0443\u0434\u0430\u043b\u0438\u0442\u044c \u0442\u043e\u0432\u0430\u0440 \u0438\u0437 \u043a\u043e\u0440\u0437\u0438\u043d\u044b?",actions:Object(d.jsxs)("div",{className:"containerButton",children:[Object(d.jsx)(P,{className:"modalButtonOne",backgroundColor:"#b3382c",text:"add"===a.actionType?"\u0414\u043e\u0431\u0430\u0432\u0438\u0442\u044c":"\u0423\u0434\u0430\u043b\u0438\u0442\u044c",onClick:function(){var e,t;"add"===a.actionType?s((t=a.vendorCode,{type:O,payload:t})):s((e=a.vendorCode,{type:v,payload:e})),s(_(null))}}),Object(d.jsx)(P,{className:"modalButtonOne",backgroundColor:"#b3382c",text:"\u0417\u0430\u043a\u0440\u044b\u0442\u044c",onClick:function(){s(_(null))}})]})})]})},re=function(e){return function(t){t(S(!0)),fetch(e).then((function(e){if(e.ok)return e.json();throw new Error("Failed to load")})).then((function(e){t(S(!1)),t({type:k,payload:e})})).catch((function(e){t(y(e.message))}))}},ae=function(){return Object(d.jsxs)("footer",{className:"footer",children:[Object(d.jsx)("h2",{className:"footer-title",children:"- \u0441\u0432\u044f\u0436\u0438\u0442\u0435\u0441\u044c \u0441 \u043d\u0430\u043c\u0438 -"}),Object(d.jsxs)("p",{className:"footer-text",children:["\u041e\u0441\u0442\u0430\u0432\u043b\u044f\u0439\u0442\u0435 \u0432\u0430\u0448\u0438 \u043a\u043e\u043d\u0442\u0430\u043a\u0442\u044b \u0438 \u043c\u044b \u0441 \u0432\u0430\u043c\u0438 \u0441\u0432\u044f\u0436\u0435\u043c\u0441\u044f . Call center \u0440\u0430\u0431\u043e\u0442\u0430\u0435\u0442 \u043a\u0430\u0436\u0434\u044b\u0439 \u0434\u0435\u043d\u044c \u0441 9:00-20:00. \u0416\u0434\u0435\u043c \u0432\u0430\u0441!!!"," "]}),Object(d.jsxs)("div",{className:"footer-wrapper--icon ",children:[Object(d.jsx)("a",{href:"#",children:Object(d.jsx)("div",{className:"footer-wrapper--icon__wi-fi circle-icon",children:Object(d.jsx)("img",{src:"imagesGeneralList/smallPicImg/wi-fi.png",alt:"Wi-fi"})})}),Object(d.jsx)("a",{href:"#",children:Object(d.jsx)("div",{className:"footer-wrapper--icon__facebook circle-icon",children:Object(d.jsx)("img",{src:"imagesGeneralList/smallPicImg/facebook-icon.png",alt:"facebook"})})}),Object(d.jsx)("a",{href:"#",children:Object(d.jsx)("div",{className:"footer-wrapper--icon__dribbble circle-icon",children:Object(d.jsx)("img",{src:"imagesGeneralList/smallPicImg/dribbble-icon.png",alt:"dribbble"})})}),Object(d.jsx)("a",{href:"#",children:Object(d.jsx)("div",{className:"footer-wrapper--icon__pinterest circle-icon",children:Object(d.jsx)("img",{src:"imagesGeneralList/smallPicImg/pinterest-icon.png",alt:"pinterest"})})})]}),Object(d.jsxs)("div",{className:"footer-contact",children:[Object(d.jsxs)("p",{className:"footer-concat__address ",children:[" ","\u0418\u043d\u0434\u0443\u0441\u0442\u0440\u0438\u0430\u043b\u044c\u043d\u0430\u044f \u0443\u043b. 14-05 \u0433\u043e\u0440\u043e\u0434 \u041a\u0438\u0435\u0432 /"," "]}),Object(d.jsx)("a",{href:"tel: +38 (073) 102 70 43 ",className:"footer-contact__phone",children:"T. +38 (073) 102 70 43 /"}),Object(d.jsx)("a",{href:"mailto: mobi.life@email.com",className:"footer-contact__email",children:"mobi.life@email.com"})]})]})},se=function(){var e=Object(o.b)(),t=Object(o.c)((function(e){return{cards:e.reducerApp.cards,shoppingCart:e.reducerApp.shoppingCart,isLoading:e.reducerApp.isLoading,error:e.reducerApp.error}})),c=t.isLoading,a=t.error,s=t.cards,l=t.shoppingCart;Object(n.useEffect)((function(){e(w()),e(re("./categoryProducts.json"))}),[]);var j=s.filter((function(e){return l.find((function(t){return e.vendorCode===t.vendorCode}))})).map((function(e){return Object(i.a)(Object(i.a)({},e),{},{count:l.find((function(t){return e.vendorCode===t.vendorCode})).count})}));return Object(d.jsxs)("div",{className:"app-container",children:[Object(d.jsx)(p,{itemsCart:j}),a&&Object(d.jsx)("div",{children:a}),c&&Object(d.jsx)("div",{className:"wrapperLoader",children:Object(d.jsxs)("div",{className:"loader",children:[Object(d.jsx)("span",{}),Object(d.jsx)("span",{}),Object(d.jsx)("span",{}),Object(d.jsx)("span",{}),Object(d.jsx)("span",{})]})}),!c&&s.length&&Object(d.jsxs)(r.a.Fragment,{children:[Object(d.jsx)(ne,{})," ",Object(d.jsx)(ae,{})]})]})},oe=c(26),ie=c(89),le=c(90),de={shopForm:!1,shopModal:!1},je=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:de,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case W:return Object(i.a)(Object(i.a)({},e),{},{shopModal:t.payload});case M:return Object(i.a)(Object(i.a)({},e),{},{shopForm:t.payload});default:return e}},ue={cards:[],error:null,shoppingCart:localStorage.getItem("shoppCart")?JSON.parse(localStorage.getItem("shoppCart")):[],favProductsIds:localStorage.getItem("favProducts")?JSON.parse(localStorage.getItem("favProducts")):[],actionToConfirm:!1,isLoading:!1,category:[]},pe=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ue,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case b:return Object(i.a)(Object(i.a)({},e),{},{error:null,cards:Object(T.a)(t.payload)});case k:return Object(i.a)(Object(i.a)({},e),{},{error:null,category:Object(T.a)(t.payload)});case m:return Object(i.a)(Object(i.a)({},e),{},{error:t.payload.error});case O:return Object(i.a)(Object(i.a)({},e),{},{shoppingCart:e.shoppingCart.find((function(e){return e.vendorCode===t.payload}))?e.shoppingCart.map((function(e){return e.vendorCode===t.payload?{vendorCode:t.payload,count:e.count+1}:e})):[].concat(Object(T.a)(e.shoppingCart),[{vendorCode:t.payload,count:1}])});case h:return Object(i.a)(Object(i.a)({},e),{},{favProductsIds:t.payload});case x:return Object(i.a)(Object(i.a)({},e),{},{actionToConfirm:t.payload});case f:return Object(i.a)(Object(i.a)({},e),{},{isLoading:t.payload});case v:return Object(i.a)(Object(i.a)({},e),{},{shoppingCart:e.shoppingCart.filter((function(e){return e.vendorCode!==t.payload}))});case g:return Object(i.a)(Object(i.a)({},e),{},{shoppingCart:t.payload});case N:return Object(i.a)(Object(i.a)({},e),{},{shoppingCart:[]});case C:return Object(i.a)({},e);default:return e}},be=Object(oe.combineReducers)({reducerApp:pe,reducerModal:je}),me=Object(oe.createStore)(be,Object(ie.composeWithDevTools)(Object(oe.applyMiddleware)(le.a)));me.subscribe((function(){localStorage.setItem("shoppCart",JSON.stringify(me.getState().reducerApp.shoppingCart)),localStorage.setItem("favProducts",JSON.stringify(me.getState().reducerApp.favProductsIds))})),s.a.render(Object(d.jsx)(r.a.StrictMode,{children:Object(d.jsx)(l.a,{children:Object(d.jsx)(o.a,{store:me,children:Object(d.jsx)(se,{})})})}),document.getElementById("root"))},46:function(e,t,c){},88:function(e,t,c){e.exports={button:"Button_button__2lYU0",CloseButton:"Button_CloseButton__2vAj3",CloseButtonModal:"Button_CloseButtonModal__1dDsS",modalButtonOne:"Button_modalButtonOne__35ZXd",modalButtonTwo:"Button_modalButtonTwo__2jWQf"}},97:function(e,t,c){}},[[202,1,2]]]);
//# sourceMappingURL=main.e0f18d97.chunk.js.map
webpackJsonp([1],{"7oJd":function(t,i){},EB8o:function(t,i){},NHnr:function(t,i,e){"use strict";Object.defineProperty(i,"__esModule",{value:!0});var n=e("7+uW"),a=e("2R8v"),s=e.n(a),o=e("tlQw"),r=e.n(o),c=s()(["\nquery pizzaSizes {\n    pizzaSizes {\n        name\n        basePrice\n        maxToppings\n        toppings {\n        defaultSelected\n            topping {\n                name\n                price\n            }\n        }\n    }\n}"],["\nquery pizzaSizes {\n    pizzaSizes {\n        name\n        basePrice\n        maxToppings\n        toppings {\n        defaultSelected\n            topping {\n                name\n                price\n            }\n        }\n    }\n}"]),p={name:"App",data:function(){return{pizzaSizes:!1}},apollo:{pizzaSizes:r()(c)}},u={render:function(){var t=this.$createElement,i=this._self._c||t;return i("div",{attrs:{id:"app"}},[i("router-view",this._b({},"router-view",{pizzaSizes:this.pizzaSizes},!1))],1)},staticRenderFns:[]};var l=e("VU/8")(p,u,!1,function(t){e("UGGT"),e("PoFP")},null,null).exports,z=e("/ocq"),d=e("woOf"),v=e.n(d),m=e("NYxO");n.a.use(m.a);var h=new m.a.Store({state:{pizzas:[],nextPizzaId:1},mutations:{addPizza:function(t,i){var e=v()({},i,{id:t.nextPizzaId});t.nextPizzaId+=1,t.pizzas.push(e)},removePizza:function(t,i){t.pizzas=t.pizzas.filter(function(t){return t.id!==i})},updatePizza:function(t,i){var e=t.pizzas.findIndex(function(t){return t.id==i.id});t.pizzas.splice(e,1,i)}},actions:{handleAddPizza:function(t,i){t.state;(0,t.commit)("addPizza",i)},handleRemovePizza:function(t,i){t.state;(0,t.commit)("removePizza",i)},handleUpdatePizza:function(t,i){t.state;(0,t.commit)("updatePizza",i)}}}),f={render:function(){var t=this,i=t.$createElement,e=t._self._c||i;return e("div",{attrs:{id:"form"}},[e("div",{staticClass:"columns"},[e("div",{staticClass:"column is-4 is-offset-4"},[e("h1",{attrs:{id:"size"}},[t._v("Size: "+t._s(t.pizza.name.toUpperCase()))]),t._v(" "),e("h3",{attrs:{id:"base-price"}},[t._v("Base price: $"+t._s(t.pizza.basePrice.toFixed(2)))]),t._v(" "),e("h3",{attrs:{id:"max-toppings"}},[t._v("Max number of toppings: "+t._s(t.maxToppingDisplay))])])]),t._v(" "),e("div",{staticClass:"columns"},[t._m(0),t._v(" "),e("div",{staticClass:"column is-3"},[e("div",{attrs:{id:"toppings"}},t._l(t.pizza.toppings,function(i){return e("div",[t.maxToppingsNotReached||t.chosenToppings.includes(i)?e("input",{directives:[{name:"model",rawName:"v-model",value:t.chosenToppings,expression:"chosenToppings"}],attrs:{type:"checkbox",id:i.topping.name},domProps:{value:i,checked:i.defaultSelected,checked:Array.isArray(t.chosenToppings)?t._i(t.chosenToppings,i)>-1:t.chosenToppings},on:{change:function(e){var n=t.chosenToppings,a=e.target,s=!!a.checked;if(Array.isArray(n)){var o=i,r=t._i(n,o);a.checked?r<0&&(t.chosenToppings=n.concat([o])):r>-1&&(t.chosenToppings=n.slice(0,r).concat(n.slice(r+1)))}else t.chosenToppings=s}}}):e("input",{attrs:{type:"checkbox",disabled:""}}),t._v(" "),e("label",{attrs:{for:i.topping.name}},[t._v(t._s(i.topping.name)+" ($"+t._s(i.topping.price.toFixed(2))+")")])])}))])]),t._v(" "),e("div",{staticClass:"columns"},[e("div",{staticClass:"column is-4 is-offset-4"},[t._v("\n      Quantity: \n      "),e("div",{staticClass:"select"},[e("select",{directives:[{name:"model",rawName:"v-model",value:t.quantity,expression:"quantity"}],on:{change:function(i){var e=Array.prototype.filter.call(i.target.options,function(t){return t.selected}).map(function(t){return"_value"in t?t._value:t.value});t.quantity=i.target.multiple?e:e[0]}}},t._l(t.quantityOptions,function(i){return e("option",{domProps:{value:i}},[t._v(t._s(i))])}))])])]),t._v(" "),e("div",{staticClass:"columns total"},[e("div",{staticClass:"column is-4 is-offset-4"},[t._v("\n      Total: $"+t._s(t.grandTotal.toFixed(2))+"\n    ")])]),t._v(" "),e("div",{staticClass:"columns"},[e("div",{staticClass:"column is-4 is-offset-4"},[e("span",{staticClass:"button is-outlined",on:{click:t.handleResetForm}},[t._v("Go back")]),t._v(" "),e("span",{staticClass:"button is-outlined",on:{click:t.handleSubmitPizza}},[t._v("Add to cart")])])])])},staticRenderFns:[function(){var t=this.$createElement,i=this._self._c||t;return i("div",{staticClass:"column is-3 is-offset-3"},[i("h4",[this._v("Select your toppings:")])])}]};var _=e("VU/8")({name:"Form",props:["pizza","resetForm"],mounted:function(){var t=this;this.pizza.toppings.forEach(function(i){i.defaultSelected&&t.chosenToppings.push(i)})},data:function(){return{chosenToppings:[],quantityOptions:[1,2,3,4,5,6,7,8,9,10],quantity:1}},methods:{handleResetForm:function(){this.resetForm()},handleSubmitPizza:function(){var t={toppings:this.chosenToppings,size:this.pizza.name,pricePerPizza:this.pricePerPizza,quantity:this.quantity};this.$store.dispatch("handleAddPizza",t),this.$router.push({name:"Cart"})}},computed:{maxToppingDisplay:function(){return null===this.pizza.maxToppings?"Unlimited!":this.pizza.maxToppings},maxToppingsNotReached:function(){return null===this.pizza.maxToppings||this.pizza.maxToppings>this.chosenToppings.length},pricePerPizza:function(){var t=this.pizza.basePrice;return(this.chosenToppings.reduce(function(t,i){return t+i.topping.price},0)+t).toFixed(2)},grandTotal:function(){return this.pricePerPizza*this.quantity}}},f,!1,function(t){e("W10C")},"data-v-13445ae6",null).exports,g={render:function(){var t=this,i=t.$createElement,e=t._self._c||i;return e("div",{staticClass:"columns",attrs:{id:"size-menu"}},[e("div",{staticClass:"column is-4 is-offset-4"},[e("h2",[t._v("Choose a size:")]),t._v(" "),e("div",{staticClass:"select"},[e("select",{directives:[{name:"model",rawName:"v-model",value:t.selected,expression:"selected"}],on:{change:function(i){var e=Array.prototype.filter.call(i.target.options,function(t){return t.selected}).map(function(t){return"_value"in t?t._value:t.value});t.selected=i.target.multiple?e:e[0]}}},t._l(t.pizzaSizes,function(i){return e("option",{domProps:{value:i.name}},[t._v(t._s(i.name.toUpperCase()))])})),t._v(" "),e("a",{staticClass:"button is-outlined",on:{click:t.handleSubmitPizza}},[t._v("Submit")])])])])},staticRenderFns:[]};var P={render:function(){var t=this,i=t.$createElement,e=t._self._c||i;return e("div",{staticClass:"columns cart-link"},[e("div",{staticClass:"column is-2 is-offset-10"},[e("router-link",{attrs:{to:"/cart"}},[t._v("("+t._s(t.quantity)+") Cart")])],1)])},staticRenderFns:[]};var C={name:"Home",components:{"size-menu":e("VU/8")({name:"SizeMenu",props:["pizzaSizes","submitPizzaSize"],data:function(){return{selected:"small"}},methods:{handleSubmitPizza:function(){this.submitPizzaSize(this.selected)}}},g,!1,function(t){e("hAmW")},"data-v-3ad4cc05",null).exports,"cart-link":e("VU/8")({name:"CartLink",props:[],computed:{quantity:function(){var t=0;return this.$store.state.pizzas.forEach(function(i){return t+=i.quantity}),t}}},P,!1,function(t){e("PItv")},"data-v-787ee8ca",null).exports,"pizza-form":_},props:["pizzaSizes"],data:function(){return{sizeChosen:!1,selectedSize:"",pizza:{}}},methods:{submitPizzaSize:function(t){this.selectedSize=t,this.pizza=this.pizzaSizes.find(function(i){return i.name==t}),this.sizeChosen=!0},resetForm:function(){this.sizeChosen=!1,this.pizza={}}}},y={render:function(){var t=this,i=t.$createElement,e=t._self._c||i;return e("div",{attrs:{id:"home"}},[e("cart-link"),t._v(" "),t.pizzaSizes?t.sizeChosen?e("div",[e("pizza-form",t._b({},"pizza-form",{pizza:t.pizza,resetForm:t.resetForm},!1))],1):e("div",[e("size-menu",t._b({},"size-menu",{pizzaSizes:t.pizzaSizes,submitPizzaSize:t.submitPizzaSize},!1))],1):e("div",[t._v("\n    Loading...\n  ")])],1)},staticRenderFns:[]};var T=e("VU/8")(C,y,!1,function(t){e("EB8o")},null,null).exports,b={render:function(){var t=this,i=t.$createElement,e=t._self._c||i;return e("tr",[e("td",[t._v(t._s(t.pizza.size))]),t._v(" "),e("td",[e("ul",t._l(t.pizza.toppings,function(i,n){return e("li",[t._v("\n        "+t._s(i.topping.name)+"\n      ")])}))]),t._v(" "),e("td",[e("div",{staticClass:"select"},[e("select",{directives:[{name:"model",rawName:"v-model",value:t.quantity,expression:"quantity"}],on:{change:[function(i){var e=Array.prototype.filter.call(i.target.options,function(t){return t.selected}).map(function(t){return"_value"in t?t._value:t.value});t.quantity=i.target.multiple?e:e[0]},t.handleUpdateQuantity]}},t._l(t.quantityOptions,function(i){return e("option",{domProps:{value:i}},[t._v(t._s(i))])}))])]),t._v(" "),e("td",[t._v("\n    $"+t._s(t.price)+"\n  ")]),t._v(" "),e("td",[e("span",{staticClass:"delete",on:{click:t.handleDelete}},[t._v("X")])])])},staticRenderFns:[]};var x={name:"Cart",components:{"cart-item":e("VU/8")({name:"CartItem",props:["pizza"],data:function(){return{quantity:null,quantityOptions:[1,2,3,4,5,6,7,8,9,10]}},mounted:function(){this.quantity=this.pizza.quantity},filters:{Capitalize:function(t){return t.charAt(0).toUpperCase()+t.slice(1)}},methods:{handleDelete:function(){var t=this.pizza.id;this.$store.dispatch("handleRemovePizza",t)},handleUpdateQuantity:function(){var t={id:this.pizza.id,toppings:this.pizza.toppings,size:this.pizza.size,pricePerPizza:this.pizza.pricePerPizza,quantity:this.quantity};this.$store.dispatch("handleUpdatePizza",t)}},computed:{price:function(){return(this.pizza.pricePerPizza*this.quantity).toFixed(2)}}},b,!1,function(t){e("OQ7o")},null,null).exports},data:function(){return{}},computed:{pizzas:function(){return this.$store.state.pizzas},grandTotal:function(){var t=0;return this.pizzas.forEach(function(i){t+=i.pricePerPizza*i.quantity}),t.toFixed(2)}}},S={render:function(){var t=this,i=t.$createElement,e=t._self._c||i;return e("div",{attrs:{id:"cart"}},[0==t.pizzas.length?e("div",{staticClass:"empty",attrs:{id:"empty"}},[e("div",{staticClass:"columns"},[e("div",{staticClass:"column is-4 is-offset-4"},[e("h1",[t._v("Your cart is empty")]),t._v(" "),e("router-link",{staticClass:"button is-outlined",attrs:{to:"/"}},[t._v("Add pizzas")])],1)])]):e("div",{staticClass:"cart"},[e("div",{staticClass:"columns"},[e("div",{staticClass:"column is-2 is-offset-10 back-link"},[e("router-link",{attrs:{to:"/"}},[t._v("Go back")])],1)]),t._v(" "),t._m(0),t._v(" "),e("div",{staticClass:"columns"},[e("div",{staticClass:"column is-8 is-offset-2"},[e("table",{staticClass:"table is-fullwidth"},[t._m(1),t._v(" "),e("tbody",t._l(t.pizzas,function(i){return e("cart-item",t._b({key:i.id},"cart-item",{pizza:i},!1))}))])])]),t._v(" "),e("div",{staticClass:"columns"},[e("div",{staticClass:"column is-4 is-offset-4"},[e("h3",[t._v("Order Total: $"+t._s(t.grandTotal))])])])])])},staticRenderFns:[function(){var t=this.$createElement,i=this._self._c||t;return i("div",{staticClass:"columns"},[i("div",{staticClass:"column is-4 is-offset-4"},[i("h1",[this._v("Your Cart")])])])},function(){var t=this,i=t.$createElement,e=t._self._c||i;return e("thead",[e("tr",[e("th",[t._v("Size")]),t._v(" "),e("th",[t._v("Toppings")]),t._v(" "),e("th",[t._v("Quantity")]),t._v(" "),e("th",[t._v("Price")]),t._v(" "),e("th",[t._v("Remove")])])])}]};var q=e("VU/8")(x,S,!1,function(t){e("7oJd")},"data-v-f4cac86a",null).exports;n.a.use(z.a);var k=new z.a({routes:[{path:"/",name:"Home",component:T},{path:"/cart",name:"Cart",component:q}]}),F=e("u1/p"),$=e("rp1p"),w=e("+dIz"),U=e("69U5");n.a.config.productionTip=!1;var A=new $.a({uri:"https://core-graphql.dev.waldo.photos/pizza"}),E=new F.a({link:A,cache:new w.a,connectToDevTools:!0}),R=new U.a({defaultClient:E});n.a.use(U.a),new n.a({el:"#app",apolloProvider:R,store:h,router:k,components:{App:l},template:"<App/>"})},OQ7o:function(t,i){},PItv:function(t,i){},PoFP:function(t,i){},UGGT:function(t,i){},W10C:function(t,i){},hAmW:function(t,i){}},["NHnr"]);
//# sourceMappingURL=app.3e01a0da4cf2ec5838e0.js.map
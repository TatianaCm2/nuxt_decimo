(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{354:function(t,e,n){"use strict";n.d(e,"a",function(){return c});var r=n(357),o=n.n(r);o.a.apps.length||o.a.initializeApp({apiKey:"AIzaSyCeGgJP6bHWm7SMKkq0vcB0dZILvFJCg4M",authDomain:"mytenda-f8a93.firebaseapp.com",databaseURL:"https://mytenda-f8a93.firebaseio.com",projectId:"mytenda-f8a93",storageBucket:"mytenda-f8a93.appspot.com",messagingSenderId:"852556635264"});var c=o.a.firestore();o.a},391:function(t,e,n){"use strict";n.r(e);n(69);var r=n(22),o=n(354),c={asyncData:function(){return o.a.collection("productos").get().then(function(t){var e=[];return t.forEach(function(t){e.push(Object(r.a)({id:t.id},t.data()))}),{perPage:10,currentPage:1,productos:e}})},computed:{rows:function(){return this.productos.length}},data:function(){return{name:"",nameState:null,submittedNames:[],fields:["Imagen","nombre","precio","cantidad","acciones"]}},methods:{eliminar:function(t){var e,n=this;this.productos.map(function(n,r){n.id==t&&(e=r)}),o.a.collection("productos").doc(t).delete().then(function(){n.productos.splice(e,1)}),alert("Eliminado")},editar:function(){console.log("logrado")},checkFormValidity:function(){var t=this.$refs.form.checkValidity();return this.nameState=t?"valid":"invalid",t},resetModal:function(){this.name="",this.nameState=null},handleOk:function(t){t.preventDefault(),this.handleSubmit()},handleSubmit:function(){var t=this;this.checkFormValidity()&&(this.submittedNames.push(this.name),this.$nextTick(function(){t.$refs.modal.hide()}))}}},l=n(25),component=Object(l.a)(c,function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"container mt-4"},[t._m(0),t._v(" "),n("div",{staticClass:"row"},[n("div",{staticClass:"col-6"},[n("p",{staticClass:"mt-3"},[t._v("Pagina numero: "+t._s(t.currentPage))])]),t._v(" "),n("div",{staticClass:"col-6 text-right"},[n("b-button",{attrs:{variant:"primary",href:"/productos/crear"}},[t._v("Nuevo")])],1)]),t._v(" "),n("div",{staticClass:"overflow-auto"},[n("div",[n("b-table",{attrs:{responsivestriped:"",hover:"",fields:t.fields,items:t.productos,id:"list_products","per-page":t.perPage,"current-page":t.currentPage,small:""},scopedSlots:t._u([{key:"acciones",fn:function(e){return[n("b-button",{directives:[{name:"b-modal",rawName:"v-b-modal.modal-prevent-closing",modifiers:{"modal-prevent-closing":!0}}],staticClass:"mr-2",attrs:{variant:"info",size:"sm"}},[t._v("Editar")]),t._v(" "),n("b-button",{staticClass:"mr-2",attrs:{size:"sm",variant:"danger",type:"button"},on:{click:function(n){return t.eliminar(e.item.id)}}},[t._v("Eliminar")]),t._v(" "),n("b-modal",{ref:"modal",attrs:{id:"modal-prevent-closing",title:"Submit Your Name"},on:{show:t.resetModal,hidden:t.resetModal,ok:t.handleOk}},[n("form",{ref:"form",on:{submit:function(e){return e.stopPropagation(),e.preventDefault(),t.handleSubmit(e)}}},[n("b-form-group",{attrs:{state:t.nameState,label:"Name","label-for":"name-input","invalid-feedback":"Name is required"}},[n("b-form-input",{attrs:{id:"name-input",state:t.nameState,required:""},model:{value:t.name,callback:function(e){t.name=e},expression:"name"}})],1)],1)])]}}])})],1),t._v(" "),n("b-pagination",{attrs:{"total-rows":t.rows,"per-page":t.perPage,"aria-controls":"list_products"},model:{value:t.currentPage,callback:function(e){t.currentPage=e},expression:"currentPage"}})],1)])},[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"container text-center"},[e("h1",[this._v("Productos existentes")])])}],!1,null,null,null);e.default=component.exports}}]);
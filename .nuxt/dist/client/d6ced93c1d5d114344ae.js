(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{464:function(t,e,r){var content=r(475);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(21).default)("daa1755a",content,!0,{sourceMap:!1})},474:function(t,e,r){"use strict";var o=r(464);r.n(o).a},475:function(t,e,r){(t.exports=r(20)(!1)).push([t.i,"form[data-v-42560174]{widows:600px}",""])},495:function(t,e,r){"use strict";r.r(e);r(38);var o={layout:"admin",middleware:["admin-auth"],data:function(){return{loading:!1,controls:{login:"",password:""},rules:{login:[{required:!0,message:"Введите логин",trigger:"blur"}],password:[{required:!0,message:"Введите пароль",trigger:"blur"},{min:6,message:"Пароль должен быть не менее 6 символов",trigger:"blur"}]}}},methods:{onSubmit:function(){var t=this;this.$refs.form.validate((function(e){var r;return regeneratorRuntime.async((function(o){for(;;)switch(o.prev=o.next){case 0:if(!e){o.next=15;break}return t.loading=!0,o.prev=2,r={login:t.controls.login,password:t.controls.password},o.next=6,regeneratorRuntime.awrap(t.$store.dispatch("auth/createUser",r));case 6:t.$message.success("Hовый пользователь добавлен"),t.controls.login="",t.controls.password="",t.loading=!1,o.next=15;break;case 12:o.prev=12,o.t0=o.catch(2),t.loading=!1;case 15:case"end":return o.stop()}}),null,null,[[2,12]])}))}}},n=(r(474),r(5)),component=Object(n.a)(o,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("el-form",{ref:"form",attrs:{model:t.controls,rules:t.rules},nativeOn:{submit:function(e){return e.preventDefault(),t.onSubmit(e)}}},[r("h2",[t._v("Создать пользователя")]),t._v(" "),r("el-form-item",{attrs:{label:"Логин",prop:"login"}},[r("el-input",{model:{value:t.controls.login,callback:function(e){t.$set(t.controls,"login","string"==typeof e?e.trim():e)},expression:"controls.login"}})],1),t._v(" "),r("div",{staticClass:"mb2"},[r("el-form-item",{attrs:{label:"Пароль",prop:"password"}},[r("el-input",{attrs:{type:"password"},model:{value:t.controls.password,callback:function(e){t.$set(t.controls,"password","string"==typeof e?e.trim():e)},expression:"controls.password"}})],1)],1),t._v(" "),r("el-form-item",[r("el-button",{attrs:{type:"primary","native-type":"submit",round:"",loading:t.loading}},[t._v("\n      Создать\n    ")])],1)],1)}),[],!1,null,"42560174",null);e.default=component.exports}}]);
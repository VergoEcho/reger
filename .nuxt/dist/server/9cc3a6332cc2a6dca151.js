exports.ids=[3],exports.modules={127:function(t,e,o){"use strict";o.r(e);var r={layout:"empty",data:()=>({loading:!1,controls:{login:"",password:""},rules:{login:[{required:!0,message:"Введите логин",trigger:"blur"}],password:[{required:!0,message:"Введите пароль",trigger:"blur"},{min:6,message:"Пароль должен быть не менее 6 символов",trigger:"blur"}]}}),mounted(){const{message:t}=this.$route.query;switch(t){case"login":this.$message.info("Для начала войдите в систему");break;case"logout":this.$message.success("Вы успешно вышли из системы");break;case"session":this.$message.warning("Время сессии истекло, пожалуйста, зайдите заново")}},methods:{onSubmit(){this.$refs.form.validate(async t=>{if(t){this.loading=!0;try{const t={login:this.controls.login,password:this.controls.password};await this.$store.dispatch("auth/login",t),this.$router.push("/admin")}catch(t){this.loading=!1}}})}}},l=o(1),component=Object(l.a)(r,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("el-card",{style:{width:"500px"},attrs:{shadow:"always"}},[o("el-form",{ref:"form",attrs:{model:t.controls,rules:t.rules},nativeOn:{submit:function(e){return e.preventDefault(),t.onSubmit(e)}}},[o("h2",[t._v("Войти в панель администратора")]),t._v(" "),o("el-form-item",{attrs:{label:"Логин",prop:"login"}},[o("el-input",{model:{value:t.controls.login,callback:function(e){t.$set(t.controls,"login","string"==typeof e?e.trim():e)},expression:"controls.login"}})],1),t._v(" "),o("div",{staticClass:"mb2"},[o("el-form-item",{attrs:{label:"Пароль",prop:"password"}},[o("el-input",{attrs:{type:"password"},model:{value:t.controls.password,callback:function(e){t.$set(t.controls,"password","string"==typeof e?e.trim():e)},expression:"controls.password"}})],1)],1),t._v(" "),o("el-form-item",[o("el-button",{attrs:{type:"primary","native-type":"submit",round:"",loading:t.loading}},[t._v("\n        Войти\n      ")])],1)],1)],1)}),[],!1,null,null,"a1e70842");e.default=component.exports}};
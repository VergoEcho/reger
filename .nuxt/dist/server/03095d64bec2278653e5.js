exports.ids=[4],exports.modules={134:function(t,e,r){"use strict";r.r(e);var o={layout:"admin",middleware:["admin-auth"],beforeCreate(){this.$store.dispatch("auth/logout"),this.$router.push("/admin/login?message=logout")}},l=r(1),component=Object(l.a)(o,(function(){var t=this.$createElement;return(this._self._c||t)("div",[this._ssrNode("Очищаем данные")])}),[],!1,null,null,"7f940884");e.default=component.exports}};
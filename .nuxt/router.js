import Vue from 'vue'
import Router from 'vue-router'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _6166ac23 = () => interopDefault(import('../pages/admin/index.vue' /* webpackChunkName: "pages/admin/index" */))
const _17472cba = () => interopDefault(import('../pages/login.vue' /* webpackChunkName: "pages/login" */))
const _d9ed384e = () => interopDefault(import('../pages/users.vue' /* webpackChunkName: "pages/users" */))
const _19b9ba0a = () => interopDefault(import('../pages/admin/create.vue' /* webpackChunkName: "pages/admin/create" */))
const _2b0e4f3a = () => interopDefault(import('../pages/admin/login.vue' /* webpackChunkName: "pages/admin/login" */))
const _f866beee = () => interopDefault(import('../pages/admin/logout.vue' /* webpackChunkName: "pages/admin/logout" */))
const _5055bcba = () => interopDefault(import('../pages/admin/products.vue' /* webpackChunkName: "pages/admin/products" */))
const _b25ef34e = () => interopDefault(import('../pages/admin/users.vue' /* webpackChunkName: "pages/admin/users" */))
const _1c60fd2b = () => interopDefault(import('../pages/admin/product/_id.vue' /* webpackChunkName: "pages/admin/product/_id" */))
const _32ddbaab = () => interopDefault(import('../pages/product/_id.vue' /* webpackChunkName: "pages/product/_id" */))
const _4d9f89a3 = () => interopDefault(import('../pages/index.vue' /* webpackChunkName: "pages/index" */))

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: decodeURI('/'),
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/admin",
    component: _6166ac23,
    name: "admin"
  }, {
    path: "/login",
    component: _17472cba,
    name: "login"
  }, {
    path: "/users",
    component: _d9ed384e,
    name: "users"
  }, {
    path: "/admin/create",
    component: _19b9ba0a,
    name: "admin-create"
  }, {
    path: "/admin/login",
    component: _2b0e4f3a,
    name: "admin-login"
  }, {
    path: "/admin/logout",
    component: _f866beee,
    name: "admin-logout"
  }, {
    path: "/admin/products",
    component: _5055bcba,
    name: "admin-products"
  }, {
    path: "/admin/users",
    component: _b25ef34e,
    name: "admin-users"
  }, {
    path: "/admin/product/:id?",
    component: _1c60fd2b,
    name: "admin-product-id"
  }, {
    path: "/product/:id?",
    component: _32ddbaab,
    name: "product-id"
  }, {
    path: "/",
    component: _4d9f89a3,
    name: "index"
  }],

  fallback: false
}

export function createRouter () {
  return new Router(routerOptions)
}

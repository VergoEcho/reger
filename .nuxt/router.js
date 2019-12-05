import Vue from 'vue'
import Router from 'vue-router'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _29db33a2 = () => interopDefault(import('../pages/admin/index.vue' /* webpackChunkName: "pages/admin/index" */))
const _529a5fc6 = () => interopDefault(import('../pages/login.vue' /* webpackChunkName: "pages/login" */))
const _6346d236 = () => interopDefault(import('../pages/users.vue' /* webpackChunkName: "pages/users" */))
const _c222ab22 = () => interopDefault(import('../pages/admin/create.vue' /* webpackChunkName: "pages/admin/create" */))
const _968bed74 = () => interopDefault(import('../pages/admin/login.vue' /* webpackChunkName: "pages/admin/login" */))
const _2f9827fd = () => interopDefault(import('../pages/admin/logout.vue' /* webpackChunkName: "pages/admin/logout" */))
const _8246c7d2 = () => interopDefault(import('../pages/admin/products.vue' /* webpackChunkName: "pages/admin/products" */))
const _307c4065 = () => interopDefault(import('../pages/admin/users.vue' /* webpackChunkName: "pages/admin/users" */))
const _3ba3fe37 = () => interopDefault(import('../pages/admin/product/_id.vue' /* webpackChunkName: "pages/admin/product/_id" */))
const _86ed1692 = () => interopDefault(import('../pages/product/_id.vue' /* webpackChunkName: "pages/product/_id" */))
const _ee1a86a2 = () => interopDefault(import('../pages/index.vue' /* webpackChunkName: "pages/index" */))

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: decodeURI('/'),
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/admin",
    component: _29db33a2,
    name: "admin"
  }, {
    path: "/login",
    component: _529a5fc6,
    name: "login"
  }, {
    path: "/users",
    component: _6346d236,
    name: "users"
  }, {
    path: "/admin/create",
    component: _c222ab22,
    name: "admin-create"
  }, {
    path: "/admin/login",
    component: _968bed74,
    name: "admin-login"
  }, {
    path: "/admin/logout",
    component: _2f9827fd,
    name: "admin-logout"
  }, {
    path: "/admin/products",
    component: _8246c7d2,
    name: "admin-products"
  }, {
    path: "/admin/users",
    component: _307c4065,
    name: "admin-users"
  }, {
    path: "/admin/product/:id?",
    component: _3ba3fe37,
    name: "admin-product-id"
  }, {
    path: "/product/:id?",
    component: _86ed1692,
    name: "product-id"
  }, {
    path: "/",
    component: _ee1a86a2,
    name: "index"
  }],

  fallback: false
}

export function createRouter () {
  return new Router(routerOptions)
}

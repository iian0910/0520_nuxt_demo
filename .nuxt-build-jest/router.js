import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from 'ufo'
import { interopDefault } from './utils'// eslint-disable-line no-unused-vars
import scrollBehavior from './router.scrollBehavior.js'

const _7f079614 = () => interopDefault(import('..\\pages\\404.vue' /* webpackChunkName: "pages/404" */))
const _9895195e = () => interopDefault(import('..\\pages\\500.vue' /* webpackChunkName: "pages/500" */))
const _59618f98 = () => interopDefault(import('..\\pages\\carousel.vue' /* webpackChunkName: "pages/carousel" */))
const _6a5c7f1c = () => interopDefault(import('..\\pages\\dialog.vue' /* webpackChunkName: "pages/dialog" */))
const _3d69e474 = () => interopDefault(import('..\\pages\\dialog2.vue' /* webpackChunkName: "pages/dialog2" */))
const _1db20f98 = () => interopDefault(import('..\\pages\\form.vue' /* webpackChunkName: "pages/form" */))
const _98e3f650 = () => interopDefault(import('..\\pages\\guide.vue' /* webpackChunkName: "pages/guide" */))
const _2f54535a = () => interopDefault(import('..\\pages\\Home.vue' /* webpackChunkName: "pages/Home" */))
const _2e954d74 = () => interopDefault(import('..\\pages\\post.vue' /* webpackChunkName: "pages/post" */))
const _569bc5a0 = () => interopDefault(import('..\\pages\\step.vue' /* webpackChunkName: "pages/step" */))
const _14e6a3aa = () => interopDefault(import('..\\pages\\posts\\_slug.vue' /* webpackChunkName: "pages/posts/_slug" */))
const _019fd0a4 = () => interopDefault(import('..\\pages\\index.vue' /* webpackChunkName: "pages/index" */))

const emptyFn = () => {}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: '/',
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,
  /* eslint-disable array-bracket-spacing, quotes, quote-props, object-curly-spacing, key-spacing */
  routes: [{
    path: "/404",
    component: _7f079614,
    name: "404"
  }, {
    path: "/500",
    component: _9895195e,
    name: "500"
  }, {
    path: "/carousel",
    component: _59618f98,
    name: "carousel"
  }, {
    path: "/dialog",
    component: _6a5c7f1c,
    name: "dialog"
  }, {
    path: "/dialog2",
    component: _3d69e474,
    name: "dialog2"
  }, {
    path: "/form",
    component: _1db20f98,
    name: "form"
  }, {
    path: "/guide",
    component: _98e3f650,
    name: "guide"
  }, {
    path: "/Home",
    component: _2f54535a,
    name: "Home"
  }, {
    path: "/post",
    component: _2e954d74,
    name: "post"
  }, {
    path: "/step",
    component: _569bc5a0,
    name: "step"
  }, {
    path: "/posts/:slug?",
    component: _14e6a3aa,
    name: "posts-slug"
  }, {
    path: "/",
    component: _019fd0a4,
    name: "index"
  }],
  /* eslint-enable array-bracket-spacing, quotes, quote-props, object-curly-spacing, key-spacing */

  fallback: false
}

export function createRouter (ssrContext, config) {
  const base = (config._app && config._app.basePath) || routerOptions.base
  const router = new Router({ ...routerOptions, base  })

  // TODO: remove in Nuxt 3
  const originalPush = router.push
  router.push = function push (location, onComplete = emptyFn, onAbort) {
    return originalPush.call(this, location, onComplete, onAbort)
  }

  const resolve = router.resolve.bind(router)
  router.resolve = (to, current, append) => {
    if (typeof to === 'string') {
      to = normalizeURL(to)
    }
    return resolve(to, current, append)
  }

  return router
}

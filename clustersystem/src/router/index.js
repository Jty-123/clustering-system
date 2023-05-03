import Vue from 'vue'
import Router from 'vue-router'
import state from '../store/state'
Vue.use(Router)
const route = new Router({
  routes: [
    {
      path: '/login',
      name: 'login',
      component: () => import('../components/Login')
    },
    {
      path: '/',
      name: 'home',
      component: () => import('../components/Layout'),

      children: [
        {
          path: 'hello',
          name: 'hello',
          component: () => import('../components/HelloWorld')
        }
      ]
    }
  ]
})
const blackList = ['/', '/hello']
route.beforeEach(async (to, from, next) => {
  if (state.user.isLogin === false) {
    if (blackList.includes(to.path) === true) {
      next('/login')
    } else {
      next()
    }
  } else {
    next()
  }
})
export default route

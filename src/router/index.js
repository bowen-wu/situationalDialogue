import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Dialog from '@/components/Dialog'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Dialog',
      component: Dialog
    }
  ]
})

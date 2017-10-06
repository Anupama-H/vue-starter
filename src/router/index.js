import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import FormTester from '@/pages/FormTester'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Hello',
      component: Hello
    },
    {
      path: '/formtest',
      name: 'FormTester',
      component: FormTester
    }
  ]
})

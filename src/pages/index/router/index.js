import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import echarts from '@/pages/index/views/echarts/learnEcharts'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },{
      path: '/echarts',
      name: 'echarts',
      component: echarts
    },
  ]
})

import Vue from 'vue'
import Router from 'vue-router'
import Show from "@/components/show/Show"
import Search from '@/components/search/Search'
import Eat from '@/components/eat/Eat'
import Order from '@/components/order/Order'
import User from '@/components/user/User'
import Money from '@/components/user/money/Money'
import Fen from '@/components/user/fen/Fen'



Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      component: Show
    },
    {
      path: '/show',
      name: 'Show',
      component: Show,
      children: [
        {
          path: '/show',
          name: 'Eat',
          component: Eat
        },
        {
          path: '/show/search',
          name: 'Search',
          component: Search
        },
        {
          path: '/show/order',
          name: 'Order',
          component: Order
        },
        {
          path: '/show/user',
          name: 'User',
          component: User,
        },

      ]
    },
    {
      path:'/money',
      name:'Money',
      component:Money
    },{
      path:'/fen',
      name:'Fen',
      component:Fen
    },




  ]
})

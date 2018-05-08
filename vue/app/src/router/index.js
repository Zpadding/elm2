import Vue from 'vue'
import Router from 'vue-router'
import Show from "@/components/show/Show"
import Search from '@/components/search/Search'
import Eat from '@/components/eat/Eat'
import Order from '@/components/order/Order'
import User from '@/components/user/User'
import Money from '@/components/user/money/Money'
import Fen from '@/components/user/fen/Fen'
import Coupon from '@/components/user/coupon/Coupon'
import Ji from '@/components/user/ji/Ji'
import Vip from '@/components/user/vip/Vip'
import Down from '@/components/user/down/Down'
import Account from '@/components/user/account/Account'
import Business from '@/components/business/Business'
import Detail from '@/components/detail/Detail'

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
          path: '',
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
    },{
      path:'/coupon',
      name:'Coupon',
      component:Coupon
    },{
      path:'/ji',
      name:'Ji',
      component:Ji
    },{
      path:"/vip",
      name:"Vip",
      component:Vip
    },{
      path:"/down",
      name:"Down",
      component:Down
    },{
      path:"/account",
      name:"Account",
      component:Account
    },{
      path: '/business',
      name: 'Business',
      component: Business
    },{
      path: '/detail',
      name: "Detail",
      component: Detail
    }




  ]
})

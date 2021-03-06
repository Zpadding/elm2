import Vue from 'vue'
import Router from 'vue-router'
import Show from "@/components/show/Show"
import Gain from "@/components/gain/Gain"
import Enter from "@/components/gain/enter/Enter"
import Forget from "@/components/gain/forget/Forget"
import City from '@/components/gain/city/City'
import Search from '@/components/search/Search'
import Eat from '@/components/eat/Eat'
import Order from '@/components/order/Order'
import User from '@/components/user/User'
import Money from '@/components/user/money/Money'
import Fen from '@/components/user/fen/Fen'
import Coupon from '@/components/user/coupon/Coupon'
import Ji from '@/components/user/ji/Ji'
import Vip from '@/components/user/vip/Vip'
import Pay from '@/components/user/pay/Pay'
import Buy from '@/components/user/buy/Buy'
import Cash from '@/components/user/cash/Cash'
import Down from '@/components/user/down/Down'
import Serve from '@/components/user/serve/Serve'
import Sev from '@/components/user/serve/sev/Sev'

import Account from '@/components/user/account/Account'
import Business from '@/components/business/Business'
import Detail from '@/components/detail/Detail'
import ShopDetail from '@/components/detail/shopDetail/ShopDetail'
import Safe from '@/components/detail/shopDetail/safe/Safe'
import FoodDetail from '@/components/detail/foodDetail/FoodDetail'
import Confirm from '@/components/detail/car/confirm/confirm'
import Choose from '@/components/detail/car/choose/Choose'
import Add from '@/components/detail/car/add/Add'
import SearchAddress from "@/components/detail/car/add/searchAddress/SearchAddress"
import Remark from "@/components/detail/car/confirm/remark/Remark"
import Bill from "@/components/detail/car/confirm/bill/Bill"
import OrderDetail from "@/components/order/orderDetail/OrderDetail";
import EditAddress from "@/components/user/account/editAddress/EditAddress";
import AddAddress from "@/components/user/account/editAddress/addAddress/AddAddress";



Vue.use(Router);

export default new Router({
    routes: [
        {
            path: '/',
            component: Gain
        },
        {
            path: '/gain',
            name: 'Gain',
            component: Gain,
            children: []
        }, {
            path: "/enter",
            name: 'Enter',
            component: Enter
        },
        {
            path: "/forget",
            name: 'Forget',
            component: Forget
        },
        {
            path: "/city",
            name: 'City',
            component: City
        }, {
            path: '/show',
            name: 'Show',
            component: Show,
            children: [{
                path: 'eat',
                name: 'Eat',
                component: Eat
            },
                {
                    path: 'search',
                    name: 'Search',
                    component: Search
                },
                {
                    path: 'order',
                    name: 'Order',
                    component: Order
                },
                {
                    path: 'user',
                    name: 'User',
                    component: User,
                },
            ]
        },
        {
            path: '/money',
            name: 'Money',
            component: Money
        }, {
            path: '/fen',
            name: 'Fen',
            component: Fen
        }, {
            path: '/coupon',
            name: 'Coupon',
            component: Coupon
        }, {
            path: '/ji',
            name: 'Ji',
            component: Ji
        }, {
            path: "/vip",
            name: "Vip",
            component: Vip,
        },
        {
            path: "/pay",
            name: 'Pay',
            component: Pay
        }, {
            path: "/cash",
            name: 'Cash',
            component: Cash
        }, {
            path: "/buy",
            name: 'Buy',
            component: Buy
        }, {
            path: "/down",
            name: "Down",
            component: Down
        }, {
            path: "/account",
            name: "Account",
            component: Account
        }, {
            path: "/serve",
            name: "Serve",
            component: Serve,

        }, {
            path: "/sev",
            name: "Sev",
            component: Sev
        },

        {
            path: '/business',
            name: 'Business',
            component: Business
        }, {
            path: '/detail',
            name: "Detail",
            component: Detail
        }, {
            path: '/shopDetail',
            name: "ShopDetail",
            component: ShopDetail
        }, {
            path: '/safe',
            name: "Safe",
            component: Safe
        }, {
            path: '/foodDetail',
            name: "FoodDetail",
            component: FoodDetail
        }, {
            path: "/confirm",
            name: "Confirm",
            component: Confirm
        }, {
            path: "/choose",
            name: "Choose",
            component: Choose
        }, {
            path: "/add",
            name: "Add",
            component: Add
        }, {
            path: "/searchAddress",
            name: "SearchAddress",
            component: SearchAddress
        }, {
            path: "/remark",
            name: "Remark",
            component: Remark
        }, {
            path: "/bill",
            name: "Bill",
            component: Bill
        }, {
            path: "/orderDetail",
            name: "OrderDetail",
            component: OrderDetail
        }, {
            path: "/editAddress",
            name: "EditAddress",
            component: EditAddress
        }, {
            path: "/addAddress",
            name: "AddAddress",
            component: AddAddress
        }
    ]
})

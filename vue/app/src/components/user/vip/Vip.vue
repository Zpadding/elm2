<template>
    <div id="vip">
        <div id="head">

            <router-link to="/show/user" class="hep1"> <</router-link>
            <span class="hep2">会员中心</span>
        </div>
        <p class="zi">为账户 <span>{{user.username}}</span> 购买会员</p>
        <div class="sp">
            <span class="sp1">会员特权</span>
            <span class="sp2">会员说明 ></span>
        </div>
        <div class="di">
            <p class="pp1"><img :src="w21" alt=""></p>
            <div class="pp2">
                <p class="p1">减免配送费</p>
                <p class="p2">每月减免30单，每天可减免3单，每单最高减4元蜂鸟专送专享</p>
            </div>
        </div>
        <div class="di">
            <p class="pp1"><img :src="w22" alt=""></p>
            <div class="pp2">
                <p class="p1">减免配送费</p>
                <p class="p2">每月减免30单，每天可减免3单，每单最高减4元蜂鸟专送专享</p>
            </div>
        </div>

        <p class="v1"><span>开通会员</span></p>

        <div class="v1"><p class="v11">1个月 <span class="v12">￥20</span></p>
            <router-link to="/pay">
                <button class="v13">购买</button>
            </router-link>
        </div>
        <router-link to="/buy" class="sp">

                <span class="sp1">兑换会员</span>
                <span class="sp2">使用卡号卡密 > </span>

        </router-link>
        <router-link to="/cash" class="sp">

                <span class="sp1">购买记录</span>
                <span class="sp2">开发票 > </span>
        </router-link>
    </div>


</template>

<script>
    import w21 from '../../../assets/w2-1.jpeg'
    import w22 from '../../../assets/w2-2.jpeg'

    export default {
        name: "Vip",
        data() {
            return {
                w21: w21,
                w22: w22,
                user: {}
            }
        },
        created() {
            if (localStorage.user) {
                this.user = JSON.parse(localStorage.user);
            }
        }

    }
</script>

<style scoped>
    #head {
        height: 0.39rem;
        width: 100%;
        background: #3190e8;
        color: #fff;
        overflow: hidden;
    }

    .hep1 {
        float: left;
        padding: 0.1rem;
    }

    .hep2 {

        float: right;
        padding-right: 1.5rem;
        padding-top: 0.1rem;

    }

    .zi {
        margin-bottom: -.1rem;
        height: 0.4rem;
        width: 3rem;
        font-size: 0.06rem;
        color: #666;
        padding-left: 0.14rem;
        line-height: 0.4rem;
    }

    .zi span {
        color: cornflowerblue;
    }

    .sp {
        margin-top: .1rem;
        display: block;
        line-height: 0.4rem;
        height: 0.4rem;
        background: #fff;
        padding-right: .1rem;
    }

    .sp1 {
        float: left;
        margin-left: 0.1rem;
        font-size: 0.15rem;
        color: #333;
    }

    .sp2 {
        float: right;
        font-size: 0.1em;
        color: #999;
    }

    .pp1, img {
        height: 0.36rem;
        width: 0.32rem;
    }

    .di {
        display: flex;
        justify-content: space-around;
        height: 0.6rem;;
        padding: 0.1rem 0;
        background: #fff;
        border-top: .01rem solid #f5f5f5;
    }

    .pp2 {
        width: 2.5rem;

    }

    .p1 {
        font-size: 0.15rem;
        color: #333;
        font-weight: 400;
        float: left;
        line-height: .2rem;
    }

    .p2 {
        font-size: 0.05rem;
        color: #999;
        float: right;
        line-height: .17rem;
    }

    .v1 {
        padding-left: 0.3rem;
        display: flex;
        justify-content: space-between;
        line-height: 0.4rem;
        background-color: #fff;
        height: 0.4rem;
        width: 2.92rem;
    }

    p[class='v1'] {
        margin-top: .1rem;
        border-bottom: .01rem solid #f5f5f5;
    }
    .v12 {
        font-weight: 700;
        color: #f60;
    }

    .v13 {
        margin-right: 0.1rem;
        margin-top: 0.1rem;

        border: 1px solid #f60;
        border-radius: 5px;
        height: 0.23rem;
        width: 0.5rem;
        color: #f60;
    }

</style>

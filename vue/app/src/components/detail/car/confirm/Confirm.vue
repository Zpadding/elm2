<template>
    <div class="confirm">
        <div>
            <div class="nav">
                <div class="back" @click="back"></div>
                <div class="title">确认订单</div>
                <div class="people" @click="user">
                    <svg t="1526180889231" class="user" style="" viewBox="0 0 1024 1024" version="1.1"
                         xmlns="http://www.w3.org/2000/svg" p-id="4302" xmlns:xlink="http://www.w3.org/1999/xlink"
                         width="32" height="32">
                        <path
                            d="M593.066667 499.2C695.466667 465.066667 768 369.066667 768 256c0-140.8-115.2-256-256-256S256 115.2 256 256c0 113.066667 72.533333 209.066667 174.933333 243.2C249.6 535.466667 85.333333 689.066667 85.333333 874.666667c0 83.2 66.133333 149.333333 149.333334 149.333333h554.666666c83.2 0 149.333333-66.133333 149.333334-149.333333 0-185.6-164.266667-339.2-345.6-375.466667zM298.666667 256c0-117.333333 96-213.333333 213.333333-213.333333s213.333333 96 213.333333 213.333333-96 213.333333-213.333333 213.333333-213.333333-96-213.333333-213.333333z m490.666666 725.333333H234.666667c-59.733333 0-106.666667-46.933333-106.666667-106.666666 0-196.266667 202.666667-341.333333 384-341.333334s384 145.066667 384 341.333334c0 59.733333-46.933333 106.666667-106.666667 106.666666z"
                            p-id="4303"></path>
                    </svg>
                </div>
            </div>
            <div @click="choose" class="distance"
                 style="background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADQAAAAGCAYAAACMyr1NAAAAAXNSR0IArs4c6QAAANxJREFUOBFjZICCpoUPWhn+M7rD+OTQjP8ZztQmymfg0/tr95JlDAz/I/GpISTHyMiwj9Ul1hmbOiaQYNfSx6qUegZkDisD01QQjQv837NMD+iYCFzyxIr/Z2asxqWWBSTx49e/LAZGXEqIFP/PcLgiUfYyPtV/GP62/P9PmU3AANnM6hhzApc9TB3zH+sCrbDFpYBYcQ42pmn41P7av8QC6BlffGoIyTEyMv5nYWCuwaeO6TfDv2x8CoiSY/y/syxa9jY+tYx//7fikydGDhggKxhdoi4Ro3bYqAEAknE5DXYMR0IAAAAASUVORK5CYII=) 0 100%  / auto .024rem repeat-x rgb(255, 255, 255)">
                <div class="logo">
                    <svg t="1526304455167" class="dis" style="" viewBox="0 0 1024 1024" version="1.1"
                         xmlns="http://www.w3.org/2000/svg" p-id="2072" xmlns:xlink="http://www.w3.org/1999/xlink"
                         width="32" height="32">
                        <path
                            d="M512.103132 320.120979a106.221743 106.221743 0 1 1-75.507022 31.354611A106.221743 106.221743 0 0 1 512.103132 320.120979m0-63.989002a170.850635 170.850635 0 1 0 120.939214 49.911422A169.570855 169.570855 0 0 0 512.103132 256.131977z"
                            p-id="2073" fill="#1296db"></path>
                        <path
                            d="M805.172761 124.314633a407.609942 407.609942 0 0 0-586.139257 0 431.285873 431.285873 0 0 0 0 599.576948L512.103132 1024l293.069629-300.108419a431.285873 431.285873 0 0 0 0-599.576948z m-44.152411 557.344207l-248.917218 255.956007-248.917217-255.956007a365.377201 365.377201 0 0 1 0-508.712565 346.82039 346.82039 0 0 1 497.834435 0 365.377201 365.377201 0 0 1 0 508.712565z"
                            p-id="2074" fill="#1296db"></path>
                    </svg>

                    <div v-if="!isLogin">
                        <span class="input">请输入收货地址</span>
                    </div>
                    <div v-else>
                        <div class="left">
                            <div class="top">
                                <span>{{location.name}}</span>
                                <span>{{location.sex == 1? '先生': '女士'}}</span>
                                <span>{{location.phone}}</span>
                            </div>
                            <div class="bottom">
                                <span>{{location.tag}}</span>
                                <span>{{location.address_detail}}</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="right"></div>
            </div>
            <div class="time">
                <div class="left">送达时间</div>
                <div class="right">
                    <div class="top">
                        <span>尽快送达 | 预计 13:33</span>
                    </div>
                    <div class="bottom">蜂鸟专送</div>
                </div>
            </div>
            <div class="type">
                <div class="one" @click="show = true">
                    <div class="left">支付方式</div>
                    <div class="right">
                        <span>在线支付</span>
                        <span></span>
                    </div>
                </div>
                <div class="two">
                    <div class="left">红包</div>
                    <div class="right">暂时只在饿了么APP中支持</div>
                </div>
            </div>
            <div class="shop">
                <div class="detail">
                <span class="logo">
                  <img :src="img_path + shop.image_path"></img>
                </span>
                    <span>{{shop.name}}</span>
                </div>
                <ul class="food">
                    <li v-for="food in car">
                        <div class="left">{{food.name}}</div>
                        <div class="right">
                            <div class="quantity">x{{food.quantity}}</div>
                            <div class="price">¥{{food.price}}</div>
                        </div>

                    </li>
                </ul>
                <div class="box">
                    <div class="left">餐盒</div>
                    <div class="right">¥0</div>
                </div>
                <div class="give">
                    <div class="left">配送费</div>
                    <div class="right">¥{{5}}</div>
                </div>
                <div class="order">
                    <div class="left">订单</div>
                    <div class="right">
                        <p>待支付</p>
                        <p>¥{{price+5}}</p>
                    </div>
                </div>
            </div>

            <div class="remark">
                <div class="one" @click="addRemark">
                    <div class="left">订单备注</div>
                    <div class="right">
                        <span>口味、偏好等</span>
                        <span></span>
                    </div>
                </div>
                <div class="two" @click="bill">
                    <div class="left">发票抬头</div>
                    <div class="right">
                        <span>不需要开发票</span>
                        <span></span>
                    </div>
                </div>
            </div>
            <div class="pay">
                <div class="left">待支付 ¥{{price+5}}</div>
                <div class="right" @click="order">确认下单</div>
            </div>
        </div>
        <transition name="fade">
            <div class="mask" v-if="show" @click="show = false"></div>
        </transition>
        <transition name="move">
            <div class="payType" v-if="show" @click="show = false">
                <h4>支付方式</h4>
                <ul>
                    <li>
                        <span class="left">货到付款(商家不支持货到付款)</span>
                        <svg t="1526462116775" class="right" style="" viewBox="0 0 1024 1024" version="1.1"
                             xmlns="http://www.w3.org/2000/svg" p-id="1505" xmlns:xlink="http://www.w3.org/1999/xlink"
                             width="32" height="32">
                            <path
                                d="M0 512C0 229.234759 229.234759 0 512 0s512 229.234759 512 512-229.234759 512-512 512S0 794.765241 0 512z m419.310345 194.630621a35.310345 35.310345 0 0 0 49.399172 1.271172l335.518897-311.931586a35.310345 35.310345 0 0 0-48.075035-51.729655l-309.124413 289.544827-145.125518-149.645241a35.310345 35.310345 0 1 0-50.688 49.169655l168.112552 173.320828z"
                                p-id="1506"></path>
                        </svg>
                    </li>
                    <li>
                        <span class="left active">在线支付</span>
                        <svg t="1526462116775" class="right active" style="" viewBox="0 0 1024 1024" version="1.1"
                             xmlns="http://www.w3.org/2000/svg" p-id="1505" xmlns:xlink="http://www.w3.org/1999/xlink"
                             width="32" height="32">
                            <path
                                d="M0 512C0 229.234759 229.234759 0 512 0s512 229.234759 512 512-229.234759 512-512 512S0 794.765241 0 512z m419.310345 194.630621a35.310345 35.310345 0 0 0 49.399172 1.271172l335.518897-311.931586a35.310345 35.310345 0 0 0-48.075035-51.729655l-309.124413 289.544827-145.125518-149.645241a35.310345 35.310345 0 1 0-50.688 49.169655l168.112552 173.320828z"
                                p-id="1506"></path>
                        </svg>
                    </li>
                </ul>
            </div>
        </transition>
        <transition name="bounce">
            <div v-if="login" id="wit">
                <p class="p">
                    <svg t="1526611683713" class="p1" style="" viewBox="0 0 1024 1024" version="1.1"
                         xmlns="http://www.w3.org/2000/svg" p-id="1686" xmlns:xlink="http://www.w3.org/1999/xlink"
                         width="64" height="64">
                        <path
                            d="M512 0C229.6832 0 0 229.6576 0 512s229.6832 512 512 512 512-229.6832 512-512S794.3168 0 512 0zM512 996.3264c-267.0592 0-484.3264-217.2928-484.3264-484.3264S244.9408 27.6736 512 27.6736 996.3264 244.9408 996.3264 512 779.0592 996.3264 512 996.3264z"
                            p-id="1687"></path>
                        <path
                            d="M512 633.0624c-14.2336 0-25.7536-11.5456-25.7536-25.7536l0-322.816c0-14.2336 11.52-25.7536 25.7536-25.7536 14.2336 0 25.7536 11.5456 25.7536 25.7536l0 322.816C537.7792 621.5168 526.2592 633.0624 512 633.0624z"
                            p-id="1688"></path>
                        <path d="M512 730.8288m-34.4576 0a1.346 1.346 0 1 0 68.9152 0 1.346 1.346 0 1 0-68.9152 0Z"
                              p-id="1689" fill="#f4ea2a"></path>
                    </svg>
                </p>
                <p class="p3">请登录</p>
                <button class="bou1" @click="login = false">确认</button>
            </div>
        </transition>


    </div>
</template>

<script type="text/ecmascript-6">
    import {mapState} from "vuex";

    export default {
        data() {
            return {
                shop: {},
                img_path: "//elm.cangdu.org/img/",
                show: false,
                location: {},
                login: false
            };
        },
        components: {},
        methods: {
            back() {
                this.$router.push({name: "Detail", params: {name: "Confirm"}});
            },
            user() {
                this.$router.push({name: "User"});
            },
            choose() {
                if (localStorage.user) {
                    this.$router.push({name: "Choose"});
                } else {
                    this.login = true;
                }

            },
            addRemark() {
                this.$router.push({name: "Remark"});
            },
            bill() {
                this.$router.push({name: "Bill"});
            },
            order() {
                if (localStorage.user) {
                    let user_id = JSON.parse(localStorage.user).id;
                    let cart_id = JSON.parse(localStorage.shopCar).id;
                    let car = this.car.map(food => {
                        delete food.data;
                        delete food.dom;
                        return food;
                    });
                    let url =
                        this.head_url + `/v1/users/${user_id}/carts/${cart_id}/orders`;
                    let params = {
                        user_id: user_id,
                        cart_id: cart_id,
                        address_id: this.location.id,
                        restaurant_id: +localStorage.id,
                        description: this.remark,
                        entities: [car]
                    };
                    this.$http.post(url, params).then(res => {
                        console.log(res.data);
                    });
                    this.$router.push({name: "Pay"});
                } else {
                    this.login = true;
                }
            }
        },
        created() {
            console.log(this.$route.params);
            if (Object.keys(this.$route.params).length) {
                if (this.$route.params.shop) {
                    this.shop = this.$route.params.shop;
                    localStorage.shop = JSON.stringify(this.shop);
                } else if (this.$route.params.remark) {
                    this.remark = this.$route.params.remark;
                    localStorage.remark = JSON.stringify(this.remark);
                }
            } else {
                this.shop = JSON.parse(localStorage.shop);
                this.remark = JSON.parse(localStorage.remark);
            }
            console.log(this.$route.query);
            if (Object.keys(this.$route.query).length) {
                this.location = this.$route.query;
                localStorage.location = JSON.stringify(this.location);
            } else {
                this.location = JSON.parse(localStorage.location);
            }
        },
        computed: {
            ...mapState(["car", "price", "head_url", "isLogin"])
        }
    };
</script>

<style scoped lang="less">
    .bounce-enter-active {
        animation: bounce-in 0.5s;
    }

    .bounce-leave-active {
        /*animation: bounce-in .5s reverse;*/
    }

    @keyframes bounce-in {
        0% {
            transform: scale(1);
        }
        35% {
            transform: scale(0.8);
        }
        70% {
            transform: scale(1.1);
        }

        100% {
            transform: scale(1);
        }
    }

    /*@keyframes move {*/
    /*from {*/
    /*transform: translateY(2rem);*/
    /*}*/
    /*to {*/
    /*transform: translateY(0);*/
    /*}*/
    /*}*/
    .fade-enter-active,
    .fade-leave-active {
        transition: all 0.3s;
    }

    .fade-enter,
    .fade-leave-to {
        opacity: 0;
    }

    .move-enter-active,
    .move-leave-active {
        transition: all 0.3s;
    }

    .move-enter,
    .move-leave-to {
        opacity: 0;
        transform: translateY(2rem);
    }

    .size(@width, @height) {
        width: @width;
        height: @height;
    }

    .confirm {
        -webkit-font-smoothing: antialiased;
        padding-top: 0.39rem;
        padding-bottom: 0.6rem;
        background-color: #f5f5f5;
        div {
            .nav {
                .size(3.2rem, 0.39rem);
                display: flex;
                justify-content: space-between;
                align-items: center;
                background-color: #3190e8;
                position: fixed;
                left: 0;
                top: 0;
                .back {
                    .size(0.12rem, 0.12rem);
                    border-top: 0.02rem solid white;
                    border-left: 0.02rem solid white;
                    transform: rotate(-45deg);
                    margin-left: 0.1rem;
                }
                .title {
                    font-size: 0.16rem;
                    color: #fff;
                    text-align: center;
                    font-weight: 700;
                }
                .people {
                    .size(0.2rem, 0.2rem);
                    margin-right: 0.1rem;
                    .user {
                        .size(0.2rem, 0.2rem);
                        fill: white;
                    }
                }
            }
            .distance {
                .size(3.2rem, 0.7rem);
                box-sizing: border-box;
                display: flex;
                align-items: center;
                justify-content: space-between;
                padding: 0 0.12rem;

                .logo {
                    .size(1.26rem, 0.4rem);
                    display: flex;
                    align-items: center;
                    .dis {
                        .size(0.16rem, 0.16rem);
                        margin-right: 0.05rem;
                    }
                    div {
                        .input {
                            font-size: 0.14rem;
                            color: #333;
                        }
                    }
                    div {
                        .left {
                            .top {
                                span {
                                    &:first-child {
                                        font-size: 0.16rem;
                                        font-weight: 700;
                                    }
                                }
                            }
                            .bottom {
                                width: 100%;
                                display: flex;
                                align-items: center;
                                margin-top: 0.05rem;
                                span {
                                    &:first-child {
                                        font-size: 0.1rem;
                                        color: #fff;
                                        border-radius: 0.03rem;
                                        background-color: #ff5722;
                                        height: 0.12rem;
                                        line-height: 0.12rem;
                                        padding: 0 0.04rem;
                                        margin-right: 0.06rem;
                                    }
                                    &:last-child {
                                        font-size: 0.11rem;
                                        color: #777;
                                    }
                                }
                            }
                        }
                    }
                }
                .right {
                    .size(0.1rem, 0.1rem);
                    border-top: 0.01rem solid #999;
                    border-right: 0.01rem solid #999;
                    transform: rotate(45deg);
                }
            }
            .time {
                border-left: 0.04rem solid #3190e8;
                min-height: 0.8rem;
                display: flex;
                justify-content: space-between;
                align-items: center;
                background-color: #fff;
                margin-top: 0.08rem;
                padding: 0 0.14rem;
                .left {
                    font-size: 0.16rem;
                    color: #333;
                    font-weight: 700;
                    padding-left: 0.06rem;
                }
                .right {
                    display: flex;
                    flex-direction: column;
                    align-items: flex-end;
                    .top {
                        span {
                            font-size: 0.14rem;
                            color: #3190e8;
                        }
                    }
                    .bottom {
                        font-size: 0.1rem;
                        color: #fff;
                        background-color: #3190e8;
                        width: 0.48rem;
                        margin-top: 0.1rem;
                        text-align: center;
                        border-radius: 0.024rem;
                        padding: 0.02rem;
                    }
                }
            }
            .type {
                .size(3.2rem, 0.825rem);
                box-sizing: border-box;
                background-color: #fff;
                margin-top: 0.08rem;
                padding: 0 0.14rem;
                .one {
                    height: 0.4rem;
                    box-sizing: border-box;
                    line-height: 0.4rem;
                    .left {
                        font-size: 0.14rem;
                        color: #666;
                    }
                    .right {
                        span {
                            &:first-child {
                                font-size: 0.12rem;
                                color: #aaa;
                                width: 1.8rem;
                                display: inline-block;
                                text-align: right;
                                vertical-align: middle;
                            }
                            &:last-child {
                                .size(0.06rem, 0.06rem);
                                display: inline-block;
                                border-top: 0.01rem solid #ccc;
                                border-right: 0.01rem solid #ccc;
                                transform: rotate(45deg);
                            }
                        }
                    }
                }
                .two {
                    .size(2.92rem, 0.4rem);
                    display: flex;
                    justify-content: space-between;
                    border-top: 0.005rem solid #f5f5f5;
                    .left,
                    .right {
                        font-size: 0.12rem;
                        color: #aaa;
                        line-height: 0.4rem;
                    }
                }
            }
            .shop {
                background-color: #fff;
                margin-top: 0.08rem;
                .detail {
                    display: flex;
                    align-items: center;
                    padding: 0.14rem;
                    border-bottom: 0.005rem solid #f5f5f5;
                    .logo {
                        .size(0.24rem, 0.24rem);
                        vertical-align: middle;
                        margin-right: 0.1rem;
                        img {
                            .size(0.24rem, 0.24rem);
                        }
                    }
                    span {
                        &:last-child {
                            font-size: 0.16rem;
                            color: #333;
                        }
                    }
                }
                .food {
                    padding-top: 0.1rem;
                    li {
                        font-size: 0.13rem;
                        color: #666;
                        display: flex;
                        justify-content: space-between;
                        line-height: 0.36rem;
                        padding: 0 0.14rem;
                        .left {
                            width: 2.2rem;
                        }
                        .right {
                            flex: 1;
                            display: flex;
                            justify-content: space-between;
                            align-items: center;
                            .quantity {
                                color: #f60;
                            }
                            .price {
                                font-size: 0.13rem;
                                color: #666;
                            }
                        }
                    }
                }
                .box,
                .give,
                .order {
                    display: flex;
                    justify-content: space-between;
                    line-height: 0.36rem;
                    padding: 0 0.14rem;
                    font-size: 0.13rem;
                    color: #666;
                }
                .order {
                    .right {
                        p {
                            color: #f60;
                        }
                    }
                }
            }
            .remark {
                background-color: #fff;
                margin-top: 0.08rem;
                padding: 0 0.14rem;
                .one {
                    display: flex;
                    justify-content: space-between;
                    line-height: 0.42rem;
                    .left {
                        .size(0.56rem, 0.42rem);
                        font-size: 0.14rem;
                        color: #666;
                        white-space: nowrap;
                    }
                    .right {
                        .size(2.92rem, 0.42rem);
                        span {
                            &:first-child {
                                .size(2.22rem, 0.4rem);
                                font-size: 0.12rem;
                                color: #aaa;
                                display: inline-block;
                                text-align: right;
                                vertical-align: middle;
                            }
                            &:last-child {
                                .size(0.06rem, 0.06rem);
                                display: inline-block;
                                border-top: 0.01rem solid #ccc;
                                border-right: 0.01rem solid #ccc;
                                transform: rotate(45deg);
                            }
                        }
                    }
                }
                .two {
                    display: flex;
                    justify-content: space-between;
                    border-top: 0.005rem solid #f5f5f5;
                    .left {
                        font-size: 0.12rem;
                        color: #666;
                        line-height: 0.4rem;
                    }
                    .right {
                        color: #aaa;
                        font-size: 0.12rem;
                        line-height: 0.4rem;
                        span {
                            &:last-child {
                                .size(0.06rem, 0.06rem);
                                display: inline-block;
                                border-top: 0.01rem solid #ccc;
                                border-right: 0.01rem solid #ccc;
                                transform: rotate(45deg);
                            }
                        }
                    }
                }
            }
            .pay {
                .size(3.2rem, 0.4rem);
                display: flex;
                position: fixed;
                bottom: 0;

                .left,
                .right {
                    line-height: 0.4rem;
                    font-size: 0.15rem;
                    color: #fff;
                }
                .left {
                    background-color: #3c3c3c;
                    flex: 5;
                    padding-left: 0.14rem;
                }
                .right {
                    flex: 2;
                    background-color: #56d176;
                    text-align: center;
                }
            }
        }
        .mask {
            position: fixed;
            top: 0;
            bottom: 0;
            left: 0;
            right: 0;
            background-color: rgba(0, 0, 0, 0.3);
        }
        .payType {
            min-height: 2rem;
            background-color: #fff;
            position: fixed;
            bottom: 0;
            width: 100%;
            h4 {
                background-color: #fafafa;
                font-size: 0.14rem;
                color: #333;
                text-align: center;
                line-height: 0.4rem;
            }
            ul {
                li {
                    display: flex;
                    justify-content: space-between;
                    padding: 0 0.14rem;
                    line-height: 0.5rem;
                    align-items: center;
                    .left {
                        font-size: 0.14rem;
                        color: #ccc;
                    }
                    .right {
                        .size(0.16rem, 0.16rem);
                        fill: #eee;
                    }
                    .active {
                        color: #333;
                        fill: #4cd964;
                    }
                }
            }
        }
        #wit {
            width: 2.4rem;
            border-radius: .05rem;
            background: white;
            margin-left: -1.2rem;
            position: fixed;
            left: 50%;
            top: 50%;
            margin-top: -1.2rem;
            overflow: hidden;
            .p {
                text-align: center;
                margin-bottom: 0.1rem;
                margin-top: 0.1rem;
            }
            .p1 {
                height: 0.6rem;
                width: 0.6rem;
                fill: #f8cb86;
            }
            .p3 {
                font-size: .14rem;
                text-align: center;
                margin: .1rem 0;
            }
            .bou1 {
                height: 0.36rem;
                width: 2.4rem;
                text-align: center;
                background-color: #4cd964;
                color: #fff;
                font-size: .16rem;
                outline: none;
            }
        }
    }
</style>

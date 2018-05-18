<template>
    <div id="User">
        <div id="head">

            <p class="hep1" @click="$router.go(-1)"> < </p>

            <p class="hep2">我的</p>

            <div @click="enterAccount">
                <div class="in">
                    <img :src="es" alt="" class="in1">
                    <div class="in2">

                        <p class="ip" v-if="isLogin">{{user.username}}</p>
                        <p class="ip" v-else>登录/注册</p>

                        <span class="spn">
          <img :src="soy" class="spn1">
          <p class="spn2">暂无手机号</p>

        </span>
                        <p class="spn3"> > </p>
                    </div>
                </div>
            </div>


        </div>
        <div id="boy">


            <router-link to="/money" class="boy1">
                <div class="bou1"><span style="color: #f90">0.00</span> <a>元</a></div>
                <p class="b1">我的余额</p>
            </router-link>
            <router-link to="/coupon" class="boy1">
                <div class="bou2">
                    <span style="color:#ff5f3e">{{3}}</span>个
                </div>
                <p class="b1">我的优惠</p>
            </router-link>

            <router-link to="/fen" class="boy1">
                <div class="bou2">
                    <span style="color:#6ac20b">{{0}}</span>个
                </div>
                <p class="b1">我的积分</p>
            </router-link>
        </div>

        <div class="body">
            <ul class="ulo">
                <li v-for="(content,index) in mess" class="liz" @click="din(index)">
                    <p class="pa"><img :src='content.pag' class="li"></p>
                    <span class="lic"> {{content.wz}} <a class="la"> > </a></span>

                </li>
            </ul>

        </div>


    </div>

</template>

<script>
    import es from "../../assets/w2-3.jpg";
    import soy from "../../assets/手机.png";
    import home from "../../assets/w1-guan.png";
    import user from "../../assets/w1-din.png";
    import ask from "../../assets/w1-3.jpeg";
    import din from "../../assets/w1-din.png";
    import zen from "../../assets/正方形.png";
    import jfn from "../../assets/积分商城.png";
    import {mapState} from "vuex";

    export default {
        name: "User",
        data() {
            return {
                mess: [
                    {pag: din, wz: "我的订单", pic: "#"},
                    {pag: jfn, wz: "积分商城", pic: "#"},
                    {pag: home, wz: "饿了么会员卡", pic: "#"},
                    {pag: zen, wz: "服务中心", pic: "#"},
                    {pag: ask, wz: "下载饿了么APP", pic: "#"}
                ],
                sk: "",
                es: es,
                soy: soy
            };
        },
        created() {
            // this.sk = this.$route.params.mes
            // console.log(this.$route.params.mes.username)

            if (Object.keys(this.$route.params).length) {
                localStorage.user = JSON.stringify(this.$route.params);
                this.$store.commit("user", this.$route.params);
                this.$store.commit("login");
            } else {
                if (localStorage.user) {
                    this.$store.commit("user", JSON.parse(localStorage.user));
                }
            }
        },
        computed: {
            ...mapState(["isLogin", "user"])
        },
        methods: {
            din(index) {
                if (index == 0) {
                    this.$router.push({name: "Order"});
                } else if (index == 1) {
                    this.$router.push({name: "Ji"});
                } else if (index == 2) {
                    this.$router.push({name: "Vip"});
                } else if (index == 3) {
                    this.$router.push({name: "Serve"});
                } else if (index == 4) {
                    this.$router.push({name: "Down"});
                }
            },
            enterAccount() {
                if (this.isLogin) {
                    this.$router.push({name: "Account", params: this.user});
                } else {
                    this.$router.push({name: "Enter"});
                }
            }
        }
    };
</script>

<style scoped>
    #head {
        height: 1.1rem;
        width: 100%;
        background: #3190e8;
        color: #fff;
        overflow: hidden;
    }

    .hep1 {
        float: left;
        padding: 0.15rem;
    }

    .hep2 {
        font-size: 0.17rem;
        height: 0.4rem;
        float: right;
        padding-right: 1.5rem;
        padding-top: 0.1rem;
    }

    .in {
        height: 0.8rem;
        margin-top: 0.5rem;
        width: 2.65rem;
        color: #fff;
    }

    .in1 {
        border-radius: 50%;
        padding-left: 0.1rem;
        height: 0.5rem;
        width: 0.5rem;
        float: left;
    }

    .in2 {
        font-size: 0.15rem;
        float: right;
        padding-top: 0.1rem;
        padding-bottom: 0.3rem;
    }
    .ip {
        font-weight: 700;
        font-size: .16rem;
        color: #fff;
    }
    .spn {
        padding-top: 0.05rem;
        margin-right: 0.05rem;
        overflow: hidden;
        float: left;
    }

    .spn1 {
        height: 0.2rem;
        width: 0.2rem;

        float: left;
    }

    .spn2 {
        margin-top: 0.02rem;
        float: right;
        color: #fff;
        font-size: .12rem;
        color: #fff;
        line-height: .15rem;
    }

    .spn3 {
        float: right;
        margin-left: 0.8rem;
    }

    #boy {
        display: flex;
        justify-content: space-around;
    }

    .boy1 {
        display: inline-block;
        border: .01rem solid white;
        height: 0.8rem;
        width: 1.04rem;
        text-align: center;
        background: #fff;
    }

    .boy1 span {
        font-size: 0.2rem;
        color: #666;
        padding-left: 0.7em;
        display: flex;
    }

    .bou1 {
        display: flex;
        align-items: center;
        margin-top: 0.25rem;
        margin-bottom: 0.1rem;
        color: #666;
    }

    .b1 {
        font-size: 0.15rem;
        color: #666;
        font-weight: 400;
        padding-bottom: 0.04rem;
    }

    .bou2 {
        display: flex;
        align-items: center;
        margin-top: 0.25rem;
        margin-left: 0.28rem;
        margin-bottom: 0.1rem;
    }
    .body {
        margin-top: .08rem;
    }
    .ulo {
        height: 0.36rem;
        width: 100%;
    }

    .liz {
        background: white;
        width: 3.2rem;
        height: .4rem;
        display: flex;
        justify-content: space-between;
        align-items: center;
    }

    .li {
        margin-left: 0.1rem;
        height: 0.15rem;
        width: 0.15rem;
    }

    .pa {
        width: 0.3rem;
        height: 0.3rem;
        display: flex;
        align-items: center;
    }

    .lic {
        display: flex;
        align-items: center;
        font-size: 0.15rem;
        color: #595757;
        font-weight: 400;
        height: 0.3rem;
        width: 2.68rem;
        display: flex;
        justify-content: space-between;
        border-bottom: .01rem solid #f1f1f1;
    }

    .la {
        margin-right: 0.1rem;
    }
</style>

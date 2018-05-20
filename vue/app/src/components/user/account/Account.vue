<template>
    <div id="Account">
        <div id="head">

            <div @click="$router.go(-1)" class="hep1"> <</div>
            <p class="hep2">我的</p>
        </div>
        <div>
            <div class="tou">
                <p class="tou1">头像</p>
                <div><img :src="tou" class="tou2"> <span class="tou3"> > </span></div>
            </div>

        </div>
        <div class="use">
            <p class="us1">用户名</p>
            <p class="us2">
                <span class="name">{{user.username}}</span>
             ></p>

        </div>
        <div class="uz" @click="editAddress"><p class="uz1">收货地址</p>
            <p class="uz2"> ></p></div>
        <p class="sp">账户绑定</p>
        <div class="fou" @click="show=!show">
            <div>
                <div class="fou1">
                    <img :src="soj" alt="" class="fou3">
                    <p class="fou4">手机</p></div>
                <p class="fou2"> > </p>

                <transition name="bounce">
                    <div v-if="!show" id="wit">
                        <p class="p"><img :src="w12" class="p1"></p>
                        <p class="p3">ios用户请前往AppStore下载</p>
                        <div @click="!show">
                            <button class="bou1">确认</button>
                        </div>

                    </div>
                </transition>
            </div>

        </div>
        <p class="sp"> 安全设置 </p>
        <router-link to="/forget">
            <div class="fo">
                <p class="fo1">登录密码 </p>
                <p class="fou2">修改 ></p>
            </div>
        </router-link>



        <div @click="up=true">
            <button class="but">退出登录</button>
        </div>
        <transition name="bounce">
        <div class="big" v-if="up">
            <svg t="1526611683713" class="warning" style="" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="1686" xmlns:xlink="http://www.w3.org/1999/xlink" width="64" height="64"><path d="M512 0C229.6832 0 0 229.6576 0 512s229.6832 512 512 512 512-229.6832 512-512S794.3168 0 512 0zM512 996.3264c-267.0592 0-484.3264-217.2928-484.3264-484.3264S244.9408 27.6736 512 27.6736 996.3264 244.9408 996.3264 512 779.0592 996.3264 512 996.3264z" p-id="1687" ></path><path d="M512 633.0624c-14.2336 0-25.7536-11.5456-25.7536-25.7536l0-322.816c0-14.2336 11.52-25.7536 25.7536-25.7536 14.2336 0 25.7536 11.5456 25.7536 25.7536l0 322.816C537.7792 621.5168 526.2592 633.0624 512 633.0624z" p-id="1688" ></path><path d="M512 730.8288m-34.4576 0a1.346 1.346 0 1 0 68.9152 0 1.346 1.346 0 1 0-68.9152 0Z" p-id="1689"></path></svg>
            <p>是否退出登录</p>

            <div class="bu1">
                <button class="bu2" @click="up=false">再等等</button>

                <button class="bu3" @click="quit">退出登录</button>

            </div>

        </div>
        </transition>
    </div>


</template>

<script>
import w12 from "../../../assets/w1-4.png";
import tou from "../../../assets/w2-3.jpg";
import soj from "../../../assets/w1-shouji.png";
import { mapState } from "vuex";

export default {
  name: "Account",
  data() {
    return {
      w12: w12,
      tou: tou,
      sk: "",
      show: true,
      up: false,
      soj: soj
    };
  },
  created() {
    if (!Object.keys(this.user).length) {
      this.$store.commit("user", localStorage.user);
    }

    console.log(this.user);
    //this.sk = this.$route.params.mes.username;
    //console.log(this.$route.params)
  },
  computed: {
    ...mapState(["user", "head_url"])
  },
  methods: {
    quit() {
      this.up = false;
      this.$store.commit("quit");
      this.$router.push({ name: "User" });
      let url = this.head_url + `/v2/signout`;
      this.$http.get(url).then(res => {
        console.log(res.data);
        delete localStorage["user"];
      });
    },
    editAddress() {
      this.$router.push({ name: "EditAddress" });
    }
  }
};
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
  height: 0.4rem;
  float: right;
  padding-right: 1.5rem;
  padding-top: 0.1rem;
}

.tou {
  margin-top: 0.1rem;
  border-top: 1px solid #ddd;
  overflow: hidden;
  height: 0.62rem;
  background: #fff;
}

.tou1 {
  float: left;
  font-size: 0.15rem;
  margin-top: 0.25rem;
  margin-left: 0.1rem;
}

.tou2 {
  float: right;
  margin-top: 0.16rem;
  margin-right: 0.4rem;
  height: 0.35rem;
  width: 0.35rem;
  border-radius: 50%;
}

.tou3 {
  position: absolute;
  left: 2.9rem;
  top: 0.7rem;
  color: #ddd;
  font-size: 0.25rem;
  display: inline-block;
}

.use {
  border-top: 1px solid #ddd;
  height: 0.4rem;
  padding-right: 0.1rem;
  overflow: hidden;
  background: #fff;
}

.us1 {
  float: left;
  margin-top: 0.15rem;
  font-size: 0.15rem;
  margin-left: 0.1rem;
  color: #333;
  font-weight: 400;
}

.us2 {
  float: right;
  margin-top: 0.07rem;
  margin-left: 0.5rem;
  font-size: 0.2rem;
  color: rgb(216, 216, 216);
}
.us2 .name {
    color: #999;
    text-align: left;
    line-height: .25rem;
    font-size: .14rem;
    margin-right: .04rem;
    font-weight: 100;
}

.uz {
  border-top: 1px solid #ddd;
  height: 0.4rem;
  padding-right: 0.1rem;
  overflow: hidden;
  background: #fff;
}

.uz1 {
  float: left;
  margin-top: 0.15rem;
  font-size: 0.15rem;
  margin-left: 0.1rem;
  color: #333;
  font-weight: 400;
}

.uz2 {
  float: right;
  margin-top: 0.13rem;
  margin-left: 0.5rem;
  font-size: 0.2rem;
  color: #ddd;
}

.sp {
  border-top: 1px solid #ddd;
  padding: 0.1rem;

  font-size: 0.08rem;
}

.fou {
  height: 0.42rem;
  border-top: 1px solid #ddd;
  overflow: hidden;
  background: #fff;
}

.fo {
  height: 0.42rem;
  border-top: 1px solid #ddd;
  border-bottom: 1px solid #ddd;
  overflow: hidden;
  background: #fff;
}

.fou1 {
  margin-top: 0.1rem;
  float: left;
}

.fou2 {
  color: #ddd;
  float: right;
  margin-right: 0.2rem;
  margin-top: 0.1rem;
}

.fou3 {
  height: 0.25rem;
  width: 0.25rem;
  float: left;
  margin-left: 0.1rem;
}

.fou4 {
  float: right;
  margin-top: 0.02rem;
  margin-left: 0.05rem;
}

.fo1 {
  line-height: 0.44rem;
  margin-left: 0.1rem;
  float: left;
  font-size: 0.12rem;
  color: #333;
  font-weight: 500;
}

.but {
  width: 3rem;
  height: 0.3rem;
  background: #d8584a;
  margin-left: 0.1rem;
  margin-top: 0.15rem;
  border-radius: 0.05rem;
  color: #fff;
  border: none;
  outline: none;
}

.big {
  height: 3rem;
  width: 2.9rem;
  text-align: center;
  position: absolute;
  background: #ddd;
  left: 0.15rem;
  top: 1rem;
  overflow: hidden;
  background: #fff;
}

.warning {
  height: 0.9rem;
  width: 0.9rem;
  margin-top: 0.2rem;
  margin-bottom: 0.2rem;
  fill: #f8bb86;
}

.big > p {
  width: 100%;
  font-size: 0.3rem;
  color: #5f5f5f;
  /*margin-left: 0.18rem;*/
}

.bu1 {
  width: 2rem;
  margin-left: 0.5rem;
  margin-top: 0.65rem;
}

.bu2 {
  float: left;
  height: 0.33rem;
  width: 0.8rem;
  background: #c1c1c1;
  border-radius: 5px;
  color: #fff;
}

.bu3 {
  height: 0.33rem;
  float: right;
  width: 0.9rem;
  background: #dd6b55;
  border-radius: 5px;
  color: #fff;
}

.bou1 {
  height: 0.4rem;
  width: 2.4rem;
  text-align: center;
  background-color: #4cd964;
  color: #fff;
}

#wit {
  height: 1.58rem;
  width: 2.4rem;

  background: white;
  margin-left: 0.4rem;
  position: absolute;
  left: 0;
  top: 1.6rem;
  margin-bottom: 0.2rem;
}

.p {
  text-align: center;
  margin-bottom: 0.2rem;
  margin-top: 0.2rem;
}

.p1 {
  height: 0.6rem;
  width: 0.6rem;
}

.p3 {
  text-align: center;
  margin-left: 0.1rem;
}

.bounce-enter-active {
  animation: bounce-in 0.5s;
}

/* .bounce-leave-active { */
/*animation: bounce-in .5s reverse;*/
/* } */

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
</style>

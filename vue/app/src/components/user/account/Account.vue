<template>
  <div id="Account">
    <div id="head">

      <router-link to="/show/user" class="hep1"> <</router-link>
      <p class="hep2">我的</p>
    </div>
    <div>
      <div class="tou">
        <p class="tou1">头像</p>
        <div><img src="../../../assets/w2-3.jpg" class="tou2"> <span class="tou3"> > </span></div>
      </div>

    </div>
    <div class="use">
      <p class="us1">用户名</p>
      <p class="us2">{{sk}} ></p>

    </div>
    <div class="uz"><p class="uz1">我的收货地址</p>
      <p class="uz2"> ></p></div>
    <p class="sp">账户绑定</p>
    <div class="fou" @click="show=!show">
      <div>
        <div class="fou1">
          <img src="../../../assets/w1-4.png" alt="" class="fou3">
          <p class="fou4">手机</p></div>
        <p class="fou2"> > </p>

        <transition name="bounce">
          <div v-if="!show" id="wit">
            <p class="p"><img src="../../../assets/w1-1.png" class="p1"></p>
            <p class="p3">ios用户请前往AppStore下载</p>
            <div @click="!show">
              <button class="bou1">确认</button>
            </div>

          </div>
        </transition>
      </div>

    </div>
    <p class="sp"> 安全设置 </p>
    <router-link to="forger">
    <div class="fo"><p class="fo1">登录密码 </p>
      <p class="fou2">修改 ></p></div>
    </router-link>

    <div @click="up=!up">
      <button class="but">退出登录</button>
    </div >
   <div class="big"  v-if="up">
     <img :src="w12" alt="">
     <p>是否退出登录</p>

    <div class="bu1">
      <button class="bu2">再等等</button>

      <button class="bu3">退出登录</button>
    </div>

   </div>

  </div>


</template>

<script>
  import w12 from "../../../assets/w1-4.png"
  export default {
    name: "Account",
    data() {
      return {
        w12:w12,
        sk: "",
        show: true,
        up:false
      }
    },
    created() {
      this.sk = this.$route.params.mes.username;
      //console.log(this.$route.params)
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
    margin-right: 0.3rem;
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
    width: 3rem;
    overflow: hidden;

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
    margin-top: 0.13rem;
    margin-left: 0.5rem;
    font-size: 0.2rem;
    color: #ddd;
  }

  .uz {

    border-top: 1px solid #ddd;
    height: 0.4rem;
    width: 3rem;
    overflow: hidden;

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
  }

  .fo {
    height: 0.42rem;
    border-top: 1px solid #ddd;
    border-bottom: 1px solid #ddd;
    overflow: hidden;
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
    float: left;
    margin-left: 0.1rem;

  }

  .fou4 {
    float: right;
    margin-top: 0.02rem;
    margin-left: 0.05rem;
  }

  .fo1 {
    margin-left: 0.1rem;
    margin-top: 0.1rem;
    float: left;
  }

  .but {
    width: 3rem;
    height: 0.3rem;
    background: #d8584a;
    margin-left: 0.1rem;
    margin-top: 0.15rem;
    border-radius: 0.05rem;
  }

  .big{
  height: 3rem ;
  width: 2.9rem;
  text-align: center;
  position: absolute;
    background: #ddd;
    left: 0.15rem;
    top: 1rem;
    overflow: hidden;
  }
  .big>img{
    height: 0.9rem;
    width: 0.9rem;
    margin-top: 0.2rem;
    margin-bottom: 0.2rem;

  }
  .big>p{
    width: 100%;
    font-size: 0.3rem;
    color: #5f5f5f;
    /*margin-left: 0.18rem;*/
  }
  .bu1{
    width: 2.0rem;
    margin-left: 0.5rem ;
    margin-top: 0.65rem;

  }
  .bu2{
    float: left;
    height: 0.33rem;
    width: 0.8rem;
    background: #c1c1c1;
    border-radius: 5px;
  }
  .bu3{
    height: 0.33rem;
    float: right;
    width: 0.9rem;
    background:#dd6b55;
    border-radius: 5px;
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
    animation: bounce-in .5s;
  }

  .bounce-leave-active {
    /*animation: bounce-in .5s reverse;*/
  }

  @keyframes bounce-in {
    0% {
      transform: scale(1);
    }
    35% {
      transform: scale(.8);
    }
    70% {
      transform: scale(1.1);
    }

    100% {
      transform: scale(1);
    }
  }


</style>

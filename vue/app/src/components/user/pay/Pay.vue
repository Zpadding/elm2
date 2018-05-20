<template>
<div>
  <div id="head">
    <router-link to="/vip" class="hep1"> <</router-link>
    <span class="hep2">在线支付</span>
  </div>
  <p class="fu">剩余支付时间</p>
  <div class="time">
     <span>{{one}}</span> : <span>{{ minutes}}</span> : <span>{{seconds}} </span>
  </div>




  <div>
    <p class="zi">选择支付方式</p>
  <div class="mai"  @click="show=false">
    <div class="psp"><img :src="zhi" alt=""><p class="zi">支付宝</p> </div>
    <div>
      <img :src="su" alt="" class="im2" v-if="show">
      <img :src="lu" class="hui" v-else>
    </div>


  </div>
    <div class="mai" @click="show=true">
      <div  class="psb"><img :src="wei" alt=""><p class="zi">微信</p> </div>
      <div>
        <img :src="su"  class="im3" v-if="!show">

        <img :src="lu" class="hui" v-else>
      </div>
    </div>
  </div>
  <div @click="png=!png" >
    <button  class="bu">确认支付</button>

    <transition name="bounce">
      <div v-if="!png"  id="wit">
        <p class="p"><img :src="wei" class="p1"> </p>
        <p class="p3">当前环境无法支付，请打开官方APP进行付款</p>
        <button  @click="pay"  class="bou1">确认</button>
      </div>
    </transition>
  </div>


</div>
</template>

<script>
  import zhi from '../../../assets/w1-2.png'
  import wei from '../../../assets/w1-1.png'
  import su from  '../../../assets/w1-su.png'
  import lu from  '../../../assets/w1-lu.png'
    export default {
        name: "Pay",
      data(){
        return {
          zhi:zhi,
          wei:wei,
          su:su,
          lu:lu,
          show: false,
          png:true,
          count: '',
          timer: null,
          one:'00',
          minutes: 15,
          seconds: 0,
        }
      },
    mounted () {
      this.add()
    },
      methods: {
        num: function (n) {
          return n < 10 ? '0' + n : '' + n
        },
        add: function () {
          var _this = this;
          var time = window.setInterval(function () {
            if (_this.seconds === 0 && _this.minutes !== 0) {
              _this.seconds = 59
              _this.minutes -= 1
            } else if (_this.minutes === 0 && _this.seconds === 0) {
              _this.seconds = 0
              window.clearInterval(time)
            } else {
              _this.seconds -= 1
            }
          }, 1000)
        },
        pay() {
          this.$store.commit("isPay", true);
          this.$router.push({name: "Order"});
        }
      },

      watch: {
        second: {
          handler (newVal) {
            this.num(newVal)
          }
        },
        minute: {
          handler (newVal) {
            this.num(newVal)
          }
        }
      },
      computed: {
        second: function () {
          return this.num(this.seconds)
        },
        minute: function () {
          return this.num(this.minutes)
        }

      },


    }
</script>

<style scoped>
  #head {
    height: 0.39rem;
    width: 100%;
    background: #3190e8;
    color: #fff;
    overflow: hidden;
    margin-bottom: 0.15rem;
  }

  .hep1 {
    float: left;
    padding: 0.1rem;
  }

  .hep2 {
    height: 0.4rem;
    float: right;
    padding-right: 1.3rem;
    padding-top: 0.1rem;
  }
  .zi{
    color: #666;
    margin-left: 0.15rem;
    font-size: 0.15rem;

  }

  .mai{
    width: 100%;
    height: 0.68rem;
   overflow: hidden;

  }
  .psp{
    float: left;
    padding-left: 0.2rem;

  }
  .psp>img{
    float: left;
    padding-top: 0.15rem ;
    height: 0.4rem;
    width: 0.4rem;
  }
  .psp>p{
    float: right;
    margin-top: 0.25rem;
    margin-left: 0.1rem;
  }
  .im2{
    margin-right: 0.2rem;
    margin-top: 0.2rem;
    float: right;
    height: 0.2rem;
    width: 0.2rem;
  }
  .im3{
    margin-right: 0.2rem;
    margin-top: 0.2rem;
    float: right;
    height: 0.2rem;
    width: 0.2rem;
   /*background-color: green;*/
  }
  .hui{
    height: 0.2rem;
    width: 0.2rem;
    position: fixed;
    left: 2.8rem;
    margin-top: 0.2rem;
  }
  .psb{
    float: left;
    padding-left: 0.2rem;
  }
  .psb>p{
    float: right;
    margin-top: 0.25rem;
    margin-left: 0.1rem;
  }
  .psb>img{
    float: left;
    padding-top: 0.15rem ;
    height: 0.4rem;
    width: 0.4rem;
  }
  .bu{
    height: 0.36rem;
    width: 2.9rem;
    background-color: #4cd964;
    color: #fff;
    border-radius: 0.1rem;
    margin-left: 0.15rem;
    border: none;
  }
  .fu{
    text-align: center;
    font-size: 0.1rem;
    margin-top: 0.25rem;
  }
  .time{
    text-align: center;
    font-size: 0.3rem;
    margin-bottom: 0.3rem;
    margin-top: 0.1rem;
  }
  #wit{

    height: 1.46rem;
    width: 2.4rem;
    background: white;
    margin-left: 0.4rem;
    position: absolute;
    left: 0;
    top:1.3rem;
    margin-bottom: 0.1rem;
    border-radius: 0.1rem;
  }
  .p{
    text-align: center;
    margin-bottom: 0.2rem;
    margin-top: 0.2rem;
  }
  .p1{
    height: 0.6rem;
    width: 0.6rem;
  }
  .p3{
    text-align: center;
    margin-left: 0.1rem;

  }
  .bou1{
    margin-top: 0.22rem;
    border-radius: 0 0 0.1rem 0.1rem;
    height: 0.36rem;
    width: 2.4rem;
    background-color: #4cd964;
    color:#fff ;
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

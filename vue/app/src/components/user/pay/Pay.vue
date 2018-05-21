<template>
<div>
  <div id="head">
    <div @click="$router.go(-1)" class="hep1"> <</div>
    <span class="hep2">在线支付</span>
  </div>


  <div class="payTime">
  <p class="fu">剩余支付时间</p>
  <div class="time">
     <span>{{one}}</span> : <span>{{ minutes}}</span> : <span>{{seconds}} </span>
  </div>
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
        <p class="p"><svg t="1526611683713" class="p1" style="" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="1686" xmlns:xlink="http://www.w3.org/1999/xlink" width="64" height="64"><path d="M512 0C229.6832 0 0 229.6576 0 512s229.6832 512 512 512 512-229.6832 512-512S794.3168 0 512 0zM512 996.3264c-267.0592 0-484.3264-217.2928-484.3264-484.3264S244.9408 27.6736 512 27.6736 996.3264 244.9408 996.3264 512 779.0592 996.3264 512 996.3264z" p-id="1687" fill="#f8cb86"></path><path d="M512 633.0624c-14.2336 0-25.7536-11.5456-25.7536-25.7536l0-322.816c0-14.2336 11.52-25.7536 25.7536-25.7536 14.2336 0 25.7536 11.5456 25.7536 25.7536l0 322.816C537.7792 621.5168 526.2592 633.0624 512 633.0624z" p-id="1688" fill="#f8cb86"></path><path d="M512 730.8288m-34.4576 0a1.346 1.346 0 1 0 68.9152 0 1.346 1.346 0 1 0-68.9152 0Z" p-id="1689" fill="#f8cb86"></path></svg> </p>
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
  import { mapState } from "vuex";
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
          for (let i = 0; i < this.allFood.length; i++) {
            for (let j = 0; j < this.allFood[i].foods.length; j++) {
              this.allFood[i].foods[j].number = 0;
            }
          }
          localStorage.allFood = JSON.stringify(this.allFood);
          this.$store.commit("car", []);
          localStorage.car = JSON.stringify(this.car);
          this.$store.commit("price", 0);
          localStorage.price = JSON.stringify(this.price);
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
        },
        ...mapState(["allFood", "car", "pirce"])
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
    line-height: .36rem;
  }

  .mai{
    width: 100%;
    height: 0.68rem;
   overflow: hidden;
    background: #fff;
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
    margin-top: .1rem;
  }
  .payTime {
    background: #fff;
  }
  .fu{
    text-align: center;
    font-size: 0.1rem;
    padding-top: 0.4rem;
  }
  .time{
    text-align: center;
    font-size: 0.3rem;
    padding-bottom: 0.3rem;
    padding-top: 0.1rem;
  }
  #wit{

    height: 1.46rem;
    width: 2.4rem;
    background: white;
    margin-left: 0.4rem;
    position: absolute;
    left: 0;
    top:1.45rem;
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
        font-size: .14rem;
    color: #333;
    line-height: .18rem;
    text-align: center;
    margin-top: .16rem;
    padding: 0 .08rem;

  }
  .bou1{
    margin-top: 0.05rem;
    border-radius: 0 0 0.1rem 0.1rem;
    height: 0.36rem;
    width: 2.4rem;
    background-color: #4cd964;
    color:#fff ;
    border: none;
  }
  .bounce-enter-active {
    animation: bounce-in .5s;
  }
  /* .bounce-leave-active { */
    /*animation: bounce-in .5s reverse;*/
  /* } */
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

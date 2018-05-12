<template>
<div>
  <div id="head">
    <router-link to="/gain" class="hep1"> <</router-link>
    <span class="hep2">在线支付</span>
  </div>
  <p class="fu">剩余支付时间</p>
  <div class="time">
     <span>{{one}}</span> : <span>{{ minutes}}</span> : <span>{{seconds}} </span>
  </div>




  <div>
    <p class="zi">选择支付方式</p>
  <div class="mai">
    <div class="psp"><img src="../../../assets/w1-2.png" alt=""><p>支付宝</p> </div>
    <img src="../../../assets/w1-su.png" alt="" class="im2">
  </div>
    <div class="mai">
      <div  class="psb"><img src="../../../assets/w1-1.png" alt=""><p>微信</p> </div>
      <img src="../../../assets/w1-su.png"  class="im3" @click="show=!show">
      <img src="../../../assets/w1-lu.png" alt="" class="hui">
    </div>
  </div>
  <button class="bu">确认支付</button>
</div>
</template>

<script>
    export default {
        name: "Pay",
      data(){
        return {
          show: true,
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
          var _this = this
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
    height: 0.1rem;
    width: 0.1rem;
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

</style>

<template>
<div>
  <div id="head">
    <router-link to="/gain" class="hep1"> <</router-link>
    <span class="hep2">密码登录</span>
  </div>
  <p>剩余支付时间</p>
  <div>
    <p>选择支付方式</p>
  <div class="mai">
    <div class="psp"><img src="../../../assets/w1-2.png" alt=""><p>支付宝</p> </div>
    <img src="../../../assets/w1-lu.png" alt="" class="im2">
  </div>
    <div class="mai">
      <div  class="psb"><img src="../../../assets/w1-1.png" alt=""><p>微信</p> </div>
      <img src="../../../assets/w1-lu.png"  class="im3">
    </div>
  </div>
  <button class="bu">确认支付</button>
</div>
</template>

<script>
    export default {
        name: "Payy"
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
    padding-right: 1.5rem;
    padding-top: 0.1rem;
  }
  .mai{
    width: 100%;
    height: 0.68rem;
   overflow: hidden;
    margin-top: 0.2rem;
  }
  .psp{
    float: left;
    margin-left: 0.2rem;

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
    color: red;
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
</style>

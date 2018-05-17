<template>
<div id="buy">

  <div id="head">
    <router-link to="/vip" class="hep1"> <</router-link>
    <span class="hep2">在线支付</span>
  </div>

  <span>成功兑换后将关联到当前账号：88888</span>

 <div class="inp">
   <input type="text" placeholder="请输入10位卡号" class="in1">

   <input type="text" placeholder="请输入6位卡密" class="in1">
 </div>

  <button class="bb">兑换</button>


    <p class="tis">---温馨提示---</p>
  <div class="tik">
    <p>新兑换的会员服务，权益以[会员说明]为准</p>
    <p>月卡：30次减免配送费</p>
    <p>季卡：90次减免配送费</p>
    <p>年卡：360次减免配送费</p>
    <p>*仅限蜂鸟转送订单，每日最对见面3单。每单最高减免45元(一个月按31天计算)</p>
  </div>
</div>

</template>

<script>
    export default {
        name: "Buy"
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
  .in1{
    height: 0.4rem;
    width: 3.1rem;
    margin-left: 0.1rem;
  }
  .bb{
    height: 0.36rem;
    width: 2.92rem;
    margin-left: 0.15rem;
    border-radius: 0.05rem;
    margin-top: 0.15rem;
  }
  .tis{
    margin-top: 0.3rem;
    text-align: center;
    padding-bottom: 0.2rem;
    color: #aaa ;
    font-size: 0.12rem;

  }

  .tik>p{
    font-size: 0.12rem;
    padding: 0.03rem;
    color: #aaa ;
    margin-left: 0.35rem;
    margin-bottom: 0.01rem;
  }
</style>

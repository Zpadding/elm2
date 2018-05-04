<template>
  <div id="User">
    <div id="head">

      <p class="hep1"> < </p>

      <p class="hep2">我的</p>

      <div class="in">
        <img src="../../assets/w1-4.png" alt="" class="in1">
        <div class="in2">
          <p class="ip">登录/注册</p>
          <span class="spn">
          <img src="../../assets/w1-5.png" class="spn1">
          <p class="spn2">暂无手机号</p>

        </span>
          <p class="spn3"> > </p>
        </div>
      </div>
    </div>
    <div id="boy">


      <router-link to="/money" class="boy1">
        <div class="bou1"><span style="color: #f90">0.00</span> <a>元</a></div>
        <p>我的余额</p>
      </router-link>
      <div class="boy1">
        <div class="bou2">
          <span style="color:#ff5f3e">{{3}}</span>个
        </div>
        <p>我的优惠</p>
      </div>

      <router-link to="/fen" class="boy1">
        <div class="bou2">
          <span style="color:#6ac20b">{{0}}</span>个
        </div>
        <p>我的积分</p>
      </router-link>
    </div>
    <div>
      <ul class="ulo">
        <li v-for="content in mess" class="liz">
          <img :src='content.pag'  class="li">
          <span  class="lic"> {{content.wz}} <a class="la"> > </a></span>

        </li>
      </ul>

    </div>




  </div>

</template>

<script>
  import home from "../../assets/w1-1.png"
  import user from "../../assets/w1-2.png"
  import ask from '../../assets/w1-3.jpeg'
  export default {
    name: "User",
    data (){
      return {
        mess:[
          {pag:home,wz:"我的订单",pic:"#"},
          {pag:user,wz:"积分商城",pic:"#"},
          {pag:ask,wz:"饿了么会员卡",pic:"#"},
          {pag:user,wz:"积分商城",pic:"#"},
          {pag:ask,wz:"饿了么会员卡",pic:"#"},

         ]
      }

    }


    }

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
    padding: 0.1rem;
  }

  .hep2 {
    height: 0.4rem;
    float: right;
    padding-right: 1.5rem;
    padding-top: 0.1rem;
  }

  .in {

    height: 0.8rem;
    margin-top: 0.5rem;
    width: 2.5rem;
  }

  .in1 {
    padding-left: 0.1rem;
    height: 0.5rem;
    width: 0.5rem;
    float: left;
  }

  .in2 {

    float: right;
    padding-top: 0.1rem;
    padding-bottom: 0.3rem;
  }

  .spn {
    padding-top: 0.05rem;
    margin-right: 0.05rem;
    overflow: hidden;
    float: left;
  }

  .spn1 {
    height: 0.15rem;
    width: 0.1rem;
    margin-right: 0.05rem;
    float: left;
  }

  .spn2 {
    float: right;
  }

  .spn3 {
    float: right;
    margin-left: 0.7rem;
  }

  #boy {
    display: flex;
    justify-content: space-around;

  }

  .boy1 {
    border: 1px solid white;
    height: 0.8rem;
    width: 1rem;
    text-align: center;
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
  }

  .bou2 {
    display: flex;
    align-items: center;
    margin-top: 0.25rem;
    margin-left: 0.28rem;
    margin-bottom: 0.1rem;
  }
  .ulo{

    height: 0.36rem;
    width: 100%;
  }

  .li{

    /*margin-left: 0.02em; ;*/
    margin-top: 0.1rem;
    margin-left: 0.1rem;

    height: 0.13rem;
    width: 0.13rem;
  }
  .lic{
    margin-bottom: 0.2rem;
    height: 0.2rem;
    width: 0.86rem;

  }
  .la {
    margin-left: 1.56rem;
  }
</style>

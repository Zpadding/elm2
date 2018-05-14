<template>
  <div class="blue">

    <div class="lan">
      <router-link to="show/user"  class="hp1"> < </router-link>
      <p class="hp2">我的积分</p>

    </div>

    <div class="bods">


      <div class="white">

        <p class="im1">当前积分</p>
        <img :src="wen" alt="" class="im">
        <p class="im2">余额说明</p>
      </div>
      <a class="mon"> 0</a><span class="yus">分</span>


    <div @click="show=!show" >
      <button  class="bou"> 积分兑换商品 </button>

      <transition name="bounce">
        <div v-if="!show"  id="wit">
          <p class="p"><img :src="wei" class="p1"> </p>
          <p class="p3">快去下单赚取积分吧</p class="p3">
          <button   class="bou1">确认</button>
        </div>
      </transition>
    </div>
    </div>
  </div>


</template>

<script>
  import wei from '../../../assets/w1-1.png'
  import wen from '../../../assets/w1-8.png'
    export default {
        name: "Fen",
      data(){
        return{
          show:true,
          wen:wen,
          wei:wei,
        }
      }
    }
</script>

<style scoped>
  .blue{
    height: 1.87rem;
    width: 100%;
    background:#3190e8;
    color: #fff;

  }
  .lan{
    overflow: hidden;
    height: 0.4rem;
  }
  .hp1{
    margin-left: 0.1rem;
    margin-top: 0.1rem;
    float: left;
    height: 0.2rem;
    width: 0.1rem;
  }
  .hp2{
    margin-top: 0.1rem;
    float: right;
    padding-right: 1.45rem;
  }
  .im{
    height: 0.12rem;
    width: 0.12rem;
    margin-right: 0.04rem;
  }
  .bods{
    border: 1px solid yellowgreen;
    height: 1.36rem;
    width: 3.0rem;
    background:#fff;
    margin-left: 0.1rem;

  }
  .white{
    display: flex;
  }
  .im{
    padding-left: 1.36rem;
    margin-top: 0.1rem;
  }
  .im2 {
    margin-top: 0.1rem;
    color: #3190e8;
  }
  .im1{
    margin-left: 0.04rem;
    margin-top: 0.1rem;
    color: #666;
  }
  .mon{
    padding-left: 0.03rem ;
    font-size: 35px;
    color: #333;
  }
  .yus{
    color: #333;
  }


  .bou{
    height: 0.36rem ;
    width: 2.9rem;
    text-align: center;
    background-color: #fe6d47;
    color:#fff;
    margin-left: 0.04rem;
    margin-top: 0.3rem;
  }
  .bou1{

    height: 0.4rem ;
    width: 2.4rem;
    text-align: center;
    background-color: #4cd964;
    color:#fff;

  }
  #wit{

    height: 1.58rem;
    width: 2.4rem;

    background: white;
    margin-left: 0.4rem;
    position: absolute;
    left: 0;
    top:1.6rem;
    margin-bottom: 0.2rem;
  }
  .p{
    text-align: center;
    margin-bottom: 0.1rem;
    margin-top: 0.2rem;
  }
  .p1{
    height: 0.6rem;
    width: 0.6rem;
  }
  .p3{
    color:#333;
    padding: 0.1rem;
    text-align: center;

    margin-top: 0.2rem;

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

<template>
  <div id="down">
    <div id="head">
      <router-link to="/show/user" class="hep1"> <</router-link>
      <span class="hep2">下载</span>
    </div>
    <div class="img">
      <img src="../../../assets/w1-3.jpeg" alt="">
      <p class="el">下载人饿了么APP</p>
    </div>
    <div @click="show=!show" >
      <button  class="bou"> 下载 </button>

      <transition name="bounce">
        <div v-if="!show"  id="wit">
          <p class="p"><img src="../../../assets/w1-1.png" class="p1"> </p>
          <p class="p3">ios用户请前往AppStore下载</p>
          <button   class="bou1">确认</button>
        </div>
      </transition>
    </div>


  </div>
</template>

<script>
    export default {
        name: "Down",
        data(){
          return{
            show:true
          }

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

  .img{
    margin-top: 0.3rem;
    text-align: center;
  }
  .el{
    margin-top: 0.15rem;
    color: #666;
    margin-bottom: 0.2rem;
  }
  .bou{
    height: 0.36rem ;
    width: 2.94rem;
    text-align: center;
    background-color: #4cd964;
    color:#fff;
    margin-left: 0.12rem;
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
    top:1.8rem;
    margin-bottom: 0.2rem;
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

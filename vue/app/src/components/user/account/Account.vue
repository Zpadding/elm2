<template>
    <div id="Account">
      <div id="head">

        <router-link to="/show/user" class="hep1"> < </router-link>
        <p class="hep2">我的</p>
      </div>
      <div>
        <div class="tou">
          <p class="tou1">头像</p>
         <div> <img src="../../../assets/w2-3.jpg" class="tou2"> <span class="tou3"> > </span></div>
        </div>

      </div>
      <div class="use">
        <p class="us1">用户名</p> <p class="us2">{{sk}} ></p>

      </div>
      <div class="use" > <p class="us1">我的收货地址</p><p class="us2"> ></p> </div>
      <p class="sp">账户绑定</p>
      <div class="fou">
        <div>
          <div class="fou1"  @click="show=!show" >
            <img src="../../../assets/w1-5.png" alt="" class="fou3">
            <p  class="fou4">手机</p> </div>
          <p class="fou2"> > </p>

          <transition name="bounce">
            <div  v-if="!show" id="wit">
              <p class="p"><img src="../../../assets/w1-1.png" class="p1"> </p>
              <p class="p3">ios用户请前往AppStore下载</p>
              <div @click="show=!show"><button class="bou1"   >确认</button></div>

            </div>
          </transition>
        </div>

      </div>
      <p class="sp"> 安全设置 </p>

      <div class="fou"><p class="fo1">登录密码 </p > <p class="fou2" >修改 ></p> </div>

      <button class="but">退出登录</button>
    </div>




</template>

<script>
    export default {
        name: "Account",
      data(){
          return{
            sk:"",
            show:true
          }
      },
      created(){
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
  .tou{
    border: 1px solid #666;
    border-left: #666;
    border-right: #666;
    display: flex;
    justify-content: space-around;
    height: 0.62rem ;
  }
  .tou1{
    margin-top: 0.25rem;
    margin-right: 0.5rem;
  }
  .tou2{
   margin-top: 0.16rem;
    margin-left: 1rem;
    height: 0.35rem;
    width: 0.35rem;
    border-radius: 50%;
  }
  .tou3{
    font-size: 0.25rem;
    display: inline-block;
  }
  .use{
    border-bottom: 1px solid #333;
    border-top: 1px solid #595757;
    height: 0.4rem;
    display: flex;
    justify-content: space-around;
  }
  .us1{
    margin-top: 0.15rem;
    font-size: 0.15rem;
    margin-right: 0.8rem;
    color: #333;
    font-weight: 400;
  }
  .us2{
    margin-top: 0.13rem;
    margin-left: 0.8rem;
    font-size: 0.2rem;
  }
  .sp{

    margin: 0.1rem;
    font-size: 0.08rem;
  }
  .fou{
    height:0.42rem;
    border-top: 1px solid #595757;
    border-bottom: 1px solid #595757;
    overflow: hidden;
  }
  .fou1{
    margin-top: 0.1rem;
    float: left;
  }
  .fou2{

    float: right;
    margin-right: 0.2rem;
    margin-top: 0.1rem;
  }
  .fou3{
    float: left;
    margin-left: 0.1rem;

  }
  .fou4{
    float: right;
    margin-top: 0.02rem;
    margin-left: 0.05rem;
  }
  .fo1{
    margin-left: 0.1rem;
    margin-top: 0.1rem;
    float: left;
  }
  .but{
    width: 3rem;
    height: 0.3rem;
    background: #d8584a;
    margin-left: 0.1rem;
    margin-top: 0.15rem;
    border-radius: 0.05rem;
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

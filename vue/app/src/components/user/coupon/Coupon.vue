<template>
    <div id="Coupon">
      <div id="head">

        <router-link to="/show/user" class="hep1"> < </router-link>

        <p class="hep2">我的</p>
      </div>
      <div class="hon">
        <button  class="hon1"  >红包</button>

        <span class="hon2" @click=sq >商家代金券</span>
      </div>
      <div class="suo">
        <span class="im1">有 <a>3</a>个红包即将过期 </span>
       <span>
         <img src="../../../assets/w1-8.png" class="im "  >
         </span>
        <p class="im2">红包说明</p>
      </div>
      <p class="qig">.</p>
      <div class="qan">
        <p class="qig"> ,</p>
        <div class="juan">
          <span class="mon">￥</span>
          <span class="one">1</span>
          <span class="d">.</span>
          <span class="mon1">0</span>
          <p>满20元可用</p>

        </div>
        <div class="juan2">
          <h3>分享红包</h3>
          <p>2015-05-23到期</p>
          <p>限收货手机号为</p>
          <p>13681711254</p>
        </div>
        <div class="mon">剩3日</div>


      </div>



      </div>
</template>

<script>
    export default {
        name: "Coupon",
      data(){
        sq:""
      },
      created(){

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
  .hon{
    display: flex;
    justify-content: space-around;
    height: 0.4rem;

  }
  .hon1{
    height: 0.18rem;
    margin-top: 0.08rem;
    padding-bottom: 0.04rem;
    border-bottom:2px solid red ;

  }
  .hon2{
    margin-top: 0.08rem;
    height: 0.18rem;

    padding-bottom: 0.04rem;
    border-bottom:2px solid red
  }
  .suo{
    display: flex;
    justify-content: space-around;
    height: 0.4rem;
    font-size: 0.12rem;
  }
  .im{
    height: 0.12rem;
    width: 0.12rem;
    padding-left: 1.2rem;
    margin-top: 0.08rem;
  }
  .im1{
    margin-top: 0.08rem;
    margin-left: 0.05rem;
  }
  .im2{
    margin-top: 0.08rem;
    margin-right: 0.02rem;
  }
  .qan{

    height: 1.06rem;
    width: 2.92rem;
    display: flex;

  }
  .qan,p{
    font-size: 0.04rem;
    color: #999;
  }
  .mon{
    color: red;
    font-size: 18px;
    margin-bottom: 0.1rem;

  }
  .mon1{

    color: red;
    font-size: 18px;
    margin-bottom: 0.1rem;
    margin-right: 0.01rem;
  }
  .one{
    color: red;
    font-size: 35px;
  }
  .juan{
    height: 0.68rem ;
    width: 0.7rem ;
    border-right: 2px dashed red;
    margin-right: 0.2rem;
  }
  .juan2{
    /*border: 1px solid red;*/
    height: 0.68rem;
    width: 1.49rem;
    margin-left: 0.2rem;

  }
  .qig{
    background:url("../../../assets/w1-9.png") repeat-x;
    -webkit-background-size: 0.1rem 0.04rem;
    background-size: 0.1rem 0.04rem ;

  }
</style>

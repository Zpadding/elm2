<template>
    <div id="Coupon">
      <div id="head">

        <router-link to="/show/user" class="hep1"> < </router-link>

        <p class="hep2">我的</p>
      </div>
      <div class="hon">
        <span class="hon1">红包</span>

        <span class="hon2">商家代金券</span>
      </div>
      <div class="suo">
        <span class="im1">有 <a>3</a>个红包即将过期 </span>
       <span>
         <img src="../../../assets/w1-8.png" class="im "  >
         </span>
        <p class="im2">红包说明</p>
      </div>
      <div>
        <div class="juan">
          <span>￥1</span>
          <span>1</span>
          <span>.</span>
          <span>0</span>
          <p>满20元可用</p>

        </div>
        <div>
          <h4>分享红包</h4>
          <p>2015-05-23到期</p>
          <p>限收货手机号为</p>
          <p>13681711254</p>
        </div>
        <div>剩3日</div>


      </div>



      </div>
</template>

<script>
    export default {
        name: "Coupon"
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
  .juan{
    height: 1.6rem ;
    width: 2.92em ;
    border: 2px solid ;
  }
</style>

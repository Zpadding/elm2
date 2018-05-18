<template>
  <div id="Coupon">
    <div id="head">

      <router-link to="show/user" class="hep1"> < </router-link>

      <p class="hep2">我的优惠</p>
    </div>
    <div class="hon">
      <span :class="show?'hon1 active':'hon1'" @click="show = true">红包</span>

      <span :class="show?'hon2':'hon2 active'" @click="show = false">商家代金券</span>
    </div>
    <div>
      <div id="zan" v-if="show">
        <div class="suo">
          <span class="im1">有 <a>3</a>个红包即将过期 </span>
          <span>
         <img :src="wen" class="im "  >
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
            <h3 class="h3">分享红包</h3>
            <p>2015-05-23到期</p>
            <p>限收货手机号为</p>
            <p>13681711254</p>
          </div>
          <div class="mom">剩3日</div>
        </div>

        <p class="qig">.</p>
        <div class="qan">
          <p class="qig"> ,</p>
          <div class="juan">
            <span class="mon">￥</span>
            <span class="one">2</span>
            <span class="d">.</span>
            <span class="mon1">0</span>
            <p>满20元可用</p>

          </div>
          <div class="juan2">
            <h3 class="h3">分享红包</h3>
            <p>2015-05-23到期</p>
            <p>限收货手机号为</p>
            <p>13681711254</p>
          </div>
          <div class="mom">剩3日</div>
        </div>
        <p class="qig">.</p>
        <div class="qan">
          <p class="qig"> ,</p>
          <div class="juan">
            <span class="mon">￥</span>
            <span class="one">4</span>
            <span class="d">.</span>
            <span class="mon1">5</span>
            <p>满20元可用</p>

          </div>
          <div class="juan2">
            <h3 class="h3">分享红包</h3>
            <p>2015-05-23到期</p>
            <p>限收货手机号为</p>
            <p>13681711254</p>
          </div>
          <div class="mom">剩3日</div>
        </div>
        <p>限品类：快餐便当，特色菜系，小吃夜宵，甜品饮品，异国料理</p>

        <p class="pp">查看历史红包></p>
        <div class="foot">
          <div><p class="fou1">兑换红包</p> </div>
          <div><p class="fou1">推荐有奖</p></div>

        </div>
      </div>
      <div class="you" v-else>
        <div class="rig"><img :src="wen" alt="">
          <span>商家代金券说明</span>
        </div>
        <div class="cen">
          <img src="../../../assets/下载.png" class="img">
          <p class="p1">无法使用代金券</p>
          <p class="p2">非客户端或客户端版本较低</p>

          <button class="bu">下载或升级客户端</button>
        </div>

      </div>
    </div>


  </div>
</template>

<script>
  import wen from '../../../assets/w1-8.png'
  export default {
    name: "Coupon",
    data(){
      return{
        show:true,
        wen:wen
      }
    }
  }
</script>

<style scoped>

  #Coupon{
    height: 6.68rem;
    overflow-y: hidden;
  }

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
    color: #fff;
    height: 0.4rem;
    float: right;
    padding-right: 1.5rem;
    padding-top: 0.1rem;
      font-size: .16rem;
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
    border-bottom:2px solid #fff ;

  }
  .hon2{
    margin-top: 0.08rem;
    height: 0.18rem;
    padding-bottom: 0.04rem;
    border-bottom:2px solid #fff;
  }
  .active {
    border-bottom-color: #3190e8;
    color: #3190e8;
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
  .mom{
    margin-top: 0.1rem;
    height: 038rem ;
    width: 0.49rem;
    color: red;
    font-size: 15px;
  }
  .mon1{

    color: red;
    font-size: 18px;
    margin-bottom: 0.1rem;
    margin-right: 0.01rem;
  }
  .one{
    color: red;
    font-size: 0.3rem;
  }
  .juan{
    margin-top: 0.1rem;
    margin-left: 0.05rem;
    /*margin-right: 0.05rem;*/
    height: 0.6rem ;
    width: 0.7rem ;
    border-right: 2px dashed #fff;
    margin-right: 0.2rem;
  }
  .juan2{
    margin-top: 0.1rem;
    /*border: 1px solid red;*/
    height: 0.68rem;
    width: 1.49rem;
    margin-left: 0.2rem;
  }
  .h3{
    font-size: 0.18rem;
  }
  .qig{
    background:url("../../../assets/w1-9.png") repeat-x;
    -webkit-background-size: 0.1rem 0.04rem;
    background-size: 0.1rem 0.04rem ;
  }
  .foot{

   display: flex;
    justify-content: space-around;
    position: fixed;
    top: 5.2rem;

  }
  .foot>div{
    font-size: 0.15rem;
    text-align: center;
    border: 1px solid white;
    align-items:center;
    width: 1.58rem;
    height: 0.4rem;
  }
  .fou1{
    font-size: 0.18rem;
    margin-top: 0.1rem;
    color: #595757;
  }
  .pp{
    text-align: center;
    margin-top: 0.75rem;
  }
  .rig{
    text-align: right;
    font-size: 0.1rem;
    margin-right: 0.2rem;
  }
  .rig>img{
    height: 0.12rem;
    width: 0.12rem;
  }
  .cen{
    margin-top: 1.3rem;
    text-align: center;
  }

  .img{
    height: 0.68rem;
    width: 1.2rem;
  }
  .p1{
    font-size: 0.15rem;
    margin: 0.1rem;
    color:#666;
  }
  .p2{
    font-size: 0.1rem;
  }
  .bu{
    width: 1.16rem;
    height: 0.3rem;
    background-color:#56d176 ;
    border-radius:0.02rem ;
    color: white;
    margin: 0.15rem;
  }
</style>

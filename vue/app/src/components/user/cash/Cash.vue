<template>
<div id="cash">
  <div id="head">
    <router-link to="/vip" class="hep1"> <</router-link>
    <span class="hep2">在线支付</span>
  </div>

  <div class="dd">
    <img :src="xia" alt="" class="xia">
    <p class="wz">没有购买记录</p>
  </div>
</div>
</template>

<script>
    import xia from '../../../assets/下载.png'
    export default {
        name: "Cash",
        data(){
            return{
                xia:xia
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
  .dd{
    text-align: center;
    margin-top: 0.5rem;

  }
  .xia{
    height: 1rem;
    width: 1.6rem;
  }
  .wz{
    color: #999;
    font-size: 0.1rem;
  }

</style>

<template>
  <div id="Choose">
    <div id="head">
      <router-link to="/confirm" class="hep1"> <</router-link>
      <span class="hep2">选择地址</span>
    </div>

    <router-link to="/add">
    <div class="ppx"><img :src="jia"> <p>新增收货地址</p></div>
    </router-link>
  </div>


</template>

<script>
  import jia from '../../../../assets/加号.png'
    export default {
        name: "Choose",
      data(){
          return{
            jia:jia,
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
    font-size: 0.15rem;
  }

  .hep2 {
    height: 0.4rem;
    float: right;
    padding-right: 1.3rem;
    padding-top: 0.1rem;
    font-size: 0.15rem;
  }
  .ppx{
    text-align: center;
    position: fixed;
    top: 5.2rem;
    height: 0.5rem;
    width: 100%;
  }
  .ppx>img{
    height: 0.23rem;
    width: 0.23rem;
    text-align: center;

    float: left;
    margin-left: 0.95rem;
    margin-top: 0.15rem;
  }
  .ppx>p{
    margin-right: 0.95rem;
    float: right;
    margin-top: 0.18rem;
    color: #3190e8;
    font-weight: 300;
  }

</style>

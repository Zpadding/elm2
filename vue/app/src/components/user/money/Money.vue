<template>

  <div class="blue">

   <div class="lan">
     <router-link to="show/user"  class="hp1"> < </router-link>
     <p class="hp2">我的余额</p>

   </div>

    <div class="bods">


    <div class="white">

     <p class="im1">当前余额</p>
     <img src="../../../assets/w1-8.png" alt="" class="im">
      <p class="im2">余额说明</p>
    </div>
      <a class="mon"> 0.00</a><span class="yus">元</span>

      <br>
      <button class="bu">提现</button>
      <div>
    </div>
    </div>

  </div>



</template>

<script>
    export default {
        name: "Money",
        mon:"0.00"

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
    height: 0.13rem;
    width: 0.13rem;
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

  .bu{
    margin-top: 0.2rem;
    margin-left: 0.25em ;
    height: 0.4rem;
    width: 2.9rem;
    background: #ccc;
  }


</style>

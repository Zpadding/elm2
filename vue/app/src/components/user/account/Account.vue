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
    </div>
</template>

<script>
    export default {
        name: "Account"
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
</style>

<template>
    <div id="User">
      <div id="head">

        <p class="hep1"> < </p>

        <p class="hep2">我的</p>

      <div >
        <img src="../../assets/w1-4.png" alt="" class="in1">
       <p>登录/注册</p>
        <span><img src="../../assets/w1-5.png" alt="" class="">
          <p>暂无手机号</p>
          <p> > </p>
        </span>
      </div>
      </div>



    </div>

</template>

<script>
    export default {
        name: "User"
    }
</script>

<style scoped>
#head{
  height: 1.5rem;
  width: 100%;
  background: cornflowerblue;
  color: whitesmoke;
  overflow: hidden;
}
  .hep1{
    float: left;
    padding: 0.1rem;
  }
  .hep2{
    float:right;
    padding-right: 1.5rem;
    padding-top: 0.1rem;
  }

  .in1{
    height: 0.5rem;
    width: 0.5rem;
  }
</style>

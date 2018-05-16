<template>
  <div class="Add">
    <div id="head">
      <router-link to="/confirm" class="hep1"> <</router-link>
      <span class="hep2">添加地址</span>
    </div>
      <div class="one">
      <p class="man">联系人</p>


      <p class="put">  <input type="text" placeholder="你的名字" ></p>


    <p class="xu">
        <img :src="su" alt="">
        <img :src="lu" alt="" class="fu">先生
        <img :src="su" alt="">
        <img :src="lu" alt="" class="fu"> 女士
    </p>
      </div>


    <div class="tow">
    <div class="lx"><p class="ly">联系方式</p></div>
     <p class="in1"><input type="text" placeholder="你的手机号">
      <img :src="jia" alt=""></p>
     <p class="in2"> <input type="text" placeholder="备选电话" ></p>
    </div>
      <div class="there">
      <div class="dz"> <p>送餐地址</p> </div>
     <p class="in3"> <input type="text" placeholder="小区/写字楼/学校等"></p>
     <p class="in4"> <input type="text" placeholder="详细地址(如门牌号等)"> </p>
      </div>
      <div class="four">
          <div class="bq"> <p>标签</p> </div>

        <p><input type="text" placeholder="无/家/学校/公司"></p>

      </div>
      <button class="but">确定</button>
  </div>

</template>

<script>
   import jia from  '../../../../assets/加号.png'
  import lu from '../../../../assets/w1-lu.png'
  import su from '../../../../assets/w1-su.png'
    export default {
        name: "Add",
        data(){
          return{
            lu:lu,
            su:su,
            jia:jia,
          }
      }
    }
</script>

<style scoped>
    ::-webkit-input-placeholder{
       font-size: 0.15rem;
    }
  img{
    height: 0.15rem;
    width: 0.15rem;
    font-size: 20px;
  }

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



  .put{
    height: 0.5rem;
    width: 2.08rem;
    float: right;
    margin-right: 0.15rem;
  }
  .man{
    height: 1rem;
    width: 0.8rem;
    float: left;
    margin-left: 0.15rem;
  }

  .xu{
      float: right;
      height: 0.5rem;
      width: 2.08rem;
      margin-right: 0.1rem;
  }
  .one{
      overflow: hidden;
  }
  .tow{
      overflow: hidden;
      width: 2.91rem;
  }

  .lx{
        height: 1rem;
        width:0.83rem ;
        float: left;
      margin-left: 0.2rem;
  }
  .lx>p{
      margin-top: 0.2rem;
  }
  .in1{
      float: right;
      height: 0.5rem;
      width: 1.8rem;
  }
  .in1>img{
        float: right;
      margin-top: 0.2rem;
      height: 0.2rem;
      width: 0.2rem;
  }
  .in1>input{
      float: left;
      margin-top: 0.2rem;
  }
  .in2{
      float: right;
      height: 0.5rem;
      width: 1.8rem;
  }
  .there{
      overflow: hidden;
      width: 3rem;
  }

  .dz{
      height: 0.8rem ;
      width: 1rem;
      float: left;
      margin-top: 0.1rem;
      margin-left: 0.2rem;
  }
    .in3{
        float: right;
        height: 0.5rem;
        width: 1.8rem;
        margin-top: 0.1rem;

    }
    .in4{
        float: right;
        height: 0.5rem;
        width: 1.8rem;

    }
    .four{
        overflow: hidden;


    }
    .bq{
        height: 0.5rem;
        width: 0.83rem;
        float: left;
        margin-left: 0.2rem;
    }
    .in4{
        float: right;
        width: 1.8rem;
        height: 0.5rem;
        margin-right: 0.2rem;
    }
    .but{
        background-color: #4cd964;
        height: 0.36rem ;
        width: 3rem;
        margin-left: 0.1rem;
        border-radius: 0.05rem;
    }
</style>

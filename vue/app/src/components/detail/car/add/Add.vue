<template>
  <div class="Add">
    <div id="head">
      <router-link to="/confirm" class="hep1"> <</router-link>
      <span class="hep2">添加地址</span>
    </div>
    <div class="dob">
      <p class="man">联系人</p>
      <div>
        <input type="text" placeholder="你的名字" class="put">
        <img :src="lu" alt=""> <img :src="su" alt=""> 先生
        <img :src="su" alt=""> <img :src="lu" alt="">女士
      </div>
    </div>
    <br>
    <div><p>联系电话</p>
      <input type="text" placeholder="你的手机号" >
      <input type="text" placeholder="备选电话">
    </div>
    <div>
      <p>送餐地址</p>
      <input type="text" placeholder="小区/写字楼/学校等" class="put">
      <input type="text" placeholder="详细地址(如门牌号等)" class="put">

      <p>标签</p>
      <input type="text" placeholder="无/家/学校/公司" class="put">
    </div>
      <button>确定</button>
  </div>

</template>

<script>
  import lu from '../../../../assets/w1-lu.png'
  import su from '../../../../assets/w1-su.png'
    export default {
        name: "Add",
        data(){
          return{
            lu:lu,
            su:su,
          }
      }
    }
</script>

<style scoped>
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
  .dob{

  }
</style>

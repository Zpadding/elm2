<template>
  <div id="City">
    <div id="head">
      <router-link to="/gain" class="hep1"> <</router-link>
      <span class="hep2" v-model="city_id">{{sa}}</span>
      <router-link to="/gain" class="hep3">切换城市</router-link>
    </div>
    <div class="da">
      <input type="text" placeholder="输入学习，商业楼，地址" class="su" v-model="keyword">

      <button class="tj" v-model="cty">提交</button>
     <p class="p"> <span >搜索历史</span></p>


    </div>

  </div>


</template>

<script>
    export default {
        name: "City",
      data(){
          return{
            sa:``,
            cty:``,
            city_id:'',
            keyword:``

          }
      },
      created(){
       this.sa= this.$route.params.id;

          let url= "http://cangdu.org:8001/v1/pois";
          this.$http.get(url).then(res=>{this.cty =res.data.cty
            console.log(res.data)}

          )
      }
    }
</script>

<style scoped>
  #City{
    width: 3.2rem;
    height: 5.68rem;
    overflow: hidden;
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
    height: 0.4rem;
    float: right;
    padding-right: 1.5rem;
    padding-top: 0.1rem;
  }
  .hep3{
    font-size: 0.05rem;
    color: #fff;
    position: absolute;
    left: 2.5rem;
    top: 0.14rem;
  }
  .da{
    margin-top: 0.2rem;
    border: 1px solid #e4e4e4;
    height: 0.86rem;
  }
  .su{
    margin-top: 0.1rem;
    margin-bottom: 0.1rem;
    margin-left: 0.2rem;
    width: 2.88rem;
    height: 0.28rem;
  }
  .tj{
    width: 2.88rem;
    height: 0.28rem;
   background-color: #3190e8;
    border-radius: 5px;
    margin-left: 0.2rem;
  }
  .p{
    margin-top: 0.1rem;
    border: 1px solid #e4e4e4;
    width: 100%;
    font-size: 0.05rem;
  }
  .p,span{
    padding-left: 0.1rem ;
  }


</style>

<template>
  <div id="Gain">
    <div class="head">
      <p class="hep1">ele.me</p>
      <router-link to="/enter" class="hep2">注册/登录</router-link>
    </div>

    <div class="che"> <p>当前定位城市：<span class="che1">定位不准时,请在城市列表选择</span> </p></div>

    <div class="huo" >
      <li @click="din(guessCity.name)">
      <p  class="huo1">{{guessCity.name}}</p> <span class="huo2">  > </span></li>
    </div>

    <div class="sp">
     <p class="sp1">热门城市</p>
    </div>

      <div class="rr">
      <li  v-for="(hot) in hotCity" class="rl" @click="din(hot.name)">
        <p class="rm">{{hot.name}}</p></li>
      </div>
    <div v-for="(value, key) in groupCity">
    <div class="sa">{{key}}
      <span class="sp3">（按照字母排序）</span>
    </div>

    <div class="rr">
      <li  v-for="(group) in value" class="rl" @click="din(group.name)">
        <p class="rn">{{group.name}}</p></li>
    </div>

    </div>


  </div>


</template>

<script>
    export default {
        name: "Gain",
      data() {
          return {
            hotCity: [],
            groupCity:[],
            guessCity:[],
            id:[]

          }
      },
        created(){

          let url2 = "http://cangdu.org:8001/v1/cities?type=guess";
          this.$http.get(url2).then(res=>{
            console.log(res.data);
            this.guessCity = res.data;
          })
          let url = "http://cangdu.org:8001/v1/cities?type=hot";
          this.$http.get(url).then(res=>{
            console.log(res.data);
            this.hotCity = res.data;

          })
          let url1 = "http://cangdu.org:8001/v1/cities?type=group";
          this.$http.get(url1).then(res=>{
            console.log(res.data);
            this.groupCity = objKeySort(res.data);
          })
         let ask = "http://cangdu.org:8001/v1/cities/1";
          this.$http.get(ask).then(res=>{
            console.log(res.data)
          })
        },


      methods: {
          din(id) {
            this.$router.push({
              name:"City",params:{id:id}
            })
          }
      }
    }
    function objKeySort(obj) {
      var newkey = Object.keys(obj).sort();
      var newObj = {};
      for (var i = 0; i < newkey.length; i++) {
        newObj[newkey[i]] = obj[newkey[i]];
      }
      return newObj;
    }

</script>

<style scoped>


  .head {
    height: 0.39rem;
    width: 100%;
    background: #3190e8;
    color: #fff;
    overflow: hidden;
  }

  .hep1 {
    float: left;
    padding: 0.1rem;
    font-size: 0.11rem;


  }

  .hep2 {
    color: #fff;
    float: right;
    padding-right: 0.3rem;
    padding-top: 0.1rem;
    font-size: 0.15rem;
  }
  .che{
    margin-top: 0.18rem;
    margin-left: 0.05rem;
    font-size: 0.1rem;
    font-weight: 900;
  }
  .che1{
    margin-left: 0.5rem;
  }
  .huo{
    padding-bottom: 0.08rem;
    margin-top: 0.08rem;
    border-bottom: #e4e4e4 0.01rem solid;
    border-top:#e4e4e4 0.01rem solid;
    height:0.36rem ;
    overflow: hidden ;
  }
  .huo1{
    color: #3190e8;
    padding-top: 0.08rem;
    float: left;
    margin-left: 0.2rem;
    font-size: 0.15rem;

  }
  .huo2{
    padding-top: 0.08rem;
    float: right;
    margin-right: 0.2rem;
  }
  .sp{
    border: 1px solid #e4e4e4;
    margin-left: 0.2rem;
    height: 0.32rem;
    line-height: 0.2rem;
  }
  .sp1{
    font-size: 0.11rem;
    margin-top: 0.06rem;
  }
  .rr{
    box-sizing: border-box;

    width: 3.17rem;

  }
  .rm{
    font-size: 0.13rem;
    color: #3190e8;
    text-align: center;
    margin-top: 0.1rem;

  }
  .rl {
    display: inline-block;
    border-left: 0.0002rem solid #e4e4e4;
    border-top: 0.0002rem solid #e4e4e4;
    border-right: 0.0001em solid #e4e4e4 ;
    border-bottom: 0.0001rem solid #e4e4e4;

    height: 0.35rem;
    width: 0.792rem;
    font-size: 0.03rem;



  }
  .sa{
    border: 1px solid #e4e4e4;
    margin-left: 0.2rem;
    height: 0.32rem;
    line-height: 0.3rem;

  }

  .sp3{
    margin-top: 0.4rem;
  }
  .rn{
    color: #666;
    font-size: 0.13rem;
    text-align: center;
    margin-top: 0.1rem;
    overflow: hidden;
    text-overflow:ellipsis ;
    white-space: nowrap;
  }
</style>

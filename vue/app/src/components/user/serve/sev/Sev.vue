<template>
  <div id="Sev">
    <div id="head">
      <router-link to="/serve" class="hep1"> <</router-link>
      <span class="hep2">{{$route.query.name}}</span>
    </div>
      <p class="sv">{{$route.query.des}}</p>
  </div>
</template>

<script>
    export default {
        name: "Sev",
        data(){
          return{
            num:this.$route.query.id
          }
        },
      created(){
          console.log(this.$route.query.id)
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
    font-size: 0.15rem;
  }
  .sv{

    color: #333;
    font-weight: 200;
    font-size: 0.2rem;

  }

</style>

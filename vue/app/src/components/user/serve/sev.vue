<template>
  <div class="head_top">
    <router-link to="/service"><img src="../../../../src/assets/返回-2.png" alt="" id="fh"></router-link>

    <span class="qysm">{{$route.query.name}}</span>
    <p class="spvip">{{$route.query.des}}</p>

  </div>
</template>

<script>

  export default {
    name: "QuestionDetail",
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
  .head_top {
    width: 100%;
    height: 1.95rem;
    background: #3190e8;
  }
  #fh{
    width: 0.8rem;
    margin-left: 0.4rem;
    margin-top: 0.5rem;
  }

  .qysm{
    font-size: .8rem;
    color: #fff;
    margin-left: 3.5rem;
  }
  .spvip{
    margin-top: 1rem;
  }
</style>

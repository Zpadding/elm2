<template>
  <div id="Sev">
    <div id="head">
      <router-link to="/serve" class="hep1"> <</router-link>
      <span class="hep2">{{$route.params.name}}</span>
    </div>
      <div class="body">
          <h2 v-html="this.$route.params.detail"></h2>
      </div>
  </div>
</template>

<script>
    export default {
        name: "Sev"
    }
</script>

<style scoped>
  #head {
    height: 0.39rem;
    width: 100%;
    background: #3190e8;
    color: #fff;
    overflow: hidden;
    margin-bottom: 0.15rem;-webkit-font-smoothing: antialiased;
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
  .body {
      padding: 0 .14rem;
      color: #666;
      padding-bottom: .4rem;
  }
    h2 {
        font-size: .2rem;
        font-weight: 400;
        line-height: .25rem;
    }


</style>

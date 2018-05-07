<template>
  <div class="business">
      <div class="nav">
        <router-link to="/show" class="left" :style="left"></router-link>
        <div class="middle">{{mes.title}}</div>
        <div class="right"></div>
      </div> 
      <Selection></Selection>
      <Shop></Shop> 
  </div>
</template>

<script type="text/ecmascript-6">
import Shop from '../eat/shop/Shop';
import Selection from './selection/Selection';
export default {
  data() {
    return {
        left: {
            background: "url("+require("../../assets/z-1.jpg")+") no-repeat",
            backgroundSize: "100% 100%"
        },
        mes: null
    }
  },
  components: {
      Shop,
      Selection
  },
  created() {
      if (Object.keys(this.$route.params).length) {
        this.mes = this.$route.params;
        localStorage.classify = JSON.stringify(this.$route.params);
      } else {
        this.mes = JSON.parse(localStorage.classify);
      }
      
  }
}
</script>

<style scoped>
.business {
    padding-top: .4rem;
}
.nav {
    width: 3.2rem;
    height: 0.4rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color:#3190e8;
    z-index: 1;
    position: fixed;
    top: 0;
    left: 0; 
}
.left {
    width: 0.18rem;
    height: 0.18rem;
    margin-left: .1rem;
}
.middle {
    width: .64rem;
    height: 0.22rem;
    line-height: .22rem;
    color: white;
    font-weight: 400;
}
</style>

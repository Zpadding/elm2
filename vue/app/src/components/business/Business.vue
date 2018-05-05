<template>
  <div class="business">
      <div class="nav">
        <div class="left" :style="left"></div>
        <div class="middle">甜点饮品</div>
        <div class="right"></div>
      </div> 
      <Selection></Selection>
      <Shop></Shop> 
  </div>
</template>

<script type="text/ecmascript-6">
import Shop from '../eat/shop/Shop'
import Selection from './selection/Selection'
export default {
  data() {
    return {
        left: {
            background: "url("+require("../../assets/z-1.jpg")+") no-repeat",
            backgroundSize: "100% 100%"
        }
    }
  },
  components: {
      Shop,
      Selection
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

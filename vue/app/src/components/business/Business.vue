<template>
  <div class="business">
      <div class="nav">
        <div class="left" @click="back"></div>
        <div class="middle">{{mes.title}}</div>
        <div class="right"></div>
      </div>
      <Selection></Selection>
      <Shop></Shop>
  </div>
</template>

<script type="text/ecmascript-6">
import Shop from "../eat/shop/Shop";
import Selection from "./selection/Selection";
export default {
  data() {
    return {
      mes: {}
    };
  },
  components: {
    Shop,
    Selection
  },
  created() {
    if (this.$route.params.mes) {
      this.mes = this.$route.params.mes;
      localStorage.classify = JSON.stringify(this.$route.params.mes);
    } else {
      this.mes = JSON.parse(localStorage.classify);
    }
  },
  methods: {
    back() {
      this.$router.go(-1);
    }
  }
};
</script>

<style scoped>
.business {
  padding-top: 0.4rem;
}
.nav {
  width: 3.2rem;
  height: 0.4rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #3190e8;
  z-index: 1;
  position: fixed;
  top: 0;
  left: 0;
}
.left {
  width: 0.1rem;
  height: 0.1rem;
  margin-left: 0.1rem;
  border-top: 0.015rem solid white;
  border-left: 0.015rem solid white;
  transform: rotate(-45deg);
}
.middle {
  width: 0.64rem;
  height: 0.22rem;
  line-height: 0.22rem;
  color: white;
  font-weight: 400;
    text-align: center;
}
.right {
  width: 0.2rem;
}
</style>

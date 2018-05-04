<template>
  <div class="nav">
      <div class="left" :style="left"></div>
      <div class="middle">中原区秦岭路办事处</div>
      <div class="right" :style="right"></div>
  </div>
</template>

<script type="text/ecmascript-6">
export default {
  data() {
    return {
        left: {
            background: "url("+require("../../../assets/z-1.jpg")+") no-repeat",
            backgroundSize: "100% 100%"
        },
        right: {
            background: "url("+require("../../../assets/z-2.jpg")+") no-repeat",
            backgroundSize: "100% 100%"
        }
    }
  },
  components: {

  }
}
</script>

<style scoped>
.nav {
    width: 3.2rem;
    height: 0.4rem;
    display: flex;
    justify-content: space-around;
    align-items: center;
    background-color:#3190e8;
    position: fixed;
    top: 0;
    left: 0;
}
.left {
    width: 0.18rem;
    height: 0.18rem;
}
.middle {
    width: 1.6rem;
    height: 0.22rem;
    line-height: .22rem;
    color: white;
    font-weight: 400;
}
.right {
    width: 0.18rem;
    height: 0.18rem;
}
</style>

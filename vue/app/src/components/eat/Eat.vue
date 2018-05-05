<template>
    <div>
      <!--<h1>美食页面</h1>-->
        <Nav></Nav>
        <Classify></Classify>
        <div class="head">
            <img class="logo" :src="logo" alt="">
            <span>附近商家</span>
          </div>
        <Shop></Shop>
    </div>
</template>

<script>
    import Nav from "./nav/Nav";
    import Classify from "./classify/Classify";
    import Shop from './shop/Shop'
    import logo from '../../assets/z-3.jpg'
    export default {
        name: "Eat",
        data () {
            return {
                logo: logo
            }
        },
        components: {
            Nav,
            Classify,
            Shop
        }
    }
</script>

<style scoped>
.head {
  width: 3.2rem;
  height: 0.33rem;
  display: flex;
  align-items: center;
  border-top: 0.01rem solid #e3e3e3;
  margin-top: 0.08rem;
}
.head .logo {
  width: 0.12rem;
  height: 0.12rem;
  margin: 0 0.07rem 0 0.12rem;
}
</style>

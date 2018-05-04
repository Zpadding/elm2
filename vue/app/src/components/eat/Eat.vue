<template>
    <div>
      <!--<h1>美食页面</h1>-->
        <Nav></Nav>
        <Classify></Classify>
        <Shop></Shop>
    </div>
</template>

<script>
    import Nav from "./nav/Nav";
    import Classify from "./classify/Classify";
    import Shop from './shop/Shop'
    export default {
        name: "Eat",
        components: {
            Nav,
            Classify,
            Shop
        }
    }
</script>

<style scoped>

</style>

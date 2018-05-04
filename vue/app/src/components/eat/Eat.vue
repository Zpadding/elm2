<template>
    <div>
      <!--<h1>美食页面</h1>-->
        <Nav></Nav>
        <Classify></Classify>
    </div>
</template>

<script>
    import Nav from "./nav/Nav";
    import Classify from "./classify/Classify";
    export default {
        name: "Eat",
        components: {
            Nav,
            Classify
        }
    }
</script>

<style scoped>

</style>

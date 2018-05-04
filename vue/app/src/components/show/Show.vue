<template>
  <div>
    <HeaderView></HeaderView>
    <router-view/>
  </div>

</template>

<script>
  import HeaderView from "../headerView/HeaderView";

  export default {
    name: "Show",
    components: {HeaderView}
  }
</script>

<style scoped>

</style>

<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
import HeaderView from "./components/headerView/HeaderView";
export default {
  name: 'App',
  components: {HeaderView}
}
</script>

<style>
#app {

}
</style>

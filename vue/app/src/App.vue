<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
import HeaderView from "./components/headerView/HeaderView";
export default {
  name: "App",
  components: { HeaderView },
  created() {
    if (localStorage.user) {
      let userUrl = "http://cangdu.org:8001/v1/user";
      let params = { user_id: JSON.parse(localStorage.user).user_id };
      this.$http.get(userUrl, { params: params }).then(res => {
        if (res.data.status === undefined) {
          this.$store.commit("login");
        }
      });
    }
  }
};
</script>

<style>
#app {
  -webkit-font-smoothing: antialiased;
}
</style>

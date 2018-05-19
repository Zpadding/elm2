<template>
    <div id="app">
        <div class="ani" v-if="animation">
            <img :src="pic" alt="">
        </div>
        <router-view/>
    </div>
</template>

<script>
import Vue from "vue";
import HeaderView from "./components/headerView/HeaderView";
import pic from "../static/img/1.jpg";
import { mapState } from "vuex";
export default {
  name: "App",
  data() {
    return {
      pic: pic
    };
  },
  components: { HeaderView },
  computed: {
    ...mapState(["animation"])
  },
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
    
    // try {
    //   document.body.removeChild(document.getElementById("appLoading"));
    //   setTimeout(function() {
    //     document.getElementById("app").style.display = "block";
    //   }, 500);
    // } catch (e) {}
    
  }
};
</script>

<style>
#app {
  -webkit-font-smoothing: antialiased;
}
.el-rate {
  height: 0.15rem;
}
.el-rate .el-rate__item .el-rate__icon {
  font-size: 0.01rem;
  margin-right: 0;
  transform: scale(0.8);
  margin: 0 -0.02rem;
}
.el-rate .el-rate__text {
  font-size: 0.08rem;
  color: #ff6000;
  margin: 0 0.04rem;
}

/* 动画 */
.ani img {
  width: 100%;
  height: 100%;
  position: absolute;
  z-index: 2;
}
</style>

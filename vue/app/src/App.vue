<template>
    <div id="app">
        <div class="ani" v-show="animation">
          <div class="win">
            <div class="img"></div>
          <svg data-v-1c82800a="" xmlns="http://www.w3.org/2000/svg" version="1.1" class="load_ellipse"><ellipse data-v-1c82800a="" cx="26" cy="10" rx="26" ry="10" style="fill: rgb(221, 221, 221); stroke: none;"></ellipse></svg>
        </div>
          </div>
          
        <router-view/>
    </div>
</template>

<script>
import Vue from "vue";
import HeaderView from "./components/headerView/HeaderView";
import pic from "../static/img/1.jpg";
import { mapState } from "vuex";
import { setInterval, clearInterval } from "timers";
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
          this.$store.commit("user", JSON.parse(localStorage.user));
        }
      });
    }
    this.change();
    // try {
    //   document.body.removeChild(document.getElementById("appLoading"));
    //   setTimeout(function() {
    //     document.getElementById("app").style.display = "block";
    //   }, 500);
    // } catch (e) {}
  },
  methods: {
    change() {
      let timer = null;
      clearInterval(timer);
      let count = 0;
      timer = setInterval(() => {
        let fontSize = parseFloat(document.documentElement.style.fontSize);
        let img = document.querySelector(".ani .img");
        count -= 0.5 * fontSize;
        img.style.backgroundPosition = "0px " + count + "px";
        if (count <= -3 * fontSize) {
          count = 50;
        }
      }, 600);
    }
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
.el-rate .el-rate__item {
  font-size: .1rem;
}
.el-rate .el-rate__item .el-rate__icon {
  font-size: 0.1rem;
  margin-right: 0;
  transform: scale(0.8);
  margin: 0 -0.01rem;
}
.el-rate .el-rate__text {
  font-size: 0.08rem;
  color: #ff6000;
}

/* 动画 */
.ani {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(255, 255, 255, .8);
  z-index: 2;
}
.win {
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 0.5rem;
  height: 0.5rem;
}
.ani .img {
  width: 100%;
  height: 100%;
  background: url(data:image/png;base64,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);
  background-size: 0.5rem auto;
  transform: translateY(0);
  animation: load 0.6s infinite ease-in-out;
  position: relative;
  z-index: 2;
}
.ani .load_ellipse {
  position: absolute;
  width: 0.52rem;
  height: 0.4rem;
  top: 0.44rem;
  left: 0.04rem;
  z-index: 1;
  animation: ellipse 0.6s infinite ease-in-out;
}
@keyframes load {
  0% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-0.5rem);
  }
  100% {
    transform: translateY(0);
  }
}
@keyframes ellipse {
  0% {
    transform: scale(1);
  }
  50% {
    transform: scale(0.5);
  }
  100% {
    transform: scale(1);
  }
}
</style>

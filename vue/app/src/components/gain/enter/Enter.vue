<template>
  <div id="Enter">
    <div id="head">
      <div class="hep1" @click="$router.go(-1)"> <</div>
      <span class="hep2">密码登录</span>
    </div>


    <form action="">
      <section class="sec">
        <input type="text" placeholder="账号" class="cip1" v-model="name">

      </section>
      <div class="sec">
        <input :type="show1?'text':'password'" placeholder="密码" class="cip" v-model="word">

        <div class="sp" @click="show1=!show1" >
          <p class="sp1" v-show="show1"></p>
          <p class="sp2" v-show="!show1"></p>
        </div>

      </div>
    </form>
    <section class="sec">
      <p><input type="text" placeholder="验证码" class="cip3" v-model="code"></p>
      <div class="rig">
        <img :src="pic" alt="" class="im">
      </div>
      <div class="di">
        <p>看不清</p>
        <p class="p2" @click="change">换一张</p>
      </div>
    </section>


    <p class="spa">温馨提示：未注册过得账号，登录时将自动注册。注册过的用户可凭账号密码登录</p>

    <button class="de" @click="login">登录</button>
    <router-link to="/forget"><p class="p">重置密码？</p>
    </router-link>
    <transition name="bounce">
      <div class="boll" v-if="show">
        <img src="../../../assets/w1-2.png" alt="">

        <div>{{err}}</div>
        <button @click="show=!show">确认</button>
      </div>
    </transition>
  </div>

</template>

<script>
import { mapState } from "vuex";


export default {
  name: "Enter",
  data() {
    return {
      username: [],
      password: [],
      name: "",
      word: "",
      code: "",
      pic: "",
      err: "",
      show: false,
      show1: false,
      isClose: true,
      pop: false
    };
  },

  created() {
    let url = "https://elm.cangdu.org/v1/captchas";
    var data = {};
    Vue.postLogin(url, data, res => {
      this.pic = res.code;
    });
  },
  methods: {
    login() {
      if (this.name) {
        if (this.word) {
          if (this.code) {
            let url = "https://elm.cangdu.org/v2/login";
            let data = {
              username: this.name,
              password: this.word,
              captcha_code: this.code
            };
            Vue.postLogin(url, data, res => {
              console.log(res);
              if (res.status != 0) {
                this.$router.push({ name: "User", params: res });
              } else {
                alert(res.message);
              }
            });
          } else {
            this.show = true;
            this.err = "请输入验证码";
          }
        } else {
          this.show = true;
          this.err = "请输入密码";
        }
      } else {
        this.show = true;
        this.err = "请输入手机号/邮箱/用户名";
      }
    },

    change() {
      let url = "https://elm.cangdu.org/v1/captchas";
      var data = {};
      Vue.postLogin(url, data, res => {
        this.pic = res.code;
      });
    }
  },
  computed: {
    ...mapState(["head_url"])
  }
};
</script>

<style scoped>
input {
  outline: none;
}

#head {
  height: 0.39rem;
  width: 100%;
  background: #3190e8;
  color: #fff;
  overflow: hidden;
  margin-bottom: 0.15rem;
}

.hep1 {
  float: left;
  padding: 0.1rem;
}

.hep2 {
  height: 0.4rem;
  float: right;
  padding-right: 1.5rem;
  padding-top: 0.1rem;
}

.sec {
  border: 1px solid #f1f1f1;
  display: flex;
  justify-content: space-around;
  height: 0.25rem;
  padding: 0.02rem 0.03rem;
  padding-top: 0.05rem;
  padding-bottom: 0.05rem;
}

.cip1 {
  margin-right: 1.6rem;
  font-size: 0.07rem;
  color: #666;
}

.cip {
  margin-right: 1rem;
  font-size: 0.07rem;
  color: #666;
}

el-switch {
  margin-right: 0.2rem;
}

.im {
  height: 0.3rem;
  width: 0.7rem;
  background: whitesmoke;
  float: left;
  margin-left: 0.3rem;
}

.rig {
  width: 1rem;
}

.di {
  float: right;
  font-size: 0.05rem;
}

.p2 {
  color: #90b4fc;
}

.cip3 {
  margin-left: 0.05rem;
  font-size: 0.07rem;
  color: #666;
  margin-top: 0.1rem;
}

.spa {
  line-height: 0.2rem;
  margin-left: 0.2rem;
  margin-right: 0.2rem;
  margin-top: 0.1rem;
  font-size: 0.05rem;
  color: red;
}

.de {
  margin: 0.1rem;
  height: 0.4rem;
  width: 3rem;
  background-color: #4cd964;
}

.sp {
  height: 0.25rem;
  width: 0.4rem;
  background-color: red;
  border-radius: 35%;
}

.sp1 {
  margin-left: 0.19rem;
  height: 0.25rem;
  width: 0.2rem;
  background-color: white;
  border-radius: 50%;
}

.sp2 {
  height: 0.25rem;
  width: 0.2rem;
  background-color: white;
  border-radius: 50%;
}

.p {
  font-size: 0.05rem;
  margin-right: 0.1rem;
  color: #3b95e9;
  text-align: right;
}

.boll {
  position: absolute;
  left: 0.4rem;
  top: 1.3rem;
  border: 1px solid white;
  height: 1.5rem;
  width: 2.4rem;
  background: white;
}

.boll > img {
  margin-left: 0.8rem;
  margin-top: 0.1rem;
}

.boll > div {
  text-align: center;
  margin-top: 0.1rem;
  margin-bottom: 0.1rem;
}

.boll > button {
  width: 2.4rem;
  height: 0.36rem;
  background: #4cd964;
  border-radius: 5px;
}

.kg {
  border: 1px solid red;
  width: 0.35rem;
  height: 0.15rem;
  border-radius: 35%;
  background: black;
}

.s1 {
  background-color: red;
  border-radius: 50%;
  height: 0.03rem;
  width: 0.2rem;
  padding-top: 0.2rem;
  position: fixed;
}

.bounce-enter-active {
  animation: bounce-in 0.5s;
}

.bounce-leave-active {
  animation: bounce-in 0.5s reverse;
}

@keyframes bounce-in {
  0% {
    transform: scale(1);
  }
  35% {
    transform: scale(0.8);
  }
  70% {
    transform: scale(1.1);
  }

  100% {
    transform: scale(1);
  }
}
</style>

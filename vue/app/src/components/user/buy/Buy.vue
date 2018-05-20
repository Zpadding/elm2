<template>
<div id="buy">

  <div id="head">
    <router-link to="/vip" class="hep1"> <</router-link>
    <span class="hep2">在线支付</span>
  </div>
  <span class="success" v-if="Object.keys(user).length">成功兑换后将关联到当前账号：{{user.username}}</span>

 <div class="inp">
   <input type="text" placeholder="请输入10位卡号" class="in1" v-model="account">

   <input type="text" placeholder="请输入6位卡密" class="in1" v-model="password">
 </div>

  <p class="bb">兑换</p>


    <p class="tis">---温馨提示---</p>
  <div class="tik">
    <p>新兑换的会员服务，权益以[会员说明]为准</p>
    <p>月卡：30次减免配送费</p>
    <p>季卡：90次减免配送费</p>
    <p>年卡：360次减免配送费</p>
    <p>*仅限蜂鸟转送订单，每日最对见面3单。每单最高减免45元(一个月按31天计算)</p>
  </div>
</div>

</template>

<script>
import { mapState } from "vuex";
export default {
  name: "Buy",
  data() {
    return {
      account: "",
      password: ""
    }
  },
  computed: {
    ...mapState(["user"])
  },
  watch: {
    account() {
      if (this.account.length == 10 && this.password.length == 6) {
        document.querySelector(".bb").setAttribute("class", "bb active");
      } else {
        document.querySelector(".bb").setAttribute("class", "bb");
      }
    },
    password() {
      if (this.account.length == 10 && this.password.length == 6) {
        document.querySelector(".bb").setAttribute("class", "bb active");
      } else {
        document.querySelector(".bb").setAttribute("class", "bb");
      }
    }
  }
};
</script>

<style scoped>
#head {
  height: 0.39rem;
  width: 100%;
  background: #3190e8;
  color: #fff;
  overflow: hidden;
}

.hep1 {
  float: left;
  padding: 0.1rem;
}

.hep2 {
  height: 0.4rem;
  float: right;
  padding-right: 1.3rem;
  padding-top: 0.1rem;
}
.success {
  font-size: 0.12rem;
  color: #666;
  line-height: 0.4rem;
  padding-left: 0.14rem;
}
.in1 {
  height: 0.4rem;
  width: 3.1rem;
  padding-left: 0.1rem;
}
.bb {
      background-color: #ccc;
    font-size: .14rem;
    color: #fff;
    text-align: center;
    margin: 0 .14rem;
    line-height: .36rem;
    border-radius: .04rem;
    margin-top: .14rem;
    font-weight: 700;
    border: none;
}
.active {
  background: #4cd964;
}
.tis {
  margin-top: 0.3rem;
  text-align: center;
  padding-bottom: 0.2rem;
  color: #aaa;
  font-size: 0.12rem;
}

.tik > p {
  font-size: 0.12rem;
  padding: 0.03rem;
  color: #aaa;
  margin-left: 0.35rem;
  margin-bottom: 0.01rem;
}
</style>

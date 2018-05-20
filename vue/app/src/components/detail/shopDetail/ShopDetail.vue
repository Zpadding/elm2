<template>
  <div class="shopDetail">
      <div>
          <div class="nav">
              <span @click="back"></span>
              <span>商家详情</span>
              <span></span>
          </div>
          <div class="top">
              <h3>活动与属性</h3>
              <ul>
                  <li v-for="support in detail.supports">
                      <span :style="'backgroundColor: #'+support.icon_color">{{support.icon_name}}</span>
                      <span>{{support.description}}(APP专享)</span>
                  </li>
              </ul>
          </div>
          <div class="middle">
              <div class="head" @click="company">
                  <div>食品监督安全公示</div>
                  <div>
                      <span>企业认证详情</span>
                      <span></span>
                  </div>
              </div>
              <div class="body">
                  <div class="smile">
                      <img :src="smile" alt="">
                  </div>
                  <div class="result">
                      <p>
                          <span>监督检查结果:</span>
                          <span class="green">良好</span>
                      </p>
                      <p>
                          <span>检查日期:</span>
                      </p>
                  </div>
              </div>
          </div>
          <div class="bottom">
              <h3>商家信息</h3>
              <p>效果演示</p>
              <p>地址: {{detail.address}}</p>
              <p v-if="detail.opening_hours">营业时间: [{{detail.opening_hours[0]}}]</p>
              <p @click="img(detail.license.business_license_image)">
                  <span>营业执照</span>
                  <span></span>
              </p>
              <p @click="img(detail.license.catering_service_license_image)">
                  <span>餐饮服务许可证</span>
                  <span></span>
              </p>
          </div>
          <transition name="fade">
            <div class="pic" v-if="show" @click="show=!show">
                <img :src="img_path+pic" alt="">
            </div>
          </transition>
      </div>
  </div>
</template>

<script type="text/ecmascript-6">
import { mapState } from "vuex";
import smile from "../../../assets/smile.png";
export default {
  data() {
    return {
      detail: {},
      smile: smile,
      img_path: "https://elm.cangdu.org/img/",
      pic: "",
      show: false
    };
  },
  components: {},
  created() {
    console.log(this.shopDetail);
    if (Object.keys(this.shopDetail).length) {
      this.detail = this.shopDetail;
      localStorage.shopDetail = JSON.stringify(this.shopDetail);
    } else {
      this.detail = JSON.parse(localStorage.shopDetail);
    }
  },
  computed: {
    ...mapState(["shopDetail"])
  },
  methods: {
    img(pic) {
      this.pic = pic;
      this.show = true;
    },
    back() {
      this.$router.go(-1);
    },
    company() {
      this.$router.push({ name: "Safe" });
    }
  }
};
</script>

<style scoped>
.shopDetail {
  padding-top: 0.4rem;
  -webkit-font-smoothing: antialiased;
  background-color: #ebebeb;
}
.nav {
  width: 3.2rem;
  height: 0.4rem;
  background-color: #3190e8;
  position: fixed;
  left: 0;
  top: 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: white;
  font-weight: bold;
}
.nav span:first-child {
  display: inline-block;
  width: 0.13rem;
  height: 0.13rem;
  border-top: 0.02rem solid white;
  border-left: 0.02rem solid white;
  transform: rotate(-45deg);
  margin-left: 0.1rem;
}
.top {
  background-color: #fff;
  margin: 0.08rem 0;
  padding-bottom: 0.12rem;
}
.top h3 {
  font-size: 0.15rem;
  color: #333;
  line-height: 0.36rem;
  padding-left: 0.12rem;
  border-bottom: 0.01rem solid #f1f1f1;
  margin-bottom: 0.06rem;
}
.top ul {
  padding: 0 0.12rem;
}
.top ul li {
  width: 2.96rem;
  line-height: 0.28rem;
  margin-bottom: 0.04rem;
}
.top ul li span {
  font-size: 0.11rem;
  color: #666;
}
.top ul li span:first-child {
  font-size: 0.09rem;
  color: #fff;
  padding: 0.02rem;
  border: 0.01rem;
  border-radius: 0.02rem;
  margin-right: 0.04rem;
}
.middle {
  background-color: #fff;
  margin-bottom: 0.08rem;
}
.middle .head {
  display: flex;
  justify-content: space-between;
  align-items: center;
  line-height: 0.36rem;
  padding: 0 0.12rem;
  border-bottom: 0.005rem solid #f1f1f1;
}
.head div span {
  display: flex;
  align-items: center;
  font-size: 0.14rem;
  color: #bbb;
  vertical-align: middle;
}
.head div {
  display: flex;
  align-items: center;
}
.head div span:last-child {
  width: 0.08rem;
  height: 0.08rem;
  border-top: 0.01rem solid rgb(187, 187, 187);
  border-right: 0.01rem solid rgb(187, 187, 187);
  transform: rotate(45deg);
}
.smile {
  margin-right: 0.12rem;
}
.smile img {
  width: 0.4rem;
  height: 0.4rem;
}
.body {
  display: flex;
  padding: 0.12rem;
}
.body .result p {
  margin: 0.08rem 0;
}
.body .result p span {
  font-size: 0.11rem;
  color: #666;
}
.body .result p .green {
  color: #7ed321;
}
.bottom {
  background-color: #fff;
  margin-bottom: 0.08rem;
}
.bottom h3 {
  line-height: 0.36rem;
  padding: 0 0.12rem;
  font-size: 0.15rem;
  color: #333;
  border-bottom: 0.005rem solid #f1f1f1;
}
.bottom p {
  font-size: 0.12rem;
  color: #666;
  padding: 0.14rem 0.12rem 0.14rem 0;
  margin-left: 0.12rem;
  border-bottom: 0.005rem solid #f5f5f5;
  line-height: 0.17rem;
  display: flex;
  justify-content: space-between;
}
.bottom p span:last-child {
  width: 0.08rem;
  height: 0.08rem;
  border-top: 0.01rem solid rgb(187, 187, 187);
  border-right: 0.01rem solid rgb(187, 187, 187);
  transform: rotate(45deg);
}
.pic {
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.5);
}
.pic img {
  width: 3.2rem;
  height: 3.2rem;
  margin-top: 40%;
}
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter,
.fade-leave-to {
  opacity: 0;
}
</style>

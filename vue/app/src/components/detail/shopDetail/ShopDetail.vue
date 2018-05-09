<template>
  <div class="shopDetail">
      <div>
          <div class="nav">
              <span></span>
              <span>商家详情</span>
              <span></span>
          </div>
          <div class="top">
              <h3>活动与属性</h3>
              <ul>
                  <li></li>
              </ul>
          </div>
          <div class="middle">
              <div class="head">
                  <div>食品监督安全公示</div>
                  <div>
                      <span></span>
                      <span></span>
                  </div>
              </div>
              <div class="body">
                  <div class="smile">
                      <img src="" alt="">
                  </div>
                  <div class="result"></div>
              </div>
          </div>
          <div class="bottom">
              <h3>商家信息</h3>
              <p>效果演示</p>
              <p>地址:</p>
              <p>营业时间:</p>
          </div>
      </div>
  </div>
</template>

<script type="text/ecmascript-6">
import { mapState } from "vuex";
export default {
  data() {
    return {
      detail: {}
    };
  },
  components: {},
  created() {
    console.log(this.shopDetail);
    if (this.shopDetail) {
      this.detail = this.shopDetail;
      localStorage.shopDetail = JSON.stringify(this.shopDetail);
    } else {
      this.detail = JSON.parse(localStorage.shopDetail);
    }
  },
  computed: {
    ...mapState(["shopDetail"])
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
    margin: .08rem 0;
    padding-bottom: .12rem;
}
.top h3 {
    font-size: .15rem;
    color: #333;
    line-height: .36rem;
    padding-left: .12rem;
    border-bottom: .01rem solid #f1f1f1;
    margin-bottom: .06rem;
}
</style>

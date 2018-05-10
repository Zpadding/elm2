<template>
  <div class="safe">
      <div>
          <div class="nav">
              <span @click="back"></span>
              <span>食品监督安全公示</span>
              <span></span>
          </div>
          <div class="top">
              <div class="head">
                  <div>食品监督安全公示</div>
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
          <div class="middle">
              <h3>工商登记信息</h3>
              <ul>
                  <li v-for="register in registers">{{register}}</li>
              </ul>
          </div>
          <div class="bottom">
              <h3>餐饮许可证</h3>
              <ul>
                  <li v-for="catering in caterings">{{catering}}</li>
              </ul>
          </div>
          <div class="permission">
              <h3>许可证书</h3>
              <div>
                  <!-- <img src="https://fuss10.elemecdn.com/1/60/e91e0a9f2163.png" alt=""> -->
                  <!-- <img src="https://fuss10.elemecdn.com/1/60/e91e17fa2164.png" alt=""> -->
              </div>
          </div>
      </div>
  </div>
</template>

<script type="text/ecmascript-6">
import smile from "../../../../assets/smile.png";
export default {
  data() {
    return {
      smile: smile,
      registers: [
        "企业名称",
        "工商执照注册号",
        "注册资本",
        "注册地址",
        "属地监管所",
        "法定代表人",
        "经营范围"
      ],
      caterings: ["营业范围", "许可证有效期", "许可证号", "发证时间", "发证机关"]
    };
  },
  components: {},
  methods: {
    back() {
      this.$router.go(-1);
    }
  }
};
</script>

<style scoped>
.safe {
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
.top,
.middle,
.bottom {
  background-color: #fff;
  margin-bottom: 0.08rem;
}
.top .head {
  display: flex;
  align-items: center;
  line-height: 0.36rem;
  padding: 0 0.12rem;
  font-size: 0.15rem;

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
h3 {
  display: flex;
  font-size: 0.15rem;
  align-items: center;
  line-height: 0.36rem;
  padding: 0 0.12rem;
  border-bottom: 0.005rem solid #f1f1f1;
}
ul {
  margin-left: 0.2rem;
  padding: 0.08rem 0;
}
ul li {
  font-size: 0.11rem;
  color: #333;
  line-height: 0.2rem;
  margin-bottom: 0.08rem;
}
</style>

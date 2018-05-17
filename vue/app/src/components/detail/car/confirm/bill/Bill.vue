<template>
  <div class="bill">
      <div>
          <div class="nav">
                <span></span>
                <span>选择发票抬头</span>
                <span></span>
            </div>
            <div class="without">
                <div class="left">不需要开发票</div>
                
                <svg t="1526462116775" @click="show = !show" :class="show?'right green':'right'" style="" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="1505" xmlns:xlink="http://www.w3.org/1999/xlink" width="32" height="32"><path d="M0 512C0 229.234759 229.234759 0 512 0s512 229.234759 512 512-229.234759 512-512 512S0 794.765241 0 512z m419.310345 194.630621a35.310345 35.310345 0 0 0 49.399172 1.271172l335.518897-311.931586a35.310345 35.310345 0 0 0-48.075035-51.729655l-309.124413 289.544827-145.125518-149.645241a35.310345 35.310345 0 1 0-50.688 49.169655l168.112552 173.320828z" p-id="1506" ></path></svg>
                
            </div>
            <div class="confirm" @click="confirm">确定</div>
      </div>
  </div>
</template>

<script type="text/ecmascript-6">
export default {
  data() {
    return {
        show: false
    };
  },
  components: {},
  methods: {
    confirm() {
        this.$router.push({name: "Confirm"});
    }
  }
};
</script>

<style scoped lang="less">
.size(@width, @height) {
  width: @width;
  height: @height;
}
.bill {
  background: #f5f5f5;
  -webkit-font-smoothing: antialiased;
  div {
    .nav {
      .size(3.2rem, 0.39rem);
      background-color: #3190e8;
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 0 0.15rem;
      span {
        &:nth-of-type(1) {
          .size(0.1rem, 0.1rem);
          border-top: 0.015rem solid white;
          border-left: 0.015rem solid white;
          transform: rotate(-45deg);
        }
        &:nth-of-type(2) {
          color: white;
          font-size: 0.16rem;
          text-align: center;
          font-weight: 700;
        }
        &:nth-of-type(3) {
          width: 0.5rem;
        }
      }
    }
    .without {
      .size(2.92rem, 0.5rem);
      display: flex;
      justify-content: space-between;
      align-items: center;
      background-color: #fff;
      line-height: 0.5rem;
      margin-top: 0.1rem;
      padding: 0 0.14rem;
      .left {
        font-size: 0.15rem;
        color: #333;
      }
      .right {
          .size(.16rem, .16rem);
          fill: #999;
      }
      .green {
          fill: #4cd964;
      }
    }
    .confirm {
      background-color: #4cd964;
      font-size: 0.14rem;
      color: #fff;
      text-align: center;
      margin: 0 0.14rem;
      line-height: 0.36rem;
      border-radius: 0.04rem;
      margin-top: .1rem;
    }
  }
}
</style>

<template>
  <div class="foodDetail">
      <div>
          <div class="nav">
              <span @click="back"></span>
              <span>{{food.name}}</span>
              <span></span>
          </div>
          <div class="logo">
              <img :src="img_path+food.image_path" alt="">
          </div>
          <div class="detail">
              <div class="one">{{food.name}}</div>
              <div class="two">{{food.description}}</div>
              <div class="three">
                  <span>评分</span>
                  <span>{{food.rating}}</span>
              </div>
              <div class="four">
                  <span>月售{{food.month_sales}}单</span>
                  <span>售价 ¥{{food.specfoods[0].price}} 起</span>
              </div>
              <div class="five">
                  <span>评论数 {{food.rating_count}}</span>
                  <span>好评率 {{food.satisfy_rate}}%</span>
              </div>
          </div>
      </div>
  </div>
</template>

<script type="text/ecmascript-6">
export default {
  data() {
    return {
      food: {},
      img_path: "//elm.cangdu.org/img/",
    };
  },
  components: {},
  created() {
    console.log(this.$route.params);
    this.food = this.$route.params;
  },
  methods: {
      back() {
          this.$router.go(-1);
      }
  }
};
</script>

<style scoped lang="less">
.size(@width, @height) {
  width: @width;
  height: @height;
}
.foodDetail {
  -webkit-font-smoothing: antialiased;
  padding-top: 0.39rem;
  div {
    .nav {
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 0 0.2rem;
      color: white;
      background-color: #3190e8;
      position: fixed;
      left: 0;
      top: 0;
      .size(3.2rem, 0.39rem);
      span {
        &:first-child {
          .size(0.1rem, 0.1rem);
          border-top: 0.02rem solid white;
          border-left: 0.02rem solid white;
          transform: rotate(-45deg);
        }
        &:nth-of-type(2) {
          font-size: 0.16rem;
          color: #fff;
          text-align: center;
          font-weight: 700;
        }
        &:last-child {
          .size(0.4rem, 0.1rem);
        }
      }
    }
    .logo {
      img {
        .size(3.2rem, 3.2rem);
      }
    }
    .detail {
      padding: 0.1rem;
      .one {
        font-size: 0.12rem;
        color: #666;
        margin-top: 0.1rem;
        line-height: 0.16rem;
        margin-bottom: 0.1rem;
      }
      .two {
        font-size: 0.14rem;
        color: #333;
        margin-bottom: 0.04rem;
      }
      .three {
        display: flex;
        align-items: center;
        span {
          font-size: 0.12rem;
          color: #666;
          margin-right: 0.04rem;
        }
      }
      .four {
        font-size: 0;
        margin: 0.06rem 0;
        span {
          &:first-child {
            font-size: 0.12rem;
            color: #666;
            margin-right: 0.08rem;
          }
          &:last-child {
            font-size: 0.12rem;
            color: #f60;
            margin-right: 0.04rem;
          }
        }
      }
      .five {
        font-size: 0.12rem;
        color: #666;
      }
    }
  }
}
</style>

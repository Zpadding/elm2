<template>
  <div class="confirm">
      <div>
        <div class="nav">
          <div class="back" @click="back"></div>
          <div class="title">确认订单</div>
          <div class="people" @click="user">
              <svg t="1526180889231" class="user" style="" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="4302" xmlns:xlink="http://www.w3.org/1999/xlink" width="32" height="32"><path d="M593.066667 499.2C695.466667 465.066667 768 369.066667 768 256c0-140.8-115.2-256-256-256S256 115.2 256 256c0 113.066667 72.533333 209.066667 174.933333 243.2C249.6 535.466667 85.333333 689.066667 85.333333 874.666667c0 83.2 66.133333 149.333333 149.333334 149.333333h554.666666c83.2 0 149.333333-66.133333 149.333334-149.333333 0-185.6-164.266667-339.2-345.6-375.466667zM298.666667 256c0-117.333333 96-213.333333 213.333333-213.333333s213.333333 96 213.333333 213.333333-96 213.333333-213.333333 213.333333-213.333333-96-213.333333-213.333333z m490.666666 725.333333H234.666667c-59.733333 0-106.666667-46.933333-106.666667-106.666666 0-196.266667 202.666667-341.333333 384-341.333334s384 145.066667 384 341.333334c0 59.733333-46.933333 106.666667-106.666667 106.666666z"  p-id="4303"></path></svg>
          </div>
        </div>
        <div class="distance" style="background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADQAAAAGCAYAAACMyr1NAAAAAXNSR0IArs4c6QAAANxJREFUOBFjZICCpoUPWhn+M7rD+OTQjP8ZztQmymfg0/tr95JlDAz/I/GpISTHyMiwj9Ul1hmbOiaQYNfSx6qUegZkDisD01QQjQv837NMD+iYCFzyxIr/Z2asxqWWBSTx49e/LAZGXEqIFP/PcLgiUfYyPtV/GP62/P9PmU3AANnM6hhzApc9TB3zH+sCrbDFpYBYcQ42pmn41P7av8QC6BlffGoIyTEyMv5nYWCuwaeO6TfDv2x8CoiSY/y/syxa9jY+tYx//7fikydGDhggKxhdoi4Ro3bYqAEAknE5DXYMR0IAAAAASUVORK5CYII=) 0 100%  / auto .024rem repeat-x rgb(255, 255, 255)">
            <div class="logo">
                <svg t="1526304455167" class="dis" style="" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="2072" xmlns:xlink="http://www.w3.org/1999/xlink" width="32" height="32"><path d="M512.103132 320.120979a106.221743 106.221743 0 1 1-75.507022 31.354611A106.221743 106.221743 0 0 1 512.103132 320.120979m0-63.989002a170.850635 170.850635 0 1 0 120.939214 49.911422A169.570855 169.570855 0 0 0 512.103132 256.131977z" p-id="2073" fill="#1296db"></path><path d="M805.172761 124.314633a407.609942 407.609942 0 0 0-586.139257 0 431.285873 431.285873 0 0 0 0 599.576948L512.103132 1024l293.069629-300.108419a431.285873 431.285873 0 0 0 0-599.576948z m-44.152411 557.344207l-248.917218 255.956007-248.917217-255.956007a365.377201 365.377201 0 0 1 0-508.712565 346.82039 346.82039 0 0 1 497.834435 0 365.377201 365.377201 0 0 1 0 508.712565z" p-id="2074" fill="#1296db"></path></svg>
            
            <div v-if="true">
                <span class="input">请输入收货地址</span>
            </div>
            <div v-else>
                <div class="left">
                    <div class="top">
                        <span></span>
                        <span></span>
                        <span></span>
                    </div>
                    <div class="bottom">
                        <span></span>
                        <span></span>
                    </div>
                </div>
            </div>
            </div>
            <div class="right"></div>
        </div>
        <div class="time">
            <div class="left">送达时间</div>
            <div class="right">
                <div class="top">
                    <span>尽快送达 | 预计 13:33</span>
                </div>
                <div class="bottom">蜂鸟专送</div>
            </div>
        </div>
        <div class="type">
            <div class="one">
                <div class="left">支付方式</div>
                <div class="right">
                    <span>在线支付</span>
                    <span></span>
                </div>
            </div>
            <div class="two">
                <div class="left">红包</div>
                <div class="right">暂时只在饿了么APP中支持</div>
            </div>
        </div>
        <div class="shop">
            <div class="detail">
                <span class="logo">
                  <img :src="img_path + shop.image_path"></img>
                </span>
                <span>{{shop.name}}</span>
            </div>
            <ul class="food">
                <li>
                    <div class="left">食品名称</div>
                    <div class="right">
                        <div class="quantity">x8</div>
                        <div class="price">¥20</div>
                    </div>
                    
                </li>
            </ul>
            <div class="box">
                <div class="left">餐盒</div>
                <div class="right"></div>
            </div>
            <div class="give">
                <div class="left">配送费</div>
                <div class="right"></div>
            </div>
            <div class="order">
                <div class="left">订单</div>
                <div class="right">
                    <p>待支付</p>
                    <p>¥10318</p>
                </div>
            </div>
        </div>

        <div class="remark">
            <div class="one">
                <div class="left">订单备注</div>
                <div class="right">
                     <span>口味、偏好等</span>
                    <span></span>
                </div>
            </div>
            <div class="two">
                 <div class="left">发票抬头</div>
                 <div class="right">
                    <span>不需要开发票</span>
                    <span></span>
                </div>
            </div>
        </div>
         <div class="pay">
            <div class="left">待支付 ¥10318</div>
            <div class="right">确认下单</div>
        </div>
      </div>
      
  </div>
</template>

<script type="text/ecmascript-6">
import { mapState } from 'vuex';
export default {
  data() {
    return {
      shop: {},
      img_path: "//elm.cangdu.org/img/"
    };
  },
  components: {},
  methods: {
    back() {
      this.$router.go(-1);
    },
    user() {
      this.$router.push({ name: "User" });
    }
  },
  created() {
    if (Object.keys(this.$route.params).length) {
      this.shop = this.$route.params;
      localStorage.shop = JSON.stringify(this.shop);
    } else {
      this.shop = JSON.parse(localStorage.shop);
    }
  },
  computed: {
    ...mapState(["car", "price", "head_url"])
  }
};
</script>

<style scoped lang="less">
.size(@width, @height) {
  width: @width;
  height: @height;
}
.confirm {
  -webkit-font-smoothing: antialiased;
  padding-top: 0.39rem;
  padding-bottom: 0.6rem;
  background-color: #f5f5f5;
  div {
    .nav {
      .size(3.2rem, 0.39rem);
      display: flex;
      justify-content: space-between;
      align-items: center;
      background-color: #3190e8;
      position: fixed;
      left: 0;
      top: 0;
      .back {
        .size(0.12rem, 0.12rem);
        border-top: 0.02rem solid white;
        border-left: 0.02rem solid white;
        transform: rotate(-45deg);
        margin-left: 0.1rem;
      }
      .title {
        font-size: 0.16rem;
        color: #fff;
        text-align: center;
        font-weight: 700;
      }
      .people {
        .size(0.2rem, 0.2rem);
        margin-right: 0.1rem;
        .user {
          .size(0.2rem, 0.2rem);
          fill: white;
        }
      }
    }
    .distance {
      .size(3.2rem, 0.7rem);
      box-sizing: border-box;
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: 0 0.12rem;

      .logo {
        .size(1.26rem, 0.4rem);
        display: flex;
        align-items: center;
        .dis {
          .size(0.16rem, 0.16rem);
          margin-right: 0.05rem;
        }
        div {
          .input {
            font-size: 0.14rem;
            color: #333;
          }
        }
      }
      .right {
        .size(0.1rem, 0.1rem);
        border-top: 0.01rem solid #999;
        border-right: 0.01rem solid #999;
        transform: rotate(45deg);
      }
    }
    .time {
      border-left: 0.04rem solid #3190e8;
      min-height: 0.8rem;
      display: flex;
      justify-content: space-between;
      align-items: center;
      background-color: #fff;
      margin-top: 0.08rem;
      padding: 0 0.14rem;
      .left {
        font-size: 0.16rem;
        color: #333;
        font-weight: 700;
        padding-left: 0.06rem;
      }
      .right {
        display: flex;
        flex-direction: column;
        align-items: flex-end;
        .top {
          span {
            font-size: 0.14rem;
            color: #3190e8;
          }
        }
        .bottom {
          font-size: 0.1rem;
          color: #fff;
          background-color: #3190e8;
          width: 0.48rem;
          margin-top: 0.1rem;
          text-align: center;
          border-radius: 0.024rem;
          padding: 0.02rem;
        }
      }
    }
    .type {
      .size(3.2rem, 0.825rem);
      box-sizing: border-box;
      background-color: #fff;
      margin-top: 0.08rem;
      padding: 0 0.14rem;
      .one {
        .size(3.2rem, 0.4rem);
        box-sizing: border-box;
        line-height: 0.4rem;
        .left {
          font-size: 0.14rem;
          color: #666;
        }
        .right {
          span {
            &:first-child {
              font-size: 0.12rem;
              color: #aaa;
              width: 1.8rem;
              display: inline-block;
              text-align: right;
              vertical-align: middle;
            }
            &:last-child {
              .size(0.06rem, 0.06rem);
              display: inline-block;
              border-top: 0.01rem solid #ccc;
              border-right: 0.01rem solid #ccc;
              transform: rotate(45deg);
              margin-right: 0.3rem;
            }
          }
        }
      }
      .two {
        .size(2.92rem, 0.4rem);
        display: flex;
        justify-content: space-between;
        border-top: 0.005rem solid #f5f5f5;
        .left,
        .right {
          font-size: 0.12rem;
          color: #aaa;
          line-height: 0.4rem;
        }
      }
    }
    .shop {
      background-color: #fff;
      margin-top: 0.08rem;
      .detail {
        display: flex;
        align-items: center;
        padding: 0.14rem;
        border-bottom: 0.005rem solid #f5f5f5;
        .logo {
          .size(0.24rem, 0.24rem);
          vertical-align: middle;
          margin-right: .1rem;
          img {
            .size(0.24rem, 0.24rem);
          }
        }
        span {
          &:last-child {
            font-size: 0.16rem;
            color: #333;
          }
        }
      }
      .food {
        padding-top: 0.1rem;
        li {
          font-size: 0.13rem;
          color: #666;
          display: flex;
          justify-content: space-between;
          line-height: 0.36rem;
          padding: 0 0.14rem;
          .left {
            width: 2.2rem;
          }
          .right {
            flex: 1;
            display: flex;
            justify-content: space-between;
            align-items: center;
            .quantity {
              color: #f60;
            }
            .price {
              font-size: 0.13rem;
              color: #666;
            }
          }
        }
      }
      .box,
      .give,
      .order {
        display: flex;
        justify-content: space-between;
        line-height: 0.36rem;
        padding: 0 0.14rem;
        font-size: 0.13rem;
        color: #666;
      }
      .order {
        .right {
          p {
            color: #f60;
          }
        }
      }
    }
    .remark {
      background-color: #fff;
      margin-top: 0.08rem;
      padding: 0 0.14rem;
      .one {
        display: flex;
        justify-content: space-between;
        line-height: 0.42rem;
        .left {
          .size(0.56rem, 0.42rem);
          font-size: 0.14rem;
          color: #666;
          white-space: nowrap;
        }
        .right {
          .size(2.92rem, 0.42rem);
          span {
            &:first-child {
              .size(2.22rem, 0.4rem);
              font-size: 0.12rem;
              color: #aaa;
              display: inline-block;
              text-align: right;
              vertical-align: middle;
            }
            &:last-child {
              .size(0.06rem, 0.06rem);
              display: inline-block;
              border-top: 0.01rem solid #ccc;
              border-right: 0.01rem solid #ccc;
              transform: rotate(45deg);
            }
          }
        }
      }
      .two {
        display: flex;
        justify-content: space-between;
        border-top: 0.005rem solid #f5f5f5;
        .left {
          font-size: 0.12rem;
          color: #666;
          line-height: 0.4rem;
        }
        .right {
          color: #aaa;
          font-size: 0.12rem;
          line-height: 0.4rem;
          span {
            &:last-child {
              .size(0.06rem, 0.06rem);
              display: inline-block;
              border-top: 0.01rem solid #ccc;
              border-right: 0.01rem solid #ccc;
              transform: rotate(45deg);
            }
          }
        }
      }
    }
    .pay {
      .size(3.2rem, 0.4rem);
      display: flex;
      position: fixed;
      bottom: 0;

      .left,
      .right {
        line-height: 0.4rem;
        font-size: 0.15rem;
        color: #fff;
      }
      .left {
        background-color: #3c3c3c;
        flex: 5;
        padding-left: 0.14rem;
      }
      .right {
        flex: 2;
        background-color: #56d176;
        text-align: center;
      }
    }
  }
}
</style>

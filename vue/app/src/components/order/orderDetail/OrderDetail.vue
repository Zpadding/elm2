<template>
  <div class="orderDetail">
      <div>
          <div class="nav">
                <span @click="$router.go(-1)"></span>
                <span>订单列表</span>
                <span></span>
          </div>
          <div class="logo">
              <img :src="'//elm.cangdu.org/img/' + order.restaurant_image_url" alt="">
              <p>支付超时</p>
              <router-link :to="{name: 'Detail', params: {id: order.restaurant_id}}">再来一单</router-link>
          </div>
          <div class="detail">
              <router-link :to="{name: 'Detail', params: {id: order.restaurant_id}}">
                <div class="left">
                    <img :src="'//elm.cangdu.org/img/' + order.restaurant_image_url" alt="">
                    <span>{{order.restaurant_name}}</span>
                </div>
                <div class="right"></div>
              </router-link>
              <ul class="food">
                  <li v-for="food in order.basket.group[0]">
                     <div class="left">{{food.name}}</div> 
                     <div class="right">
                         <span class="num">x{{food.quantity}}</span>
                         <span class="price">¥{{food.price}}</span>
                     </div>
                  </li>
              </ul>
              <div class="deliver">
                  <span>{{order.basket.deliver_fee.name}}</span>
                  <span>{{order.basket.deliver_fee.price}}</span>
              </div>
              <div class="pay">实付{{order.total_amount}}</div>
          </div>
          <div class="deliverMess">
              <h4>配送信息</h4>
              <div class="time">
                  <span>送达时间: </span>
                  <span>尽快送达</span>
              </div>
              <div class="address">
                  <p>送货地址: </p>
                  <p>
                      <span>{{location.address}}</span>
                      <span>{{location.address_detail}}</span>
                  </p>
              </div>
              <div class="type">
                  <span>配送方式: </span>
                  <span>蜂鸟专送</span>
              </div>
          </div>
          <div class="order">
                <h4>订单信息</h4>
                <div class="code">
                    <span>订单号: </span>
                    <span>{{order.id}}</span>
                </div>
                <div class="pay">
                    <span>支付方式: </span>
                    <span>在线支付</span>
                </div>
                <div class="date">
                    <span>下单时间: </span>
                    <span>{{order.formatted_created_at}}</span>
                </div>
          </div>
      </div>
  </div>
</template>

<script type="text/ecmascript-6">
export default {
  data() {
    return {
        order: {},
        location: JSON.parse(localStorage.location)
    };
  },
  components: {},
  created() {
    console.log(this.$route.params);
    this.order = this.$route.params;
  }
};
</script>

<style scoped lang="less">
.size(@width, @height) {
  width: @width;
  height: @height;
}
.orderDetail {
  background: #f5f5f5;
  -webkit-font-smoothing: antialiased;
  padding-bottom: .3rem;
  div {
    .nav {
      .size(3.2rem, 0.39rem);
      background-color: #3190e8;
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 0 0.15rem;
      position: fixed;
      left: 0;
      top: 0;
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
    .logo {
      display: flex;
      flex-direction: column;
      align-items: center;
      padding: 0.14rem;
      background-color: #fff;
      margin-bottom: 0.1rem;
      padding-top: 0.53rem;
      img {
        .size(0.6rem, 0.6rem);
        border: 0.01rem solid #3190e8;
        border-radius: 50%;
      }
      p {
        font-size: 0.18rem;
        color: #333;
        font-weight: 700;
        margin: 0.08rem;
      }
      a {
        font-size: 0.12rem;
        color: #3190e8;
        margin-top: 0.1rem;
        border: 0.005rem solid #3190e8;
        padding: 0.03rem 0.08rem;
        border-radius: 0.02rem;
      }
    }
    .detail {
      background: #fff;
      a {
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 0.04rem 0.1rem;
        border-bottom: 0.01rem solid #f5f5f5;
        .left {
          img {
            .size(0.24rem, 0.24rem);
            vertical-align: middle;
            margin-right: 0.04rem;
          }
          span {
            font-size: 0.15rem;
            color: #333;
            font-weight: 700;
          }
        }
        .right {
          .size(0.08rem, 0.08rem);
          border-top: 0.01rem solid #333;
          border-right: 0.01rem solid #333;
          transform: rotate(45deg);
        }
      }
      .food {
        li {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 0 0.1rem;
          line-height: 0.4rem;
          .left {
            font-size: 0.12rem;
            color: #666;
            flex: 4;
          }
          .right {
            flex: 1;
            display: flex;
            justify-content: space-between;
            align-items: center;
            .num {
              font-size: 0.12rem;
              color: #ccc;
            }
            .price {
              font-size: 0.12rem;
              color: #666;
            }
          }
        }
      }
      .deliver {
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 0 0.1rem;
        line-height: 0.4rem;
        border-top: 0.01rem solid #f5f5f5;
        span {
          font-size: 0.12rem;
          color: #666;
        }
      }
      .pay {
        font-size: 0.12rem;
        color: #fb6b23;
        border-top: 0.01rem solid #f5f5f5;
        font-weight: 700;
        line-height: 0.4rem;
        text-align: right;
        padding-right: 0.1rem;
      }
    }
    .deliverMess,
    .order {
      background-color: #fff;
      margin-top: 0.1rem;
      h4 {
        font-size: 0.15rem;
        color: #333;
        padding: 0.1rem;
        border-bottom: 0.01rem solid #f5f5f5;
      }
      div {
        display: flex;
        padding: 0.1rem;
        span {
          font-size: 0.13rem;
          color: #666;
          line-height: 0.2rem;
          &:first-child {
            margin-right: 0.05rem;
          }
        }
      }
      .address {
        display: flex;
        padding: 0.1rem;
        p {
          font-size: 0.13rem;
          color: #666;
          line-height: 0.2rem;
          &:first-child {
              margin-right: 0.05rem;
          }
        }
        span {
          display: block;
          font-size: 0.13rem;
          color: #666;
          line-height: 0.2rem;
        }
      }
    }
  }
}
</style>

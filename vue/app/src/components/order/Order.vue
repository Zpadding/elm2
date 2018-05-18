<template>
    <div class="order">
        <div>
            <div class="nav">
                <span @click="$router.go(-1)"></span>
                <span>订单列表</span>
                <span></span>
            </div>
            <ul class="indent">
                <li v-for="(order, index) in orders" @click="detail(order)">
                    <img :src="'//elm.cangdu.org/img/' + order.restaurant_image_url" alt="">
                    <div class="body">
                        <div class="top">
                            <div class="head">
                                <div class="left">
                                    <h4>{{order.restaurant_name}}(图片)</h4>
                                    <p>{{order.formatted_created_at}}</p>
                                </div>
                                <div class="right" v-if="15 * 60 - orders[index].time_pass > 0">等待支付</div>
                                <div class="right" v-else>支付超时</div>
                            </div>
                            <div class="foot">
                                <div class="left">{{order.basket.group[0][0].name}}
                                    <span  v-if="order.basket.group[0].length > 1"> 等{{order.total_quantity}}件商品</span>
                                </div>
                                <div class="right">¥{{order.total_amount}}</div>
                            </div>
                        </div>
                        <div class="bottom">
                            <div class="page">
                                <span v-if="15 * 60 - orders[index].time_pass > 0" class="time">去支付(还剩{{minute}}分{{second}}秒)</span>
                                <span  @click.stop="again(order)" v-else>再来一单</span>
                            </div>
                        </div>
                    </div>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  name: "Order",
  data() {
    return {
      orders: [],
      minute: "",
      second: ""
    };
  },
  created() {
    if (localStorage.user) {
      let user_id = JSON.parse(localStorage.user).id;

      let url = this.head_url + `/bos/v2/users/${user_id}/orders`;
      let params = {
        limit: 10
      };
      this.$http.get(url, { params: params }).then(res => {
        //console.log(res.data);
        this.orders = res.data;
        //console.log(this.orders[0].time_pass);
        let total_time = 15 * 60 - this.orders[0].time_pass;
        if (total_time > 0) {
          this.minute = parseInt(total_time / 60);
          this.second = total_time % 60;
          var timer = setInterval(() => {
            this.second--;
            if (this.second < 0) {
              if (this.minute > 0) {
                this.minute--;
                this.second = 59;
              } else {
                this.second = 0;
                this.payTime = false;
                clearInterval(timer);
              }
            }
            //   console.log(`${this.minute}分${this.second}秒`);
          }, 1000);
        } else {
          this.payTime = false;
        }
      });
    }
  },
  computed: {
    ...mapState(["head_url"])
  },
  methods: {
    detail(order) {
      this.$router.push({ name: "OrderDetail", params: order });
    },
    again(order) {
      this.$router.push({
        name: "Detail",
        params: {
          id: order.restaurant_id
        }
      });
    }
  }
};
</script>

<style scoped lang="less">
.size(@width, @height) {
  width: @width;
  height: @height;
}

.order {
  background: #f5f5f5;
  -webkit-font-smoothing: antialiased;
  padding-bottom: 0.4rem;
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
    .indent {
      padding-top: 0.39rem;
      li {
        background-color: #fff;
        display: flex;
        margin-bottom: 0.1rem;
        padding: 0.12rem 0.12rem 0;
        img {
          .size(0.4rem, 0.4rem);
          margin-right: 0.08rem;
        }
        .body {
          flex: 5;
          .top {
            .head {
              border-bottom: 0.005rem solid #f5f5f5;
              padding-bottom: 0.06rem;
              display: flex;
              justify-content: space-between;
              .left {
                h4 {
                  display: flex;
                  align-items: center;
                  justify-content: flex-start;
                  font-size: 0.15rem;
                  color: #333;
                  line-height: 0.2rem;
                  width: 1.8rem;
                }
                p {
                  font-size: 0.11rem;
                  color: #999;
                  line-height: 0.16rem;
                }
              }
              .right {
                font-size: 0.12rem;
                color: #333;
              }
            }
            .foot {
              display: flex;
              justify-content: space-between;
              line-height: 0.4rem;
              border-bottom: 0.005rem solid #f5f5f5;
              .left {
                font-size: 0.12rem;
                color: #666;
                width: 2rem;
              }
              .right {
                font-size: 0.12rem;
                color: #f60;
                font-weight: 700;
              }
            }
          }
          .bottom {
            text-align: right;
            line-height: 0.32rem;
            .page {
              display: inline-block;
              span {
                font-size: 0.11rem;
                color: #3190e8;
                border: 0.005rem solid #3190e8;
                padding: 0.02rem 0.04rem;
                border-radius: 0.03rem;
              }
              .time {
                font-size: 0.11rem;
                color: orange;
                padding: 0.02rem 0.04rem;
                border-radius: 0.03rem;
                color: orange;
                border-width: 0.01rem;
                border-style: solid;
                border-color: orange;
              }
            }
          }
        }
      }
    }
  }
}
</style>

<template>
    <div class="shop">
        <div>
            <div class="body">
                <router-link :to="{name: 'Detail', params: mes}" v-for="(mes, index) in mess" :key="index">
                    <div class="pic">
                        <img class="logo" :src="img_url+mes.image_path" alt="">
                    </div>
                    <div class="con">
                        <div class="one">
                            <div class="left">
                                <nobr>
                                    <span>品牌</span>
                                    <span>{{mes.name}}</span>
                                </nobr>
                            </div>
                            <ul class="right">
                                <li>保</li>
                                <li>准</li>
                                <li>票</li>
                            </ul>
                        </div>
                        <div class="two">
                            <div class="left">
                                <nobr>
                                <span>
                                    <el-rate
                                        v-model="mes.rating"
                                        disabled
                                        show-score
                                        text-color="#ff6000"
                                        score-template="{value}">
                                    </el-rate>
                                </span>
                                <span>月售{{mes.recent_order_num}}单</span>
                                </nobr>
                            </div>
                            <div class="right">
                                <span>蜂鸟专送</span>
                                <span>准时达</span>
                            </div>
                        </div>
                        <div class="three">
                            <div class="left">
                                <span>¥{{mes.float_minimum_order_amount}}起送/配送费约¥{{mes.float_delivery_fee}}</span>
                            </div>
                            <div class="right">
                                <span>{{mes.distance}} /</span>
                                <span>{{mes.order_lead_time}}</span>
                            </div>
                        </div>
                    </div>
                </router-link>
            </div>
        </div>

    </div>
</template>

<script type="text/ecmascript-6">
import { mapState } from "vuex";
import index from "_vue@2.5.16@vue";

export default {
  data() {
    return {
      mess: [],
      img_url: "https://elm.cangdu.org/img/"
    };
  },
  components: {},
  created() {
    //float_minimum_order_amount  order_lead_time rating  distance  recent_order_num
    let url = this.head_url + "/shopping/restaurants";
    let params = {
      latitude: 31.22967,
      longitude: 121.4762
    };
    this.$http
      .get(url, {
        params: params
      })
      .then(result => {
        // console.log(result);
        // console.log(result.data);
        this.mess = result.data;
      });
  },
  computed: {
    ...mapState(["head_url"]),
    ...mapState(["order"]),
    ...mapState(["classify"])
  },
  watch: {
    order() {
      console.log(this.order);
      let url = this.head_url + "/shopping/restaurants";
      var params = null;
      //float_minimum_order_amount  order_lead_time rating  distance  recent_order_num

      if (this.order == "float_minimum_order_amount") {
        params = {
          latitude: 31.22967,
          longitude: 121.4762,
          order_by: 1
        };
      } else if (this.order == "order_lead_time") {
        params = {
          latitude: 31.22967,
          longitude: 121.4762,
          order_by: 2
        };
      } else if (this.order == "rating") {
        params = {
          latitude: 31.22967,
          longitude: 121.4762,
          order_by: 3
        };
      } else if (this.order == "default") {
        params = {
          latitude: 31.22967,
          longitude: 121.4762,
          order_by: 4
        };
      } else if (this.order == "distance") {
        params = {
          latitude: 31.22967,
          longitude: 121.4762,
          order_by: 5
        };
      } else if (this.order == "recent_order_num") {
        params = {
          latitude: 31.22967,
          longitude: 121.4762,
          order_by: 6
        };
      }
      this.$http
        .get(url, {
          params: params
        })
        .then(result => {
          this.mess = result.data;
        });
    },
    classify() {
      this.mess = this.classify;
    }
  }
};
/*
    function arr_del(mess, rating) {
      let tmp = null;

      for (let i = 0; i < mess.length - 1; i++) {
        for (let j = 0; j < mess.length - i - 1; j++) {
          if (rating == "distance") {
            let str = mess[j][rating];
            if (parseFloat(mess[j][rating]) > parseFloat(mess[j + 1][rating])) {
              let tmp = mess[j];
              mess[j] = mess[j + 1];
              mess[j + 1] = tmp;
            }
          } else if (rating == "order_lead_time") {
            var num1 = 0;
            var num2 = 0;

            if (mess[j][rating].indexOf("小时") == -1) {
              mess[j][rating] = "0小时" + mess[j][rating];
            }
            var hour_m = mess[j][rating].split("小时");
            num1 = parseFloat(hour_m[0]) * 60 + parseFloat(hour_m[1]);
            num2 =
              parseFloat(mess[j + 1][rating].split("小时")[0]) * 60 +
              parseFloat(mess[j + 1][rating].split("小时")[1]);

            if (num1 > num2) {
              let tmp = mess[j];
              mess[j] = mess[j + 1];
              mess[j + 1] = tmp;
            }
          }else if (mess[j].rating < mess[j + 1].rating) {
            let tmp = mess[j];
            mess[j] = mess[j + 1];
            mess[j + 1] = tmp;
          }
        }
      }
      console.log(mess);
      return mess;
    }*/
</script>

<style scoped>
.shop {
  font-size: 0.12rem;
  color: #999;
  background: white;
}

.body a {
  padding: 0.14rem 0.08rem;
  display: flex;
  /* justify-content: space-around; */
  color: #999;
  border-bottom: 0.005rem solid #f1f1f1;
}
.con {
  width: 2.5rem;
}
.body .left {
  margin: 0 0.1rem;
}

/* .body .right {
  min-width: 1.1rem;
  text-align: right;
} */

.one,
.two,
.three {
  overflow: hidden;
  margin-bottom: 0.1rem;
  display: flex;
  justify-content: space-between;
}

.body .pic .logo {
  width: 0.54rem;
  height: 0.54rem;
}
.one .left {
  max-width: 1rem;
  overflow: hidden;
  text-overflow: ellipsis;
}
.one .left span {
  font-size: 0.13rem;
  color: #333;
  font-weight: bold;
  /* height: 0.12rem; */
  /* line-height: .12rem; */
}

.one .left span:nth-of-type(1) {
  display: inline-block;
  width: 0.26rem;
  background: #ffd930;
  padding: 0 0.03rem;
  border-radius: 0.03rem;
  font-weight: bold;
}

.one .right {
  display: flex;
  transform: scale(0.8);
  justify-content: flex-end;
}

.one .right li {
  display: inline-block;
  margin-left: 0.01rem;
  padding: 0 0.008rem;
  border: 0.01rem solid #f1f1f1;
  border-radius: 0.016rem;
  color: #999;
}

.two .left span {
  display: inline-block;
  line-height: 0.17rem;
}

.two .left span:nth-child(2) {
  display: inline-block;
  font-size: 0.08rem;
  transform: scale(0.8);
  margin-left: -.04rem;
  color: #666;
}

.two .right {
  transform: scale(0.7);
  margin-right: -0.03rem;
}

.two .right span {
  display: inline-block;
  line-height: 0.1rem;
  font-size: 0.08rem;
  padding: .008rem .016rem;
  border-radius: 0.005rem;
  text-align: center;
}

.two .right span:first-child {
  background: #3190e8;
  color: white;
  border: 0.005rem solid #3190e8;
}

.two .right span:nth-of-type(2) {
  color: #3190e8;
  border: 0.01rem solid #3190e8;
}

.three span {
  line-height: 0.15rem;
}

.three .left {
  color: #666;
  font-size: 0.1rem;
  transform: scale(0.9);
  white-space: nowrap;
}

.three .right {
  transform: scale(0.9);
  white-space: nowrap;
  margin-right: .03rem;
}

.three .right span {
  font-size: 0.1rem;
}

.three .right span:nth-of-type(2) {
  color: #3190e8;
}
</style>

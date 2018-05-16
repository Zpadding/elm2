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
                            <span>评分:{{mes.rating}}</span>
                            <span>月售{{mes.recent_order_num}}单</span>
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
      img_url: "//elm.cangdu.org/img/"
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
      })
      .catch(err => {
        console.log(err);
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
  border-bottom: 0.01rem solid #e3e3e3;
}
.body .left {
  margin: 0 0.2rem;
  max-width: 1.1rem;
}
.body .right {
  max-width: 1.1rem;
}
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
}
.one .right li {
  margin-left: 0.01rem;
  padding: 0 0.01rem;
  border: 0.01rem solid #f1f1f1;
  border-radius: 0.03rem;
}
.two .left span {
  color: #333;
  display: inline-block;
  font-weight: 200;
  line-height: 0.17rem;
}
.two .left span:nth-child(2) {
  display: inline-block;
  font-size: 0.08rem;
  transform: scale(0.8);
}
.two .right {
  transform: scale(0.7);
  margin-right: -0.08rem;
}
.two .right span {
  display: inline-block;
  height: 0.14rem;
  line-height: 0.14rem;
  font-size: 0.08rem;
  padding: 0.01rem;
  border-radius: 0.03rem;
  text-align: center;
}
.two .right span:first-child {
  width: 0.48rem;
  background: #3190e8;
  color: white;
  border: 0.01rem solid #3190e8;
}
.two .right span:nth-of-type(2) {
  width: 0.36rem;
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
}
.three .right {
  margin-right: -0.08rem;
  transform: scale(0.9);
}
.three .right span {
  font-size: 0.1rem;
}
.three .right span:nth-of-type(2) {
  color: #3190e8;
}
</style>

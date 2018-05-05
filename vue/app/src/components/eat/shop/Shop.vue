<template>
  <div class="shop">
      <div>
          <div class="head">
            <img class="logo" :src="logo" alt="">
            <span>附近商家</span>
          </div>
          <div class="body">
              <router-link to="/show" v-for="mes in mess">
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
                            <span>评分{{mes.rating}}</span>
                            <span>月售{{mes.recent_order_num}}单</span>
                        </div>
                        <div class="right">
                            <span>蜂鸟专送</span>
                            <span>准时达</span>
                        </div>
                    </div>
                    <div class="three">
                        <div class="left">
                            <span>¥20起送/配送费约¥5</span>
                        </div>
                        <div class="right">
                            <span>{{mes.distance}}/</span>
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
import logo from "../../../assets/z-3.jpg";
import {mapState} from 'vuex';
export default {
  data() {
    return {
      logo: logo,
      mess: [],
      img_url: "//elm.cangdu.org/img/"
    };
  },
  components: {},
  created() {
      let url = this.head_url+"/shopping/restaurants";
      let params = {
          latitude: 31.22967,
          longitude: 121.4762
      };
      this.$http.get(url, {
          params: params
      }).then((result) => {
          console.log(result.data);
          this.mess = result.data;
      }).catch((err) => {
          console.log(err);
      });
  },
  computed: {
      ...mapState(["head_url"]),
  }
};
</script>

<style scoped>
.shop {
  margin-top: 0.08rem;
  font-size: 0.12rem;
  border-top: 0.01rem solid #e3e3e3;
  color: #999;
}
.head {
  width: 3.2rem;
  height: 0.33rem;
  display: flex;
  align-items: center;
}
.head .logo {
  width: 0.12rem;
  height: 0.12rem;
  margin: 0 0.07rem 0 0.12rem;
}
.body a {
  padding: 0.14rem 0.08rem;
  display: flex;
  justify-content: space-around;
  color: #999;
  border-bottom: 0.01rem solid #e3e3e3;
}
.body .left {
  margin: 0 0.2rem;
  max-width: 1rem;
}
.body .right {
  max-width: 1.1rem;
}
.one,
.two,
.three {
  overflow: hidden;
  margin-bottom: 0.1rem;
}
.body .pic .logo {
  width: 0.54rem;
  height: 0.54rem;
}
.one .left {
  font-size: 0.13rem;
  /* height: 0.12rem; */
  /* line-height: .12rem; */
}
.one .left span:first-child {
  width: .24rem;
  background: #ffd930;
  padding: 0 0.03rem;
  border-radius: 0.05rem;
}
.one .right {
  display: flex;
}
.one .right li {
  margin-left: 0.01rem;
  padding: 0 0.01rem;
  border: 0.01rem solid #f1f1f1;
  border-radius: .03rem;
}
.two .left {
  font-weight: 200;
}
.two .right span {
  display: inline-block;
  height: 0.13rem;
  line-height: 0.13rem;
}
.two .right span:first-child {
  width: 0.48rem;
  background: #3190e8;
  color: white;
  border: 0.01rem solid #3190e8;
  border-radius: 0.02rem;
  font-weight: 100;
  /* font-family: STkaiti; */
}
.two .right span:nth-of-type(2) {
  /* background: #3190e8; */
  width: 0.36rem;
  color: #3190e8;
  border: 0.01rem solid #3190e8;
  border-radius: 0.02rem;
  font-weight: 100;
}
.three .right span:nth-of-type(2) {
  color: #3190e8;
}
</style>

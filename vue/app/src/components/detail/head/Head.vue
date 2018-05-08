<template>
  <div class="head" :style="'background: url('+img_url+shop.image_path+') 0% 0% / cover no-repeat'">
      <div class="body">
          <div class="logo">
              <img :src="img_url+shop.image_path" alt="">
              <div class="back" @click="back"></div>
          </div>
          <div class="detail">
              <div class="top">
                <h3>{{shop.name}}</h3>
              </div>
              <div class="middle">
                  <span v-if='shop.piecewise_agent_fee'>商家配送 / 分钟送达 / {{shop.piecewise_agent_fee.tips}}</span>
                  <span></span>
              </div>
              <div class="bottom">
                  <nobr><span>公告: {{shop.promotion_info}}</span></nobr>
              </div>
          </div>
          
      </div>
  </div>
</template>

<script type="text/ecmascript-6">
import { mapState } from "vuex";
export default {
  data() {
    return {
      shop: {},
      img_url: "//elm.cangdu.org/img/"
    };
  },
  components: {},
  created() {
    if (this.$route.params.id) {
      var id = this.$route.params.id;
      localStorage.id = id;
    } else {
      var id = localStorage.id;
    }
    let shop_url = this.head_url + "/shopping/restaurant/" + id;
    this.$http.get(shop_url).then(res => {
      console.log(res.data);
      this.shop = res.data;
      //console.log(this.shop)
    });
  },
  computed: {
    ...mapState(["head_url"])
  },
  methods: {
    back() {
      this.$router.push({name: "Eat"});
    }
  }
};
</script>

<style scoped>
.body {
  width: 3.2rem;
  height: 0.84rem;
  display: flex;
  padding: 0.08rem;
  box-sizing: border-box;
  background-color: rgba(119, 103, 137, 0.43);
}
.body .logo img {
  width: 0.58rem;
  height: 0.58rem;
}
.body .logo {
  position: relative;
}
.back {
  width: .1rem;
  height: .1rem;
  border-top: .03rem solid #ffffff;
  border-left: .03rem solid #ffffff;
  transform: rotate(-45deg);
  font-size: 0.3rem;
  font-weight: bold;
  position: absolute;
  left: 0;
  top: 0;
}

.body .detail {
  margin-left: 0.1rem;
}
.body .detail .top h3 {
  font-size: 0.16rem;
  color: white;
  font-weight: 700;
  margin-bottom: 0.1rem;
}
.middle,
.bottom {
  font-weight: 100;
  font-size: 0.1rem;
  color: #fff;
  margin-bottom: 0.11rem;
  overflow: hidden;
  text-overflow: ellipsis;
  display: flex;
  justify-content: space-between;
}
.middle span:last-child {
    width: .12rem;
    height: 0.12rem;
    border-top: .01rem solid white;
    border-right: .01rem solid white;
    transform: rotate(45deg);
    margin-right: .05rem;
}
</style>

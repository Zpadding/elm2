<template>
  <div class="detail">
      <div class="hold"></div>
      <Head></Head>
      <div class="select">
          <span class="choose" @click="select(1)">商品</span>
          <span @click="select(2)">评价</span>
      </div>
    <Product v-if="productComment"></Product>
    <Comment v-if="!productComment"></Comment>
    <Car></Car>
  </div>
</template>

<script type="text/ecmascript-6">
import Head from "./head/Head";
import Product from "./product/Product";
import Comment from "./comment/Comment";
import Car from "./car/Car";
export default {
  data() {
    return {
      productComment: true
    };
  },
  components: {
    Head,
    Product,
    Comment,
    Car
  },
  methods: {
    select(index, $event) {
      if (document.querySelector(".choose")) {
        document.querySelector(".choose").removeAttribute("class");
        event.target.setAttribute("class", "choose");
      }
      if (index == 1) {
        this.productComment = true;
      } else {
        this.productComment = false;
      }
    }
  },
  created() {
    //console.log(this.$route.params);
    // if (this.$route.params.id) {food_url
    //   var id = this.$route.params.id;
    //   localStorage.id = id;
    // } else {
    //   var id = localStorage.id;
    // }
    // let shop_url = this.head_url + "/shopping/restaurant/" + id;
    // this.$http.get(shop_url).then(res => {
    //     //console.log(res.data);
    //     localStorage.shop = JSON.stringify(res.data);
    // });
    // let food_url = this.head_url + "/shopping/v2/menu?restaurant_id=" + id;
    // this.$http.get(food_url).then(res => {
    //     //console.log(res.data);
    //     localStorage.food = JSON.stringify(res.data);
    // });
  },
  computed: {}
};
</script>

<style scoped>
/* .hold {
    width: 3.2rem;
    height: 1.37rem;
} */
.detail {
  overflow: hidden;
  width: 3.2rem;
  -webkit-font-smoothing: antialiased;
}
.select {
  width: 3.2rem;
  height: 0.28rem;
  display: flex;
  justify-content: space-around;
  align-items: center;
  background-color: #fff;
  padding: 0.12rem 0;
  border-bottom: 0.01rem solid #ebebeb;
  position: fixed;
  left: 0;
  top: 0.84rem;
  z-index: 1;
}
.select span {
  font-size: 0.13rem;
  color: #666;
  padding: 0.04rem 0.02rem;
  border-bottom: 0.024rem solid #fff;
}
.select .choose {
  color: #3190e8;
  border-bottom: 0.024rem solid #3190e8;
}
</style>

<template>
  <div class="detail">
      <Head></Head>
      <div class="select">
          <span class="product">商品</span>
          <span class="comment">评价</span>
      </div>
  </div>
</template>

<script type="text/ecmascript-6">
import Head from './head/Head'
export default {
  data() {
    return {
        
    };
  },
  components: {
      Head
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
  computed: {
  }
};
</script>

<style scoped>
.detail {
  -webkit-font-smoothing: antialiased;
}
.select {
    width: 3.2rem;
    height: 0.28rem;
    display: flex;
    justify-content: space-around;
    align-items: center;
    background-color: #fff;
    padding: .12rem 0;
    border-bottom: .01rem solid #ebebeb;
}
.product, .comment {
    font-size: .13rem;
    color: #666;
    padding: .04rem .02rem;
    border-bottom: .024rem solid #fff;
}
.choose {
    color: #3190e8;
    border-bottom: .024rem solid #3190e8;
}
</style>

<template>
  <div class="product">
    <div class="body">
      <ul class="classify">
        <li v-for="(food, index) in foods">
          <img :src="img_url+image_url[index]" alt="">
          <span>{{food.name}}</span>
        </li>
      </ul>
      
      <div>
        <div v-for="food in foods">
        <div class="title">
          <div class="big">{{food.name}}</div>
          <div class="small">{{food.description}}</div>
          <div class="ellipsis">...</div>
        </div>

        
        <ul class="food" v-for="product in food.foods">
          <li>
            <div class="logo">
              <img :src="img_path+product.image_path" alt="">
            </div>
            <div class="detail">
              <div class="one">{{product.name}}</div>
              <div class="two">{{product.description}}</div>
              <div class="count">
                <span>月售{{product.month_sales}}份</span>
                <span>好评率{{product.satisfy_rate}}%</span>
              </div>
              <div v-if="product.activity" class="promotion">{{product.activity.image_text}}</div>
              <div class="price">
                <div class="left">
                  <span>¥20</span>
                  <span>起</span>
                </div>
                <div class="right">选规格</div>
              </div>
            </div>
          </li>
        </ul>
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
      foods: {},
      img_url: "https://fuss10.elemecdn.com/",
      img_path: "//elm.cangdu.org/img/"
    };
  },
  components: {},
  created() {
    //  console.log(this.$route.params);
    if (this.$route.params.id) {
      food_url;
      var id = this.$route.params.id;
      localStorage.id = id;
    } else {
      var id = localStorage.id;
    }
    let food_url = this.head_url + "/shopping/v2/menu?restaurant_id=" + id;
    this.$http.get(food_url).then(res => {
      //console.log(res.data);
      this.foods = res.data;
    });
  },
  computed: {
    ...mapState(["head_url"]),
    image_url() {
      if (Object.keys(this.foods).length) {
        console.log(this.foods);
        let image_url = this.foods.map((value, index) => {
          let img_url = img_path(value.icon_url);
          return img_url;
        });
        return image_url;
      }
    }
  }
};
function img_path(img) {
  // console.log(img.split(""));
  var a1 = img.split("");
  if (a1.length > 0) {
    a1.splice(1, 0, "/");
    a1.splice(4, 0, "/");
    if (a1.length == 37) {
      var a2 = a1.join("") + ".png";
    } else {
      var a2 = a1.join("") + ".jpeg";
    }
    // console.log(a2);
    return a2;
  } else {
    return "1/ba/bf6efbfdb0ef701f19689a5529e5fjpeg.jpeg";
  }
}
</script>

<style scoped>
.body {
  width: 3.2rem;
  display: flex;
}
.classify li {
  width: 0.61rem;
  height: 0.28rem;
  padding: 0.14rem 0.06rem;
  border-bottom: 0.005rem solid #ededed;
  border-left: 0.03rem solid #f8f8f8;
}
.classify img {
  width: 0.1rem;
  height: 0.12rem;
}
.classify span {
  line-height: 0.28rem;
  font-size: 0.12rem;
  color: #666;
}
.active {
  font-weight: 700;
  border-left: 0.03rem solid #3190e8;
  background-color: #fff;
}
.logo img {
  width: 0.4rem;
  height: 0.4rem;
}
.title {
  width: 2.28rem;
  padding: 0.08rem;
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  white-space: nowrap;
  background: #f5f5f5;
  /* overflow: hidden; */
}
.title .big {
  font-size: 0.14rem;
  color: #666;
  font-weight: 700;
}
.title .small {
  width: 1.44rem;
  font-size: 0.1rem;
  color: #999;
  overflow: hidden;
}
.title .ellipsis {
  width: 0.1rem;
  height: 0.2rem;
}
.food li {
  display: flex;
  background-color: #fff;
  padding: 0.12rem 0.08rem;
  border-bottom: 0.01rem solid #f8f8f8;
}
.food li .logo {
  margin-right: 0.1rem;
}
.detail .one {
  margin-bottom: 0.04rem;
}
.detail .two {
  font-size: 0.1rem;
  color: #999;
  line-height: 0.12rem;
}
.detail .count {
  font-size: 0.1rem;
  color: #333;
}
.promotion {
  display: inline-block;
  color: rgb(241, 136, 79);
  border-color: rgb(240, 115, 115);
  font-size: 0.06rem;
  border: 0.01rem solid currentColor;
  border-radius: 0.06rem;
  padding: 0.016rem;
  transform: scale(0.8);
  margin-left: -0.07rem;
}
.price {
  width: 1.8rem;
  height: 0.23rem;
  font-size: 0.1rem;
  color: #666;
  /* margin-left: .48rem; */
  font-size: 0;
  margin-top: 0.06rem;
}
.price .left span:first-child {
  font-size: 0.1rem;
  color: #f60;
  font-weight: 700;
  margin-right: 0.06rem;
}
.price .right {
  display: block;
  font-size: 0.11rem;
  color: #fff;
  padding: 0.02rem 0.04rem;
  background-color: #3190e8;
  border-radius: 0.04rem;
  border: 0.01rem solid #3190e8;
}
</style>

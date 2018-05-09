<template>
  <div class="product">
    <div class="body">
      <div class="fixed">
      <ul class="classify">
        <li v-for="(food, index) in foods" :class="{active:index == num}" @click="classify(index)">
          <img :src="img_url+image_url[index]" alt="">
          <span>{{food.name}}</span>
        </li>
      </ul>
      </div>
      
      <div class="goods">
        <!-- <div v-for="(food, index) in foods" :id="'food'+index" :style="index==0?'paddingTop: 1.37rem':'paddingTop: 1.37rem; marginTop: -1.37rem'"> -->
        <div v-for="(food, index) in foods" :id="'food'+index" :style="animation" class="ani" @touchstart="scroll" @mousewheel="scroll">
          
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
      img_path: "//elm.cangdu.org/img/",
      num: 0,
      animation: {
        paddingTop: "1.37rem",
        marginTop: "-1.37rem"
      }
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
  },
  methods: {
    scroll(e) {
      console.log(e.currentTarget);
      let id = e.currentTarget.getAttribute("id").substring(4);
      console.log(id);
      this.num = id;
    },
    classify(index) {
      this.num = index;
      let begin_scroll = document.documentElement.scrollTop;
      let target = document.querySelector("#food" + index);
      let step = 0;
      var timer1 = setInterval(() => {
        let end_scroll = target.offsetTop + 137;
        step++;
        document.documentElement.scrollTop =
          begin_scroll + (end_scroll - begin_scroll) / 20 * step;
        if (step >= 20) {
          clearInterval(timer1);
        }
      }, 20);

      // let mark = document.querySelector(".classify");
      // let begin = mark.offsetTop / 100;
      // let end = -(this.num - 3) * 0.565;
      // if (end < 0 && end > -14 * 0.565) {
      //   let count = 0;
      //   var timer = setInterval(() => {
      //     count++;
      //     mark.style.top = mark.offsetTop / 100 + (end - begin) / 20 + "rem";
      //     if (count >= 20) {
      //       clearInterval(timer);
      //     }
      //   }, 20);
      // } else if (end >= 0 && end < 3 * 0.565) {
      //   let count = 0;
      //   var timer = setInterval(() => {
      //     count++;
      //     mark.style.top = mark.offsetTop / 100 + (0 - begin) / 20 + "rem";
      //     if (count >= 20) {
      //       clearInterval(timer);
      //     }
      //   }, 20);
      // }

      // }
    },
    handleScroll() {
      var scrollTop =
        window.pageYOffset ||
        document.documentElement.scrollTop ||
        document.body.scrollTop;
      // console.log(scrollTop);
    }
  },
  mounted() {
    window.addEventListener("scroll", this.handleScroll);
  },
  destroyed() {
    window.removeEventListener("scroll", this.handleScroll);
  },
  watch: {
    num() {
      setTimeout(() => {
        let mark = document.querySelector(".classify");
        let begin = mark.offsetTop / 100;
        let end = -(this.num - 3) * 0.565;
        if (end < 0 && end > -14 * 0.565) {
          let count = 0;
          var timer = setInterval(() => {
            count++;
            mark.style.top = mark.offsetTop / 100 + (end - begin) / 20 + "rem";
            if (count >= 20) {
              clearInterval(timer);
            }
          }, 20);
        } else if (end >= 0 && end < 3 * 0.565) {
          let count = 0;
          var timer = setInterval(() => {
            count++;
            mark.style.top = mark.offsetTop / 100 + (0 - begin) / 20 + "rem";
            if (count >= 20) {
              clearInterval(timer);
            }
          }, 20);
        }
      }, 400);
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
/* :target {
  background: black;
  animation: fromBtm .4s;
}
@keyframes fromBtm {
  from { transform: translateY(-100%); }
  to { transform: translateY(0); }
} */
.fixed {
  width: 0.61rem;
  height: 100%;
  position: fixed;
  top: 1.37rem;
  left: 0;
}
.classify {
  background: #f5f5f5;
  position: absolute;
  top: 0;
  left: 0;
}
.classify li {
  width: 0.61rem;
  height: 0.28rem;
  padding: 0.14rem 0.06rem;
  border-bottom: 0.005rem solid #ededed;
  border-left: 0.03rem solid #f8f8f8;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
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
.classify .active {
  font-weight: 700;
  border-left: 0.03rem solid #3190e8;
  background-color: #fff;
}
.goods {
  margin-left: 0.76rem;
  position: absolute;
  top: 1.37rem;
  /* margin-top: 1.37rem; */
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

<template>
  <div class="product" v-if="allFood.length>0">
    <div class="body">
      <div class="fixed">
      <ul class="classify">
        <li v-for="(food, index) in allFood" :class="{active:index == num}" @click="classify(index)">
          <img v-if="image_url" :src="img_url+image_url[index]" alt="">
          <span>{{food.name}}</span>
        </li>
      </ul>
      </div>
      
      <div class="goods">
        <div v-if="allFood" v-for="(food, index) in allFood" :id="'food'+index" :style="animation"  @touchstart="scroll" @mousewheel="scroll">
          
        <div class="title">
          <div class="big">{{food.name}}</div>
          <div class="small">{{food.description}}</div>
          <div class="ellipsis">...</div>
        </div>

        
        <ul v-if="food.foods" class="food" v-for="(product, index) in food.foods" @click="foodDetail(product)">
          <li>
            <span class="new" v-if="product.attributes.length && product.attributes[0].icon_name=='新'">新品</span>
            

            <div class="logo">
              <img :src="img_path+product.image_path" alt="">
            </div>
            <div class="detail">
              <div class="one">
                <div>{{product.name}}</div>
                <span class="sign" v-if="product.attributes.length? product.attributes[0].icon_name=='招牌'? true: product.attributes.length == 2? product.attributes[1].icon_name=='招牌'? true:false :false :false">招牌</span>
              </div>
              
              <div class="two">{{product.description}}</div>
              <div class="count">
                <span>月售{{product.month_sales}}份</span>
                <span>好评率{{product.satisfy_rate}}%</span>
              </div>
              <div v-if="product.activity" class="promotion">{{product.activity.image_text}}</div>
              <div class="price">
                <div class="left">
                  <span>¥{{product.specfoods[0].price}}</span>
                  <span>起</span>
                </div>
                <div class="right">
                  <span class="reduce" v-show="product.number" @click.stop="reduce(product)">-</span>
                  <span class="num" v-show="product.number">{{product.number}}</span>
                  <span class="type" v-if="product.specfoods.length>1" @click.stop="choose(product, index)">选规格</span>
                  <span class="add" v-if="product.specfoods.length<=1" @click.stop="add(product)">+</span>
                  <span class="ani"  style="display: none" v-if="product.specfoods.length<=1">+</span>
                </div>
              </div>
            </div>
          </li>
        </ul>
        </div>
      </div>

      <div class="specfoods" v-if="show">
          <div class="all">
            <div class="top">
              <span></span>
              <span>{{specfoods.name}}</span>
              <span @click="show=!show">×</span>
            </div>
            <div class="middle">
              <p>规格</p>
              <div>
                <span v-for="(specfood, index) in specfoods.specfoods" @click="number = index" :class="{active: index==number}">{{specfood.specs_name}}</span>
              </div>
            </div>
            <div class="bottom">
              <div class="left">¥ {{specfoods.specfoods[number].price}}</div>
              <div class="right" @click="increase(specfoods)">加入购物车</div>
            </div>
          </div>
          
        </div>
      
    </div>
    <Car></Car>
    
  </div>
</template>

<script type="text/ecmascript-6">
import { mapState } from "vuex";
import Car from "../car/Car";
import FoodDetail from "../foodDetail/FoodDetail";
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
      },
      show: false,
      specfoods: {},
      number: 0,
      shopCar: [],
      index: "",
      isAni: false
    };
  },
  components: {
    Car
  },
  created() {
    if (this.$route.params.id) {
      var id = this.$route.params.id;
      localStorage.id = id;
    } else {
      var id = localStorage.id;
    }

    if (!this.isPay && Object.keys(JSON.parse(localStorage.allFood)).length) {
      this.$store.commit("allFood", JSON.parse(localStorage.allFood));
    } else {
      let food_url = this.head_url + "/shopping/v2/menu?restaurant_id=" + id;
      this.$http.get(food_url).then(res => {
        this.foods = res.data.map(value => {
          value.foods.map(value => {
            value.number = 0;
            return value;
          });
          return value;
        });
        console.log(this.foods);
        this.$store.commit("allFood", this.foods);
      });
    }

    //console.log(localStorage.car);

    // if (localStorage.car) {
    //   let car = JSON.parse(localStorage.car);
    //   console.log(car);
    //   console.log(this.car);
    //   for (let i = 0; i < car.length; i++) {
    //     let num = car[i].dom;
    //     console.log(num);
    //     console.log(car[i].quantity);
    //     num.innerHTML = car[i].quantity;
    //     console.log(num.innerHTML);
    // if (Number(num.innerHTML)) {
    //   num.style.display = "inline-block";
    //   num.previousElementSibling.style.display = "inline-block";
    // }
    //   }
    // }
  },
  computed: {
    ...mapState(["head_url", "car", "price", "allFood", "isPay"]),
    image_url() {
      if (Object.keys(this.foods).length) {
        //console.log(this.foods);
        let image_url = this.foods.map((value, index) => {
          let img_url = img_path(value.icon_url);
          return img_url;
        });
        return image_url;
      }
      return "";
    }
  },
  methods: {
    scroll(e) {
      let id = e.currentTarget.getAttribute("id").substring(4);
      this.num = id;
    },
    classify(index) {
      let fontSize = parseFloat(document.documentElement.style.fontSize);
      this.num = index;
      let begin_scroll = document.documentElement.scrollTop;
      let target = document.querySelector("#food" + index);
      let step = 0;
      var timer1 = setInterval(() => {
        let end_scroll = target.offsetTop + 1.37 * fontSize;
        step++;
        document.documentElement.scrollTop =
          begin_scroll + (end_scroll - begin_scroll) / 20 * step;
        if (step >= 20) {
          clearInterval(timer1);
        }
      }, 20);
    },
    handleScroll() {
      var scrollTop =
        window.pageYOffset ||
        document.documentElement.scrollTop ||
        document.body.scrollTop;
    },
    choose(data, index) {
      console.log(data);
      this.show = !this.show;
      this.specfoods = data;
      this.index = index;
    },
    add(data, $event) {
      //购物车数据[{attrs:[],extra:{},id:食品id,name:食品名称,packing_fee:打包费,price:价格,quantity:数量,sku_id:规格id,specs:规格,stock:存量,}]
      if (!this.isAni) {
        this.isAni = true;
        var num = event.target.previousElementSibling;
        var index = 0;
        let food = data.specfoods[0];
        let product = {
          attrs: [],
          extra: {},
          id: food.food_id,
          name: food.name,
          packing_fee: food.packing_fee,
          price: food.price,
          quantity: 1,
          sku_id: food.sku_id,
          specs: [],
          stock: food.stock,
          data: data,
          dom: num
        };
        //console.log(product);
        let isExist = null;
        if (this.shopCar.length > 0) {
          for (let i = 0; i < this.shopCar.length; i++) {
            if (this.shopCar[i].id == product.id) {
              isExist = true;
              index = i;
              break;
            } else {
              isExist = false;
              index = this.shopCar.length;
            }
          }
          if (isExist) {
            this.shopCar[index].quantity++;
          } else {
            this.shopCar.push(product);
          }
        } else {
          this.shopCar.push(product);
        }
        let price = 0;
        for (let i = 0; i < this.shopCar.length; i++) {
          price += this.shopCar[i].price * this.shopCar[i].quantity;
        }

        console.log(this.shopCar, price);

        this.$store.commit("car", this.shopCar);
        this.$store.commit("price", price);
        var num = event.target.previousElementSibling;

        localStorage.car = JSON.stringify(this.car);

        console.log(this.car);
        data.number++;
        // console.log(this.$store.state.allFood);
        if (data.number) {
          // num.style.display = "inline-block";
          num.className = "num fadeIn";
          // num.previousElementSibling.style.display = "inline-block";
          num.previousElementSibling.className = "reduce offset";
        }
        localStorage.allFood = JSON.stringify(this.allFood);
        localStorage.car = JSON.stringify(this.car);
        localStorage.price = JSON.stringify(this.price);
        //抛物线动画
        let ani = event.target.nextElementSibling;
        let fontSize = parseFloat(document.documentElement.style.fontSize);
        ani.style.display = "inline-block";
        ani.style.left = event.clientX - ani.offsetWidth / 2 + "px";
        ani.style.top = event.clientY - ani.offsetHeight / 2 + "px";
        //26 527
        //S=(V+AT)/2*T A=(S/T*2-V)/T
        let step = 40;
        let beginX = ani.offsetLeft;
        let beginY = ani.offsetTop;
        let endX = 26;
        let endY = 527;
        let count = 0;
        let speedX = -10;
        let speedY = -10;
        let time = (endX - beginX) / speedX;
        let a = (endY - beginY - speedY * time) * 2 / (time * time);
        let timer = setInterval(() => {
          count++;
          ani.style.left = ani.offsetLeft + speedX + "px";
          ani.style.top = ani.offsetTop + speedY + "px";
          speedY += a;
          if (count >= step) {
            clearInterval(timer);
            ani.style.display = "none";
          }
        }, 20);
        setTimeout(() => {
          this.isAni = false;
        }, 1200);
      }
    },
    increase(data) {
      //购物车数据[{attrs:[],extra:{},id:食品id,name:食品名称,packing_fee:打包费,price:价格,quantity:数量,sku_id:规格id,specs:规格,stock:存量,}]
      let food = data.specfoods[this.number];
      var num = document.querySelectorAll(".num")[this.index];

      this.show = !this.show;
      let product = {
        attrs: [],
        extra: {},
        id: food.food_id,
        name: food.name,
        packing_fee: food.packing_fee,
        price: food.price,
        quantity: 1,
        sku_id: food.sku_id,
        specs: food.specs,
        stock: food.stock,
        data: data,
        dom: num
      };
      let isExist = null;
      if (this.shopCar.length > 0) {
        for (let i = 0; i < this.shopCar.length; i++) {
          if (this.shopCar[i].id == product.id) {
            isExist = true;
            var index = i;
            break;
          } else {
            isExist = false;
          }
        }
        if (isExist) {
          this.shopCar[index].quantity++;
        } else {
          this.shopCar.push(product);
        }
      } else {
        this.shopCar.push(product);
      }
      let price = 0;
      for (let i = 0; i < this.shopCar.length; i++) {
        price += this.shopCar[i].price * this.shopCar[i].quantity;
      }

      console.log(this.shopCar, price);

      this.$store.commit("car", this.shopCar);
      this.$store.commit("price", price);

      localStorage.car = JSON.stringify(this.car);

      var num = document.querySelectorAll(".num")[this.index];
      // num.innerHTML++;
      data.number++;
      if (data.number) {
        // num.style.display = "inline-block";
        num.className = "num fadeIn";
        // num.previousElementSibling.style.display = "inline-block";
        num.previousElementSibling.className = "reduce offset";
      }

      localStorage.car = JSON.stringify(this.car);
      localStorage.price = JSON.stringify(this.price);
      localStorage.allFood = JSON.stringify(this.allFood);
    },
    reduce(data, $event) {
      if (data.specfoods.length <= 1) {
        let food = data.specfoods[0];
        for (let i = 0; i < this.shopCar.length; i++) {
          if (this.shopCar[i].id == food.food_id) {
            this.shopCar[i].quantity--;
            if (!this.shopCar[i].quantity) {
              this.shopCar.splice(i, 1);
            }
            var num = event.target.nextElementSibling;
            data.number--;
            if (!data.number) {
              num.className = "num fadeOut";
              num.previousElementSibling.className = "reduce leave";
              // setTimeout(() => {
              //   num.style.display = "none";
              //   num.previousElementSibling.style.display = "none";
              // }, 490);
            }
            localStorage.car = JSON.stringify(this.car);
            localStorage.price = JSON.stringify(this.price);
            localStorage.allFood = JSON.stringify(this.allFood);

            let price = 0;
            for (let i = 0; i < this.shopCar.length; i++) {
              price += this.shopCar[i].price * this.shopCar[i].quantity;
            }

            this.$store.commit("car", this.shopCar);
            this.$store.commit("price", price);

            localStorage.car = JSON.stringify(this.car);

            break;
          }
        }
      } else {
        alert("多规格商品需要去购物车删除");
      }
      // console.log(this.shopCar);
      // console.log(this.price);
    },
    foodDetail(data) {
      setTimeout(() => {
        this.$router.push({ name: "FoodDetail", params: data });
      }, 300);
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
      if (this.foods.length && this.foods.length > 7) {
        let fontSize = parseFloat(document.documentElement.style.fontSize);
        setTimeout(() => {
          let mark = document.querySelector(".classify");
          let begin = mark.offsetTop / fontSize;
          let end = -(this.num - 3) * 0.565;
          if (end < 0 && end > -14 * 0.565) {
            let count = 0;
            var timer = setInterval(() => {
              count++;
              mark.style.top =
                mark.offsetTop / fontSize + (end - begin) / 20 + "rem";
              if (count >= 20) {
                clearInterval(timer);
              }
            }, 20);
          } else if (end >= 0 && end < 3 * 0.565) {
            let count = 0;
            var timer = setInterval(() => {
              count++;
              mark.style.top =
                mark.offsetTop / fontSize + (0 - begin) / 20 + "rem";
              if (count >= 20) {
                clearInterval(timer);
              }
            }, 20);
          }
        }, 400);
      }
    },
    show() {
      if (this.show == false) {
        this.number = 0;
      }
    }
  }
};
function img_path(img) {
  var a1 = img.split("");
  if (a1.length > 0) {
    a1.splice(1, 0, "/");
    a1.splice(4, 0, "/");
    if (a1.length == 37) {
      var a2 = a1.join("") + ".png";
    } else {
      var a2 = a1.join("") + ".jpeg";
    }
    return a2;
  } else {
    return "1/ba/bf6efbfdb0ef701f19689a5529e5fjpeg.jpeg";
  }
}
</script>

<style scoped>
@keyframes offset {
  from {
    transform: translate(0.5rem);
    opacity: 0;
  }
  to {
    transform: translate(0);
    opacity: 1;
  }
}
@keyframes leave {
  to {
    transform: translate(0.5rem);
    opacity: 0;
  }
  from {
    transform: translate(0);
    opacity: 1;
  }
}
@keyframes fadeIn {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}
@keyframes fadeOut {
  to {
    opacity: 0;
  }
  from {
    opacity: 1;
  }
}
.offset {
  animation: offset 0.5s;
}
.leave {
  animation: leave 0.5s;
}
.fadeIn {
  animation: fadeIn 0.5s;
}
.fadeOut {
  animation: fadeOut 0.5s;
}
.body {
  width: 3.2rem;
  display: flex;
}
.fixed {
  width: 0.77rem;
  height: 100%;
  background: #f5f5f5;
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
  width: 2.44rem;
  margin-left: 0.76rem;
  position: absolute;
  top: 1.37rem;
}
.food {
  position: relative;
  overflow: hidden;
}
.logo {
  width: 0.4rem;
  height: 0.4rem;
  display: flex;
  align-items: flex-end;
}
.new {
  padding-top: 0.2rem;
  align-items: center;
  font-size: 0.08rem;
  color: #fff;
  text-align: center;
  flex: 1;
  position: absolute;
  top: 0.86rem;
  left: 0.97rem;
  background-color: #4cd964;
  width: 0.4rem;
  height: 0.12rem;
  display: -ms-flexbox;
  transform: rotate(-45deg) translate(-0.1rem, -1.5rem);
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
.food {
  position: relative;
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
  display: flex;
  justify-content: space-between;
}
.one .sign {
  box-sizing: border-box;
  color: rgb(240, 115, 115);
  font-size: 0.06rem;
  height: 0.12rem;
  line-height: 0.07rem;
  padding: 0.02rem;
  border: 0.01rem solid rgb(240, 115, 115);
  border-radius: 0.06rem;
  margin-right: 0.02rem;
  transform: scale(0.8);
}
.detail .two {
  font-size: 0.1rem;
  color: #999;
  line-height: 0.12rem;
  margin-bottom: 0.03rem;
}
.detail .count {
  font-size: 0.1rem;
  color: #333;
}
.promotion {
  max-width: 1rem;
  display: inline-block;
  color: rgb(241, 136, 79);
  border-color: rgb(240, 115, 115);
  font-size: 0.06rem;
  border: 0.01rem solid currentColor;
  border-radius: 0.06rem;
  padding: 0.016rem;
  transform: scale(0.8);
  margin-left: -0.07rem;
  overflow: hidden;
  text-overflow: ellipsis;
}
.price {
  width: 1.8rem;
  height: 0.23rem;
  font-size: 0.1rem;
  color: #666;
  font-size: 0;
  margin-top: 0.06rem;
  display: flex;
  justify-content: space-between;
}
.price .left span:first-child {
  font-size: 0.1rem;
  color: #f60;
  font-weight: 700;
  margin-right: 0.06rem;
}
.right {
  display: flex;
  align-items: center;
  /* position: absolute;
  right: 0;
  bottom: 0;
  z-index: 1; */
}
.num {
  display: inline-block;
  width: 0.2rem;
  height: 0.15rem;
  font-size: 0.11rem;
  text-align: center;
  line-height: 0.15rem;
}
.type {
  display: flex;
  align-items: center;
  font-size: 0.11rem;
  color: #fff;
  padding: 0.02rem 0.04rem;
  background-color: #3190e8;
  border-radius: 0.04rem;
  border: 0.01rem solid #3190e8;
  margin-right: 0.1rem;
}
.add {
  width: 0.15rem;
  height: 0.15rem;
  display: inline-block;
  text-align: center;
  line-height: 0.12rem;
  font-size: 0.15rem;
  color: white;
  border-radius: 50%;
  font-weight: bold;
  background-color: #3190e8;
  border: 0.01rem solid #3190e8;
  margin-right: 0.15rem;
}
.ani {
  width: 0.15rem;
  height: 0.15rem;
  display: inline-block;
  text-align: center;
  line-height: 0.12rem;
  font-size: 0.15rem;
  color: white;
  border-radius: 50%;
  font-weight: bold;
  background-color: #3190e8;
  border: 0.01rem solid #3190e8;
  margin-right: 0.15rem;
  position: fixed;
  left: 0;
  top: 0;
  z-index: 1;
}
.reduce {
  width: 0.15rem;
  height: 0.15rem;
  display: inline-block;
  text-align: center;
  line-height: 0.12rem;
  font-size: 0.15rem;
  color: #3190e8;
  border-radius: 50%;
  font-weight: bold;
  /* background-color: #3190e8; */
  border: 0.01rem solid #3190e8;
  /* margin-right: 0.15rem; */
}
.specfoods {
  width: 3.2rem;
  height: 5.68rem;
  position: absolute;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.4);
  z-index: 2;
}
.all {
  position: fixed;
  top: 35%;
  left: 15%;
  width: 70%;
  background-color: #fff;
  border: 0.01rem;
  border-radius: 0.04rem;
}
.all .top {
  display: flex;
  justify-content: space-between;
  font-size: 0.14rem;
  color: #222;
  font-weight: 400;
  text-align: center;
  padding: 0.1rem;
}
.all .top span:last-child {
  display: inline-block;
  color: #888;
  font-weight: 200;
  height: 0.2rem;
  font-size: 0.3rem;
  vertical-align: top;
  margin-top: -0.15rem;
}
.all .middle {
  padding: 0.1rem;
}
.all .middle p {
  font-size: 0.12rem;
  color: #666;
}
.all .middle div {
  display: flex;
  flex-wrap: wrap;
  padding: 0.08rem 0;
}
.all .middle div span {
  font-size: 0.12rem;
  padding: 0.06rem 0.1rem;
  border: 0.005rem solid #ddd;
  border-radius: 0.04rem;
  margin-right: 0.1rem;
  margin-bottom: 0.04rem;
}
.all .middle div .active {
  border-color: #3199e8;
  color: #3199e8;
}
.bottom {
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #f9f9f9;
  padding: 0.1rem;
  border: 0.01rem;
  border-bottom-left-radius: 0.04rem;
  border-bottom-right-radius: 0.04rem;
}
.bottom .left {
  font-size: 0.16rem;
  font-weight: 700;
  color: #ff6000;
}
.bottom .right {
  display: inline-block;
  width: 0.8rem;
  height: 0.26rem;
  background-color: #3199e8;
  border: 0.01rem;
  border-radius: 0.03rem;
  font-size: 0.12rem;
  color: #fff;
  text-align: center;
  line-height: 0.26rem;
}
</style>

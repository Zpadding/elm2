<template>
  <div class="car">
      <div class="bottom">
          <div class="left">
              <div class="shopCar" :style="this.price!=0?bg:''">
                  <img :src="car" alt="">
              </div>
              <div class="money">
                  <div class="head">¥ {{price}}.00</div>
                  <div class="foot">配送费¥5</div>
              </div>
          </div>
          <div class="right" v-if="price < 15">还差¥20起送</div>
          <div class="right pay" v-else>去结算</div>
      </div>
      
  </div>
</template>

<script type="text/ecmascript-6">
import car from "../../../assets/car.png";
import { mapState } from "vuex";
export default {
  data() {
    return {
        car: car,
        bg: {
            backgroundColor: "#3190e8"
        }
    }
  },
  components: {

  },
  computed: {
      ...mapState(["price"])
  }
}
</script>

<style scoped>
.car {
    width: 3.2rem;
    height: 0.4rem;
    background: #333;
    position: fixed;
    left: 0;
    bottom: 0;
    right: 0;
    color: white;
    z-index: 1;
}
.bottom {
    width: 3.2rem;
    height: 0.4rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
}
.shopCar {
    width: 0.24rem;
    height: 0.24rem;
    display: flex;
    background-color: #3d3d3f;
    position: absolute;
    padding: .08rem;
    border: .036rem solid #444;
    border-radius: 50%;
    left: .1rem;
    top: -.15rem;
}
.shopCar img {
    width: 0.35rem;
    height: 0.35rem;
    position: absolute;
    top: .03rem;
    left: .02rem;
}
.money {
    margin-left: .7rem;
}
.head {
    font-size: .16rem;
    font-weight: 700;
    margin-bottom: .02rem;
}
.foot {
    font-size: .08rem;
}
.right {
    width: 1rem;
    height: 0.4rem;
    line-height: .4rem;
    background: #535356;
    text-align: center;
    font-size: .14rem;
}
.pay {
    color: white;
    background-color: #4cd964;
}
</style>

<template>
  <div class="shop">
      <div>
          <div class="head">
            <img class="logo" :src="logo" alt="">
            <span>附近商家</span>
          </div>
          <div class="body">
              <router-link to="/show">
                <div class="pic">
                    <img class="logo" :src="logo" alt="">
                </div>
                <div class="con">
                    <div class="one">
                        <div class="left">
                            <mark>品牌</mark>
                            <span>效果演示</span>
                        </div>
                        <div class="right">保准票</div>
                    </div>
                    <div class="two">
                        <div class="left">
                            <span>评分</span>
                            <span>月售106单</span>
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
                            <span>1444.2公里/</span>
                            <span>17小时57分钟</span>
                        </div>
                    </div>
                </div>
              </router-link>
          </div>
      </div>
      
  </div>
</template>

<script type="text/ecmascript-6">
import logo from '../../../assets/z-3.jpg'
export default {
  data() {
    return {
        logo: logo
    }
  },
  components: {

  }
}
</script>

<style scoped>
.shop {
    margin-top: .08rem;
    font-size: .12rem;
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
    margin: 0 .07rem 0 .12rem;
}
.body a{
    padding: .14rem .08rem;
    display: flex;
    justify-content: space-around;
    color: #999;
}
.body .left {
    margin: 0 .2rem;
    max-width: 1rem;
}
.body .right {
    max-width: 1rem;
}
.one, .two, .three {
    overflow: hidden;
    margin-bottom: .1rem;
}
.body .pic .logo {
    width: 0.54rem;
    height: 0.54rem;
}
.one .left {
    font-size: .13rem;
}
.two .left {
    font-weight: 200;
}
</style>

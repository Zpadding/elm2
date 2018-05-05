<template>
  <div class="classify">
      <!-- <h2>商品分类</h2> -->
      <v-touch class="con" @swipeleft="onSwipeLeft" @swiperight="onSwipeRight">
          <div class="infor" v-for="infor in infors">
            <router-link to="/" v-for="mes in infor">
              <img :src="img_url+mes.image_url" alt="">
              <p>{{mes.title}}</p>
            </router-link>
          </div>
      </v-touch>
      <div class="page">
        <span :class="{select:countPage==1}"></span>
        <span :class="{select:countPage==2}"></span>
      </div>
  </div>
</template>

<script type="text/ecmascript-6">
import {mapState} from "vuex";
export default {
  data() {
    return {
      mess: [],
      domain: "",
      img_url: "https://fuss10.elemecdn.com",
      countPage: 1
    };
  },
  components: {},
  created() {
    var url = this.head_url + "/v2/index_entry";
    this.$http
      .get(url)
      .then(result => {
        this.mess = result.data;
      })
      .catch(err => {
        console.log(err);
      });
  },
  computed: {
    ...mapState(["head_url"]),
    data1() {
      var data = this.mess.slice(0, 8);
      return data;
    },
    data2() {
      var data = this.mess.slice(8, 16);
      return data;
    },
    infors() {
      return [this.data2, this.data1, this.data2, this.data1]
    }
  },
  methods: {
    onSwipeLeft() {
      var con = document.querySelector(".con");
      var step = 0
      var timer = setInterval(()=>{
        step++;
        con.style.left = con.offsetLeft/100 - 3.2/20 +"rem";
        if (step >= 20) {
          this.countPage==1?this.countPage=2:this.countPage=1;
          if (con.offsetLeft/100 <= -9.6) {
            con.style.left = -3.2 +"rem";
          }
          clearInterval(timer);
        }
      }, 20)
    },
    onSwipeRight() {
      var con = document.querySelector(".con");
      var step = 0
      var timer = setInterval(()=>{
        step++;
        con.style.left = con.offsetLeft/100 + 3.2/20 +"rem";
        if (step >= 20) {
          this.countPage==1?this.countPage=2:this.countPage=1;
          clearInterval(timer);
          if (con.offsetLeft/100 >= 0) {
            con.style.left = -6.4 +"rem";
          }
        }
      }, 20)
    }
  }
};
</script>

<style scoped>
.classify {
  padding-top: 0.4rem;
  width: 3.2rem;
  height: 1.7rem;
  border-bottom: .01rem solid #e3e3e3;
  overflow: hidden;
  padding-bottom: .05rem;
  position: relative;
}
.con {
  width: 12.8rem;
  height: 1.7rem;
  overflow: hidden;
  position: absolute;
  left: -3.2rem;
  top: .4rem;
}
.infor {
  float: left;
  width: 3.2rem;
  height: 1.7rem;
}
.classify div a {
  display: inline-block;
  width: 0.8rem;
  height: 0.66rem;
  padding: 0.06rem 0;
  text-align: center;
  font-size: 0.12rem;
  color: #666;
}
.classify div a img {
  display: inline-block;
  width: 0.36rem;
  height: 0.36rem;
  margin-bottom: 0.06rem;
}
.classify div a p {
  padding: 0.06rem 0;
}
.page {
  margin-top: 1.5rem;
  text-align: center;
}
.page span {
  display: inline-block;
  border-radius: 50%;
  width: 0.08rem;
  height: 0.08rem;
  background-color: rgba(0, 0, 0, 0.2);
}
.page .select {
  background-color: #007aff;
}
</style>

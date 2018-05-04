<template>
  <div class="classify">
      <!-- <h2>商品分类</h2> -->
      <div class="con" @touchmove="move">
          <div class="one">
              <router-link to="/" v-for="(mes, index) in data1">
              <img :src="img_url+mes.image_url" alt="">
              <p>{{mes.title}}</p>
              <!-- <p>{{mes.img_url}}</p> -->
          </router-link>
          </div>
          <div class="two">
              <router-link to="/" v-for="(mes, index) in data2">
              <img :src="img_url+mes.image_url" alt="">
              <p>{{mes.title}}</p>
              <!-- <p>{{mes.img_url}}</p> -->
          </router-link>
          </div>
          
          <div class="page">
              <span :class="{select:countPage==1}" @click="countPage=1"></span>
              <span :class="{select:countPage==2}" @click="countPage=2"></span>
            </div>
      </div>
      <!-- <p>{{img_url}}</p> -->
  </div>
</template>

<script type="text/ecmascript-6">
import { mapState } from "vuex";
// import index from "_vue@2.5.16@vue";
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
        // console.log(result.data);
        this.mess = result.data;
      })
      .catch(err => {
        console.log(err);
      });
  },
  computed: {
    ...mapState(["head_url"]),
    data1() {
      var data = this.mess.slice(8 * (this.countPage - 1), this.countPage * 8);
      // console.log(data);
      return data;
    },
    data2() {
      var data = this.mess.slice(8 * this.countPage, (this.countPage + 1) * 8);
      // console.log(data);
      return data;
    }
  },
  methods: {
    move(event) {
      //   console.log(event);
    }
  }
};
</script>

<style scoped>
.classify {
  padding-top: 0.4rem;
  width: 3.2rem;
  height: 1.7rem;
  overflow: hidden;
}
.con {
  width: 6.4rem;
  height: 1.7rem;
  overflow: hidden;
}
.one,
.two {
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

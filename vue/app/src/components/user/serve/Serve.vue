<template>
    <div>
        <div id="head">
            <router-link to="/show/user" class="hep1"> <</router-link>
            <span class="hep2">下载</span>
        </div>
        <div>
            <div class="tu1"><img :src="k" alt=""> <p>在线客服</p> </div>
            <div class="tu2"><img :src="d" alt=""> <p>在线客服</p> </div>
        </div>

        <p class="sp">热门问题</p>
        <!--路由跳转到指定的页面-->
        <div class="dis " v-for="lis in txts">
            <router-link :to="{name:'Sev', params:{name:lis.name,detail:lis.detail}}">

                <div class="sq">
                    <ul class="bi">{{lis.name}}  <p class="p1"> > </p></ul>
                </div>
            </router-link>
        </div>
    </div>
</template>

<script>
import k from "../../../assets/w1-k.png";
import d from "../../../assets/w1-d.png";

import Vue from "vue";
import index from "../../../store";
import { mapState } from "vuex";
let les = this.head_url + "/v3/profile/explain";
export default {
  name: "Service",
  data() {
    return {
      txts: "",
      k: k,
      d: d
    };
  },
  computed: {
    ...mapState(["head_url"])
  },
  created() {
    Vue.axios.get(les).then(response => {
      console.log(response.data);
      // response.data
      let obj = response.data;
      let arr = [];
      for (let key in obj) {
        arr.unshift(obj[key]);
      }
      let wrong = arr.splice(22, 1);
      let infor = [];
      for (let i = 0; i < arr.length; i++) {
        infor[i] = {};
      }
      for (let i = 0; i < arr.length; i++) {
        let index = parseInt(i / 2);
        if (i % 2 == 0) {
          infor[index].name = arr[i];
        } else {
          infor[index].detail = arr[i];
        }
      }
      infor.splice(23);
      infor.reverse();
      // console.log(infor);
      this.txts = infor;

      // function dealjson(obj) {
      //   var arr = []
      //   var Jsonarr = []
      //   let object = {}
      //   for (var key in obj) {
      //     arr.push(obj[key]); //属性
      //   }
      //   for (let i = 0; i < arr.length; i++) {
      //     if (i % 2 != 0) {
      //       object.name = arr[i]
      //       Jsonarr.push(object)
      //       object = {}
      //     } else {
      //       object.des = arr[i]
      //       object.id = i
      //     }
      //   }
      //   var one = Jsonarr.slice(0, 13)
      //   var two = Jsonarr.slice(13, 23)
      //   for (let j = 0; j < two.length; j++) {
      //     [two[j].des, two[j].name] = [two[j].name, two[j].des]
      //   }
      //   var three = one.concat(two)
      //   three.splice(12, 1)
      //   three.splice(4, 1)
      //   return three
      // }
      // this.txts=dealjson(response.data)
      // console.log(dealjson(response.data))
    });
  }
};
</script>

<style scoped>
#head {
  height: 0.39rem;
  width: 100%;
  background: #3190e8;
  color: #fff;
  overflow: hidden;
}
.hep1 {
  float: left;
  padding: 0.1rem;
}

.hep2 {
  height: 0.4rem;
  float: right;
  padding-right: 1.5rem;
  padding-top: 0.1rem;
}
.tu1 {
  float: left;
  width: 1.6rem;
  height: 0.8rem;
}
.tu1 > img {
  margin-left: 0.7rem;
  margin-top: 0.2rem;
  height: 0.2rem;
  width: 0.2rem;
}
.tu1 > p {
  text-align: center;
}
.tu2 > img {
  margin-left: 0.7rem;
  margin-top: 0.2rem;
  height: 0.2rem;
  width: 0.2rem;
}
.tu2 {
  float: right;
  width: 1.6rem;
  height: 0.8rem;
}
.tu2 > p {
  text-align: center;
}
.sp {
  margin: 0.1rem;
  margin-bottom: 0.2rem;
}
.sq {
  height: 0.38rem;
  width: 100%;
  font-size: 0.06rem;
}
.bi {
  float: left;
  color: #333;
  width: 2.8rem;
  margin-top: 0.12rem;
  margin-left: 0.15rem;
  font-weight: 200;
}
.p1 {
  float: right;
}
</style>

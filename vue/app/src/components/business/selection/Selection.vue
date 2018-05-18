<template>
  <div class="selection">
      <div class="con">
        <!-- 下拉菜单 -->
          <div class="left" @click="rotate(0)">
              <span class="type">{{mes.title}}</span>
              <span class="down"></span>
          </div>
          <div class="middle" @click="rotate(1)">
              <span class="type">排序</span>
              <span class="down"></span>
          </div>
          <div class="right" @click="rotate(2)">
              <span class="type">筛选</span>
              <span class="down"></span>
          </div>
          <div class="show" v-show="show1||show2||show3">

            <div class="mask">
            <!-- 分类 -->
            <div class="one"  v-if="show1">
              <ul class="left">
                <li v-for="(classify, index) in classifys" @click="select(classify.sub_categories)">
                  <div>
                    <img :src="img_url+image_url[index]" alt="">
                    <span>{{classify.name}}</span>
                  </div>
                  <div>
                    <span class="num">{{classify.count}}</span>
                    <span class="arrow">></span>
                  </div>
                </li>
              </ul>
              <ul class="right">
                <li v-for="infor in infors" @click="classify(infor.id)">
                  <div>{{infor.name}}</div>
                  <div>{{infor.count}}</div>
                </li>
              </ul>
            </div>
            <!-- 排序 -->
            <div class="two" v-show="show2">
              <ul>
                <li v-for="(mes, index) in mess" @click="choose(index)">
                  <img :src="img_url+image_url[index]" alt="">
                  <div>
                    <span>{{mes}}</span>
                    <span v-if="sign == index">
                      <svg t="1526188402386" class="right" style="" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="2373" xmlns:xlink="http://www.w3.org/1999/xlink" width="32" height="32"><path d="M416.832 798.08C400.64 798.08 384.512 791.872 372.16 779.52L119.424 525.76C94.784 500.992 94.784 460.8 119.424 436.032 144.128 411.264 184.128 411.264 208.768 436.032L416.832 644.928 814.4 245.76C839.04 220.928 879.04 220.928 903.744 245.76 928.384 270.528 928.384 310.656 903.744 335.424L461.504 779.52C449.152 791.872 432.96 798.08 416.832 798.08Z" p-id="2374" fill="#1296db"></path></svg>
                    </span>
                  </div>
                </li>
              </ul>
            </div>
            <!-- 筛选 -->
            <div class="three" v-if="show3">
              <div class="head">
                <div>配送方式</div>
                <div  @click="delivery">
                    <svg v-if="display" t="1526642549757" class="bird" style="" viewBox="0 0 1027 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="2626" xmlns:xlink="http://www.w3.org/1999/xlink" width="32.09375" height="32"><path d="M1025.1264 98.7136C992.1536 145.5104 957.5424 181.9648 921.1904 207.872l0 26.0096c0 152.4736-54.1696 290.2016-162.4064 413.2864C650.4448 770.2528 505.344 831.6928 323.3792 831.6928c-117.8624 0-225.28-31.232-322.2528-93.5936 10.3424 1.7408 26.8288 2.56 49.3568 2.56 97.0752 0 184.5248-30.3104 262.4512-90.9312-45.056-1.6384-85.8112-15.9744-122.1632-42.9056C154.4192 579.9936 129.3312 545.792 115.5072 504.2176c17.3056 3.4816 30.3104 5.2224 39.0144 5.2224 19.0464 0 38.0928-2.56 57.1392-7.7824C163.1232 492.9536 122.88 469.0944 90.8288 430.08c-32.0512-39.0144-48.128-83.5584-48.128-133.8368L42.7008 291.1232C77.312 310.1696 108.544 319.6928 136.2944 319.6928 75.6736 278.1184 45.2608 219.2384 45.2608 142.9504c0-39.8336 8.704-74.4448 26.0096-103.936 112.64 136.9088 257.3312 209.6128 434.0736 218.3168C501.8624 236.544 500.1216 220.8768 500.1216 210.5344c0-58.88 20.3776-108.7488 61.0304-149.4016C601.9072 20.3776 651.776 0 710.656 0c62.3616 0 113.4592 21.7088 153.2928 64.9216C912.4864 54.5792 956.7232 38.0928 996.5568 15.5648 980.8896 65.8432 950.5792 103.936 905.5232 129.9456 945.4592 124.7232 985.2928 114.3808 1025.1264 98.7136z" p-id="2627" fill="#1296db"></path></svg>
                    <svg v-else t="1526188402386" class="bird" style="" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="2373" xmlns:xlink="http://www.w3.org/1999/xlink" width="32" height="32"><path d="M416.832 798.08C400.64 798.08 384.512 791.872 372.16 779.52L119.424 525.76C94.784 500.992 94.784 460.8 119.424 436.032 144.128 411.264 184.128 411.264 208.768 436.032L416.832 644.928 814.4 245.76C839.04 220.928 879.04 220.928 903.744 245.76 928.384 270.528 928.384 310.656 903.744 335.424L461.504 779.52C449.152 791.872 432.96 798.08 416.832 798.08Z" p-id="2374" fill="#1296db"></path></svg>
                  <span>蜂鸟专送</span>
                </div>
              </div>
              <div class="middle">
                <div class="top">商家属性(可以多选)</div>
                <ul>
                  <li v-for="(typ, index) in types" @click="option(index)">

                    <span v-if="typ.show" class="icon">
                      <svg t="1526188402386" class="right" style="" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="2373" xmlns:xlink="http://www.w3.org/1999/xlink" width="32" height="32"><path d="M416.832 798.08C400.64 798.08 384.512 791.872 372.16 779.52L119.424 525.76C94.784 500.992 94.784 460.8 119.424 436.032 144.128 411.264 184.128 411.264 208.768 436.032L416.832 644.928 814.4 245.76C839.04 220.928 879.04 220.928 903.744 245.76 928.384 270.528 928.384 310.656 903.744 335.424L461.504 779.52C449.152 791.872 432.96 798.08 416.832 798.08Z" p-id="2374" fill="#1296db"></path></svg>
                    </span>
                    <span class="text" :style="'border-color: '+colors[index]+';color:'+colors[index]" v-else>{{typ.logo}}</span>
                    <span>{{typ.title}}</span>
                  </li>
                </ul>
              </div>
              <div class="foot">
                <button @click="clear">清空</button>
                <button @click="submit">确定<span v-if="count!=0">({{count}})</span></button>
              </div>
            </div>
            </div>
          </div>
      </div>
  </div>
</template>

<script type="text/ecmascript-6">
import { mapState } from "vuex";
import right from "../../../assets/z-1.jpg";
import index from "_vue@2.5.16@vue";
export default {
  data() {
    return {
      classifys: [],
      img_url: "https://fuss10.elemecdn.com/",
      infors: [],
      mess: [
        "智能排序",
        "距离最近",
        "销量最高",
        "起送价最低",
        "配送速度最快",
        "评分最高"
      ],
      right: right,
      sign: 6,
      show1: false,
      show2: false,
      show3: false,
      types: [
        { logo: "品", title: "品牌商家" },
        { logo: "保", title: "外卖保" },
        { logo: "准", title: "准时达" },
        { logo: "新", title: "新店" },
        { logo: "付", title: "在线支付" },
        { logo: "票", title: "开发票" }
      ],
      colors: [
        "rgb(63, 189, 230)",
        "rgb(153, 153, 153)",
        "rgb(87, 169, 255)",
        "rgb(232, 132, 45)",
        "rgb(255, 78, 0)",
        "rgb(153, 153, 153)"
      ],
      count: 0,
        display: true
    };
  },
  components: {},
  methods: {
    rotate(index, $event) {
      if (index == 0) {
        this.show2 = false;
        this.show3 = false;
        this.show1 = !this.show1;
      } else if (index == 1) {
        this.show1 = false;
        this.show3 = false;
        this.show2 = !this.show2;
      } else if (index == 2) {
        this.show1 = false;
        this.show2 = false;
        this.show3 = !this.show3;
      }

      var types = document.querySelectorAll(".type");
      var downs = document.querySelectorAll(".down");
      for (let i = 0; i < types.length; i++) {
        types[i].setAttribute("class", "type");
        if (i != index) {
          downs[i].setAttribute("class", "down");
        }
        types[0].innerHTML = this.mes.title;
      }

      var down = event.target;
      if (down.tagName == "SPAN") {
        down = down.parentNode.lastElementChild;
      } else {
        down = down.lastElementChild;
      }
      var title = down.previousSibling.previousSibling;
      if (down.getAttribute("class") == "down") {
        down.setAttribute("class", "down rotate");
        title.setAttribute("class", "type blue");
        if (index == 0) {
          title.innerHTML = "分类";
        }
      } else {
        down.setAttribute("class", "down");
        title.setAttribute("class", "type");
        if (index == 0) {
          title.innerHTML = this.mes.title;
        }
      }
    },
    select(data, $event) {
      let infors = [...data];
      infors.shift();
      this.infors = infors;
      let white = document.querySelector(".white");
      if (white) {
        white.removeAttribute("class");
      }
      if (event.target.tagName == "LI") {
        event.target.setAttribute("class", "white");
      } else if (event.target.tagName == "DIV") {
        event.target.parentNode.setAttribute("class", "white");
      } else {
        event.target.parentNode.parentNode.setAttribute("class", "white");
      }
    },
    choose(index, $event) {
      let blue = document.querySelector(".two .blue");
      let target = event.currentTarget.childNodes[2].childNodes[0];
      if(blue) {
        blue.removeAttribute("class");
      }
      target.setAttribute("class", "blue");

      this.sign = index;
      this.show2 = false;
      document.querySelectorAll(".down")[1].setAttribute("class", "down");
      document.querySelectorAll(".type")[1].setAttribute("class", "type");

      switch (index) {
        case 0:
          this.$store.commit("changeOrder", "default");
          break;
        case 1:
          this.$store.commit("changeOrder", "distance");
          break;
        case 2:
          this.$store.commit("changeOrder", "recent_order_num");
          break;
        case 3:
          this.$store.commit("changeOrder", "float_minimum_order_amount");
          break;
        case 4:
          this.$store.commit("changeOrder", "order_lead_time");
          break;
        case 5:
          this.$store.commit("changeOrder", "rating");
          break;
        default:
          break;
      }
    },
    classify(id) {
      this.show1 = !this.show1;
      document.querySelector(".down").setAttribute("class", "down");
      document.querySelector(".type").setAttribute("class", "type");
      document.querySelector(".type").innerHTML = this.mes.title;

      let url = this.head_url + "/shopping/restaurants";
      let params = {
        latitude: 31.22967,
        longitude: 121.4762,
        "restaurant_category_ids[]": id
      };
      this.$http
        .get(url, {
          params: params
        })
        .then(result => {
          // console.log(result);
          //console.log(result.data);
          this.$store.commit("classify", result.data);
        });
    },
    option(index, $event) {
      if (this.types[index].show == true) {
        this.types[index].show = false;
        this.count--;
          event.currentTarget.lastChild.removeAttribute("class");
      } else {
        this.types[index].show = true;
        this.count++;
          event.currentTarget.lastChild.setAttribute("class", "blue");
      }
    },
    submit() {
      this.show3 = !this.show3;

      document.querySelectorAll(".down")[2].setAttribute("class", "down");
      document.querySelectorAll(".type")[2].setAttribute("class", "type");

      if (document.querySelectorAll(".middle .blue").length) {
        let url = this.head_url + "/shopping/restaurants";
        let params = {
          latitude: 31.22967,
          longitude: 121.4762,
          "restaurant_category_ids[]": 213
        };
        this.$http
          .get(url, {
            params: params
          })
          .then(result => {
            this.$store.commit("classify", result.data);
          });
      } else {
        let url = this.head_url + "/shopping/restaurants";
        let params = {
          latitude: 31.22967,
          longitude: 121.4762,
          order_by: 4
        };
        this.$http
          .get(url, {
            params: params
          })
          .then(result => {
            this.$store.commit("classify", result.data);
          });
      }
    },
    clear() {
      this.count = 0;
      this.types = this.types.map((value, index) => {
        value.show = false;
        return value;
      })
    },
      delivery(e) {
        this.display = !this.display;
        let target = e.currentTarget.lastChild;
        if (this.display == true) {
            target.setAttribute("class", "");
            this.count--;
        } else {
            target.setAttribute("class", "blue");
            this.count++;
        }
      }
  },
  created() {
    let url = this.head_url + "/shopping/v2/restaurant/category";
    this.$http.get(url).then(res => {
      console.log(res.data);
      this.classifys = res.data;
    });
    this.mes = JSON.parse(localStorage.classify);

    let shop_url = this.head_url + "/shopping/v1/restaurants/delivery_modes";
    this.$http.get(shop_url).then(res => {
      // console.log(res.data);
    });
  },
  computed: {
    ...mapState(["head_url"]),
    image_url() {
      let image_url = this.classifys.map((value, index) => {
        let img_url = img_path(value.image_url);
        return img_url;
      });
      return image_url;
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
.selection {
  width: 3.2rem;
  height: 0.32rem;
  border-bottom: 0.01rem solid #e3e3e3;
}
.con {
  height: 0.32rem;
  display: flex;
  justify-content: space-around;
  align-items: center;
  font-size: 0.11rem;
  position: fixed;
  left: 0;
  top: 0.4rem;
  z-index: 1;
  background: white;
}
.left,
.middle,
.right {
  width: 1.06rem;
  height: 0.15rem;
  line-height: 0.15rem;
  text-align: center;
}
.left,
.middle {
  border-right: 0.01rem solid #e3e3e3;
}
.down {
  display: inline-block;
  width: 0;
  height: 0;
  border: 5px solid transparent;
  border-top-color: black;
  vertical-align: bottom;
  transition: all 0.2s;
  transform-origin: 0.05rem 0.025rem;
}
.rotate {
  transform: rotate(180deg);
  border-top-color: #3190e8;
}
.blue {
  color: #3190e8;
}
.show {
  height: 5.68rem;
  background: rgba(0, 0, 0, 0.3);
  z-index: 1;
  position: absolute;
  left: 0;
  top: 0.32rem;
  right: 0;
}
.mask {
  background: white;
}
.show .one {
    height: 3.3rem;
}
.show .one ul {
  padding-bottom: 0.1rem;
}
.show .one ul li {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 1.35rem;
  height: 0.36rem;
  padding: 0 0.1rem;
}

.show .one ul li img {
  width: 0.16rem;
  height: 0.16rem;
  vertical-align: sub;
}
.one .num {
  display: inline-block;
  background-color: #ccc;
  font-size: 0.08rem;
  color: #fff;
  padding: 0 0.02rem;
  border: 0.005rem solid #ccc;
  border-radius: 0.16rem;
  vertical-align: middle;
  margin-right: 0.05rem;
}
.one .arrow {
  color: #ccc;
}
.show .one .left {
  background: #f1f1f1;
  width: 1.55rem;
  height: 3.2rem;
}
.show .one .white {
  background: white;
}
.show .one .right {
  width: 1.6rem;
  height: 3.2rem;
  overflow-x: hidden;
  overflow-y: scroll;
  background: white;
}
.show .one .right::-webkit-scrollbar {
  display: none;
}

.show .two ul li {
  height: 0.5rem;
  display: flex;
  align-items: center;
}
.show .two ul {
  border-top: 0.01rem solid #e4e4e4;
}
.show .two ul li img {
  width: 0.14rem;
  height: 0.14rem;
  margin: 0 0.06rem 0 0.16rem;
}
.show .two ul li div {
  width: 2.84rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-bottom: 0.01rem solid #e4e4e4;
}
.show .two ul li div span {
  padding: 0.18rem 0.1rem;
  color: #666;
}
.show .two ul li div .blue {
  color: #3190e8;
}
.show .two ul li .right {
  width: 0.14rem;
  height: 0.14rem;
  margin: 0 0.06rem 0 0.16rem;
}

.show .three .head {
  width: 3.2rem;
  height: 0.63rem;
}
.three .head div {
  height: 0.3rem;
  margin: 0 0.1rem;
  font-size: 0.08rem;
  color: #333;
  line-height: 0.3rem;
}
.three .head div:nth-of-type(2) {
  border: 0.005rem solid #eee;
  display: flex;
  align-items: center;
  width: 0.84rem;
  border-radius: 0.025rem;
  padding: 0 0.05rem;
  margin-bottom: 0.25rem;
}
.three .head div .bird {
  width: 0.13rem;
  height: 0.13rem;
  margin-right: 0.05rem;
}
.three .middle {
  width: 3.2rem;
  height: 1.06rem;
}
.three .middle .top {
  font-size: 0.08rem;
  color: #333;
  line-height: 0.3rem;
  height: 0.3rem;
  text-align: left;
  padding-left: 0.1rem;
}
.three .middle ul {
  width: 3rem;
  height: 0.66rem;
  display: flex;
  flex-wrap: wrap;
  padding: 0 0.1rem;
  padding-bottom: 0.1rem;
}
.three .middle ul li {
  display: flex;
  align-items: center;
  border: 0.005rem solid #eee;
  width: 0.84rem;
  height: 0.28rem;
  margin-right: 0.05rem;
  border-radius: 0.025rem;
  padding: 0 0.05rem;
  margin-bottom: 0.05rem;
}
.three ul li .right {
  width: 0.14rem;
  height: 0.14rem;
  margin: 0 0.06rem 0 0.16rem;
}
.three .middle .icon {
  width: 0.16rem;
  height: 0.16rem;
  padding-left: .06rem;
}
.three .middle ul li .text {
  width: 0.16rem;
  height: 0.16rem;
  font-size: 0.1rem;
  border: 0.005rem solid #e4e4e4;
  border-radius: 0.03rem;
  margin-right: 0.05rem;
  line-height: 0.16rem;
  text-align: center;
}
.three .middle ul li span:last-child {
  font-size: 0.08rem;
}
.three .foot {
  display: flex;
  width: 3.2rem;
  padding: 0.06rem 0.04rem;
  background-color: #f1f1f1;
}
.three .foot button {
  width: 1.5rem;
  height: 0.36rem;
  font-size: 0.16rem;
  /* line-height: 0.36rem; */
  border-radius: 0.04rem;
  outline: none;
}
.three .foot button:nth-of-type(1) {
  background: white;
  border: white;
  margin-right: 0.1rem;
}
.three .foot button:nth-of-type(2) {
  background: #56d176;
  border: 0.025rem solid #56d176;
  color: white;
}
.height-enter-active,
.height-leave-active {
  transition: all 0.5s linear;
}
.height-enter,
.height-leave-to {
  opacity: 0;
}
.three .middle ul .blue {
  color: rgb(49, 144, 232);
}
</style>

<template>
  <div class="selection">
      <div class="con">
          <div class="left">
              <span>甜品饮品</span>
              <span class="down" @click="rotate"></span>
          </div>
          <div class="middle">
              <span>排序</span>
              <span class="down" @click="rotate"></span>
          </div>
          <div class="right">
              <span>筛选</span>
              <span class="down" @click="rotate"></span>
          </div>
      </div>
  </div>
</template>

<script type="text/ecmascript-6">
export default {
  data() {
    return {};
  },
  components: {},
  methods: {
     rotate(e) {
         var down = e.target;
         if (down.getAttribute("class") == "down") {
             down.setAttribute("class", "down rotate");
         }else {
             down.setAttribute("class", "down");
         }
         
     }
  }
};
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
  vertical-align: sub;
  transition: all .2s;
  transform-origin: .05rem .025rem;
}
.rotate {
    transform: rotate(180deg);
    border-top-color: #3190e8;
}
</style>

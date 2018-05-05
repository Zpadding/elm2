<template>
  <div class="headerView">
    <ul>
      <li v-for="mes in mess">
        <router-link :to="'/show'+mes.to">{{mes.name}}</router-link>
      </li>
    </ul>
  </div>
</template>

<script>
  export default {
    name: "HeaderView",
    data() {
      return {
        mess: [
          {name: "美食", to: "/"},
          {name: "搜索", to: "/search"},
          {name: "订单", to: "/order"},
          {name: "我的", to: "/user"}
        ]
      }
    }
  }
</script>

<style scoped>
  .headerView ul {
    display: flex;
    justify-content: space-around;
    background: yellowgreen;
    z-index: 1;
    position: fixed;
    left: 0;
    right: 0;
    bottom: 0;
  }
  .headerView ul li {
    height: .5rem;
    display: flex;
    align-items: center;
  }
  .headerView ul li a {
    color: #000;
  }

</style>

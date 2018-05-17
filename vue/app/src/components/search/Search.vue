<template>
    <div class="search">
        <div class="mask">
            <div class="nav">
                <span @click="eat"></span>
                <span>搜索</span>
                <span></span>
            </div>
            <div class="shop">
                <input type="text" placeholder="请输入商家或美食名称" v-model="keyword">
                <span @click="search">提交</span>
                <svg @click="del" v-if="!show" t="1526545486440" class="wrong" style="" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="1911" xmlns:xlink="http://www.w3.org/1999/xlink" width="32" height="32"><path d="M959.824 908.231l-394.991-394.991 394.979-394.985-53.782-53.782-394.979 394.985-394.979-394.985-53.782 53.782 394.979 394.985-394.979 394.985 53.782 53.776 394.979-394.979 394.991 394.985z" p-id="1912"></path></svg>
            </div>
            <div class="body" v-if="show">
                <h4>搜索历史</h4>
                <ul class="history">
                    <li v-for="(his, index) in history">
                        <span>{{his}}</span>
                        <span @click="empty(index)">
                            <svg t="1526545486440" class="wrong" style="" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="1911" xmlns:xlink="http://www.w3.org/1999/xlink" width="32" height="32"><path d="M959.824 908.231l-394.991-394.991 394.979-394.985-53.782-53.782-394.979 394.985-394.979-394.985-53.782 53.782 394.979 394.985-394.979 394.985 53.782 53.776 394.979-394.979 394.991 394.985z" p-id="1912"></path></svg>
                        </span>
                    </li>
                </ul>
                <div></div>
                <div class="clear" @click="clear">清空搜索历史</div>
            </div>
            <div class="none" v-else>
                很抱歉！无搜索结果
            </div>
        </div>

    </div>
</template>

<script>
export default {
  name: "Search",
    data() {
      return {
          keyword: "",
          show: true,
          history: []
      }
    },
    methods: {
      eat() {
          this.$router.push({name: "Eat"});
      },
        search() {
          if (this.keyword) {
              this.show = false;
              this.history.push(this.keyword);
              localStorage.search = JSON.stringify(this.history);
          }

        },
        del() {
          this.keyword = "";
        },
        empty(index) {
          this.history.splice(index, 1);
            localStorage.search = JSON.stringify(this.history);
        },
        clear() {
          this.history = [];
            localStorage.search = JSON.stringify(this.history);
            this.show = false;
        }
    },
    watch: {
      keyword() {
          if (!this.keyword) {
              this.show = true;
          }
      }
    },
    created() {
      this.history = JSON.parse(localStorage.search);
    }
};
</script>

<style scoped lang="less">
.size(@width, @height) {
  width: @width;
  height: @height;
}
.search {
  -webkit-font-smoothing: antialiased;
  padding: 0.4rem 0;
  .mask {
      position: fixed;
      left: 0;
      right: 0;
      bottom: 0;
      height: 5.28rem;
      background: #f5f5f5;
    .nav {
      .size(3.2rem, 0.4rem);
      background-color: #3190e8;
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 0 0.15rem;
      position: fixed;
      left: 0;
      top: 0;
      span {
        &:nth-of-type(1) {
          .size(0.1rem, 0.1rem);
          border-top: 0.015rem solid white;
          border-left: 0.015rem solid white;
          transform: rotate(-45deg);
        }
        &:nth-of-type(2) {
          color: white;
          font-size: 0.16rem;
          text-align: center;
          font-weight: 700;
        }
        &:nth-of-type(3) {
          width: 0.5rem;
        }
      }
    }
    .shop {
      background-color: #fff;
      padding: 0.1rem;
      display: flex;
      input {
        .size(2.2rem, 0.3rem);
        flex: 4;
        border: 0.005rem solid #e4e4e4;
        font-size: 0.13rem;
        color: #333;
        border-radius: 0.025rem;
        background-color: #f2f2f2;
        font-weight: 700;
        padding: 0 0.05rem;
        outline: none;
      }
      span {
        display: inline-block;
        flex: 1;
        border: 0.005rem solid #3190e8;
        margin-left: 0.04rem;
        font-size: 0.13rem;
        color: #fff;
        border-radius: 0.025rem;
        background-color: #3190e8;
        font-weight: 700;
        padding: 0 0.05rem;
        text-align: center;
        line-height: .3rem;
      }
        .wrong {
            .size(.15rem, .15rem);
            position: absolute;
            top: .18rem;
            right: .87rem;
        }
    }
    .body {
        h4 {
            font-size: .12rem;
            line-height: .4rem;
            text-indent: .1rem;
            font-weight: 700;
            color: #666;
        }
        .history {
            li {
                height: .4rem;
                background-color: #fff;
                border-bottom: .005rem solid #e4e4e4;
                padding: 0 .06rem;
                display: flex;
                justify-content: space-between;
                align-items: center;
                span {
                    &:first-child {
                        display: inline-block;
                        width: 80%;
                        font-size: .14rem;
                        overflow: hidden;
                        text-overflow: ellipsis;
                        white-space: nowrap;
                    }
                    &:last-child {
                        .wrong {
                            .size(.15rem, .15rem);
                        }
                    }
                }
            }
        }
        .clear {
            font-size: .14rem;
            line-height: .4rem;
            background-color: #fff;
            color: #3190e8;
            font-weight: 700;
            text-align: center;
        }
    }
      .none {
          line-height: .35rem;
          margin: 0 auto;
          font-size: .13rem;
          color: #333;
          background-color: #fff;
          text-align: center;
          margin-top: .025rem;
      }
  }
}
</style>

<template>
  <div id="Enter">
    <div id="head">
      <router-link to="/gain" class="hep1"> <</router-link>
      <span class="hep2">密码登录</span>
    </div>


    <form action="">
      <section class="sec">
        <input type="text" placeholder="账号" class="cip1" v-model="name">

      </section>
    <div class="sec">
      <input :type="show1?'text':'password'"  placeholder="密码"  class="cip" v-model="word">


      <div class="kg" @click="show1=!show1">
        <p class="s1"></p>
      </div>


    </div>
    </form>
      <section class="sec">
          <p> <input type="text" placeholder="验证码" class="cip3" v-model="code"></p>
          <div class="rig">
            <img :src="pic" alt="" class="im">
          </div>
        <div class="di">
          <p>看不清</p>
          <p class="p2" @click="change">换一张</p>
        </div>
      </section>


    <p class="spa">温馨提示：未注册过得账号，登录时将自动注册。注册过的用户可凭账号密码登录</p>

    <button class="de" @click="login">登录</button>
    <router-link to="/forget"><p class="p">重置密码？</p>
    </router-link>
    <transition name="bounce">
    <div class="boll" v-if="show">
      <img src="../../../assets/w1-2.png" alt="">

      <div>{{err}}</div>
      <button @click="show=!show">确认</button>
    </div>
    </transition>
  </div>

</template>

<script>
    export default {
        name: "Enter",
      data() {
        return {
          value1: 'password',
          value2: 'text',
          username: [],
          password:[],
          name: "",
          word: "",
          code:"",
          pic: '',
          err:'',
          show: false,
          show1: false
        }
      },



      created(){



        let pic_url = "http://cangdu.org:8001/v1/captchas";
          this.$http.post(pic_url).then(res=>this.pic=res.data.code);
      },
      methods: {


          login() {

            if (this.name) {
              if(this.word) {
                if(this.code) {
                  let mes = {username: this.name, password: this.word}
                  console.log(mes);
                  this.$router.push({name: "Account",params:{mes:mes}});
                  // this.$router.push({name:"/show/user",params:{mes:mes}});
                }else {
                  this.show = true;
                  this.err = "请输入验证码"
                }
              }else {
                this.show = true;
                this.err = "请输入密码"
              }
            } else {
              this.show = true;
              this.err = "请输入手机号/邮箱/用户名"
            }

          },
        change() {
          let pic_url = "http://cangdu.org:8001/v1/captchas";
          this.$http.post(pic_url).then(res=>this.pic=res.data.code);
        }
      }
    }
</script>

<style scoped>

  input {
    outline: none;

  }
  #head {
    height: 0.39rem;
    width: 100%;
    background: #3190e8;
    color: #fff;
    overflow: hidden;
    margin-bottom: 0.15rem;
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
  .sec{
    border:  1px solid #f1f1f1;
    display: flex;
    justify-content: space-around;
    height: 0.25rem;
    padding: 0.02rem 0.03rem;
    padding-top: 0.05rem;
    padding-bottom: 0.05rem;

  }
  .cip1{
    margin-right: 1.6rem;
    font-size: 0.07rem;
    color: #666;
  }
  .cip{
    margin-right: 1rem;
    font-size: 0.07rem;
    color: #666;
  }
  el-switch{
    margin-right: 0.2rem;
  }
  .im{
    height: 0.3rem;
    width: 0.7rem;
    background: whitesmoke;
    float: left;
    margin-left: 0.3rem;
  }
  .rig{
    width: 1rem;
  }
  .di{
    float: right;
    font-size: 0.05rem;
  }
  .p2{
    color: #90B4FC;
  }

  .cip3{
    margin-left: 0.05rem;
    font-size: 0.07rem;
    color: #666;
    margin-top: 0.1rem;
  }
  .spa{
    line-height: 0.2rem;
    margin-left: 0.2rem;
    margin-right: 0.2rem;
    margin-top: 0.1rem; ;
    font-size: 0.05rem;
    color: red;
  }
  .de{
    margin: 0.1rem;
    height: 0.4rem;
    width: 3rem;
    background-color: #4cd964;

  }
  .p{
    font-size: 0.05rem;
    margin-right: 0.1rem;
    color:#3b95e9;
    text-align: right;
  }
  .boll{
    position: absolute;
    left: 0.4rem;
    top: 1.3rem;
    border:1px solid white;
    height: 1.5rem;
    width: 2.4rem;
    background: white;
  }
  .boll>img{
    margin-left: 0.8rem;
    margin-top: 0.1rem;
  }
  .boll>div{
    text-align: center;
    margin-top: 0.1rem;
    margin-bottom: 0.1rem;
  }
  .boll>button{
    width: 2.4rem;
    height: 0.36rem;
    background: #4cd964;
    border-radius:5px;
  }
  .kg{
    border: 1px solid red;
    width: 0.35rem;
    height: 0.15rem;
    border-radius: 35%;
    background: black;
  }
  .s1{
    background-color: white;
    border-radius: 50%;
    height: 0.15rem;
    width: 0.15rem;
    padding-top: 0.2rem;

  }



  .bounce-enter-active {
    animation: bounce-in .5s;
  }
  .bounce-leave-active {
    animation: bounce-in .5s reverse;
  }
  @keyframes bounce-in {
    0% {
      transform: scale(1);
    }
    35% {
      transform: scale(.8);
    }
    70% {
      transform: scale(1.1);
    }

    100% {
      transform: scale(1);
    }
  }
</style>

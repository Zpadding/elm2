<template>
    <div id="Forget">
      <div id="head">
        <router-link to="/enter" class="hep1"> <</router-link>
        <span class="hep2">重置密码</span>
      </div>

      <form action="">
        <section class="sec">
          <input type="text" placeholder="账号" class="cip1" v-model="username">
        </section>
        <div class="sec">
          <input type=""  placeholder="密码"  class="cip1" v-model="oldPassWord">
        </div>
        <div class="sec">
        <input type="text" placeholder="请输入新密码" class="cip1" v-model="newPassWord">
        </div>
        <div class="sec">
        <input type="text" placeholder="请确认密码" class="cip1" v-model="conFirmPassWord">
        </div>
      </form>
      <section class="sec">
        <p> <input type="text" placeholder="验证码" class="cip3"></p>
        <div class="rig">
          <img :src="pic" alt="" class="im">
        </div>
        <div class="di">
          <p>看不清</p>
          <p class="p2" @click="change">换一张</p>
        </div>
      </section>
      <div>
        <button class="de" @click="login">登录</button>
      </div>

    </div>



</template>

<script>
    export default {
        name: "Forget",
      data(){
          return{
            username:'',
            oldPassWord:'',
            newPassWord:'',
            conFirmPassWord:'',
            pic:'',

          }

      },
      created(){
          let url = 'http://cangdu.org:8001/v2/changepassword'
        this.$http.post(url).then(res=>this.pic=res.data.code)
      },
      methods:{

        login() {
           let msk = {username:this.username,oldPassWord:this.oldPassWord,newPassWord:this.newPassWord,conFirmPassWord:this.conFirmPassWord}
           console.log(msk)

        },
        change(){
            let pic_url = "http://cangdu.org:8001/v1/captchas";
            this.$http.post(pic_url).then(res=>this.pic=res.data.code);
          }



      },

    }
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
  .sec{
    border:  1px solid #f1f1f1;
    display: flex;
    justify-content: space-around;
    height: 0.25rem;
    padding: 0.02rem 0.03rem;

  }
  .cip1{
    margin-right: 1.6rem;
    font-size: 0.07rem;
    color: #666;
  }
  .im{
    height: 0.3rem;
    width: 0.7rem;
    background: red;
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



  .im{
    height: 0.3rem;
    width: 0.7rem;
    background: red;
    float: left;
    margin-left: 0.3rem;
  }
  .de{
    margin-left: 0.1rem;
    margin-top: 0.2rem;

    height: 0.35rem;
    width: 3rem;

    background-color: #4cd964;
  }

</style>

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
          <input type="text"  placeholder="密码"  class="cip1" v-model="oldPassWord">
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
       <div>
         <!--<transition name="bounce">-->
           <div class="boll"  v-if="show">
             <img src="../../../assets/w1-2.png" alt="">

             <div>{{err}}</div>
             <button @click="show=!show">确认</button>
           </div>
         <!--</transition>-->
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
            code:``,
            pic:'',
            err:'',
            show:false


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
          if(this.username){
             if(this.oldPassWord){
               if(this.newPassWord){
                 if(this.conFirmPassWord){
                   if(this.code){

                   }else {
                     this.show =true ;
                     this.err = "请输入验证码"
                   }
                 }else {
                   this.show = true;
                   this.err = "请确认新密码"
                 }
               }else {
                 this.show = true;
                 this.err = "请输入新密码"
               }

             }else {
               this.show = true;
               this.err = "请输入旧密码"
             }
          }else {
             this.show = true;
             this.err ="请输入正确的账号"
          }

        },
        change(){
            let pic_url = "http://cangdu.org:8001/v1/captchas";
            this.$http.post(pic_url).then(res=>this.pic=res.data.code);
          }

      },

    }
</script>

<style scoped>

  button{
    outline: white;
  }
  input{
    outline: white;
  }


  #head {
    height: 0.39rem;
    width: 100%;
    background: #3190e8;
    color: #fff;
    overflow: hidden;
    margin-bottom: 0.1rem;

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
    margin-top: 0.1rem;

  }
  .cip1{
    margin-right: 1.6rem;
    font-size: 0.07rem;
    color: #666;
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
    background: white;
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
  .boll{
    position: absolute;
    left: 0.4rem;
    top: 1.5rem;
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
    width: 2.42rem;
    height: 0.36rem;
    background: #4cd964;
    border-radius:5px;
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

<template>
    <div class="Add">
        <div id="head">
            <div @click="$router.go(-1)" class="hep1"> <</div>
            <span class="hep2">添加地址</span>
        </div>
        <div class="one">
            <p class="man">联系人</p>


            <p class="put">  <input type="text" placeholder="你的名字" v-model="name"></p>


            <p class="xu">
                <img :src="su" alt="" v-if="!show" @click="show = !show">
                <img :src="lu" alt="" v-else class="fu">先生
                <img :src="su" alt="" v-if="show" @click="show = !show">
                <img :src="lu" alt="" v-else class="fu"> 女士
            </p>
        </div>


        <div class="tow">
            <div class="lx"><p class="ly">联系方式</p></div>
            <p class="in1"><input type="text" placeholder="你的手机号" v-model="phone">
                <img :src="jia" @click="alternative = !alternative" alt=""></p>
            <p class="in2" v-if="alternative"> <input type="text" placeholder="备选电话" v-model="phone_bk" ></p>
        </div>
        <div class="there">
            <div class="dz"> <p>送餐地址</p> </div>
            <p class="in3" @click="addAddress"> <input type="text" placeholder="小区/写字楼/学校等" v-model="address.name"></p>
            <p class="in4"> <input type="text" placeholder="详细地址(如门牌号等)" v-model="address_detail"> </p>
        </div>
        <div class="four">
            <div class="bq"> <p>标签</p> </div>

            <p><input type="text" placeholder="无/家/学校/公司" v-model="tag"></p>

        </div>
        <button class="but" @click="add">确定</button>
    </div>

</template>

<script>
    import jia from "../../../../assets/加号.png";
    import lu from "../../../../assets/w1-lu.png";
    import su from "../../../../assets/w1-su.png";
    import { mapState } from "vuex";
    export default {
        name: "Add",
        data() {
            return {
                lu: lu,
                su: su,
                jia: jia,
                show: true,
                alternative: false,
                address: "",
                address_detail: "",
                name: "",
                phone: "",
                tag: "",
                phone_bk: "",
                tag_type: ""
            };
        },
        created() {
            console.log(this.$route.params);
            this.address = this.$route.params;
            if (Object.keys(this.$route.params).length) {
                this.address = this.$route.params;
                let params = JSON.parse(localStorage.addressInfor);
                this.name = params.name;
                this.phone = params.phone;
                this.tag = params.tag;
                this.phone_bk = params.phone_bk;
                this.address_detail = params.address_detail;
                if (params.sex == 1) {
                    this.show = true;
                } else {
                    this.show = false;
                }
            }
        },
        computed: {
            ...mapState(["head_url"])
        },
        methods: {
            add() {
                let id = JSON.parse(localStorage.user).user_id;
                let url = this.head_url + `/v1/users/${id}/addresses`;
                if (this.show) {
                    var sex = 1;
                } else {
                    var sex = 2;
                }
                let params = {
                    user_id: id,
                    address: this.address.name,
                    address_detail: this.address_detail,
                    geohash: this.address.geohash,
                    name: this.name,
                    phone: this.phone,
                    tag: this.tag,
                    sex: sex,
                    phone_bk: this.phone_bk,
                    tag_type: 1
                };
                console.log(params);
                this.$http.post(url, params).then(res => {
                    console.log(res.data);
                    if (res.data.status == 1) {
                        this.$router.push({name: "Choose"})
                    } else {
                        alert(res.data.message);
                    }
                });
            },
            addAddress() {
                let id = JSON.parse(localStorage.user).user_id;
                if (this.show) {
                    var sex = 1;
                } else {
                    var sex = 2;
                }
                let params = {
                    user_id: id,
                    address: this.address.name,
                    address_detail: this.address_detail,
                    geohash: this.address.geohash,
                    name: this.name,
                    phone: this.phone,
                    tag: this.tag,
                    sex: sex,
                    phone_bk: this.phone_bk,
                    tag_type: 1
                };
                localStorage.addressInfor = JSON.stringify(params);
                this.$router.push({ name: "SearchAddress", params: {from: "Add"} });
            }
        }
    };
</script>

<style scoped>
    .Add {
        -webkit-font-smoothing: antialiased;
    }
    ::-webkit-input-placeholder {
        font-size: 0.15rem;
    }
    input {
        outline: none;
    }
    .xu img {
        height: 0.2rem;
        width: 0.2rem;
        vertical-align: sub;
    }

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
        font-size: 0.15rem;
    }

    .hep2 {
        height: 0.4rem;
        float: right;
        padding-right: 1.3rem;
        padding-top: 0.1rem;
        font-size: 0.15rem;
    }

    .put {
        height: 0.5rem;
        width: 2.08rem;
        float: right;
        margin-right: 0.15rem;
    }
    .man {
        height: 1rem;
        width: 0.8rem;
        float: left;
        margin-left: 0.15rem;
    }

    .xu {
        float: right;
        height: 0.5rem;
        width: 2.08rem;
        margin-right: 0.1rem;
    }
    .one, .tow, .there, .four {
        background: #fff;
    }
    .one {
        overflow: hidden;
        padding-top: 0.15rem;
    }
    .tow {
        overflow: hidden;
        padding-right: .2rem;
    }

    .lx {
        /* height: 1rem; */
        width: 0.83rem;
        float: left;
        margin-left: 0.2rem;
    }
    .lx > p {
        margin-top: 0.2rem;
    }
    .in1 {
        float: right;
        height: 0.5rem;
        width: 1.8rem;
    }
    .in1 > img {
        float: right;
        margin-top: 0.2rem;
        height: 0.2rem;
        width: 0.2rem;
    }
    .in1 > input {
        float: left;
        margin-top: 0.2rem;
    }
    .in2 {
        float: right;
        height: 0.3rem;
        width: 1.8rem;
    }
    .there {
        overflow: hidden;
        /* width: 3rem; */
    }

    .dz {
        height: 0.8rem;
        width: 1rem;
        float: left;
        margin-top: 0.1rem;
        margin-left: 0.2rem;
    }
    .in3 {
        float: right;
        height: 0.3rem;
        width: 1.8rem;
        margin-top: 0.1rem;
        margin-right: 0.2rem;
    }
    .in4 {
        float: right;
        height: 0.3rem;
        width: 1.8rem;
    }
    .in3 input,
    .in4 input {
        width: 1.6rem;
        height: 0.2rem;
        font-size: 0.14rem;
        color: #999;
        line-height: 0.5rem;
        border-bottom: 0.005rem solid #f5f5f5;
    }
    .four {
        overflow: hidden;
    }
    .bq {
        height: 0.5rem;
        width: 0.83rem;
        float: left;
        margin-left: 0.2rem;
    }
    .in4 {
        float: right;
        width: 1.8rem;
        height: 0.5rem;
        margin-right: 0.2rem;
    }
    .but {
        font-size: .14rem;
        background-color: #4cd964;
        border: none;
        height: 0.36rem;
        width: 3rem;
        margin-left: 0.1rem;
        border-radius: 0.05rem;
        color: white;
    }
</style>

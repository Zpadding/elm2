<template>
    <div class="AddAddress">
        <div class="con">
            <div class="nav">
                <span @click="$router.go(-1)"></span>
                <span>新增地址</span>
                <span></span>
            </div>
            <div class="body">
                <div class="input">
                    <div class="list">
                        <input type="text" placeholder="请填写你的姓名" v-model="name">
                    </div>
                    <router-link class="list" :to="{name: 'SearchAddress', params: {from: 'AddAddress'}}">
                        <input type="text" placeholder="小区/写字楼/学校等" v-model="address.name">
                    </router-link>
                    <div class="list">
                        <input type="text" placeholder="请填写详细送餐地址" v-model="address_detail">
                    </div>
                    <div class="list">
                        <input type="text" placeholder="请填写能够联系到您的手机号" v-model="phone">
                    </div>
                    <div class="list">
                        <input type="text" placeholder="备用联系电话" v-model="phone_bk">
                    </div>
                </div>
            </div>
            <div class="bttuon" @click="add">新增地址</div>
        </div>
    </div>
</template>

<script>
    import {mapState} from "vuex";


    export default {
        name: "AddAddress",
        data() {
            return {
                address: {},
                address_detail: "",
                name: "",
                phone: "",
                phone_bk: ""
            }
        },
        computed: {
            ...mapState(["head_url"])
        },
        created() {
            this.address = this.$route.params;
        },
        methods: {
            add() {
                if (localStorage.user) {
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
                        tag: "家",
                        sex: 1,
                        phone_bk: this.phone_bk,
                        tag_type: 1
                    };
                    console.log(params);
                    this.$http.post(url, params).then(res => {
                        console.log(res.data);
                        if (res.data.status == 1) {
                            this.$router.push({name: "EditAddress"})
                        } else {
                            alert(res.data.message);
                        }
                    });
                } else {
                    alert("请先去登录吧");
                }

            }
        }
    }
</script>

<style scoped lang="less">
    .size(@width, @height) {
        width: @width;
        height: @height;
    }

    .AddAddress {
        padding-top: 0.4rem;
        .con {
            .nav {
                .size(3.2rem, 0.39rem);
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
                        width: .2rem;
                    }
                }
            }
            .body {
                margin-top: .08rem;
                .input {
                    background: #fff;
                    padding-top: .08rem;
                    .list {
                        padding-bottom: .08rem;
                        input {
                            box-sizing: border-box;
                            display: block;
                            width: 3rem;
                            font-size: .12rem;
                            margin: 0 auto;
                            padding: .06rem;
                            background: #f2f2f2;
                            border: .01rem solid #ddd;
                            border-radius: .03rem;
                        }
                    }
                    a {
                        display: block;
                    }
                }
            }
            .bttuon {
                width: 3rem;
                font-size: .12rem;
                color: #fff;
                line-height: .32rem;
                font-weight: 700;
                margin: .12rem auto;
                background: #4cd964;
                border-radius: .03rem;
                text-align: center;
            }

        }
    }

</style>

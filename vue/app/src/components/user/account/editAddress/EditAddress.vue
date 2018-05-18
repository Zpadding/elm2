<template>
    <div class="editAddress">
        <div class="con">
            <div class="nav">
                <span @click="$router.go(-1)"></span>
                <span>编辑地址</span>
                <span v-if="!edit" @click="edit = true">编辑</span>
                <span v-else @click="edit = false">完成</span>
            </div>
            <ul class="address">
                <li v-for="(location, index) in locations" :class="{active: index == 0}">
                    <div>
                        <p>{{location.address_detail}}</p>
                        <p>{{location.phone}}</p>
                    </div>
                    <svg v-if="edit" @click="del(location)" t="1526545486440" class="wrong" style=""
                         viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="1911"
                         xmlns:xlink="http://www.w3.org/1999/xlink" width="32" height="32">
                        <path
                            d="M959.824 908.231l-394.991-394.991 394.979-394.985-53.782-53.782-394.979 394.985-394.979-394.985-53.782 53.782 394.979 394.985-394.979 394.985 53.782 53.776 394.979-394.979 394.991 394.985z"
                            fill="#2c2c2c" p-id="1912"></path>
                    </svg>
                </li>
            </ul>
            <router-link to="/addAddress" class="add">
                <div>
                    <span>新增地址</span>
                    <span></span>
                </div>
            </router-link>
        </div>
    </div>
</template>

<script>
    import {mapState} from "vuex";


    export default {
        name: "EditAddress",
        data() {
            return {
                locations: [],
                edit: false
            }
        },
        computed: {
            ...mapState(["head_url"])
        },
        created() {
            this.request();
        },
        methods: {
            del(location) {
                let url = this.head_url + `/v1/users/${location.user_id}/addresses/${location.id}`;
                this.$http.delete(url).then(res => {
                    console.log(res.data);
                    this.request();
                })
            },
            request() {
                if (localStorage.user) {
                    var id = JSON.parse(localStorage.user).id;
                    let url = this.head_url + `/v1/users/${id}/addresses`;
                    this.$http.get(url).then(res => {
                        console.log(res.data);
                        this.locations = res.data;
                    })
                } else {
                    alert("请先去登录吧")
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

    .editAddress {
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
                        font-size: .14rem;
                        color: #fff;
                        margin-right: .25rem;
                    }
                }
            }
            .address {
                background: #fff;
                li {
                    border-bottom: .01rem solid #d9d9d9;
                    padding: .08rem;
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                    div {
                        p {
                            line-height: .18rem;
                            font-size: .12rem;
                            color: #333;
                        }
                    }
                    .wrong {
                        .size(.1rem, .1rem);
                    }
                }
                .active {
                    background: #fff8c3;
                }

            }
            .add {
                div {
                    margin-top: .08rem;
                    background: #fff;
                    padding: .04rem .08rem;
                    border-top: .01rem solid #d9d9d9;
                    border-bottom: .01rem solid #d9d9d9;
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                    span {
                        display: block;
                        font-size: .14rem;
                        color: #333;
                        line-height: .28rem;
                        &:last-child {
                            .size(.1rem, .1rem);
                            border-top: .01rem solid rgb(216, 216, 216);
                            border-right: .01rem solid rgb(216, 216, 216);
                            transform: rotate(45deg);
                        }
                    }
                }

            }
        }
    }
</style>

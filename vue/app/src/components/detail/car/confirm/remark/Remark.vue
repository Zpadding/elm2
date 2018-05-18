<template>
    <div class="remark">
        <div>
            <div class="nav">
                <span @click="$router.go(-1)"></span>
                <span>订单备注</span>
                <span></span>
            </div>
            <div class="quick">
                <div class="head">快速备注</div>
                <div class="body">
                    <ul>
                        <li v-for="(remark, index) in remarks">
                            <span :class="" v-for="(single, number) in remark"
                                  @click="select(index, number)">{{single}}</span>
                        </li>
                    </ul>
                </div>
            </div>
            <div class="other">
                <div class="top">
                    <h4>其他备注</h4>
                    <textarea placeholder="请输入备注内容(可不填)" v-model="custom"></textarea>
                </div>
                <div class="confirm" @click="confirm">确定</div>
            </div>
        </div>
    </div>
</template>

<script>
    import {mapState} from "vuex";

    export default {
        name: "Remark",
        data() {
            return {
                remarks: [],
                num: 3,
                custom: ""
            };
        },
        computed: {
            ...mapState(["head_url"])
        },
        created() {
            let id = JSON.parse(localStorage.shopCar).id;
            let url = this.head_url + `/v1/carts/${id}/remarks`;
            this.$http.get(url).then(res => {
                console.log(res.data.remarks);
                this.remarks = res.data.remarks;
            });
        },
        methods: {
            select(index, number) {
                let lis = document.querySelectorAll("li");
                let spans = lis[index].childNodes;
                for (let i = 0; i < spans.length; i++) {
                    spans[i].setAttribute("class", "");
                }
                spans[number].setAttribute("class", "active");
            },
            confirm() {
                let spans = document.querySelectorAll(".active");
                let infor = "";
                for (let i = 0; i < spans.length; i++) {
                    if ((i == 0)) {
                        infor += spans[i].innerHTML;
                    } else {
                        infor += ", " + spans[i].innerHTML;
                    }
                }
                if (this.custom) {
                    infor += ", " + this.custom;
                }
                this.$router.push({name: "Confirm", params: {remark: infor}})
            }
        }
    };
</script>

<style scoped lang="less">
    .size(@width, @height) {
        width: @width;
        height: @height;
    }

    .remark {
        background: #f5f5f5;
        -webkit-font-smoothing: antialiased;
        div {
            .nav {
                height: .39rem;
                background-color: #3190e8;
                display: flex;
                justify-content: space-between;
                align-items: center;
                padding: 0 0.15rem;
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
                }
            }
            .quick {
                background-color: #fff;
                margin-top: 0.08rem;
                padding: 0 0.12rem 0.2rem;
                .head {
                    font-size: 0.13rem;
                    color: #333;
                    line-height: 0.4rem;
                }
                .body {
                    ul {
                        display: flex;
                        flex-wrap: wrap;
                        li {
                            margin-right: 0.12rem;
                            margin-bottom: 0.12rem;
                            span {
                                display: inline-block;
                                font-size: 0.12rem;
                                color: #333;
                                padding: 0.06rem 0.12rem;
                                border: 0.005rem solid #3190e8;
                                border-left: 0;
                                &:first-child {
                                    border-left: 0.005rem solid #3190e8;
                                    border-top-left-radius: 0.04rem;
                                    border-bottom-left-radius: 0.04rem;
                                }
                                &:last-child {
                                    border-top-right-radius: 0.04rem;
                                    border-bottom-right-radius: 0.04rem;
                                }
                            }
                            .active {
                                color: #fff;
                                background-color: #3190e8;
                            }
                        }
                    }
                }
            }
            .other {
                .top {
                    background-color: #fff;
                    margin-top: 0.08rem;
                    padding: 0 0.12rem 0.2rem;
                    h4 {
                        font-size: 0.13rem;
                        color: #333;
                        line-height: 0.4rem;
                    }
                    textarea {
                        .size(2.75rem, 0.69rem);
                        background-color: #f9f9f9;
                        border: 0.005rem solid #eee;
                        resize: none;
                        min-height: 0.9rem;
                        border-radius: 0.04rem;
                        font-size: 0.12rem;
                        color: #666;
                        padding: 0.1rem;
                        outline: none;
                    }
                }
                .confirm {
                    background-color: #4cd964;
                    font-size: 0.14rem;
                    color: #fff;
                    text-align: center;
                    margin: 0 0.14rem;
                    line-height: 0.36rem;
                    border-radius: 0.04rem;
                }
            }
        }
    }
</style>

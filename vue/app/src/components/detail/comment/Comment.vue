<template>
    <div class="comment">
        <div v-if="Object.keys(review).length">
            <div class="head">
                <div class="left">
                    <h2>{{review.overall_score.toFixed(1)}}</h2>
                    <p>综合评价</p>
                    <p>高于周边商家{{(review.compare_rating*100).toFixed(1)}}%</p>
                </div>
                <div class="right">
                    <div class="top">
                        <span>服务态度</span>
                        <span>
                            <el-rate
                                v-model="+review.service_score.toFixed(1)"
                                disabled
                                show-score
                                text-color="#ff9900"
                                score-template="{value}">
                            </el-rate>
                        </span>
                    </div>
                    <div class="middle">
                        <span>菜品评价</span>
                        <span>
                            <el-rate
                                v-model="+review.food_score.toFixed(1)"
                                disabled
                                show-score
                                text-color="#ff9900"
                                score-template="{value}">
                            </el-rate>
                        </span>
                    </div>
                    <div class="bottom">
                        <span>送达时间</span>
                        <span>{{review.deliver_time}}分钟</span>
                    </div>
                </div>
            </div>
            <div class="body">
                <ul>
                    <li v-for="(classify, index) in classifys"
                        :class="classify.unsatisfied?index==num?'active unsatisfied':'unsatisfied':index==num?'active':''"
                        @click="num = index">{{classify.name}}({{classify.count}})
                    </li>
                </ul>
            </div>
            <div class="foot">
                <ul>
                    <li v-for="(comment, index) in comments">
                        <div class="head_pic">
                            <img :src="image_url[index]" alt="">
                        </div>
                        <div class="detail">
                            <div class="title">
                                <span>{{comment.username}}</span>
                                <span>{{comment.rated_at}}</span>
                            </div>
                            <p>
                                <span>
                                    <el-rate
                                        v-model="comment.rating_star"
                                        disabled>
                                    </el-rate>
                                </span>
                                <span v-if="comment.time_spent_desc">按时到达</span>
                            </p>
                            <ul v-show="comment.item_ratings.length && comment.item_ratings[0].image_hash">
                                <li v-for="(food, count) in comment.item_ratings">
                                    <img :src="food_url[index][count]" alt="">
                                </li>
                            </ul>
                            <ul>
                                <li v-for="food in comment.item_ratings">{{food.food_name}}</li>
                            </ul>
                        </div>
                    </li>
                </ul>
            </div>
        </div>

    </div>
</template>

<script type="text/ecmascript-6">
    import {mapState} from "vuex";

    export default {
        data() {
            return {
                classifys: [],
                comments: [],
                num: 0,
                img_url: "https://fuss10.elemecdn.com",
                review: {}
            };
        },
        components: {},
        created() {
            let id = localStorage.id;
            //评价分数
            let score_url = this.head_url + `/ugc/v2/restaurants/${id}/ratings/scores`;
            this.$http.get(score_url).then(res => {
                // console.log(res.data);
                this.review = res.data;
            });
            //评论的分类
            let classify_url = this.head_url + `/ugc/v2/restaurants/${id}/ratings/tags`;
            this.$http.get(classify_url).then(res => {
                // console.log(res.data);
                this.classifys = res.data;
            });
            //所有评论的信息
            let comment_url = this.head_url + `/ugc/v2/restaurants/${id}/ratings`;
            this.$http.get(comment_url).then(res => {
                // console.log(res.data);
                this.comments = res.data;
            });
            // console.log(this.review.service_score.toFixed(1));


        },
        computed: {
            ...mapState(["head_url"]),
            image_url() {
                console.log(this.comments);
                let image_url = this.comments.map((value, index) => {
                    let img_url = img_path(value.avatar);
                    return img_url;
                });
                return image_url;
            },
            food_url() {
                let food = this.comments.map((value, index) => {
                    let food_pat = value.item_ratings.map((value, index) => {
                        let food_url = food_path(value.image_hash);
                        //console.log(food_url);
                        return food_url;
                    })
                    // console.log(food_pat);
                    return food_pat;
                })
                console.log(food);
                return food;
            }
        }
    };

    function img_path(img) {
        var a1 = img.split("");
        if (a1.length > 0) {
            a1.splice(1, 0, "/");
            a1.splice(4, 0, "/");
            var a2 = "https://fuss10.elemecdn.com/" + a1.join("") + ".jpeg";
            return a2;
        } else {
            return "https://elm.cangdu.org/img/default.jpg";
        }
    }

    function food_path(img) {
        var a1 = img.split("");
        if (a1.length > 0) {
            a1.splice(1, 0, "/");
            a1.splice(4, 0, "/");
            var a2 = "https://fuss10.elemecdn.com/" + a1.join("") + ".jpeg";
            return a2;
        } else {
            return "";
        }
    }
</script>

<style scoped lang="less">
    .size(@width, @height) {
        width: @width;
        height: @height;
    }

    .comment::-webkit-scrollbar {
        display: none;
    }

    .comment {
        .size(3.2rem, 4.31rem);
        overflow-y: scroll;
        margin-top: 1.37rem;
        .head {
            .size(3rem, 0.66rem);
            display: flex;
            background-color: #fff;
            padding: 0.16rem 0.1rem;
            margin-bottom: 0.1rem;
            display: flex;
            justify-content: space-around;
            .left {
                text-align: center;
                h2 {
                    font-size: 0.24rem;
                    color: #f60;
                }
                p {
                    &:nth-of-type(1) {
                        font-size: 0.13rem;
                        color: #666;
                        margin: 0.05rem 0;
                    }
                    &:nth-of-type(2) {
                        font-size: 0.08rem;
                        color: #999;
                    }
                }
            }
            .right {
                .top,
                .middle,
                .bottom {
                    font-size: 0.13rem;
                    line-height: 0.2rem;
                    display: flex;
                    align-items: center;
                    justify-content: flex-start;
                    span {
                        &:first-child {
                            margin-right: 0.1rem;
                        }
                    }
                }
            }
        }
        .body {
            ul {
                display: flex;
                flex-wrap: wrap;
                background-color: #fff;
                padding: 0.1rem;
                li {
                    font-size: 0.12rem;
                    color: #6d7885;
                    padding: 0.06rem;
                    background-color: #ebf5ff;
                    border-radius: 0.04rem;
                    border: 0.01rem;
                    margin: 0 0.08rem 0.04rem 0;
                }
                .unsatisfied {
                    background-color: #f5f5f5;
                    color: #aaa;
                }
                .active {
                    background-color: #3190e8;
                    color: #fff;
                }
            }
        }
        .foot {
            ul {
                background-color: #fff;
                padding: 0 0.1rem;
                li {
                    border-top: 0.01rem solid #f1f1f1;
                    display: flex;
                    padding: 0.12rem 0;
                    .head_pic {
                        .size(0.3rem, 0.3rem);
                        margin-right: 0.16rem;
                        border-radius: 50%;
                        img {
                            .size(0.3rem, 0.3rem);
                            border: 0.005rem;
                        }
                    }
                    .detail {
                        width: 2.54rem;
                        .title,
                        p {
                            font-size: 0.11rem;
                            color: #666;
                            margin-bottom: 0.04rem;
                        }
                        .title {
                            display: flex;
                            justify-content: space-between;
                        }
                        p {
                            display: flex;
                            span {
                                &:last-child {
                                    font-size: .11rem;
                                    color: #666;
                                    margin-left: .03rem;
                                }
                            }
                        }
                        ul {
                            &:nth-of-type(1) {
                                display: flex;
                                flex-wrap: wrap;
                                margin-bottom: 0.08rem;
                                li {
                                    border: none;
                                    img {
                                        .size(0.6rem, 0.6rem);
                                        margin-right: 0.08rem;
                                    }
                                }
                            }
                            &:nth-of-type(2) {
                                display: flex;
                                flex-wrap: wrap;
                                li {
                                    font-size: 0.11rem;
                                    color: #999;
                                    width: 0.44rem;
                                    padding: 0.04rem;
                                    border: 0.005rem solid #ebebeb;
                                    border-radius: 0.03rem;
                                    margin-right: 0.06rem;
                                    margin-bottom: 0.04rem;
                                    overflow: hidden;
                                    white-space: nowrap;
                                    text-overflow: ellipsis;
                                }
                            }
                        }
                    }
                }
            }
        }
    }
</style>

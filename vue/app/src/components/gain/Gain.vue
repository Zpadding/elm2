<template>
    <div id="Gain">
        <div class="head">
            <p class="hep1">ele.me</p>

            <router-link v-if="isLogin" :to="{name: 'User'}" class="right">
                <svg t="1526180889231" class="user" style="" viewBox="0 0 1024 1024" version="1.1"
                     xmlns="http://www.w3.org/2000/svg" p-id="4302" xmlns:xlink="http://www.w3.org/1999/xlink"
                     width="32" height="32">
                    <path
                        d="M593.066667 499.2C695.466667 465.066667 768 369.066667 768 256c0-140.8-115.2-256-256-256S256 115.2 256 256c0 113.066667 72.533333 209.066667 174.933333 243.2C249.6 535.466667 85.333333 689.066667 85.333333 874.666667c0 83.2 66.133333 149.333333 149.333334 149.333333h554.666666c83.2 0 149.333333-66.133333 149.333334-149.333333 0-185.6-164.266667-339.2-345.6-375.466667zM298.666667 256c0-117.333333 96-213.333333 213.333333-213.333333s213.333333 96 213.333333 213.333333-96 213.333333-213.333333 213.333333-213.333333-96-213.333333-213.333333z m490.666666 725.333333H234.666667c-59.733333 0-106.666667-46.933333-106.666667-106.666666 0-196.266667 202.666667-341.333333 384-341.333334s384 145.066667 384 341.333334c0 59.733333-46.933333 106.666667-106.666667 106.666666z"
                        fill="#FFF" p-id="4303"></path>
                </svg>
            </router-link>
            <router-link v-else to="/enter" class="hep2">注册/登录</router-link>
        </div>

        <div class="position">
            <div class="che">
                <p>当前定位城市：<span class="che1">定位不准时,请在城市列表选择</span></p>
            </div>

            <div class="huo" @click="din(guessCity)">
                <li>
                    <p class="huo1">{{guessCity.name}}</p>
                    <span class="huo2">  > </span>
                </li>
            </div>
        </div>

        <div class="hot">


            <div class="sp">
                <p class="sp1">热门城市</p>
            </div>

            <div class="rr">
                <li v-for="(hot) in hotCity" class="rl" @click="din(hot)">
                    <p class="rm">{{hot.name}}</p></li>
            </div>
        </div>
        <div v-for="(value, key) in groupCity" class="group">
            <div class="sa">{{key}}
                <span class="sp3">（按照字母排序）</span>
            </div>

            <div class="rr">
                <li v-for="(group) in value" class="rl" @click="din(group)">
                    <p class="rn">{{group.name}}</p></li>
            </div>

        </div>


    </div>


</template>

<script>
    import {mapState} from "vuex";

    export default {
        name: "Gain",
        data() {
            return {
                hotCity: [],
                groupCity: [],
                guessCity: {},
                id: {}

            }
        },
        created() {

            let url2 = "http://cangdu.org:8001/v1/cities?type=guess";
            this.$http.get(url2).then(res => {
                // console.log(res.data);
                this.guessCity = res.data;
            })
            let url = "http://cangdu.org:8001/v1/cities?type=hot";
            this.$http.get(url).then(res => {
                // console.log(res.data);
                this.hotCity = res.data;
            })
            let url1 = "http://cangdu.org:8001/v1/cities?type=group";
            this.$http.get(url1).then(res => {
                // console.log(res.data);
                this.groupCity = objKeySort(res.data);
            })
        },


        methods: {
            din(city) {
                this.$router.push({
                    name: "City", params: city
                })
            }
        },
        computed: {
            ...mapState(["isLogin"])
        }
    }

    function objKeySort(obj) {
        var newkey = Object.keys(obj).sort();
        var newObj = {};
        for (var i = 0; i < newkey.length; i++) {
            newObj[newkey[i]] = obj[newkey[i]];
        }
        return newObj;
    }

</script>

<style scoped>

    #Gain {
        padding-top: .4rem;
    }
    .head {
        width: 3.2rem;
        height: 0.39rem;
        box-sizing: border-box;
        background: #3190e8;
        color: #fff;
        overflow: hidden;
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 0 .1rem;
        position: fixed;
        top: 0;
        left: 0;
    }

    .hep1 {
        font-size: 0.14rem;
    }

    .right .user {
        width: .16rem;
        height: .16rem;
    }

    .hep2 {
        color: #fff;
        float: right;
        line-height: .4rem;
        padding-right: 0.1rem;
        font-size: 0.12rem;
    }

    .position {
        background: #fff;
        border-bottom: .005rem solid #e4e4e4;
    }

    .che {
        padding-top: 0.18rem;
        padding-left: 0.1rem;
        font-size: 0.1rem;
        font-weight: 900;
    }

    .che1 {
        margin-left: 0.5rem;
    }

    .huo {
        line-height: .36rem;
        margin-top: 0.08rem;
        border-bottom: #e4e4e4 0.01rem solid;
        border-top: #e4e4e4 0.01rem solid;
        overflow: hidden;
    }

    .huo li {
        overflow: hidden;
    }

    .huo1 {
        color: #3190e8;
        float: left;
        margin-left: 0.1rem;
        font-size: 0.15rem;
    }

    .huo2 {
        float: right;
        margin-right: 0.1rem;
    }

    .hot {
        background: #fff;
        margin-top: .08rem;
        border-top: .02rem solid #e4e4e4;
        border-bottom: .01rem solid #e4e4e4;

    }

    .sp {
        margin-left: 0.1rem;
        height: 0.32rem;
        line-height: 0.32rem;
    }

    .sp1 {
        font-size: 0.11rem;
    }

    .rr {
        box-sizing: border-box;
        border-top: 0.01rem solid #e4e4e4;
    }

    .rm {
        font-size: 0.13rem;
        color: #3190e8;
        text-align: center;
        margin-top: 0.1rem;
    }

    .rl {
        display: inline-block;
        border-bottom: 0.005rem solid #e4e4e4;
        border-right: 0.005rem solid #e4e4e4;
        height: 0.35rem;
        width: 25%;
        font-size: 0.03rem;
        box-sizing: border-box;
    }

    .rr .rl:nth-of-type(4n) {
        border-right: none;
    }

    .group {
        background: #fff;
        margin-top: .08rem;
        border-top: .02rem solid #e4e4e4;
    }

    .sa {
        color: #666;
        font-weight: 400;
        text-indent: .09rem;
        font-size: .11rem;
        line-height: .33rem;

    }

    .sp3 {
        font-size: .095rem;
        color: #999;
    }

    .rn {
        color: #666;
        font-size: 0.13rem;
        text-align: center;
        margin-top: 0.1rem;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
    }
</style>

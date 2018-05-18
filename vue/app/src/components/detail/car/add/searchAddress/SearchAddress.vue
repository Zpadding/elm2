<template>
    <div id="SearchAddress">
        <div id="head">
            <div @click="$router.go(-1)" class="hep1"> <</div>
            <span class="hep2">搜索</span>
        </div>
        <div class="da">
            <input type="text" placeholder="输入小区/写字楼/学校等" class="su" v-model="keyword">
            <button class="tj" @click="search">搜索</button>
        </div>
        <ul class="dis" v-if="show">
            <li v-for="dis in diss" @click="select(dis)">
                <h4>{{dis.name}}</h4>
                <p>{{dis.address}}</p>
            </li>
        </ul>
        <div class="mark" v-else>
            <p>
                找不到地址？
                <br>
                尝试输入小区、写字楼或学校名
                <br>
                详细地址（如门牌号等）可稍后输入哦
            </p>
        </div>
    </div>


</template>

<script>
    import {mapState} from "vuex";

    export default {
        name: "SearchAddress",
        data() {
            return {
                keyword: ``,
                diss: [],
                show: false,
                address: ""
            };
        },
        created() {
        },
        computed: {
            ...mapState(["head_url"])
        },
        methods: {
            search() {
                this.show = true;
                let id = JSON.parse(localStorage.city).id;
                let url =
                    this.head_url +
                    `/v1/pois?city_id=${id}&keyword=${this.keyword}`;
                this.$http.get(url).then(result => {
                    console.log(result.data);
                    this.diss = result.data;
                });
            },
            select(dis) {
                this.show = false;
                if (this.$route.params.from == "Add") {
                    this.$router.push({name: "Add", params: dis});
                } else if (this.$route.params.from == "AddAddress") {
                    this.$router.push({name: "AddAddress", params: dis});
                }
            }
        }
    };
</script>

<style scoped>
    #SearchAddress {
        width: 3.2rem;
        height: 5.68rem;
        overflow: hidden;
        -webkit-font-smoothing: antialiased;
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
    }

    .hep2 {
        height: 0.4rem;
        float: right;
        padding-right: 1.5rem;
        padding-top: 0.1rem;

    }

    .hep3 {
        font-size: 0.05rem;
        color: #fff;
        position: absolute;
        left: 2.5rem;
        top: 0.14rem;
    }

    .da {
        display: flex;
        padding: 0.14rem;
    }

    .da input {
        font-size: 0.13rem;
        color: #999;
        flex: 4;
        background-color: #f1f1f1;
        margin-right: 0.12rem;
        height: 0.3rem;
        border-radius: 0.03rem;
        padding: 0 0.08rem;
        outline: none;
    }

    .tj {
        flex: 1;
        font-size: 0.13rem;
        color: #fff;
        background-color: #3190e8;
        border-radius: 0.03rem;
        outline: none;
    }

    .p {
        margin-top: 0.1rem;
        border: 1px solid #e4e4e4;
        width: 100%;
        font-size: 0.05rem;
    }

    .p,
    span {
        padding-left: 0.1rem;
    }

    .dis li {
        margin: 0 auto;
        padding-top: 0.13rem;
        border-bottom: 0.01rem solid #e4e4e4;
        background: white;
    }

    .dis li h4 {
        margin: 0 auto 0.07rem;
        width: 90%;
        font-size: 0.13rem;
        color: #333;
    }

    .dis li p {
        width: 90%;
        margin: 0 auto 0.11rem;
        font-size: 0.09rem;
        color: #999;
    }

    .mark {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        width: 100%;
    }

    .mark p {
        font-size: .1rem;
        color: #aaa;
        line-height: .14rem;
        text-align: center;
    }
</style>

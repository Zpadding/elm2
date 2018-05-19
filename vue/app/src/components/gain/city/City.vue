<template>
    <div id="City">
        <div id="head">
            <router-link to="/gain" class="hep1"> <</router-link>
            <span class="hep2" v-model="city_id">{{city.name}}</span>
            <router-link to="/gain" class="hep3">切换城市</router-link>
        </div>
        <div class="da">
            <input type="text" placeholder="输入学习，商业楼，地址" class="su" v-model="keyword">

            <button class="tj" v-model="cty" @click="search">提交</button>
            <p class="p" v-if="history.length">
                <span>搜索历史</span>
            </p>
            <ul class="dis" v-if="show">
                <li v-for="dis in diss" @click="select(dis)">
                    <h4>{{dis.name}}</h4>
                    <p>{{dis.address}}</p>
                </li>
            </ul>
            <ul class="dis" v-else>
                <li v-for="his in history" @click="choose(his)">
                    <h4>{{his.name}}</h4>
                    <p>{{his.address}}</p>
                </li>
                <div v-if="history.length" class="clear" @click="clear">清空所有</div>
            </ul>
        </div>

    </div>


</template>

<script>
    import {mapState} from "vuex";
    import { mapMutations } from "vuex";
    export default {
        name: "City",
        data() {
            return {
                sa: ``,
                cty: ``,
                city_id: '',
                keyword: ``,
                diss: [],
                show: false,
                hiss: []
            }
        },
        created() {
            console.log(this.$route.params);
            if (Object.keys(this.$route.params).length) {
                this.city = this.$route.params;
                localStorage.city = JSON.stringify(this.city);
            } else {
                this.city = JSON.parse(localStorage.city);
            }
            if (localStorage.history) {
                this.$store.commit("history", JSON.parse(localStorage.history));
            } 
        },
        computed: {
            ...mapState(["head_url", "history"])
        },
        methods: {
            search() {
                this.show = true;
                let url = this.head_url + `/v1/pois?city_id=${this.city.id}&keyword=${this.keyword}`;
                this.$http.get(url).then((result) => {
                    console.log(result.data);
                    this.diss = result.data;
                }).catch((err) => {

                });
            },
            select(dis) {
                this.show = false;
                this.$store.commit("addHistory", dis);
                localStorage.history = JSON.stringify(this.history);
                this.$router.push({name: "Eat", params: dis})
            },
            ...mapMutations({clear: "clearHistory"}),
            choose(his) {
                this.$router.push({name: "Eat", params: his});
            }
        }
    }
</script>

<style scoped>
    #City {
        width: 3.2rem;
        height: 5.68rem;
        overflow: hidden;
        -webkit-font-smoothing: antialiased;
        background-color: #f5f5f5;
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
        font-size: 0.12rem;
        color: #fff;
        position: absolute;
        left: 2.6rem;
        top: 0.14rem;
    }

    .da {
        margin-top: 0.2rem;
        border: 1px solid #e4e4e4;
        height: 0.86rem;
    }

    .su {
        margin-top: 0.1rem;
        margin-bottom: 0.1rem;
        margin-left: 0.2rem;
        width: 2.88rem;
        height: 0.28rem;
        outline: none;
    }

    .tj {
        width: 2.88rem;
        height: 0.28rem;
        background-color: #3190e8;
        border-radius: 5px;
        margin-left: 0.2rem;
        outline: none;
        color: white;
    }

    .p {
        margin-top: 0.1rem;
        border: 1px solid #e4e4e4;
        width: 100%;
        font-size: 0.05rem;
    }

    .p, span {
        padding-left: 0.1rem;
    }

    .dis li {
        margin: 0 auto;
        padding-top: .13rem;
        border-bottom: .01rem solid #e4e4e4;
        background: white;
    }
    .dis li h4 {
        margin: 0 auto .07rem;
        width: 90%;
        font-size: .13rem;
        color: #333;
    }
    .dis li p {
        width: 90%;
        margin: 0 auto .11rem;
        font-size: .09rem;
        color: #999;
    }
    .clear {
        font-size: .14rem;
        color: #666;
        text-align: center;
        line-height: .4rem;
        background-color: #fff;
    }

</style>

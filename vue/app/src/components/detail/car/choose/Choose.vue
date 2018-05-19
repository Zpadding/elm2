<template>
    <div id="Choose">
        <div id="head">
            <div @click="$router.go(-1)" class="hep1"> <</div>
            <span class="hep2">选择地址</span>
        </div>
        <ul>
            <li class="logo" v-for="(location, index) in locations" @click="select(location, index)">
                <svg v-if="index == number" t="1526462116775" class="greenRight" style="" viewBox="0 0 1024 1024"
                     version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="1505"
                     xmlns:xlink="http://www.w3.org/1999/xlink" width="32" height="32">
                    <path
                        d="M0 512C0 229.234759 229.234759 0 512 0s512 229.234759 512 512-229.234759 512-512 512S0 794.765241 0 512z m419.310345 194.630621a35.310345 35.310345 0 0 0 49.399172 1.271172l335.518897-311.931586a35.310345 35.310345 0 0 0-48.075035-51.729655l-309.124413 289.544827-145.125518-149.645241a35.310345 35.310345 0 1 0-50.688 49.169655l168.112552 173.320828z"
                        p-id="1506"></path>
                </svg>
                <div class="hold" v-else></div>

                <div class="detail">
                    <div class="top">
                        <span>{{location.name}}</span>
                        <span>{{location.sex == 1? '先生': '女士'}}</span>
                        <span>{{location.phone}}</span>
                    </div>
                    <div class="bottom">
                        <span>{{location.tag}}</span>
                        <span>{{location.address_detail}}</span>
                    </div>
                </div>
            </li>
        </ul>

        <router-link to="/add">
            <div class="ppx"><img :src="jia">
                <p>新增收货地址</p></div>
        </router-link>
    </div>


</template>

<script>
    import jia from "../../../../assets/加号.png";
    import {mapState} from "vuex";

    export default {
        name: "Choose",
        data() {
            return {
                jia: jia,
                locations: [],
                number: 0
            };
        },
        computed: {
            ...mapState(["head_url"])
        },
        created() {
            let user_id = JSON.parse(localStorage.user).user_id;
            let url = this.head_url + `/v1/users/${user_id}/addresses`;
            this.$http.get(url).then(result => {
                console.log(result.data);
                this.locations = result.data;
            });
        },
        methods: {
            select(infor, index) {
                this.number = index;
                this.$router.push({name: "Confirm", params: {location: infor}});
            }
        }
    };
</script>

<style scoped>
    #head {
        height: 0.39rem;
        width: 100%;
        background: #3190e8;
        color: #fff;
        overflow: hidden;
        margin-bottom: 0.15rem;
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

    .ppx {
        text-align: center;
        position: fixed;
        top: 5.2rem;
        height: 0.5rem;
        width: 100%;
    }

    .ppx > img {
        height: 0.23rem;
        width: 0.23rem;
        text-align: center;

        float: left;
        margin-left: 0.95rem;
        margin-top: 0.15rem;
    }

    .ppx > p {
        margin-right: 0.95rem;
        float: right;
        margin-top: 0.18rem;
        color: #3190e8;
        font-weight: 300;
    }

    .logo {
        display: flex;
        align-items: center;
        border-bottom: 0.005rem solid #f5f5f5;
        padding: 0.14rem;
        line-height: 0.2rem;
    }

    .logo .greenRight {
        width: 0.16rem;
        height: 0.16rem;
        margin-right: 0.1rem;
        fill: #4cd964;
    }

    .hold {
        width: 0.16rem;
        height: 0.16rem;
        margin-right: 0.1rem;
    }

    .detail .top span:first-child {
        font-size: 0.16rem;
        font-weight: 700;
    }

    .detail .bottom {
        width: 100%;
        display: flex;
        align-items: center;
        margin-top: 0.05rem;
    }

    .detail .bottom span:first-child {
        font-size: 0.1rem;
        color: #fff;
        border-radius: 0.03rem;
        background-color: #ff5722;
        height: 0.12rem;
        line-height: 0.12rem;
        padding: 0 0.04rem;
        margin-right: 0.06rem;
    }

    .detail .bottom span:last-child {
        font-size: 0.11rem;
        color: #777;
    }
</style>

<template>
    <div class="car">
        <div class="bottom">
            <div class="left">
                <div @click="show = !show">
                    <div class="shopCar" :style="this.price!=0?bg:''">
                        <img :src="shopCar" alt="">
                        <span v-if="count" class="count">{{count}}</span>
                    </div>
                    <div class="money">
                        <div class="head">¥ {{price}}.00</div>
                        <div class="foot">配送费¥5</div>
                    </div>
                </div>

                <div class="product" v-if="show">
                    <div class="header" v-if="this.car.length">
                        <span>购物车</span>
                        <span>
                          <img src="" alt="">
                          <span @click="clear">清空</span>
                      </span>
                    </div>
                    <div class="body">
                        <ul>
                            <li v-for="(product, index) in car">
                                <div class="carLeft">
                                    <div class="one">
                                        <span class="name">{{product.name}}</span>
                                        <span class="price">¥{{product.price}}</span>
                                    </div>
                                    <div class="two" v-if="product.specs.length">{{product.specs[0].value}}</div>
                                </div>
                                <div class="carRight">
                                    <span class="reduce" @click="reduce(index)">-</span>
                                    <span class="num">{{product.quantity}}</span>
                                    <span class="add" @click="add(index)">+</span>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <div class="right" v-if="price < 15">还差¥20起送</div>
            <div class="right pay" v-else @click="pay">去结算</div>
        </div>

    </div>
</template>

<script type="text/ecmascript-6">
    import shopCar from "../../../assets/car.png";
    import {mapState} from "vuex";

    export default {
        data() {
            return {
                shopCar: shopCar,
                bg: {
                    backgroundColor: "#3190e8"
                },
                show: false,
                shop: {},
                id: ""
            };
        },
        components: {},
        computed: {
            ...mapState(["head_url", "price", "car", "allFood", "isPay"]),
            count() {
                let num = 0;
                for (let i = 0; i < this.car.length; i++) {
                    num += this.car[i].quantity;
                }
                return num;
            }
        },
        methods: {
            reduce(index) {
                this.car[index].data.number--;
                this.car[index].quantity = this.car[index].data.number;
                let price = this.price - this.car[index].price;
                // let num = this.car[index].dom;
                // if (!this.car[index].data.number) {
                //   num.className = "num fadeOut";
                //   num.previousElementSibling.className = "reduce leave";
                //   setTimeout(() => {
                //     num.style.display = "none";
                //     num.previousElementSibling.style.display = "none";
                //   }, 490);
                // }
                if (!this.car[index].quantity) {
                    this.car.splice(index, 1);
                }
                this.$store.commit("price", price);
                if (!this.car.length) {
                    this.show = false;
                }
                localStorage.car = JSON.stringify(this.car);
                localStorage.price = JSON.stringify(this.price);
                localStorage.allFood = JSON.stringify(this.allFood);
            },
            add(index) {
                this.car[index].data.number++;
                this.car[index].quantity = this.car[index].data.number;
                let price = this.price + this.car[index].price;
                this.$store.commit("price", price);
                let num = this.car[index].dom;


                localStorage.car = JSON.stringify(this.car);
                localStorage.price = JSON.stringify(this.price);
                localStorage.allFood = JSON.stringify(this.allFood);

                // num.innerHTML++;
                // if (this.car[index].data.number) {
                //   num.style.display = "inline-block";
                //   num.previousElementSibling.style.display = "inline-block";
                // }
            },
            clear() {
                for (let i = 0; i < this.allFood.length; i++) {
                    this.allFood[i].number = 0;
                }
                for (let i = 0; i < this.car.length; i++) {
                    this.car[i].data.number = 0;
                    // let num = this.car[i].dom;
                    // num.className = "num fadeOut";
                    // num.previousElementSibling.className = "reduce leave";
                    // setTimeout(() => {
                    //     num.style.display = "none";
                    //     num.previousElementSibling.style.display = "none";
                    // }, 490);
                }
                this.car.splice(0);
                this.$store.commit("car", this.car);
                this.$store.commit("price", 0);
                localStorage.car = JSON.stringify(this.car);
                localStorage.price = JSON.stringify(this.price);
                localStorage.allFood = JSON.stringify(this.allFood);
            },
            pay() {
                let url = this.head_url + "/v1/carts/checkout";
                console.log(this.car);
                let car = this.car.map(food => {
                    delete food.data;
                    delete food.dom;
                    return food;
                });
                console.log(car);
                let params = {
                    restaurant_id: +this.id,
                    geohash: JSON.parse(localStorage.address).geohash,
                    entities: [car]
                };
                this.$http.post(url, params).then(res => {
                    console.log(res.data);
                    localStorage.shopCar = JSON.stringify(res.data);
                });
                this.$router.push({name: "Confirm", params: {shop: this.shop}});
            },
            find() {
                console.log(this.allFood);
            }
        },
        watch: {
            price(newValue, oldValue) {
                if (newValue > oldValue) {
                    let car = "";
                    if (document.querySelector(".shopCar") != null) {
                        car = document.querySelector(".shopCar");
                        setTimeout(() => {
                            car.setAttribute("class", "shopCar jump");
                        }, 550);
                        setTimeout(() => {
                            car.setAttribute("class", "shopCar");
                        }, 1050);
                    }
                }
            }
        },
        created() {
            if (this.$route.params.id) {
                this.id = this.$route.params.id;
                // localStorage.id = this.id;
            } else {
                this.id = localStorage.id;
            }
            let shop_url = this.head_url + "/shopping/restaurant/" + this.id;
            this.$http.get(shop_url).then(res => {
                console.log(res.data);
                this.shop = res.data;
            });
            if (!this.isPay && localStorage.car &&Object.keys(localStorage.car).length && localStorage.user) {
                this.$store.commit("car", JSON.parse(localStorage.car));
                let pirce = 0;
                for (let i = 0; i < this.car.length; i++) {
                    pirce += this.car[i].price * this.car[i].quantity;
                }
                this.$store.commit("price", pirce);
            }
        }
    };
</script>

<style scoped>
    @keyframes jump {
        0% {
            transform: scale(1);
        }
        25% {
            transform: scale(0.8);
        }
        50% {
            transform: scale(1.1);
        }
        75% {
            transform: scale(0.9);
        }
        100% {
            transform: scale(1);
        }
    }

    .jump {
        animation: jump 0.5s;
    }

    /* .car {
        width: 3.2rem;
        height: 0.4rem;
    } */
    .bottom {
        width: 3.2rem;
        height: 0.4rem;
        display: flex;
        background: #333;
        justify-content: space-between;
        align-items: center;
        position: fixed;
        left: 0;
        bottom: 0;
        right: 0;
        color: white;
        z-index: 1;
    }

    .shopCar {
        width: 0.24rem;
        height: 0.24rem;
        display: flex;
        background-color: #3d3d3f;
        position: absolute;
        padding: 0.08rem;
        border: 0.036rem solid #444;
        border-radius: 50%;
        left: 0.1rem;
        top: -0.15rem;
        z-index: 2;
    }

    .count {
        position: absolute;
        top: -0.06rem;
        right: -0.06rem;
        background-color: #ff461d;
        line-height: 0.14rem;
        text-align: center;
        border-radius: 50%;
        border: 0.005rem solid #ff461d;
        min-width: 0.14rem;
        height: 0.14rem;
        font-size: 0.1rem;
        color: #fff;
    }

    .shopCar img {
        width: 0.35rem;
        height: 0.35rem;
        position: absolute;
        top: 0.03rem;
        left: 0.02rem;
    }

    .money {
        margin-left: 0.7rem;
    }

    .money .head {
        font-size: 0.16rem;
        font-weight: 700;
        margin-bottom: 0.02rem;
    }

    .foot {
        font-size: 0.08rem;
    }

    .right {
        width: 1rem;
        height: 0.4rem;
        line-height: 0.4rem;
        background: #535356;
        text-align: center;
        font-size: 0.14rem;
    }

    .pay {
        color: white;
        background-color: #4cd964;
    }

    .product {
        margin-bottom: 0.4rem;
        background: white;
        color: black;
        position: fixed;
        left: 0;
        right: 0;
        bottom: 0;
    }

    .product .header {
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 0.06rem 0.12rem;
        background-color: #eceff1;
    }

    .header span:first-child {
        font-size: 0.14rem;
        color: #666;
    }

    .header span:last-child {
        font-size: 0.12rem;
        color: #666;
    }

    .body ul li {
        display: flex;
        justify-content: space-between;
        padding: 0.12rem 0.1rem;
    }

    .body .carLeft .one {
        width: 2rem;
        display: flex;
        justify-content: space-between;
    }

    .one .name {
        font-size: 0.14rem;
        color: #666;
        font-weight: 700;
    }

    .one .price {
        font-size: 0.14rem;
        color: #f60;
        font-weight: 700;
    }

    .two {
        font-size: 0.08rem;
        color: #666;
    }

    .num {
        display: inline-block;
        width: 0.2rem;
        height: 0.15rem;
        font-size: 0.11rem;
        text-align: center;
        line-height: 0.15rem;
    }

    .add {
        width: 0.15rem;
        height: 0.15rem;
        display: inline-block;
        text-align: center;
        line-height: 0.12rem;
        font-size: 0.15rem;
        color: white;
        border-radius: 50%;
        font-weight: bold;
        background-color: #3190e8;
        border: 0.01rem solid #3190e8;
        margin-right: 0.15rem;
    }

    .reduce {
        width: 0.15rem;
        height: 0.15rem;
        display: inline-block;
        text-align: center;
        line-height: 0.12rem;
        font-size: 0.15rem;
        color: #3190e8;
        border-radius: 50%;
        font-weight: bold;
        /* background-color: #3190e8; */
        border: 0.01rem solid #3190e8;
        /* margin-right: 0.15rem; */
    }
</style>

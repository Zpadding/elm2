<template>
    <div id="down">
        <div id="head">
            <router-link to="/show/user" class="hep1"> <</router-link>
            <span class="hep2">下载</span>
        </div>
        <div class="img">
            <img :src="logo" alt="">
            <p class="el">下载饿了么APP</p>
        </div>
        <div @click="show=!show">
            <button class="bou"> 下载</button>

            <transition name="bounce">
                <div v-if="!show" id="wit">
                    <p class="p">
                        <svg t="1526611683713" class="warning" style="" viewBox="0 0 1024 1024" version="1.1"
                             xmlns="http://www.w3.org/2000/svg" p-id="1686" xmlns:xlink="http://www.w3.org/1999/xlink"
                             width="64" height="64">
                            <path
                                d="M512 0C229.6832 0 0 229.6576 0 512s229.6832 512 512 512 512-229.6832 512-512S794.3168 0 512 0zM512 996.3264c-267.0592 0-484.3264-217.2928-484.3264-484.3264S244.9408 27.6736 512 27.6736 996.3264 244.9408 996.3264 512 779.0592 996.3264 512 996.3264z"
                                p-id="1687"></path>
                            <path
                                d="M512 633.0624c-14.2336 0-25.7536-11.5456-25.7536-25.7536l0-322.816c0-14.2336 11.52-25.7536 25.7536-25.7536 14.2336 0 25.7536 11.5456 25.7536 25.7536l0 322.816C537.7792 621.5168 526.2592 633.0624 512 633.0624z"
                                p-id="1688"></path>
                            <path d="M512 730.8288m-34.4576 0a1.346 1.346 0 1 0 68.9152 0 1.346 1.346 0 1 0-68.9152 0Z"
                                  p-id="1689"></path>
                        </svg>
                    </p>
                    <p class="p3">ios用户请前往AppStore下载</p>
                    <button class="bou1">确认</button>
                </div>
            </transition>
        </div>


    </div>
</template>

<script>
import logo from "../../../assets/w1-3.jpeg";
    export default {
        name: "Down",
        data() {
            return {
                show: true,
                logo: logo
            }

        }

    }
</script>

<style scoped>
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

    .img {
        margin-top: 0.3rem;
        text-align: center;
    }

    .el {
        margin-top: 0.15rem;
        color: #666;
        margin-bottom: 0.2rem;
    }

    .bou {
        height: 0.36rem;
        width: 2.94rem;
        text-align: center;
        background-color: #4cd964;
        color: #fff;
        margin-left: 0.12rem;
        outline: none;
    }

    .bou1 {
        margin-top: .1rem;
        height: 0.4rem;
        width: 2.4rem;
        text-align: center;
        background-color: #4cd964;
        color: #fff;
        outline: none;
    }

    #wit {

        height: 1.58rem;
        width: 2.4rem;

        background: white;
        margin-left: 0.4rem;
        position: absolute;
        left: 0;
        top: 1.8rem;
        margin-bottom: 0.2rem;
    }

    .p {
        text-align: center;
        margin-bottom: 0.2rem;
        margin-top: 0.2rem;
    }

    .warning {
        height: 0.6rem;
        width: 0.6rem;
        fill: #f8cb86;
    }

    .p3 {
        text-align: center;
        margin-left: 0.1rem;

    }

    .bounce-enter-active {
        animation: bounce-in .5s;
    }

    .bounce-leave-active {
        /*animation: bounce-in .5s reverse;*/
    }

    @keyframes bounce-in {
        0% {
            transform: scale(1);
        }
        35% {
            transform: scale(.8);
        }
        70% {
            transform: scale(1.1);
        }

        100% {
            transform: scale(1);
        }
    }
</style>

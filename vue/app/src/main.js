// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

import axios from "axios"
import VueAxios from "vue-axios"

import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

import store from './store';
import {
    Plugin1
} from "./plugins/plugin1.js";



var VueTouch = require("vue-touch");
Vue.use(VueTouch, {
    name: "v-touch"
});
Vue.use(Plugin1);

Vue.use(ElementUI);

Vue.use(VueAxios, axios);

Vue.config.productionTip = false;

axios.interceptors.request.use(
    function(config) {
        console.log("开始请求");
        store.commit("animation", true)
            // Do something before request is sent
        return config;
    },
    function(error) {
        // Do something with request error
        return Promise.reject(error);
    }
);

axios.interceptors.response.use(
    function(response) {
        // Do something with response data
        console.log("请求结束");
        store.commit("animation", false);
        return response;
    },
    function(error) {
        // Do something with response error
        return Promise.reject(error);
    }
);


/* eslint-disable no-new */
new Vue({
    el: '#app',
    router,
    store,
    components: {
        App
    },
    template: '<App/>'
});
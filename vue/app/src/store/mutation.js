let mutations = {
    changeOrder(state, data) {
        state.order = data;
    },
    classify(state, data) {
        state.classify = data;
    },
    shopDetail(state, data) {
        state.shopDetail = data;
    },
    car(state, data) {
        state.car = data;
    },
    price(state, data) {
        state.price = data;
    },
    allFood(state, data) {
        state.allFood = data;
    },
    user(state, data) {
        state.user = data;
    },
    login(state) {
        state.isLogin = true;
    },
    quit(state) {
        state.isLogin = false;
    }

}

export default mutations;
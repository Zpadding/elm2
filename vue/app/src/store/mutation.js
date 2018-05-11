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
    }
}

export default mutations;
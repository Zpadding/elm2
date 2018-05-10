let mutations = {
    changeOrder(state, data) {
        state.order = data;
    },
    classify(state, data) {
        state.classify = data;
    },
    shopDetail(state, data) {
        state.shopDetail = data;
    }
}

export default mutations;
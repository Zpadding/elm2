let mutations = {
    changeOrder(state, data) {
        state.order = data;
    },
    classify(state, data) {
        state.classify = data;
    }
}

export default mutations;
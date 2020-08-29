export default {
    state: {
        products: []
    },
    getters: {
        totalValue(state) {
            return state.products.map((p) => p.quantity * p.price)
                .reduce((total, current) => total + current, 0);
        }
    },
    mutations: {
        addProduct(state, payload) {
            state.products.push(payload);
        }
    },
    actions: {
        // addProduct(context, payload) {
        //     setTimeout(() => {
        //         context.commit("addProduct", payload);
        //     }, 1000);
        // }
        addProduct({
            commit
        }, payload) {
            setTimeout(() => {
                commit("addProduct", payload);
            }, 1000);
        }
    }
}
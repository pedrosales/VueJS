import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        products: [],
        quantity: 2,
        price: 19.99,
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
        },
        setQuantity(state, payload) {
            state.quantity = payload;
        },
        setPrice(state, payload) {
            state.price = payload
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
});
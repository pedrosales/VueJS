import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        products: []
    },
    getters: {
        totalValue(state) {
            return state.products.map((p) => p.quantity * p.price)
                .reduce((total, current) => total + current, 0);
        }
    }
});
import Vue from "vue";
import Vuex from "vuex";

import cart from "./modules/cart";
import parameters from "./modules/parameters";

import * as getters from "./getters";

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        name: "Pedro Ivo",
        lastName: "Sales"
    },
    getters,
    modules: {
        cart,
        parameters
    }
});
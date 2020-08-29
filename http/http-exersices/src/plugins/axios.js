import Vue from "vue";
import axios from "axios";

// axios.defaults.baseURL = "https://vue-backend-24531.firebaseio.com/";

Vue.use({
    install(Vue) {
        // Vue.prototype.$http = axios;
        Vue.prototype.$http = axios.create({
            baseURL: "https://vue-backend-24531.firebaseio.com/"
        });
    }
});
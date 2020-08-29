import Vue from "vue";
import axios from "axios";

// // axios.defaults.baseURL = "https://vue-backend-24531.firebaseio.com/";
// axios.defaults.headers.common["Authorization"] = "abc123";
// axios.defaults.headers.get["Accepts"] = "application/json";

Vue.use({
    install(Vue) {
        // Vue.prototype.$http = axios;
        Vue.prototype.$http = axios.create({
            baseURL: "https://vue-backend-24531.firebaseio.com/",
            headers: {
                "Authorization": "abc123"
            }
        });

        Vue.prototype.$http.interceptors.request.use(config => {
            console.log(config.method);
            return config;
        }, error => Promise.reject(error));

        Vue.prototype.$http.interceptors.response.use(response => {
            // let array = [];

            // for (let chave in response.data) {
            //     array.push({
            //         id: chave,
            //         ...response.data[chave]
            //     });
            // }

            // response.data = array;
            return response;
        }, error => Promise.reject(error));
    }
});
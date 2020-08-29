import Vue from "vue";
import Router from "vue-router";

import Index from "./components/IndexComponent";
import User from "./components/user/User";

Vue.use(Router);

export default new Router({
    mode: "history",
    routes: [{
        path: "/",
        component: Index
    }, {
        path: "/user",
        component: User
    }]
});
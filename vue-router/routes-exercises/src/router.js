import Vue from "vue";
import Router from "vue-router";

import Index from "./components/IndexComponent";
import Menu from "./components/template/Menu";
import MenuAlt from "./components/template/MenuAlt";

import User from "./components/user/User";
import UserList from "./components/user/UserList";
import UserDetails from "./components/user/UserDetails";
import UserEdit from "./components/user/UserEdit";

Vue.use(Router);

export default new Router({
    mode: "history",
    scrollBehavior(to, from, savedPosition) {
        if (savedPosition) {
            return savedPosition;
        } else
        if (to.hash) {
            return {
                selector: to.hash
            }
        } else {
            return {
                x: 0,
                y: 0
            }
        }
        // return {
        //     x: 0,
        //     y: 1000
        // }
    },
    routes: [{
            path: "/",
            //component: Index,
            name: "index",
            components: {
                default: Index,
                menu: Menu
            }
        }, {
            path: "/users",
            //component: User,
            components: {
                default: User,
                menu: MenuAlt,
                menuBottom: MenuAlt
            },
            props: true,
            children: [{
                    path: "",
                    component: UserList
                },
                {
                    path: ":id",
                    component: UserDetails,
                    props: true
                },
                {
                    path: ":id/edit",
                    component: UserEdit,
                    props: true,
                    name: "userEdit"
                }
            ]
        }, {
            path: "/redirect",
            redirect: "/users"
        },
        {
            path: "*",
            redirect: "/"
        }
    ]
});
import Vue from "vue";
import Router from "vue-router";

import Home from "@/components/Home.vue";
import landingPage from "@/components/landingPage.vue";
import loginForm from "@/views/loginForm.vue";
import registerForm from "@/views/registerForm.vue";
import forgotPassword from "@/views/forgotPassword.vue";
Vue.use(Router);

export default new Router({
    mode: "history",
    routes: [{
            path: "/",
            name: "LandingPage",
            component: landingPage,
            redirect: '/home'
        },
        {
            path: "/home",
            name: 'Home',
            component: Home,
            redirect: "home/login-form",
            children: [{
                    path: "login-form",
                    name: "loginForm",
                    component: loginForm
                },
                {
                    path: "register-form",
                    name: "registerForm",
                    component: registerForm
                },
                {
                    path: "forgot-password",
                    name: "forgotPassword",
                    component: forgotPassword
                },
            ]
        },

        , {
            path: "/landing-page",
            name: "LandingPage",
            component: landingPage
        }

    ]
});
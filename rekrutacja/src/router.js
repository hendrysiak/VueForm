import Vue from "vue";
import Router from "vue-router";

import Home from "@/views/Home.vue";
import Zadanie1 from "@/views/Zadanie1.vue";
Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/",
      component: Home
    },
    {
      path: "/zadanie1",
      name: "Zadanie1",
      component: Zadanie1
    }
  ]
});

import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path: "/cart",
    component: () => import("../views/Cart.vue")
  },
  {
    path: "/mine",
    component: () => import("../views/Mine.vue")
  },
  {
    path: "/detail",
    component: () => import("../views/Detail.vue")
  },
  {
    path: "/login",
    component: () => import("../views/Login.vue")
  }
];

const router = new VueRouter({
  routes
});

export default router;

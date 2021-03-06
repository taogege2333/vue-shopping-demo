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
  },
  {
    path: "/address",
    component: () => import("../views/MyAddress.vue")
  },
  {
    path: "/address/add",
    component: () => import("../views/EditAddress.vue")
  },
  {
    path: "/address/edit/:id",
    name: "editAddress",
    component: () => import("../views/EditAddress.vue")
  },
  {
    path: "/settlement",
    component: () => import("../views/Settlement.vue")
  }
];

const router = new VueRouter({
  routes
});

export default router;

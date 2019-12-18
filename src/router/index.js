import Vue from "vue";
import VueRouter from "vue-router";

import Home from "@/modules/home/pages/HomePage.vue";
import Users from "@/modules/users/pages/UsersPage.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    component: Home
  },
  {
    path: "/users",
    component: Users
  },
  {
    path: "/users/create",
    component: () => import("@/modules/users/pages/UserCreatePage.vue")
  },
  {
    path: "/users/:id/edit",
    component: () => import("@/modules/users/pages/UserEditPage.vue")
  }
];

const router = new VueRouter({
  mode: "history",
  linkExactActiveClass: "active",
  routes
});

export default router;

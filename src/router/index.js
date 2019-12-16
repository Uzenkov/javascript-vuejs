import Vue from "vue";
import VueRouter from "vue-router";

import Home from "@/modules/home/pages/Home.vue";
import Users from "@/modules/users/pages/Users.vue";

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
    path: "/users/:id",
    component: () => import("@/modules/users/components/UserEdit.vue")
  }
];

const router = new VueRouter({
  mode: "history",
  routes
});

export default router;

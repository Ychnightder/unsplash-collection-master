import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import ImageDetail from "../views/ImageDetail.vue";
import Collections from "../views/Collections.vue";

const routes = [
  { path: "/", redirect: "/home" },
  { path: "/home", name: "Home", component: Home },
  { path: "/image/:id", component: ImageDetail, props: true },
  { path: "/collections", name: "Collections", component: Collections },
];

export default createRouter({
  history: createWebHistory(),
  routes,
});

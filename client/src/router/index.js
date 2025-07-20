import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import ImageDetail from "../components/ImageDetail.vue";
import Collections from "../views/Collections.vue";
import CollectionDetailView from "../components/CollectionDetailView.vue";

const routes = [
  { path: "/", redirect: "/home" },
  { path: "/home", name: "Home", component: Home },
  { path: "/image/:id", component: ImageDetail, props: true },
  { path: "/collections", name: "Collections", component: Collections },
  { path: "/collections/:id",  component: CollectionDetailView , props: true },
];

export default createRouter({
  history: createWebHistory(),
  routes,
});

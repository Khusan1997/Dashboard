import { createWebHistory, createRouter } from "vue-router";
import Info from "../views/info";
// import HelloWorld from "../components/HelloWorld.vue";

const routes = [
  //   {
  //     path: "/",
  //     name: "Home",
  //     component: HelloWorld,
  //   },
  {
    path: "/",
    name: "info",
    component: Info,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});
export default router;

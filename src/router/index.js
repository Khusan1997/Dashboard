import { createWebHistory, createRouter } from "vue-router";
import Dashboard from "../components/Dashboard.vue";
import Info from "../views/info";

const routes = [
  {
    path: "/",
    name: "Dashboard",
    component: Dashboard,
  },
  {
    path: "/info",
    name: "info",
    component: Info,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});
export default router;

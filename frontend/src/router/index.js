// Importation de vue router
import { createWebHistory, createRouter } from "vue-router";


import Home from "../views/Home.vue";
import Modifie from "../views/Modifie.vue";
import Ajoute from "../views/Ajoute.vue";

// Creation des routes
const routes = [
  { path: "/", component: Home },
  { path: "/modifie", component: Modifie },
  { path: "/ajoute", component: Ajoute },
];

// parametre du router
const router = createRouter({
  history: createWebHistory(),
  routes,
});

// exportation du router vers main.js
export default router;

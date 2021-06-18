import {
  createRouter,
  createWebHistory
} from "vue-router";
import Home from "../views/Home.vue";
import Headphones from "../views/Headphones.vue";
import Speakers from "../views/Speakers.vue";
import Earphones from "../views/Earphones.vue";
import Product from "../views/ProductView.vue";



const routes = [{
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/headphones",
    name: "Headphones",
    component: Headphones,
  },
  {
    path: "/speakers",
    name: "Speakers",
    component: Speakers,
  },
  {
    path: "/earphones",
    name: "Earphones",
    component: Earphones,
  },
  {
    path: "/product/:productId",
    name: "Product",
    component: Product,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
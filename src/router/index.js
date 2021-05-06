import Vue from "vue";
import VueRouter from "vue-router";
import Meta from "vue-meta";
import Home from "../views/Home.vue";
import Submit from "../views/Submit.vue";
import About from "../views/About.vue";
import FourOhFour from "../views/FourOhFour.vue";

Vue.use(VueRouter);
Vue.use(Meta);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/submit",
    name: "Submit",
    component: Submit,
  },
  {
    path: "/about",
    name: "About",
    component: About,
  },
  {
    path: "/404",
    name: "404",
    component: FourOhFour,
  },
  {
    path: "*",
    redirect: "/404",
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;

import { createRouter, createWebHistory } from "vue-router";

const routes = [
  {
    path: "/",
    name: "home",
    component: () =>
      import(/* webpackChunkName: "home" */ "../views/HomeView.vue"),
  },
  {
    path: "/filter",
    name: "filter",
    component: () =>
      import(/* webpackChunkName: "filter" */ "../views/FilterView.vue"),
  },
  {
    path: "/login",
    name: "login",
    component: () =>
      import(/* webpackChunkName: "login" */ "../views/LoginView.vue"),
  },
  {
    path: "/register",
    name: "register",
    component: () =>
      import(/* webpackChunkName: "register" */ "../views/RegisterView.vue"),
  },
  {
    path: "/properties",
    name: "properties",
    component: () =>
      import(/* webpackChunkName: "properties" */ "../views/OurPropertiesView.vue"),
  },
  {
    path: "/property",
    name: "property",
    component: () =>
      import(/* webpackChunkName: "property" */ "../views/PropertyView.vue"),
  },
  {
    path: "/post-property",
    name: "post-property",
    component: () =>
      import(/* webpackChunkName: "post-property" */ "../views/PostPropertyView.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;

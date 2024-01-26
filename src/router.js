import SignUp from "./components/SignUp.vue";
import HomePage from "./components/HomePage.vue";
import LogIn from "./components/LogIn.vue";
import AddReataurant from "./components/AddRestaurant.vue";
import UpdateRestaurant from "./components/UpdateRestaurant.vue";
import VuetifyPage from "./components/VuetifyPage.vue";
import IconPage from "./components/IconPage.vue";
import SearchBar from "./components/SearchBar.vue";

import { createRouter, createWebHistory } from "vue-router";
//
const routes = [
  {
    name: "HomePage",
    component: HomePage,
    path: "/",
  },
  {
    name: "LogIn",
    component: LogIn,
    path: "/log-in",
  },
  {
    name: "SignUP",
    component: SignUp,
    path: "/sign-up",
  },
  {
    name: "AddReataurant",
    component: AddReataurant,
    path: "/add-restaurant",
  },
  {
    name: "UpdateRestaurant",
    component: UpdateRestaurant,
    path: "/Update-restaurant/:id",
  },
  {
    name: "VuetifyPage",
    component: VuetifyPage,
    path: "/vuetify-page",
  },
  {
    name: "IconPage",
    component: IconPage,
    path: "/icon-page",
  },
  {
    name: "SearchBar",
    component: SearchBar,
    path: "/search-bar",
  },
];
const router = createRouter({
  history: createWebHistory(),
  mode: "history",
  routes,
});
export default router;

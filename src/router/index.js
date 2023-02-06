import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import Careers from "../views/CareersView.vue";
import Brands from "../views/BrandsView.vue";
import About from "../views/AboutView.vue";
import Partnerships from "../views/PartnershipsView.vue";
import News from "../views/NewsView.vue";
import ContactUs from "../views/ContactUsView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/about",
      name: "about",
      component: About,
    },
    {
      path: "/brands",
      name: "brands",
      component: Brands,
    },
    {
      path: "/careers",
      name: "careers",
      component: Careers,
    },
    {
      path: "/partnerships",
      name: "partnerships",
      component: Partnerships,
    },
    {
      path: "/news",
      name: "news",
      component: News,
    },
    {
      path: "/contactus",
      name: "contact us",
      component: ContactUs,
    },

    // {
    //   path: '/careers',
    //   name: 'careers',
    // route level code-splitting
    // this generates a separate chunk (About.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    //   component: () => import('../views/Careers.vue')
    // }
  ],
});

export default router;

import { createRouter, createWebHistory } from "vue-router";
import Home from "../view/Home.vue";
import Editor from "../view/Editor.vue";
import TemplateDetail from "../view/TemplateDetail.vue";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/",
      name: "home",
      component: Home
    },
    {
      path: "/editon",
      name: "editon",
      component: Editor
    },
    {
      path: "/template/:id",
      name: "template",
      component: TemplateDetail
    }
  ]
});

export default router;

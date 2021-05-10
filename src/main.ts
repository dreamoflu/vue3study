/*
 * @Author: your name
 * @Date: 2021-05-08 13:56:37
 * @LastEditTime: 2021-05-10 12:13:43
 * @LastEditors: your name
 * @Description: In User Settings Edit
 * @FilePath: /lego/src/main.ts
 */
import { createApp } from "vue";
import App from "./App.vue";
import Antd from "ant-design-vue";
// import "ant-design-vue/dist/antd.css";
import router from "@/routes";
import store from "./store/index";
// import { createStore } from "vuex";
// const store = createStore({
//   state: {
//     count: 0
//   }
// });
const app = createApp(App);
app
  .use(router)
  .use(store)
  .use(Antd);

app.mount("#app");

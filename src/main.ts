import { createApp } from "vue";
import App from "./App.vue";

// 引入vue-router
import router from "./router/index";

// 引入vuex
import store from "./store/index";

import ElementPlus from "element-plus";
import "element-plus/lib/theme-chalk/index.css";

createApp(App).use(router).use(store).use(ElementPlus).mount("#app");

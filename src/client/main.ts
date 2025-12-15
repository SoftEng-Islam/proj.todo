import { createPinia } from "pinia";
import router from "./router/index.ts";
import { createApp } from "vue";

import "./styles/main.sass";
import App from "./App.vue";

createApp(App).mount("#app");

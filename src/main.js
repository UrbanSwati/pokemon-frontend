import { createApp } from "vue";
import { createPinia } from "pinia";

/* import the fontawesome core */
import { library } from "@fortawesome/fontawesome-svg-core";

/* import font awesome icon component */
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

/* import specific icons */
import {
  faUserSecret,
  faHeart,
  faHandBackFist,
  faBoltLightning,
  faShield,
} from "@fortawesome/free-solid-svg-icons";

import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./axios.js";

import App from "./App.vue";
import router from "./router";

import "./assets/main.css";

const app = createApp(App).component("font-awesome-icon", FontAwesomeIcon);

library.add(faUserSecret, faHeart, faHandBackFist, faBoltLightning, faShield);

app.use(createPinia());
app.use(router);
app.mount("#app");

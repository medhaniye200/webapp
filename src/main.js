import "@mdi/font/css/materialdesignicons.css";

import { createApp } from "vue";
import App from "./App.vue";
import router from "./router.js";

// import { createApp } from "vue";

import { createVuetify } from "vuetify";
import * as components from "vuetify/components";
import * as directives from "vuetify/directives";
import "vuetify/dist/vuetify.css";
import "@mdi/font/css/materialdesignicons.css";
import "bootstrap/dist/css/bootstrap.css";

import SvgIcon from "@jamescoyle/vue-icon";
import { mdiAccount } from "@mdi/js";

const vuetify = createVuetify({
  components,
  directives,
});

const app = createApp(App);
app.component("SvgIcon", SvgIcon);
app.component("mdiAccount", mdiAccount);
app.use(vuetify);
app.use(router);

app.mount("#app");

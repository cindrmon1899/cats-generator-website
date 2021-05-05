import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import VueSupabase from "vue-supabase";
import "@/assets/styles/main.css";

Vue.config.productionTip = false;

Vue.use(VueSupabase, {
  supabaseUrl: "https://pquqeicmdkarhgevtbeu.supabase.co",
  supabaseKey: process.env.VUE_APP_SUPABASE_KEY,
  supabaseOptions: {},
});

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");

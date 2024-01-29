import Vue from "vue";
import App from "./App.vue";

Vue.config.productionTip = false;

new Vue({
  render: (h) =>
    h(App, {
      props: {
        text: "Some initial text", // Provide a default value for text
        value: 150,
        config: { maxTextLength: 10, showUnFormatted: true },
      },
    }),
}).$mount("#app");

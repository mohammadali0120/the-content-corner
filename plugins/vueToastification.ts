import type { PluginOptions } from "vue-toastification";
import Toast, { POSITION } from "vue-toastification";
import "vue-toastification/dist/index.css";

export default defineNuxtPlugin((nuxtApp: any) => {
  const options: PluginOptions = {
    position:
      nuxtApp.$i18n.locale.value === "en"
        ? POSITION.TOP_LEFT
        : POSITION.TOP_RIGHT,
    timeout: 4000,
    closeOnClick: true,
    pauseOnFocusLoss: true,
    pauseOnHover: true,
    draggable: true,
    draggablePercent: 0.6,
    showCloseButtonOnHover: false,
    closeButton: "button",
    transition: "Vue-Toastification__slideBlurred",
    maxToasts: 20,
    newestOnTop: true,
    icon: true,
    rtl: nuxtApp.$i18n.locale.value === "en" ? false : true,
  };

  nuxtApp.vueApp.use(Toast, options);
});

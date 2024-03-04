import type { PluginOptions } from "vue-toastification";
import Toast, { POSITION } from "vue-toastification";
import "vue-toastification/dist/index.css";
import { ToastDuration } from "~/composables/states";

export default defineNuxtPlugin((nuxtApp: any) => {
  const options: PluginOptions = {
    timeout: ToastDuration,
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
  };

  watch(
    () => nuxtApp.$i18n.locale.value,
    () => {
      if (nuxtApp.$i18n.locale.value === "en") {
        options.position = POSITION.TOP_LEFT;
        options.rtl = false;
      } else {
        options.position = POSITION.TOP_RIGHT;
        options.rtl = true;
      }
    }
  );

  nuxtApp.vueApp.use(Toast, options);
});

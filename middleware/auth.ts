import { useToastMsg } from "~/composables/useUtils";

export default defineNuxtRouteMiddleware((to, from) => {
  const token = useCookie("token");
  const { $i18n } = useNuxtApp();

  if (!token.value) {
    useToastMsg($i18n.tm("other.toasts.unauthorized"), "error");

    return abortNavigation();
  }
});

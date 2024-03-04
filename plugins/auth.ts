import { useAuthState } from "~/composables/states";

export default defineNuxtPlugin(async (nuxtApp: any) => {
  const token = useCookie("token");

  if (token.value) {
    const { data: userData } = await useFetch(`/api/auth/logged-in-user-info`);

    useAuthState().value = userData.value;
  }
});

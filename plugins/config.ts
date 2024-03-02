import { useAuthState } from "~/composables/states";

export default defineNuxtPlugin(async (nuxtApp: any) => {
  console.log("config plugin!");

  const token = useCookie("token");

  if (token.value) {
    const { data: userData } = await useFetch(`/api/auth/logged-in-user-info`);

    useAuthState().value = userData.value;
  }

  if (process.client) {
  }
});

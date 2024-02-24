export default defineNuxtPlugin(async (nuxtApp: any) => {
  console.log("config plugin!");

  const { data: userData } = await useFetch(`/api/auth/logged-in-user-info`);

  if (process.client) {
  }
});

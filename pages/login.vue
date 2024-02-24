<template>
  <div>
    <div class="lg:py-8 py-2">
      <div class="container lg:px-4 px-2">
        <div class="lg:mb-8 mb-4">
          <h1
            class="lg:text-2xl text-base text-black dark:text-white group-hover:text-white group-hover:duration-500 font-bold"
          >
            {{ $tm("components.pages.login.formTitle") }}
          </h1>
        </div>
        <form autocomplete="off" action="" @submit.prevent="onSubmit">
          <div class="w-full lg:mb-6 mb-3">
            <ElementFormInput
              name="email"
              label="email"
              :rules="$tm('components.pages.login.inputs.email.rules')"
              @on-input="form.email = $event"
            />
          </div>
          <div class="w-full lg:mb-6 mb-3">
            <ElementFormInput
              name="password"
              label="password"
              :rules="$tm('components.pages.login.inputs.password.rules')"
              @on-input="form.password = $event"
            />
          </div>
          <div class="text-center h-10 w-full">
            <button
              type="submit"
              class="bg-baseYellow-400 w-full h-full rounded-md text-white font-bold"
            >
              Send
            </button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useForm } from "vee-validate";
import { useToastMsg } from "~/composables/useUtils";

// interfaces & types & enums

// props

// emits

// variables
const { tm } = useI18n();
const router = useRouter();
const { values: formValues, handleSubmit, resetForm } = useForm();
const form = ref<{ email: string; password: string }>({
  email: "",
  password: "",
});
// computed properties

// watches

// methods
const onSubmit = handleSubmit(async () => {
  const { data: myData } = await useFetch(
    `/api/auth/login?email=${form.value.email}&password=${form.value.password}`
  );

  if (myData.value) {
    useToastMsg(tm("other.toasts.loggedInSuccessfuly"), "success");

    setTimeout(() => {
      location.replace(tm("brand.link"));
    }, 4000);
  } else {
    useToastMsg(tm("other.toasts.credentialsDoesNotMatch"), "error");
  }
});

// hooks
useHead({
  title: tm("components.pages.login.title"),
  meta: [
    {
      name: tm("components.pages.login.name"),
      content: tm("components.pages.login.content"),
    },
  ],
});
</script>
<style scoped lang="scss"></style>

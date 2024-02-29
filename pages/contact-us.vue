<template>
  <div>
    <div class="lg:py-8 py-2">
      <div class="container lg:px-4 px-2">
        <div class="lg:mb-8 mb-4">
          <h1
            class="lg:text-2xl text-base text-black dark:text-white group-hover:text-white group-hover:duration-500 font-bold"
          >
            {{ $tm("components.pages.contactUs.meta.title") }}
          </h1>
        </div>
        <form autocomplete="off" action="" @submit.prevent="onSubmit">
          <div class="w-full lg:mb-6 mb-3">
            <ElementFormInput
              name="fullName"
              label="fullName"
              :rules="$tm('components.pages.contactUs.inputs.fullName.rules')"
              @on-input="form.fullName = $event"
            />
          </div>
          <div class="w-full lg:mb-6 mb-3">
            <ElementFormInput
              name="email"
              label="email"
              :rules="$tm('components.pages.contactUs.inputs.email.rules')"
              @on-input="form.email = $event"
            />
          </div>
          <div class="w-full lg:mb-6 mb-3">
            <ElementFormTextarea
              name="description"
              label="description"
              :rules="
                $tm('components.pages.contactUs.inputs.description.rules')
              "
              @on-input="form.description = $event"
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

// interfaces & types & enums

// props

// emits

// variables
const { tm } = useI18n();
const { values: formValues, handleSubmit, resetForm } = useForm();
const form = ref<{ fullName: string; email: string; description: string }>({
  fullName: "",
  email: "",
  description: "",
});
// computed properties

// watches

// methods
const onSubmit = handleSubmit(() => {
  console.log("submited", form.value);
});

// hooks
useHead({
  title: tm("components.pages.contactUs.meta.title"),
  meta: [
    {
      name: tm("components.pages.contactUs.meta.name"),
      content: tm("components.pages.contactUs.meta.content"),
    },
  ],
});
</script>
<style scoped lang="scss"></style>

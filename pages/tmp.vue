<template>
  <div>
    <form action="" @submit.prevent="onSubmit">
      <div class="w-full h-10 lg:mb-6 mb-3">
        <ElementFormInput
          name="inputName"
          label="inputLabel"
          rules="required|min:3"
        />
      </div>
      <div class="text-center w-1/3 h-10 mx-auto">
        <button
          type="submit"
          class="bg-green-500 w-full h-full rounded-md text-white"
        >
          Send
        </button>
      </div>
    </form>
  </div>
</template>

<script setup lang="ts">
import { useForm } from "vee-validate";

const { values: formValues, handleSubmit, resetForm } = useForm();

const onSubmit = handleSubmit(() => {
  console.log("submited");
});
</script>
<style scoped lang="scss"></style>

import { configure, defineRule } from "vee-validate";
import {
  required,
  email,
  min,
  max,
  numeric,
  alpha,
  alpha_spaces,
  alpha_num,
} from "@vee-validate/rules";

export default defineNuxtPlugin((nuxtApp: any) => {
  // Config validation errors
  configure({
    generateMessage: (context: any) => {
      const validation: any = Object.entries(nuxtApp.$i18n.tm("validation"));
      const labels: any = Object.entries(nuxtApp.$i18n.tm("labels"));

      const foundedValue = labels.find((key: any) => {
        if (context.field.split("-").length > 1) {
          return key[0] === context.field.split("-")[0];
        }
        return key[0] === context.field;
      });

      context.field = foundedValue[1];

      const foundedValidation = validation.find((key: any) => {
        return key[0] === context.rule.name;
      });

      const message = foundedValidation[1].replace(
        "{_field_}",
        context.field
      );

      if (context.rule.params.length > 1) {
        return message;
      }
      return message.replace("{_length_}", context.rule.params[0]);
    },
  });

  // Rules
  defineRule("required", required);
  defineRule("email", email);
  defineRule("numeric", numeric);
  defineRule("alpha", alpha);
  defineRule("alpha_spaces", alpha_spaces);
  defineRule("alpha_num", alpha_num);
  defineRule("min", min);
  defineRule("max", max);
  defineRule("special_char_not_allowed", (value: any) => {
    return !/[`!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/.test(value);
  });

  defineRule("password", (value: any) => {
    return /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/.test(value);
  });
  defineRule("slug", (value: any) => {
    return /^(?!-)((?:[a-z0-9]+-?)+)(?<!-)$/.test(value);
  });
});

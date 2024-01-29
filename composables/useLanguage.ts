import type { AvailableLanguageCodes } from "~/utilities/types";

export default () => {
  const router = useRouter();
  const { setLocale, setLocaleCookie } = useI18n();
  const switchLocalePath = useSwitchLocalePath();

  const onChangeLanguage = (language: AvailableLanguageCodes) => {
    setLocale(language);
    setLocaleCookie(language);
    switchLocalePath(language);
    router.push({ path: switchLocalePath(language) });
  };

  return {
    onChangeLanguage,
  };
};

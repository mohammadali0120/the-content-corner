import type { AvailableLanguageCodes, Language } from "~/utilities/types";

export default () => {
  const router = useRouter();
  const { tm, localeProperties, setLocale, setLocaleCookie } = useI18n();
  const switchLocalePath = useSwitchLocalePath();

  const getCurrentLanguageFromI18n = computed((): Language => {
    const languages = tm("other.languages") as Language[];
    const currentLanguage = localeProperties.value.code;

    if (currentLanguage === "en") {
      return languages[0];
    } else if (currentLanguage === "fa") {
      return languages[1];
    }
    return languages[0];
  });

  const onChangeLanguage = (language: AvailableLanguageCodes) => {
    setLocale(language);
    setLocaleCookie(language);
    switchLocalePath(language);
    router.push({ path: switchLocalePath(language) });
  };

  return {
    // computed properties
    getCurrentLanguageFromI18n,
    // methods
    onChangeLanguage,
  };
};

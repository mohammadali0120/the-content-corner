const theme = localStorage.getItem("vueuse-color-scheme");

const changeTheme = (value) => {
  document.documentElement.classList.add(value);
  document.documentElement.style.setProperty("color-scheme", value);
};

if (theme) {
  switch (theme) {
    case "dark":
      changeTheme("dark");
      break;
    case "light":
      changeTheme("light");
      break;
    default:
      changeTheme("dark");
      break;
  }
} else {
  changeTheme("dark");
}

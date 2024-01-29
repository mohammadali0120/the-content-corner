// Set theme
const localStorageColorScheme = localStorage.getItem("vueuse-color-scheme");

const changeTheme = (value) => {
  document.documentElement.classList.add(value);
  document.documentElement.style.setProperty("color-scheme", value);
};

if (localStorageColorScheme && localStorageColorScheme !== "auto") {
  changeTheme(localStorageColorScheme);
} else {
  if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
    changeTheme("dark");
  } else {
    changeTheme("light");
  }
}

// Set font family
const currentDirection = document.documentElement.getAttribute("dir");

const changeFontFamily = (value) => {
  document.documentElement.style.setProperty("--font-family", value);
};

if (currentDirection === "rtl") {
  changeFontFamily("vazir");
} else {
  changeFontFamily("inter");
}

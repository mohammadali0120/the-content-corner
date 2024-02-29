export default function () {
  // variables
  const isMobile = ref<boolean>(false);

  // methods
  const onResizeWindow = () => {
    isMobile.value = window.innerWidth < 1024;
  };
  // hooks
  onMounted(() => {
    onResizeWindow();
    window.addEventListener("resize", onResizeWindow);
  });

  onUnmounted(() => {
    window.removeEventListener("resize", onResizeWindow);
  });

  return {
    isMobile,
  };
}

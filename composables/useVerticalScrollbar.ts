export default (element: Ref, amount: number): void => {
  const onScroll = () => {
    console.log("hey 0", element.value);

    const scrollPosition = window.scrollY || window.pageYOffset;

    if (scrollPosition > amount) {
      element.value.classList.add(
        ...["fixed", "top-0", "bg-white", "drop-shadow-md"]
      );
    } else {
      element.value.classList.remove(
        ...[
          "fixed",
          "top-0",
          "bg-white",
          "drop-shadow-md",
        ]
      );
    }
  };

  onMounted(() => {
    console.log("hey 3");

    window.addEventListener("scroll", onScroll);
  });
  onUnmounted(() => {
    window.removeEventListener("scroll", onScroll);
  });
};

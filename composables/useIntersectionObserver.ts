export default () => {
  const isIntersected = ref<boolean>(false);

  const isIntersectionEnteredIntoView = (
    element: HTMLElement,
    classes?: string[]
  ) => {
    const observer = new IntersectionObserver(
      (entries: any) => {
        entries.forEach((entry: any) => {
          if (entry.isIntersecting) {
            isIntersected.value = true;

            if (classes) {
              // CSS classes are added when the scroll reaches the view
              entry.target.classList.add(...classes);
            }
            // Preventing intersection observer from calling more than once
            observer.unobserve(entry.target);
          }
        });
      },
      { rootMargin: "0px" }
    );

    observer.observe(element);
  };

  return {
    // variables
    isIntersected,
    // computed properties
    // methods
    isIntersectionEnteredIntoView,
  };
};

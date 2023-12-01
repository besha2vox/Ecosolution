export const scrollToElementById = (elementId: string) => {
  const element = document.getElementById(elementId);
  console.log({ element });

  if (element) {
    element.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    });
  }
};

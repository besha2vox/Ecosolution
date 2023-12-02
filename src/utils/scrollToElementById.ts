import { TSectionId } from '../types';

export const scrollToElementById = (elementId: TSectionId) => {
  const element = document.getElementById(elementId);
  console.log({ element });

  if (element) {
    element.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    });
  }
};

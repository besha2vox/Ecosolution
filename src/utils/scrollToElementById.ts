import { TSectionId } from '../types';

export const scrollToElementById = (elementId: TSectionId) => {
  const element = document.getElementById(elementId);

  if (element) {
    element.scrollIntoView({
      behavior: 'smooth',
      block: 'center',
    });
  }
};

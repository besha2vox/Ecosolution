import * as basicLightbox from 'basiclightbox';

export const openLightbox = (imgX1: string, imgX2: string, alt: string) => {
  const lightbox = basicLightbox.create(`
      <img srcset="${imgX1} 1x, ${imgX2} 2x" alt="${alt}"/ src="${imgX2}" >
    `);
  lightbox.show();
};

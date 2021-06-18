const clearGalleryContainer = () => {
  const container = document.querySelector('.gallery__container-grid');
  if (container !== (undefined || null)) {
    container.innerHTML = '';
  }
};

module.exports = { clearGalleryContainer };

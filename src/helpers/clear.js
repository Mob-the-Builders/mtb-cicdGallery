const clearGalleryContainer = (main) => {
    const container = document.querySelector(".gallery__container-grid");
    console.log(container);
    if(container !== (undefined || null)){
      main.removeChild(container);
    }
}

module.exports = { clearGalleryContainer };
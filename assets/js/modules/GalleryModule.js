var GalleryModule = (function () {
  var initGalleryModule = function () {
    var lightbox = GLightbox();
    lightbox.on('open', (target) => {
        console.log('lightbox opened');
    });    

  }
  return {
      init: function () {
        initGalleryModule();
      }
  };
})();
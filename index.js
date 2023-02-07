let galleryImages = document.querySelectorAll(".gallery-img");
let getLatestOpenedImg; 
let windowWidth = window.innerWidth;

if(galleryImages) {
  galleryImages.forEach(function(image, index) {
    image.onclick = function() {
        let getElementCss = window.getComputedStyle(image);
        let getFullImgUrl = getElementCss.getPropertyValue("background-image");
        let getImgUrlPos = getFullImgUrl.split("/img/thumbs/");
        let setNewImgUrl = getImgUrlPos[1].replace('")', '');

        getLatestOpenedImg = index + 1;

        let container = document.body;
        let newImgWindow = document.createElement("div");
        container.appendChild(newImgWindow);
        newImgWindow.setAttribute("class", "img-window");
        newImgWindow.setAttribute("onclick", "closeImg()");

        let newImg = document.createElement("img");
        newImgWindow.appendChild(newImg);
        newImg.setAttribute("src", "img/" + setNewImgUrl);
         
   }
  });
}
const swiper = new Swiper('.swiper',{
    loop: true,
    direction: 'vertical',
   
    // If we need pagination
    pagination: {
      el:'.swiper-pagination',
    },
  
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },

  })


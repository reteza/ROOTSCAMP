const swiper = new Swiper('.swiper',{
    loop: true,
    direction: 'horizontal',
   
    // If we need pagination
    pagination: {
      el:'.swiper-pagination',
    },
  
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  
  });
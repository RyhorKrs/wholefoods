const createSlider = () => {
  
    new Swiper('.swiper-container', {
        direction: 'horizontal',
        loop: false,
  
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },

        pagination: {
            el: '.swiper-pagination',
            clickable: true,
            dynamicBullets: true,
        }, 
  
        spaceBetween: 60,
        slidesPerView: 3,
  
        breakpoints: {
            320: {
                slidesPerView: 1,
            },
            992: {
                slidesPerView: 2,
            },
            1200: {
                slidesPerView: 3,
            }
        },
    });
};

export default createSlider;
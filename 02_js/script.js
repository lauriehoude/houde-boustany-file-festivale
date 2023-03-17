const mySwiperlp = new Swiper(swiperContainer, parameters);




const swiperlp = new Swiper(".swiper-screenshots", {
    direction: "horizontal",
    loop: true,
    centeredSlides: true,
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    slidesPerView: 1,
    spaceBetween: 20,
    breakpoints: {
        1200: {
            slidesPerView: 3,
            spaceBetween: 85,
        },
    },
});
alert("asa")


const swiperapp = new Swiper(".swiper-filters", {
    direction: "horizontal",
    freeMode:{
        enable: true,
    },
});

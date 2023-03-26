function slider(element, options){
    if(!options){
        options = {};
    }
    new Swiper(element, {
        slidesPerView: options.slidesPerView || "auto",
        spaceBetween: options.spaceBetween || 30,
        centeredSlides: options.centeredSlides || true,
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
        }
    });
}

window.addEventListener('load', function(){
    slider(".mySwiper");
});

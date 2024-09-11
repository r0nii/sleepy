!function(){var e=document.querySelectorAll(".js-kvSlider .keyVisual__imgWrap").length,i=new
    Swiper(".js-kvSlider",
        {loop:!0,slidesPerView:1,centeredSlides:!0,spaceBetween:20,navigation:!1,loopedSlides:e,speed:800,touchRatio:!1,allowTouchMove:!1,
            autoplay:{delay:6e3,disableOnInteraction:!1},breakpoints:{768:{slidesPerView:1,spaceBetween:0}},init:!1}),o=new
    Swiper(".js-kvSliderThumbnails",
        {loop:!0,spaceBetween:0,slidesPerView:"auto",direction:"vertical",centeredSlides:!0,touchRatio:!1,allowTouchMove:!1,init:!1});window.addEventListener("DOMContentLoaded",
            (function(){o.init(),i.init(),i.controller.control=o}))}();
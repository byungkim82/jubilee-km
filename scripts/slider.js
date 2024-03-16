"use strict";

document.addEventListener("DOMContentLoaded", function () {
    
    let slideIndex = 0;
    showSlides();

    function showSlides() {
        let i;
        let slides = document.getElementsByClassName("slide");
        let currentSlide = slides[slideIndex % slides.length];

        for (i = 0; i < slides.length; i++) {
            slides[i].style.display = "none";  
            slides[i].style.opacity = 0;
        }
        slideIndex++;
        
        if (slideIndex > slides.length) {
            slideIndex = 1
        }

        let nextSlide = slides[slideIndex - 1];
        nextSlide.style.display = "block";
        setTimeout(() => {
            nextSlide.style.opacity = 1;
        }, 10);
        setTimeout(showSlides, 5000); // Change image every 4 seconds
    }
});
"use strict";

let slideInterval;

document.addEventListener("DOMContentLoaded", function () {
    
    let slideIndex = 0;
    slideInterval = showSlides();

    function showSlides() {
        let i;
        let slides = document.getElementsByClassName("slide");
        let indicators = document.querySelector(".indicator-inner").getElementsByTagName("i");

        for (i = 0; i < slides.length; i++) {
            slides[i].style.display = "none";  
            slides[i].style.opacity = 0;
            indicators[i].classList.remove("active");
        }

        slideIndex++;
        
        if (slideIndex > slides.length) { slideIndex = 1 }

        slides[slideIndex - 1].style.display = "block";
        indicators[slideIndex-1].classList.add("active");
        setTimeout(() => {
            slides[slideIndex - 1].style.opacity = 1;
        }, 10);
        clearTimeout(slideInterval);
        slideInterval = setTimeout(showSlides, 5000);

        return slideInterval;
    }

    let indicators = document.querySelector(".indicator-inner").getElementsByTagName("i");
    for (let i = 0; i < indicators.length; i++) {
        indicators[i].addEventListener("click", function() {
            slideIndex = i;
            showSlides();
        });
    }
});
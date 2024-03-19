"use strict";

document.addEventListener("DOMContentLoaded", function () {
    const leftArrow = document.querySelector(".sermon-contents .fa-chevron-left");
    const rightArrow = document.querySelector(".sermon-contents .fa-chevron-right");
    const sermonCards = document.querySelectorAll(".sermon-card");

    let currentIndex = 0;

    function isMobile() {
        return window.innerWidth <= 768;
    }

    function updateSermonCards() {
        for (let i = 0; i < sermonCards.length; i++) {
            sermonCards[i].classList.remove("selected");
            if (isMobile()) {
                sermonCards[i].style.opacity = 0;
            }
        }
        sermonCards[currentIndex].classList.add("selected");
        setTimeout(() => {
            sermonCards[currentIndex].style.opacity = 1;
        }, 10);
    }

    leftArrow.addEventListener("click", function() {
        if (currentIndex > 0) {
            currentIndex--;
        } else {
            currentIndex = sermonCards.length - 1;
        }
        updateSermonCards();
    });

    rightArrow.addEventListener("click", function() {
        if (currentIndex < sermonCards.length - 1) {
            currentIndex++;
        } else {
            currentIndex = 0;
        }
        updateSermonCards();
    });

    updateSermonCards();

    window.addEventListener('resize', function() {
        if (!isMobile()) {
            sermonCards.forEach(card => {
                card.style.opacity = 1;
            });
        } else {
            updateSermonCards();
        }
    });
});
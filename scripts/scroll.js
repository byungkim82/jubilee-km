"use strict";

document.addEventListener("DOMContentLoaded", function () {

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('floating');
                observer.unobserve(entry.target);
            }
        })
    }, { threshold: 0.2 });

    const sections = document.querySelectorAll('section');
    sections.forEach(section => {
        observer.observe(section);
      });
});
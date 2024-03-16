"use strict";

document.addEventListener("DOMContentLoaded", function () {
  // Add scroll event listener
  window.addEventListener('scroll', function() {
    document.querySelector('.goto-top').classList.toggle('active', window.scrollY > 50);
  });

  // Add trigger event listener
  document.querySelector(".trigger").addEventListener("click", function () {
    this.classList.toggle("active");
    document.querySelector(".gnb > ul").classList.toggle("active");
    document.querySelector(".goyoutube").classList.toggle("active");
  });

  // Add gnb a event listener
  document.querySelectorAll('.gnb a').forEach(function(item) {
    item.addEventListener('click', function() {
      document.querySelector('.gnb').classList.remove('active');
      document.querySelector('.trigger').classList.remove('active');
    });
  });

});

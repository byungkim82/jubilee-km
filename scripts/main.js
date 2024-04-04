"use strict";

document.addEventListener("DOMContentLoaded", function () {
  // Add scroll event listener
  window.addEventListener('scroll', function() {
    document.querySelector('.goto-top').classList.toggle('active', window.scrollY > 50);
  });

  // Add trigger event listener
  document.querySelector(".trigger").addEventListener("click", function () {
    this.classList.toggle("active");
    document.querySelector(".gnb-mobile").classList.toggle("active");
    document.querySelector(".goyoutube").classList.toggle("active");
    document.querySelector(".trigger-layover").classList.toggle("active");
  });

  // Add mobile menu event listener
  document.querySelectorAll('.gnb-mobile > ul > li').forEach(function (item) {
    item.addEventListener('click', function () {
      let icon = this.querySelector('i');
      let currentSubMenu = this.nextElementSibling;

      if (currentSubMenu.classList.contains('active')) {
        currentSubMenu.classList.remove('active');
        icon.classList.remove('active');
      } else {
        document.querySelectorAll('.gnb-mobile .sub-menu').forEach(function(subMenu) {
          subMenu.classList.remove('active');
          let otherIcon = subMenu.previousElementSibling.querySelector('i');
          if (otherIcon) {
            otherIcon.classList.remove('active');
          }
        });
        currentSubMenu.classList.add('active');
        icon.classList.add('active');
      }
    })
  })

  // Add rules-detail event listener
  const rules_detail_heading = document.querySelector('.rules-detail-heading');
  const rules_details_words = document.querySelector('.rules-detail-words');
  rules_detail_heading.addEventListener("click", function () {
    rules_detail_heading.classList.toggle('active');
    rules_details_words.classList.toggle('active');
  })

});

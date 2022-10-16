/*****************
 * Preloader
 *****************/

preloader = document.getElementById('preloader');
contentWrapper = document.getElementById('contentWrapper');

// if ($(document).scrollTop() < 250) {
// $('.splash-center-div').css('opacity', 1);
// // }
// $('.splash-center-div').css('position', 'fixed');

// if (sessionStorage.getItem('dontLoad') == null){
preloader.classList.remove('displaynone');

contentWrapper.style.opacity = 1;
setTimeout(function () {
    preloader.classList.add('loaded');
}, 500);
// preloader.delay(400).fadeOut('fast');

// jQuery(".content-wrapper").hide().delay(2000).fadeIn("fast");
//   sessionStorage.setItem("dontLoad", "true");
// }

/*****************
 * Preloader
 *****************/

contentWrapper = document.getElementById('contentWrapper');

// if ($(document).scrollTop() < 250) {
// $('.splash-center-div').css('opacity', 1);
// // }
// $('.splash-center-div').css('position', 'fixed');

// if (sessionStorage.getItem('dontLoad') == null){

/* It's setting the opacity of the contentWrapper to 1. */
// contentWrapper.style.opacity = 1;
/* It's setting the opacity of the contentWrapper to 1. */
setTimeout(function () {
    preloader.classList.add('loaded');
}, 800);
preloader = document.getElementById('preloader');
// preloader.classList.remove('displaynone');
window.addEventListener('load', () => {
    setTimeout(function () {
        preloader.classList.add('loaded');
    }, 100);
});
// preloader.delay(400).fadeOut('fast');

// jQuery(".content-wrapper").hide().delay(2000).fadeIn("fast");
//   sessionStorage.setItem("dontLoad", "true");
// }

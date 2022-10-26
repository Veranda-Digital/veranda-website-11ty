/*****************
 * Preloader
 *****************/

contentWrapper = document.getElementById('contentWrapper');
preloader = document.getElementById('preloader');

setTimeout(function () {
    preloader.classList.add('loaded');
}, 800);

window.addEventListener('load', () => {
    setTimeout(function () {
        preloader.classList.add('loaded');
    }, 400);
});

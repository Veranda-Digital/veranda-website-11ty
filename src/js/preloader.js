/*****************
 * Preloader
 *****************/

contentWrapper = document.getElementById('contentWrapper');

setTimeout(function () {
    preloader.classList.add('loaded');
}, 600);
preloader = document.getElementById('preloader');
window.addEventListener('load', () => {
    setTimeout(function () {
        preloader.classList.add('loaded');
    }, 100);
});

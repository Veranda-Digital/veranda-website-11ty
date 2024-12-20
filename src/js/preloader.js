/*****************
 * Preloader
 *****************/

// Select elements
const contentWrapper = document.getElementById('contentWrapper');
const preloader = document.getElementById('preloader');

// Check if navigation is internal
if (!performance.getEntriesByType('navigation')[0].type.includes('back_forward')) {
    // Show the preloader when the page is reloaded
    window.addEventListener('load', () => {
        setTimeout(function () {
            preloader.classList.add('loaded');
        }, 400);
    });
} else {
    // Skip the preloader for internal navigation
    preloader.classList.add('loaded');
}

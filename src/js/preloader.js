/*****************
 * Preloader
 *****************/

const preloader = document.getElementById('preloader');

if (!preloader || document.documentElement.classList.contains('skip-preloader')) {
    if (typeof window.startPageAnimations === 'function') {
        window.startPageAnimations({ earlyStart: true });
    }
} else {
    function finishIntro() {
        preloader.classList.add('loaded');
        if (typeof window.startPageAnimations === 'function') {
            window.startPageAnimations({ introPath: true });
        }
    }

    function scheduleFinishIntro() {
        setTimeout(finishIntro, 300);
    }

    if (document.readyState === 'complete') {
        scheduleFinishIntro();
    } else {
        window.addEventListener('load', scheduleFinishIntro);
    }
}

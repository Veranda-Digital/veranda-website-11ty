// Remove updates button when enviro section is in view (or past)

var handlerFired;
window.addEventListener('scroll', function (e) {
    var containerEnv = document.querySelector('#updates');
    var updateBtn = document.querySelector('#fixedbtn');

    if (!isElementInOrPastViewport(containerEnv)) {
        updateBtn.style.display = 'none';
    } else {
        updateBtn.style.display = 'block';
    }
});
function isElementInOrPastViewport(el) {
    // Special bonus for those using jQuery
    if (typeof jQuery === 'function' && el instanceof jQuery) {
        el = el[0];
    }

    var rect = el.getBoundingClientRect();
    return rect.top >= (window.innerHeight || document.documentElement.clientHeight);
}

// Change Hero Background and Box images

herobg = document.getElementById('herobg');
herobox = document.getElementById('herobox');

function start() {
    var herobg = document.getElementById('herobg');
    var herobox = document.getElementById('herobox');
    var herobg2 = document.getElementById('herobg2');
    var herobox2 = document.getElementById('herobox2');
    var herobg3 = document.getElementById('herobg3');
    var herobox3 = document.getElementById('herobox3');
    var delayInSeconds = 4;
    var num = 1;

    var len = 4;
    var changeImage = function () {
        if (num == 1) {
            herobg.style.opacity = 0;
            herobox.style.opacity = 0;
            herobg2.style.opacity = 1;
            herobox2.style.opacity = 1;
        } else if (num == 2) {
            herobg2.style.opacity = 0;
            herobox2.style.opacity = 0;
            herobg3.style.opacity = 1;
            herobox3.style.opacity = 1;
        } else if (num == 3) {
            herobg3.style.opacity = 0;
            herobox3.style.opacity = 0;
            herobg.style.opacity = 1;
            herobox.style.opacity = 1;
        }
        num = num + 1;
        if (num == len) {
            num = 1;
        }
    };

    setInterval(changeImage, delayInSeconds * 1000);
}
window.onload = function () {
    start();
};

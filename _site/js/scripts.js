function isElementInOrPastViewport(el) {
    // Special bonus for those using jQuery
    if (typeof jQuery === 'function' && el instanceof jQuery) {
        el = el[0];
    }

    var rect = el.getBoundingClientRect();
    return rect.top >= (window.innerHeight || document.documentElement.clientHeight);
}

// Mobile Menu Toggle
document.getElementById('menuToggle').addEventListener('click', function (event) {
    const menu = document.getElementById('mobileMenu');
    const hamburger = document.getElementById('hamburger');

    // Toggle the menu visibility
    menu.classList.toggle('hidden');

    // Animate the hamburger into an X
    if (!menu.classList.contains('hidden')) {
        hamburger.children[0].style.transform = 'rotate(45deg) translateY(4px) translateX(4px)';
        hamburger.children[1].style.opacity = '0';
        hamburger.children[2].style.transform = 'rotate(-45deg) translateY(-4px) translateX(4px)';

        // Add event listener to close when clicking outside
        document.addEventListener('click', closeMenuOnOutsideClick);
    } else {
        resetHamburger();
    }

    // Prevent the click from propagating to the document
    event.stopPropagation();

    function closeMenuOnOutsideClick(e) {
        if (!menu.contains(e.target) && !hamburger.contains(e.target)) {
            menu.classList.add('hidden');
            resetHamburger();
            document.removeEventListener('click', closeMenuOnOutsideClick);
        }
    }

    function resetHamburger() {
        hamburger.children[0].style.transform = '';
        hamburger.children[1].style.opacity = '';
        hamburger.children[2].style.transform = '';
    }
});

// Make active page white in nav menu
document.addEventListener('DOMContentLoaded', function () {
    var currentPath = window.location.pathname;
    var navLinks = document.querySelectorAll('nav a');

    navLinks.forEach(function (link) {
        if (link.getAttribute('href') === currentPath) {
            link.classList.add('active-link');
        }
        // else if current path .html
        if (link.getAttribute('href') === currentPath.slice(-1, 0)) {
            link.classList.add('active-link');
        }
    });
});

//Scripts ONLY for the homepage
if (window.location.pathname === '/' || window.location.pathname === '/index.html') {
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
        var herobg4 = document.getElementById('herobg4');
        var herobox4 = document.getElementById('herobox4');
        var delayInSeconds = 4;
        var num = 1;

        var len = 5;
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
                herobg4.style.opacity = 1;
                herobox4.style.opacity = 1;
            } else if (num == 4) {
                herobg4.style.opacity = 0;
                herobox4.style.opacity = 0;
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

    // Remove updates button when enviro section is in view (or past)
    var handlerFired;
    // window.addEventListener('scroll', function (e) {
    //     var containerEnv = document.querySelector('#updates');
    //     var updateBtn = document.querySelector('#fixedbtn');

    //     if (!isElementInOrPastViewport(containerEnv)) {
    //         updateBtn.style.display = 'none';
    //     } else {
    //         updateBtn.style.display = 'block';
    //     }
    // });

    window.onload = function () {
        start();
    };
}

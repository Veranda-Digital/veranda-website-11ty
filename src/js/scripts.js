// var playButton = document.getElementById('play_button');
// var video = document.getElementById('commercial');

// playButton.addEventListener('click', function () {
//     if (video.paused == true) {
//         // Play the video
//         video.play();

//         // Update the button text to 'Pause'
//         playButton.innerHTML = 'Pause';
//     } else {
//         // Pause the video
//         video.pause();

//         // Update the button text to 'Play'
//         playButton.innerHTML = 'Play';
//     }
// });

herobg = document.getElementById('herobg');
herobox = document.getElementById('herobox');

async function infiniteLoop() {
    // setTimeout(function () {
    //     herobg.src = './assets/hero_2.png';
    //     herobox.src = './assets/hero_2box.png';
    // }, 3000);
    // setTimeout(function () {
    //     herobg.src = './assets/hero_3.png';
    //     herobox.src = './assets/hero_3box.png';
    // }, 6000);
}

infiniteLoop();

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

    // var imageDir = './assets/';

    // var bgimages = ['hero_1.png', 'hero_2.png', 'hero_3.png'];
    // var boximages = ['hero_1box.png', 'hero_2box.png', 'hero_3box.png'];

    // var changeImage = function () {
    //     herobg.style.opacity = 0.3;
    //     herobox.style.opacity = 0.6;

    //     setTimeout(function () {
    //         var len = bgimages.length;
    //         herobg.src = imageDir + bgimages[num];
    //         herobox.src = imageDir + boximages[num++];
    //         if (num == len) {
    //             num = 0;
    //         }
    //         herobg.style.opacity = 1;
    //         herobox.style.opacity = 1;
    //     }, 400);
    // };
    // setInterval(changeImage, delayInSeconds * 1000);
}
window.onload = function () {
    start();
};

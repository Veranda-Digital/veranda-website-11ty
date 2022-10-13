var playButton = document.getElementById('play_button');

playbutton.style.color = 'blue';

playbutton.addEventListener('click', function () {
    if (video.paused == true) {
        // Play the video
        video.play();

        // Update the button text to 'Pause'
        playButton.innerHTML = 'Pause';
    } else {
        // Pause the video
        video.pause();

        // Update the button text to 'Play'
        playButton.innerHTML = 'Play';
    }
});

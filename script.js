

const mainBox = document.querySelector('.main');
const songs = ['dancing-in-the-stardust.mp3', 'happy-day.mp3', 'tvari-tokyo-cafe.mp3'];

const bg = ['blue.gif', 'yellow.gif', 'red.gif']

function getRandomBg() {

}

function appendSongs(songs) {
    for (let i = 0; i < songs.length; i++) {
        mainBox.innerHTML += `
            <div class="song-box d-flex gap-4 align-items-center">
                <div class="action-btn d-flex">
                    <span class="material-symbols-outlined play-btn" data-index="${i}">
                        play_arrow
                    </span>
                </div>
                <audio src="audio/${songs[i]}" id="audio-${i}"></audio>
                <div class="song-name">${songs[i]}</div>
            </div>
        `;
    }
}

appendSongs(songs);

const playButtons = document.querySelectorAll('.play-btn');
let currentlyPlayingAudio = null;
let currentlyPlayingBtn = null;

playButtons.forEach(btn => {
    btn.onclick = () => {
        const index = btn.getAttribute('data-index');
        const audio = document.getElementById(`audio-${index}`);
        const songBox = btn.closest('.song-box');

        function playSong() {
            songBox.classList.add('play');
            btn.innerHTML = 'pause';
            audio.play();
            currentlyPlayingAudio = audio;
            currentlyPlayingBtn = btn;
        }

        function pauseSong() {
            songBox.classList.remove('play');
            btn.innerHTML = 'play_arrow';
            audio.pause();
            currentlyPlayingAudio = null;
            currentlyPlayingBtn = null;
        }

        if (currentlyPlayingAudio && currentlyPlayingAudio !== audio) {
            currentlyPlayingBtn.innerHTML = 'play_arrow';
            currentlyPlayingAudio.pause();
            currentlyPlayingAudio.closest('.song-box').classList.remove('play');
        }

        const isPlaying = songBox.classList.contains('play');

        if (isPlaying) {
            pauseSong();
        } else {
            playSong();
        }
    };
});

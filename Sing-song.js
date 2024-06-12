let songIndex = 0;
let audioElement = new Audio('songs/1.mp3');
let masterPlay = document.getElementById('Play');
let myProgressBar = document.getElementById('myprogressbar');
let gif = document.getElementById('round');
let masterSongName = document.getElementById('songname');
let coverimage = document.getElementById('coverimage');
let zero = document.getElementById('0');
let menubar = document.getElementById('menubar');
let sidebar = document.getElementById('sidebar');

let bar2 = document.getElementById('bar2');
let dot = document.getElementById('dot');



let songs = [
    { id: "1", songName: "Dhera Dhera Dhera", filePath: "songs/1.mp3", coverPath: "images/1.jpeg" },
    { id: "2", songName: "Hangover", filePath: "songs/2.mp3", coverPath: "images/2.jpeg" },
    { id: "3", songName: "Saara India", filePath: "songs/3.mp3", coverPath: "images/3.jpeg" },
    { id: "4", songName: "Akhiyaan Milavanga", filePath: "songs/4.mp3", coverPath: "images/4.jpeg" },
    { id: "5", songName: "ButtaBomma", filePath: "songs/5.mp3", coverPath: "images/5.jpeg" },
    { id: "6", songName: "Ramuloo Ramulaa", filePath: "songs/6.mp3", coverPath: "images/6.jpeg" },
    { id: "7", songName: "Apsara Aali", filePath: "songs/7.mp3", coverPath: "images/7.jpeg" },
    { id: "8", songName: "O Desh Mere", filePath: "songs/8.mp3", coverPath: "images/8.jpeg" },
    { id: "9", songName: "Paani Paani", filePath: "songs/9.mp3", coverPath: "images/9.jpeg" },
    { id: "10", songName: "Bam Bhole", filePath: "songs/10.mp3", coverPath: "images/10.jpeg" },
    { id: "11", songName: "Bandeya", filePath: "songs/11.mp3", coverPath: "images/11.jpeg" },
    { id: "12", songName: "Barsaat Ki Dhun", filePath: "songs/12.mp3", coverPath: "images/12.jpeg" },
    { id: "13", songName: "Bedardi Se Pyaar Ka", filePath: "songs/13.mp3", coverPath: "images/13.jpeg" },
    { id: "14", songName: "Bella Ciao", filePath: "songs/14.mp3", coverPath: "images/14.jpeg" },
    { id: "15", songName: "Bheege Bheege", filePath: "songs/15.mp3", coverPath: "images/15.jpeg" }

]


masterPlay.addEventListener('click', () => {
    if (audioElement.paused || audioElement.currentTime <= 0) {
        audioElement.play();
        makeAllPlays();
        masterPlay.classList.remove('fa-circle-play');
        masterPlay.classList.add('fa-pause-circle');
        gif.style.opacity = 1;
        masterSongName.style.opacity = 1;
        zero.classList.add('fa-pause-circle');
        coverimage.style.opacity = 1;
    }
    else {
        makeAllPlays();
        audioElement.pause();
        masterPlay.classList.remove('fa-pause-circle');
        masterPlay.classList.add('fa-circle-play');
        gif.style.opacity = 0;
        masterSongName.style.opacity = 0;
    }
})


audioElement.addEventListener('timeupdate', () => {
    let progress = parseInt((audioElement.currentTime / audioElement.duration) * 100);
    myProgressBar.value = progress;
    let currentStart = document.getElementById('currentStart');
    let currentEnd = document.getElementById('currentEnd');
    let music_cur = audioElement.currentTime;
    let music_dur = audioElement.duration;
    let min = Math.floor(music_dur / 60);
    let sec = Math.floor(music_dur % 60);
    if (sec < 10) {
        sec = `0${sec}`
    }
    currentEnd.innerText = `${min}:${sec}`;

    let min1 = Math.floor(music_cur / 60);
    let sec1 = Math.floor(music_cur % 60);
    if (sec1 < 10) {
        sec1 = `0${sec1}`
    }
    currentStart.innerText = `${min1}:${sec1}`;
    let seekbar = myProgressBar.value;
    bar2.style.width = `${seekbar}%`;
    dot.style.left = `${seekbar}%`;
})

myProgressBar.addEventListener('change', () => {
    audioElement.currentTime = myProgressBar.value * audioElement.duration / 100;
})
const makeAllPlays = () => {
    Array.from(document.getElementsByClassName('songitemplay')).forEach((element) => {
        element.classList.remove('fa-pause-circle');
        element.classList.add('fa-play-circle');
    })
}

audioElement.addEventListener('ended', () => {
    masterPlay.classList.remove('fa-pause-circle');
    masterPlay.classList.add('fa-circle-play');
    zero.classList.remove('fa-pause-circle');
    zero.classList.add('fa-play-circle');
    if (songIndex >= 14) {
        songIndex = 0;
    }
    else {
        songIndex += 1;
    }
    makeAllPlays();
    audioElement.src = `songs/${songIndex + 1}.mp3`;
    masterSongName.innerText = songs[songIndex].songName;
    coverimage.src = songs[songIndex].coverPath;
    audioElement.currentTime = 0;
    audioElement.play();
    masterPlay.classList.remove('fa-circle-play');
    masterPlay.classList.add('fa-pause-circle');
})





Array.from(document.getElementsByClassName('songitemplay')).forEach((element) => {
    element.addEventListener('click', (e) => {
        makeAllPlays();
        songIndex = parseInt(e.target.id);
        e.target.classList.remove('fa-play-circle');
        e.target.classList.add('fa-pause-circle');
        audioElement.src = `songs/${songIndex + 1}.mp3`;
        masterSongName.innerText = songs[songIndex].songName;
        coverimage.src = songs[songIndex].coverPath;
        audioElement.currentTime = 0;
        audioElement.play();
        masterPlay.classList.remove('fa-circle-play');
        masterPlay.classList.add('fa-pause-circle');
        gif.style.opacity = 1;
    })
})


document.getElementById('Next').addEventListener('click', () => {
    if (songIndex >= 14) {
        songIndex = 0;
    }
    else {
        songIndex += 1;
    }
    makeAllPlays();
    audioElement.src = `songs/${songIndex + 1}.mp3`;
    masterSongName.innerText = songs[songIndex].songName;
    coverimage.src = songs[songIndex].coverPath;
    audioElement.currentTime = 0;
    audioElement.play();
    masterPlay.classList.remove('fa-circle-play');
    masterPlay.classList.add('fa-pause-circle');
})


document.getElementById('Previous').addEventListener('click', () => {
    if (songIndex <= 0) {
        songIndex = 14;
    }
    else {
        songIndex -= 1;
    }
    makeAllPlays();
    audioElement.src = `songs/${songIndex + 1}.mp3`;
    masterSongName.innerText = songs[songIndex].songName;
    coverimage.src = songs[songIndex].coverPath;
    audioElement.currentTime = 0;
    audioElement.play();
    masterPlay.classList.remove('fa-circle-play');
    masterPlay.classList.add('fa-pause-circle');

})
const navTogglerBtn = document.querySelector(".nav-toggle");
let bars = document.getElementById('bars');
let crossbar = document.getElementById('crossbar');
navTogglerBtn.addEventListener("click", () => {
    if (sidebar.style.left == '-789px') {
        sidebar.style.left = '0';
        bars.style.display = 'none';
        navTogglerBtn.style.backgroundColor = 'white';
        crossbar.style.display = 'inline-block';
    }
    else {
        sidebar.style.left = '-789px';
        crossbar.style.display = 'none';
        navTogglerBtn.style.backgroundColor = 'black';
        bars.style.display = 'inline-block';
    }

    // console.log("Hello");
})

let search_result = document.getElementsByClassName('search_result')[0];
songs.forEach(Element => {
    const { id, songName, filePath, coverPath } = Element;
    // console.log(songName);
    let card = document.createElement('a');
    card.classList.add('card');
    card.href = "#" + (id - 1);
    card.innerHTML = `
    <img src = "${coverPath}" alt = "">
    <div class = "content">
    ${songName}
    </div>
    `;
    search_result.appendChild(card);
});
let input = document.getElementsByTagName('input')[0];
input.addEventListener('keyup', () => {
    let input_value = input.value.toUpperCase();
    let items = search_result.getElementsByTagName('a');
    for (let index = 0; index < items.length; index++) {
        let as = items[index].getElementsByClassName('content')[0];
        let text_value = as.textContent || as.innerHTML;
        if (text_value.toUpperCase().indexOf(input_value) > -1) {
            items[index].style.display = "flex";
        }
        else {
            items[index].style.display = "none";
        }
        if (input.value == 0) {
            search_result.style.display = "none";
        }
        else {
            search_result.style.display = "";
        }
    }
})

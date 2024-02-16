console.log("Welcome to spotify");
let songIndex =0;
let audioElement = new Audio('songs/1.mp3');
let masterPlay = document.getElementById('masterPlay');
let myProgressBar = document.getElementById('myProgressBar');
let gif = document.getElementById('gif');
let masterSongName = document.getElementById('masterSongName')
let songItem = Array.from(document.getElementsByClassName('songItem'));

let songs=[
    {songName:"Warriyo-Mortals", filePath:"songs/gh.mp3", covwerPath:"covers/1.jpg"},
    {songName:"Chielo- Huma-Huma", filePath:"songs/2.mp3", covwerPath:"covers/2.jpg"},
    {songName:"DEAF KEV-Ncs releae", filePath:"songs/3.mp3", covwerPath:"covers/3.jpg"},
    {songName:"Rabba-Salam-e-ishq", filePath:"songs/4.mp3", covwerPath:"covers/4.jpg"},
    {songName:"Bhula dena-Salam-e-ishq", filePath:"songs/5.mp3", covwerPath:"covers/5.jpg"},
    {songName:"Tere Bin-Salam-e-ishq", filePath:"songs/7.mp3", covwerPath:"covers/6.jpg"},
    {songName:"Aa ja-Salam-e-ishq", filePath:"songs/8.mp3", covwerPath:"covers/7.jpg"},
    {songName:"Mai na rah saku-Salam-e-ishq", filePath:"songs/9.mp3", covwerPath:"covers/8.jpg"},
    {songName:"Aa jana-Salam-e-ishq", filePath:"songs/10.mp3", covwerPath:"covers/9.jpg"},
    {songName:"Aao na-Salam-e-ishq", filePath:"songs/11.mp3", covwerPath:"covers/10.jpg"},
    {songName:"Ghar -aa- ja", filePath:"songs/3.mp3", covwerPath:"covers/10.jpg"},
    
    


]
songItem.forEach((element,i)=>{
    
    element.getElementsByTagName("img")[0].src = songs[i].covwerPath;
    element.getElementsByClassName("songName")[0].innerText = songs[i].songName;
})

//handle play/pause click

masterPlay.addEventListener('click', ()=>{
    if(audioElement.paused|| audioElement.currentTime<=0){
        audioElement.play();
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
        gif.style.opacity =1;

    }else{
        audioElement.pause();
        masterPlay.classList.remove('fa-pause-circle');
        masterPlay.classList.add('fa-play-circle');
        gif.style.opacity =0;

    }
})

//listen to events

audioElement.addEventListener('timeupdate',()=>{
    // console.log('timeupdate');
    // upadate seekabar

    progress = parseInt((audioElement.currentTime/audioElement.duration)*100);
    // console.log(progress);
    myProgressBar.value = progress;
})

myProgressBar.addEventListener('change', ()=>{
    audioElement.currentTime=myProgressBar.value*audioElement.duration/100;
})


// jis per tipe us par play icon aa jaye

const makeAllPlays=()=>{
    Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
        element.classList.remove('fa-pause-circle');
        element.classList.add('fa-play-circle');
    })
}

Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
    element.addEventListener('click', (e)=>{
        makeAllPlays();
        songIndex =parseInt(e.target.id);
        e.target.classList.remove('fa-play-circle');
        e.target.classList.add('fa-pause-circle');
        
        audioElement.src=`songs/${songIndex+1}.mp3`;
        masterSongName.innerText = songs[songIndex].songName;
        
        masterSongName.innerText = songs[songIndex].songName;
        audioElement.currentTime=0;
        audioElement.play();
        gif.style.opacity =1;
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
    })
})


document.getElementById('next').addEventListener('click', ()=>{

    if(songIndex>=10){
        songIndex=0;
    }
    else{
        songIndex+=1;
    }
    audioElement.src=`songs/${songIndex+1}.mp3`;
    masterSongName.innerText = songs[songIndex].songName;
    audioElement.currentTime=0;
    audioElement.play();
    masterPlay.classList.remove('fa-play-circle');
    masterPlay.classList.add('fa-pause-circle');
})





document.getElementById('   ').addEventListener('click', ()=>{
    if(songIndex<=0){
        songIndex=0;
    }
    else{
        songIndex-=1;
    }
    audioElement.src=`songs/${songIndex+1}.mp3`;
    masterSongName.innerText = songs[songIndex].songName;
    
    audioElement.currentTime=0;
    audioElement.play();
    masterPlay.classList.remove('fa-play-circle');
    masterPlay.classList.add('fa-pause-circle');
})








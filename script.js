 console.log("Welcome to spotify");

 let songIndex =0;
 let audioElement = new Audio('songs/1.mp3');
 let masterplay =  document.getElementById('masterplay');
 let myprogressbar = document.getElementById('myprogressbar');
 let gif = document.getElementById('gif');
 let songitems= Array.from(document.getElementsByClassName('songitem'));
 let songs =[
    {songName: "Tu hai toh mujhe fir or kya chahiye", filePath: "songs/1.mp3", coverPath: "covers/1.jpg"},
    {songName: "swag se  swagat", filePath: "songs/s2.mp3", coverPath: "covers/3.jpg"},
    {songName: "Kar gayi Chull", filePath: "songs/k3.mp3", coverPath: "covers/4.jpg"},
    {songName: "Balam Pichkari", filePath: "songs/b2.mp3", coverPath: "covers/2.jpg"},
    {songName: "Tere Vaaste", filePath: "songs/t4.mp3", coverPath: "covers/1.jpg"},
    {songName: "Balam Pichkari", filePath: "songs/b2.mp3", coverPath: "covers/2.jpg"},
 ]
 
 songitem.forEach((element,i)=>{
    console.log(element,i);
    element.getElementsByTagName("img")[0].src=songs[i].coverPath;
    element.getElementsByClassName("songname")[0].innerText=songs[i].filePath;
 })
 
 
 
//  audioElement.play();

//Handle play/pause button
masterplay.addEventListener('click', ()=>{
    if(audioElement.paused || audioElement.currentTime==0){
        audioElement.play();
        masterplay.classList.remove('fa-circle-play');
        masterplay.classList.add('fa-circle-pause');
        gif.style.opacity = 1;
    }
    else{
        audioElement.pause();
        masterplay.classList.remove('fa-circle-pause');
        masterplay.classList.add('fa-circle-play');
        gif.style.opacity = 0;
    }
})
//listen to events
audioElement.addEventListener('timeupdate', ()=>{
    console.log('timeupdate');
    //Update seekbar
 progress=parseInt((audioElement.currentTime/audioElement.duration)*100);
 console.log(progress); 
 myprogressbar.value=progress;
})

myprogressbar.addEventListener('change',()=>{
    audioElement.currentTime = myprogressbar.value * audioElement.duration/100;
})
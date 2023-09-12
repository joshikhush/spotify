 console.log("Welcome to spotify");

 let songIndex =0;
 let audioElement = new Audio('1.mp3');
 let masterplay =  document.getElementById('masterplay');
 let myprogressbar = document.getElementById('myprogressbar');
 let gif = document.getElementById('gif');
 let songs =[
    {songName: "Tu hai toh mujhe fir or kya chahiye", filepath: "song/1.mp3", coverpath: "covers/1.jpg"},
    {songName: "swag se  swagat", filepath: "song/s2.mp3", coverpath: "covers/3.jpg"},
    {songName: "Kar gayi Chull", filepath: "song/k3.mp3", coverpath: "covers/4.jpg"},
    {songName: "Balam Pichkari", filepath: "song/b2.mp3", coverpath: "covers/2.jpg"},
    {songName: "Tere Vaaste", filepath: "song/t4.mp3", coverpath: "covers/1.jpg"},
    {songName: "Balam Pichkari", filepath: "song/b2.mp3", coverpath: "covers/2.jpg"},
 ]
 
 
 
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
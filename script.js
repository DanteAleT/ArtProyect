const gioconda = document.getElementById('gioconda');
const cena = document.getElementById('cena');
const juan =  document.getElementById('juan');
const video = document.getElementById('img');

gioconda.addEventListener('click', ()=>{
    videoUrl = "./assets/mona.mp4";
    video.src = videoUrl;
    video.play();
});

cena.addEventListener('click', ()=>{
    videoUrl = "./assets/cena.mp4";
    video.src = videoUrl;
    video.play();
});

juan.addEventListener('click', ()=>{
    videoUrl = "./assets/juan.mp4";
    video.src = videoUrl;
    video.play();
});

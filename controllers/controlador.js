let etiqueta=document.getElementById("boton");
let foto=document.getElementById("foto");
let titulo=document.getElementById("titulo");
let audio=document.getElementById("audio");

etiqueta.addEventListener("click",perroGuardian);

function perroGuardian(){

    foto.src="img/incubus2.jpg";
    audio.src="audio/cancion2.mp3";
    titulo.textContent="ANA MOLLY";
    



}
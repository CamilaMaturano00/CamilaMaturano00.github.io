var botonEncriptar = document.querySelector(".btn-encriptar");
var resultado = document.querySelector("#resultado");
botonEncriptar.addEventListener("click",encriptar);

function encriptar(){
    var texto = document.querySelector(".texto").value;
        texto = texto.replaceAll("e","enter");
        texto = texto.replaceAll("i","imes");
        texto = texto.replaceAll("a","ai");
        texto = texto.replaceAll("o","ober");
        texto = texto.replaceAll("u","ufat");
    resultado.value = texto
};


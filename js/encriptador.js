var botonEncriptar = document.querySelector(".botonE");
var resultado = document.querySelector("#resultado");
var texto = document.querySelector("#texto")
botonEncriptar.addEventListener("click",encriptar);

function encriptar(){
    
    var texto = document.querySelector("#texto").value;

        texto = texto.replaceAll("e","enter");
        texto = texto.replaceAll("i","imes");
        texto = texto.replaceAll("a","ai");
        texto = texto.replaceAll("o","ober");
        texto = texto.replaceAll("u","ufat");
    console.log(texto);
    resultado.value = texto
    
};
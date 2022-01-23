var botonDesencriptar = document.querySelector(".btn-desencriptar");
var resultado = document.querySelector("#resultado");
botonDesencriptar.addEventListener("click",desencriptar);

function desencriptar(){
    var texto = document.querySelector(".texto").value;
        texto = texto.replaceAll("enter","e");
        texto = texto.replaceAll("imes","i");
        texto = texto.replaceAll("ai","a");
        texto = texto.replaceAll("ober","o");
        texto = texto.replaceAll("ufat","u");
    resultado.value = texto
};
var botonLimpiar = document.querySelector(".btn-limpiar");
var botonCopiar = document.querySelector(".btn-copiar");
var resultado = document.querySelector("#resultado");
var texto = document.querySelector(".texto");

botonLimpiar.addEventListener("click",limpiar);
botonCopiar.addEventListener("click",copiar);

function limpiar(){
    texto.value = "";
    resultado.value = "";
}
function copiar (){
    resultado.focus();
    document.execCommand("selectAll");
    document.execCommand("copy");
};
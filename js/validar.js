function validarTexto(e){
    var key = e.keyCode || e.which;
    var tecla = String.fromCharCode(key).toLowerCase();
    var letras = " abcdefghijklmnopqrstuvwxyz";
    var especiales = [8,13];
    var tecla_especial = false
    for(var i in especiales) {
        if(key == especiales[i]){
            tecla_especial = true;
            break;
        }
    }
    if(letras.indexOf(tecla) == -1 && !tecla_especial){
        alert("Ingresar solo letras");
        return false;
    }
}
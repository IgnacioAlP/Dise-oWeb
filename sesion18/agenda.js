function guardardatos() {
    localStorage.nombre = document.getElementById("nombre");
    localStorage.movil = document.getElementById("movil");
}
function recuperar() {
    if ((localStorage.nombre !=undefined) && (localStorage.movil !=undefined)) {
        document.getElementById("datos").innerHTML ="Nombre: " + localStorage.nombre + "<br> Num.Celular: " + localStorage.movil
    } else {
        document.getElementById("datos").innerHTML ="No has ingresado datos en la agenda"
    }
}
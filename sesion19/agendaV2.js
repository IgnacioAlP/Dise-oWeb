function guardarDato() {
    var nombre = document.getElementById("nombre").value;
    var movil = document.getElementById("movil").value;
    localStorage.setItem(nombre, movil);
    document.getElementById("nombre").value = "";
    document.getElementById("movil").value = "";
    actualizardatos();
}

function recuperarDato(){
    var nombre = document.getElementById("nombre").value;
    localStorage.setItem(nombre);
    document.getElementById("movil").value = localStorage.getItem(nombre);
}

function elminarDato(){
    var nombre = document.getElementById("nombre").value;
    localStorage.setItem(nombre);
    actualizardatos();
}

function eliminarTodo(){
    localStorage.clear();
    actualizardatos();
}

function actualizardatos(){
    var registro = "";
    if (localStorage.length === 0) {
        registro += '<li>Vacío</li>';
    } else {
        for (var i = 0; i <= localStorage.length - 1; i++) {
            var key = localStorage.key(i);
            registro += '<li>' + '<span class="nom">' + key + '</span>' + '<span class="nom">' + localStorage.getItem(key) + '</span>' + '</li><br>';
        }   
    }
    document.getElementById('contactos').innerHTML = registro;
}
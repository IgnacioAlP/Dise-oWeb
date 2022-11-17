function guardarDato() {
    const nombre = document.getElementById("nombre").value;
    const movil = document.getElementById("movil").value;
    const email = document.getElementById("email").value;
    
    const datos = {
        'movil': movil,
        'email': email,      
    };

    localStorage.setItem(nombre, JSON.stringify(datos));

    document.getElementById("nombre").value = "";
    document.getElementById("movil").value = "";
    document.getElementById("email").value = "";
    
    actualizardatos();
}

function recuperarDato(){
    const nombre = document.getElementById("nombre").value;
    localStorage.setItem(nombre);
    document.getElementById("movil").value = localStorage.getItem(nombre);
    document.getElementById("email").value = localStorage.getItem(email);
}

function elminarDato(){
    const nombre = document.getElementById("nombre").value;
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
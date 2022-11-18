function guardarDato(){
    //almacenando
    var nombre = document.getElementById("nombre").value;
    var movil = document.getElementById("movil").value;
    var email = document.getElementById("email").value;
  
    const datos = {
        'movil':movil,
        'email':email,
    }
    //guardando datos
    localStorage.setItem(nombre, JSON.stringify(datos));
  
    //para limpiar
    document.getElementById("nombre").value = "";
    document.getElementById("movil").value = "";
    document.getElementById("email").value = "";
  
    actualizarDatos();
  }
  
  function recuperarDato(){
    var nombre = document.getElementById("nombre").value;
  
    //almacenando en la variable datos
    let datos = localStorage.getItem(nombre);
  
    //separar
    datos = JSON.parse(datos);
  
    //aparecer
    document.getElementById("movil").value = datos.movil;
    document.getElementById("email").value = datos.email;
  }
  
  function eliminarDato(){
    var nombre = document.getElementById("nombre").value;
    localStorage.removeItem(nombre);
    actualizarDatos();
  }
  
  function eliminarTodo(){
    localStorage.clear();
    actualizarDatos();
  }
  
  function actualizarDatos(){
    var registro = "";
    if (localStorage.length === 0) {
        registro += '<li>Vacío</li>';
    } else {
       for (var i = 0; i <= localStorage.length - 1; i++) {
           var key = localStorage.key(i);
  
           //obtengo los datos
           let datos = localStorage.getItem(key);
  
           //separar
           datos = JSON.parse(datos);
  
           //JSON no se trabaja con apostrofes ' sino tilde invertida `
  
           registro += `<li> <span class="nom"> ${key} </span> 
           <span class="nom"> ${datos.movil} </span> 
           <span class="nom"> ${datos.email} </span>
           </li><br>`;
       } 
    }
    document.getElementById('contactos').innerHTML = registro;
  }
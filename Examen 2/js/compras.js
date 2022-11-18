window.onload = function () {

    const bd = [{
        id: 1,
        nombre: 'Cemento Cemex',
        precio: 48,
        imagen:"img/cemento.pgp"
    },{
        id: 2,
        nombre: 'Clavos de 5´',
        precio: 10,
        imagen:"img/clavo.jpg"
    },{
        id: 3,
        nombre: 'Interruptores',
        precio: 12,
        imagen:"img/interruptor.jpg"
    },{
        id: 4,
        nombre: 'Foco - Home light',
        precio: 15.99,
        imagen:"img/foco.jpg"
    },{
        id: 5,
        nombre: 'Serrucho Trupers ',
        precio: 18,
        imagen:"img/cerrucho.jpg"
    },{
        id: 6,
        nombre: 'Calamina pavk',
        precio: 25,
        imagen:"img/calamina.jpg"
    }
];
    
    var carrito=[];
    var total= 0;
    const cont_items = document.querySelector('#items');
    const cont_carrito = document.querySelector('#compras');
    const cont_total = document.querySelector('#total');
    const cont_botonVaciar = document.querySelector('#vaciar_compras');
    const cont_botonEnviarCompra = document.querySelector('#enviar_compra');
    const almacenLocal = window.localStorage;
    
    
    function mostrarProductos() {
        bd.forEach((info) => {
            //base
            const cursor = document.createElement('div');
            cursor.classList.add('card', 'col-sm-2');
            cursor.style.border="black solid 2px";
    
            //body
            const cursorbody = document.createElement('div');
            cursorbody .classList.add('card-body');
    
            //footer
            const cursorfooter = document.createElement('div');
            cursorfooter.classList.add('card-footer');
    
            //h5
            const cursorTitle = document.createElement('h5');
            cursorTitle.classList.add('card-title');
            cursorTitle.textContent = info.nombre;
    
            //img_producto
            const cursorImagen = document.createElement('img');
            cursorImagen.classList.add('img-fluid');
            cursorImagen.setAttribute('src', info.imagen,);
    
            //precio
            const cursorPrecio = document.createElement('p');
            cursorPrecio.classList.add('card-text');
            cursorPrecio.textContent = 'S/ ' + info.precio;
    
            //boton para agregar 
            const cursorBoton = document.createElement('button');
            cursorBoton.classList.add('btn', 'btn-dark');
            cursorBoton.style.width='100%';
            cursorBoton.textContent = '+';
            cursorBoton.setAttribute('clave_primaria', info.id);
            cursorBoton.addEventListener('click', agregar_carrito);
    
    
            //añade apendices al body de la card
            cursorbody .appendChild(cursorImagen);
            cursorbody .appendChild(cursorTitle);
            cursorbody .appendChild(cursorPrecio);
            cursorfooter.appendChild(cursorBoton);
            //añade apendices a la card
            cursor.appendChild(cursorbody);
            cursor.appendChild(cursorfooter);
            //añade la card al div para mostrar productos
            cont_items.appendChild(cursor);
        });
    }
    
    function calcularTotal() {
        total = 0;
        carrito.forEach((item) => {
            const articulo = bd.filter((itemBaseDatos) => {
                return itemBaseDatos.id === parseInt(item);
            });
            total = total + articulo[0].precio;
        });
        cont_total.textContent = total.toFixed(2);
    }
    
    function agregar_carrito(evento) {
        carrito.push(evento.target.getAttribute('clave_primaria'))
        calcularTotal();
        mostrarCarrito();
        almacenLocal.setItem('carrito', JSON.stringify(carrito));
    }
    
    function mostrarCarrito() {
        cont_carrito.textContent = '';
        const carritoSinDuplicados = [...new Set(carrito)];
        carritoSinDuplicados.forEach((item) => {
            const articulo = bd.filter((itemBaseDatos) => {
                return itemBaseDatos.id === parseInt(item);
            });
            const contadorUnidades = carrito.reduce((total, itemId) => {
                return itemId === item ? total += 1 : total;
            }, 0);
    
            const nodo = document.createElement('li');
            nodo.classList.add('text-right', 'mx-2','list-group-item');
            nodo.textContent = contadorUnidades + ' ----->' + articulo[0].nombre + '- S/. ' + articulo[0].precio;
    
            const bton = document.createElement('button');
            bton.classList.add('btn', 'btn-dark', 'mx-3');
            bton.textContent = 'x';
            bton.style.float='right'
            bton.dataset.item = item;
            bton.addEventListener('click', borrarItemCarrito);
            nodo.appendChild(bton);
            cont_carrito.appendChild(nodo);
        });
    }
    
    
    function borrarItemCarrito(evento) {
        const id = evento.target.dataset.item;
        carrito = carrito.filter((carritoId) => {
            return carritoId !== id;
        });
        mostrarCarrito();
        calcularTotal();
        almacenLocal.setItem('carrito', JSON.stringify(carrito));
    }
    
    
    cont_botonVaciar.addEventListener('click', vaciarCarrito);
    function vaciarCarrito() {
        carrito = [];
        mostrarCarrito();
        calcularTotal();
        localStorage.clear();
    }
    
    
    function revisarBaseDatos() {
        if (almacenLocal.getItem('carrito') !== null) {
            carrito = JSON.parse(almacenLocal.getItem('carrito'));
        }
    }
    
    //Escribir Informacion del Input
    cont_botonEnviarCompra.addEventListener('click', escribir_info);
    
    function escribir_info() {
        if (document.getElementById("nombre").value== 0) {
            document.getElementById("info_nombre").innerHTML="______________________________";
        } else{
            document.getElementById("info_nombre").innerHTML=document.getElementById("nombre").value;
        }
    
        if (document.getElementById("email").value== 0) {
            document.getElementById("info_email").innerHTML="______________________________";
        } else{
            document.getElementById("info_email").innerHTML=document.getElementById("email").value;
        }
    
        document.getElementById("info_total").innerHTML="Total: S/ "+total.toFixed(2);
    }
    revisarBaseDatos();
    mostrarProductos();
    calcularTotal();
    mostrarCarrito();
    }
    
const carrito = [];

const agregarProductos = datos => {
    datos.forEach(elemento => {
        let nuevaCard = document.createElement("div");
        nuevaCard.innerHTML = 
        `
        <div class="card mx-3" style="width: 14rem">
            <img src=${elemento.imagen} class="card-img-top" alt="Imagen libro">
            <div class="card-body text-center">
                <h5 class="card-title">${elemento.nombre}</h5>
                <p class="card-text">${elemento.autor}</p>
                <p class="card-text">$${elemento.precio}</p>
                <button id="btnComprar${elemento.id}" class="boton-comprar btn">Comprar</button>
            </div>
        </div>
        `;
        nuevaCard.setAttribute('class','m-auto my-5')
        contenedorPrincipal.append(nuevaCard);

        // Funcionalidad agregar al carrito 

        document.getElementById(`btnComprar${elemento.id}`).addEventListener('click',() => {
            const controlador = carrito.includes(elemento);
            elemento.cantidad++;
            if (controlador !== true) {
                carrito.push(elemento);
                document.getElementById('contadorCarrito').innerHTML = carrito.length;
                let elementoCarrito = document.createElement('tr');
                elementoCarrito.innerHTML = 
                `
                    <th scope="row"><img style="width: 25px" src="${elemento.imagen}"></th>
                    <td>${elemento.nombre}</td>
                    <td id="precioElemento${elemento.id}">$${elemento.precio}</td>
                    <td id="cantidadElemento${elemento.id}" >${elemento.cantidad}</td>
                    <td><a class="btn btn-danger" id="btnEliminar" data-producto=${elemento.id}><i class="fa-solid fa-x"></i></a></td>
                `;
                elementoCarrito.setAttribute('id',`${elemento.id}`);
                document.getElementById('tablaCarrito').append(elementoCarrito);;
            }
            else {      
                document.getElementById(`cantidadElemento${elemento.id}`).innerHTML = `${elemento.cantidad}`;
                document.getElementById(`precioElemento${elemento.id}`).innerHTML = `$${elemento.precio * elemento.cantidad} ($${elemento.precio})`;
            }
        });
    });
}

botonCarrito.addEventListener('click',() => {
    totalCarrito.innerHTML = "$" + carrito.reduce((acumulador,elemento) => (elemento.precio * elemento.cantidad) + acumulador, 0);
});

tablaCarrito.addEventListener('click',(e) => {
    e.preventDefault;
    if (e.target.id === 'btnEliminar') {
        for (const i in carrito) {
            if (carrito[i].id == e.target.dataset.producto) {
                carrito[i].cantidad = 0;
                carrito.splice(i,1);
                document.getElementById(e.target.dataset.producto).remove();
                document.getElementById('totalCarrito').innerHTML = "$" + carrito.reduce((acumulador,elemento) => (elemento.precio * elemento.cantidad) + acumulador, 0);
                document.getElementById('contadorCarrito').innerHTML = carrito.length;
            }
            
        }
    }
})


const carrito = [];

const productos = [
    {
        id: 1,
        nombre: "Harry Potter y la Piedra Filosofal",
        autor: "J.K. Rowling",
        precio: 1000,
        imagen: "assets/images/book1.jpg",
        cantidad: 0
    },
    {
        id: 2,
        nombre: "El Principito",
        autor: "Antoine de Saint-Exupéry",
        precio: 1000,
        imagen: "assets/images/book2.jpg",
        cantidad: 0        
    },
    {
        id: 3,
        nombre: "1984",
        autor: "George Orwell",
        precio: 1000,
        imagen: "assets/images/book3.jpg",
        cantidad: 0
    },
    {
        id: 4,
        nombre: "El Padrino",
        autor: "Mario Puzo",
        precio: 1000,
        imagen: "assets/images/book4.jpg",
        cantidad: 0
    },
    {
        id: 5,
        nombre: "La Metamorfosis",
        autor: "Franz Kafka",
        precio: 1000,
        imagen: "assets/images/book5.jpg",
        cantidad: 0
    },
];

const agregarProductos = (datos) => {
    datos.forEach(elemento => {
        let nuevaCard = document.createElement("div");
        nuevaCard.innerHTML = 
        `
        <img src=${elemento.imagen} class="card-img-top" alt="Imagen libro">
        <div class="card-body">
            <h5 class="card-title">${elemento.nombre}</h5>
            <p class="card-text">${elemento.autor}</p>
            <p class="card-text">$${elemento.precio}</p>
            <button id="btnComprar${elemento.id}" class="btn btn-primary">Comprar</button>
        </div>
        `;
        nuevaCard.setAttribute("class","card mx-3");
        nuevaCard.style.width = "16rem";
        contenedorPrincipal.append(nuevaCard);
        document.getElementById(`btnComprar${elemento.id}`).addEventListener('click',() => {
            const controlador = carrito.includes(elemento);
            elemento.cantidad++;
            if (controlador !== true) {
                carrito.push(elemento);
                let elementoCarrito = document.createElement('tr');
                elementoCarrito.innerHTML = 
                `
                    <th scope="row"><img style="width: 25px" src="${elemento.imagen}"></th>
                    <td>${elemento.nombre}</td>
                    <td id="precioElemento${elemento.id}">$${elemento.precio}</td>
                    <td id="cantidadElemento${elemento.id}" >${elemento.cantidad}</td>
                `
                document.getElementById('tablaCarrito').append(elementoCarrito);
            }
            else {      
                document.getElementById(`cantidadElemento${elemento.id}`).innerHTML = `${elemento.cantidad}`;
                document.getElementById(`precioElemento${elemento.id}`).innerHTML = `$${elemento.precio * elemento.cantidad} ($${elemento.precio})`;
            }
        })
    });
}

document.getElementById('btnCarrito').addEventListener('click',() => {
    document.getElementById('totalCarrito').innerHTML = "$" + carrito.reduce((acumulador,elemento) => (elemento.precio * elemento.cantidad) + acumulador, 0)
})

agregarProductos(productos);




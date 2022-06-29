const llamarProductos = async () => {
    const response = await fetch('assets/data/productos.json');
    const data = await response.json();
    agregarProductos(data);

}

llamarProductos()
class Libro {
    constructor(nombre,autor,imagen,precio) {
        this.nombre = nombre;
        this.autor = autor;
        this.precio = precio;
        this.imagen = imagen;
    }
    renderizar() {
        let nuevoLibro = document.createElement("div");

        nuevoLibro.innerHTML = 
        `
        <div>
            <img src="assets/images/${this.imagen}">
            <p>${this.nombre}</p>
            <p>${this.autor}</p>
            <p>${this.precio}</p>
        </div>
        `

        document.getElementById("container").append(nuevoLibro)
    }
}

const harryPotter = new Libro("Harry Potter","J.K. Rowling","book1.jpg",2000)
;
const sherlockHolmes = new Libro("Sherlock Holmes","Arthur Conan Doyle", "book3.jpg",1500);

const viajeAlCentroDeLaTierra = new Libro("Viaje al centro de la Tierra","Julio Verne", "book2.jpg",1200);

harryPotter.renderizar()
sherlockHolmes.renderizar()
viajeAlCentroDeLaTierra.renderizar()
import datos from "./../datos/fotos"
import { cargarImagen } from "./cargarImage";


const slideClick = (e) => {
    let ruta, descripcion, nombre;

    const id = parseInt(e.target.dataset.id);
    const galeria = document.getElementById("galeria");
    const categoriaActiva = galeria.dataset.categoria;

    datos.fotos[categoriaActiva].forEach(foto => {
        if (foto.id === id) {
            ruta = foto.ruta;
            descripcion = foto.descripcion;
            nombre = foto.nombre;
        }
    });

    cargarImagen(id, nombre, ruta, descripcion);

};

export default slideClick;
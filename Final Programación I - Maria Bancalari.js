/* programa de administración e información de películas y series (PyS). */

/* declaración de variables */

let titulo = '';
let productora = '';
let generos = [''];
let tipo = '';
let fechaEstreno = '';
let valoracion = 0;

/* arreglo de series y películas */

let pys = [
    {
        titulo: "Shrek",
        productora: "DreamWorks",
        generos: ["Animación", "Comedia", "Aventura"],
        tipo: "Película",
        fechaEstreno: "2001-05-18",
        valoracion: 7000
    },
    {
        titulo: "El Padrino",
        productora: "Paramount Pictures",
        generos: ["Drama", "Crimen"],
        tipo: "Película",
        fechaEstreno: "1972-03-15",
        valoracion: 100000
    },
    {
        titulo: "Perfume de Mujer",
        productora: "Universal Pictures",
        generos: ["Drama"],
        tipo: "Película",
        fechaEstreno: "1992-12-23",
        valoracion: 9800
    },
    {
        titulo: "La Emperatriz",
        productora: "Netflix",
        generos: ["Drama", "Histórico"],
        tipo: "Serie",
        fechaEstreno: "2022-09-29",
        valoracion: 5000
    },
    {
       titulo: "El Patrón del Mal",
       productora: "Caracol Televisión",
       generos: ["Drama", "Crimen"],
       tipo: "Serie",
       fechaEstreno: "2012-05-28",
       valoracion: 8700
    },
    {
       titulo: "Hombre en Llamas",
       productora: "Fox 2000 Pictures",
       generos: ["Acción", "Crimen", "Drama", "Suspenso", "Policial"],
       tipo: "Película",
       fechaEstreno: "2004-04-23",
       valoracion: 15000
    }
];
/* para visualizar el array */
console.log(pys);

/* Llamada a la función menú para mostrar y seleccionar todas las funcionalidades */
menu();


/* 1 - función para listar las PyS almacenadas en el array */

function mostrarlista(listapys) {
    for (let i = 0; i < listapys.length; i++) {
        console.log(`Título: ${listapys[i].titulo}`);
        console.log(`Productora: ${listapys[i].productora}`);
        console.log(`Tipo: ${listapys[i].tipo}`);
        console.log(`Géneros: ${listapys[i].generos.join(', ')}`);
        console.log(`Fecha de estreno: ${listapys[i].fechaEstreno}`);
        console.log(`Valoración: ${listapys[i].valoracion}`);
    }
}


/* 2- función para almacenar una nueva PyS a la lista */

function agregarpys(lista) {
    const titulo = prompt("Ingrese el título:");
    const productora = prompt("Ingrese la productora:");
    const generos = prompt("Ingrese los géneros (separados por comas):").split(',');
    const tipo = prompt("Ingrese el tipo (Película o Serie):");
    const fechaEstreno = prompt("Ingrese la fecha de estreno (YYYY-MM-DD):");
    const valoracion = (prompt("Ingrese la valoración:, un número entero por favor"));

    const nuevapys = {
        titulo: titulo,
        productora: productora,
        generos: generos,
        tipo: tipo,
        fechaEstreno: fechaEstreno,
        valoracion: valoracion
    };
    lista.push(nuevapys);
    console.log(`Se ha añadido la nueva pys: ${titulo}`);
}


/* 3-función para buscar una PyS por su nombre y mostrar sus datos */

function buscarPyS(lista, nombre) {
    nombre = normalizarTexto(nombre);
    let encontrada = false;
    for (let i = 0; i < lista.length; i++) {
        if (normalizarTexto(lista[i].titulo) === nombre) {
            console.log(`Título: ${lista[i].titulo}`);
            console.log(`Productora: ${lista[i].productora}`);
            console.log(`Tipo: ${lista[i].tipo}`);
            console.log(`Géneros: ${lista[i].generos.join(', ')}`);
            console.log(`Fecha de estreno: ${lista[i].fechaEstreno}`);
            console.log(`Valoración: ${lista[i].valoracion}`);
            encontrada = true;
            console.log(`La PyS con el nombre "${nombre}" se halla en la lista.`);
            break;
        }
    }

    if (!encontrada) {
        console.log(`La PyS con el nombre "${nombre}" no se halla en la lista.`);
    }
}


/* 4- función para buscar una PyS por su nombre y devolver su índice */

function buscarIndicePyS(lista, nombre) {
    nombre = normalizarTexto(nombre);
    for (let i = 0; i < lista.length; i++) {
        if (normalizarTexto(lista[i].titulo) === nombre) {
            return i;
        }
    }
    return -1;
}


/*5- función para modificar los datos de una pys ya almacenada */

function modificarpys(lista) {
    let nombre = prompt("Ingrese el nombre de la PyS que desea modificar:");
    let nombreNormalizado = normalizarTexto(nombre);
    let indice = buscarIndicePyS(lista, nombreNormalizado);

    if (indice === -1) {
        console.log(`La PyS con el nombre "${nombre}" no se halla en la lista.`);
        return;
    }
    let opcion = prompt("Ingrese el número de la opción que desea modificar:\n1. Título\n2. Productora\n3. Géneros\n4. Tipo\n5. Fecha de estreno\n6. Valoración");

    switch (opcion) {
        case '1':
            lista[indice].titulo = prompt("Ingrese el nuevo título:");
            break;
        case '2':
            lista[indice].productora = prompt("Ingrese la nueva productora:");
            break;
        case '3':
            lista[indice].generos = prompt("Ingrese los nuevos géneros (separados por comas):").split(',');
            break;
        case '4':
            lista[indice].tipo = prompt("Ingrese el nuevo tipo (Película o Serie):");
            break;
        case '5':
            lista[indice].fechaEstreno = prompt("Ingrese la nueva fecha de estreno (YYYY-MM-DD):");
            break;
        case '6':
            lista[indice].valoracion = parseInt(prompt("Ingrese la nueva valoración:"));
            break;
        default:
            console.log("Opción no válida.");
            return;
    }

    console.log(`Se han actualizado los datos de la PyS "${nombre}".`);
}


/* 6- función para listar pys según el tipo */

function listarPySPorTipo(lista, tipo) {
    tipo = normalizarTexto(tipo);
    console.log(`Listando PyS del tipo: ${tipo}`);
    for (let i = 0; i < lista.length; i++) {
        if (normalizarTexto(lista[i].tipo) === tipo) {
            console.log(`Título: ${lista[i].titulo}`);
            console.log(`Productora: ${lista[i].productora}`);
            console.log(`Géneros: ${lista[i].generos.join(', ')}`);
            console.log(`Fecha de estreno: ${lista[i].fechaEstreno}`);
            console.log(`Valoración: ${lista[i].valoracion}`);
        }
    }
}


/* 7- función para listar pys según la valoración mínima */

function listarPySPorValoracion(lista, valoracionMinima) {
    console.log(`Listando pys con valoración mayor o igual a: ${valoracionMinima}`);
    for (let i = 0; i < lista.length; i++) {
        if (lista[i].valoracion >= valoracionMinima) {
            console.log(`Título: ${lista[i].titulo}`);
            console.log(`Productora: ${lista[i].productora}`);
            console.log(`Géneros: ${lista[i].generos.join(', ')}`);
            console.log(`Fecha de estreno: ${lista[i].fechaEstreno}`);
            console.log(`Valoración: ${lista[i].valoracion}`);
        }
    }
}


/* 8- función para listar pys según un género dado */

function listarPySPorGenero(lista, genero) {
    genero = normalizarTexto(genero);
    console.log(`Listando PyS del género: ${genero}`);
    for (let i = 0; i < lista.length; i++) {
        let generosNormalizados = lista[i].generos.map(normalizarTexto);
        if (generosNormalizados.includes(genero)) {
            console.log(`Título: ${lista[i].titulo}`);
            console.log(`Productora: ${lista[i].productora}`);
            console.log(`Géneros: ${lista[i].generos.join(', ')}`);
            console.log(`Fecha de estreno: ${lista[i].fechaEstreno}`);
            console.log(`Valoración: ${lista[i].valoracion}`);
            console.log('---');
        }
    }
}


/* función para mostrar el menú principal y manejar las opciones */

function menu() {
    let opcion = '';

    while (opcion !== '10') {
        opcion = prompt("Menú principal:\n1. Listar PyS almacenadas\n2. Añadir nueva PyS\n3. Buscar PyS por nombre\n4. Buscar índice de una PyS por nombre\n5. Modificar PyS\n6. Listar PyS por tipo\n7. Listar PyS por valoración\n8. Listar PyS por género\n9. Ordenar PyS por fecha de estreno\n10. Salir\nSeleccione una opción:");

        switch (opcion) {
            case '1':
                mostrarlista(pys);
                break;
            case '2':
               agregarpys(pys);
                /* Imprimir la lista actualizada */
                mostrarlista(pys);
                break;
            case '3':
                let nombrePyS = prompt("Ingrese el nombre de la PyS que desea buscar:");
                buscarPyS(pys, nombrePyS);
                break;
            case '4':
                let nombreBuscar = prompt("Ingrese el nombre de la PyS para buscar su índice:");
                let indice = buscarIndicePyS(pys, nombreBuscar);
                if (indice !== -1) {
                    console.log(`El índice de la PyS "${nombreBuscar}" es: ${indice}`);
                } else {
                    console.log(`La PyS con el nombre "${nombreBuscar}" no se encuentra en la lista.`);
                }
                break;
            case '5':
                modificarpys(pys);
                mostrarlista(pys);
                break;
            case '6':
                let tipo = normalizarTexto(prompt("Ingrese el tipo (Película o Serie):"));
                listarPySPorTipo(pys, tipo);
                break;
            case '7':
                let valoracionMinima = (prompt("Ingrese la valoración mínima:, ingresar un valor entero por favor"));
                listarPySPorValoracion(pys, valoracionMinima);
                break;
            case '8':
                let genero = normalizarTexto(prompt("Ingrese el género:"));
                listarPySPorGenero(pys, genero);
                break;
            case '9':
                ordenarPySPorFecha(pys);
                break;
            case '10':
                console.log("Saliendo del programa...");
                break;
            default:
                console.log("Opción no válida. Intente de nuevo.");
        }
    }
}


/* 9 - función para ordenar PyS por fecha de estreno */

function ordenarPySPorFecha(lista) {
    lista.sort((a, b) => new Date(b.fechaEstreno) - new Date(a.fechaEstreno));
    console.log("PyS ordenadas por fecha de estreno:");
    mostrarlista(lista);
}


/* función para corregir los ingresos carentes de mayúsculas o acentos */
function normalizarTexto(texto) {
    return texto.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase();
}

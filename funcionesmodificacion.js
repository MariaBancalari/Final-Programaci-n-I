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


/*función para listar las PyS almacenadas en el array */

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

/*función para almacenar una nueva PyS a la lista- modificacion */

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


/*llamado de la función para almacenar una nueva PyS a la lista */
agregarpys(pys);

/* Imprimir la lista actualizada */
mostrarlista(pys);


/*función para modificar los datos de una pys ya almacenada */

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

/*llamado de la función para modificar los datos de una pys ya almacenada */
modificarpys(pys);
/* Imprimir la lista actualizada */
mostrarlista(pys);


/* función para normalizar texto */
function normalizarTexto(texto) {
    return texto.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase();
}

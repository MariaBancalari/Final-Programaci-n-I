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


/*función para buscar una PyS por su nombre y mostrar sus datos */

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

/*llamado de la función para para buscar una PyS por su nombre y mostrar sus datos */
let nombrePyS = prompt("Ingrese el nombre de la PyS que desea buscar:");
buscarPyS(pys, nombrePyS);


/* función para buscar una PyS por su nombre y devolver su índice */

function buscarIndicePyS(lista, nombre) {
    nombre = normalizarTexto(nombre);
    for (let i = 0; i < lista.length; i++) {
        if (normalizarTexto(lista[i].titulo) === nombre) {
            return i;
        }
    }
    return -1;
}

/*llamado de la función para buscar una PyS por su nombre y devolver su índice */

let nombreBuscar = prompt("Ingrese el nombre de la PyS para buscar su índice:");
let indice = buscarIndicePyS(pys, nombreBuscar);
if (indice !== -1) {
    console.log(`El índice de la PyS "${nombreBuscar}" es: ${indice}`);
} else {
    console.log(`La PyS con el nombre "${nombreBuscar}" no se encuentra en la lista.`);
}

/* función para corregir los ingresos carentes de mayúsculas o acentos */
function normalizarTexto(texto) {
    return texto.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase();
}
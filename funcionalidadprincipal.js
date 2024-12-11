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

/*llamado de la función para listar las PyS almacenadas en el array */

mostrarlista(pys);
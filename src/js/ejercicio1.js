// Ejercicio 1
let Anto = {
    nombre: "Antonela",
    apellido: "Borgogno",
    edad: 32,
    seriesPeliculas: ["Game of Thrones", "The Walking Dead", "Halo", "Hombres  de Honor", "Transformers" ],
    conocimientosEnProgramacion: ["HTML", "CSS", "JavaScript", "Corel", "Autocad"],

    programar: function programar(){
        console.log("mirá como te programo facebook 2");
    },
};

document.write(`<h1>Me llamo ${Anto.nombre} ${Anto.apellido} y tengo ${Anto.edad} años.
Mi serie favorita es ${Anto.seriesPeliculas[2]}. 
Para programar empleo ${Anto.conocimientosEnProgramacion[1]}.</h1>`);

Anto.programar();

//Ejercicio 2
let FrontEnd = {
    maquetado: "HTML5",
    estilo: "CSS3",
    lenguaje: "JavaScript",
    frameworks: "Angular",
};

let tecnologiaFavorita = FrontEnd.estilo;

switch (tecnologiaFavorita) {
    case "HTML5":
            console.log("Me gusta el maquetado");
        break;
    case "CSS3":
            console.log("Me gusta el estilo");
        break;
    case "JavaScript":
            console.log("Me gusta el lenguaje");
        break;
    case "Angular":
            console.log("Me gusta el frameworks");
        break;
}


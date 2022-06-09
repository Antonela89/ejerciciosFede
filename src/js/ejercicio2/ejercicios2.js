//Ejercicio 1: 
//Hacer una función que dado un número como parámetro, escriba del 1 hasta ese número en consola.

export function contar(numero) {
    for(let i=1; i<= numero; i++){
        console.log(i);
    }
};



//Ejercicio 2:
//Hacer una función que reciba un array como parámetro, y luego escriba todos los elementos de dicho array en consola.

export function listar(array) {
    for(let i=0; i < array.length; i++) {
        const element = array[i];
        console.log(`${element}`);
    }
}

export let letras = ["a", "b", "c", "d", "e", "f", "g", "h", "i"];

//Ejercicio 3:
/*Hacer una función que reciba un array como parámetro, dicho array tendrá que ser de empleados. 
Por ejemplo: [{
name:,
lastname:,
age:,
position:
},
{
name:,
lastname:,
age:,
position:,
}];
dicho array deberá recorrerse y escribir en consola por cada elemento:
"empleado (numero de empleado)
nombre y apellido
edad
posición"
-por ejemplo:
Empleado 1
Federico Oviedo
19 años
Profesor
todas las funciones deberán ser creadas en un archivo, todas deberan ser exportadas y y deben ser ejecutadas dentro de otro archivo llamado ejecuciones.js*/

export let empleados = [
    {
        name: "Carlos",
        lastname: "Bersano",
        age: 42,
        position: "maquinista",
    },
    {
        name: "Carlos",
        lastname: "Longoni",
        age: 48,
        position: "encargado",
    },
    {
        name: "Santiago",
        lastname: "Luna",
        age: 25,
        position: "bolsero",
    },
    {
        name: "Esteban",
        lastname: "Perez",
        age: 35,
        position: "estibador",
    },
];

export function listaDeEmpleados(array) {
    array.forEach((element, index) => {
        console.log(`Empleado ${index + 1}
${element.name} ${element.lastname}
${element.age}
${element.position}`)
    })
};



let FrontEnd = {
    maquetado: "HTML5",
    estilo: "CSS3",
    lenguaje: "JavaScript",
    frameworks: "Angular",
};

//Métodos:
console.log(Object.entries(FrontEnd));
console.log((Object.entries(FrontEnd))[0][0]);
//El metodo entries arma un array de arrays con los atributos y valores que forman parte del objeto
/* Lo que imprime en consola:
(4) [Array(2), Array(2), Array(2), Array(2)]
0: (2) ['maquetado', 'HTML5']
1: (2) ['estilo', 'CSS3']
2: (2) ['lenguaje', 'JavaScript']
3: (2) ['frameworks', 'Angular']
length: 4
[[Prototype]]: Array(0)
*/

console.log(Object.keys(FrontEnd));
//El metodo key arma un array con los atributos del objeto
/* Lo que imprime en consola:
(4) ['maquetado', 'estilo', 'lenguaje', 'frameworks']
*/

console.log(Object.values(FrontEnd));
//El metodo key arma un array con los valores de las atributos del objeto
/* Lo que imprime en consola:
(4) ['HTML5', 'CSS3', 'JavaScript', 'Angular']
*/
// Imprimir mensaje a consola
console.log('Hola a todos!');

// Declarar variables
var myName = 'Yorch';
let unNumero = '1';
const otroNumero = 2;

// Formas de imprimir una variable
console.log('Hola', myName);
console.log(`Hola ${myName}`);

// Algo chistoso de Javascript... concatena valores numéricos con strings
console.log(unNumero + otroNumero);

// Declarar un arreglo
var myArray = [3, 6, 9, 12];

// Hay diferentes maneras de llamar a una función
function duplicarArreglo(theArray) {
    let helperArray = [];
    
    for(let i = 0; i < theArray.length; i++) {
        helperArray.push(theArray[i] * 2);
    }

    return helperArray;
}

const duplicarArreglo2 = function (theArray) {
    let helperArray = [];
    
    for(let i = 0; i < theArray.length; i++) {
        helperArray.push(theArray[i] * 2);
    }

    return helperArray;
}

const duplicarArreglo3 = (theArray) => {
    let helperArray = [];
    
    for(let i = 0; i < theArray.length; i++) {
        helperArray.push(theArray[i] * 2);
    }

    return helperArray;
}

let result1 = duplicarArreglo(myArray);
let result2 = duplicarArreglo2(myArray);
let result3 = duplicarArreglo3(myArray);

console.log(result1);
console.log(result2);
console.log(result3);

let result4 = myArray.map((item) => {return item * 2});
console.log(result4);
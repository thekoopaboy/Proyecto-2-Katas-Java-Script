//Completa esta función para que, al recibir dos números por argumento, te devuelva por consola el más alto de los dos.
let numberA = 5;
let numberB = 10;

greaterNumber(numberA, numberB);

function greaterNumber(numberOne , numberTwo) {
if(numberOne < numberTwo){
    console.log(numberTwo);
} else {
    console.log(numberOne);
};
};

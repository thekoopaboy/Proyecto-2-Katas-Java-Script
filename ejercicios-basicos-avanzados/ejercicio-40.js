//Crea una función llamada findArrayIndex que reciba como parametros un array de textos y un texto y devuelve la posición del array cuando el valor del array sea igual al valor del texto que enviaste como parámetro.

//Haz varios ejemplos y compruébalos.

function findArrayIndex(array, text) {
    for (const arrayIndex in array) {
        if (array[arrayIndex] == text){
             return arrayIndex;
        };
    };
        console.log(`El nombre ${text} no se encuentra en la lista array entregada.`)
        return;
    ;
};

const mainCharacters = [
  "Luke",
  "Leia",
  "Han Solo",
  "Chewbacca",
  "Rey",
  "Anakin",
  "Obi-Wan",
];

let pos = findArrayIndex(mainCharacters, "Chewbacca");
console.log(`${mainCharacters[pos]} se encuentra en la posición ${pos}.`);

pos = findArrayIndex(mainCharacters, "Luke");
console.log(`${mainCharacters[pos]} se encuentra en la posición ${pos}.`);

pos = findArrayIndex(mainCharacters, "Anakian");
console.log(`${mainCharacters[pos]} se encuentra en la posición ${pos}.`);

//Usando la función anterior benefíciate de poder conocer el indice del array para crear una función llamada removeItem que, pasándole un array y un texto como parámetros (los mismos parámetros que en el anterior ejercicio), llame a la función anteriormente creada findArrayIndex y obtén el indice para posteriormente usar la función de javascript .splice() para eliminar el elemento del array.
//Es decir, tienes que crear una función que elimine elementos del array y retorne el nuevo array sin el elemento, apoyándote en findArrayIndex.
//Finalmente retorna el array.
//De nuevo haz varios ejemplos para practicar y comprueba que funcionan correctamente.

function removeItem(array, texto) {
    let doesExist = false;

    for (const arrayPos in array) {
        if (array[arrayPos] == texto){
            doesExist = true;
        };        
    };

    if (doesExist == true){
        array.splice(findArrayIndex(array, texto), 1);
    }else{
        console.log(`El nombre ${texto} no se encuentra en la lista array entregada.`)
    }
    return array;
    ;
    
}

let mainCharactersNew = removeItem(mainCharacters, "Chewbacca");
console.log(mainCharactersNew);

mainCharactersNew = removeItem(mainCharacters, "Luke");
console.log(mainCharactersNew);

mainCharactersNew = removeItem(mainCharacters, "Anakian");
console.log(mainCharactersNew);

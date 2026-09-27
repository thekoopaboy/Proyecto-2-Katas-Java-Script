//Buscador de nombres: Crea una función que reciba por parámetro un array y el valor que desea comprobar que existe dentro de dicho array. Esta función comprueba si existe el elemento, y en caso de que exista nos devuelve un true y la posición de dicho elemento y por la contra un false.

//Puedes usar este array para probar tu función:
const names = [
  'Peter',
  'Steve',
  'Tony',
  'Natasha',
  'Clint',
  'Logan',
  'Xabier',
  'Bruce',
  'Peggy',
  'Jessica',
  'Marc'
];

let nameToBeFound = 'Jessica';
let nameFound = nameFinder(names, nameToBeFound);

if (nameFound == true){
console.log(`El nombre ${nameToBeFound} ha sido encontrado.`)
}else{
    console.log(`El nombre ${nameToBeFound} no ha sido encontrado.`)
};

nameToBeFound = 'Jessicaaaaa';
nameFound = nameFinder(names, nameToBeFound);

if (nameFound == true){
console.log(`El nombre ${nameToBeFound} ha sido encontrado.`)
}else{
    console.log(`El nombre ${nameToBeFound} no ha sido encontrado.`)
};

function nameFinder(nameList, nameToFind) {

    for(let i=0; i<nameList.length;i++){    
        if (nameToFind == nameList[i]){
           return true; 
        };
    };
    return false;
};

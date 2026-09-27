//Valores únicos: Crea una función que reciba por parámetro un array y compruebe si existen elementos duplicados, en caso que existan los elimina para retornar un array sin los elementos duplicados.

//Pista: puedes generar un nuevo array y devolverlo.

//Puedes usar este array para probar tu función:
const duplicates = [
  'sushi',
  'pizza',
  'burger',
  'potatoe',
  'pasta',
  'ice-cream',
  'pizza',
  'chicken',
  'onion rings',
  'pasta',
  'soda'
];

let noneDuplicates = removeDuplicates(duplicates);
console.log(noneDuplicates);

function removeDuplicates(list) {
    let newList = [];
    let itemDuplicated = false;
    let i = 0;
    let y = 0;
    for(i=0; i<list.length;i++){
        itemDuplicated = false;
        for(y=0; y<newList.length; y++){
            if (list[i] == newList[y]){
                itemDuplicated = true;
            };
        };
        if (itemDuplicated == false){
           newList.unshift(list[i]); 
        };
    };
    return newList.reverse();
};

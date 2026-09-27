//Contador de repeticiones: Crea una función que nos devuelva el número de veces que se repite cada una de las palabras que lo conforma.

//Por ejemplo, que devuelva: code:4, repeat: 1, eat: 1,...

//Podéis conformar el formato que queráis para la devolución del resultado siempre y cuando sea claro.

//Puedes usar este array para probar tu función:

const words = [
  'code',
  'repeat',
  'eat',
  'sleep',
  'code',
  'enjoy',
  'sleep',
  'code',
  'enjoy',
  'sleep',
  'code'
];
let objList = repeatCounter(words);
console.log(objList);

function repeatCounter(list){
    let objectList = {};
    let timesDuplicated = 0;
    let i = 0;
    let y = 0;

    for(i=0; i<list.length;i++){
        timesDuplicated = 0;
        
        for(y=0; y<list.length; y++){
            if (list[i] == list[y]){
                timesDuplicated += 1;
            };
        };

        objectList[list[i]] = {
            cantidad: timesDuplicated
        };
    
    };
    return objectList;
};
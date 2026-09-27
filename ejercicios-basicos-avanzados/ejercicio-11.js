//Calcular promedio mezclado: Crea una función que reciba por parámetro un array y cuando es un valor number lo sume y de lo contrario cuente la longitud del string y lo sume.

//Es un poco locura, pero podremos ejercitar nuestra lógica con este ejercicio.

//Puedes usar este array para probar tu función:
const mixedElements = [
  6,
  1,
  "Marvel",
  1,
  "hamburguesa",
  "10",
  "Prometeo",
  8,
  "Hola mundo",
];

averageWord(mixedElements);

function averageWord(numberList) {
    let total = 0;
    for (let i=0;i<numberList.length;i++){
        if(typeof(numberList[i])=='number'){
            total += numberList[i];
        }else{
            total += numberList[i].length;
        };
    };
    console.log(`El promedio mixto de la suma de los valores es: ${total/numberList.length}.`);
};

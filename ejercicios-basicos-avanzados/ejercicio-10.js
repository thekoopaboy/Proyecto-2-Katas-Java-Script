//Calcular un promedio es una tarea extremadamente común, así que prueba a implementar esa funcionalidad en la siguiente función.

//Puedes usar este array para probarla:
const numbers2 = [12, 21, 38, 5, 45, 37, 6];

average(numbers2);

function average(numberList) {
    let total = 0;
    for (let i=0;i<numberList.length;i++){
        total += numberList[i];
    };
    console.log(`El promedio de la suma de los valores es: ${total/numberList.length}.`);
};

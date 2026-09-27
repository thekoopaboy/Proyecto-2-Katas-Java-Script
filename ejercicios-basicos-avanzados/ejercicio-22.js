//Usa un for para remplazar todas las comidas que no sean veganas con las frutas del array de frutas.

//Recuerda no usar frutas duplicadas.

//Finalmente, imprime el array resultante.

const fruits = ["Strawberry", "Banana", "Orange", "Apple"];

const foodSchedule = [
  { name: "Heura", isVegan: true },
  { name: "Salmon", isVegan: false },
  { name: "Tofu", isVegan: true },
  { name: "Burger", isVegan: false },
  { name: "Rice", isVegan: true },
  { name: "Pasta", isVegan: true },
];

const newFoodSchedule = [];

for (const foodScheduleData of foodSchedule) {
    if(foodScheduleData.isVegan == true){
        newFoodSchedule.push(foodScheduleData);
    }else{
        if(fruits.length>0){
            newFoodSchedule.push({name: fruits[0], isVegan: true});
            fruits.shift();
        }else{
            newFoodSchedule.push(foodScheduleData);
        };
    };
};

console.log(newFoodSchedule);
console.log(fruits);
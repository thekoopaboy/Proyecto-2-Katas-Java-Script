//Usa un bucle y dos condiciones para imprimir por consola el nombre de los usuarios que sean menor de edad precedidos del texto "Usuarios menores de edad:" y otro que imprima a los usuarios mayores de edad, precedido del texto "Usuarios mayores de edad:".

const users = [
  { name: "Tony", years: 43 },
  { name: "Peter", years: 18 },
  { name: "Natasha", years: 14 },
  { name: "Bruce", years: 32 },
  { name: "Khamala", years: 16 },
];

const usersMayores = [];
const usersMenores = [];

for (const usersdata of users) {
    if(usersdata.years < 18){
        usersMenores.push(usersdata.name);
    }else{
        usersMayores.push(usersdata.name);
    };
};

console.log(`Usuarios menores de edad: ${usersMenores}`);
console.log(`Usuarios mayores de edad: ${usersMayores}`);

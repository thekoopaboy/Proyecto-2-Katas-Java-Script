//Usa un bucle para crear 3 arrays de películas filtrados por categorías.

//Pelicula pequeña -> menos de 100 minutos, película mediana -> más de 100 minutos y menos de 200 y pelicula grande -> más de 200 minutos.

//Imprime cada array por consola.

peliculaPequeña=[];
peliculaMediana=[];
peliculaGrande=[];

const movies = [
  { name: "Titan A.E.", durationInMinutes: 130 },
  { name: "Nightmare before Christmas", durationInMinutes: 225 },
  { name: "Inception", durationInMinutes: 165 },
  { name: "The Lord of the Rings", durationInMinutes: 967 },
  { name: "Star Wars: A New Hope", durationInMinutes: 214 },
  { name: "Terminator", durationInMinutes: 140 },
  { name: "Spirited Away", durationInMinutes: 80 },
  { name: "The Matrix", durationInMinutes: 136 },
  { name: "Amélie", durationInMinutes: 110 },
  { name: "Eternal Sunshine of the Spotless Mind", durationInMinutes: 108 },
];

for (const moviesData of movies) {
    if (moviesData.durationInMinutes < 100){
        peliculaPequeña.push(moviesData.name);
    } if (moviesData.durationInMinutes > 200) {
        peliculaGrande.push(moviesData.name);
    } else {
        peliculaMediana.push(moviesData.name);
    };
};

console.log(`Las películas con menos de 100 minutos son: ${peliculaPequeña}`);
console.log(`Las películas con más de 200 minutos son: ${peliculaMediana}`);
console.log(`Las películas con 100 o más y menos de 201 minutos son: ${peliculaGrande}`);

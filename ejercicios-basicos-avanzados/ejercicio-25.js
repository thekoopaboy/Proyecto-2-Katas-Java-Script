//Dada una lista de películas, cuenta cuántas son de antes del año 2000 y cuántas son posteriores, utilizando un bucle.

//Imprime ambos conteos por consola.

const movies = [
  { title: 'The Matrix', releaseYear: 1999 },
  { title: 'Star Wars: Episode IV – A New Hope', releaseYear: 1977 },
  { title: 'Inception', releaseYear: 2010 },
  { title: 'Jurassic Park', releaseYear: 1993 },
  { title: 'The Shawshank Redemption', releaseYear: 1994 },
  { title: 'Pulp Fiction', releaseYear: 1994 },
  { title: 'Avatar', releaseYear: 2009 },
  { title: 'The Dark Knight', releaseYear: 2008 },
  { title: 'Fight Club', releaseYear: 1999 },
  { title: 'Forrest Gump', releaseYear: 1994 }
];

// Añade tu código de bucle aquí
let peliculasAnteriores2000 = 0;
let peliculasPosteriores2000 = 0;

for (const moviesData of movies) {
    if(moviesData.releaseYear < 2000){
        peliculasAnteriores2000 += 1;
    }else{
        peliculasPosteriores2000 += 1;
    };
}

console.log(`Hay ${peliculasAnteriores2000} películas anteriores al 2000.`);
console.log(`Hay ${peliculasPosteriores2000} películas posteriores al 2000.`);
/* 4.1 Dado el siguiente array, utiliza .filter() para generar un nuevo array
con los valores que sean mayor que 18 */
let ages = [22, 14, 24, 55, 65, 21, 12, 13, 90];
let filterAges = ages.filter(age => age>18);
console.log(filterAges);

/* 4.2 Dado el siguiente array, utiliza .filter() para generar un nuevo array
con los valores que sean par. */
ages = [22, 14, 24, 55, 65, 21, 12, 13, 90];
filterAges = ages.filter(age => age%2 === 0);
console.log(filterAges);

/* 4.3 Dado el siguiente array, utiliza .filter() para generar un nuevo array
con los streamers que tengan el gameMorePlayed = 'League of Legends'. */
let streamers = [
	{name: 'Rubius', age: 32, gameMorePlayed: 'Minecraft'},
	{name: 'Ibai', age: 25, gameMorePlayed: 'League of Legends'},
	{name: 'Reven', age: 43, gameMorePlayed: 'League of Legends'},
	{name: 'AuronPlay', age: 33, gameMorePlayed: 'Among Us'}
];
const streamersLol = streamers.filter(gamePlayed => gamePlayed.gameMorePlayed === 'League of Legends');
console.log(streamersLol);

/* 4.4 Dado el siguiente array, utiliza .filter() para generar un nuevo array
con los streamers que incluyan el caracter 'u' en su propiedad .name. Recomendamos
usar la funcion .includes() para la comprobación. */
streamers = [
	{name: 'Rubius', age: 32, gameMorePlayed: 'Minecraft'},
	{name: 'Ibai', age: 25, gameMorePlayed: 'League of Legends'},
	{name: 'Reven', age: 43, gameMorePlayed: 'League of Legends'},
	{name: 'AuronPlay', age: 33, gameMorePlayed: 'Among Us'}
];

const streamersFilter2 = streamers.filter(uName => uName.name.includes('u'));
console.log(streamersFilter2);


/* 4.5 utiliza .filter() para generar un nuevo array con los streamers que incluyan
el caracter 'Legends' en su propiedad .gameMorePlayed. Recomendamos usar la funcion
.includes() para la comprobación.
Además, pon el valor de la propiedad .gameMorePlayed a MAYUSCULAS cuando
.age sea mayor que 35. */

const streamersFilter3 = streamers.filter(gamePlayed => {
	if (gamePlayed.gameMorePlayed.includes('Legends') && gamePlayed.age > 35){
		gamePlayed.gameMorePlayed = gamePlayed.gameMorePlayed.toUpperCase();
		return gamePlayed;
	} else if (gamePlayed.gameMorePlayed.includes('Legends') && gamePlayed.age < 35){
		return gamePlayed;
	}
	} );
console.log(streamersFilter3);
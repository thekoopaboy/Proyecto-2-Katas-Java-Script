/* 1.1 Basandote en el array siguiente, crea una lista ul > li
dinámicamente en el html que imprima cada uno de los paises.*/
let countries = ['Japón', 'Nicaragua', 'Suiza', 'Australia', 'Venezuela']; 

let newUl = document.createElement("ul");
newUl.className = "Paises";
document.body.appendChild(newUl);

for (const countriesIndex in countries) {
	let newLi = document.createElement("li");
	newLi.textContent = countries[countriesIndex];
	newUl.appendChild(newLi);	
}

/* 1.2 Elimina el elemento que tenga la clase .fn-remove-me. */
const eliminarElementos = document.querySelectorAll(".fn-remove-me");
eliminarElementos.forEach(eliminar => eliminar.remove());

/*1.3 Utiliza el array para crear dinamicamente una lista ul > li de elementos en el div de html con el atributo data-function="printHere".*/
const cars = ['Mazda 6', 'Ford fiesta', 'Audi A4', 'Toyota corola'];
const whereToPlace = document.querySelector('div[data-function="printHere"]');

newUl = document.createElement("ul");
newUl.className = "Coches";
whereToPlace.appendChild(newUl);

for (const carsIndex in cars) {
	let newLi = document.createElement("li");
	newLi.textContent = cars[carsIndex];
	newUl.appendChild(newLi);	
};

/* 1.4 Crea dinamicamente en el html una serie de divs que contenga un elemento
h4 para el titulo y otro elemento img para la imagen. */
countries = [
	{title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=1'},
	{title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=2'},
	{title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=3'},
	{title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=4'},
	{title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=5'}
];

for (const countriesIndex in countries){
	let newDiv = document.createElement("div");
	let titleH4 = document.createElement("h4");
	let imgUrlDest = document.createElement("img");
	
	titleH4.textContent = countries[countriesIndex].title;
	imgUrlDest.src = countries[countriesIndex].imgUrl;
	
	newDiv.appendChild(titleH4);
	newDiv.appendChild(imgUrlDest);
	document.body.appendChild(newDiv);
};

/* 1.5 Basandote en el ejercicio anterior. Crea un botón que elimine el último
elemento de la serie de divs. */

let buttonNew = document.createElement("button");
buttonNew.textContent = "Eliminar .div";
document.body.appendChild(buttonNew);

const removeLastDiv = () => {

	const input = document.querySelectorAll("div");
	if (input.length > 0) {
	input[input.length-1].remove();

};
};

buttonNew.addEventListener("click", removeLastDiv);


/*1.6 Basandote en el ejercicio anterior. Crea un botón para cada uno de los divs que elimine ese mismo elemento del html.*/

const queryDivs = document.querySelectorAll("div");

for (const div of queryDivs) {
	const deleteBtn = document.createElement("button");
	deleteBtn.textContent = "Eliminame";
	deleteBtn.addEventListener("click", () => div.remove());
	div.appendChild(deleteBtn);
};

/* 2.1 Inserta dinamicamente en un html un div vacio con javascript. */
let nuevoDiv = document.createElement("div");
document.body.appendChild(nuevoDiv);

/* 2.2 Inserta dinamicamente en un html un div que contenga una p con javascript. */
nuevoDiv = document.createElement("div"); 
let p = document.createElement("p");

document.body.appendChild(nuevoDiv);
nuevoDiv.appendChild(p);

/* 2.3 Inserta dinamicamente en un html un div que contenga 6 p utilizando un loop con javascript. */
nuevoDiv = document.createElement("div");
document.body.appendChild(nuevoDiv);
for (let i = 1; i <= 6; i++) {
    let p = document.createElement("p");
    nuevoDiv.appendChild(p);        
}
/* 2.4 Inserta dinamicamente con javascript en un html una p con el
	texto 'Soy dinámico!'. */
p = document.createElement("p");
p.textContent = 'Soy dinámico!';
document.body.appendChild(p);

/* 2.5 Inserta en el h2 con la clase .fn-insert-here el texto 'Wubba Lubba dub dub'. */
const newH2 = document.querySelector(".fn-insert-here");
newH2.textContent = 'Wubba Lubba dub dub';

/* 2.6 Basandote en el siguiente array crea una lista ul > li con
los textos del array. */
const apps = ['Facebook', 'Netflix', 'Instagram', 'Snapchat', 'Twitter'];
const makeUl = document.createElement("ul");
document.body.appendChild(makeUl);

for(let i = 0; i <5; i++){
let makeLi = document.createElement("li");
makeLi.textContent = apps[i];
makeUl.appendChild(makeLi);
};

/* 2.7 Elimina todos los nodos que tengan la clase .fn-remove-me */
const elementosRemove = document.querySelectorAll(".fn-remove-me");
elementosRemove.forEach(eliminar => eliminar.remove());

/* 2.8 Inserta una p con el texto 'Voy en medio!' entre los dos div.
Recuerda que no solo puedes insertar elementos con appendChild. */
let busqPrimerDiv = document.querySelector("div");
p = document.createElement("p");
p.textContent = 'Voy en medio!';
busqPrimerDiv.after(p);

/* 2.9 Inserta p con el texto 'Voy dentro!', dentro de todos los div con la clase .fn-insert-here */
const busqAllDivs = document.querySelectorAll("div.fn-insert-here");

for (const index in busqAllDivs) {
    p = document.createElement("p");
    p.textContent = 'Voy en medio!';
    busqAllDivs[index].appendChild(p);   
}
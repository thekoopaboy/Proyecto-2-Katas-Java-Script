/* Accederemos a los datos de una API pública de Game Of Thrones, queremos un select con todos los nombres de los personajes para que cuando un usuario seleccione un nombre salga su imagen en el medio de la página, algo así: */

/* Para obtener los datos con los que jugar necesitaremos estudiar la documentación de la API y buscar la url necesaria para los datos que queramos, para este paso os pedimos que de verdad os esforcéis buscándola en la documentación, queremos la url que me traiga los datos de todos los personajes de GOT, sin embargo, en la slide siguiente tendréis la url directa de esos datos.
 */

fetch('https://thronesapi.com/api/v2/Characters/')
.then((response)=>{
    return response.json();
})
.then((data)=> {
    personajes = data;
    const listaPersonajes = document.querySelector('select[id="character-list"]');
    const imgDest = document.body.querySelector('img[class="character-image"]');
    imgDest.style.height = "250px";
    imgDest.style.width = "250px";
 
    for (const tablaIndex in data) {
        const option = document.createElement('option');
        option.id = data[tablaIndex].id;
        option.value = data[tablaIndex].imageUrl;
        option.textContent = data[tablaIndex].firstName;
        listaPersonajes.appendChild(option);
    }

    imgDest.src = '';
    console.log(imgDest);

    listaPersonajes.addEventListener('input', () => imgDest.src = listaPersonajes.value);

})
.catch((error) => {

}
);


/* URL de la documentación (para que indaguéis): https://thronesapi.com/

Esta sería la URL final (la que deberéis utilizar para vuestra petición):

https://thronesapi.com/api/v2/Characters */
//Crea una función que reciba un array de objetos representando a varios miembros de los X-Men y su año de aparición. La función debe retornar el miembro más antiguo.

//Utiliza este array para probar tu función.

const xMen = [
  { name: 'Wolverine', year: 1974 },
  { name: 'Cyclops', year: 1963 },
  { name: 'Storm', year: 1975 },
  { name: 'Phoenix', year: 1963 },
  { name: 'Beast', year: 1963 },
  { name: 'Gambit', year: 1990 },
  { name: 'Nightcrawler', year: 1975 },
  { name: 'Magneto', year: 1963 },
  { name: 'Professor X', year: 1963 },
  { name: 'Mystique', year: 1978 }
];

let returnValue;

returnValue = findOldestXMen(xMen);

console.log(returnValue);

function findOldestXMen(xMen) {
  xMen.sort((a,b)=> a.year-b.year);
  let cantidadViejetes = 0;
  let edadMasAntigua = xMen[0].year;
  let viejetes = [];

  for (const xMenData of xMen) {
    if (xMenData.year == edadMasAntigua){
      cantidadViejetes += 1;
    };
  };

  if (cantidadViejetes == 1){
    return `El X-Men más antiguo es: ${xMen[0].name}, que apareció en ${xMen[0].year}.`;
  };

  if (cantidadViejetes > 1) {

    for (let i=0; i < cantidadViejetes; i++){
      viejetes.push(xMen[i].name);
    };
    
    return `Los X-Men más antiguos son: ${viejetes}, que aparecieron en ${xMen[0].year}.`;
  };

  if (cantidadViejetes == 0) {
    return `No existen X-Men.`;
  };

};

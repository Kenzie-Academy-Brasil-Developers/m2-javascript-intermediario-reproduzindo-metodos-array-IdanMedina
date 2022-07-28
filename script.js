// Método Map ---------

const arrayMap = [1, 2, 3, 4, 5]; //esse é o array que você terá que iterar

// função callback
// Ela apenas imprime o elemento na posição do index e de que array ele veio
function callbackMap(element, index, array) {
  return `Número ${element} no index: ${index}, veio desse array: ${array}`;
}
//console.log(callbackMap(1, 0, arrayMap))
function map(array, callback) {
  let newArray = []
  for(let i = 0; i < array.length; i++){
    /* let element = array[i];
    let index = i;*/
    let result = callback(array[i], i, array)
    newArray.push(result)
   //return callback(array[i], i, array)
  }
  return newArray
}

console.table(map(arrayMap, callbackMap));

//Método Filter ---------

const arrayFilter = [1, 2, 3, 4, 5]; //esse é o array que você terá que iterar

// função callback
// Ela apenas imprime o elemento que for maior que 2
function callbackFilter(element, index, array) {
  if (element > 2 && index && array.length > 2) {
    return element;
  }
}
//console.log(callbackFilter(1,0,arrayFilter))
const newArray = []
function filter(array, callback) {
  for(let i = 0; i < array.length; i++){
    let result = callback(array[i], i, array)
    if (result){
      newArray.push(result)
    }
    
  }
  return newArray
}

console.log(filter(arrayFilter, callbackFilter));

//Método Reduce ---------

const arrayReduce = [1, 2, 3, 4, 5]; //esse é o array que você terá que iterar

// função callback
// Ela apenas soma os valores, como um acumulador mesmo
function callbackReduce(acumulator, valorAtual) {
  return acumulator + valorAtual;
}

function reduce(array, callback, initialValue = 0) {
  let incrementador = []
  let acumulador = initialValue
  
  for(let i = 0; i < array.length; i++){
    acumulador = callback(acumulador, array[i])
    //console.log(acumulador)
  }
  incrementador.push(acumulador)
  return incrementador
}


 console.log(reduce(arrayReduce, callbackReduce));
 console.log(reduce(arrayReduce, callbackReduce, 50));

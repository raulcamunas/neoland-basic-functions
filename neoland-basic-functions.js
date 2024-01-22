// EJERCICIO 1

function numeroMayor(numeroUno, numeroDos) {
    if (numeroUno > numeroDos) {
      return numeroUno;
    } else {
      return numeroDos;
    }
  }

  var resultado = numeroMayor(5, 10);
  console.log(resultado);
  

// EJERCICIO 2

const avengers = ['Hulk', 'Thor', 'IronMan', 'Captain A.', 'Spiderman', 'Captain M.'];

function findLongestWord(words) {
  if (words.length === 0) {
    return null;
  }

  let palabraMasLarga = words[0];

  for (let i = 1; i < words.length; i++) {
    if (words[i].length > palabraMasLarga.length) {
      palabraMasLarga = words[i];
    }
  }

  return palabraMasLarga;
}

const palabraMasLarga = findLongestWord(avengers);
console.log(palabraMasLarga); 


// EJERCICIO 3

const numbers = [1, 2, 3, 5, 45, 37, 58];

function sumAll(arrayDeNumeros) {
  let suma = 0;

  for (let i = 0; i < arrayDeNumeros.length; i++) {
    suma += arrayDeNumeros[i];
  }
  return suma;
}

const resultadoSuma = sumAll(numbers);
console.log(resultadoSuma); 


// EJERCICIO 4

const numbers2 = [12, 21, 38, 5, 45, 37, 6];

function average(arrayDeNumeros2){
    if (arrayDeNumeros2 === 0){
    return null
    }

    let suma = 0

    for (let i = 0; i < arrayDeNumeros2.length; i++){
        suma += arrayDeNumeros2[i]
    }
    console.log(suma)
    let promedio = suma / arrayDeNumeros2.length

    return promedio
}

const resultadoPromedio = average(numbers2)
console.log(resultadoPromedio)


// EJERCICIO 5

const mixedElements = [6, 1, 'Rayo', 1, 'vallecano', '10', 'upgrade', 8, 'hub'];

function averageWord(promedio) {
  let sumaLongitudes = 0;
  let sumaNumero = 0;

  for (let i = 0; i < promedio.length; i++) {
    if (typeof promedio[i] === 'number') {
      sumaLongitudes += promedio[i];
    } else if (typeof promedio[i] === 'string') {
      sumaLongitudes += promedio[i].length;
      sumaNumero++;
    }
  }
  if (sumaNumero === 0) {
    return 0;
  }
  return sumaLongitudes / sumaNumero;
}

const result2 = averageWord(mixedElements);
console.log(result2);

// EJERCICIOS 6

const duplicates = [
    'sushi',
    'pizza',
    'burger',
    'potatoe',
    'pasta',
    'ice-cream',
    'pizza',
    'chicken',
    'onion rings',
    'pasta',
    'soda'
  ];

  function removeDuplicates(param) {
    const result = [];

    for (const element of param) {
      if (!result.includes(element)) {
        result.push(element);
      }
    }

    return result;
  }

  const uniqueArray = removeDuplicates(duplicates);
  console.log(uniqueArray);

// EJERCICIO 7

const nameFinder = [
    'Peter',
    'Steve',
    'Tony',
    'Natasha',
    'Clint',
    'Logan',
    'Xabier',
    'Bruce',
    'Peggy',
    'Jessica',
    'Marc'
  ];

  function finderName(arr, target) {
    const position = arr.indexOf(target);
    const found = position !== -1;

    return { found, position };
  }

  const result4 = finderName(nameFinder, 'Logan');
  console.log(result4);


  // EJERCICIO 8

  const counterWords = [
    'code',
    'repeat',
    'eat',
    'sleep',
    'code',
    'enjoy',
    'sleep',
    'code',
    'enjoy',
    'upgrade',
    'code'
  ];

  function repeatCounter(arr) {
    const wordCount = {};

    for (const word of arr) {
      if (wordCount[word]) {
        wordCount[word]++;
      } else {
        wordCount[word] = 1;
      }
    }

    return wordCount;
  }

  const result5 = repeatCounter(counterWords);
  console.log(result5);

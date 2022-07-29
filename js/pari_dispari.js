// console.log('yo')

let pariDispari, numeroDigitato
// Faccio digitare il numero all'utente
do {
    pariDispari = prompt('Pari o Dispari').toLowerCase().trim();
    console.log(pariDispari)
} while (pariDispari !== 'pari' && pariDispari !== 'dispari')

do {
    numeroDigitato = parseInt(prompt('Digita un numero compreso tra 1 e 5'));
} while (numeroDigitato > 5 || numeroDigitato < 1 || isNaN(numeroDigitato))
// const numeroDigitato = parseInt(prompt('Digita un numero compreso tra 1 e 5'));

console.log(numeroDigitato, pariDispari)

// Constrollo per vedere se il mio utente ha digitato un numero compreso tra 1 e 5
// Creo un array che ha
//  const arraycheck = [1, 2, 3, 4, 5]
//  console.log(arraycheck)
//  for ( let i = 0; i < arraycheck.length; i++) {
//      if (numeroDigitato !== arraycheck[i]) {
//         alert ('Digita un numero Valido')
//         break
//         } 
// }


// Costanti che ho stabilito precedentemente per il mio minimo e il mio massimo
const MIN = 1
const MAX = 5
// Funzione per creare numeri random da 1 a 5
function randomNumber(min,max) {
    if(isNaN(min) || isNaN(max)) {
        alert('Inserisci Numeri validi!')
        return
    }
    return Math.floor(Math.random() * (max - min + 1)) + 1
}
// Numero del pc invocando la funzione creata
const numberPc = randomNumber(MIN,MAX);
console.log(numberPc)
// Sommo i due numeri ottenuti
num = numeroDigitato + numberPc

function isEven(numero) {
   return numero % 2 === 0
}

console.log(isEven(num))
// metto il risultato true o false dentro una funzione
const risultato = isEven(num);

if (((risultato === true) && (pariDispari === 'pari')) || ((risultato === false) && (pariDispari === 'dispari')))  {
    alert('Hai vinto')
} else {
    alert ('Hai perso')
}







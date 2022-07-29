// console.log('yo');
// Chiedo la parola all'utente
const parolaPalindroma = prompt('Digita una parola');

function isPalindroma(parola) {
// trasformo la parola tutto in minuscolo
parola = parola.toLowerCase();
console.log(parola);
//Prendo ogni lettera singolarmente e le metto in un array
const lettereParola = parola.split('');
console.log(lettereParola);
// Confronto ogni lettera dell'array
for (let i = 0; i < lettereParola.length; i++) {
    console.log(lettereParola[i], lettereParola[(lettereParola.length - 1) - i])
    if (lettereParola[i] !== lettereParola[(lettereParola.length - 1) - i]) {
        return false;
    } else {
        return true;
    }
}}

console.log(isPalindroma(parolaPalindroma));



    
   
    
    
    







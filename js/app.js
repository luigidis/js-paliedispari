console.log('yo');
// Chiedo la parola all'utente
const parolaPalindroma = prompt('Digita una parola');
// console.log(parolaPalindroma);
// console.log(typeof parolaPalindroma)
function isPalindroma(parola) {
    //Prendo ogni lettera singolarmente e le metto in un array
    const lettereParola = parola.split('');
    console.log(lettereParola);
    //Inverto l'array creato e lo metto in un'altro array invertito
    const lettereInvertite = lettereParola.reverse('');
    console.log(lettereInvertite);
    // console.log(typeof lettereInvertite);
    // Confronto ogni lettera dell'array
    for (let i = 0; i < lettereParola.length; i++) {
        if (lettereParola[i] !== lettereInvertite[i]) {
            return false
        }
    }
    return true
}
    

console.log(isPalindroma(parolaPalindroma))





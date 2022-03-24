//email

let email = prompt("inserisci la tua email");
console.log(email);

alert("Attendi che verifichiamo se puoi accedere");

let listaEmail = ["matteo@gmail.com", "fabio@gmail.com", "pietro@gmail.com", "anna@gmail.com"];
console.log(listaEmail.length);

let emailTrovata = false


for (let i = 0; i < listaEmail.length; i= i+1){
    console.log(listaEmail[i]);
    if (listaEmail[i] == email) {
        emailTrovata = true
    }
    
}

if (emailTrovata == true){
    alert("indirizzo email corretto");
}
else {
    alert("indirizzo email sbagliato");
}

//gioco del dado

let max = 6
let min = 1

let gioctore1 = Math.floor(Math.random() * (max - min + 1) + min);
let gioctore2 = Math.floor(Math.random() * (max - min + 1) + min);

Math.floor(Math.random() * (max - min + 1) + min);


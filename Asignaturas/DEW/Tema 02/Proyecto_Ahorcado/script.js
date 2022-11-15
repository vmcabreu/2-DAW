let palabra = "Parque Jurasico";
let palabras = palabra.toUpperCase().split(" ");
let incognita = [];
let letras = [];
let vidas = 3;
let pista = palabra.replaceAll(/\w\d/g,"_");

const pistas = document.getElementById("palabra");
pistas.addEventListener("input", mostrarLetra);
const victoria = document.getElementById("victoria");
pistas.addEventListener("input",comprobarVictoria);

function desglosePalabra() {
  for (let i = 0; i < palabras.length; i++) {
    for (let j = 0; j < palabras[i].length; j++) {
      letras.push(palabras[i].charAt(j));
      incognita.push("_");
    }
    incognita.push(" ");
    letras.push(" ");
  }
  mostrarLetra();
  document.getElementById("empezar").classList.add("ocultar");
  document.getElementById("teclado").classList.remove("ocultar");
  console.log(letras);
}

function mostrarLetra() {
  pista = "";
  incognita.forEach((element) => {
    pista += element;
    document.getElementById("palabra").innerHTML = pista;
    comprobarVictoria();
    
  });
}

function comprobarLetra(letra) {
  for (let i = 0; i < letras.length; i++) {
    if (letra == letras[i]) {
        if (letras[i-1] == " " || i==0) {
            incognita[i] = letra.toUpperCase();
            mostrarLetra();
        }else{
            incognita[i] = letra.toLowerCase();
            mostrarLetra();
        }
        document.getElementById(letra).classList.add("transparente")
    }
  }
}


function comprobarVictoria(){
    if (pistas.textContent == palabra) {
        document.getElementById("victoria").innerHTML = "Has ganado"
        
    }
}
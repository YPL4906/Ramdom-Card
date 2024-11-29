/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here
  //arrays de la carta
  let baraja = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, "J", "Q", "K"];
  let palos = ["♠", "♣", "♥", "♦"];
  //Funcion que genera numero aleatorio
  function generarNumero() {
    let barajaIndex = Math.floor(Math.random() * baraja.length);
    return `${baraja[barajaIndex]}`;
  }
  //Funcion que genera palo aleatorio
  function generarPalo() {
    let palosIndex = Math.floor(Math.random() * palos.length);
    return `${palos[palosIndex]}`;
  }
  //Creo una constante palo de la funcion anterior para trabajar individualmente en el HMTL y CSS
  const palo = generarPalo();
  document.getElementById("palo-superior").innerText = palo;
  document.getElementById("palo-inferior").innerText = palo;

  document.getElementById("numero").textContent = generarNumero();

  //seleccion del div carta
  const carta = document.querySelector(".carta");
  const paloSuperior = document.querySelector(".palo.superior");
  const paloInferior = document.querySelector(".palo.inferior");

  // Modificaciones en el con el DOM
  carta.setAttribute("data-palo", palo);
  paloSuperior.innerText = palo;
  paloInferior.innerText = palo;
};

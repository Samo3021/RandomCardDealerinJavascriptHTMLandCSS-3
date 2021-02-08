/* eslint-disable */

import "./style.css";

window.onload = function() {
  let color = ["red", "black"];
  let pinta = ["\u2660", "\u2663", "\u2665", "\u25ca"];
  let numeros = [
    "A",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "10",
    "J",
    "Q",
    "K"
  ];
  var rdm_pinta = Math.floor(Math.random() * pinta.length);
  var numero = Math.floor(Math.random() * numeros.length);
  document.querySelector("#number").innerHTML =
    "<p id=" + "centro" + ">" + numeros[numero] + "</p>";
  document.querySelector("#superior").innerHTML =
    "<p style=color: " + " id=" + "arriba" + ">" + pinta[rdm_pinta] + "</p>";
  document.querySelector("#inferior").innerHTML =
    "<p style=color: " + " id=" + "abajo" + ">" + pinta[rdm_pinta] + "</p>";
};

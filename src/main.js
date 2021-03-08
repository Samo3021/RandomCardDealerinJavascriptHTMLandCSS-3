/* eslint-disable */

import "./style.css";

window.onload = function() {
  function content() {
    const tag = ["Hearts", "Diamonds", "Spades", "Clubs"];
    const values = [
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
    const card = []; /* Array que guarda los dos valores*/
    for (let index = 0; index < tag.length; index++) {
      for (let i = 0; i < values.length; i++) {
        const value = values[i];
        const suit = tag[index];
        card.push({ value, suit });
      }
    }
    return card;
  }

  /*Function that generates a random of both numbers and tags*/
  function randomCard(cards) {
    const allCombinations = Math.floor(Math.random() * 52);
    const cardValue =
      cards[allCombinations]
        .value; /* it's .value because 'value' is a constant*/
    const tag =
      cards[allCombinations].suit; /* it's .suit because 'suit' is a constant*/
    let figure;
    tag === "Diamonds"
      ? (figure = "&diams;")
      : (figure =
          "&" +
          tag.toLowerCase() +
          ";"); /*Give the shape of the card figures */
    const card = document.createElement("DIV");
    card.classList.add("card", tag.toLowerCase());
    card.innerHTML =
      '<span class="card-value-suit top">' +
      figure +
      "</span>" +
      '<span class="card-suit">' +
      cardValue +
      "</span>" +
      '<span class="card-value-suit bot">' +
      figure +
      "</span>";
    document.body.appendChild(card);
  }

  const cards = content();
  randomCard(cards);
};

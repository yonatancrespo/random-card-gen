/* eslint-disable */
import "./style.css";
import "bootstrap";

window.onload = function() {};
const values = [
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
  "K",
  "A"
];
const suits = ["&hearts;", "&spades;", "&clubs;", "&diams;"];

function shuffle(array) {
  for (let i = array.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

function deal() {
  let value = values[Math.floor(Math.random() * values.length)];
  let suit = suits[Math.floor(Math.random() * suits.length)];
  document.querySelector(".card-value").innerHTML = value;
  document.querySelector(".card-suit").innerHTML = suit;
  document.querySelector("#deal-button").addEventListener("click", deal);
}

deal();

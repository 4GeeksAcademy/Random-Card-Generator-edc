/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  document.querySelector(".btn").addEventListener("click", function() {
    generateCard();
  });
};
function generateCard() {
  const ranks = [2, 3, 4, 5, 6, 7, 8, 9, 10, "J", "Q", "K", "A"];
  let suits = ["♦", "♣", "♥", "♠"];
  let rankIndex = Math.floor(Math.random() * ranks.length);
  let suitsIndex = Math.floor(Math.random() * suits.length);

  if (suits[suitsIndex] == "♦" || suits[suitsIndex] == "♥") {
    document.querySelector(".top-suit").style.color = "red";
    document.querySelector(".bottom-suit").style.color = "red";
  } else {
    document.querySelector(".top-suit").style.color = "black";
    document.querySelector(".bottom-suit").style.color = "black";
  }
  document.querySelector(".top-suit").innerHTML = suits[suitsIndex];
  document.querySelector(".bottom-suit").innerHTML = suits[suitsIndex];
  document.querySelector(".number").innerHTML = ranks[rankIndex];
}

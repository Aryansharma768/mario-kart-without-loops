// TITLE
"use strict";

//global Variables
let numbanana = 0;
let numshell = 0;
let numstar = 0;
let numgolden = 0;
let numbullet = 0;

//event listeners
document.getElementById("main-img").addEventListener("click", Generate);

function Generate() {
  let randNum = Math.random();
  
  if (randNum < 0.85) {
    let randbanana = Math.random();

    if (randNum > 0.75) {
      console.log("Banana");
      numbanana++;
      document.getElementById("Banana").innerHTML = numbanana;
      document.getElementById("results").innerHTML +=
        '<img src="images/banana.jpg" height=80px>';
    } else if (randNum > 0.5) {
      console.log("shell");
      numshell++;
      document.getElementById("Shell").innerHTML = numshell;
      document.getElementById("results").innerHTML +=
        '<img src="images/download.jpg" height=80px>';
    } else if (randNum > 0.35) {
      console.log("star");
      numstar++;
      document.getElementById("Star").innerHTML = numstar;
      document.getElementById("results").innerHTML +=
        '<img src="images/star.jpg" height=80px>';
    } else if (randNum > 0.20) {
      console.log("golden mushroom");
      numgolden++;
      document.getElementById("Gold").innerHTML = numgolden;
      document.getElementById("results").innerHTML +=
        '<img src="images/gold.jpg" height=80px>';
    } else {
      console.log("bullet");
      numbullet++;
      document.getElementById("Bullet").innerHTML = numbullet;
      document.getElementById("results").innerHTML +=
        '<img src="images/bullet.jpg" height=80px>';
    }
  }
}

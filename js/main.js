const frame = document.querySelector("section");
const boxs = document.querySelectorAll("article");
const puase = document.querySelectorAll(".pause");
const play = document.querySelectorAll(".play");
const reload = document.querySelectorAll(".reload");
const prev = document.querySelector(".prev");
const next = document.querySelector(".next");
const deg = 45;
let i = 0;

for (el of boxs){
    el.style.transform = `rotate(${deg * i}deg) translateY(-100vh)`;
    el.querySelector(".pic").style.backgroundImage = `url(img/member${i + 1}.jpg)`;
    i++;
}
const frame = document.querySelector(".frame");
const boxs = document.querySelectorAll("article");
const puase = document.querySelectorAll(".pause");
const play = document.querySelectorAll(".play");
const reload = document.querySelectorAll(".reload");
const prev = document.querySelector(".prev");
const next = document.querySelector(".next");
const deg = 45;
let i = 0;
let num = 0;
const len = boxs.length - 1;
let active = 0;

for (el of boxs){
    el.style.transform = `rotate(${deg * i}deg) translateY(-100vh)`;
    el.querySelector(".pic").style.backgroundImage = `url(img/member${i + 1}.jpg)`;
    i++;
}

prev.addEventListener("click", e=>{
    e.preventDefault();

    (active == 0) ? active = len : active--;
    num++;
    frame.style.transform = `rotate(${deg * num}deg)`;
    activation(active, boxs);
});

next.addEventListener("click", e=>{
    e.preventDefault();

    (active == len) ? active = 0 : active++;
    num--;
    frame.style.transform = `rotate(${deg * num}deg)`;
    activation(active, boxs);
});

function activation(index, boxs){
    for (el of boxs){
        el.classList.remove("on");
    }
    boxs[index].classList.add("on");
    console.log(boxs[index]);
}
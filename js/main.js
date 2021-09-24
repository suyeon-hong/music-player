const frame = document.querySelector(".frame");
const boxs = document.querySelectorAll("article");
const prev = document.querySelector(".prev");
const next = document.querySelector(".next");
const deg = 45;
let i = 0;
let num = 0;
const len = boxs.length - 1;
let active = 0;

for (el of boxs){
    let pause = el.querySelector(".pause");
    let play = el.querySelector(".play");
    let reload = el.querySelector(".reload");

    el.style.transform = `rotate(${deg * i}deg) translateY(-100vh)`;
    el.querySelector(".pic").style.backgroundImage = `url(img/member${i + 1}.jpg)`;
    i++;

    pause.addEventListener("click", e=>{
        e.preventDefault();
        let isActive = e.currentTarget.closest("article").classList.contains("on");
        if(isActive){
            e.currentTarget.closest("article").querySelector(".pic").classList.remove("on");
            e.currentTarget.closest("article").querySelector("audio").pause();
        }
    })
    play.addEventListener("click", e=>{
        e.preventDefault();
        let isActive = e.currentTarget.closest("article").classList.contains("on");
        if(isActive){
            e.currentTarget.closest("article").querySelector(".pic").classList.add("on");
            e.currentTarget.closest("article").querySelector("audio").play();
        }
    })
    reload.addEventListener("click", e=>{
        e.preventDefault();
        let isActive = e.currentTarget.closest("article").classList.contains("on");
        if(isActive){
            e.currentTarget.closest("article").querySelector(".pic").classList.remove("on");
            e.currentTarget.closest("article").querySelector("audio").pause();
            e.currentTarget.closest("article").querySelector("audio").load();
        }
    })
}

prev.addEventListener("click", e=>{
    e.preventDefault();

    initMusic();
    (active == 0) ? active = len : active--;
    num++;
    frame.style.transform = `rotate(${deg * num}deg)`;
    activation(active, boxs);
});

next.addEventListener("click", e=>{
    e.preventDefault();

    initMusic();
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

function initMusic(){
    for(el of boxs){
        el.querySelector(".pic").classList.remove("on");
        el.querySelector("audio").pause();
        el.querySelector("audio").load();
    }
}
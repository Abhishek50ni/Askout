// let yesbtn=document.querySelector("#yes");
// let nobtn=document.querySelector("#no");
// nobtn.addEventListener("mouseover",function (){
//     console.log("mouse hovered");
// });


let yesbtn=document.querySelector("#yes");
let unclickable=document.querySelector("#no");
let h1=document.querySelector("h1");
let img=document.querySelector("img");
let btns=document.querySelector(".btn");

const len=200;
function moveButton() {
unclickable.style.position="absolute"    
console.log("mousehovered")
const randomX= Math.floor(Math.random() * (innerWidth-len));
const randomY= Math.floor(Math.random()*(innerHeight -len));
this.style.top=`${randomY}px`;
this.style.left = `${randomX}px`;
}

unclickable.addEventListener("mouseover",moveButton);

function yesfn(){
    h1.innerText="Yeeyy! Finally"
    console.dir(img);
    img.src="cat.gif"
}
yesbtn.addEventListener("click",yesfn);
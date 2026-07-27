const numbers=document.getElementById("numbers");

let selected=false;

for(let i=1;i<=10;i++){

let box=document.createElement("div");

box.className="number";

box.innerHTML=i;

box.onclick=()=>{

if(selected)return;

selected=true;

box.classList.add("selected");

document.getElementById("prizeSection").classList.remove("hidden");

};

numbers.appendChild(box);

}

document.getElementById("form").addEventListener("submit",function(e){

e.preventDefault();

document.getElementById("prizeSection").classList.add("hidden");

document.getElementById("contactAdmin").classList.remove("hidden");

});

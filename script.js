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
function setLanguage(lang){

if(lang==="es"){

document.getElementById("title").innerHTML="🎁 Sorteo Lucky";
document.getElementById("subtitle").innerHTML="Elige un número de la suerte para revelar tu premio.";
document.getElementById("pendingTitle").innerHTML="Premio Pendiente de Activación";
document.getElementById("submitBtn").innerHTML="Enviar Formulario";

}else{

document.getElementById("title").innerHTML="🎁 Lucky Giveaway";
document.getElementById("subtitle").innerHTML="Choose one lucky number below to reveal your prize.";
document.getElementById("pendingTitle").innerHTML="Prize Pending Activation";
document.getElementById("submitBtn").innerHTML="Submit Delivery Form";

}

}

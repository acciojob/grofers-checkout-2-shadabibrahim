let btn =  document.createElement('button');
btn.append("Get Sum");
document.body.appendChild(btn);

function getSum(){
let prices= document.querySelectorAll(".price");
let grandTotal =0;
prices.forEach((price)=>{
	grandTotal +=  Number(price.innerHTML)
})
let tr = document.createElement('tr');
let tdTotal = document.createElement('td');
tdTotal.innerHTML = `Total Price (in Rs): ${grandTotal}`;
tr.appendChild(tdTotal);
document.querySelector("tbody").appendChild(tr);
}

btn.addEventListener('click',getSum)

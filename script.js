let btn =  document.createElement('button');
btn.append("Get Sum");
document.body.appendChild(btn);

function getSum(){
let prices= document.querySelectorAll('[data-ns-test="price"]');
let grandTotal =0;
prices.forEach((price)=>{
	grandTotal +=  parseFloat(price.innerHTML)
})
let tr = document.createElement('tr');
let tdTotal = document.createElement('td');
	tdTotal.setAttribute('data-ns-test', 'grandTotal');
tdTotal.innerHTML = `Total Price (in Rs): ${grandTotal.toFixed(2)}`;
tr.appendChild(tdTotal);
document.querySelector("tbody").appendChild(tr);
}

btn.addEventListener('click',getSum)



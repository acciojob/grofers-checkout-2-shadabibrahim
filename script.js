//your code here

// console.log(itemPrice)

let btn =  document.createElement('button');
btn.append("Get Sum");
document.body.appendChild(btn);


function getSum(){
let itemPrice = document.querySelectorAll(".price");
let sum =0;
itemPrice.forEach((data)=>{
	sum = sum + Number(data.innerHTML)
})
let tr = document.createElement('tr');
let tdTotal = document.createElement('td');
tdTotal.innerHTML = `Total Price (in Rs): ${sum}`;
tr.appendChild(tdTotal);
document.querySelector("tbody").appendChild(tr);

}



btn.addEventListener('click',getSum)

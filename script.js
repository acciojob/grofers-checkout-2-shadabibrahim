//your code here
let itemPrice = document.querySelectorAll(".price");
// console.log(itemPrice)

let btn =  document.createElement('button');
btn.append("Get Sum");
document.body.appendChild(btn);


function getSum(){
let sum = 0;
itemPrice.forEach((data)=>{
	sum = sum + Number(data.innerHTML)
})

let td = document.createElement('td');
td.innerHTML = `Total Price (in Rs): ${sum}`;
	document.querySelector(".total").appendChild(td)
console.log(td);
}


btn.addEventListener('click',getSum)

getSum();
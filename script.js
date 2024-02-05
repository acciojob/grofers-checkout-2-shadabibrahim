// let btn =  document.createElement('button');
// btn.append("Get Sum");
// document.body.appendChild(btn);

// function getSum(){
// let prices= document.querySelectorAll(".price");
// let grandTotal =0;
// prices.forEach((price)=>{
// 	grandTotal +=  Number(price.innerHTML)
// })
// let tr = document.createElement('tr');
// let tdTotal = document.createElement('td');
// tdTotal.innerHTML = `Total Price (in Rs): ${grandTotal}`;
// tr.appendChild(tdTotal);
// document.querySelector("tbody").appendChild(tr);
// }

// btn.addEventListener('click',getSum)

const getSumBtn = document.createElement("button");
getSumBtn.append("Get Total Price");
document.body.appendChild(getSumBtn);

const getSum = () => {
  getSumBtn.disabled = true;
  const prices = document.querySelectorAll(".price");
  let totalPrice = 0;
  prices.forEach(price => {
    const value = parseInt(price.textContent);
    if(!Number.isNaN(value)){
      totalPrice += value;
    }
  });
  const totalPriceRow = document.createElement("tr");
  totalPriceRow.id = "ans";
  const totalPriceData = document.createElement("td");
  totalPriceRow.appendChild(totalPriceData);
  const data = `Total Price (in Rs): ${totalPrice}`;
  totalPriceData.append(data);
  const table = document.querySelector("tbody");
  table.appendChild(totalPriceRow);
};

getSumBtn.addEventListener("click", getSum);
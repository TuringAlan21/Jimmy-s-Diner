'use strict'
import {menuArray} from './data.js'







const addButtons = document.querySelectorAll(".add-btn");
const pizzaBtn = document.getElementById('add-pizza');
const beerBtn = document.getElementById('add-beer');
const burgerBtn = document.getElementById('add-hamburger');
const orderContainer = document.createElement('section');
orderContainer.id = 'order-container';
orderContainer.style.border = 'none'
orderContainer.style.padding = '10px';
orderContainer.style.margin = '20px';
orderContainer.style.display = 'none'; // Initially hidden
document.body.appendChild(orderContainer);
const pizzaTitle = menuArray[0].name;
const burgerTitle = menuArray[1].name;
const beerTitle = menuArray[2].name;
const pizzaPrice = menuArray[0].price;
const burgerPrice = menuArray[1].price;
const beerPrice = menuArray[2].price;



const orderList = document.createElement('ul');
orderList.id = 'order-list';
orderContainer.appendChild(orderList);
orderList.style.listStyle = 'none';

const divHeader = document.createElement('h2');
divHeader.textContent = "Your Order"
divHeader.id = 'header';
divHeader.style.textAlign = 'center'
orderContainer.appendChild(divHeader);

const totalPriceDiv = document.createElement('div');
totalPriceDiv.id = 'total-price';
orderContainer.appendChild(totalPriceDiv);

const completeOrderBtn = document.createElement('button');
completeOrderBtn.textContent = 'Complete Order';
completeOrderBtn.id = 'complete-order';

orderContainer.appendChild(completeOrderBtn);
orderContainer.style.position = 'sticky';


let currentAmount = 0;

pizzaBtn.addEventListener('click', function () {
    orderContainer.style.display = 'block'; // Show the container
    currentAmount += menuArray[0].price; // Update the total price
    totalPriceDiv.textContent = `Total price: $${currentAmount}` // Update total price display
    
    const pizzaItem = document.createElement('li');
    pizzaItem.textContent = `${menuArray[0].name}  $${menuArray[0].price}`;
    orderList.appendChild(pizzaItem);
        const removeBtn = document.createElement('button');
        removeBtn.classList.add('remove');
    removeBtn.textContent = "Remove";
    orderList.appendChild(removeBtn);
    removeBtn.addEventListener('click', function(){
        pizzaItem.remove();
        removeBtn.remove();
        totalPriceDiv.textContent = `Total price:$${currentAmount -= 14}`
        
    })
});

beerBtn.addEventListener('click', function () {
    orderContainer.style.display = 'block'; // Show the container
    currentAmount += menuArray[2].price; // Update the total price
    totalPriceDiv.textContent = `Total price: $${currentAmount}` // Update total price display
    const beerItem = document.createElement('li');
    beerItem.textContent = `${menuArray[2].name}  $${menuArray[2].price}`;
    orderList.appendChild(beerItem);
    const removeBtn = document.createElement('button');
    removeBtn.classList.add('remove');
    removeBtn.textContent = "Remove";
    orderList.appendChild(removeBtn);
    removeBtn.addEventListener("click", function(){
        beerItem.remove();
        removeBtn.remove();
        totalPriceDiv.textContent = `Total price: $${currentAmount -= 12}`
    })
});

burgerBtn.addEventListener('click', function () {
    orderContainer.style.display = 'block'; // Show the container
    currentAmount += menuArray[1].price; // Update the total price
    totalPriceDiv.textContent = `Total price: $${currentAmount}` // Update total price display
    const burgerItem = document.createElement('li');
    burgerItem.textContent = `${menuArray[1].name} $${menuArray[1].price}`;
    orderList.appendChild(burgerItem);
    const removeBtn = document.createElement('button');
    removeBtn.classList.add('remove');
    removeBtn.textContent = "Remove";
    orderList.appendChild(removeBtn);
    removeBtn.addEventListener('click', function(){
        burgerItem.remove();
        removeBtn.remove();
        totalPriceDiv.textContent =`Total price: $${currentAmount -= 12}`;
    })
});

const container = document.querySelector('.container');
container.appendChild(orderContainer); // Appends the order container below the menu
const body = document.getElementById('body');
body.addEventListener('dblclick', function(e){
    if(orderContainer.style.display != 'none'){
        orderContainer.style.display = "none"
        orderList.innerHTML = "";
        currentAmount = 0;
    }
})
const paymentContainer = document.getElementById('payment');
const payBtn = document.getElementById('submit-button');
const overlay = document.querySelector('.overlay');

completeOrderBtn.addEventListener('click', function(){
    paymentContainer.style.display = 'flex'
    overlay.style.display = 'block'
})



document.getElementById('close-btn').addEventListener('click', function(){
    paymentContainer.style.display = 'none'
    overlay.style.display = 'none'
})
paymentContainer.style.display = 'none'

payBtn.addEventListener('click', function(e){
   if(paymentContainer.style.display != 'none'){
        overlay.style.display = 'none'
        paymentContainer.style.display = 'none'
   }
    e.preventDefault()
    const userName = document.getElementById('name').value
    const finalMessage = `<div id="message"> Thank you ${userName}, you order is on its way </div>`
    orderContainer.style.display = 'block'
    orderContainer.innerHTML = finalMessage;
    
});


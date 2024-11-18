const totalPrice = document.querySelector('.total-price');

const priceCatFamily = document.querySelector('.product__price_cat-family');
const priceHouse = document.querySelector('.product__price_house');
const priceCar = document.querySelector('.product__price_car');
const priceKitchen = document.querySelector('.product__price_kitchen');
const priceCooking = document.querySelector('.product__price_cooking');
const priceDiningRoom = document.querySelector('.product__price_dining-room');
const priceLivingroom = document.querySelector('.product__price_livingroom');
const priceTv = document.querySelector('.product__price_tv');
const priceBathroom = document.querySelector('.product__price_bathroom');
const priceBedroom = document.querySelector('.product__price_bedroom');
const priceChildrensRoom = document.querySelector('.product__price_childrens-room');

const button = document.querySelector('.button');

function calcTotalPrice() {
    return `${
        +priceCatFamily.textContent +
        +priceHouse.textContent +
        +priceCar.textContent +
        +priceKitchen.textContent +
        +priceCooking.textContent +
        +priceDiningRoom.textContent +
        +priceLivingroom.textContent +
        +priceTv.textContent +
        +priceBathroom.textContent +
        +priceBedroom.textContent +
        +priceChildrensRoom.textContent
    }`;
}

totalPrice.innerHTML = calcTotalPrice();

button.addEventListener("click", () => {
    totalPrice.innerText = (calcTotalPrice() * 0.8).toFixed(2);
    priceCatFamily.innerText = (+priceCatFamily.innerText * 0.8).toFixed(2);
    priceHouse.innerText = (+priceHouse.innerText * 0.8).toFixed(2);
    priceCar.innerText = (+priceCar.innerText * 0.8).toFixed(2);
    priceKitchen.innerText = (+priceKitchen.innerText * 0.8).toFixed(2);
    priceCooking.innerText = (+priceCooking.innerText * 0.8).toFixed(2);
    priceDiningRoom.innerText = (+priceDiningRoom.innerText * 0.8).toFixed(2);
    priceLivingroom.innerText = (+priceLivingroom.innerText * 0.8).toFixed(2);
    priceTv.innerText = (+priceTv.innerText * 0.8).toFixed(2);
    priceBathroom.innerText = (+priceBathroom.innerText * 0.8).toFixed(2);
    priceBedroom.innerText = (+priceBedroom.innerText * 0.8).toFixed(2);
    priceChildrensRoom.innerText = (+priceChildrensRoom.innerText * 0.8).toFixed(2);
}, {once: true});
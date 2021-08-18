import delGoodInBasket from "../components/addNDelGoodInBasket";
import { modalBasketThxOpen, modalBasketThxClose } from "../components/modalBAsketThx";

const urlOrders = 'http://localhost:3000/orders';

const postData = (number, goods, price, userName, phone, email, delivery) => {
    fetch(urlOrders, {
        method: "POST",
        body: JSON.stringify({
            "orderNumber": number,
            "orderGoods": goods,
            "orderTotalPrice": price,
            "orderName": userName,
            "orderPhone": phone,
            "orderEmail": email,
            "orderDeliveryType": delivery
        }),
        headers: {
            "Content-type": "application/json; charset=utf-8"
        }
    })
    .then(res => res.json());
};

const resetBasket = () => {
    document.querySelector('.user_order_name').value = '';
    document.querySelector('.user_order_phone').value = '';
    document.querySelector('.user_order_email').value = '';
    document.querySelector('.basket_price span').textContent = '0.00';
    document.querySelector('.user_promocode').value = '';

    const basketTitle = document.querySelector('.user_basket__content h2');
    const basketBottom = document.querySelector('.basket_bottom');
    const basketOrderForm = document.querySelector('.basket_order__form');
    const orderBtn = document.querySelector('.to_order__btn');
    const basketTotalPrice = document.querySelector('.basket_total_price');
    const basketList = document.querySelector('.basket__list');

    basketTotalPrice.textContent = document.querySelector('.basket_price span').textContent + ' бел.руб.';

    basketTitle.textContent = 'В корзине нет товаров!';
    orderBtn.textContent = 'Оформить заказ';
    basketList.classList.remove('hide');
    basketBottom.classList.remove('hide');
    basketOrderForm.classList.remove('open');
    
    const basketItems = document.querySelectorAll('.basket__item');
    
    for (let item of basketItems) {
        delGoodInBasket(item);
    }
};

const validateOrderForm =() => {
    let err = 0;

    const orderNumb = document.querySelector('.user_basket__content h2').textContent.slice(length-4);
    const orderTotalPrice = document.querySelector('.basket_total_price').textContent;
    const orderNameInput = document.querySelector('.user_order_name');
    const orderPhoneInput = document.querySelector('.user_order_phone');
    const orderEmailInput = document.querySelector('.user_order_email');
    const orderDeliveryInputs = document.querySelectorAll('input[type="radio"]');


    orderNameInput.classList.remove('err');
    orderPhoneInput.classList.remove('err');
    orderEmailInput.classList.remove('err');

    if (orderNameInput.value.trim() === '') {
        orderNameInput.classList.add('err');
        err++;
    }
    if (orderPhoneInput.value.trim() === '') {
        orderPhoneInput.classList.add('err');
        err++;
    }
    if (orderEmailInput.value.trim() === '') {
        orderEmailInput.classList.add('err');
        err++;
    }

    let deliveryType = '';

    for (let radio of orderDeliveryInputs) {
        if (radio.checked) {
            deliveryType = radio.value;
        }
    }


    if (err) {
        return;
    } else {
        const orderGoods = [];
        const basketItems = document.querySelectorAll('.basket__item');

        basketItems.forEach(elem => {
            let item = {
                goodId: elem.dataset.delete,
                goodName: elem.querySelector('.item_name').textContent,
                goodCount: elem.querySelector('input').value 
            };

            orderGoods.push(item);
        });

        postData(orderNumb, orderGoods, orderTotalPrice, orderNameInput.value, orderPhoneInput.value, orderEmailInput.value, deliveryType);

        const userBasket = document.querySelector('.user_basket');

        userBasket.classList.remove('open');
        document.body.style.overflow = 'auto';
        
        resetBasket();

        modalBasketThxOpen();
        setTimeout(modalBasketThxClose, 3000);
    } 
};

export default validateOrderForm;
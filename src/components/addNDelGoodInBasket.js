import { disableLeftScroll, enableLeftScroll } from "./userLocation";

const modalBasketOpen = () => {
    const userBasket = document.querySelector('.user_basket');

    userBasket.classList.add('open');
    disableLeftScroll();
};

const modalBasketClose = () => {
    const userBasket = document.querySelector('.user_basket');

    userBasket.classList.remove('open');
    enableLeftScroll();
};

const changeBasketStartPrice = () => {
    const basketStartPrice = document.querySelector('.basket_price span');
    const basketList = document.querySelector('.basket__list');
    const allBasketItems = basketList.querySelectorAll('.basket__item');

    if (basketList.children.length === 0) {
        basketStartPrice.textContent = '0.00';
    } else {
        let result = 0;

        allBasketItems.forEach(elem => {
            result += +elem.querySelector('.item_real-price span').textContent;
        });

        basketStartPrice.textContent = result.toFixed(2);
    }
};

const changeItemRealPrice = () => {
    const basketCountItemInputs = document.querySelectorAll('.item_count input');

    for (let countInput of basketCountItemInputs) {
        countInput.addEventListener('change', (e) => {
            let currentItem = e.target.closest('.basket__item');
            let currentItemRealPrice = currentItem.querySelector('.item_real-price span');
            let currenItemPrice = currentItem.querySelector('.item_price span').textContent;
            let currenItemCount = currentItem.querySelector('input').value;

            currentItemRealPrice.textContent = (currenItemCount * currenItemPrice).toFixed(2);

            changeBasketStartPrice();
        });
    }    
};

const changeBasketCounter = () => {
    const basketCounter = document.querySelector('.basket__counter span');
    const basketList = document.querySelector('.basket__list');
    const basketTitle = document.querySelector('.user_basket__content h2');

    basketCounter.textContent = basketList.children.length;

    if(basketList.children.length === 0) {
        basketTitle.textContent = 'В корзине нет товаров!';
    } else {
        basketTitle.textContent = 'Ваши покупки:';
    }
};

const addGoodInBasket = (current) => {
    let currentId = current.dataset.id;
    let currentName = current.querySelector('.good__name').textContent;
    let currentPrice = current.querySelector('.good__price').textContent;
    const basketList = document.querySelector('.basket__list');

    basketList.innerHTML += `
    <div class="basket__item" data-delete="${currentId}">
        <div class="item_name">${currentName}</div>
        <div class="item_price"><span>${currentPrice}</span> бел.руб.</div>
        <div class="item_count">
            <input type="number" min="1" value="1">
        </div>
        <div class="item_real-price"><span>${currentPrice}</span> бел.руб.</div>
        <button class="item_delete">Удалить товар</button>
    </div>
    `;

    changeItemRealPrice();
    changeBasketCounter();
    changeBasketStartPrice();
};

const delGoodInBasket = (currentDelGood) => {
    let currentDelId = currentDelGood.dataset.delete;
    currentDelGood.remove();
    let catalogList = document.querySelector('.catalog__list');
    let allGoods = catalogList.querySelectorAll('.catalog__item');

    allGoods.forEach(elem => {
        if (elem.dataset.id === currentDelId) {
            elem.querySelector('.add_good_basket').textContent = 'Добавить в корзину';
        }
    });

    changeBasketCounter();
    changeBasketStartPrice();
};

const basketToOrderForm = () => {
    const basketTitle = document.querySelector('.user_basket__content h2');
    const basketList = document.querySelector('.basket__list');
    const basketBottom = document.querySelector('.basket_bottom');
    const basketOrderForm = document.querySelector('.basket_order__form');
    const orderBtn = document.querySelector('.to_order__btn');

    const userPromocode = document.querySelector('.user_promocode').value;
    const basketTotalPrice = document.querySelector('.basket_total_price');
    const basketPrice = document.querySelector('.basket_price span');

    if (basketList.children.length === 0) {
        return;
    }

    let orderNum = (Math.random()*1000).toFixed(0);

    if(userPromocode === 'IT-ACADEMY') {
        basketPrice.textContent = (basketPrice.textContent*0.85).toFixed(2);
    } else if (userPromocode === 'LETO2021') {
        basketPrice.textContent = (basketPrice.textContent*0.95).toFixed(2);
    }

    basketTotalPrice.textContent = basketPrice.textContent + ' бел.руб.';

    basketTitle.textContent = `Оформление заказа №${orderNum}:`;
    orderBtn.textContent = 'Заказать';
    basketList.classList.add('hide');
    basketBottom.classList.add('hide');
    basketOrderForm.classList.add('open');
};


export {modalBasketOpen, modalBasketClose};
export default delGoodInBasket;
export {changeBasketStartPrice, changeBasketCounter, addGoodInBasket, delGoodInBasket, basketToOrderForm};
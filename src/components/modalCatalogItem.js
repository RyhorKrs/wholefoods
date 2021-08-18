import { disableLeftScroll, enableLeftScroll } from "./userLocation";

const modalCatalogItemOpen = () => {
    const modalCatalogItem = document.querySelector('.modal__item');

    modalCatalogItem.classList.add('open');
    disableLeftScroll();
};

const modalCatalogItemClose = () => {
    const modalCatalogItem = document.querySelector('.modal__item');

    modalCatalogItem.classList.remove('open');
    enableLeftScroll();
};

const generateCatalogModalCard = (img, title, price, weight) => {
    const modalCatalogItem = document.querySelector('.modal__item');
    
    modalCatalogItem.innerHTML = `
    <div class="modal_item__body">
        <div class="item__content">
            <div class="good__info">
                <img src="./images/catalog/${img}.jpeg" alt="${img}">
                <h3>${title}</h3>
                <p class="good__description"><span class="good__price">${price}</span> бел.руб./ ${weight}</p>
            </div>
            <span class="modal_item__close"></span>
        </div>
    </div>
    `;
};

const getCatalogModalData = (currentItem) => {
    let currentImg = currentItem.dataset.id;
    let currentTitle = currentItem.querySelector('h3').textContent;
    let currentPrice = currentItem.querySelector('.good__price').textContent;
    let currentWeight = currentItem.querySelector('.good__weight').textContent;

    generateCatalogModalCard(currentImg, currentTitle, currentPrice, currentWeight);

    modalCatalogItemOpen();
};

export {getCatalogModalData, modalCatalogItemClose};

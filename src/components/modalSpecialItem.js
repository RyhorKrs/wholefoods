import { disableLeftScroll, enableLeftScroll } from "./userLocation";

const modalSpecialItemOpen = () => {
    const modalSpecialItem = document.querySelector('.modal__special');

    modalSpecialItem.classList.add('open');
    disableLeftScroll();
};

const modalSpecialItemClose = () => {
    const modalSpecialItem = document.querySelector('.modal__special');

    modalSpecialItem.classList.remove('open');
    enableLeftScroll();
};

const generateSpecialModalCard = (id, title, oldPrice, newPrice, weight) => {
    const modalSpecialItem = document.querySelector('.modal__special');

    modalSpecialItem.innerHTML = `
    <div class="modal_special__body">
        <div class="special__content">
            <div class="special-good__info">
                <img src="./images/catalog/${id}.jpeg" alt="${id}">
                <h3>${title}</h3>
                <span class="special-good__new-price">${newPrice}</span>
                <p class="special-good__description"><span class="special-good__old-price">${oldPrice}</span> бел.руб./ ${weight}</p>
            </div>
            <span class="modal_special__close"></span>
        </div>
    </div>
    `; 
};

const getSpecialModalData = (currentSpecialItem) => {
    let currentId = currentSpecialItem.dataset.id;
    let currentTitle = currentSpecialItem.querySelector('h3').textContent;
    let currentOldPrice = currentSpecialItem.querySelector('.special-good__old-price').textContent;
    let currentNewPrice = currentSpecialItem.querySelector('.special-good__new-price').textContent;
    let currentWeight = currentSpecialItem.querySelector('.special-good__weight').textContent;

    generateSpecialModalCard(currentId, currentTitle, currentOldPrice, currentNewPrice, currentWeight);

    modalSpecialItemOpen();
};

export {getSpecialModalData, modalSpecialItemClose};

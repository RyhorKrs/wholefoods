import { disableLeftScroll,  enableLeftScroll} from "./userLocation";

const modalBasketThxOpen = () => {
    const modalBasketThx = document.querySelector('.modal__basket_thanks');

    modalBasketThx.classList.add('open');
    disableLeftScroll();
};

const modalBasketThxClose = () => {
    const modalBasketThx = document.querySelector('.modal__basket_thanks');

    modalBasketThx.classList.remove('open');
    enableLeftScroll();
};

export {modalBasketThxOpen, modalBasketThxClose};
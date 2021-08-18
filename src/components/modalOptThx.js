import { disableLeftScroll,  enableLeftScroll} from "./userLocation";

const modalOptThxOpen = () => {
    const modalOptThx = document.querySelector('.modal__opt_thanks');

    modalOptThx.classList.add('open');
    disableLeftScroll();
};

const modalOptThxClose = () => {
    const modalOptThx = document.querySelector('.modal__opt_thanks');

    modalOptThx.classList.remove('open');
    enableLeftScroll();
};

export {modalOptThxOpen, modalOptThxClose};

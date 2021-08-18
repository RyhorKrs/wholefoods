import { disableLeftScroll,  enableLeftScroll} from "./userLocation";

const modalReviewThxOpen = () => {
    const modalReviewThx = document.querySelector('.modal__review_thanks');

    modalReviewThx.classList.add('open');
    disableLeftScroll();
};

const modalReviewThxClose = () => {
    const modalReviewThx = document.querySelector('.modal__review_thanks');

    modalReviewThx.classList.remove('open');
    enableLeftScroll();
};

export {modalReviewThxOpen, modalReviewThxClose};

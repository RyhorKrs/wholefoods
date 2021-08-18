import router from "../routes";

import closePreloader from "../components/closePreloader";
import {modalLocationOpen, modalLocationClose, validateLocation} from "../components/userLocation";
import { openBurgerMenu, closeBurgerMenu } from "../components/burgerMenu";
import generateHomeSpecialItems from "../components/homePageSliderItems";
import createSlider from "../components/homePageSlider";
import generateHomeReviews from "../components/homePageReviews";
import resizeMap from "../components/aboutPageMapResize";
import generateAboutReviews from "../components/AboutPageGetReviews";
import addReview from "../utils/postReviewData";
import generateCatalogGoods from "../components/catalogPageGetGoods";
import filterCatalogGoods from "../components/catalogPageFilterGoods";
import {getCatalogModalData, modalCatalogItemClose} from "../components/modalCatalogItem";
import generatePromocodes from "../components/specialPageGetPromos";
import generateSpecialGoods from "../components/specialPageGetGoods";
import { getSpecialModalData, modalSpecialItemClose } from "../components/modalSpecialItem";
import addOptCallback from "../utils/postOptData";
import {modalBasketOpen, modalBasketClose} from "../components/addNDelGoodInBasket";
import {changeBasketStartPrice, changeBasketCounter, addGoodInBasket, delGoodInBasket, basketToOrderForm} from "../components/addNDelGoodInBasket";
import validateOrderForm from "../utils/postOrderData";


const getContent = () => {

    router();

    window.addEventListener('hashchange', () => {
        window.scrollTo(0, 0);
    });

    closePreloader();

    const locationBtn = document.querySelector('.user__location'); 
    const modalLocation = document.querySelector('.modal__location');
    const locationEnterBtn = modalLocation.querySelector('.modal_location__enter');

    locationBtn.textContent = localStorage.getItem('user-location') || 'Ваш город?';

    locationBtn.addEventListener('click', () => {
        modalLocationOpen();
    });

    locationEnterBtn.addEventListener('click', validateLocation);

    document.addEventListener('click', e => {
        if(e.target.className === 'modal_location__close' || e.target.className === 'modal_location__body') {
            modalLocationClose();
        }  
    });

    const menuBurgerBtn = document.querySelector('.menu__btn');

    menuBurgerBtn.addEventListener('click', () => {
        const menuBody = document.querySelector('.menu__body');

        if(menuBody.classList.contains('active')) {
            closeBurgerMenu();
        } else {
            openBurgerMenu();
        }
    });

    document.addEventListener('click', e => {
        const menuBody = document.querySelector('.menu__body');

        if(menuBody.classList.contains('active') && e.target.closest('.menu__btn') === null && e.target.closest('.menu__body') === null) {
            closeBurgerMenu();
        }
    });

    const socialGit = document.querySelector('.social__git');
    const socialVk = document.querySelector('.social__vk');
    const socialInst = document.querySelector('.social__inst');
    const socialLkin = document.querySelector('.social__lkin');

    socialGit.addEventListener('click', () => {
        window.open("https://github.com/RyhorKrs");
    });

    socialVk.addEventListener('click', () => {
        window.open("https://vk.com/krasniakov_g");
    });

    socialInst.addEventListener('click', () => {
        window.open("https://www.instagram.com/krasniakov.g/");
    });

    socialLkin.addEventListener('click', () => {
        window.open("https://www.linkedin.com/in/ryhor-krasniakou/");
    });

    const homeSpecialContainer = document.querySelector('.third__section .swiper-wrapper');

    if(homeSpecialContainer) {
        generateHomeSpecialItems();
    }

    createSlider();

    const homeReviewsContainer = document.querySelector('.fourth__section .reviews__container');

    if(homeReviewsContainer) {
        generateHomeReviews();
    }

    window.addEventListener('resize', () => {
        const locationMap = document.querySelector('.aboutus__section .our_location_map');

        if(locationMap) {
            resizeMap();
        }
    });

    const aboutPageReviews = document.querySelector('.reviews__section .reviews__list');

    if(aboutPageReviews) {
        generateAboutReviews();

        const addReviewBtn = document.querySelector('.reviews__form .add_review_btn');

        addReviewBtn.addEventListener('click', addReview);
    }

    const catalogPageGoods = document.querySelector('.catalog__section .catalog__list');

    if(catalogPageGoods) {
        generateCatalogGoods();
    }

    document.addEventListener('click', (e) => {
        if(catalogPageGoods && (e.target.closest('.filter__item') !== null)) {
            let currentFilter = e.target.closest('.filter__item').dataset.filter;

            filterCatalogGoods(currentFilter);
        }
    });

    document.addEventListener('click', e => {
        if(catalogPageGoods && e.target.closest('.catalog__item') && e.target.className !== 'add_good_basket') {
            let currentItem = e.target.closest('.catalog__item');
        
            getCatalogModalData(currentItem);
        }
    });

    document.addEventListener('click', e => {
        if(catalogPageGoods && (e.target.className === 'modal_item__close' || e.target.className === 'modal_item' || e.target.className === 'modal_item__body')) {
            modalCatalogItemClose();
        }  
    });

    const specialPagePromoList = document.querySelector('.promocodes__section');

    if(specialPagePromoList) {
        generatePromocodes();
    }

    const specialPageGoodsList = document.querySelector('.special-goods__section');

    if(specialPageGoodsList) {
        generateSpecialGoods();
    }

    document.addEventListener('click', e => {
        if(specialPageGoodsList && e.target.closest('.special-goods__item') && e.target.className !== 'add_special-good_basket') {
            let currentSpecialItem = e.target.closest('.special-goods__item');
        
            getSpecialModalData(currentSpecialItem);
        }
    });

    document.addEventListener('click', e => {
        if(specialPageGoodsList && (e.target.className === 'modal_special__close' || e.target.className === 'modal_special' || e.target.className === 'modal_special__body')) {
            modalSpecialItemClose();
        }  
    });

    const optPageForm = document.querySelector('.optovikam__section .optovikam__form');

    if(optPageForm) {
        const addOptCallBtn = document.querySelector('.optovikam__section .optovikam__form button');

        addOptCallBtn.addEventListener('click', e => {
            e.preventDefault();
            addOptCallback();
        });
    }

    const basketOpenBtn = document.querySelector('.header__basket');
    const basketCloseBtn = document.querySelector('.user_basket__close');

    basketOpenBtn.addEventListener('click', modalBasketOpen);
    basketCloseBtn.addEventListener('click', modalBasketClose);

    changeBasketStartPrice();
    changeBasketCounter();

    document.addEventListener('click', e => {
        if(e.target.className === 'add_good_basket' && e.target.textContent !== 'Товар добавлен') {
            e.target.textContent = 'Товар добавлен';
            let currentAddGood = e.target.closest('.catalog__item');
            addGoodInBasket(currentAddGood);
        }

        if(e.target.className === 'item_delete') {
            let currentDelGood = e.target.closest('.basket__item');
            delGoodInBasket(currentDelGood);
        }

        if(e.target.className === 'to_order__btn' && e.target.textContent === 'Оформить заказ') {
            basketToOrderForm();
        }

        if(e.target.className === 'to_order__btn' && e.target.textContent === 'Заказать') {
            validateOrderForm();
        }
    }); 
};

export { getContent };
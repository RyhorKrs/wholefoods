const openBurgerMenu = () => {
    const menuIcon = document.querySelector('.menu__icon');
    const menuBody = document.querySelector('.menu__body');

    menuIcon.classList.add('active');
    menuBody.classList.add('active');
};

const closeBurgerMenu = () => {
    const menuIcon = document.querySelector('.menu__icon');
    const menuBody = document.querySelector('.menu__body');

    menuIcon.classList.remove('active');
    menuBody.classList.remove('active');
};

export {openBurgerMenu, closeBurgerMenu};

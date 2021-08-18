const disableLeftScroll = () => {
    const scrollWidth = window.innerWidth - document.body.offsetWidth;

    document.body.dbScrollY = window.scrollY;

    document.body.style.cssText = `
        position: fixed;
        top: ${-window.scrollY}px;
        left: 0;
        width: 100%;
        height: 100vh;
        overflow: hidden;
        padding-right: ${scrollWidth}px;
    `;
};

const enableLeftScroll = () => {
    document.body.style.cssText = '';
    window.scroll({
        top: document.body.dbScrollY,
    });
};

const modalLocationOpen = () => {
    const modalLocation = document.querySelector('.modal__location');

    modalLocation.classList.add('open');
    disableLeftScroll();
};

const modalLocationClose = () => {
    const modalLocation = document.querySelector('.modal__location');

    modalLocation.classList.remove('open');
    enableLeftScroll();
};

const validateLocation = () => {
    const modalLocation = document.querySelector('.modal__location');
    const locationBtn = document.querySelector('.user__location');
    let cityInput = modalLocation.querySelector('.user_location__input');
    let city = cityInput.value;

    if (city.trim() === '') {
        modalLocationClose();
        cityInput.value = '';
    } else {
        locationBtn.textContent = city;
        localStorage.setItem('user-location', city);
        cityInput.value = '';
        modalLocationClose();
    }
};

export {modalLocationOpen, modalLocationClose, validateLocation};
export {disableLeftScroll, enableLeftScroll};
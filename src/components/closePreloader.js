const closePreloader = () => {
    const preloader = document.querySelector('.preloader');

    setTimeout(() => {
        preloader.classList.remove('open');
    }, 400);
};

export default closePreloader;
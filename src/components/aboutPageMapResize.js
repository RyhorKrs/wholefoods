const resizeMap = () => {
    const map = document.querySelector('iframe');
    const wrapper = document.querySelector('.aboutus__content');

    map.width = window.getComputedStyle(wrapper).width;
};

export default resizeMap;
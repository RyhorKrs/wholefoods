const filterCatalogGoods = (filter) => {  
    let allGoods = document.querySelectorAll('.catalog__item');

    allGoods.forEach(elem => {
        elem.classList.remove('hide');

        if (filter === 'all') {
            return;
        } else {
            if(elem.dataset.category !== filter) {
                elem.classList.add('hide');
            }
        }
    });
};

export default filterCatalogGoods;


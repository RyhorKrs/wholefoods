import getAllCatalogGoods from "../utils/getCatalogData";

const generateCatalogGoods = async () => {

    let data = await getAllCatalogGoods();
  
    const catalogList = document.querySelector('.catalog__list');
    
    catalogList.innerHTML = '';
    
    data.forEach(elem => {
        catalogList.innerHTML += `
        <div data-category="${elem.goodCategory}" data-id="${elem.id}" class="catalog__item">
            <div>
                <div class="good_image_container">
                    <img class="good__image" src="./images/catalog/${elem.goodImage}" alt="${elem.id}">
                </div>
                <h3 class="good__name">${elem.goodName}</h3>
            </div>
            <div>
                <p class="good__description"><span class="good__price">${elem.goodPrice}</span> бел.руб./ <span class="good__weight">${elem.goodWeight}</span></p>
                <button class="add_good_basket">Добавить в корзину</button>
            </div>   
        </div>
        `;
    });
};

export default generateCatalogGoods;
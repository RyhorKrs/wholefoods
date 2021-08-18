import getSpecialItems from "../utils/getSpecialItems";

const generateSpecialGoods = async () => {

    let data = await getSpecialItems();
    const specialGoodsList = document.querySelector('.special-goods__list');
    
    specialGoodsList.innerHTML = '';
    
    data.forEach(elem => {
        specialGoodsList.innerHTML += `
        <div data-id="${elem.id}" class="special-goods__item">
            <div>
                <div class="special-good_image_container">
                    <img class="special-good__image" src="./images/catalog/${elem.specialImage}" alt="${elem.id}">
                </div>
                <h3 class="special-good__name">${elem.specialName}</h3>
            </div>
            <div>
                <span class="special-good__new-price">${elem.specialNewPrice}</span>
                <p class="special-good__description"><span class="special-good__old-price">${elem.specialOldPrice} </span>бел.руб./ <span class="special-good__weight">${elem.specialWeight}</span></p>
                <!--<button class="add_special-good_basket">Добавить в корзину</button>-->
            </div>   
        </div>
        `;
    });
};

export default generateSpecialGoods;
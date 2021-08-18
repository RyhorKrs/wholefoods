import getSpecialItems from "../utils/getSpecialItems";

const generateHomeSpecialItems = async () => {

    let data = await getSpecialItems();
  
    const specialList = document.querySelector('.swiper-wrapper');
    
    specialList.innerHTML = '';
    
    data.forEach(elem => {

        specialList.innerHTML += `
        <div class="swiper-slide">
            <div class="special-goods__item">
                <div>
                    <div class="special-good_image_container">
                        <img class="special-good__image" src="../../images/catalog/${elem.specialImage}" alt="${elem.id}">
                    </div>
                    <h3 class="special-good__name">${elem.specialName}</h3>
                </div>
                <div>
                    <span class="special-good__new-price">${elem.specialNewPrice}</span>
                    <p class="special-good__description"><span class="special-good__old-price">${elem.specialOldPrice} </span>бел.руб./ ${elem.specialWeight}</p>
                </div>   
            </div>
        </div>
        `;
    });
};
  
  export default generateHomeSpecialItems;
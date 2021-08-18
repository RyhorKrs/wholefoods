import getPromocodes from "../utils/getPromocodesData";

const generatePromocodes = async () => {

    let data = await getPromocodes();
    const promocodesList = document.querySelector('.promocodes__list');
    
    promocodesList.innerHTML = '';
    
    data.forEach(elem => {
        promocodesList.innerHTML += `
        <div class="promocode__item">
            <p>${elem.promoText}</p>
            <span class="promocode">${elem.promoCode}</span>
        </div>
        `;
    });
};

export default generatePromocodes;
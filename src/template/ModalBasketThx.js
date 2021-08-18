import "./modalBasketThx.scss";

const ModalBasketThanx = () => {
    const view = `

    <div class="modal__basket_thanks">   
        <div class="modal_basket_thanks__body">
            <div class="basket_thanks__content">
                <div class="basket_thanks__img">
                    <img src="./images/thank-you.png" alt="thank_you">
                </div>
                <div class="basket_thanks__text">
                    <h2>Ваш заказ оформлен!!!</h2>
                    <p>В ближайшее время с Вами свяжется сотрудник.</p>
                </div>
            </div>
        </div>
    </div>

    `;
    return view;
};

export default ModalBasketThanx;
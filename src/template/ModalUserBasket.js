import "./modalUserBasket.scss";

const ModalBasket = () => {
    const view = `

    <div class="user_basket">            
        <div class="user_basket__body">
            <div class="user_basket__content">
                <h2>Ваши покупки:</h2>                
                <span class="user_basket__close"></span>
                <div class="basket__list">                  
    
                </div>
                <div class="basket_bottom">                            
                    <input class="user_promocode" type="text" placeholder="Введите промокод">
                    <span class="basket_price"><span>0.00</span> бел.руб.</span>
                </div>

                <div class="basket_order__form">                          
                    <input class="user_order_name" type="text" placeholder="*Введите Ваше имя">
                    <input class="user_order_phone" type="tel" placeholder="*Номер телефона">
                    <input class="user_order_email" type="email" placeholder="*Электронная почта">
                    <br>
                    <label>
                        <input type="radio" name="dostavka" value="SAM" checked>
                        Самовывоз в Минске
                    </label>
                    <label>
                        <input type="radio" name="dostavka" value="KURIER">
                        Доставка курьером по Минску
                    </label>
                    <label>
                        <input type="radio" name="dostavka" value="POCHTA">
                        Доставка почтой по РБ
                    </label>
                    <br>
                    <span class="basket_total_price">0.00 бел.руб.</span>
                </div>

                <button class="to_order__btn">Оформить заказ</button> 
                <p>[*Не выходите из раздела "Каталог" до завершения оформления заказа!]</p>        
            </div>
        </div>
    </div>

    `;
    return view;
};

export default ModalBasket;
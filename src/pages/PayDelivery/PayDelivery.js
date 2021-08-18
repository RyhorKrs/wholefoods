import "./PayDelivery.scss";

const PayDelivery = () => {
    const view = `
    
    <section class="pay__section wrapper">
        <div class="pay__content container">
            <h2>Оплата</h2>
            <div class="pay__text">
                <p>Оплатить товары в нашем магазине можно следующими способами:</p>
                <div class="pay__list">
                    <div class="pay__item">
                        <img src="images/pay_nal.png" alt="Оплата наличными">
                        <p>Наличными курьеру</p>
                    </div>
                    <div class="pay__item">
                        <img src="images/pay_card.png" alt="Оплата картой">
                        <p>Банковской картой курьеру</p>
                    </div>
                    <div class="pay__item">
                        <img src="images/pay_plateg.png" alt="Оплата на почте">
                        <p>Оплата наложенным платежом при получении на почте</p>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <section class="delivery__section wrapper">
        <div class="delivery__content container">
            <h2>Доставка</h2>
            <div class="delivery__text">
                <p>Время работы интернет-магазина <br>
                    круглосуточно 24/7</p>
                <p>Подтверждение заказов по телефону - понедельник-суббота с 10:00  до  20:00</p>
                <div class="delivery__list">
                    <div class="delivery__item">
                        <img src="images/delivery_kurerom.png" alt="delivery_kur">
                        <div class="item__text">
                            <h3>Курьерская доставка по Минску</h3> 
                            <p>Доставка курьером производится в будние дни в промежутки времени <span>12:00-16:00</span> и <span>18:00-22:00</span><br>
                            Доставка осуществляется бесплатно.</p>
                            <ul>
                                <li>Оплата наличными при получении</li>
                                <li>Оплата банковской картой при получении</li>
                            </ul>
                        </div>   
                    </div>
                    <div class="delivery__item">
                        <img src="images/delivery_samovyvoz.png" alt="delivery_sam">
                        <div class="item__text">
                            <h3>Самовывоз заказа в Минске</h3> 
                            <p>Самовывоз осуществляется в часы работы пункта выдачи заказа <span>9:00-21:00</span>, по адресу: г.Минск, ул. Колесникова, 20.</p>
                            <ul>
                                <li>Оплата наличными при получении</li>
                                <li>Оплата банковской картой при получении</li>
                            </ul>
                        </div>    
                    </div>
                    <div class="delivery__item">
                        <img src="images/delivery_pochtoy.png" alt="delivery_poch">
                        <div class="item__text">
                            <h3>Доставка Европочтой по всей РБ</h3> 
                            <p>Доставка осуществляется согласно тарифам и правилам компании Европочта, с которыми можно ознакомиться на официальном сайте.</p>
                            <ul>
                                <li>Оплата наложенным платежом при получении</li>
                            </ul>
                        </div>     
                    </div>
                </div>
            </div>
        </div>
    </section>

    `;
    return view;
}

export default PayDelivery;
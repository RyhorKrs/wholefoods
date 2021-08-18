import "./About.scss";

const About = () => {
    const view = `

    <section class="aboutus__section wrapper">
        <div class="aboutus__content container">
            <h2>О НАС</h2>
            <p>Добро пожаловать в интернет-магазин продуктов питания «WholeFoods market»! Создавая данный ресурс, мы ставили перед собой цель – обеспечить жителям Минска и всей РБ комфортное и выгодное приобретение полезных товаров.</p>
            <p>Наш магазин является дистрибьютором продуктов самых известных отечественных и зарубежных брендов. Люди всё больше думают о качестве еды, её влиянии на здоровье и благополучие. Именно на базе сформирован наш каталог.</p>    
            <p> Заглянув в наш интернет-магазин продуктов, вы потратите минимум времени для приобретения всего необходимого. Вам нужно сделать всего несколько кликов мышкой, сформировать содержимое своей корзины и оформить заявку. Наши курьеры оперативно доставят Ваши покупки по указанному адресу в Минске. Либо по всей РБ в удобное отделение почты.</p>
            <div class="our__location">
                <div class="our_location__text">
                    <p>Мы находимся по адресу: <br>
                    г. Минск, ул. Колесникова, 20 <br>
                    понедельник-суббота с 10:00 до 20:00</p>
                    <p>+375 (29) 111-22-33</p>
                    <p>email123@gmail.com</p>
                </div>
                <div class="our_location_map">
                    <div style="position:relative;overflow:hidden;"><a href="https://yandex.by/maps/157/minsk/?utm_medium=mapframe&utm_source=maps" style="color:#eee;font-size:12px;position:absolute;top:0px;">Минск</a><a href="https://yandex.by/maps/157/minsk/house/Zk4YcgRpSUUDQFtpfXVweHtrYg==/?ll=27.439004%2C53.919787&utm_medium=mapframe&utm_source=maps&z=16" style="color:#eee;font-size:12px;position:absolute;top:14px;">Улица Колесникова, 20 — Яндекс.Карты</a><iframe src="https://yandex.by/map-widget/v1/-/CCUimZeMsA" width="1300" height="400" frameborder="1" allowfullscreen="true" style="position:relative;"></iframe></div>
                </div>
            </div>   
        </div>
    </section>
    <section class="reviews__section wrapper">
        <div class="reviews__content container">
            <h2>ОТЗЫВЫ</h2>
            <div class="reviews__list">
                
            </div>
            <div class="reviews__form">
                <p>Вы можете оставить свой отзыв о нашем интернет-магазине!</p>
                <input type="text" placeholder="*Ваше имя">
                <textarea placeholder="*Введите текст отзыва"></textarea>
                <button class="add_review_btn">Опубликовать отзыв</button>
            </div>
        </div>
    </section>

    `;
    return view;
}

export default About;
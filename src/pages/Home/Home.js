import "./Home.scss";

const Home = () => {
    const view = `

    <section class="first__section wrapper">
        <div class="first__content container">
            <div class="content__text">
                <h1>Добро пожаловать в <br> 
                WholeFoods Market!</h1>
                <p>Наш магазин создан для всех, кто ценит здоровую пищу и натуральные продукты. Некоторые думают, что такая еда скучна и однообразна. Это миф, который мы можем развеять благодаря большому ассортименту продукции. <br> Интернет-магазин здорового питания постоянно пополняется новыми вкусными и полезными продуктами, которые позволяют разнообразить любое меню.</p>
                <a href="/#/catalog">Перейти в каталог</a>
            </div>
            <div class="content__img">
                <img src="../../images/first_section.jpg" alt="first_section_img">
            </div>
        </div>
    </section>
    <section class="second__section wrapper">
        <div class="second__content container">
            <div class="content__img">
                <img src="../../images/second_section.jpg" alt="second_section_img">
            </div>
            <div class="content__text">
                <h2>О НАС</h2>
                <p>Люди всё больше думают о качестве еды, её влиянии на здоровье и благополучие. В то же время есть спрос на органические продукты, не содержащие консервантов и вредных веществ. <br>
                Экопродукты в нашем интернет-магазине — не просто промысел, это наш стиль жизни. Для нашей команды — это возможность открыть окно в мир и поделиться с другими своими чувствами, опытом здорового питания, желанием жить в гармонии с окружающим миром. <br>
                <b>Наша миссия выполнима</b> — делать людей более счастливыми с помощью натуральных качественных продуктов, отличного обслуживания и активного продвижения принципов здорового питания в обществе. <br>
                Будьте уверены, что, выбирая наши услуги, вы сэкономите время и купите действительно полезные продукты питания!
                </p>
                <a href="/#/aboutus">Подробнее</a>
            </div>
        </div>
    </section>
    <section class="third__section wrapper">
        <div class="third__content container">
            <h2>Специальные предложения</h2>
            <div class="swiper-container">
                <div class="swiper-wrapper">
                                               
                </div>
                <div class="swiper-button-prev"></div>
                <div class="swiper-button-next"></div>
                <div class="swiper-pagination"></div>
            </div>
            <a href="/#/specialoffers">Больше предложений</a>
        </div>
    </section>
    <section class="fourth__section wrapper">
        <div class="fourth__content container">
            <h2>ОТЗЫВЫ</h2>
            <div class="reviews__container">
                
            </div>
            <a href="/#/aboutus">Больше отзывов</a>
        </div>
    </section>

    `;
    return view;
}

export default Home;
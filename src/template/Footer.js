import "./header_footer.scss";

const Footer = () => {
    const view = `

    <div class="container">
        <div class="footer__about">
            <a class="footer__logo" href="/#">
                <img src="images/logo1.png" alt="logo">
            </a>
            <a class="footer__tel" href="tel:+375296193028">+375(29)619-30-28</a>
            <a class="footer__email" href="mailto:krasniakovg01@gmail.com">krasniakovg01@gmail.com</a>
            <div class="social__btns">
                <div class="social__btn social__git"></div>
                <div class="social__btn social__vk"></div>
                <div class="social__btn social__inst"></div>
                <div class="social__btn social__lkin"></div>
            </div>
        </div>
        <div class="footer__nav">
            <h3>Быстрая навигация:</h3>
            <ul class="fastmenu__list">
                <li><a href="/#" class="fastmenu__link">Главная</a></li>
                <li><a href="/#/catalog" class="fastmenu__link">Каталог</a></li>
                <li><a href="/#/specialoffers" class="fastmenu__link">Акции и скидки</a></li>
                <li><a href="/#/aboutus" class="fastmenu__link">О нас</a></li>
                <li><a href="/#/paydelivery" class="fastmenu__link">Оплата и доставка</a></li>
                <li><a href="/#/optovikam" class="fastmenu__link">Оптовикам</a></li>
            </ul>
        </div>
    </div>

    `;
    return view;
}

export default Footer;
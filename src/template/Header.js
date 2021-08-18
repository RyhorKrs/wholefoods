import "./header_footer.scss";

const Header = () => {
    const view = `
    
    <div class="header__top container">
        <div class="user__location">Ваш город?</div>
        <a href="tel:+375296193028">+375(29) 619-30-28</a>
    </div>
    <div class="header__bottom container">
        <div class="header__menu">
            <div class="menu__btn">
                <div class="menu__icon">       
                    <span></span>
                </div>
                <div>МЕНЮ</div>
            </div>
            <nav class="menu__body">
                <ul class="menu__list">
                    <li><a href="/#" class="menu__link">Главная</a></li>
                    <li><a href="/#/catalog" class="menu__link">Каталог</a></li>
                    <li><a href="/#/specialoffers" class="menu__link">Акции и скидки</a></li>
                    <li><a href="/#/aboutus" class="menu__link">О нас</a></li>
                    <li><a href="/#/paydelivery" class="menu__link">Оплата и доставка</a></li>
                    <li><a href="/#/optovikam" class="menu__link">Оптовикам</a></li>
                </ul>
            </nav>
        </div>
        <a href="/#" class="header__logo">
            <img src="../images/logo1.png" alt="logo">
        </a>
        <div class="header__basket">Корзина
            <div class="basket__counter"><span>0</span></div>
        </div>
    </div>

    `;
    return view;
};

export default Header;
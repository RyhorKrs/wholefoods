import "./SpecialOffers.scss";

const SpecialOffers = () => {
    const view = `
    
    <section class="special-goods__section wrapper">
        <div class="special-goods__content container">
            <h2>Акционные товары</h2>
            <div class="special-goods__list">
                  
            </div>
            <a href="/#/catalog">Перейти в каталог</a>
        </div>
    </section>

    <section class="promocodes__section wrapper">
        <div class="promocodes__content container">
            <h2>Специальные предложения</h2>
            <div class="promocodes__list">
                     
            </div>
        </div>
    </section>

    `;
    return view;
}

export default SpecialOffers;
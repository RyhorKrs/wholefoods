import "./Catalog.scss";

const Catalog = () => {
    const view = `
    
    <section class="catalog__section wrapper">
        <div class="catalog__content container">
            <h2>Каталог товаров</h2>
            <div class="filter__body">
                <div class="filter__list">
                    <div data-filter="meat" class="filter__item">
                        <div class="filter_img">
                            <img src="./images/catalog/0mini-meat.png" alt="filter image">
                        </div> 
                        <p>Мясо</p>
                    </div>
                    <div data-filter="fish" class="filter__item">
                        <div class="filter_img">
                            <img src="./images/catalog/0mini-fish.png" alt="filter image">
                        </div>
                        <p>Морепродукты</p>
                    </div>
                    <div data-filter="water" class="filter__item">
                        <div class="filter_img">
                            <img src="./images/catalog/0mini-water.png" alt="filter image">
                        </div>
                        <p>Напитки</p>
                    </div>
                    <div data-filter="bakaleya" class="filter__item">
                        <div class="filter_img">
                            <img src="./images/catalog/0mini-bakaleya.png" alt="filter image">
                        </div>
                        <p>Бакалея</p>
                    </div>
                    <div data-filter="species" class="filter__item">
                        <div class="filter_img">
                            <img src="./images/catalog/0mini-spicesnnuts.png" alt="filter image">
                        </div>
                        <p>Специи и орехи</p>
                    </div>
                    <div data-filter="all" class="filter__item">
                        <div class="filter_img">
                        </div>
                        <p>Все товары</p>
                    </div>
                </div>
            </div>
            <div class="catalog__list">
                
            </div>
        </div>
    </section>

    `;
    return view;
}

export default Catalog;
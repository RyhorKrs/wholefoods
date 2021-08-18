import "./modalCatalogItem.scss";

const ModalCatalogItem = () => {
    const view = `

    <div class="modal__item">        
        <div class="modal_item__body">
            <div class="item__content">
                <div class="good__info">
                    <img src="./images/catalog/109107.jpeg" alt="good">
                    <h3>asdasdasdasdasd asd asd asd asd as as d</h3>
                    <p class="good__description"><span class="good__price">98.55</span> бел.руб./ 1кг</p>
                </div>
                <span class="modal_item__close"></span>
            </div>
        </div>
    </div>

    `;
    return view;
};

export default ModalCatalogItem;
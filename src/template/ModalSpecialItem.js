import "./modalSpecialItem.scss";

const ModalSpecialItem = () => {
    const view = `

    <div class="modal__special">   
        <div class="modal_special__body">
            <div class="special__content">
                <div class="special-good__info">
                    <img src="./images/catalog/109107.jpeg" alt="good">
                    <h3>КУСОК ФИЛЕ ЛОСОСЯ ОХЛАЖД.</h3>
                    <span class="special-good__new-price">58.55</span>
                    <p class="special-good__description"><span class="special-good__old-price">98.55</span> бел.руб./ 1кг</p>
                </div>
                <span class="modal_special__close"></span>
            </div>
        </div>
    </div>

    `;
    return view;
};

export default ModalSpecialItem;
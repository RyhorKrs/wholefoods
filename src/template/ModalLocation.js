import "./modalLocation.scss";

const ModalLocation = () => {
    const view = `

    <div class="modal__location"> 
        <div class="modal_location__body">
            <div class="location__content">
                <h2>Введите Ваш город:</h2>
                <input type="text" class="user_location__input" placeholder="*Ваш город:">
                <button class="modal_location__enter">Подтвердить</button>
                <span class="modal_location__close"></span>
            </div>
        </div>
    </div>

    `;
    return view;
};

export default ModalLocation;
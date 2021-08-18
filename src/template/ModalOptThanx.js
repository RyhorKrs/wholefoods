import "./modalOptThanx.scss";

const ModalOptThanx = () => {
    const view = `

    <div class="modal__opt_thanks">          
        <div class="modal_opt_thanks__body">
            <div class="opt_thanks__content">
                <div class="opt_thanks__img">
                    <img src="./images/thank-you.png" alt="thank_you">
                </div>
                <div class="opt_thanks__text">
                    <h2>Ваша заявка отправлена!!!</h2>
                    <p>В ближайшее время с Вами свяжется сотрудник.</p>
                </div>
            </div>
        </div>
    </div>

    `;
    return view;
};

export default ModalOptThanx;
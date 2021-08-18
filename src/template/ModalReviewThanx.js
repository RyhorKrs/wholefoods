import "./modalReviewThanx.scss";

const ModalReviewThanx = () => {
    const view = `

    <div class="modal__review_thanks">      
        <div class="modal_review_thanks__body">
            <div class="review_thanks__content">
                <div class="review_thanks__img">
                    <img src="../images/thank-you.png" alt="thank_you">
                </div>
                <div class="review_thanks__text">
                    <h2>Спасибо <br> за Ваш отзыв!!!</h2>
                </div>
            </div>
        </div>
    </div>

    `;
    return view;
};

export default ModalReviewThanx;
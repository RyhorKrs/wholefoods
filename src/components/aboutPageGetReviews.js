import getAllReviews from "../utils/getReviewsData";

const generateAboutReviews = async () => {

    let data = await getAllReviews();
  
    const reviewsList = document.querySelector('.reviews__list');

    data = data.reverse();
    
    reviewsList.innerHTML = '';
    
    data.forEach(elem => {
        reviewsList.innerHTML += `
        <div class="reviews__item">
            <div class="review__header">
                <div class="header__name">${elem.reviewUserName}</div>
                <div class="header__date">${elem.reviewDate}</div>
            </div>
            <div class="review__text">
            ${elem.reviewText}
            </div>
        </div>
        `;
    });
};

export default generateAboutReviews;
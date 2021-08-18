import regeneratorRuntime from "regenerator-runtime";
import getAllReviews from "../utils/getReviewsData";

const generateHomeReviews = async () => {

    let data = await getAllReviews();
  
    const reviewsList = document.querySelector('.reviews__container');

    data = data.reverse();
    let counter = 0;
    
    reviewsList.innerHTML = '';
    
    data.forEach(elem => {
        if(counter > 1) {
            return;
        }

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

        counter++; 
    });
};
  
  export default generateHomeReviews;
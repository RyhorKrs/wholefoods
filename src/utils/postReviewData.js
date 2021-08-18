import generateAboutReviews from "../components/AboutPageGetReviews";
import { modalReviewThxOpen, modalReviewThxClose } from "../components/modalReviewThx";

const reviewsURL = 'http://localhost:3000/reviews';

const postReviewData = (title, time, text) => {

    fetch(reviewsURL, {
        method: "POST",
        body: JSON.stringify({
            "reviewUserName":title,
            "reviewDate":time,
            "reviewText":text
        }),
        headers: {
            "Content-type": "application/json; charset=utf-8"
        }
    })
    .then(res => res.json());
};

const validateReviewForm = () => {
    const nameInput = document.querySelector('.reviews__form input');
    const textInput = document.querySelector('.reviews__form textarea');

    let err = 0;

    nameInput.classList.remove('err');
    textInput.classList.remove('err');

    if (nameInput.value.trim() === '') {
        nameInput.classList.add('err');
        err++;
    }
    if (textInput.value.trim() === '') {
        textInput.classList.add('err');
        err++;
    }

    return err;
};

const addReview = () => {
    let err = validateReviewForm();

    if (err) {
        return;
    } else {
        const nameInput = document.querySelector('.reviews__form input');
        const textInput = document.querySelector('.reviews__form textarea');

        let nowDay = new Date().toLocaleDateString();

        postReviewData(nameInput.value, nowDay, textInput.value);

        nameInput.value = '';
        textInput.value = '';

        generateAboutReviews();

        modalReviewThxOpen();
        setTimeout(modalReviewThxClose, 2000);
    }
};

export default addReview;
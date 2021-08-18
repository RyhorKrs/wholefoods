import { modalOptThxOpen, modalOptThxClose } from "../components/modalOptThx";

const optURL = 'http://localhost:3000/optovikCallback';

const postOptData = (title, phone, time, text) => {

    fetch(optURL, {
        method: "POST",
        body: JSON.stringify({
            "optName": title,
            "optPhone": phone,
            "optDate": time,
            "optText": text
        }),
        headers: {
            "Content-type": "application/json; charset=utf-8"
        }
    })
    .then(res => res.json());
};

const validateOptForm = () => {
    const nameInput = document.querySelector('.optovikam__form input:first-of-type');
    const phoneInput = document.querySelector('.optovikam__form input:last-of-type');
    const textInput = document.querySelector('.optovikam__form textarea');

    let err = 0;

    nameInput.classList.remove('err');
    phoneInput.classList.remove('err');
    textInput.classList.remove('err');

    if (nameInput.value.trim() === '') {
        nameInput.classList.add('err');
        err++;
    }
    if (phoneInput.value.trim() === '') {
        phoneInput.classList.add('err');
        err++;
    }
    if (textInput.value.trim() === '') {
        textInput.classList.add('err');
        err++;
    }

    return err;
};

const addOptCallback = () => {
    let err = validateOptForm();

    if (err) {
        return;
    } else {
        const nameInput = document.querySelector('.optovikam__form input:first-of-type');
        const phoneInput = document.querySelector('.optovikam__form input:last-of-type');
        const textInput = document.querySelector('.optovikam__form textarea');

        let now = new Date().toLocaleDateString() + ' ' + new Date().toLocaleTimeString();

        postOptData(nameInput.value, phoneInput.value, now, textInput.value);

        nameInput.value = '';
        phoneInput.value = '';
        textInput.value = '';

        modalOptThxOpen();
        setTimeout(modalOptThxClose, 3000);
    }
};

export default addOptCallback;
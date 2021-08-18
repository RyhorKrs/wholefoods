import router from './routes';
import {getContent} from './actions';

window.addEventListener('load', () => {
    router();
    getContent();
});

window.addEventListener('hashchange', () => {
    router();
    getContent();
});

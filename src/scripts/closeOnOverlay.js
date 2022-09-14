import closePopup from './closePopup';
import { popup } from './constants';

function closeOnOverlay({ target }) {
    if (target && target.classList.contains('popup_opened')) {
        closePopup(popup);
    }
}

popup.addEventListener('click', closeOnOverlay);

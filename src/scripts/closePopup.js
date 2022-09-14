import { popupCloseButton, popup } from './constants';

// eslint-disable-next-line no-shadow
export default function closePopup(popup) {
    popup.classList.remove('popup_opened');
}

popupCloseButton.addEventListener('click', () => closePopup(popup));

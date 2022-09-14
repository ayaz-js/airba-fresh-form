import resetValidation from './validate';
import showPopup from './showPopup';
import { popup, emailInput, form } from './constants';

form.addEventListener('submit', (event) => {
    event.preventDefault();

    const formData = new FormData();

    formData.append('Email', emailInput.value);
    fetch('https://script.google.com/macros/s/AKfycbyqWOd_B2jVU1g9MLiE-IbJTOMQTNyE9LtkoVcgeRujDx2oAftx_ktiTxJyPz2QCqIJlQ/exec', {
        method: 'POST',
        body:   formData,
    });
    form.reset();
    resetValidation(form);
    showPopup(popup);
});

import resetValidation from './validate';

const form = document.querySelector('.form');
const emailInput = form.querySelector('.form__input_type_email');

form.addEventListener('submit', (event) => {
    event.preventDefault();

    const formData = new FormData();

    formData.append('Email', emailInput.value);
    fetch('https://script.google.com/macros/s/AKfycbyqWOd_B2jVU1g9MLiE-IbJTOMQTNyE9LtkoVcgeRujDx2oAftx_ktiTxJyPz2QCqIJlQ/exec', {
        method: 'POST',
        body:   formData,
    }).then((response) => {
        if (response.ok) {
            form.reset();
            resetValidation(form);
        }
    });
});

document.addEventListener("DOMContentLoaded", () => {
    
    // Get a reference to the form element, add an event listener on
    // the 'submit' event, and prevent the default behaviour - submission
    const form = document.getElementById("form");
    form.addEventListener('submit', (event) => {
        event.preventDefault();

        const emailInput = document.getElementById('email');
        const phoneInput = document.getElementById('phone');

        const emailHasValue = emailInput.value.length > 0;
        const phoneHasValue = phoneInput.value.length > 0;

        // If neither email.value nor phone.value has length > 0, report an error
        if (!emailHasValue && !phoneHasValue) {
            emailInput.setCustomValidity('Please enter either email or phone');
            emailInput.reportValidity();
        } else {
            // Otherwise go ahead and submit the form
            form.submit();
        }
    });

    // If the user trips the 'input' event on the email input, check if the new value
    // has length greater than zero - if it does, remove the error message
    const emailInput = document.querySelector('#email');
    emailInput.addEventListener('input', (event) => {
        emailInput.setCustomValidity('');
    });

    // If the user trips the 'input' event on the phone input, check if the new value
    // has length greater than zero - if it does, remove the error message
    const phoneInput = document.getElementById('phone');
    phoneInput.addEventListener('input', (event) => {
        emailInput.setCustomValidity('');
    });
});
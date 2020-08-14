const validate = (e) => {
    const name = $nameInput.value;
    const salary = parseInt($salaryInput.value);
    const bd = $bdInput.value;
    const phone = $phoneInput.value;
    const errors = []

    e.preventDefault();
    $errorBox.innerHTML = '';

    if (name.length <= 2) {
        errors.push('Name must be longer than two characters.');
    }

    if (16000 < salary || salary < 10000) {
        errors.push('Salary must be between 10K to 16K.')
    }

    if (!bd) {
        errors.push('You must input birthday date.');
    }

    if (phone.length !== 10) {
        errors.push('Phone number must contain 10 digits.')
    }

    if (!errors[0]) {
        $form.style.setProperty('display', 'none');
        $welcomeMsg.innerHTML = `Welcome ${name}!`;

    } else {
        for (let error of errors) {
            const errorMsg = document.createElement('p');

            errorMsg.innerHTML = error
            $errorBox.appendChild(errorMsg);
        }
    }
}

// Finally, if there are any errors, you should create an element and add it to the page - these should be in red

const $nameInput = document.getElementById('name-input');
const $salaryInput = document.getElementById('salary-input');
const $bdInput = document.getElementById('bd-input');
const $phoneInput = document.getElementById('phone-input'); 
const $submitButton = document.getElementById('submit');
const $errorBox = document.getElementById('error-box');
const $welcomeMsg = document.getElementById('welcome-msg'); 
const $form = document.getElementById('signup');

$submitButton.onclick = validate;
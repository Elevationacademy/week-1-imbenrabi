const reservations = {
    bob: { claimed: false },
    ted: { claimed: true }
}

const checkReservation = (name) => {
    if (!reservations[name]) {
        reservations[name] = { claimed: true }
        $resultDiv.innerHTML = `Hmm, we don't have a reservation under that name, but we have room So come on in ${name}!`;
    } else if (reservations[name].claimed === false) {
        $resultDiv.innerHTML = `Welcome ${name}!`;
        reservations[name].claimed = true;
    } else {
        $resultDiv.innerHTML = 'Hmm, someone already claimed this reservation';
    }
}

const $nameInput = document.getElementById('name-input');
const $checkInBtn = document.getElementById('check-in-btn');
const $resultDiv = document.getElementById('result-div');


$checkInBtn.onclick = (e) => {
    const name = $nameInput.value.toLowerCase();

    e.preventDefault();
    checkReservation(name);
    $nameInput.value = "";
};
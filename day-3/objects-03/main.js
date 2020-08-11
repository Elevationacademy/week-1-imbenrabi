//EX 05 - .2
const reservations = {
    Bob: { claimed: false },
    Ted: { claimed: true }
}

//just adjusting our data base a bit to apply with our new 5.2 feature
reservations.bob = { claimed: false };
reservations.ted = { claimed: true };
delete reservations.Bob;
delete reservations.Ted;

const name = prompt('Please enter the name for your reservation').toLowerCase();
// console.log('1', reservations[name])


if (!reservations[name]) {
    reservations[name] = {
        name: { claimed: true }
    }
} else if (reservations[name].claimed === false) {
    alert(`Welcome ${name}!`)
} else {
    alert('Hmm, someone already claimed this reservation')
}

// console.log('2', reservations[name])



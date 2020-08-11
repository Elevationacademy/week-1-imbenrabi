const reservations = {
    Bob: { claimed: false },
    Ted: { claimed: true }
}


const name = prompt('Please enter the name for your reservation');
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

let boughtTesla = true
const yearOfTeslaPurchase = 2014
let isUSCitizen = true
let currentYear = 2018

// If the customer has previously bought a Tesla, and the customer is a US citizen, the AI should check how long ago the customer bought their Tesla
// If the Tesla was bought four or more years ago, the AI should ask (console log) whether the customer would like an upgrade
// Otherwise, it should ask whether the customer is satisfied with the car
// If the customer is not as US citizen but has bought a Tesla, the AI should ask whether the customer would like to move to the US
// If the customer has not bought a Tesla, the AI should ask whether they are interested in buying one

if (boughtTesla && isUSCitizen) {
    if ((currentYear - yearOfTeslaPurchase) >= 4) {
        console.log('Would U like to upgrade?');
    } else {
        console.log('AreU satisfied?');
    }
} else if (!isUSCitizen) {
    console.log('Would U like to move to the US?');
} else if (!boughtTesla && isUSCitizen) {
    console.log('Would you like to buy a Tesla?');
}

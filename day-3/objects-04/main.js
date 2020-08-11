//Extention
const date = 3

const kitchen = {
    owner: "Geraldine",
    hasOven: true, // choose one
    fridge: {
        price: 500,
        works: false, // choose one
        items: [
            { name: "cheese", expiryDate: 7 },
            { name: "raddish", expiryDate: 2 },
            { name: "bread", expiryDate: 1 }
        ]
    }
}

switch (kitchen.hasOven | kitchen.fridge.works) {
    case (true | true):
        console.log(`Geraldine's raddish expired ${date - kitchen.fridge.items[1].expiryDate} day ago. Weird, considering her fridge works. Luckily, she has an oven to cook the raddish in.`);
        break;
    case (false | true):
        console.log(`Geraldine's raddish expired ${date - kitchen.fridge.items[1].expiryDate} day ago. Weird, considering her fridge works. Too bad she doesn't have an oven to cook the raddish in.`);
        break;
    case (true | false):
        console.log(`Geraldine's raddish expired ${date - kitchen.fridge.items[1].expiryDate} day ago. Probably because her fridge doesn't work. Luckily, she has an oven to cook the raddish in. And she'll have to pay ${kitchen.fridge.price / 2} to fix the fridge.`);
        break;
    case (false | true):
        console.log(`Geraldine's raddish expired ${date - kitchen.fridge.items[1].expiryDate} day ago. Probably because her fridge doesn't work. Too bad she doesn't have an oven to cook the raddish in. And she'll have to pay ${kitchen.fridge.price / 2} to fix the fridge.`);
        break;    
    default:
        break;
}




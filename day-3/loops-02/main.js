//Ex 06
let nums = [773, 414, 213, 374, 434, 700, 506, 495, 852, 585, 271, 198, 689, 248, 708, 197, 96, 260, 921, 834, 258, 662, 501, 632, 715, 503, 538, 289, 596, 381, 817, 280, 968, 877, 431, 146, 491, 724, 83, 841, 174, 21, 460, 25, 785, 539, 291, 404, 903, 278, 159, 229, 216, 683, 84, 87, 879, 406, 661, 537, 890, 394, 382, 477, 271, 373, 82, 104, 709, 723, 333, 958, 95, 983, 732, 917, 324, 785, 754, 23, 659, 551, 408, 442, 766, 242, 611, 846, 802, 866, 817, 848, 227, 349, 243, 837, 21, 954, 146, 11]

for (let i=0; i<nums.length; i++) {
    if (nums[i] === 709) {
        console.log(i);
    }
}

//Ex 07
const names = ["Ashley", "Donovan", "Lucas"]
const ages = [23, 47, 18]
const people = []

for (let i=0; i<names.length; i++) {
    people.push({
        name: names[i],
        age: ages[i]
    })
}

//Ex 08
for (const p of people) {
    console.log(`${p.name} is ${p.age} years old`);
}

//Ex 09
const posts = [
    {id: 1, text: "Love this product"},
    {id: 2, text: "This is the worst. DON'T BUY!"},
    {id: 3, text: "So glad I found this. Bought four already!"}
]

for (let postIndex in posts) {
    if (posts[postIndex].id === 2) {
        posts.splice(postIndex, 1);
    }
}

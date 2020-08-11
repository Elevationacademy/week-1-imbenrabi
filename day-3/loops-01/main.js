//Ex 01
const names = ['ben', 'adam', 'nitay'];
const ages = [34, 34, 30];

for (let i = 0; i < names.length; i++) {
    console.log(`${names[i]} is ${ages[i]} years old`);    
}

//Ex 02
const arr = [1, 3, 9, 17];
let sum = 0;

for (const num of arr) {
    sum += num
}

console.log(sum);

// Ex 03
const avg = sum / arr.length;
//console.log(avg);

// Ex 04
const nums = [];

for (let i = 1; i < 101; i++) {
    nums.push(i);
}

//console.log(nums);

//Ex 05
for (const num of nums) {
    if (num % 2 !== 0) {
        console.log(num);
    }
}



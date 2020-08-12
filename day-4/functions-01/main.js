//Ex 01
const calcAge = function(currentYear, yearBorn) {
    return currentYear - yearBorn;
}

const age = calcAge(2017, 1989)
console.log(age);

//Ex 02
const calcAgeToo = function(currentYear, yearBorn) {
    console.log(`You are eithen ${currentYear - yearBorn} or ${currentYear - yearBorn - 1}`);
}

const ageTwo = calcAgeToo(2018, 2015);

//Ex 03
const isEven = function(num) {
   return num % 2 === 0 ? true : false;
}

console.log(isEven(5));

//Ex 04
const findOdds = function(arr) {
    for (const num of arr) {
        if (!isEven(num)) {
            console.log(num);
        }
    }
}

findOdds([3,4,5,6,7,89]);

//Ex 05
const exist = function(arr, num) {
    const found = arr.find(element => element === num)
    return found ? true : false; 
}

console.log(exist([3,4,5,6,7,8],9));

//Ex 06
const calculator = {
    add: function(num1, num2) {
        return num1 + num2;
    },
    subtract: function(num1, num2) {
        return num1 - num2;
    }
}

const result1 = calculator.add(20, 1)
const result2 = calculator.subtract(30, 9)

console.log(calculator.add(result1, result2)) //should print 42

//Ex 07
const increaseByNameLength = function(money, name) {
    return money * name.length;
}

const makeRegal = function(name) {
    return `His Royal Highness, ${name}`
}

const turnToKing = function(name, money){
    name = name.toUpperCase()
    money = increaseByNameLength(money, name)
    name = makeRegal(name)

    console.log(name + " has " + money + " gold coins")
}

turnToKing("martin luther", 100) // should print "His Royal Highness, MARTIN LUTHER has 1300 gold coins"

//Extention
const splice = function(array, index=0, howMany, element1, element2) {
    let deleted = [];

    if (!howMany && !element1 && element1 !== 0 && !element2) {
        const newArr = []
        for (let i=0; i<arr.length; i++) {
            if (i === index) {
                deleted = array.slice(index);
                arr = newArr;
                return deleted;

            }
            newArr.push(array[i])
        }
    }
    
    if (howMany === 0 ) {
        if (!element2 && element2 !== 0) {
            switch (index) {
                case 0:
                    arr.unshift(element1);
                    return deleted;
                case (array.length - 1):
                    return arr.push(element1);
                default:
                    const newArr = []
                    for (let elemIndex in array) {
                        if (elemIndex === index) {
                            newArr[elemIndex] = element1;
                            newArr.push(array[elemIndex]);
                        }
    
                        newArr.push(array[elemIndex]);
                    }
                    arr = newArr;
                    return deleted;
            }
        } else {
            switch (index) {
                case 0:
                    arr.unshift(element2);
                    return arr.unshift(element1);
                case (array.length - 1):
                    arr.push(element2)
                    return arr.push(element1);
                default:
                    const newArr = []
                    for (let elemIndex in array) {
                        if (elemIndex === index) {
                            newArr[elemIndex] = element1;
                            newArr[elemIndex + 1] = element2;
                            newArr.push(array[elemIndex]);
                        }
    
                        newArr.push(array[elemIndex]);
                    }
                    arr = newArr;
                    return deleted;
            }
        }
            
    }

    if (index === 0 && !element1) {
        arr = array.slice(howMany);
    } else {
        const deleted = [arr[index]];
        arr[index] = element1
        return deleted
    }

    
}

// remove 1 element
let arr = [1,2,3]
splice(arr, 0,1); 
console.log(arr); //should be [2,3]


// add 1 element
arr = [1,2,3]
splice(arr, 0,0,0); 
console.log(arr); //should be [0,1,2,3]


// add 2 elements
arr = [1,2,3]
splice(arr,0,0,-1,0); 
console.log(arr); //should be [-1,0,1,2,3]


// replace 1 element
arr = [1,2,3]
splice(arr,1,1,55); 
console.log(arr); //should be [1,55,3] 


// delete all elements from index to end
arr = [1,2,3,4,5]
splice(arr,1); 
console.log(arr); //should be [1] 


// returns array of deleted elements
arr = [1,2,3]
let deleted = splice(arr,1); 
console.log(deleted); //should be [2,3] 


// returns an array of the deleted element (1 element)
arr = [1,2,3]
deleted = splice(arr,1,1); 
console.log(deleted); //should be [2] 


// returns an empty array when no elements are deleted
arr = [1,2,3]
deleted = splice(arr,1,0,5); 
console.log(deleted); //should be [] 

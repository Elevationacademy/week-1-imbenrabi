const myList = [
    {
        propA: 'alef',
        propB: 0
    },
    {
        propA: 'beit',
        propB: 1
    }
]

console.log(myList);
myList[0].propA = 'gimel';
console.log('after modifying propA of 1st obj', myList);
myList.splice(1, 1);
console.log('after removing 2st obj', myList);

const secondList = [
    {
        propA: 'gimel',
        propB: 2
    },
    {
        propA: 'dalet',
        propB: 3
    }
]



myList.push(...secondList);
console.log('after adding 2nd list', myList);

const library = {
    books: [
        {
            title: '1984',
            author: 'George Orwell'
        },
        {
            title: 'Naked Sun',
            author: 'Isaac Asimov'
        }
    ]
}

myList.push(...library.books);
console.log('after adding books', myList);
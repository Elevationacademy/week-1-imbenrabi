//Ex 10
const posts = [
    {
      id: 1, 
      text: "Love this product",
      comments: []
    },
    { 
      id: 2, 
      text: "This is the worst. DON'T BUY!", 
      comments: [
                  {id: 1, text: "Idiot has no idea"}, 
                  {id: 2, text:"Fool!"}, 
                  {id: 3, text: "I agree!"}
                ]
    },
    {
      id: 3, 
      text: "So glad I found this. Bought four already!",
      comments: []
    }
]

for (let postIndex in posts) {
    if (posts[postIndex].id === 2) {
        for (let commentIndex in posts[postIndex].comments) {
            if (posts[postIndex].comments[commentIndex].id === 3) {
                posts[postIndex].comments.splice(commentIndex, 1);
            }
        }
    }
}

//Ex Extention
const dictionary = {
    "A": ["Aardvark", "Abacus", "Actually", "Atomic"],
    "B": ["Banana", "Bonkers", "Brain", "Bump"],
    "C": ["Callous", "Chain", "Coil", "Czech"]
}

for (let key in Object.keys(dictionary)) {
    console.log(`Words that begins with ${Object.keys(dictionary)[key]}`);
    for (const word of dictionary[Object.keys(dictionary)[key]]) {
        console.log(word);
    }
}


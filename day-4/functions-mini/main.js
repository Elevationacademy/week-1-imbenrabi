people_info = [
    {
      name: "guido",
      profession: "bungalow builder",
      age: 17,
      country: "canaland",
      city: "sydurn",
      catchphrase: "what a piece of wood!"
    },
    {
      name: "petra",
      profession: "jet plane mechanic",
      age: 31,
      country: "greenmark",
      city: "bostork",
      catchphrase: "that's my engine, bub"
    },
    {
      name: "damian",
      profession: "nursery assistant",
      age: 72,
      country: "zimbia",
      city: "bekyo",
      catchphrase: "with great responsibility comes great power"
    }
]

const upperCasePhrase = (phrase) => {
    return phrase
      .toLowerCase()
      .split(' ')
      .map(word => word.charAt(0).toUpperCase() + word.slice(1))
      .join(' ');
}

const upperCaseWord = (word) => {
    return word
        .toLowerCase()
        .charAt(0).toUpperCase() + word.slice(1)
}

const getSummary = (person) => {
    let summary = `${upperCaseWord(person.name)}, age ${person.age}, a ${upperCasePhrase(person.profession)} from ${upperCaseWord(person.city)}, ${upperCaseWord(person.country)}, catchphrase: ${upperCaseWord(person.catchphrase)}`;
    return summary
}

for (const person of people_info) {
    console.log(getSummary(person)); 
}

// Ex 02
const story = "In the beginning there was light. Then there were wolves. Finally there was a big fire. Ultimately, Shelob the wolf-master put out the fire with her feet. But until then, the fire caused one heck of a lot of damage."
const specialChars = [",", ".", "'", '"',"?", "!", ";"]
const wordCounts = {}

let lowerCaseStory = story.toLowerCase();
let wordsArray = lowerCaseStory.split(' ');

const hasSpecialChar = (word) => {
    for (let char of specialChars) {
        if (word.indexOf(char) && word.indexOf(char) !== -1) {
            return [true, word.indexOf(char)];
        }
    }
    return [false, null];  
}

const stripChar = (word, char) => {
    if (word.indexOf(char) !== word.length - 1) {
        return word
        .split(char)
        .join('')
    }

    return word.slice(0, word.length - 1)
} 

const countAll = (wordsArr) => {
    for (let word of wordsArr) {
        if (hasSpecialChar(word)[0]) {
            const char = word.slice(hasSpecialChar(word)[1]);
            const cleanWord = stripChar(word, char);
            if (!wordCounts[char]) {
                wordCounts[char] = 0;
            }

            wordCounts[char] += 1;

            if (!wordCounts[cleanWord]) {
                wordCounts[cleanWord] = 0;
            }

            wordCounts[cleanWord] += 1;
        } else {
            if (!wordCounts[word]) {
                wordCounts[word] = 0;
            }
            
            wordCounts[word] += 1;
        }
    }
}

countAll(wordsArray);

console.log(wordCounts)


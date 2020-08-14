const  getRandomInt = function(max) {
    return Math.floor(Math.random() * Math.floor(max));
}

const randColorCode = () => {
    let colorCode ='#';
    for (let i = 0; i < 6; i++) {
        colorCode += `${getRandomInt(10)}`;
    }
    return colorCode
}

const handleBoxMouseEnter = (e) => {
    const color = randColorCode();
    e.target.style.backgroundColor = color;
    colorsObj[e.target.id] = color;
}

const isColorsMatch = () => {
    for (let i=0; i < 5; i++ ) {
        if (colorsObj[i] === null || colorsObj[i] !== colorsObj[i + 1]) {
            return false;
        }
    }

    return true;
}

const handleBoxMouseLeave = () => {
    const colorsMatch = isColorsMatch();
    if (colorsMatch) {
        $successBox.innerHTML = 'Nice Job!';
    }
}

const $container = document.getElementById('container');
const $successBox = document.getElementById('success-box');

const colorsObj = {};

for (let i=0; i < 6; i++ ) {
    const box = document.createElement("div");

    box.setAttribute('class', 'box');
    box.setAttribute('id', `${i}`)
    box.onmouseenter = handleBoxMouseEnter;
    box.onmouseleave = handleBoxMouseLeave;
    $container.appendChild(box);
    colorsObj[i] = null;
}

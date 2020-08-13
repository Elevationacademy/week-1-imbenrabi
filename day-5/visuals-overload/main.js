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
    e.target.style.backgroundColor = randColorCode();
}

const $container = document.getElementById('container');


for (let i=0; i < 6; i++ ) {
    const box = document.createElement("div");

    box.setAttribute('class', 'box');
    box.setAttribute('id', `${i}`)
    box.onmouseenter = handleBoxMouseEnter;
    $container.appendChild(box);
}

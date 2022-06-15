const btn = document.querySelector('.btn');
const body = document.querySelector('body');


btn.addEventListener('click', () => {
    function random(min, max) {
        const numOne = Math.floor(Math.random() * (max - min)) + min;
        const numTwo = Math.floor(Math.random() * (max - min)) + min;
        const numThree = Math.floor(Math.random() * (max - min)) + min;
        const sum = numOne + ',' + numTwo + ',' + numThree;
        body.style.backgroundColor = `rgb(${sum})`;

    }

    random(0, 255)
})


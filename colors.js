function randomRGB() {
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
    return `rgb(${r},${g},${b})`
}

// const h1 = document.querySelector('h1');

// setInterval(function() {
//     h1.style.color = randomRGB();
// }, 500);

const letters = document.querySelectorAll('.letter');

const intervalId = setInterval(function () {
    for(let letter of letters) {
        letter.style.color = randomRGB();
    }
}
, 800)

setTimeout(function () {
    clearInterval(intervalId);
}, 10000)


const todo = document.querySelector('li');

//classList is arrayLike and has methods
//add, remove, toggle, contains
todo.classList.add("completed");
todo.classList.toggle("completed");

const h2 = document.querySelector('h2');

setInterval(function() {
    h2 = classList.toggle('big');
    h2.classList.toggle('small');
}, 500)


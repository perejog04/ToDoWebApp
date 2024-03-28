"use strict"; // включаем строгий режим

const btn = document.getElementById('toDo-btn');
const inpt = document.getElementById('toDo-input');
const willDoList = document.querySelector('.willDo-list');
const wasDoingList = document.querySelector('.wasDoing-list');

btn.addEventListener('click', () => {
    willDoList.insertAdjacentHTML(
        'beforeend',
        `<div class="willDo-item">${inpt.value}</div>`
    )
    inpt.value = "";
})

inpt.addEventListener('keyup', (event) => {
    if (event.code == 'Enter' && inpt.value > "") {
        willDoList.insertAdjacentHTML(
            'beforeend',
            `<div class="willDo-item">${inpt.value}</div>`
        )
        inpt.value = "";
    }
})

willDoList.addEventListener('click', (event) => {
    if (event.target.closest('.willDo-item')) {
        // const text = event.target.textContent;
        wasDoingList.insertAdjacentHTML(
            'afterbegin',
            `<div class="wasDoing-item">${event.target.textContent}</div>`
        )
        event.target.remove();
    }
    
})

wasDoingList.addEventListener('click', (event) => {
    if (event.target.closest('.wasDoing-item')) {
        // const text = event.target.textContent;
        willDoList.insertAdjacentHTML(
            'afterbegin',
            `<div class="willDo-item">${event.target.textContent}</div>`
        )
        event.target.remove();
    }
    
})

// document.addEventListener("keydown", (event) => {
//     console.log(`${event.code} ${event.key}`);
// })

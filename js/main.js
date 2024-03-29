"use strict"; // включаем строгий режим

const btn = document.getElementById('toDo-btn');
const inpt = document.getElementById('toDo-input');
const willDoList = document.querySelector('.willDo-list');
const wasDoingList = document.querySelector('.wasDoing-list');

btn.addEventListener('click', () => {
    if (inpt.value > "") {
        willDoList.insertAdjacentHTML(
            'beforeend',
            `<div class="willDo-inner">
                <div class="willDo-item">${inpt.value}</div>
                <button class="willDelete-btn">Delete</button>
            </div>`
        )
        inpt.value = "";
    }
})

inpt.addEventListener('keyup', (event) => {
    if (event.code == 'Enter' && inpt.value > "") {
        willDoList.insertAdjacentHTML(
            'beforeend',
            `<div class="willDo-inner">
                <div class="willDo-item">${inpt.value}</div>
                <button class="willDelete-btn">Delete</button>
            </div>`
        )
        inpt.value = "";
    }
})

willDoList.addEventListener('click', (event) => {
    if (event.target.closest('.willDo-item')) {
        // const text = event.target.textContent;
        wasDoingList.insertAdjacentHTML(
            'afterbegin',
            `<div class="wasDoing-inner">
                <div class="wasDoing-item">${event.target.textContent}</div>
                <button class="wasDelete-btn">Delete</button>
            </div>`
        )
        event.target.nextElementSibling.remove();
        event.target.remove();
    }

    if (event.target.closest('.willDelete-btn')) {
        event.target.previousElementSibling.remove();
        event.target.remove();
    }
    
})

// willDoList.addEventListener('click', (event) => {
//     if (event.target.closest('.willDelete-btn')) {
//         event.target.closest('.willDo-item').remove();
//         event.target.remove();
//     }
// })

wasDoingList.addEventListener('click', (event) => {
    if (event.target.closest('.wasDoing-item')) {
        // const text = event.target.textContent;
        willDoList.insertAdjacentHTML(
            'afterbegin',
            `<div class="willDo-inner">
                <div class="willDo-item">${event.target.textContent}</div>
                <button class="willDelete-btn">Delete</button>
            </div>`
        )
        event.target.nextElementSibling.remove();
        event.target.remove();
    }

    if (event.target.closest('.wasDelete-btn')) {
        event.target.previousElementSibling.remove();
        event.target.remove();
    }
    
})

// document.addEventListener("keydown", (event) => {
//     console.log(`${event.code} ${event.key}`);
// })

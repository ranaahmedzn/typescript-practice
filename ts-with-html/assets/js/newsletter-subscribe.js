"use strict";
// First method
// const input = document.getElementById('emailInput') as HTMLInputElement
// const button = document.getElementById('submitButton') as HTMLButtonElement
// button.addEventListener("click", () => {
//     console.log(`Subscribed successfully with email: ${input.value}`)
// })
// Second method - more better
const input = document.querySelector('.email-input');
const button = document.querySelector('.submit-button');
if (input && button) {
    button.addEventListener("click", () => {
        console.log(`Subscribed successfully with email: ${input.value}`);
    });
}

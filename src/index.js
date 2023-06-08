"use strict";

const state = {
    tempCount: 0,
}

let temperature = document.getElementById("temp-counter__span");
let garden = document.getElementById("garden__span");

// Function to set City


// Function to set Temp Color and Background
function setColor(value) {
    if (value >= 80) {
        temperature.style.color = "red";
        document.body.style.backgroundImage = "url('/images/hot.gif')";
        // temperature.style.backgroundColor = "teal";
    } else if (value >= 70 && value <= 79) {
        temperature.style.color = "orange";
        document.body.style.backgroundImage = "url('/images/summer.gif')";
        // temperature.style.backgroundColor = "green";
    } else if (value >= 60 && value <= 69) {
        temperature.style.color = "yellow";
        document.body.style.backgroundImage = "url('/images/warm.gif')";
        // temperature.style.backgroundColor = "yellow";
    } else if (value >= 50 && value <= 59) {
        temperature.style.color = "green";
        document.body.style.backgroundImage = "url('/images/spring.gif')";
        // temperature.style.backgroundColor = "orange";
    } else {
        temperature.style.color = "teal"; 
        document.body.style.backgroundImage = "url('/images/snow.gif')";
    }
}


// Increment and Decrement Temp

const increaseTemp = () => {
    state.tempCount += 1;
    const tempContainer = document.getElementById("temp-counter__span");
    tempContainer.textContent = `${state.tempCount}`;
    setColor(state.tempCount);
};

const decreaseTemp = () => {
    state.tempCount -= 1;
    const tempContainer = document.getElementById("temp-counter__span");
    tempContainer.textContent = `${state.tempCount}`;
    setColor(state.tempCount);
};

// Register Event Handlers
const registerEventHandlers = () => {

document.getElementById("temp_add_button").addEventListener("click", increaseTemp);

document.getElementById("temp_minus_button").addEventListener("click", decreaseTemp);

};

document.addEventListener("DOMContentLoaded", registerEventHandlers);
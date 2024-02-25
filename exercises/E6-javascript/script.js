// Nora Tunggadevi
// 3190797
// Prof. Peter Ha
// Interactive Media Web (GDES-3091-501)
// February 25 ,2024

//1. interaction

//change colour background by clicking on the colour circle
const greenCircle = document.getElementById("green");
const pinkCircle = document.getElementById("plum");
const blueCircle = document.getElementById("blue");
const interactionContainer = document.getElementById("interactionContainer");

greenCircle.addEventListener("click", function () {
    // console.log(interactionContainer);
    interactionContainer.style.backgroundColor = "lightgreen";
})

pinkCircle.addEventListener("click", function () {
    // console.log(interactionContainer);
    interactionContainer.style.backgroundColor = "plum";
})

blueCircle.addEventListener("click", function () {
    // console.log(interactionContainer);
    interactionContainer.style.backgroundColor = "lightblue";
})

//2. loop

//note from class
//loop task
// 1. select container 
// 2. declare msg variable 
// 3. use for loop 

//loop container
const loopContainer = document.getElementById("loopContainer");
const message = "brave";


// i = iterator 
for (let i = 0; i < 10; i++) {
    console.log("brave");
    const textDiv = document.createElement("div");
    textDiv.innerHTML = message;
    loopContainer.appendChild(textDiv);
}

//3. condition

const conditionContainer = document.getElementById("conditionContainer");
var square = document.getElementById('square');

conditionContainer.addEventListener('mouseover', function () {    //this lets the mouse hover action to happen; mouseover code: https://developer.mozilla.org/en-US/docs/Web/API/Element/mouseover_event 

    if (square.style.backgroundColor !== 'lightsalmon') {    //if the square isn't lightsalmon when the mouse hovered over the conditionContainer then the square is blue
        square.style.backgroundColor = 'blue';
    } else {
        square.style.backgroundColor = 'blue';
    }
});

conditionContainer.addEventListener('mouseout', function () { //this is for the action to change the colour of the square back to lightsalmon if the mouse is hovered out of the conditionContainer; mouseout code:https://developer.mozilla.org/en-US/docs/Web/API/Element/mouseout_event

    if (square.style.backgroundColor !== 'blue') {
        square.style.backgroundColor = 'lightsalmon';
    } else {
        square.style.backgroundColor = 'lightsalmon';
    }
});

//w/o condition

// conditionContainer.addEventListener("mouseover", function () {
//     square.style.backgroundColor = "red";
// })

// conditionContainer.addEventListener("mouseout", function () {
//     square.style.backgroundColor = "lightsalmon";
// })

//4. time
var increaseText = document.getElementById("increaseText");

var sizeNow = 12;

//function to change the font size of the text
var increaseFontSize = function () {
    sizeNow++;
    increaseText.style.fontSize = sizeNow + 'px';
};

//changes size over 1 sec
setInterval(increaseFontSize, 1000); //setInterval code from https://www.programiz.com/javascript/setInterval and https://www.w3schools.com/js/js_timing.asp

//5. input

// Add event listener to the form's submit event; this is used so that when the submit button is pressed the number of the letter submitted stay on the screen. code from: OpenAI. (2024). ChatGPT (3.5) [Large language model]. https://chat.openai.com. question I asked the AI "for this code why doesnt the innerHTML stay on the screen after clicking the button?"
document.getElementById("form").addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent default form submission

    // Call countLetters function
    countLetters();
});

function countLetters() {
    // Get the input value
    var word = document.getElementById("inputText").value;

    // Calculate the number of letters
    var letterCount = word.length;

    // Display the result
    document.getElementById("text-length").innerHTML = letterCount;
}

//6. console
console.log("Hey! Welcome to the console!");
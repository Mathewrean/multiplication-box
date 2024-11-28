


const num1 = Math.ceil(Math.random() * 10);
const num2 = Math.ceil(Math.random() * 10);

console.log(num1, num2);

const question1 = document.getElementById('question');
question1.innerText = `What is ${num1} multiplied by ${num2}?`;

// Initialize score from localStorage or set to 0
let score = JSON.parse(localStorage.getItem('score')) || 0;

// Display initial score
const scoreDisplay = document.getElementById('score');
scoreDisplay.innerText = `Score: ${score}`;

const input1 = document.getElementById('input');
const form1 = document.getElementById('form');

// CorrectAns must be declared with `let` to allow reassignment
let CorrectAns = num1 * num2;

form1.addEventListener('submit', (event) => {
    event.preventDefault(); // Prevent form from refreshing the page
    const answer = +input1.value; // Convert input value to a number

    if (answer === CorrectAns) {
        score++;
    } else {
        score--;
    }
    updateLocalStorage();
    updateScoreDisplay();
    resetQuestion();
    input1.value = ''; // Clear input field
});

function updateLocalStorage() {
    localStorage.setItem('score', JSON.stringify(score));
}

function updateScoreDisplay() {
    scoreDisplay.innerText = `Score: ${score}`;
}

function resetQuestion() {
    // Generate new question
    const newNum1 = Math.ceil(Math.random() * 10);
    const newNum2 = Math.ceil(Math.random() * 10);
    question1.innerText = `What is ${newNum1} multiplied by ${newNum2}?`;
    CorrectAns = newNum1 * newNum2; // Reassign the correct answer
}

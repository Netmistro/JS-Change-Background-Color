// Setup constants
const colorBtn = document.querySelector('.colorBtn');
const bodyBcg = document.querySelector('body');
const colors = ['yellow', 'green', 'blue', 'orange', 'purple', '#3b5998'];

// Add event listener on click event
colorBtn.addEventListener('click', changeColor);

// Function to generate random colors
function changeColor() {
    let randomColor = Math.floor(Math.random() * colors.length);
    bodyBcg.style.backgroundColor = colors[randomColor];
}

function updateText() {
    const textInput = document.getElementById('textInput');
    const textOutput = document.getElementById('outputText');

    textInput.addEventListener('input', function() {
    textOutput.textContent = this.value;
});
}

function updateTextStyle() {
    const outputText = document.getElementById('outputText');
    const bold = document.getElementById('bold');
    const italic = document.getElementById('italic');

    outputText.style.fontWeight = bold.checked ? 'bold' : 'normal';
    outputText.style.fontStyle = italic.checked ? 'italic' : 'normal';
}


let currentLetterSpacing = 0; // set current spacing to 0
function adjustLetterSpacing(amount) {
    currentLetterSpacing += amount; // Adjust the current letter-spacing
    currentLetterSpacing = Math.max(0, currentLetterSpacing); // Ensure it doesn't go below 0
    outputText.style.letterSpacing = `${currentLetterSpacing}px`; // Apply the current letter-spacing to the text

}



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

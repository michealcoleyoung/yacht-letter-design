
function updateText() {
    const textInput = document.getElementById('textInput');
    const textOutput = document.getElementById('outputText');

    textInput.addEventListener('input', function() {
    textOutput.textContent = this.value;
});
}

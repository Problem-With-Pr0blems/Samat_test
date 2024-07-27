const textInput = document.getElementById('text-input');
const totalChars = document.getElementById('total-chars');
const remainingChars = document.getElementById('remaining-chars');

textInput.addEventListener('input', () => {
    const inputLength = textInput.value.length;
    totalChars.textContent = inputLength;
    remainingChars.textContent = 50 - inputLength;
});

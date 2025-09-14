const input = document.querySelector('#name-input');
const userName = document.querySelector('#name-output');

input.addEventListener('input', function() {
    const inputData = input.value.trim();
    const value = inputData === '' ? 'Anonymous' : inputData;

    userName.textContent = value;
});


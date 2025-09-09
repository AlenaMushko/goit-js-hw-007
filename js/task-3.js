const input = document.querySelector('#name-input');
const userName = document.querySelector('#name-output');

input.addEventListener('input', function() {
    const value = input.value.trim() === '' ? 'Anonymous' : input.value;

    userName.textContent = value;
});


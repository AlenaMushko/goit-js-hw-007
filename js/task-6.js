function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}


const createBtn = document.querySelector('[data-create]');
const destroyBtn = document.querySelector('[data-destroy]');

const boxesContainer = document.getElementById('boxes');
Object.assign(boxesContainer.style, {
  display: 'flex',
  flexWrap: 'wrap',
  gap: '44px',
  padding: '32px',
});

const input = document.querySelector('input');

createBtn.addEventListener('click', () => {
  const amount = input.value;
  boxesContainer.innerHTML = '';

    for(let i = 0; i < amount; i += 1) {
        const box = document.createElement('div');
        const size = 30 + i * 10;
        box.style.width = `${size}px`;
        box.style.height = `${size}px`;
        box.style.backgroundColor = getRandomHexColor();
        boxesContainer.appendChild(box);
    }
});

destroyBtn.addEventListener('click', () => {
    boxesContainer.innerHTML = '';
});


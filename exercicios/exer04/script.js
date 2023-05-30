const yesBtn = document.querySelector('.yes-btn');
const noBtn = document.querySelector('.no-btn');

yesBtn.addEventListener('click', () => {
  alert('Parabéns! Vamos casar!');
});

noBtn.addEventListener('mouseover', () => {
const maxX = window.innerWidth - noBtn.offsetWidth;
const maxY = window.innerHeight - noBtn.offsetHeight;
        const randomX = Math.floor(Math.random() * maxX);
        const randomY = Math.floor(Math.random() * maxY);

noBtn.style.transform = `translate(${randomX}px, ${randomY}px)`;
});

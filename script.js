const envelope = document.querySelector('.envelope');
const ticket = document.querySelector('.ticket');
const flap = document.querySelector('.flap');

envelope.addEventListener('click', () => {
  flap.style.transform = 'rotateX(180deg)';
  ticket.classList.remove('hidden');
});

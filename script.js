const grid = document.getElementById('heartGrid');
const message = document.getElementById('message');
const envelope = document.getElementById('envelope');
const envelopeContainer = document.getElementById('envelopeContainer');

const heart = '💖';
const total = 12;

for (let i = 0; i < total; i++) {
  const span = document.createElement('span');
  span.classList.add('heart');
  span.textContent = heart;
  span.addEventListener('click', () => {
    message.textContent = "Meu coração sempre vai te achar, amoreco 💘";

    // Mostrar envelope
    envelopeContainer.style.display = 'flex';

    // Forçar reflow para garantir transição
    void envelope.offsetWidth;

    // Abrir envelope com delay
    setTimeout(() => {
      envelope.classList.add('open');
    }, 200);
  });
  grid.appendChild(span);
}

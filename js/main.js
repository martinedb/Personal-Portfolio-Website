const darkToggle = document.getElementById('darkToggle');

darkToggle.addEventListener('click', () => {
  document.documentElement.classList.toggle('dark-mode');
  const isDark = document.documentElement.classList.contains('dark-mode');
  darkToggle.setAttribute('aria-pressed', isDark);
});

// Endorsements Carousel Functionality
document.addEventListener('DOMContentLoaded', function () {
  const carousel = document.querySelector('.endorsements-carousel');
  const cards = Array.from(document.querySelectorAll('.endorsement-card'));
  const prevBtn = document.querySelector('.carousel-arrow.left');
  const nextBtn = document.querySelector('.carousel-arrow.right');
  const dotsContainer = document.querySelector('.carousel-dots');
  let currentIndex = 0;

  // Create dots
  dotsContainer.innerHTML = '';
  cards.forEach((_, idx) => {
    const dot = document.createElement('button');
    dot.className = 'carousel-dot';
    dot.setAttribute('aria-label', `Go to testimonial ${idx + 1}`);
    dot.setAttribute('tabindex', '0');
    dot.addEventListener('click', () => {
      showCard(idx);
    });
    dotsContainer.appendChild(dot);
  });
  const dots = Array.from(dotsContainer.querySelectorAll('.carousel-dot'));

  function showCard(idx) {
    cards.forEach((card, i) => {
      card.classList.toggle('active', i === idx);
      card.setAttribute('aria-hidden', i !== idx);
      card.setAttribute('tabindex', i === idx ? '0' : '-1');
    });
    dots.forEach((dot, i) => {
      dot.classList.toggle('active', i === idx);
    });
    currentIndex = idx;
  }

  prevBtn.addEventListener('click', () => {
    showCard((currentIndex - 1 + cards.length) % cards.length);
  });

  nextBtn.addEventListener('click', () => {
    showCard((currentIndex + 1) % cards.length);
  });

  // Keyboard navigation
  document.querySelector('.endorsements-carousel-outer').addEventListener('keydown', (e) => {
    if (e.key === 'ArrowLeft') prevBtn.click();
    if (e.key === 'ArrowRight') nextBtn.click();
  });

  // Optional: swipe support for mobile
  let startX = 0;
  carousel.addEventListener('touchstart', (e) => {
    startX = e.touches[0].clientX;
  });
  carousel.addEventListener('touchend', (e) => {
    let endX = e.changedTouches[0].clientX;
    if (endX - startX > 50) prevBtn.click();
    else if (startX - endX > 50) nextBtn.click();
  });

  // Show the first card on load
  showCard(0);
});

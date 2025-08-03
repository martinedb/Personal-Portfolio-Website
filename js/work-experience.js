// work-experience.js - Work experience cards functionality

document.addEventListener('DOMContentLoaded', function() {
  // Normalize work card structure
  function normalizeWorkCards() {
    const cards = document.querySelectorAll('#experience-container .work-card-content');
    
    cards.forEach(card => {
      // Handle .work-info wrapper if it exists
      const workInfo = card.querySelector(':scope > .work-info');
      if (workInfo) {
        // Move all children of .work-info to be direct children of .work-card-content
        while (workInfo.firstChild) {
          card.insertBefore(workInfo.firstChild, workInfo);
        }
        // Remove the now empty .work-info
        workInfo.remove();
      }

      // Handle .work-meta wrapper if it exists
      const workMeta = card.querySelector(':scope > .work-meta');
      if (workMeta) {
        // Move all children of .work-meta to be direct children of .work-card-content
        while (workMeta.firstChild) {
          card.insertBefore(workMeta.firstChild, workMeta);
        }
        // Remove the now empty .work-meta
        workMeta.remove();
      }

      // Convert any h3.work-title to div.work-title
      const h3Titles = card.querySelectorAll('h3.work-title');
      h3Titles.forEach(h3 => {
        const div = document.createElement('div');
        div.className = 'work-title';
        div.innerHTML = h3.innerHTML;
        h3.parentNode.replaceChild(div, h3);
      });
    });
  }

  // Initialize flip card functionality
  function initFlipCards() {
    document.querySelectorAll('.work-flip-card').forEach(function(card) {
      card.addEventListener('click', function() {
        card.classList.toggle('flipped');
      });
      card.addEventListener('keypress', function(e) {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          card.classList.toggle('flipped');
        }
      });
    });
  }

  // Run both functions
  normalizeWorkCards();
  initFlipCards();
});

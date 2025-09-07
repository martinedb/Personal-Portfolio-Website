document.addEventListener('DOMContentLoaded', function() {
    const container = document.getElementById('projects-container');
    if (!container) return;
    
    // Get all project cards
    const cards = Array.from(container.getElementsByClassName('project-card'));
    
    // Sort cards by data-date attribute (newest first)
    cards.sort((a, b) => {
      const dateA = a.getAttribute('data-date');
      const dateB = b.getAttribute('data-date');
      if (!dateA && !dateB) return 0;
      if (!dateA) return 1;
      if (!dateB) return -1;
      return new Date(dateB + '-01') - new Date(dateA + '-01');
    });
    
    // Re-append cards in sorted order
    cards.forEach(card => container.appendChild(card));
  });

// writing-portfolio.js - Multi-category filtering for writing portfolio
document.addEventListener('DOMContentLoaded', function () {
  const filterButtons = document.querySelectorAll('.filter-btn');
  const resetBtn = document.querySelector('.reset-btn');
  const articleCards = document.querySelectorAll('.article-card');
  const searchInput = document.querySelector('.article-search');
  let activeCategories = new Set();
  let searchTerm = '';

  // Toggle filter button state and update filtering
  filterButtons.forEach(btn => {
    btn.addEventListener('click', function () {
      const category = btn.getAttribute('data-category');
      const isActive = btn.getAttribute('aria-pressed') === 'true';
      if (isActive) {
        btn.setAttribute('aria-pressed', 'false');
        activeCategories.delete(category);
        btn.classList.remove('active');
      } else {
        btn.setAttribute('aria-pressed', 'true');
        activeCategories.add(category);
        btn.classList.add('active');
        // Animate button
        btn.animate([
          { transform: 'scale(1)' },
          { transform: 'scale(1.13)' },
          { transform: 'scale(1)' }
        ], { duration: 260 });
      }
      filterArticles();
    });
  });

  // Reset button: clear all filters and search
  if (resetBtn) {
    resetBtn.addEventListener('click', function () {
      activeCategories.clear();
      filterButtons.forEach(btn => {
        btn.setAttribute('aria-pressed', 'false');
        btn.classList.remove('active');
      });
      searchInput.value = '';
      searchTerm = '';
      filterArticles();
      // Animate reset button
      resetBtn.animate([
        { transform: 'scale(1)' },
        { transform: 'scale(1.13)' },
        { transform: 'scale(1)' }
      ], { duration: 260 });
    });
  }

  // Search bar: filter by article title
  if (searchInput) {
    searchInput.addEventListener('input', function () {
      searchTerm = searchInput.value.trim().toLowerCase();
      filterArticles();
    });
  }

  function filterArticles() {
    articleCards.forEach(card => {
      const categories = card.getAttribute('data-categories').split(',');
      const title = card.querySelector('.article-title').textContent.toLowerCase();
      // Category filter: must match ALL selected categories
      const matchesCategory = activeCategories.size === 0 || Array.from(activeCategories).every(cat => categories.includes(cat));
      // Search filter: must include search term in title
      const matchesSearch = !searchTerm || title.includes(searchTerm);
      card.style.display = (matchesCategory && matchesSearch) ? '' : 'none';
    });
  }

  // Initial state: show all
  filterArticles();
});

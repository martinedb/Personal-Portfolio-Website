// Import articles data
import { articles } from './articles.js';

// Default thumbnail image
const DEFAULT_THUMBNAIL = 'https://via.placeholder.com/400x225?text=No+Preview+Available';

/**
 * Creates an article card element with thumbnail
 * @param {Object} article - The article data
 * @returns {HTMLElement} The article card element
 */
function createArticleCard(article) {
  const articleEl = document.createElement('div');
  articleEl.className = 'article-card';
  
  // Use the article's imageUrl or default thumbnail
  const thumbnailUrl = article.imageUrl || DEFAULT_THUMBNAIL;
  const previewText = article.preview || '';
  
  // Create the card HTML
  articleEl.innerHTML = `
    <div class="article-thumbnail">
      <img src="${thumbnailUrl}" alt="${article.title}" loading="lazy">
    </div>
    <div class="article-content">
      <h3 class="article-title">${article.title}</h3>
      <div class="article-meta">
        <span class="article-org">${article.organization}</span>
      </div>
      ${previewText ? `
        <p class="article-preview">${previewText}</p>
      ` : ''}
      <div class="article-tags">
        ${article.tags.map(tag => `<span class="tag">${tag}</span>`).join('')}
      </div>
      <a href="${article.link}" target="_blank" rel="noopener noreferrer" class="read-article-btn">
        Read Article <i class="fas fa-external-link-alt" style="margin-left: 5px;"></i>
      </a>
    </div>
  `;
  
  return articleEl;
}

/**
 * Renders articles with filtering and search
 * @param {string} filterTag - Tag to filter by
 * @param {string} searchQuery - Search query string
 */
function renderArticles(filterTag = null, searchQuery = '') {
  const container = document.querySelector('.articles-container');
  if (!container) return;

  // Show loading state
  container.innerHTML = `
    <div class="loading-state">
      <div class="spinner"></div>
      <p>Loading articles...</p>
    </div>
  `;

  // Filter articles based on tag and search query
  const filteredArticles = articles.filter(article => {
    const matchesTag = !filterTag || 
                      filterTag === 'all' || 
                      article.tags.some(tag => 
                        tag.toLowerCase() === filterTag.toLowerCase()
                      );
    
    const matchesSearch = !searchQuery || 
                         article.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         article.organization.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         article.tags.some(tag => 
                           tag.toLowerCase().includes(searchQuery.toLowerCase())
                         );
    
    return matchesTag && matchesSearch;
  });

  // Show message if no articles found
  if (filteredArticles.length === 0) {
    container.innerHTML = `
      <div class="no-articles">
        <i class="fas fa-search" style="font-size: 2.5rem; margin-bottom: 1rem; color: #ba68c8;"></i>
        <h3>No articles found</h3>
        <p>Try adjusting your search or filter criteria</p>
      </div>
    `;
    return;
  }

  // Clear the container
  container.innerHTML = '';
  
  // Create and append article cards
  filteredArticles.forEach(article => {
    const articleEl = createArticleCard(article);
    container.appendChild(articleEl);
  });
}

/**
 * Gets all unique tags from articles
 * @returns {string[]} Array of unique tags
 */
function getUniqueTags() {
  const tags = new Set();
  articles.forEach(article => {
    article.tags.forEach(tag => tags.add(tag));
  });
  return Array.from(tags).sort();
}

// Initialize the page when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
  // Initial render
  renderArticles();

  // Set up tag filter buttons
  const tagButtons = document.querySelectorAll('.tag-filter');
  tagButtons.forEach(button => {
    button.addEventListener('click', () => {
      const tag = button.dataset.tag;
      renderArticles(tag);
      
      // Update active state
      tagButtons.forEach(btn => btn.classList.remove('active'));
      button.classList.add('active');
    });
  });

  // Set up search functionality
  const searchInput = document.querySelector('.search-input');
  if (searchInput) {
    let searchTimeout;
    
    searchInput.addEventListener('input', (e) => {
      clearTimeout(searchTimeout);
      const query = e.target.value.trim();
      
      searchTimeout = setTimeout(() => {
        renderArticles(null, query);
      }, 300);
    });
  }

  // Set up "All" button
  const allButton = document.querySelector('[data-tag="all"]');
  if (allButton) {
    allButton.addEventListener('click', () => {
      renderArticles();
      
      // Update active state
      tagButtons.forEach(btn => btn.classList.remove('active'));
      allButton.classList.add('active');
      
      // Clear search
      if (searchInput) {
        searchInput.value = '';
      }
    });
  }
});

// Export functions for testing or other modules
export { renderArticles, getUniqueTags };

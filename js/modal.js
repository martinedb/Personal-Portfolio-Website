    // Function to open the poster modal
class ModalManager {
  constructor() {
    this.modal = document.getElementById('projectDetailsModal');
    this.posterModal = document.getElementById('posterModal');
    this.body = document.body;
    this.scrollPosition = 0;
    
    this.initModals();
  }
  
  initModals() {
    // Initialize project details modal
    if (this.modal) {
      this.setupProjectModal();
    }
    
    // Initialize poster modal
    if (this.posterModal) {
      this.setupPosterModal();
    }
    
    // Close modals with Escape key
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape') {
        this.closeAllModals();
      }
    });
  }
  
  setupProjectModal() {
    const modalImage = this.modal.querySelector('#modalProjectImage');
    const modalTitle = this.modal.querySelector('#projectModalTitle');
    const modalCourse = this.modal.querySelector('.project-course');
    const modalDuration = this.modal.querySelector('.project-duration');
    const modalAchievements = this.modal.querySelector('#modalAchievements');
    const modalSkills = this.modal.querySelector('#modalSkills');
    const closeButton = this.modal.querySelector('.close-modal');
    
    // Handle project card clicks
    document.querySelectorAll('.project-card').forEach(card => {
      card.addEventListener('click', (e) => {
        // Don't open modal if clicking on a link or button inside the card
        if (e.target.tagName === 'A' || e.target.closest('a, button')) {
          return;
        }
        
        const title = card.querySelector('.project-title')?.textContent || '';
        const course = card.querySelector('.project-course')?.textContent || '';
        const duration = card.querySelector('.project-duration')?.textContent || '';
        const imageSrc = card.querySelector('.project-cover')?.src || '';
        const achievements = Array.from(card.querySelectorAll('.achievements-list li')).map(li => li.textContent);
        const skills = Array.from(card.querySelectorAll('.project-tags .tag')).map(tag => tag.textContent);
        
        // Update modal content
        modalTitle.textContent = title;
        modalCourse.textContent = course;
        modalDuration.textContent = duration;
        modalImage.src = imageSrc;
        modalImage.alt = title;
        
        // Update achievements
        modalAchievements.innerHTML = '';
        achievements.forEach(achievement => {
          const li = document.createElement('li');
          li.textContent = achievement;
          modalAchievements.appendChild(li);
        });
        
        // Update skills
        modalSkills.innerHTML = '';
        skills.forEach(skill => {
          const span = document.createElement('span');
          span.className = 'tag';
          span.textContent = skill;
          modalSkills.appendChild(span);
        });
        
        // Open the modal
        this.openModal(this.modal);
      });
    });
    
    // Close button
    closeButton?.addEventListener('click', () => this.closeModal(this.modal));
    
    // Close when clicking on backdrop
    this.modal.addEventListener('click', (e) => {
      if (e.target === this.modal) {
        this.closeModal(this.modal);
      }
    });
  }
  
  setupPosterModal() {
    const posterImage = this.posterModal.querySelector('#posterImage');
    const closeButton = this.posterModal.querySelector('.close-modal');
    
    // Handle poster image clicks
    document.querySelectorAll('.project-cover').forEach(img => {
      img.addEventListener('click', (e) => {
        if (e.target.classList.contains('project-cover')) {
          posterImage.src = e.target.src;
          posterImage.alt = e.target.alt || 'Project image';
          this.openModal(this.posterModal);
        }
      });
    });
    
    // Close button
    closeButton?.addEventListener('click', () => this.closeModal(this.posterModal));
    
    // Close when clicking on backdrop
    this.posterModal.addEventListener('click', (e) => {
      if (e.target === this.posterModal) {
        this.closeModal(this.posterModal);
      }
    });
  }
  
  openModal(modal) {
    // Save scroll position
    this.scrollPosition = window.scrollY;
    
    // Add class to body to prevent scrolling
    this.body.classList.add('modal-open');
    this.body.style.top = `-${this.scrollPosition}px`;
    
    // Show the modal
    modal.classList.add('active');
    
    // Set focus to the modal for better keyboard navigation
    modal.setAttribute('aria-hidden', 'false');
    modal.setAttribute('tabindex', '-1');
    modal.focus();
    
    // Trap focus inside the modal
    this.trapFocus(modal);
  }
  
  closeModal(modal) {
    // Hide the modal
    modal.classList.remove('active');
    
    // Restore body scroll
    this.body.classList.remove('modal-open');
    this.body.style.top = '';
    window.scrollTo(0, this.scrollPosition);
    
    // Update ARIA attributes
    modal.setAttribute('aria-hidden', 'true');
    modal.removeAttribute('tabindex');
  }
  
  closeAllModals() {
    document.querySelectorAll('.modal').forEach(modal => {
      this.closeModal(modal);
    });
  }
  
  trapFocus(modal) {
    const focusableElements = modal.querySelectorAll(
      'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
    );
    
    if (focusableElements.length === 0) return;
    
    const firstElement = focusableElements[0];
    const lastElement = focusableElements[focusableElements.length - 1];
    
    modal.addEventListener('keydown', function trapTabKey(e) {
      if (e.key === 'Tab') {
        if (e.shiftKey) {
          if (document.activeElement === firstElement) {
            e.preventDefault();
            lastElement.focus();
          }
        } else {
          if (document.activeElement === lastElement) {
            e.preventDefault();
            firstElement.focus();
          }
        }
      }
    });
  }
}

// Initialize the modal manager when the DOM is fully loaded
document.addEventListener('DOMContentLoaded', () => {
  // Remove any duplicate script tags
  const scripts = document.querySelectorAll('script[src*="modal.js"]');
  for (let i = 1; i < scripts.length; i++) {
    scripts[i].parentNode.removeChild(scripts[i]);
  }
  
  // Initialize the modal manager
  new ModalManager();
});
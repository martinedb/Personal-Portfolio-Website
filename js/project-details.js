// Project Details Modal Functionality
document.addEventListener('DOMContentLoaded', function() {
  // Initialize project cards with view more buttons
  function initProjectCards() {
    const projectCards = document.querySelectorAll('.project-card');
    
    projectCards.forEach(card => {
      const achievementsList = card.querySelector('.achievements-list');
      if (!achievementsList) return;
      
      // Create and insert view more button if it doesn't exist
      if (!card.querySelector('.view-more-btn')) {
        const viewMoreBtn = document.createElement('button');
        viewMoreBtn.className = 'view-more-btn';
        viewMoreBtn.setAttribute('aria-expanded', 'false');
        viewMoreBtn.setAttribute('aria-label', 'View more project details');
        viewMoreBtn.innerHTML = 'View Project Details <i class="fas fa-arrow-right"></i>';
        viewMoreBtn.setAttribute('tabindex', '0');
        
        // Insert after the project details section
        const projectDetails = card.querySelector('.project-details');
        if (projectDetails) {
          projectDetails.parentNode.insertBefore(viewMoreBtn, projectDetails.nextSibling);
        } else {
          // Fallback to inserting after the achievements list
          achievementsList.parentNode.insertBefore(viewMoreBtn, achievementsList.nextSibling);
        }
        
        // Add click handler
        viewMoreBtn.addEventListener('click', (e) => {
          e.preventDefault();
          openProjectModal(card);
        });
        
        // Add keyboard support
        viewMoreBtn.addEventListener('keydown', (e) => {
          if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault();
            openProjectModal(card);
          }
        });
      }
    });
  }
  
  // Open project modal with card data
  function openProjectModal(card) {
    const modal = document.getElementById('projectDetailsModal');
    if (!modal) return;
    
    // Prevent body scroll
    document.body.style.overflow = 'hidden';
    document.documentElement.style.paddingRight = window.innerWidth - document.documentElement.clientWidth + 'px';
    
    // Get card data
    const title = card.querySelector('.project-title')?.textContent || '';
    const imageSrc = card.querySelector('.project-cover')?.src || '';
    const course = card.querySelector('.project-course')?.textContent || '';
    const date = card.querySelector('.project-duration')?.textContent || '';
    const achievements = Array.from(card.querySelectorAll('.achievements-list li')).map(li => li.textContent);
    const skills = Array.from(card.querySelectorAll('.project-tags .tag')).map(tag => tag.textContent);
    
    // Update modal content
    document.getElementById('projectModalTitle').textContent = title;
    
    const modalImage = document.getElementById('modalProjectImage');
    modalImage.src = imageSrc;
    modalImage.alt = `${title} project image`;
    
    const projectMeta = modal.querySelector('.project-meta');
    projectMeta.innerHTML = '';
    
    if (course) {
      const courseEl = document.createElement('div');
      courseEl.className = 'project-course';
      courseEl.textContent = course;
      projectMeta.appendChild(courseEl);
    }
    
    if (date) {
      const dateEl = document.createElement('div');
      dateEl.className = 'project-duration';
      dateEl.textContent = date;
      projectMeta.appendChild(dateEl);
    }
    
    // Update achievements
    const achievementsList = document.getElementById('modalAchievements');
    achievementsList.innerHTML = '';
    
    achievements.forEach(achievement => {
      const li = document.createElement('li');
      li.textContent = achievement;
      achievementsList.appendChild(li);
    });
    
    // Update skills
    const skillsContainer = document.getElementById('modalSkills');
    skillsContainer.innerHTML = '';
    
    skills.forEach(skill => {
      const tag = document.createElement('span');
      tag.className = 'tag';
      tag.textContent = skill;
      skillsContainer.appendChild(tag);
    });
    
    // Show modal with animation
    modal.removeAttribute('hidden');
    modal.setAttribute('aria-hidden', 'false');
    
    // Force reflow to enable animation
    void modal.offsetHeight;
    
    // Set focus to the modal and trap focus
    modal.focus();
    trapFocus(modal);
    
    // Add event listeners for closing the modal
    const closeBtn = modal.querySelector('.close-modal');
    if (closeBtn) {
      closeBtn.addEventListener('click', closeProjectModal);
    }
    
    // Close when clicking outside content
    modal.addEventListener('click', (e) => {
      if (e.target === modal) {
        closeProjectModal();
      }
    });
    
    // Close with Escape key
    document.addEventListener('keydown', handleEscapeKey);
  }
  
  // Close project modal
  function closeProjectModal() {
    const modal = document.getElementById('projectDetailsModal');
    if (!modal) return;
    
    // Add closing animation class
    modal.style.animation = 'fadeOut 0.2s ease-out forwards';
    
    // Wait for animation to complete before hiding
    setTimeout(() => {
      modal.setAttribute('aria-hidden', 'true');
      modal.setAttribute('hidden', 'true');
      modal.style.animation = '';
      
      // Re-enable body scroll
      document.body.style.overflow = '';
      document.documentElement.style.paddingRight = '';
      
      // Remove event listeners
      const closeBtn = modal.querySelector('.close-modal');
      if (closeBtn) {
        closeBtn.removeEventListener('click', closeProjectModal);
      }
      
      modal.removeEventListener('click', closeProjectModal);
      document.removeEventListener('keydown', handleEscapeKey);
      
      // Return focus to the button that opened the modal
      const activeElement = document.activeElement;
      if (activeElement && activeElement.classList.contains('view-more-btn')) {
        activeElement.focus();
      }
      
      // Release focus trap
      releaseFocus();
    }, 200);
  }
  
  // Trap focus inside modal for better accessibility
  function trapFocus(element) {
    const focusableEls = element.querySelectorAll(
      'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
    );
    
    const firstFocusableEl = focusableEls[0];
    const lastFocusableEl = focusableEls[focusableEls.length - 1];
    
    // Store the first and last focusable elements
    element._firstFocusableEl = firstFocusableEl;
    element._lastFocusableEl = lastFocusableEl;
    
    // Add event listener for tab key
    element._keyDownHandler = function(e) {
      const isTabPressed = (e.key === 'Tab' || e.keyCode === 9);
      
      if (!isTabPressed) return;
      
      if (e.shiftKey) {
        if (document.activeElement === firstFocusableEl) {
          e.preventDefault();
          lastFocusableEl.focus();
        }
      } else {
        if (document.activeElement === lastFocusableEl) {
          e.preventDefault();
          firstFocusableEl.focus();
        }
      }
    };
    
    element.addEventListener('keydown', element._keyDownHandler);
    
    // Focus first element
    firstFocusableEl.focus();
  }
  
  // Release focus trap
  function releaseFocus() {
    const modal = document.getElementById('projectDetailsModal');
    if (!modal || !modal._keyDownHandler) return;
    
    modal.removeEventListener('keydown', modal._keyDownHandler);
    delete modal._keyDownHandler;
    delete modal._firstFocusableEl;
    delete modal._lastFocusableEl;
  }
  
  // Handle Escape key
  function handleEscapeKey(e) {
    if (e.key === 'Escape') {
      closeProjectModal();
    }
  }
  
  // Expose close function to global scope for the close button
  window.closeProjectModal = closeProjectModal;
  
  // Initialize everything
  initProjectCards();
});


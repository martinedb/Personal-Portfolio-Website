// Work Experience Carousel
document.addEventListener('DOMContentLoaded', function() {
  const workGrid = document.querySelector('.work-grid');
  const scrollDotsContainer = document.querySelector('.scroll-indicator');
  const workCards = document.querySelectorAll('.work-card');
  let scrollPosition = 0;
  let isDown = false;
  let startX;
  let scrollLeft;

  // Create scroll indicator dots
  function createScrollDots() {
    if (!scrollDotsContainer) return;
    
    workCards.forEach((_, index) => {
      const dot = document.createElement('button');
      dot.classList.add('scroll-dot');
      dot.setAttribute('aria-label', `Go to work experience ${index + 1}`);
      dot.setAttribute('tabindex', '0');
      
      if (index === 0) {
        dot.classList.add('active');
      }
      
      dot.addEventListener('click', () => {
        scrollToCard(index);
      });
      
      // Add keyboard navigation
      dot.addEventListener('keydown', (e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          scrollToCard(index);
        }
      });
      
      scrollDotsContainer.appendChild(dot);
    });
  }

  // Scroll to specific card
  function scrollToCard(index) {
    if (!workCards[index]) return;
    
    const card = workCards[index];
    const containerWidth = workGrid.offsetWidth;
    const cardWidth = card.offsetWidth + 32; // 32px gap (16px on each side)
    const scrollTo = card.offsetLeft - ((containerWidth - cardWidth) / 2);
    
    workGrid.scrollTo({
      left: scrollTo,
      behavior: 'smooth'
    });
    
    updateActiveDot(index);
  }

  // Update active dot
  function updateActiveDot(index) {
    const dots = document.querySelectorAll('.scroll-dot');
    dots.forEach((dot, i) => {
      if (i === index) {
        dot.classList.add('active');
        dot.setAttribute('aria-current', 'true');
      } else {
        dot.classList.remove('active');
        dot.removeAttribute('aria-current');
      }
    });
  }

  // Handle scroll events
  function handleScroll() {
    if (!workGrid) return;
    
    // Update scroll position for touch/click drag
    scrollPosition = workGrid.scrollLeft;
    
    // Update active dot based on scroll position
    const scrollContainerWidth = workGrid.scrollWidth - workGrid.clientWidth;
    const scrollPercentage = scrollPosition / scrollContainerWidth;
    const activeIndex = Math.round(scrollPercentage * (workCards.length - 1));
    
    updateActiveDot(activeIndex);
  }

  // Mouse drag functionality
  if (workGrid) {
    // Mouse down
    workGrid.addEventListener('mousedown', (e) => {
      isDown = true;
      startX = e.pageX - workGrid.offsetLeft;
      scrollLeft = workGrid.scrollLeft;
      workGrid.style.cursor = 'grabbing';
      workGrid.style.userSelect = 'none';
    });

    // Mouse leave
    workGrid.addEventListener('mouseleave', () => {
      isDown = false;
      workGrid.style.cursor = 'grab';
    });

    // Mouse up
    workGrid.addEventListener('mouseup', () => {
      isDown = false;
      workGrid.style.cursor = 'grab';
    });

    // Mouse move
    workGrid.addEventListener('mousemove', (e) => {
      if (!isDown) return;
      e.preventDefault();
      const x = e.pageX - workGrid.offsetLeft;
      const walk = (x - startX) * 1.5; // Scroll speed
      workGrid.scrollLeft = scrollLeft - walk;
    });

    // Touch events for mobile
    workGrid.addEventListener('touchstart', (e) => {
      isDown = true;
      startX = e.touches[0].pageX - workGrid.offsetLeft;
      scrollLeft = workGrid.scrollLeft;
    }, { passive: true });

    workGrid.addEventListener('touchend', () => {
      isDown = false;
    });

    workGrid.addEventListener('touchmove', (e) => {
      if (!isDown) return;
      const x = e.touches[0].pageX - workGrid.offsetLeft;
      const walk = (x - startX) * 1.5;
      workGrid.scrollLeft = scrollLeft - walk;
    }, { passive: true });

    // Scroll event
    workGrid.addEventListener('scroll', handleScroll);
  }

  // Keyboard navigation
  document.addEventListener('keydown', (e) => {
    if (!workGrid) return;
    
    const activeDot = document.querySelector('.scroll-dot.active');
    if (!activeDot) return;
    
    const currentIndex = Array.from(document.querySelectorAll('.scroll-dot')).indexOf(activeDot);
    
    if (e.key === 'ArrowRight' || e.key === 'ArrowDown') {
      e.preventDefault();
      const nextIndex = Math.min(currentIndex + 1, workCards.length - 1);
      if (nextIndex !== currentIndex) {
        scrollToCard(nextIndex);
      }
    } else if (e.key === 'ArrowLeft' || e.key === 'ArrowUp') {
      e.preventDefault();
      const prevIndex = Math.max(currentIndex - 1, 0);
      if (prevIndex !== currentIndex) {
        scrollToCard(prevIndex);
      }
    } else if (e.key === 'Home') {
      e.preventDefault();
      scrollToCard(0);
    } else if (e.key === 'End') {
      e.preventDefault();
      scrollToCard(workCards.length - 1);
    }
  });

  // Initialize
  createScrollDots();
  
  // Set initial active state after a short delay to allow for animations
  setTimeout(() => {
    if (workCards.length > 0) {
      workCards[0].style.opacity = '1';
    }
  }, 100);

  // Handle window resize
  let resizeTimer;
  window.addEventListener('resize', () => {
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(() => {
      // Recalculate scroll position on resize
      if (workCards.length > 0) {
        const activeDot = document.querySelector('.scroll-dot.active');
        if (activeDot) {
          const index = Array.from(document.querySelectorAll('.scroll-dot')).indexOf(activeDot);
          scrollToCard(index);
        }
      }
    }, 250);
  });
});

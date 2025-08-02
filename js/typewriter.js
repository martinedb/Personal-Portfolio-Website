document.addEventListener('DOMContentLoaded', function() {
  const name = 'MARTIN EDWINI-BONSU';
  const nameElement = document.getElementById('animated-name');
  const cursor = document.querySelector('.cursor');
  
  let charIndex = 0;
  let isDeleting = false;
  let typingSpeed = 100; // milliseconds
  let deleteSpeed = 50; // milliseconds
  let pauseDuration = 2000; // 2 seconds
  
  function typeWriter() {
    const currentText = nameElement.textContent;
    
    if (!isDeleting && charIndex < name.length) {
      // Typing
      nameElement.textContent = name.substring(0, charIndex + 1);
      charIndex++;
      setTimeout(typeWriter, typingSpeed);
      
    } else if (isDeleting && charIndex > 0) {
      // Deleting
      nameElement.textContent = name.substring(0, charIndex - 1);
      charIndex--;
      setTimeout(typeWriter, deleteSpeed);
      
    } else if (!isDeleting && charIndex === name.length) {
      // Pause at the end of typing
      isDeleting = true;
      setTimeout(typeWriter, pauseDuration);
      
    } else if (isDeleting && charIndex === 0) {
      // Pause at the beginning after deleting
      isDeleting = false;
      setTimeout(typeWriter, typingSpeed);
    } else {
      // Reset and start again (shouldn't normally reach here)
      isDeleting = false;
      setTimeout(typeWriter, typingSpeed);
    }
  }
  
  // Start the typewriter effect after a short delay
  setTimeout(typeWriter, 1000);
});

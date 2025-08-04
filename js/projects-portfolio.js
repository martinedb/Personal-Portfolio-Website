// projects-portfolio.js - Project card and modal functionality with collapsible bullet points

document.addEventListener('DOMContentLoaded', function() {
  // Initialize collapsible bullet points
  function initCollapsibleBullets() {
    document.querySelectorAll('.project-card').forEach(card => {
      const list = card.querySelector('.achievements-list');
      if (!list) return;
      
      const items = Array.from(list.querySelectorAll('li'));
      if (items.length <= 1) return; // No need for collapsible if only one item
      
      // Hide all items except first
      items.forEach((item, index) => {
        if (index > 0) {
          item.classList.add('collapsed');
        }
      });
      
      // Create and insert toggle button if it doesn't exist
      if (!card.querySelector('.view-more-btn')) {
        const toggleBtn = document.createElement('button');
        toggleBtn.className = 'view-more-btn';
        toggleBtn.setAttribute('aria-expanded', 'false');
        toggleBtn.setAttribute('aria-label', 'Toggle project details');
        
        const toggleText = document.createElement('span');
        toggleText.textContent = 'View more';
        
        const toggleIcon = document.createElement('i');
        toggleIcon.className = 'fas fa-chevron-down';
        toggleIcon.setAttribute('aria-hidden', 'true');
        
        toggleBtn.appendChild(toggleText);
        toggleBtn.appendChild(document.createTextNode(' '));
        toggleBtn.appendChild(toggleIcon);
        
        // Insert after the list
        list.parentNode.insertBefore(toggleBtn, list.nextSibling);
        
        // Add click handler
        toggleBtn.addEventListener('click', function() {
          const isExpanded = this.getAttribute('aria-expanded') === 'true';
          this.setAttribute('aria-expanded', !isExpanded);
          
          // Toggle all items except first
          items.forEach((item, index) => {
            if (index > 0) {
              item.classList.toggle('collapsed', isExpanded);
            }
          });
          
          // Update button text and icon
          toggleText.textContent = isExpanded ? 'View more' : 'View less';
          toggleIcon.className = isExpanded ? 'fas fa-chevron-down' : 'fas fa-chevron-up';
          
          // Smooth scroll to show the expanded content
          if (!isExpanded) {
            setTimeout(() => {
              toggleBtn.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
            }, 100);
          }
        });
      }
    });
  }
  
  // Initialize collapsible bullets
  initCollapsibleBullets();
  // Get the modal element
  const modal = document.getElementById('projectModal');
  const modalTitle = document.getElementById('modalProjectTitle');
  const modalImage = document.getElementById('modalProjectImage');
  const modalType = document.getElementById('modalProjectType');
  const modalDate = document.getElementById('modalProjectDate');
  const modalObjective = document.getElementById('modalProjectObjective');
  const modalProcess = document.getElementById('modalProjectProcess');
  const modalResults = document.getElementById('modalProjectResults');
  const modalSkills = document.getElementById('modalProjectSkills');
  const modalProjectLink = document.getElementById('modalProjectLink');
  const modalGithubLink = document.getElementById('modalGithubLink');
  const thumbnailsContainer = document.getElementById('projectThumbnails');
  
  // Project data - this would ideally come from a database or JSON file
  const projectsData = {
    'air-pollution-poster': {
      title: 'Air Pollution Scientific Poster Project',
      type: 'Environmental Engineering',
      date: 'Feb - Mar 2023',
      image: 'images/projects/air-pollution.jpg',
      objective: 'Create a scientific poster that highlights a case study of a community devastated by pollution. Analyze the environmental, industrial, and social factors driving extreme pollution in the community.',
      process: [
        'Conducted a literature review to assess the geographic, industrial, and historical content of Cancer Alley, Louisiana.',
        'Created a causal loop diagram to model complex interactions between 21 social, environmental, and economic factors.',
        'Developed a process flow diagram illustrating the main industrial process contributing to air pollution in the area.',
        'Developed 5 data visualizations to illustrate the socioeconomic conditions of the community and pollution release and exposure data.',
        'Provided evidence-based recommendations to address pollution and reduce community exposure.'
      ],
      results: 'Presented the scientific poster in front of an audience of over 120 students and 20 faculty members; received a grade of 92% on the project.',
      skills: ['Data Visualization', 'Data Analysis', 'Systems Thinking', 'Causal Loop Diagrams', 'Technical Communication', 'Environmental Impact Assessment'],
      projectLink: '#',
      githubLink: '#'
    },
    // Add more projects here following the same structure
  };

  // Function to open the modal with project data
  function openModal(projectId) {
    const project = projectsData[projectId];
    if (!project) return;

    // Set modal content
    modalTitle.textContent = project.title;
    modalImage.src = project.image;
    modalType.innerHTML = `<i class="fas fa-${project.type.includes('Engineering') ? 'cogs' : 'book'}"></i> ${project.type}`;
    modalDate.textContent = project.date;
    modalObjective.textContent = project.objective;
    
    // Process steps
    modalProcess.innerHTML = '';
    if (Array.isArray(project.process)) {
      const processList = document.createElement('ul');
      project.process.forEach(step => {
        const li = document.createElement('li');
        li.textContent = step;
        processList.appendChild(li);
      });
      modalProcess.appendChild(processList);
    }
    
    // Results
    modalResults.innerHTML = '';
    const resultsPara = document.createElement('p');
    resultsPara.textContent = project.results;
    modalResults.appendChild(resultsPara);
    
    // Skills
    modalSkills.innerHTML = '';
    project.skills.forEach(skill => {
      const skillTag = document.createElement('span');
      skillTag.className = 'tag';
      skillTag.textContent = skill;
      modalSkills.appendChild(skillTag);
    });
    
    // Links
    modalProjectLink.href = project.projectLink;
    modalGithubLink.href = project.githubLink;
    
    // Show the modal
    modal.style.display = 'block';
    document.body.style.overflow = 'hidden';
  }

  // Function to close the modal
  function closeModal() {
    modal.style.display = 'none';
    document.body.style.overflow = 'auto';
  }

  // Add click event to project cards
  document.querySelectorAll('.project-flip-card').forEach(card => {
    // Toggle flip on card click (for mobile/tablet)
    card.addEventListener('click', function(e) {
      // Only toggle flip if not clicking on a link
      if (!e.target.closest('a')) {
        this.classList.toggle('flipped');
      }
    });

    // Add click handler for "View Project" buttons
    const viewBtn = card.querySelector('.project-link-btn:not(.primary)');
    if (viewBtn) {
      viewBtn.addEventListener('click', function(e) {
        e.preventDefault();
        e.stopPropagation();
        const projectId = this.closest('.project-flip-card').getAttribute('data-project-id');
        if (projectId) {
          openModal(projectId);
        }
      });
    }
  });

  // Close modal when clicking the X
  document.querySelector('.close-modal').addEventListener('click', closeModal);

  // Close modal when clicking outside the modal content
  window.addEventListener('click', function(e) {
    if (e.target === modal) {
      closeModal();
    }
  });

  // Close modal with Escape key
  document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape' && modal.style.display === 'block') {
      closeModal();
    }
  });
});

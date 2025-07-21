// Articles data organized by relevance (most recent first)
const articles = [
  {
    title: "AI and the Future of Energy Careers in Canada",
    link: "https://youngcanadiansforresources.ca/blog/ai-and-the-future-of-energy-careers-in-canada/",
    organization: "Young Canadians for Resources",
    tags: ["Artificial Intelligence", "Energy", "Career Development", "Natural Resources", "Automation"]
  },
  {
    title: "Why Engineering Consulting Could Be the Perfect Career for You",
    link: "https://youngcanadiansforresources.ca/blog/why-engineering-consulting-could-be-the-perfect-career-for-you/",
    organization: "Young Canadians for Resources",
    tags: ["Engineering", "Consulting", "Career Development", "Natural Resources", "Infrastructure"]
  },
  {
    title: "Building a Stronger Canada: The Power of B.C.'s Resources",
    link: "https://youngcanadiansforresources.ca/blog/building-a-stronger-canada-the-power-of-b-c-s-resources/",
    organization: "Young Canadians For Resources",
    tags: ["Economy", "Natural Resources", "Trade", "Tariffs"]
  },
  {
    title: "This App Helps You Organize AI Prompts!",
    link: "https://medium.com/@martinbonsu/this-app-helps-you-organize-ai-prompts-0da44eb031f7",
    organization: "Medium",
    tags: ["Artificial Intelligence", "Productivity", "Prompt Engineering", "Organization"]
  },
  {
    title: "This Non-Profit Can Help You Land a Sustainable Career",
    link: "https://medium.com/@martinbonsu/this-non-profit-can-help-you-land-a-sustainable-career-bc2f8d480c37",
    organization: "Medium",
    tags: ["Non-Profits", "Career Development"]
  },
  {
    title: "The Backbone of Water: Hydrogen as an Energy Source",
    link: "https://youngcanadiansforresources.ca/blog/hydrogen-as-an-energy-source/",
    organization: "Young Canadians for Resources",
    tags: ["Energy", "Natural Resources", "Infrastructure"]
  },
  {
    title: "Top 5 Careers in the Recycling and Waste Management Industry",
    link: "https://youngcanadiansforresources.ca/blog/top-5-careers-in-the-recycling-and-waste-management-industry/",
    organization: "Young Canadians for Resources",
    tags: ["Career Development", "Waste Management", "Recycling"]
  },
  {
    title: "Is a Career in Skilled Trades Safe?",
    link: "https://youngcanadiansforresources.ca/blog/is-a-career-in-skilled-trades-safe/",
    organization: "Young Canadians for Resources",
    tags: ["Workplace Safety", "Skilled Trades", "Employment"]
  },
  {
    title: "Top 5 Engineering Careers in the Oil and Gas Industry",
    link: "https://youngcanadiansforresources.ca/blog/top-5-oil-and-gas-engineering-careers/",
    organization: "Young Canadians for Resources",
    tags: ["Oil and Gas", "Energy", "Engineering", "Career Development", "Industry"]
  },
  {
    title: "Top 10 Careers for Chemical Engineering Graduates",
    link: "https://youngcanadiansforresources.ca/blog/top-10-careers-for-chemical-engineering-graduates/",
    organization: "Young Canadians for Resources",
    tags: ["Chemical Engineering", "Engineering", "Career Development", "Industry", "Natural Resources"]
  },
  {
    title: "The Case for Strong Anti-Trust Enforcement",
    link: "https://medium.com/@martinbonsu/the-case-for-strong-antitrust-enforcement-b4da3b89a2ef",
    organization: "Medium",
    tags: ["Economics", "Public Policy", "Corporations"]
  },
  {
    title: "Strengthening Climate Resilience with Sustainable Infrastructure: An Interview with Jasmine Lyn",
    link: "https://www.greencareer.ca/whats-new/strengthening-climate-resilience-with-sustainable-infrastructure-an-interview-with-jasmine-lyn/",
    organization: "Green Career Centre",
    tags: ["Sustainability", "Infrastructure", "Climate", "Engineering", "Career Development"]
  },
  {
    title: "Transitioning into Sustainable Careers for Non-Environmental Professionals",
    link: "https://www.greencareer.ca/whats-new/transitioning-into-sustainable-careers-for-non-environmental-professionals/",
    organization: "Green Career Centre",
    tags: ["Sustainability", "Career Development", "Employment"]
  },
  {
    title: "Crafting Success: Resources for Young Canadians to Fund a Career in Trades",
    link: "https://youngcanadiansforresources.ca/blog/crafting-success-resources-for-young-canadians-to-fund-a-career-in-trades/",
    organization: "Young Canadians for Resources",
    tags: ["Funding", "Grants", "Finance", "Career Development", "Higher Education"]
  },
  {
    title: "Tips for Jumpstarting a Career in Forestry",
    link: "https://youngcanadiansforresources.ca/blog/tips-for-jumpstarting-a-career-in-forestry/",
    organization: "Young Canadians for Resources",
    tags: ["Forestry", "Career Development", "Economy", "Higher Education"]
  },
  {
    title: "Empowering Youth for Green Careers via Mentorship",
    link: "https://www.greencareer.ca/whats-new/empowering-youth-for-green-careers-via-mentorship/",
    organization: "Green Career Centre",
    tags: ["Career Development", "Mentorship", "Sustainability"]
  },
  {
    title: "Building an Inclusive Future: Addressing Diversity and Equity in Forestry Jobs",
    link: "https://www.greencareer.ca/whats-new/building-an-inclusive-future-addressing-diversity-and-equity-in-forestry-jobs/",
    organization: "Green Career Centre",
    tags: ["Diversity", "Equity", "Inclusion", "Forestry", "Employment", "Sustainability"]
  },
  {
    title: "The Future of Green Jobs: Non-Traditional Roles in Sustainability and Social Impact",
    link: "https://www.greencareer.ca/whats-new/the-future-of-green-jobs-non-traditional-roles-in-sustainability-and-social-impact/",
    organization: "Green Career Centre",
    tags: ["Sustainability", "Social Impact", "Employment", "Job Market Trends"]
  },
  {
    title: "How to Land a Sustainable Summer Job",
    link: "https://www.greencareer.ca/whats-new/how-to-land-a-sustainable-summer-job/",
    organization: "Green Career Centre",
    tags: ["Career Development", "Job Searching", "Employment", "Sustainability"]
  },
  {
    title: "LinkedIn Sustainability Influencers to Follow in 2022",
    link: "https://www.greencareer.ca/whats-new/linkedin-sustainability-influencers-to-follow-in-2022/",
    organization: "Green Career Centre",
    tags: ["Networking", "Mentorship", "Sustainability", "Social Media"]
  },
  {
    title: "Green Opportunities Abound: Highlights from the Green Career Fair",
    link: "https://www.greencareer.ca/whats-new/green-opportunities-abound-highlights-from-the-green-career-fair/",
    organization: "Green Career Centre",
    tags: ["Networking", "Career Development", "Employment", "Sustainability"]
  },
  {
    title: "Green Careers In-Demand for the Eco-Conscious",
    link: "https://www.greencareer.ca/whats-new/green-careers-in-demand-for-the-eco-conscious/",
    organization: "Green Career Centre",
    tags: ["Career Development", "Employment", "Sustainability"]
  },
  {
    title: "Guest Post: Investing in Environmental Non-Profits is Essential for a Sustainable Future",
    link: "https://cleartheair.ca/investing-in-environmental-non-profits-is-essential-for-a-sustainable-future/",
    organization: "Green Career Centre + Clean The Air",
    tags: ["Non-Profits", "Environmental Activism", "Investing", "Sustainability"]
  },
  {
    title: "Amplify Your Sustainability Messaging",
    link: "https://tinyplanet.digital/impact-marketing/how-to-amplify-your-organizations-sustainability-messaging/",
    organization: "Green Career Centre + Tiny Planet Digital",
    tags: ["Digital Marketing", "Sustainability"]
  },
  {
    title: "Being Patient with my Future",
    link: "https://apsc.ubc.ca/spotlight/student/martin-edwini-bonsu",
    organization: "Faculty of Applied Science | University of British Columbia",
    tags: ["Interview", "Student Life", "Chemical Engineering", "Education", "Mentorship"]
  },
  {
    title: "Bored? Here are some things to spice up your summer",
    link: "https://ubyssey.ca/humour/bored-here-are-things-to-spice-up-your-summer/",
    organization: "The Ubyssey Publications Society (UBC)",
    tags: ["Productivity", "Wellness", "Student Life"]
  },
  {
    title: "How UBC vloggers are redefining student engagement",
    link: "https://ubyssey.ca/humour/bored-here-are-things-to-spice-up-your-summer/",
    organization: "The Ubyssey Publications Society (UBC)",
    tags: ["Social Media", "Vlogging", "Student Life"]
  },
  {
    title: "Letter: lecture recordings are necessary to keep students learning",
    link: "https://ubyssey.ca/humour/bored-here-are-things-to-spice-up-your-summer/",
    organization: "The Ubyssey Publications Society (UBC)",
    tags: ["Education", "Academia"]
  },
  {
    title: "Career Pathways in the Forestry Sector",
    link: "https://youngcanadiansforresources.ca/blog/career-pathways-in-the-forestry-sector/",
    organization: "Young Canadians for Resources",
    tags: ["Forestry", "Career Development", "Industry", "Natural Resources"]
  },
  {
    title: "Top 5 Careers in the Water/Wastewater Industry",
    link: "https://youngcanadiansforresources.ca/blog/top-5-careers-in-the-water-wastewater-industry/",
    organization: "Young Canadians for Resources",
    tags: ["Water and Wastewater", "Industry", "Career Development", "Natural Resources"]
  },
  {
    title: "Empowering Communities: Building a Framework for Equitable Environmental Decision-Making",
    link: "https://celafoundation.ca/empowering-communities-building-a-framework-for-equitable-environmental-decision-making/",
    organization: "Canadian Environmental Law Foundation",
    tags: ["Environmental Law", "Community Engagement", "Climate Action"]
  }
];

// Format date is no longer needed as we're not displaying dates

// Function to render articles with filtering and search
function renderArticles(filterTag = null, searchQuery = '') {
  const container = document.querySelector('.articles-container');
  if (!container) return;

  // Clear existing articles
  container.innerHTML = '';

  // Filter articles based on tag and search query
  const filteredArticles = articles.filter(article => {
    const matchesTag = !filterTag || filterTag === 'all' || article.tags.some(tag => 
      tag.toLowerCase() === filterTag.toLowerCase());
    
    const matchesSearch = !searchQuery || 
      article.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      article.organization.toLowerCase().includes(searchQuery.toLowerCase()) ||
      article.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()));
    
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

  // Create article elements
  filteredArticles.forEach(article => {
    const articleEl = document.createElement('div');
    articleEl.className = 'article-card';
    articleEl.innerHTML = `
      <div class="article-content">
        <h3 class="article-title">${article.title}</h3>
        <div class="article-meta">
          <span class="article-org">${article.organization}</span>
        </div>
        <div class="article-tags">
          ${article.tags.map(tag => `<span class="tag">${tag}</span>`).join('')}
        </div>
        <a href="${article.link}" target="_blank" rel="noopener noreferrer" class="read-article-btn">
          Read Article <i class="fas fa-external-link-alt" style="margin-left: 5px;"></i>
        </a>
      </div>
    `;
    container.appendChild(articleEl);
  });
}

// Extract all unique tags for filter buttons
function getUniqueTags() {
  const tags = new Set();
  articles.forEach(article => {
    article.tags.forEach(tag => tags.add(tag));
  });
  return Array.from(tags).sort();
}

// Initialize the page
document.addEventListener('DOMContentLoaded', () => {
  // Initial render
  renderArticles();
  
  // Add event listeners for filter buttons
  const filterButtons = document.querySelectorAll('.filter-btn');
  filterButtons.forEach(button => {
    button.addEventListener('click', (e) => {
      const tag = e.target.dataset.tag;
      const searchInput = document.getElementById('article-search');
      renderArticles(tag === 'all' ? null : tag, searchInput.value);
      
      // Update active state
      filterButtons.forEach(btn => btn.classList.remove('active'));
      e.target.classList.add('active');
    });
  });

  // Add event listener for search input
  const searchInput = document.getElementById('article-search');
  if (searchInput) {
    let searchTimeout;
    searchInput.addEventListener('input', (e) => {
      clearTimeout(searchTimeout);
      searchTimeout = setTimeout(() => {
        const activeFilter = document.querySelector('.filter-btn.active');
        const currentFilter = activeFilter ? activeFilter.dataset.tag : null;
        renderArticles(currentFilter === 'all' ? null : currentFilter, e.target.value);
      }, 300);
    });
  }

  // Add animation to cards as they come into view
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = '1';
        entry.target.style.transform = 'translateY(0)';
      }
    });
  }, { threshold: 0.1 });

  // Observe all article cards
  document.querySelectorAll('.article-card').forEach(card => {
    observer.observe(card);
  });
});

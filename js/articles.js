// Articles data organized by relevance (most recent first)
// This is the source of truth for articles
const articles = [
  {
    title: "AI and the Future of Energy Careers in Canada",
    link: "https://youngcanadiansforresources.ca/blog/ai-and-the-future-of-energy-careers-in-canada/",
    organization: "Young Canadians for Resources",
    imageUrl: "https://youngcanadiansforresources.ca/wp-content/uploads/2024/11/nahrizul-kadri-OAsF0QMRWlA-unsplash-1024x578.jpg",
    preview: "Artificial intelligence (AI) has forever changed workspaces across Canada, especially in the energy sector...",
    tags: ["Artificial Intelligence", "Energy", "Career Development", "Natural Resources", "Automation"]
  },
  {
    title: "Why Engineering Consulting Could Be the Perfect Career for You",
    link: "https://youngcanadiansforresources.ca/blog/why-engineering-consulting-could-be-the-perfect-career-for-you/",
    organization: "Young Canadians for Resources",
    imageUrl: "https://youngcanadiansforresources.ca/wp-content/uploads/2025/03/24-08-25_DragonsDen_FuelingFutures_001-1024x683.jpg",
    preview: "Engineering consulting is more than a career, it's a platform to shape Canada's natural resource sector into a model of innovation, optimization, and efficiency.",
    tags: ["Engineering", "Consulting", "Career Development", "Natural Resources", "Infrastructure"]
  },
  {
    title: "Building a Stronger Canada: The Power of B.C.'s Resources",
    link: "https://youngcanadiansforresources.ca/blog/building-a-stronger-canada-the-power-of-b-c-s-resources/",
    organization: "Young Canadians For Resources",
    imageUrl: "https://youngcanadiansforresources.ca/wp-content/uploads/2025/03/CAC-UofA-Saville-06-1-scaled-e1741027893234-1024x558.jpg",
    preview: "The B.C. government and other provincial governments have a valuable opportunity to pursue a more economically advantageous strategy by utilizing domestic resources...",
    tags: ["Economy", "Natural Resources", "Trade", "Tariffs"]
  },
  {
    title: "This App Helps You Organize AI Prompts!",
    link: "https://medium.com/@martinbonsu/this-app-helps-you-organize-ai-prompts-0da44eb031f7",
    organization: "Medium",
    imageUrl: "https://miro.medium.com/v2/resize:fit:1200/0*Y4_TG8X_421A9GYU.png",
    preview: "If you want to organize your AI prompts, download this Chrome/Edge extension.",
    tags: ["Artificial Intelligence", "Productivity", "Prompt Engineering", "Organization"]
  },
  {
    title: "This Non-Profit Can Help You Land a Sustainable Career",
    link: "https://medium.com/@martinbonsu/this-non-profit-can-help-you-land-a-sustainable-career-bc2f8d480c37",
    organization: "Medium",
    imageUrl: "https://miro.medium.com/v2/resize:fit:744/0*hsBV7Sd24Ahy2mvm.png",
    preview: "Landing a career into the environmental sector can be daunting, especially if you are transitioning from a role that isn't sustainability...",
    tags: ["Non-Profits", "Career Development"]
  },
  {
    title: "The Backbone of Water: Hydrogen as an Energy Source",
    link: "https://youngcanadiansforresources.ca/blog/hydrogen-as-an-energy-source/",
    organization: "Young Canadians for Resources",
    imageUrl: "https://youngcanadiansforresources.ca/wp-content/uploads/2025/01/Newsletter-PICS-2.png",
    preview: "As governments accelerate efforts to diversify energy sources and transition towards innovative alternatives, hydrogen is emerging as a promising resource for Canada's energy future.",
    tags: ["Energy", "Natural Resources", "Infrastructure"]
  },
  {
    title: "Is a Career in Skilled Trades Safe?",
    link: "https://youngcanadiansforresources.ca/blog/is-a-career-in-skilled-trades-safe/",
    organization: "Young Canadians for Resources",
    imageUrl: "https://youngcanadiansforresources.ca/wp-content/uploads/2024/10/umit-yildirim-9OB46apMbC4-unsplash-1024x576.jpg",
    preview: "The skilled trades sector is facing many problems: a shortage of youth with sufficient skillsets entering these professions, an aging workforce...",
    tags: ["Workplace Safety", "Skilled Trades", "Employment"]
  },
  {
    title: "Top 5 Careers in the Recycling and Waste Management Industry",
    link: "https://youngcanadiansforresources.ca/blog/top-5-careers-in-the-recycling-and-waste-management-industry/",
    organization: "Young Canadians for Resources",
    imageUrl: "https://youngcanadiansforresources.ca/wp-content/uploads/2025/01/Newsletter-PICS-1.png",
    preview: "Canada's waste management and recycling industry plays a vital role in resource conservation... Here are my top 5 careers in the waste management sector that highlight the key professionals needed to tackle Canada's waste management challenges.",
    tags: ["Career Development", "Waste Management", "Recycling"]
  },
  {
    title: "Top 5 Engineering Careers in the Oil and Gas Industry",
    link: "https://youngcanadiansforresources.ca/blog/top-5-oil-and-gas-engineering-careers/",
    organization: "Young Canadians for Resources",
    imageUrl: "https://youngcanadiansforresources.ca/wp-content/uploads/2024/10/Newsletter-PIC-3.png",
    preview: "Here are 5 exciting career opportunities for engineers seeking employment in the oil and gas sector that promise a fulfilling career...",
    tags: ["Oil and Gas", "Energy", "Engineering", "Career Development", "Industry"]
  },
  {
    title: "Top 10 Careers for Chemical Engineering Graduates",
    link: "https://youngcanadiansforresources.ca/blog/top-10-careers-for-chemical-engineering-graduates/",
    organization: "Young Canadians for Resources",
    imageUrl: "https://youngcanadiansforresources.ca/wp-content/uploads/2024/07/YCR-THumb.jpg",
    preview: "Chemical engineering is a versatile degree that provides access to a wide range of job opportunities to apply the unique skillset and technical knowledge developed through a chemical engineering education.",
    tags: ["Chemical Engineering", "Engineering", "Career Development", "Industry", "Natural Resources"]
  },
  {
    title: "The Case for Strong Anti-Trust Enforcement",
    link: "https://medium.com/@martinbonsu/the-case-for-strong-antitrust-enforcement-b4da3b89a2ef",
    organization: "Medium",
    imageUrl: "https://miro.medium.com/v2/resize:fit:1200/1*YUjQ4a39QCPM04h02QAJmg.jpeg",
    preview: "Capitalism is becoming overwhelmingly concentrated within monopolized and anti-competitive markets.",
    tags: ["Economics", "Public Policy", "Corporations"]
  },
  {
    title: "Strengthening Climate Resilience with Sustainable Infrastructure: An Interview with Jasmine Lyn",
    link: "https://www.greencareer.ca/whats-new/strengthening-climate-resilience-with-sustainable-infrastructure-an-interview-with-jasmine-lyn/",
    organization: "Green Career Centre",
    imageUrl: "https://www.greencareer.ca/wp-content/uploads/2024/12/09_23_23-Strengthening-Climate-Resilience-with-Sustainable-Infrastructure_-An-Interview-with-Jasmine-Lyn.png",
    preview: "Explore environmental engineer Jasmine Lyn's journey in sustainable infrastructure, from EV charger projects to resilience planning.",
    tags: ["Sustainability", "Infrastructure", "Climate", "Engineering", "Career Development"]
  },
  {
    title: "Transitioning into Sustainable Careers for Non-Environmental Professionals",
    link: "https://www.greencareer.ca/whats-new/transitioning-into-sustainable-careers-for-non-environmental-professionals/",
    organization: "Green Career Centre",
    imageUrl: "https://www.greencareer.ca/wp-content/uploads/2024/12/08_16_23-Transitioning-into-Sustainable-Careers-for-Non-Environmental-Professionals.png",
    preview: "Discover how non-environmental professionals can transition into sustainability careers in Canada's growing environmental sector.",
    tags: ["Sustainability", "Career Development", "Employment"]
  },
  {
    title: "Crafting Success: Resources for Young Canadians to Fund a Career in Trades",
    link: "https://youngcanadiansforresources.ca/blog/crafting-success-resources-for-young-canadians-to-fund-a-career-in-trades/",
    organization: "Young Canadians for Resources",
    imageUrl: "https://youngcanadiansforresources.ca/wp-content/uploads/2024/07/YCR-THumb.jpg",
    preview: "As the cost of attending college continues to outpace inflation and a significantly growing number of college graduates experience a burdensome amount of student loan debt, there have been significant increases in youth enrolling in vocational training programs to pursue trades rather than a college degree. ",
    tags: ["Funding", "Grants", "Finance", "Career Development", "Higher Education"]
  },
  {
    title: "Tips for Jumpstarting a Career in Forestry",
    link: "https://youngcanadiansforresources.ca/blog/tips-for-jumpstarting-a-career-in-forestry/",
    organization: "Young Canadians for Resources",
    imageUrl: "https://youngcanadiansforresources.ca/wp-content/uploads/2024/07/students-for-canada-banner-2400x1600-1-1024x683.jpg",
    preview: "Forestry careers are great for those who have a passion for protecting and managing Canada's natural resources. However, it can be difficult to know how to move forward with your professional development or where to start. This blog post will go over some tips for starting a successful career in the Canadian forestry sector.",
    tags: ["Forestry", "Career Development", "Economy", "Higher Education"]
  },
  {
    title: "Empowering Youth for Green Careers via Mentorship",
    link: "https://www.greencareer.ca/whats-new/empowering-youth-for-green-careers-via-mentorship/",
    organization: "Green Career Centre",
    imageUrl: "https://www.greencareer.ca/wp-content/uploads/2024/12/06_26_23-Empowering-Youth-for-Green-Careers-via-Mentorship.png",
    preview: "Empowering youth through mentorship for green careers in Canada. Learn how mentees and mentors connect, grow, and access funding.",
    tags: ["Career Development", "Mentorship", "Sustainability"]
  },
  {
    title: "Building an Inclusive Future: Addressing Diversity and Equity in Forestry Jobs",
    link: "https://www.greencareer.ca/whats-new/building-an-inclusive-future-addressing-diversity-and-equity-in-forestry-jobs/",
    organization: "Green Career Centre",
    imageUrl: "https://www.greencareer.ca/wp-content/uploads/2024/12/06_19_23-Building-an-Inclusive-Future_-Addressing-Diversity-and-Equity-in-Forestry-Jobs.png",
    preview: "Explore how promoting diversity and equity can strengthen Canada's forestry sector while creating jobs for underserved communities.",
    tags: ["Diversity", "Equity", "Inclusion", "Forestry", "Employment", "Sustainability"]
  },
  {
    title: "The Future of Green Jobs: Non-Traditional Roles in Sustainability and Social Impact",
    link: "https://www.greencareer.ca/whats-new/the-future-of-green-jobs-non-traditional-roles-in-sustainability-and-social-impact/",
    organization: "Green Career Centre",
    imageUrl: "https://www.greencareer.ca/wp-content/uploads/2024/12/05_20_23-The-Future-of-Green-Jobs_-Non-Traditional-Roles-in-Sustainability-and-Social-Impact.png",
    preview: "Explore high-paying, non-traditional green jobs across marketing, finance, tech, psychology, and more—plus how to launch a career in sustainability.",
    tags: ["Sustainability", "Social Impact", "Employment", "Job Market Trends"]
  },
  {
    title: "How to Land a Sustainable Summer Job",
    link: "https://www.greencareer.ca/whats-new/how-to-land-a-sustainable-summer-job/",
    organization: "Green Career Centre",
    imageUrl: "https://www.greencareer.ca/wp-content/uploads/2022/10/04_04_23-How-to-Land-a-Sustainable-Summer-Job.png",
    preview: "Discover steps to land a sustainable summer job, from finding green opportunities to resume tips, and networking for climate-impact careers." ,
    tags: ["Career Development", "Job Searching", "Employment", "Sustainability"]
  },
  {
    title: "LinkedIn Sustainability Influencers to Follow in 2022",
    link: "https://www.greencareer.ca/whats-new/linkedin-sustainability-influencers-to-follow-in-2022/",
    organization: "Green Career Centre",
    imageUrl: "https://www.greencareer.ca/wp-content/uploads/2024/08/ok-1024x616.png",
    preview: "As the climate crisis intensifies, it’s more important than ever for a just transition towards green careers. Luckily, it’s easy to be inspired to work on climate action with a diverse range of environmentalists, entrepreneurs, activists, intrapreneurs, and community builders who are involved in supporting sustainability efforts. ",
    tags: ["Networking", "Mentorship", "Sustainability", "Social Media"]
  },
  {
    title: "Green Opportunities Abound: Highlights from the Green Career Fair",
    link: "https://www.greencareer.ca/whats-new/green-opportunities-abound-highlights-from-the-green-career-fair/",
    organization: "Green Career Centre",
    imageUrl: "https://www.greencareer.ca/wp-content/uploads/2024/12/02_20_23-Green-Opportunities-Abound_-Highlights-from-the-Green-Career-Fair.png",
    preview: "Explore highlights from the Green Career Fair, where 250+ youth met green employers, won mentorships, and discovered sustainabile careers.",
    tags: ["Networking", "Career Development", "Employment", "Sustainability"]
  },
  {
    title: "Green Careers In-Demand for the Eco-Conscious",
    link: "https://www.greencareer.ca/whats-new/green-careers-in-demand-for-the-eco-conscious/",
    organization: "Green Career Centre",
    imageUrl: "https://www.greencareer.ca/wp-content/uploads/2022/10/10_31_22-Green-Careers-In-Demand-For-the-Eco-Conscious.png",
    preview: "Explore high-paying, in-demand green careers for eco-conscious job seekers and learn about how to make an impact.",
    tags: ["Career Development", "Employment", "Sustainability"]
  },
  {
    title: "Guest Post: Investing in Environmental Non-Profits is Essential for a Sustainable Future",
    link: "https://cleartheair.ca/investing-in-environmental-non-profits-is-essential-for-a-sustainable-future/",
    organization: "Green Career Centre + Clean The Air",
    imageUrl: "https://cleartheair.ca/wp-content/uploads/2023/07/Header-Banner-for-Blog-1024x576.png",
    preview: "Environmental non-profits are key to a sustainable future, so why are we not funding them accordingly? This guest blog post with Martin from the Green Career Centre illustrates why investing in environmental non-profits is essential for a sustainable future.",
    tags: ["Non-Profits", "Environmental Activism", "Investing", "Sustainability"]
  },
  {
    title: "Amplify Your Sustainability Messaging",
    link: "https://tinyplanet.digital/impact-marketing/how-to-amplify-your-organizations-sustainability-messaging/",
    organization: "Green Career Centre + Tiny Planet Digital",
    imageUrl: "http://tinyplanet.digital/wp-content/uploads/2023/07/GCC-Blog-Banner-scaled.jpg",
    preview: "Discover how your organization can amplify its sustainability messaging to promote your green initiatives and reach a wider audience.",
    tags: ["Digital Marketing", "Sustainability"]
  },
  {
    title: "Being Patient with my Future",
    link: "https://apsc.ubc.ca/spotlight/student/martin-edwini-bonsu",
    organization: "Faculty of Applied Science | University of British Columbia",
    imageUrl: "https://apsc.ubc.ca/sites/default/files/spotlight-images/2022-07/Martin%20Edwini-Bonsu.png",
    preview: "Chat with Martin “Pursue a passion where you can see real-world benefits and find the most value in your life doing, not for fame, the impressions of others, recognition, or monetary gain.” Martin Edwini-Bonsu Chemical and Biological Engineering Student",
    tags: ["Interview", "Student Life", "Chemical Engineering", "Education", "Mentorship"]
  },
  {
    title: "Bored? Here are some things to spice up your summer",
    link: "https://ubyssey.ca/humour/bored-here-are-things-to-spice-up-your-summer/",
    organization: "The Ubyssey Publications Society (UBC)",
    imageUrl: "https://storage.googleapis.com/ubyssey/media/renditions/zubair-hirji_4.48.51_pm.2e16d0ba.fill-800x600.jpg",
    preview: "Since the school year is finally over, you now have time to do all those things that you promised yourself you would during the school year. Talk about best summer ever!",
    tags: ["Productivity", "Wellness", "Student Life"]
  },
  {
    title: "How UBC vloggers are redefining student engagement",
    link: "https://ubyssey.ca/opinion/letter-lecture-recordings-are-necessary-to-keep-students-learning/",
    organization: "The Ubyssey Publications Society (UBC)",
    imageUrl: "https://storage.googleapis.com/ubyssey/media/renditions/Screenshot_2022-07-08_at_3.27.49_P.2e16d0ba.fill-800x600.png",
    preview: "They give advice (or some might say “universi-tea”) that isn’t publicized in student brochures or advertisements.",
    tags: ["Social Media", "Vlogging", "Student Life"]
  },
  {
    title: "Letter: lecture recordings are necessary to keep students learning",
    link: "https://ubyssey.ca/humour/bored-here-are-things-to-spice-up-your-summer/",
    organization: "The Ubyssey Publications Society (UBC)",
    imageUrl: "https://storage.googleapis.com/ubyssey/media/renditions/20220209_i_falsetti_cirs_lecture_h.2e16d0ba.fill-800x600.jpg",
    preview: "With the return to full in-person classes, some professors may feel there is no need to record lectures anymore. However, the benefits of recording lectures outweigh the drawbacks for students and professors, making the need for accessibility more necessary to modernize post-secondary education.",
    tags: ["Education", "Academia"]
  },
  {
    title: "Career Pathways in the Forestry Sector",
    link: "https://youngcanadiansforresources.ca/blog/career-pathways-in-the-forestry-sector/",
    organization: "Young Canadians for Resources",
    imageUrl: "https://youngcanadiansforresources.ca/wp-content/uploads/2024/07/qtq80-h5PzFX.jpeg",
    preview: "Are you interested in a career in forestry but are not sure which one may be right for you? The Canadian forestry sector has a diverse range of careers spanning from conservation management to wildland firefighting.",
    tags: ["Forestry", "Career Development", "Industry", "Natural Resources"]
  },
  {
    title: "Top 5 Careers in the Water/Wastewater Industry",
    link: "https://youngcanadiansforresources.ca/blog/top-5-careers-in-the-water-wastewater-industry/",
    organization: "Young Canadians for Resources",
    imageUrl: "https://youngcanadiansforresources.ca/wp-content/uploads/2024/12/4.png",
    preview: "To meet the growing water demand, there needs to be spots filled for various types of positions in the water and wastewater industry. Below are my top 5 highlighted career paths in the water and wastewater industry that make an essential impact on water quality and availability in Canada.",
    tags: ["Water and Wastewater", "Industry", "Career Development", "Natural Resources"]
  },
  {
    title: "Empowering Communities: Building a Framework for Equitable Environmental Decision-Making",
    link: "https://celafoundation.ca/empowering-communities-building-a-framework-for-equitable-environmental-decision-making/",
    organization: "Canadian Environmental Law Foundation",
    imageUrl: "https://i0.wp.com/celafoundation.ca/wp-content/uploads/2019/06/cropped-environmental-law-library-logo-b-e1561054705546.png?fit=561%2C561\u0026ssl=1",
    preview: "This blog won an award in the TBCG Environmental Advocates writing contest. All content, including any opinions expressed, belong to the author. When it comes to eq…",
    tags: ["Environmental Law", "Community Engagement", "Climate Action"]
  }
];

export { articles };
    // Show message if no articles found
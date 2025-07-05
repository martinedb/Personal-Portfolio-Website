This file is a brainstorming page/braindumping page for what I want my personal portfolio to look like.

### Languages to Be Used for Website
HTML, CSS, JS frontend, React.js for backend
Use Swiper.js for project sliders
Use Tailwind CSS

## Organization of Coding Files
I want to have separate HTML files for the following types of pages.

mainpage.html - The main/home page for my personal portfolio
projects.html
resume.html
blog.html
contact.html

I want CSS files and JS files for each of these types of html files. 

Examples of css and JS files I want to include
mainpage.css/mainpage.js
projects.css/projects.js
resume.css/resume.js
blog.css/blog.js
contact.css/contact.js

### Main Features of the Portfolio for Each Part (aka section) of my personal portfolio website
-I want the portfolio to be user-friendly, easy-to-navigate and be mobile + web friendly.
-I want my website to be interactive, classy, modern, and have sophisticated, sleek, and professional look.

- I want a vertical bar on the left edge of the screen, with each icon inside a circle, spaced apart, and with a line connecting them for each of the social media icons I want people to click on. I want this vertical bar to be shown through my website regardless of which section the person is visiting.
- Here are the links for the social media profiles I want to highlight for each page.

### Social Media and Email Links
GitHub: https://github.com/martinedb
Email: edwinibon90210@gmail.com
LinkedIn: https://www.linkedin.com/in/martineb/
Medium: https://medium.com/@martinbonsu
Linktree: https://linktr.ee/martinbonsu
YouTube: https://www.youtube.com/@martinedwini-bonsu3767

### Specific Requests for my Personal Portfolio Main Page 
-I want the following header to be used in my website: "UBC Chemical Engineering Student | Urban Water and Wastewater Treatment Co-op Student | Engineering Ambassador | Student Representative | Writer

-I want the following description of myself to be front and center: 

### Description of Myself To Be Front and Center
"Hello there! I'm Martin. I am a 5th-year chemical engineering student studying at the University of British Columbia (UBC) on the Vancouver campus. For the past year, I have been on a co-op term as an Urban Water and Wastewater Treatment Co-op Student at Associated Engineering (AE). My experience spans water and wastewater treatment, data analysis, and project management."

### Visual Theme for How I Want My Personal Portfolio Website To Look Like

### Table of Contents for Visual Theme Structure for Personal Portfolio
1. Structure and Semantics
2. Styling and Design System
3. Key Features
4. Interactivity and UX Enhancements
5. Accessibility
6. Responsive Design
7. Performance and Best Practices
8. Extensibility Suggestions

#### Structure and Semantics
HTML5 semantic elements:

Uses <header>, <main>, <section>, <footer>, improving SEO and readability.

Logical content flow:

Header contains branding and intro text, followed by main content (About Me and Projects), ending with footer.

ARIA and keyboard navigation:

Buttons and interactive elements have ARIA labels and keyboard focus for screen readers and tab navigation.

Data attributes for filtering:

Projects use data-category attributes to enable dynamic filtering with minimal JS.

##### Styling and Design System

Color Palette:

Pastel gradient background (#fce4ec to #e1f5fe) for softness.

Primary accent: lavender-purple (#ba68c8) and highlight (#7b1fa2).

Text uses dark (#3e3e3e) and lighter shades (#6f6f6f) for hierarchy.

Glassmorphism cards with semi-transparent white backgrounds and blur effect.

Typography:

Uses ‘Quicksand’ font for modern, rounded geometric sans-serif style.

Clear hierarchy with distinct sizes and weights:

Large bold header (3rem)

Section titles with decorative left border and underline

Body text with increased line height (1.75) and letter spacing for readability.

*Visual Effects*:

Soft floating pastel blobs as decorative background elements with smooth up/down animation.

Card hover effects: subtle scaling, shadow deepening, and accent border to encourage interaction.

Buttons with pill shape, smooth color transitions on hover/focus.

#### Key Features
Personal Branding Logo:

A stylized "MRTN" monogram in the header sets a professional tone.

Dark Mode Toggle:

User can toggle dark mode, switching CSS variables for background, text, accents, and card styles, improving usability in low-light environments.

Project Filtering:

Buttons let users filter projects by category: Engineering, Policy, Game, or All. Projects dynamically show/hide without page reload.

Scroll Animations (AOS library):

Smooth fade, zoom, and slide effects on header, sections, and cards for polished entrance animations.

Smooth Scroll Behavior:

Native smooth scrolling on anchor navigation for better UX.

#### Interactivity and UX Enhancements

Button and Card Hover States:

Improves tactile feel and guides user attention with scaling and color shifts.

Focus Outlines:

Clear outlines on buttons for keyboard users maintaining accessibility compliance.

Sticky Header (optional):

Can be enabled or disabled; when enabled adds a subtle shadow and backdrop blur on scroll to keep branding visible without being obtrusive.

Floating Decorative Shapes:

Positioned behind content with low opacity and pointer-events: none so they don't interfere with user interaction.


#### Accessibility
ARIA labels and roles:

Improves screen reader comprehension for toggles and interactive groups.

Keyboard navigation:

All controls are focusable and visually indicate focus.

Contrast considerations:

Sufficient contrast between text and backgrounds in both light and dark modes.

Semantic HTML:

Screen readers benefit from meaningful element usage.

#### Responsive Design
Fluid grids:

Cards use CSS Grid with auto-fit and minmax ensuring adaptability to various screen sizes.

Media queries:

Adjust font sizes and spacing on smaller screens for legibility.

Touch-friendly buttons:

Appropriately sized clickable areas for mobile users.

#### Performance and Best Practices
Performance and Best Practices
Minimal external dependencies:

Only Google Fonts and AOS library loaded externally.

Lightweight CSS and JS:

Uses CSS custom properties (variables) to streamline theme management and dark mode toggling.

Non-blocking animations:

AOS configured with once: true to prevent repeated costly animations.

Progressive enhancement:

Core content is fully accessible without JavaScript, although enhanced with it.

#### Extension Suggestions
Add contact form or social links:

A footer or dedicated section for networking.

Expand project details:

Modal or dedicated pages with deeper descriptions, images, and links.

Add blog or article feed:

To showcase your writing on policy and engineering.

Analytics integration:

Track visitor engagement and project views.

Portfolio download / resume section:

For recruiters or collaborators.

Localization support:

Multilingual capabilities for wider reach.
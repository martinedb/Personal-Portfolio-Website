# Portfolio Website Setup Instructions

## Issues Fixed

1. **✅ Contact Form Backend** - Added complete backend functionality with email sending
2. **✅ Modal Window Positioning** - Fixed modal centering and scroll behavior
3. **✅ Dark Mode Compatibility** - Enhanced dark mode support across all sections

## Setup Instructions

### 1. Install Dependencies

```bash
npm install
```

### 2. Configure Email Service

1. Copy the environment template:
   ```bash
   cp .env.example .env
   ```

2. Edit the `.env` file with your email credentials:
   
   **For Gmail Users:**
   - Enable 2-factor authentication on your Gmail account
   - Generate an App Password: https://myaccount.google.com/apppasswords
   - Use the App Password (not your regular password)

   ```
   EMAIL_USER=your-email@gmail.com
   EMAIL_PASS=your-app-password-generated-from-google
   PORT=3000
   ```

### 3. Start the Server

```bash
npm start
```

The server will run on `http://localhost:3000` and serve your portfolio with full contact form functionality.

### 4. Development Mode

For development with live reload (without backend):
```bash
npm run dev
```

## Features

### Contact Form
- Full backend email functionality
- Sends notifications to your email
- Automatic confirmation emails to senders
- Form validation and error handling
- Professional email templates

### Modal Windows
- Proper centering on all screen sizes
- Smooth animations and transitions
- Keyboard navigation support
- Mobile-responsive design
- Proper scroll prevention when open

### Dark Mode
- Comprehensive dark mode support
- Readable text in all sections
- Smooth transitions between themes
- Consistent color scheme
- Support for all UI components

## File Structure

```
├── server.js              # Backend server with email functionality
├── .env.example           # Environment variables template
├── css/
│   ├── styles.css         # Main styles with dark mode variables
│   ├── contact.css        # Contact page styles
│   ├── footer.css         # Footer styles
│   └── projects-portfolio.css  # Project modal styles
├── js/
│   ├── modal.js           # Modal functionality
│   ├── contact.js         # Contact form handling
│   └── main.js           # Main JavaScript functionality
└── package.json           # Dependencies and scripts
```

## Environment Variables

- `EMAIL_USER`: Your email address for sending notifications
- `EMAIL_PASS`: Your email password or app password
- `PORT`: Server port (default: 3000)

## Security Notes

- Never commit your `.env` file to version control
- Use app passwords for email services instead of regular passwords
- The server includes basic input validation and sanitization
- CORS is configured for local development

## Troubleshooting

### Email Not Sending
1. Check your email credentials in `.env`
2. Ensure you're using an app password for Gmail
3. Verify your email service provider's settings
4. Check the server console for error messages

### Modal Issues
1. Ensure all CSS files are properly loaded
2. Check for JavaScript errors in browser console
3. Verify modal HTML structure

### Dark Mode Problems
1. Check that CSS variables are properly defined
2. Ensure the dark mode toggle is working
3. Verify all components use CSS variables

## Development

The project uses:
- **Backend**: Node.js with Express
- **Email**: Nodemailer
- **Frontend**: Vanilla JavaScript, HTML5, CSS3
- **Styling**: CSS Variables for theming
- **Build Tool**: None (vanilla web development)

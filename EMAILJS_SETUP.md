# EmailJS Setup Guide for Contact Form

## What You Need to Get Real Messaging Working

### 1. Create EmailJS Account
- Go to [EmailJS.com](https://www.emailjs.com/)
- Sign up for a free account
- Verify your email address

### 2. Set Up Email Service
- In EmailJS dashboard, go to "Email Services"
- Click "Add New Service"
- Choose your email provider (Gmail, Outlook, etc.)
- Connect your email account
- **Save the Service ID** - you'll need this

### 3. Create Email Template
- Go to "Email Templates"
- Click "Create New Template"
- Use this template structure:

```
Subject: New Contact Form Message from {{from_name}}

Name: {{from_name}}
Email: {{from_email}}
Subject: {{subject}}

Message:
{{message}}

---
This message was sent from your website contact form.
Reply directly to: {{reply_to}}
```

- **Save the Template ID** - you'll need this

### 4. Get Your User ID
- In EmailJS dashboard, go to "Account" → "API Keys"
- **Copy your Public Key (User ID)**

### 5. Update Your Contact.jsx File
Replace these placeholders in your `src/pages/Contact.jsx`:

```javascript
// Replace YOUR_USER_ID with your EmailJS Public Key
emailjs.init("YOUR_USER_ID")

// Replace YOUR_SERVICE_ID with your Email Service ID
'YOUR_SERVICE_ID'

// Replace YOUR_TEMPLATE_ID with your Email Template ID
'YOUR_TEMPLATE_ID'

// Replace 'Your Name' with your actual name
to_name: 'Your Name'
```

### 6. Update Contact Information
Also update these in your Contact.jsx:
- `your.email@example.com` → Your real email
- `+1 (555) 123-4567` → Your real phone number
- `Your City, State` → Your real location
- WhatsApp number in the links

## Alternative: Formspree (Even Easier)

If EmailJS seems too complex, try Formspree:

1. Go to [Formspree.io](https://formspree.io/)
2. Create account and get a form endpoint
3. Replace the form action with your Formspree endpoint
4. No JavaScript changes needed!

## Alternative: Netlify Forms

If hosting on Netlify:
1. Add `data-netlify="true"` to your form
2. Add `name="contact"` to your form
3. Netlify automatically handles form submissions

## Testing

After setup:
1. Fill out the contact form
2. Submit it
3. Check your email for the message
4. Check browser console for any errors

## Troubleshooting

- **"Service ID not found"**: Check your Email Service ID
- **"Template ID not found"**: Check your Email Template ID  
- **"User ID not found"**: Check your Public Key
- **Emails not sending**: Verify your email service connection

## Security Note

- EmailJS credentials are safe to use in frontend code
- They're designed for client-side usage
- Your email service credentials remain secure 
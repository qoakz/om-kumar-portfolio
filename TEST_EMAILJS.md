# EmailJS Test Guide

## ✅ What's Been Updated:

Your Contact.jsx now has:
- **User ID**: `eK8r6Fjb41LMEz21EVQES`
- **Template ID**: `template_hoj1v6d` 
- **Service ID**: `service_8u02yt7`
- **Email**: `kom647579@gmail.com`
- **Name**: `Kom`

## 🧪 How to Test:

### 1. Start Your Development Server
```bash
npm run dev
```

### 2. Go to Contact Page
- Navigate to `/contact` in your browser
- Or click the Contact link in your navigation

### 3. Fill Out the Form
- **Name**: Test User
- **Email**: your-test-email@example.com
- **Subject**: Test Message
- **Message**: This is a test message to verify EmailJS is working.

### 4. Submit the Form
- Click "Send Message"
- Watch for the loading spinner
- Check for success/error message

### 5. Check Results
- **Success**: You'll see a green success message
- **Email**: Check `kom647579@gmail.com` for the test message
- **Console**: Check browser console for any errors

## 🔍 Troubleshooting:

### If You Get Errors:
1. **Check Browser Console** (F12 → Console tab)
2. **Verify EmailJS Template** - make sure it has these variables:
   - `{{from_name}}`
   - `{{from_email}}`
   - `{{subject}}`
   - `{{message}}`
   - `{{to_name}}`
   - `{{reply_to}}`

### Common Issues:
- **"Service ID not found"**: Check `service_8u02yt7` is correct
- **"Template ID not found"**: Check `template_hoj1v6d` is correct
- **"User ID not found"**: Check `eK8r6Fjb41LMEz21EVQES` is correct

## 🎯 Expected Result:
- Form submits successfully
- You receive an email at `kom647579@gmail.com`
- Form clears after successful submission
- Success message appears

## 📧 Email Template Should Look Like:
```
Subject: New Contact Form Message from Test User

Name: Test User
Email: your-test-email@example.com
Subject: Test Message

Message:
This is a test message to verify EmailJS is working.

---
This message was sent from your website contact form.
Reply directly to: your-test-email@example.com
```

## 🚀 Next Steps After Testing:
1. Update your phone number in Contact.jsx
2. Update your location in Contact.jsx  
3. Update WhatsApp number in the links
4. Customize the email template if needed

**Your contact form should now be fully functional! 🎉** 
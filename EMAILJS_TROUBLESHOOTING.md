# EmailJS Troubleshooting Guide

## 🚨 Current Issue: "Failed to send message"

Your form is now simplified and should work. Here's how to debug:

## 🔍 Step 1: Check Browser Console

1. **Open your website** and go to Contact page
2. **Press F12** to open Developer Tools
3. **Click Console tab**
4. **Fill out and submit the form**
5. **Look for these messages**:

### ✅ Expected Console Messages:
```
EmailJS initialized successfully
Form submitted with data: {name: "...", email: "...", subject: "...", message: "..."}
Sending email with params: {from_name: "...", from_email: "...", subject: "...", message: "...", to_name: "Kom", reply_to: "..."}
Using Service ID: service_8u02yt7
Using Template ID: template_hoj1v6d
Using User ID: B7VLGR9m7NlwiGOeA
```

## 🚨 Step 2: Check for Errors

Look for **red error messages** in console like:
- `"Service ID not found"`
- `"Template ID not found"`
- `"User ID not found"`
- `"Email sending failed with error:"`

## 🔧 Step 3: Common Fixes

### **A. Service ID Issue**
If you see "Service ID not found":
- Go to EmailJS dashboard → Email Services
- Check if `service_8u02yt7` is still active
- Copy the correct Service ID

### **B. Template ID Issue**
If you see "Template ID not found":
- Go to EmailJS dashboard → Email Templates
- Check if `template_hoj1v6d` exists
- Copy the correct Template ID

### **C. User ID Issue**
If you see "User ID not found":
- Go to EmailJS dashboard → Account → API Keys
- Copy your Public Key again

### **D. Template Variables Issue**
Make sure your EmailJS template has these **exact** variables:
```
{{from_name}}
{{from_email}}
{{subject}}
{{message}}
{{to_name}}
{{reply_to}}
```

## 🧪 Step 4: Test the Form

1. **Fill out the form** with test data:
   - Name: Test User
   - Email: test@example.com
   - Subject: Test Message
   - Message: This is a test

2. **Submit the form** and watch console

3. **Check your email** at `kom647579@gmail.com`

## 📧 Step 5: Verify EmailJS Setup

### **In EmailJS Dashboard:**
1. **Email Services**: Should show Gmail connected
2. **Email Templates**: Should have your template
3. **API Keys**: Should have your Public Key

### **Template Content Should Look Like:**
```
Subject: New Contact Form Message from {{from_name}}

Name: {{from_name}}
Email: {{from_email}}
Subject: {{subject}}

Message:
{{message}}

---
Reply to: {{reply_to}}
```

## 🆘 Step 6: Still Not Working?

If you still get errors, tell me:
1. **What console messages** you see
2. **Any error messages** in red
3. **What happens** when you submit the form

## 🎯 Expected Result:
- Form submits without errors
- Console shows success messages
- You receive email at `kom647579@gmail.com`
- Form shows green success message

**Try the form now and let me know what you see in the console!** 
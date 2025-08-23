#!/usr/bin/env node

/**
 * Portfolio Website Setup Script
 * This script helps you quickly customize your portfolio website
 */

const fs = require('fs');
const path = require('path');
const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const question = (query) => new Promise((resolve) => rl.question(query, resolve));

async function setup() {
  console.log('🎨 Portfolio Website Setup\n');
  console.log('This script will help you customize your portfolio website with your information.\n');

  try {
    // Get user information
    const fullName = await question('Enter your full name: ');
    const email = await question('Enter your email address: ');
    const phone = await question('Enter your phone number (optional, press Enter to skip): ');
    const location = await question('Enter your location (City, State/Country): ');
    const whatsapp = await question('Enter your WhatsApp number (with country code, e.g., +15551234567): ');
    const linkedin = await question('Enter your LinkedIn profile URL (optional, press Enter to skip): ');
    const github = await question('Enter your GitHub profile URL (optional, press Enter to skip): ');
    const twitter = await question('Enter your Twitter profile URL (optional, press Enter to skip): ');

    console.log('\n📝 Updating files...\n');

    // Update files with user information
    const filesToUpdate = [
      {
        path: 'src/components/Navbar.jsx',
        search: 'Your Name',
        replace: fullName
      },
      {
        path: 'src/components/Footer.jsx',
        search: 'Your Name',
        replace: fullName
      },
      {
        path: 'src/pages/Contact.jsx',
        search: 'your.email@example.com',
        replace: email
      },
      {
        path: 'src/pages/Contact.jsx',
        search: '+1 (555) 123-4567',
        replace: phone || '+1 (555) 123-4567'
      },
      {
        path: 'src/pages/Contact.jsx',
        search: 'Your City, State',
        replace: location
      },
      {
        path: 'src/pages/Contact.jsx',
        search: '15551234567',
        replace: whatsapp.replace('+', '')
      },
      {
        path: 'src/components/Footer.jsx',
        search: 'your.email@example.com',
        replace: email
      }
    ];

    let updatedFiles = 0;
    for (const file of filesToUpdate) {
      try {
        if (fs.existsSync(file.path)) {
          let content = fs.readFileSync(file.path, 'utf8');
          if (content.includes(file.search)) {
            content = content.replace(new RegExp(file.search, 'g'), file.replace);
            fs.writeFileSync(file.path, content);
            console.log(`✅ Updated ${file.path}`);
            updatedFiles++;
          }
        }
      } catch (error) {
        console.log(`⚠️  Could not update ${file.path}: ${error.message}`);
      }
    }

    // Update social links if provided
    if (linkedin || github || twitter) {
      try {
        const footerPath = 'src/components/Footer.jsx';
        if (fs.existsSync(footerPath)) {
          let content = fs.readFileSync(footerPath, 'utf8');
          
          if (linkedin) {
            content = content.replace('href="#"', `href="${linkedin}"`);
          }
          if (github) {
            content = content.replace('href="#"', `href="${github}"`);
          }
          if (twitter) {
            content = content.replace('href="#"', `href="${twitter}"`);
          }
          
          fs.writeFileSync(footerPath, content);
          console.log('✅ Updated social media links');
        }
      } catch (error) {
        console.log(`⚠️  Could not update social links: ${error.message}`);
      }
    }

    console.log(`\n🎉 Setup complete! Updated ${updatedFiles} files.`);
    console.log('\n📋 Next steps:');
    console.log('1. Run "npm install" to install dependencies');
    console.log('2. Run "npm run dev" to start development server');
    console.log('3. Customize your portfolio content in the src/pages/ directory');
    console.log('4. Replace placeholder images with your actual project screenshots');
    console.log('5. Update the portfolio projects in src/pages/Portfolio.jsx');
    console.log('6. Customize your services in src/pages/Services.jsx');
    console.log('7. Update your story and experience in src/pages/About.jsx');
    console.log('\n🚀 Happy coding!');

  } catch (error) {
    console.error('❌ Setup failed:', error.message);
  } finally {
    rl.close();
  }
}

// Check if running directly
if (require.main === module) {
  setup();
}

module.exports = { setup }; 
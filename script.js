#!/usr/bin/env node

const fs = require('fs');
const { execSync } = require('child_process');

// Lấy tên dự án từ tham số command line hoặc từ package.json
function getProjectName() {
  // Thử lấy từ process.argv (nếu được truyền từ CLI)
  const args = process.argv.slice(2);
  if (args.length > 0) {
    return args[0];
  }
  
  // Thử đọc từ package.json
  try {
    const packageJson = JSON.parse(fs.readFileSync('package.json', 'utf8'));
    return packageJson.name;
  } catch (error) {
    console.log('⚠️ Could not determine project name, using default...');
    return 'MyApp';
  }
}

// Kiểm tra xem package đã được cài đặt chưa
function isPackageInstalled(packageName) {
  try {
    require.resolve(packageName);
    return true;
  } catch (error) {
    return false;
  }
}

// Main function
function main() {
  const projectName = getProjectName();
  const oldProjectName = 'ProjectName'; // Placeholder từ template.config.js
  
  console.log(`🚀 Setting up project: ${projectName}`);
  console.log(`📝 Renaming project from: ${oldProjectName} -> ${projectName}`);
  
  // 1. Cài đặt react-native-rename nếu chưa có
  console.log('📦 Installing react-native-rename...');
  try {
    if (!isPackageInstalled('react-native-rename')) {
      execSync('npm install --save-dev react-native-rename', { stdio: 'inherit' });
      console.log('✅ react-native-rename installed');
    } else {
      console.log('✅ react-native-rename already installed');
    }
  } catch (error) {
    console.log('⚠️ Failed to install react-native-rename, trying alternative...');
    try {
      execSync('npx react-native-rename@latest', { stdio: 'inherit' });
    } catch (npxError) {
      console.log('❌ Could not install react-native-rename');
      console.log('Please install manually: npm install --save-dev react-native-rename');
      return;
    }
  }
  
  // 2. Sử dụng react-native-rename để đổi tên dự án
  console.log('🔄 Renaming project...');
  try {
    execSync(`npx react-native-rename "${projectName}"`, { stdio: 'inherit' });
    console.log('✅ Project renamed successfully');
  } catch (error) {
    console.log('⚠️ Failed to rename with react-native-rename, trying manual approach...');
    
    // Fallback: Thử với tên bundle
    try {
      const bundleName = projectName.toLowerCase().replace(/[^a-z0-9]/g, '');
      execSync(`npx react-native-rename "${projectName}" -b "com.${bundleName}"`, { stdio: 'inherit' });
      console.log('✅ Project renamed with bundle name');
    } catch (fallbackError) {
      console.log('❌ Failed to rename project');
      console.log('Please rename manually or check the react-native-rename documentation');
      return;
    }
  }
  
  // 3. Cài đặt dependencies
  console.log('📦 Installing dependencies...');
  try {
    execSync('npm install', { stdio: 'inherit' });
    console.log('✅ Dependencies installed');
  } catch (error) {
    console.log('⚠️ Failed to install dependencies, please run npm install manually');
  }
  
  // 4. Tạo file README cho dự án
  console.log('📖 Creating project README...');
  const readmeContent = `# ${projectName}

This is a React Native project created with the HoaNinh template.

## Getting Started

1. Install dependencies:
   \`\`\`bash
   npm install
   \`\`\`

2. Run on iOS:
   \`\`\`bash
   npx react-native run-ios
   \`\`\`

3. Run on Android:
   \`\`\`bash
   npx react-native run-android
   \`\`\`

## Project Structure

- \`src/\` - Source code
- \`android/\` - Android specific files
- \`ios/\` - iOS specific files
- \`assets/\` - Images, fonts, and other assets

## Features

- React Native with TypeScript
- Custom fonts (SVN-Gilroy)
- Modern project structure
- Ready for development

## Development

- \`npm start\` - Start Metro bundler
- \`npm run ios\` - Run on iOS simulator
- \`npm run android\` - Run on Android emulator
- \`npm test\` - Run tests

Happy coding! 🚀
`;
  
  fs.writeFileSync('README.md', readmeContent);
  console.log('✅ README.md created');
  
  // 5. Hiển thị thông tin thành công
  console.log('\n🎉 Project setup completed successfully!');
  console.log(`📱 Your project "${projectName}" is ready to use.`);
  console.log('\nNext steps:');
  console.log('1. cd into your project directory');
  console.log('2. npx react-native run-ios (for iOS)');
  console.log('3. npx react-native run-android (for Android)');
  console.log('\nHappy coding! 🚀');
}

// Chạy script
main();

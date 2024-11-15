#!/usr/bin/env node

import {execSync} from 'child_process';
import path from 'path';
import fs from 'fs';

const projectName = process.argv[2];

if (!projectName) {
  console.error('❌ Project name is required. Usage: create-backend-boilerplate <project-name>');
  process.exit(1);
}

const projectPath = path.join(process.cwd(), projectName);

try {
  console.log(`🚀 Creating a new project: ${projectName}...`);

  // Clone the GitHub repository (replace with your actual repo URL)
  execSync(`git clone https://github.com/BRavan1407/create-backend-boilerplate.git ${projectPath}`, { stdio: 'inherit' });

  // Navigate into the new project directory
  process.chdir(projectPath);

  // Remove the .git directory from the cloned template
  execSync('rm -rf .git', { stdio: 'inherit' });

  // Install npm dependencies
  console.log('📦 Installing dependencies...');
  execSync('npm install', { stdio: 'inherit' });

  console.log(`✅ Project ${projectName} created successfully!`);
  console.log(`👉 Get started with:\n  cd ${projectName}\n  npm start`);
} catch (error) {
  console.error(`❌ Failed to create project: ${error.message}`);
  process.exit(1);
}

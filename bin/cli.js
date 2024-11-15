#!/usr/bin/env node
import execSync from 'child_process';

const projectName = process.argv[2] || 'create-backend-boilerplate';

console.log(`Creating a new project: ${projectName}...`);

execSync(`git clone https://github.com/BRavan1407/create-backend-boilerplate.git ${projectName}`, { stdio: 'inherit' });
execSync(`cd ${projectName} && npm install`, { stdio: 'inherit' });

console.log(`Project ${projectName} created successfully!`);
console.log(`cd ${projectName} && npm start`);

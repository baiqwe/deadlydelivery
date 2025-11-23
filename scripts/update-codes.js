#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

// Get command line arguments
const args = process.argv.slice(2);
const command = args[0];

const codesFilePath = path.join(__dirname, '../data/codes.json');

// Read current codes
function readCodes() {
  try {
    const data = fs.readFileSync(codesFilePath, 'utf8');
    return JSON.parse(data);
  } catch (error) {
    console.error('Error reading codes.json:', error.message);
    process.exit(1);
  }
}

// Write codes back to file
function writeCodes(codes) {
  try {
    fs.writeFileSync(codesFilePath, JSON.stringify(codes, null, 2) + '\n');
    console.log('✓ codes.json updated successfully!');
  } catch (error) {
    console.error('Error writing codes.json:', error.message);
    process.exit(1);
  }
}

// Get current date in YYYY-MM-DD format
function getCurrentDate() {
  const now = new Date();
  const year = now.getFullYear();
  const month = String(now.getMonth() + 1).padStart(2, '0');
  const day = String(now.getDate()).padStart(2, '0');
  return `${year}-${month}-${day}`;
}

// Add a new code
function addCode(code, reward) {
  if (!code || !reward) {
    console.error('Error: Both code and reward are required.');
    console.log('Usage: npm run add-code "CODE" "REWARD"');
    process.exit(1);
  }

  const codes = readCodes();
  
  // Check if code already exists
  const existingIndex = codes.findIndex(c => c.code === code);
  
  const newCode = {
    code: code.toUpperCase(),
    reward: reward,
    status: 'active',
    lastChecked: getCurrentDate()
  };

  if (existingIndex !== -1) {
    // Update existing code
    codes[existingIndex] = { ...codes[existingIndex], ...newCode };
    console.log(`✓ Updated existing code: ${code}`);
  } else {
    // Add new code
    codes.unshift(newCode); // Add to beginning
    console.log(`✓ Added new code: ${code}`);
  }

  // Update lastChecked date for all active codes
  codes.forEach(c => {
    if (c.status === 'active') {
      c.lastChecked = getCurrentDate();
    }
  });

  writeCodes(codes);
}

// Mark a code as expired
function expireCode(code) {
  if (!code) {
    console.error('Error: Code is required.');
    console.log('Usage: npm run expire-code "CODE"');
    process.exit(1);
  }

  const codes = readCodes();
  const codeIndex = codes.findIndex(c => c.code.toUpperCase() === code.toUpperCase());

  if (codeIndex === -1) {
    console.error(`Error: Code "${code}" not found.`);
    process.exit(1);
  }

  codes[codeIndex].status = 'expired';
  console.log(`✓ Marked code "${code}" as expired.`);
  
  writeCodes(codes);
}

// Main command handler - handles direct arguments when called via npm run add-code
// Args format: node update-codes.js CODE REWARD
if (args.length === 0) {
  console.log('Available commands:');
  console.log('  npm run add-code "CODE" "REWARD"  - Add or update a code');
  console.log('  npm run expire-code "CODE"        - Mark a code as expired');
  console.log('');
  console.log('Examples:');
  console.log('  npm run add-code "FREEGEMS" "50 Gems"');
  console.log('  npm run expire-code "OLDSCHOOL"');
} else if (args[0] === 'expire' || args[0] === 'expire-code') {
  const code = args[1];
  expireCode(code);
} else {
  // Assume first two args are code and reward
  const code = args[0];
  const reward = args[1];
  addCode(code, reward);
}


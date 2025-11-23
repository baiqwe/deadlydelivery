#!/usr/bin/env node

const { spawn } = require('child_process');
const { checkPort } = require('./check-port');

async function startDev() {
  console.log('🔍 Checking port 3000...');
  
  const port3000Available = await checkPort(3000);
  
  if (!port3000Available) {
    console.log('⚠️  Port 3000 is already in use.');
    console.log('💡 Next.js will automatically use the next available port (3001, 3002, etc.)');
    console.log('📝 Check the terminal output after "Local:" to see which port is being used.\n');
  } else {
    console.log('✓ Port 3000 is available\n');
  }
  
  console.log('🚀 Starting Next.js development server...\n');
  
  // Start Next.js dev server
  const nextProcess = spawn('npx', ['next', 'dev'], {
    stdio: 'inherit',
    shell: true
  });
  
  // Handle process exit
  nextProcess.on('exit', (code) => {
    process.exit(code || 0);
  });
  
  // Handle Ctrl+C
  process.on('SIGINT', () => {
    nextProcess.kill('SIGINT');
  });
}

startDev().catch(console.error);


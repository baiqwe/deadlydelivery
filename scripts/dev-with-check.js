#!/usr/bin/env node

const { spawn } = require('child_process');
const { checkPort } = require('./check-port');

async function startDev() {
  const port = process.env.PORT ? parseInt(process.env.PORT) : 3000;
  
  console.log(`🔍 Checking port ${port}...`);
  
  const portAvailable = await checkPort(port);
  
  if (!portAvailable) {
    console.log(`⚠️  Port ${port} is already in use.`);
    console.log('💡 Next.js will automatically use the next available port.');
    console.log('📝 Check the terminal output after "Local:" to see which port is being used.\n');
  } else {
    console.log(`✓ Port ${port} is available\n`);
  }
  
  console.log('🚀 Starting Next.js development server...\n');
  
  // Start Next.js dev server with port from environment or default
  const nextProcess = spawn('npx', ['next', 'dev', '-p', port.toString()], {
    stdio: 'inherit',
    shell: true,
    env: { ...process.env, PORT: port.toString() }
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


#!/usr/bin/env node

const net = require('net');

function checkPort(port) {
  return new Promise((resolve) => {
    const server = net.createServer();
    
    server.listen(port, () => {
      server.once('close', () => {
        resolve(true); // Port is available
      });
      server.close();
    });
    
    server.on('error', () => {
      resolve(false); // Port is in use
    });
  });
}

async function findAvailablePort(startPort = 3000, maxPort = 3010) {
  for (let port = startPort; port <= maxPort; port++) {
    const isAvailable = await checkPort(port);
    if (isAvailable) {
      return port;
    }
    console.log(`⚠️  Port ${port} is in use, checking next...`);
  }
  return null;
}

module.exports = { checkPort, findAvailablePort };

// If run directly, check default port
if (require.main === module) {
  (async () => {
    const port = await findAvailablePort(3000, 3010);
    if (port) {
      console.log(`✓ Port ${port} is available`);
      process.exit(0);
    } else {
      console.error('✗ No available ports found in range 3000-3010');
      process.exit(1);
    }
  })();
}


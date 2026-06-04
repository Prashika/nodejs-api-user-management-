/**
 * Entry Point for Node.js User Management REST API
 * 
 * This is the main entry point of the application.
 * Starts the HTTP server and initializes the application.
 * 
 * @author Your Name
 * @version 1.0.0
 */

// Import server configuration
const server = require('./server');

// Handle unhandled promise rejections
process.on('unhandledRejection', (reason, promise) => {
  console.error('Unhandled Rejection at:', promise, 'reason:', reason);
  process.exit(1);
});

// Handle uncaught exceptions
process.on('uncaughtException', (error) => {
  console.error('Uncaught Exception:', error);
  process.exit(1);
});

// Graceful shutdown
process.on('SIGINT', () => {
  console.log('\n✓ Shutting down gracefully...');
  server.close(() => {
    console.log('✓ Server closed');
    process.exit(0);
  });
});

process.on('SIGTERM', () => {
  console.log('\n✓ Shutting down gracefully...');
  server.close(() => {
    console.log('✓ Server closed');
    process.exit(0);
  });
});

// Export for testing purposes
module.exports = server;

// Best Practices Explained:
// Feature	Why?
// unhandledRejection handler	Catches promises that reject without a handler
// uncaughtException handler	Catches synchronous errors that escape try-catch
// SIGINT handler	Graceful shutdown on Ctrl+C
// SIGTERM handler	Graceful shutdown when process receives kill signal
// module.exports	Allows testing the server without starting it
// Clear comments	Documents what this file does
const secret = 'fake-secret';

if (!secret) {
  throw new Error('Missing APP_SECRET');
}

console.log('Application started successfully. Secret is available.');

// Runs on Netlify at deploy time.
// Reads secrets from environment variables and writes firebase-config.js
// so the file is never stored in the git repo.

const fs = require('fs');

const config = `window.FIREBASE_CONFIG = {
  apiKey:            "${process.env.FIREBASE_API_KEY || ''}",
  authDomain:        "${process.env.FIREBASE_AUTH_DOMAIN || ''}",
  projectId:         "${process.env.FIREBASE_PROJECT_ID || ''}",
  storageBucket:     "${process.env.FIREBASE_STORAGE_BUCKET || ''}",
  messagingSenderId: "${process.env.FIREBASE_MESSAGING_SENDER_ID || ''}",
  appId:             "${process.env.FIREBASE_APP_ID || ''}"
};

window.ADMIN_PASSWORD = "${process.env.JADAL_ADMIN_PASSWORD || ''}";
`;

fs.writeFileSync('firebase-config.js', config);
console.log('✅ firebase-config.js generated from environment variables');

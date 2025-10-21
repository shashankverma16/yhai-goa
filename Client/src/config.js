// src/config.js
export const API_URL =
  process.env.NODE_ENV === 'production'
    ? 'https://yhai-goa-1.onrender.com/' // deployed backend
    : 'https://yhai-goa.vercel.app/';          // local dev

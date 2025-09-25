// src/config.js
export const API_URL =
  process.env.NODE_ENV === 'production'
    ? 'https://yhai-goa-k6hk.vercel.app/' // deployed backend
    : 'https://yhai-goa.vercel.app/';          // local dev

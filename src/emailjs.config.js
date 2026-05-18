// ─────────────────────────────────────────────────────────────
// EmailJS Configuration for Shorubenix Contact Form
//
// SETUP STEPS (one-time, free):
//   1. Go to https://www.emailjs.com and create a free account
//   2. Add a Service → choose Gmail → connect shorubenixinfotechnology@gmail.com
//      → copy the Service ID into SERVICE_ID below
//   3. Create an Email Template with these variables:
//        {{from_name}}  {{from_email}}  {{phone}}
//        {{subject}}    {{message}}     {{to_email}}
//      → copy the Template ID into TEMPLATE_ID below
//   4. Go to Account → Public Key → copy into PUBLIC_KEY below
// ─────────────────────────────────────────────────────────────

export const EMAILJS_CONFIG = {
  SERVICE_ID:  'YOUR_SERVICE_ID',   // e.g. 'service_abc123'
  TEMPLATE_ID: 'YOUR_TEMPLATE_ID', // e.g. 'template_xyz789'
  PUBLIC_KEY:  'YOUR_PUBLIC_KEY',  // e.g. 'AbCdEfGhIjKlMnOp'
  TO_EMAIL:    'shorubenixinfotechnology@gmail.com',
}

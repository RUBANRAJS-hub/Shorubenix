import { SHEETS_CONFIG } from '../config/sheets.config'

export async function sendContactMessage(formData) {
  const payload = {
    name: formData.name.trim(),
    email: formData.email.trim().toLowerCase(),
    phone: formData.phone.trim() || 'Not provided',
    subject: formData.subject,
    message: formData.message.trim(),
  }

  const response = await fetch(SHEETS_CONFIG.SCRIPT_URL, {
    method: 'POST',
    redirect: 'follow',
    headers: { 'Content-Type': 'text/plain;charset=utf-8' },
    body: JSON.stringify(payload),
  })

  if (!response.ok) {
    throw new Error(`Server error: ${response.status}`)
  }

  const json = await response.json()
  if (json.status !== 'success') {
    throw new Error(json.message || 'Submission failed')
  }

  return json
}

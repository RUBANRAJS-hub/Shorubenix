import { useState, useCallback } from 'react'
import { sendContactMessage } from '../services/contactService'
import { useToast } from './useToast'

const INITIAL_FORM = { name: '', email: '', phone: '', subject: '', message: '' }

function validateForm(form) {
  const errors = {}
  if (!form.name.trim()) errors.name = 'Full name is required'
  if (!form.email.trim()) errors.email = 'Email address is required'
  else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) errors.email = 'Enter a valid email address'
  if (!form.subject) errors.subject = 'Please select a subject'
  if (!form.message.trim()) errors.message = 'Message cannot be empty'
  else if (form.message.trim().length < 20) errors.message = 'Message must be at least 20 characters'
  return errors
}

export function useContactForm() {
  const [form, setForm] = useState(INITIAL_FORM)
  const [errors, setErrors] = useState({})
  const [loading, setLoading] = useState(false)
  const [submitted, setSubmitted] = useState(false)
  const toast = useToast()

  const handleChange = useCallback((e) => {
    const { name, value } = e.target
    setForm(prev => ({ ...prev, [name]: value }))
    setErrors(prev => ({ ...prev, [name]: '' }))
  }, [])

  const handleSubmit = async (e) => {
    e.preventDefault()
    const errs = validateForm(form)
    if (Object.keys(errs).length > 0) {
      setErrors(errs)
      toast.error('Incomplete Form', 'Please fix the highlighted fields before submitting.')
      const firstKey = Object.keys(errs)[0]
      document.getElementById(`contact-${firstKey}`)?.focus()
      return
    }

    setLoading(true)
    try {
      await sendContactMessage(form)
      setSubmitted(true)
      setForm(INITIAL_FORM)
      setErrors({})
      toast.success(
        '✅ Message Sent!',
        `Thanks ${form.name.split(' ')[0]}! We'll get back to you within 24 hours.`,
        6000
      )
    } catch (err) {
      console.error('Submission error:', err)
      toast.error(
        '❌ Submission Failed',
        'Could not send your message. Please try WhatsApp or email us directly.',
        7000
      )
    } finally {
      setLoading(false)
    }
  }

  const resetForm = () => {
    setSubmitted(false)
    setForm(INITIAL_FORM)
    setErrors({})
  }

  return {
    form,
    errors,
    loading,
    submitted,
    handleChange,
    handleSubmit,
    resetForm,
  }
}

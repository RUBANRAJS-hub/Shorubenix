import { useState, useCallback } from 'react'
import { ToastContext } from './toastContext'
import Toast from '../components/feedback/Toast'

export function ToastProvider({ children }) {
  const [toasts, setToasts] = useState([])

  const removeToast = useCallback((id) => {
    setToasts(prev => prev.filter(t => t.id !== id))
  }, [])

  const addToast = useCallback(({ type = 'info', title, message, duration = 4500 }) => {
    const id = Date.now() + Math.random().toString(36).substring(2, 9)
    setToasts(prev => [...prev, { id, type, title, message, duration }])
  }, [])

  const success = useCallback((title, message, duration) => addToast({ type: 'success', title, message, duration }), [addToast])
  const error = useCallback((title, message, duration) => addToast({ type: 'error', title, message, duration }), [addToast])
  const info = useCallback((title, message, duration) => addToast({ type: 'info', title, message, duration }), [addToast])

  return (
    <ToastContext.Provider value={{ toasts, removeToast, addToast, success, error, info }}>
      {children}
      <Toast toasts={toasts} onRemove={removeToast} />
    </ToastContext.Provider>
  )
}

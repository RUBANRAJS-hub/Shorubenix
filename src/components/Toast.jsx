import { useEffect, useState } from 'react'
import { FiCheckCircle, FiAlertCircle, FiX, FiInfo } from 'react-icons/fi'
import './Toast.css'

const ICONS = {
  success: <FiCheckCircle size={18} />,
  error:   <FiAlertCircle size={18} />,
  info:    <FiInfo size={18} />,
}

/* ─── Single Toast Item ─── */
function ToastItem({ id, type = 'info', title, message, duration = 4500, onRemove }) {
  const [exiting, setExiting] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => {
      setExiting(true)
      setTimeout(() => onRemove(id), 380)
    }, duration)
    return () => clearTimeout(timer)
  }, [id, duration, onRemove])

  const handleClose = () => {
    setExiting(true)
    setTimeout(() => onRemove(id), 380)
  }

  return (
    <div className={`toast toast--${type}${exiting ? ' toast--exit' : ''}`} role="alert">
      <div className="toast__icon">{ICONS[type]}</div>
      <div className="toast__body">
        {title && <p className="toast__title">{title}</p>}
        {message && <p className="toast__message">{message}</p>}
      </div>
      <button className="toast__close" onClick={handleClose} aria-label="Dismiss">
        <FiX size={15} />
      </button>
      <div className="toast__bar" style={{ animationDuration: `${duration}ms` }} />
    </div>
  )
}

/* ─── Toast Container ─── */
export default function Toast({ toasts, onRemove }) {
  if (!toasts.length) return null
  return (
    <div className="toast-container" role="region" aria-label="Notifications">
      {toasts.map(t => (
        <ToastItem key={t.id} {...t} onRemove={onRemove} />
      ))}
    </div>
  )
}

/* ─── Hook ─── */
let _id = 0
export function useToast() {
  const [toasts, setToasts] = useState([])

  const addToast = ({ type = 'info', title, message, duration }) => {
    const id = ++_id
    setToasts(prev => [...prev, { id, type, title, message, duration }])
  }

  const removeToast = (id) => setToasts(prev => prev.filter(t => t.id !== id))

  return {
    toasts,
    removeToast,
    success: (title, message, duration) => addToast({ type: 'success', title, message, duration }),
    error:   (title, message, duration) => addToast({ type: 'error',   title, message, duration }),
    info:    (title, message, duration) => addToast({ type: 'info',    title, message, duration }),
  }
}

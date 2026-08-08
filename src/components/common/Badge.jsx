import './Badge.css'

export default function Badge({ children, variant = 'primary', color, style, className = '' }) {
  const customStyle = color
    ? { background: `${color}20`, color: color, borderColor: `${color}40`, ...style }
    : style

  return (
    <span className={`badge badge--${variant} ${className}`} style={customStyle}>
      {children}
    </span>
  )
}

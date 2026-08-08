import './Card.css'

export default function Card({
  children,
  className = '',
  glass = true,
  hoverable = true,
  ...props
}) {
  const classes = [
    glass ? 'glass-card' : 'solid-card',
    hoverable ? 'card-hover' : '',
    className,
  ]
    .filter(Boolean)
    .join(' ')

  return (
    <div className={classes} {...props}>
      {children}
    </div>
  )
}

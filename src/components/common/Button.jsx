import './Button.css'

export default function Button({
  children,
  variant = 'primary',
  size = 'md',
  className = '',
  loading = false,
  disabled = false,
  as: Component = 'button',
  ...props
}) {
  const classes = [
    'btn',
    `btn-${variant}`,
    size !== 'md' ? `btn-${size}` : '',
    loading ? 'loading' : '',
    className,
  ]
    .filter(Boolean)
    .join(' ')

  return (
    <Component className={classes} disabled={disabled || loading} {...props}>
      {loading ? (
        <>
          <span className="btn-spinner" />
          {children}
        </>
      ) : (
        children
      )}
    </Component>
  )
}

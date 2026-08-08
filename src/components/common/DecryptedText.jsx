import { useEffect, useRef, useState } from 'react'

const CHARS = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*'

export default function DecryptedText({ text = '', speed = 60, className = '' }) {
  const [displayed, setDisplayed] = useState(text)
  const intervalRef = useRef(null)
  const frameRef = useRef(0)
  const totalFrames = text.length * 2

  useEffect(() => {
    frameRef.current = 0
    intervalRef.current = setInterval(() => {
      frameRef.current += 1
      const revealed = Math.floor((frameRef.current / totalFrames) * text.length)
      setDisplayed(
        text
          .split('')
          .map((char, i) => {
            if (char === ' ') return ' '
            if (i < revealed) return char
            return CHARS[Math.floor(Math.random() * CHARS.length)]
          })
          .join('')
      )
      if (frameRef.current >= totalFrames) {
        clearInterval(intervalRef.current)
        setDisplayed(text)
      }
    }, speed / 2)

    return () => clearInterval(intervalRef.current)
  }, [text, speed, totalFrames])

  return <span className={className}>{displayed}</span>
}

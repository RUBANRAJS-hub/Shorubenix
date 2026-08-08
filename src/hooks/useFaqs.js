import { useState, useMemo } from 'react'
import { FAQ_DATA } from '../data/faqs'

export function useFaqs() {
  const [searchQuery, setSearchQuery] = useState('')
  const [activeFaq, setActiveFaq] = useState(null)

  const filteredFaqs = useMemo(() => {
    if (!searchQuery.trim()) return FAQ_DATA
    const q = searchQuery.toLowerCase()
    return FAQ_DATA.filter(
      (item) => item.question.toLowerCase().includes(q) || item.answer.toLowerCase().includes(q)
    )
  }, [searchQuery])

  const toggleFaq = (index) => {
    setActiveFaq(prev => (prev === index ? null : index))
  }

  return {
    searchQuery,
    setSearchQuery,
    activeFaq,
    toggleFaq,
    faqs: filteredFaqs,
  }
}

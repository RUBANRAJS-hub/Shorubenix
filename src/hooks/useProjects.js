import { useState, useMemo } from 'react'
import { PROJECTS_DATA, PROJECT_CATEGORIES } from '../data/projects'

export function useProjects() {
  const [activeCategory, setActiveCategory] = useState('All')
  const [searchQuery, setSearchQuery] = useState('')
  const [selectedProject, setSelectedProject] = useState(null)

  const filteredProjects = useMemo(() => {
    return PROJECTS_DATA.filter((proj) => {
      const matchesCategory = activeCategory === 'All' || proj.category === activeCategory
      const matchesQuery =
        proj.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        proj.tech.some((t) => t.toLowerCase().includes(searchQuery.toLowerCase()))
      return matchesCategory && matchesQuery
    })
  }, [activeCategory, searchQuery])

  return {
    categories: PROJECT_CATEGORIES,
    activeCategory,
    setActiveCategory,
    searchQuery,
    setSearchQuery,
    selectedProject,
    setSelectedProject,
    projects: filteredProjects,
  }
}

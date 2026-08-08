import './Accordion.css'

export default function Accordion({ items, activeIndex, onToggle }) {
  if (!items || items.length === 0) {
    return (
      <p className="faq-no-results">
        No questions match your search query. Try keywords like &quot;Solidity&quot;, &quot;Viva&quot;, or &quot;Turnitin&quot;.
      </p>
    )
  }

  return (
    <div className="accordion">
      {items.map((item, index) => {
        const isActive = activeIndex === index
        return (
          <div
            key={item.id}
            className={`accordion-item ${isActive ? 'active' : ''}`}
            id={`accordion-item-${item.id}`}
          >
            <button
              className="accordion-header"
              onClick={() => onToggle(index)}
              aria-expanded={isActive}
              aria-controls={`accordion-body-${item.id}`}
            >
              <span>{item.question}</span>
              <span className="accordion-icon">{isActive ? '−' : '+'}</span>
            </button>

            <div
              id={`accordion-body-${item.id}`}
              className="accordion-body"
              role="region"
            >
              <div className="accordion-body-inner">
                <p>{item.answer}</p>
              </div>
            </div>
          </div>
        )
      })}
    </div>
  )
}

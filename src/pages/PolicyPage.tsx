
import { Link } from 'react-router-dom'
import { policies } from '../data/Policies'
import './PolicyPage.css'

type PolicyPageProps = {
  policy: 'privacy' | 'affiliate'
}

export default function PolicyPage({ policy }: PolicyPageProps) {
  const content = policies[policy]

  return (
    <div className="policy-page">
      <header className="policy-header">
        <Link to="/" className="policy-home-link">
          ← FORMA
        </Link>

        <span>PRIVATE WELLNESS</span>
      </header>

      <main className="policy-content">
        <p className="policy-eyebrow">
          FORMA PRIVATE WELLNESS
        </p>

        <h1>{content.title}</h1>

        <div className="policy-divider" />

        {content.sections.map((section) => (
          <section
            className="policy-section"
            key={section.heading}
          >
            <h2>{section.heading}</h2>
            <p>{section.text}</p>
          </section>
        ))}
      </main>
    </div>
  )
}



import '../index.css'


import { useNavigate } from 'react-router-dom'



type Collection = "MOVE" | "RESTORE" | "REFRESH";

const collections = [
  {
    name: "MOVE" as Collection,
    number: "01",
    description: "Strength. Balance. Movement.",
    detail: "Explore the art of movement.",
    symbol: "◇",
  },
  {
    name: "RESTORE" as Collection,
    number: "02",
    description: "Warmth. Stillness. Renewal.",
    detail: "Discover restorative warmth.",
    symbol: "◯",
  },
  {
    name: "REFRESH" as Collection,
    number: "03",
    description: "Clarity. Energy. Contrast.",
    detail: "Experience the power of cold.",
    symbol: "✳",
  },
];

function Home() {

  const navigate = useNavigate();

  
  return (
    <div className="site-shell">
      <header className="site-header">
        <a className="header-logo" href="/">
          FORMA
        </a>

        <span className="header-descriptor">PRIVATE WELLNESS</span>

        <nav className="main-nav" aria-label="Main navigation">
          <a href="#collections">Collections</a>
          <a href="#philosophy">Our Philosophy</a>
        </nav>
      </header>

      <main>
        <section className="home-hero">
          <h1>FORMA</h1>

          <div className="hero-rule" />

          <p className="hero-tagline">Wellness, beautifully considered.</p>

          <p className="hero-intro">
            An edited collection of exceptional equipment for the art of living
            well.
          </p>
        </section>

        <section className="collections-section" id="collections">
          <p className="section-label">EXPLORE THE COLLECTIONS</p>

          <div className="collection-grid">
            {collections.map((collection) => (
              <button
                
className="collection-portal"

                key={collection.name}
                onClick={() => navigate(`/${collection.name.toLowerCase()}`)}
                type="button"
              >
                <span className="portal-number">{collection.number}</span>

                <span className="portal-symbol" aria-hidden="true">
                  {collection.symbol}
                </span>

                <span className="portal-title">{collection.name}</span>

                <span className="portal-description">
                  {collection.description}
                </span>

                <span className="portal-action">
                  EXPLORE <span aria-hidden="true">↗</span>
                </span>
              </button>
            ))}
          </div>
        </section>

        <section className="philosophy" id="philosophy">
          <p className="section-label">THE FORMA PHILOSOPHY</p>
          <p>
            Rooted in residential design and renovation, FORMA curates exceptional home wellness equipment with an emphasis on performance, craftsmanship, and seamless integration. Our selections are guided by how beautifully and practically they fit into the home.
          </p>
        </section>
      </main>

    </div>
  );
}

export default Home;


import { Link } from 'react-router-dom'
import './Showroom.css'
import { getProductsByCollection } from '../data/products'



type ShowroomProps = {
  collection: 'MOVE' | 'RESTORE' | 'REFRESH'
}



const showroomContent = {
  MOVE: {
    number: '01',
    hero: '/images/move-hero.png',
    subtitle: 'STRENGTH & PILATES',
    description:
      'FORMA has selected the following movement equipment with three priorities in mind: performance, versatility, and design. Our collection focuses on thoughtfully engineered strength systems and Pilates reformers that bring professional-quality training into the home.',
    heading: 'Our Selected Equipment',
    symbol: '◇',
  },
  RESTORE: {
    number: '02',
    hero: '/images/restore-hero.png',
    subtitle: 'SAUNAS',
    description:
      'FORMA has selected the following saunas with three priorities in mind: convenience, performance, and design. Our collection focuses on thoughtfully engineered, prefabricated models that offer a refined experience without the complexity of a custom build.',
    heading: 'Our Selected Saunas',
    symbol: '◯',
  },
  REFRESH: {
    number: '03',
    hero: '/images/refresh-hero.png',
    subtitle: 'COLD IMMERSION',
    description:
      'FORMA has selected the following cold plunge systems with three priorities in mind: performance, convenience, and design. Our collection focuses on thoughtfully engineered tubs and chillers suited to private residential wellness spaces.',
    heading: 'Our Selected Cold Plunges',
    symbol: '✳',
  },
}


export default function Showroom({
  collection,
}: ShowroomProps) {

  const content = showroomContent[collection]

const collectionProducts = getProductsByCollection(collection)


  return (
    <div className="showroom">
      <header className="showroom-header">
        
<Link to="/" className="showroom-back">
  ← FORMA
</Link>


        <span className="showroom-header-label">
          PRIVATE WELLNESS
        </span>

        <span className="showroom-header-category">
          {collection}
        </span>
      </header>

      <main>
        

<section className="showroom-hero">
  <img
    className="showroom-hero-image"
    src={content.hero}
    alt={`${collection} collection at FORMA`}
  />
</section>



        <section className="showroom-intro">
          <p className="showroom-eyebrow">
            {content.subtitle}
          </p>

          <h1>{collection}</h1>

          <p>{content.description}</p>
        </section>

        <section className="showroom-products">
          <div className="showroom-section-heading">
            
<span>THE COLLECTION / {content.number}</span>

            
<h2>{content.heading}</h2>

            
<div className="showroom-ornament" aria-hidden="true">
  <span className="showroom-ornament-line" />
  
<span className="showroom-ornament-symbol">
  {content.symbol}
</span>

  <span className="showroom-ornament-line" />
</div>

          </div>

         
<div className="showroom-product-grid">
  {collectionProducts.map((product) => (
    <Link
      to={`/product/${product.id}`}
      className="showroom-product-card"
      key={product.id}
    >
      <div className="showroom-product-image">
        {product.images.length > 0 ? (
          <img
            src={product.images[0]}
            alt={product.name}
            className="showroom-card-photo"
          />
        ) : (
          <div className="product-placeholder-content">
            <span className="product-placeholder-symbol">
              {content.symbol}
            </span>
            <span>YOUR PRODUCT HERE</span>
          </div>
        )}
      </div>

      <div className="showroom-product-info">
        <h3>{product.name}</h3>
        <span className="showroom-rating">
          {product.reviews.rating !== null &&
          product.reviews.count !== null
            ? `★ ${product.reviews.rating.toFixed(1)} · ${product.reviews.count} reviews`
            : 'Rating pending verification'}
        </span>
      </div>
    </Link>
  ))}
</div>
</section>
      </main>

      <footer className="showroom-footer">
        <span>FORMA</span>
        <span>WELLNESS, BEAUTIFULLY CONSIDERED.</span>
      </footer>
    </div>
  )
}

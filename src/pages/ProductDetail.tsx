
import { useState } from 'react'
import { Link } from 'react-router-dom'
import './ProductDetail.css'

import { useParams } from 'react-router-dom'
import { getProductById } from '../data/products'


const product = {
  collection: 'RESTORE',
  category: 'SAUNAS',
  name: 'Selected Product',
  manufacturer: 'Manufacturer Name',
  price: 'Price pending verification',
  description:
    'Product description will be added following manufacturer verification.',
  images: [] as string[],
  specifications: [
    { label: 'Dimensions', value: 'To be confirmed' },
    { label: 'Materials', value: 'To be confirmed' },
    { label: 'Installation', value: 'To be confirmed' },
    { label: 'Warranty', value: 'To be confirmed' },
  ],
  manufacturerUrl: '',
}


export default function ProductDetail() {
  const { id } = useParams<{ id: string }>()
  const [activeImage, setActiveImage] = useState(0)

  const product = getProductById(id ?? '')

  if (!product) {
    return (
      <div className="product-page">
        <div className="product-information"
          style={{ textAlign: 'center', padding: '100px 20px' }}>
          <h1>Product Not Found</h1>
          <p>This product is not currently available.</p>
          <Link to="/">Return to FORMA</Link>
        </div>
      </div>
    )
  }


  const nextImage = () => {
    setActiveImage((current) =>
      (current + 1) % product.images.length
    )
  }

  const previousImage = () => {
    setActiveImage((current) =>
      (current - 1 + product.images.length) %
      product.images.length
    )
  }

  return (
    <div className="product-page">
      
<header className="product-page-header">
  <Link to="/" className="product-home-link">
    FORMA
  </Link>

  <span>PRIVATE WELLNESS</span>
</header>


      <main className="product-detail-layout">

<Link
  to={`/${product.collection.toLowerCase()}`}
  className="product-back-link"
>
  ← Back to {product.collection}
</Link>

        <section className="product-gallery">
          <div className="product-main-image">
            {product.images.length > 0 ? (
              <>
                <img
                  src={product.images[activeImage]}
                  alt={product.name}
                />
                {product.images.length > 1 && (
                  <div className="product-gallery-controls">
                    <button onClick={previousImage}>←</button>
                    <button onClick={nextImage}>→</button>
                  </div>
                )}
              </>
            ) : (
              <span>PRODUCT PHOTOGRAPHY COMING SOON</span>
            )}
          </div>

          <div className="product-thumbnails">
            {product.images.map((image, index) => (
              <button
                key={image}
                onClick={() => setActiveImage(index)}
                className={
                  activeImage === index ? 'active' : ''
                }
              >
                <img
                  src={image}
                  alt={`${product.name} view ${index + 1}`}
                />
              </button>
            ))}
          </div>
        </section>

        <section className="product-information">
          <p className="product-eyebrow">
            {product.collection} / {product.category}
          </p>

          <h1>{product.name}</h1>
          <p className="product-manufacturer">
            {product.manufacturer}
          </p>
          <p className="product-price">{product.price}</p>

          <div className="product-info-section">
            <h2>Description</h2>
            <p>{product.description}</p>
          </div>

          <div className="product-info-section">
            <h2>Specifications</h2>
            {product.specifications.map((spec) => (
              <div className="product-spec" key={spec.label}>
                <span>{spec.label}</span>
                <span>{spec.value}</span>
              </div>
            ))}
          </div>

          <div className="product-info-section">
            <h2>Customer Reviews</h2>
            <p>Reviews pending verification.</p>
          </div>

          {product.manufacturerUrl ? (
            <a
              className="product-order-button"
              href={product.manufacturerUrl}
              target="_blank"
              rel="noopener noreferrer sponsored"
            >
              Order Direct from Manufacturer ↗
            </a>
          ) : (
            <button
              className="product-order-button"
              disabled
            >
              Manufacturer Link Coming Soon
            </button>
          )}

          <p className="product-affiliate-note">
            Orders are completed directly with the manufacturer.
            FORMA may earn a commission from qualifying purchases.
          </p>
        </section>
      </main>
    </div>
  )
}

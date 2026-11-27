import { useState, useEffect } from 'react'
import { Link, useParams } from 'react-router-dom'
import { getProductById } from '../data/products'
import './ProductDetail.css'

export default function ProductDetail() {
  const { id } = useParams<{ id: string }>()
  const [activeImage, setActiveImage] = useState(0)
  const [codeCopied, setCodeCopied] = useState(false)

  const product = getProductById(id ?? '')

  useEffect(() => {
    setActiveImage(0)
    setCodeCopied(false)
  }, [id])

  if (!product) {
    return (
      <div className="product-page">
        <div
          className="product-information"
          style={{ textAlign: 'center', padding: '100px 20px' }}
        >
          <h1>Product Not Found</h1>
          <p>This product is not currently available.</p>
          <Link to="/">Return to FORMA</Link>
        </div>
      </div>
    )
  }

  // Dynamic product-specific ordering
  const orderUrl =
    product.affiliateProductUrl || product.manufacturerUrl

  const nextImage = () => {
    if (!product.images.length) return

    setActiveImage((current) =>
      (current + 1) % product.images.length
    )
  }

  const previousImage = () => {
    if (!product.images.length) return

    setActiveImage((current) =>
      (current - 1 + product.images.length) %
      product.images.length
    )
  }

  const copyDiscountCode = async () => {
    if (!product.discountCode) return

    try {
      await navigator.clipboard.writeText(product.discountCode)
      setCodeCopied(true)
    } catch {
      setCodeCopied(false)
    }
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
                  src={
                    product.images[activeImage] ||
                    product.images[0]
                  }
                  alt={product.name}
                />

                {product.images.length > 1 && (
                  <div className="product-gallery-controls">
                    <button
                      type="button"
                      onClick={previousImage}
                      aria-label="Previous product image"
                    >
                      ←
                    </button>

                    <button
                      type="button"
                      onClick={nextImage}
                      aria-label="Next product image"
                    >
                      →
                    </button>
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
                type="button"
                key={`${image}-${index}`}
                onClick={() => setActiveImage(index)}
                className={
                  activeImage === index ? 'active' : ''
                }
                aria-label={`View product image ${index + 1}`}
              >
                <img
                  src={image}
                  alt={`${product.name} view ${index + 1}`}
                  loading="lazy"
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

          <p className="product-price">
            {product.price}
          </p>

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

       { /* <div className="product-info-section">
            <h2>Customer Reviews</h2>

            {product.reviews.rating !== null ? (
              <>
                <p>
                  ★ {product.reviews.rating} / 5
                  {product.reviews.count !== null &&
                    ` (${product.reviews.count} reviews)`}
                </p>

                {product.reviews.source && (
                  <p>{product.reviews.source}</p>
                )}
              </>
            ) : (
              <p>Reviews pending verification.</p>
            )}
          </div>*/}

          {/* Dynamic ordering section */}

          <div className="product-purchase-section">

            {orderUrl ? (
              <a
                className="product-order-button"
                href={orderUrl}
                target="_blank"
                rel={
                  product.affiliateProductUrl
                    ? 'noopener noreferrer sponsored'
                    : 'noopener noreferrer'
                }
              >
                Order Direct from {product.manufacturer} ↗
              </a>
            ) : (
              <button
                className="product-order-button"
                disabled
              >
                Manufacturer Link Coming Soon
              </button>
            )}

            {/* Optional manufacturer discount */}

            {product.discountCode && (
              <div className="product-discount">

                <span className="product-discount-heading">
                  THE FORMA OFFER
                </span>

                <p className="product-discount-label">
                  {product.discountLabel ||
                    'Use our exclusive code at checkout'}
                </p>

                <button
                  type="button"
                  className="product-discount-code"
                  onClick={copyDiscountCode}
                  aria-live="polite"
                >
                  {codeCopied
                    ? 'CODE COPIED ✓'
                    : `${product.discountCode} — COPY CODE`}
                </button>

              </div>
            )}

            <p className="product-affiliate-note">
              Purchases are completed directly with{' '}
              {product.manufacturer}. FORMA may earn a
              commission on qualifying purchases made
              through our affiliate links or referral codes.
            </p>

          </div>

        </section>

      </main>

    </div>
  )
}
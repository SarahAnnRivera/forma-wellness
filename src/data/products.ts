
export type Collection = 'MOVE' | 'RESTORE' | 'REFRESH'

export type Product = {
  id: string
  collection: Collection
  category: string
  name: string
  manufacturer: string
  price: string
  description: string
  images: string[]
  specifications: {
    label: string
    value: string
  }[]
  reviews: {
    rating: number | null
    count: number | null
    source: string
  }
  manufacturerUrl: string
}


export const products: Product[] = [
  ...(['MOVE', 'RESTORE', 'REFRESH'] as const).flatMap(
    (collection) =>
      [1, 2, 3].map((number) => ({
        id: `${collection.toLowerCase()}-${number}`,
        collection,
        category:
          collection === 'MOVE'
            ? 'STRENGTH & PILATES'
            : collection === 'RESTORE'
              ? 'SAUNAS'
              : 'COLD IMMERSION',
        name: `Selected Piece ${number}`,
        manufacturer: 'Manufacturer to be announced',
        price: 'Price upon verification',
        description:
          'Product details will be added following manufacturer confirmation.',
        images: [],
        specifications: [
          { label: 'Dimensions', value: 'To be confirmed' },
          { label: 'Materials', value: 'To be confirmed' },
          { label: 'Installation', value: 'To be confirmed' },
          { label: 'Warranty', value: 'To be confirmed' },
        ],
        reviews: {
          rating: null,
          count: null,
          source: '',
        },
        manufacturerUrl: '',
      }))
  ),
]


export function getProductById(id: string) {
  return products.find((product) => product.id === id)
}

export function getProductsByCollection(
  collection: Collection
) {
  return products.filter(
    (product) => product.collection === collection
  )
}

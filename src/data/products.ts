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
  affiliateUrl?: string
  discountCode?: string
  discountLabel?: string
  affiliateProductUrl?: string
  featured?: boolean
}

const SALUS_AFFILIATE_URL =
  'https://www.salussaunas.com/discount/FORMA?utm_source=affiliate&utm_campaign=FORMA'

const SALUS_DISCOUNT_CODE = 'FORMA'

const SALUS_CDN =
  'https://cdn.shopify.com/s/files/1/0720/7695/1854/files/'

function salusImages(files: string[]): string[] {
  return files.map((file) => `${SALUS_CDN}${file}`)
}

export const products: Product[] = [

  // ==========================================
  // RESTORE — SALUS SAUNAS
  // ==========================================

  {
    id: 'salus-element',
    collection: 'RESTORE',
    category: 'INFRARED SAUNAS',
    name: 'Element',
    manufacturer: 'Salus Saunas',
    price: '$3,795',
    description:
      'A compact indoor sauna offering full-spectrum infrared heating. Designed for two people, the Element provides an understated introduction to private residential wellness without requiring a dedicated spa room.',
    images: salusImages([
      'SaunaImages-NEW_2_deebea74-9eb5-41cd-aa89-76c5ae43c4bd.png?v=1775842593',
      'element-full-spectrum-infrared-indoor-sauna-2-person-highlights-v2.png?v=1791471068',
      'SaunaImages-NEW_c47adac1-0e50-4500-9253-4feacce96978.png?v=1775842593',
      'Respite_eff8a748-6a76-4dc0-bf7e-72a341262d2a.png?v=1775842593',
      'Sauna_PNGs_1_61002575-6c99-4e13-a5d2-2dd9a1cbf2b9.png?v=1775842593',
      'Sauna_PNGs_4_864c974e-36e8-495f-9139-717e92e5098a.png?v=1775842593',
      '1_94f0dfac-bc99-44a9-95a0-9a7ff50d6a5d.webp?v=1775842593',
      '4_febfca42-2c03-467f-8835-12dff0de48d1.webp?v=1775842593',
      '8_2182e7b7-f6a2-487d-845f-c9020b652a4e.webp?v=1775842593',
      'Respite_1.png?v=1775842593',
      '5_5804bef6-86b8-435e-bc9d-4d64873d29a2.webp?v=1775842593',
      '7_7ebdafe3-4935-4f89-a5c3-c6000b520202.webp?v=1775842593',
      '6_d79755ea-033e-4e15-81cd-16810c4405f7.webp?v=1775842593',
      '12_4a47628d-d6f5-4628-b8f1-06d8906071cc.webp?v=1775842593',
      '11_34712b5f-3659-4e53-935b-6e4bd4d9c9fa.webp?v=1775842593',
      '10_075039e3-5c95-49bb-a7f3-2ddbd1a3b4d6.webp?v=1775842593',
      '9_e4a62b2a-154b-4f9b-a6b3-561ee5e6ee48.webp?v=1775842593',
      '13_5d08063c-15ad-43c2-a49a-add131f5d3b4.webp?v=1775842593',
    ]),
    specifications: [
      { label: 'Capacity', value: '2 persons' },
      { label: 'Heating Type', value: 'Full-spectrum infrared' },
      { label: 'Placement', value: 'Indoor' },
    ],
    reviews: {
      rating: null,
      count: null,
      source: '',
    },
    manufacturerUrl:
      'https://www.salussaunas.com/products/element-2-person-full-spectrum-infrared-sauna',
    affiliateUrl: SALUS_AFFILIATE_URL,
    discountCode: SALUS_DISCOUNT_CODE,
    discountLabel: 'Save $100 on qualifying purchases',
    featured: false,
  },

  {
    id: 'salus-ally',
    collection: 'RESTORE',
    category: 'TRADITIONAL SAUNAS',
    name: 'Ally',
    manufacturer: 'Salus Saunas',
    price: '$6,395',
    description:
      'A traditional two-person indoor sauna suited to a dedicated home wellness space. The Ally brings the character of a conventional sauna into a compact residential setting.',
    images: salusImages([
      'SaunaImages-NEW_8.png?v=1774469857',
      'ally-traditional-indoor-sauna-2-person-highlights-v2.png?v=1791471579',
      '66_181df4d7-11ae-47ad-9a3a-b16f90cc36a8.png?v=1774469857',
      'SaunaImages-NEW_4_95b53702-f702-4c95-9f0b-6989d1c99616.png?v=1774469857',
      '67.png?v=1774469857',
      'Ally_Exterior_Front_View.png?v=1774469857',
      'Sauna_Transparent_PNGs_2.png?v=1774469857',
      'Sauna_Transparent_PNGs_1.png?v=1774469857',
      'Sauna_Transparent_PNGs_3.png?v=1774469857',
      'Ally_5.webp?v=1774469857',
      'Ally_6.jpg?v=1774469857',
      'Ally_11.webp?v=1774469857',
      'Ally_10.webp?v=1774469857',
      'Ally_7.webp?v=1774469857',
      'Ally_8.webp?v=1774469857',
      'Ally_9.webp?v=1774469857',
    ]),
    specifications: [
      { label: 'Capacity', value: '2 persons' },
      { label: 'Heating Type', value: 'Traditional' },
      { label: 'Placement', value: 'Indoor' },
      { label: 'Heater', value: '6 kW Harvia The Wall' },
      { label: 'Electrical', value: '220/240V hardwired, 30A' },
      { label: 'Exterior Dimensions', value: '60" W × 46" D × 83" H' },
      { label: 'Warranty', value: '7-year limited sauna warranty' },
    ],
    reviews: {
      rating: null,
      count: null,
      source: '',
    },
    manufacturerUrl:
      'https://www.salussaunas.com/products/ally-2-person-traditional-indoor-sauna',
    affiliateUrl: SALUS_AFFILIATE_URL,
    discountCode: SALUS_DISCOUNT_CODE,
    discountLabel: 'Save $100 on qualifying purchases',
    featured: false,
  },

  {
    id: 'salus-governor-king',
    collection: 'RESTORE',
    category: 'OUTDOOR SAUNAS',
    name: 'Governor King',
    manufacturer: 'Salus Saunas',
    price: '$9,345',
    description:
      'An architectural outdoor sauna accommodating four people. Thermally modified pine and alder seating create a refined natural finish, making the Governor King a distinctive addition to a residential garden or private outdoor spa.',
    images: salusImages([
      'SaunaImages-NEW_3_690194fc-a316-4a81-8af9-3869e4e30a18.png?v=1792712613',
      'governor-king-traditional-outdoor-sauna-4-person-highlights-v2.png?v=1791471752',
      '52_44e5a292-6a3c-4852-8630-6e381c166b2d.png?v=1775736081',
      '53.png?v=1792712614',
      '54.png?v=1775736081',
      '55.png?v=1775740481',
      '56.png?v=1792712613',
      'GovernorKingStandard_SAN08M008.png?v=1792090450',
      'SaunaImages-NEW_55fa1aee-2b56-4e44-8532-b7b0a3f9a6eb.png?v=1792708049',
      'SaunaImages-NEW_2_1b089ca6-1078-4b8f-8394-42ae1f621776.png?v=1775739964',
      'Back_View_1_f3218fda-82bd-490b-9fd1-087fd130fb1c.png?v=1775739964',
    ]),
    specifications: [
      { label: 'Capacity', value: '4 persons' },
      { label: 'Heating Type', value: 'Traditional' },
      { label: 'Placement', value: 'Outdoor' },
      { label: 'Exterior Dimensions', value: '81" W × 87" D × 83" H' },
      { label: 'Interior Dimensions', value: '78" W × 78" D × 77" H' },
      { label: 'Exterior Material', value: 'Thermally modified pine' },
      { label: 'Bench Material', value: 'Alder' },
      { label: 'Shipping Weight', value: '1,636 lbs' },
      { label: 'Warranty', value: '5-year limited sauna warranty' },
    ],
    reviews: {
      rating: null,
      count: null,
      source: '',
    },
    manufacturerUrl:
      'https://www.salussaunas.com/products/governor-king',
    affiliateUrl: SALUS_AFFILIATE_URL,
    discountCode: SALUS_DISCOUNT_CODE,
    discountLabel: 'Save $100 on qualifying purchases',
    featured: false,
  },

  {
    id: 'salus-renew-king',
    collection: 'RESTORE',
    category: 'HYBRID SAUNAS',
    name: 'Renew King',
    manufacturer: 'Salus Saunas',
    price: '$14,999',
    description:
      'A sophisticated outdoor hybrid sauna combining traditional electric heating with full-spectrum infrared technology. Designed for three people, the Renew King features a Canadian red cedar interior, integrated lighting and a choice of two separate heating experiences.',
    images: salusImages([
      '95.png?v=1774470474',
      'renew-king-hybrid-outdoor-sauna-3-person-highlights-v2.png?v=1791470836',
      '96.png?v=1774470474',
      'SaunaImages-NEW_9.png?v=1774472140',
      '98.png?v=1774470752',
      '91_43249e12-8288-42ed-ae4d-252d789c1653.png?v=1774472140',
      '92_9a7dbe3b-9977-471a-bfcc-0fdb5ce3b1b8.png?v=1774472140',
      'SaunaImages-NEW_9_f7ad33ce-38bc-4611-b1bf-1b2d5a33057a.png?v=1774472556',
      '90.png?v=1774472530',
      '91.png?v=1774472530',
      '92.png?v=1774472530',
      '546rt_6b44d77e-4259-4a38-bb1e-0b6412687ef0.webp?v=1774472556',
      '56te4dt_8d3388af-bba1-4715-bdc7-c3320843ca05.webp?v=1774472556',
      '4e4rt5_ccb76d67-cbd9-467e-be18-2a8045681be7.webp?v=1774472556',
      '5erdfrt_a8031a12-7dc4-4e15-9775-461b364df332.webp?v=1774472556',
      'ChromoTherapy_3x3_4b160a16-697a-4754-90d6-af96743dc8a5.jpg?v=1774472530',
    ]),
    specifications: [
      { label: 'Capacity', value: '3 persons' },
      { label: 'Heating Type', value: 'Traditional and full-spectrum infrared' },
      { label: 'Placement', value: 'Outdoor' },
      { label: 'Exterior Dimensions', value: '79.2" W × 70.5" D × 87.8" H' },
      { label: 'Interior Dimensions', value: '75" W × 53.4" D × 75" H' },
      { label: 'Assembled Weight', value: '955 lbs' },
      { label: 'Interior Material', value: 'Canadian red cedar' },
      { label: 'Traditional Heater', value: 'Harvia WALL 6 kW' },
      { label: 'Traditional Heater Electrical', value: '240V / 30A' },
      { label: 'Infrared Emitters', value: '9' },
      { label: 'Controls', value: 'Touchscreen' },
      { label: 'Audio', value: 'Integrated Bluetooth and speakers' },
      { label: 'Heating Operation', value: 'Traditional and infrared modes operate separately' },
    ],
    reviews: {
      rating: null,
      count: null,
      source: '',
    },
    manufacturerUrl:
      'https://www.salussaunas.com/products/renew-king',
    affiliateUrl: SALUS_AFFILIATE_URL,
    discountCode: SALUS_DISCOUNT_CODE,
    discountLabel: 'Save $100 on qualifying purchases',
    featured: false,
  },

  // ==========================================
  // REFRESH — SALUS COLD IMMERSION
  // Pending confirmation of affiliate eligibility
  // ==========================================

  {
    id: 'salus-glacier',
    collection: 'REFRESH',
    category: 'COLD IMMERSION',
    name: 'Glacier',
    manufacturer: 'Salus Saunas',
    price: '$7,490',
    description:
      'A compact residential cold immersion system featuring a Thermo-Pine exterior, contoured fiberglass interior and Wi-Fi controlled heating and cooling. Delivered fully assembled with matching wooden steps.',
    images: salusImages([
      '337.png?v=1790860587',
      '338.png?v=1790860587',
      'hf_20261001_180303_6ef34994-a05e-43e1-bad4-cf262c43e257.png?v=1790878367',
      '339.png?v=1790860587',
      '340.png?v=1790860589',
      'SaunaImages-NEW_32.png?v=1790861159',
      'SaunaImages-NEW_31.png?v=1790861202',
    ]),
    specifications: [
      { label: 'Capacity', value: '1 person' },
      { label: 'Water Capacity', value: '124 gallons' },
      { label: 'Exterior Dimensions', value: '40" diameter × 41.3" H' },
      { label: 'Interior Dimensions', value: '34.4" diameter × 36" H' },
      { label: 'Empty Weight', value: '124 lbs' },
      { label: 'Exterior', value: 'Thermo-Pine' },
      { label: 'Interior', value: 'Contoured fiberglass' },
      { label: 'Chiller', value: '1 HP Wi-Fi cold/heat system' },
      { label: 'Electrical', value: '120V / 15A dedicated circuit' },
      { label: 'Minimum Temperature', value: '37°F' },
      { label: 'Filtration', value: '20-micron filtration' },
      { label: 'Sanitation', value: 'Integrated ozone system' },
      { label: 'Installation', value: 'Fully assembled tub' },
      { label: 'Warranty', value: '1-year limited' },
    ],
    reviews: {
      rating: null,
      count: null,
      source: '',
    },
    manufacturerUrl:
      'https://www.salussaunas.com/products/glacier-cold-plunge-tub',
    featured: false,
  },

  {
    id: 'salus-snowpiercer',
    collection: 'REFRESH',
    category: 'COLD IMMERSION',
    name: 'Snowpiercer',
    manufacturer: 'Salus Saunas',
    price: '$6,495',
    description:
      'A barrel-style cold immersion system crafted from Pacific cedar with a stainless steel interior. Integrated seating, wooden entry steps and a Wi-Fi controlled chiller create a practical yet refined addition to a private residential spa.',
    images: salusImages([
      'SaunaPNGs_29.png?v=1736900217',
      'snowpiercer-cold-plunge-tub-pvc-highlights.png?v=1791466177',
      'SaunaPNGs_30.png?v=1736900217',
      'DCT-B-042-PLPC_5.webp?v=1754668281',
      'unnamed-1.jpg?v=1754668281',
      'rn-image_picker_lib_temp_1e2c09f9-27c1-41b1-8ef8-473b5e349e08.jpg?v=1754668281',
      'image-10.png?v=1754668281',
      'DCTCHiller_3.png?v=1754668281',
      'DCTCHiller_2_2.png?v=1754668281',
      'DCTCHiller_1.png?v=1754668281',
      'Chiller_1.webp?v=1754668281',
      'Chiller_4_1.webp?v=1754668281',
      'Chiller_2.webp?v=1754668281',
      'chiller.webp?v=1749747802',
    ]),
    specifications: [
      { label: 'Capacity', value: '1–2 persons' },
      { label: 'Dimensions', value: '42" W × 39.5" H' },
      { label: 'Weight', value: '220 lbs' },
      { label: 'Exterior Material', value: 'Pacific cedar' },
      { label: 'Interior Material', value: 'Stainless steel' },
      { label: 'Chiller', value: '1 HP Wi-Fi cold/heat system' },
      { label: 'Temperature Range', value: '37–85°F' },
      { label: 'Electrical', value: '120V / 15A dedicated circuit' },
      { label: 'Filtration', value: 'Two-stage, 20-micron filtration' },
      { label: 'Sanitation', value: 'Integrated ozone system' },
      { label: 'Accessories', value: 'Entry steps and locking cover' },
      { label: 'Warranty', value: '1-year limited' },
    ],
    reviews: {
      rating: null,
      count: null,
      source: '',
    },
    manufacturerUrl:
      'https://www.salussaunas.com/products/snowpiercer',
    featured: false,
  },

  {
    id: 'salus-vortex',
    collection: 'REFRESH',
    category: 'COLD IMMERSION',
    name: 'Vortex',
    manufacturer: 'Salus Saunas',
    price: '$8,670',
    description:
      'A spacious residential immersion system pairing stainless steel with a Canadian red cedar exterior. The Vortex offers both heated and chilled immersion, with commercial-grade temperature control, integrated lighting and app-based operation.',
    images: salusImages([
      '332.png?v=1790860351',
      '333.png?v=1790860351',
      '334.png?v=1790860351',
      '335.png?v=1790860351',
      '336.png?v=1790860351',
    ]),
    specifications: [
      { label: 'Capacity', value: '1 person' },
      { label: 'Water Capacity', value: '180 gallons' },
      { label: 'Dimensions', value: '79.8" W × 35" D × 30" H' },
      { label: 'Dry Weight', value: '460 lbs' },
      { label: 'Exterior Material', value: 'Canadian red cedar' },
      { label: 'Interior Material', value: '304 stainless steel' },
      { label: 'Temperature Range', value: '34–108°F' },
      { label: 'Cooling Capacity', value: '4.45 kW' },
      { label: 'Heating Capacity', value: '4.36 kW' },
      { label: 'Electrical', value: '110–120V / 60Hz' },
      { label: 'Controls', value: 'Touchscreen and Wi-Fi app' },
      { label: 'Filtration', value: '20-micron filtration' },
      { label: 'Sanitation', value: 'Integrated ozone system' },
      { label: 'Lighting', value: 'Integrated LED lighting' },
      { label: 'Warranty', value: '2-year limited residential warranty' },
    ],
    reviews: {
      rating: null,
      count: null,
      source: '',
    },
    manufacturerUrl:
      'https://www.salussaunas.com/products/vortex-cold-plunge-tub',
    featured: false,
  },

]

// ==========================================
// PRODUCT LOOKUP FUNCTIONS
// ==========================================

export function getProductById(id: string) {
  return products.find((product) => product.id === id)
}

export function getProductsByCollection(collection: Collection) {
  return products.filter(
    (product) => product.collection === collection
  )
}
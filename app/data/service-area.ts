// Counties we serve, from Booneville (Logan County) to Bentonville (Benton
// County), Arkansas. County outlines live in ./service-counties.geo.json
// (US Census boundaries, keyed by `slug`).

export type StripedLot = {
  id: string
  name: string
  city: string
  type: string
  services: string[]
  lat: number
  lng: number
  before: string
  after: string
}

export type ServiceCounty = {
  slug: string
  name: string
  seat: string
  lots: StripedLot[]
}

// TODO: MOCK CONTENT - the lots, names, coordinates and before/after photos
// below are placeholders. Replace them with real completed jobs:
//  - lat/lng: right-click the lot in Google Maps and copy the coordinates
//  - before/after: paths to real photos (put files in /public, e.g.
//    '/lots/bentonville-plaza-before.jpg')
const photo = (label: string, color: string) =>
  `https://placehold.co/640x420/${color}/ffffff?text=${label}`
const before = photo('Before', '6b7280')
const after = photo('After', 'b91c1c')

const lot = (
  id: string,
  name: string,
  city: string,
  type: string,
  services: string[],
  lat: number,
  lng: number,
): StripedLot => ({ id, name, city, type, services, lat, lng, before, after })

export const serviceCounties: ServiceCounty[] = [
  {
    slug: 'logan',
    name: 'Logan County',
    seat: 'Paris',
    lots: [
      lot(
        'logan-1',
        'Sample Main Street Plaza',
        'Booneville',
        'Retail plaza',
        ['Line Striping', 'Sealcoating'],
        35.1387,
        -93.9226,
      ),
      lot(
        'logan-2',
        'Sample Community Bank',
        'Paris',
        'Bank branch',
        ['Line Striping', 'ADA Compliance Marking'],
        35.2918,
        -93.7294,
      ),
    ],
  },
  {
    slug: 'franklin',
    name: 'Franklin County',
    seat: 'Ozark',
    lots: [
      lot(
        'franklin-1',
        'Sample Courthouse Square Parking',
        'Ozark',
        'Municipal lot',
        ['Line Striping', 'Signage Installation'],
        35.487,
        -93.8272,
      ),
      lot(
        'franklin-2',
        'Sample Family Clinic',
        'Charleston',
        'Medical office',
        ['ADA Compliance Marking', 'Pothole Repair'],
        35.2984,
        -94.0388,
      ),
    ],
  },
  {
    slug: 'sebastian',
    name: 'Sebastian County',
    seat: 'Fort Smith',
    lots: [
      lot(
        'sebastian-1',
        'Sample Riverfront Shopping Center',
        'Fort Smith',
        'Shopping center',
        ['Line Striping', 'Sealcoating', 'Parking Lot Cleaning'],
        35.3859,
        -94.3985,
      ),
      lot(
        'sebastian-2',
        'Sample Greenwood Church',
        'Greenwood',
        'Church campus',
        ['Line Striping', 'ADA Compliance Marking'],
        35.2151,
        -94.2527,
      ),
    ],
  },
  {
    slug: 'crawford',
    name: 'Crawford County',
    seat: 'Van Buren',
    lots: [
      lot(
        'crawford-1',
        'Sample Main Street Grocery',
        'Van Buren',
        'Grocery store',
        ['Line Striping', 'Sealcoating'],
        35.4368,
        -94.3483,
      ),
      lot(
        'crawford-2',
        'Sample Alma Distribution Yard',
        'Alma',
        'Warehouse',
        ['Line Striping', 'Signage Installation'],
        35.4776,
        -94.2222,
      ),
    ],
  },
  {
    slug: 'washington',
    name: 'Washington County',
    seat: 'Fayetteville',
    lots: [
      lot(
        'washington-1',
        'Sample Campus Apartments',
        'Fayetteville',
        'Apartment community',
        ['Line Striping', 'Pothole Repair', 'Sealcoating'],
        36.0626,
        -94.1574,
      ),
      lot(
        'washington-2',
        'Sample Springdale Business Park',
        'Springdale',
        'Office park',
        ['Line Striping', 'ADA Compliance Marking'],
        36.1867,
        -94.1288,
      ),
    ],
  },
  {
    slug: 'benton',
    name: 'Benton County',
    seat: 'Bentonville',
    lots: [
      lot(
        'benton-1',
        'Sample Downtown Bentonville Retail',
        'Bentonville',
        'Retail center',
        ['Line Striping', 'Sealcoating', 'Signage Installation'],
        36.3729,
        -94.2088,
      ),
      lot(
        'benton-2',
        'Sample Rogers Medical Plaza',
        'Rogers',
        'Medical office',
        ['ADA Compliance Marking', 'Line Striping'],
        36.332,
        -94.1185,
      ),
    ],
  },
]

export type ServiceTown = {
  slug: string
  name: string
  countySlug: string
  // Short local pitch shown on the town's info card.
  blurb: string
  // Property types we typically work on here.
  focus: string[]
}

// Ordered south-west to north-east, Booneville -> Bentonville.
// TODO: personalize each blurb with real local detail (landmarks, roads,
// common customers). Unique copy per town also helps local search rankings.
export const serviceTowns: ServiceTown[] = [
  {
    slug: 'booneville',
    name: 'Booneville',
    countySlug: 'logan',
    blurb:
      'Our southern-most service town. Fresh striping, sealcoating and ADA markings for Booneville businesses, churches and municipal lots.',
    focus: ['Retail plazas', 'Churches', 'Municipal lots'],
  },
  {
    slug: 'paris',
    name: 'Paris',
    countySlug: 'logan',
    blurb:
      'Logan County seat. We keep bank branches, downtown shops and community lots safe, sharp and code-compliant.',
    focus: ['Banks', 'Downtown shops', 'Community lots'],
  },
  {
    slug: 'charleston',
    name: 'Charleston',
    countySlug: 'franklin',
    blurb:
      'Reliable pavement marking and pothole repair for Charleston clinics, schools and small businesses.',
    focus: ['Medical offices', 'Schools', 'Small businesses'],
  },
  {
    slug: 'ozark',
    name: 'Ozark',
    countySlug: 'franklin',
    blurb:
      'Franklin County seat. Courthouse-square parking, signage and striping done with minimal disruption.',
    focus: ['Municipal lots', 'Signage', 'Downtown parking'],
  },
  {
    slug: 'greenwood',
    name: 'Greenwood',
    countySlug: 'sebastian',
    blurb:
      'Line striping and ADA compliance for Greenwood churches, schools and growing retail corridors.',
    focus: ['Churches', 'Schools', 'Retail corridors'],
  },
  {
    slug: 'fort-smith',
    name: 'Fort Smith',
    countySlug: 'sebastian',
    blurb:
      'Our largest western hub. Striping, sealcoating and lot cleaning for shopping centers, apartments and industrial sites.',
    focus: ['Shopping centers', 'Apartments', 'Industrial sites'],
  },
  {
    slug: 'van-buren',
    name: 'Van Buren',
    countySlug: 'crawford',
    blurb:
      'Fast, professional lot maintenance for Van Buren grocery stores, restaurants and main street businesses.',
    focus: ['Grocery stores', 'Restaurants', 'Main street'],
  },
  {
    slug: 'alma',
    name: 'Alma',
    countySlug: 'crawford',
    blurb:
      'Heavy-duty striping and signage for Alma warehouses, distribution yards and commercial lots.',
    focus: ['Warehouses', 'Distribution yards', 'Signage'],
  },
  {
    slug: 'fayetteville',
    name: 'Fayetteville',
    countySlug: 'washington',
    blurb:
      'Striping, sealcoating and repair for Fayetteville apartment communities, offices and campus-area properties.',
    focus: ['Apartment communities', 'Offices', 'Campus-area lots'],
  },
  {
    slug: 'springdale',
    name: 'Springdale',
    countySlug: 'washington',
    blurb:
      'ADA-compliant marking and full lot maintenance for Springdale business parks and industrial properties.',
    focus: ['Business parks', 'Industrial', 'ADA marking'],
  },
  {
    slug: 'rogers',
    name: 'Rogers',
    countySlug: 'benton',
    blurb:
      'Medical plazas, retail centers and multi-tenant properties in Rogers, striped on your schedule.',
    focus: ['Medical plazas', 'Retail centers', 'Multi-tenant'],
  },
  {
    slug: 'bentonville',
    name: 'Bentonville',
    countySlug: 'benton',
    blurb:
      'Our northern-most service town and Benton County seat. Sharp lines and safe lots for downtown and corporate-area properties.',
    focus: ['Retail centers', 'Corporate campuses', 'Downtown'],
  },
]

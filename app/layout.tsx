import type { Metadata, Viewport } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import './globals.css'
import { withBasePath } from '@/lib/utils'

const _geist = Geist({ subsets: ["latin"] });
const _geistMono = Geist_Mono({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    default: 'Pannonian Logistics | Transport dhe Logjistikë në Kosovë',
    template: '%s | Pannonian Logistics',
  },
  description: 'Pannonian Logistics — zgjidhja juaj e besueshme për transport dhe logjistikë në Kosovë. Shërbime transporti të shpejta, të sigurta dhe profesionale.',
  generator: 'Next.js',
  applicationName: 'Pannonian Logistics',
  referrer: 'strict-origin-when-cross-origin',
  keywords: ['transport', 'logjistikë', 'logistics', 'Kosovo', 'Kosovë', 'freight', 'transport mallrash', 'Pannonian', 'ruajtje mallrash', 'warehousing', 'Albania', 'North Macedonia', 'Artanë'],
  authors: [{ name: 'Pannonian Logistics' }],
  creator: 'Pannonian Logistics',
  publisher: 'Pannonian Logistics',
  metadataBase: new URL('https://pannonianlogistics.com'),
  alternates: {
    canonical: '/',
    languages: {
      'sq': '/',
      'en': '/',
    },
  },
  openGraph: {
    title: 'Pannonian Logistics | Transport dhe Logjistikë në Kosovë',
    description: 'Zgjidhja juaj e besueshme për transport dhe logjistikë në Kosovë. Shërbime të shpejta, të sigurta dhe profesionale.',
    url: 'https://pannonianlogistics.com',
    siteName: 'Pannonian Logistics',
    locale: 'sq_AL',
    type: 'website',
    images: [
      {
        url: withBasePath('/og-image.jpg'),
        width: 1200,
        height: 630,
        alt: 'Pannonian Logistics — Transport dhe Logjistikë',
      },
    ],
    streetAddress: 'Nato 99, p.n.',
    locality: 'Artanë',
    region: 'XK',
    postalCode: '16000',
    countryName: 'Kosovo',
    email: 'info@pannonianlogistics.com',
    phoneNumber: '+38344123389',
    latitude: 42.4525,
    longitude: 21.4161,
  } as any,
  twitter: {
    card: 'summary_large_image',
    title: 'Pannonian Logistics | Transport dhe Logjistikë në Kosovë',
    description: 'Zgjidhja juaj e besueshme për transport dhe logjistikë në Kosovë.',
    images: [withBasePath('/og-image.jpg')],
  },
  icons: {
    icon: [
      { url: withBasePath('/icon-light-32x32.png'), media: '(prefers-color-scheme: light)' },
      { url: withBasePath('/icon-dark-32x32.png'), media: '(prefers-color-scheme: dark)' },
      { url: withBasePath('/icon.svg'), type: 'image/svg+xml' },
    ],
    apple: withBasePath('/apple-icon.png'),
  },
  manifest: withBasePath('/manifest.json'),
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  other: {
    // Geographic metadata
    'geo.region': 'XK',
    'geo.placename': 'Artanë, Kosovo',
    'geo.position': '42.4525;21.4161',
    'ICBM': '42.4525, 21.4161',

    // Mobile meta tags
    'apple-mobile-web-app-capable': 'yes',
    'apple-mobile-web-app-status-bar-style': 'black-translucent',
    'format-detection': 'telephone=yes',
    'MobileOptimized': '320',
    'HandheldFriendly': 'true',

    // SEO enhancement
    'coverage': 'Worldwide',
    'distribution': 'Global',
    'rating': 'General',
    'revisit-after': '7 days',
    'language': 'sq, en',

    // Dublin Core metadata
    'DC.title': 'Pannonian Logistics - Transport and Logistics Kosovo',
    'DC.creator': 'Pannonian Logistics',
    'DC.subject': 'Freight Transport, Logistics, Warehousing',
    'DC.description': 'Professional logistics services in Kosovo',
    'DC.publisher': 'Pannonian Logistics',
    'DC.contributor': 'Pannonian Logistics Team',
    'DC.type': 'Service',
    'DC.format': 'text/html',
    'DC.language': 'sq',
    'DC.coverage': 'Kosovo, Albania, North Macedonia',

    // Microsoft tags
    'msapplication-TileColor': '#110375',
    'msapplication-config': withBasePath('/browserconfig.xml'),
  },
}

export const viewport: Viewport = {
  themeColor: '#ffffff',
  width: 'device-width',
  initialScale: 1,
}

// Enhanced LocalBusiness Schema
const localBusinessSchema = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  '@id': 'https://pannonianlogistics.com/#business',
  name: 'Pannonian Logistics',
  description: 'Professional freight transport and logistics services across Kosovo, Albania, and North Macedonia',
  url: 'https://pannonianlogistics.com',
  telephone: '+38344123389',
  email: 'info@pannonianlogistics.com',
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'Nato 99, p.n.',
    addressLocality: 'Artanë',
    postalCode: '16000',
    addressRegion: 'Gjilan',
    addressCountry: 'XK'
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: '42.4525',
    longitude: '21.4161'
  },
  areaServed: [
    { '@type': 'Country', name: 'Kosovo', identifier: 'XK' },
    { '@type': 'Country', name: 'Albania', identifier: 'AL' },
    { '@type': 'Country', name: 'North Macedonia', identifier: 'MK' }
  ],
  openingHoursSpecification: [
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
      opens: '08:00',
      closes: '18:00'
    },
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: 'Saturday',
      opens: '08:00',
      closes: '14:00'
    }
  ],
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: 'Logistics Services',
    itemListElement: [
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Freight Transport',
          description: 'Fast and secure freight transport services'
        }
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Logistics Management',
          description: 'Professional logistics and inventory management'
        }
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Warehousing',
          description: 'Secure storage and warehouse management'
        }
      }
    ]
  },
  logo: `https://pannonianlogistics.com${withBasePath('/logos/footer-logo.png')}`,
  image: `https://pannonianlogistics.com${withBasePath('/og-image.jpg')}`,
  knowsLanguage: ['sq', 'en'],
  paymentAccepted: 'Cash, Bank Transfer',
  currenciesAccepted: 'EUR'
}

// Organization Schema
const organizationSchema = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  '@id': 'https://pannonianlogistics.com/#organization',
  name: 'Pannonian Logistics',
  url: 'https://pannonianlogistics.com',
  logo: `https://pannonianlogistics.com${withBasePath('/logos/footer-logo.png')}`,
  description: 'Professional logistics and freight transport company',
  contactPoint: [
    {
      '@type': 'ContactPoint',
      telephone: '+38344123389',
      contactType: 'customer service',
      email: 'info@pannonianlogistics.com',
      availableLanguage: ['Albanian', 'English'],
      hoursAvailable: {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
        opens: '08:00',
        closes: '18:00'
      }
    },
    {
      '@type': 'ContactPoint',
      telephone: '+38344123389',
      contactType: 'sales',
      email: 'info@pannonianlogistics.com',
      availableLanguage: ['Albanian', 'English']
    }
  ],
  sameAs: []
}

// BreadcrumbList Schema
const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    {
      '@type': 'ListItem',
      position: 1,
      name: 'Home',
      item: 'https://pannonianlogistics.com/'
    }
  ]
}

// FAQPage Schema
const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'What areas do you serve?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'We provide logistics and transport services across Kosovo, Albania, and North Macedonia.'
      }
    },
    {
      '@type': 'Question',
      name: 'What types of cargo do you transport?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'We transport general freight, palletized goods, and specialized cargo with our modern fleet of vehicles.'
      }
    },
    {
      '@type': 'Question',
      name: 'Do you offer warehousing services?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes, we provide secure storage and warehouse management solutions in controlled environments.'
      }
    },
    {
      '@type': 'Question',
      name: 'How can I request a quote?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'You can request a quote by contacting us via phone at +38344123389 or email at info@pannonianlogistics.com, or through our contact form.'
      }
    },
    {
      '@type': 'Question',
      name: 'What are your operating hours?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'We are open Monday to Friday from 8:00 AM to 6:00 PM, and Saturday from 8:00 AM to 2:00 PM.'
      }
    }
  ]
}

// WebSite Schema
const websiteSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  '@id': 'https://pannonianlogistics.com/#website',
  url: 'https://pannonianlogistics.com',
  name: 'Pannonian Logistics',
  description: 'Professional freight transport and logistics services',
  publisher: {
    '@id': 'https://pannonianlogistics.com/#organization'
  },
  inLanguage: ['sq', 'en']
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="sq">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
        />
      </head>
      <body className="font-sans antialiased">
        {children}
      </body>
    </html>
  )
}

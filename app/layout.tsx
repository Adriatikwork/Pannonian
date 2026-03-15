import type { Metadata, Viewport } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

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
  keywords: ['transport', 'logjistikë', 'logistics', 'Kosovo', 'Kosovë', 'freight', 'transport mallrash', 'Pannonian', 'ruajtje mallrash'],
  authors: [{ name: 'Pannonian Logistics' }],
  creator: 'Pannonian Logistics',
  publisher: 'Pannonian Logistics',
  metadataBase: new URL('https://pannonianlogistics.com'),
  alternates: {
    canonical: '/',
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
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Pannonian Logistics — Transport dhe Logjistikë',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Pannonian Logistics | Transport dhe Logjistikë në Kosovë',
    description: 'Zgjidhja juaj e besueshme për transport dhe logjistikë në Kosovë.',
    images: ['/og-image.jpg'],
  },
  icons: {
    icon: [
      { url: '/icon-light-32x32.png', media: '(prefers-color-scheme: light)' },
      { url: '/icon-dark-32x32.png', media: '(prefers-color-scheme: dark)' },
      { url: '/icon.svg', type: 'image/svg+xml' },
    ],
    apple: '/apple-icon.png',
  },
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
}

export const viewport: Viewport = {
  themeColor: '#ffffff',
  width: 'device-width',
  initialScale: 1,
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  name: 'Pannonian Logistics',
  description: 'Shërbime transporti dhe logjistike të besueshme në Kosovë dhe rajon.',
  url: 'https://pannonianlogistics.com',
  telephone: '+38344123389',
  email: 'info@pannonianlogistics.com',
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'Rreto 06, p.n.',
    addressLocality: 'Arbëri',
    postalCode: '10000',
    addressCountry: 'XK',
  },
  areaServed: ['XK', 'AL', 'MK'],
  serviceType: ['Freight Transport', 'Logistics', 'Warehousing'],
  logo: 'https://pannonianlogistics.com/logos/footer-logo.png',
  image: 'https://pannonianlogistics.com/og-image.jpg',
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
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="font-sans antialiased">
        {children}
        <Analytics />
      </body>
    </html>
  )
}

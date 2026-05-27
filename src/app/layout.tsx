import type { Metadata, Viewport } from 'next';
import { Cormorant_Garamond, Inter } from 'next/font/google';
import Script from 'next/script';
import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import { StickyCTA } from '@/components/sticky-cta';
import { site } from '@/lib/site';
import './globals.css';

const display = Cormorant_Garamond({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-display',
  display: 'swap',
});

const sans = Inter({
  subsets: ['latin'],
  variable: '--font-sans',
  display: 'swap',
});

export const viewport: Viewport = {
  themeColor: '#0c0b09',
  width: 'device-width',
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: `${site.name} — ${site.tagline}`,
    template: `%s | ${site.name}`,
  },
  description: site.description,
  alternates: { canonical: '/' },
  openGraph: {
    type: 'website',
    locale: 'fr_FR',
    siteName: site.name,
    title: `${site.name} — ${site.tagline}`,
    description: site.description,
    url: site.url,
  },
  twitter: {
    card: 'summary_large_image',
    title: `${site.name} — ${site.tagline}`,
    description: site.description,
  },
  manifest: '/manifest.webmanifest',
  formatDetection: { telephone: true, email: true, address: false },
  applicationName: site.name,
  appleWebApp: { capable: true, statusBarStyle: 'black-translucent', title: site.name },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, 'max-image-preview': 'large', 'max-snippet': -1 },
  },
  authors: [{ name: site.legalName, url: site.url }],
  category: 'Bijouterie / Diamantaire',
  keywords: [
    `diamantaire ${site.address.city}`,
    `rachat diamant ${site.address.city}`,
    `rachat bijoux ${site.address.city}`,
    `rachat bijoux signés ${site.address.city}`,
    `rachat or ${site.address.city}`,
    `expert diamants ${site.address.city}`,
    `estimation diamant ${site.address.city}`,
    `vendre diamant ${site.address.city}`,
    `vendre bijou ${site.address.city}`,
    `vendre bijoux ${site.address.city}`,
    `Cartier Van Cleef Bulgari ${site.address.city}`,
    `rachat Rolex ${site.address.city}`,
    `rachat Patek Philippe ${site.address.city}`,
    `bijouterie ${site.address.city}`,
    `or 18 carats ${site.address.city}`,
    `cours du diamant ${site.address.city}`,
    `comptoir d’or ${site.address.city}`,
    `racheter bague diamant ${site.address.city}`,
    `vendre alliance or ${site.address.city}`,
    `expert gemmologue ${site.address.city}`,
    `négociant diamants Auvergne-Rhône-Alpes`,
    `rachat bijoux Loire`,
    `bureau d’échange bijoux ${site.address.city}`,
  ],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const localBusinessJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'JewelryStore',
    '@id': `${site.url}/#business`,
    name: site.legalName,
    description: site.description,
    url: site.url,
    telephone: site.phone,
    email: site.email,
    image: `${site.url}/opengraph-image.jpg`,
    priceRange: '€€€€',
    address: {
      '@type': 'PostalAddress',
      streetAddress: site.address.street,
      postalCode: site.address.postalCode,
      addressLocality: site.address.city,
      addressRegion: site.address.region,
      addressCountry: site.address.country,
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: site.address.geo.lat,
      longitude: site.address.geo.lng,
    },
    areaServed: [
      { '@type': 'City', name: 'Saint-Étienne' },
      { '@type': 'City', name: 'Saint-Chamond' },
      { '@type': 'City', name: 'Firminy' },
      { '@type': 'City', name: 'Le Chambon-Feugerolles' },
      { '@type': 'City', name: 'Saint-Priest-en-Jarez' },
      { '@type': 'City', name: 'Saint-Genest-Lerpt' },
      { '@type': 'City', name: 'Roche-la-Molière' },
      { '@type': 'AdministrativeArea', name: 'Loire' },
      { '@type': 'AdministrativeArea', name: 'Auvergne-Rhône-Alpes' },
    ],
    openingHoursSpecification: site.hours
      .filter((h) => h.open !== 'Fermé')
      .map((h) => ({
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: h.day,
        opens: h.open,
        closes: h.close,
      })),
    sameAs: [site.social.instagram, site.social.facebook],
  };

  return (
    <html lang="fr" className={`${display.variable} ${sans.variable}`}>
      <body className="font-sans antialiased grain">
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-50 focus:rounded focus:bg-ink-900 focus:px-3 focus:py-2 focus:text-gold-100"
        >
          Aller au contenu
        </a>
        <Header />
        <main id="main">{children}</main>
        <Footer />
        <StickyCTA />
        <Script
          id="ld-business"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessJsonLd) }}
        />
      </body>
    </html>
  );
}

import type { Metadata } from 'next';
import { Plus_Jakarta_Sans, Inter, DM_Serif_Display } from 'next/font/google';
import { ThemeProvider } from '@/context/ThemeContext';
import './globals.css';

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ['latin'],
  variable: '--font-heading',
  display: 'swap',
});

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-sans',
  display: 'swap',
});

const dmSerifDisplay = DM_Serif_Display({
  weight: '400',
  subsets: ['latin'],
  variable: '--font-serif',
  display: 'swap',
});

export const metadata: Metadata = {
  metadataBase: new URL('https://www.anvitechindia.com'),
  title: {
    default: 'ANVITECH INDIA | Best Software Development Company Near Me',
    template: '%s | ANVITECH INDIA PRIVATE LIMITED',
  },
  description:
    'ANVITECH INDIA PRIVATE LIMITED is the premier custom software development, AI solutions, ERP/CRM, and cloud engineering technology partner for enterprises and fast-growing businesses.',
  keywords: [
    'best software development near me',
    'software development company near me',
    'best software company near me',
    'custom software development company Bengaluru',
    'AI solutions company near me',
    'AI agents development company',
    'top enterprise software developers India',
    'ERP and CRM software development near me',
    'cloud DevOps cybersecurity company',
    'ANVITECH',
    'ANVITECH INDIA',
    'ANVITECH INDIA PRIVATE LIMITED',
  ],
  authors: [{ name: 'ANVITECH INDIA PRIVATE LIMITED' }],
  creator: 'ANVITECH INDIA PRIVATE LIMITED',
  publisher: 'ANVITECH INDIA PRIVATE LIMITED',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  alternates: {
    canonical: 'https://www.anvitechindia.com',
  },
  openGraph: {
    title: 'ANVITECH INDIA | Best Software Development Company Near Me',
    description:
      'Premier custom software development, AI solutions, ERP/CRM systems, cloud DevOps, and cybersecurity technology partner.',
    url: 'https://www.anvitechindia.com',
    siteName: 'ANVITECH INDIA PRIVATE LIMITED',
    locale: 'en_IN',
    type: 'website',
    images: [
      {
        url: 'https://www.anvitechindia.com/nl.webp',
        width: 1200,
        height: 630,
        alt: 'ANVITECH INDIA PRIVATE LIMITED Logo',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'ANVITECH INDIA | Best Software Development Company Near Me',
    description: 'Premier Custom Software Development, AI Solutions & Enterprise Technology Partner.',
    images: ['https://www.anvitechindia.com/nl.webp'],
  },
  icons: {
    icon: '/nl.webp',
    shortcut: '/nl.webp',
    apple: '/nl.webp',
  },
  verification: {
    google: '9A-Qhj3vyoNEImMogsdWQtMU9GOKTvHGNnblN3M4H6E',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${plusJakartaSans.variable} ${inter.variable} ${dmSerifDisplay.variable} scroll-smooth`}
    >
      <head>
        <meta name="google-site-verification" content="9A-Qhj3vyoNEImMogsdWQtMU9GOKTvHGNnblN3M4H6E" />
        <link rel="icon" href="/nl.webp" type="image/webp" />
        <link rel="shortcut icon" href="/nl.webp" type="image/webp" />
        <link rel="apple-touch-icon" href="/nl.webp" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Outfit:wght@500;600;700&family=Inter:wght@400;500;600;700&display=swap" rel="stylesheet" />
        {/* Senior Level JSON-LD Schema: LocalBusiness + Organization + SoftwareService */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@graph': [
                {
                  '@type': ['Organization', 'LocalBusiness', 'ProfessionalService'],
                  '@id': 'https://www.anvitechindia.com/#organization',
                  name: 'ANVITECH INDIA PRIVATE LIMITED',
                  alternateName: 'ANVITECH INDIA',
                  url: 'https://www.anvitechindia.com',
                  logo: 'https://www.anvitechindia.com/nl.webp',
                  image: 'https://www.anvitechindia.com/nl.webp',
                  description:
                    'Best software development company near me providing custom software engineering, AI agents, ERP/CRM platforms, cloud DevOps, and cybersecurity solutions.',
                  address: {
                    '@type': 'PostalAddress',
                    streetAddress: 'Bengaluru IT Hub',
                    addressLocality: 'Bengaluru',
                    addressRegion: 'Karnataka',
                    postalCode: '560001',
                    addressCountry: 'IN',
                  },
                  geo: {
                    '@type': 'GeoCoordinates',
                    latitude: 12.9716,
                    longitude: 77.5946,
                  },
                  areaServed: ['India', 'Global', 'Bengaluru', 'United States', 'Europe'],
                  contactPoint: {
                    '@type': 'ContactPoint',
                    telephone: '+91-80-4567-8900',
                    contactType: 'customer support',
                    email: 'contact@anvitech.in',
                    availableLanguage: ['English', 'Hindi'],
                  },
                  hasOfferCatalog: {
                    '@type': 'OfferCatalog',
                    name: 'Software & Technology Services',
                    itemListElement: [
                      {
                        '@type': 'Offer',
                        itemOffered: {
                          '@type': 'Service',
                          name: 'Custom Software & ERP Development',
                          description: 'Tailored enterprise ERP, CRM, and custom business management software.',
                        },
                      },
                      {
                        '@type': 'Offer',
                        itemOffered: {
                          '@type': 'Service',
                          name: 'AI Solutions & Autonomous Agents',
                          description: 'Practical AI chatbots, voice assistants, and RPA workflow automation.',
                        },
                      },
                      {
                        '@type': 'Offer',
                        itemOffered: {
                          '@type': 'Service',
                          name: 'Cloud Infrastructure & DevOps',
                          description: 'AWS, Azure, GCP cloud migration, CI/CD automation, and Kubernetes.',
                        },
                      },
                      {
                        '@type': 'Offer',
                        itemOffered: {
                          '@type': 'Service',
                          name: 'Cybersecurity & Managed Maintenance (AMC)',
                          description: 'Security auditing, penetration testing, and 24/7 software AMC support.',
                        },
                      },
                    ],
                  },
                },
              ],
            }),
          }}
        />
      </head>
      <body className="bg-brand-bg text-navy-DEFAULT antialiased selection:bg-gold-DEFAULT selection:text-navy-DEFAULT">
        <ThemeProvider>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}

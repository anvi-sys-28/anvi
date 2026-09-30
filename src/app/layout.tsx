import type { Metadata } from 'next';
import { Plus_Jakarta_Sans, Inter, DM_Serif_Display } from 'next/font/google';
import './globals.css';
import { ThemeProvider } from '@/context/ThemeContext';

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
        url: 'https://www.anvitechindia.com/llll.webp',
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
    images: ['https://www.anvitechindia.com/llll.webp'],
  },
  icons: {
    icon: [
      { url: '/favicon.ico', sizes: 'any' },
      { url: '/llll.webp', type: 'image/webp' },
      { url: '/icon.png', type: 'image/png' },
    ],
    shortcut: ['/favicon.ico', '/llll.webp'],
    apple: [{ url: '/apple-touch-icon.png' }, { url: '/llll.webp' }],
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
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" href="/llll.webp" type="image/webp" />
        <link rel="icon" href="/icon.png" type="image/png" />
        <link rel="shortcut icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="apple-touch-icon" href="/llll.webp" />
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
                  logo: 'https://www.anvitechindia.com/llll.webp',
                  image: 'https://www.anvitechindia.com/llll.webp',
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
                    contactType: 'customer support',
                    email: 'support@anvitechindia.com',
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
                          name: 'Custom Software & Enterprise ERP Development',
                          url: 'https://www.anvitechindia.com/services/custom-software-enterprise-erp-development',
                          description: 'Tailored enterprise ERP, CRM, and custom business management software.',
                        },
                      },
                      {
                        '@type': 'Offer',
                        itemOffered: {
                          '@type': 'Service',
                          name: 'Web & Mobile Application Engineering',
                          url: 'https://www.anvitechindia.com/services/web-mobile-application-engineering',
                          description: 'Native iOS, Android, and web application engineering.',
                        },
                      },
                      {
                        '@type': 'Offer',
                        itemOffered: {
                          '@type': 'Service',
                          name: 'AI Solutions & Autonomous Agents',
                          url: 'https://www.anvitechindia.com/services/ai-solutions-chatbots-intelligent-automation',
                          description: 'Practical AI chatbots, voice assistants, and RPA workflow automation.',
                        },
                      },
                      {
                        '@type': 'Offer',
                        itemOffered: {
                          '@type': 'Service',
                          name: 'Cloud Infrastructure & DevOps',
                          url: 'https://www.anvitechindia.com/services/cloud-infrastructure-migration-devops',
                          description: 'AWS, Azure, GCP cloud migration, CI/CD automation, and Kubernetes.',
                        },
                      },
                      {
                        '@type': 'Offer',
                        itemOffered: {
                          '@type': 'Service',
                          name: 'Cybersecurity, Threat Monitoring & SOC',
                          url: 'https://www.anvitechindia.com/services/cybersecurity-threat-monitoring-soc',
                          description: 'Vulnerability audits, penetration testing, and zero trust security.',
                        },
                      },
                      {
                        '@type': 'Offer',
                        itemOffered: {
                          '@type': 'Service',
                          name: 'Software Support & AMC Managed Maintenance',
                          url: 'https://www.anvitechindia.com/services/software-support-amc-managed-maintenance',
                          description: 'Annual Maintenance Contracts (AMC) and 24/7 technical support.',
                        },
                      },
                    ],
                  },
                },
                {
                  '@type': 'WebSite',
                  '@id': 'https://www.anvitechindia.com/#website',
                  url: 'https://www.anvitechindia.com',
                  name: 'ANVITECH INDIA PRIVATE LIMITED',
                  description:
                    'Best software development company near me providing custom software engineering, AI agents, ERP/CRM platforms, cloud DevOps, and cybersecurity solutions.',
                  publisher: {
                    '@id': 'https://www.anvitechindia.com/#organization',
                  },
                },
                {
                  '@type': 'ItemList',
                  '@id': 'https://www.anvitechindia.com/#sitelinks',
                  name: 'ANVITECH Core Software Services & Sitelinks',
                  itemListElement: [
                    {
                      '@type': 'SiteNavigationElement',
                      position: 1,
                      name: 'Custom Software & Enterprise ERP Development',
                      description: 'Tailored enterprise platforms, ERP, CRM, HRMS, and custom business workflows.',
                      url: 'https://www.anvitechindia.com/services/custom-software-enterprise-erp-development',
                    },
                    {
                      '@type': 'SiteNavigationElement',
                      position: 2,
                      name: 'Web & Mobile Application Engineering',
                      description: 'Native and cross-platform applications for iOS, Android, and Web.',
                      url: 'https://www.anvitechindia.com/services/web-mobile-application-engineering',
                    },
                    {
                      '@type': 'SiteNavigationElement',
                      position: 3,
                      name: 'AI Solutions, Chatbots & Intelligent Automation',
                      description: 'Intelligent AI agents, RPA, voice assistants, and predictive analytics.',
                      url: 'https://www.anvitechindia.com/services/ai-solutions-chatbots-intelligent-automation',
                    },
                    {
                      '@type': 'SiteNavigationElement',
                      position: 4,
                      name: 'Cloud Infrastructure, Migration & DevOps',
                      description: 'AWS, Azure, GCP cloud migration, CI/CD pipelines, and Kubernetes.',
                      url: 'https://www.anvitechindia.com/services/cloud-infrastructure-migration-devops',
                    },
                    {
                      '@type': 'SiteNavigationElement',
                      position: 5,
                      name: 'Cybersecurity, Threat Monitoring & SOC',
                      description: 'Advanced threat monitoring, vulnerability scanning, and compliance.',
                      url: 'https://www.anvitechindia.com/services/cybersecurity-threat-monitoring-soc',
                    },
                    {
                      '@type': 'SiteNavigationElement',
                      position: 6,
                      name: 'Software Support, AMC & Managed Maintenance',
                      description: 'Annual Maintenance Contracts (AMC), 24/7 technical support.',
                      url: 'https://www.anvitechindia.com/services/software-support-amc-managed-maintenance',
                    },
                    {
                      '@type': 'SiteNavigationElement',
                      position: 7,
                      name: 'Contact Enterprise Technology Advisors',
                      description: 'Direct contact details for ANVITECH INDIA technology advisors in Bengaluru.',
                      url: 'https://www.anvitechindia.com/#contact',
                    },
                  ],
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

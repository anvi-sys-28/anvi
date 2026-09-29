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
  title: 'ANVITECH INDIA PRIVATE LIMITED | Technology & Digital Solutions',
  description:
    'ANVITECH INDIA PRIVATE LIMITED delivers modern technology, software, AI, cloud, cybersecurity and digital transformation solutions for businesses.',
  keywords: [
    'ANVITECH',
    'ANVITECH INDIA PRIVATE LIMITED',
    'Enterprise Software India',
    'AI Solutions',
    'Cloud DevOps Consulting',
    'Cybersecurity',
    'Digital Transformation',
  ],
  authors: [{ name: 'ANVITECH INDIA PRIVATE LIMITED' }],
  openGraph: {
    title: 'ANVITECH INDIA PRIVATE LIMITED | Enterprise Technology & Digital Solutions',
    description:
      'Engineered for precision, scalability, trust, and continuous innovation. Custom software, AI, cloud, and digital transformation.',
    url: 'https://anvitech.in',
    siteName: 'ANVITECH INDIA PRIVATE LIMITED',
    locale: 'en_IN',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'ANVITECH INDIA PRIVATE LIMITED',
    description: 'Technology That Moves Businesses Forward.',
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
        {/* Structured JSON-LD Schema for Enterprise Organization */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'Organization',
              name: 'ANVITECH INDIA PRIVATE LIMITED',
              url: 'https://anvitech.in',
              logo: 'https://anvitech.in/logo.svg',
              description:
                'ANVITECH INDIA PRIVATE LIMITED delivers modern technology, software, AI, cloud, cybersecurity and digital transformation solutions.',
              address: {
                '@type': 'PostalAddress',
                addressLocality: 'Bengaluru',
                addressRegion: 'Karnataka',
                postalCode: '560001',
                addressCountry: 'IN',
              },
              contactPoint: {
                '@type': 'ContactPoint',
                telephone: '+91-80-4567-8900',
                contactType: 'customer support',
                email: 'contact@anvitech.in',
              },
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

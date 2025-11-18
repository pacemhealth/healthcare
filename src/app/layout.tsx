import type { Metadata } from 'next';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import { StructuredData } from '../components/StructuredData';
import { siteConfig } from '../lib/seo-config';
import '../styles/globals.css';

export const metadata: Metadata = {
  metadataBase: new URL('https://www.pacemhealth.com'),
  title: {
    default: siteConfig.title,
    template: '%s | Pacem Health'
  },
  description: siteConfig.description,
  keywords: siteConfig.keywords.join(', '),
  authors: [{ name: 'Pacem Health Inc.' }],
  creator: 'Pacem Health Inc.',
  publisher: 'Pacem Health Inc.',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: siteConfig.url,
    title: siteConfig.title,
    description: siteConfig.description,
    siteName: siteConfig.name,
    images: [
      {
        url: siteConfig.ogImage,
        width: 1200,
        height: 630,
        alt: 'Pacem Health - Global Health Innovation for Africa',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: siteConfig.title,
    description: siteConfig.description,
    images: [siteConfig.ogImage],
    creator: '@pacemhealth',
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
  verification: {
    google: 'google-site-verification-code-here', // Add actual code when available
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        {/* Organization Structured Data */}
        <StructuredData data={siteConfig.organization} />
      </head>
      <body>
        <div className="min-h-screen flex flex-col bg-background">
          <Navigation />
          <main className="flex-1">
            {children}
          </main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
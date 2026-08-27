import './global.css';
import type { Metadata } from 'next';
import { GeistSans } from 'geist/font/sans';
import { GeistMono } from 'geist/font/mono';
import { Navbar } from './components/nav';
import { Analytics } from '@vercel/analytics/react';
import { SpeedInsights } from '@vercel/speed-insights/next';
import Footer from './components/footer';
import { baseUrl } from './sitemap';

const description =
  'Ayaan Rahman is a Solution Engineer at Appian working across Linux, AWS, Kubernetes, and CI/CD — keeping production systems reliable and automating the work around them.';

export const metadata: Metadata = {
  metadataBase: new URL(baseUrl),
  title: {
    default: 'Ayaan Rahman — Solution Engineer',
    template: '%s | Ayaan Rahman',
  },
  description,
  keywords: [
    'Ayaan Rahman',
    'Solution Engineer',
    'Software Engineer',
    'Appian',
    'Kubernetes',
    'AWS',
    'Site Reliability',
  ],
  authors: [{ name: 'Ayaan Rahman', url: baseUrl }],
  openGraph: {
    title: 'Ayaan Rahman — Solution Engineer',
    description,
    url: baseUrl,
    siteName: 'Ayaan Rahman',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Ayaan Rahman — Solution Engineer',
    description,
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

const cx = (...classes: (string | false | undefined)[]) =>
  classes.filter(Boolean).join(' ');

/**
 * Applies the saved theme before first paint so a dark-mode visitor never sees
 * a flash of the light palette. Falls back to the OS preference on first visit.
 */
const themeScript = `
(function() {
  try {
    var stored = localStorage.getItem('theme');
    var dark = stored
      ? stored === 'dark'
      : window.matchMedia('(prefers-color-scheme: dark)').matches;
    if (dark) document.documentElement.classList.add('dark');
  } catch (e) {}
})();
`;

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={cx(GeistSans.variable, GeistMono.variable)}
    >
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
      </head>
      <body className="antialiased">
        <Navbar />
        <main className="mx-auto flex min-h-screen w-full max-w-3xl flex-col px-5 pt-10 sm:px-8">
          <div className="flex-auto">{children}</div>
          <Footer />
        </main>
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}

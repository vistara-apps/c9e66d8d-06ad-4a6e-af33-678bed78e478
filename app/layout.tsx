import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { Providers } from './providers';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'PUMP Staking Hub',
  description: 'Boost your PUMP tokens with smart staking and secure fund management.',
  openGraph: {
    title: 'PUMP Staking Hub',
    description: 'Boost your PUMP tokens with smart staking and secure fund management.',
    images: ['/og-image.png'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'PUMP Staking Hub',
    description: 'Boost your PUMP tokens with smart staking and secure fund management.',
    images: ['/og-image.png'],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark">
      <body className={inter.className}>
        <Providers>
          {children}
        </Providers>
      </body>
    </html>
  );
}

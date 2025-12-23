import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-sans', // This maps directly to what Tailwind expects if configured or what we used in globals
  display: 'swap',
});

export const metadata: Metadata = {
  title: {
    template: '%s | AlgoLift India',
    default: 'AlgoLift India | Transforming Businesses with AI & Software',
  },
  description: 'AlgoLift India - A leading global IT services firm providing AI Strategy, Custom Software Development, and Staff Augmentation.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.variable} antialiased min-h-screen flex flex-col`}>
        <Navbar />
        <main className="flex-grow pt-20">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}

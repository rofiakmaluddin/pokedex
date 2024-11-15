import type { Metadata } from 'next';
import localFont from 'next/font/local';
import './globals.css';
import QueryProvider from '@/providers/react-query';

const geistSans = localFont({
  src: './fonts/GeistVF.woff',
  variable: '--font-geist-sans',
  weight: '100 900',
});
const geistMono = localFont({
  src: './fonts/GeistMonoVF.woff',
  variable: '--font-geist-mono',
  weight: '100 900',
});

export const metadata: Metadata = {
  title: 'Pokedex',
  description: 'Find your favourite Pokemon',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <QueryProvider>
          <main className="container mx-auto bg-neutral-100 text-black min-h-screen p-10">
            {children}
          </main>
        </QueryProvider>
      </body>
    </html>
  );
}

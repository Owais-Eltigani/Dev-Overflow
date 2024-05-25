import type { Metadata } from 'next';
// eslint-disable-next-line camelcase
import { Inter, Space_Grotesk } from 'next/font/google';
import React from 'react';
import { ClerkProvider } from '@clerk/nextjs';
// import { auth, currentUser } from '@clerk/nextjs/server';
import { ThemeProvider } from '@/context/themeProvider';
import './globals.css';
import './prism.css';

const inter = Inter({
  subsets: ['latin'],
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
  variable: '--font-inter',
});

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-space-grotesk',
});

export const metadata: Metadata = {
  title: 'Dev Overflow',
  description:
    'A community-driven platform for asking and answering programming questions. Get help, share knowledge, and collaborate with developers from around the world. Explore topics in web development, mobile app development, algorithms, data structures, and more.',
  icons: {
    icon: '',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  // const { userId } = auth(); // ? for authentication

  return (
    <html lang="en">
      <body className={`${inter.className} ${spaceGrotesk.className}`}>
        <ClerkProvider
          appearance={{
            elements: {
              formButtonPrimary: 'primary-gradient',
              footerActionLink: 'primary-text-gradient hover:text-primary-500',
            },
          }}>
          <ThemeProvider>{children}</ThemeProvider>
        </ClerkProvider>
      </body>
    </html>
  );
}

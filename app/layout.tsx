import type { Metadata } from 'next';
import { Figtree } from 'next/font/google';
import './globals.css';
import { ThemeProvider } from '@/components/theme-provider';
const figTree = Figtree({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'ReviSplash',
  description: 'Generate random thank you cards',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={figTree.className}>
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            {children}
          </ThemeProvider>
      </body>
    </html>
  );
}

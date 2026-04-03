import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'BIOPUNK 2187',
  description: 'Enter the living city.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body style={{ margin: 0, padding: 0, overflow: 'hidden', background: '#000308' }}>
        {children}
      </body>
    </html>
  );
}

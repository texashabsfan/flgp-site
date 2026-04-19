import './globals.css';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Family Law Growth Partners',
  description: 'Growth systems for family law firms.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
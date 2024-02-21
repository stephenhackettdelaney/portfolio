import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Stephen Hackett-Delaney",
  description: "Software engineering portfolio showcasing the work of Stephen Hackett-Delaney",
  keywords: ['Stephen Hackett-Delaney', 'Stephen hd', 'stephenhd', 'Next.js', 'React', 'JavaScript', 'web design', 'website design', 'website builder'],
  authors: [{ name: 'Stephen Hackett-Delaney' }, { name: 'Josh', url: 'https://nextjs.org' }],
  creator: 'Stephen Hackett-Delaney',
  publisher: 'Stephen Hackett-Delaney',
  openGraph: {
    title: "Stephen Hackett-Delaney",
    description: "Software engineering portfolio showcasing the work of Stephen Hackett-Delaney",
    url: 'https://www.stephenhd.com/',
    siteName: 'Stephen Hackett-Delaney',
    images: [
      {
        url: 'https://www.stephenhd.com/open-graph.jpeg', // Must be an absolute URL
        width: 800,
        height: 600,
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  robots: {
    index: false,
    follow: true,
    nocache: true,
    googleBot: {
      index: true,
      follow: false,
      noimageindex: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}

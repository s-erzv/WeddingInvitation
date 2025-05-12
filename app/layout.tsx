import type { Metadata } from "next";
import "./globals.css";
import { Poppins } from 'next/font/google';

const poppins = Poppins({
  subsets: ["latin"],
    weight: ['400', '700'],
});

export const metadata: Metadata = {
title: "Anas & Zulha Wedding",
  description: "You're invited to celebrate the special day of Anas & Zulha. Join us in prayer and joy.",
  openGraph: {
    title: "Anas & Zulha Wedding Invitation",
    description: "Celebrate the union of Anas and Zulha with us!",
    url: "https://wedding-invitation-rho-six.vercel.app/",
    siteName: "Anas & Zulha Wedding",
    images: [
      {
        url: "/bride.png", // replace with a real image path if needed
        width: 1200,
        height: 630,
        alt: "Anas & Zulha Wedding Invitation",
      },
    ],
    type: "website",
  },
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" type="image/png" href="/bride.png" />
      </head>
      <body
        className={`${poppins.className}antialiased`}
      >
        {children}
      </body>
    </html>
  );
}

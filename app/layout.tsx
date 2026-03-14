import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Navbar from "../app/components/Navbar";
import Footer from "../app/components/Footer";
import "./globals.css";
import WhatsAppButton from "./components/Whatsappbtn";
import CallButton from "./components/CallButton"
import { Analytics } from "@vercel/analytics/next";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Custom Sofa & Furniture Manufacturer in Bangalore | Prestige Dream Decor",

  description:
    "Prestige Dream Decor is a custom sofa and furniture manufacturer in Bangalore. We design luxury sofas, sofa cum beds, beds, and custom home furniture with premium materials. Visit our Bangalore showroom today.",

  keywords: [
    "custom sofa bangalore",
    "sofa manufacturer bangalore",
    "sofa set bangalore",
    "custom furniture bangalore",
    "luxury sofa bangalore",
    "sofa cum bed bangalore",
    "prestige dream decor",
    "home furniture bangalore",
    "furniture shop bangalore",
  ],

  authors: [
    {
      name: "Prestige Dream Decor",
      url: "https://www.prestigedreamdecor.in",
    },
  ],

  creator: "Prestige Dream Decor",

  metadataBase: new URL("https://www.prestigedreamdecor.in"),

  robots: {
    index: true,
    follow: true,
  },

  alternates: {
    canonical: "https://www.prestigedreamdecor.in",
  },

  openGraph: {
    title: "Custom Sofa & Furniture Manufacturer in Bangalore",
    description:
      "Premium custom sofas, beds, and furniture crafted in Bangalore by Prestige Dream Decor.",
    url: "https://www.prestigedreamdecor.in",
    siteName: "Prestige Dream Decor",
    locale: "en_IN",
    type: "website",
    images: [
      {
        url: "og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Prestige Dream Decor Custom Furniture",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Custom Sofa Manufacturer in Bangalore | Prestige Dream Decor",
    description:
      "Luxury custom sofas and furniture crafted in Bangalore.",
    images: ["og-image.jpg"],
  },
};

export const viewport: Viewport = {
  themeColor: "#ffffff",
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
        <header>
          <Navbar />
        </header>

        <main>{children}</main>

        <Analytics />

        <WhatsAppButton />

        <CallButton />


        <footer>
          <Footer />
        </footer>
      </body>
    </html>
  );
}

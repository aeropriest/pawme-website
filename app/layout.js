import { Geist, Geist_Mono, Sora } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const sora = Sora({
  variable: "--font-sora",
  subsets: ["latin"],
  weight: ["400", "600", "700"],
});

export const metadata = {
  metadataBase: new URL('https://pawme.ai'),
  title: {
    default: "PawMe - Pet Companion Robot | World's First AI Built for Your Furry Friends",
    template: "%s | PawMe"
  },
  description: "Meet PawMe, the revolutionary pet companion robot powered by the world's first AI built specifically for your furry friends. Smart interaction, health monitoring, automated feeding, and endless entertainment for your pets.",
  keywords: [
    "pet companion robot",
    "AI pet care",
    "smart pet robot",
    "pet health monitoring",
    "automated pet feeder",
    "pet entertainment robot",
    "AI for pets",
    "furry friends AI",
    "interactive pet robot",
    "pet care technology",
    "smart pet companion",
    "robotic pet care"
  ],
  authors: [{ name: "Axar Robotics" }],
  creator: "Axar Robotics",
  publisher: "Axar Robotics",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://pawme.ai",
    siteName: "PawMe",
    title: "PawMe - Pet Companion Robot | World's First AI Built for Your Furry Friends",
    description: "Revolutionary pet companion robot powered by the world's first AI built specifically for your furry friends. Smart interaction, health monitoring, and automated care.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "PawMe - Pet Companion Robot",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "PawMe - Pet Companion Robot | World's First AI Built for Your Furry Friends",
    description: "Revolutionary pet companion robot powered by the world's first AI built specifically for your furry friends.",
    images: ["/twitter-image.jpg"],
    creator: "@pawme_ai",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/icon.png", type: "image/png", sizes: "32x32" },
    ],
    apple: [
      { url: "/apple-icon.png", sizes: "180x180", type: "image/png" },
    ],
  },
  manifest: "/site.webmanifest",
  category: "technology",
  verification: {
    google: "your-google-verification-code",
    // yandex: "your-yandex-verification-code",
    // bing: "your-bing-verification-code",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${sora.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}

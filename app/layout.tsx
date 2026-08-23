import type { Metadata } from "next";
import { Playfair_Display, Jost } from "next/font/google";
import "./globals.css";
import AmbientAudio from "@/components/AmbientAudio";
import Script from "next/script";
const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const jost = Jost({
  variable: "--font-jost",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
});



export const metadata: Metadata = {
  metadataBase: new URL("https://www.damairesorts.com"),

  title: {
    default: "La Damai Resorts | Luxury Resort in Chikmagalur",
    template: "%s | La Damai Resorts",
  },

  description:
    "Luxury resort in Chikmagalur with premium villas, coffee estate views, private jacuzzis, fine dining, and curated nature experiences for couples and families.",

  keywords: [
    "La Damai Resorts",
    "La Damai Resort",
    "Luxury Resort Chikmagalur",
    "Resort in Chikmagalur",
    "Coffee Plantation Resort",
    "Luxury Villas Chikmagalur",
    "Weekend Getaway Karnataka",
    "Nature Resort",
    "Plantation Stay",
    "Couple Resort Chikmagalur",
    "Family Resort Chikmagalur",
    "Best Resort in Chikmagalur",
    "Chikmagalur resort",
    "Coffee estate stay",
  ],

  alternates: {
    canonical: "/",
  },

  robots: {
    index: true,
    follow: true,
  },

  icons: {
    icon: "/logo/coffeebean.png",
    shortcut: "/logo/coffeebean.png",
    apple: "/logo/coffeebean.png",
  },

  openGraph: {
    title: "La Damai Resorts | Luxury Resort in Chikmagalur",
    description:
      "Escape to a luxury resort in Chikmagalur with elegant stays, breathtaking coffee estate views, and unforgettable nature experiences.",
    url: "https://www.damairesorts.com",
    siteName: "La Damai Resorts",
    locale: "en_IN",
    type: "website",
    images: [
      {
        url: "/logo/coffeebean.png",
        width: 1200,
        height: 630,
        alt: "La Damai Resorts",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "La Damai Resorts",
    description:
      "Luxury resort in Chikmagalur offering plantation stays, premium villas, and curated nature experiences.",
    images: ["/logo/coffeebean.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${playfair.variable} ${jost.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-porcelain text-coffee">
        {children}
        <AmbientAudio />
      <Script
  id="schema-org"
  type="application/ld+json"
  dangerouslySetInnerHTML={{
    __html: JSON.stringify({
      "@context": "https://schema.org",
      "@type": "Resort",

      name: "La Damai Resorts",

      url: "https://www.damairesorts.com",

      image: [
        "https://www.damairesorts.com/opening_image.jpg",
      ],

      description:
        "Luxury plantation resort in Chikmagalur offering premium stays, nature experiences, trekking, bonfires and stargazing.",

      telephone: "+91-9900064697",

      email: "info@damairesorts.com",

      address: {
        "@type": "PostalAddress",
        streetAddress: "Hunasemakki, Kallugudde Road",
        addressLocality: "Chikmagalur",
        addressRegion: "Karnataka",
        postalCode: "577133",
        addressCountry: "IN",
      },

      geo: {
        "@type": "GeoCoordinates",
        latitude: "13.287386",
        longitude: "75.6662446",
      },

      amenityFeature: [
        {
          "@type": "LocationFeatureSpecification",
          name: "Free WiFi",
        },
        {
          "@type": "LocationFeatureSpecification",
          name: "Restaurant",
        },
        {
          "@type": "LocationFeatureSpecification",
          name: "Swimming Pool",
        },
        {
          "@type": "LocationFeatureSpecification",
          name: "Parking",
        },
      ],

      sameAs: [
        "https://www.instagram.com/la_damai.chikmagalur/"
      ],
    }),
  }}
/>
      </body>
    </html>
  );
}

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
    "Experience luxury amidst the coffee plantations of Chikmagalur at La Damai Resorts. Enjoy premium villas, nature trails, stargazing, bonfires, fine dining, and unforgettable plantation stays.",

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
  ],

  alternates: {
    canonical: "/",
  },

  openGraph: {
    title: "La Damai Resorts | Luxury Resort in Chikmagalur",
    description:
      "Escape to luxury in the heart of Chikmagalur with elegant stays, breathtaking views, and unforgettable experiences at La Damai Resorts.",
    url: "https://www.damairesorts.com",
    siteName: "La Damai Resorts",
    locale: "en_IN",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "La Damai Resorts",
    description:
      "Luxury resort in Chikmagalur offering plantation stays, premium villas, and curated nature experiences.",
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
        "@type": "PostalAddres",
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

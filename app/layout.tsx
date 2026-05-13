import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  applicationName: "Dra. Luz Adriana Ramírez P.",

  title: {
    default:
      "Dra. Luz Adriana Ramírez | Psicóloga Clínica y Neuropsicóloga en Pitalito, Huila",
    template: "%s | Psicóloga en Pitalito",
  },

  description:
    "Atención psicológica y neuropsicológica en Pitalito, Huila. Terapia para ansiedad, depresión, estrés, duelo, autoestima y gestión emocional con enfoque profesional y humano.",

  keywords: [
    "psicóloga en Pitalito",
    "psicóloga clínica Pitalito",
    "neuropsicóloga Pitalito",
    "terapia psicológica Pitalito",
    "psicóloga Huila",
    "tratamiento ansiedad",
    "tratamiento depresión",
    "manejo del estrés",
    "terapia emocional",
    "salud mental",
    "duelo emocional",
    "autoestima",
    "adicciones",
    "consumo de sustancias",
    "drogadicción",
  ],

  authors: [
    {
      name: "Dra. Luz Adriana Ramírez P.",
      url: "https://adriana-ramirez.vercel.app/",
    },
  ],

  openGraph: {
    title: "Dra. Luz Adriana Ramírez P.",
    description: "Atención psicológica profesional en Pitalito.",
    type: "website",
    locale: "es_CO",

    images: [
      {
        url: "../app/assets/Adriana Ramirez.webp",
        width: 1200,
        height: 630,
      },
      {
        url: "../app/assets/Adriana Ramirez2.webp",
        width: 1200,
        height: 630,
      },
    ],
  },

  metadataBase: new URL("https://adriana-ramirez.vercel.app/"),

  alternates: {
    canonical: "https://adriana-ramirez.vercel.app/",
  },

  robots: {
    index: true,
    follow: true,
  },

  category: "Salud Mental",

  verification: {
    google: "codigo-google-search-console",
  },

  icons: {
    icon: "../app/favicon.ico",
    shortcut: "../app/favicon.ico",
    apple: "../app/favicon.ico",
  },
  other: {
    "geo.region": "CO-HUI",
    "geo.placename": "Pitalito",
    "geo.position": "1.8561870376914285, -76.04613686159725",
    ICBM: "1.8537, -76.0507",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="es"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}

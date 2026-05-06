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
  title: {
    default: "Dra. Luz Adriana Ramírez",
    template: "%s | Psicóloga en Pitalito",
  },

  description: "Psicología y neuropsicologia clínica en Pitalito, Huila.",

  keywords: [
    "psicóloga Pitalito",
    "psicóloga Huila",
    "psicóloga Colombia",
    "terapia psicológica",
    "estrés",
    "autoestima",
    "duelo",
    "ansiedad",
    "depresión",
    "terapia",
    "tratamiento psicológico",
    "psicología clínica",
    "psicología",
    "neuropsicología",
    "psicoterapia",
    "Salud Mental",
    "gestión emocional",
    "alcoholimo",
    "consumo de sustancias",
    "drogadicción",
  ],

  authors: [
    {
      name: "Dra. Luz Adriana Ramírez P.",
      url: "https://tusitio.com",
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
    ],
  },

  metadataBase: new URL("https://tusitio.com"),

  alternates: {
    canonical: "https://tusitio.com",
  },

  robots: {
    index: true,
    follow: true,
  },

  category: "Salud Mental",

  icons: {
    icon: "/",
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
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}

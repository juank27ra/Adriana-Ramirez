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

  description: "Psicóloga clínica profesional en Pitalito, Huila.",

  keywords: [
    "psicóloga Pitalito",
    "psicóloga Huila",
    "terapia psicológica",
    "ansiedad",
    "depresión",
    "terapia",
  ],

  authors: [
    {
      name: "Dra. Luz Adriana Ramírez",
    },
  ],

  openGraph: {
    title: "Dra. Luz Adriana Ramírez",
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

  twitter: {
    card: "summary_large_image",
    title: "Dra. Luz Adriana Ramírez",
    description: "Psicóloga profesional en Pitalito",
  },

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

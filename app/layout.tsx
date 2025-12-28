import type React from "react"
import type { Metadata } from "next"
import { Gemunu_Libre, Quicksand, Frank_Ruhl_Libre } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"

const gemunuLibre = Gemunu_Libre({
  weight: "400",
  subsets: ["latin"],
})

const quicksand = Quicksand({
  weight: "600",
  subsets: ["latin"],
  variable: "--font-quicksand",
})

const frankRuhlLibre = Frank_Ruhl_Libre({
  weight: "600",
  subsets: ["latin"],
  variable: "--font-frank",
})

export const metadata: Metadata = {
  title: "Dragón de Madera - Club de Juegos de Mesa en Granada",
  description:
    "Tu club de juegos de mesa en Granada. Descubre, juega y conoce gente con tu misma afición. Más de 800 juegos, partidas semanales y un ambiente familiar.",
  icons: {
    icon: [
      {
        url: "/logo-dragon-de-madera.svg",
        type: "image/svg+xml",
      },
      {
        url: "/logo-dragon-de-madera.svg",
        media: "(prefers-color-scheme: light)",
      },
      {
        url: "/logo-dragon-de-madera-blanco.svg",
        media: "(prefers-color-scheme: dark)",
      },
    ],
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="es">
      <head></head>
      <body className={`${gemunuLibre.className} ${quicksand.variable} ${frankRuhlLibre.variable} antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}

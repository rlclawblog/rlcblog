import type { Metadata } from "next"

import { Playfair_Display, Nunito_Sans } from "next/font/google"
import localFont from "next/font/local"
import "./globals.css"

import Header from "./components/Header"
import Navbar from "@/app/components/Navbar"
import Wrapper from "@/app/components/Wrapper"
import Footer from "@/app/components/Footer"

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
})
const nunito = Nunito_Sans({ subsets: ["latin"], variable: "--font-nunito" })
const algerian = localFont({
  src: [
    {
      path: "./assets/fonts/Algerian Regular.ttf",
      weight: "400",
      style: "normal",
    },
  ],
  variable: "--font-algerian",
})

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body
        className={`${playfair.variable} ${nunito.variable} ${algerian.variable}`}
      >
        <Header />
        <Navbar />
        <Wrapper>
          {children}
          <Footer />
        </Wrapper>
      </body>
    </html>
  )
}

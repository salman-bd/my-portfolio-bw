import { Header } from "@/components/Header"
import { Footer } from "@/components/Footer"
import "./globals.css"
import { roboto } from "@/components/ui/font"

export const metadata = {
  title: "Md. Abu Salman - Portfolio",
  description: "Software Engineer and ICT Teacher",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body
        className={`${roboto.className} antialiased bg-gradient-to-br from-gray-50 to-gray-100 min-h-screen flex flex-col`}
      >
        <div className="flex flex-col min-h-screen">
          <Header />
          <main className="container mx-auto px-4 sm:px-6 lg:px-8 py-8 flex-grow">
            <div className="max-w-7xl mx-auto">{children}</div>
          </main>
          <Footer />
        </div>
      </body>
    </html>
  )
}


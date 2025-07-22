import type { Metadata } from 'next'
import { Archivo, Sora } from 'next/font/google'
import './globals.css'

const archivo = Archivo({
  subsets: ['latin'],
  variable: '--font-archivo',
  display: 'swap',
})

const sora = Sora({
  subsets: ['latin'],
  variable: '--font-sora',
  weight: ['400', '600', '700'],
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Seltop - Minecraft Graphic Designer',
  description: 'Professional Minecraft graphic design services by Seltop. Creating stunning thumbnails, logos, and visual content for content creators.',
  keywords: 'minecraft, graphic design, thumbnails, logos, content creator, gaming',
  authors: [{ name: 'Seltop' }],
  openGraph: {
    title: 'Seltop - Minecraft Graphic Designer',
    description: 'Professional Minecraft graphic design services',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${archivo.variable} ${sora.variable}`}>
      <body className="antialiased">
        {children}
      </body>
    </html>
  )
}
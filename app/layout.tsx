import type { Metadata, Viewport } from 'next'
import { DM_Sans, Playfair_Display } from 'next/font/google'
import './globals.css'

const sans = DM_Sans({
  subsets: ['latin'],
  variable: '--font-sans',
  display: 'swap',
})
const display = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-display',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'DORFLEX | Matelas & confort pour votre sommeil',
  description: 'Découvrez les matelas DORFLEX : mousse, ressorts, mémoire de forme et latex. Trouvez le confort adapté à vos nuits.',
  openGraph: {
    title: 'DORFLEX | Le confort qui transforme vos nuits.',
    description: 'Des matelas pensés pour mieux dormir.',
    type: 'website',
    url: 'https://dorflex.ma',
    images: [{ url: 'https://dorflex.ma/og-image.jpg', width: 1200, height: 630 }],
  },
  robots: 'index, follow',
}

export const viewport: Viewport = {
  colorScheme: 'light',
  themeColor: '#f4f1eb',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr" className={`${sans.variable} ${display.variable} bg-background`}>
      <body className="antialiased">
        {children}
        {process.env.NODE_ENV === 'production' && (
          <script defer src="https://analytics.vercel.app/script.js" data-website-id="..." />
        )}
      </body>
    </html>
  )
}
import type { Metadata } from 'next'
import { Fraunces, Work_Sans } from 'next/font/google'
import './globals.css'
import { Nav } from '@/components/Nav'
import { Footer } from '@/components/Footer'

const fraunces = Fraunces({
  subsets: ['latin'],
  weight: ['400', '600'],
  style: ['normal', 'italic'],
  variable: '--font-fraunces',
  display: 'swap',
})

const workSans = Work_Sans({
  subsets: ['latin'],
  weight: ['400', '500'],
  variable: '--font-work-sans',
  display: 'swap',
})

export const metadata: Metadata = {
  title: "Permane'Ser — Arlete Klauck",
  description:
    "Ser, ficar e pertencer. Um espaço dedicado ao desenvolvimento humano, psicoterapia, formações e recursos para quem quer permanecer sendo quem se é.",
  openGraph: {
    title: "Permane'Ser — Arlete Klauck",
    description:
      "Como permanecer sendo quem somos numa época que nos convida a performar, competir, agradar e nos adaptar?",
    locale: 'pt_BR',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR" suppressHydrationWarning>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              try {
                var saved = localStorage.getItem('ps-theme');
                var sys = window.matchMedia('(prefers-color-scheme: dark)').matches;
                var t = saved || (sys ? 'dark' : 'light');
                document.documentElement.setAttribute('data-theme', t);
              } catch(e) {}
            `,
          }}
        />
      </head>
      <body className={`${fraunces.variable} ${workSans.variable}`}>
        <a href="#main-content" className="skip-link">Pular para o conteúdo</a>
        <Nav />
        <main id="main-content">{children}</main>
        <Footer />
      </body>
    </html>
  )
}

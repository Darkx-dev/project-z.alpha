import type { Metadata } from 'next'
import { Fira_Code } from 'next/font/google'
import './globals.css'
import Navbar from '@/components/Navbar'

const inter = Fira_Code({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'DARKX',
  description: 'Developer : Roshan',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" data-theme="forest">
      <body className={inter.className}>
        <Navbar/>
        {children}
      </body>
    </html>
  )
}

import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { AuthProvider } from '@/auth/providers'
import { Header } from './components/Header/Header'

const inter = Inter({
  subsets: ['latin'],
  variable: "--font-sans"
})

export const metadata: Metadata = {
  title: 'Bill Generator',
  description: 'Bill Generator app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} overflow-hidden`}>
        <AuthProvider>
          <Header />
          {children}
        </AuthProvider>
      </body>
    </html>
  )
}

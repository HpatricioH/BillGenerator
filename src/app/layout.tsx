import './globals.css'
import 'react-toastify/dist/ReactToastify.css';

import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { Header } from './components/Header/Header'
import Footer from './components/Footer/Footer'
import { TRPCReactProvider } from '@/trpc/react'
import { ToastContainer } from 'react-toastify'

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
      <body className={`${inter.className}`}>
        <TRPCReactProvider>
          <ToastContainer />
          <Header />
          {children}
          <Footer />
        </TRPCReactProvider>
      </body>
    </html>
  )
}

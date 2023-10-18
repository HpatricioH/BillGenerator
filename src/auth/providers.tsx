'use client'

import { SessionProvider } from 'next-auth/react'
import React from 'react'

interface AuthProvidersProps {
  children?: React.ReactNode
}

export const AuthProvider = ({children}: AuthProvidersProps) => {
  return <SessionProvider>{children}</SessionProvider>
}


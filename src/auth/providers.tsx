'use client'

import { SessionProvider } from 'next-auth/react'
import {FC, ReactNode} from 'react'

interface AuthProvidersProps {
  children: ReactNode
}

const AuthProvider: FC<AuthProvidersProps> = ({children}) => (
  <SessionProvider>{children}</SessionProvider>
)

export default AuthProvider
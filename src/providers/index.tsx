import React from 'react'
import { ThemeProvider } from '@/providers/next-theme'
import QueryProvider from '@/providers/query'

function Providers({ children }: { children: React.ReactNode }) {
  return (
    <QueryProvider>
      <ThemeProvider>{children}</ThemeProvider>
    </QueryProvider>
  )
}

export default Providers

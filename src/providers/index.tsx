import React from 'react'
import { ThemeProvider } from '@/providers/next-theme'
import QueryProvider from '@/providers/query'
import Navbar from '@/components/common/nav-bar'

function Providers({ children }: { children: React.ReactNode }) {
  return (
    <QueryProvider>
      <ThemeProvider>
        <main className="container mx-auto">
          <Navbar />
          {children}
        </main>
      </ThemeProvider>
    </QueryProvider>
  )
}

export default Providers

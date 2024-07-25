'use client'

import React from 'react'
import { AuthProvider } from '../_providers/Auth'
import { CartProvider } from '../_providers/Cart'
import { ThemeProvider } from './Theme'
import { FilterProvider } from './Filter'

// This component wraps its children with multiple context providers
export const Providers: React.FC<{
  children: React.ReactNode
}> = ({ children }) => {
  return (
    <ThemeProvider> {/* Provides theme context to all children */}
      <AuthProvider> {/* Provides authentication context */}
        <FilterProvider> {/* Provides filter context */}
          <CartProvider> {/* Provides cart context */}
            {children} {/* Render children with all contexts applied */}
          </CartProvider>
        </FilterProvider>
      </AuthProvider>
    </ThemeProvider>
  )
}

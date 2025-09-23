'use client'

import { createContext, useContext, useState } from 'react'

// Create the Loading Context
const LoadingContext = createContext()

// Global Provider Component
export function GlobalProvider({ children }) {
  const [isLoading, setIsLoading] = useState(true) // Start with loading true
  const [loadingMessage, setLoadingMessage] = useState('Welcome to KTS Kavin Portfolio')

  // Function to start loading
  const startLoading = (message = 'Loading...') => {
    setIsLoading(true)
    setLoadingMessage(message)
  }

  // Function to stop loading
  const stopLoading = () => {
    setIsLoading(false)
    setLoadingMessage('')
  }

  // Function to toggle loading state
  const toggleLoading = (message = 'Loading...') => {
    if (isLoading) {
      stopLoading()
    } else {
      startLoading(message)
    }
  }

  const value = {
    isLoading,
    loadingMessage,
    startLoading,
    stopLoading,
    toggleLoading,
    setIsLoading,
    setLoadingMessage
  }

  return (
    <LoadingContext.Provider value={value}>
      {children}
    </LoadingContext.Provider>
  )
}

// Custom hook to use the Loading Context
export function useLoading() {
  const context = useContext(LoadingContext)
  if (!context) {
    throw new Error('useLoading must be used within a GlobalProvider')
  }
  return context
}

// Export the context for advanced usage if needed
export { LoadingContext }
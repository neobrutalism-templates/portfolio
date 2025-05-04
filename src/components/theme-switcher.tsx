'use client'

import { Moon, Sun } from 'lucide-react'
import { useTheme } from 'next-themes'
import * as React from 'react'

export function ThemeSwitcher() {
  const { setTheme, theme } = useTheme()
  const [mounted, setMounted] = React.useState(false)

  React.useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return null
  }

  return (
    <button 
      onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}
      className="p-2 rounded-base"
    >
      <Sun className="stroke-main-foreground hidden size-4 sm:size-6 dark:inline" />
      <Moon className="stroke-main-foreground inline size-4 sm:size-6 dark:hidden" />
      <span className="sr-only">Toggle theme</span>
    </button>
  )
}

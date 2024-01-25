'use client'
import { useState, useEffect } from 'react'
import { useTheme } from 'next-themes'
import { Switch } from '@/components/ui/switch'
import { Label } from '@/components/ui/label'
import { Moon, Sun } from 'lucide-react'
export default function ThemeSwitcher() {
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return null
  }

  return (
    <div className="flex items-center space-x-2">
      <Switch
        id="theme"
        checked={theme === 'dark'}
        onClick={() =>
          theme === 'dark' ? setTheme('light') : setTheme('dark')
        }
      />
      <Label htmlFor="theme">{theme === 'dark' ? <Moon /> : <Sun />}</Label>
    </div>
  )
}

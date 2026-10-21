import type { Theme } from "@/components/theme-provider"
import React from "react"

type ThemeProviderState = {
  theme: Theme
  setTheme: (theme: Theme) => void
}

export const ThemeProviderContext = React.createContext<ThemeProviderState | undefined>(undefined)

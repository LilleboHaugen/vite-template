import { Monitor, Moon, Sun } from "lucide-react"
import { useState, type FC } from "react"
import { useTheme, type Theme } from "@/components/theme-provider"
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group"
import { Tooltip, TooltipContent, TooltipTrigger } from "@/components/ui/tooltip"

export const App: FC = () => {
  const { theme, setTheme } = useTheme()
  const [value, setValue] = useState([theme])

  const handleChange = (theme: string | undefined) => {
    if (theme) {
      setValue([theme as Theme])
      setTheme(theme as Theme)
    }
  }

  return (
    <ToggleGroup variant="outline" value={value} onValueChange={(theme) => handleChange(theme[0])}>
      <Tooltip>
        <TooltipTrigger>
          <ToggleGroupItem value="light" aria-label="Toggle light">
            <Sun />
          </ToggleGroupItem>
        </TooltipTrigger>
        <TooltipContent>Light mode</TooltipContent>
      </Tooltip>
      <Tooltip>
        <TooltipTrigger>
          <ToggleGroupItem value="dark" aria-label="Toggle dark">
            <Moon />
          </ToggleGroupItem>
        </TooltipTrigger>
        <TooltipContent>Dark mode</TooltipContent>
      </Tooltip>
      <Tooltip>
        <TooltipTrigger>
          <ToggleGroupItem value="system" aria-label="Match system">
            <Monitor />
          </ToggleGroupItem>
        </TooltipTrigger>
        <TooltipContent>Match system</TooltipContent>
      </Tooltip>
    </ToggleGroup>
  )
}
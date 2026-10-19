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
        <TooltipTrigger
          render={
            <ToggleGroupItem value="light" aria-label="Toggle light">
              <Sun />
            </ToggleGroupItem>
          }
        />
        <TooltipContent sideOffset={8}>Light mode</TooltipContent>
      </Tooltip>
      <Tooltip>
        <TooltipTrigger
          render={
            <ToggleGroupItem value="dark" aria-label="Toggle dark">
              <Moon />
            </ToggleGroupItem>
          }
        />
        <TooltipContent sideOffset={8}>Dark mode</TooltipContent>
      </Tooltip>
      <Tooltip>
        <TooltipTrigger
          render={
            <ToggleGroupItem value="system" aria-label="Match system">
              <Monitor />
            </ToggleGroupItem>
          }
        />
        <TooltipContent sideOffset={8}>Match system</TooltipContent>
      </Tooltip>
    </ToggleGroup>
  )
}
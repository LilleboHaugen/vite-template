import { Monitor, Moon, Sun } from "lucide-react"
import { type FC } from "react"
import { type Theme } from "@/components/theme-provider"
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group"
import { Tooltip, TooltipContent, TooltipTrigger } from "@/components/ui/tooltip"
import { useTheme } from "@/hooks/use-theme"

export const App: FC = () => {
  const { theme, setTheme } = useTheme()

  const handleChange = (theme: string | undefined) => {
    if (theme) {
      setTheme(theme as Theme)
    }
  }

  return (
    <ToggleGroup
      variant="outline"
      value={[theme]}
      onValueChange={(theme) => handleChange(theme[0])}
    >
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

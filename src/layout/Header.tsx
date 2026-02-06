import { Bell, Search } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

export function Header() {
  return (
    <header className="flex flex-col gap-3 border-b bg-background/80 p-4 backdrop-blur md:flex-row md:items-center md:justify-between md:px-6">
      <div>
        <h2 className="text-lg font-semibold">Overview</h2>
        <p className="text-sm text-muted-foreground">Track hiring progress and team activity.</p>
      </div>

      <div className="flex items-center gap-2">
        <div className="relative w-full max-w-64">
          <Search className="pointer-events-none absolute top-1/2 left-3 size-4 -translate-y-1/2 text-muted-foreground" />
          <Input className="pl-9" placeholder="Search" />
        </div>
        <Button size="icon" variant="outline" aria-label="Notifications">
          <Bell className="size-4" />
        </Button>
      </div>
    </header>
  )
}

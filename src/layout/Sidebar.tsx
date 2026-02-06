import { BarChart3, LayoutDashboard, Settings, Users } from "lucide-react"

import { Button } from "@/components/ui/button"

const navItems = [
  { label: "Dashboard", icon: LayoutDashboard },
  { label: "Candidates", icon: Users },
  { label: "Pipeline", icon: BarChart3 },
  { label: "Settings", icon: Settings },
]

export function Sidebar() {
  return (
    <aside className="w-full border-b bg-sidebar md:h-screen md:w-64 md:border-r md:border-b-0">
      <div className="border-b p-4 md:p-6">
        <p className="text-sm text-muted-foreground">CRM Workspace</p>
        <h1 className="text-xl font-semibold">TalentFlow</h1>
      </div>

      <nav className="flex gap-2 overflow-x-auto p-4 md:flex-col md:overflow-visible md:p-3">
        {navItems.map(({ label, icon: Icon }) => (
          <Button
            key={label}
            variant="ghost"
            className="justify-start gap-2 whitespace-nowrap text-sm md:w-full"
          >
            <Icon className="size-4" />
            {label}
          </Button>
        ))}
      </nav>
    </aside>
  )
}

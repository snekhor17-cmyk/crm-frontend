import type { PropsWithChildren } from "react"

import { Header } from "@/layout/Header"
import { Sidebar } from "@/layout/Sidebar"

export function AppLayout({ children }: PropsWithChildren) {
  return (
    <div className="min-h-screen bg-muted/30 md:flex">
      <Sidebar />
      <div className="flex min-h-screen flex-1 flex-col">
        <Header />
        <main className="flex-1 p-4 md:p-6">{children}</main>
      </div>
    </div>
  )
}

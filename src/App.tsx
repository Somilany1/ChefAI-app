import {
  SidebarInset,
  SidebarProvider,
  SidebarTrigger,
} from "@/components/ui/sidebar"
import { AppSidebar } from "@/components/ui/app-sidebar"
import { AppBreadcrumb } from "@/components/ui/app-breadcrumb"

function App() {
  return (
    <SidebarProvider>
      <AppSidebar />
      <SidebarInset>
        <header className="flex h-fit items-center gap-4 border-b px-4 py-4">
          <SidebarTrigger className="-ml-1" />
          <AppBreadcrumb />
        </header>
        <div></div>
        <div></div>
        <div></div>
      </SidebarInset>
    </SidebarProvider>
  )
}

export default App
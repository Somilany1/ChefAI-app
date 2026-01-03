import {
  SidebarInset,
  SidebarProvider,
  SidebarTrigger,
} from "@/components/ui/sidebar"
import { AppSidebar } from "@/components/ui/app-sidebar"
import { AppBreadcrumb } from "@/components/ui/app-breadcrumb"
import { AppCarousel } from "./components/ui/app-carousel"

function App() {
  return (
    <SidebarProvider>
      <AppSidebar />
      <SidebarInset className="min-h-screen flex flex-col">
        <header className="flex h-fit items-center gap-4 border-b px-4 py-4">
          <SidebarTrigger className="-ml-1" />
          <AppBreadcrumb />
        </header>
        <div className="grid grid-rows-3 gap-4 m-4 flex-1">
          <div className="flex flex-col bg-gray-50 rounded-2xl">
            <span className="inline-block mt-8 ml-8">Breakfast Recommendations</span>
            <AppCarousel></AppCarousel>
          </div>
          <div className="flex flex-col bg-gray-50 rounded-2xl">
            <span className="inline-block mt-8 ml-8">Lunch Recommendations</span>
            <AppCarousel></AppCarousel>
          </div>
          <div className="flex flex-col bg-gray-50 rounded-2xl">
            <span className="inline-block mt-8 ml-8">Dinner Recommendations</span>
            <AppCarousel></AppCarousel>
          </div>
        </div>
      </SidebarInset>
    </SidebarProvider>
  )
}

export default App
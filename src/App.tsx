import {
  SidebarInset,
  SidebarProvider,
  SidebarTrigger,
} from "@/components/ui/sidebar"
import { AppSidebar } from "@/components/ui/app-sidebar"
import { AppBreadcrumb } from "@/components/ui/app-breadcrumb"
import { AppCarousel } from "./components/ui/app-carousel"
import { UserProfileModalWindow } from "./components/ui/user-profile-modal-window"
import { useState } from "react"

function App() {
  const [isProfileModalOpen, setIsProfileModalOpen] = useState(false);

  const handleProfileModalOpen = () => {
    setIsProfileModalOpen(true);
  };

  return (
    <SidebarProvider>
      <UserProfileModalWindow isOpen={isProfileModalOpen} onOpenChange={setIsProfileModalOpen} />
      <AppSidebar onProfileClick={handleProfileModalOpen} />
      <SidebarInset className="min-h-screen flex flex-col bg-[#FFFDF5]">
        <header className="flex h-fit items-center gap-4 border-b px-4 py-4">
          <SidebarTrigger className="-ml-1" />
          <AppBreadcrumb />
        </header>
        <div className="grid grid-rows-3 gap-4 m-4 flex-1">
          <div className="flex flex-col rounded-2xl bg-[rgba(0,0,0,0.02)]">
            <span className="inline-block mt-8 ml-8 text-black/50">Breakfast Recommendations</span>
            <AppCarousel></AppCarousel>
          </div>
          <div className="flex flex-col rounded-2xl bg-[rgba(0,0,0,0.02)]">
            <span className="inline-block mt-8 ml-8 text-black/50">Lunch Recommendations</span>
            <AppCarousel></AppCarousel>
          </div>
          <div className="flex flex-col rounded-2xl bg-[rgba(0,0,0,0.02)]">
            <span className="inline-block mt-8 ml-8 text-black/50">Dinner Recommendations</span>
            <AppCarousel></AppCarousel>
          </div>
        </div>
      </SidebarInset>
    </SidebarProvider>
  )
}

export default App
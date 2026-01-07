import {
    Sidebar,
    SidebarContent,
    SidebarGroup,
    SidebarGroupContent,
    SidebarMenu,
    SidebarMenuItem,
    SidebarMenuButton,
  } from "@/components/ui/sidebar"
  import { 
    House,
    MessageCircle,
    UserRound
   } from 'lucide-react';
  
  export function AppSidebar({onProfileClick}: {onProfileClick: () => void;}) {
    return (
      <Sidebar>
        <SidebarContent className="grid h-full">
          <SidebarGroup>
            <SidebarGroupContent>
              <SidebarMenu className="grid">
                <SidebarMenuItem>
                  <SidebarMenuButton><House />Home</SidebarMenuButton>
                </SidebarMenuItem>
                <SidebarMenuItem>
                  <SidebarMenuButton><MessageCircle />Chat</SidebarMenuButton>
                </SidebarMenuItem>
              </SidebarMenu>
            </SidebarGroupContent>
          </SidebarGroup>
          <SidebarGroup className="self-end">
            <SidebarGroupContent>
              <SidebarMenuItem className="">
                  <SidebarMenuButton onClick={onProfileClick}><UserRound />Profile</SidebarMenuButton>
              </SidebarMenuItem>
            </SidebarGroupContent>
          </SidebarGroup>
        </SidebarContent>
      </Sidebar>
    )
  }
  
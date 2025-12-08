import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  // SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarProvider,
  SidebarTrigger
} from "@/components/ui/sidebar"

function App() {
  return (
    <SidebarProvider>
      <Sidebar>
        <SidebarTrigger />
        <SidebarContent>
          <SidebarGroup>
            <SidebarGroupContent>
              <SidebarMenu>
                <SidebarMenuItem>
                  <SidebarMenuButton><img src="/public/home.svg" alt="Home icon" />Home</SidebarMenuButton>
                </SidebarMenuItem>
                <SidebarMenuItem>
                  <SidebarMenuButton><img src="/public/chat.svg" alt="Chat icon" />New chat</SidebarMenuButton>
                </SidebarMenuItem>
                <SidebarMenuItem>
                  <SidebarMenuButton><img src="/public/profile.svg" alt="Profile icon" />Profile</SidebarMenuButton>
                </SidebarMenuItem>
              </SidebarMenu>
            </SidebarGroupContent>
          </SidebarGroup>
        </SidebarContent>
      </Sidebar>
    </SidebarProvider>
  )
}

export default App
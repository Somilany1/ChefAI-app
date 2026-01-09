import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet"

export function UserProfileModalWindow({ 
  isOpen, 
  onOpenChange 
}: { 
  isOpen: boolean
  onOpenChange: (open: boolean) => void 
}) {
  return (
    <Sheet open={isOpen} onOpenChange={onOpenChange}>
      <SheetContent 
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-1/2 h-1/2 rounded-lg"
        style={{ transition: 'none', animation: 'none' }}
      >
        <SheetHeader>
          <SheetTitle>User Profile</SheetTitle>
          <SheetDescription>
            Manage your profile settings and preferences.
          </SheetDescription>
        </SheetHeader>
        <div className="mt-4">
          <p>Profile content goes here</p>
        </div>
      </SheetContent>
    </Sheet>
  )
}
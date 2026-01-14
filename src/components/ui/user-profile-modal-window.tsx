import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet"
import { UserProfileAvatar } from "./user-profile-avatar"

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
          <SheetTitle>Edit Profile</SheetTitle>
          <SheetDescription>
            Manage your profile settings and preferences.
          </SheetDescription>
        </SheetHeader>
        <div className="mt-4">
          <UserProfileAvatar />
        </div>
        <div className="flex flex-col gap-1.5 p-4">
          <div className="border rounded-s">
            <label>Display name</label>
            <input></input>
          </div>
          <div className="border rounded-s">
            <label>Username</label>
            <input></input>
          </div>
        </div>
        <div className="flex gap-1">
          <button>Cancel</button>
          <button>Save</button>
        </div>
      </SheetContent>
    </Sheet>
  )
}
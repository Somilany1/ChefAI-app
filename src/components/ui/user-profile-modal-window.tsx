import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet"
import { UserProfileAvatar } from "./user-profile-avatar"
import { useState } from "react"

export function UserProfileModalWindow({
  isOpen,
  onOpenChange
}: {
  isOpen: boolean
  onOpenChange: (open: boolean) => void
}) {

  const [displayName, setDisplayName] = useState('');
  const [username, setUsername] = useState('');

  return (
    <Sheet open={isOpen} onOpenChange={onOpenChange}>
      <SheetContent
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-1/2 h-fit rounded-lg"
        style={{ transition: 'none', animation: 'none' }}
        onOpenAutoFocus={(e) => e.preventDefault()}
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
          <div className="flex flex-col p-1 border rounded focus-within:border-black">
            <label className="text-xs">Display name</label>
            <input
              name="displayName"
              type="text"
              autoComplete="name"
              placeholder="Enter your display name"
              value={displayName}
              onChange={e => setDisplayName(e.target.value)}
              className="border-0 outline-none focus:border-none focus:ring-0 placeholder:text-s"
            />
          </div>
          <div className="flex flex-col p-1 border rounded">
            <label className="text-xs">Username</label>
            <input
              name="username"
              type="text"
              autoComplete="username"
              placeholder="Enter your username"
              value={username}
              onChange={e => setUsername(e.target.value)}
              className="border-0 outline-none focus:border-none focus:ring-0 placeholder:text-s"
            />
          </div>
        </div>
        <div className="p-4 flex gap-1.5 self-end">
          <button>Cancel</button>
          <button>Save</button>
        </div>
      </SheetContent>
    </Sheet>
  )
}
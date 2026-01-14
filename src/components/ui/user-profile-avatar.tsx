import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

export function UserProfileAvatar() {
  return (
    <Avatar className="h-32 w-32 m-auto">
      <AvatarImage src="/diego-carneiro-xFRxQX7wJEs-unsplash.jpg" />
      <AvatarFallback>CN</AvatarFallback>
    </Avatar>
  )
}

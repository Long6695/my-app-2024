import { Avatar, AvatarFallback } from '@/components/ui/avatar'
import { InputWithIcon } from '@/components/ui/input-with-icon'
import { BellDot, Heart, Search, Settings, Settings2 } from 'lucide-react'
import ThemeSwitcher from '@/components/shared/theme-switcher'

export default function Navbar() {
  return (
    <div className="flex items-center justify-between h-32 px-2">
      <div className="flex items-center gap-10">
        <h3>Logo</h3>
        <InputWithIcon
          RightIcon={Settings2}
          LeftIcon={Search}
          placeholder="Search something here"
          className="max-w-full w-[500px]"
          inputClassName="rounded-full"
        />
      </div>
      <div className="flex items-center gap-4">
        <ThemeSwitcher />
        <Heart className="cursor-pointer" />
        <BellDot className="cursor-pointer" />
        <Settings className="cursor-pointer" />
        <Avatar>
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
      </div>
    </div>
  )
}

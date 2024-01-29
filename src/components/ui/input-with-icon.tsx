import { Input } from '@/components/ui/input'
import { LucideIcon } from 'lucide-react'
import React from 'react'
import { cn } from '@/lib/utils'

export interface InputWithIconProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  RightIcon?: LucideIcon
  LeftIcon?: LucideIcon
  inputClassName?: React.InputHTMLAttributes<HTMLInputElement>['className']
}
export function InputWithIcon({
  RightIcon,
  LeftIcon,
  className,
  inputClassName,
  ...props
}: InputWithIconProps) {
  return (
    <div className={cn('relative flex items-center', className)}>
      {LeftIcon && (
        <div className="absolute top-1/2 -translate-y-1/2 left-2">
          <LeftIcon />
        </div>
      )}
      <Input className={cn('px-10', inputClassName)} {...props} />
      {RightIcon && (
        <div className="absolute top-1/2 -translate-y-1/2 right-2">
          <RightIcon />
        </div>
      )}
    </div>
  )
}

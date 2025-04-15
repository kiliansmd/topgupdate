import type React from "react"
import { cn } from "@/lib/utils"

interface GlassCardProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode
  className?: string
}

export default function GlassCard({ children, className, ...props }: GlassCardProps) {
  return (
    <div className={cn("bg-card border border-border rounded-lg p-6", className)} {...props}>
      {children}
    </div>
  )
}

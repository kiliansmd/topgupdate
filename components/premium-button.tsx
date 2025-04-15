"use client"

import { type ReactNode, useState } from "react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

interface PremiumButtonProps {
  children: ReactNode
  className?: string
  variant?: "primary" | "secondary" | "outline" | "ghost"
  size?: "default" | "sm" | "lg" | "xl"
  onClick?: () => void
  disabled?: boolean
  type?: "button" | "submit" | "reset"
  icon?: ReactNode
  iconPosition?: "left" | "right"
  fullWidth?: boolean
  href?: string
  animateGlow?: boolean
}

export default function PremiumButton({
  children,
  className = "",
  variant = "primary",
  size = "default",
  onClick,
  disabled = false,
  type = "button",
  icon,
  iconPosition = "right",
  fullWidth = false,
  href,
  animateGlow = true,
}: PremiumButtonProps) {
  const [isHovered, setIsHovered] = useState(false)

  // Verbessere die Varianten für mehr Konsistenz und Eleganz

  const variantClasses = {
    primary: "bg-gradient-to-r from-primary-600 to-primary-800 hover:from-primary-700 hover:to-primary-900 text-white",
    secondary: "bg-black/40 backdrop-blur-md border border-white/10 hover:border-white/20 text-white",
    outline: "bg-transparent border border-white/20 hover:border-white/40 text-white",
    ghost: "bg-transparent hover:bg-white/5 text-white",
  }

  const sizeClasses = {
    sm: "px-4 py-2 text-sm",
    default: "px-6 py-3",
    lg: "px-8 py-4 text-lg",
    xl: "px-10 py-5 text-xl",
  }

  // Verbessere die Glow-Animation für einen eleganteren Effekt
  const shadowClasses = {
    primary: "shadow-lg shadow-primary-600/20 hover:shadow-xl hover:shadow-primary-600/30",
    secondary: "shadow-md shadow-black/20 hover:shadow-lg hover:shadow-black/30",
    outline: "shadow-sm shadow-black/10 hover:shadow-md hover:shadow-black/15",
    ghost: "",
  }

  return (
    <motion.div
      className={cn("relative inline-block", fullWidth && "w-full", disabled && "opacity-60 pointer-events-none")}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
    >
      {variant === "primary" && animateGlow && (
        <motion.div
          className="absolute -inset-1 rounded-lg bg-gradient-to-r from-primary-600/40 to-primary-800/40 opacity-0 blur-xl"
          animate={{ opacity: isHovered ? 0.6 : 0 }}
          transition={{ duration: 0.4 }}
        />
      )}

      <Button
        className={cn(
          "relative rounded-md transition-all duration-300 overflow-hidden",
          variantClasses[variant],
          sizeClasses[size],
          shadowClasses[variant],
          fullWidth && "w-full",
          className,
        )}
        onClick={onClick}
        disabled={disabled}
        type={type}
        asChild={!!href}
      >
        {href ? (
          <a href={href}>
            {iconPosition === "left" && icon && <span className="mr-2">{icon}</span>}
            {children}
            {iconPosition === "right" && icon && <span className="ml-2">{icon}</span>}
          </a>
        ) : (
          <>
            {iconPosition === "left" && icon && <span className="mr-2">{icon}</span>}
            {children}
            {iconPosition === "right" && icon && <span className="ml-2">{icon}</span>}
          </>
        )}
      </Button>
    </motion.div>
  )
}

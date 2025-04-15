import type React from "react"
interface AnimatedGradientBorderProps {
  children: React.ReactNode
  className?: string
  containerClassName?: string
  gradientClassName?: string
}

export default function AnimatedGradientBorder({
  children,
  className = "",
  containerClassName = "",
  gradientClassName = "",
}: AnimatedGradientBorderProps) {
  return (
    <div className={`relative p-[1px] overflow-hidden rounded-xl ${containerClassName}`}>
      <div
        className={`absolute inset-0 rounded-xl bg-gradient-to-r from-indigo-500 via-purple-500 to-indigo-500 animate-gradient-x ${gradientClassName}`}
      />
      <div className={`relative bg-black rounded-xl z-10 ${className}`}>{children}</div>
    </div>
  )
}

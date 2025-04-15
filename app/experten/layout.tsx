import type React from "react"
import BetaBarLight from "@/components/beta-bar-light"
import NavbarLight from "@/components/navbar-light"
import FooterLight from "@/components/footer-light"

export default function ExpertenLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
      <BetaBarLight />
      <NavbarLight />
      <main>{children}</main>
      <FooterLight />
    </>
  )
}

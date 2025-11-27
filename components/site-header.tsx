"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { NavMenu } from "@/components/nav-menu"
import { LocaleSwitcher } from "@/components/locale-switcher"
import { useMessages } from "@/hooks/use-messages"

export function SiteHeader() {
  const { t } = useMessages()

  return (
    <header className="border-b border-white/10 bg-black/20 backdrop-blur-xl sticky top-0 z-50">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <Link href="/">
          <div className="flex items-center gap-2">
            <span className="text-2xl font-horror text-primary drop-shadow-md">DeadlyBlox</span>
          </div>
        </Link>
        <nav className="flex items-center gap-4">
          <NavMenu />
          <LocaleSwitcher />
          <Button 
            asChild
            className="bg-primary text-black hover:bg-primary/90 font-bold"
          >
            <a 
              href="https://www.roblox.com/games/125810438250765/Deadly-Delivery" 
              target="_blank" 
              rel="noopener noreferrer"
            >
              {t("common.playNow")}
            </a>
          </Button>
        </nav>
      </div>
    </header>
  )
}


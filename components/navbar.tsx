"use client"

import Link from "next/link"
import { siteConfig } from '@/config/site'
import SearchBar from './search-bar'
import { LocaleSwitcher } from './locale-switcher'
import { Button } from "@/components/ui/button"
import { Menu } from "lucide-react"
import { useState } from "react"

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <nav className="border-b border-white/10 bg-black/20 backdrop-blur-xl sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between gap-4">
          <Link href="/" className="flex-shrink-0">
            <span className="text-2xl font-horror text-primary drop-shadow-md hover:text-primary/80 transition-colors">
              {siteConfig.name}
            </span>
          </Link>
          
          {/* Desktop Search */}
          <div className="flex-1 max-w-md hidden lg:block">
            <SearchBar />
          </div>

          {/* Desktop Navigation - All items displayed */}
          <div className="hidden lg:flex items-center gap-3 flex-shrink-0">
            {siteConfig.mainNav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors whitespace-nowrap"
              >
                {item.title}
              </Link>
            ))}
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
                Play Now
              </a>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden flex items-center gap-2">
            <LocaleSwitcher />
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="text-muted-foreground hover:text-primary transition-colors p-2"
            >
              <Menu className="w-6 h-6" />
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden pb-4 border-t border-white/10 mt-4 pt-4">
            <div className="mb-4">
              <SearchBar />
            </div>
            <div className="space-y-2">
              {siteConfig.mainNav.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="block px-4 py-2 text-sm font-medium text-muted-foreground hover:text-primary hover:bg-primary/10 rounded-lg transition-colors"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item.title}
                </Link>
              ))}
              <Button 
                asChild
                className="w-full mt-4 bg-primary text-black hover:bg-primary/90 font-bold"
              >
                <a 
                  href="https://www.roblox.com/games/125810438250765/Deadly-Delivery" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Play Now
                </a>
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}


"use client"

import * as React from "react"
import Link from "next/link"
import { ChevronDown, BookOpen, Sword, Car, Map } from "lucide-react"
import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

export function NavMenu() {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" className="text-muted-foreground hover:text-primary hover:bg-primary/10">
          <BookOpen className="mr-2 h-4 w-4" />
          Wiki
          <ChevronDown className="ml-2 h-4 w-4" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="start" className="w-56 bg-black/95 border-white/10 backdrop-blur-xl">
        <DropdownMenuItem asChild>
          <Link href="/wiki" className="flex items-center cursor-pointer">
            <BookOpen className="mr-2 h-4 w-4" />
            <span>Wiki Home</span>
          </Link>
        </DropdownMenuItem>
        <DropdownMenuItem asChild>
          <Link href="/wiki/weapons" className="flex items-center cursor-pointer">
            <Sword className="mr-2 h-4 w-4" />
            <span>Weapons Database</span>
          </Link>
        </DropdownMenuItem>
        <DropdownMenuItem asChild>
          <Link href="/wiki/vehicles" className="flex items-center cursor-pointer">
            <Car className="mr-2 h-4 w-4" />
            <span>Vehicles Database</span>
          </Link>
        </DropdownMenuItem>
        <DropdownMenuItem asChild>
          <Link href="/guide" className="flex items-center cursor-pointer">
            <Map className="mr-2 h-4 w-4" />
            <span>Game Guide</span>
          </Link>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}


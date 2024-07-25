/**
 * v0 by Vercel.
 * @see https://v0.dev/t/tVU6MfqZAg8
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */

import Link from "next/link"
import { DropdownMenu, DropdownMenuTrigger, DropdownMenuContent, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuRadioGroup, DropdownMenuRadioItem, DropdownMenuItem } from "./ui/dropdown-menu"
import React from "react"
import { Brain, History, House, Receipt, Settings } from "lucide-react"

export default function Sidebar() {
  return (
    
      
      <div className="hidden w-44 lg:flex min-h-screen  ">
        <nav className="hidden flex-col border-r bg-background px-4 py-6 lg:flex lg:w-64 lg:flex-1 lg:gap-6 lg:px-6 lg:py-10">
        <Link
                  href="/dashboard"
                  className="group flex h-10 w-10 shrink-0 items-center justify-center gap-2 rounded-full bg-primary text-lg font-semibold text-primary-foreground md:text-base"
                  prefetch={false}
                >
                  <Brain size={30} />
                  <span className="sr-only">Acme Inc</span>
                </Link>
                <Link href="/dashboard" className="flex items-center hover:text-foreground gap-4 px-2.5 text-muted-foreground" prefetch={false}>
                <House size={25} />
                  Home
                </Link>
                <Link
                  href="/history"
                  className="flex items-center gap-4 px-2.5 text-muted-foreground hover:text-foreground"
                  prefetch={false}
                >
                  <History size={25} />
                  History
                </Link>
                <Link
                  href="/billing"
                  className="flex items-center gap-4 px-2.5 text-muted-foreground hover:text-foreground"
                  prefetch={false}
                >
                   <Receipt size={25} />
                  Billing
                </Link>
                <Link
                  href="/setting"
                  className="flex items-center gap-4 px-2.5 text-muted-foreground hover:text-foreground"
                  prefetch={false}
                >
                  <Settings size={25}/>
                  Settings
                </Link>
        </nav>

      </div>
    
  )
}

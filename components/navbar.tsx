"use client"

import { useEffect, useState } from "react"
import Link from "next/link"
import { Menu, X, Music2 } from "lucide-react"
import { cn } from "@/lib/utils"
import { navLinks, site } from "@/lib/site"

export function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16)
    onScroll()
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-300",
        scrolled
          ? "border-b border-border/60 bg-background/85 backdrop-blur-md shadow-sm"
          : "bg-transparent",
      )}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-3.5 sm:px-6 lg:px-8">
        <Link href="#home" className="flex items-center gap-3 transition-transform hover:scale-105 active:scale-95 duration-200" aria-label={`${site.name} home`}>
          <span className="flex size-12 items-center justify-center rounded-full bg-burgundy text-burgundy-foreground shadow-sm">
            <Music2 className="size-6" />
          </span>
          <span className="flex flex-col leading-none">
            <span className="font-heading text-2xl font-black tracking-tight text-foreground">Surabhi</span>
            <span className="text-[0.75rem] font-black uppercase tracking-[0.24em] text-burgundy mt-0.5">
              Karaoke Lounge
            </span>
          </span>
        </Link>

        <div className="hidden items-center gap-8 lg:flex">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm font-bold text-foreground/80 transition-all duration-200 hover:text-burgundy hover:scale-110 active:scale-95"
            >
              {link.label}
            </Link>
          ))}
        </div>

        <button
          type="button"
          className="inline-flex size-10 items-center justify-center rounded-full text-foreground lg:hidden"
          onClick={() => setOpen((v) => !v)}
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
        >
          {open ? <X className="size-6" /> : <Menu className="size-6" />}
        </button>
      </nav>

      {open && (
        <div className="border-t border-border/60 bg-background/95 backdrop-blur-md lg:hidden">
          <div className="mx-auto flex max-w-7xl flex-col gap-1 px-4 py-4 sm:px-6">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="rounded-xl px-3 py-2.5 text-base font-bold text-foreground/85 transition-colors hover:bg-burgundy/10 hover:text-burgundy"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </header>
  )
}

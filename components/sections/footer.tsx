import Link from "next/link"
import { Music2, Phone, MapPin, Mic2 } from "lucide-react"
import { navLinks, site } from "@/lib/site"
import { InstagramIcon, FacebookIcon, YoutubeIcon } from "@/components/icons/social"

const marqueeItems = [
  "🎤 Karaoke", "🎵 Jamming", "🎶 Solo Practice", "🎸 Groups",
  "🎹 Family Gatherings", "🎼 Open Mic", "🎧 Premium Sound", "⭐ 5.0 Rating",
  "🎤 Karaoke", "🎵 Jamming", "🎶 Solo Practice", "🎸 Groups",
  "🎹 Family Gatherings", "🎼 Open Mic", "🎧 Premium Sound", "⭐ 5.0 Rating",
]

export function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-border">
      {/* Subtle top gradient from burgundy */}
      <div className="absolute inset-x-0 top-0 h-[3px] bg-gradient-to-r from-burgundy via-gold to-burgundy" />

      {/* Bg decorations */}
      <span className="pointer-events-none absolute right-[8%] top-8 hidden text-7xl text-burgundy/[0.04] select-none font-bold lg:block" aria-hidden>♪</span>
      <span className="pointer-events-none absolute left-[28%] bottom-10 hidden text-5xl text-gold/[0.06] select-none font-bold lg:block" aria-hidden>♫</span>

      {/* Glow */}
      <div className="pointer-events-none absolute -left-20 bottom-0 size-64 rounded-full bg-burgundy/4 blur-[80px]" aria-hidden />

      <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8 relative z-10">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">

          {/* Brand column */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3">
              <span className="flex size-11 items-center justify-center rounded-full bg-burgundy text-white shadow-[3px_3px_0px_0px_var(--gold)]">
                <Music2 className="size-5" />
              </span>
              <div className="flex flex-col leading-none">
                <span className="font-heading text-xl font-bold tracking-tight text-foreground">Surabhi</span>
                <span className="text-[0.62rem] font-bold uppercase tracking-[0.2em] text-muted-foreground">
                  Karaoke Lounge
                </span>
              </div>
            </div>

            <p className="mt-5 max-w-sm text-base italic text-muted-foreground font-medium leading-relaxed">
              {site.tagline}
            </p>

            <div className="mt-4 inline-flex items-center gap-2 rounded-full border border-burgundy/25 bg-burgundy/6 px-4 py-2">
              <Mic2 className="size-3.5 text-burgundy" />
              <span className="text-xs font-bold text-burgundy">Sing. Jam. Create Memories.</span>
            </div>

            <div className="mt-5 flex gap-3">
              {[
                { icon: InstagramIcon, label: "Instagram" },
                { icon: FacebookIcon, label: "Facebook" },
                { icon: YoutubeIcon, label: "YouTube" },
              ].map((s) => (
                <Link
                  key={s.label}
                  href="#"
                  aria-label={s.label}
                  className="flex size-10 items-center justify-center rounded-full border-2 border-border bg-card text-muted-foreground transition-all duration-200 hover:border-burgundy hover:bg-burgundy hover:text-white hover:scale-110 hover:-translate-y-0.5 active:scale-95"
                >
                  <s.icon className="size-4" />
                </Link>
              ))}
            </div>
          </div>

          {/* Nav links */}
          <div>
            <h3 className="font-heading text-sm font-extrabold uppercase tracking-[0.12em] text-foreground">Explore</h3>
            <ul className="mt-4 space-y-2.5">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="flex items-center gap-1.5 text-sm text-muted-foreground font-medium transition-all duration-150 hover:text-burgundy hover:translate-x-1"
                  >
                    <span className="size-1 rounded-full bg-burgundy/30" />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact info */}
          <div>
            <h3 className="font-heading text-sm font-extrabold uppercase tracking-[0.12em] text-foreground">Contact</h3>
            <ul className="mt-4 space-y-4">
              <li className="flex items-start gap-3">
                <span className="mt-0.5 flex size-7 shrink-0 items-center justify-center rounded-lg bg-burgundy/8 text-burgundy">
                  <Phone className="size-3.5" />
                </span>
                <span className="text-sm text-muted-foreground font-medium leading-relaxed">{site.phoneDisplay}</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-0.5 flex size-7 shrink-0 items-center justify-center rounded-lg bg-burgundy/8 text-burgundy">
                  <MapPin className="size-3.5" />
                </span>
                <span className="text-sm text-muted-foreground font-medium leading-relaxed">{site.address}</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Mini marquee strip */}
        <div className="mt-10 marquee-strip overflow-hidden rounded-2xl border border-border/50 bg-secondary/60 py-2.5">
          <div className="marquee-inner">
            {marqueeItems.map((item, i) => (
              <span key={i} className="mx-5 inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-widest text-muted-foreground/50 whitespace-nowrap">
                {item}
                <span className="text-burgundy/25">·</span>
              </span>
            ))}
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-6 border-t border-border pt-6 flex flex-col items-center gap-2 sm:flex-row sm:justify-between">
          <p className="text-sm text-muted-foreground">
            &copy; {new Date().getFullYear()} {site.name}. All rights reserved.
          </p>
          <p className="text-xs text-muted-foreground/60">
            Bengaluru&apos;s home for karaoke &amp; music jamming
          </p>
        </div>
      </div>
    </footer>
  )
}

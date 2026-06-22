import Image from "next/image"
import { Reveal } from "@/components/reveal"
import { MusicNoteDoodle, SingleNoteDoodle, SparkleDoodle, MusicWaveDoodle } from "@/components/doodles"

const photos = [
  {
    src: "/images/lounge-2.jpeg",
    alt: "Surabhi Karaoke Lounge cozy singing setup",
    label: "🎤 Main Lounge Stage",
  },
  {
    src: "/images/lounge-20.jpeg",
    alt: "Premium sound system and karaoke screen",
    label: "🎧 Pro Audio & Screen",
  },
  {
    src: "/images/lounge-7.jpeg",
    alt: "Comfy seating and warm ambient stage lighting",
    label: "🛋️ Birthday Celebrations",
  },
  {
    src: "/images/lounge-8.jpeg",
    alt: "Singing stage with professional mic stand",
    label: "🌟 Cozy Stage Set",
  },
  {
    src: "/images/lounge-10.jpeg",
    alt: "Musical instrument setup for jamming",
    label: "🎸 Instruments & Jamming",
  },
]

export function Gallery() {
  return (
    <section id="gallery" className="bg-secondary/40 py-20 lg:py-28 relative overflow-hidden">
      {/* Background doodles */}
      <MusicNoteDoodle className="absolute left-[8%] bottom-[12%] size-16 text-burgundy/10 animate-float-slow hidden lg:block" />
      <SingleNoteDoodle className="absolute right-[5%] top-[15%] size-14 text-gold/15 animate-float-reverse hidden lg:block" />
      <SparkleDoodle className="absolute left-[40%] top-[8%] size-10 text-burgundy/10 animate-pulse-glow hidden lg:block" />
      <MusicWaveDoodle className="absolute left-[12%] top-[35%] w-[260px] text-burgundy/8 hidden lg:block" />

      <div className="pointer-events-none absolute -left-20 top-1/3 size-72 rounded-full border border-burgundy/5" aria-hidden />
      <div className="pointer-events-none absolute -right-16 bottom-1/4 size-56 rounded-full border border-gold/8" aria-hidden />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
        <Reveal className="text-center">
          <span className="inline-block rounded-full bg-burgundy/10 border border-burgundy/20 px-3 py-1 text-xs font-bold uppercase tracking-[0.18em] text-burgundy">
            The Experience
          </span>
          <h2 className="mt-4 font-heading text-3xl font-extrabold leading-tight text-balance text-foreground sm:text-4xl">
            See It. Feel It. <span className="text-burgundy">Live It.</span>
          </h2>
          <p className="mt-4 text-base text-muted-foreground font-medium max-w-lg mx-auto">
            From intimate solo sessions to lively family celebrations — every visit at Surabhi is a moment to cherish.
          </p>
        </Reveal>

        {/* ── Photo Mosaic ── */}
        <div className="mt-12 grid grid-cols-2 gap-3 lg:grid-cols-3" style={{ gridTemplateRows: 'repeat(2, 240px)' }}>
          {/* Hero photo — spans 2 columns on large screens */}
          <Reveal className="col-span-2 lg:col-span-2" delay={0}>
            <div className="group relative h-60 lg:h-full overflow-hidden rounded-[1.75rem] border-4 border-burgundy shadow-[6px_6px_0px_0px_var(--gold)] cursor-pointer">
              <Image
                src={photos[0].src}
                alt={photos[0].alt}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/45 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="absolute bottom-4 left-4 translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                <span className="rounded-full bg-white/90 px-3 py-1.5 text-xs font-bold text-foreground shadow">
                  {photos[0].label}
                </span>
              </div>
            </div>
          </Reveal>

          {/* Right top */}
          <Reveal delay={80}>
            <div className="group relative h-60 overflow-hidden rounded-[1.75rem] border-2 border-gold/60 shadow-sm cursor-pointer hover:border-gold hover:shadow-[4px_4px_0px_0px_var(--gold)] transition-all duration-300">
              <Image
                src={photos[1].src}
                alt={photos[1].alt}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="absolute bottom-4 left-4 translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                <span className="rounded-full bg-white/90 px-3 py-1.5 text-xs font-bold text-foreground shadow">
                  {photos[1].label}
                </span>
              </div>
            </div>
          </Reveal>

          {/* Bottom row — 3 photos */}
          {photos.slice(2).map((photo, i) => (
            <Reveal key={photo.src} delay={160 + i * 80}>
              <div className="group relative h-60 overflow-hidden rounded-[1.75rem] border-2 border-border/60 shadow-sm hover:border-burgundy hover:shadow-[4px_4px_0px_0px_var(--burgundy)] transition-all duration-300 cursor-pointer">
                <Image
                  src={photo.src}
                  alt={photo.alt}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute bottom-4 left-4 translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                  <span className="rounded-full bg-white/90 px-3 py-1.5 text-xs font-bold text-foreground shadow">
                    {photo.label}
                  </span>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}

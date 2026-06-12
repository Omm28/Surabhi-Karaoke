import Image from "next/image"
import Link from "next/link"
import { Mic2, Music, Users, Star, Headphones, Music2, Music4, AudioLines, Disc3 } from "lucide-react"
import { WhatsAppButton } from "@/components/whatsapp-button"
import { MusicNoteDoodle, SingleNoteDoodle, SparkleDoodle, MusicWaveDoodle, HeartNoteDoodle } from "@/components/doodles"

const marqueeItems = [
  "🎤 Karaoke Sessions", "🎵 Music Jamming", "🎶 Solo Practice",
  "🎸 Group Bookings", "🎹 Family Gatherings", "🎼 Open Mic",
  "🎧 Premium Sound Setup", "⭐ 5.0 Google Rating",
  "🎤 Karaoke Sessions", "🎵 Music Jamming", "🎶 Solo Practice",
  "🎸 Group Bookings", "🎹 Family Gatherings", "🎼 Open Mic",
  "🎧 Premium Sound Setup", "⭐ 5.0 Google Rating",
]

export function Hero() {
  return (
    <>
      <section
        id="home"
        className="relative overflow-hidden pt-24 pb-0 sm:pt-28 lg:pt-32"
      >
        {/* ── Background floating decorations ── */}
        <div className="pointer-events-none absolute -left-20 -top-20 size-[500px] rounded-full bg-burgundy/6 blur-[120px]" aria-hidden />
        <div className="pointer-events-none absolute -right-20 top-1/3 size-[400px] rounded-full bg-gold/8 blur-[100px]" aria-hidden />

        {/* Playful background doodles & music notes */}
        <MusicNoteDoodle className="absolute left-[3%] top-[18%] size-16 text-burgundy animate-float-slow hidden lg:block" />
        <SingleNoteDoodle className="absolute right-[5%] top-[12%] size-14 text-gold animate-float-reverse [animation-delay:1.5s] hidden lg:block" />
        <HeartNoteDoodle className="absolute left-[40%] top-[14%] size-12 text-burgundy animate-bounce-note hidden lg:block" />
        <SparkleDoodle className="absolute left-[12%] top-[55%] size-8 text-gold animate-pulse-glow hidden lg:block" />
        <SparkleDoodle className="absolute right-[18%] top-[45%] size-10 text-burgundy animate-pulse-glow [animation-delay:2s] hidden lg:block" />
        <MusicWaveDoodle className="absolute left-[10%] bottom-[8%] w-[250px] text-burgundy/20 hidden lg:block" />
        <MusicWaveDoodle className="absolute right-[8%] top-[25%] w-[280px] text-gold/30 hidden lg:block" />

        {/* Spinning vinyl */}
        <div className="pointer-events-none absolute -right-10 top-24 hidden size-52 text-burgundy/5 animate-spin-slow lg:block" aria-hidden>
          <Disc3 className="size-full" />
        </div>

        {/* Scattered music icons */}
        <Music className="pointer-events-none absolute left-[6%] top-32 hidden size-9 text-burgundy/12 animate-float-slow lg:block" />
        <Mic2 className="pointer-events-none absolute right-[9%] top-44 hidden size-8 text-gold/20 animate-float-reverse [animation-delay:1s] lg:block" />
        <Headphones className="pointer-events-none absolute left-[22%] top-28 hidden size-7 text-burgundy/8 animate-bounce-note [animation-delay:2s] lg:block" />
        <Music2 className="pointer-events-none absolute right-[22%] top-32 hidden size-6 text-gold/12 animate-float-slow [animation-delay:0.5s] lg:block" />
        <AudioLines className="pointer-events-none absolute left-[50%] top-28 hidden size-6 text-burgundy/6 animate-float-reverse [animation-delay:3s] lg:block" />

        {/* ── Hero content ── */}
        <div className="mx-auto grid max-w-7xl items-center gap-10 px-4 sm:px-6 lg:grid-cols-2 lg:gap-14 lg:px-8 pb-16 lg:pb-24">
          {/* Left — copy */}
          <div className="animate-fade-up text-center lg:text-left">
            {/* Badge */}
            <span className="inline-flex items-center gap-2 rounded-full border-2 border-burgundy/30 bg-burgundy/8 px-4 py-1.5 text-xs font-bold uppercase tracking-[0.18em] text-burgundy">
              <span className="size-1.5 animate-pulse rounded-full bg-burgundy" />
              Bengaluru&apos;s Favourite Karaoke Lounge
            </span>

            <h1 className="mt-6 font-heading text-[2.6rem] font-extrabold leading-[1.06] text-balance text-foreground sm:text-5xl lg:text-6xl xl:text-7xl">
              Sing. Jam.
              <br />
              <span className="relative inline-block text-burgundy">
                Create Memories.
                {/* Squiggly underline — sits below the baseline */}
                <svg
                  aria-hidden
                  className="absolute -bottom-4 left-0 w-full overflow-visible"
                  viewBox="0 0 300 16"
                  fill="none"
                  preserveAspectRatio="none"
                >
                  <path
                    d="M2 10 Q38 4 75 10 Q112 16 150 10 Q188 4 225 10 Q262 16 298 10"
                    stroke="currentColor"
                    strokeWidth="3.5"
                    strokeLinecap="round"
                    className="text-gold"
                  />
                </svg>
              </span>
            </h1>

            <p className="mx-auto mt-8 max-w-lg text-pretty text-base leading-relaxed text-muted-foreground sm:text-lg lg:mx-0">
              A welcoming daytime retreat for music lovers of all ages. Rehearse solo, jam with friends, or celebrate with family — no recording pressure, just pure musical joy.
            </p>

            {/* Trust signals */}
            <div className="mt-7 flex flex-wrap items-center justify-center gap-5 lg:justify-start">
              <div className="flex items-center gap-2">
                <div className="flex gap-0.5">
                  {[1,2,3,4,5].map(i => (
                    <Star key={i} className="size-4 fill-gold text-gold" />
                  ))}
                </div>
                <span className="text-sm font-bold text-foreground">5.0 Google</span>
              </div>
              <div className="h-4 w-px bg-border" />
              <div className="flex items-center gap-2">
                <Users className="size-4 text-burgundy" />
                <span className="text-sm font-bold text-foreground">All Ages Welcome</span>
              </div>
              <div className="h-4 w-px bg-border" />
              <div className="flex items-center gap-2">
                <Music4 className="size-4 text-burgundy" />
                <span className="text-sm font-bold text-foreground">Open 12pm – 6pm</span>
              </div>
            </div>

            {/* CTAs */}
            <div className="mt-9 flex flex-col items-center gap-4 sm:flex-row sm:justify-center lg:justify-start">
              <WhatsAppButton
                size="lg"
                className="shadow-pop-gold font-bold bg-[#25D366] hover:bg-[#25D366] text-white hover:text-white min-w-[200px]"
              />
              <Link
                href="#about"
                className="inline-flex min-w-[200px] items-center justify-center rounded-full font-bold shadow-pop-burgundy bg-card px-7 py-3.5 text-base text-burgundy transition-all"
              >
                Explore the Lounge →
              </Link>
            </div>
          </div>

          {/* Right — image stack */}
          <div className="animate-fade-up [animation-delay:200ms]">
            <div className="relative">
              {/* Glow behind */}
              <div className="absolute -inset-4 -z-10 rounded-[2.5rem] bg-gradient-to-br from-burgundy/20 via-gold/10 to-transparent blur-2xl" aria-hidden />

              {/* Main image */}
              <div className="overflow-hidden rounded-[2.5rem] border-4 border-burgundy shadow-[8px_8px_0px_0px_var(--gold)] bg-card">
                <Image
                  src="/images/lounge-1.jpeg"
                  alt="Cozy interior and professional microphone setup at Surabhi Karaoke Lounge"
                  width={800}
                  height={800}
                  priority
                  className="h-full w-full object-cover aspect-square"
                />
              </div>

              {/* Floating stat cards */}
              <div className="absolute -left-5 top-8 hidden rounded-2xl border-2 border-gold/60 bg-card/95 px-4 py-3 shadow-lg backdrop-blur-sm lg:flex items-center gap-3 animate-scale-in [animation-delay:600ms]">
                <span className="flex size-9 items-center justify-center rounded-full bg-burgundy text-white">
                  <Star className="size-4 fill-white" />
                </span>
                <div>
                  <p className="text-xs text-muted-foreground font-medium">Google Rating</p>
                  <p className="text-sm font-extrabold text-foreground">5.0 ★ Reviews</p>
                </div>
              </div>

              <div className="absolute -bottom-5 left-1/2 -translate-x-1/2 rounded-2xl border-2 border-burgundy/40 bg-card/95 px-5 py-3 shadow-lg backdrop-blur-sm flex items-center gap-3 animate-scale-in [animation-delay:700ms] whitespace-nowrap">
                <span className="flex size-9 items-center justify-center rounded-full bg-burgundy text-white">
                  <Mic2 className="size-4" />
                </span>
                <p className="text-sm font-bold text-foreground">
                  Quality time, <span className="text-burgundy">through music</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Scrolling Marquee Tape ── */}
      <div className="marquee-strip overflow-hidden border-y-[3px] border-burgundy bg-burgundy py-3">
        <div className="marquee-inner">
          {marqueeItems.map((item, i) => (
            <span
              key={i}
              className="mx-6 inline-flex items-center gap-2 text-sm font-bold uppercase tracking-widest text-white whitespace-nowrap"
            >
              {item}
              <span className="text-white/30">✦</span>
            </span>
          ))}
        </div>
      </div>
    </>
  )
}

import { Settings2, Snowflake, Users, Smile, Volume2, Sparkles, Music, Mic2 } from "lucide-react"
import { Reveal } from "@/components/reveal"

const reasons = [
  { icon: Settings2, title: "Professional Karaoke Setup", text: "Studio-grade gear ready for every voice." },
  { icon: Snowflake, title: "Air-Conditioned Studio", text: "Cool, cozy comfort throughout your session." },
  { icon: Users, title: "Solo & Groups Welcome", text: "Whether one or many, there's room for you." },
  { icon: Smile, title: "Friendly & Welcoming", text: "Warm hospitality that feels like home." },
  { icon: Volume2, title: "High-Quality Audio", text: "Rich, balanced sound that lifts every song." },
  { icon: Sparkles, title: "Memorable Moments", text: "A setting built for moments you'll treasure." },
]

export function WhyChoose() {
  return (
    <section className="bg-burgundy py-20 lg:py-28 relative overflow-hidden">
      {/* Soft glow blobs */}
      <div className="absolute -left-20 -top-20 size-72 rounded-full bg-white/5 blur-3xl pointer-events-none" />
      <div className="absolute -right-20 -bottom-20 size-72 rounded-full bg-white/5 blur-3xl pointer-events-none" />

      {/* Decorative rings */}
      <div className="pointer-events-none absolute left-[10%] top-[15%] size-64 rounded-full border border-white/6" aria-hidden />
      <div className="pointer-events-none absolute right-[8%] bottom-[10%] size-56 rounded-full border border-white/4" aria-hidden />

      {/* Floating icons — USE EXPLICIT WHITE so they're visible on red */}
      <Music className="pointer-events-none absolute left-[5%] top-16 hidden size-8 text-white/10 animate-float-slow lg:block" />
      <Mic2 className="pointer-events-none absolute right-[6%] top-24 hidden size-7 text-white/8 animate-float-reverse [animation-delay:1s] lg:block" />

      {/* Unicode music notes */}
      <span className="pointer-events-none absolute left-[14%] bottom-14 hidden text-5xl font-bold text-white/6 select-none lg:block" aria-hidden>♪</span>
      <span className="pointer-events-none absolute right-[11%] top-16 hidden text-6xl font-bold text-white/5 select-none lg:block" aria-hidden>♫</span>
      <span className="pointer-events-none absolute left-[58%] bottom-10 hidden text-4xl font-bold text-white/4 select-none lg:block" aria-hidden>♬</span>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
        <Reveal className="mx-auto max-w-2xl text-center">
          {/* Label — white pill on red */}
          <span className="inline-block rounded-full border border-white/30 bg-white/10 px-3 py-1 text-xs font-bold uppercase tracking-[0.18em] text-white">
            Why Choose Surabhi
          </span>
          <h2 className="mt-4 font-heading text-3xl font-extrabold leading-tight text-balance text-white sm:text-4xl">
            Everything You Need for the <span className="underline decoration-white/40 underline-offset-4">Perfect Session</span>
          </h2>
          <p className="mt-4 text-base font-medium text-white/75 max-w-lg mx-auto">
            From world-class audio gear to a cozy, air-conditioned space — we&apos;ve thought of everything so you can just focus on the music.
          </p>
        </Reveal>

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {reasons.map((r, i) => (
            <Reveal key={r.title} delay={i * 70}>
              <div className="group flex items-start gap-4 rounded-[1.75rem] border border-white/12 bg-white/8 p-6 backdrop-blur-sm transition-all duration-300 hover:bg-white/15 hover:border-white/25 hover:-translate-y-1">
                {/* Icon badge — gold fill, dark text — clearly readable */}
                <span className="flex size-12 shrink-0 items-center justify-center rounded-2xl bg-gold text-gold-foreground shadow-[3px_3px_0px_0px_rgba(255,255,255,0.25)] group-hover:scale-110 group-hover:rotate-6 transition-all duration-300 border-2 border-white/20">
                  <r.icon className="size-5" />
                </span>
                <div>
                  {/* Explicitly white text */}
                  <h3 className="font-heading text-lg font-extrabold text-white">{r.title}</h3>
                  <p className="mt-1.5 text-sm leading-relaxed text-white/70 font-medium">{r.text}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}

import Image from "next/image"
import { Sparkles, Users, HandHeart, Settings2, Music, Mic2, Music4 } from "lucide-react"
import { Reveal } from "@/components/reveal"
import { MusicNoteDoodle, SingleNoteDoodle, SparkleDoodle, MusicWaveDoodle } from "@/components/doodles"

const values = [
  { icon: Sparkles, label: "Creativity", text: "Spark your inner artist in our inspired space." },
  { icon: Users, label: "Quality Time", text: "Memories made with people who matter most." },
  { icon: HandHeart, label: "Welcoming", text: "Warm, friendly atmosphere for every singer." },
  { icon: Settings2, label: "Professional", text: "Premium gear and refined ambience." },
]

export function About() {
  return (
    <section id="about" className="py-20 lg:py-28 relative overflow-hidden">
      {/* Floating decorations */}
      <div className="pointer-events-none absolute -right-16 top-0 size-[350px] rounded-full bg-gold/6 blur-[80px]" aria-hidden />
      
      {/* Background custom doodles */}
      <MusicNoteDoodle className="absolute left-[4%] top-[12%] size-16 text-burgundy/10 animate-float-slow hidden lg:block" />
      <SingleNoteDoodle className="absolute right-[8%] bottom-[15%] size-14 text-gold/15 animate-float-reverse hidden lg:block" />
      <SparkleDoodle className="absolute left-[38%] bottom-[8%] size-10 text-burgundy/15 animate-pulse-glow hidden lg:block" />
      <MusicWaveDoodle className="absolute right-[5%] top-[40%] w-[220px] text-burgundy/10 hidden lg:block" />

      <Music className="pointer-events-none absolute right-[7%] top-16 hidden size-9 text-burgundy/8 animate-float-reverse [animation-delay:1.5s] lg:block" />
      <Music4 className="pointer-events-none absolute left-[5%] bottom-24 hidden size-8 text-gold/12 animate-float-slow [animation-delay:3s] lg:block" />

      {/* Musical note bg symbols */}
      <span className="pointer-events-none absolute left-[2%] top-[40%] hidden text-[8rem] font-bold text-burgundy/[0.025] select-none leading-none lg:block" aria-hidden>♪</span>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-14 lg:grid-cols-2 lg:gap-20">

          {/* ── Image side ── */}
          <Reveal>
            <div className="relative">
              {/* Glow */}
              <div className="absolute -inset-4 -z-10 rounded-[2.5rem] bg-gradient-to-br from-burgundy/15 via-gold/8 to-transparent blur-2xl" aria-hidden />

              {/* Main photo — the red velvet sofa interior */}
              <div className="overflow-hidden rounded-[2.5rem] border-4 border-burgundy shadow-[8px_8px_0px_0px_var(--gold)]">
                <Image
                  src="/images/lounge-3.jpeg"
                  alt="Surabhi Karaoke Lounge interior — plush red velvet sofa and warm gold lighting"
                  width={800}
                  height={800}
                  className="h-full w-full object-cover aspect-square"
                />
              </div>

              {/* Overlay badge — top right */}
              <div className="absolute -right-4 -top-4 hidden rounded-2xl border-2 border-gold/70 bg-card px-4 py-3 shadow-lg lg:flex items-center gap-2.5 animate-scale-in [animation-delay:200ms]">
                <span className="flex size-9 items-center justify-center rounded-full bg-gold">
                  <Music className="size-4 text-gold-foreground" />
                </span>
                <div className="leading-tight">
                  <p className="text-xs text-muted-foreground font-medium">Established</p>
                  <p className="text-sm font-extrabold text-foreground">Since 2023</p>
                </div>
              </div>

              {/* Second image — equipment, stacked bottom-left */}
              <div className="absolute -bottom-8 -left-6 hidden size-36 overflow-hidden rounded-2xl border-[3px] border-gold shadow-[4px_4px_0px_0px_var(--burgundy)] lg:block animate-scale-in [animation-delay:400ms]">
                <Image
                  src="/images/lounge-5.jpeg"
                  alt="Professional microphone and sound mixer at Surabhi"
                  width={300}
                  height={300}
                  className="h-full w-full object-cover"
                />
              </div>
            </div>
          </Reveal>

          {/* ── Copy side ── */}
          <Reveal delay={100}>
            <span className="inline-block rounded-full bg-burgundy/10 border border-burgundy/20 px-3 py-1 text-xs font-bold uppercase tracking-[0.18em] text-burgundy">
              About Surabhi
            </span>

            <h2 className="mt-4 font-heading text-3xl font-extrabold leading-tight text-balance text-foreground sm:text-4xl xl:text-5xl">
              A Jam Space That <span className="text-burgundy">Inspires Connection</span>
            </h2>

            <p className="mt-5 text-pretty text-base leading-relaxed text-muted-foreground font-medium sm:text-lg">
              Surabhi Karaoke Lounge is an exclusive, cozy rehearsal and practice environment designed for karaoke singers and music enthusiasts. Whether you&apos;re honing solo performances, enjoying a musical afternoon with friends, or celebrating a family gathering — Surabhi is your pressure-free stage.
            </p>

            {/* Pull quote */}
            <blockquote className="mt-8 rounded-2xl border-l-[5px] border-burgundy bg-burgundy/5 px-6 py-5">
              <p className="font-heading text-lg font-semibold italic leading-relaxed text-foreground">
                &ldquo;With the best equipment and the right ambience, we make sure you have quality time — alone or with your friends.&rdquo;
              </p>
            </blockquote>

            {/* Value badges */}
            <div className="mt-8 grid grid-cols-2 gap-4">
              {values.map((v) => (
                <div
                  key={v.label}
                  className="group flex items-start gap-3 rounded-2xl border border-border/60 bg-card p-4 transition-all duration-200 hover:border-burgundy hover:shadow-[3px_3px_0px_0px_var(--burgundy)] hover:-translate-y-0.5"
                >
                  <span className="mt-0.5 flex size-9 shrink-0 items-center justify-center rounded-xl bg-burgundy/8 text-burgundy border border-burgundy/15 group-hover:bg-burgundy group-hover:text-white transition-all duration-200">
                    <v.icon className="size-4" />
                  </span>
                  <div>
                    <h3 className="text-sm font-bold text-foreground">{v.label}</h3>
                    <p className="mt-0.5 text-xs leading-relaxed text-muted-foreground">{v.text}</p>
                  </div>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}

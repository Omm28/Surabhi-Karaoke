import { Mic2, Music4, DoorOpen, PartyPopper, Users2, Coffee } from "lucide-react"
import { Reveal } from "@/components/reveal"

const offerings = [
  {
    icon: Mic2,
    title: "Karaoke Sessions",
    text: "Step up to the mic and sing your heart out in a space made for music lovers.",
    emoji: "🎤",
    color: "bg-burgundy/8 text-burgundy border-burgundy/15",
    hoverBg: "group-hover:bg-burgundy group-hover:text-white",
  },
  {
    icon: Music4,
    title: "Music Practice & Jamming",
    text: "Refine your craft or jam freely with a setup tuned for great sound.",
    emoji: "🎵",
    color: "bg-gold/10 text-gold-foreground border-gold/20",
    hoverBg: "group-hover:bg-gold group-hover:text-gold-foreground",
  },
  {
    icon: DoorOpen,
    title: "Studio for Individuals & Groups",
    text: "An intimate room for solo practice or a lively space for the whole crew.",
    emoji: "🎧",
    color: "bg-burgundy/8 text-burgundy border-burgundy/15",
    hoverBg: "group-hover:bg-burgundy group-hover:text-white",
  },
  {
    icon: PartyPopper,
    title: "Family Gatherings & Kitty Parties",
    text: "Host warm, memorable celebrations with the people who matter most.",
    emoji: "🎉",
    color: "bg-gold/10 text-gold-foreground border-gold/20",
    hoverBg: "group-hover:bg-gold group-hover:text-gold-foreground",
  },
  {
    icon: Users2,
    title: "Community & Social Meetups",
    text: "Bring music circles together and connect over a shared love of song.",
    emoji: "🎶",
    color: "bg-burgundy/8 text-burgundy border-burgundy/15",
    hoverBg: "group-hover:bg-burgundy group-hover:text-white",
  },
  {
    icon: Coffee,
    title: "Food & Beverage on Request",
    text: "Add refreshments to your session and keep the good times flowing.",
    emoji: "☕",
    color: "bg-gold/10 text-gold-foreground border-gold/20",
    hoverBg: "group-hover:bg-gold group-hover:text-gold-foreground",
  },
]

export function Offerings() {
  return (
    <section className="py-20 lg:py-28 relative overflow-hidden">
      {/* Decorative rings */}
      <div className="pointer-events-none absolute -left-28 top-1/4 size-80 rounded-full border-2 border-burgundy/5" aria-hidden />
      <div className="pointer-events-none absolute -right-20 bottom-1/3 size-64 rounded-full border-2 border-gold/6" aria-hidden />
      <div className="pointer-events-none absolute left-1/2 top-0 -translate-x-1/2 size-[600px] rounded-full bg-burgundy/3 blur-[100px]" aria-hidden />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
        <Reveal className="mx-auto max-w-2xl text-center">
          <span className="inline-block rounded-full bg-burgundy/10 border border-burgundy/20 px-3 py-1 text-xs font-bold uppercase tracking-[0.18em] text-burgundy">
            What We Offer
          </span>
          <h2 className="mt-4 font-heading text-3xl font-extrabold leading-tight text-balance text-foreground sm:text-4xl">
            Experiences Crafted <span className="text-burgundy">Around You</span>
          </h2>
          <p className="mt-4 text-base leading-relaxed text-muted-foreground font-medium">
            Every visit is about the feeling — the joy of singing, the warmth of company, and memories worth keeping.
          </p>
        </Reveal>

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {offerings.map((item, i) => (
            <Reveal key={item.title} delay={i * 70} as="article">
              <div className="group relative h-full rounded-[2rem] border-2 border-border/70 bg-card p-7 transition-all duration-300 hover:-translate-y-2 hover:border-burgundy hover:shadow-[6px_6px_0px_0px_var(--burgundy)] overflow-hidden">
                {/* Background emoji */}
                <span
                  className="pointer-events-none absolute -right-3 -bottom-3 text-7xl opacity-[0.05] select-none group-hover:opacity-[0.10] group-hover:scale-110 transition-all duration-500 origin-bottom-right"
                  aria-hidden
                >
                  {item.emoji}
                </span>

                {/* Icon */}
                <span className={`flex size-13 items-center justify-center rounded-2xl border ${item.color} ${item.hoverBg} transition-all duration-300 group-hover:scale-110 group-hover:rotate-6`}>
                  <item.icon className="size-6" />
                </span>

                <h3 className="mt-5 font-heading text-xl font-extrabold text-foreground">
                  {item.title}
                </h3>
                <p className="mt-2.5 text-sm leading-relaxed text-muted-foreground font-medium">
                  {item.text}
                </p>

                {/* Bottom accent line */}
                <div className="absolute bottom-0 left-0 h-1 w-0 bg-gradient-to-r from-burgundy to-gold rounded-b-[2rem] transition-all duration-500 group-hover:w-full" />
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}

"use client"

import { useState } from "react"
import { Star, ChevronLeft, ChevronRight, Quote } from "lucide-react"
import { Reveal } from "@/components/reveal"

const testimonials = [
  {
    name: "Lakshman Rao",
    role: "Hobbyist Karaoke Singer",
    initial: "L",
    quote:
      "If singing is your passion, this is the place for you. A vibrant, energetic atmosphere and a supportive community. The setup is homely yet professional, and the meticulous hosting by Mrs. Seema is truly commendable and encouraging.",
  },
  {
    name: "Naresh Pal Khera",
    role: "Google Reviewer",
    initial: "N",
    quote:
      "Absolutely loved the vibes here! Whether you're a beginner or a regular, this place makes everyone feel like a star. The environment is so supportive—even if you're shy, you'll feel encouraged.",
  },
  {
    name: "Rajeev Theyyanveetil",
    role: "First-time Visitor",
    initial: "R",
    quote:
      "My first day experience was amazing. Nice karaoke set-up, pleasant ambience, stunning performers, and a disciplined music-loving community altogether give positive vibes and a feel-good factor.",
  },
  {
    name: "Rajiv Reddy",
    role: "Community Member",
    initial: "R",
    quote:
      "Not just a place to sing—it's a beautifully curated space for expression, learning, and connection. Ms. Seema has created a warm and inclusive environment where people don't just sing, they find their voice.",
  },
]

export function Testimonials() {
  const [index, setIndex] = useState(0)
  const total = testimonials.length
  const go = (dir: number) => setIndex((prev) => (prev + dir + total) % total)

  return (
    <section
      id="testimonials"
      className="relative overflow-hidden py-20 lg:py-28"
    >
      {/* Background gradient strip */}
      <div className="absolute inset-0 bg-gradient-to-br from-burgundy/6 via-background to-gold/6" aria-hidden />

      {/* Giant decorative quote marks */}
      <span className="pointer-events-none absolute left-[4%] top-[20%] hidden text-[15rem] font-heading font-extrabold text-burgundy/[0.04] select-none leading-none lg:block" aria-hidden>
        &ldquo;
      </span>
      <span className="pointer-events-none absolute right-[4%] bottom-[15%] hidden text-[15rem] font-heading font-extrabold text-burgundy/[0.04] select-none leading-none lg:block" aria-hidden>
        &rdquo;
      </span>

      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 relative z-10">
        <Reveal className="text-center">
          <span className="inline-block rounded-full bg-burgundy/10 border border-burgundy/20 px-3 py-1 text-xs font-bold uppercase tracking-[0.18em] text-burgundy">
            Testimonials
          </span>
          <h2 className="mt-4 font-heading text-3xl font-extrabold leading-tight text-balance text-foreground sm:text-4xl">
            Loved by Our <span className="text-burgundy">Music Community</span>
          </h2>
          <p className="mt-4 text-base text-muted-foreground font-medium max-w-lg mx-auto">
            Real words from real singers who call Surabhi their home stage.
          </p>
        </Reveal>

        {/* Testimonial cards — show 3 at once on desktop, 1 on mobile */}
        <div className="mt-12 hidden lg:grid grid-cols-3 gap-5">
          {[-1, 0, 1].map((offset) => {
            const t = testimonials[(index + offset + total) % total]
            const isCenter = offset === 0
            return (
              <div
                key={offset}
                className={`relative rounded-[2rem] border-2 bg-card p-7 transition-all duration-500 ${
                  isCenter
                    ? "border-burgundy shadow-[6px_6px_0px_0px_var(--burgundy)] scale-105 z-10"
                    : "border-border/60 scale-95 opacity-70"
                }`}
              >
                {isCenter && (
                  <Quote className="absolute right-6 top-6 size-10 text-gold/25" aria-hidden />
                )}
                {/* Google rating badge */}
                <div className="flex items-center gap-2 mb-4">
                  <div className="flex gap-0.5">
                    {[1,2,3,4,5].map(i => (
                      <Star key={i} className="size-3.5 fill-gold text-gold" />
                    ))}
                  </div>
                  <span className="text-xs font-bold text-muted-foreground">5.0 · Google</span>
                </div>
                <p className="font-heading text-base font-semibold italic leading-relaxed text-foreground line-clamp-5">
                  &ldquo;{t.quote}&rdquo;
                </p>
                <div className="mt-5 flex items-center gap-3">
                  <span className={`flex size-10 shrink-0 items-center justify-center rounded-full font-heading text-base font-bold border-2 border-white shadow-[2px_2px_0px_0px_var(--gold)] ${isCenter ? 'bg-burgundy text-white' : 'bg-muted text-foreground'}`}>
                    {t.initial}
                  </span>
                  <div>
                    <p className="text-sm font-bold text-foreground">{t.name}</p>
                    <p className="text-xs text-muted-foreground font-medium">{t.role}</p>
                  </div>
                </div>
              </div>
            )
          })}
        </div>

        {/* Mobile: single card */}
        <Reveal delay={120} className="mt-12 lg:hidden">
          <div className="relative rounded-[2rem] border-2 border-burgundy bg-card p-7 shadow-[6px_6px_0px_0px_var(--burgundy)]">
            <Quote className="absolute right-6 top-6 size-10 text-gold/25" aria-hidden />
            <div className="flex gap-0.5 mb-4">
              {[1,2,3,4,5].map(i => <Star key={i} className="size-4 fill-gold text-gold" />)}
            </div>
            <p className="font-heading text-lg font-semibold italic leading-relaxed text-foreground">
              &ldquo;{testimonials[index].quote}&rdquo;
            </p>
            <div className="mt-6 flex items-center gap-3">
              <span className="flex size-11 items-center justify-center rounded-full bg-burgundy font-heading text-lg font-bold text-white border-2 border-white shadow-[2px_2px_0px_0px_var(--gold)]">
                {testimonials[index].initial}
              </span>
              <div>
                <p className="font-bold text-foreground">{testimonials[index].name}</p>
                <p className="text-xs text-muted-foreground font-semibold">{testimonials[index].role}</p>
              </div>
            </div>
          </div>
        </Reveal>

        {/* Navigation */}
        <div className="mt-10 flex items-center justify-center gap-6">
          <button
            type="button"
            onClick={() => go(-1)}
            aria-label="Previous testimonial"
            className="flex size-12 items-center justify-center rounded-full border-2 border-burgundy bg-card text-burgundy shadow-[2px_2px_0px_0px_var(--burgundy)] transition-all duration-200 hover:-translate-y-0.5 hover:bg-burgundy hover:text-white hover:shadow-[3px_3px_0px_0px_var(--burgundy)] active:scale-95"
          >
            <ChevronLeft className="size-5" />
          </button>

          <div className="flex gap-2.5">
            {testimonials.map((_, i) => (
              <button
                key={i}
                type="button"
                onClick={() => setIndex(i)}
                aria-label={`Go to testimonial ${i + 1}`}
                className={`h-2.5 rounded-full transition-all duration-300 ${
                  i === index ? "w-8 bg-burgundy" : "w-2.5 bg-border hover:bg-gold"
                }`}
              />
            ))}
          </div>

          <button
            type="button"
            onClick={() => go(1)}
            aria-label="Next testimonial"
            className="flex size-12 items-center justify-center rounded-full border-2 border-burgundy bg-card text-burgundy shadow-[2px_2px_0px_0px_var(--burgundy)] transition-all duration-200 hover:-translate-y-0.5 hover:bg-burgundy hover:text-white hover:shadow-[3px_3px_0px_0px_var(--burgundy)] active:scale-95"
          >
            <ChevronRight className="size-5" />
          </button>
        </div>
      </div>
    </section>
  )
}

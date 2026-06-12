import { Phone, MapPin, Clock, Music } from "lucide-react"
import { Reveal } from "@/components/reveal"
import { WhatsAppButton } from "@/components/whatsapp-button"
import { site } from "@/lib/site"

export function Contact() {
  return (
    <section id="contact" className="bg-secondary/40 py-20 lg:py-28 relative overflow-hidden">
      {/* Decorations */}
      <div className="pointer-events-none absolute -right-24 top-1/4 size-64 rounded-full border border-burgundy/5" aria-hidden />
      <div className="pointer-events-none absolute -left-16 bottom-1/3 size-48 rounded-full border border-gold/8" aria-hidden />
      <div className="pointer-events-none absolute left-1/2 -top-20 -translate-x-1/2 size-[500px] rounded-full bg-burgundy/3 blur-[100px]" aria-hidden />
      <Music className="pointer-events-none absolute right-[7%] top-16 hidden size-8 text-burgundy/8 animate-float-reverse [animation-delay:2s] lg:block" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">

        {/* ── Section header ── */}
        <Reveal className="mx-auto max-w-2xl text-center">
          <span className="inline-block rounded-full bg-burgundy/10 border border-burgundy/20 px-3 py-1 text-xs font-bold uppercase tracking-[0.18em] text-burgundy">
            Get in Touch
          </span>
          <h2 className="mt-4 font-heading text-3xl font-extrabold leading-tight text-balance text-foreground sm:text-4xl lg:text-5xl">
            Ready to <span className="text-burgundy">Sing & Jam?</span>
          </h2>
          <p className="mt-5 text-base leading-relaxed text-muted-foreground font-medium">
            Reach out on WhatsApp to check availability, book slots, or plan your next group session. We&apos;d love to host you!
          </p>
          <div className="mt-8 flex justify-center">
            <WhatsAppButton
              size="lg"
              message="Hi Surabhi! I'd like to plan a karaoke/jam session."
              className="shadow-pop-gold font-bold bg-[#25D366] hover:bg-[#25D366] text-white hover:text-white"
            >
              Chat with us on WhatsApp
            </WhatsAppButton>
          </div>
        </Reveal>

        {/* ── Info + Map ── */}
        <Reveal delay={120} className="mt-14">
          <div className="grid gap-6 lg:grid-cols-5">

            {/* Left — contact info cards */}
            <div className="flex flex-col gap-4 lg:col-span-2">
              {/* Phone */}
              <div className="group flex items-center gap-4 rounded-[1.5rem] border-2 border-border/70 bg-card p-5 transition-all duration-300 hover:border-burgundy hover:shadow-[4px_4px_0px_0px_var(--burgundy)] hover:-translate-y-0.5">
                <span className="flex size-11 shrink-0 items-center justify-center rounded-xl bg-burgundy/8 text-burgundy border border-burgundy/15 group-hover:bg-burgundy group-hover:text-white transition-all duration-200">
                  <Phone className="size-5" />
                </span>
                <div>
                  <p className="text-xs font-bold uppercase tracking-wider text-muted-foreground">Call Us</p>
                  <a
                    href={`tel:${site.phoneDisplay.replace(/\s/g, "")}`}
                    className="mt-0.5 block text-base font-bold text-foreground transition-colors hover:text-burgundy"
                  >
                    {site.phoneDisplay}
                  </a>
                </div>
              </div>

              {/* Address */}
              <div className="group flex items-start gap-4 rounded-[1.5rem] border-2 border-border/70 bg-card p-5 transition-all duration-300 hover:border-gold hover:shadow-[4px_4px_0px_0px_var(--gold)] hover:-translate-y-0.5">
                <span className="flex size-11 shrink-0 items-center justify-center rounded-xl bg-gold/10 text-gold-foreground border border-gold/20 group-hover:bg-gold group-hover:text-gold-foreground transition-all duration-200">
                  <MapPin className="size-5" />
                </span>
                <div>
                  <p className="text-xs font-bold uppercase tracking-wider text-muted-foreground">Visit Us</p>
                  <p className="mt-0.5 text-sm font-semibold leading-relaxed text-foreground">{site.address}</p>
                </div>
              </div>

              {/* Hours */}
              <div className="group flex items-center gap-4 rounded-[1.5rem] border-2 border-border/70 bg-card p-5 transition-all duration-300 hover:border-burgundy hover:shadow-[4px_4px_0px_0px_var(--burgundy)] hover:-translate-y-0.5">
                <span className="flex size-11 shrink-0 items-center justify-center rounded-xl bg-burgundy/8 text-burgundy border border-burgundy/15 group-hover:bg-burgundy group-hover:text-white transition-all duration-200">
                  <Clock className="size-5" />
                </span>
                <div>
                  <p className="text-xs font-bold uppercase tracking-wider text-muted-foreground">Lounge Hours</p>
                  <p className="mt-0.5 text-base font-bold text-foreground">12pm – 6pm</p>
                  <p className="text-xs text-muted-foreground">Slot-based · WhatsApp to book</p>
                </div>
              </div>

              {/* WhatsApp tip */}
              <div className="rounded-[1.5rem] border-2 border-burgundy/30 bg-burgundy/6 p-5">
                <p className="text-sm leading-relaxed text-foreground font-semibold">
                  💬 Prefer a quick chat? WhatsApp is the fastest way to reach us — we reply within minutes during lounge hours.
                </p>
              </div>
            </div>

            {/* Right — Map */}
            <div className="lg:col-span-3">
              <div className="h-full min-h-[360px] overflow-hidden rounded-[2rem] border-4 border-burgundy shadow-[6px_6px_0px_0px_var(--gold)]">
                <iframe
                  title="Surabhi Karaoke Lounge location map"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3887.0543666795493!2d77.60480807567705!3d13.05370229068411!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae1713ba0742dd%3A0xf165f135897803e2!2sSurabhi%20Karaoke%20Lounge!5e0!3m2!1sen!2sin!4v1718181600000"
                  width="100%"
                  height="100%"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="h-full min-h-[360px] w-full border-0"
                />
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}

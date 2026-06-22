"use client"

import { Reveal } from "@/components/reveal"
import { WhatsAppIcon } from "@/components/icons/whatsapp"
import { site } from "@/lib/site"
import { Lock, Bell, Star } from "lucide-react"

type Message = {
  id: number
  time: string
  sender: string
  text: string
  bold: string
}

const mockMessages: Message[] = [
  {
    id: 1,
    sender: "Surabhi Admin",
    time: "10:30 AM",
    bold: "🎤 Open Mic Invitation",
    text: "Sing any song in any language! Let your voice shine on stage. Limited slots — members get first preference. 🎶",
  },
  {
    id: 2,
    sender: "Surabhi Admin",
    time: "3:15 PM",
    bold: "✨ Puneeth Rajkumar Tribute",
    text: "A special evening celebrating the legend with his most iconic songs. Come sing your favourite Power Star hits! 🌟",
  },
  {
    id: 3,
    sender: "Surabhi Admin",
    time: "9:00 AM",
    bold: "🇮🇳 Republic Day Special",
    text: "Patriotic songs, energetic vibes, and a whole lot of music love. Let's celebrate the day with Surabhi! 🎉",
  },
]

const perks = [
  {
    icon: Lock,
    title: "Admin-Only",
    desc: "No spam. Only official event announcements.",
  },
  {
    icon: Bell,
    title: "Be First to Know",
    desc: "Get event details before anyone else.",
  },
  {
    icon: Star,
    title: "Member Priority",
    desc: "Group members get preference for slot bookings.",
  },
]

export function WhatsAppAnnouncements() {
  return (
    <section
      id="announcements"
      className="py-20 lg:py-28 relative overflow-hidden bg-background"
    >
      {/* Subtle background glow */}
      <div className="pointer-events-none absolute -left-40 top-0 size-[500px] rounded-full bg-[#25D366]/5 blur-[100px]" />
      <div className="pointer-events-none absolute -right-40 bottom-0 size-[400px] rounded-full bg-burgundy/5 blur-[80px]" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid items-center gap-14 lg:grid-cols-2 lg:gap-20">

          {/* ── Left: Copy ── */}
          <Reveal>
            {/* Label */}
            <span className="inline-flex items-center gap-2 rounded-full border border-[#25D366]/25 bg-[#25D366]/10 px-3 py-1 text-xs font-bold uppercase tracking-[0.18em] text-[#128C7E]">
              <WhatsAppIcon className="size-3.5" />
              Community
            </span>

            <h2 className="mt-4 font-heading text-3xl font-extrabold leading-tight text-balance text-foreground sm:text-4xl">
              Never Miss a{" "}
              <span className="text-burgundy">Surabhi Event</span>
            </h2>

            <p className="mt-4 text-base leading-relaxed text-muted-foreground font-medium sm:text-lg">
              We host themed evenings, tribute nights, open mics, and more — every couple of weeks. Join our WhatsApp group to stay in the loop.
            </p>

            {/* Perks */}
            <ul className="mt-8 space-y-4">
              {perks.map((p) => (
                <li key={p.title} className="flex items-start gap-3.5">
                  <span className="mt-0.5 flex size-9 shrink-0 items-center justify-center rounded-xl bg-[#25D366]/10 text-[#128C7E] border border-[#25D366]/20">
                    <p.icon className="size-4" />
                  </span>
                  <div>
                    <p className="text-sm font-bold text-foreground">{p.title}</p>
                    <p className="text-sm text-muted-foreground">{p.desc}</p>
                  </div>
                </li>
              ))}
            </ul>

            {/* CTA */}
            <div className="mt-10">
              <a
                href={site.whatsappGroupLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 rounded-full bg-[#25D366] px-8 py-3.5 text-sm font-bold text-white shadow-md shadow-[#25D366]/25 transition-all duration-300 hover:bg-[#20b858] hover:-translate-y-0.5 hover:shadow-lg hover:shadow-[#25D366]/30 active:scale-95"
              >
                <WhatsAppIcon className="size-5" />
                Join the Announcement Group
              </a>
            </div>
          </Reveal>

          {/* ── Right: WhatsApp Chat Mockup ── */}
          <Reveal delay={100} className="mx-auto w-full max-w-[340px] lg:max-w-[380px]">
            <div className="relative overflow-hidden rounded-[2rem] border border-foreground/10 shadow-2xl shadow-black/15 ring-1 ring-black/5">

              {/* WhatsApp Header */}
              <div className="flex items-center gap-3 bg-[#075E54] px-4 py-3.5">
                <div className="flex size-9 shrink-0 items-center justify-center rounded-full bg-[#25D366]">
                  <WhatsAppIcon className="size-5 text-white" />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="truncate text-sm font-semibold text-white leading-tight">
                    Surabhi Announcements
                  </p>
                  <p className="text-[11px] text-white/60">
                    Only admins can send messages
                  </p>
                </div>
              </div>

              {/* Chat Body */}
              <div className="flex flex-col gap-3 bg-[#ECE5DD] px-4 py-5 min-h-[360px]">
                {/* Date chip */}
                <div className="flex justify-center">
                  <span className="rounded-full bg-white/80 px-3 py-0.5 text-[10px] font-medium text-slate-500 shadow-sm">
                    RECENT EVENTS
                  </span>
                </div>

                {/* Message bubbles */}
                {mockMessages.map((msg) => (
                  <div key={msg.id} className="flex flex-col items-start">
                    <div className="max-w-[88%] rounded-2xl rounded-tl-[4px] bg-white px-3.5 py-2.5 shadow-sm">
                      <p className="mb-1 text-[10px] font-semibold text-[#128C7E]">
                        {msg.sender}
                      </p>
                      <p className="text-[13px] font-bold text-slate-800 leading-snug">
                        {msg.bold}
                      </p>
                      <p className="mt-1 text-[12px] leading-relaxed text-slate-600">
                        {msg.text}
                      </p>
                      <p className="mt-1.5 text-right text-[10px] text-slate-400">
                        {msg.time}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Footer */}
              <div className="flex items-center justify-center gap-2 bg-[#F0F0F0] px-4 py-3 text-[11px] font-medium text-slate-500 border-t border-black/5">
                <Lock className="size-3 shrink-0" />
                Only admins can send messages
              </div>
            </div>

            {/* Soft decorative glow behind phone */}
            <div className="pointer-events-none absolute -inset-4 -z-10 rounded-[3rem] bg-gradient-to-br from-[#25D366]/10 via-transparent to-burgundy/10 blur-2xl" />
          </Reveal>

        </div>
      </div>
    </section>
  )
}

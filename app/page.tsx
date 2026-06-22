import { Navbar } from "@/components/navbar"
import { Hero } from "@/components/sections/hero"
import { About } from "@/components/sections/about"
import { Offerings } from "@/components/sections/offerings"
import { Gallery } from "@/components/sections/gallery"
import { WhyChoose } from "@/components/sections/why-choose"
import { Testimonials } from "@/components/sections/testimonials"
import { WhatsAppAnnouncements } from "@/components/sections/whatsapp-announcements"
import { Contact } from "@/components/sections/contact"
import { Footer } from "@/components/sections/footer"
import { FloatingWhatsApp } from "@/components/floating-whatsapp"

export default function Page() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Offerings />
        <Gallery />
        <WhyChoose />
        <Testimonials />
        <WhatsAppAnnouncements />
        <Contact />
      </main>
      <Footer />
      <FloatingWhatsApp />
    </>
  )
}

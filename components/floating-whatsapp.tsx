import Link from "next/link"
import { whatsappHref } from "@/lib/site"
import { WhatsAppIcon } from "@/components/icons/whatsapp"

export function FloatingWhatsApp() {
  return (
    <Link
      href={whatsappHref()}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with us on WhatsApp"
      className="fixed bottom-5 right-5 z-50 flex size-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg transition-transform duration-300 hover:scale-110 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-offset-2"
    >
      <span className="absolute inline-flex size-full animate-ping rounded-full bg-[#25D366] opacity-30" />
      <WhatsAppIcon className="relative size-7" />
    </Link>
  )
}

export const site = {
  name: "Surabhi Karaoke Lounge",
  tagline: "A Rehearsal & Jam Space That Inspires Connection",
  // Replace with the real WhatsApp number (international format, no +, spaces or dashes)
  whatsappNumber: "919845181418",
  phoneDisplay: "+91 98451 81418",
  address: "24, 1st Main, 18th A Cross Rd, Bhuvaneswari Nagar, Hebbal Kempapura, Bengaluru, Karnataka 560024, India",
  whatsappMessage:
    "Hi Surabhi Karaoke Lounge! I'd love to know more about your studio.",
  whatsappGroupLink: "https://chat.whatsapp.com/HhuUhf06vmO7j6MKVulPbo",
} as const

export function whatsappHref(message: string = site.whatsappMessage) {
  return `https://wa.me/${site.whatsappNumber}?text=${encodeURIComponent(message)}`
}

export const navLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Gallery", href: "#gallery" },
  { label: "Testimonials", href: "#testimonials" },
  { label: "Announcements", href: "#announcements" },
  { label: "Contact", href: "#contact" },
] as const


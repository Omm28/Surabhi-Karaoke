import Link from "next/link"
import { cn } from "@/lib/utils"
import { whatsappHref } from "@/lib/site"
import { WhatsAppIcon } from "@/components/icons/whatsapp"

interface WhatsAppButtonProps {
  message?: string
  className?: string
  size?: "default" | "lg"
  variant?: "solid" | "outline"
  children?: React.ReactNode
}

export function WhatsAppButton({
  message,
  className,
  size = "default",
  variant = "solid",
  children = "Chat on WhatsApp",
}: WhatsAppButtonProps) {
  return (
    <Link
      href={whatsappHref(message)}
      target="_blank"
      rel="noopener noreferrer"
      className={cn(
        "inline-flex items-center justify-center gap-2 rounded-full font-medium tracking-wide transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-offset-2 focus-visible:ring-offset-background",
        size === "lg" ? "px-7 py-3.5 text-base" : "px-5 py-2.5 text-sm",
        variant === "solid"
          ? "bg-[#25D366] text-white shadow-sm hover:bg-[#1eba59] hover:shadow-md hover:-translate-y-0.5"
          : "border border-burgundy/30 bg-card text-burgundy hover:bg-burgundy hover:text-burgundy-foreground",
        className,
      )}
    >
      <WhatsAppIcon className={size === "lg" ? "size-5" : "size-4"} />
      {children}
    </Link>
  )
}

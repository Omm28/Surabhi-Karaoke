import { cn } from "@/lib/utils"

export function MusicNoteDoodle({ className, style }: { className?: string; style?: React.CSSProperties }) {
  return (
    <svg
      viewBox="0 0 100 100"
      fill="currentColor"
      className={cn("pointer-events-none select-none opacity-[0.07] transition-all", className)}
      style={style}
      aria-hidden="true"
    >
      <path
        d="M70 15v50c0 8.3-6.7 15-15 15s-15-6.7-15-15 6.7-15 15-15c3.2 0 6.1 1 8.5 2.7V32L38.5 44v31c0 8.3-6.7 15-15 15S8.5 83.3 8.5 75s6.7-15 15-15c3.2 0 6.1 1 8.5 2.7V25.5L70 15z"
      />
    </svg>
  )
}

export function SingleNoteDoodle({ className, style }: { className?: string; style?: React.CSSProperties }) {
  return (
    <svg
      viewBox="0 0 100 100"
      fill="currentColor"
      className={cn("pointer-events-none select-none opacity-[0.07] transition-all", className)}
      style={style}
      aria-hidden="true"
    >
      <path
        d="M60 20v45c0 8.3-6.7 15-15 15s-15-6.7-15-15 6.7-15 15-15c3.2 0 6.1 1 8.5 2.7V20h6.5z"
      />
    </svg>
  )
}

export function SparkleDoodle({ className, style }: { className?: string; style?: React.CSSProperties }) {
  return (
    <svg
      viewBox="0 0 100 100"
      fill="currentColor"
      className={cn("pointer-events-none select-none opacity-[0.08] transition-all", className)}
      style={style}
      aria-hidden="true"
    >
      <path d="M50 0c0 27.6 22.4 50 50 50-27.6 0-50 22.4-50 50 0-27.6-22.4-50-50-50 27.6 0 50-22.4 50-50z" />
    </svg>
  )
}

export function MusicWaveDoodle({ className, style }: { className?: string; style?: React.CSSProperties }) {
  return (
    <svg
      viewBox="0 0 400 60"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeDasharray="4 4"
      className={cn("pointer-events-none select-none opacity-[0.06] transition-all", className)}
      style={style}
      aria-hidden="true"
    >
      <path d="M10 30 Q 50 5, 90 30 T 170 30 T 250 30 T 330 30 T 410 30" />
    </svg>
  )
}

export function HeartNoteDoodle({ className, style }: { className?: string; style?: React.CSSProperties }) {
  return (
    <svg
      viewBox="0 0 100 100"
      fill="currentColor"
      className={cn("pointer-events-none select-none opacity-[0.07] transition-all", className)}
      style={style}
      aria-hidden="true"
    >
      <path d="M45.5 80c-1.5 0-3-.5-4.2-1.5C31 70.3 22 62.1 15.6 53.6c-5-6.7-7.6-13.6-7.6-20.5 0-11 9-20 20-20 6.2 0 12.1 2.9 15.8 7.9 3.7-5 9.6-7.9 15.8-7.9 11 0 20 9 20 20 0 6.9-2.6 13.8-7.6 20.5-6.4 8.5-15.4 16.7-25.7 24.9-1.2 1-2.7 1.5-4.2 1.5zm0-62v50c3.2 0 6.1 1 8.5 2.7V25.5L78 20v35c0 8.3-6.7 15-15 15s-15-6.7-15-15" />
    </svg>
  )
}

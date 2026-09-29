export function Logo({ className = "h-11 w-11" }: { className?: string }) {
  return (
    <svg viewBox="0 0 64 72" className={className} aria-hidden="true">
      <path
        d="M32 2 60 11v28c0 16-12 27-28 31C16 66 4 55 4 39V11L32 2Z"
        fill="currentColor"
        opacity="0.95"
      />
      <path
        d="M32 8 54 15v24c0 13-9.6 22-22 25.6C19.6 61 10 52 10 39V15L32 8Z"
        fill="oklch(0.19 0.012 265)"
      />
      <path
        d="M33.5 17c4 5.4 1.2 8.4 3.4 12.4 1.2 2.2 3.6 2.6 4.4 5.6 1.4 5-2.4 10.4-8.6 10.4-6 0-10.2-3.8-10.2-9.2 0-6 5-8 6.6-12.6.8-2.4.6-4.6-.4-6.6 2 .4 3.8 1.4 4.8 3-.2-1 0-2 .0-3Z"
        fill="oklch(0.54 0.213 27.5)"
      />
      <text
        x="32"
        y="58"
        textAnchor="middle"
        fontFamily="Bebas Neue, sans-serif"
        fontSize="16"
        fill="oklch(0.98 0 0)"
      >
        FX
      </text>
    </svg>
  );
}

export function Wordmark() {
  return (
    <span className="flex min-w-0 items-center gap-2.5">
      <Logo className="h-11 w-11 shrink-0 text-primary" />
      <span className="min-w-0 leading-none">
        <span className="block font-display text-2xl tracking-wide">
          <span className="text-primary">FX</span> SAFETY
        </span>
        <span className="block text-[0.6rem] font-semibold tracking-[0.35em] text-muted-foreground">
          SOLUTIONS
        </span>
      </span>
    </span>
  );
}

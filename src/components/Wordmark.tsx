type Props = { tone?: 'light' | 'dark'; className?: string };

// Typographic version of the TireZoneMX logo for the clean layout: TIREZONE + red MX.
export function Wordmark({ tone = 'light', className = '' }: Props) {
  const ink = tone === 'light' ? 'text-white' : 'text-fg';
  return (
    <span className={`inline-flex items-center gap-2 font-display font-bold tracking-[-0.02em] ${ink} ${className}`}>
      <svg viewBox="0 0 24 24" aria-hidden="true" className="h-[1.15em] w-[1.15em]">
        <circle cx="12" cy="12" r="10" fill="none" stroke="currentColor" strokeWidth="3" strokeDasharray="3.1 2" />
        <circle cx="12" cy="12" r="4.2" fill="var(--color-accent)" />
      </svg>
      <span>
        TIREZONE<span className="text-accent">MX</span>
      </span>
    </span>
  );
}

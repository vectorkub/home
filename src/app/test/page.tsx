export default function TestPage() {
  return (
    <div className="flex min-h-screen items-center justify-center px-6">
      <div className="card w-full max-w-xl p-8 text-center">
        <p className="inline-flex items-center gap-2 rounded-full border border-border bg-muted/20 px-3 py-1 text-[11px] uppercase tracking-[0.18em] text-foreground/60">
          System check
        </p>
        <h1 className="mt-4 text-3xl font-semibold text-foreground">Test Page</h1>
        <p className="text-sm leading-relaxed text-foreground/60">
          If you can see this page, the environment and theme are wired correctly.
        </p>
        <div className="mt-6 grid grid-cols-2 gap-3 text-xs text-foreground/60">
          <div className="rounded-2xl border border-border bg-muted/20 p-3">Dark theme active</div>
          <div className="rounded-2xl border border-border bg-muted/20 p-3">Components rendering</div>
        </div>
      </div>
    </div>
  )
}

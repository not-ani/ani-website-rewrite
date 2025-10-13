export function Hero() {
  return (
    <section id="hi" className="flex items-center scroll-mt-12 pb-8 py-10">
      <div className="space-y-3">
        <div className="space-y-1">
          <h1 className="font-mono text-3xl font-bold tracking-tight text-balance md:text-4xl">
            Hi, I'm <span className="text-muted-foreground">Ani</span>
          </h1>
          <p className="font-mono text-base text-muted-foreground md:text-lg">
            Student and Developer
          </p>
        </div>
        <div className="max-w-2xl space-y-2">
          <p className="text-sm leading-relaxed text-foreground/60">
            I try and build things that are useful
          </p>
        </div>
      </div>
    </section>
  );
}

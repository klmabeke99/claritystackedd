import Link from "next/link";
import { apps } from "../data/apps";

type ProductPageProps = {
  app: (typeof apps)[keyof typeof apps];
};

const accentStyles = {
  violet: {
    soft: "bg-violet-100 text-violet-700",
    glow: "bg-violet-200/60",
    text: "text-violet-600",
    border: "border-violet-200",
    card: "bg-violet-50",
    button: "bg-violet-600 hover:bg-violet-700",
    ring: "shadow-violet-500/20",
  },
  green: {
    soft: "bg-green-100 text-green-700",
    glow: "bg-green-200/60",
    text: "text-green-600",
    border: "border-green-200",
    card: "bg-green-50",
    button: "bg-green-600 hover:bg-green-700",
    ring: "shadow-green-500/20",
  },
  orange: {
    soft: "bg-orange-100 text-orange-700",
    glow: "bg-orange-200/60",
    text: "text-orange-500",
    border: "border-orange-200",
    card: "bg-orange-50",
    button: "bg-orange-500 hover:bg-orange-600",
    ring: "shadow-orange-500/20",
  },
  blue: {
    soft: "bg-blue-100 text-blue-700",
    glow: "bg-blue-200/60",
    text: "text-blue-600",
    border: "border-blue-200",
    card: "bg-blue-50",
    button: "bg-blue-600 hover:bg-blue-700",
    ring: "shadow-blue-500/20",
  },
  pink: {
    soft: "bg-pink-100 text-pink-700",
    glow: "bg-pink-200/60",
    text: "text-pink-600",
    border: "border-pink-200",
    card: "bg-pink-50",
    button: "bg-pink-600 hover:bg-pink-700",
    ring: "shadow-pink-500/20",
  },
  cyan: {
    soft: "bg-cyan-100 text-cyan-700",
    glow: "bg-cyan-200/60",
    text: "text-cyan-600",
    border: "border-cyan-200",
    card: "bg-cyan-50",
    button: "bg-cyan-600 hover:bg-cyan-700",
    ring: "shadow-cyan-500/20",
  },
} as const;

export default function ProductPageTemplate({ app }: ProductPageProps) {
  const accent = accentStyles[app.accent];

  return (
    <main className="min-h-screen overflow-hidden bg-white text-[#07112f]">
      <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/90 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4">
          <Link href="/" className="flex items-center gap-3">
           <div className="grid h-12 w-12 place-items-center rounded-2xl bg-orange-500 text-sm font-black text-white shadow-lg shadow-orange-500/20">
            CS
           </div>
            <p className="text-xl font-black tracking-tight sm:text-2xl">
              CLARITY<span className="text-orange-500">STACKED</span>
            </p>
          </Link>

          <Link
            href="/"
            className="rounded-2xl border border-slate-300 px-5 py-3 text-sm font-black text-slate-700 transition hover:bg-slate-50"
          >
            ← Back home
          </Link>
        </div>
      </header>

      <section className="relative">
        <div className="absolute right-[-120px] top-20 h-[380px] w-[380px] rounded-full bg-orange-200/50 blur-3xl" />
        <div
          className={`absolute left-[-140px] top-56 h-[360px] w-[360px] rounded-full blur-3xl ${accent.glow}`}
        />

        <div className="relative mx-auto grid max-w-7xl items-center gap-12 px-5 py-16 lg:grid-cols-[0.85fr_1.15fr] lg:py-24">
          <div>
            <div
              className={`grid h-16 w-16 place-items-center rounded-3xl text-3xl shadow-lg ${accent.soft} ${accent.ring}`}
            >
              {app.icon}
            </div>

            <p
              className={`mt-6 text-sm font-black uppercase tracking-[0.32em] ${accent.text}`}
            >
              ● ClarityStacked product
            </p>

            <h1 className="mt-5 max-w-2xl text-5xl font-black leading-[0.95] tracking-[-0.05em] sm:text-6xl lg:text-7xl">
              {app.name}
              <span className={accent.text}>.</span>
            </h1>

            <p className="mt-6 max-w-xl text-2xl font-black leading-9 text-slate-800">
              {app.tagline}
            </p>

            <p className="mt-5 max-w-xl text-lg leading-8 text-slate-600">
              {app.description}
            </p>

            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <a
                href={app.appLink}
                target="_blank"
                rel="noreferrer"
                className={`rounded-2xl px-8 py-4 text-center text-base font-black text-white shadow-2xl transition hover:-translate-y-0.5 ${accent.button} ${accent.ring}`}
              >
                Open Live App →
              </a>

              <Link
                href="/"
                className="rounded-2xl border border-slate-300 bg-white px-8 py-4 text-center text-base font-black text-[#07112f] shadow-sm transition hover:-translate-y-0.5 hover:bg-slate-50"
              >
                View All Systems
              </Link>
            </div>
          </div>

          <div className="min-w-0">
            <div className="overflow-hidden rounded-[34px] border border-slate-200 bg-[#07112f] p-3 shadow-[0_34px_90px_rgba(7,17,47,0.22)]">
              <div className="border-b border-white/10 px-4 py-4 text-white">
                <p className={`text-base font-black ${accent.text}`}>
                  CLARITYSTACKED
                </p>
                <p className="mt-1 text-sm font-bold text-slate-400">
                  {app.name} preview
                </p>
              </div>

              <div className="relative aspect-[16/10] overflow-hidden rounded-b-[26px] bg-white">
                <img
                  src={app.preview}
                  alt={`${app.name} screenshot preview`}
                  className="h-full w-full object-cover object-top"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 pb-20">
        <div
          className={`rounded-[36px] border p-6 shadow-sm sm:p-8 md:p-10 ${accent.border} ${accent.card}`}
        >
          <p
            className={`text-sm font-black uppercase tracking-[0.3em] ${accent.text}`}
          >
            ● What it helps with
          </p>

          <h2 className="mt-4 text-4xl font-black tracking-tight sm:text-5xl">
            Built for everyday command.
          </h2>

          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {app.features.map((feature) => (
              <div
                key={feature}
                className="rounded-3xl border border-white/70 bg-white p-6 text-lg font-black shadow-sm transition hover:-translate-y-1 hover:shadow-xl"
              >
                <span className={accent.text}>✓</span> {feature}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto grid max-w-7xl gap-6 px-5 pb-20 lg:grid-cols-2">
        <div className="rounded-[36px] bg-[#07112f] p-8 text-white shadow-2xl shadow-slate-900/20 md:p-10">
          <p
            className={`text-sm font-black uppercase tracking-[0.3em] ${accent.text}`}
          >
            ● Workflow
          </p>

          <h2 className="mt-4 text-4xl font-black tracking-tight">
            How it works.
          </h2>

          <div className="mt-8 grid gap-4">
            {app.workflow.map((step, index) => (
              <div
                key={step}
                className="rounded-3xl border border-white/10 bg-white/10 p-6 backdrop-blur transition hover:bg-white/15"
              >
                <p className={`text-sm font-black ${accent.text}`}>
                  Step {index + 1}
                </p>
                <p className="mt-2 text-xl font-black">{step}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="rounded-[36px] border border-slate-200 bg-white p-8 shadow-sm md:p-10">
          <p
            className={`text-sm font-black uppercase tracking-[0.3em] ${accent.text}`}
          >
            ● Why it matters
          </p>

          <h2 className="mt-4 text-4xl font-black tracking-tight">
            Less chaos. More control.
          </h2>

          <div className="mt-8 grid gap-4">
            {app.benefits.map((benefit) => (
              <div
                key={benefit}
                className={`rounded-3xl border p-6 text-lg font-black text-slate-800 ${accent.border} ${accent.card}`}
              >
                <span className={accent.text}>◉</span> {benefit}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 pb-24">
        <div
          className={`relative overflow-hidden rounded-[36px] p-8 text-[#07112f] shadow-2xl md:p-12 ${accent.card} ${accent.ring}`}
        >
          <div className="absolute right-[-80px] top-[-80px] h-56 w-56 rounded-full bg-white/50 blur-3xl" />

          <div className="relative grid gap-8 md:grid-cols-[1fr_auto] md:items-center">
            <div>
              <h2 className="text-4xl font-black tracking-tight sm:text-5xl">
                Ready to try {app.name}?
              </h2>
              <p className="mt-4 max-w-2xl text-lg font-bold leading-8 text-[#07112f]/80">
                Open the live app and see how this command system can help you
                create more clarity in real life.
              </p>
            </div>

            <a
              href={app.appLink}
              target="_blank"
              rel="noreferrer"
              className={`rounded-2xl px-8 py-4 text-center text-base font-black text-white shadow-xl transition hover:-translate-y-0.5 ${accent.button} ${accent.ring}`}
            >
              Open Live App →
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
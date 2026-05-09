const apps = [
  {
    name: "MultiStream Command",
    description:
      "Track income, expenses, invoices, overdue payments, reviews, and reports across multiple streams.",
    icon: "▦",
    color: "bg-violet-100 text-violet-700",
    link: "https://freelance-command-center-opal.vercel.app/",
    preview: "/previews/multistream.png",
  },
  {
    name: "Prepper Pantry",
    description:
      "Manage pantry inventory, expiry dates, meal planning, restock lists, and food readiness.",
    icon: "🛒",
    color: "bg-green-100 text-green-700",
    link: "https://prepper-pantry-command.vercel.app/",
    preview: "/previews/prepper-pantry.png",
  },
  {
    name: "CalmFrame",
    description:
      "Reduce mental noise, reflect clearly, reset focus, and create calmer daily routines.",
    icon: "⚡",
    color: "bg-orange-100 text-orange-700",
    link: "https://calmframe.vercel.app/",
    preview: "/previews/calmframe.png",
  },
  {
    name: "Decision Helper",
    description:
      "Turn overthinking into structured choices using clear decision frameworks.",
    icon: "◇",
    color: "bg-blue-100 text-blue-700",
    link: "https://decision-helper-app-brown.vercel.app/",
    preview: "/previews/decision-helper.png",
  },
  {
    name: "Life Admin OS",
    description:
      "Organise bills, subscriptions, tasks, reminders, reports, and everyday admin routines.",
    icon: "□",
    color: "bg-pink-100 text-pink-700",
    link: "https://life-admin-os-zeta.vercel.app/",
    preview: "/previews/life-admin.png",
  },
  {
    name: "ADHD Work",
    description:
      "Plan workdays, unpack tasks, prepare meetings, choose work modes, and recover focus.",
    icon: "◎",
    color: "bg-cyan-100 text-cyan-700",
    link: "https://adhd-work-app.vercel.app/",
    preview: "/previews/adhd-work.png",
  },
];

const slides = apps;

function AppPreviewSlide({ app }: { app: (typeof apps)[number] }) {
  return (
    <div className="min-w-full px-2">
      <div className="overflow-hidden rounded-[34px] border border-slate-200 bg-[#07112f] p-3 shadow-[0_34px_90px_rgba(7,17,47,0.22)]">
        <div className="flex items-center justify-between gap-4 border-b border-white/10 px-4 py-4 text-white">
          <div>
            <p className="text-base font-black text-orange-400">
              CLARITYSTACKED
            </p>
            <p className="mt-1 text-sm font-bold text-slate-400">
              {app.name} preview
            </p>
          </div>

          <a
            href={app.link}
            target="_blank"
            rel="noreferrer"
            className="shrink-0 rounded-full bg-white px-5 py-3 text-sm font-black text-[#07112f] shadow-lg"
          >
            Open app
          </a>
        </div>

        <a
          href={app.link}
          target="_blank"
          rel="noreferrer"
          className="block"
        >
          <div className="relative aspect-[16/10] overflow-hidden rounded-b-[26px] bg-white">
            <img
              src={app.preview}
              alt={`${app.name} screenshot preview`}
              className="h-full w-full object-cover object-top transition duration-700 hover:scale-[1.03]"
            />

            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#07112f]/10 via-transparent to-white/0" />
          </div>
        </a>
      </div>
    </div>
  );
}

export default function Home() {
  return (
    <main className="min-h-screen overflow-hidden bg-white text-[#07112f]">
      <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/90 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4">
          <div className="flex items-center gap-3">
            <div className="grid h-12 w-12 place-items-center rounded-2xl bg-orange-500 text-xl font-black text-white shadow-lg shadow-orange-500/20">
              S
            </div>
            <p className="text-2xl font-black tracking-tight">
              CLARITY<span className="text-orange-500">STACKED</span>
            </p>
          </div>

          <nav className="hidden items-center gap-8 text-base font-black text-slate-700 lg:flex">
            <a href="#apps">Products</a>
            <a href="#systems">Solutions</a>
            <a href="#resources">Resources</a>
            <a href="#pricing">Pricing</a>
            <a href="#about">About</a>
          </nav>

          <div className="hidden gap-3 sm:flex">
            <button className="rounded-2xl border border-slate-300 px-6 py-3 text-base font-black">
              Log in
            </button>
            <button className="rounded-2xl bg-[#07112f] px-6 py-3 text-base font-black text-white shadow-xl shadow-slate-900/15">
              Get Started
            </button>
          </div>
        </div>
      </header>

      <section className="relative">
        <div className="absolute right-[-140px] top-20 h-[440px] w-[440px] rounded-full bg-orange-200/50 blur-3xl" />
        <div className="absolute left-[-160px] top-56 h-[420px] w-[420px] rounded-full bg-blue-100/80 blur-3xl" />

        <div className="relative mx-auto grid max-w-7xl items-center gap-12 px-5 py-16 lg:grid-cols-[0.8fr_1.2fr] lg:py-24">
          <div>
            <p className="text-sm font-black uppercase tracking-[0.32em] text-orange-500">
              ● Command systems for real life
            </p>

            <h1 className="mt-6 max-w-2xl text-6xl font-black leading-[0.92] tracking-[-0.06em] sm:text-7xl lg:text-8xl">
              One stack. <br />
              Total clarity<span className="text-orange-500">.</span>
            </h1>

            <p className="mt-7 max-w-xl text-xl leading-9 text-slate-600">
              ClarityStacked brings focused command systems for money, food,
              decisions, focus, and life admin into one powerful ecosystem.
            </p>

            <div className="mt-9 flex flex-col gap-4 sm:flex-row">
              <a
                href="#apps"
                className="rounded-2xl bg-[#07112f] px-8 py-4 text-center text-base font-black text-white shadow-2xl shadow-slate-900/20 transition hover:-translate-y-0.5"
              >
                Explore the Systems →
              </a>

              <a
                href="#about"
                className="rounded-2xl border border-slate-300 bg-white px-8 py-4 text-center text-base font-black text-[#07112f] shadow-sm transition hover:-translate-y-0.5"
              >
                See How It Works ◉
              </a>
            </div>

            <div className="mt-12 grid grid-cols-2 gap-3 text-sm font-black text-slate-600 sm:grid-cols-4">
              {[
                "Built for real life",
                "Private & secure",
                "Works across devices",
                "Always improving",
              ].map((item) => (
                <div
                  key={item}
                  className="rounded-2xl border border-slate-200 bg-white/80 px-4 py-4 shadow-sm backdrop-blur"
                >
                  ✓ {item}
                </div>
              ))}
            </div>
          </div>

          <div className="relative min-w-0">
            <div className="relative overflow-hidden rounded-[36px]">
              <div className="flex dashboard-slider">
                {slides.map((app) => (
                  <AppPreviewSlide key={app.name} app={app} />
                ))}
              </div>
            </div>

            <p className="mt-4 text-center text-sm font-bold text-slate-500">
              Real product previews from the ClarityStacked ecosystem
            </p>
          </div>
        </div>
      </section>

      <section id="apps" className="mx-auto max-w-7xl px-5 py-16">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-black uppercase tracking-[0.3em] text-orange-500">
            ● The ClarityStacked ecosystem
          </p>
          <h2 className="mt-4 text-4xl font-black tracking-tight sm:text-6xl">
            Systems that work together.
          </h2>
          <p className="mt-5 text-lg leading-8 text-slate-600">
            Each tool is powerful on its own. Together, they give you command
            over your day, decisions, resources, and life.
          </p>
        </div>

        <div className="mt-12 grid gap-7 sm:grid-cols-2 lg:grid-cols-3">
          {apps.map((app) => (
            <article
              key={app.name}
              className="group flex min-h-[280px] flex-col justify-between rounded-[32px] border border-slate-200 bg-white p-8 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-2xl hover:shadow-slate-900/10"
            >
              <div>
                <div
                  className={`grid h-14 w-14 place-items-center rounded-2xl text-2xl ${app.color}`}
                >
                  {app.icon}
                </div>
                <h3 className="mt-6 text-2xl font-black">{app.name}</h3>
                <p className="mt-4 text-base leading-7 text-slate-600">
                  {app.description}
                </p>
              </div>

        <a
  className="mt-7 inline-block text-base font-black text-blue-600"
  href={
    app.name === "MultiStream Command"
      ? "/multistream"
      : app.name === "Prepper Pantry"
      ? "/prepper-pantry"
      : app.name === "CalmFrame"
      ? "/calmframe"
      : app.name === "Decision Helper"
      ? "/decision-helper"
      : app.name === "Life Admin OS"
      ? "/life-admin"
      : app.name === "ADHD Work"
      ? "/adhd-work"
      : app.link
  }
  target="_self"
>
  Explore →
</a>
            </article>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 pb-20">
        <div className="relative overflow-hidden rounded-[32px] bg-[#07112f] px-8 py-12 text-white shadow-2xl shadow-slate-900/20 md:px-12">
          <div className="absolute right-0 top-0 h-40 w-40 rounded-full bg-orange-400/30 blur-3xl" />
          <div className="relative grid items-center gap-8 md:grid-cols-[1fr_auto]">
            <div>
              <h2 className="text-4xl font-black">Ready to take command?</h2>
              <p className="mt-3 max-w-xl text-base leading-7 text-slate-300">
                Build a clearer, more intentional life with tools designed to
                reduce chaos and make everyday systems easier to manage.
              </p>
            </div>
            <a
              href="#apps"
              className="rounded-2xl bg-orange-500 px-8 py-4 text-center text-base font-black text-[#07112f] shadow-xl shadow-orange-500/20"
            >
              Start Your Journey →
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
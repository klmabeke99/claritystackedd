const apps = [
  {
    name: "MultiStream",
    description: "Manage multiple income streams, expenses, invoices, and cash flow in one place.",
    icon: "▦",
    color: "bg-violet-100 text-violet-700",
  },
  {
    name: "Pantry",
    description: "Smart inventory, meal planning, restock control, and pantry visibility.",
    icon: "🛒",
    color: "bg-green-100 text-green-700",
  },
  {
    name: "CalmFrame",
    description: "Reduce noise, calm your mind, and reset your focus with guided tools.",
    icon: "⚡",
    color: "bg-orange-100 text-orange-700",
  },
  {
    name: "Decision Helper",
    description: "Structure better decisions with clear frameworks and saved reasoning.",
    icon: "◇",
    color: "bg-blue-100 text-blue-700",
  },
  {
    name: "Life Admin",
    description: "Bills, subscriptions, tasks, forms, documents, and life management.",
    icon: "□",
    color: "bg-pink-100 text-pink-700",
  },
  {
    name: "ADHD Work",
    description: "Focus support, task unpacking, work modes, and command-center planning.",
    icon: "◎",
    color: "bg-cyan-100 text-cyan-700",
  },
];

const slides = [
  "Clarity Overview",
  "Money Command",
  "Pantry Command",
  "Focus Command",
  "Life Admin",
];

function DashboardSlide({ title, index }: { title: string; index: number }) {
  return (
    <div className="min-w-full rounded-[28px] bg-[#07111f] p-4 shadow-2xl">
      <div className="grid min-h-[420px] grid-cols-[180px_1fr] overflow-hidden rounded-[22px] border border-white/10 bg-[#081424]">
        <aside className="hidden border-r border-white/10 bg-[#050d18] p-5 text-white md:block">
          <p className="text-xs font-black text-orange-400">CLARITYSTACKED</p>

          <div className="mt-8 space-y-3 text-sm text-slate-300">
            {["Home", "Multistream", "Pantry", "Calmframe", "Decision Helper", "Life Admin"].map(
              (item, i) => (
                <div
                  key={item}
                  className={`rounded-xl px-3 py-2 ${
                    i === index % 6 ? "bg-white/12 text-white" : ""
                  }`}
                >
                  {item}
                </div>
              )
            )}
          </div>

          <div className="mt-20 space-y-3 text-sm text-slate-400">
            <p>Settings</p>
            <p>Help</p>
          </div>
        </aside>

        <section className="p-5">
          <div className="mb-6 flex items-center justify-between">
            <div>
              <h3 className="text-xl font-black text-white">Good morning 👋</h3>
              <p className="text-sm text-slate-300">{title} is ready for today.</p>
            </div>
            <div className="hidden rounded-full bg-black/30 px-4 py-2 text-xs text-slate-300 sm:block">
              Search anything...
            </div>
          </div>

          <div className="grid gap-4 md:grid-cols-4">
            {["Focus Score", "Tasks Done", "Money Flow", "Plans Ready"].map((item, i) => (
              <div key={item} className="rounded-2xl bg-white p-4">
                <p className="text-xs font-bold text-slate-500">{item}</p>
                <p className="mt-2 text-2xl font-black text-slate-950">
                  {["78%", "24", "£2,650", "12"][i]}
                </p>
                <div className="mt-4 h-8 rounded-full bg-gradient-to-r from-orange-100 to-blue-100" />
              </div>
            ))}
          </div>

          <div className="mt-4 grid gap-4 md:grid-cols-[1.1fr_1fr_.8fr]">
            <div className="rounded-2xl bg-white p-5">
              <p className="font-black text-slate-950">Today’s Plan</p>
              <div className="mt-4 space-y-3 text-sm text-slate-600">
                {["Review dashboard", "Client call", "Grocery plan", "Deep work session"].map(
                  (item) => (
                    <p key={item}>○ {item}</p>
                  )
                )}
              </div>
            </div>

            <div className="rounded-2xl bg-white p-5">
              <p className="font-black text-slate-950">Recent Activity</p>
              <div className="mt-4 space-y-3 text-sm text-slate-600">
                <p>● Pantry updated</p>
                <p>● Expense added</p>
                <p>● Decision logged</p>
                <p>● Focus completed</p>
              </div>
            </div>

            <div className="rounded-2xl bg-white p-5">
              <p className="font-black text-slate-950">Quick Access</p>
              <div className="mt-4 space-y-3 text-sm font-bold text-slate-700">
                <button className="w-full rounded-xl border p-3 text-left">Add Expense</button>
                <button className="w-full rounded-xl border p-3 text-left">Plan Meal</button>
                <button className="w-full rounded-xl border p-3 text-left">New Decision</button>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default function Home() {
  return (
    <main className="min-h-screen bg-white text-[#07112f]">
      <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/90 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          <div className="flex items-center gap-3">
            <div className="grid h-10 w-10 place-items-center rounded-xl bg-orange-500 text-lg font-black text-white">
              S
            </div>
            <p className="text-xl font-black tracking-tight">
              CLARITY<span className="text-orange-500">STACKED</span>
            </p>
          </div>

          <nav className="hidden items-center gap-8 text-sm font-bold text-slate-700 lg:flex">
            <a href="#apps">Products</a>
            <a href="#systems">Solutions</a>
            <a href="#resources">Resources</a>
            <a href="#pricing">Pricing</a>
            <a href="#about">About</a>
          </nav>

          <div className="hidden gap-3 sm:flex">
            <button className="rounded-2xl border border-slate-300 px-5 py-3 text-sm font-bold">
              Log in
            </button>
            <button className="rounded-2xl bg-[#07112f] px-5 py-3 text-sm font-bold text-white">
              Get Started
            </button>
          </div>
        </div>
      </header>

      <section className="mx-auto grid max-w-7xl items-center gap-10 px-6 py-14 lg:grid-cols-[.85fr_1.15fr] lg:py-20">
        <div>
          <p className="text-xs font-black uppercase tracking-[0.25em] text-orange-500">
            ● Command systems for real life
          </p>

          <h1 className="mt-6 max-w-xl text-5xl font-black leading-[0.95] tracking-tight sm:text-6xl lg:text-7xl">
            One stack. <br />
            Total clarity<span className="text-orange-500">.</span>
          </h1>

          <p className="mt-6 max-w-lg text-lg leading-8 text-slate-600">
            ClarityStacked brings focused command systems for money, food,
            decisions, focus, and life admin into one powerful ecosystem.
          </p>

          <div className="mt-8 flex flex-col gap-4 sm:flex-row">
            <a
              href="#apps"
              className="rounded-2xl bg-[#07112f] px-7 py-4 text-center text-sm font-black text-white shadow-xl"
            >
              Explore the Systems →
            </a>

            <a
              href="#about"
              className="rounded-2xl border border-slate-300 bg-white px-7 py-4 text-center text-sm font-black text-[#07112f]"
            >
              See How It Works ◉
            </a>
          </div>

          <div className="mt-12 grid grid-cols-2 gap-3 text-xs font-bold text-slate-600 sm:grid-cols-4">
            {["Built for real life", "Private & secure", "Works across devices", "Always improving"].map(
              (item) => (
                <div key={item} className="rounded-xl border border-slate-200 bg-white px-3 py-3">
                  ✓ {item}
                </div>
              )
            )}
          </div>
        </div>

        <div className="relative overflow-hidden">
          <div className="flex dashboard-slider">
            {slides.map((slide, index) => (
              <DashboardSlide key={slide} title={slide} index={index} />
            ))}
          </div>

          <div className="mt-5 flex justify-center gap-2">
            {slides.map((slide, index) => (
              <span
                key={slide}
                className={`h-3 w-3 rounded-full ${
                  index === 0 ? "bg-[#07112f]" : "bg-slate-300"
                }`}
              />
            ))}
          </div>
        </div>
      </section>

      <section id="apps" className="mx-auto max-w-7xl px-6 py-12">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-xs font-black uppercase tracking-[0.25em] text-orange-500">
            ● The ClarityStacked ecosystem
          </p>
          <h2 className="mt-4 text-3xl font-black tracking-tight sm:text-4xl">
            Systems that work together.
          </h2>
          <p className="mt-4 text-slate-600">
            Each tool is powerful on its own. Together, they give you complete
            command over your day, your decisions, your resources, and your life.
          </p>
        </div>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6">
          {apps.map((app) => (
            <article
              key={app.name}
              className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-xl"
            >
              <div className={`grid h-12 w-12 place-items-center rounded-2xl text-xl ${app.color}`}>
                {app.icon}
              </div>
              <h3 className="mt-5 text-lg font-black">{app.name}</h3>
              <p className="mt-3 text-sm leading-6 text-slate-600">{app.description}</p>
              <a className="mt-5 inline-block text-sm font-black text-blue-600" href="#">
                Explore →
              </a>
            </article>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-16">
        <div className="grid items-center gap-6 rounded-[28px] bg-[#07112f] px-8 py-10 text-white md:grid-cols-[1fr_auto]">
          <div>
            <h2 className="text-2xl font-black">Ready to take command?</h2>
            <p className="mt-2 text-sm text-slate-300">
              Build a clearer, more intentional life with ClarityStacked.
            </p>
          </div>
          <a
            href="#"
            className="rounded-2xl bg-orange-500 px-8 py-4 text-center text-sm font-black text-[#07112f]"
          >
            Start Your Journey →
          </a>
        </div>
      </section>
    </main>
  );
}
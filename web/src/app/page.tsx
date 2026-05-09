const apps = [
  {
    name: "MultiStream",
    description:
      "Track income, expenses, invoices, overdue payments, and reports across multiple streams.",
    icon: "▦",
    color: "bg-violet-100 text-violet-700",
    link: "#",
  },
  {
    name: "Prepper Pantry",
    description:
      "Manage pantry inventory, expiry dates, meal planning, restock lists, and food readiness.",
    icon: "🛒",
    color: "bg-green-100 text-green-700",
    link: "#",
  },
  {
    name: "CalmFrame",
    description:
      "Reduce mental noise, reflect clearly, reset your focus, and create calmer routines.",
    icon: "⚡",
    color: "bg-orange-100 text-orange-700",
    link: "#",
  },
  {
    name: "Decision Helper",
    description:
      "Turn overthinking into structured choices using clear decision frameworks.",
    icon: "◇",
    color: "bg-blue-100 text-blue-700",
    link: "#",
  },
  {
    name: "Life Admin OS",
    description:
      "Organise bills, subscriptions, tasks, reminders, reports, and admin routines.",
    icon: "□",
    color: "bg-pink-100 text-pink-700",
    link: "#",
  },
  {
    name: "ADHD Work",
    description:
      "Plan workdays, unpack tasks, prepare meetings, choose work modes, and recover focus.",
    icon: "◎",
    color: "bg-cyan-100 text-cyan-700",
    link: "#",
  },
];

const slides = [
  {
    title: "Clarity Overview",
    active: "Home",
    subtitle: "Your daily command centre is ready.",
    stats: ["78%", "24", "£2,650", "12"],
    labels: ["Focus Score", "Tasks Done", "Money Flow", "Plans Ready"],
  },
  {
    title: "MultiStream",
    active: "MultiStream",
    subtitle: "Your income streams are organised.",
    stats: ["£4,280", "7", "3", "92%"],
    labels: ["This Month", "Streams", "Overdue", "Cash Clarity"],
  },
  {
    title: "Prepper Pantry",
    active: "Pantry",
    subtitle: "Your pantry health is updated.",
    stats: ["86%", "42", "8", "14"],
    labels: ["Pantry Health", "Items", "Expiring", "Meals"],
  },
  {
    title: "CalmFrame",
    active: "CalmFrame",
    subtitle: "Your calm reset is ready.",
    stats: ["6/10", "4", "18m", "3"],
    labels: ["Mood Check", "Entries", "Reset Time", "Tools"],
  },
  {
    title: "Decision Helper",
    active: "Decision Helper",
    subtitle: "Your next decision is clearer.",
    stats: ["High", "5", "2", "1"],
    labels: ["Clarity", "Options", "Risks", "Next Step"],
  },
  {
    title: "Life Admin",
    active: "Life Admin",
    subtitle: "Your life admin is under control.",
    stats: ["9", "4", "2", "£180"],
    labels: ["Tasks", "Bills", "Renewals", "Saved"],
  },
];

function DashboardSlide({
  slide,
  index,
}: {
  slide: (typeof slides)[number];
  index: number;
}) {
  const menu = [
    "Home",
    "MultiStream",
    "Pantry",
    "CalmFrame",
    "Decision Helper",
    "Life Admin",
  ];

  return (
    <div className="min-w-full px-2">
      <div className="rounded-[34px] bg-[#07111f] p-3 shadow-[0_30px_90px_rgba(7,17,47,0.28)] ring-1 ring-slate-900/10">
        <div className="grid min-h-[430px] overflow-hidden rounded-[28px] border border-white/10 bg-[#081424] md:grid-cols-[190px_1fr]">
          <aside className="hidden border-r border-white/10 bg-[#050d18] p-5 text-white md:block">
            <p className="text-xs font-black text-orange-400">
              CLARITY<span className="text-white">STACKED</span>
            </p>

            <div className="mt-8 space-y-3 text-sm text-slate-300">
              {menu.map((item) => (
                <div
                  key={item}
                  className={`rounded-xl px-3 py-2 transition ${
                    item === slide.active
                      ? "bg-white/12 text-white"
                      : "text-slate-400"
                  }`}
                >
                  {item}
                </div>
              ))}
            </div>

            <div className="mt-20 space-y-3 text-sm text-slate-500">
              <p>Settings</p>
              <p>Help</p>
            </div>
          </aside>

          <section className="p-4 sm:p-5">
            <div className="mb-6 flex items-start justify-between gap-4">
              <div>
                <h3 className="text-xl font-black text-white">
                  Good morning 👋
                </h3>
                <p className="mt-1 text-sm text-slate-300">{slide.subtitle}</p>
              </div>

              <div className="hidden rounded-full bg-black/35 px-4 py-2 text-xs text-slate-400 sm:block">
                Search anything...
              </div>
            </div>

            <div className="grid grid-cols-2 gap-3 lg:grid-cols-4">
              {slide.labels.map((item, i) => (
                <div key={item} className="rounded-2xl bg-white p-4">
                  <p className="text-xs font-black leading-4 text-slate-500">
                    {item}
                  </p>
                  <p className="mt-3 text-2xl font-black text-slate-950">
                    {slide.stats[i]}
                  </p>
                  <div className="mt-4 h-8 rounded-full bg-gradient-to-r from-orange-100 via-slate-100 to-blue-100" />
                </div>
              ))}
            </div>

            <div className="mt-4 grid gap-3 lg:grid-cols-[1.05fr_1fr_.8fr]">
              <div className="rounded-2xl bg-white p-5">
                <p className="text-lg font-black text-slate-950">
                  Today’s Plan
                </p>
                <div className="mt-4 space-y-3 text-sm leading-5 text-slate-600">
                  {[
                    "Review dashboard",
                    "Client call",
                    "Grocery plan",
                    "Deep work session",
                  ].map((item) => (
                    <p key={item}>○ {item}</p>
                  ))}
                </div>
              </div>

              <div className="rounded-2xl bg-white p-5">
                <p className="text-lg font-black text-slate-950">
                  Recent Activity
                </p>
                <div className="mt-4 space-y-3 text-sm leading-5 text-slate-600">
                  <p>● Pantry updated</p>
                  <p>● Expense added</p>
                  <p>● Decision logged</p>
                  <p>● Focus completed</p>
                </div>
              </div>

              <div className="rounded-2xl bg-white p-5">
                <p className="text-lg font-black text-slate-950">
                  Quick Access
                </p>
                <div className="mt-4 space-y-3 text-sm font-bold text-slate-700">
                  <button className="w-full rounded-xl border border-slate-300 p-3 text-left">
                    Add Expense
                  </button>
                  <button className="w-full rounded-xl border border-slate-300 p-3 text-left">
                    Plan Meal
                  </button>
                  <button className="w-full rounded-xl border border-slate-300 p-3 text-left">
                    New Decision
                  </button>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>

      <div className="mx-auto mt-5 flex justify-center gap-2">
        {slides.map((item, dotIndex) => (
          <span
            key={item.title}
            className={`h-3 w-3 rounded-full ${
              dotIndex === index ? "bg-[#07112f]" : "bg-slate-300"
            }`}
          />
        ))}
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
            <div className="grid h-11 w-11 place-items-center rounded-2xl bg-orange-500 text-lg font-black text-white shadow-lg shadow-orange-500/20">
              S
            </div>
            <p className="text-xl font-black tracking-tight">
              CLARITY<span className="text-orange-500">STACKED</span>
            </p>
          </div>

          <nav className="hidden items-center gap-8 text-sm font-black text-slate-700 lg:flex">
            <a href="#apps">Products</a>
            <a href="#systems">Solutions</a>
            <a href="#resources">Resources</a>
            <a href="#pricing">Pricing</a>
            <a href="#about">About</a>
          </nav>

          <div className="hidden gap-3 sm:flex">
            <button className="rounded-2xl border border-slate-300 px-6 py-3 text-sm font-black">
              Log in
            </button>
            <button className="rounded-2xl bg-[#07112f] px-6 py-3 text-sm font-black text-white shadow-xl shadow-slate-900/15">
              Get Started
            </button>
          </div>
        </div>
      </header>

      <section className="relative">
        <div className="absolute right-[-120px] top-20 h-[380px] w-[380px] rounded-full bg-orange-200/50 blur-3xl" />
        <div className="absolute left-[-140px] top-56 h-[360px] w-[360px] rounded-full bg-blue-100/80 blur-3xl" />

        <div className="relative mx-auto grid max-w-7xl items-center gap-12 px-5 py-16 lg:grid-cols-[0.82fr_1.18fr] lg:py-24">
          <div>
            <p className="text-xs font-black uppercase tracking-[0.35em] text-orange-500">
              ● Command systems for real life
            </p>

            <h1 className="mt-6 max-w-2xl text-5xl font-black leading-[0.92] tracking-[-0.06em] sm:text-6xl lg:text-7xl">
              One stack. <br />
              Total clarity<span className="text-orange-500">.</span>
            </h1>

            <p className="mt-7 max-w-xl text-lg leading-8 text-slate-600">
              ClarityStacked brings focused command systems for money, food,
              decisions, focus, and life admin into one powerful ecosystem.
            </p>

            <div className="mt-9 flex flex-col gap-4 sm:flex-row">
              <a
                href="#apps"
                className="rounded-2xl bg-[#07112f] px-8 py-4 text-center text-sm font-black text-white shadow-2xl shadow-slate-900/20 transition hover:-translate-y-0.5"
              >
                Explore the Systems →
              </a>

              <a
                href="#about"
                className="rounded-2xl border border-slate-300 bg-white px-8 py-4 text-center text-sm font-black text-[#07112f] shadow-sm transition hover:-translate-y-0.5"
              >
                See How It Works ◉
              </a>
            </div>

            <div className="mt-12 grid grid-cols-2 gap-3 text-xs font-black text-slate-600 sm:grid-cols-4">
              {[
                "Built for real life",
                "Private & secure",
                "Works across devices",
                "Always improving",
              ].map((item) => (
                <div
                  key={item}
                  className="rounded-2xl border border-slate-200 bg-white/80 px-4 py-3 shadow-sm backdrop-blur"
                >
                  ✓ {item}
                </div>
              ))}
            </div>
          </div>

          <div className="relative">
            <div className="absolute -left-8 top-16 hidden h-[78%] w-28 rounded-[28px] bg-[#07111f]/75 blur-[1px] lg:block" />
            <div className="absolute -right-8 top-16 hidden h-[78%] w-28 rounded-[28px] bg-[#07111f]/75 blur-[1px] lg:block" />

            <div className="relative overflow-hidden">
              <div className="flex dashboard-slider">
                {slides.map((slide, index) => (
                  <DashboardSlide key={slide.title} slide={slide} index={index} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="apps" className="mx-auto max-w-7xl px-5 py-16">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-xs font-black uppercase tracking-[0.3em] text-orange-500">
            ● The ClarityStacked ecosystem
          </p>
          <h2 className="mt-4 text-3xl font-black tracking-tight sm:text-5xl">
            Systems that work together.
          </h2>
          <p className="mt-5 text-base leading-7 text-slate-600">
            Each tool is powerful on its own. Together, they give you command
            over your day, decisions, resources, and life.
          </p>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6">
          {apps.map((app) => (
            <article
              key={app.name}
              className="group rounded-3xl border border-slate-200 bg-white p-6 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-2xl hover:shadow-slate-900/10"
            >
              <div
                className={`grid h-12 w-12 place-items-center rounded-2xl text-xl ${app.color}`}
              >
                {app.icon}
              </div>
              <h3 className="mt-5 text-lg font-black">{app.name}</h3>
              <p className="mt-3 text-sm leading-6 text-slate-600">
                {app.description}
              </p>
              <a
                className="mt-5 inline-block text-sm font-black text-blue-600"
                href={app.link}
              >
                Explore →
              </a>
            </article>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 pb-20">
        <div className="relative overflow-hidden rounded-[32px] bg-[#07112f] px-8 py-10 text-white shadow-2xl shadow-slate-900/20 md:px-12">
          <div className="absolute right-0 top-0 h-40 w-40 rounded-full bg-orange-400/30 blur-3xl" />
          <div className="relative grid items-center gap-8 md:grid-cols-[1fr_auto]">
            <div>
              <h2 className="text-3xl font-black">Ready to take command?</h2>
              <p className="mt-3 max-w-xl text-sm leading-6 text-slate-300">
                Build a clearer, more intentional life with tools designed to
                reduce chaos and make everyday systems easier to manage.
              </p>
            </div>
            <a
              href="#"
              className="rounded-2xl bg-orange-500 px-8 py-4 text-center text-sm font-black text-[#07112f] shadow-xl shadow-orange-500/20"
            >
              Start Your Journey →
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
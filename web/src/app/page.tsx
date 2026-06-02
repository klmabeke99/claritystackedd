"use client";

import { useEffect, useRef, useState } from "react";
import FadeIn from "./components/FadeIn";
import { resources as digitalResources } from "./data/resources";

const apps = [
{
  name: "SaaS Build OS",
  description:
    "AI-guided SaaS building support for turning ideas into structured projects, setup steps, workflows, code implementation, debugging, deployment, and launch.",
  icon: "SB",
  color: "bg-blue-100 text-blue-700",
  link: "https://clarity-content-os.vercel.app/",
  preview: "/previews/saas-build.png",
},
  {
    name: "MultiStream Command",
    description:
      "AI-assisted income clarity for tracking streams, invoices, expenses, overdue payments, reviews, and business reports.",
    icon: "▦",
    color: "bg-violet-100 text-violet-700",
    link: "https://freelance-command-center-opal.vercel.app/",
    preview: "/previews/multistream.png",
  },
  {
    name: "Prepper Pantry",
    description:
      "AI-assisted pantry planning for inventory, expiry dates, meals, restocks, preservation, audits, and food readiness.",
    icon: "🛒",
    color: "bg-green-100 text-green-700",
    link: "https://prepper-pantry-command.vercel.app/",
    preview: "/previews/prepper-pantry.png",
  },
  {
    name: "CalmFrame",
    description:
      "AI-assisted calm support for reducing mental noise, reframing thoughts, tracking patterns, and building clearer routines.",
    icon: "⚡",
    color: "bg-orange-100 text-orange-700",
    link: "https://calmframe.vercel.app/",
    preview: "/previews/calmframe.png",
  },
  {
    name: "Decision Helper",
    description:
      "AI-assisted decision support that turns overthinking into structured options, clearer trade-offs, and practical next steps.",
    icon: "◇",
    color: "bg-blue-100 text-blue-700",
    link: "https://decision-helper-app-brown.vercel.app/",
    preview: "/previews/decision-helper.png",
  },
  {
    name: "Life Admin OS",
    description:
      "AI-assisted life admin control for bills, subscriptions, tasks, reminders, reports, and everyday routines.",
    icon: "□",
    color: "bg-pink-100 text-pink-700",
    link: "https://life-admin-os-zeta.vercel.app/",
    preview: "/previews/life-admin.png",
  },
  {
    name: "ADHD Work",
    description:
      "AI-assisted work support for planning days, unpacking tasks, preparing meetings, choosing work modes, and recovering focus.",
    icon: "◎",
    color: "bg-cyan-100 text-cyan-700",
    link: "https://adhd-work-app.vercel.app/",
    preview: "/previews/adhd-work.png",
  },
];

const solutions = [
  "Money clarity",
  "Food readiness",
  "Mental calm",
  "Decision support",
  "Life organisation",
  "Focus systems",
];

const learningResources = [
  "Product walkthroughs",
  "Founder build notes",
  "LinkedIn carousel guides",
  "Workflow examples",
];

const pricingOptions = [
  {
    title: "Start Free",
    description:
      "Explore the ecosystem and open each product to begin using the core tools.",
  },
  {
    title: "Upgrade by App",
    description:
      "Each product can grow with premium features, AI support, reports, and saved systems.",
  },
  {
    title: "Future Bundle",
    description:
      "A ClarityStacked ecosystem bundle can bring multiple command systems together later.",
  },
];

function getInternalLink(appName: string) {
  if (appName === "SaaS Build OS") return "/saas-build";
  if (appName === "MultiStream Command") return "/multistream";
  if (appName === "Prepper Pantry") return "/prepper-pantry";
  if (appName === "CalmFrame") return "/calmframe";
  if (appName === "Decision Helper") return "/decision-helper";
  if (appName === "Life Admin OS") return "/life-admin";
  if (appName === "ADHD Work") return "/adhd-work";
  return "/";
}

function PremiumCarousel({
  items,
  renderItem,
  label,
}: {
  items: any[];
  renderItem: (item: any) => React.ReactNode;
  label: string;
}) {
  const [activeIndex, setActiveIndex] = useState(0);
  const touchStartX = useRef<number | null>(null);

  const goTo = (index: number) => {
    if (index < 0) setActiveIndex(items.length - 1);
    else if (index >= items.length) setActiveIndex(0);
    else setActiveIndex(index);
  };

  const previous = () => goTo(activeIndex - 1);
  const next = () => goTo(activeIndex + 1);

  useEffect(() => {
  const interval = setInterval(() => {
    setActiveIndex((prev) =>
      prev === items.length - 1 ? 0 : prev + 1
    );
  }, 5000);

  return () => clearInterval(interval);
}, [items.length]);

  return (
    <div className="relative">
      <div
        className="overflow-hidden rounded-[36px]"
        onTouchStart={(event) => {
          touchStartX.current = event.touches[0].clientX;
        }}
        onTouchEnd={(event) => {
          if (touchStartX.current === null) return;

          const touchEndX = event.changedTouches[0].clientX;
          const difference = touchStartX.current - touchEndX;

          if (difference > 45) next();
          if (difference < -45) previous();

          touchStartX.current = null;
        }}
      >
        <div
          className="flex transition-transform duration-700 ease-out"
          style={{ transform: `translateX(-${activeIndex * 100}%)` }}
        >
          {items.map((item, index) => (
            <div
              key={item.slug || item.name || index}
              className="min-w-full px-2"
            >
              {renderItem(item)}
            </div>
          ))}
        </div>
      </div>

      <button
        type="button"
        onClick={previous}
        aria-label={`Previous ${label}`}
        className="absolute left-3 top-1/2 z-20 grid h-10 w-10 -translate-y-1/2 place-items-center rounded-full bg-white/95 text-xl font-black text-[#07112f] shadow-xl transition hover:bg-orange-50"
      >
        ←
      </button>

      <button
        type="button"
        onClick={next}
        aria-label={`Next ${label}`}
        className="absolute right-3 top-1/2 z-20 grid h-10 w-10 -translate-y-1/2 place-items-center rounded-full bg-white/95 text-xl font-black text-[#07112f] shadow-xl transition hover:bg-orange-50"
      >
        →
      </button>
    </div>
  );
}

function AppPreviewSlide({ app }: { app: (typeof apps)[number] }) {
  return (
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

      <a href={app.link} target="_blank" rel="noreferrer" className="block">
        <div className="relative aspect-[4/3] overflow-hidden rounded-b-[26px] bg-[#07112f]">
        <img
        src={app.preview}
       alt={`${app.name} screenshot preview`}
       className="h-full w-full object-cover transition duration-700 hover:scale-[1.02]"
       />

          <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#07112f]/10 via-transparent to-white/0" />
        </div>
      </a>
    </div>
  );
}

function ResourcePreviewSlide({ resource }: { resource: any }) {
  return (
    <a
      href={`/resources/${resource.slug}`}
      className="block overflow-hidden rounded-[34px] border border-slate-200 bg-[#07112f] p-3 shadow-[0_34px_90px_rgba(7,17,47,0.22)]"
    >
      <div className="flex items-center justify-between gap-4 border-b border-white/10 px-4 py-4 text-white">
        <div>
          <p className="text-base font-black text-orange-400">
            CLARITYSTACKED RESOURCES
          </p>
          <p className="mt-1 text-sm font-bold text-slate-400">
            {resource.category}
          </p>
        </div>

        <span className="shrink-0 rounded-full bg-white px-5 py-3 text-sm font-black text-[#07112f] shadow-lg">
          {resource.price}
        </span>
      </div>

      <div className="relative aspect-video overflow-hidden rounded-b-[26px] bg-[#101936]">
        <img
          src={resource.previewImage}
          alt={resource.title}
          className="h-full w-full object-contain transition duration-700 hover:scale-[1.03]"
        />

        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#07112f]/20 via-transparent to-white/0" />
      </div>
    </a>
  );
}

export default function Home() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <main className="min-h-screen overflow-hidden bg-white text-[#07112f]">
      <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/90 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4">
          <div className="flex items-center gap-3">
            <div className="grid h-12 w-12 place-items-center rounded-2xl bg-orange-500 text-sm font-black text-white shadow-lg shadow-orange-500/20">
              CS
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
            <a
              href="#apps"
              className="rounded-2xl bg-[#07112f] px-6 py-3 text-base font-black text-white shadow-xl shadow-slate-900/15 transition hover:-translate-y-0.5"
            >
              Explore Apps
            </a>
          </div>

          <button
            type="button"
            onClick={() => setMobileMenuOpen((open) => !open)}
            className="grid h-12 w-12 place-items-center rounded-2xl border border-slate-200 bg-white text-2xl font-black text-[#07112f] shadow-sm lg:hidden"
            aria-label="Open mobile menu"
          >
            {mobileMenuOpen ? "×" : "☰"}
          </button>
        </div>

        {mobileMenuOpen && (
          <div className="border-t border-slate-200 bg-white px-5 py-5 lg:hidden">
            <nav className="grid gap-3 text-base font-black text-slate-700">
              {[
                ["Products", "#apps"],
                ["Solutions", "#systems"],
                ["Resources", "#resources"],
                ["Pricing", "#pricing"],
                ["About", "#about"],
              ].map(([label, href]) => (
                <a
                  key={label}
                  href={href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="rounded-2xl border border-slate-200 bg-slate-50 px-5 py-4"
                >
                  {label}
                </a>
              ))}

              <a
                href="#apps"
                onClick={() => setMobileMenuOpen(false)}
                className="rounded-2xl bg-[#07112f] px-5 py-4 text-center text-white"
              >
                Explore Apps
              </a>
            </nav>
          </div>
        )}
      </header>

      <section className="relative">
        <div className="absolute right-[-140px] top-20 h-[440px] w-[440px] rounded-full bg-orange-200/50 blur-3xl" />
        <div className="absolute left-[-160px] top-56 h-[420px] w-[420px] rounded-full bg-blue-100/80 blur-3xl" />

        <div className="relative mx-auto grid max-w-7xl items-center gap-10 px-5 pb-10 pt-14 lg:grid-cols-[0.8fr_1.2fr] lg:pb-12 lg:pt-20">
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
            <PremiumCarousel
              items={apps}
              label="app preview"
              renderItem={(app) => <AppPreviewSlide app={app} />}
            />

            <p className="mt-4 text-center text-sm font-bold text-slate-500">
              Real product previews from the ClarityStacked ecosystem
            </p>
          </div>
        </div>
      </section>

      <FadeIn>
        <section id="apps" className="mx-auto max-w-7xl px-5 pb-16 pt-8">
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
                  href={getInternalLink(app.name)}
                  target="_self"
                >
                  Explore →
                </a>
              </article>
            ))}
          </div>
        </section>
      </FadeIn>

      <FadeIn>
        <section id="comparison" className="mx-auto max-w-7xl px-5 py-16">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-sm font-black uppercase tracking-[0.3em] text-orange-500">
              ● Compare the systems
            </p>
            <h2 className="mt-4 text-4xl font-black tracking-tight sm:text-6xl">
              Choose the system that fits your current chaos.
            </h2>
            <p className="mt-5 text-lg leading-8 text-slate-600">
              Each ClarityStacked app solves a different everyday problem,
              while staying part of one connected ecosystem.
            </p>
          </div>

          <div className="mt-12 overflow-hidden rounded-[32px] border border-slate-200 bg-white shadow-sm">
            <div className="grid grid-cols-1 divide-y divide-slate-200 lg:grid-cols-4 lg:divide-x lg:divide-y-0">
        {[
  {
    product: "SaaS Build OS",
    solves: "Not knowing how to build a SaaS product",
    bestFor: "Founders, beginners, side hustlers",
    focus: "Launch a SaaS",
  },
  {
    product: "MultiStream",
    solves: "Income and invoice chaos",
    bestFor: "Freelancers, creators, side hustlers",
    focus: "Money clarity",
  },
  {
    product: "Prepper Pantry",
    solves: "Food waste and pantry confusion",
    bestFor: "Homes, preppers, busy families",
    focus: "Food readiness",
  },
  {
    product: "CalmFrame",
    solves: "Mental noise and emotional overwhelm",
    bestFor: "People needing calmer routines",
    focus: "Mental clarity",
  },
  {
    product: "Decision Helper",
    solves: "Overthinking and decision paralysis",
    bestFor: "Big choices and stuck moments",
    focus: "Clear decisions",
  },
  {
    product: "Life Admin OS",
    solves: "Bills, tasks, subscriptions, reminders",
    bestFor: "Everyday life organisation",
    focus: "Admin control",
  },
  {
    product: "ADHD Work",
    solves: "Focus, workday, and task overwhelm",
    bestFor: "ADHD-friendly work support",
    focus: "Focus systems",
  },
].map((item) => (
                <div key={item.product} className="p-6">
                  <h3 className="text-xl font-black">{item.product}</h3>
                  <p className="mt-4 text-sm font-black uppercase tracking-[0.2em] text-orange-500">
                    Solves
                  </p>
                  <p className="mt-2 text-base leading-7 text-slate-600">
                    {item.solves}
                  </p>

                  <p className="mt-5 text-sm font-black uppercase tracking-[0.2em] text-orange-500">
                    Best for
                  </p>
                  <p className="mt-2 text-base leading-7 text-slate-600">
                    {item.bestFor}
                  </p>

                  <p className="mt-5 rounded-2xl bg-slate-50 px-4 py-3 text-sm font-black text-slate-800">
                    {item.focus}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </FadeIn>

      <FadeIn>
        <section className="mx-auto max-w-7xl px-5 py-16">
          <div className="relative overflow-hidden rounded-[40px] bg-[#07112f] px-8 py-12 text-white shadow-2xl shadow-slate-900/20 md:px-12 md:py-16">
            <div className="absolute left-[-100px] top-[-100px] h-72 w-72 rounded-full bg-orange-500/20 blur-3xl" />
            <div className="absolute bottom-[-120px] right-[-100px] h-72 w-72 rounded-full bg-blue-500/20 blur-3xl" />

            <div className="relative mx-auto max-w-5xl text-center">
              <p className="text-sm font-black uppercase tracking-[0.35em] text-orange-400">
                ● Shared ecosystem
              </p>

              <h2 className="mt-5 text-4xl font-black tracking-tight sm:text-6xl">
                One ecosystem. <br />
                Multiple command systems.
              </h2>

              <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-slate-300">
                ClarityStacked is designed as a connected ecosystem of focused
                command systems that reduce overwhelm and help people manage
                real-life chaos with more clarity, structure, and control.
              </p>

              <div className="mt-12 grid gap-5 md:grid-cols-3">
                {[
                  [
                    "Focused",
                    "Each app solves one clear real-life problem instead of trying to do everything at once.",
                  ],
                  [
                    "Connected",
                    "The systems are designed to feel aligned visually, structurally, and philosophically as the ecosystem grows.",
                  ],
                  [
                    "Practical",
                    "Every product is built around practical daily clarity instead of complicated productivity theory.",
                  ],
                ].map(([title, body]) => (
                  <div
                    key={title}
                    className="rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur"
                  >
                    <p className="text-2xl font-black text-orange-400">
                      {title}
                    </p>
                    <p className="mt-3 text-base leading-7 text-slate-300">
                      {body}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      </FadeIn>

      <FadeIn>
        <section id="systems" className="mx-auto max-w-7xl px-5 py-16">
          <div className="rounded-[36px] bg-slate-50 p-8 md:p-12">
            <p className="text-sm font-black uppercase tracking-[0.3em] text-orange-500">
              ● Solutions
            </p>
            <h2 className="mt-4 max-w-3xl text-4xl font-black tracking-tight sm:text-6xl">
              Built around the everyday chaos people actually face.
            </h2>

            <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {solutions.map((solution) => (
                <div
                  key={solution}
                  className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm"
                >
                  <p className="text-xl font-black">{solution}</p>
                  <p className="mt-3 text-base leading-7 text-slate-600">
                    A focused command system designed to reduce scattered
                    decisions and help you take the next clear step.
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </FadeIn>

      <FadeIn>
        <section id="resources" className="mx-auto max-w-7xl px-5 py-16">
          <div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:items-center">
            <div>
              <p className="text-sm font-black uppercase tracking-[0.3em] text-orange-500">
                ● Resources
              </p>
              <h2 className="mt-4 text-4xl font-black tracking-tight sm:text-6xl">
                Learn the systems behind the tools.
              </h2>
              <p className="mt-5 text-lg leading-8 text-slate-600">
                Resources include practical guides, digital workbooks, guided
                systems, and clarity tools designed to help people use structure
                in real life.
              </p>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              {learningResources.map((resource) => (
                <div
                  key={resource}
                  className="rounded-3xl border border-slate-200 bg-white p-6 text-lg font-black shadow-sm"
                >
                  ◉ {resource}
                </div>
              ))}
            </div>
          </div>
        </section>
      </FadeIn>

      <FadeIn>
        <section className="mx-auto max-w-7xl px-5 py-16">
          <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-center">
            <div>
              <p className="text-sm font-black uppercase tracking-[0.3em] text-orange-500">
                ● Digital resource systems
              </p>

              <h2 className="mt-4 text-4xl font-black tracking-tight sm:text-6xl">
                Guided systems you can use on iPad, phone, tablet, or laptop.
              </h2>

              <p className="mt-5 text-lg leading-8 text-slate-600">
                These are not ordinary ebooks. They are interactive workbook
                systems, digital journals, planners, and guided clarity tools
                designed for annotation apps like GoodNotes, Notability, Xodo,
                and Apple Files.
              </p>

              <a
                href="/resources"
                className="mt-8 inline-flex rounded-2xl bg-[#07112f] px-7 py-4 text-base font-black text-white shadow-xl shadow-slate-900/15 transition hover:-translate-y-0.5"
              >
                Explore resources →
              </a>
            </div>

            <div className="relative min-w-0">
              <PremiumCarousel
                items={digitalResources}
                label="resource preview"
                renderItem={(resource) => (
                  <ResourcePreviewSlide resource={resource} />
                )}
              />

              <p className="mt-4 text-center text-sm font-bold text-slate-500">
                Browse all premium digital systems from the ClarityStacked
                resource library
              </p>
            </div>
          </div>
        </section>
      </FadeIn>

      <FadeIn>
        <section id="pricing" className="mx-auto max-w-7xl px-5 py-16">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-sm font-black uppercase tracking-[0.3em] text-orange-500">
              ● Pricing
            </p>
            <h2 className="mt-4 text-4xl font-black tracking-tight sm:text-6xl">
              Start simple. Upgrade when you need more.
            </h2>
            <p className="mt-5 text-lg leading-8 text-slate-600">
              Pricing can stay flexible while each product grows. For now,
              ClarityStacked helps users discover the right system first.
            </p>
          </div>

          <div className="mt-12 grid gap-6 lg:grid-cols-3">
            {pricingOptions.map((option) => (
              <div
                key={option.title}
                className="rounded-[32px] border border-slate-200 bg-white p-8 shadow-sm"
              >
                <h3 className="text-2xl font-black">{option.title}</h3>
                <p className="mt-4 text-base leading-7 text-slate-600">
                  {option.description}
                </p>
              </div>
            ))}
          </div>
        </section>
      </FadeIn>

      <FadeIn>
        <section id="about" className="mx-auto max-w-7xl px-5 py-16">
          <div className="relative overflow-hidden rounded-[36px] bg-[#07112f] p-8 text-white shadow-2xl shadow-slate-900/20 md:p-12">
            <div className="absolute right-[-80px] top-[-80px] h-64 w-64 rounded-full bg-orange-400/30 blur-3xl" />

            <div className="relative max-w-4xl">
              <p className="text-sm font-black uppercase tracking-[0.3em] text-orange-400">
                ● About ClarityStacked
              </p>
              <h2 className="mt-4 text-4xl font-black tracking-tight sm:text-6xl">
                ClarityStacked exists to turn scattered life systems into calm,
                usable command centres.
              </h2>
              <p className="mt-6 text-lg leading-8 text-slate-300">
                The mission is simple: build practical tools that help people
                manage money, food, focus, admin, decisions, and mental clarity
                without feeling overwhelmed by complicated software.
              </p>
            </div>
          </div>
        </section>
      </FadeIn>

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

      <footer className="border-t border-slate-200 bg-slate-50">
        <div className="mx-auto grid max-w-7xl gap-10 px-5 py-12 md:grid-cols-[1.2fr_0.8fr_0.8fr]">
          <div>
            <div className="flex items-center gap-3">
              <div className="grid h-11 w-11 place-items-center rounded-2xl bg-orange-500 text-sm font-black text-white shadow-lg shadow-orange-500/20">
                CS
              </div>
              <p className="text-2xl font-black tracking-tight">
                CLARITY<span className="text-orange-500">STACKED</span>
              </p>
            </div>

            <p className="mt-5 max-w-md text-base leading-7 text-slate-600">
              Command systems for money, food, focus, decisions, mental clarity,
              and everyday life admin.
            </p>

            <p className="mt-6 text-sm font-bold text-slate-500">
              © {new Date().getFullYear()} ClarityStacked. All rights reserved.
            </p>
          </div>

          <div>
            <h3 className="text-sm font-black uppercase tracking-[0.25em] text-slate-500">
              Ecosystem
            </h3>

            <div className="mt-5 grid gap-3 text-base font-bold text-slate-700">
              <a href="#apps">Products</a>
              <a href="#systems">Solutions</a>
              <a href="#pricing">Pricing</a>
              <a href="#about">About</a>
            </div>
          </div>

          <div>
            <h3 className="text-sm font-black uppercase tracking-[0.25em] text-slate-500">
              Products
            </h3>

            <div className="mt-5 grid gap-3 text-base font-bold text-slate-700">
             <a href="/saas-build">SaaS Build OS</a>
              <a href="/multistream">MultiStream</a>
              <a href="/prepper-pantry">Prepper Pantry</a>
              <a href="/calmframe">CalmFrame</a>
              <a href="/decision-helper">Decision Helper</a>
              <a href="/life-admin">Life Admin OS</a>
              <a href="/adhd-work">ADHD Work</a>
            </div>
          </div>
        </div>
      </footer>
    </main>
  );
}


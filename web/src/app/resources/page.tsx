import Link from "next/link";
import SiteHeader from "../components/SiteHeader";

import { resourceCategories, resources } from "../data/resources";

export default function ResourcesPage() {
  return (
    <main className="min-h-screen bg-white text-[#07112f]">
      <SiteHeader />

     <section className="relative overflow-hidden bg-gradient-to-br from-white via-white to-orange-50/60">
        <div className="absolute right-[-160px] top-10 h-[420px] w-[420px] rounded-full bg-orange-200/45 blur-3xl" />
        <div className="absolute left-[-180px] top-56 h-[420px] w-[420px] rounded-full bg-blue-100/80 blur-3xl" />

        <div className="relative mx-auto max-w-7xl px-5 pb-24 pt-16">
          <div className="max-w-4xl">
            <p className="text-sm font-black uppercase tracking-[0.32em] text-orange-500">
              ● ClarityStacked Resources
            </p>

            <h1 className="mt-6 max-w-4xl text-5xl font-black leading-[0.96] tracking-[-0.055em] sm:text-6xl lg:text-7xl">
              Guided systems for calmer clarity
              <span className="text-orange-500">.</span>
            </h1>

            <p className="mt-8 max-w-3xl text-lg leading-8 text-slate-600">
              Interactive workbook systems, digital reflection journals,
              planners, productivity tools, and guided frameworks designed for
              everyday clarity, calm, focus, and intentional progress.
            </p>
          </div>

          <div className="mt-10 flex flex-wrap gap-4">
            {[
              "iPad friendly",
              "GoodNotes compatible",
              "Digital journaling ready",
              "Annotation app friendly",
              "Use across devices",
            ].map((item) => (
              <div
                key={item}
                className="rounded-full border border-slate-200 bg-white px-4 py-3 text-sm font-black text-slate-700 shadow-sm"
              >
                ✓ {item}
              </div>
            ))}
          </div>

          <div className="mt-10 flex flex-wrap gap-4">
            {resourceCategories.map((category) => (
              <button
                key={category}
                className="rounded-2xl border border-slate-200 bg-white px-4 py-3 text-sm font-black text-slate-700 shadow-sm transition hover:-translate-y-0.5 hover:shadow-lg"
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

     <section className="mx-auto max-w-7xl px-5 pt-40 pb-20">
        <div className="flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="text-sm font-black uppercase tracking-[0.28em] text-orange-500">
              ● Resource library
            </p>

            <h2 className="mt-5 text-4xl font-black tracking-tight sm:text-5xl">
              Browse the full ecosystem.
            </h2>
          </div>

          <p className="text-sm font-black uppercase tracking-[0.18em] text-slate-500">
            {resources.length} systems available
          </p>
        </div>

        <div className="mt-20 grid gap-10 sm:grid-cols-2 xl:grid-cols-3">
          {resources.map((resource) => (
            <Link
              key={resource.slug}
              href={`/resources/${resource.slug}`}
              className="group overflow-hidden rounded-[34px] border border-slate-200 bg-white shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-2xl hover:shadow-slate-900/10"
            >
             <div className="bg-[#07112f] p-5">
           <div className="mx-auto aspect-[4/5] w-full max-w-[220px] overflow-hidden rounded-[22px] bg-white shadow-2xl sm:max-w-[240px]">
                  <img
                    src={resource.coverImage}
                    alt={resource.title}
                    className="h-full w-full object-cover object-top transition duration-700 group-hover:scale-[1.03]"
                  />
                </div>
              </div>

              <div className="flex min-h-[330px] flex-col p-7">
                <div className="flex flex-wrap gap-3">
                  <span className="rounded-full bg-orange-100 px-4 py-2 text-[10px] font-black uppercase tracking-[0.14em] text-orange-700">
                    {resource.category}
                  </span>

                  <span className="rounded-full bg-slate-100 px-4 py-2 text-[10px] font-black uppercase tracking-[0.14em] text-slate-700">
                    {resource.format}
                  </span>
                </div>

                <h3 className="mt-6 text-3xl font-black leading-tight tracking-tight">
                  {resource.shortTitle}
                </h3>

                <p className="mt-5 flex-1 text-[17px] leading-8 text-slate-600">
                  {resource.subtitle}
                </p>

                <div className="mt-7 flex flex-wrap gap-3">
                  {resource.bestFor.slice(0, 2).map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full border border-slate-200 bg-slate-50 px-4 py-2 text-sm font-bold text-slate-700"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="mt-9 flex items-center justify-between gap-5">
                  <p className="text-3xl font-black text-[#07112f]">
                    {resource.price}
                  </p>

                  <span className="rounded-2xl bg-[#07112f] px-6 py-3 text-sm font-black text-white shadow-xl shadow-slate-900/15">
                    View →
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </main>
  );
}
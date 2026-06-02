import Link from "next/link";

export default function SaaSBuildPage() {
  return (
    <main className="min-h-screen bg-white text-[#07112f]">
      <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/90 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4">
          <Link href="/" className="flex items-center gap-3">
            <div className="grid h-12 w-12 place-items-center rounded-2xl bg-orange-500 text-sm font-black text-white shadow-lg shadow-orange-500/20">
              CS
            </div>

            <p className="text-2xl font-black tracking-tight">
              CLARITY<span className="text-orange-500">STACKED</span>
            </p>
          </Link>

          <Link
            href="/"
            className="rounded-2xl border border-slate-300 bg-white px-6 py-3 text-sm font-black text-[#07112f] shadow-sm"
          >
            ← Back home
          </Link>
        </div>
      </header>

      {/* HERO */}

      <section className="relative overflow-hidden">
        <div className="absolute right-[-140px] top-16 h-[420px] w-[420px] rounded-full bg-blue-100 blur-3xl" />
        <div className="absolute left-[-140px] top-56 h-[420px] w-[420px] rounded-full bg-orange-100 blur-3xl" />

        <div className="relative mx-auto max-w-7xl px-5 py-20">
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
            <div>
              <p className="text-sm font-black uppercase tracking-[0.3em] text-blue-600">
                ● SaaS Build OS
              </p>

              <h1 className="mt-5 text-5xl font-black tracking-tight sm:text-7xl">
                Build Your SaaS
                <br />
                Without Feeling Lost.
              </h1>

              <p className="mt-6 max-w-xl text-lg leading-8 text-slate-600">
                A guided founder operating system that takes you from idea to
                launch using GitHub, Vercel, Supabase, Stripe and AI.
              </p>

              <div className="mt-8 flex flex-col gap-4 sm:flex-row">
                <a
                  href="https://clarity-content-os.vercel.app/"
                  target="_blank"
                  rel="noreferrer"
                  className="rounded-2xl bg-[#07112f] px-8 py-4 text-center font-black text-white"
                >
                  Launch SaaS Build OS →
                </a>

                <a
                  href="#workflow"
                  className="rounded-2xl border border-slate-300 px-8 py-4 text-center font-black"
                >
                  View Workflow
                </a>
              </div>
            </div>

            <div>
              <div className="overflow-hidden rounded-[36px] border border-slate-200 bg-[#07112f] p-3 shadow-2xl">
                <img
                  src="/previews/saas-build.png"
                  alt="SaaS Build OS"
                  className="w-full rounded-[24px]"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PAIN POINTS */}

      <section className="mx-auto max-w-7xl px-5 py-20">
        <div className="max-w-3xl">
          <h2 className="text-4xl font-black sm:text-6xl">
            Most founders never launch.
          </h2>

          <p className="mt-5 text-lg leading-8 text-slate-600">
            Not because they lack ideas. Because the process feels confusing,
            overwhelming and expensive.
          </p>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {[
            "Too many ideas",
            "Don't know where to start",
            "Overwhelmed by tech setup",
            "Confused by GitHub and deployment",
            "Can't afford developers",
            "Keep starting over",
          ].map((item) => (
            <div
              key={item}
              className="rounded-[28px] border border-slate-200 bg-white p-6 shadow-sm"
            >
              <p className="text-lg font-black">{item}</p>
            </div>
          ))}
        </div>
      </section>

      {/* WORKFLOW */}

      <section
        id="workflow"
        className="bg-slate-50 py-20"
      >
        <div className="mx-auto max-w-7xl px-5">
          <div className="max-w-3xl">
            <h2 className="text-4xl font-black sm:text-6xl">
              Go from idea to working SaaS.
            </h2>
          </div>

          <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            {[
              "Idea Validation",
              "Project Blueprint",
              "Launch Workflow",
              "Build Command Center",
              "Build Editor",
              "AI Debug Assistant",
              "Deployment",
              "Launch",
            ].map((step, index) => (
              <div
                key={step}
                className="rounded-[28px] border border-slate-200 bg-white p-6 shadow-sm"
              >
                <p className="text-sm font-black text-blue-600">
                  STEP {index + 1}
                </p>

                <p className="mt-3 text-xl font-black">
                  {step}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FEATURES */}

      <section className="mx-auto max-w-7xl px-5 py-20">
        <div className="text-center">
          <h2 className="text-4xl font-black sm:text-6xl">
            Everything you need to launch.
          </h2>
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {[
            "AI Blueprint Generator",
            "Guided Workflow Roadmap",
            "Build Command Center",
            "Build Editor",
            "AI Debug Assistant",
            "GitHub Guidance",
            "Vercel Guidance",
            "Supabase Guidance",
            "Stripe Guidance",
            "Launch Checklist",
          ].map((feature) => (
            <div
              key={feature}
              className="rounded-[28px] border border-slate-200 bg-white p-6 shadow-sm"
            >
              <p className="font-black">{feature}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}

      <section className="mx-auto max-w-7xl px-5 pb-20">
        <div className="rounded-[40px] bg-[#07112f] px-8 py-16 text-center text-white">
          <h2 className="text-4xl font-black sm:text-6xl">
            Stop watching tutorials.
            <br />
            Start building.
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-slate-300">
            SaaS Build OS guides you through the entire journey from idea to
            launch using the exact tools modern founders use today.
          </p>

          <a
            href="https://clarity-content-os.vercel.app/"
            target="_blank"
            rel="noreferrer"
            className="mt-10 inline-flex rounded-2xl bg-orange-500 px-8 py-4 font-black text-[#07112f]"
          >
            Open SaaS Build OS →
          </a>
        </div>
      </section>
    </main>
  );
}

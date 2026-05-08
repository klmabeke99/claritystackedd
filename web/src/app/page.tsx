export default function Home() {
  return (
    <main className="min-h-screen bg-[#efe7dc] px-6 py-10 text-[#142033]">
      <section className="mx-auto max-w-6xl rounded-[32px] border border-[#ddd1c0] bg-[#fbf8f3] p-8 shadow-sm">
        <p className="text-sm font-bold uppercase tracking-[0.25em] text-[#f5a000]">
          ClarityStacked
        </p>

        <h1 className="mt-6 max-w-3xl text-4xl font-black tracking-tight sm:text-6xl">
          Simple command systems for daily life.
        </h1>

        <p className="mt-6 max-w-2xl text-lg leading-8 text-[#576579]">
          ClarityStacked brings focused tools for money, food, decisions,
          focus, and life admin into one clear product family.
        </p>

        <div className="mt-8 flex flex-col gap-3 sm:flex-row">
          <a
            href="#apps"
            className="rounded-2xl bg-[#07112f] px-6 py-4 text-center text-sm font-bold text-white"
          >
            Explore systems
          </a>

          <a
            href="#about"
            className="rounded-2xl border border-[#ddd1c0] bg-white px-6 py-4 text-center text-sm font-bold text-[#142033]"
          >
            What is ClarityStacked?
          </a>
        </div>
      </section>
    </main>
  );
}
import Link from "next/link";
import { notFound } from "next/navigation";
import SiteHeader from "../../components/SiteHeader";
import ResourceCheckoutButton from "../../components/ResourceCheckoutButton";
import { getResourceBySlug, resources } from "../../data/resources";

export function generateStaticParams() {
  return resources.map((resource) => ({
    slug: resource.slug,
  }));
}

export default async function ResourceDetailPage({
  params,
  searchParams,
}: {
  params: Promise<{ slug: string }>;
  searchParams?: Promise<{ payment?: string; session_id?: string }>;
}) {
  const { slug } = await params;
  const resolvedSearchParams = searchParams ? await searchParams : {};

  const resource = getResourceBySlug(slug);

  if (!resource) {
    notFound();
  }

  const paymentStatus = resolvedSearchParams?.payment;

  return (
    <main className="min-h-screen bg-white text-[#07112f]">
      <SiteHeader />

      <section className="relative overflow-hidden">
        <div className="absolute right-[-140px] top-16 h-[420px] w-[420px] rounded-full bg-orange-200/50 blur-3xl" />
        <div className="absolute left-[-160px] top-64 h-[420px] w-[420px] rounded-full bg-blue-100/80 blur-3xl" />

        <div className="relative mx-auto grid max-w-7xl gap-12 px-5 pb-20 pt-14 lg:grid-cols-[1fr_0.9fr] lg:items-center">
          <div>
            <Link
              href="/resources"
              className="inline-flex rounded-2xl border border-slate-200 bg-white px-5 py-3 text-sm font-black text-slate-700 shadow-sm"
            >
              ← Back to resources
            </Link>

            {paymentStatus === "success" && (
              <div className="mt-8 rounded-3xl border border-emerald-200 bg-emerald-50 px-6 py-5 text-base font-bold text-emerald-800">
                Payment received. Your download access is being confirmed.
              </div>
            )}

            {paymentStatus === "cancelled" && (
              <div className="mt-8 rounded-3xl border border-orange-200 bg-orange-50 px-6 py-5 text-base font-bold text-orange-800">
                Checkout was cancelled. You can try again whenever you’re ready.
              </div>
            )}

            <p className="mt-10 text-sm font-black uppercase tracking-[0.32em] text-orange-500">
              ● {resource.category}
            </p>

            <h1 className="mt-6 text-5xl font-black leading-[0.95] tracking-[-0.05em] sm:text-7xl">
              {resource.title}
              <span className="text-orange-500">.</span>
            </h1>

            <p className="mt-6 max-w-2xl text-2xl leading-10 text-slate-600">
              {resource.subtitle}
            </p>

            <p className="mt-8 max-w-2xl text-lg leading-9 text-slate-600">
              {resource.description}
            </p>

            <div className="mt-10 flex flex-wrap gap-3">
              {resource.bestFor.map((tag) => (
                <div
                  key={tag}
                  className="rounded-full border border-slate-200 bg-slate-50 px-5 py-3 text-sm font-black text-slate-700"
                >
                  {tag}
                </div>
              ))}
            </div>

            <div className="mt-12 flex flex-col gap-4 sm:flex-row sm:items-center">
              <ResourceCheckoutButton
                resourceSlug={resource.slug}
                price={resource.price}
              />

              <button className="rounded-2xl border border-slate-300 bg-white px-8 py-5 text-lg font-black text-[#07112f] shadow-sm transition hover:-translate-y-0.5">
                Preview workflow
              </button>
            </div>

            <div className="mt-12 grid gap-4 sm:grid-cols-2">
              {[
                "Works on iPad and tablet",
                "Designed for digital journaling",
                "Compatible with annotation apps",
                "Use repeatedly over time",
              ].map((item) => (
                <div
                  key={item}
                  className="rounded-2xl border border-slate-200 bg-white px-5 py-5 text-base font-bold text-slate-700 shadow-sm"
                >
                  ✓ {item}
                </div>
              ))}
            </div>
          </div>

          <div>
            <div className="relative overflow-hidden rounded-[40px] border border-slate-200 bg-[#07112f] p-5 shadow-[0_34px_90px_rgba(7,17,47,0.22)]">
              <div className="absolute right-[-40px] top-[-40px] h-40 w-40 rounded-full bg-orange-400/20 blur-3xl" />

              <div className="relative aspect-[4/5] overflow-hidden rounded-[30px] border border-white/10 bg-[#101936]">
                <img
                  src={resource.coverImage}
                  alt={resource.title}
                  className="h-full w-full object-cover"
                />

                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#07112f]/20 via-transparent to-white/0" />
              </div>
            </div>

            <p className="mt-5 text-center text-sm font-bold text-slate-500">
              Premium ClarityStacked digital system preview
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
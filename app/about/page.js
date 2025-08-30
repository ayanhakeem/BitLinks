// app/about/page.js
import Link from "next/link";

export const metadata = {
  title: "About | BitLinks",
  description:
    "Learn how BitLinks shortens long URLs, tracks clicks, and helps you share smarter.",
};

const features = [
  {
    title: "Lightning-fast short links",
    desc: "Turn long, messy URLs into neat links your users can actually remember.",
  },
  {
    title: "Click analytics",
    desc: "Track total clicks, referrers, and when people engage with your links.",
  },
  {
    title: "Custom slugs",
    desc: "Brand your links with meaningful slugs instead of random strings.",
  },
  {
    title: "Safe & secure",
    desc: "Server-side validation and optional link protection to keep spam at bay.",
  },
];

const faqs = [
  {
    q: "What is BitLinks?",
    a: "BitLinks is a simple URL shortener. Paste a long link, get a short one—share anywhere and track engagement.",
  },
  {
    q: "Is it free?",
    a: "Yes. Core features like link creation and basic analytics are free. Advanced features can be added later.",
  },
  {
    q: "How do custom slugs work?",
    a: "When creating a link, choose your own short keyword (e.g., /launch) if it isn’t already taken.",
  },
  {
    q: "Do you store my original URLs?",
    a: "Yes, we store the original URL to perform redirects and analytics. We never sell your data.",
  },
];

export default function AboutPage() {
  return (
    <main className="mx-auto max-w-5xl px-4 py-12">
      {/* Hero */}
      <section className="text-center">
        <span className="inline-block rounded-full bg-purple-100 px-3 py-1 text-sm font-medium text-purple-700">
          About BitLinks
        </span>
        <h1 className="mt-4 text-4xl font-extrabold tracking-tight md:text-5xl">
          Share smarter with shorter links.
        </h1>
        <p className="mx-auto mt-4 max-w-2xl text-base text-gray-600">
          BitLinks helps you transform long URLs into short, memorable links and
          understand how people interact with them—so you can focus on what
          matters.
        </p>

        <div className="mt-8 flex items-center justify-center gap-3">
          <Link
            href="/shorten"
            className="rounded-2xl bg-purple-600 px-5 py-2.5 text-white shadow-sm transition hover:bg-purple-700"
          >
            Create a short link
          </Link>
          <Link
            href="https://www.geeksforgeeks.org/system-design/system-design-url-shortening-service/"
            className="rounded-2xl border border-gray-300 px-5 py-2.5 text-gray-800 transition hover:bg-gray-50"
          >
            Read the docs
          </Link>
        </div>
      </section>

      {/* How it works */}
      <section className="mt-16 grid gap-6 md:grid-cols-3">
        <div className="rounded-2xl border bg-white p-6 shadow-sm">
          <div className="text-sm font-semibold text-purple-700">Step 1</div>
          <h3 className="mt-1 text-lg font-bold">Paste your long URL</h3>
          <p className="mt-2 text-gray-600">
            Drop any URL—product pages, campaign links, files, anything.
          </p>
        </div>
        <div className="rounded-2xl border bg-white p-6 shadow-sm">
          <div className="text-sm font-semibold text-purple-700">Step 2</div>
          <h3 className="mt-1 text-lg font-bold">Choose a custom slug</h3>
          <p className="mt-2 text-gray-600">
            Keep it readable and on-brand. If it’s available, it’s yours.
          </p>
        </div>
        <div className="rounded-2xl border bg-white p-6 shadow-sm">
          <div className="text-sm font-semibold text-purple-700">Step 3</div>
          <h3 className="mt-1 text-lg font-bold">Share & track</h3>
          <p className="mt-2 text-gray-600">
            Share your short link anywhere and view clicks and referrers.
          </p>
        </div>
      </section>

      {/* Features */}
      <section className="mt-16">
        <h2 className="text-2xl font-bold">Why BitLinks?</h2>
        <div className="mt-6 grid gap-6 sm:grid-cols-2">
          {features.map((f) => (
            <div key={f.title} className="rounded-2xl border bg-white p-6 shadow-sm">
              <h3 className="text-lg font-semibold">{f.title}</h3>
              <p className="mt-2 text-gray-600">{f.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Tech stack */}
      <section className="mt-16">
        <h2 className="text-2xl font-bold">Built with modern tooling</h2>
        <ul className="mt-4 grid list-disc gap-2 pl-6 text-gray-700 sm:grid-cols-2 sm:[&>li]:list-none sm:[&>li]:pl-0">
          <li>
            <span className="font-semibold">Next.js (App Router):</span> fast routing and server components
          </li>
          <li>
            <span className="font-semibold">MongoDB:</span> persistent storage for URLs & analytics
          </li>
          <li>
            <span className="font-semibold">Tailwind CSS:</span> rapid, clean UI styling
          </li>
          <li>
            <span className="font-semibold">Edge-ready:</span> easy to deploy on platforms like Vercel
          </li>
        </ul>
      </section>

      {/* FAQs */}
      <section className="mt-16">
        <h2 className="text-2xl font-bold">FAQs</h2>
        <div className="mt-6 divide-y rounded-2xl border bg-white">
          {faqs.map((item) => (
            <details key={item.q} className="group p-6 open:bg-white">
              <summary className="flex cursor-pointer list-none items-center justify-between">
                <span className="text-base font-semibold">{item.q}</span>
                <span className="ml-4 rounded-full border px-2 py-0.5 text-xs text-gray-600 transition group-open:rotate-180">
                  ▼
                </span>
              </summary>
              <p className="mt-3 text-gray-600">{item.a}</p>
            </details>
          ))}
        </div>
      </section>

      {/* CTA card */}
      <section className="mt-16">
        <div className="rounded-2xl border bg-gradient-to-br from-purple-50 to-white p-8 shadow-sm md:flex md:items-center md:justify-between">
          <div>
            <h3 className="text-xl font-bold">Ready to shorten your first link?</h3>
            <p className="mt-1 text-gray-600">
              It takes seconds. No signup required for the basics.
            </p>
          </div>
          <div className="mt-4 md:mt-0">
            <Link
              href="/shorten"
              className="inline-block rounded-2xl bg-purple-600 px-5 py-2.5 text-white shadow-sm transition hover:bg-purple-700"
            >
              Get started
            </Link>
          </div>
        </div>
       
      </section>
    </main>
  );
}

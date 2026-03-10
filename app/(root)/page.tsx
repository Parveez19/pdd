import React from "react";
import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";
import {
  FaWhatsapp,
  FaStar,
  FaRegCircleCheck,
  FaCouch,
  FaTruckFast,
  FaShieldHalved,
} from "react-icons/fa6";

export const metadata: Metadata = {
  title: "Custom Sofas & Furniture in Bengaluru | Prestige Dream Decor",
  description:
    "Order custom-built sofas, sofa cum beds and premium furniture in Bengaluru. Tailored to your room size, layout and comfort with factory-direct pricing.",
};

import { PHONE_E164, ADDRESS, waLink } from "../lib/constants";

// ---------------------------------------------------------------------------
// TYPES
// ---------------------------------------------------------------------------

type CatalogProduct = {
  id: string;
  name: string;
  description: string;
  imageUrl: string;
};

type CatalogCategory = {
  id: string;
  name: string;
  /** Slug used for "View all →" link, e.g. /l-shape-sofas */
  slug: string;
  products: CatalogProduct[];
};

// ---------------------------------------------------------------------------
// DATA — 7 categories including Dining Tables, Recliners, Beds
// ---------------------------------------------------------------------------

const catalogCategories: CatalogCategory[] = [
  {
    id: "l-shape",
    name: "L-Shape Sofas",
    slug: "/l-shape-sofas",
    products: [
      { id: "l1", name: "Signature L-Shape Sofa", description: "Premium customizable L-shape sofa for your living room.", imageUrl: "/brownlsofa.jpeg" },
      { id: "l2", name: "Classic L-Shape", description: "Timeless L-shape with durable frame and soft cushions.", imageUrl: "/whitelsofa.jpeg" },
      { id: "l3", name: "Compact L-Shape", description: "Space-efficient L-shape ideal for smaller rooms.", imageUrl: "/greenlshape.webp" },
    ],
  },
  {
    id: "3-seater",
    name: "3 Seater Sofas",
    slug: "/3-seater-sofas",
    products: [
      { id: "3s1", name: "City Comfort 3-Seater", description: "Premium customizable 3-seater sofa.", imageUrl: "/three-seater.webp" },
      { id: "3s2", name: "Minimalist 3-Seater", description: "Clean lines and neutral tones for modern homes.", imageUrl: "/blue3seater.jpeg" },
      { id: "3s3", name: "Classic 3-Seater", description: "Traditional design with lasting comfort.", imageUrl: "/tradition3seater.webp" },
    ],
  },
  {
    id: "sofa-cum-bed",
    name: "Sofa Cum Beds",
    slug: "/sofa-cum-beds",
    products: [
      { id: "scb2", name: "Premium Sofa Cum Bed", description: "Comfortable by day, cozy bed by night.", imageUrl: "/redsofacumbed.webp" },
      { id: "scb4", name: "Designer Sofa Cum Bed", description: "Sleek mechanism with premium finish.", imageUrl: "/designercumbed.webp" },
      { id: "scb5", name: "Family Sofa Cum Bed", description: "Extra seating and extra sleeping space.", imageUrl: "/white-sofabed.jpg" },
    ],
  },
  {
    id: "custom",
    name: "Custom Sofas",
    slug: "/custom-sofas",
    products: [
      { id: "c2", name: "Designer Custom Sofa", description: "One-of-a-kind design tailored to your space.", imageUrl: "/customchocolate.webp" },
      { id: "c3", name: "Modular Custom Set", description: "Modular pieces you can configure as you like.", imageUrl: "/modularcustom.webp" },
      { id: "c4", name: "Compact Custom Sofa", description: "Custom-built for small or irregular spaces.", imageUrl: "/compactspacesaver.webp" },
    ],
  },
  {
    id: "dining-tables",
    name: "Dining Tables",
    slug: "/dining-tables",
    products: [
      { id: "dt1", name: "4-Seater Dining Set", description: "Compact and modern dining set for smaller homes.", imageUrl: "/diningtable1.jpeg" },
      { id: "dt2", name: "6-Seater Dining Table", description: "Family-sized dining table with premium finish.", imageUrl: "/6seaterdining.webp" },
      { id: "dt3", name: "Glass-Top Dining Table", description: "Elegant glass top with solid wood base.", imageUrl: "/diningtable2.jpeg" },
    ],
  },
  {
    id: "recliners",
    name: "Recliners",
    slug: "/recliners",
    products: [
      { id: "r1", name: "Single Recliner Chair", description: "Manual reclining chair for reading and relaxing.", imageUrl: "/recliner1.jpeg" },
      { id: "r2", name: "2-Seater Recliner Sofa", description: "Dual-action recliner for couples and pairs.", imageUrl: "/reclinersofa.webp" },
      { id: "r3", name: "Home Theatre Recliner", description: "Premium 4-seat configuration for your media room.", imageUrl: "/reclinerhome.jpeg" },
    ],
  },
  {
    id: "beds",
    name: "Beds",
    slug: "/beds",
    products: [
      { id: "b1", name: "Upholstered Platform Bed", description: "Fabric headboard with clean platform design.", imageUrl: "/bed1.jpeg" },
      { id: "b2", name: "Storage Bed", description: "Hydraulic lift storage — perfect for smaller bedrooms.", imageUrl: "/upholdbed.jpeg"  },
      { id: "b3", name: "Luxury Tufted Bed", description: "Premium velvet tufted headboard, custom sizes.", imageUrl: "/bed2.jpeg" },
    ],
  },
];

// ---------------------------------------------------------------------------
// TESTIMONIALS
// ---------------------------------------------------------------------------

type Testimonial = {
  name: string;
  city: string;
  rating: 4 | 5;
  photoUrl: string;
  quote: string;
};

const testimonials: Testimonial[] = [
  {
    name: "Ananya R.",
    city: "Vidyaranyapura",
    rating: 5,
    photoUrl: "/testimonial-ananya.png",
    quote: "Our custom L-shape sofa looks exactly like the 3D design they shared. The finish feels premium and guests always compliment it.",
  },
  {
    name: "Sanjay K.",
    city: "Whitefield",
    rating: 5,
    photoUrl: "/testimonial-sanjay.png",
    quote: "Very professional from WhatsApp inquiry to delivery. Fabric suggestions were practical for family use and cleaning.",
  },
  {
    name: "Meera S.",
    city: "Yelahanka",
    rating: 5,
    photoUrl: "/testimonial-meera.png",
    quote: "We ordered a sofa cum bed and a custom bed. Both arrived on time and the workmanship is solid and neat.",
  },
  {
    name: "Rahul P.",
    city: "Indiranagar",
    rating: 4,
    photoUrl: "/testimonial-rahul.png",
    quote: "Good value for money and very responsive on WhatsApp. They shared options in our budget without any pressure.",
  },
];

// ---------------------------------------------------------------------------
// SHARED COMPONENTS
// ---------------------------------------------------------------------------

function Stars({ rating }: { rating: number }) {
  return (
    <div className="flex items-center gap-1" aria-label={`${rating} out of 5 stars`}>
      {Array.from({ length: 5 }).map((_, i) => (
        <FaStar key={i} className={i < rating ? "text-amber-400" : "text-slate-200"} aria-hidden="true" />
      ))}
    </div>
  );
}

function WhatsAppCta({
  label = "Get Price on WhatsApp",
  message,
  className = "",
}: {
  label?: string;
  message: string;
  className?: string;
}) {
  return (
    <a
      href={waLink(message)}
      target="_blank"
      rel="noopener noreferrer"
      className={[
        "inline-flex items-center justify-center gap-2 rounded-xl bg-emerald-600 px-5 py-3 text-sm font-semibold text-white shadow-sm",
        "hover:bg-emerald-500 focus:outline-none focus:ring-2 focus:ring-emerald-400 focus:ring-offset-2 transition-colors",
        className,
      ].join(" ")}
    >
      <FaWhatsapp aria-hidden="true" className="text-base" />
      {label}
    </a>
  );
}

function CatalogCard({ product, getQuoteMessage }: { product: CatalogProduct; getQuoteMessage: string }) {
  return (
    <div className="flex flex-col overflow-hidden rounded-2xl border border-slate-100 bg-white shadow-sm transition-shadow hover:shadow-md">
      <div className="relative aspect-[4/3] w-full overflow-hidden bg-slate-100">
        <Image
          src={product.imageUrl}
          alt={product.name}
          className="object-cover transition-transform duration-300 hover:scale-[1.02]"
          fill
          sizes="(min-width: 1024px) 25vw, (min-width: 768px) 33vw, 100vw"
        />
      </div>
      <div className="flex flex-1 flex-col p-4">
        <h3 className="text-sm font-semibold text-slate-900">{product.name}</h3>
        <p className="mt-1 line-clamp-2 text-xs text-slate-500">{product.description}</p>
        <a
          href={waLink(getQuoteMessage)}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-auto pt-4 inline-flex w-full items-center justify-center gap-2 rounded-xl bg-emerald-600 py-2.5 text-sm font-semibold text-white hover:bg-emerald-500 transition-colors focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2"
        >
          <FaWhatsapp aria-hidden="true" className="text-sm" />
          Get Quote
        </a>
      </div>
    </div>
  );
}

// ---------------------------------------------------------------------------
// HERO MESSAGE
// ---------------------------------------------------------------------------

const heroMessage =
  "Hi Prestige Dream Decor, I'm looking for custom-built furniture for my home. Please share the catalogue, price range and delivery timelines.";

// ---------------------------------------------------------------------------
// PAGE
// ---------------------------------------------------------------------------

const Home: React.FC = () => {
  return (
    <div className="bg-white text-slate-900">

      {/* ── STICKY MOBILE CTA BAR ─────────────────────────────────────── */}
      <div className="fixed bottom-0 left-0 right-0 z-50 flex items-center gap-2 border-t border-slate-200 bg-white px-4 py-3 shadow-2xl sm:hidden">
        <a
          href={waLink(heroMessage)}
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-1 items-center justify-center gap-2 rounded-xl bg-emerald-600 py-3 text-sm font-bold text-white active:bg-emerald-700"
        >
          <FaWhatsapp aria-hidden="true" className="text-base" />
          Get Free Quote
        </a>
        <a
          href={`tel:${PHONE_E164}`}
          className="flex flex-1 items-center justify-center gap-2 rounded-xl border-2 border-emerald-600 py-3 text-sm font-bold text-emerald-700 active:bg-emerald-50"
        >
          📞 Call Now
        </a>
      </div>

      {/* ── HERO ──────────────────────────────────────────────────────── */}
      <section
        className="relative overflow-hidden bg-slate-950"
        aria-labelledby="hero-heading"
        style={{ minHeight: "100vh" }}
      >
        <div className="absolute inset-0">
          <Image
            src="/hero.png"
            alt="Premium living room with designer sofa from Prestige Dream Decor"
            className="object-cover object-center opacity-40"
            fill
            priority
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/90 to-slate-950/70" />
          <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-slate-950 to-transparent" />
        </div>

        <div className="relative mx-auto flex max-w-6xl flex-col gap-10 px-4 pt-24 pb-20 sm:pt-32 lg:flex-row lg:items-center lg:gap-16">

          {/* LEFT */}
          <div className="flex-1 max-w-xl">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-amber-400/30 bg-amber-400/10 px-4 py-1.5">
              <div className="flex items-center gap-0.5">
                {[1,2,3,4,5].map(i => (
                  <FaStar key={i} className="text-amber-400" style={{ fontSize: "10px" }} aria-hidden="true" />
                ))}
              </div>
              <span className="text-xs font-semibold text-amber-300">500+ happy families in Bengaluru</span>
            </div>

            <h1
              id="hero-heading"
              className="text-4xl font-extrabold leading-tight tracking-tight text-white sm:text-5xl lg:text-[56px]"
            >
              Custom Sofas Built{" "}
              <span className="text-amber-400">Perfectly for Your Home</span>{" "}
              in Bangalore
            </h1>

            <p className="mt-5 text-base leading-relaxed text-slate-300 sm:text-lg">
              Tell us your room size, pick your fabric — we build, deliver, and install it{" "}
              <span className="font-semibold text-white">free anywhere in Bengaluru.</span>
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
              <a
                href={waLink(heroMessage)}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2.5 rounded-xl bg-emerald-500 px-7 py-4 text-base font-bold text-white shadow-lg shadow-emerald-900/40 hover:bg-emerald-400 transition-colors"
              >
                <FaWhatsapp aria-hidden="true" className="text-xl" />
                Get Free Quote on WhatsApp
              </a>
              <a
                href={`tel:${PHONE_E164}`}
                className="inline-flex items-center justify-center gap-2 rounded-xl border border-white/25 bg-white/8 px-7 py-4 text-base font-semibold text-white hover:bg-white/15 transition-colors"
              >
                📞 Call Now
              </a>
            </div>

            <div className="mt-5 flex flex-wrap gap-x-5 gap-y-2 text-[12px] text-slate-400">
              {["Reply in under 30 min", "Free delivery & installation", "No sales pressure"].map(t => (
                <span key={t} className="flex items-center gap-1.5">
                  <FaRegCircleCheck className="text-emerald-400 shrink-0" aria-hidden="true" />
                  {t}
                </span>
              ))}
            </div>

            <div className="mt-6 flex flex-wrap gap-2.5">
              {[
                { dot: "bg-emerald-400", label: "10+ years of expertise" },
                { dot: "bg-amber-400", label: "Factory-direct pricing" },
                { dot: "bg-sky-400", label: "Bengaluru studio" },
              ].map(b => (
                <div key={b.label} className="flex items-center gap-1.5 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/60">
                  <span className={`h-1.5 w-1.5 shrink-0 rounded-full ${b.dot}`} />
                  {b.label}
                </div>
              ))}
            </div>
          </div>

          {/* RIGHT: Quote card */}
          <div className="w-full max-w-[340px] shrink-0 lg:ml-auto">
            <div className="overflow-hidden rounded-3xl border border-white/10 bg-slate-900 shadow-2xl">
              <div className="bg-emerald-600 px-5 py-4">
                <p className="text-sm font-bold text-white">⚡ Get your price in 3 easy steps</p>
                <p className="mt-0.5 text-xs text-emerald-100">No commitment. Real answers from our team — not bots.</p>
              </div>
              <div className="space-y-2.5 px-5 py-5">
                {[
                  { num: "1", text: "Send your room size & a photo" },
                  { num: "2", text: "Pick fabric, colour & comfort level" },
                  { num: "3", text: "Get exact price + delivery date" },
                ].map(step => (
                  <div key={step.num} className="flex items-center gap-3 rounded-xl bg-white/5 px-4 py-3 ring-1 ring-white/8">
                    <span className="grid h-7 w-7 shrink-0 place-items-center rounded-lg bg-emerald-500 text-[11px] font-black text-white">
                      {step.num}
                    </span>
                    <span className="text-xs font-medium text-slate-200">{step.text}</span>
                  </div>
                ))}
              </div>
              <div className="border-t border-white/8 bg-slate-950/60 px-5 py-4">
                <a
                  href={waLink(heroMessage)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-emerald-500 px-5 py-3.5 text-sm font-bold text-white shadow-lg hover:bg-emerald-400 transition-colors"
                >
                  <FaWhatsapp aria-hidden="true" className="text-base" />
                  Start on WhatsApp — It&apos;s Free
                </a>
                <p className="mt-2.5 text-center text-[10px] text-slate-500">
                  🔒 You talk to our team directly. No bots, no spam.
                </p>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* ── TRUST / BENEFITS ──────────────────────────────────────────── */}
      <section className="border-b border-slate-100 bg-white" aria-labelledby="benefits-heading">
        <div className="mx-auto max-w-6xl px-4 py-16">
          <h2
            id="benefits-heading"
            className="text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl"
          >
            Studio-crafted furniture that feels as good as it looks
          </h2>
          <p className="mt-1 max-w-2xl text-sm text-slate-500">
            Every sofa and bed is made to order in our Bengaluru studio with engineered frames, premium cushioning and careful finishing at every stage.
          </p>
          <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {[
              { title: "10+ years of sofa craftsmanship", desc: "Specialised in premium sofas and upholstered furniture for Indian homes.", icon: <FaCouch className="text-amber-700" aria-hidden="true" /> },
              { title: "Made to fit your room", desc: "Size, layout and comfort tailored to your exact room measurements.", icon: <FaRegCircleCheck className="text-amber-700" aria-hidden="true" /> },
              { title: "Free delivery & installation", desc: "Free delivery and professional installation in and around Bengaluru.", icon: <FaTruckFast className="text-amber-700" aria-hidden="true" /> },
              { title: "Curated performance fabrics", desc: "Stain-resistant, pet-friendly upholstery options tested for daily use.", icon: <FaShieldHalved className="text-amber-700" aria-hidden="true" /> },
            ].map(item => (
              <div key={item.title} className="flex flex-col gap-3 rounded-2xl border border-slate-100 bg-slate-50 p-5 shadow-sm">
                <div className="flex items-center gap-3">
                  <div className="grid h-10 w-10 place-items-center rounded-xl bg-amber-100">{item.icon}</div>
                  <p className="text-sm font-semibold text-slate-900">{item.title}</p>
                </div>
                <p className="text-xs leading-relaxed text-slate-500">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CATEGORY BROWSE STRIP ─────────────────────────────────────── */}
      <section className="border-b border-slate-100 bg-slate-50" aria-label="Browse categories">
        <div className="mx-auto max-w-6xl px-4 py-7">
          <p className="mb-3 text-xs font-bold uppercase tracking-[0.18em] text-slate-400">Browse by category</p>
          <div className="flex flex-wrap gap-2">
            {catalogCategories.map(cat => (
              <Link
                key={cat.id}
                href={cat.slug}
                className="rounded-full border border-slate-200 bg-white px-4 py-2 text-sm font-medium text-slate-700 shadow-sm hover:border-emerald-400 hover:text-emerald-700 transition-colors"
              >
                {cat.name}
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── PRODUCT CATALOG ───────────────────────────────────────────── */}
      <section className="bg-white" aria-labelledby="collection-heading">
        <div className="mx-auto max-w-6xl px-4 py-20">
          <div id="collection" className="scroll-mt-24">

            <h2 id="collection-heading" className="text-3xl font-extrabold tracking-tight text-slate-900">
              Product catalog
            </h2>
            <p className="mt-2 max-w-2xl text-sm text-slate-500">
              Browse by category. Tap <strong className="text-slate-700">Get Quote</strong> on any product for pricing and delivery details.
            </p>

            {catalogCategories.map(category => (
              <div key={category.id} className="mt-14">

                {/* Category header with "View all" link */}
                <div className="flex items-end justify-between gap-4">
                  <h3 className="text-xl font-bold tracking-tight text-slate-900 sm:text-2xl">
                    {category.name}
                  </h3>
                  <Link
                    href={category.slug}
                    className="shrink-0 rounded-xl border border-emerald-200 bg-emerald-50 px-4 py-2 text-xs font-semibold text-emerald-700 hover:bg-emerald-100 transition-colors"
                  >
                    View all →
                  </Link>
                </div>

                {/* 3-product preview grid */}
                <div className="mt-4 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                  {category.products.map(product => (
                    <CatalogCard
                      key={product.id}
                      product={product}
                      getQuoteMessage={`Hi Prestige Dream Decor, I'm interested in: ${product.name}. Please share price, fabric options and delivery timeline.`}
                    />
                  ))}
                </div>

                {/* Per-category "See full range" CTA */}
                <div className="mt-4 flex justify-center">
                  <Link
                    href={category.slug}
                    className="inline-flex items-center gap-1.5 rounded-xl border border-slate-200 bg-white px-6 py-2.5 text-sm font-semibold text-slate-700 shadow-sm hover:border-emerald-300 hover:text-emerald-700 transition-colors"
                  >
                    See full {category.name} range →
                  </Link>
                </div>

              </div>
            ))}

            {/* URGENCY STRIP */}
            <div className="mt-14 rounded-3xl border border-amber-200 bg-amber-50 px-5 py-5 sm:px-6">
              <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                <div className="flex items-center gap-3">
                  <div className="grid h-9 w-9 shrink-0 place-items-center rounded-full bg-amber-100 text-amber-700">
                    <FaTruckFast aria-hidden="true" />
                  </div>
                  <p className="text-sm font-semibold text-amber-900">
                    Limited production slots available this week — share your requirements to lock in current pricing.
                  </p>
                </div>
                <WhatsAppCta
                  message="Hi Prestige Dream Decor, I'd like to know today's best offers and delivery timeline for new furniture."
                  className="shrink-0 sm:w-auto"
                />
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ── TESTIMONIALS & WHY CHOOSE US ──────────────────────────────── */}
      <section className="border-t border-slate-100 bg-slate-50" aria-labelledby="testimonials-heading">
        <div className="mx-auto max-w-6xl px-4 py-20">
          <div className="grid gap-12 lg:grid-cols-2">

            {/* Testimonials */}
            <div>
              <h2 id="testimonials-heading" className="text-3xl font-extrabold tracking-tight text-slate-900">
                Loved by families across India
              </h2>
              <p className="mt-2 max-w-xl text-sm text-slate-500">
                Real homes, real stories. Customers trust Prestige Dream Decor for premium finishing, transparent pricing and on-time delivery.
              </p>
              <div className="mt-6 grid gap-5 md:grid-cols-2">
                {testimonials.map(t => (
                  <figure key={t.name} className="flex flex-col gap-3 rounded-3xl border border-slate-100 bg-white p-4 shadow-sm">
                    <div className="flex items-start gap-3">
                      <Image
                        src={t.photoUrl}
                        alt={`Photo of ${t.name}`}
                        className="rounded-2xl object-cover"
                        width={44}
                        height={44}
                        loading="lazy"
                      />
                      <div className="min-w-0 flex-1">
                        <div className="flex items-center justify-between gap-2">
                          <div>
                            <p className="text-sm font-semibold text-slate-900">{t.name}</p>
                            <p className="text-[11px] text-slate-500">{t.city}, India</p>
                          </div>
                          <Stars rating={t.rating} />
                        </div>
                      </div>
                    </div>
                    <blockquote className="text-xs leading-relaxed text-slate-600">
                      &ldquo;{t.quote}&rdquo;
                    </blockquote>
                  </figure>
                ))}
              </div>
            </div>

            {/* Why choose us */}
            <div>
              <h2 className="text-3xl font-extrabold tracking-tight text-slate-900">
                Why choose Prestige Dream Decor
              </h2>
              <p className="mt-2 max-w-xl text-sm text-slate-500">
                We focus on the details that actually matter when you are investing in premium furniture for your home.
              </p>
              <div className="mt-6 grid gap-4 sm:grid-cols-2">
                {[
                  { title: "Made to your measurements", desc: "No generic sizes. Every piece is tailored to fit your room perfectly." },
                  { title: "Built for everyday use", desc: "Engineered frames and high-density foam that keep their shape for years." },
                  { title: "Guided over WhatsApp", desc: "From fabric samples to layouts, our team helps you make confident choices." },
                  { title: "Transparent process", desc: "Clear timelines, price breakdowns and regular production updates." },
                ].map(item => (
                  <div key={item.title} className="flex flex-col gap-2 rounded-3xl border border-slate-100 bg-white p-5 shadow-sm">
                    <div className="inline-flex h-8 w-8 items-center justify-center rounded-xl bg-emerald-50 text-emerald-600">
                      <FaRegCircleCheck aria-hidden="true" className="text-sm" />
                    </div>
                    <p className="text-sm font-semibold text-slate-900">{item.title}</p>
                    <p className="text-xs leading-relaxed text-slate-500">{item.desc}</p>
                  </div>
                ))}
              </div>
              {/* CTA anchored below Why Choose Us */}
              <div className="mt-6">
                <WhatsAppCta
                  label="Get Free Quote on WhatsApp"
                  message={heroMessage}
                  className="w-full sm:w-auto"
                />
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ── MID-PAGE CTA BAND ─────────────────────────────────────────── */}
      <section className="bg-emerald-700" aria-label="Call to action">
        <div className="mx-auto max-w-5xl px-4 py-12 text-center">
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-emerald-300">Ready to get started?</p>
          <h2 className="mt-2 text-2xl font-extrabold text-white sm:text-3xl">
            Get your custom furniture price in 30 minutes
          </h2>
          <p className="mt-2 text-sm text-emerald-100">
            No showroom visit needed. Share your room size on WhatsApp — we&apos;ll quote, design and deliver.
          </p>
          <div className="mt-6 flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
            <a
              href={waLink("Hi Prestige Dream Decor, I'd like a quote for custom furniture for my home. Please guide me.")}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-xl bg-white px-7 py-3.5 text-sm font-bold text-emerald-700 shadow-xl hover:bg-emerald-50 transition-colors"
            >
              <FaWhatsapp aria-hidden="true" className="text-base" />
              Get Free Quote Now
            </a>
            <a
              href={`tel:${PHONE_E164}`}
              className="inline-flex items-center gap-2 rounded-xl border-2 border-white/40 px-7 py-3.5 text-sm font-semibold text-white hover:bg-white/10 transition-colors"
            >
              📞 Call Us
            </a>
          </div>
          <p className="mt-4 text-[11px] text-emerald-300">Free delivery &amp; installation · No pressure · Reply in &lt;30 min</p>
        </div>
      </section>

      {/* ── FAQ SECTION ───────────────────────────────────────────────── */}
      <section className="border-t border-slate-100 bg-white" aria-labelledby="faq-heading">
        <div className="mx-auto max-w-3xl px-4 py-20">
          <div className="mb-10 text-center">
            <p className="mb-2 text-[11px] font-bold uppercase tracking-[0.2em] text-emerald-600">Common Questions</p>
            <h2 id="faq-heading" className="text-3xl font-extrabold tracking-tight text-slate-900">
              Everything you want to know before ordering
            </h2>
            <p className="mt-3 text-sm text-slate-500">
              We answer these every day on WhatsApp — here they are upfront.
            </p>
          </div>

          <div className="divide-y divide-slate-100">
            {[
              {
                q: "How much does a custom sofa cost in Bangalore?",
                a: "The price depends on the size, fabric, and design you choose. Most custom sofas range between ₹25,000 and ₹90,000. Share your room size and requirements on WhatsApp and we'll send you a precise quote within 30 minutes.",
              },
              {
                q: "How long does it take to manufacture and deliver?",
                a: "Most orders are ready within 4–8 working days after confirmation. We share production updates along the way and schedule delivery once your furniture is ready.",
              },
              {
                q: "Which sofa is best for small apartments?",
                a: "Compact 3-seater sofas and L-shape sofas with storage are popular choices for smaller living rooms. Our team helps you select a design that fits your room dimensions perfectly.",
              },
              {
                q: "Do you offer free delivery and installation in Bangalore?",
                a: "Yes. We provide free delivery and professional installation for all orders within Bengaluru. Our team ensures everything is properly placed and assembled in your home.",
              },
              {
                q: "Can I customize the size, fabric, and color?",
                a: "Absolutely. Every piece we make is fully customizable — size, fabric material, colour, cushioning, and design to match your home interiors.",
              },
              {
                q: "Can I see fabric samples before ordering?",
                a: "Yes. You can visit our Vidyaranyapura showroom to check fabrics in person. If visiting isn't convenient, we share fabric options and photos over WhatsApp.",
              },
              {
                q: "Do you make dining tables, beds, and recliners too?",
                a: "Yes — besides sofas, we also make custom dining tables, upholstered beds with storage, and premium recliners. All built to order in our Bengaluru studio.",
              },
              {
                q: "How do I start ordering?",
                a: "Simply send us a message on WhatsApp with your room photo, approximate dimensions, and preferred design. Our team will recommend options and share a quote quickly.",
              },
            ].map((item, i) => (
              <details key={i} className="group py-5">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-sm font-semibold text-slate-900 hover:text-emerald-700">
                  <span>{item.q}</span>
                  <span className="grid h-6 w-6 shrink-0 place-items-center rounded-full bg-slate-100 text-slate-500 group-open:bg-emerald-100 group-open:text-emerald-700 transition-colors text-xs font-bold">
                    <span className="group-open:hidden">+</span>
                    <span className="hidden group-open:block">−</span>
                  </span>
                </summary>
                <p className="mt-3 text-sm leading-relaxed text-slate-600">{item.a}</p>
              </details>
            ))}
          </div>

          {/* FAQ bottom CTA */}
          <div className="mt-10 rounded-3xl border border-emerald-100 bg-emerald-50 px-6 py-6 text-center">
            <p className="text-sm font-semibold text-slate-800">Still have a question?</p>
            <p className="mt-1 text-xs text-slate-500">Ask us directly — we reply in under 30 minutes during business hours.</p>
            <a
              href={waLink("Hi Prestige Dream Decor, I have a question about ordering furniture.")}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 inline-flex items-center justify-center gap-2 rounded-xl bg-emerald-600 px-6 py-3 text-sm font-bold text-white shadow hover:bg-emerald-500 transition-colors"
            >
              <FaWhatsapp aria-hidden="true" />
              Ask on WhatsApp
            </a>
          </div>
        </div>
      </section>

      {/* ── SHOWROOM SECTION ──────────────────────────────────────────── */}
      <section id="showroom" className="bg-white scroll-mt-24" aria-labelledby="showroom-heading">
        <div className="mx-auto max-w-6xl px-4 py-20">
          <div className="grid gap-10 lg:grid-cols-2">

            <div>
              <h2 id="showroom-heading" className="text-3xl font-extrabold tracking-tight text-slate-900">
                Visit our Bengaluru showroom
              </h2>
              <p className="mt-2 max-w-xl text-sm text-slate-500">
                Experience the comfort, fabrics and build quality in person before you decide. Shortlist designs online and walk in with confidence.
              </p>
              <div className="mt-6 space-y-4 text-sm text-slate-700">
                <div>
                  <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-slate-400">Address</p>
                  <p className="mt-1">{ADDRESS}</p>
                </div>
                <div>
                  <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-slate-400">Visiting hours</p>
                  <p className="mt-1">Monday–Sunday, 10:30 AM – 8:30 PM</p>
                </div>
                <div className="flex flex-col gap-2 sm:flex-row sm:gap-3">
                  <WhatsAppCta
                    label="Get Directions on WhatsApp"
                    message="Hi Prestige Dream Decor, please share your Google Maps location and best time to visit the showroom."
                    className="w-full sm:w-auto"
                  />
                  <a
                    href={`tel:${PHONE_E164}`}
                    className="inline-flex items-center justify-center gap-2 rounded-xl border-2 border-slate-200 px-5 py-3 text-sm font-semibold text-slate-700 hover:border-emerald-400 hover:text-emerald-700 transition-colors"
                  >
                    📞 Call the showroom
                  </a>
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <div className="relative h-64 overflow-hidden rounded-3xl border border-slate-100 bg-slate-100 sm:h-72">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="rounded-2xl bg-white/90 px-6 py-4 text-center shadow-sm">
                    <p className="text-sm font-semibold text-slate-900">Map preview</p>
                    <p className="mt-1 text-xs text-slate-500">Embed your Google Maps iframe here.</p>
                  </div>
                </div>
                <div className="absolute inset-x-4 bottom-4 flex items-center justify-between rounded-2xl bg-slate-900/90 px-4 py-3 text-xs text-slate-100">
                  <span>Prestige Dream Decor Showroom, Vidyaranyapura</span>
                  <span className="hidden sm:inline-flex items-center gap-1 text-emerald-400">
                    <FaWhatsapp aria-hidden="true" />
                    Share live location
                  </span>
                </div>
              </div>
              <div className="rounded-3xl border border-slate-100 bg-slate-50 px-5 py-4 text-xs text-slate-600">
                <p className="font-semibold text-slate-900">Travelling from out of Bengaluru?</p>
                <p className="mt-1">
                  Share your travel dates on WhatsApp and we&apos;ll help you plan a focused showroom visit with all your shortlisted designs ready.
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Bottom padding for mobile sticky bar */}
      <div className="h-20 sm:hidden" aria-hidden="true" />

    </div>
  );
};

export default Home;
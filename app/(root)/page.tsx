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

type CatalogProduct = {
  id: string;
  name: string;
  description: string;
  imageUrl: string;
};

type CatalogCategory = {
  id: string;
  name: string;
  products: CatalogProduct[];
};

const catalogCategories: CatalogCategory[] = [
  {
    id: "l-shape",
    name: "L-Shape Sofas",
    products: [
      { id: "l1", name: "Signature L-Shape Sofa", description: "Premium customizable L-shape sofa for your living room.", imageUrl: "/brownlsofa.jpeg" },
      { id: "l2", name: "Modern Corner Sofa", description: "Contemporary corner design with premium upholstery.", imageUrl: "/hero.png" },
      { id: "l3", name: "Classic L-Shape", description: "Timeless L-shape with durable frame and soft cushions.", imageUrl: "/whitelsofa.jpeg" },
      { id: "l4", name: "Compact L-Shape", description: "Space-efficient L-shape ideal for smaller rooms.", imageUrl: "/greenlshape.webp" },
      { id: "l5", name: "Luxury L-Shape", description: "High-end L-shape with premium fabric options.", imageUrl: "/blackpremium.jpg" },
    ],
  },
  {
    id: "3-seater",
    name: "3 Seater Sofas",
    products: [
      { id: "3s1", name: "City Comfort 3-Seater", description: "Premium customizable 3-seater sofa.", imageUrl: "/Three-seater.webp" },
      { id: "3s2", name: "Minimalist 3-Seater", description: "Clean lines and neutral tones for modern homes.", imageUrl: "/blue3seater.jpeg" },
      { id: "3s3", name: "Classic 3-Seater", description: "Traditional design with lasting comfort.", imageUrl: "/tradition3seater.webp" },
      { id: "3s4", name: "Compact 3-Seater", description: "Ideal for apartments and compact living spaces.", imageUrl: "/compact3.webp" },
      { id: "3s5", name: "Premium 3-Seater", description: "Luxury build with multiple fabric choices.", imageUrl: "/white3seater.jpg" },
    ],
  },
  {
    id: "sofa-cum-bed",
    name: "Sofa Cum Beds",
    products: [
      { id: "scb1", name: "Standard Sofa Cum Bed", description: "Space-saving convertible sofa for guests.", imageUrl: "/sofacumbed.jpeg" },
      { id: "scb2", name: "Premium Sofa Cum Bed", description: "Comfortable by day, cozy bed by night.", imageUrl: "/redsofacumbed.webp" },
      { id: "scb3", name: "Compact Sofa Bed", description: "Ideal for studios and small apartments.", imageUrl: "/greensofacumbed.webp" },
      { id: "scb4", name: "Designer Sofa Cum Bed", description: "Sleek mechanism with premium finish.", imageUrl: "/designercumbed.webp" },
      { id: "scb5", name: "Family Sofa Cum Bed", description: "Extra seating and extra sleeping space.", imageUrl: "/white-sofabed.jpg" },
    ],
  },
  {
    id: "custom",
    name: "Custom Sofas",
    products: [
      { id: "c1", name: "Bespoke Sectional", description: "Fully custom sectional to your layout and size.", imageUrl: "/familycumbed.jpg" },
      { id: "c2", name: "Designer Custom Sofa", description: "One-of-a-kind design tailored to your space.", imageUrl: "/customchocolate.webp" },
      { id: "c3", name: "Modular Custom Set", description: "Modular pieces you can configure as you like.", imageUrl: "/modularcustom.webp" },
      { id: "c4", name: "Luxury Custom Sofa", description: "Premium materials and exact dimensions.", imageUrl: "/custombrown.webp" },
      { id: "c5", name: "Compact Custom Sofa", description: "Custom-built for small or irregular spaces.", imageUrl: "/compactspacesaver.webp" },
    ],
  },
];

function CatalogCard({
  product,
  getQuoteMessage,
}: {
  product: CatalogProduct;
  getQuoteMessage: string;
}) {
  return (
    <div className="flex flex-col overflow-hidden rounded-2xl border border-slate-100 bg-white shadow-sm transition-shadow hover:shadow-md">
      <div className="relative aspect-[4/3] w-full overflow-hidden bg-slate-100">
        {product.imageUrl ? (
          <Image
            src={product.imageUrl}
            alt={product.name}
            className="object-cover transition-transform duration-300 hover:scale-[1.02]"
            fill
            sizes="(min-width: 1024px) 20vw, (min-width: 768px) 33vw, 100vw"
          />
        ) : (
          <div
            className="flex h-full w-full items-center justify-center bg-slate-200 text-slate-400"
            aria-label="Image placeholder"
          >
            <span className="text-xs font-medium">Image</span>
          </div>
        )}
      </div>
      <div className="flex flex-1 flex-col p-4">
        <h3 className="text-sm font-semibold text-slate-900">{product.name}</h3>
        <p className="mt-1 line-clamp-2 text-xs text-slate-600">{product.description}</p>
        <a
          href={waLink(getQuoteMessage)}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-4 inline-flex w-full items-center justify-center gap-2 rounded-xl bg-emerald-600 px-4 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-emerald-700 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2"
        >
          Get Quote
        </a>
      </div>
    </div>
  );
}

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
    quote:
      "Our custom L-shape sofa looks exactly like the 3D design they shared. The finish feels premium and guests always compliment it.",
  },
  {
    name: "Sanjay K.",
    city: "Whitefield",
    rating: 5,
    photoUrl: "/testimonial-sanjay.png",
    quote:
      "Very professional from WhatsApp inquiry to delivery. Fabric suggestions were practical for family use and cleaning.",
  },
  {
    name: "Meera S.",
    city: "Yelahanka",
    rating: 5,
    photoUrl: "/testimonial-meera.png",
    quote:
      "We ordered a sofa cum bed and a custom bed. Both arrived on time and the workmanship is solid and neat.",
  },
  {
    name: "Rahul P.",
    city: "Indiranagar",
    rating: 4,
    photoUrl: "/testimonial-rahul.png",
    quote:
      "Good value for money and very responsive on WhatsApp. They shared options in our budget without any pressure.",
  },
];

function Stars({ rating }: { rating: number }) {
  return (
    <div className="flex items-center gap-1" aria-label={`${rating} out of 5 stars`}>
      {Array.from({ length: 5 }).map((_, i) => (
        <FaStar
          key={i}
          className={i < rating ? "text-amber-400" : "text-slate-200"}
          aria-hidden="true"
        />
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
        "inline-flex items-center justify-center gap-2 rounded-xl bg-emerald-600 px-5 py-3 text-base font-semibold text-white shadow-lg ring-2 ring-emerald-400/40",
        "hover:bg-emerald-700 focus:outline-none focus:ring-2 focus:ring-emerald-400 focus:ring-offset-2 focus:ring-offset-slate-950",
        className,
      ].join(" ")}
    >
      <FaWhatsapp aria-hidden="true" className="text-lg" />
      {label}
    </a>
  );
}

const heroMessage =
  "Hi Prestige Dream Decor, I’m looking for a custom-built sofa / furniture that fits my home. Please share catalog, price range and delivery timelines.";

const Home: React.FC = () => {
  return (
    <div className="bg-white text-slate-900">
      {/* HERO */}
      <section
        className="relative overflow-hidden"
        aria-labelledby="hero-heading"
      >
        <div className="absolute inset-0 -z-10">
          <Image
            src="/hero.png"
            alt="Premium living room with designer sofa from Prestige Dream Decor"
            className="object-cover"
            fill
            priority
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-black/40" />
          <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/40 to-transparent" />
        </div>

        <div className="mx-auto flex min-h-[80vh] max-w-6xl flex-col gap-14 px-4 py-18 sm:py-24 lg:flex-row lg:items-center">
          <div className="max-w-2xl">
            <p className="inline-flex items-center gap-2 rounded-full bg-slate-900/60 px-4 py-1 text-[11px] font-semibold uppercase tracking-[0.22em] text-amber-300">
              Custom Sofa & Furniture Studio
            </p>
            <h1
              id="hero-heading"
              className="mt-6 text-balance text-4xl font-extrabold tracking-tight text-black leading-tight sm:text-5xl lg:text-7xl"
            >
              Custom‑built sofas that feel made just for your home.
            </h1>
            <p className="mt-5 max-w-xl text-pretty text-lg leading-relaxed text-slate-700">
              From layout to fabric, every piece is tailored to your room, your lifestyle and the premium
              comfort you expect.
            </p>

            <div className="mt-7 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-center">
              <a
                href={waLink(heroMessage)}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-emerald-600 px-5 py-3 text-base font-semibold text-white shadow-lg ring-2 ring-emerald-400/40 hover:bg-emerald-700 sm:w-auto"
              >
                <FaWhatsapp aria-hidden="true" className="text-lg" />
                Book Now
              </a>
              <a
                href={`tel:${PHONE_E164}`}
                className="inline-flex w-full items-center justify-center gap-2 rounded-xl border border-slate-200/40 bg-white/10 px-5 py-3 text-base font-semibold text-white shadow-sm backdrop-blur-sm hover:bg-white/20 sm:w-auto"
              >
                Call Now
              </a>
              <Link
                href="/#showroom"
                className="inline-flex w-full items-center justify-center gap-2 rounded-xl border border-slate-200/40 bg-white/10 px-5 py-3 text-base font-semibold text-white shadow-sm backdrop-blur-sm hover:bg-white/20 sm:w-auto"
              >
                Visit Our Showroom
              </Link>
            </div>

            <div className="mt-6 flex flex-wrap items-center gap-4 text-xs text-slate-900/80">
              <div className="inline-flex items-center gap-2 rounded-full bg-white/5 px-3 py-1">
                <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
                10+ years of furniture expertise
              </div>
              <div className="inline-flex items-center gap-2 rounded-full bg-white/5 px-3 py-1">
                <span className="h-1.5 w-1.5 rounded-full bg-amber-300" />
                Factory-direct pricing & pan-India delivery
              </div>
            </div>
          </div>

          <div className="mt-8 w-full max-w-sm lg:mt-0 lg:ml-auto">
            <div className="overflow-hidden rounded-3xl border border-slate-800/70 bg-slate-950/40 backdrop-blur-sm shadow-xl">
              <div className="border-b border-slate-800/60 bg-slate-950/40 px-5 py-4">
                <p className="text-[13px] font-semibold text-amber-300">
                  Get a WhatsApp quote in 3 steps
                </p>
                <p className="mt-1 text-xs text-slate-200/90">
                  Share your room photos, size and budget. Our team will reply with curated options.
                </p>
              </div>
              <div className="space-y-3 px-5 py-5 text-xs text-slate-100">
                {[
                  "Send us your room size & a reference photo",
                  "Pick fabrics, comfort level & layout",
                  "Get price range + delivery timeline",
                ].map((step) => (
                  <div
                    key={step}
                    className="flex items-center gap-3 rounded-2xl bg-slate-900/70 px-3 py-3 ring-1 ring-slate-700/70"
                  >
                    <span className="grid h-8 w-8 place-items-center rounded-xl bg-emerald-500 text-white">
                      <FaRegCircleCheck aria-hidden="true" />
                    </span>
                    <span>{step}</span>
                  </div>
                ))}
              </div>
              <div className="border-t border-slate-800/60 bg-slate-950/50 px-5 py-4">
                <WhatsAppCta
                  message={heroMessage}
                  className="w-full text-sm"
                />
                <p className="mt-2 text-[11px] text-slate-400">
                  Response within business hours. No automated bots — you chat directly with our
                  team.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* TRUST / BENEFITS */}
      <section
        className="border-b border-slate-100 bg-white"
        aria-labelledby="benefits-heading"
      >
        <div className="mx-auto max-w-6xl px-4 py-16 sm:py-18">
          <div className="mb-6 flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <h2
                id="benefits-heading"
                className="text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl"
              >
                Studio-crafted furniture that feels as good as it looks
              </h2>
              <p className="mt-1 max-w-2xl text-sm text-slate-600">
                Every sofa and bed is made to order in our Bengaluru studio with engineered frames,
                premium cushioning and careful finishing at every stage.
              </p>
            </div>
          </div>

          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {[
              {
                title: "10+ years of sofa craftsmanship",
                desc: "Specialised in premium sofas and upholstered furniture for Indian homes.",
                icon: <FaCouch className="text-slate-900" aria-hidden="true" />,
              },
              {
                title: "Made to fit your room",
                desc: "Size, layout and comfort tailored to your exact room measurements.",
                icon: <FaRegCircleCheck className="text-slate-900" aria-hidden="true" />,
              },
              {
                title: "Free delivery & installation",
                desc: "Free delivery and professional installation in and around Bengaluru.",
                icon: <FaTruckFast className="text-slate-900" aria-hidden="true" />,
              },
              {
                title: "Curated performance fabrics",
                desc: "Stain-resistant, pet-friendly upholstery options tested for daily use.",
                icon: <FaShieldHalved className="text-slate-900" aria-hidden="true" />,
              },
            ].map((item) => (
              <div
                key={item.title}
                className="flex flex-col gap-3 rounded-2xl border border-slate-100 bg-slate-50/60 p-5 shadow-sm"
              >
                <div className="flex items-center gap-3">
                  <div className="grid h-10 w-10 place-items-center rounded-xl bg-amber-100 text-amber-700">
                    {item.icon}
                  </div>
                  <p className="text-sm font-semibold text-slate-900">{item.title}</p>
                </div>
                <p className="text-xs leading-relaxed text-slate-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PRODUCT SHOWCASE */}
      <section
        className="bg-white"
        aria-labelledby="collection-heading"
      >
        <div className="mx-auto max-w-6xl px-4 py-20">
          <div id="collection" className="scroll-mt-24">
            <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
              <div>
                <h2
                  id="collection-heading"
                  className="text-3xl font-extrabold tracking-tight text-slate-900"
                >
                  Product catalog
                </h2>
                <p className="mt-2 max-w-2xl text-sm text-slate-600">
                  Browse by category. Tap Get Quote on any product for pricing and delivery details.
                </p>
              </div>
            </div>

            {catalogCategories.map((category) => (
              <div key={category.id} className="mt-12">
                <h3 className="text-xl font-bold tracking-tight text-slate-900 sm:text-2xl">
                  {category.name}
                </h3>
                <div className="mt-4 grid gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
                  {category.products.map((product) => (
                    <CatalogCard
                      key={product.id}
                      product={product}
                      getQuoteMessage={"Hi Prestige Dream Decor, I'm interested in: " + product.name + ". Please share price, fabric options and delivery timeline."}
                    />
                  ))}
                </div>
              </div>
            ))}

            {/* URGENCY STRIP */}
            <div className="mt-12 rounded-3xl border border-amber-200 bg-amber-50/80 px-4 py-5 sm:px-6">
              <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                <div className="flex items-center gap-3">
                  <div className="grid h-9 w-9 place-items-center rounded-full bg-amber-100 text-amber-700">
                    <FaTruckFast aria-hidden="true" />
                  </div>
                  <p className="text-sm font-semibold text-amber-900">
                    Limited production slots available this week. Share your requirements to lock in
                    current pricing.
                  </p>
                </div>
                <WhatsAppCta
                  message="Hi Prestige Dream Decor, I’d like to know today’s best offers and delivery timeline for a new sofa."
                  className="w-full sm:w-auto"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* TESTIMONIALS & WHY CHOOSE US */}
      <section
        className="border-t border-slate-100 bg-slate-50/60"
        aria-labelledby="testimonials-heading"
      >
        <div className="mx-auto max-w-6xl px-4 py-20">
          <div className="grid gap-12 lg:grid-cols-2">
            {/* Testimonials */}
            <div>
              <div className="flex flex-col gap-2">
                <h2
                  id="testimonials-heading"
                  className="text-3xl font-extrabold tracking-tight text-slate-900"
                >
                  Loved by families across India
                </h2>
                <p className="max-w-xl text-sm text-slate-600">
                  Real homes, real stories. Customers trust Prestige Dream Decor for premium
                  finishing, transparent pricing and on-time delivery.
                </p>
              </div>

              <div className="mt-6 grid gap-5 md:grid-cols-2">
                {testimonials.map((t) => (
                  <figure
                    key={t.name}
                    className="flex flex-col gap-3 rounded-3xl border border-slate-100 bg-white p-4 shadow-sm"
                  >
                    <div className="flex items-start gap-3">
                      <Image
                        src={t.photoUrl}
                        alt={`Photo of ${t.name}`}
                        className="rounded-2xl object-cover"
                        width={44}
                        height={44}
                        loading="lazy"
                      />
                      <div className="min-w-0">
                        <div className="flex items-center justify-between gap-2">
                          <div>
                            <p className="text-sm font-semibold text-slate-900">{t.name}</p>
                            <p className="text-[11px] text-slate-500">{t.city}, India</p>
                          </div>
                          <Stars rating={t.rating} />
                        </div>
                      </div>
                    </div>
                    <blockquote className="text-xs leading-relaxed text-slate-700">
                      “{t.quote}”
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
              <p className="mt-2 max-w-xl text-sm text-slate-600">
                We focus on the details that actually matter when you are investing in premium
                furniture for your home.
              </p>

              <div className="mt-6 grid gap-4 sm:grid-cols-2">
                {[
                  {
                    title: "Made to your measurements",
                    desc: "No generic sizes. Every piece is tailored to fit your room perfectly.",
                  },
                  {
                    title: "Built for everyday use",
                    desc: "Engineered frames and high-density foam that keep their shape for years.",
                  },
                  {
                    title: "Guided over WhatsApp",
                    desc: "From fabric samples to layouts, our team helps you make confident choices.",
                  },
                  {
                    title: "Transparent process",
                    desc: "Clear timelines, price breakdowns and regular production updates.",
                  },
                ].map((item) => (
                  <div
                    key={item.title}
                    className="flex flex-col gap-2 rounded-3xl border border-slate-100 bg-white p-5 shadow-sm"
                  >
                    <div className="inline-flex h-8 w-8 items-center justify-center rounded-xl bg-emerald-50 text-emerald-700">
                      <FaRegCircleCheck aria-hidden="true" className="text-sm" />
                    </div>
                    <p className="text-sm font-semibold text-slate-900">{item.title}</p>
                    <p className="text-xs leading-relaxed text-slate-600">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SHOWROOM SECTION */}
      <section
        id="showroom"
        className="bg-white scroll-mt-24"
        aria-labelledby="showroom-heading"
      >
        <div className="mx-auto max-w-6xl px-4 py-20">
          <div className="grid gap-10 lg:grid-cols-2">
            <div>
              <h2
                id="showroom-heading"
                className="text-3xl font-extrabold tracking-tight text-slate-900"
              >
                Visit our Bengaluru showroom
              </h2>
              <p className="mt-2 max-w-xl text-sm text-slate-600">
                Experience the comfort, fabrics and build quality in person before you decide.
                Shortlist designs online and walk in with confidence.
              </p>

              <div className="mt-5 space-y-3 text-sm text-slate-700">
                <div>
                  <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-slate-500">
                    Address
                  </p>
                  <p className="mt-1">{ADDRESS}</p>
                </div>
                <div>
                  <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-slate-500">
                    Visiting hours
                  </p>
                  <p className="mt-1 text-sm">Monday–Sunday, 10:30 AM – 8:30 PM</p>
                </div>
                <div>
                  <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-slate-500">
                    WhatsApp for directions
                  </p>
                  <WhatsAppCta
                    message="Hi Prestige Dream Decor, please share Google Maps location & best time to visit the showroom."
                    className="mt-2 w-full sm:w-auto"
                  />
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <div className="relative h-64 overflow-hidden rounded-3xl border border-slate-100 bg-slate-100 sm:h-72">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="rounded-2xl bg-white/80 px-6 py-4 text-center shadow-sm backdrop-blur">
                    <p className="text-sm font-semibold text-slate-900">Map preview</p>
                    <p className="mt-1 text-xs text-slate-600">
                      Embed your Google Maps here to help customers navigate easily.
                    </p>
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
                  Share your travel dates on WhatsApp and we’ll help you plan a focused showroom
                  visit with all your shortlisted designs ready.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;

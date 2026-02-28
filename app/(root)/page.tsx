import React from "react";
import Link from "next/link";
import {
  FaWhatsapp,
  FaStar,
  FaRegCircleCheck,
  FaCouch,
  FaTruckFast,
  FaShieldHalved,
  FaRupeeSign,
} from "react-icons/fa6";

const PHONE_E164 = "+917975709648";
const ADDRESS =
  "1001/52/1 Main Road, Nanjappa - Thindlu Rd, Doddabommasandra, Vidyaranyapura, Bengaluru, Karnataka 560097";

function waLink(message: string) {
  const digitsOnly = PHONE_E164.replace(/[^\d]/g, "");
  return `https://wa.me/${digitsOnly}?text=${encodeURIComponent(message)}`;
}

type Product = {
  id: string;
  title: string;
  priceRange: string;
  imageUrl: string;
  imageAlt: string;
  highlight: string;
};

const products: Product[] = [
  {
    id: "signature-living",
    title: "Signature L-Shape Sofa",
    priceRange: "From ₹39,999",
    imageUrl:
      "/signature-sofa.png",
    imageAlt: "Premium L-shape sofa in a warm living room",
    highlight: "Made-to-measure for your living room.",
  },
  {
    id: "city-sofa",
    title: "3-Seater City Comfort Sofa",
    priceRange: "From ₹24,999",
    imageUrl:
      "https://images.unsplash.com/photo-1549497538-303791108f95?auto=format&fit=crop&w=1600&q=80",
    imageAlt: "Minimal 3-seater sofa in neutral tones",
    highlight: "Perfect balance of comfort and design.",
  },
  {
    id: "sofa-bed",
    title: "Sofa Cum Bed",
    priceRange: "From ₹27,999",
    imageUrl:
      "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?auto=format&fit=crop&w=1600&q=80",
    imageAlt: "Convertible sofa bed in a modern apartment",
    highlight: "Space-saving comfort for modern homes.",
  },
  {
    id: "custom-bed",
    title: "Custom Upholstered Bed",
    priceRange: "From ₹32,999",
    imageUrl:
      "https://images.unsplash.com/photo-1505691723518-36a5ac3be353?auto=format&fit=crop&w=1600&q=80",
    imageAlt: "Premium upholstered bed in a luxury bedroom",
    highlight: "Designed around your comfort and style.",
  },
];

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
    city: "Bengaluru",
    rating: 5,
    photoUrl:
      "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=400&q=80",
    quote:
      "Our custom L-shape sofa looks exactly like the 3D design they shared. The finish feels premium and guests always compliment it.",
  },
  {
    name: "Sanjay K.",
    city: "Hyderabad",
    rating: 5,
    photoUrl:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=400&q=80",
    quote:
      "Very professional from WhatsApp inquiry to delivery. Fabric suggestions were practical for family use and cleaning.",
  },
  {
    name: "Meera S.",
    city: "Chennai",
    rating: 5,
    photoUrl:
      "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=400&q=80",
    quote:
      "We ordered a sofa cum bed and a custom bed. Both arrived on time and the workmanship is solid and neat.",
  },
  {
    name: "Rahul P.",
    city: "Pune",
    rating: 4,
    photoUrl:
      "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=400&q=80",
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
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <img
            src="https://images.unsplash.com/photo-1549187774-b4e9b0445b41?auto=format&fit=crop&w=1600&q=80"
            alt="Premium living room with designer sofa"
            className="h-full w-full object-cover"
            loading="lazy"
            decoding="async"
          />
          <div className="absolute inset-0 bg-black/40" />
          <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/40 to-transparent" />
        </div>

        <div className="mx-auto flex min-h-[80vh] max-w-6xl flex-col gap-14 px-4 py-18 sm:py-24 lg:flex-row lg:items-center">
          <div className="max-w-2xl">
            <p className="inline-flex items-center gap-2 rounded-full bg-slate-900/60 px-4 py-1 text-[11px] font-semibold uppercase tracking-[0.22em] text-amber-300">
              Custom Sofa & Furniture Studio
            </p>
            <h1 className="mt-6 text-balance text-4xl font-extrabold tracking-tight text-black leading-tight sm:text-5xl lg:text-7xl">
              Custom‑built sofas that feel made just for your home.
            </h1>
            <p className="mt-5 max-w-xl text-pretty text-lg leading-relaxed text-slate-700">
              From layout to fabric, every piece is tailored to your room, your lifestyle and the premium
              comfort you expect.
            </p>

            <div className="mt-7 flex flex-col gap-3 sm:flex-row sm:items-center">
              <WhatsAppCta message={heroMessage} className="w-full sm:w-auto" />
              <Link
                href="#collection"
                className="inline-flex w-full items-center justify-center gap-2 rounded-xl border border-slate-200/40 bg-white/5 px-5 py-3 text-base font-semibold text-white shadow-sm backdrop-blur-sm hover:bg-white/10 sm:w-auto"
              >
                View Collection
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
      <section className="border-b border-slate-100 bg-white">
        <div className="mx-auto max-w-6xl px-4 py-16 sm:py-18">
          <div className="mb-6 flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <h2 className="text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl">
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
      <section className="bg-white">
        <div className="mx-auto max-w-6xl px-4 py-20">
          <div id="collection" className="scroll-mt-24">
            <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
              <div>
                <h2 className="text-3xl font-extrabold tracking-tight text-slate-900">
                  Featured sofas & furniture
                </h2>
                <p className="mt-2 max-w-2xl text-sm text-slate-600">
                  Explore a selection of our most-loved designs. Tap any product to get price on
                  WhatsApp with delivery estimate.
                </p>
              </div>
              <div className="mt-2 flex flex-col items-start gap-1 text-xs text-slate-500 sm:mt-0 sm:text-right">
                <span className="inline-flex items-center gap-1 text-amber-600">
                  <FaRupeeSign className="text-xs" aria-hidden="true" />
                  Factory-direct pricing
                </span>
                <span>Final price shared on WhatsApp based on size & fabric.</span>
              </div>
            </div>

            <div className="mt-8 grid gap-7 md:grid-cols-2 lg:grid-cols-4">
              {products.map((product) => {
                const msg = `Hi Prestige Dream Decor, I’m interested in: ${product.title}. Please share price options, fabrics and delivery time.`;
                return (
                  <div
                    key={product.id}
                    className="group flex flex-col overflow-hidden rounded-3xl border border-slate-100 bg-white shadow-sm transition-shadow hover:shadow-lg"
                  >
                    <div className="relative aspect-[4/3] overflow-hidden bg-slate-100">
                      <img
                        src={product.imageUrl}
                        alt={product.imageAlt}
                        className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.04]"
                        loading="lazy"
                        decoding="async"
                      />
                      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-slate-900/30 via-transparent to-transparent" />
                      <div className="pointer-events-none absolute bottom-3 left-3 right-3 flex flex-wrap items-center gap-2">
                        <span className="rounded-full bg-white/90 px-3 py-1 text-[11px] font-semibold text-slate-900 shadow-sm backdrop-blur">
                          Premium build
                        </span>
                        <span className="rounded-full bg-emerald-600/90 px-3 py-1 text-[11px] font-semibold text-white shadow-sm backdrop-blur">
                          WhatsApp for price
                        </span>
                      </div>
                    </div>

                    <div className="flex flex-1 flex-col p-4">
                      <div className="flex-1">
                        <h3 className="text-sm font-semibold text-slate-900">{product.title}</h3>
                        <p className="mt-1 text-sm font-semibold text-emerald-700">
                          {product.priceRange}
                        </p>
                        <p className="mt-2 text-xs text-slate-600">{product.highlight}</p>
                      </div>
                      <div className="mt-4 flex items-center justify-between gap-3">
                        <WhatsAppCta
                          message={msg}
                          label="Get Price on WhatsApp"
                          className="flex-1 justify-center px-3 py-2 text-xs"
                        />
                        <button className="text-xs font-semibold text-slate-700 underline-offset-2 hover:text-slate-900 hover:underline">
                          View Details
                        </button>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

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
      <section className="border-t border-slate-100 bg-slate-50/60">
        <div className="mx-auto max-w-6xl px-4 py-20">
          <div className="grid gap-12 lg:grid-cols-2">
            {/* Testimonials */}
            <div>
              <div className="flex flex-col gap-2">
                <h2 className="text-3xl font-extrabold tracking-tight text-slate-900">
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
                      <img
                        src={t.photoUrl}
                        alt={`Photo of ${t.name}`}
                        className="h-11 w-11 rounded-2xl object-cover"
                        loading="lazy"
                        decoding="async"
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
      <section className="bg-white">
        <div className="mx-auto max-w-6xl px-4 py-20">
          <div className="grid gap-10 lg:grid-cols-2">
            <div>
              <h2 className="text-3xl font-extrabold tracking-tight text-slate-900">
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

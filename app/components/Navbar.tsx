import React from "react";
import Link from "next/link";
import { waLink } from "../lib/constants";

const PHONE_E164 = "+917975709648";
const BOOK_MSG =
  "Hi Prestige Dream Decor, I'd like to book a consultation. Please share available slots.";

const Navbar = () => {
  return (
    <nav className="bg-emerald-500 text-white shadow-md">
      <div className="container mx-auto flex flex-wrap items-center justify-between gap-3 px-4 py-3">
        <Link href="/" className="flex items-center gap-2 font-bold text-xl text-white sm:text-2xl">
          <img className="h-10 w-10 rounded" src="/favicon.ico" alt="Prestige Dream Decor" />
          <span>Prestige Dream Decor</span>
        </Link>
        <ul className="flex flex-wrap items-center gap-2 text-sm sm:gap-4 sm:text-base">
          <li>
            <Link href="/" className="hover:text-emerald-100 transition-colors">Home</Link>
          </li>
          <li>
            <Link href="/sofa-offer" className="hover:text-emerald-100 transition-colors">Services</Link>
          </li>
          <li>
            <Link href="/about" className="hover:text-emerald-100 transition-colors hidden sm:inline">About Us</Link>
          </li>
          <li>
            <Link href="/contact" className="hover:text-emerald-100 transition-colors hidden sm:inline">Contact Us</Link>
          </li>
          <li className="flex items-center gap-2 border-l border-emerald-400/50 pl-2 sm:pl-4">
            <a
              href={waLink(BOOK_MSG)}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-lg bg-white/20 px-3 py-1.5 text-sm font-semibold hover:bg-white/30"
            >
              Book Now
            </a>
            <a
              href={`tel:${PHONE_E164}`}
              className="rounded-lg bg-white/20 px-3 py-1.5 text-sm font-semibold hover:bg-white/30"
            >
              Call Now
            </a>
            <Link
              href="/#showroom"
              className="hidden rounded-lg bg-amber-400 px-3 py-1.5 text-sm font-semibold text-slate-900 hover:bg-amber-300 sm:inline-block"
            >
              Visit Our Showroom
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;

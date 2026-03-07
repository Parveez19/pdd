"use client";

import React from "react";
import Link from "next/link";
import { FaPhone } from "react-icons/fa";

const PHONE = "+917975709648";

const ContactButton = ({ phoneNumber = PHONE }: { phoneNumber?: string }) => {
  const telLink = `tel:${phoneNumber}`;

  return (
    <Link
      href={telLink}
      aria-label="Call Now"
      className="fixed bottom-5 left-5 z-50 flex items-center gap-2 rounded-full bg-emerald-600 px-4 py-3 text-white shadow-lg ring-2 ring-white/30 hover:bg-emerald-700 md:bottom-6 md:left-6 md:px-3 md:py-3"
    >
      <FaPhone size={22} aria-hidden />
      <span className="text-sm font-semibold md:sr-only">Call Now</span>
    </Link>
  );
};

export default ContactButton;
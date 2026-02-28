import React from "react";
import Link from "next/link";
import { FaWhatsapp } from "react-icons/fa";

type Props = {
  phoneNumber?: string;
};

const WhatsAppButton: React.FC<Props> = ({ phoneNumber = "+917975709648" }) => {
  const digitsOnly = phoneNumber.replace(/[^\d]/g, "");
  const whatsappLink = `https://wa.me/${digitsOnly}`;

  return (
    <Link href={whatsappLink} target="_blank" rel="noopener noreferrer" aria-label="Chat on WhatsApp">
      <div className="fixed bottom-5 right-5 z-50 cursor-pointer rounded-full bg-emerald-500 p-3 text-white shadow-lg ring-2 ring-white/70 transition hover:bg-emerald-600 hover:shadow-xl md:bottom-6 md:right-6 md:p-4">
        <FaWhatsapp size={26} />
      </div>
    </Link>
  );
};

export default WhatsAppButton;

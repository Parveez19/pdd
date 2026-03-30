"use client";

import { useEffect, useState, useRef } from "react";
import { FaWhatsapp, FaXmark, FaRegCircleCheck } from "react-icons/fa6";

// ---------------------------------------------------------------------------
// CONFIG — update these two values
// ---------------------------------------------------------------------------

// 1. Get your Formspree endpoint at https://formspree.io (free, 50 submissions/month)
//    Create an account → New Form → copy the endpoint URL
const FORMSPREE_ENDPOINT = "https://formspree.io/f/mlgobbyk";

// 2. Deploy a Google Apps Script web app (instructions in README below)
//    Paste the deployment URL here
const SHEETS_ENDPOINT = "https://script.google.com/macros/s/AKfycbz8D8EAE2C5Fdm9twqh915VPdpAWJgOlkNgWdGZoy2SifkEbAk4w9eB7GW8NwU41XRtcQ/exec";
// Delay before popup shows (milliseconds)
const TRIGGER_DELAY_MS = 25000; 

// localStorage key — prevents showing popup again for 7 days after dismiss
const STORAGE_KEY = "pdd_popup_dismissed";
const DISMISS_DAYS = 7;

// ---------------------------------------------------------------------------
// COMPONENT
// ---------------------------------------------------------------------------

export default function LeadPopup() {
  const [visible, setVisible] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    // Check if dismissed recently
    const dismissed = localStorage.getItem(STORAGE_KEY);
    if (dismissed) {
      const dismissedAt = parseInt(dismissed, 10);
      const daysSince = (Date.now() - dismissedAt) / (1000 * 60 * 60 * 24);
      if (daysSince < DISMISS_DAYS) return;
    }

    timerRef.current = setTimeout(() => setVisible(true), TRIGGER_DELAY_MS);
    return () => {
      if (timerRef.current) clearTimeout(timerRef.current);
    };
  }, []);

  function dismiss() {
    setVisible(false);
    localStorage.setItem(STORAGE_KEY, Date.now().toString());
  }

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);
    setError("");

    const form = e.currentTarget;
    const data = {
      name: (form.elements.namedItem("name") as HTMLInputElement).value.trim(),
      phone: (form.elements.namedItem("phone") as HTMLInputElement).value.trim(),
      interest: (form.elements.namedItem("interest") as HTMLSelectElement).value,
      source: "Website popup",
      timestamp: new Date().toLocaleString("en-IN", { timeZone: "Asia/Kolkata" }),
    };

    try {
      // Submit to both endpoints in parallel
      await Promise.all([
        // Formspree → forwards to your email
        fetch(FORMSPREE_ENDPOINT, {
          method: "POST",
          headers: { "Content-Type": "application/json", Accept: "application/json" },
          body: JSON.stringify(data),
        }),
        // Google Sheets → saves to spreadsheet
        fetch(SHEETS_ENDPOINT, {
          method: "POST",
          mode: "no-cors",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(data),
        }),
      ]);

      setSubmitted(true);
      // Auto-close after 4 seconds on success
      setTimeout(() => dismiss(), 4000);
    } catch {
      setError("Something went wrong. Please try WhatsApp instead.");
    } finally {
      setLoading(false);
    }
  }

  if (!visible) return null;

  return (
    <>
      {/* Backdrop */}
      <div
        className="fixed inset-0 z-[100] bg-slate-950/60 backdrop-blur-sm"
        onClick={dismiss}
        aria-hidden="true"
      />

      {/* Modal */}
      <div
        role="dialog"
        aria-modal="true"
        aria-labelledby="popup-title"
        className="fixed inset-x-4 top-1/2 z-[101] -translate-y-1/2 mx-auto max-w-md rounded-3xl bg-white shadow-2xl sm:inset-x-auto sm:left-1/2 sm:-translate-x-1/2"
      >
        {/* Close button */}
        <button
          onClick={dismiss}
          aria-label="Close"
          className="absolute right-4 top-4 grid h-8 w-8 place-items-center rounded-full bg-slate-100 text-slate-500 hover:bg-slate-200 transition-colors"
        >
          <FaXmark style={{ fontSize: "12px" }} />
        </button>

        {submitted ? (
          /* ── SUCCESS STATE ── */
          <div className="flex flex-col items-center gap-4 px-8 py-10 text-center">
            <div className="grid h-14 w-14 place-items-center rounded-full bg-emerald-100 text-emerald-600 text-2xl">
              <FaRegCircleCheck />
            </div>
            <h2 className="text-lg font-bold text-slate-900">We'll call you shortly!</h2>
            <p className="text-sm text-slate-500">
              Our team will WhatsApp you within 30 minutes with options tailored to your space.
            </p>
            <a
              href="https://wa.me/917975709648?text=Hi%20Prestige%20Dream%20Decor%2C%20I%20just%20filled%20your%20form%20and%20I'm%20looking%20for%20a%20custom%20sofa."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-xl bg-emerald-600 px-6 py-3 text-sm font-bold text-white hover:bg-emerald-500 transition-colors"
            >
              <FaWhatsapp />
              Chat with us now
            </a>
          </div>
        ) : (
          /* ── FORM STATE ── */
          <div className="px-6 pb-6 pt-7 sm:px-8">
            {/* Header */}
            <div className="mb-1 inline-flex items-center gap-1.5 rounded-full bg-emerald-50 px-3 py-1 text-[11px] font-semibold text-emerald-700">
              ⚡ Limited slots this week
            </div>
            <h2 id="popup-title" className="mt-2 text-xl font-extrabold text-slate-900">
              Get a free quote for your custom sofa
            </h2>
            <p className="mt-1 text-sm text-slate-500">
              Share your details — we'll WhatsApp you options and pricing within 30 minutes.
            </p>

            {/* Reassurances */}
            <div className="mt-3 flex flex-wrap gap-x-4 gap-y-1 text-[11px] text-slate-400">
              {["No commitment", "No spam", "Reply in 30 min"].map((t) => (
                <span key={t} className="flex items-center gap-1">
                  <FaRegCircleCheck className="text-emerald-400" style={{ fontSize: "9px" }} />
                  {t}
                </span>
              ))}
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit} className="mt-5 flex flex-col gap-3">
              <div>
                <label htmlFor="popup-name" className="mb-1 block text-xs font-medium text-slate-700">
                  Your name
                </label>
                <input
                  id="popup-name"
                  name="name"
                  type="text"
                  required
                  placeholder="Eg. Priya Sharma"
                  className="w-full rounded-xl border border-slate-200 px-4 py-3 text-sm text-slate-900 placeholder:text-slate-400 focus:border-emerald-400 focus:outline-none focus:ring-2 focus:ring-emerald-100"
                />
              </div>

              <div>
                <label htmlFor="popup-phone" className="mb-1 block text-xs font-medium text-slate-700">
                  WhatsApp number
                </label>
                <input
                  id="popup-phone"
                  name="phone"
                  type="tel"
                  required
                  placeholder="10-digit mobile number"
                  pattern="[6-9][0-9]{9}"
                  className="w-full rounded-xl border border-slate-200 px-4 py-3 text-sm text-slate-900 placeholder:text-slate-400 focus:border-emerald-400 focus:outline-none focus:ring-2 focus:ring-emerald-100"
                />
              </div>

              <div>
                <label htmlFor="popup-interest" className="mb-1 block text-xs font-medium text-slate-700">
                  What are you looking for?
                </label>
                <select
                  id="popup-interest"
                  name="interest"
                  required
                  defaultValue=""
                  className="w-full rounded-xl border border-slate-200 px-4 py-3 text-sm text-slate-900 focus:border-emerald-400 focus:outline-none focus:ring-2 focus:ring-emerald-100"
                >
                  <option value="" disabled>Select a product</option>
                  <option>Custom Sofa</option>
                  <option>L-Shape Sofa</option>
                  <option>Sofa Cum Bed</option>
                  <option>3-Seater Sofa</option>
                  <option>Dining Table</option>
                  <option>Recliner</option>
                  <option>Bed</option>
                  <option>Not sure yet</option>
                </select>
              </div>

              {error && (
                <p className="rounded-xl bg-red-50 px-4 py-2.5 text-xs font-medium text-red-600">
                  {error}
                </p>
              )}

              <button
                type="submit"
                disabled={loading}
                className="mt-1 inline-flex w-full items-center justify-center gap-2 rounded-xl bg-emerald-600 py-3.5 text-sm font-bold text-white hover:bg-emerald-500 disabled:opacity-60 transition-colors"
              >
                {loading ? (
                  "Sending..."
                ) : (
                  <>
                    <FaWhatsapp className="text-base" />
                    Get my free quote
                  </>
                )}
              </button>

              <p className="text-center text-[10px] text-slate-400">
                🔒 Your number is only used to send your sofa quote. We never share it.
              </p>
            </form>
          </div>
        )}
      </div>
    </>
  );
}

/*
================================================================================
SETUP INSTRUCTIONS
================================================================================

STEP 1 — Formspree (email notifications)
─────────────────────────────────────────
1. Go to https://formspree.io and create a free account
2. Click "New Form" → name it "PDD Website Leads"
3. Copy the endpoint URL (looks like https://formspree.io/f/abcdefgh)
4. Paste it into FORMSPREE_ENDPOINT at the top of this file
5. Formspree will email every submission to your registered email

STEP 2 — Google Sheets (spreadsheet backup)
─────────────────────────────────────────────
1. Create a new Google Sheet at sheets.google.com
2. Name the columns in Row 1: timestamp | name | phone | interest | source
3. Go to Extensions → Apps Script
4. Delete existing code and paste this:

function doPost(e) {
  const sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
  const data = JSON.parse(e.postData.contents);
  sheet.appendRow([
    data.timestamp,
    data.name,
    data.phone,
    data.interest,
    data.source,
  ]);
  return ContentService
    .createTextOutput(JSON.stringify({ status: "ok" }))
    .setMimeType(ContentService.MimeType.JSON);
}

5. Click Deploy → New deployment → Type: Web app
6. Execute as: Me | Who has access: Anyone
7. Click Deploy → copy the Web App URL
8. Paste it into SHEETS_ENDPOINT at the top of this file

STEP 3 — Add popup to your layout
───────────────────────────────────
In app/layout.tsx, import and add <LeadPopup /> just before </body>:

import LeadPopup from "@/components/LeadPopup";

export default function RootLayout({ children }) {
  return (
    <html>
      <body>
        {children}
        <LeadPopup />
      </body>
    </html>
  );
}

================================================================================
*/
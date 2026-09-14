"use client";

import { useState } from "react";

export default function ContactForm() {
  const [status, setStatus] = useState("idle");

  function handleSubmit(e) {
    e.preventDefault();
    // Wire this up to your form backend of choice (Formspree, Resend, etc).
    setStatus("sent");
  }

  if (status === "sent") {
    return (
      <p className="font-body text-ink/75">
        Thank you — we&rsquo;ve received your note and will reply within two
        business days.
      </p>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="grid gap-6 sm:grid-cols-2">
      <label className="sm:col-span-1">
        <span className="font-body text-sm text-ink/60">Name</span>
        <input
          required
          name="name"
          type="text"
          className="mt-2 w-full border-0 border-b border-line bg-transparent py-2 font-body text-ink outline-none focus:border-brick"
        />
      </label>
      <label className="sm:col-span-1">
        <span className="font-body text-sm text-ink/60">Email</span>
        <input
          required
          name="email"
          type="email"
          className="mt-2 w-full border-0 border-b border-line bg-transparent py-2 font-body text-ink outline-none focus:border-brick"
        />
      </label>
      <label className="sm:col-span-2">
        <span className="font-body text-sm text-ink/60">Message</span>
        <textarea
          required
          name="message"
          rows={4}
          className="mt-2 w-full border-0 border-b border-line bg-transparent py-2 font-body text-ink outline-none focus:border-brick"
        />
      </label>
      <div className="sm:col-span-2">
        <button
          type="submit"
          className="border border-ink px-6 py-3 font-body text-sm text-ink transition-colors hover:bg-ink hover:text-parchment"
        >
          Send message
        </button>
      </div>
    </form>
  );
}

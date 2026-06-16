"use client";

import { useActionState } from "react";
import { submitContactForm, ActionResult } from "@/lib/actions";
import { Send } from "lucide-react";

const initialState: ActionResult | null = null;

export default function ContactForm() {
  const [state, formAction, isPending] = useActionState(
    submitContactForm,
    initialState
  );

  return (
    <form action={formAction} className="flex flex-col gap-5">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div className="flex flex-col gap-2">
          <label htmlFor="name" className="text-xs uppercase tracking-[0.2em] text-coffee/60">
            Full Name *
          </label>
          <input
            id="name"
            name="name"
            type="text"
            required
            className="bg-transparent border border-coffee/20 px-4 py-3 text-sm focus:outline-none focus:border-palm transition-colors"
            placeholder="Jane Doe"
          />
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="email" className="text-xs uppercase tracking-[0.2em] text-coffee/60">
            Email *
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            className="bg-transparent border border-coffee/20 px-4 py-3 text-sm focus:outline-none focus:border-palm transition-colors"
            placeholder="jane@example.com"
          />
        </div>
      </div>

      <div className="flex flex-col gap-2">
        <label htmlFor="phone" className="text-xs uppercase tracking-[0.2em] text-coffee/60">
          Phone Number
        </label>
        <input
          id="phone"
          name="phone"
          type="tel"
          className="bg-transparent border border-coffee/20 px-4 py-3 text-sm focus:outline-none focus:border-palm transition-colors"
          placeholder="+1 (555) 000-0000"
        />
      </div>

      <div className="flex flex-col gap-2">
        <label htmlFor="message" className="text-xs uppercase tracking-[0.2em] text-coffee/60">
          Message *
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={5}
          className="bg-transparent border border-coffee/20 px-4 py-3 text-sm focus:outline-none focus:border-palm transition-colors resize-none"
          placeholder="Tell us how we can help..."
        />
      </div>

      <button
        type="submit"
        disabled={isPending}
        className="self-start inline-flex items-center gap-2 bg-coffee text-porcelain px-8 py-4 text-xs uppercase tracking-[0.25em] hover:bg-walnut transition-colors duration-300 disabled:opacity-60 cursor-pointer"
      >
        {isPending ? "Sending..." : "Send Message"}
        <Send size={16} strokeWidth={1.5} />
      </button>

      {state && (
        <p
          className={`text-sm mt-2 ${
            state.success ? "text-palm" : "text-walnut"
          }`}
        >
          {state.message}
        </p>
      )}
    </form>
  );
}

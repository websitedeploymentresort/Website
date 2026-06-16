"use client";

import { useActionState } from "react";
import { loginAction } from "./actions";
import { LogIn } from "lucide-react";

export default function LoginForm() {
  const [state, formAction, isPending] = useActionState(loginAction, null);

  return (
    <form action={formAction} className="flex flex-col gap-5">
      <div className="flex flex-col gap-2">
        <label htmlFor="email" className="text-xs uppercase tracking-[0.2em] text-porcelain/60">
          Email
        </label>
        <input
          id="email"
          name="email"
          type="email"
          required
          className="bg-transparent border border-porcelain/20 px-4 py-3 text-sm text-porcelain focus:outline-none focus:border-vanilla transition-colors placeholder:text-porcelain/30"
          placeholder="you@example.com"
        />
      </div>
      <div className="flex flex-col gap-2">
        <label htmlFor="password" className="text-xs uppercase tracking-[0.2em] text-porcelain/60">
          Password
        </label>
        <input
          id="password"
          name="password"
          type="password"
          required
          className="bg-transparent border border-porcelain/20 px-4 py-3 text-sm text-porcelain focus:outline-none focus:border-vanilla transition-colors placeholder:text-porcelain/30"
          placeholder="••••••••"
        />
      </div>

      <button
        type="submit"
        disabled={isPending}
        className="inline-flex items-center justify-center gap-2 bg-vanilla text-coffee px-8 py-4 text-xs uppercase tracking-[0.25em] hover:bg-palm transition-colors duration-300 disabled:opacity-60 cursor-pointer"
      >
        {isPending ? "Signing in..." : "Sign In"}
        <LogIn size={16} strokeWidth={1.5} />
      </button>

      {state?.error && <p className="text-sm text-vanilla">{state.error}</p>}
    </form>
  );
}
